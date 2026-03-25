import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { RESOURCE_ARTICLES_DATA } from "@/lib/seo/resource-articles-data";
import {
  buildResourceArticlePath,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "MEA Triazine Technical Resources",
  description:
    "Technical articles covering MEA Triazine dosing, solids formation, storage and handling, iron sponge comparison, and reaction chemistry.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  openGraph: {
    title: "MEA Triazine Technical Resources",
    description:
      "Knowledge-base articles for MEA Triazine 78% buyers and technical teams.",
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
                Reference articles built to answer process, dosing, storage,
                chemistry, and troubleshooting questions around H2S scavenging.
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
      </main>
    </>
  );
}
