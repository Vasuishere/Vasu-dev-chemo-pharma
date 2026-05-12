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
  if (!url.includes("drive.google.com")) return url;
  
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    // Using lh3.googleusercontent.com directly avoids a redirect from drive.google.com,
    // which can sometimes trigger Opaque Response Blocking (ORB) in modern browsers.
    return `https://lh3.googleusercontent.com/d/${match[1]}=w1280`;
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
