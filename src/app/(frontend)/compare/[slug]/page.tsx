import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
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
              <div className="mt-8 flex flex-wrap gap-3">
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
