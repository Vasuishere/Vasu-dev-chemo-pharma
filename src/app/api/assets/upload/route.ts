import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

// Fallback upload (Mocking cloud storage for MVP)
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const referenceSizeStr = formData.get('referenceSize') as string;
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Server-side security validations
    const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
    const ALLOWED_MIME_TYPES = [
      'image/jpeg', 'image/png', 'image/webp', 'image/gif', 
      'application/pdf', 'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json({ error: `File exceeds the maximum limit of 10MB` }, { status: 413 });
    }

    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json({ error: `File type ${file.type} is not allowed for security reasons.` }, { status: 415 });
    }

    let referenceSize: unknown;
    if (referenceSizeStr) {
      try {
        referenceSize = JSON.parse(referenceSizeStr);
      } catch {
        return NextResponse.json(
          { error: 'Invalid referenceSize JSON' },
          { status: 400 }
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

    return NextResponse.json({ success: true, asset: newAsset }, { status: 201 });
  } catch (error: unknown) {
    console.error('File Upload Error:', error);
    const message = error instanceof Error ? error.message : 'Internal Server Error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
