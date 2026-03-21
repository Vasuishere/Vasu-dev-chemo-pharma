import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    title: "Chemical Manufacturing",
    href: "/service/chemical-manufacturing",
    icon: "https://framerusercontent.com/images/8A2bCLa6pyOXwAS0i8tAQrdLhTU.svg",
    image: "https://framerusercontent.com/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp",
    features: [
      "28+ specialty chemicals",
      "ISO 9001:2015 certified process",
      "Bulk & custom quantity orders",
      "Strict quality testing at every stage",
    ],
  },
  {
    title: "Import & Export",
    href: "/service/import-export",
    icon: "https://framerusercontent.com/images/M3RsKCQRcVWO3EHXmo2ZCQP0MlE.svg",
    image: "https://framerusercontent.com/images/uyAxZj87pJISHmPmWJFmfS2Xqw.webp",
    features: [
      "Global export to 10+ countries",
      "Near Kandla, Mundra & Hazira ports",
      "Complete export documentation",
      "FOB, CIF & CFR shipping terms",
    ],
  },
  {
    title: "Custom Formulation",
    href: "/service/custom-formulation",
    icon: "https://framerusercontent.com/images/RHYjItVmJDKaNWe0N2Hs5P3hUs.svg",
    image: "https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp",
    features: [
      "Tailored chemical blends",
      "Application-specific formulations",
      "R&D and lab testing support",
      "Scalable batch production",
    ],
  },
  {
    title: "Quality Testing & Packaging",
    href: "/service/quality-testing-packaging",
    icon: "https://framerusercontent.com/images/qyDGFu1whE5nbKHXtS8LQpIfAu4.svg",
    image: "https://framerusercontent.com/images/DC7FRNfj79xbtthq0V0ykebbAGU.webp",
    features: [
      "COA & MSDS documentation",
      "In-house lab quality checks",
      "Export-grade packaging",
      "Custom labeling & branding",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>What we do</SectionLabel>
            <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
              Comprehensive chemical
              <br /> solutions & services
            </h2>
          </div>
          <Button href="/service">Explore all services</Button>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Service Icon */}
              <div className="p-6 pb-0 flex items-center justify-between">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={40}
                  height={40}
                />
                <Image
                  src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                  alt=""
                  width={16}
                  height={12}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Image */}
              <div className="px-6 pt-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[7/4]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-h4 font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-muted uppercase tracking-wider mb-3">
                  Features
                </p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Image
                        src="https://framerusercontent.com/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg"
                        alt=""
                        width={15}
                        height={10}
                        className="flex-shrink-0"
                      />
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative mt-16 rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
          <Image
            src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
            alt="CTA BG"
            fill
            className="object-cover opacity-30"
          />
          <div className="relative z-10">
            <h2 className="font-heading text-h2 font-semibold text-white mb-6">
              Ready to start your next project?
            </h2>
            <Button href="/contact" variant="primary">
              Schedule consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
