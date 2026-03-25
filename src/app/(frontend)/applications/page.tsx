import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { APPLICATION_PAGES_DATA } from "@/lib/seo/application-pages-data";
import {
  buildApplicationPagePath,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "MEA Triazine 78% Applications",
  description:
    "Application and use-case pages for MEA Triazine 78%, including gas treating, crude sweetening, biogas H2S removal, and industrial biocide use.",
  alternates: {
    canonical: `${SITE_URL}/applications`,
  },
  openGraph: {
    title: "MEA Triazine 78% Applications",
    description:
      "Explore technical use cases for MEA Triazine 78% across oil and gas, biogas, water treatment, and industrial preservation.",
    url: `${SITE_URL}/applications`,
    type: "website",
    locale: "en_US",
  },
};

const applications = Object.values(APPLICATION_PAGES_DATA);

export default function ApplicationsIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Applications", url: `${SITE_URL}/applications` },
        ]}
      />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Use cases</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                MEA Triazine 78% application pages
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                Technical landing pages explaining how MEA Triazine 78% is used
                in gas streams, crude oil systems, biogas treatment, water
                circuits, and fluid preservation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-10">
            {applications.map((application) => (
              <Link
                key={application.slug}
                href={buildApplicationPagePath(application.slug)}
                className="rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <h2 className="font-heading text-h4 text-primary">
                  {application.h1}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-secondary">
                  {application.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {application.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full bg-light px-3 py-1 text-xs font-semibold text-accent"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
