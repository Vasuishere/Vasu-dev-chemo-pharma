import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const caseStudies = [
  {
    title: "Lightweight castings for Industrial equipment",
    description:
      "Redesigned metal castings to reduce material use and maintain strength, optimizing cost and weight.",
    stat: "35%",
    statLabel: "Heavy-duty machinery",
    href: "/case-study/lightweight-castings-for-industrial-equipment",
    clientLogo: "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
    image: "https://framerusercontent.com/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp",
  },
  {
    title: "Precision CNC milling for automotive components",
    description:
      "Improved machining process to achieve tighter tolerances and faster production cycles for car parts.",
    stat: "54%",
    statLabel: "Engine components",
    href: "/case-study/precision-cnc-milling-for-automotive-components",
    clientLogo: "https://framerusercontent.com/images/ZOshmfIPPyIgwc1vt8fg4jl7XPw.svg",
    image: "https://framerusercontent.com/images/X3MBElAP8OnuJAyHhtV3aubNNY.webp",
  },
  {
    title: "Additive manufacturing for custom tooling",
    description:
      "Implemented 3D-printed tools to accelerate prototyping and reduce lead time in production.",
    stat: "50%",
    statLabel: "Traditional tooling",
    href: "/case-study/additive-manufacturing-for-custom-tooling",
    clientLogo: "https://framerusercontent.com/images/dkPEYiQUEC8xGo7JZ3roQZEMCyo.svg",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
  },
  {
    title: "Automated assembly line optimization",
    description:
      "Streamlined assembly processes with robotics, reducing labor costs and improving output consistency.",
    stat: "62%",
    statLabel: "Assembly process",
    href: "/case-study/automated-assembly-line-optimization",
    clientLogo: "https://framerusercontent.com/images/5gEKWg2vllhD1ObP6AQ66ePRw.svg",
    image: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-6">
          <SectionLabel>Real-world success</SectionLabel>
          <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
            Real results from real projects
          </h2>
        </div>

        {/* Contact CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between bg-light rounded-3xl p-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <Image
                src="https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <Image
                src="https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <div>
              <h5 className="font-heading text-sm font-semibold text-primary">
                Open a conversation
              </h5>
              <p className="text-sm text-secondary">
                Contact us to explore solutions tailored to your needs.
              </p>
            </div>
          </div>
          <Button href="/contact">Contact us now</Button>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.href}
              className="bg-light rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                {/* Content */}
                <h3 className="font-heading text-h4 font-semibold text-primary mb-3">
                  {study.title}
                </h3>
                <p className="text-sm text-secondary mb-4">
                  {study.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-heading text-h4 font-semibold text-accent">
                      {study.stat}
                    </span>
                    <p className="text-sm text-secondary">{study.statLabel}</p>
                  </div>
                  <Link
                    href={study.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    View case
                    <Image
                      src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                      alt=""
                      width={16}
                      height={12}
                    />
                  </Link>
                </div>
              </div>

              {/* Image & Logo */}
              <div className="flex items-end justify-between px-6 pb-6">
                <Image
                  src={study.clientLogo}
                  alt={`${study.title} client logo`}
                  width={110}
                  height={28}
                  className="opacity-60"
                />
                <div className="relative rounded-2xl overflow-hidden w-48 h-28">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
