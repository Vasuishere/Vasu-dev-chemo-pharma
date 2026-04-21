import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  RESOURCE_ARTICLES_DATA,
  type ResourceArticle,
} from "@/lib/seo/resource-articles-data";
import {
  buildAbsoluteUrl,
  buildApplicationPagePath,
  buildResourceArticlePath,
  FEATURED_APPLICATION_SLUGS,
  MEA_TRIAZINE_PRODUCT_PATH,
  resolveSeoHref,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";
import { APPLICATION_PAGES_DATA } from "@/lib/seo/application-pages-data";
import {
  SULFIDE_SCAVENGER_KEYWORDS,
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

export const revalidate = 3600;

export async function generateStaticParams() {
  return Object.keys(RESOURCE_ARTICLES_DATA).map((slug) => ({ slug }));
}

function getResourceArticle(slug: string): ResourceArticle | null {
  return RESOURCE_ARTICLES_DATA[slug] ?? null;
}

function getWordCount(article: ResourceArticle): number {
  const text = [
    article.intro,
    ...article.sections.map((section) => section.body),
    ...article.faqs.map((faq) => `${faq.question} ${faq.answer}`),
  ].join(" ");

  return text.trim().split(/\s+/).length;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) {
    return {};
  }

  const canonicalPath = buildResourceArticlePath(article.slug);

  return {
    title: article.title,
    description: article.description,
    keywords: mergeKeywordClusters(
      SULFIDE_SCAVENGER_KEYWORDS,
      H2S_SCAVENGER_CORE,
      MEA_TRIAZINE_KEYWORDS,
      article.keywords
    ),
    alternates: {
      canonical: buildAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: buildAbsoluteUrl(canonicalPath),
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceArticle(slug);

  if (!article) {
    notFound();
  }

  const canonicalPath = buildResourceArticlePath(article.slug);
  const applicationLinks = FEATURED_APPLICATION_SLUGS.slice(0, 3)
    .map((applicationSlug) => APPLICATION_PAGES_DATA[applicationSlug])
    .filter(Boolean);

  return (
    <>
      <ArticleSchema
        headline={article.title}
        description={article.description}
        url={buildAbsoluteUrl(canonicalPath)}
        image="https://www.vasudevchemopharma.com/images/vcp-logo.png"
        datePublished={article.publishedDate}
        dateModified="2026-03-25"
        authorName="Vasudev Chemo Pharma Technical Team"
        authorCredentials="Technical Content"
        wordCount={getWordCount(article)}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Resources", url: `${SITE_URL}/resources` },
          { name: article.title, url: buildAbsoluteUrl(canonicalPath) },
        ]}
      />
      <FAQSchema items={article.faqs} />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <SectionLabel>{article.category}</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                {article.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                {article.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
                <span className="rounded-full bg-light px-3 py-1">
                  Published {article.publishedDate}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 px-6 lg:grid-cols-[1fr_320px] lg:px-10">
            <div className="space-y-10">
              {article.sections.map((section) => (
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
                <h2 className="font-heading text-h4 text-primary">Related links</h2>
                <div className="mt-5 space-y-3">
                  {article.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={resolveSeoHref(link.href)}
                      className="block rounded-2xl bg-white px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                    >
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-h4 text-primary">Explore applications</h2>
                <div className="mt-5 space-y-3">
                  {applicationLinks.map((application) => (
                    <Link
                      key={application.slug}
                      href={buildApplicationPagePath(application.slug)}
                      className="block rounded-2xl bg-light px-4 py-3 text-sm font-medium text-primary transition-all hover:bg-accent/10 hover:text-accent"
                    >
                      {application.h1}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6">
                <h2 className="font-heading text-h4 text-primary">Need product support?</h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  Use this article as a buying and dosing reference, then move
                  to the product page or request a quote.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href={MEA_TRIAZINE_PRODUCT_PATH}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                  >
                    View product page
                  </Link>
                  <Link
                    href="/contact?product=mea-triazine-78-h2s-scavenger"
                    className="inline-flex items-center justify-center rounded-full border border-accent px-5 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                  >
                    Ask technical question
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-6">Frequently asked questions</h2>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
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
