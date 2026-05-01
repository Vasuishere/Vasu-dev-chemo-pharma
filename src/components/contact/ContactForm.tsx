"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import SocialLinksRow from "@/components/SocialLinksRow";
import {
  INSTAGRAM_URL,
  LINKEDIN_URL,
  buildWhatsAppUrl,
} from "@/lib/social-links";

declare global {
  interface Window {
    turnstile?: { reset: (selector?: string) => void };
    onTurnstileSuccess?: (token: string) => void;
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (cb: () => void) => void;
    };
  }
}

const COUNTRIES = [
  { code: "AE", name: "UAE" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "OM", name: "Oman" },
  { code: "QA", name: "Qatar" },
  { code: "KW", name: "Kuwait" },
  { code: "IQ", name: "Iraq" },
  { code: "EG", name: "Egypt" },
  { code: "BR", name: "Brazil" },
  { code: "US", name: "USA" },
  { code: "VN", name: "Vietnam" },
  { code: "TH", name: "Thailand" },
  { code: "IN", name: "India" },
  { code: "---", name: "──────────────", disabled: true },
  { code: "AU", name: "Australia" },
  { code: "CA", name: "Canada" },
  { code: "CN", name: "China" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "GB", name: "United Kingdom" },
  { code: "ID", name: "Indonesia" },
  { code: "IT", name: "Italy" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "MY", name: "Malaysia" },
  { code: "MX", name: "Mexico" },
  { code: "NL", name: "Netherlands" },
  { code: "NG", name: "Nigeria" },
  { code: "PK", name: "Pakistan" },
  { code: "PH", name: "Philippines" },
  { code: "PL", name: "Poland" },
  { code: "RU", name: "Russia" },
  { code: "ES", name: "Spain" },
  { code: "TR", name: "Türkiye" },
  { code: "ZA", name: "South Africa" },
  { code: "OTHER", name: "Other" },
] as const;

const INDUSTRIES = [
  { value: "oil-gas", label: "Oil & Gas" },
  { value: "water-treatment", label: "Water Treatment" },
  { value: "paper-mill", label: "Paper Mill" },
  { value: "metalworking", label: "Metal Working Fluids" },
  { value: "pharma", label: "Pharmaceuticals" },
  { value: "agriculture", label: "Agriculture" },
  { value: "petrochemical", label: "Petrochemical" },
  { value: "textile", label: "Textile" },
  { value: "paint-coatings", label: "Paint & Coatings" },
  { value: "other", label: "Other" },
];

const PRODUCTS = [
  { value: "mea-triazine-78-h2s-scavenger", label: "MEA Triazine 78% H2S Scavenger" },
  { value: "mea-triazine-60", label: "MEA Triazine 60%" },
  { value: "mea-triazine-50", label: "MEA Triazine 50%" },
  { value: "mea-triazine-40", label: "MEA Triazine 40%" },
  { value: "mma-triazine-40", label: "MMA Triazine 40%" },
  { value: "sodium-cumene-sulfonate-40", label: "Sodium Cumene Sulfonate 40%" },
  { value: "sodium-cumene-sulfonate-90", label: "Sodium Cumene Sulfonate 90%" },
  { value: "sodium-xylene-sulfonate-90", label: "Sodium Xylene Sulfonate 90%" },
  { value: "sodium-xylene-sulfonate-40", label: "Sodium Xylene Sulfonate 40%" },
  { value: "p-toluenesulfonic-acid", label: "P-Toluenesulfonic Acid" },
  { value: "2-amino-5-methylthiazole", label: "2-Amino-5-methylthiazole" },
  { value: "2-chloroethylamine-hydrochloride", label: "2-Chloroethylamine Hydrochloride" },
  { value: "bis-2-chloroethyl-amine-hydrochloride", label: "Bis(2-chloroethyl)amine HCl" },
  { value: "di-ethyl-amino-ethyl-chloride-hydrochloride", label: "Di Ethyl Amino Ethyl Chloride HCl" },
  { value: "other", label: "Other / Multiple Products" },
];

const INQUIRY_TYPES = [
  { value: "quote", label: "Request Pricing / Quote" },
  { value: "sample", label: "Request Free Sample" },
  { value: "tds", label: "Request TDS / MSDS" },
  { value: "general", label: "General Inquiry" },
];

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors";
const labelClass = "text-sm text-primary font-medium block mb-2";

export default function ContactForm({ nonce }: { nonce?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formStartedAt] = useState<number>(() => Date.now());

  // Pre-fill product and inquiry type from URL params (?product=slug&type=sample)
  const [defaultProduct, setDefaultProduct] = useState("");
  const [defaultInquiryType, setDefaultInquiryType] = useState("quote");

  useEffect(() => {
    // Old slug → current slug aliases (preserves existing URLs/submissions)
    const SLUG_ALIASES: Record<string, string> = {
      "sodium-xylene-sulphonate-40": "sodium-xylene-sulfonate-40",
      "sodium-xylene-sulphonate-90": "sodium-xylene-sulfonate-90",
      "sodium-cumene-sulphonate-40": "sodium-cumene-sulfonate-40",
      "sodium-cumene-sulphonate-90": "sodium-cumene-sulfonate-90",
    };

    const params = new URLSearchParams(window.location.search);
    let productParam = params.get("product") || "";
    const typeParam = params.get("type") || "";
    if (productParam) {
      productParam = SLUG_ALIASES[productParam] || productParam;
      setDefaultProduct(productParam);
    }
    if (typeParam && INQUIRY_TYPES.some((t) => t.value === typeParam)) {
      setDefaultInquiryType(typeParam);
    }
  }, []);

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const captchaMode = useMemo(() => {
    if (turnstileSiteKey) return "turnstile" as const;
    if (recaptchaSiteKey) return "recaptcha" as const;
    return "none" as const;
  }, [recaptchaSiteKey, turnstileSiteKey]);

  useEffect(() => {
    if (captchaMode !== "turnstile") return;
    window.onTurnstileSuccess = (token: string) => setCaptchaToken(token);
    return () => { window.onTurnstileSuccess = undefined; };
  }, [captchaMode]);

  async function getRecaptchaToken(): Promise<string> {
    if (captchaMode !== "recaptcha") return "";
    if (!window.grecaptcha || !recaptchaSiteKey) {
      throw new Error("reCAPTCHA is not ready. Please try again.");
    }
    return window.grecaptcha.execute(recaptchaSiteKey, { action: "contact_form" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      if (captchaMode === "turnstile" && !captchaToken) {
        throw new Error("Please complete the CAPTCHA check.");
      }

      const providerToken =
        captchaMode === "turnstile" ? captchaToken : await getRecaptchaToken();

      const payload = {
        firstName:    String(formData.get("firstName")   || "").trim(),
        lastName:     String(formData.get("lastName")    || "").trim(),
        email:        String(formData.get("email")       || "").trim(),
        phone:        String(formData.get("phone")       || "").trim(),
        companyName:  String(formData.get("companyName") || "").trim(),
        country:      String(formData.get("country")     || "").trim(),
        industry:     String(formData.get("industry")    || "").trim(),
        product:      String(formData.get("product")     || "").trim(),
        quantity:     String(formData.get("quantity")    || "").trim(),
        inquiryType:  String(formData.get("inquiryType") || "").trim(),
        message:      String(formData.get("message")     || "").trim(),
        website:      String(formData.get("website")     || "").trim(), // honeypot
        captchaToken: providerToken,
        formStartedAt,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || "Failed to submit. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setCaptchaToken("");
    } catch (submitError: unknown) {
      if (captchaMode === "turnstile") window.turnstile?.reset();
      setCaptchaToken("");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Failed to submit form. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      {captchaMode === "turnstile" && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer nonce={nonce} />
      )}
      {captchaMode === "recaptcha" && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
          nonce={nonce}
        />
      )}

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-h3 font-semibold text-primary mb-2">Inquiry Sent!</h3>
          <p className="text-secondary">
            Thank you. Our team will respond within 24 hours.
            <br />
            For urgent requirements, reach us on WhatsApp directly.
          </p>
          <SocialLinksRow
            links={[
              {
                label: "WhatsApp",
                href: buildWhatsAppUrl(
                  "Hello, I just submitted an inquiry on your website and would like to follow up on WhatsApp."
                ),
              },
              { label: "LinkedIn", href: LINKEDIN_URL },
              { label: "Instagram", href: INSTAGRAM_URL },
            ]}
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
            itemClassName="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary transition-colors hover:border-accent hover:text-accent"
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* ── Honeypot (hidden from real users) ─────────── */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <input type="hidden" name="formStartedAt" value={String(formStartedAt)} />

          {/* ── Row 1: Name ────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className={labelClass}>First Name*</label>
              <input id="firstName" name="firstName" type="text" required
                placeholder="First name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>Last Name*</label>
              <input id="lastName" name="lastName" type="text" required
                placeholder="Last name" className={inputClass} />
            </div>
          </div>

          {/* ── Row 2: Company + Country ────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="companyName" className={labelClass}>Company Name*</label>
              <input id="companyName" name="companyName" type="text" required
                placeholder="Your company name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="country" className={labelClass}>Country*</label>
              <select id="country" name="country" required defaultValue=""
                className={inputClass}>
                <option value="" disabled>Select your country</option>
                {COUNTRIES.map((c) =>
                  "disabled" in c && c.disabled ? (
                    <option key={c.code} value={c.code} disabled>{c.name}</option>
                  ) : (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  )
                )}
              </select>
            </div>
          </div>

          {/* ── Row 3: Email + Phone ────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className={labelClass}>Work Email*</label>
              <input id="email" name="email" type="email" required
                placeholder="you@company.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone / WhatsApp*</label>
              <input id="phone" name="phone" type="tel" required
                placeholder="+1 555 000 0000" className={inputClass} />
            </div>
          </div>

          {/* ── Row 4: Product + Quantity ───────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="product" className={labelClass}>Product Interested In*</label>
              <select id="product" name="product" required
                key={defaultProduct}
                defaultValue={defaultProduct}
                className={inputClass}>
                <option value="" disabled>Select a product</option>
                {PRODUCTS.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity" className={labelClass}>Quantity Needed</label>
              <input id="quantity" name="quantity" type="text"
                placeholder="e.g. 1 MT, 5000 Kg" className={inputClass} />
            </div>
          </div>

          {/* ── Row 5: Industry ─────────────────────────────── */}
          <div>
            <label htmlFor="industry" className={labelClass}>Your Industry</label>
            <select id="industry" name="industry" defaultValue="" className={inputClass}>
              <option value="">Select your industry (optional)</option>
              {INDUSTRIES.map((i) => (
                <option key={i.value} value={i.value}>{i.label}</option>
              ))}
            </select>
          </div>

          {/* ── Row 6: Inquiry Type ──────────────────────────── */}
          <div>
            <p className={labelClass}>Type of Inquiry*</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {INQUIRY_TYPES.map((t) => (
                <label key={t.value}
                  className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-xl px-3 py-2.5 text-sm hover:border-accent transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent/5">
                  <input
                    type="radio"
                    name="inquiryType"
                    value={t.value}
                    key={`${t.value}-${defaultInquiryType}`}
                    defaultChecked={t.value === defaultInquiryType}
                    className="accent-accent"
                  />
                  {t.label}
                </label>
              ))}
            </div>
          </div>

          {/* ── Row 7: Message ───────────────────────────────── */}
          <div>
            <label htmlFor="message" className={labelClass}>Message</label>
            <textarea id="message" name="message" rows={4}
              placeholder="Tell us more about your requirement — grade, purity, delivery port, application..."
              className={`${inputClass} resize-none`} />
          </div>

          {/* ── CAPTCHA ──────────────────────────────────────── */}
          {captchaMode === "turnstile" && (
            <div className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-callback="onTurnstileSuccess" />
          )}

          <button type="submit" disabled={submitting}
            className="w-full bg-accent hover:bg-accent-dark transition-colors text-white py-3.5 rounded-xl font-medium text-sm disabled:opacity-60">
            {submitting ? "Sending..." : "Send Inquiry →"}
          </button>

          <SocialLinksRow
            links={[
              {
                label: "WhatsApp",
                href: buildWhatsAppUrl("Hello, I would like to discuss my inquiry on WhatsApp."),
              },
              { label: "LinkedIn", href: LINKEDIN_URL },
              { label: "Instagram", href: INSTAGRAM_URL },
            ]}
            className="flex flex-wrap items-center gap-3"
            itemClassName="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary transition-colors hover:border-accent hover:text-accent"
            iconClassName="h-[18px] w-[18px]"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      )}
    </div>
  );
}
