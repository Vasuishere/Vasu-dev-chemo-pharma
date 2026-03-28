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
