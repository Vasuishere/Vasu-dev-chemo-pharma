import { NextRequest, NextResponse } from 'next/server';
import { createChallengeToken, getClientIp } from '@/lib/edge-protection';

const CHALLENGE_COOKIE_NAME = 'edge_challenge_clearance';
const CHALLENGE_TTL_SECONDS = 20 * 60;

function resolveSecret(): string {
  const secret = process.env.EDGE_CHALLENGE_SECRET;
  if (!secret) {
    throw new Error('EDGE_CHALLENGE_SECRET is not configured');
  }

  return secret;
}

function normalizeReturnTo(returnTo: string | null): string {
  if (!returnTo) {
    return '/';
  }

  const decoded = decodeURIComponent(returnTo);
  if (decoded.includes('\\') || decoded.startsWith('/\\')) {
    return '/';
  }

  if (!decoded.startsWith('/')) {
    return '/';
  }

  if (decoded.replace(/\\/g, '/').startsWith('//')) {
    return '/';
  }

  if (decoded.startsWith('//')) {
    return '/';
  }

  return decoded;
}

function challengeHtml(returnTo: string, nonce: string | undefined): string {
  const serializedReturnTo = JSON.stringify(returnTo)
    .replace(/<\//g, '<\\/')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  const nonceAttr = nonce ? ` nonce="${nonce}"` : '';

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Security Check</title>
    <style>
      body { font-family: system-ui, sans-serif; background: #f7f8fa; color: #111827; margin: 0; }
      .wrap { min-height: 100vh; display: grid; place-items: center; padding: 24px; }
      .card { max-width: 520px; width: 100%; background: #fff; border-radius: 12px; border: 1px solid #e5e7eb; padding: 24px; box-shadow: 0 8px 24px rgba(17,24,39,0.08); }
      h1 { font-size: 1.2rem; margin: 0 0 8px; }
      p { margin: 0 0 16px; line-height: 1.5; color: #374151; }
      button { background: #111827; color: #fff; border: 0; padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; }
      button[disabled] { opacity: 0.65; cursor: wait; }
      .muted { margin-top: 12px; color: #6b7280; font-size: 0.9rem; }
    </style>
  </head>
  <body>
    <main class="wrap">
      <section class="card">
        <h1>Quick Security Check</h1>
        <p>We detected unusual traffic patterns on this path. Complete this one-time check to continue.</p>
        <button id="continueBtn" disabled>Preparing check...</button>
        <p class="muted">This check is only shown on suspicious requests, not for all visitors.</p>
      </section>
    </main>
    <script${nonceAttr}>
      const returnTo = ${serializedReturnTo};
      const button = document.getElementById('continueBtn');

      setTimeout(() => {
        button.disabled = false;
        button.textContent = 'Continue to site';
      }, 1200);

      button.addEventListener('click', async () => {
        button.disabled = true;
        button.textContent = 'Verifying...';

        try {
          const res = await fetch('/api/security/challenge', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Edge-JS-Challenge': '1',
            },
            body: JSON.stringify({ returnTo }),
          });

          if (!res.ok) {
            throw new Error('Challenge failed');
          }

          const data = await res.json();
          window.location.href = data.redirectTo || returnTo;
        } catch {
          button.disabled = false;
          button.textContent = 'Retry security check';
        }
      });
    </script>
  </body>
</html>`;
}

export async function GET(request: NextRequest) {
  const returnTo = normalizeReturnTo(request.nextUrl.searchParams.get('returnTo'));
  const nonce = request.headers.get('x-nonce') || undefined;

  return new NextResponse(challengeHtml(returnTo, nonce), {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST(request: NextRequest) {
  const jsHeader = request.headers.get('x-edge-js-challenge');
  if (jsHeader !== '1') {
    return NextResponse.json({ error: 'Challenge header missing' }, { status: 400 });
  }

  let body: { returnTo?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Malformed JSON' }, { status: 400 });
  }

  const returnTo = normalizeReturnTo(body.returnTo || '/');
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
  const ip = getClientIp(request);
  let secret: string;
  try {
    secret = resolveSecret();
  } catch {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
  }

  const token = await createChallengeToken(
    {
      ip,
      userAgent,
      secret,
    },
    CHALLENGE_TTL_SECONDS
  );

  const response = NextResponse.json({ ok: true, redirectTo: returnTo }, { status: 200 });
  response.cookies.set(CHALLENGE_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: CHALLENGE_TTL_SECONDS,
  });

  response.headers.set('Cache-Control', 'no-store');
  return response;
}
