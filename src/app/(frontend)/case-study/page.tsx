import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { CASE_STUDIES } from "@/lib/case-studies-data";

export const revalidate = 3600;
const CASE_STUDY_URL = "https://www.vasudevchemopharma.com/case-study";

export const metadata: Metadata = {
  title: "Case Studies - Chemical Manufacturing and Process Improvement Projects",
  description:
    "Explore chemical-industry case studies across H2S treatment, specialty chemicals, pharma intermediates, and process optimization.",
  alternates: {
    canonical: CASE_STUDY_URL,
  },
  openGraph: {
    title: "Case Studies | Vasudev Chemo Pharma",
    description:
      "Chemical-industry case studies covering H2S treatment, specialty chemical scale-up, pharma intermediates, and process debottlenecking.",
    url: CASE_STUDY_URL,
  },
};

export default function CaseStudyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
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
              Chemical Industry Case Studies
            </h1>
            <p className="text-secondary text-lg mb-12 max-w-2xl">
              Explore project stories across H2S treatment, specialty chemicals,
              pharma intermediates, and process improvement, and learn more
              about <Link href="/service" className="text-accent hover:underline">our services</Link> and <Link href="/about" className="text-accent hover:underline">our company</Link>.
            </p>

            <div className="space-y-6">
              {CASE_STUDIES.map((cs) => (
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
