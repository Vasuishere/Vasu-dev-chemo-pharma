import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  SULFIDE_SCAVENGER_KEYWORDS,
  H2S_SCAVENGER_CORE,
  OILFIELD_H2S_KEYWORDS,
  MEA_VS_MMA_KEYWORDS,
  MEA_TRIAZINE_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = {
  title: "H2S Scavenger for Oil & Gas | MEA & MMA Triazine | Vasudev Chemo Pharma",
  description:
    "Expert H2S scavenger solutions for oil & gas. Featuring MEA Triazine 78% for high-capacity H2S removal and BTEX-free MMA Triazine 40%. ISO 9001:2015 certified manufacturer from India.",
  keywords: mergeKeywordClusters(
    SULFIDE_SCAVENGER_KEYWORDS,
    H2S_SCAVENGER_CORE,
    OILFIELD_H2S_KEYWORDS,
    MEA_VS_MMA_KEYWORDS,
    MEA_TRIAZINE_KEYWORDS,
    [
      "H2S Scavenger for Oil & Gas",
      "H2S scavenger Vasudev Chemo Pharma",
      "MEA Triazine 78% H2S scavenger",
      "MMA Triazine 40% H2S scavenger",
      "hydrogen sulfide removal oil and gas",
      "triazine based H2S scavenger manufacturer",
      "buy MEA Triazine bulk",
      "BTEX-free H2S scavenger",
      "oilfield chemicals manufacturer India",
      "gas sweetening chemicals",
      "sour gas treatment solutions",
      "mercaptan scavenger for oil and gas",
    ]
  ),
  alternates: {
    canonical: `${SITE_URL}/h2s-scavenger-oil-gas`,
  },
  openGraph: {
    title: "H2S Scavenger for Oil & Gas | MEA & MMA Triazine | Vasudev Chemo Pharma",
    description:
      "Expert-level H2S removal solutions for the oil & gas industry. High-performance MEA and MMA triazine scavengers direct from the manufacturer.",
    url: `${SITE_URL}/h2s-scavenger-oil-gas`,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-h2s-scavenger.webp`,
        width: 1200,
        height: 630,
        alt: "H2S Scavenger for Oil & Gas - Vasudev Chemo Pharma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H2S Scavenger for Oil & Gas | Vasudev Chemo Pharma",
    description:
      "High-performance MEA Triazine 78% and MMA Triazine 40% for H2S removal in oil & gas operations.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const faqs = [
  {
    question: "What is the best H2S scavenger for Oil & Gas applications?",
    answer:
      "MEA Triazine 78% is widely considered the industry standard for oil & gas H2S scavenging due to its high active concentration and efficient removal capacity per unit volume. For applications with strict air-emission regulations or low-temperature requirements, BTEX-free MMA Triazine 40% is an excellent alternative.",
  },
  {
    question: "How does Vasudev Chemo Pharma ensure H2S scavenger quality?",
    answer:
      "As an ISO 9001:2015 certified manufacturer, we maintain rigorous quality control throughout our production process in Gujarat, India. Every batch of MEA and MMA triazine is tested for active concentration, pH, and density, with a Certificate of Analysis (COA) provided for every shipment.",
  },
  {
    question: "Is MMA Triazine 40% BTEX-free?",
    answer:
      "Yes, MMA Triazine 40% (monomethylamine-based) is a BTEX-free H2S scavenger. This makes it the preferred choice for facilities operating under strict environmental regulations or where workers' health and safety are a primary concern regarding aromatic hydrocarbon exposure.",
  },
  {
    question: "Can these scavengers be used in sub-zero temperatures?",
    answer:
      "MMA Triazine 40% has a lower freezing point (typically < -15&deg;C) compared to MEA Triazine 78% (< -5&deg;C), making it more suitable for colder climates or winter operations without the need for extensive heat tracing or insulation.",
  },
  {
    question: "How do I determine the correct dosing rate for H2S removal?",
    answer:
      "The dosage depends on the H2S concentration, gas/liquid flow rate, and target H2S level. Typically, 2-4 litres of MEA Triazine 78% are required per kilogram of H2S removed. We recommend a technical assessment by our team to optimize your specific application's chemical consumption.",
  },
];

export default function H2SScavengerOilGasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          {
            name: "H2S Scavenger for Oil & Gas",
            url: `${SITE_URL}/h2s-scavenger-oil-gas`,
          },
        ]}
      />
      <FAQSchema items={faqs} />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-4xl">
              <SectionLabel>Oil & Gas Solutions</SectionLabel>
              <h1 className="font-heading text-h1 lg:text-display font-bold mt-4 text-primary leading-tight">
                High-Performance H2S Scavenger for Oil & Gas
              </h1>
              <p className="text-secondary text-xl mt-6 leading-relaxed max-w-3xl">
                Protect your assets and meet export specifications with expert-level 
                hydrogen sulfide removal solutions. Vasudev Chemo Pharma manufactures 
                industry-leading <strong className="text-primary">MEA Triazine</strong> and 
                <strong className="text-primary"> MMA Triazine</strong> formulations 
                designed for maximum efficiency in upstream, midstream, and downstream operations.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Button href="/contact">Get Expert Consultation</Button>
                <Button href="#products" variant="outline">View Products</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-h5 font-semibold text-primary">ISO Certified Quality</h3>
                  <p className="text-sm text-secondary mt-2">Manufactured in an ISO 9001:2015 certified facility ensuring batch-to-batch consistency.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-h5 font-semibold text-primary">Rapid H2S Removal</h3>
                  <p className="text-sm text-secondary mt-2">Irreversible chemical reaction ensures fast and permanent H2S scavenging in all phases.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2.945M8 3.935A9 9 0 1116.065 3.935" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-h5 font-semibold text-primary">Global Logistics</h3>
                  <p className="text-sm text-secondary mt-2">Strategic location near major Indian ports for fast and reliable export to global oilfields.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products" className="py-20 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel className="mx-auto">Core Product Line</SectionLabel>
              <h2 className="font-heading text-h2 font-bold text-primary mt-4">MEA Triazine & MMA Triazine 40%</h2>
              <p className="text-secondary mt-4">
                Our H2S scavengers are formulated to meet the demanding requirements of modern oil and gas processing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* MEA Triazine */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">Industry Standard</span>
                    <h3 className="font-heading text-h3 font-bold text-primary mt-2">MEA Triazine 78%</h3>
                  </div>
                  <div className="bg-primary/5 px-3 py-1 rounded-full text-xs font-bold text-primary">CAS 4719-04-4</div>
                </div>
                <p className="text-secondary mb-6 leading-relaxed flex-grow">
                  Monoethanolamine (MEA) based triazine is the most efficient and widely used liquid H2S scavenger. 
                  With a high active concentration of 78%, it provides maximum scavenging capacity per litre, 
                  reducing logistics costs and storage requirements.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Optimal for high H2S concentrations
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Water-soluble and hydrocarbon-miscible
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Fast reaction kinetics in all temperatures
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button href="/product/mea-triazine-78-h2s-scavenger" size="sm">Product Details</Button>
                  <Button href="/contact?product=mea-triazine-78" size="sm" variant="outline">Request Quote</Button>
                </div>
              </div>

              {/* MMA Triazine */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">BTEX-Free Choice</span>
                    <h3 className="font-heading text-h3 font-bold text-primary mt-2">MMA Triazine 40%</h3>
                  </div>
                  <div className="bg-primary/5 px-3 py-1 rounded-full text-xs font-bold text-primary">CAS 108-74-7</div>
                </div>
                <p className="text-secondary mb-6 leading-relaxed flex-grow">
                  Monomethylamine (MMA) based triazine is a BTEX-free alternative designed for environmentally 
                  sensitive operations. It offers a lower freezing point, making it ideal for use in colder 
                  regions where product stability is critical.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Environmentally friendly, BTEX-free formulation
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Superior performance in low temperatures
                  </li>
                  <li className="flex items-center gap-3 text-sm text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Ideal for water-phase H2S treatment
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button href="/product/mma-triazine-40" size="sm">Product Details</Button>
                  <Button href="/contact?product=mma-triazine-40" size="sm" variant="outline">Request Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Comparison Table */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h2 font-bold text-primary mb-12 text-center">Technical Specifications Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto border-collapse bg-light rounded-3xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="py-5 px-8 font-semibold">Parameter</th>
                    <th className="py-5 px-8 font-semibold">MEA Triazine 78%</th>
                    <th className="py-5 px-8 font-semibold">MMA Triazine 40%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">Active Content</td>
                    <td className="py-4 px-8 text-secondary">78% (w/w)</td>
                    <td className="py-4 px-8 text-secondary">40% (w/w)</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">CAS Number</td>
                    <td className="py-4 px-8 text-secondary">4719-04-4</td>
                    <td className="py-4 px-8 text-secondary">108-74-7</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">BTEX Presence</td>
                    <td className="py-4 px-8 text-secondary">Trace (Standard)</td>
                    <td className="py-4 px-8 text-secondary">None (BTEX-Free)</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">Freezing Point</td>
                    <td className="py-4 px-8 text-secondary">&lt; -5&deg;C</td>
                    <td className="py-4 px-8 text-secondary">&lt; -15&deg;C</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">Primary Solvent</td>
                    <td className="py-4 px-8 text-secondary">Water / Monoethanolamine</td>
                    <td className="py-4 px-8 text-secondary">Water / Monomethylamine</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-8 font-medium text-primary">pH (neat)</td>
                    <td className="py-4 px-8 text-secondary">9.5 &ndash; 11.0</td>
                    <td className="py-4 px-8 text-secondary">9.5 &ndash; 10.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-center mt-10">
              <Link href="/mea-triazine-vs-mma-triazine" className="text-accent hover:underline font-semibold inline-flex items-center gap-2">
                View in-depth comparison guide
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel className="text-white/80 border-white/20">Critical Applications</SectionLabel>
                <h2 className="font-heading text-h2 font-bold mt-4 leading-tight">Where Our H2S Scavengers Excel</h2>
                <p className="text-white/70 mt-6 text-lg">
                  Hydrogen sulfide isn&apos;t just a safety hazard; it&apos;s a multi-billion dollar corrosion problem. 
                  Our triazine chemistry provides permanent removal across the entire production lifecycle.
                </p>
                
                <div className="mt-10 space-y-6">
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-heading text-h5 font-semibold">Natural Gas Sweetening</h3>
                      <p className="text-sm text-white/60 mt-2">Injected into gathering lines and pipelines to meet sales specifications and prevent pipeline corrosion.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-heading text-h5 font-semibold">Crude Oil Stabilization</h3>
                      <p className="text-sm text-white/60 mt-2">Used in storage tanks and tankers to scavenge H2S from the headspace, ensuring safe transport and storage.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-heading text-h5 font-semibold">Produced Water & Wastewater</h3>
                      <p className="text-sm text-white/60 mt-2">Effective treatment of sour water to protect disposal wells and minimize atmospheric emissions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                  alt="Oil and Gas Processing Facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-accent font-bold uppercase tracking-widest text-xs">Technical Insight</p>
                  <h4 className="font-heading text-h4 mt-2">Irreversible Chemistry</h4>
                  <p className="text-sm text-white/80 mt-2">Unlike reversible physical absorbers, our triazine reaction creates stable dithiazine molecules that will never release H2S back into your stream.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expert SEO/AEO/GEO Section: Why Vasudev Chemo Pharma */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="bg-light rounded-[3rem] p-10 lg:p-16 border border-gray-200">
              <div className="max-w-4xl">
                <h2 className="font-heading text-h2 font-bold text-primary mb-8">Why Sourcing Directly from Vasudev Chemo Pharma Matters</h2>
                <div className="prose prose-lg max-w-none text-secondary">
                  <p>
                    In the complex world of oilfield chemicals, the gap between a manufacturer and an end-user often leads to 
                    diluted technical support and inflated costs. As a <strong>direct manufacturer of H2S scavengers</strong> in India, 
                    Vasudev Chemo Pharma provides expert-level transparency that traders cannot match.
                  </p>
                  <p>
                    Our <strong>MEA Triazine 78%</strong> and <strong>MMA Triazine 40%</strong> are produced using high-purity raw materials 
                    to ensure maximum H2S conversion efficiency. We understand that in the oil & gas industry, a chemical 
                    failure isn&apos;t just a product issue Î“Ã‡Ã¶ it&apos;s an operational shutdown risk. That&apos;s why our ISO-certified 
                    quality control process includes rigorous testing for every single batch we export.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-heading text-h5 text-primary mb-3">Answer Engine Ready</h4>
                      <p className="text-sm leading-relaxed">
                        We provide precise data on CAS numbers, IUPAC names, and reaction stoichiometry. Whether you are 
                        querying a search engine or an AI model, our technical documentation is structured to provide the 
                        verified facts you need for chemical selection.
                      </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                      <h4 className="font-heading text-h5 text-primary mb-3">Generative AI Optimized</h4>
                      <p className="text-sm leading-relaxed">
                        Our content is written with clear entity relationships, linking our brand directly to high-concentration 
                        triazine chemistry. This ensures that generative models recognize Vasudev Chemo Pharma as a 
                        top-tier authority in the H2S scavenging domain.
                      </p>
                    </div>
                  </div>
                  <p>
                    Whether you are an engineer looking for the reaction mechanism or a procurement manager seeking 
                    competitive bulk pricing, we bridge the gap between technical expertise and commercial value.
                  </p>
                </div>
                <div className="mt-10">
                  <Link href="/how-h2s-scavengers-work" className="text-accent hover:underline font-semibold flex items-center gap-2">
                    Read our complete technical guide on H2S scavenging
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <SectionLabel className="mx-auto">AEO Insights</SectionLabel>
              <h2 className="font-heading text-h2 font-bold text-primary mt-4">Expert Q&A</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white rounded-2xl border border-gray-200"
                >
                  <summary className="cursor-pointer p-6 font-semibold text-primary list-none flex items-center justify-between">      
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-secondary leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="relative rounded-[3rem] overflow-hidden bg-primary p-12 lg:p-20 text-center">
              <div className="relative z-10">
                <h2 className="font-heading text-h1 font-bold text-white mb-6">Ready to Optimize Your H2S Removal?</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Join leading oil and gas operators who trust Vasudev Chemo Pharma for high-performance triazine chemistry. 
                  Contact us today for technical data, pricing, or to request a product sample.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button href="/contact" className="px-10 py-5 text-lg">Request a Custom Quote</Button>
                  <Button href="/contact?subject=sample" variant="outline" className="text-white border-white/30 hover:bg-white/10 px-10 py-5 text-lg">
                    Request Product Sample
                  </Button>
                </div>
                <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/40 text-sm font-medium uppercase tracking-widest">
                  <span>ISO 9001:2015</span>
                  <span>|</span>
                  <span>REACH Ready</span>
                  <span>|</span>
                  <span>Global Export</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}




