import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, getClientIp } from '@/lib/api-security';
import {
  buildReturnTo,
  getEdgeCountry,
  isSuspiciousPath,
  parseCountrySet,
  parseIpSet,
  verifyChallengeToken,
} from '@/lib/edge-protection';

const KNOWN_GOOD_BOTS = [
  'googlebot',
  'bingbot',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'slurp',
];

const SUSPICIOUS_AGENTS = [
  'sqlmap',
  'nikto',
  'nmap',
  'masscan',
  'zgrab',
  'python-requests',
  'curl/',
  'wget/',
  'go-http-client',
];

const CHALLENGE_COOKIE_NAME = 'edge_challenge_clearance';
const CHALLENGE_ROUTE = '/api/security/challenge';
const EDGE_CHALLENGE_SECRET = process.env.EDGE_CHALLENGE_SECRET;
const BLOCKED_COUNTRIES = parseCountrySet(process.env.EDGE_BLOCK_COUNTRIES);
const BLOCKED_IPS = parseIpSet(process.env.EDGE_BLOCK_IPS);
const ALLOWLIST_IPS = parseIpSet(process.env.EDGE_ALLOWLIST_IPS);

function createNonce(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }

  return btoa(binary);
}

function buildContentSecurityPolicy(nonce: string): string {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    `script-src 'self' 'nonce-${nonce}' https://challenges.cloudflare.com https://www.google.com https://www.gstatic.com`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://drive.google.com https://lh3.googleusercontent.com https://framerusercontent.com",
    "font-src 'self' data:",
    "connect-src 'self' https://challenges.cloudflare.com https://www.google.com",
    "frame-src 'self' https://challenges.cloudflare.com https://www.google.com",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join('; ');
}

function withSecurityHeaders(response: NextResponse, nonce: string): NextResponse {
  response.headers.set('Content-Security-Policy', buildContentSecurityPolicy(nonce));
  response.headers.set('x-nonce', nonce);
  return response;
}

function isKnownGoodBot(userAgent: string): boolean {
  return KNOWN_GOOD_BOTS.some((bot) => userAgent.includes(bot));
}

function isSuspiciousAgent(userAgent: string): boolean {
  return SUSPICIOUS_AGENTS.some((agent) => userAgent.includes(agent));
}

function isProtectedPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname === '/admin' ||
    pathname.startsWith('/admin/') ||
    pathname === '/payload' ||
    pathname.startsWith('/payload/') ||
    pathname.startsWith('/product/')
  );
}

function getRouteLimit(pathname: string): number {
  if (pathname.startsWith('/api/contact')) {
    return 20;
  }

  if (pathname.startsWith('/api/assets/upload') || pathname.startsWith('/api/assets/ingest-drive-link')) {
    return 40;
  }

  if (pathname.startsWith('/api/seed') || pathname.startsWith('/admin') || pathname.startsWith('/payload')) {
    return 30;
  }

  if (pathname.startsWith('/product/')) {
    return 120;
  }

  return 100;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const nonce = createNonce();
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);

  const passThroughResponse = withSecurityHeaders(
    NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    }),
    nonce
  );

  if (!isProtectedPath(pathname)) {
    return passThroughResponse;
  }

  // Avoid challenge recursion for the challenge endpoint itself.
  if (pathname.startsWith(CHALLENGE_ROUTE)) {
    return passThroughResponse;
  }

  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const ip = getClientIp(request);
  const country = getEdgeCountry(request);
  const allowlisted = ALLOWLIST_IPS.has(ip);

  if (!allowlisted) {
    if (BLOCKED_IPS.has(ip)) {
      return withSecurityHeaders(NextResponse.json({ error: 'Forbidden' }, { status: 403 }), nonce);
    }

    if (country && BLOCKED_COUNTRIES.has(country)) {
      return withSecurityHeaders(NextResponse.json({ error: 'Forbidden' }, { status: 403 }), nonce);
    }
  }

  const suspiciousAgent = Boolean(userAgent && !isKnownGoodBot(userAgent) && isSuspiciousAgent(userAgent));

  const rateLimit = checkRateLimit({
    key: `edge:${pathname}:${ip}`,
    limit: getRouteLimit(pathname),
    windowMs: 60 * 1000,
  });

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.max(Math.ceil((rateLimit.resetAt - Date.now()) / 1000), 1);
    return withSecurityHeaders(NextResponse.json(
      { error: 'Too many requests' },
      {
        status: 429,
        headers: {
          'Retry-After': String(retryAfterSeconds),
          'X-RateLimit-Limit': String(rateLimit.limit),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    ), nonce);
  }

  const isChallengePath = isSuspiciousPath(pathname);
  const challengeTriggeredByRate = isChallengePath && rateLimit.remaining <= 5;
  if ((suspiciousAgent || challengeTriggeredByRate) && !allowlisted) {
    if (!EDGE_CHALLENGE_SECRET) {
      return withSecurityHeaders(NextResponse.json({ error: 'Service unavailable' }, { status: 503 }), nonce);
    }

    const clearanceToken = request.cookies.get(CHALLENGE_COOKIE_NAME)?.value;
    const challengePassed = await verifyChallengeToken(clearanceToken, {
      ip,
      userAgent,
      secret: EDGE_CHALLENGE_SECRET,
    });

    if (!challengePassed) {
      const returnTo = encodeURIComponent(buildReturnTo(request));
      const reason = suspiciousAgent ? 'ua' : 'rate';
      const challengeUrl = new URL(`${CHALLENGE_ROUTE}?returnTo=${returnTo}&reason=${reason}`, request.url);
      return withSecurityHeaders(NextResponse.redirect(challengeUrl), nonce);
    }
  }

  const response = passThroughResponse;
  response.headers.set('X-RateLimit-Limit', String(rateLimit.limit));
  response.headers.set('X-RateLimit-Remaining', String(rateLimit.remaining));
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};