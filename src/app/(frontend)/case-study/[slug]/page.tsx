import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

const caseStudyData: Record<
  string,
  {
    category: string;
    title: string;
    heroImage: string;
    clientLogo: string;
    galleryImages: string[];
    overview: string;
    approach: string;
    specs: string[];
    results: string;
    stats: { value: string; label: string }[];
    serviceLink: { href: string; label: string };
  }
> = {
  "lightweight-castings-for-industrial-equipment": {
    category: "Materials engineering",
    title: "Lightweight castings for Industrial equipment",
    heroImage: "https://framerusercontent.com/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp",
    clientLogo: "https://framerusercontent.com/images/TqbYVzg7ybZyZdS0f5Kul8k3qE.svg",
    galleryImages: [
      "https://framerusercontent.com/images/aOrY1ygpxFVP5cmcs0Ai7DfS9Mo.jpg",
      "https://framerusercontent.com/images/cghoC9jVpovojCjatP0p8LFabCU.jpg",
      "https://framerusercontent.com/images/cXpaKK712biA8Hg9kJFfNyZfYbA.jpg",
    ],
    overview:
      "The project focused on developing lightweight casting solutions for industrial equipment to enhance efficiency, reduce material usage, and improve overall machine performance. Traditional castings often added unnecessary weight, impacting operational costs and energy consumption. By introducing advanced casting techniques and materials, the goal was to produce components that maintained structural integrity while significantly reducing weight, thereby supporting both sustainability and performance improvements.",
    approach:
      "The approach involved a combination of material innovation, precise design optimization, and advanced manufacturing techniques. Engineers conducted a thorough analysis of stress points and load requirements to determine the optimal geometry and thickness for each component. High-performance aluminum and magnesium alloys were selected for their favorable strength-to-weight ratio. Computer-aided simulations were utilized to predict performance under real-world operating conditions, minimizing trial-and-error and accelerating the development process.",
    specs: [
      "Material: Aluminum and magnesium alloys",
      "Weight reduction: Up to 35%",
      "Tolerance: ±0.2 mm",
      "Load capacity: 95% of conventional steel castings",
      "Manufacturing: Precision casting with heat treatment",
    ],
    results:
      "The implementation of lightweight castings resulted in substantial improvements in equipment performance and efficiency. Equipment with the new castings demonstrated reduced energy consumption due to lower mass, improved handling, and faster installation times. Maintenance and operational costs decreased as the components were less prone to fatigue and wear. Additionally, the lightweight castings contributed to overall sustainability goals by reducing material usage and enabling easier recycling.",
    stats: [
      { value: "35%", label: "Heavy-duty machinery" },
      { value: "28%", label: "Increase overall efficiency" },
      { value: "95%", label: "First-pass yield accuracy" },
    ],
    serviceLink: {
      href: "/service/chemical-manufacturing",
      label: "View Chemical Manufacturing",
    },
  },
  "precision-cnc-milling-for-automotive-components": {
    category: "CNC machining",
    title: "Precision CNC milling for automotive components",
    heroImage: "https://framerusercontent.com/images/X3MBElAP8OnuJAyHhtV3aubNNY.webp",
    clientLogo: "https://framerusercontent.com/images/ZOshmfIPPyIgwc1vt8fg4jl7XPw.svg",
    galleryImages: [
      "https://framerusercontent.com/images/aOrY1ygpxFVP5cmcs0Ai7DfS9Mo.jpg",
      "https://framerusercontent.com/images/cghoC9jVpovojCjatP0p8LFabCU.jpg",
      "https://framerusercontent.com/images/cXpaKK712biA8Hg9kJFfNyZfYbA.jpg",
    ],
    overview:
      "This project aimed to deliver precision-machined engine components for a leading automotive manufacturer. The challenge was to achieve extremely tight tolerances on complex geometries while maintaining high production volumes and consistent quality across every unit produced.",
    approach:
      "Our engineering team utilized advanced 5-axis CNC machining centers equipped with high-speed spindles and precision tool holders. Each component underwent detailed process planning using CAM software with simulation capabilities. Custom fixturing was designed to ensure repeatable positioning accuracy, and in-process gauging systems were implemented to monitor dimensional conformance in real-time.",
    specs: [
      "Material: High-grade aluminum alloy 6061-T6",
      "Tolerance: ±0.005 mm",
      "Surface finish: Ra 0.8 μm",
      "Production volume: 50,000+ units/year",
      "Manufacturing: 5-axis CNC milling with CMM inspection",
    ],
    results:
      "The precision CNC milling program delivered exceptional results, with dimensional accuracy exceeding customer specifications consistently. Production efficiency improved significantly through optimized toolpaths and reduced cycle times, while the implementation of automated quality inspection systems ensured zero-defect delivery to the customer.",
    stats: [
      { value: "54%", label: "Engine components" },
      { value: "42%", label: "Reduction in cycle time" },
      { value: "99.8%", label: "Quality pass rate" },
    ],
    serviceLink: {
      href: "/service/custom-formulation",
      label: "View Custom Formulation",
    },
  },
  "additive-manufacturing-for-custom-tooling": {
    category: "3D printing",
    title: "Additive manufacturing for custom tooling",
    heroImage: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
    clientLogo: "https://framerusercontent.com/images/dkPEYiQUEC8xGo7JZ3roQZEMCyo.svg",
    galleryImages: [
      "https://framerusercontent.com/images/aOrY1ygpxFVP5cmcs0Ai7DfS9Mo.jpg",
      "https://framerusercontent.com/images/cghoC9jVpovojCjatP0p8LFabCU.jpg",
      "https://framerusercontent.com/images/cXpaKK712biA8Hg9kJFfNyZfYbA.jpg",
    ],
    overview:
      "This case study demonstrates how additive manufacturing was leveraged to produce custom tooling solutions that dramatically reduced lead times and costs compared to traditional tooling methods. The project addressed the growing need for rapid, flexible tooling in low-to-medium volume production environments.",
    approach:
      "Using metal and polymer 3D printing technologies, our team designed and produced custom jigs, fixtures, and mold inserts with conformal cooling channels and optimized internal structures. Digital workflow integration enabled seamless transition from CAD design to finished tooling within days rather than weeks.",
    specs: [
      "Technology: SLS, SLA, and DMLS 3D printing",
      "Materials: Nylon PA12, Tough Resin, Maraging Steel",
      "Lead time: 3-5 days (vs. 4-6 weeks traditional)",
      "Accuracy: ±0.1 mm",
      "Manufacturing: Additive manufacturing with post-processing",
    ],
    results:
      "The additive manufacturing approach to custom tooling delivered transformative results. Lead times were reduced by over 80%, enabling faster production ramp-up and greater flexibility to accommodate design changes. Cost savings of up to 50% were achieved on tooling, while performance in many cases matched or exceeded traditionally manufactured alternatives.",
    stats: [
      { value: "50%", label: "Traditional tooling" },
      { value: "80%", label: "Faster lead time" },
      { value: "100+", label: "Custom tools produced" },
    ],
    serviceLink: {
      href: "/service",
      label: "Explore Our Services",
    },
  },
  "automated-assembly-line-optimization": {
    category: "Automation",
    title: "Automated assembly line optimization",
    heroImage: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
    clientLogo: "https://framerusercontent.com/images/5gEKWg2vllhD1ObP6AQ66ePRw.svg",
    galleryImages: [
      "https://framerusercontent.com/images/aOrY1ygpxFVP5cmcs0Ai7DfS9Mo.jpg",
      "https://framerusercontent.com/images/cghoC9jVpovojCjatP0p8LFabCU.jpg",
      "https://framerusercontent.com/images/cXpaKK712biA8Hg9kJFfNyZfYbA.jpg",
    ],
    overview:
      "This project focused on optimizing an existing assembly line through strategic automation implementation. The goal was to increase throughput, reduce human error, and improve worker safety while maintaining the flexibility to handle product variations and design changes.",
    approach:
      "Our automation engineers conducted a comprehensive analysis of the existing assembly process, identifying bottlenecks and opportunities for robotic integration. Collaborative robots were deployed alongside human operators, with vision-guided pick-and-place systems and automated testing stations integrated into the production flow. A central MES system was implemented to coordinate all operations in real-time.",
    specs: [
      "Robots: 6 collaborative robots (cobots)",
      "Cycle time: Reduced from 45s to 17s per unit",
      "Vision systems: 3D camera-guided assembly",
      "Quality: 100% automated end-of-line testing",
      "Integration: Full MES connectivity",
    ],
    results:
      "The automated assembly line optimization exceeded all performance targets. Production throughput increased by 62%, while defect rates dropped to near-zero levels. Worker safety improved significantly with hazardous and repetitive tasks now handled by robots, and the line maintained full flexibility to accommodate product variations.",
    stats: [
      { value: "62%", label: "Assembly process" },
      { value: "98%", label: "Reduction in defects" },
      { value: "3x", label: "Throughput increase" },
    ],
    serviceLink: {
      href: "/service",
      label: "Explore Our Services",
    },
  },
};

const allCaseStudies = [
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

export function generateStaticParams() {
  return Object.keys(caseStudyData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudyData[slug];
  if (!cs) return {};

  return {
    title: `${cs.title} — Case Study`,
    description: cs.overview.slice(0, 160),
    alternates: {
      canonical: `https://www.Vasudevchemopharma.com/case-study/${slug}`,
    },
    openGraph: {
      title: cs.title,
      description: cs.overview.slice(0, 160),
      url: `https://www.Vasudevchemopharma.com/case-study/${slug}`,
      images: [{ url: cs.heroImage }],
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudyData[slug];
  if (!cs) notFound();

  const related = allCaseStudies
    .filter((c) => c.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.Vasudevchemopharma.com" },
          {
            name: "Case Studies",
            url: "https://www.Vasudevchemopharma.com/case-study",
          },
          {
            name: cs.title,
            url: `https://www.Vasudevchemopharma.com/case-study/${slug}`,
          },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-sm font-medium text-accent">
                  {cs.category}
                </span>
                <h1 className="font-heading text-display font-semibold text-primary mt-3">
                  {cs.title}
                </h1>
              </div>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[760/404]">
                  <Image
                    src={cs.heroImage}
                    alt={cs.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Image
                  src={cs.clientLogo}
                  alt={`${cs.title} client logo`}
                  width={100}
                  height={32}
                  className="absolute bottom-4 left-4 h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-heading text-h3 font-semibold text-primary mb-4">
                    Overview:
                  </h2>
                  <p className="text-secondary leading-relaxed">{cs.overview}</p>
                </div>
                <div>
                  <h2 className="font-heading text-h3 font-semibold text-primary mb-4">
                    Approach:
                  </h2>
                  <p className="text-secondary leading-relaxed">{cs.approach}</p>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 gap-4">
                {cs.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl overflow-hidden aspect-square"
                  >
                    <Image
                      src={img}
                      alt="Case Study Gallery"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Specs & Results */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="font-semibold text-primary mb-4">
                  Technical specifications:
                </p>
                <ul className="space-y-2">
                  {cs.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                      <span className="text-secondary">{spec}</span>
                    </li>
                  ))}
                </ul>

                <h2 className="font-heading text-h3 font-semibold text-primary mt-8 mb-4">
                  Results:
                </h2>
                <p className="text-secondary leading-relaxed">{cs.results}</p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cs.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-light rounded-2xl p-6 text-center"
                  >
                    <h6 className="font-heading text-h2 font-bold text-accent">
                      {stat.value}
                    </h6>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Link Tie-in */}
            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-light rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-primary">
                    Relevant Service
                  </h3>
                  <p className="text-secondary mt-1">
                    Discover how we can implement this solution for your operations.
                  </p>
                </div>
                <Button href={cs.serviceLink.href} variant="dark" className="whitespace-nowrap">
                  {cs.serviceLink.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA TO CONTACT ── */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Ready to achieve similar results?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Contact our engineering team to discuss your project requirements and see how our expertise can drive your business forward.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-h2 font-semibold text-primary">
                Other case studies
              </h2>
              <Button href="/case-study" variant="secondary">
                See all case studies
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-study/${r.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 bg-light rounded-3xl overflow-hidden"
                >
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-medium text-accent">
                        {r.category}
                      </span>
                      <h3 className="font-heading text-h4 font-semibold text-primary mt-3 group-hover:text-accent transition-colors">
                        {r.title}
                      </h3>
                    </div>
                    <div className="mt-6">
                      <span className="font-heading text-h3 font-bold text-accent">
                        {r.stat}
                      </span>
                      <p className="text-sm text-muted mt-1">{r.statLabel}</p>
                    </div>
                  </div>
                  <div className="relative flex items-end justify-between p-4 gap-3">
                    <Image
                      src={r.clientLogo}
                      alt={`${r.title} client logo`}
                      width={80}
                      height={24}
                      className="h-5 w-auto opacity-50"
                    />
                    <div className="relative w-3/4 aspect-[760/404] rounded-xl overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
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
