import type { ProductImage, ProductVideo } from "@/lib/types";

export type ProductMediaOverride = {
  primaryImageUrl?: string;
  images?: ProductImage[];
  videos?: ProductVideo[];
};

const MMA_TRIAZINE_IMAGE_URL =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Product_Section/MMA_Triazine_Vasudev_Chemo_Pharma.png";

/**
 * Static product media overrides, keyed by product slug.
 *
 * Videos are stored here instead of as a Payload collection field to avoid
 * requiring a Postgres schema migration in production (see payload.config.ts).
 * Image fallbacks here are only used when the CMS product is missing imageUrl.
 */
export const PRODUCT_MEDIA_OVERRIDES: Record<string, ProductMediaOverride> = {
  "mea-triazine-78-h2s-scavenger": {
    videos: [
      {
        src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma.mp4",
        title: "MEA Triazine 78% H2S Scavenger - Product Overview",
        description:
          "Product demonstration and usage information for MEA Triazine 78% H2S Scavenger by Vasudev Chemo Pharma.",
        thumbnail:
          "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma1.jpeg",
        isPrimary: true,
      },
    ],
  },
  "mma-triazine-40": {
    primaryImageUrl: MMA_TRIAZINE_IMAGE_URL,
    images: [
      {
        src: MMA_TRIAZINE_IMAGE_URL,
        alt: "MMA Triazine 40% product packaging by Vasudev Chemo Pharma",
        width: 1200,
        height: 900,
        isPrimary: true,
      },
    ],
    videos: [
      {
        src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MMA%20Triazine/MMA3.mp4",
        title: "MMA Triazine 40% Product Video",
        description:
          "Product video for MMA Triazine 40% by Vasudev Chemo Pharma.",
        thumbnail: MMA_TRIAZINE_IMAGE_URL,
        isPrimary: true,
      },
    ],
  },
};

export function getProductMediaOverride(slug: string): ProductMediaOverride {
  return PRODUCT_MEDIA_OVERRIDES[slug] ?? {};
}

export function getProductVideos(slug: string): ProductVideo[] {
  return PRODUCT_MEDIA_OVERRIDES[slug]?.videos ?? [];
}
