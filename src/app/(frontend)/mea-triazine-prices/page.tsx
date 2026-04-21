import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  MEA_TRIAZINE_PRICING_KEYWORDS,
  MEA_TRIAZINE_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const CANONICAL = `${SITE_URL}/mea-triazine-prices`;

export const metadata: Metadata = {
  title: "MEA Triazine Prices – 78% H2S Scavenger Cost Guide",
  description:
    "MEA Triazine 78% price guide — cost per MT, drum/IBC/bulk rates, and factors that affect pricing. Get a same-day quote from an ISO 9001 India manufacturer.",
  keywords: mergeKeywordClusters(
    MEA_TRIAZINE_PRICING_KEYWORDS,
    MEA_TRIAZINE_KEYWORDS,
    [
      "mea triazine bulk price",
      "mea triazine drum price",
      "mea triazine ibc price",
      "monoethanolamine triazine price",
      "triazine price india",
    ]
  ),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "MEA Triazine 78% Prices – H2S Scavenger Cost Guide",
    description:
      "MEA Triazine 78% pricing: drum, IBC, and bulk rates, factors that influence cost, and how to get a same-day quote from an ISO 9001 India manufacturer.",
    url: CANONICAL,
    type: "article",
    siteName: "Vasudev Chemo Pharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEA Triazine 78% Prices – H2S Scavenger Cost Guide",
    description:
      "MEA Triazine 78% pricing guide: drum, IBC & bulk rates and the factors that drive cost. Same-day quotes from an ISO 9001 India manufacturer.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const PRICING_FACTORS = [
  {
    title: "Order Volume",
    body:
      "Per-kilogram pricing drops as order size scales from single-drum trials to bulk IBC and tanker shipments. Export orders above 20 MT typically qualify for the most competitive rates.",
  },
  {
    title: "Packaging",
    body:
      "250 kg steel drums, 1,100 kg HDPE IBC totes, and ISO tank bulk shipments each carry different packaging costs. Bulk supply reduces per-kilogram cost but requires compatible receiving infrastructure.",
  },
  {
    title: "Delivery Terms (Incoterms)",
    body:
      "Ex-works (EXW Ankleshwar), FOB Mundra / Kandla / Hazira, CIF, and DAP terms each include different freight, insurance, and port-handling costs. CIF to most destinations is the most commonly quoted term.",
  },
  {
    title: "Raw Material & Logistics Indices",
    body:
      "MEA Triazine pricing moves with monoethanolamine feedstock costs, global freight rates, and INR ↔ USD exchange. Most quotes are valid for 15–30 days.",
  },
  {
    title: "Documentation & Certification",
    body:
      "Buyer-specific COA, REACH letter of access, pre-shipment inspection (e.g. SGS, Bureau Veritas), and legalised export documentation can add to the final landed cost.",
  },
  {
    title: "Destination Country",
    body:
      "Ocean freight, port-of-entry duties, and local handling vary significantly by destination. We routinely supply MEA Triazine to the US, UAE, Saudi Arabia, Thailand, Libya, and other oil & gas markets.",
  },
];

const PACKAGING_OPTIONS = [
  {
    pack: "250 kg Steel Drum",
    mtPerPallet: "4 drums / pallet",
    typicalUse: "Field trials, small continuous-injection skids, pilot programs",
    moq: "1 MT (export) / 220 kg (domestic)",
  },
  {
    pack: "1,100 kg HDPE IBC Tote",
    mtPerPallet: "1 tote / pallet",
    typicalUse: "Offshore platforms, well-site continuous injection, mid-volume users",
    moq: "1 MT (export) / 1,100 kg (domestic)",
  },
  {
    pack: "ISO Tank / Bulk",
    mtPerPallet: "20–24 MT per ISO tank",
    typicalUse: "Large gas-processing plants, refineries, contractor inventories",
    moq: "20 MT+",
  },
];

const FAQS = [
  {
    question: "What is the price of MEA Triazine 78%?",
    answer:
      "MEA Triazine 78% is a project-quoted product rather than a fixed-price commodity. Per-kilogram cost depends on order volume, packaging (drum, IBC, or ISO tank), Incoterms, destination country, and feedstock markets. Most buyers fall within a clear USD/MT range — we publish a live quote once you confirm volume, packaging, and delivery port.",
  },
  {
    question: "How is MEA Triazine priced — per kg, per drum, or per MT?",
    answer:
      "Most international buyers quote MEA Triazine 78% in USD per metric tonne (MT), while Indian domestic buyers often quote in INR per kilogram. For drum and IBC shipments, the packaging premium is added to the base per-MT price. Bulk ISO-tank supply is always quoted per MT.",
  },
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our export MOQ is 1 MT (one metric tonne), typically shipped as four 250 kg drums or one 1,100 kg IBC. Domestic (India) MOQ is 220 kg (one drum). For contract supply and ISO-tank bulk orders, MOQ begins at 20 MT.",
  },
  {
    question: "Do published MEA Triazine prices online reflect current rates?",
    answer:
      "Published or indexed prices for MEA Triazine are often stale — feedstock and freight markets move weekly. Always confirm with a current quote. Our sales team issues same-day quotes valid for 15–30 days and will flag any mid-shipment price-protection clauses you need.",
  },
  {
    question: "How do MEA Triazine 78% prices compare to MMA Triazine 40%?",
    answer:
      "On a per-kilogram-of-active-scavenger basis, MEA Triazine 78% is generally the more cost-effective choice for oil & gas H2S removal because of its higher active concentration. MMA Triazine 40% is often preferred for water treatment and BTEX-sensitive applications. See our MEA vs MMA Triazine comparison for a full breakdown.",
  },
  {
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes. We supply lab and field-trial samples of MEA Triazine 78% for qualification. Sample volumes typically range from 1 L to 25 L, shipped with a full Certificate of Analysis. Request a sample via our contact form — most sample shipments dispatch within 3–5 business days from Ankleshwar, Gujarat.",
  },
  {
    question: "What is included in a bulk MEA Triazine quote?",
    answer:
      "A complete quote includes: unit price per MT (USD for export), packaging type and count, COA, SDS, Incoterm (EXW/FOB/CIF), loading port, estimated transit, payment terms (typically 30% advance + 70% against shipping documents), and price validity.",
  },
];

export default function MeaTriazinePricesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MEA Triazine 78% H2S Scavenger", url: `${SITE_URL}/product/mea-triazine-78-h2s-scavenger` },
          { name: "MEA Triazine Prices", url: CANONICAL },
        ]}
      />
      <FAQSchema items={FAQS} />

      <main className="pt-28 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">

          {/* ─── Breadcrumb ─────────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-accent">Home</Link></li>
              <li>/</li>
              <li>
                <Link
                  href="/product/mea-triazine-78-h2s-scavenger"
                  className="hover:text-accent"
                >
                  MEA Triazine 78% H2S Scavenger
                </Link>
              </li>
              <li>/</li>
              <li className="font-medium text-primary">Prices</li>
            </ol>
          </nav>

          {/* ─── Hero ───────────────────────────────────────────── */}
          <section className="mb-16">
            <SectionLabel>Pricing Guide</SectionLabel>
            <h1 className="font-heading text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] text-primary mt-4 mb-6">
              MEA Triazine Prices — 78% H2S Scavenger Cost Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              MEA Triazine 78% (Monoethanolamine Triazine, CAS 4719-04-4) is a
              project-quoted industrial chemical. This guide explains how we
              price MEA Triazine 78% H2S scavenger across drum, IBC, and bulk
              supply, the six factors that drive the final landed cost, and how
              to request a same-day quote valid for 15–30 days.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button href="/contact?product=mea-triazine-78-h2s-scavenger&type=quote">
                Request a Live Quote
              </Button>
              <Button
                href="/contact?product=mea-triazine-78-h2s-scavenger&type=sample"
                variant="outline"
              >
                Request a Sample
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Export MOQ: 1 MT &nbsp;·&nbsp; Domestic MOQ: 220 kg &nbsp;·&nbsp; Quotes issued same-day
            </p>
          </section>

          {/* ─── Why we don't publish a fixed price ─────────────── */}
          <section className="mb-16 bg-light rounded-3xl p-8 md:p-10">
            <h2 className="font-heading text-h3 text-primary mb-4">
              Why MEA Triazine 78% Prices Vary
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Unlike commodity chemicals with daily exchange prices, MEA Triazine
              78% is sold on project contracts. A 250 kg drum quoted to an
              offshore operator in the Middle East and a 24 MT ISO-tank contract
              to a US refinery will have very different per-kilogram costs —
              even when shipped the same week. The six factors below drive the
              final number.
            </p>
          </section>

          {/* ─── Pricing Factors ────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Six Factors That Drive MEA Triazine Price
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRICING_FACTORS.map((factor) => (
                <div
                  key={factor.title}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-accent/40 transition-colors"
                >
                  <h3 className="font-heading text-h5 text-primary mb-3">
                    {factor.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {factor.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Packaging Options Table ────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Packaging, MOQ, and Typical Use
            </h2>
            <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="px-5 py-3 font-semibold">Packaging</th>
                    <th className="px-5 py-3 font-semibold">Pallet Config</th>
                    <th className="px-5 py-3 font-semibold">Typical Use</th>
                    <th className="px-5 py-3 font-semibold">MOQ</th>
                  </tr>
                </thead>
                <tbody>
                  {PACKAGING_OPTIONS.map((opt, i) => (
                    <tr
                      key={opt.pack}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                    >
                      <td className="px-5 py-3 font-semibold text-primary">{opt.pack}</td>
                      <td className="px-5 py-3 text-gray-700">{opt.mtPerPallet}</td>
                      <td className="px-5 py-3 text-gray-600">{opt.typicalUse}</td>
                      <td className="px-5 py-3 text-accent font-medium">{opt.moq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ─── FAQ ────────────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              MEA Triazine Pricing — FAQ
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-gray-200 rounded-2xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
                    {faq.question}
                    <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ─── Related Pages ──────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/product/mea-triazine-78-h2s-scavenger"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Product page</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  MEA Triazine 78% H2S Scavenger
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full specifications, SDS, applications, and safety data.
                </p>
              </Link>
              <Link
                href="/mea-triazine-production-plant-cost"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Cost guide</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  MEA Triazine Production Plant Cost
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  CAPEX guide for buyers evaluating in-house manufacturing vs. sourcing.
                </p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Comparison</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  MEA vs MMA Triazine
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Active-ingredient, cost, and application differences side-by-side.
                </p>
              </Link>
            </div>
          </section>

          {/* ─── CTA ────────────────────────────────────────────── */}
          <section className="mb-16">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Ready for a Live MEA Triazine 78% Quote?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Share your volume, packaging, and delivery port. Most quotes are
                issued within 24 hours, valid for 15–30 days, with optional
                price-protection clauses for larger contracts.
              </p>
              <Button
                href="/contact?product=mea-triazine-78-h2s-scavenger&type=quote"
                variant="dark"
              >
                Request MEA Triazine Quote
              </Button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
