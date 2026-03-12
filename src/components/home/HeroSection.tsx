import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const VIDEO_OPACITY = 0.75; // Adjust this value (0 to 1) to control video opacity

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-8 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ opacity: VIDEO_OPACITY }}
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
      </video>

      <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
        {/* Top content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 pt-12 lg:pt-20">
          {/* Left - Heading */}
          <div>
            <SectionLabel>ISO 9001:2015 Certified Manufacturer</SectionLabel>
            <h1 className="font-heading text-[clamp(40px,5.5vw,72px)] leading-[1] font-semibold mt-8">
              From raw{" "}
              <span className="text-accent">chemicals</span> to global
              exports
            </h1>
          </div>

          {/* Right - Description */}
          <div className="flex flex-col justify-end">
            <p className="text-sm font-medium text-black tracking-widest uppercase mb-4">
              {"// 8+ YEARS OF EXCELLENCE //"}
            </p>
            <p className="text-black text-base leading-relaxed mb-8">
              VasuDev Chemo Pharma manufactures and exports industrial &amp;
              specialty chemicals for lubricant, oil &amp; gas, and water
              treatment industries — direct from Gujarat, India.
            </p>
            <Button href="/contact">Request a quote</Button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-16 lg:mt-24 text-sm text-secondary">
          <p className="hidden sm:block">Based in: Gujarat, India</p>
          <Link
            href="/#about"
            className="uppercase tracking-[0.2em] text-xs font-medium hover:text-accent transition-colors"
          >
            Scroll down
          </Link>
          <p className="hidden sm:block">Near Kandla, Mundra & Hazira ports</p>
        </div>
      </div>
    </section>
  );
}
