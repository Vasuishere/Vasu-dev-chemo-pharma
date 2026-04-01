import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const SITE_URL = "https://www.vasudevchemopharma.com";

const industries = [
  {
    slug: "oil-gas-h2s-scavenger",
    title: "Oil & Gas",
    description:
      "MEA Triazine 78% H2S scavenger for upstream, midstream, and downstream oil and gas operations. Pipeline injection, wellhead treatment, and gas processing.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
  },
  {
    slug: "refining",
    title: "Refining",
    description:
      "H2S scavenger for petroleum refinery operations. Crude unit overheads, FCC off-gas, and tank vapour treatment with MEA Triazine 78%.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
  },
  {
    slug: "petrochemical",
    title: "Petrochemical",
    description:
      "MEA Triazine 78% for H2S control in petrochemical complexes. Crackers, reformers, amine overheads, and sour water strippers.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
  },
  {
    slug: "biogas",
    title: "Biogas & Biomethane",
    description:
      "MEA Triazine 78% for H2S removal from biogas, landfill gas, and anaerobic digester output. Protects engines and upgrading equipment.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
  },
  {
    slug: "water-treatment",
    title: "Water & Wastewater Treatment",
    description:
      "Triazine H2S scavenger and biocide for municipal and industrial water treatment. Odour control and microbial management.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
  },
  {
    slug: "metal-working-fluids",
    title: "Metalworking Fluids",
    description:
      "Triazine biocide for cutting fluid and coolant preservation. Formaldehyde-releasing biocide effective against bacteria, fungi, and algae.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/metal-working-fluids.svg",
  },
  {
    slug: "paper-mill",
    title: "Pulp & Paper",
    description:
      "MEA Triazine slimicide for pulp and paper mills. Biofilm and slime control in white water systems and paper machine wet ends.",
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Paper_Mill_Treatment_Vasudev_Chemo_Pharma.png",
  },
];

export const metadata: Metadata = {
  title: "Industry Solutions — MEA Triazine & H2S Scavenger Applications | Vasudev Chemo Pharma",
  description:
    "Explore MEA Triazine 78% industry applications: oil & gas, refining, petrochemical, biogas, water treatment, metalworking fluids, and pulp & paper. Direct manufacturer supply from India.",
  keywords: [
    "MEA Triazine industry applications",
    "H2S scavenger applications by industry",
    "industries using MEA Triazine 78%",
    "industries using MMA Triazine 40%",
    "oil and gas H2S scavenger manufacturer India",
    "oil and gas MEA Triazine supplier",
    "refinery H2S scavenger manufacturer",
    "refinery MEA Triazine supplier India",
    "petrochemical H2S treatment chemical supplier",
    "petrochemical MEA Triazine manufacturer",
    "biogas H2S removal chemical supplier",
    "biogas MEA Triazine manufacturer India",
    "wastewater H2S scavenger supplier",
    "wastewater MMA Triazine manufacturer",
    "metalworking fluid triazine biocide supplier",
    "metalworking fluid preservative manufacturer India",
    "paper mill slimicide manufacturer",
    "paper industry triazine biocide supplier",
    "buy MEA Triazine for oil and gas",
    "buy MEA Triazine for refinery operations",
    "buy MEA Triazine for petrochemical plants",
    "buy MEA Triazine for biogas purification",
    "buy MMA Triazine for wastewater treatment",
    "buy triazine biocide for metalworking fluids",
    "buy slimicide for pulp and paper mills",
    "MEA Triazine supplier for upstream production",
    "MEA Triazine supplier for midstream gas pipelines",
    "MEA Triazine supplier for downstream processing",
    "H2S scavenger supplier for crude oil sweetening",
    "H2S scavenger supplier for natural gas sweetening",
    "H2S scavenger supplier for pipeline injection",
    "H2S scavenger supplier for refinery overhead systems",
    "H2S scavenger supplier for FCC off gas treatment",
    "H2S scavenger supplier for petrochemical amine overheads",
    "H2S scavenger supplier for sour water strippers",
    "H2S scavenger supplier for landfill gas treatment",
    "H2S scavenger supplier for biomethane upgrading",
    "H2S scavenger supplier for sewage treatment plants",
    "H2S scavenger supplier for industrial effluent treatment",
    "triazine biocide supplier for cutting oil preservation",
    "triazine biocide supplier for coolant sump life extension",
    "paper mill anti slime chemical manufacturer",
    "white water slimicide supplier India",
    "industrial H2S scavenger manufacturer Gujarat",
    "direct manufacturer of MEA Triazine in India",
    "direct manufacturer of MMA Triazine in India",
    "ISO 9001 chemical manufacturer for oilfield applications",
    "technical guide for choosing H2S scavenger by industry",
    "best H2S scavenger for oil and gas operations",
    "best H2S scavenger for wastewater systems",
    "best H2S scavenger for biogas plants",
    "best triazine biocide for metalworking fluids",
    "best slimicide for paper machine white water",
    "how MEA Triazine is used in refineries",
    "how MEA Triazine is used in petrochemical plants",
    "how MMA Triazine is used in wastewater treatment",
    "how triazine biocide works in cutting fluids",
    "how triazine slimicide works in paper mills",
    "MEA vs MMA Triazine by application",
    "long term bulk supplier of H2S scavenger chemicals",
    "exporter of triazine based industrial chemicals from India",
  ],
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
  openGraph: {
    title: "Industry Solutions — MEA Triazine & H2S Scavenger Applications",
    description:
      "Explore how MEA Triazine 78% serves oil & gas, refining, petrochemical, biogas, water treatment, metalworking, and paper industries.",
    url: `${SITE_URL}/industries`,
    type: "website",
    locale: "en_US",
  },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries` },
        ]}
      />

      <main className="pt-28 pb-20">
        <section className="mb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <SectionLabel>Industry solutions</SectionLabel>
              <h1 className="font-heading text-h2 lg:text-display text-primary mt-4">
                Industries We Serve
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary">
                Vasudev Chemo Pharma manufactures MEA Triazine 78% and MMA
                Triazine for H2S scavenging and biocide applications across
                seven major industries. Direct manufacturer supply from India
                with ISO 9001:2015 certification.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-container mx-auto grid grid-cols-1 gap-6 px-6 md:grid-cols-2 xl:grid-cols-3 lg:px-10">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-3xl border border-gray-200 bg-white overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-h4 text-primary">
                    {industry.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">
                    {industry.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-light p-12 text-center">
              <h2 className="font-heading text-h3 font-semibold text-primary mb-4">
                Need a solution for your industry?
              </h2>
              <p className="text-secondary max-w-xl mx-auto mb-8">
                Our technical team can recommend the right triazine product and
                dosing programme for your specific application.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
                >
                  Request a quote
                </Link>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:border-accent/40"
                >
                  Browse products
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
