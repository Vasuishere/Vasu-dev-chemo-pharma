import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  MEA_TRIAZINE_PRICING_KEYWORDS,
  MEA_TRIAZINE_KEYWORDS,
  TRIAZINE_MANUFACTURER_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";
const CANONICAL = `${SITE_URL}/mea-triazine-production-plant-cost`;

export const metadata: Metadata = {
  title: "MEA Triazine Production Plant Cost – CAPEX Guide",
  description:
    "MEA Triazine 78% production plant cost guide — CAPEX ranges, equipment, feedstock, utilities & feasibility factors. Or skip CAPEX: supply from an ISO 9001 India manufacturer.",
  keywords: mergeKeywordClusters(
    MEA_TRIAZINE_PRICING_KEYWORDS,
    MEA_TRIAZINE_KEYWORDS,
    TRIAZINE_MANUFACTURER_KEYWORDS,
    [
      "mea triazine production plant cost",
      "mea triazine manufacturing cost",
      "mea triazine plant capex",
      "mea triazine plant equipment",
      "mea triazine plant setup cost",
      "mea triazine feasibility study",
      "mea triazine production process",
      "monoethanolamine triazine plant cost",
      "triazine manufacturing plant india",
      "triazine plant equipment suppliers",
      "h2s scavenger manufacturing plant",
      "mea triazine batch reactor",
    ]
  ),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "MEA Triazine Production Plant Cost – CAPEX Guide",
    description:
      "Evaluate CAPEX to build an MEA Triazine 78% plant: equipment, feedstock, utilities, and feasibility factors. Or source finished product from an ISO 9001 India manufacturer.",
    url: CANONICAL,
    type: "article",
    siteName: "Vasudev Chemo Pharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEA Triazine Production Plant Cost – CAPEX Guide",
    description:
      "CAPEX guide for MEA Triazine 78% production: equipment, utilities, and feasibility. Alternative: contract supply from an ISO 9001 India manufacturer.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const CAPEX_COMPONENTS = [
  {
    title: "Reaction & Storage Vessels",
    body:
      "Glass-lined or SS316L batch reactors (typically 5–20 kL), feedstock storage tanks for monoethanolamine (MEA) and formaldehyde, and product storage for 78% concentrate. Usually the largest equipment line item.",
    share: "25–35% of CAPEX",
  },
  {
    title: "Utilities & Services",
    body:
      "Steam boiler, chilled-water or cooling-tower loop, vacuum system, process water, compressed air, nitrogen blanketing, and electrical MCC. Often underestimated in initial feasibility.",
    share: "15–20% of CAPEX",
  },
  {
    title: "Safety, Scrubbing & Emissions",
    body:
      "Formaldehyde scrubber, vent condenser, relief & flare arrangement, fire-water network, and gas-detection system. Mandatory for CPCB/SPCB consent in India and comparable permits elsewhere.",
    share: "10–15% of CAPEX",
  },
  {
    title: "Quality Control Laboratory",
    body:
      "Active-content titration, density & viscosity, pH, formaldehyde residual, GC or HPLC for purity, and COA documentation. Needed for customer qualification and export certification.",
    share: "5–8% of CAPEX",
  },
  {
    title: "Packaging & Dispatch",
    body:
      "Drum filling station, IBC filling line, weigh-bridge, warehouse racking, and loading infrastructure for ISO-tank exports. Scales with target throughput.",
    share: "8–12% of CAPEX",
  },
  {
    title: "Civil, Land & Permits",
    body:
      "Plot, shed construction, MEE / ZLD if discharged, consent-to-establish and consent-to-operate (CPCB/SPCB in India), factory licence, explosives licence (if storing formaldehyde), and fire NOC.",
    share: "20–30% of CAPEX (market-dependent)",
  },
];

const FEASIBILITY_FACTORS = [
  {
    title: "Annual Throughput Target",
    body:
      "CAPEX does not scale linearly. A 500 MT/year facility carries very different economics than a 5,000 MT/year plant. Below 1,000 MT/year, most operators find it cheaper to source from established manufacturers than to build in-house.",
  },
  {
    title: "Feedstock Supply Contracts",
    body:
      "Reliable, long-term MEA and formaldehyde supply agreements materially affect both CAPEX (storage sizing) and OPEX. Proximity to a petrochemical complex or major port shortens logistics tails.",
  },
  {
    title: "Environmental Permits",
    body:
      "Formaldehyde handling and triazine wastewater both trigger environmental review. In India, CPCB/SPCB timelines can add 6–12 months to project delivery. EU REACH registration is a separate cost centre for export.",
  },
  {
    title: "Make vs Buy Breakeven",
    body:
      "For most specialty-chemical buyers, the breakeven for MEA Triazine in-house vs contract-sourced is 2,500–5,000 MT/year. Below that volume, contract supply from a qualified manufacturer is typically the better allocation of capital.",
  },
  {
    title: "Technical Know-How & Licensing",
    body:
      "MEA Triazine chemistry is not proprietary, but process-safety design, formaldehyde-handling protocols, and in-spec yield optimisation are non-trivial to commission without experienced operators. Engineering consultants typically charge 3–7% of CAPEX.",
  },
];

const FAQS = [
  {
    question: "What does it cost to set up an MEA Triazine production plant?",
    answer:
      "There is no single answer — plant CAPEX for an MEA Triazine 78% facility scales with throughput (MT/year), packaging configuration, and regulatory jurisdiction. A small batch plant designed for 500–1,000 MT/year will have materially different economics than a 5,000+ MT/year contract-supply plant. Request our feasibility worksheet for a throughput-indexed CAPEX template.",
  },
  {
    question: "What equipment is needed for MEA Triazine manufacturing?",
    answer:
      "Core equipment includes: a glass-lined or SS316L batch reactor (typically 5–20 kL), feedstock storage for monoethanolamine and formaldehyde, a formaldehyde vapour scrubber, condensers, chilled water loop, steam boiler, vacuum system, drum & IBC filling stations, laboratory QC equipment, and ETP/MEE for spent-water handling.",
  },
  {
    question: "What are the feedstocks for MEA Triazine 78%?",
    answer:
      "The two primary feedstocks are monoethanolamine (MEA, CAS 141-43-5) and formaldehyde (CAS 50-00-0, typically supplied as 37–50% aqueous formalin). The stoichiometric reaction forms hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine, which is concentrated to the 78% active specification.",
  },
  {
    question: "How long does it take to build an MEA Triazine plant?",
    answer:
      "From greenfield to commissioning, an MEA Triazine 78% plant typically takes 14–24 months — including consent-to-establish (CPCB/SPCB in India or local equivalent), detailed engineering, long-lead equipment procurement, civil work, mechanical completion, and commissioning runs. Permits are often the critical-path item.",
  },
  {
    question: "Is it cheaper to buy MEA Triazine 78% than to manufacture in-house?",
    answer:
      "For most specialty-chemical users, yes — below roughly 2,500–5,000 MT/year of internal consumption, contract supply from a qualified manufacturer delivers better unit economics than in-house production. Above that volume, and especially when backward-integration into oilfield service lines is strategic, in-house production becomes defensible.",
  },
  {
    question: "Do you support toll manufacturing or contract manufacturing?",
    answer:
      "Yes. Vasudev Chemo Pharma runs long-term contract-supply arrangements for MEA Triazine 78%, with price-protection clauses, priority scheduling, consigned inventory, and private-label packaging available. This is frequently a better option than building new capacity for buyers below the breakeven volume.",
  },
  {
    question: "What is the typical yield and purity of MEA Triazine 78%?",
    answer:
      "A well-operated MEA Triazine plant achieves 96–99% molar yield against MEA, with the finished product meeting 78 ± 1% active content and ≤ 0.5% residual formaldehyde. Key quality levers are reaction temperature profile, addition-rate control, and vacuum strip efficiency.",
  },
];

export default function MeaTriazinePlantCostPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "MEA Triazine 78% H2S Scavenger", url: `${SITE_URL}/product/mea-triazine-78-h2s-scavenger` },
          { name: "MEA Triazine Production Plant Cost", url: CANONICAL },
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
              <li className="font-medium text-primary">Production Plant Cost</li>
            </ol>
          </nav>

          {/* ─── Hero ───────────────────────────────────────────── */}
          <section className="mb-16">
            <SectionLabel>CAPEX Guide</SectionLabel>
            <h1 className="font-heading text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] text-primary mt-4 mb-6">
              MEA Triazine Production Plant Cost — CAPEX Guide
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Buyers evaluating MEA Triazine 78% (Monoethanolamine Triazine, CAS
              4719-04-4) for in-house production need a realistic CAPEX picture
              before committing capital. This guide outlines the six cost
              centres in an MEA Triazine plant, the feasibility factors that
              decide go / no-go, and why most specialty-chemical buyers find
              contract supply from an established manufacturer a better
              allocation below the breakeven throughput.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Button href="/contact?product=mea-triazine-78-h2s-scavenger&type=feasibility">
                Request Feasibility Worksheet
              </Button>
              <Button href="/mea-triazine-prices" variant="outline">
                See Supply Pricing Instead
              </Button>
            </div>
          </section>

          {/* ─── Intro section ──────────────────────────────────── */}
          <section className="mb-16 bg-light rounded-3xl p-8 md:p-10">
            <h2 className="font-heading text-h3 text-primary mb-4">
              Why Most Buyers Choose Contract Supply
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              MEA Triazine is a mature H2S-scavenger chemistry. For
              consumers below roughly 2,500–5,000 MT/year of internal use, the
              breakeven on capital, permits, and ongoing operator cost makes
              contract supply the more attractive path. Our long-term
              agreements include price-protection clauses, consigned inventory,
              priority scheduling, and private-label packaging — removing most
              of the strategic reasons for backward integration.
            </p>
          </section>

          {/* ─── CAPEX Components ───────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Six CAPEX Components of an MEA Triazine Plant
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CAPEX_COMPONENTS.map((component) => (
                <div
                  key={component.title}
                  className="border border-gray-200 rounded-2xl p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading text-h5 text-primary">
                      {component.title}
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent bg-accent/10 rounded-full px-3 py-1 whitespace-nowrap">
                      {component.share}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {component.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── Feasibility ────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              Feasibility Factors — Go / No-Go Decision
            </h2>
            <div className="space-y-5">
              {FEASIBILITY_FACTORS.map((factor, idx) => (
                <div
                  key={factor.title}
                  className="border border-gray-200 rounded-2xl p-6 flex gap-5"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent font-semibold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-h5 text-primary mb-2">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {factor.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── FAQ ────────────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-8">
              MEA Triazine Plant Cost — FAQ
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

          {/* ─── Related ────────────────────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/mea-triazine-prices"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Pricing guide</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  MEA Triazine Prices
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Drum, IBC, and bulk supply rates — the cheaper path below the breakeven volume.
                </p>
              </Link>
              <Link
                href="/product/mea-triazine-78-h2s-scavenger"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Product page</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  MEA Triazine 78% H2S Scavenger
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Full product specification, SDS, and applications.
                </p>
              </Link>
              <Link
                href="/how-h2s-scavengers-work"
                className="rounded-2xl border border-gray-200 bg-light p-5 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">Technical guide</p>
                <h3 className="font-heading text-h5 text-primary mt-2">
                  How H2S Scavengers Work
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Reaction chemistry, dosage calculations, and process context.
                </p>
              </Link>
            </div>
          </section>

          {/* ─── CTA ────────────────────────────────────────────── */}
          <section className="mb-16">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Exploring Capacity? Let&apos;s Compare.
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Share your target annual volume. We will issue a contract-supply
                quote against your plant-CAPEX assumption so your team has a
                clean make-vs-buy comparison for the next board review.
              </p>
              <Button
                href="/contact?product=mea-triazine-78-h2s-scavenger&type=contract"
                variant="dark"
              >
                Request Contract-Supply Quote
              </Button>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
