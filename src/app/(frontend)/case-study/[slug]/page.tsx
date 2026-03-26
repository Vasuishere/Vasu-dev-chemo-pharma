import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { CASE_STUDIES, CASE_STUDY_DATA } from "@/lib/case-studies-data";

export function generateStaticParams() {
  return Object.keys(CASE_STUDY_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDY_DATA[slug];
  if (!cs) return {};

  return {
    title: `${cs.title} - Case Study`,
    description: cs.overview.slice(0, 160),
    alternates: {
      canonical: `https://www.vasudevchemopharma.com/case-study/${slug}`,
    },
    openGraph: {
      title: cs.title,
      description: cs.overview.slice(0, 160),
      url: `https://www.vasudevchemopharma.com/case-study/${slug}`,
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
  const cs = CASE_STUDY_DATA[slug];
  if (!cs) notFound();

  const related = CASE_STUDIES.filter((study) => study.slug !== slug).slice(0, 2);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          {
            name: "Case Studies",
            url: "https://www.vasudevchemopharma.com/case-study",
          },
          {
            name: cs.title,
            url: `https://www.vasudevchemopharma.com/case-study/${slug}`,
          },
        ]}
      />
      <main>
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

        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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

            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-light rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-heading text-h4 font-semibold text-primary">
                    Relevant Service
                  </h3>
                  <p className="text-secondary mt-1">
                    Discover how we can support a similar process improvement or
                    chemical supply challenge.
                  </p>
                </div>
                <Button href={cs.serviceLink.href} variant="dark" className="whitespace-nowrap">
                  {cs.serviceLink.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Ready to solve a similar process challenge?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Contact our technical team to discuss your operating goals and
                see how our chemistry, manufacturing, and process experience can
                support your next project.
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
              {related.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-study/${study.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 bg-light rounded-3xl overflow-hidden"
                >
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-medium text-accent">
                        {study.category}
                      </span>
                      <h3 className="font-heading text-h4 font-semibold text-primary mt-3 group-hover:text-accent transition-colors">
                        {study.title}
                      </h3>
                    </div>
                    <div className="mt-6">
                      <span className="font-heading text-h3 font-bold text-accent">
                        {study.stat}
                      </span>
                      <p className="text-sm text-muted mt-1">{study.statLabel}</p>
                    </div>
                  </div>
                  <div className="relative flex items-end justify-between p-4 gap-3">
                    <Image
                      src={study.clientLogo}
                      alt={`${study.title} client logo`}
                      width={80}
                      height={24}
                      className="h-5 w-auto opacity-50"
                    />
                    <div className="relative w-2/3 aspect-[760/404] rounded-2xl overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
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
