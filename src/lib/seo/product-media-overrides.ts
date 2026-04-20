import type { ProductVideo } from "@/lib/types";

/**
 * Static product video overrides, keyed by product slug.
 *
 * Videos are stored here instead of as a Payload collection field to avoid
 * requiring a Postgres schema migration in production (see payload.config.ts
 * — `push: shouldPushSchema` is false when NODE_ENV === "production").
 *
 * To add a video for a product: add an entry here keyed by its slug.
 */
export const PRODUCT_VIDEO_OVERRIDES: Record<string, ProductVideo[]> = {
  "mea-triazine-78-h2s-scavenger": [
    {
      src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma.mp4",
      title: "MEA Triazine 78% H2S Scavenger — Product Overview",
      description:
        "Product demonstration and usage information for MEA Triazine 78% H2S Scavenger by Vasudev Chemo Pharma.",
      thumbnail:
        "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma1.jpeg",
      isPrimary: true,
    },
  ],
};

export function getProductVideos(slug: string): ProductVideo[] {
  return PRODUCT_VIDEO_OVERRIDES[slug] ?? [];
}
