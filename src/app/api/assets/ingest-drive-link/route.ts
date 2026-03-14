import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import {
  createCorsPreflightResponse,
  checkWriteRateLimit,
  readJsonWithLimit,
  tooManyRequestsResponse,
  validateCorsOrigin,
  verifyApiKey,
  withCorsHeaders,
} from '@/lib/api-security';
import { logApiError, logApiEvent } from '@/lib/observability';

const INGEST_MAX_BODY_BYTES = 16 * 1024;

function json(body: unknown, init: ResponseInit, req: Request): NextResponse {
  return withCorsHeaders(NextResponse.json(body, init), req);
}

export async function OPTIONS(req: Request) {
  return createCorsPreflightResponse(req, {
    methods: ['POST', 'OPTIONS'],
  });
}

// Utility: Extract Google Drive ID from URL
function extractDriveId(url: string) {
  const match = url.match(/(?:file\/d\/|open\?id=|document\/d\/|drive\/folders\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export async function POST(req: Request) {
  const corsError = validateCorsOrigin(req);
  if (corsError) {
    return corsError;
  }

  try {
    const authError = verifyApiKey(req, process.env.ASSET_API_KEY);
    if (authError) {
      return withCorsHeaders(authError, req);
    }

    const rateLimit = checkWriteRateLimit({
      request: req,
      keyPrefix: 'assets-ingest-write',
      ipLimit: 30,
      tokenLimit: 120,
      windowMs: 60 * 1000,
    });

    if (!rateLimit.allowed) {
      return withCorsHeaders(tooManyRequestsResponse(rateLimit), req);
    }

    const { data: body, error: parseError } = await readJsonWithLimit<{
      driveLink?: string;
      referenceSize?: unknown;
    }>(req, INGEST_MAX_BODY_BYTES);

    if (parseError) {
      return withCorsHeaders(parseError, req);
    }

    if (!body) {
      return json({ error: 'Request body is required' }, { status: 400 }, req);
    }

    const { driveLink, referenceSize } = body;

    if (!driveLink) {
      return json({ error: 'driveLink is required' }, { status: 400 }, req);
    }

    if (typeof driveLink !== 'string' || driveLink.length > 500) {
      return json({ error: 'Invalid driveLink value' }, { status: 400 }, req);
    }

    if (
      referenceSize !== undefined &&
      referenceSize !== null &&
      typeof referenceSize !== 'object'
    ) {
      return json({ error: 'Invalid referenceSize value' }, { status: 400 }, req);
    }

    const driveId = extractDriveId(driveLink);
    if (!driveId) {
      return json({ error: 'Invalid Google Drive link format' }, { status: 400 }, req);
    }

    // Keep type as 'other' until real mime detection is done via Drive metadata API.
    const type: 'image' | 'pdf' | 'other' = 'other';

    const payload = await getPayload({ config: configPromise });

    // Assuming we have an 'assets' collection as defined
    const newAsset = await payload.create({
      collection: 'assets',
      data: {
        name: `Drive File - ${driveId.substring(0, 6)}`,
        type,
        driveLink,
        status: 'available', // Skipping 'pending' for MVP since we aren't doing async downloads
        referenceSize: referenceSize || undefined,
        // previewUrl could be generated if we construct the generic Drive thumb URL
        previewUrl: `https://drive.google.com/thumbnail?id=${driveId}&sz=w800`,
      },
    });

    logApiEvent('assets.ingestDriveLink.succeeded', {
      route: '/api/assets/ingest-drive-link',
      assetId: String(newAsset.id),
      driveId,
    });

    return json({ success: true, asset: newAsset }, { status: 201 }, req);
  } catch (error: unknown) {
    logApiError('assets.ingestDriveLink.failed', error, {
      route: '/api/assets/ingest-drive-link',
    });
    return json({ error: 'Internal Server Error', errorCode: 'INTERNAL_SERVER_ERROR' }, { status: 500 }, req);
  }
}
