import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const serviceData: Record<string, {
  title: string;
  description: string;
  image: string;
  features: string[];
  details: string;
}> = {
  "chemical-manufacturing": {
    title: "Chemical Manufacturing",
    description: "ISO 9001:2015 certified manufacturing of 28+ industrial & specialty chemicals.",
    image: "https://framerusercontent.com/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp",
    features: ["28+ specialty chemicals", "ISO 9001:2015 certified process", "Bulk & custom quantity orders", "Strict quality testing at every stage"],
    details: "Vasudev Chemo Pharma manufactures a wide range of industrial and specialty chemicals including caustic soda, soda ash, sodium metabisulphite, zinc oxide, stearic acid, calcium carbonate, MEA triazine, and more. Our ISO 9001:2015 certified facility ensures consistent quality with every batch.",
  },
  "import-export": {
    title: "Import & Export",
    description: "Global chemical trade with complete export documentation and competitive shipping.",
    image: "https://framerusercontent.com/images/uyAxZj87pJISHmPmWJFmfS2Xqw.webp",
    features: ["Global export to 10+ countries", "Near Kandla, Mundra & Hazira ports", "Complete export documentation", "FOB, CIF & CFR shipping terms"],
    details: "Located strategically near Gujarat's major ports — Kandla, Mundra, and Hazira — we offer efficient global shipping with competitive rates. We handle all export documentation, compliance, and customs clearance, making international trade seamless for our buyers.",
  },
  "custom-formulation": {
    title: "Custom Formulation",
    description: "Tailored chemical blends and application-specific formulations for your industry.",
    image: "https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp",
    features: ["Tailored chemical blends", "Application-specific formulations", "R&D and lab testing support", "Scalable batch production"],
    details: "Our custom formulation service creates tailored chemical blends designed for your specific application needs. Whether you need modified concentrations, unique blends, or industry-specific formulations, our team works closely with you from development through scaled production.",
  },
  "quality-testing-packaging": {
    title: "Quality Testing & Packaging",
    description: "In-house lab testing with COA, MSDS documentation and export-grade packaging.",
    image: "https://framerusercontent.com/images/DC7FRNfj79xbtthq0V0ykebbAGU.webp",
    features: ["COA & MSDS documentation", "In-house lab quality checks", "Export-grade packaging", "Custom labeling & branding"],
    details: "Every product undergoes rigorous in-house quality testing before dispatch. We provide Certificate of Analysis (COA) and Material Safety Data Sheet (MSDS) with every shipment. Our export-grade packaging ensures safe transit, and we offer custom labeling for your brand.",
  },
  "global-logistics-shipping": {
    title: "Global Logistics & Shipping",
    description: "End-to-end logistics with FOB, CIF & CFR terms from Gujarat ports.",
    image: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
    features: ["FOB, CIF & CFR terms available", "Shipping from Gujarat ports", "Container & bulk cargo options", "Real-time shipment tracking"],
    details: "We manage the complete logistics chain from our manufacturing facility to your doorstep. With proximity to Kandla, Mundra, and Hazira ports, we offer fast turnaround times and flexible shipping terms including FOB, CIF, and CFR to destinations worldwide.",
  },
  "bulk-contract-supply": {
    title: "Bulk & Contract Supply",
    description: "Long-term supply contracts and bulk chemical orders with reliable delivery.",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
    features: ["Long-term contract pricing", "Consistent supply guarantee", "Flexible order quantities", "Dedicated account management"],
    details: "For businesses with ongoing chemical requirements, we offer bulk supply and long-term contract arrangements. Benefit from preferential pricing, guaranteed supply continuity, flexible scheduling, and a dedicated account manager to handle your orders.",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return {};

  return {
    title: `${service.title} — Chemical Manufacturing Services`,
    description: service.details.slice(0, 160),
    alternates: {
      canonical: `https://vasudevchemopharma.com/service/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Vasudev Chemo Pharma`,
      description: service.description,
      url: `https://vasudevchemopharma.com/service/${slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vasudevchemopharma.com" },
          { name: "Services", url: "https://vasudevchemopharma.com/service" },
          {
            name: service.title,
            url: `https://vasudevchemopharma.com/service/${slug}`,
          },
        ]}
      />
      <main>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel>Our services</SectionLabel>
              <h1 className="font-heading text-display font-semibold mt-4">
                {service.title}
              </h1>
              <p className="text-secondary text-lg mt-6">{service.description}</p>
              <Button href="/contact" className="mt-8">Get a quote</Button>
            </div>
            <div className="relative rounded-3xl overflow-hidden aspect-[7/4]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                What we offer
              </h2>
              <p className="text-secondary leading-relaxed">{service.details}</p>
            </div>
            <div>
              <h3 className="font-heading text-h4 font-semibold text-primary mb-6">
                Key features
              </h3>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-white rounded-2xl p-4">
                    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" className="flex-shrink-0" aria-hidden="true">
                      <path d="M1 5L5.5 9L14 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
                    </svg>
                    <span className="text-base text-primary font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/product" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
              <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">Browse Products</h3>
              <p className="text-sm text-secondary mt-1">View our full chemical product catalogue</p>
            </Link>
            <Link href="/contact" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
              <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">Request a Quote</h3>
              <p className="text-sm text-secondary mt-1">Get pricing for your chemical requirements</p>
            </Link>
            <Link href="/about" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
              <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">About Us</h3>
              <p className="text-sm text-secondary mt-1">ISO 9001:2015 certified manufacturer</p>
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
              <h2 className="font-heading text-h2 font-semibold text-white mb-6">
                Ready to source quality chemicals?
              </h2>
              <Button href="/contact">Request a quote</Button>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
