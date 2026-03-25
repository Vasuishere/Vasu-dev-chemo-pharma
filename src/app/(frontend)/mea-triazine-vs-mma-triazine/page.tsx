import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = {
  title:
    "MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You Choose? | Vasudev Chemo Pharma",
  description:
    "Compare MEA Triazine 78% and MMA Triazine 40% — active content, applications, dosage, and pricing. Find out which triazine H2S scavenger is right for your industry.",
  keywords: [
    "MEA Triazine vs MMA Triazine",
    "difference between MEA and MMA triazine",
    "which triazine to use",
    "MEA Triazine 78 vs MMA Triazine 40",
    "triazine comparison H2S scavenger",
  ],
  alternates: {
    canonical: `${SITE_URL}/mea-triazine-vs-mma-triazine`,
  },
  openGraph: {
    title: "MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You Choose?",
    description:
      "Side-by-side comparison of MEA Triazine 78% and MMA Triazine 40% for H2S scavenging, water treatment, and biocide applications.",
    url: `${SITE_URL}/mea-triazine-vs-mma-triazine`,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You Choose?",
    description:
      "Side-by-side comparison of MEA Triazine 78% and MMA Triazine 40% for H2S scavenging applications.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const faqs = [
  {
    question: "What is the main difference between MEA and MMA Triazine?",
    answer:
      "The main difference is the active concentration and primary application. MEA Triazine has 78% active content and is designed for oil and gas H2S scavenging where maximum scavenging capacity per litre is needed. MMA Triazine has 40% active content and is used for water treatment, paper mills, and biocide applications where lower, more precise dosing is required.",
  },
  {
    question: "Can I use MEA Triazine for water treatment instead of MMA?",
    answer:
      "Technically yes, but MMA Triazine 40% is preferred for water treatment because its lower concentration allows for more precise dosing at the lower rates typically required. Using MEA Triazine 78% for water treatment would require very small injection volumes, making accurate dosing more difficult.",
  },
  {
    question: "Which triazine is more cost-effective?",
    answer:
      "For H2S scavenging, MEA Triazine 78% is more cost-effective per kilogram of H2S removed due to its higher active concentration — you need less product volume. For water treatment and biocide applications, MMA Triazine 40% is more cost-effective because it provides the right concentration range for those applications without overdosing.",
  },
  {
    question: "Can MEA Triazine and MMA Triazine be used together?",
    answer:
      "They are not typically used together in the same system. Each product is formulated for different application requirements. However, a facility that operates both oil and gas processing and wastewater treatment might use MEA Triazine for gas sweetening and MMA Triazine for their water treatment system.",
  },
  {
    question: "Do you supply both MEA and MMA Triazine?",
    answer:
      "Yes. Vasudev Chemo Pharma manufactures both MEA Triazine 78% and MMA Triazine 40% at our ISO 9001:2015 certified facility in Gujarat, India. Both products are available in 220L drums, IBC 1000L, and bulk tanker quantities. Contact us for pricing and free samples.",
  },
];

export default function MeaVsMmaTriazinePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          {
            name: "MEA Triazine vs MMA Triazine",
            url: `${SITE_URL}/mea-triazine-vs-mma-triazine`,
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Comparison guide</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You
                Choose?
              </h1>
              <p className="text-secondary text-lg mt-6">
                Both MEA Triazine and MMA Triazine are effective triazine-based
                H2S scavengers, but they are designed for different applications.
                This guide helps you choose the right product for your industry
                and operating conditions.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button href="/contact">Request technical guidance</Button>
                <Button href="/contact?subject=tds" variant="outline">
                  Download both TDS
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="py-16 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8 text-center">
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="py-4 pr-6 font-medium text-primary">Property</th>
                    <th className="py-4 pr-6 font-medium text-primary">
                      MEA Triazine 78%
                    </th>
                    <th className="py-4 font-medium text-primary">
                      MMA Triazine 40%
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Active content", "78% (w/w)", "40% (w/w)"],
                    [
                      "Chemical name",
                      "1,3,5-Tri(2-hydroxyethyl)-hexahydro-s-triazine",
                      "Hexahydro-1,3,5-trimethyl-s-triazine",
                    ],
                    ["CAS Number", "4719-04-4", "108-74-7"],
                    [
                      "Primary use",
                      "Oil & gas H2S scavenging",
                      "Water treatment, paper mills, biocide",
                    ],
                    [
                      "Typical dosage (H2S scavenging)",
                      "5–10 ppm",
                      "10–20 ppm",
                    ],
                    ["Appearance", "Clear to slightly yellow liquid", "Clear liquid"],
                    [
                      "Packaging",
                      "220L drums, IBC 1000L, bulk tanker",
                      "220L drums, IBC 1000L",
                    ],
                    ["MOQ (Export)", "1 MT", "1 MT"],
                    ["Lead time (Export)", "10–15 days", "10–15 days"],
                    [
                      "Best for",
                      "Maximum scavenging per litre",
                      "Precise low-rate dosing",
                    ],
                  ].map(([property, mea, mma]) => (
                    <tr key={property} className="border-b border-gray-200">
                      <td className="py-3 pr-6 font-medium text-primary">
                        {property}
                      </td>
                      <td className="py-3 pr-6 text-secondary">{mea}</td>
                      <td className="py-3 text-secondary">{mma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* When to choose MEA */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
                  When to Choose MEA Triazine 78%
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  MEA Triazine at 78% active concentration is the industry
                  standard for oil and gas H2S scavenging. Choose MEA Triazine
                  when:
                </p>
                <div className="space-y-3">
                  {[
                    "You need maximum H2S scavenging capacity per litre",
                    "Application is upstream, midstream, or downstream oil & gas",
                    "H2S concentrations are moderate to high (>50 ppm in gas)",
                    "You are injecting into gas pipelines or process streams",
                    "Chemical logistics cost is a concern — higher concentration means less volume shipped",
                    "You need to meet API/NACE H2S limits in treated gas",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        className="flex-shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5L5.5 9L14 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/industries/oil-gas-h2s-scavenger" variant="outline">
                    Oil & gas industry page
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
                  When to Choose MMA Triazine 40%
                </h2>
                <p className="text-secondary leading-relaxed mb-4">
                  MMA Triazine at 40% active concentration is designed for water
                  treatment, paper mills, and biocide applications. Choose MMA
                  Triazine when:
                </p>
                <div className="space-y-3">
                  {[
                    "Application is wastewater treatment or municipal water systems",
                    "You need precise dosing at lower chemical rates",
                    "Using triazine as a biocide or slimicide (e.g. metalworking fluids, paper mills)",
                    "H2S concentrations are low (<50 ppm in liquid phase)",
                    "Regulatory requirements favour lower-concentration formulations",
                    "The product will be added to biological or aqueous systems",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        className="flex-shrink-0 mt-1"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5L5.5 9L14 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </svg>
                      <span className="text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button href="/industries/water-treatment" variant="outline">
                    Water treatment industry page
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Can they be used together? */}
        <section className="py-16 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              Can They Be Used Together?
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              MEA Triazine and MMA Triazine are not typically blended or used in
              the same system. Each product is optimised for its target
              application — mixing them would dilute the advantages of each.
            </p>
            <p className="text-secondary leading-relaxed mb-4">
              However, many facilities operate multiple systems that benefit from
              different triazine products. For example, an oil and gas
              processing facility might use:
            </p>
            <ul className="space-y-2 text-secondary mb-4">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <strong>MEA Triazine 78%</strong> for gas sweetening and
                pipeline injection
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <strong>MMA Triazine 40%</strong> for their produced water
                treatment system
              </li>
            </ul>
            <p className="text-secondary leading-relaxed">
              As a manufacturer of both products, we can supply your complete
              triazine requirements from a single source — simplifying
              procurement, logistics, and technical support.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 max-w-3xl">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-light rounded-2xl"
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
        </section>

        {/* Internal links */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/industries/oil-gas-h2s-scavenger"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Oil & Gas
                </h3>
                <p className="text-sm text-secondary mt-1">
                  MEA Triazine for H2S scavenging
                </p>
              </Link>
              <Link
                href="/industries/water-treatment"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Water Treatment
                </h3>
                <p className="text-sm text-secondary mt-1">
                  MMA Triazine for wastewater
                </p>
              </Link>
              <Link
                href="/industries/metal-working-fluids"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Metal Working Fluids
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Triazine biocide for cutting fluids
                </p>
              </Link>
              <Link
                href="/how-h2s-scavengers-work"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Technical Guide
                </h3>
                <p className="text-sm text-secondary mt-1">
                  How H2S scavengers work
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
                  Not sure which triazine you need?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Tell us about your application and our technical team will
                  recommend the right product, concentration, and dosage.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Request technical guidance</Button>
                  <Button href="/contact?subject=sample" variant="dark">
                    Request free samples
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
