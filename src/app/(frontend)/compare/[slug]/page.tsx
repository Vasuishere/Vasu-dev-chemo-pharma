import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import ComparisonProductSchema from "@/components/seo/ComparisonProductSchema";
import {
  COMPETITOR_PAGES_DATA,
  type CompetitorPageData,
} from "@/lib/seo/competitor-comparison-data";
import {
  buildAbsoluteUrl,
  buildApplicationPagePath,
  buildComparisonPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
  FEATURED_APPLICATION_SLUGS,
  FEATURED_COUNTRY_SLUGS,
  FEATURED_RESOURCE_SLUGS,
  MEA_TRIAZINE_PRODUCT_PATH,
  parseComparisonPageSlug,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";
import { APPLICATION_PAGES_DATA } from "@/lib/seo/application-pages-data";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(COMPETITOR_PAGES_DATA).map((slug) => ({
    slug: `mea-triazine-vs-${slug}`,
  }));
}

function getComparisonPageData(routeSlug: string): CompetitorPageData | null {
  return COMPETITOR_PAGES_DATA[parseComparisonPageSlug(routeSlug)] ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparisonPageData(slug);

  if (!page) {
    return {};
  }

  const canonicalPath = buildComparisonPagePath(page.slug);

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

export default async function ComparisonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getComparisonPageData(slug);

  if (!page) {
    notFound();
  }

  const canonicalPath = buildComparisonPagePath(page.slug);
  const applicationCards = FEATURED_APPLICATION_SLUGS.slice(0, 3)
    .map((applicationSlug) => APPLICATION_PAGES_DATA[applicationSlug])
    .filter(Boolean);
  const countryCards = FEATURED_COUNTRY_SLUGS.slice(0, 3)
    .map((countrySlug) => COUNTRY_PAGES_DATA[countrySlug])
    .filter(Boolean);
  const resourceCards = FEATURED_RESOURCE_SLUGS.slice(0, 3)
    .map((resourceSlug) => RESOURCE_ARTICLES_DATA[resourceSlug])
    .filter(Boolean);

  const otherComparisons = Object.values(COMPETITOR_PAGES_DATA).filter(
    (c) => c.slug !== page.slug
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Compare", url: `${SITE_URL}/compare` },
          { name: page.competitorBrand, url: buildAbsoluteUrl(canonicalPath) },
        ]}
      />
      <FAQSchema items={page.faqs} />
      <ComparisonProductSchema page={page} />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <SectionLabel>{page.competitorOrigin}</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                {page.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                {page.intro}
              </p>
              <p className="mt-3 text-xs text-secondary/60">
                Last reviewed:{" "}
                {new Date(page.lastReviewed).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Request replacement pricing
                </Link>
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  View product page
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto overflow-x-auto px-6 lg:px-10">
            <table className="w-full min-w-[720px] overflow-hidden rounded-3xl border border-gray-200 text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Feature</th>
                  <th className="px-5 py-4 text-left font-semibold">Vasudev MEA Triazine 78%</th>
                  <th className="px-5 py-4 text-left font-semibold">{page.competitorBrand}</th>
                </tr>
              </thead>
              <tbody>
                {page.comparisonRows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-white" : "bg-light"}>
                    <td className="px-5 py-4 font-medium text-primary">{row.feature}</td>
                    <td className="px-5 py-4 text-secondary">{row.vasudev}</td>
                    <td className="px-5 py-4 text-secondary">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex flex-col items-center gap-3 rounded-2xl bg-light p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="text-sm font-medium text-primary">
                Get a free sample to test side-by-side with {page.competitorBrand}
              </p>
              <Link
                href="/contact?product=mea-triazine-78-h2s-scavenger&ref=comparison-sample"
                className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark whitespace-nowrap"
              >
                Request free sample
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Why buyers switch</h2>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                {page.advantages.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Best-fit markets</h2>
              <ul className="mt-5 space-y-3 text-sm text-secondary">
                {page.markets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {page.searchLanguage && (
          <section className="mb-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <div className="max-w-4xl">
                <h2 className="font-heading text-h3 text-primary mb-4">
                  Search Language, Chemical Names, and Buying Terms
                </h2>
                <p className="text-secondary leading-relaxed">
                  {page.searchLanguage.intro}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                <div className="rounded-3xl bg-light p-6">
                  <h3 className="font-heading text-h4 text-primary mb-4">
                    Chemical Name Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {page.searchLanguage.chemicalNames.map((term) => (
                      <span
                        key={term}
                        className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-secondary"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-light p-6">
                  <h3 className="font-heading text-h4 text-primary mb-4">
                    Functional Terms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {page.searchLanguage.functionalTerms.map((term) => (
                      <span
                        key={term}
                        className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-secondary"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl bg-light p-6">
                  <h3 className="font-heading text-h4 text-primary mb-4">
                    Brand Reference Terms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {page.searchLanguage.brandReferences.map((term) => (
                      <span
                        key={term}
                        className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-secondary"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h3 className="font-heading text-h4 text-primary mb-4">
                    Informational Intent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {page.searchLanguage.informationalIntent.map((term) => (
                      <span
                        key={term}
                        className="rounded-full bg-light px-3 py-2 text-sm text-secondary"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                  <h3 className="font-heading text-h4 text-primary mb-4">
                    Buying Intent Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {page.searchLanguage.buyingIntent.map((term) => (
                      <span
                        key={term}
                        className="rounded-full bg-light px-3 py-2 text-sm text-secondary"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-accent/20 bg-accent/5 p-6">
                <h3 className="font-heading text-h4 text-primary mb-3">
                  Procurement Note
                </h3>
                <p className="text-secondary leading-relaxed">
                  {page.searchLanguage.note}
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-6">Frequently asked questions</h2>
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
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-primary p-8 text-center text-white sm:p-10">
              <h2 className="font-heading text-h3">Ready to switch from {page.competitorBrand}?</h2>
              <p className="max-w-2xl text-white/75">
                Get transparent manufacturer pricing with no service bundling or
                long-term contracts. Free samples available for qualification testing.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Request replacement pricing
                </Link>
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View product specs
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Compare with other alternatives
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {otherComparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={buildComparisonPagePath(comp.slug)}
                  className="rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">
                    {comp.competitorOrigin}
                  </span>
                  <p className="mt-1 text-sm font-medium text-primary">
                    vs {comp.competitorBrand}
                  </p>
                  <p className="mt-0.5 text-xs text-secondary">
                    {comp.competitorCompany}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-3 lg:px-10">
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
              <h2 className="font-heading text-h4 text-primary">Market pages</h2>
              <div className="mt-5 space-y-3">
                {countryCards.map((country) => (
                  <Link
                    key={country.slug}
                    href={buildCountryPagePath(country.slug)}
                    className="block rounded-2xl border border-gray-200 bg-white p-4 text-sm text-primary transition-all hover:border-accent/40 hover:shadow-md"
                  >
                    {country.countryName}
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
      </main>
    </>
  );
}
