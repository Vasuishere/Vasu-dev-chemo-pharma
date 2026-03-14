"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      reset: (selector?: string) => void;
    };
    onTurnstileSuccess?: (token: string) => void;
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      ready: (cb: () => void) => void;
    };
  }
}

export default function ContactForm({ nonce }: { nonce?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formStartedAt] = useState<number>(() => Date.now());

  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const captchaMode = useMemo(() => {
    if (turnstileSiteKey) {
      return "turnstile" as const;
    }

    if (recaptchaSiteKey) {
      return "recaptcha" as const;
    }

    return "none" as const;
  }, [recaptchaSiteKey, turnstileSiteKey]);

  useEffect(() => {
    if (captchaMode !== "turnstile") {
      return;
    }

    window.onTurnstileSuccess = (token: string) => {
      setCaptchaToken(token);
    };

    return () => {
      window.onTurnstileSuccess = undefined;
    };
  }, [captchaMode]);

  async function getRecaptchaToken(): Promise<string> {
    if (captchaMode !== "recaptcha") {
      return "";
    }

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
        captchaMode === "turnstile"
          ? captchaToken
          : await getRecaptchaToken();

      const payload = {
        firstName: String(formData.get("firstName") || "").trim(),
        lastName: String(formData.get("lastName") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        subject: String(formData.get("subject") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        company: String(formData.get("company") || "").trim(),
        captchaToken: providerToken,
        formStartedAt,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || "Failed to submit form. Please try again.");
      }

      setSubmitted(true);
      form.reset();
      setCaptchaToken("");
    } catch (submitError: unknown) {
      if (captchaMode === "turnstile") {
        window.turnstile?.reset();
      }

      setCaptchaToken("");
      const message = submitError instanceof Error
        ? submitError.message
        : "Failed to submit form. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      {captchaMode === "turnstile" ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer nonce={nonce} />
      ) : null}
      {captchaMode === "recaptcha" ? (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
          strategy="afterInteractive"
          nonce={nonce}
        />
      ) : null}
      {submitted ? (
        <div className="text-center py-12">
          <h3 className="font-heading text-h3 font-semibold text-primary mb-2">Thank you!</h3>
          <p className="text-secondary">Your message has been sent. We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <input type="hidden" name="formStartedAt" value={String(formStartedAt)} />
          <div>
            <label htmlFor="firstName" className="text-sm text-primary font-medium block mb-2">
              First name*
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              placeholder="Enter your first name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-sm text-primary font-medium block mb-2">
              Last name*
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder="Enter your last name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm text-primary font-medium block mb-2">
              Work Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your work email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm text-primary font-medium block mb-2">
              Phone*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter your contact number"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="subject" className="text-sm text-primary font-medium block mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Enter topic or subject"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-primary font-medium block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          {captchaMode === "turnstile" ? (
            <div
              className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-callback="onTurnstileSuccess"
            />
          ) : null}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:bg-accent-dark transition-colors"
          >
            {submitting ? "Submitting..." : "Submit details"}
          </button>
          {error ? (
            <p className="text-sm text-red-600">{error}</p>
          ) : null}
        </form>
      )}
    </div>
  );
}
