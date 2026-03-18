import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = 86400;

const POLICY_LAST_UPDATED = new Date("2026-01-15");

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Vasudev Chemo Pharma — how we collect, use, and protect your personal information on our website and services.",
  alternates: {
    canonical: "https://vasudevchemopharma.com/legal/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vasudevchemopharma.com" },
          {
            name: "Privacy Policy",
            url: "https://vasudevchemopharma.com/legal/privacy-policy",
          },
        ]}
      />
      <main>
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h1 className="font-heading text-display font-semibold text-primary">
              Privacy policy
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm text-muted">Last updated:</span>
              <span className="text-sm text-secondary">
                {POLICY_LAST_UPDATED.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="max-w-3xl prose prose-lg">
            <p className="text-secondary leading-relaxed">
              At <strong>Vasudev Chemo Pharma</strong>, we value your trust and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard the data you
              share with us when you interact with our digital platforms,
              services, and chemical products.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Information we collect
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>
                  <strong>Personal information</strong> (e.g., name, email
                  address, phone number) — provided via contact requests or
                  newsletters.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>
                  <strong>Project information</strong> — details you share with
                  us regarding your brand, business, or project requirements.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>
                  <strong>Usage data</strong> — such as IP address, browser type,
                  pages visited, and time spent on the site (collected
                  automatically via cookies or analytics tools).
                </span>
              </li>
            </ul>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              How we use your information
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Respond to your inquiries or project requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Provide and improve our services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Communicate important updates or offers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Analyse website performance and user behaviour</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Ensure legal compliance and prevent misuse</span>
              </li>
            </ul>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Sharing your information
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              We do not sell or trade your personal data. We may share your
              information with:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>
                  Trusted third-party service providers (e.g., hosting,
                  analytics, CRM tools) who assist in operating our business
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>
                  Law enforcement or government agencies if required by law
                </span>
              </li>
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              All third-party services comply with applicable data protection
              laws.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Cookies &amp; tracking technologies
            </h2>
            <p className="text-secondary leading-relaxed">
              Our website uses cookies and similar technologies to enhance user
              experience and gather usage statistics. You can manage or disable
              cookies in your browser settings.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Data security
            </h2>
            <p className="text-secondary leading-relaxed">
              We implement appropriate technical and organizational measures to
              safeguard your personal data from unauthorized access, alteration,
              or disclosure.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Your rights
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Access or update your personal information</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>Withdraw consent or opt-out of communications</span>
              </li>
            </ul>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Third-party links
            </h2>
            <p className="text-secondary leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their content or privacy practices. We encourage
              you to review their privacy policies before sharing any data.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Changes to this policy
            </h2>
            <p className="text-secondary leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated date. We recommend
              checking back periodically to stay informed.
            </p>

            <h2 className="font-heading text-h3 font-semibold text-primary mt-10 mb-4">
              Contact us
            </h2>
            <p className="text-secondary leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your data, please{" "}
              <Link
                href="/contact"
                className="text-accent font-semibold hover:underline"
              >
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
