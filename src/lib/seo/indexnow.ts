/**
 * IndexNow submission helper.
 *
 * IndexNow is a protocol supported by Bing, Yandex, Naver, Seznam, and Yep that
 * lets a site notify search engines immediately when URLs are added / updated /
 * deleted — which dramatically shortens the "Discovered, not indexed" window
 * for fresh content.
 *
 * To activate in production:
 *   1. Set INDEXNOW_KEY env var (32–128 hex chars, e.g. `openssl rand -hex 32`).
 *      The key is served as plain text at /api/seo/indexnow-key — no static
 *      file to deploy.
 *   2. Set INDEXNOW_SUBMIT_TOKEN env var (any random string) to authorize
 *      calls to /api/seo/indexnow.
 *   3. After each deploy (or CMS publish), POST to /api/seo/indexnow with
 *      `Authorization: Bearer $INDEXNOW_SUBMIT_TOKEN` and either a body of
 *      `{ "urls": ["https://..."] }` for specific URLs or `{ "all": true }`
 *      to submit every URL currently in sitemap.xml.
 */

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const HOST = "www.vasudevchemopharma.com";
const KEY_LOCATION = `https://${HOST}/api/seo/indexnow-key`;

type SubmissionResult = {
  ok: boolean;
  status: number;
  submitted: number;
  error?: string;
};

function normalizeUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const path = url.startsWith("/") ? url : `/${url}`;
  return `https://${HOST}${path}`;
}

export async function submitUrlsToIndexNow(
  urls: readonly string[]
): Promise<SubmissionResult> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      error: "INDEXNOW_KEY env var is not set",
    };
  }

  const deduped = Array.from(new Set(urls.map(normalizeUrl))).filter(Boolean);
  if (deduped.length === 0) {
    return { ok: true, status: 200, submitted: 0 };
  }

  // IndexNow limits batches to 10,000 URLs per request.
  const batchSize = 10_000;
  let totalSubmitted = 0;
  let lastStatus = 0;

  for (let i = 0; i < deduped.length; i += batchSize) {
    const batch = deduped.slice(i, i + batchSize);
    const body = {
      host: HOST,
      key,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    try {
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      lastStatus = response.status;
      if (!response.ok) {
        return {
          ok: false,
          status: response.status,
          submitted: totalSubmitted,
          error: `IndexNow returned ${response.status}`,
        };
      }
      totalSubmitted += batch.length;
    } catch (err) {
      return {
        ok: false,
        status: 0,
        submitted: totalSubmitted,
        error: err instanceof Error ? err.message : "Unknown fetch error",
      };
    }
  }

  return { ok: true, status: lastStatus || 200, submitted: totalSubmitted };
}
