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

const meaChemicalNames = [
  "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
  "1, 3, 5-Tris (2-hydroxyethyl) hexahydro-triazine",
  "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-5-TRIAZINE",
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
  "s-Triazine-1,3,5-triethanol",
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

const brandReferenceTerms = [
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
  "MEA Triazine application guide",
  "how MEA Triazine is used in gas treating",
  "how MEA Triazine is used in crude oil sweetening",
  "how MEA Triazine is used in biogas H2S removal",
  "how MEA Triazine is used in water systems",
  "MEA Triazine chemical names and synonyms",
  "Hydrogen Sulfide Scavenger applications",
  "Gas sweetener application examples",
  "triazine biocide application guide",
  "MEA Triazine vs preservation biocide terminology",
  "which MEA Triazine application fits my process",
  "where to use MEA Triazine 78%",
];

const buyingIntentKeywords = [
  "buy MEA Triazine for gas sweetening",
  "buy MEA Triazine for crude oil desulfurization",
  "buy MEA Triazine for pipeline H2S treatment",
  "buy MEA Triazine for biogas H2S removal",
  "MEA Triazine supplier for oil and gas applications",
  "MEA Triazine supplier for offshore applications",
  "MEA Triazine supplier for onshore applications",
  "Gas sweetening chemical supplier",
  "Mercaptan scavenger supplier",
  "Industrial biocide supplier India",
  "Cutting fluid preservative supplier",
  "Paper mill slimicide supplier",
  "request application specific quote for MEA Triazine",
  "request MEA Triazine dosage guidance",
  "factory direct H2S scavenger supplier",
];

export const metadata: Metadata = {
  title: "MEA Triazine 78% Applications",
  description:
    "Application and use-case pages for MEA Triazine 78%, including gas treating, crude sweetening, biogas H2S removal, and industrial biocide use.",
  keywords: [
    "MEA Triazine applications",
    "MEA Triazine use cases",
    "Hydrogen Sulfide Scavenger applications",
    "MEA Triazine gas sweetening",
    "MEA Triazine biogas H2S removal",
    ...meaChemicalNames,
    ...functionalTerms,
    ...brandReferenceTerms,
    ...informationalIntentKeywords,
    ...buyingIntentKeywords,
  ],
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

        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <h2 className="font-heading text-h3 text-primary">
                How Buyers and Engineers Search These MEA Triazine Applications
              </h2>
              <p className="mt-4 text-secondary leading-relaxed">
                Application-focused searches often combine chemistry, function, and operating
                context. A user may search for <strong>MEA Triazine</strong> by chemical name,
                ask for a <strong>hydrogen sulfide scavenger</strong> for a specific stream,
                or use broader terms such as <strong>gas sweetener</strong>,
                <strong> desulfurizer</strong>, <strong>slimicide</strong>, or
                <strong> formaldehyde-releasing biocide</strong>. This section helps connect
                those terms with the application pages listed below.
              </p>
              <p className="mt-4 text-secondary leading-relaxed">
                It also adds semantic context for buyers who are comparing oilfield H2S
                scavenging use cases against industrial preservation, water treatment,
                cutting fluid, or pulp-and-paper service. Similar chemistry may appear in
                different markets, but the correct application still depends on concentration,
                dosing method, and process conditions.
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
                  Market Reference Terms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {brandReferenceTerms.map((term) => (
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
                  These searches usually come from teams who want technical clarity before
                  selecting an application path or requesting dosage guidance.
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
                  These searches usually indicate a buyer is looking for a direct supplier,
                  application-specific quotation, or support choosing the right use case and dose.
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
