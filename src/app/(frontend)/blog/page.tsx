import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Blog — Chemical Industry Insights & News",
  description:
    "Read the latest insights on sustainable chemical manufacturing, smart factories, specialty chemicals, and pharmaceutical intermediates from Vasudev Chemo Pharma.",
  alternates: {
    canonical: "https://vasudevchemopharma.com/blog",
  },
  openGraph: {
    title: "Blog — Chemical Industry Insights | Vasudev Chemo Pharma",
    description:
      "Latest insights on sustainable chemical manufacturing, smart factories, and specialty chemicals.",
    url: "https://vasudevchemopharma.com/blog",
  },
};

const blogs = [
  {
    slug: "sustainable-chemical-manufacturing-greener-future-india",
    title: "Sustainable Chemical Manufacturing: Driving a Greener Future in India",
    category: "Sustainability",
    date: "Jan 6, 2026",
    image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    imageAlt: "Sustainable chemical manufacturing plant with green energy systems in Gujarat India",
    featured: true,
  },
  {
    slug: "ai-iot-breakthroughs-chemical-manufacturing-efficiency",
    title: "AI & IoT Breakthroughs Powering Chemical Manufacturing Efficiency",
    category: "Smart Manufacturing",
    date: "Jan 15, 2026",
    image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    imageAlt: "AI-powered smart chemical manufacturing control room with IoT sensors",
    featured: false,
  },
  {
    slug: "automation-shaping-future-chemical-manufacturing",
    title: "How Automation Is Shaping the Future of Chemical Manufacturing",
    category: "Industry 4.0",
    date: "Jan 13, 2026",
    image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    imageAlt: "Automated robotic chemical production line in a pharmaceutical intermediates facility",
    featured: false,
  },
  {
    slug: "top-5-specialty-chemicals-revolutionizing-industrial-applications",
    title: "Top 5 Specialty Chemicals Revolutionizing Industrial Applications",
    category: "Specialty Chemicals",
    date: "Jan 10, 2026",
    image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp",
    imageAlt: "Specialty chemical compounds including triazine scavengers and pharmaceutical intermediates",
    featured: false,
  },
  {
    slug: "smart-factory-technology-modern-chemical-plants",
    title: "Smart Factory Technology Transforming Modern Chemical Plants",
    category: "Smart Manufacturing",
    date: "Jan 8, 2026",
    image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
    imageAlt: "Smart factory digital twin monitoring dashboard for chemical manufacturing",
    featured: false,
  },
  {
    slug: "3d-printing-additive-manufacturing-chemical-industry",
    title: "3D Printing & Additive Manufacturing in the Chemical Industry",
    category: "Additive Manufacturing",
    date: "Jan 4, 2026",
    image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp",
    imageAlt: "3D printing additive manufacturing for chemical plant component prototyping",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://vasudevchemopharma.com" },
          { name: "Blog", url: "https://vasudevchemopharma.com/blog" },
        ]}
      />
      <main>
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h1 className="font-heading text-display font-semibold text-primary mb-12">
            Chemical Industry Insights &amp; Blog
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group rounded-3xl overflow-hidden bg-light block"
            >
              <div className="relative">
                <span className="absolute top-4 left-4 z-10 bg-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <div className="relative aspect-square">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-accent">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted">{featured.date}</span>
                </div>
                <h2 className="font-heading text-h3 font-semibold text-primary group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
              </div>
            </Link>

            {/* Rest */}
            <div className="flex flex-col gap-6">
              {rest.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="group flex gap-4 bg-light rounded-2xl overflow-hidden"
                >
                  <div className="relative w-40 flex-shrink-0 aspect-square">
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-accent">
                        {blog.category}
                      </span>
                      <span className="text-xs text-muted">{blog.date}</span>
                    </div>
                    <h2 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                      {blog.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}
