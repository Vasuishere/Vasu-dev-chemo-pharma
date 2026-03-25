import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { getAllProducts } from "@/lib/products-payload";

// Lazy-load ContactForm — it's below the fold
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="h-96 bg-light rounded-2xl animate-pulse" />,
});

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Services — Gujarat, India",
  description:
    "Explore chemical manufacturing, import-export, custom formulation, quality testing, and bulk supply services from Vasudev Chemo Pharma. Request a quote today.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/service",
  },
  openGraph: {
    title: "Chemical Manufacturing Services | Vasudev Chemo Pharma",
    description:
      "ISO 9001:2015 certified chemical manufacturing, custom formulation, and global export services from Gujarat, India.",
    url: "https://www.vasudevchemopharma.com/service",
  },
};

const services = [
  {
    title: "Chemical Manufacturing",
    description: "ISO 9001:2015 certified manufacturing of 15+ industrial & specialty chemicals.",
    href: "/service/chemical-manufacturing",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Service%20Section/Chemical_Manufacturing_Vasudev_Chemo_Pharma.png",
  },
  {
    title: "Import & Export",
    description: "Global chemical trade with complete export documentation and competitive shipping.",
    href: "/service/import-export",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Service%20Section/Import_Export_Vasudev_Chemo_Pharma.png",
  },
  {
    title: "Custom Formulation",
    description: "Tailored chemical blends and application-specific formulations for your industry.",
    href: "/service/custom-formulation",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Service%20Section/Custom_Formulation_Vasudev_Chemo_Pharma.png",
  },
  {
    title: "Quality Testing & Packaging",
    description: "In-house lab testing with COA, MSDS documentation and export-grade packaging.",
    href: "/service/quality-testing-packaging",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Service%20Section/Quality_Testing_Packaging_Vasudev_Chemo_Pharma.png",
  },
  {
    title: "Global Logistics & Shipping",
    description: "End-to-end logistics with FOB, CIF & CFR terms from Gujarat ports.",
    href: "/service/global-logistics-shipping",
    image: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
  },
  {
    title: "Bulk & Contract Supply",
    description: "Long-term supply contracts and bulk chemical orders with reliable delivery.",
    href: "/service/bulk-contract-supply",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
  },
];

const faqs = [
  {
    q: "What chemical products do you manufacture?",
    a: "We manufacture 15+ industrial and specialty chemicals including caustic soda, soda ash, sodium metabisulphite, zinc oxide, stearic acid, calcium carbonate, MEA triazine, and many more.",
  },
  {
    q: "Do you export chemicals internationally?",
    a: "Yes, we export to buyers across Gulf countries, USA, Middle East, Africa, and Southeast Asia. We handle all export documentation, compliance, and shipping.",
  },
  {
    q: "What quality certifications do you hold?",
    a: "We are ISO 9001:2015 certified. Every batch comes with COA (Certificate of Analysis) and MSDS (Material Safety Data Sheet) documentation.",
  },
  {
    q: "Can you handle custom or bulk orders?",
    a: "Yes, we offer custom formulation, bulk orders, and long-term contract supply arrangements tailored to your specific requirements.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve oil & gas, lubricant manufacturing, water treatment, paper mill, textile, construction, and general industrial chemical requirements.",
  },
];

export default async function ServicePage() {
  let catalogSummaryAnswer =
    "We manufacture and supply a broad range of industrial and specialty chemicals. Contact us for the latest product catalog and technical specifications.";

  try {
    const products = await getAllProducts();
    if (products.length > 0) {
      const featuredProducts = products
        .slice(0, 6)
        .map((product) => product.name)
        .join(", ");
      catalogSummaryAnswer = `We currently supply ${products.length} active products, including ${featuredProducts}, and more across industrial and specialty categories.`;
    }
  } catch {
    // Keep the fallback answer when catalog lookup is unavailable.
  }

  const pageFaqs = faqs.map((faq, index) => {
    if (index === 0) {
      return {
        ...faq,
        a: catalogSummaryAnswer,
      };
    }

    return faq;
  });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Services", url: "https://www.vasudevchemopharma.com/service" },
        ]}
      />
      <FAQSchema items={pageFaqs.map((faq) => ({ question: faq.q, answer: faq.a }))} />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
            <h1 className="font-heading text-display font-semibold">
              Chemical Manufacturing Services
            </h1>
            <p className="text-secondary text-lg mt-4 max-w-2xl mx-auto">
              ISO 9001:2015 certified chemical manufacturing, custom formulation, global logistics, and bulk supply from Gujarat, India.
            </p>
          </div>
        </section>

        {/* Service Grid */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-light rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6 flex items-center justify-between">
                    <Image
                      src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                      alt="Navigate to service"
                      width={16}
                      height={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <div className="px-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-[7/4]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-h4 font-semibold text-primary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm text-secondary">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="relative mt-16 rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
              <Image
                src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                alt="Chemical manufacturing facility background"
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

        {/* FAQ */}
        <section className="py-20 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <SectionLabel>Common questions</SectionLabel>
              <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
                Frequently asked questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {pageFaqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-2xl p-6 group"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="font-heading text-lg font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                    {faq.q}
                    <span className="text-accent text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-secondary mt-4 leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionLabel>Get in touch</SectionLabel>
                <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
                  Start your chemical sourcing journey
                </h2>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
