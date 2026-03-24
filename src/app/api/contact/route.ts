import { NextResponse } from 'next/server';
import {
  createCorsPreflightResponse,
  checkWriteRateLimit,
  getClientIp,
  readJsonWithLimit,
  tooManyRequestsResponse,
  validateCorsOrigin,
  withCorsHeaders,
} from '@/lib/api-security';
import {
  checkContactDedup,
  enforceMinFormFillTime,
  validateEmailAndDomain,
  verifyCaptcha,
} from '@/lib/form-security';
import { logApiError, logApiEvent } from '@/lib/observability';
import { sendInquiryEmail } from '@/lib/email';

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  // new B2B fields
  companyName?: string;
  country?: string;
  industry?: string;
  product?: string;
  quantity?: string;
  inquiryType?: string;
  message?: string;
  // honeypot (hidden field — bots fill it, humans don't)
  website?: string;
  captchaToken?: string;
  formStartedAt?: number;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_MAX_BODY_BYTES = 32 * 1024;

function normalize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

async function createAnonymizedId(email: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(email.toLowerCase()));
  const bytes = new Uint8Array(digest);
  return Array.from(bytes)
    .slice(0, 6)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function json(body: unknown, init: ResponseInit, req: Request): NextResponse {
  return withCorsHeaders(NextResponse.json(body, init), req);
}

export async function OPTIONS(req: Request) {
  return createCorsPreflightResponse(req, {
    methods: ['POST', 'OPTIONS'],
  });
}

export async function POST(req: Request) {
  const corsError = validateCorsOrigin(req);
  if (corsError) return corsError;

  const rateLimit = checkWriteRateLimit({
    request: req,
    keyPrefix: 'contact-write',
    ipLimit: 12,
    tokenLimit: 40,
    windowMs: 60 * 1000,
  });
  if (!rateLimit.allowed) {
    return withCorsHeaders(tooManyRequestsResponse(rateLimit), req);
  }

  const { data: payload, error: parseError } = await readJsonWithLimit<ContactPayload>(
    req,
    CONTACT_MAX_BODY_BYTES
  );
  if (parseError) return withCorsHeaders(parseError, req);
  if (!payload) return json({ error: 'Request body is required' }, { status: 400 }, req);

  // ── Honeypot check (bots fill the hidden "website" field) ──────────────────
  if (normalize(payload.website)) {
    return json({ success: true }, { status: 202 }, req);
  }

  // ── Normalise all fields ───────────────────────────────────────────────────
  const firstName   = normalize(payload.firstName);
  const lastName    = normalize(payload.lastName);
  const email       = normalize(payload.email);
  const phone       = normalize(payload.phone);
  const companyName = normalize(payload.companyName);
  const country     = normalize(payload.country);
  const industry    = normalize(payload.industry);
  const product     = normalize(payload.product);
  const quantity    = normalize(payload.quantity);
  const inquiryType = normalize(payload.inquiryType) || 'general';
  const message     = normalize(payload.message);
  const captchaToken = normalize(payload.captchaToken);
  const formStartedAt = Number(payload.formStartedAt);

  // ── Required field validation ──────────────────────────────────────────────
  if (!firstName || !lastName || !email || !phone || !companyName || !country) {
    return json(
      { error: 'firstName, lastName, email, phone, companyName, and country are required' },
      { status: 400 },
      req
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return json({ error: 'Invalid email format' }, { status: 400 }, req);
  }

  const emailDomainValidation = validateEmailAndDomain(email);
  if (!emailDomainValidation.valid) {
    return json({ error: emailDomainValidation.reason || 'Invalid email domain' }, { status: 400 }, req);
  }

  // ── Length limits ──────────────────────────────────────────────────────────
  if (
    firstName.length > 80 || lastName.length > 80 ||
    email.length > 200 || phone.length > 40 ||
    companyName.length > 160 || country.length > 80 ||
    industry.length > 80 || product.length > 160 ||
    quantity.length > 80 || inquiryType.length > 80 ||
    message.length > 2000
  ) {
    return json({ error: 'Input exceeds allowed length' }, { status: 400 }, req);
  }

  // ── Bot timing check ───────────────────────────────────────────────────────
  const minFillValidation = enforceMinFormFillTime(formStartedAt);
  if (!minFillValidation.valid) {
    return json({ error: minFillValidation.reason || 'Invalid form timing' }, { status: 400 }, req);
  }

  // ── CAPTCHA ────────────────────────────────────────────────────────────────
  const ip = getClientIp(req);
  const captchaVerification = await verifyCaptcha(captchaToken, ip);
  if (!captchaVerification.valid) {
    return json({ error: captchaVerification.reason || 'CAPTCHA verification failed' }, { status: 400 }, req);
  }

  // ── Dedup ──────────────────────────────────────────────────────────────────
  const dedupCheck = checkContactDedup(email, product, message);
  if (dedupCheck.duplicate) {
    return json(
      { error: 'Duplicate inquiry detected. Please wait before resubmitting.' },
      { status: 409 },
      req
    );
  }

  // ── Send email + log ───────────────────────────────────────────────────────
  try {
    const inquiryId = await createAnonymizedId(email);

    await sendInquiryEmail({
      firstName,
      lastName,
      companyName,
      email,
      phone,
      country,
      industry,
      product,
      quantity,
      inquiryType,
      message,
    });

    logApiEvent('contact.inquiry.received', {
      inquiryId,
      product,
      country,
      inquiryType,
      hasMessage: Boolean(message),
    });

    return json({ success: true }, { status: 202 }, req);
  } catch (error: unknown) {
    logApiError('contact.inquiry.failed', error, { route: '/api/contact' });
    return json(
      { error: 'Internal Server Error', errorCode: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
      req
    );
  }
}
