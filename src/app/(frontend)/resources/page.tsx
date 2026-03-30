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

const meaChemicalNames = [
  "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
  "1, 3, 5-Tris (2-hydroxyethyl) hexahydro-triazine",
  "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-s-TRIAZINE",
  "TRIS(N-HYDROXYETHYL) HEXAHYDROTRIAZINE",
  "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
  "2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol",
  "2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol (HHT)",
  "2,2',2''-(Hexahydro-1,3,5-triazine-1,3,5-triyl) Triethanol",
  "1,3,5-tris(2-hydroxyethyl)hexahydro-1,3,5-triazine",
  "triazinetriethanol",
  "Triazinetriethanol",
  "MEA based Triazine",
  "MEA Triazine",
  "1,3,5-Triazine",
  "J2.219E",
];

const functionalTerms = [
  "Triazine H2S Scavenger",
  "Hydrogen Sulfide Scavenger",
  "Desulfurizer",
  "Gas Sweetener",
  "Sweetening Agent",
  "Mercaptan Scavenger",
  "Offshore Scavenger",
  "Onshore Scavenger",
  "Industrial Preservation Biocide",
  "Formaldehyde-Releasing Biocide",
  "Industrial Microbiocide",
  "Microbiostat",
  "Slimicide",
  "Bactericide and Algicide",
  "Cutting Fluid Preservative",
  "Anti-mildew Agent",
];

const marketTradeTerms = [
  "Grotan BK",
  "Nipacide BK",
  "Acticide GR / HHB",
  "Bioban GK",
  "Protectol HT",
  "Triadine 3 / 174",
  "Actane",
  "Onyxide 200",
  "ETA 75",
  "Busan 1506",
  "Mergal KM200 / 174",
  "Troyshield B2",
  "Exocide BK",
  "Cobate C",
  "Miliden X-2",
  "Roksol T 1-7",
  "Surcide D / P",
  "Permachem OB 2",
  "Bactraclean",
  "Ottaform 204",
  "JadeScan54",
];

const informationalIntentKeywords = [
  "MEA Triazine chemical names and synonyms",
  "MEA Triazine technical datasheet download",
  "MEA Triazine SDS and MSDS download",
  "what is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "MEA Triazine CAS 4719-04-4 documents",
  "how MEA Triazine works as an H2S scavenger",
  "MEA Triazine storage and handling guide",
  "MEA Triazine dosing guide PDF",
  "MEA Triazine import compliance guide",
  "MEA Triazine trade names and equivalent search terms",
  "Grotan BK chemistry reference",
  "triazine biocide vs H2S scavenger explanation",
  "how to identify MEA Triazine in procurement documents",
  "what documents are needed to import MEA Triazine",
  "MEA Triazine TDS vs SDS difference",
  "formaldehyde releasing biocide technical guide",
];

const buyingIntentKeywords = [
  "buy MEA Triazine 78%",
  "MEA Triazine manufacturer India",
  "MEA Triazine supplier India",
  "MEA Triazine exporter India",
  "bulk MEA Triazine supplier",
  "MEA Triazine price per ton",
  "MEA Triazine quotation request",
  "request MEA Triazine TDS",
  "request MEA Triazine SDS",
  "request MEA Triazine MSDS",
  "request MEA Triazine sample",
  "MEA Triazine COA request",
  "H2S scavenger documentation from manufacturer",
  "buy gas sweetening chemical direct from manufacturer",
  "mercaptan scavenger supplier India",
  "buy triazine H2S scavenger with export documents",
  "MEA Triazine supplier with compliance paperwork",
  "Grotan BK alternative supplier India",
  "triazine biocide manufacturer for industrial preservation",
  "paper mill slimicide supplier India",
  "cutting fluid preservative supplier India",
  "industrial microbiocide manufacturer India",
  "formaldehyde releasing biocide supplier India",
  "MEA Triazine import documentation supplier",
];

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
    "MEA Triazine technical documentation",
    "MEA Triazine MSDS",
    "MEA Triazine TDS download",
    "MEA Triazine COA request",
    "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
    ...meaChemicalNames,
    ...functionalTerms,
    ...marketTradeTerms,
    ...informationalIntentKeywords,
    ...buyingIntentKeywords,
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

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <h2 className="font-heading text-h3 text-primary">
                Search Terms, Chemical Names, and Procurement Language Behind These Resources
              </h2>
              <p className="mt-4 text-secondary leading-relaxed">
                Technical teams and sourcing managers often request the same resource set using
                very different language. Some ask for <strong>MEA Triazine</strong> by product
                name, others use the full chemical identity such as
                <strong> hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine</strong>, and others
                search by function, for example <strong>hydrogen sulfide scavenger</strong>,
                <strong> gas sweetener</strong>, or <strong>formaldehyde-releasing biocide</strong>.
                This page connects those searches to the practical documents buyers usually need:
                TDS, SDS, dosing guides, compliance notes, and handling references.
              </p>
              <p className="mt-4 text-secondary leading-relaxed">
                It also helps to separate search language from application fit. Some trade
                references below appear more often in industrial preservation, metalworking
                fluids, or slimicide programs, while other searches are centered on oilfield
                H2S scavenging and gas sweetening. Matching the chemical identity, concentration,
                document type, and end use together is the best way to avoid the wrong product
                being quoted or evaluated.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
              <div className="rounded-3xl bg-light p-6">
                <h3 className="font-heading text-h4 text-primary mb-4">
                  Chemical Name Variants
                </h3>
                <div className="flex flex-wrap gap-2">
                  {meaChemicalNames.map((term) => (
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
                  {functionalTerms.map((term) => (
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
                  Market and Trade References
                </h3>
                <div className="flex flex-wrap gap-2">
                  {marketTradeTerms.map((term) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <div className="rounded-3xl border border-gray-200 p-6">
                <h3 className="font-heading text-h4 text-primary mb-4">
                  Informational Intent Searches
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  These searches usually come from users who are validating the chemistry,
                  checking identity, or collecting technical references before they shortlist a supplier.
                </p>
                <div className="flex flex-wrap gap-2">
                  {informationalIntentKeywords.map((term) => (
                    <span
                      key={term}
                      className="rounded-full bg-light px-3 py-2 text-sm text-secondary"
                    >
                      {term}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 p-6">
                <h3 className="font-heading text-h4 text-primary mb-4">
                  Buying Intent Searches
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  These queries usually signal that a buyer needs quotations, samples,
                  TDS/SDS files, COA support, or export and compliance documentation from a direct manufacturer.
                </p>
                <div className="flex flex-wrap gap-2">
                  {buyingIntentKeywords.map((term) => (
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
