import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600;

// IndexNow protocol requires the key to be verifiable at a URL on the same
// host. We serve the key from here so the value can be rotated via env var
// without re-deploying a static file. The corresponding `keyLocation` is
// https://www.vasudevchemopharma.com/api/seo/indexnow-key
export async function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return new NextResponse("IndexNow key not configured", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new NextResponse(key, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
