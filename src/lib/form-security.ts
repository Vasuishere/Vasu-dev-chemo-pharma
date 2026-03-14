type FormDedupEntry = {
  expiresAt: number;
};

const DEDUP_STORE_KEY = '__vasudev_contact_dedup_store__';
const DEFAULT_MIN_FILL_MS = 4000;

const COMMON_FREE_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'icloud.com',
  'aol.com',
  'proton.me',
  'protonmail.com',
]);

const KNOWN_DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  'tempmail.com',
  '10minutemail.com',
  'yopmail.com',
  'trashmail.com',
]);

function getDedupStore(): Map<string, FormDedupEntry> {
  const globalScope = globalThis as typeof globalThis & {
    [DEDUP_STORE_KEY]?: Map<string, FormDedupEntry>;
  };

  if (!globalScope[DEDUP_STORE_KEY]) {
    globalScope[DEDUP_STORE_KEY] = new Map<string, FormDedupEntry>();
  }

  return globalScope[DEDUP_STORE_KEY];
}

function normalizeCsvSet(value: string | undefined): Set<string> {
  if (!value) {
    return new Set<string>();
  }

  return new Set(
    value
      .split(',')
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
  );
}

function pruneDedupStore(store: Map<string, FormDedupEntry>, now: number): void {
  for (const [key, entry] of store.entries()) {
    if (entry.expiresAt <= now) {
      store.delete(key);
    }
  }
}

function toDedupKey(email: string, subject: string, message: string): string {
  const normalizedMessage = message.toLowerCase().replace(/\s+/g, ' ').trim();
  const normalizedSubject = subject.toLowerCase().replace(/\s+/g, ' ').trim();
  return `${email.toLowerCase()}|${normalizedSubject}|${normalizedMessage}`;
}

export function validateEmailAndDomain(email: string): { valid: boolean; reason?: string } {
  const lower = email.toLowerCase();
  const parts = lower.split('@');
  if (parts.length !== 2) {
    return { valid: false, reason: 'Invalid email format' };
  }

  const domain = parts[1];
  if (!domain || domain.length < 4 || !domain.includes('.')) {
    return { valid: false, reason: 'Invalid email domain' };
  }

  if (domain.includes('..') || domain.startsWith('.') || domain.endsWith('.')) {
    return { valid: false, reason: 'Invalid email domain' };
  }

  const blockedDomains = normalizeCsvSet(process.env.CONTACT_BLOCKED_EMAIL_DOMAINS);
  const allowFreeDomains = process.env.CONTACT_ALLOW_FREE_EMAIL_DOMAINS === 'true';

  if (blockedDomains.has(domain)) {
    return { valid: false, reason: 'Email domain is not allowed' };
  }

  if (KNOWN_DISPOSABLE_DOMAINS.has(domain)) {
    return { valid: false, reason: 'Disposable email domains are not allowed' };
  }

  if (!allowFreeDomains && COMMON_FREE_EMAIL_DOMAINS.has(domain)) {
    return { valid: false, reason: 'Please use your business email address' };
  }

  return { valid: true };
}

export function enforceMinFormFillTime(formStartedAt: number | undefined): { valid: boolean; reason?: string } {
  if (!formStartedAt || !Number.isFinite(formStartedAt)) {
    return { valid: false, reason: 'Invalid form timing data' };
  }

  const elapsed = Date.now() - formStartedAt;
  const minFillMs = Number(process.env.CONTACT_MIN_FILL_MS || DEFAULT_MIN_FILL_MS);

  if (elapsed < minFillMs) {
    return { valid: false, reason: 'Form submitted too quickly' };
  }

  return { valid: true };
}

export function checkContactDedup(email: string, subject: string, message: string): { duplicate: boolean } {
  const dedupWindowMs = Number(process.env.CONTACT_DEDUP_WINDOW_MS || 10 * 60 * 1000);
  const store = getDedupStore();
  const now = Date.now();

  pruneDedupStore(store, now);

  const key = toDedupKey(email, subject, message);
  const existing = store.get(key);
  if (existing && existing.expiresAt > now) {
    return { duplicate: true };
  }

  store.set(key, { expiresAt: now + dedupWindowMs });
  return { duplicate: false };
}

async function verifyTurnstile(token: string, remoteIp: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return false;
  }

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  body.set('remoteip', remoteIp);

  const controller = new AbortController();
  const timeoutMs = 8000;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      console.warn('Turnstile verification timed out');
      return false;
    }

    return false;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

async function verifyRecaptcha(token: string, remoteIp: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return false;
  }

  const body = new URLSearchParams();
  body.set('secret', secret);
  body.set('response', token);
  body.set('remoteip', remoteIp);

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    return false;
  }

  const data = (await response.json()) as { success?: boolean; score?: number; action?: string };
  if (!data.success) {
    return false;
  }

  // For v3 tokens, enforce a baseline score if it exists.
  if (typeof data.score === 'number' && data.score < 0.5) {
    return false;
  }

  return true;
}

export async function verifyCaptcha(
  token: string | undefined,
  remoteIp: string
): Promise<{ valid: boolean; reason?: string }> {
  if (!token) {
    return { valid: false, reason: 'CAPTCHA token is required' };
  }

  const hasTurnstile = Boolean(process.env.TURNSTILE_SECRET_KEY);
  const hasRecaptcha = Boolean(process.env.RECAPTCHA_SECRET_KEY);

  if (!hasTurnstile && !hasRecaptcha) {
    if (process.env.NODE_ENV === 'production') {
      return { valid: false, reason: 'CAPTCHA is not configured' };
    }

    return { valid: true };
  }

  if (hasTurnstile) {
    const ok = await verifyTurnstile(token, remoteIp);
    return ok ? { valid: true } : { valid: false, reason: 'CAPTCHA verification failed' };
  }

  const ok = await verifyRecaptcha(token, remoteIp);
  return ok ? { valid: true } : { valid: false, reason: 'CAPTCHA verification failed' };
}
