"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import GoogleTranslate from "./GoogleTranslate";

/* ── Static nav links (no dropdown) ──────────────────────────────────── */
const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/* ── Dropdown: Products ──────────────────────────────────────────────── */
const productsDropdown = {
  label: "Products",
  sections: [
    {
      heading: "Our Products",
      links: [
        { label: "MEA Triazine 78%", href: "/supply/mea-triazine-78", accent: true },
        { label: "All Products", href: "/product" },
      ],
    },
    {
      heading: "Compare & Learn",
      links: [
        { label: "MEA vs MMA Triazine", href: "/mea-triazine-vs-mma-triazine" },
        { label: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
        { label: "Product Comparisons", href: "/compare" },
        { label: "Resources & Datasheets", href: "/resources" },
      ],
    },
  ],
};

/* ── Dropdown: Industries ────────────────────────────────────────────── */
const industriesDropdown = {
  label: "Industries",
  sections: [
    {
      heading: "Industries We Serve",
      links: [
        { label: "Oil & Gas", href: "/industries/oil-gas-h2s-scavenger" },
        { label: "Water Treatment", href: "/industries/water-treatment" },
        { label: "Metal Working Fluids", href: "/industries/metal-working-fluids" },
        { label: "Paper Mill", href: "/industries/paper-mill" },
      ],
    },
    {
      heading: "Applications",
      links: [
        { label: "Gas Sweetening", href: "/applications/gas-sweetening" },
        { label: "Pipeline H2S Treatment", href: "/applications/pipeline-h2s-treatment" },
        { label: "Biogas H2S Removal", href: "/applications/biogas-h2s-removal" },
        { label: "Case Studies", href: "/case-study" },
      ],
    },
  ],
};

/* ── Dropdown: Supply Regions ────────────────────────────────────────── */
const supplyDropdown = {
  label: "Supply Regions",
  sections: [
    {
      heading: "Middle East & GCC",
      links: [
        { label: "UAE", href: "/supply/mea-triazine-78/uae" },
        { label: "Saudi Arabia", href: "/supply/mea-triazine-78/saudi-arabia" },
        { label: "Qatar", href: "/supply/mea-triazine-78/qatar" },
        { label: "Kuwait", href: "/supply/mea-triazine-78/kuwait" },
        { label: "Oman", href: "/supply/mea-triazine-78/oman" },
        { label: "Iraq", href: "/supply/mea-triazine-78/iraq" },
      ],
    },
    {
      heading: "Asia & Americas",
      links: [
        { label: "United States", href: "/supply/mea-triazine-78/united-states" },
        { label: "Vietnam", href: "/supply/mea-triazine-78/vietnam" },
        { label: "Thailand", href: "/supply/mea-triazine-78/thailand" },
        { label: "Brazil", href: "/supply/mea-triazine-78/brazil" },
        { label: "View All Countries", href: "/supply/mea-triazine-78", accent: true },
      ],
    },
  ],
};

type DropdownData = typeof productsDropdown;

/* ── Chevron icon ────────────────────────────────────────────────────── */
function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Desktop dropdown panel ──────────────────────────────────────────── */
function DesktopDropdown({ data, open }: { data: DropdownData; open: boolean }) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-150 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-6 min-w-[440px]">
        <div className="grid grid-cols-2 gap-8">
          {data.sections.map((section) => (
            <div key={section.heading}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary/60 mb-3">
                {section.heading}
              </p>
              <div className="flex flex-col gap-1">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium rounded-lg px-3 py-2 transition-colors ${
                      "accent" in link && link.accent
                        ? "text-accent hover:bg-accent/5"
                        : "text-primary hover:bg-light hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile accordion section ────────────────────────────────────────── */
function MobileAccordion({
  data,
  open,
  onToggle,
  onNavigate,
}: {
  data: DropdownData;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-3 text-sm font-medium text-primary hover:text-accent transition-colors"
      >
        <span>{data.label}</span>
        <ChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2">
          {data.sections.map((section) => (
            <div key={section.heading} className="mb-3">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-1">
                {section.heading}
              </p>
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-1.5 text-sm ${
                    "accent" in link && link.accent ? "text-accent font-medium" : "text-secondary hover:text-accent"
                  }`}
                  onClick={onNavigate}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Navbar ─────────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
        setMobileOpen(false);
        setActiveDropdown(null);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
        hoverTimeout.current = null;
      }
    };
  }, []);

  const dropdowns: { key: string; data: DropdownData }[] = [
    { key: "products", data: productsDropdown },
    { key: "industries", data: industriesDropdown },
    { key: "supply", data: supplyDropdown },
  ];

  function handleDropdownEnter(key: string) {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(key);
  }

  function handleDropdownLeave() {
    hoverTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  }

  function closeDropdown() {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setActiveDropdown(null);
  }

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileAccordion(null);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4 lg:px-10 relative">
        {/* Logo */}
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {/* Home */}
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
            onMouseEnter={closeDropdown}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
            onMouseEnter={closeDropdown}
          >
            About
          </Link>

          {/* Dropdown triggers */}
          {dropdowns.map(({ key, data }) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(key)}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors py-2">
                <span>{data.label}</span>
                <ChevronDown
                  className={`transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`}
                />
              </button>
              <DesktopDropdown data={data} open={activeDropdown === key} />
            </div>
          ))}

          {/* Blog */}
          <Link
            href="/blog"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
            onMouseEnter={closeDropdown}
          >
            Blog
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="text-sm font-medium text-primary hover:text-accent transition-colors"
            onMouseEnter={closeDropdown}
          >
            Contact
          </Link>
        </div>

        {/* Translation Widget and CTA */}
        <div className="hidden lg:flex items-center gap-4 absolute right-6 lg:right-10">
          <GoogleTranslate />
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-6 py-3 rounded-full"
            onMouseEnter={closeDropdown}
          >
            <span>Get a quote</span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block py-3 text-sm font-medium text-primary hover:text-accent" onClick={closeMobile}>
            Home
          </Link>
          <Link href="/about" className="block py-3 text-sm font-medium text-primary hover:text-accent" onClick={closeMobile}>
            About
          </Link>

          {/* Mobile dropdown accordions */}
          {dropdowns.map(({ key, data }) => (
            <MobileAccordion
              key={key}
              data={data}
              open={mobileAccordion === key}
              onToggle={() => setMobileAccordion(mobileAccordion === key ? null : key)}
              onNavigate={closeMobile}
            />
          ))}

          <Link href="/blog" className="block py-3 text-sm font-medium text-primary hover:text-accent" onClick={closeMobile}>
            Blog
          </Link>
          <Link href="/contact" className="block py-3 text-sm font-medium text-primary hover:text-accent" onClick={closeMobile}>
            Contact
          </Link>
          <div className="mt-2 mb-2">
            <GoogleTranslate />
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full"
            onClick={closeMobile}
          >
            <span>Get a quote</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
