import { NextResponse } from 'next/server';

type RateLimitBucket = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  key: string;
  limit: number;
  windowMs: number;
};

type VerifyApiKeyOptions = {
  headerNames?: string[];
};

type WriteRateLimitOptions = {
  request: Request;
  keyPrefix: string;
  ipLimit: number;
  tokenLimit: number;
  windowMs: number;
  tokenHeaderNames?: string[];
};

type JsonParseResult<T> = {
  data: T | null;
  error: NextResponse | null;
};

type ApiErrorCode =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'PAYLOAD_TOO_LARGE'
  | 'UNSUPPORTED_MEDIA_TYPE'
  | 'RATE_LIMITED'
  | 'MALFORMED_JSON'
  | 'MALFORMED_BODY'
  | 'SERVER_MISCONFIGURED'
  | 'INTERNAL_SERVER_ERROR';

type CorsOptions = {
  methods?: string[];
  allowHeaders?: string[];
  maxAgeSeconds?: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  limit: number;
  resetAt: number;
};

const GLOBAL_RATE_LIMIT_STORE_KEY = '__Vasudev_rate_limit_store__';

export function apiErrorResponse(
  message: string,
  status: number,
  errorCode: ApiErrorCode,
  headers?: HeadersInit
): NextResponse {
  return NextResponse.json(
    {
      error: message,
      errorCode,
    },
    {
      status,
      headers,
    }
  );
}

function getAllowedOriginsSet(): Set<string> {
  const raw = process.env.CORS_ALLOWED_ORIGINS || '';
  return new Set(
    raw
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean)
  );
}

function normalizeOrigin(origin: string): string {
  try {
    return new URL(origin).origin;
  } catch {
    return origin;
  }
}

export function getAllowedCorsOrigin(request: Request): string | null {
  const origin = request.headers.get('origin')?.trim();
  if (!origin) {
    return null;
  }

  const normalizedOrigin = normalizeOrigin(origin);
  const allowedOrigins = getAllowedOriginsSet();
  if (allowedOrigins.size === 0) {
    return null;
  }

  return allowedOrigins.has(normalizedOrigin) ? normalizedOrigin : null;
}

export function validateCorsOrigin(request: Request): NextResponse | null {
  const origin = request.headers.get('origin')?.trim();
  if (!origin) {
    return null;
  }

  const allowedOrigin = getAllowedCorsOrigin(request);
  if (allowedOrigin) {
    return null;
  }

  return apiErrorResponse('CORS origin not allowed', 403, 'FORBIDDEN');
}

export function withCorsHeaders(
  response: NextResponse,
  request: Request,
  options?: CorsOptions
): NextResponse {
  const allowedOrigin = getAllowedCorsOrigin(request);
  if (!allowedOrigin) {
    return response;
  }

  const methods = (options?.methods ?? ['POST', 'OPTIONS']).join(',');
  const headers = (options?.allowHeaders ?? ['Content-Type', 'Authorization', 'X-API-Key', 'X-Seed-Key']).join(',');
  const maxAgeSeconds = options?.maxAgeSeconds ?? 600;

  response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  response.headers.set('Access-Control-Allow-Methods', methods);
  response.headers.set('Access-Control-Allow-Headers', headers);
  response.headers.set('Access-Control-Max-Age', String(maxAgeSeconds));
  response.headers.set('Vary', 'Origin');

  return response;
}

export function createCorsPreflightResponse(request: Request, options?: CorsOptions): NextResponse {
  const corsError = validateCorsOrigin(request);
  if (corsError) {
    return corsError;
  }

  const response = new NextResponse(null, { status: 204 });
  return withCorsHeaders(response, request, options);
}

function getRateLimitStore(): Map<string, RateLimitBucket> {
  const globalScope = globalThis as typeof globalThis & {
    [GLOBAL_RATE_LIMIT_STORE_KEY]?: Map<string, RateLimitBucket>;
  };

  if (!globalScope[GLOBAL_RATE_LIMIT_STORE_KEY]) {
    globalScope[GLOBAL_RATE_LIMIT_STORE_KEY] = new Map<string, RateLimitBucket>();
  }

  return globalScope[GLOBAL_RATE_LIMIT_STORE_KEY];
}

function pruneExpiredBuckets(store: Map<string, RateLimitBucket>, now: number): void {
  for (const [bucketKey, bucket] of store.entries()) {
    if (bucket.resetAt <= now) {
      store.delete(bucketKey);
    }
  }
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip')?.trim() || 'unknown';
}

function readBearerToken(request: Request): string | null {
  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return null;
  }

  return authorization.slice('Bearer '.length).trim() || null;
}

function getTokenFromHeaders(request: Request, headerNames: string[]): string | null {
  for (const headerName of headerNames) {
    const value = request.headers.get(headerName)?.trim();
    if (value) {
      return value;
    }
  }

  return readBearerToken(request);
}

function timingSafeEqualStrings(left: string, right: string): boolean {
  const leftBytes = new TextEncoder().encode(left);
  const rightBytes = new TextEncoder().encode(right);
  const maxLength = Math.max(leftBytes.length, rightBytes.length);
  let diff = leftBytes.length ^ rightBytes.length;

  for (let index = 0; index < maxLength; index += 1) {
    const leftByte = index < leftBytes.length ? leftBytes[index] : 0;
    const rightByte = index < rightBytes.length ? rightBytes[index] : 0;
    diff |= leftByte ^ rightByte;
  }

  return diff === 0;
}

export function extractTokenIdentity(
  request: Request,
  headerNames: string[] = ['x-api-key', 'x-seed-key']
): string | null {
  const rawToken = getTokenFromHeaders(request, headerNames);
  if (!rawToken) {
    return null;
  }

  // Keep only a short stable token fingerprint in memory keys.
  const prefix = rawToken.slice(0, 6);
  const suffix = rawToken.slice(-4);
  return `${prefix}:${suffix}:${rawToken.length}`;
}

export function verifyApiKey(
  request: Request,
  expectedApiKey: string | undefined,
  options?: VerifyApiKeyOptions
): NextResponse | null {
  if (!expectedApiKey) {
    return apiErrorResponse('Server misconfiguration', 500, 'SERVER_MISCONFIGURED');
  }

  const headerNames = options?.headerNames ?? ['x-api-key'];
  const suppliedToken = getTokenFromHeaders(request, headerNames);

  if (!suppliedToken || !timingSafeEqualStrings(suppliedToken, expectedApiKey)) {
    return apiErrorResponse('Unauthorized', 401, 'UNAUTHORIZED');
  }

  return null;
}

export function checkWriteRateLimit(options: WriteRateLimitOptions): RateLimitResult {
  const {
    request,
    keyPrefix,
    ipLimit,
    tokenLimit,
    windowMs,
    tokenHeaderNames = ['x-api-key', 'x-seed-key'],
  } = options;

  const ip = getClientIp(request);
  const ipResult = checkRateLimit({
    key: `${keyPrefix}:ip:${ip}`,
    limit: ipLimit,
    windowMs,
  });

  const tokenIdentity = extractTokenIdentity(request, tokenHeaderNames);
  if (!tokenIdentity) {
    return ipResult;
  }

  const tokenResult = checkRateLimit({
    key: `${keyPrefix}:token:${tokenIdentity}`,
    limit: tokenLimit,
    windowMs,
  });

  if (!ipResult.allowed) {
    return ipResult;
  }

  if (!tokenResult.allowed) {
    return tokenResult;
  }

  return ipResult.remaining <= tokenResult.remaining ? ipResult : tokenResult;
}

export function enforceBodySizeLimit(request: Request, maxBytes: number): NextResponse | null {
  const contentLengthHeader = request.headers.get('content-length');
  if (!contentLengthHeader) {
    return null;
  }

  const contentLength = Number(contentLengthHeader);
  if (!Number.isFinite(contentLength)) {
    return apiErrorResponse('Invalid content-length header', 400, 'BAD_REQUEST');
  }

  if (contentLength > maxBytes) {
    return apiErrorResponse('Payload too large', 413, 'PAYLOAD_TOO_LARGE');
  }

  return null;
}

export async function readJsonWithLimit<T>(
  request: Request,
  maxBytes: number
): Promise<JsonParseResult<T>> {
  const bodySizeError = enforceBodySizeLimit(request, maxBytes);
  if (bodySizeError) {
    return { data: null, error: bodySizeError };
  }

  const bodyStream = request.body;
  if (!bodyStream) {
    return {
      data: null,
      error: apiErrorResponse('Request body is required', 400, 'BAD_REQUEST'),
    };
  }

  const reader = bodyStream.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      if (!value) {
        continue;
      }

      totalBytes += value.byteLength;
      if (totalBytes > maxBytes) {
        await reader.cancel();
        return {
          data: null,
          error: apiErrorResponse('Payload too large', 413, 'PAYLOAD_TOO_LARGE'),
        };
      }

      chunks.push(value);
    }
  } catch {
    return {
      data: null,
      error: apiErrorResponse('Malformed request body', 400, 'MALFORMED_BODY'),
    };
  }

  if (totalBytes === 0) {
    return {
      data: null,
      error: apiErrorResponse('Request body is required', 400, 'BAD_REQUEST'),
    };
  }

  const rawBytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    rawBytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  const rawBody = new TextDecoder().decode(rawBytes);
  if (!rawBody.trim()) {
    return {
      data: null,
      error: apiErrorResponse('Request body is required', 400, 'BAD_REQUEST'),
    };
  }

  try {
    return { data: JSON.parse(rawBody) as T, error: null };
  } catch {
    return {
      data: null,
      error: apiErrorResponse('Malformed JSON', 400, 'MALFORMED_JSON'),
    };
  }
}

export function checkRateLimit(options: RateLimitOptions): RateLimitResult {
  const { key, limit, windowMs } = options;
  const store = getRateLimitStore();
  const now = Date.now();

  pruneExpiredBuckets(store, now);

  const existing = store.get(key);
  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    store.set(key, { count: 1, resetAt });

    return {
      allowed: true,
      remaining: limit - 1,
      limit,
      resetAt,
    };
  }

  existing.count += 1;
  store.set(key, existing);

  const allowed = existing.count <= limit;
  const remaining = Math.max(limit - existing.count, 0);

  return {
    allowed,
    remaining,
    limit,
    resetAt: existing.resetAt,
  };
}

export function tooManyRequestsResponse(result: RateLimitResult): NextResponse {
  const retryAfterSeconds = Math.max(Math.ceil((result.resetAt - Date.now()) / 1000), 1);

  return apiErrorResponse('Too many requests', 429, 'RATE_LIMITED', {
    'Retry-After': String(retryAfterSeconds),
    'X-RateLimit-Limit': String(result.limit),
    'X-RateLimit-Remaining': String(result.remaining),
  });
}