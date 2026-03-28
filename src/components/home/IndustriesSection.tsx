import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";

const industries = [
  {
    title: "Oil & Gas",
    href: "/industries/oil-gas-h2s-scavenger",
    description:
      "Industrial chemicals and H2S scavengers for oil & gas extraction, refining, and processing.",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    icon: "https://framerusercontent.com/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg",
    features: [
      "MEA Triazine H2S scavengers",
      "Caustic soda & soda ash supply",
      "Corrosion inhibitor chemicals",
    ],
  },
  {
    title: "Water Treatment",
    href: "/industries/water-treatment",
    description:
      "Treatment chemicals for waste water management, purification, and industrial water systems.",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    icon: "https://framerusercontent.com/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg",
    features: [
      "Sodium metabisulphite supply",
      "Hydrated lime & caustic soda",
      "pH balancing chemicals",
    ],
  },
  {
    title: "Metal Working Fluids",
    href: "/industries/metal-working-fluids",
    description:
      "Triazine biocide preservatives for metalworking fluids, cutting oils, and industrial coolants.",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/metal-working-fluids.svg",
    icon: "https://framerusercontent.com/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg",
    features: [
      "Formaldehyde-releasing biocide",
      "Grotan BK equivalent",
      "Bacteria, fungi & algae control",
    ],
  },
  {
    title: "Paper Mill",
    href: "/industries/paper-mill",
    description:
      "Chemical solutions for paper manufacturing, bleaching, and pulp processing industries.",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Paper_Mill_Treatment_Vasudev_Chemo_Pharma.png",
    icon: "https://framerusercontent.com/images/bWWmYghlGrjGsS6uGMAjDrFi0.svg",
    features: [
      "MEA Triazine slimicide",
      "Biofilm & slime control",
      "Export to Southeast Asia",
    ],
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>Serving key industries</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
            Chemical solutions for every industry
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <Link
              href={industry.href}
              key={industry.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={industry.icon}
                    alt="Industry Icon"
                    width={18}
                    height={21}
                  />
                  <h4 className="font-heading text-lg font-semibold text-primary">
                    {industry.title}
                  </h4>
                </div>
                <p className="text-sm text-secondary mb-4">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Image
                        src="https://framerusercontent.com/images/nfR4iB5cTWHHV0q6ZNSUKbFw.svg"
                        alt="List Icon"
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
      </div>
    </section>
  );
}
