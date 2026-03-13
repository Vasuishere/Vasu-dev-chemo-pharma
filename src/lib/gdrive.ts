/**
 * Extracts the Google Drive file ID from common share/direct URL formats.
 */
export function extractGoogleDriveFileId(url: string): string | null {
  if (!url) return null;

  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  if (fileMatch?.[1]) return fileMatch[1];

  const idParamMatch = url.match(/[?&]id=([^&]+)/);
  if (idParamMatch?.[1]) return idParamMatch[1];

  return null;
}

/**
 * Returns robust image URL candidates for Google Drive files.
 * Different Drive files may only work with certain endpoints.
 */
export function getGoogleDriveImageCandidates(url: string): string[] {
  const fileId = extractGoogleDriveFileId(url);
  if (!fileId) return [url];

  return [
    // Works for many public images and usually avoids HTML interstitials.
    `https://lh3.googleusercontent.com/d/${fileId}=w2000`,
    // Good fallback for publicly shared files.
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`,
    // Legacy endpoint still works for some files.
    `https://drive.google.com/uc?export=view&id=${fileId}`,
  ];
}

/**
 * Converts a Google Drive URL into an embeddable image URL.
 * Returns the URL unchanged if it's not a Google Drive URL.
 */
export function toGoogleDriveImageUrl(url: string): string {
  return getGoogleDriveImageCandidates(url)[0];
}

/**
 * Converts a Google Drive URL into a direct download URL for documents.
 * Returns the URL unchanged if it's not a Google Drive URL.
 */
export function toGoogleDriveDownloadUrl(url: string): string {
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return url;
  }

  const driveHosts = new Set([
    "drive.google.com",
    "docs.google.com",
    "drive.googleusercontent.com",
  ]);

  if (!driveHosts.has(parsedUrl.hostname)) {
    return url;
  }

  const fileMatch = url.match(/drive\.google\.com\/file\/d\/([^/?#]+)/);
  const idParamMatch = url.match(/[?&]id=([^&]+)/);
  const fileId = fileMatch?.[1] || idParamMatch?.[1] || null;
  if (!fileId) return url;
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

/**
 * Converts a Google Drive URL into a preview URL.
 * This opens the file in Google's viewer instead of downloading directly.
 */
export function toGoogleDrivePreviewUrl(url: string): string {
  const fileId = extractGoogleDriveFileId(url);
  if (!fileId) return url;
  return `https://drive.google.com/file/d/${fileId}/preview`;
}
