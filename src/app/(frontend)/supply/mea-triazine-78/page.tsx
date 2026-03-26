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
