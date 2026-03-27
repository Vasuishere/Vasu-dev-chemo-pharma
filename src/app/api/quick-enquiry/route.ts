import { NextResponse } from 'next/server';
import { sendInquiryEmail } from '@/lib/email';
import { logApiError, logApiEvent } from '@/lib/observability';
import {
  createCorsPreflightResponse,
  checkWriteRateLimit,
  withCorsHeaders,
} from '@/lib/api-security';

type QuickEnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  requirement: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 16 * 1024;

function normalize(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
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
  // Rate limits
  const rateLimit = checkWriteRateLimit({
    request: req,
    keyPrefix: 'quick-enquiry-write',
    ipLimit: 12,
    tokenLimit: 40,
    windowMs: 60 * 1000,
  });
  
  if (!rateLimit.allowed) {
    return json({ error: 'Too many requests' }, { status: 429 }, req);
  }

  try {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) {
        return json({ error: 'Payload too large' }, { status: 413 }, req);
    }
    
    if (!text) {
        return json({ error: 'Request body is required' }, { status: 400 }, req);
    }

    const payload: QuickEnquiryPayload = JSON.parse(text);

    const name = normalize(payload.name);
    const email = normalize(payload.email);
    const phone = normalize(payload.phone);
    const requirement = normalize(payload.requirement);

    if (!name || !email || !phone || !requirement) {
      return json(
        { error: 'Name, email, phone, and requirement are required' },
        { status: 400 },
        req
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return json({ error: 'Invalid email format' }, { status: 400 }, req);
    }

    if (
        name.length > 160 ||
        email.length > 200 ||
        phone.length > 40 ||
        requirement.length > 2000
    ) {
        return json({ error: 'Input exceeds allowed length' }, { status: 400 }, req);
    }

    // Split name into first and last
    const nameParts = name.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '—';

    // Prepare data for the existing sendInquiryEmail function
    const emailData = {
      firstName,
      lastName,
      email,
      phone,
      companyName: 'N/A (Quick Enquiry)',
      country: 'N/A',
      industry: '—',
      product: 'other',
      quantity: '—',
      inquiryType: 'general',
      message: `[QUICK ENQUIRY]:\n${requirement}`,
    };

    await sendInquiryEmail(emailData);

    logApiEvent('quick_enquiry.received', {
      hasMessage: Boolean(requirement),
    });

    return json({ success: true }, { status: 202 }, req);
  } catch (error: any) {
    logApiError('quick_enquiry.failed', error, { route: '/api/quick-enquiry' });
    if (error instanceof SyntaxError) {
        return json({ error: 'Invalid JSON payload' }, { status: 400 }, req);
    }
    return json(
      { error: 'Internal Server Error' },
      { status: 500 },
      req
    );
  }
}
