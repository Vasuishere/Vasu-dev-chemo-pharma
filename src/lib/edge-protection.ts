import { NextRequest } from 'next/server';

export type EdgeChallengeContext = {
  ip: string;
  userAgent: string;
  secret: string;
};

function parseCsv(value: string | undefined): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
}

export function parseIpSet(value: string | undefined): Set<string> {
  return new Set(parseCsv(value));
}

export function parseCountrySet(value: string | undefined): Set<string> {
  return new Set(parseCsv(value).map((country) => country.toUpperCase()));
}

export function getEdgeCountry(request: Request): string | null {
  const country = request.headers.get('x-vercel-ip-country')?.trim();
  return country ? country.toUpperCase() : null;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown';
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

export function isSuspiciousPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/contact') ||
    pathname.startsWith('/api/assets/') ||
    pathname.startsWith('/api/seed') ||
    pathname.startsWith('/product/')
  );
}

async function digestHex(algorithm: AlgorithmIdentifier, value: string): Promise<string> {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(value);
  const digest = await crypto.subtle.digest(algorithm, bytes);
  const arr = Array.from(new Uint8Array(digest));
  return arr.map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function timingSafeEqualHex(leftHex: string, rightHex: string): boolean {
  if (!/^[0-9a-f]+$/i.test(leftHex) || !/^[0-9a-f]+$/i.test(rightHex)) {
    return false;
  }

  if (leftHex.length % 2 !== 0 || rightHex.length % 2 !== 0) {
    return false;
  }

  const left = Uint8Array.from(leftHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));
  const right = Uint8Array.from(rightHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)));
  const maxLength = Math.max(left.length, right.length);
  let diff = left.length ^ right.length;

  for (let index = 0; index < maxLength; index += 1) {
    const leftByte = index < left.length ? left[index] : 0;
    const rightByte = index < right.length ? right[index] : 0;
    diff |= leftByte ^ rightByte;
  }

  return diff === 0;
}

export async function createChallengeToken(
  context: EdgeChallengeContext,
  ttlSeconds: number
): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const ipHash = (await digestHex('SHA-256', context.ip)).slice(0, 24);
  const uaHash = (await digestHex('SHA-256', context.userAgent || 'unknown')).slice(0, 24);
  const payload = `${exp}.${ipHash}.${uaHash}`;
  const sig = await hmacHex(context.secret, payload);

  return `${payload}.${sig}`;
}

export async function verifyChallengeToken(
  token: string | undefined,
  context: EdgeChallengeContext
): Promise<boolean> {
  if (!token) {
    return false;
  }

  const segments = token.split('.');
  if (segments.length !== 4) {
    return false;
  }

  const [expRaw, ipHash, uaHash, sig] = segments;
  const exp = Number(expRaw);

  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) {
    return false;
  }

  const expectedIpHash = (await digestHex('SHA-256', context.ip)).slice(0, 24);
  const expectedUaHash = (await digestHex('SHA-256', context.userAgent || 'unknown')).slice(0, 24);

  if (ipHash !== expectedIpHash || uaHash !== expectedUaHash) {
    return false;
  }

  const payload = `${expRaw}.${ipHash}.${uaHash}`;
  const expectedSig = await hmacHex(context.secret, payload);

  return timingSafeEqualHex(expectedSig, sig);
}

export function buildReturnTo(request: NextRequest): string {
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;
  return `${pathname}${search}`;
}
