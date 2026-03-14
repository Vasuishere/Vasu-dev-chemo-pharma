"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "description", label: "Overview" },
  { id: "specifications", label: "Specifications" },
  { id: "applications", label: "Applications" },
  { id: "safety", label: "Safety & Compliance" },
  { id: "packaging", label: "Packaging & Grades" },
  { id: "certifications", label: "Certifications" },
  { id: "documents", label: "Documents" },
  { id: "faq", label: "FAQ" },
  { id: "quote", label: "Get Quote" },
];

export default function StickyAnchorNav() {
  const [navbarHidden, setNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setNavbarHidden(true);
      } else {
        setNavbarHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky z-40 mb-12 border-b border-gray-200 bg-white/80 backdrop-blur-md shadow-sm transition-[top] duration-300 -mx-6 lg:-mx-10 px-6 lg:px-10 ${
        navbarHidden ? "top-0" : "top-[73px]"
      }`}
    >
      <div className="flex flex-wrap gap-3 py-3 max-w-container mx-auto">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-sm font-medium text-gray-500 hover:text-accent transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
