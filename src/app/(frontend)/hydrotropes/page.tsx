import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { SITE_URL } from "@/lib/seo/seo-route-helpers";

export const revalidate = 3600;

const PILLAR_URL = `${SITE_URL}/hydrotropes`;

const PILLAR_FAQS = [
  {
    question: "What is a hydrotrope?",
    answer:
      "A hydrotrope is a short-chain aromatic sulfonate salt that increases the solubility of hydrophobic surfactants and organic compounds in water. Hydrotropes such as Sodium Cumene Sulfonate (CAS 28348-53-0) and Sodium Xylene Sulfonate (CAS 1300-72-7) are used in liquid detergents, HI&I cleaners, and agrochemical concentrates to prevent gel-phase separation and lower the cloud point.",
  },
  {
    question: "What is the difference between SCS and SXS?",
    answer:
      "Sodium Cumene Sulfonate (SCS) and Sodium Xylene Sulfonate (SXS) are chemically distinct hydrotropes. SCS typically delivers stronger cloud-point depression per gram of active in nonionic-dominated systems. SXS offers stronger electrolyte tolerance in high-alkaline or salt-rich cleaners. Formulators often dual-spec both grades and choose based on cost per kg active and target performance.",
  },
  {
    question: "Should I buy the 40% liquid or the 90% powder grade?",
    answer:
      "Choose the 40% liquid when regional freight distance is short (under roughly 2,500 km) or cold-blend processing is preferred — it pours straight into a reactor. Choose the 90% powder for long-haul CIF export and for spray-dried or dry-blended formulations, where it cuts freight cost per kg active by approximately 60% versus the 40% liquid.",
  },
  {
    question: "What dosage of hydrotrope is typical in a liquid detergent?",
    answer:
      "Typical hydrotrope dosage in liquid detergents is 1–8% on product weight depending on surfactant loading and target clarity temperature. A starting point of 3% is common for a 15–25% active-matter laundry or dish wash liquid; increase to 5–8% for concentrated formulations above 30% active matter or where the cloud point must stay below 0 °C for winter warehousing.",
  },
  {
    question: "Are SCS and SXS hydrotropes biodegradable and REACH-registered?",
    answer:
      "Yes. Both Sodium Cumene Sulfonate and Sodium Xylene Sulfonate are readily biodegradable and REACH pre-registered. GHS classification is limited to Category 2A eye irritant; both are non-hazardous for transport under IMDG/ADR. Full SDS, batch COA, and Kosher/Halal certification are available on request from Vasudev Chemo Pharma.",
  },
  {
    question: "Who manufactures hydrotropes in India for export?",
    answer:
      "Vasudev Chemo Pharma manufactures Sodium Cumene Sulfonate (40% liquid and 90% powder) and Sodium Xylene Sulfonate (40% liquid and 90% powder) at its ISO 9001:2015 certified plant at GIDC Ankleshwar, Gujarat. Export-ready packaging, batch COA, REACH pre-registration, and Kosher/Halal certification are standard; export MOQ is 1 MT.",
  },
];

const HYDROTROPE_PRODUCTS = [
  {
    slug: "sodium-cumene-sulfonate-40",
    name: "Sodium Cumene Sulfonate 40%",
    code: "SCS-40",
    form: "Liquid · aqueous",
    cas: "28348-53-0",
    active: "40 ± 1%",
    summary:
      "Clear liquid hydrotrope for cold-blend detergent and cleaner formulation. Preferred for regional supply within ~2,500 km of plant and for processes that need pour-and-blend handling.",
  },
  {
    slug: "sodium-cumene-sulfonate-90",
    name: "Sodium Cumene Sulfonate 90%",
    code: "SCS-90",
    form: "Powder · free-flowing",
    cas: "28348-53-0",
    active: "90 ± 1%",
    summary:
      "Free-flowing powder hydrotrope. Cuts freight cost per kg active by ~60% vs the 40% liquid — preferred for long-haul export, spray-dried laundry powders, and dry-blend cleaner concentrates.",
  },
  {
    slug: "sodium-xylene-sulfonate-40",
    name: "Sodium Xylene Sulfonate 40%",
    code: "SXS-40",
    form: "Liquid · aqueous",
    cas: "1300-72-7",
    active: "40 ± 1%",
    summary:
      "Pale-yellow liquid hydrotrope. Strong electrolyte tolerance for alkaline hard-surface cleaners, laundry liquids, dish wash, and agrochemical SL concentrates.",
  },
  {
    slug: "sodium-xylene-sulfonate-90",
    name: "Sodium Xylene Sulfonate 90%",
    code: "SXS-90",
    form: "Powder · free-flowing",
    cas: "1300-72-7",
    active: "90 ± 1%",
    summary:
      "Free-flowing powder for spray-dried detergent, built alkaline cleaner concentrates, and agrochemical water-dispersible granules. Preferred for global export lanes.",
  },
];

const CLUSTER_ARTICLES = [
  {
    slug: "scs-vs-sxs-hydrotrope-comparison",
    title: "SCS vs SXS — which hydrotrope is right for your formulation?",
    summary:
      "Side-by-side comparison of Sodium Cumene Sulfonate vs Sodium Xylene Sulfonate: chemistry, cloud-point performance, electrolyte tolerance, cost per kg active.",
  },
  {
    slug: "hydrotrope-cloud-point-depression",
    title: "How hydrotropes lower the cloud point of surfactant systems",
    summary:
      "The mechanism of cloud-point depression, how to run a bench cloud-point trial, and dosing curves for SCS and SXS at 20, 25, 30 and 35 °C.",
  },
  {
    slug: "hydrotrope-40-vs-90-freight-calculator",
    title: "40% liquid vs 90% powder — a freight-economics calculator",
    summary:
      "How to calculate the CIF break-even distance between 40% liquid and 90% powder hydrotrope grades and decide which to buy for your lane.",
  },
  {
    slug: "hydrotropes-in-agrochemical-ec-sl-formulation",
    title: "Hydrotropes in agrochemical EC and SL concentrates",
    summary:
      "How SCS and SXS stabilise pesticide EC/SL formulations, dosage ranges, interaction with common adjuvants, and tank-mix compatibility tips.",
  },
  {
    slug: "hydrotrope-reach-regulatory-status",
    title: "REACH, GHS and regulatory status of SCS and SXS hydrotropes",
    summary:
      "Detailed regulatory profile: REACH registration, EC numbers, GHS classification, IMDG/ADR status, Kosher and Halal certification, and import documentation.",
  },
  {
    slug: "coa-interpretation-hydrotrope-buyer-guide",
    title: "How to read a hydrotrope Certificate of Analysis",
    summary:
      "A buyer's guide to each row on a hydrotrope COA: active matter, free sulfate, chloride, iron, colour, pH — and what values actually matter for your formulation.",
  },
];

export const metadata: Metadata = {
  title:
    "Hydrotropes Explained — SCS & SXS Manufacturer | Vasudev Chemo Pharma",
  description:
    "Hydrotropes pillar guide: Sodium Cumene Sulfonate (SCS) and Sodium Xylene Sulfonate (SXS) — chemistry, 40% liquid vs 90% powder, applications, dosage, and REACH status. ISO 9001 India manufacturer.",
  keywords: [
    "hydrotrope",
    "what is a hydrotrope",
    "sodium cumene sulfonate manufacturer",
    "sodium xylene sulfonate manufacturer",
    "SCS SXS hydrotrope",
    "coupling agent detergent",
    "cloud point depressant",
    "hydrotrope supplier India",
    "hydrotrope 40 vs 90",
    "hydrotrope REACH registration",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: PILLAR_URL },
  openGraph: {
    title: "Hydrotropes — SCS & SXS Manufacturer | Vasudev Chemo Pharma",
    description:
      "Sodium Cumene Sulfonate and Sodium Xylene Sulfonate in 40% liquid and 90% powder grades. ISO 9001 India manufacturer with global export.",
    url: PILLAR_URL,
    type: "website",
    siteName: "Vasudev Chemo Pharma Chemicals",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hydrotropes — SCS & SXS Manufacturer | Vasudev Chemo Pharma",
    description:
      "Sodium Cumene Sulfonate and Sodium Xylene Sulfonate in 40% liquid and 90% powder grades. ISO 9001 India manufacturer with global export.",
  },
};

export default function HydrotropesPillarPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Hydrotropes", url: PILLAR_URL },
        ]}
      />
      <FAQSchema items={PILLAR_FAQS} />

      <main className="pt-28 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <span className="font-medium text-primary">Hydrotropes</span>
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <section className="mb-12 max-w-4xl">
            <SectionLabel>Pillar Guide</SectionLabel>
            <h1 className="font-heading text-[clamp(2rem,8vw,4.5rem)] leading-[1.05] text-primary mt-4">
              Hydrotropes — the buyer&apos;s &amp; formulator&apos;s guide to SCS and SXS
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-secondary">
              Vasudev Chemo Pharma is an ISO 9001:2015 certified manufacturer of
              hydrotropes at Ankleshwar, Gujarat — supplying Sodium Cumene
              Sulfonate (SCS) and Sodium Xylene Sulfonate (SXS) in 40%
              aqueous-liquid and 90% free-flowing-powder grades to detergent,
              agrochemical, oilfield, and industrial-cleaner formulators across
              35+ export markets.
            </p>
          </section>

          {/* Direct-answer callout */}
          <section className="mb-16">
            <div className="border-l-4 border-accent bg-light rounded-r-2xl px-6 py-5 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                Quick answer
              </p>
              <p className="text-base md:text-lg text-primary leading-relaxed">
                A hydrotrope is a short-chain aromatic sulfonate salt that
                increases the solubility of hydrophobic surfactants and organics
                in water. Sodium Cumene Sulfonate (CAS 28348-53-0) and Sodium
                Xylene Sulfonate (CAS 1300-72-7) are the two dominant
                hydrotropes used in liquid detergents, hard-surface cleaners,
                and agrochemical concentrates to prevent phase separation and
                lower the cloud point.
              </p>
            </div>
          </section>

          {/* Product grid — the 4 flagship hydrotropes */}
          <section id="products" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Our four hydrotrope grades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {HYDROTROPE_PRODUCTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/product/${p.slug}`}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                      {p.code}
                    </span>
                    <span className="text-xs text-gray-500">{p.form}</span>
                  </div>
                  <h3 className="font-heading text-h4 text-primary">{p.name}</h3>
                  <dl className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
                    <div>
                      <dt className="inline font-semibold text-accent">CAS:</dt>{" "}
                      <dd className="inline">{p.cas}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold text-accent">Active:</dt>{" "}
                      <dd className="inline">{p.active}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {p.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    View product details →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* How to choose */}
          <section id="choose" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              How to choose: SCS vs SXS, 40% vs 90%
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-light p-6">
                <h3 className="font-heading text-h5 text-primary mb-3">
                  SCS vs SXS — chemistry choice
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  <strong className="text-primary">Choose SCS</strong> when the
                  formulation is dominated by nonionic surfactants or when
                  maximum cloud-point depression per gram of active is the
                  binding constraint.
                  <br /><br />
                  <strong className="text-primary">Choose SXS</strong> for
                  high-alkaline or salt-rich cleaners where electrolyte
                  tolerance is critical — typical HI&amp;I degreasers, built
                  laundry liquids, and vehicle-wash concentrates.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-light p-6">
                <h3 className="font-heading text-h5 text-primary mb-3">
                  40% vs 90% — form-factor choice
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  <strong className="text-primary">Choose 40% liquid</strong>{" "}
                  for cold-blend processing and regional supply within ~2,500 km
                  of the plant — it pours straight into a reactor with no
                  dissolution step.
                  <br /><br />
                  <strong className="text-primary">Choose 90% powder</strong>{" "}
                  for long-haul CIF export and for spray-dried or dry-blend
                  formulations. It cuts freight cost per kg active by roughly
                  60% versus the 40% liquid.
                </p>
              </div>
            </div>
          </section>

          {/* Technical deep-dive articles */}
          <section id="articles" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Technical articles &amp; buyer guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CLUSTER_ARTICLES.map((a) => (
                <Link
                  key={a.slug}
                  href={`/resources/${a.slug}`}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Technical Guide
                  </p>
                  <h3 className="font-heading text-h5 text-primary mt-2">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {a.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Applications */}
          <section id="applications" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Where hydrotropes are used
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  h: "Clear liquid detergents",
                  p: "Laundry liquids, hand dish wash, all-purpose cleaners — hydrotropes prevent gel-phase separation and stabilise high-active concentrates.",
                },
                {
                  h: "HI&I hard-surface cleaners",
                  p: "Alkaline degreasers, washroom cleaners, vehicle wash concentrates — SXS in particular handles high-electrolyte systems.",
                },
                {
                  h: "Agrochemical EC / SL / WDG",
                  p: "Emulsifiable concentrates, soluble liquids, and water-dispersible granules — hydrotropes solubilise active ingredients and stabilise tank-mix.",
                },
                {
                  h: "Personal-care surfactant blends",
                  p: "Body wash, shampoo concentrates — hydrotropes control viscosity and cold-storage clarity.",
                },
                {
                  h: "Oilfield &amp; metalworking",
                  p: "Acid-coupling additives, corrosion-inhibitor packages, and metalworking fluid compatibility aids.",
                },
                {
                  h: "Textile &amp; paper auxiliaries",
                  p: "Wetting and scouring auxiliaries for cotton and blended fabrics; pulp slurry aids in paper-mill operations.",
                },
              ].map((a) => (
                <div key={a.h} className="rounded-2xl border border-gray-200 bg-light p-5">
                  <h3 className="font-heading text-h5 text-primary mb-2">{a.h}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{a.p}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {PILLAR_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="border border-gray-200 rounded-2xl overflow-hidden group"
                >
                  <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
                    {faq.question}
                    <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-8">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Need pricing or samples for SCS or SXS?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Export MOQ 1 MT · Domestic MOQ 220 kg · Batch COA, REACH and
                Kosher/Halal certification on request.
              </p>
              <Link
                href="/contact?product=sodium-cumene-sulfonate-40"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Request a quote
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
