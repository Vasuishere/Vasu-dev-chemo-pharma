import { getPayload } from "payload";
import config from "@payload-config";

let blogsCollectionUnavailableUntil = 0;

export function isCollectionCurrentlyUnavailable(): boolean {
  return Date.now() < blogsCollectionUnavailableUntil;
}

export function markCollectionUnavailable(ttlMs: number = 300000): void {
  blogsCollectionUnavailableUntil = Date.now() + ttlMs;
}

export function isDriveLink(url: string): boolean {
  return url.includes("drive.google.com") || url.includes("googleusercontent.com");
}

function getDirectDriveLink(url: string): string {
  if (!isDriveLink(url)) return url;
  
  // Extract file ID from various formats
  const match = url.match(/(?:\/d\/|id=)([\w\.-]+)/);
  if (match && match[1]) {
    const fileId = match[1];
    // Using lh3.googleusercontent.com avoids redirects and ORB issues.
    // Use /u/0/d/ format which is more standard.
    return `https://lh3.googleusercontent.com/u/0/d/${fileId}=s0`;
  }
  
  // If it's already a lh3 link but has a different suffix, fix it
  if (url.includes("googleusercontent.com") && url.includes("=")) {
    return url.split("=")[0] + "=s0";
  }

  return url;
}

function isMissingBlogsTableError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const maybeError = error as {
    code?: unknown;
    message?: unknown;
    cause?: unknown;
  };

  if (maybeError.code === "42P01") return true;
  if (
    typeof maybeError.message === "string" &&
    maybeError.message.includes('relation "blogs" does not exist')
  ) {
    return true;
  }

  return isMissingBlogsTableError(maybeError.cause);
}

export async function getBlogImageOverride(slug: string): Promise<string | null> {
  if (isCollectionCurrentlyUnavailable()) return null;

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          equals: slug
        }
      },
      limit: 1,
    });

    if (result.docs.length > 0 && result.docs[0].googleDriveImageUrl) {
      return getDirectDriveLink(result.docs[0].googleDriveImageUrl);
    }
  } catch (error) {
    if (isMissingBlogsTableError(error)) {
      markCollectionUnavailable();
      return null;
    }

    console.error(`Error fetching blog image override for slug ${slug}:`, error);
  }
  return null;
}

export async function getAllBlogImageOverrides(): Promise<Record<string, string>> {
  if (isCollectionCurrentlyUnavailable()) return {};

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: 'blogs',
      limit: 1000,
    });

    if (result.totalDocs > 1000) {
      console.warn(`getAllBlogImageOverrides: totalDocs(${result.totalDocs}) exceeds limit(1000). Some image overrides may be truncated.`);
    }

    const overrides: Record<string, string> = {};
    result.docs.forEach(doc => {
      if (doc.googleDriveImageUrl) {
        overrides[doc.slug] = getDirectDriveLink(doc.googleDriveImageUrl);
      }
    });
    return overrides;
  } catch (error) {
    if (isMissingBlogsTableError(error)) {
      markCollectionUnavailable();
      return {};
    }

    console.error("Error fetching all blog image overrides:", error);
  }
  return {};
}

export async function getAllBlogSlugs(): Promise<
  { slug: string; updatedAt: string }[]
> {
  if (isCollectionCurrentlyUnavailable()) return [];

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "blogs",
      limit: 1000,
      pagination: false,
      select: { slug: true, updatedAt: true },
    });

    return result.docs.flatMap((doc) => {
      if (typeof doc.slug !== "string" || typeof doc.updatedAt !== "string") {
        return [];
      }

      return [{ slug: doc.slug, updatedAt: doc.updatedAt }];
    });
  } catch (error) {
    if (isMissingBlogsTableError(error)) {
      markCollectionUnavailable();
    }

    return [];
  }
}
