import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = 3600;
const CASE_STUDY_URL = "https://vasudevchemopharma.com/case-study";

export const metadata: Metadata = {
  title: "Case Studies — Chemical Process & Formulation Success Stories",
  description:
    "Explore real-world case studies showcasing Vasudev Chemo Pharma's chemical manufacturing capabilities, including pharmaceutical synthesis, formulation optimization, and process development outcomes.",
  alternates: {
    canonical: CASE_STUDY_URL,
  },
  openGraph: {
    title: "Case Studies | Vasudev Chemo Pharma",
    description:
      "Real-world chemical manufacturing case studies covering pharmaceutical synthesis, formulation, and process development.",
    url: CASE_STUDY_URL,
  },
};

const caseStudies = [
  {
    slug: "lightweight-castings-for-industrial-equipment",
    category: "Materials engineering",
    title: "Lightweight castings for Industrial equipment",
    stat: "35%",
    statLabel: "Heavy-duty machinery",
    clientLogo: "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
    image: "https://framerusercontent.com/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp",
  },
  {
    slug: "precision-cnc-milling-for-automotive-components",
    category: "CNC machining",
    title: "Precision CNC milling for automotive components",
    stat: "54%",
    statLabel: "Engine components",
    clientLogo: "https://framerusercontent.com/images/ZOshmfIPPyIgwc1vt8fg4jl7XPw.svg",
    image: "https://framerusercontent.com/images/X3MBElAP8OnuJAyHhtV3aubNNY.webp",
  },
  {
    slug: "additive-manufacturing-for-custom-tooling",
    category: "3D printing",
    title: "Additive manufacturing for custom tooling",
    stat: "50%",
    statLabel: "Traditional tooling",
    clientLogo: "https://framerusercontent.com/images/dkPEYiQUEC8xGo7JZ3roQZEMCyo.svg",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
  },
  {
    slug: "automated-assembly-line-optimization",
    category: "Automation",
    title: "Automated assembly line optimization",
    stat: "62%",
    statLabel: "Assembly process",
    clientLogo: "https://framerusercontent.com/images/5gEKWg2vllhD1ObP6AQ66ePRw.svg",
    image: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
  },
];

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vasudevchemopharma.com" },
          {
            name: "Case Studies",
            url: CASE_STUDY_URL,
          },
        ]}
      />
      <main>
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h1 className="font-heading text-display font-semibold text-primary mb-4">
            Chemical Manufacturing Case Studies
          </h1>
          <p className="text-secondary text-lg mb-12 max-w-2xl">
            Real-world outcomes from our <Link href="/service" className="text-accent hover:underline">chemical manufacturing services</Link>,
            showcasing process optimisation and formulation results across <Link href="/product" className="text-accent hover:underline">our product range</Link>.
          </p>

          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-study/${cs.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 bg-light rounded-3xl overflow-hidden"
              >
                {/* Left */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-medium text-accent">
                      {cs.category}
                    </span>
                    <h2 className="font-heading text-h3 font-semibold text-primary mt-3 group-hover:text-accent transition-colors">
                      {cs.title}
                    </h2>
                  </div>
                  <div className="mt-8">
                    <span className="font-heading text-h2 font-bold text-accent">
                      {cs.stat}
                    </span>
                    <p className="text-sm text-muted mt-1">{cs.statLabel}</p>
                  </div>
                </div>

                {/* Right */}
                <div className="relative flex items-end justify-between p-6 gap-4">
                  <Image
                    src={cs.clientLogo}
                    alt={`${cs.title} client logo`}
                    width={100}
                    height={32}
                    className="h-6 w-auto opacity-50"
                  />
                  <div className="relative w-3/4 aspect-[760/404] rounded-2xl overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
