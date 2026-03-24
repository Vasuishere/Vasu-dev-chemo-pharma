import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = {
  title: "How H2S Scavengers Work — A Complete Technical Guide | Vasudev Chemo Pharma",
  description:
    "Learn how H2S scavengers work, including triazine reaction chemistry, dosage guidelines, MEA vs MMA comparison, and application methods. Technical guide by Vasudev Chemo Pharma.",
  keywords: [
    "how H2S scavengers work",
    "H2S removal chemistry",
    "triazine H2S reaction mechanism",
    "hydrogen sulfide scavenger guide",
    "MEA Triazine reaction",
    "H2S treatment methods",
  ],
  alternates: {
    canonical: `${SITE_URL}/how-h2s-scavengers-work`,
  },
  openGraph: {
    title: "How H2S Scavengers Work — A Complete Technical Guide",
    description:
      "Comprehensive technical guide to hydrogen sulfide scavenging chemistry, treatment methods, dosage calculations, and triazine applications.",
    url: `${SITE_URL}/how-h2s-scavengers-work`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How H2S Scavengers Work — A Complete Technical Guide",
    description:
      "Comprehensive technical guide to hydrogen sulfide scavenging chemistry, treatment methods, and triazine applications.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const faqs = [
  {
    question: "Is triazine safe for the environment?",
    answer:
      "Yes. Triazine-based H2S scavengers are water-soluble and biodegradable. The primary reaction by-product, dithiazine, is non-toxic and water-soluble. When used at recommended dosages, triazine does not introduce persistent pollutants into the environment. However, spent scavenger fluids should be disposed of in accordance with local environmental regulations.",
  },
  {
    question: "What is the shelf life of MEA Triazine?",
    answer:
      "MEA Triazine 78% has a typical shelf life of 12 months when stored in sealed containers at ambient temperature (below 40°C). The product should be kept away from direct sunlight and strong acids. Always check the manufacture date and refer to the Technical Data Sheet for specific storage recommendations.",
  },
  {
    question: "Can triazine be used in sour gas pipelines?",
    answer:
      "Yes. MEA Triazine 78% is widely used for continuous injection into sour gas pipelines. It is effective across typical pipeline operating temperatures and pressures. The product is injected via chemical dosing pumps at calculated rates based on H2S concentration and gas flow rate.",
  },
  {
    question: "What concentration of triazine should I use?",
    answer:
      "For oil and gas H2S scavenging, MEA Triazine at 78% active concentration is the industry standard — it provides maximum scavenging capacity per litre. For water treatment and lower-concentration applications, MMA Triazine at 40% is preferred. The choice depends on your application, H2S levels, and treatment method.",
  },
  {
    question: "What are the storage requirements for triazine H2S scavengers?",
    answer:
      "Store in sealed polyethylene or stainless steel containers at ambient temperature (ideally 5–40°C). Keep away from direct sunlight, strong acids, and oxidising agents. The storage area should be well-ventilated. Do not store in aluminium or galvanised steel containers. Refer to the MSDS for complete safety and storage information.",
  },
  {
    question: "How do I calculate the required dose of MEA Triazine?",
    answer:
      "The stoichiometric requirement is approximately 4.5 litres of MEA Triazine 78% per kilogram of H2S removed. In practice, an excess factor of 1.5–3x is applied depending on contact efficiency, temperature, and system configuration. Our technical team can help you calculate the optimal dosage for your specific application — contact us for a free dosage assessment.",
  },
];

export default function HowH2SScavengersWorkPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          {
            name: "How H2S Scavengers Work",
            url: `${SITE_URL}/how-h2s-scavengers-work`,
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Technical guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                How H2S Scavengers Work — A Complete Technical Guide
              </h1>
              <p className="text-secondary text-lg mt-6">
                A comprehensive guide to hydrogen sulfide removal chemistry,
                treatment methods, triazine reaction mechanisms, and dosage
                guidelines. Written by the technical team at Vasudev Chemo
                Pharma.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact">Contact our technical team</Button>
                <Button href="/contact?subject=sample" variant="outline">
                  Request free sample
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="py-8">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <nav className="bg-light rounded-2xl p-6 max-w-2xl">
              <h2 className="font-heading text-h5 font-semibold text-primary mb-4">
                Contents
              </h2>
              <ol className="space-y-2 list-decimal list-inside text-secondary">
                <li>
                  <a href="#what-is-h2s" className="hover:text-accent transition-colors">
                    What is Hydrogen Sulfide (H2S)?
                  </a>
                </li>
                <li>
                  <a href="#treatment-methods" className="hover:text-accent transition-colors">
                    Types of H2S Treatment Methods
                  </a>
                </li>
                <li>
                  <a href="#how-triazine-works" className="hover:text-accent transition-colors">
                    How Triazine H2S Scavengers Work
                  </a>
                </li>
                <li>
                  <a href="#dosage-guidelines" className="hover:text-accent transition-colors">
                    Dosage and Application Guidelines
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-accent transition-colors">
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-accent transition-colors">
                    About Vasudev Chemo Pharma
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Section 1: What is H2S */}
        <section id="what-is-h2s" className="py-16 bg-light scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              1. What is Hydrogen Sulfide (H2S)?
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Hydrogen sulfide (H2S) is a colourless, flammable gas with a
              characteristic &ldquo;rotten egg&rdquo; odour detectable at concentrations as
              low as 0.5 ppb. It occurs naturally in crude petroleum, natural
              gas, volcanic emissions, and hot springs. In industrial settings,
              H2S is generated during the bacterial decomposition of organic
              matter in anaerobic conditions — making it a common contaminant in
              oil and gas production, wastewater treatment, pulp and paper
              manufacturing, and geothermal energy production.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Sources of H2S
            </h3>
            <ul className="space-y-2 text-secondary">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Natural gas and crude oil:</strong> Sour gas reservoirs can contain H2S concentrations ranging from trace amounts to over 30%.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Wastewater:</strong> Sulphate-reducing bacteria in sewage systems produce H2S, causing odour and infrastructure corrosion.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Geothermal systems:</strong> H2S is a natural component of geothermal steam and fluids.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Industrial processes:</strong> Paper mills, food processing, and mining operations generate H2S as a by-product.</span>
              </li>
            </ul>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Hazards of H2S
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              H2S is extremely toxic by inhalation. At low concentrations
              (10–50 ppm), it causes eye and respiratory irritation. At
              100–150 ppm, it paralyses the olfactory nerve, eliminating the
              warning odour. Concentrations above 300 ppm can be fatal within
              minutes. Beyond personnel safety, H2S is highly corrosive to
              carbon steel and other metals, causing sulphide stress cracking
              (SSC) and pitting corrosion in pipelines, vessels, and equipment.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Regulatory Standards
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 pr-8 font-medium text-primary">Standard</th>
                    <th className="py-3 pr-8 font-medium text-primary">Limit</th>
                    <th className="py-3 font-medium text-primary">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-8 text-secondary">OSHA PEL</td>
                    <td className="py-3 pr-8 text-secondary">20 ppm</td>
                    <td className="py-3 text-secondary">8-hour time-weighted average ceiling</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-8 text-secondary">OSHA STEL</td>
                    <td className="py-3 pr-8 text-secondary">50 ppm</td>
                    <td className="py-3 text-secondary">10-minute peak exposure</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-8 text-secondary">NIOSH IDLH</td>
                    <td className="py-3 pr-8 text-secondary">50 ppm</td>
                    <td className="py-3 text-secondary">Immediately dangerous to life and health</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-8 text-secondary">ACGIH TLV</td>
                    <td className="py-3 pr-8 text-secondary">1 ppm</td>
                    <td className="py-3 text-secondary">8-hour TWA recommendation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </section>

        {/* Section 2: Treatment Methods */}
        <section id="treatment-methods" className="py-16 scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              2. Types of H2S Treatment Methods
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Several technologies exist for removing hydrogen sulfide from gas
              and liquid streams. The choice of method depends on H2S
              concentration, flow rate, operating conditions, and economics.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Physical Absorption (Amine Scrubbing)
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              Amine-based gas treating uses aqueous solutions of alkanolamines
              (MDEA, DEA, MEA) to absorb H2S from gas streams in an absorber
              column. The rich amine is then regenerated in a stripper column by
              heating, releasing concentrated H2S for conversion to sulphur via
              the Claus process. This method is suited for high-volume,
              continuous gas processing but requires significant capital
              investment and operating costs.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Chemical Scavenging
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              Chemical scavengers react irreversibly with H2S to form stable,
              non-toxic by-products. This is the most practical approach for
              low-to-moderate H2S levels and applications where amine systems
              are not economically justified. Common chemical scavengers include:
            </p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Triazine-based</strong> (MEA Triazine, MMA Triazine) — the most widely used liquid scavengers in oil and gas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Glyoxal-based</strong> — alternative liquid scavengers for specific applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Iron-based</strong> (iron sponge, iron oxide) — solid-bed scavengers for batch processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span><strong>Zinc-based</strong> — solid scavengers for high-temperature applications</span>
              </li>
            </ul>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Biological Treatment
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              Biological systems use sulphur-oxidising bacteria to convert H2S to
              elemental sulphur or sulphate. These are primarily used in
              wastewater treatment and biogas upgrading. While operating costs
              are low, biological systems require careful process control and are
              generally limited to low-to-moderate H2S concentrations.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Comparison of H2S Treatment Methods
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-3 pr-4 font-medium text-primary">Method</th>
                    <th className="py-3 pr-4 font-medium text-primary">Best for</th>
                    <th className="py-3 pr-4 font-medium text-primary">H2S range</th>
                    <th className="py-3 font-medium text-primary">CAPEX</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-secondary">Amine scrubbing</td>
                    <td className="py-3 pr-4 text-secondary">High-volume gas plants</td>
                    <td className="py-3 pr-4 text-secondary">High</td>
                    <td className="py-3 text-secondary">Very high</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-secondary">Triazine scavenging</td>
                    <td className="py-3 pr-4 text-secondary">Wellheads, pipelines, water treatment</td>
                    <td className="py-3 pr-4 text-secondary">Low–moderate</td>
                    <td className="py-3 text-secondary">Low</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-secondary">Iron sponge</td>
                    <td className="py-3 pr-4 text-secondary">Small gas streams, batch</td>
                    <td className="py-3 pr-4 text-secondary">Low–moderate</td>
                    <td className="py-3 text-secondary">Moderate</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 pr-4 text-secondary">Biological</td>
                    <td className="py-3 pr-4 text-secondary">Wastewater, biogas</td>
                    <td className="py-3 pr-4 text-secondary">Low</td>
                    <td className="py-3 text-secondary">Moderate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </section>

        {/* Section 3: How Triazine Works */}
        <section id="how-triazine-works" className="py-16 bg-light scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              3. How Triazine H2S Scavengers Work
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Triazine-based H2S scavengers are the most widely used liquid
              chemical scavengers in the oil and gas industry. They offer a
              simple, effective, and cost-efficient solution for removing
              hydrogen sulfide from gas and liquid streams.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              The Triazine–H2S Reaction
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine)
              reacts with hydrogen sulfide in an irreversible nucleophilic
              substitution reaction. The triazine ring opens and reacts with H2S
              to form dithiazine and trithiane as by-products, releasing
              monoethanolamine (MEA) in the process.
            </p>
            <div className="bg-white rounded-2xl p-6 mb-6">
              <p className="text-primary font-mono text-sm text-center">
                Triazine + 3 H2S → Dithiazine + Trithiane + 3 MEA
              </p>
              <p className="text-xs text-secondary text-center mt-2">
                Simplified reaction: each mole of triazine scavenges up to 3 moles of H2S
              </p>
            </div>
            <p className="text-secondary leading-relaxed mb-4">
              The reaction is fast and irreversible — once H2S reacts with
              triazine, it cannot be released back into the gas or liquid phase.
              The by-products (dithiazine and trithiane) are water-soluble and
              non-toxic, making disposal straightforward.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Why Triazine is Preferred for Liquid-Phase Systems
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              Triazine scavengers are liquid products that mix readily with
              aqueous and hydrocarbon streams. They can be injected via simple
              chemical dosing pumps without the need for absorber towers or
              regeneration equipment. This makes them ideal for:
            </p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Wellhead and pipeline injection in remote locations
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Gas-liquid contact towers (bubble towers, spray towers)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Wastewater treatment systems
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Any application where a solid bed scavenger is impractical
              </li>
            </ul>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              MEA Triazine vs MMA Triazine: When to Use Each
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>MEA Triazine 78%</strong> is the standard choice for oil
              and gas H2S scavenging. Its high active concentration (78%)
              delivers maximum scavenging capacity per litre, making it the most
              cost-effective option for applications with moderate-to-high H2S
              levels.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>MMA Triazine 40%</strong> is preferred for water
              treatment, paper mill, and lower-concentration applications. Its
              lower concentration makes it easier to dose precisely at the lower
              rates required in these applications.
            </p>
            <p className="text-secondary leading-relaxed">
              For a detailed comparison, see our{" "}
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="text-accent hover:underline font-medium"
              >
                MEA Triazine vs MMA Triazine comparison guide
              </Link>
              .
            </p>
          </div>
          </div>
        </section>

        {/* Section 4: Dosage Guidelines */}
        <section id="dosage-guidelines" className="py-16 scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              4. Dosage and Application Guidelines
            </h2>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Continuous Injection vs Batch Treatment
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>Continuous injection</strong> is the preferred method for
              ongoing H2S removal in pipelines, process streams, and water
              circuits. A chemical dosing pump injects triazine at a controlled
              rate proportional to the H2S load. This provides consistent
              protection and is the standard approach for oil and gas
              applications.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              <strong>Batch treatment</strong> is used for treating tanks,
              vessels, or contained volumes where H2S has accumulated. A
              calculated volume of triazine is added to the system and allowed to
              react over a contact period. This approach is common in wastewater
              holding tanks and well-testing operations.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              How to Calculate Required Dose
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              The theoretical stoichiometric ratio for MEA Triazine 78% is
              approximately <strong>4.5 litres per kilogram of H2S</strong>{" "}
              removed. In field applications, an excess factor of 1.5–3x is
              typically applied to account for:
            </p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Incomplete gas-liquid contact efficiency
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Temperature and pressure variations
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Competing side reactions with CO2 and organic acids
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                Target H2S level in treated stream
              </li>
            </ul>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              pH Considerations
            </h3>
            <p className="text-secondary leading-relaxed mb-4">
              Triazine scavengers perform best in neutral to slightly alkaline
              conditions (pH 7–9). At low pH (&lt;6), the triazine ring can
              hydrolyse prematurely, reducing scavenging efficiency. In acidic
              systems, pH adjustment or buffering may be required before triazine
              injection. The reaction itself releases MEA, which is mildly
              alkaline, so pH typically rises slightly as scavenging proceeds.
            </p>

            <h3 className="font-heading text-h4 font-semibold text-primary mt-8 mb-4">
              Temperature Effects
            </h3>
            <p className="text-secondary leading-relaxed">
              The triazine–H2S reaction rate increases with temperature. At
              typical oil and gas operating temperatures (20–80°C), the reaction
              is fast. At lower temperatures, contact time or excess chemical may
              need to be increased. MEA Triazine remains effective across the
              full range of temperatures encountered in oilfield and industrial
              applications. At temperatures above 80°C, triazine can begin to
              degrade, so alternative scavenger chemistries may be more
              appropriate for very high-temperature processes.
            </p>
          </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section id="faq" className="py-16 bg-light scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              5. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-2xl"
                >
                  <summary className="cursor-pointer p-5 font-medium text-primary list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
          </div>
        </section>

        {/* Section 6: About */}
        <section id="about" className="py-16 scroll-mt-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-4xl">
              <div>
                <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                  6. About Vasudev Chemo Pharma
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  Vasudev Chemo Pharma is an ISO 9001:2015 certified
                  manufacturer of triazine-based H2S scavengers and specialty
                  chemicals, based in Ankleshwar, Gujarat, India.
                </p>
                <ul className="space-y-3 text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    ISO 9001:2015 certified manufacturing facility
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Manufacturing MEA Triazine 78% and MMA Triazine 40%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Exporting to 10+ countries across the Middle East, Southeast Asia, Africa, and South America
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Located near Kandla, Mundra, and Hazira ports for fast export logistics
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    Free samples available for qualification testing
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="bg-light rounded-2xl p-6">
                  <h3 className="font-heading text-h5 font-semibold text-primary mb-2">
                    Products
                  </h3>
                  <p className="text-secondary text-sm">
                    MEA Triazine 78% (H2S scavenger) and MMA Triazine 40%
                    (water treatment, biocide) — both available in drums, IBCs,
                    and bulk tanker.
                  </p>
                </div>
                <div className="bg-light rounded-2xl p-6">
                  <h3 className="font-heading text-h5 font-semibold text-primary mb-2">
                    Documentation
                  </h3>
                  <p className="text-secondary text-sm">
                    COA, TDS, and MSDS provided with every shipment. Custom
                    labeling and branding available for bulk orders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/product"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Browse Products
                </h3>
                <p className="text-sm text-secondary mt-1">
                  View our full chemical product catalogue
                </p>
              </Link>
              <Link
                href="/industries/oil-gas-h2s-scavenger"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Oil & Gas Industry
                </h3>
                <p className="text-sm text-secondary mt-1">
                  MEA Triazine H2S scavenger for oil & gas operations
                </p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA vs MMA Triazine
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Which H2S scavenger should you choose?
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="relative rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
              <Image
                src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10">
                <h2 className="font-heading text-h2 font-semibold text-white mb-4">
                  Need help choosing the right H2S scavenger?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Our technical team can help you select the right product,
                  calculate dosages, and optimise your H2S treatment programme.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Contact our technical team</Button>
                  <Button href="/contact?subject=sample" variant="dark">
                    Request free sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
