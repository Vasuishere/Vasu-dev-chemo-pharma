"use client";

import { useEffect, useMemo, useState } from "react";
import { getGoogleDriveImageCandidates } from "@/lib/gdrive";

type GoogleDriveImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function GoogleDriveImage({
  src,
  alt,
  width,
  height,
  className,
}: GoogleDriveImageProps) {
  const candidates = useMemo(() => getGoogleDriveImageCandidates(src), [src]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [src, candidates.length]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={candidates[index]}
      alt={alt}
      width={width}
      height={height}
      className={className}
      referrerPolicy="no-referrer"
      onError={() => {
        setIndex((current) => (current < candidates.length - 1 ? current + 1 : current));
      }}
    />
  );
}
