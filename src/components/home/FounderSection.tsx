"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="relative bg-dark text-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image & Info */}
          <div className="flex items-center gap-6">
            <div className="relative w-48 h-64 lg:w-64 lg:h-80 rounded-2xl overflow-hidden flex-shrink-0">
              <Image
                src="https://framerusercontent.com/images/yZK2vzwKqUH8m15aeLGrA2alok.png"
                alt="Michael R. Bennett, Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white font-medium text-sm">
                Michael R. Bennett
              </p>
              <p className="text-white/60 text-sm">Founder &amp; CEO</p>
            </div>
          </div>

          {/* Right - Quote */}
          <div>
            <p className="text-xl lg:text-2xl leading-relaxed text-white/80">
              Great manufacturing isn&apos;t just about precision — it&apos;s about
              vision, commitment, and the relentless pursuit of excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Play button */}
      <button
        className="absolute top-6 right-6 lg:top-8 lg:right-12 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Play video"
        onClick={() => alert("Video coming soon!")}
      >
        <Image
          src="https://framerusercontent.com/images/WNXX0paABnsscMVEOjqE0OWdU.svg"
          alt="Icon"
          width={12}
          height={14}
        />
      </button>
    </section>
  );
}
