import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";
import {
  buildCountryPagePath,
  MEA_TRIAZINE_PRODUCT_PATH,
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
  "Oil Drilling Fluid",
];

const brandReferenceTerms = [
  "Grotan BK",
  "Grotan B",
  "Grotan HD",
  "Grotanol",
  "Parmetol",
  "Nipacide BK",
  "Acticide GR / HHB",
  "Bioban GK",
  "Protectol HT",
  "Triadine 3 / 174",
  "ACTANE",
  "Actane",
  "Onyxide 200",
  "Onyxide 200-50",
  "ETA 75",
  "Busan 1060",
  "Busan 1506",
  "Mergal KM200 / 174",
  "KM 200",
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
  "Nuosept 78",
  "Cola Triazine 80 (ME)",
  "IR-Triazine",
  "Silworld Triazine 78",
  "GreatAp HHT",
  "Triazine BK",
  "Scavtreat",
  "Syntan OXB",
  "Explorax / MEA Triazine 70",
  "ICPL H2S Scavenger",
  "JDC-TR",
  "JDC-H2S Scavenger",
];

const companyReferenceTerms = [
  "SLB (Schlumberger)",
  "Baker Hughes Company",
  "Hexion Inc.",
  "Saudi Multichem Company",
  "Dongying Dayong Petroleum Additive Co., Ltd.",
  "Q2 Technologies",
  "IRO Group Inc. / IRO Chemical",
  "Sinotrust Chemical Co. Ltd.",
  "Jay Dinesh Chemicals",
  "Xipeng Technology (Luoyang) Co., Ltd.",
  "Chemtex Speciality Ltd.",
  "Shanghai Million Chemical Limited",
  "Spectrum Cutting Solutions Pvt Ltd",
  "OndaVia, Inc.",
  "GLOBAL CO.",
  "FARABI DOWNSTREAM CO.",
  "MSTACK INC.",
  "Dalian Tianwei Chemical Co., Ltd.",
  "Vasudev Chemo Pharma",
  "KeenBolden, LLC",
  "Green Stream Solutions",
  "Geocon Products",
  "WUHAN SILWORLD CHEMICAL CO., LTD.",
  "Shanghai Sunwise Chemical Co., Ltd",
  "Vink Chemicals GmbH & Co. KG",
  "Schulke & Mayr GmbH",
  "Thor Specialties UK Ltd (Thor Group)",
  "Clariant AG",
  "Dow Chemical Company",
  "Stepan Company",
  "Buckman Laboratories Inc.",
  "BASF SE",
  "Troy Corporation",
  "Angus Chemical Company (Innospec)",
  "Global Company for Chemical Industries",
  "Colonial Chemical",
  "Vink Chemicals",
  "Buckman",
  "Arxada (Lonza)",
  "Clariant",
  "BASF",
  "Ashland (ISP)",
  "GreatAp Chemicals",
  "Dalian Tianwei",
  "IRO Group",
  "Luoyang Fansun",
  "Wuhan Silworld",
  "Xipeng Technology",
  "Shanghai Sunwise",
  "Ningbo Inno Pharm",
  "Dayang Chem",
  "Henan Tianfu Chem",
  "Imperial Oilfield (ICPL)",
  "Maxwell Additives",
  "Chemtex Speciality",
  "Manas Petrochem",
  "Sai Samarth Chem",
];

const informationalIntentKeywords = [
  "MEA Triazine chemical name",
  "MEA Triazine synonyms and IUPAC names",
  "what is MEA Triazine 78%",
  "CAS 4719-04-4 chemical identity",
  "how MEA Triazine removes H2S",
  "MEA Triazine vs Grotan BK chemistry",
  "MEA Triazine vs oilfield scavenger brands",
  "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine meaning",
  "triazinetriethanol uses",
  "MEA Triazine H2S scavenger applications",
  "what documents are needed to import MEA Triazine",
  "MEA Triazine TDS vs SDS",
  "MEA Triazine storage and handling guide",
  "MEA Triazine supply by country",
  "best MEA Triazine manufacturer for export",
];

const buyingIntentKeywords = [
  "buy MEA Triazine 78%",
  "MEA Triazine 78 manufacturer India",
  "MEA Triazine 78 supplier India",
  "MEA Triazine 78 exporter India",
  "bulk MEA Triazine 78 supplier",
  "MEA Triazine 78 price per ton",
  "MEA Triazine 78 quotation request",
  "factory direct MEA Triazine 78%",
  "buy H2S scavenger direct from manufacturer",
  "request MEA Triazine TDS and SDS",
  "request MEA Triazine free sample",
  "MEA Triazine supplier for oil and gas",
  "MEA Triazine supplier for gas sweetening",
  "MEA Triazine supplier for mercaptan scavenging",
  "MEA Triazine exporter to GCC",
  "MEA Triazine exporter to USA",
  "MEA Triazine exporter to Southeast Asia",
  "CAS 4719-04-4 supplier",
  "triazine based scavenger manufacturer",
  "MEA Triazine competitor alternative supplier",
];

/* ── SEO Metadata ────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title:
    "MEA Triazine 78% Manufacturer — Direct Factory Supply | Vasudev Chemo Pharma",
  description:
    "Vasudev Chemo Pharma is a direct manufacturer of MEA Triazine 78% (CAS 4719-04-4) H2S scavenger. ISO 9001:2015 certified. Factory pricing. 200L drums, 1000L IBC, bulk. Supply to 10+ countries.",
  keywords: [
    "MEA Triazine 78%",
    "MEA Triazine manufacturer",
    "H2S scavenger manufacturer",
    "MEA Triazine 78 supplier",
    "CAS 4719-04-4",
    "Hexahydro-1,3,5-tris(hydroxyethyl)-s-triazine",
    "H2S scavenger manufacturer India",
    "Vasudev Chemo Pharma",
    "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
    ...meaChemicalNames,
    ...functionalTerms,
    ...brandReferenceTerms,
    ...companyReferenceTerms,
    ...informationalIntentKeywords,
    ...buyingIntentKeywords,
  ],
  alternates: {
    canonical: `${SITE_URL}/supply/mea-triazine-78`,
  },
  openGraph: {
    title:
      "MEA Triazine 78% Manufacturer — Direct Factory Supply | Vasudev Chemo Pharma",
    description:
      "Direct manufacturer of MEA Triazine 78% H2S scavenger. ISO 9001:2015 certified. Factory-direct pricing. Supplying 10+ countries.",
    url: `${SITE_URL}/supply/mea-triazine-78`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEA Triazine 78% Manufacturer | Vasudev Chemo Pharma",
    description:
      "Direct manufacturer of MEA Triazine 78% H2S scavenger. Supply to 10+ countries with factory pricing.",
  },
};

/* ── Static data ─────────────────────────────────────────────────────── */

const countries = Object.values(COUNTRY_PAGES_DATA);

const specs = [
  { label: "Active Content", value: "\u226578% (guaranteed)" },
  { label: "CAS Number", value: "4719-04-4" },
  { label: "Chemical Name", value: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine" },
  { label: "Appearance", value: "Clear to pale yellow liquid" },
  { label: "pH (neat)", value: "9.0 \u2013 12.0" },
  { label: "Density", value: "1.05 \u2013 1.25 g/cm\u00B3" },
  { label: "Flash Point", value: ">100 \u00B0C" },
  { label: "Solubility", value: "Fully water-soluble" },
];

const packaging = [
  { size: "200 L Drums", desc: "Standard export packaging" },
  { size: "1,000 L IBC Totes", desc: "Cost-efficient for medium volumes" },
  { size: "Bulk ISO Tanks", desc: "For large-volume contracts" },
];

const whyVasudev = [
  { title: "Direct Manufacturer", desc: "Factory-direct pricing with no middlemen or trader markups." },
  { title: "78% Guaranteed", desc: "Every batch tested and certified. Certificate of Analysis included." },
  { title: "ISO 9001:2015", desc: "Quality management system certified — consistent batch-to-batch quality." },
  { title: "10+ Countries Served", desc: "Proven export track record across Middle East, Americas, and Asia-Pacific." },
  { title: "Fast Delivery", desc: "3-5 days to GCC ports. Near Kandla, Mundra, and Hazira ports in Gujarat." },
  { title: "Custom Packaging", desc: "200L drums, 1000L IBC, or bulk ISO tanks — your choice." },
];

const industryLinks = [
  { label: "Oil & Gas H2S Scavenging", href: "/industries/oil-gas-h2s-scavenger", desc: "Upstream, midstream & downstream H2S removal" },
  { label: "Water Treatment", href: "/industries/water-treatment", desc: "Triazine biocide for industrial water systems" },
  { label: "Metal Working Fluids", href: "/industries/metal-working-fluids", desc: "Biocide preservative for cutting oils & coolants" },
  { label: "Paper Mill", href: "/industries/paper-mill", desc: "Slimicide for pulp & paper processing" },
];  

const applicationLinks = [
  { label: "Natural Gas Sweetening", href: "/applications/gas-sweetening" },
  { label: "Pipeline H2S Treatment", href: "/applications/pipeline-h2s-treatment" },
  { label: "Biogas H2S Removal", href: "/applications/biogas-h2s-removal" },
  { label: "Crude Oil Desulfurization", href: "/applications/crude-oil-desulfurization" },
];

const equivalentBrands = [
  { brand: "Grotan BK / Grotan HD", maker: "Lanxess" },
  { brand: "BASOLON SC 78", maker: "BASF" },
  { brand: "Pro3 / Pro3 HT", maker: "Q2 Technologies" },
  { brand: "PureMark M500 / B800", maker: "Foremark" },
  { brand: "RXSOL-43-8160-210", maker: "Vizag Chemical / RX Chemicals" },
  { brand: "HS-1526-40", maker: "Univar" },
  { brand: "Tsorb3400", maker: "Tasfyeh Group" },
  { brand: "Triasorb", maker: "Sintez-Oka" },
];

/* ── Page Component ──────────────────────────────────────────────────── */

export default function MeaTriazineSupplyIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MEA Triazine 78%", url: `${SITE_URL}/supply/mea-triazine-78` },
        ]}
      />

      <main className="pt-28 pb-20">
        {/* ── Hero / Intro ──────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Direct manufacturer</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                MEA Triazine 78% — India&apos;s best H2S scavenger manufacturer
              </h1>
              <p className="text-secondary text-lg mt-6 leading-relaxed">
                <strong>Vasudev Chemo Pharma</strong> is a direct manufacturer
                of MEA Triazine 78% (CAS 4719-04-4), the industry-standard{" "}
                <Link href="/how-h2s-scavengers-work" className="text-accent hover:underline">
                  H2S scavenger
                </Link>{" "}
                used in oil &amp; gas, petrochemical, biogas, and water treatment
                operations. We supply factory-direct from Gujarat, India to{" "}
                <strong>10+ countries</strong> with ISO 9001:2015 certified
                quality and competitive pricing.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
                >
                  Request a quote
                </Link>
                <Link
                  href={MEA_TRIAZINE_PRODUCT_PATH}
                  className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  View product page
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-light"
                >
                  Download TDS &amp; SDS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Vasudev Chemo Pharma ──────────────────────────────── */}
        <section className="mb-20 bg-light py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-10 text-center">
              Why Vasudev Chemo Pharma is the best MEA Triazine 78% manufacturer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyVasudev.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link
                href="/about"
                className="text-sm font-medium text-accent hover:underline"
              >
                Learn more about Vasudev Chemo Pharma &rarr;
              </Link>
            </p>
          </div>
        </section>

        {/* ── Product Specifications ────────────────────────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Product specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Specs table */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((row, i) => (
                      <tr
                        key={row.label}
                        className={i % 2 === 0 ? "bg-white" : "bg-light"}
                      >
                        <td className="px-5 py-3 font-medium text-primary w-2/5">
                          {row.label}
                        </td>
                        <td className="px-5 py-3 text-secondary">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Packaging options */}
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                  Packaging options
                </h3>
                <div className="flex flex-col gap-4">
                  {packaging.map((pkg) => (
                    <div
                      key={pkg.size}
                      className="rounded-2xl bg-light p-5"
                    >
                      <p className="font-semibold text-primary">{pkg.size}</p>
                      <p className="text-sm text-secondary mt-1">{pkg.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-secondary">
                  Need a detailed technical datasheet or Safety Data Sheet?{" "}
                  <Link href="/resources" className="text-accent hover:underline font-medium">
                    Download from our resources page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How Buyers Search This Market ──────────────────────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <h2 className="font-heading text-h3 text-primary mb-4">
                Chemical Names, Brand References, and How Global Buyers Search for MEA Triazine 78%
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                In export markets, MEA Triazine 78% is not searched only by one product name.
                Buyers may request the same chemistry using IUPAC naming, CAS-linked chemical
                descriptions, oilfield H2S scavenger terminology, gas sweetening language, or
                industrial preservation references. That means an RFQ for
                <strong> MEA Triazine</strong>, a
                <strong> hydrogen sulfide scavenger</strong>, a
                <strong> gas sweetener</strong>, or even a
                <strong> formaldehyde-releasing biocide</strong> may point to overlapping,
                but not always identical, use cases.
              </p>
              <p className="text-secondary leading-relaxed">
                For procurement accuracy, the best approach is to match the chemical identity,
                active concentration, intended application, and required documents together.
                This page is written to help buyers, importers, and technical teams connect the
                naming variants they see in tenders or competitor benchmarking with the actual
                MEA Triazine 78% product manufactured by Vasudev Chemo Pharma.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
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
                  Functional Search Terms
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
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="rounded-3xl border border-gray-200 p-6">
                <h3 className="font-heading text-h4 text-primary mb-4">
                  Brand and Product Reference Terms
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  These names commonly appear in competitor research, distributor catalogs,
                  tender comparisons, and buyer search behavior around triazine-based scavenger
                  or preservation chemistry.
                </p>
                <div className="flex flex-wrap gap-2">
                  {brandReferenceTerms.map((term) => (
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
                  Company Names Buyers Compare in This Market
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  Global buyers often benchmark suppliers, oilfield service companies,
                  preservative manufacturers, and chemical exporters side by side before
                  requesting pricing, samples, or documentation.
                </p>
                <div className="flex flex-wrap gap-2 max-h-[320px] overflow-y-auto">
                  {companyReferenceTerms.map((term) => (
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="rounded-3xl border border-gray-200 p-6">
                <h3 className="font-heading text-h4 text-primary mb-4">
                  Informational Intent Searches
                </h3>
                <p className="text-secondary leading-relaxed mb-4">
                  These searches usually come from engineers, sourcing teams, and importers who
                  are validating chemistry, synonyms, regulatory identity, or application fit
                  before they speak with a supplier.
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
                  These are stronger procurement signals and usually indicate a buyer needs
                  factory pricing, supply confirmation, TDS/SDS files, export paperwork,
                  or a direct manufacturer for ongoing bulk orders.
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

            <div className="rounded-3xl bg-accent/5 border border-accent/15 p-6 mt-6">
              <h3 className="font-heading text-h4 text-primary mb-3">
                Important Procurement Note
              </h3>
              <p className="text-secondary leading-relaxed">
                Not every trade name or company reference above represents the same marketed
                concentration, specification, or end-use positioning. Some names are more common
                in oilfield H2S scavenging, while others are used in industrial preservation,
                slimicide, or cutting-fluid applications. When requesting a quote, always match
                the chemistry, CAS number, active concentration, and application note so you
                receive the right MEA Triazine grade for your process.
              </p>
            </div>
          </div>
        </section>

        {/* ── How MEA Triazine Works (link to educational content) ── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-primary p-10 text-white">
              <h2 className="font-heading text-h3">
                How does MEA Triazine 78% remove H2S?
              </h2>
              <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">
                MEA Triazine (monoethanolamine triazine) is a non-regenerative,
                water-soluble H2S scavenger synthesized from monoethanolamine and
                formaldehyde. It reacts irreversibly with hydrogen sulfide (H2S)
                to form dithiazine — a water-soluble, non-hazardous byproduct.
                This makes it the most widely used H2S scavenger in the global
                oil &amp; gas industry.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  href="/how-h2s-scavengers-work"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Learn how H2S scavengers work
                </Link>
                <Link
                  href="/mea-triazine-vs-mma-triazine"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  MEA vs MMA Triazine comparison
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Industries & Applications (internal links) ────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Industries &amp; applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {industryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-gray-200 p-6 transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {item.label}
                  </h3>
                  <p className="text-sm text-secondary mt-2">{item.desc}</p>
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {applicationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/compare"
                className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Compare H2S scavengers
              </Link>
              <Link
                href="/case-study"
                className="rounded-full border border-gray-200 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Case studies
              </Link>
            </div>
          </div>
        </section>

        {/* ── Equivalent Brands ─────────────────────────────────────── */}
        <section className="mb-20 bg-light py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-3 text-center">
              Equivalent to leading H2S scavenger brands
            </h2>
            <p className="text-secondary text-sm text-center max-w-2xl mx-auto mb-10">
              Same active ingredient (CAS 4719-04-4). Same 78% concentration.
              Direct from the manufacturer — without the premium markup.
            </p>
            <div className="rounded-2xl border border-gray-200 overflow-hidden bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-5 py-3 text-left font-semibold">
                      Their Brand
                    </th>
                    <th className="px-5 py-3 text-left font-semibold">
                      Their Manufacturer
                    </th>
                    <th className="px-5 py-3 text-left font-semibold">
                      Our Equivalent
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {equivalentBrands.map((row, i) => (
                    <tr
                      key={row.brand}
                      className={i % 2 === 0 ? "bg-white" : "bg-light"}
                    >
                      <td className="px-5 py-3 font-medium text-primary">
                        {row.brand}
                      </td>
                      <td className="px-5 py-3 text-secondary">{row.maker}</td>
                      <td className="px-5 py-3 text-accent font-semibold">
                        MEA Triazine 78% by Vasudev
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Country Grid (Supply Pages) ──────────────────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 text-primary mb-3">
              MEA Triazine 78% supply by country
            </h2>
            <p className="text-secondary mb-8 max-w-2xl">
              Each market page covers transit time, import documentation, local
              brand references, and application context for MEA Triazine 78%
              buyers.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {countries.map((country) => (
                <Link
                  key={country.slug}
                  href={buildCountryPagePath(country.slug)}
                  className="rounded-3xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-3xl" aria-hidden="true">
                      {country.flag}
                    </p>
                    <span className="rounded-full bg-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      {country.regionLabel}
                    </span>
                  </div>
                  <h3 className="font-heading text-h4 text-primary mt-5">
                    {country.countryName}
                  </h3>
                  <p className="text-secondary mt-3 text-sm leading-relaxed">
                    {country.description}
                  </p>
                  <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-light p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                        Port
                      </dt>
                      <dd className="mt-1 text-primary">
                        {country.logistics.port}
                      </dd>
                    </div>
                    <div className="rounded-2xl bg-light p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
                        Transit
                      </dt>
                      <dd className="mt-1 text-primary">
                        {country.logistics.transitDays}
                      </dd>
                    </div>
                  </dl>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Blog & Resources Links ───────────────────────────────── */}
        <section className="mb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/blog"
                className="rounded-3xl border border-gray-200 p-8 transition-all hover:border-accent/40 hover:shadow-md"
              >
                <h3 className="font-heading text-h4 text-primary">
                  Latest articles on H2S scavenging
                </h3>
                <p className="text-sm text-secondary mt-3">
                  Technical guides, market insights, and best practices for
                  MEA Triazine 78% users.
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-accent">
                  Read our blog &rarr;
                </span>
              </Link>
              <Link
                href="/resources"
                className="rounded-3xl border border-gray-200 p-8 transition-all hover:border-accent/40 hover:shadow-md"
              >
                <h3 className="font-heading text-h4 text-primary">
                  Technical datasheets &amp; resources
                </h3>
                <p className="text-sm text-secondary mt-3">
                  Download TDS, SDS, dosing guidelines, and storage &amp;
                  handling guides for MEA Triazine 78%.
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-accent">
                  View resources &rarr;
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section>
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-primary p-10 text-white text-center">
              <h2 className="font-heading text-h3">
                Ready to order MEA Triazine 78%?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/75">
                Get factory-direct pricing from India&apos;s leading MEA
                Triazine 78% manufacturer. Free samples available for qualified
                buyers.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Link
                  href="/contact?product=mea-triazine-78-h2s-scavenger"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
                >
                  Request a quote
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  About Vasudev Chemo Pharma
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
