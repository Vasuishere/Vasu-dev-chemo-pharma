"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/product" },
  { label: "Industries", href: "/industries/oil-gas-h2s-scavenger" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
        setMobileOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4 lg:px-10 relative">
        {/* Logo - Left */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <Image
            src="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png"
            alt="VCP Logo"
            width={50}
            height={50}
            unoptimized
            className="h-11 w-auto"
          />
          <Image
            src="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_Name.png"
            alt="Vasudev Chemo Pharma"
            width={220}
            height={50}
            unoptimized
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav - Center */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-6 py-3 rounded-full"
        >
          <span>Get a quote</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-4 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            <span>Get a quote</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
