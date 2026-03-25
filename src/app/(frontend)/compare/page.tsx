import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { COMPETITOR_PAGES_DATA } from "@/lib/seo/competitor-comparison-data";
import {
  buildComparisonPagePath,
  MEA_TRIAZINE_PRODUCT_PATH,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "MEA Triazine 78% Comparison Pages",
  description:
    "Compare Vasudev MEA Triazine 78% against major market alternatives, including Pro3, RXSOL, SULFA-CLEAR, Triasorb, and Chinese supplier offers.",
  alternates: {
    canonical: `${SITE_URL}/compare`,
  },
  openGraph: {
    title: "MEA Triazine 78% Comparison Pages",
    description:
      "Alternative and competitor comparison pages for MEA Triazine 78% buyers.",
    url: `${SITE_URL}/compare`,
    type: "website",
    locale: "en_US",
  },
};

const comparisonPages = Object.values(COMPETITOR_PAGES_DATA);

export default function ComparisonIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Compare", url: `${SITE_URL}/compare` },
        ]}
      />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Alternatives</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                MEA Triazine 78% competitor comparison pages
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                These pages compare direct manufacturer supply from Vasudev
                against branded, distributor-led, and marketplace alternatives
                across the USA, GCC, and Southeast Asia.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-10">
            {comparisonPages.map((page) => (
              <Link
                key={page.slug}
                href={buildComparisonPagePath(page.slug)}
                className="rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <span className="rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {page.competitorOrigin}
                </span>
                <h2 className="font-heading text-h4 text-primary mt-5">
                  {page.competitorBrand}
                </h2>
                <p className="mt-2 text-sm font-medium text-primary/70">
                  {page.competitorCompany}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-primary p-10 text-white">
              <h2 className="font-heading text-h3">Need an additional alternative page?</h2>
              <p className="mt-4 max-w-2xl text-white/75">
                We can add comparison pages for regional brands, distributor
                codes, and customer-specified equivalents.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  View product page
                </Link>
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Ask for a comparison
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
