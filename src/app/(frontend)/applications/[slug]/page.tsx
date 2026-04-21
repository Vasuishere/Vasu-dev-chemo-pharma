import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  APPLICATION_PAGES_DATA,
  type ApplicationPageData,
} from "@/lib/seo/application-pages-data";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";
import {
  buildAbsoluteUrl,
  buildApplicationPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
  FEATURED_RESOURCE_SLUGS,
  MEA_TRIAZINE_PRODUCT_PATH,
  normalizeCountrySlug,
  resolveSeoHref,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";
import {
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  OILFIELD_H2S_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(APPLICATION_PAGES_DATA).map((slug) => ({ slug }));
}

function getApplicationData(slug: string): ApplicationPageData | null {
  return APPLICATION_PAGES_DATA[slug] ?? null;
}

function getWordCount(page: ApplicationPageData): number {
  const text = [page.intro, ...page.sections.map((section) => section.body)].join(" ");
  return text.trim().split(/\s+/).length;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getApplicationData(slug);

  if (!page) {
    return {};
  }

  const canonicalPath = buildApplicationPagePath(page.slug);

  return {
    title: page.title,
    description: page.description,
    keywords: mergeKeywordClusters(
      H2S_SCAVENGER_CORE,
      MEA_TRIAZINE_KEYWORDS,
      OILFIELD_H2S_KEYWORDS,
      page.keywords
    ),
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

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getApplicationData(slug);

  if (!page) {
    notFound();
  }

  const canonicalPath = buildApplicationPagePath(page.slug);
  const relatedResources = FEATURED_RESOURCE_SLUGS.slice(0, 3)
    .map((resourceSlug) => RESOURCE_ARTICLES_DATA[resourceSlug])
    .filter(Boolean);

  return (
    <>
      <ArticleSchema
        headline={page.title}
        description={page.description}
        url={buildAbsoluteUrl(canonicalPath)}
        image="https://www.vasudevchemopharma.com/images/vcp-logo.png"
        datePublished="2025-03-25"
        dateModified="2026-03-25"
        authorName="Vasudev Chemo Pharma Technical Team"
        authorCredentials="Technical Content"
        wordCount={getWordCount(page)}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Applications", url: `${SITE_URL}/applications` },
          { name: page.h1, url: buildAbsoluteUrl(canonicalPath) },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <SectionLabel>Application guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                {page.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  View MEA Triazine 78% product
                </Link>
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  Ask for application support
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_320px] lg:px-10">
            <div className="space-y-10">
              {page.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-heading text-h3 text-primary mb-4">
                    {section.heading}
                  </h2>
                  <div className="whitespace-pre-line leading-relaxed text-secondary">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-gray-200 bg-light p-6">
                <h2 className="font-heading text-h4 text-primary">Quick specs</h2>
                <dl className="mt-5 space-y-4 text-sm">
                  {page.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="font-semibold uppercase tracking-wide text-accent">
                        {spec.label}
                      </dt>
                      <dd className="mt-1 text-primary">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-h4 text-primary">Benefits</h2>
                <ul className="mt-5 space-y-3 text-sm text-secondary">
                  {page.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Related market pages</h2>
              <div className="mt-5 space-y-3">
                {page.relatedCountries.map((country) => {
                  const normalizedSlug = normalizeCountrySlug(country.slug);
                  const countryPage = COUNTRY_PAGES_DATA[normalizedSlug];

                  if (!countryPage) {
                    return null;
                  }

                  return (
                    <Link
                      key={country.slug}
                      href={buildCountryPagePath(country.slug)}
                      className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                    >
                      {country.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6">
              <h2 className="font-heading text-h4 text-primary">Technical resources</h2>
              <div className="mt-5 space-y-3">
                {relatedResources.map((resource) => (
                  <Link
                    key={resource.slug}
                    href={buildResourceArticlePath(resource.slug)}
                    className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                  >
                    {resource.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
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
      </main>
    </>
  );
}
