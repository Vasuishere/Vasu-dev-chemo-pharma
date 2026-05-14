import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const SITE_URL = "https://www.vasudevchemopharma.com";

export const metadata: Metadata = applyPageMetaOverride("/hydrotropes-global-export", {
  title: "Global Export: Sodium Cumene Sulphonate & Sodium Xylene Sulphonate | Vasudev Chemo Pharma",
  description:
    "Leading global exporter of Sodium Cumene Sulphonate (SCS) and Sodium Xylene Sulphonate (SXS) in 40% liquid and 90% powder forms. We supply to USA, Europe, Asia, and worldwide.",
  keywords: [
    "Sodium Cumene Sulphonate export",
    "Sodium Xylene Sulphonate supplier",
    "buy SCS 40% liquid bulk",
    "SXS 90% powder exporter",
    "SCS 90% powder manufacturer India",
    "hydrotrope export to USA",
    "SXS 40% supplier Germany",
    "Sodium Cumene Sulphonate buyer Brazil",
    "global chemical export India",
  ],
  alternates: {
    canonical: `${SITE_URL}/hydrotropes-global-export`,
  },
});

const products = [
  {
    name: "Sodium Cumene Sulphonate 40% (SCS 40%) Liquid",
    description: "High-performance liquid hydrotrope for concentrated liquid detergents and industrial cleaners.",
  },
  {
    name: "Sodium Cumene Sulphonate 90% (SCS 90%) Powder",
    description: "Concentrated powder form for dry-mix formulations and high-active detergent powders.",
  },
  {
    name: "Sodium Xylene Sulphonate 40% (SXS 40%) Liquid",
    description: "Effective coupling agent and solubilizer for household and institutional cleaning systems.",
  },
  {
    name: "Sodium Xylene Sulphonate 90% (SXS 90%) Powder",
    description: "Pure powder hydrotrope designed for maximum stability in alkaline and high-electrolyte cleaners.",
  },
];

const exportCountries = [
  {
    country: "United States",
    demand: "High demand for premium SCS 90% and SXS 40% for advanced detergent formulations.",
    line: "We are a leading exporter of Sodium Cumene Sulphonate 40% and 90% to the United States. Buy high-purity SXS in the USA directly from the manufacturer.",
  },
  {
    country: "China",
    demand: "Major importer of specialty hydrotropes for industrial cleaning and textile processing.",
    line: "Vasudev Chemo Pharma is your reliable Sodium Xylene Sulphonate supplier in China. We export bulk SCS 90% powder to major Chinese industrial hubs.",
  },
  {
    country: "Brazil",
    demand: "Growing market for SCS 40% liquid in the personal care and home care manufacturing sectors.",
    line: "We export Sodium Cumene Sulphonate 40% to Brazil with competitive CIF pricing. Contact us to buy bulk hydrotropes in Brazil.",
  },
  {
    country: "Germany",
    demand: "Strict quality requirements for high-purity SXS 90% powder in European detergent standards.",
    line: "We are a preferred Sodium Xylene Sulphonate 90% exporter to Germany. Our products meet the highest European quality and purity standards.",
  },
  {
    country: "Japan",
    demand: "Precision industrial cleaning and high-end cosmetic grade SCS requirements.",
    line: "Exporting premium Sodium Cumene Sulphonate to Japan. We supply high-stability SXS for Japanese industrial cleaning applications.",
  },
  {
    country: "South Korea",
    demand: "Demand driven by the personal care (K-beauty) and electronics cleaning industries.",
    line: "We export Sodium Xylene Sulphonate 40% to South Korea. Partner with us for reliable SCS 90% supply in Seoul and Busan.",
  },
  {
    country: "Italy",
    demand: "Pharmaceutical intermediates and specialized institutional cleaning product formulations.",
    line: "Leading Sodium Cumene Sulphonate supplier for the Italian market. We export bulk hydrotropes to Italy for diverse industrial applications.",
  },
  {
    country: "France",
    demand: "Luxury cosmetic formulations and advanced surfactant systems requiring SCS 90%.",
    line: "We are a primary exporter of Sodium Cumene Sulphonate 90% powder to France. Buy pure SCS in France for high-end cosmetic formulations.",
  },
  {
    country: "United Kingdom",
    demand: "Steady demand for household laundry liquids and professional cleaning chemicals.",
    line: "Exporting Sodium Xylene Sulphonate 40% liquid to the UK. We are the trusted SCS supplier for British chemical formulators.",
  },
  {
    country: "Vietnam",
    demand: "Rapidly expanding manufacturing hub for global consumer goods and detergents.",
    line: "We export Sodium Cumene Sulphonate and Sodium Xylene Sulphonate to Vietnam. Bulk supply available for major manufacturing zones in Vietnam.",
  },
];

export default function HydrotropesGlobalExportPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Global Export", url: `${SITE_URL}/hydrotropes-global-export` },
        ]}
      />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-primary text-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl">
              <SectionLabel className="text-white/80 border-white/20">Global Reach</SectionLabel>
              <h1 className="font-heading text-h1 lg:text-display font-bold mt-4 leading-tight">
                Global Exporter of Sodium Cumene & Xylene Sulphonate
              </h1>
              <p className="text-white/70 text-xl mt-6 leading-relaxed">
                Vasudev Chemo Pharma is a premier manufacturer and international supplier of high-purity hydrotropes. 
                From our ISO-certified facility in India, we deliver superior chemical solutions to every corner of the globe.
              </p>
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 mt-10">
                <p className="text-accent font-semibold text-lg italic">
                  &ldquo;We export to any corner of the world, ensuring that Vasudev Chemo Pharma is your single, 
                  reliable source for high-purity hydrotropes globally.&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Button href="/contact">Request Export Quote</Button>
                <Button href="#countries" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Export Destinations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel className="mx-auto">Export Portfolio</SectionLabel>
              <h2 className="font-heading text-h2 font-bold text-primary mt-4">Our Hydrotrope Range</h2>
              <p className="text-secondary mt-4">
                We manufacture and export the following core hydrotropes, available in both liquid and powder forms 
                to suit your formulation requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div key={product.name} className="p-8 bg-light rounded-3xl border border-gray-100 flex flex-col h-full">
                  <h3 className="font-heading text-h4 font-bold text-primary mb-4">{product.name}</h3>
                  <p className="text-secondary leading-relaxed mb-6 flex-grow">{product.description}</p>
                  <Button href={`/product/${product.name.toLowerCase().replace(/ /g, "-").replace(/\(|\)/g, "").split("-")[0]}-${product.name.toLowerCase().includes("cumene") ? "cumene" : "xylene"}-sulfonate-${product.name.includes("40%") ? "40" : "90"}`} variant="outline" size="sm">
                    Technical Specifications
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Trade Data & Destinations */}
        <section id="countries" className="py-20 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel className="mx-auto">Global Trade</SectionLabel>
              <h2 className="font-heading text-h2 font-bold text-primary mt-4">Top 10 Export Destinations</h2>
              <p className="text-secondary mt-4">
                Reliable supply chain and expert logistics handling for the world&apos;s most demanding markets.
              </p>
            </div>

            <div className="overflow-x-auto mb-16">
              <table className="w-full bg-white rounded-3xl overflow-hidden shadow-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="py-5 px-8 font-semibold">Destination Country</th>
                    <th className="py-5 px-8 font-semibold">Primary Industrial Demand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {exportCountries.map((item) => (
                    <tr key={item.country} className="hover:bg-primary/5 transition-colors">
                      <td className="py-4 px-8 font-bold text-primary">{item.country}</td>
                      <td className="py-4 px-8 text-secondary">{item.demand}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exportCountries.map((item) => (
                <div key={item.country} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h4 className="font-heading text-h5 font-bold text-primary mb-3">{item.country} Export Services</h4>
                  <p className="text-sm text-secondary leading-relaxed italic border-l-4 border-accent pl-4">
                    {item.line}
                  </p>
                  <div className="mt-4 flex gap-4">
                    <Link href="/contact" className="text-xs font-bold text-accent uppercase tracking-widest hover:underline">
                      Request quote for {item.country}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logistics & Quality */}
        <section className="py-20 bg-white">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionLabel>Export Excellence</SectionLabel>
                <h2 className="font-heading text-h2 font-bold text-primary mt-4 leading-tight">
                  Logistics & Quality Assurance for Global Trade
                </h2>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent font-bold">01</div>
                    <div>
                      <h4 className="font-heading text-h5 font-semibold text-primary">Strategic Export Hub</h4>
                      <p className="text-sm text-secondary mt-1">Located in Gujarat, India, with direct access to major international ports (Mundra, Kandla, Nhava Sheva) for fast global shipping.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent font-bold">02</div>
                    <div>
                      <h4 className="font-heading text-h5 font-semibold text-primary">Compliance & Documentation</h4>
                      <p className="text-sm text-secondary mt-1">Complete export documentation including COA, MSDS, REACH compliance data, and country-specific certificates.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent font-bold">03</div>
                    <div>
                      <h4 className="font-heading text-h5 font-semibold text-primary">Custom Packaging</h4>
                      <p className="text-sm text-secondary mt-1">Available in 210L HDPE drums, 1000L IBC tanks, and bulk bags with palletization and shrink-wrapping for safe transit.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light p-10 lg:p-16 rounded-[3rem] border border-gray-100">
                <h3 className="font-heading text-h3 font-bold text-primary mb-6">Expert Technical Support</h3>
                <p className="text-secondary leading-relaxed mb-8">
                  Our international trade team provides more than just chemicals. We provide technical formulation support 
                  to ensure our hydrotropes perform optimally in your specific region&apos;s water conditions and regulatory environment.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">10+</p>
                    <p className="text-xs text-secondary uppercase tracking-widest font-semibold mt-1">Countries</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-accent">ISO</p>
                    <p className="text-xs text-secondary uppercase tracking-widest font-semibold mt-1">9001:2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-primary">
          <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
            <h2 className="font-heading text-h1 font-bold text-white mb-6">Partner with India&apos;s Leading Hydrotrope Exporter</h2>
            <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you are located in the Americas, Europe, or Asia, Vasudev Chemo Pharma provides the reliability 
              and quality your business demands.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button href="/contact" className="px-10 py-5 text-lg">Contact for Export Pricing</Button>
              <Button href="mailto:info@vasudevchemopharma.com" variant="outline" className="text-white border-white/30 hover:bg-white/10 px-10 py-5 text-lg">
                Email Our Export Desk
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
