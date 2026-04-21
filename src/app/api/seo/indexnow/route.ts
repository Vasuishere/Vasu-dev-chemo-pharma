import { NextResponse } from "next/server";
import { submitUrlsToIndexNow } from "@/lib/seo/indexnow";

export const dynamic = "force-dynamic";

const SITE_URL = "https://www.vasudevchemopharma.com";

type IndexNowRequestBody = {
  urls?: string[];
  all?: boolean;
};

function unauthorized(): NextResponse {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function isAuthorized(request: Request): boolean {
  const token = process.env.INDEXNOW_SUBMIT_TOKEN;
  if (!token) return false;
  const header = request.headers.get("authorization") || "";
  const expected = `Bearer ${token}`;
  return header === expected;
}

async function loadSitemapUrls(): Promise<string[]> {
  const response = await fetch(`${SITE_URL}/sitemap.xml`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap: ${response.status}`);
  }
  const xml = await response.text();
  const matches = xml.match(/<loc>([^<]+)<\/loc>/g) ?? [];
  return matches
    .map((match) => match.replace(/<\/?loc>/g, "").trim())
    .filter((url) => url.length > 0);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return unauthorized();
  }

  let body: IndexNowRequestBody = {};
  try {
    body = (await request.json()) as IndexNowRequestBody;
  } catch {
    body = {};
  }

  let urls: string[] = [];
  if (body.all) {
    try {
      urls = await loadSitemapUrls();
    } catch (err) {
      return NextResponse.json(
        {
          error: "Failed to load sitemap",
          details: err instanceof Error ? err.message : String(err),
        },
        { status: 502 }
      );
    }
  } else if (Array.isArray(body.urls) && body.urls.length > 0) {
    urls = body.urls;
  } else {
    return NextResponse.json(
      { error: "Provide `urls` array or set `all: true`" },
      { status: 400 }
    );
  }

  const result = await submitUrlsToIndexNow(urls);

  return NextResponse.json(result, {
    status: result.ok ? 200 : 502,
  });
}

export async function GET() {
  return NextResponse.json({
    protocol: "IndexNow",
    host: "www.vasudevchemopharma.com",
    keyConfigured: Boolean(process.env.INDEXNOW_KEY),
    submitTokenConfigured: Boolean(process.env.INDEXNOW_SUBMIT_TOKEN),
  });
}
