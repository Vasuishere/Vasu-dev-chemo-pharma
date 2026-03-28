"use client";

import Script from "next/script";
import { useEffect, useState, useRef } from "react";

// Extend the window object to include the Google Translate callback
declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

const languages = [
  { code: "en", label: "English", countryCode: "gb" },
  { code: "ar", label: "العربية", countryCode: "ae" },
  { code: "ru", label: "Русский", countryCode: "ru" },
  { code: "es", label: "Español", countryCode: "es" },
  { code: "fr", label: "Français", countryCode: "fr" },
  { code: "pt", label: "Português", countryCode: "br" },
  { code: "vi", label: "Tiếng Việt", countryCode: "vn" },
  { code: "th", label: "ไทย", countryCode: "th" },
  { code: "zh-CN", label: "中文", countryCode: "cn" },
  { code: "de", label: "Deutsch", countryCode: "de" },
  { code: "it", label: "Italiano", countryCode: "it" },
  { code: "tr", label: "Türkçe", countryCode: "tr" },
  { code: "hi", label: "हिन्दी", countryCode: "in" },
  { code: "ja", label: "日本語", countryCode: "jp" },
  { code: "ko", label: "한국어", countryCode: "kr" },
  { code: "nl", label: "Nederlands", countryCode: "nl" },
  { code: "pl", label: "Polski", countryCode: "pl" },
  { code: "id", label: "Bahasa Indonesia", countryCode: "id" },
  { code: "ms", label: "Bahasa Melayu", countryCode: "my" },
];

export default function GoogleTranslate() {
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);

    if (!document.getElementById("google_translate_element")) {
      const gtDiv = document.createElement("div");
      gtDiv.id = "google_translate_element";
      gtDiv.style.display = "none";
      document.body.appendChild(gtDiv);
    }

    let initialLangCode = "en";
    // Read cookie to check if a language is already selected by Google Translate
    const match = document.cookie.match(/(^|;) ?googtrans=([^;]*)(;|$)/);
    if (match && match[2]) {
      const parts = match[2].split("/");
      initialLangCode = parts[parts.length - 1]; // e.g. "en/es" -> "es"
    } else {
      // Fallback to localStorage if cookie was cleared or expired
      const savedLang = localStorage.getItem("lang");
      if (savedLang) {
        initialLangCode = savedLang;
        document.cookie = `googtrans=/en/${savedLang}; path=/; max-age=31536000`;
      }
    }

    const found = languages.find((l) => l.code === initialLangCode);
    if (found) setCurrentLang(found);

    // Define the initialization function for Google Translate
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map(l => l.code).join(","), 
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (langCode: string) => {
    // 1. Find the hidden google select
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    }

    // 2. Fallback: Update cookies manually and reload if widget didn't catch the event
    // The format of googtrans is /pageLanguage/targetLanguage, max-age 1 year
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}; max-age=31536000`;
    document.cookie = `googtrans=/en/${langCode}; path=/; max-age=31536000`; // also root domain
    localStorage.setItem("lang", langCode);

    setOpen(false);
    const found = languages.find((l) => l.code === langCode);
    if (found) setCurrentLang(found);
    
    // Optional: force reload if the translation didn't apply instantly 
    // Just relying on dispatch event is usually enough but Next.js SPA navigation ruins it sometimes
    setTimeout(() => {
      if (select) { select.dispatchEvent(new Event("change")); }
      else { window.location.reload(); }
    }, 100);
  };

  if (!isClient) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Custom UI Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors py-2 px-3 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-100"
      >
        <img 
          src={`https://flagcdn.com/w20/${currentLang.countryCode}.png`} 
          srcSet={`https://flagcdn.com/w40/${currentLang.countryCode}.png 2x`}
          alt={currentLang.label} 
          className="w-5 shadow-sm rounded-[2px]"
        />
        <span>{currentLang.code.toUpperCase()}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 10 6" fill="none">
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Custom Dropdown Menu */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl py-2 z-50 overflow-hidden transform opacity-100 scale-100 transition-all origin-top-right">
          <div className="px-3 pb-2 mb-2 border-b border-gray-50">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-secondary/60">
              Select Language
            </p>
          </div>
          <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left hover:bg-light ${
                  currentLang.code === lang.code ? "text-accent font-medium bg-accent/5" : "text-primary"
                }`}
              >
                <span className="text-base leading-none flex items-center">
                  <img 
                    src={`https://flagcdn.com/w20/${lang.countryCode}.png`} 
                    srcSet={`https://flagcdn.com/w40/${lang.countryCode}.png 2x`}
                    alt={lang.label} 
                    className="w-5 shadow-sm rounded-[2px]"
                  />
                </span>
                <span>{lang.label}</span>
                {currentLang.code === lang.code && (
                  <svg className="w-4 h-4 ml-auto text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
