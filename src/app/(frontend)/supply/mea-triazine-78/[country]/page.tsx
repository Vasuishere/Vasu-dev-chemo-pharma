import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  COUNTRY_PAGES_DATA,
  type CountryPageData,
} from "@/lib/seo/country-pages-data";
import {
  buildAbsoluteUrl,
  buildApplicationPagePath,
  buildComparisonPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
  FEATURED_APPLICATION_SLUGS,
  FEATURED_RESOURCE_SLUGS,
  MEA_TRIAZINE_PRODUCT_PATH,
  normalizeCountrySlug,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";
import { APPLICATION_PAGES_DATA } from "@/lib/seo/application-pages-data";
import { COMPETITOR_PAGES_DATA } from "@/lib/seo/competitor-comparison-data";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";
import { COUNTRY_CLUSTER_MAP } from "@/lib/seo/country-clusters";

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(COUNTRY_PAGES_DATA).map((country) => ({ country }));
}

function getCountryPageData(countrySlug: string): CountryPageData | null {
  return COUNTRY_PAGES_DATA[normalizeCountrySlug(countrySlug)] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country } = await params;
  const page = getCountryPageData(country);

  if (!page) {
    return {};
  }

  const canonicalPath = buildCountryPagePath(page.slug);

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: buildAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: buildAbsoluteUrl(canonicalPath),
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function CountrySupplyPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const page = getCountryPageData(country);

  if (!page) {
    notFound();
  }

  const canonicalPath = buildCountryPagePath(page.slug);
  const featuredComparisons = Object.values(COMPETITOR_PAGES_DATA).filter(
    (comparison) =>
      comparison.markets.some((market) =>
        market.toLowerCase().includes(page.countryName.toLowerCase())
      )
  );
  const comparisonCards =
    featuredComparisons.length > 0
      ? featuredComparisons.slice(0, 3)
      : Object.values(COMPETITOR_PAGES_DATA).slice(0, 3);
  const applicationCards = FEATURED_APPLICATION_SLUGS.slice(0, 3)
    .map((slug) => APPLICATION_PAGES_DATA[slug])
    .filter(Boolean);
  const resourceCards = FEATURED_RESOURCE_SLUGS.slice(0, 3)
    .map((slug) => RESOURCE_ARTICLES_DATA[slug])
    .filter(Boolean);
  const clusterCountries = COUNTRY_CLUSTER_MAP[page.slug] ?? [];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MEA Triazine 78% Supply", url: `${SITE_URL}/supply/mea-triazine-78` },
          { name: page.countryName, url: buildAbsoluteUrl(canonicalPath) },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <SectionLabel>{page.regionLabel}</SectionLabel>
                <div className="mt-4 flex items-start gap-4">
                  <span className="text-4xl" aria-hidden="true">
                    {page.flag}
                  </span>
                  <div>
                    <h1 className="font-heading text-h2 lg:text-display text-primary">
                      {page.h1}
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-secondary">
                      {page.intro}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact?product=mea-triazine-78-h2s-scavenger"
                    className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                  >
                    Request {page.countryName} quote
                  </Link>
                  <Link
                    href={MEA_TRIAZINE_PRODUCT_PATH}
                    className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                  >
                    View product page
                  </Link>
                </div>
                <p className="mt-4 text-sm text-secondary">
                  Learn more{" "}
                  <Link href="/about" className="text-accent underline underline-offset-2 hover:text-accent-dark">
                    about our manufacturing
                  </Link>{" "}
                  or explore{" "}
                  <Link href="/how-h2s-scavengers-work" className="text-accent underline underline-offset-2 hover:text-accent-dark">
                    how H2S scavengers work
                  </Link>.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-light p-6">
                <h2 className="font-heading text-h4 text-primary">Supply snapshot</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-accent">Port</dt>
                    <dd className="mt-1 text-primary">{page.logistics.port}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-accent">Transit</dt>
                    <dd className="mt-1 text-primary">{page.logistics.transitDays}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-accent">Packaging</dt>
                    <dd className="mt-1 text-primary">{page.logistics.packaging}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wide text-accent">Incoterms</dt>
                    <dd className="mt-1 text-primary">{page.logistics.incoterms}</dd>
                  </div>
                </dl>
                <div className="mt-5 space-y-2">
                  <Link
                    href="/resources/mea-triazine-technical-datasheet"
                    className="block rounded-2xl bg-white px-4 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/10"
                  >
                    Download full technical datasheet
                  </Link>
                  <Link
                    href="/resources/mea-triazine-safety-data-sheet"
                    className="block rounded-2xl bg-white px-4 py-3 text-sm font-medium text-accent transition-all hover:bg-accent/10"
                  >
                    View safety data sheet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Import documents</h2>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                {page.importDocs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <Link
                  href="/resources/import-compliance-guide"
                  className="inline-flex items-center text-sm font-medium text-accent hover:underline"
                >
                  View full import compliance guide →
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Local market names</h2>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                {page.localBrandNames.slice(0, 8).map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {(page.localLanguageNames.length > 0 || page.oilfields.length > 0) && (
          <section className="mb-16">
            <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
              {page.localLanguageNames.length > 0 && (
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h2 className="font-heading text-h4 text-primary">Common local-language terms</h2>
                  <ul className="mt-5 space-y-3 text-sm text-secondary">
                    {page.localLanguageNames.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {page.oilfields.length > 0 && (
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h2 className="font-heading text-h4 text-primary">Relevant operations</h2>
                  <ul className="mt-5 space-y-3 text-sm text-secondary">
                    {page.oilfields.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Key internal links — chemistry, comparison, dosing */}
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/industries/oil-gas-h2s-scavenger"
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-md group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  H2S Scavenging in Oil &amp; Gas
                </h3>
                <p className="text-xs text-secondary mt-1">Industry applications</p>
              </Link>
              <Link
                href="/applications/gas-sweetening"
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-md group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Gas Sweetening Solutions
                </h3>
                <p className="text-xs text-secondary mt-1">Process applications</p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-md group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA vs MMA Triazine Comparison
                </h3>
                <p className="text-xs text-secondary mt-1">Detailed comparison</p>
              </Link>
              <Link
                href="/resources/h2s-scavenger-dosing-guide"
                className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-md group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  H2S Scavenger Dosing Guide
                </h3>
                <p className="text-xs text-secondary mt-1">Technical reference</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Also available in — country cluster links */}
        {clusterCountries.length > 0 && (
          <section className="mb-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h4 text-primary mb-4">Also available in</h2>
              <div className="flex flex-wrap gap-3">
                {clusterCountries.map((neighbor) => (
                  <Link
                    key={neighbor.slug}
                    href={buildCountryPagePath(neighbor.slug)}
                    className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-primary transition-all hover:border-accent/40 hover:text-accent"
                  >
                    MEA Triazine 78% Supplier {neighbor.countryName}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Frequently asked questions for {page.countryName}
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 group"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-medium text-primary transition-colors hover:bg-gray-50">
                    {faq.question}
                    <span className="ml-4 text-xl text-accent transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm leading-relaxed text-secondary">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:px-10">
            <div className="rounded-3xl bg-light p-6">
              <h2 className="font-heading text-h4 text-primary">Compare alternatives</h2>
              <div className="mt-5 space-y-3">
                {comparisonCards.map((comparison) => (
                  <Link
                    key={comparison.slug}
                    href={buildComparisonPagePath(comparison.slug)}
                    className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm text-primary transition-all hover:border-accent/40 hover:shadow-md"
                  >
                    {comparison.competitorBrand}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-light p-6">
              <h2 className="font-heading text-h4 text-primary">Use-case guides</h2>
              <div className="mt-5 space-y-3">
                {applicationCards.map((application) => (
                  <Link
                    key={application.slug}
                    href={buildApplicationPagePath(application.slug)}
                    className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm text-primary transition-all hover:border-accent/40 hover:shadow-md"
                  >
                    {application.h1}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-light p-6">
              <h2 className="font-heading text-h4 text-primary">Technical resources</h2>
              <div className="mt-5 space-y-3">
                {resourceCards.map((article) => (
                  <Link
                    key={article.slug}
                    href={buildResourceArticlePath(article.slug)}
                    className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm text-primary transition-all hover:border-accent/40 hover:shadow-md"
                  >
                    {article.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-dark p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 font-semibold text-white mb-4">
                Get a Quote for MEA Triazine 78% in {page.countryName}
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-sm">
                Contact us for CIF pricing to {page.logistics.port}. Direct manufacturer supply with full documentation and technical support.
              </p>
              <Link
                href="/contact?product=mea-triazine-78-h2s-scavenger"
                className="inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Request pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
