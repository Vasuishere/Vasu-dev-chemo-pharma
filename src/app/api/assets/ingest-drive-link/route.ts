import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

// Utility: Extract Google Drive ID from URL
function extractDriveId(url: string) {
  const match = url.match(/(?:file\/d\/|open\?id=|document\/d\/|drive\/folders\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export async function POST(req: Request) {
  try {
    const expectedApiKey = process.env.ASSET_API_KEY;
    if (!expectedApiKey) {
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const headerApiKey = req.headers.get('x-api-key');
    const authorization = req.headers.get('authorization');
    const bearerToken = authorization?.startsWith('Bearer ')
      ? authorization.slice('Bearer '.length)
      : null;

    if (headerApiKey !== expectedApiKey && bearerToken !== expectedApiKey) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let body: { driveLink?: string; referenceSize?: unknown };
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Malformed JSON' }, { status: 400 });
    }

    const { driveLink, referenceSize } = body;

    if (!driveLink) {
      return NextResponse.json({ error: 'driveLink is required' }, { status: 400 });
    }

    const driveId = extractDriveId(driveLink);
    if (!driveId) {
      return NextResponse.json({ error: 'Invalid Google Drive link format' }, { status: 400 });
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

    return NextResponse.json({ success: true, asset: newAsset }, { status: 201 });
  } catch (error: unknown) {
    console.error('Google Drive Ingestion Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
