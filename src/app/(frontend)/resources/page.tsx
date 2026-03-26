import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";
import {
  buildResourceArticlePath,
  MEA_TRIAZINE_PRODUCT_PATH,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "MEA Triazine Technical Resources & Downloads",
  description:
    "Technical resources for MEA Triazine 78% including datasheets, safety data sheets, dosing guides, import compliance documentation, storage and handling guides, and reaction chemistry references.",
  keywords: [
    "MEA Triazine resources",
    "H2S scavenger technical documents",
    "MEA Triazine datasheet download",
    "MEA Triazine SDS",
    "H2S scavenger dosing guide",
    "MEA Triazine import compliance",
  ],
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: "MEA Triazine Technical Resources & Downloads",
    description:
      "Technical resources, datasheets, safety data, dosing guides, and compliance documents for MEA Triazine 78% buyers and technical teams.",
    url: `${SITE_URL}/resources`,
    type: "website",
    locale: "en_US",
  },
};

const articles = Object.values(RESOURCE_ARTICLES_DATA);

export default function ResourcesIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Resources", url: `${SITE_URL}/resources` },
        ]}
      />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Knowledge base</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                Technical resources for MEA Triazine 78%
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                Reference articles, datasheets, and guides for{" "}
                <Link href={MEA_TRIAZINE_PRODUCT_PATH} className="text-accent underline underline-offset-2 hover:text-accent-dark">
                  MEA Triazine 78%
                </Link>{" "}
                — covering process, dosing, storage, chemistry, safety, and import compliance.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-10">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={buildResourceArticlePath(article.slug)}
                className="rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <span className="rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {article.category}
                </span>
                <h2 className="font-heading text-h4 text-primary mt-5">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link
                href="/how-h2s-scavengers-work"
                className="rounded-3xl border border-gray-200 bg-light p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <h2 className="font-heading text-h4 text-primary">
                  Learn the fundamentals
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  Understand H2S scavenger chemistry from first principles.
                </p>
              </Link>
              <Link
                href="/contact?product=mea-triazine-78-h2s-scavenger"
                className="rounded-3xl border border-gray-200 bg-accent/5 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <h2 className="font-heading text-h4 text-primary">
                  Request custom documentation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary">
                  Need specific technical documents or compliance paperwork? Contact our team.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
