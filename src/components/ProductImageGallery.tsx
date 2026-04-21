"use client";

import { useMemo, useRef, useState } from "react";
import type { ProductImage, ProductVideo } from "@/lib/types";

type MediaItem =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | {
      kind: "video";
      src: string;
      alt: string;
      thumbnail: string;
    };

type ProductImageGalleryProps = {
  productName: string;
  productLabel?: string;
  primaryImageUrl?: string;
  images: ProductImage[];
  videos?: ProductVideo[];
};

export default function ProductImageGallery({
  productName,
  productLabel,
  primaryImageUrl,
  images,
  videos = [],
}: ProductImageGalleryProps) {
  const altBase = (productLabel || productName || "Product").trim();

  const mediaItems = useMemo<MediaItem[]>(() => {
    const items: MediaItem[] = [];
    const seenImages = new Set<string>();

    const addImage = (
      src: string,
      alt: string | undefined,
      width?: number,
      height?: number,
      positionLabel?: string
    ) => {
      const trimmed = (src || "").trim();
      if (!trimmed || seenImages.has(trimmed)) return;
      seenImages.add(trimmed);
      const trimmedAlt = (alt || "").trim();
      const fallbackAlt = positionLabel
        ? `${altBase} — ${positionLabel}`
        : altBase;
      items.push({
        kind: "image",
        src: trimmed,
        alt: trimmedAlt || fallbackAlt,
        width: width || 800,
        height: height || 600,
      });
    };

    if (primaryImageUrl) {
      addImage(primaryImageUrl, altBase, 800, 600);
    }
    images.forEach((img, idx) => {
      addImage(img.src, img.alt, img.width, img.height, `view ${idx + 1}`);
    });

    const seenVideos = new Set<string>();
    videos.forEach((v, idx) => {
      const src = (v.src || "").trim();
      if (!src || seenVideos.has(src)) return;
      seenVideos.add(src);
      const title = (v.title || "").trim();
      items.push({
        kind: "video",
        src,
        alt: title || `${altBase} product video ${videos.length > 1 ? idx + 1 : ""}`.trim(),
        thumbnail: v.thumbnail || primaryImageUrl || images[0]?.src || "",
      });
    });

    return items;
  }, [images, videos, primaryImageUrl, altBase]);

  const videoCount = useMemo(
    () => mediaItems.filter((m) => m.kind === "video").length,
    [mediaItems]
  );

  const imageCount = useMemo(
    () => mediaItems.filter((m) => m.kind === "image").length,
    [mediaItems]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (mediaItems.length === 0) return null;

  const active = mediaItems[activeIndex] || mediaItems[0];

  return (
    <div className="w-full flex gap-3 sm:gap-4">
      {/* Vertical thumbnail rail */}
      <div
        className="flex flex-col gap-2 sm:gap-3 shrink-0"
        aria-label="Product media previews"
      >
        {mediaItems.map((item, index) => {
          const isActive = index === activeIndex;
          const thumbSrc =
            item.kind === "image" ? item.src : item.thumbnail;
          const isFirstVideo =
            item.kind === "video" &&
            mediaItems.findIndex((m) => m.kind === "video") === index;

          // Compute image-only count and index for accurate aria-label
          const imagesOnly = mediaItems.filter((m) => m.kind === "image");
          const imageIndex = imagesOnly.findIndex((img) => img === item);
          const itemImageCount = imagesOnly.length;

          return (
            <div key={`${item.src}-${index}`} className="flex flex-col items-center">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                  isActive
                    ? "border-accent shadow-sm"
                    : "border-gray-200 hover:border-gray-400"
                }`}
                aria-label={
                  item.kind === "video"
                    ? `Play video ${item.alt}`
                    : `View image ${imageIndex + 1} of ${itemImageCount}`
                }
                aria-current={isActive}
              >
                {thumbSrc ? (
                  <img
                    src={thumbSrc}
                    alt={item.alt}
                    className="h-full w-full object-cover bg-white"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-100" />
                )}

                {item.kind === "video" && (
                  <span
                    className="absolute inset-0 flex items-center justify-center bg-black/30"
                    aria-hidden="true"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/90 shadow">
                      <svg
                        className="w-3 h-3 text-primary ml-0.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                )}
              </button>

              {isFirstVideo && videoCount > 0 && (
                <span className="mt-1 text-[10px] font-semibold tracking-wide text-gray-600">
                  {videoCount} {videoCount === 1 ? "VIDEO" : "VIDEOS"}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Main preview */}
      <div className="flex-1 min-w-0 flex items-center justify-center bg-white rounded-2xl min-h-[320px]">
        {active.kind === "image" ? (
          <img
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            className="max-h-[420px] w-auto max-w-full object-contain rounded-2xl"
          />
        ) : (
          <video
            key={active.src}
            ref={videoRef}
            src={active.src}
            poster={active.thumbnail || undefined}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="max-h-[420px] w-auto max-w-full rounded-2xl bg-black"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}
