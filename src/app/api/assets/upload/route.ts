import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import {
  createCorsPreflightResponse,
  checkWriteRateLimit,
  enforceBodySizeLimit,
  tooManyRequestsResponse,
  validateCorsOrigin,
  verifyApiKey,
  withCorsHeaders,
} from '@/lib/api-security';
import { logApiError, logApiEvent } from '@/lib/observability';

const MAX_UPLOAD_REQUEST_BYTES = 12 * 1024 * 1024;
const MAX_IMAGE_WIDTH = Number(process.env.MAX_UPLOAD_IMAGE_WIDTH || 4096);
const MAX_IMAGE_HEIGHT = Number(process.env.MAX_UPLOAD_IMAGE_HEIGHT || 4096);

function json(body: unknown, init: ResponseInit, req: Request): NextResponse {
  return withCorsHeaders(NextResponse.json(body, init), req);
}

export async function OPTIONS(req: Request) {
  return createCorsPreflightResponse(req, {
    methods: ['POST', 'OPTIONS'],
  });
}

// Fallback upload (Mocking cloud storage for MVP)
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

    const bodySizeError = enforceBodySizeLimit(req, MAX_UPLOAD_REQUEST_BYTES);
    if (bodySizeError) {
      return withCorsHeaders(bodySizeError, req);
    }

    const rateLimit = checkWriteRateLimit({
      request: req,
      keyPrefix: 'assets-upload-write',
      ipLimit: 30,
      tokenLimit: 120,
      windowMs: 60 * 1000,
    });

    if (!rateLimit.allowed) {
      return withCorsHeaders(tooManyRequestsResponse(rateLimit), req);
    }

    const formData = await req.formData();
    const fileEntry = formData.get('file');
    if (!fileEntry || !(fileEntry instanceof File)) {
      return json({ error: 'No file provided' }, { status: 400 }, req);
    }
    const file = fileEntry;

    const referenceSizeEntry = formData.get('referenceSize');
    const referenceSizeStr =
      typeof referenceSizeEntry === 'string'
        ? referenceSizeEntry
        : null;

    // Server-side security validations
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_MIME_TYPES = [
      'image/jpeg', 'image/png', 'image/webp', 'image/gif', 
      'application/pdf', 'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (file.size > MAX_FILE_SIZE) {
      return json({ error: `File exceeds the maximum limit of 10MB` }, { status: 413 }, req);
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return json({ error: `File type ${file.type} is not allowed for security reasons.` }, { status: 415 }, req);
    }

    if (file.type.startsWith('image/')) {
      const imageBuffer = Buffer.from(await file.arrayBuffer());
      const metadata = await sharp(imageBuffer).metadata();
      const width = metadata.width || 0;
      const height = metadata.height || 0;

      if (!width || !height) {
        return json({ error: 'Invalid image dimensions' }, { status: 400 }, req);
      }

      if (width > MAX_IMAGE_WIDTH || height > MAX_IMAGE_HEIGHT) {
        return json(
          {
            error: `Image dimensions exceed allowed limit (${MAX_IMAGE_WIDTH}x${MAX_IMAGE_HEIGHT})`,
          },
          { status: 413 },
          req
        );
      }
    }

    let referenceSize: unknown;
    if (referenceSizeEntry !== null && referenceSizeStr === null) {
      return json({ error: 'Invalid referenceSize value' }, { status: 400 }, req);
    }

    if (referenceSizeStr) {
      try {
        referenceSize = JSON.parse(referenceSizeStr);
      } catch {
        return json(
          { error: 'Invalid referenceSize JSON' },
          { status: 400 },
          req
        );
      }
    }
    
    // In a real application, here you upload the File Buffer to S3 / GCS
    // const buffer = Buffer.from(await file.arrayBuffer());
    // const cloudUrl = await uploadToCloud(buffer, file.name);

    // Mocking a successful upload relative URL
    const mockCloudUrl = `/uploads/${file.name.replace(/\s+/g, '-')}`;

    let type: 'image' | 'pdf' | 'other' = 'other';
    if (file.type.startsWith('image/')) type = 'image';
    else if (file.type === 'application/pdf') type = 'pdf';

    const payload = await getPayload({ config: configPromise });

    const newAsset = await payload.create({
      collection: 'assets',
      data: {
        name: file.name,
        type,
        mimeType: file.type,
        sizeBytes: file.size,
        status: 'available',
        referenceSize,
        previewUrl: type === 'image' ? mockCloudUrl : undefined,
      },
    });

    logApiEvent('assets.upload.succeeded', {
      route: '/api/assets/upload',
      assetId: String(newAsset.id),
      fileType: file.type,
      fileSize: file.size,
    });

    return json({ success: true, asset: newAsset }, { status: 201 }, req);
  } catch (error: unknown) {
    logApiError('assets.upload.failed', error, {
      route: '/api/assets/upload',
    });
    return json({ error: 'Internal Server Error', errorCode: 'INTERNAL_SERVER_ERROR' }, { status: 500 }, req);
  }
}
