import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const blogs = [
  {
    title: "Breakthroughs powering manufacturing efficiency",
    href: "/blog/breakthroughs-powering-manufacturing-efficiency",
    image: "https://framerusercontent.com/images/vmDI6OhtvdrUzZdCKxTTjToIeI.webp",
  },
  {
    title: "How automation is shaping the future of manufacturing",
    href: "/blog/how-automation-is-shaping-the-future-of-manufacturing",
    image: "https://framerusercontent.com/images/X3MBElAP8OnuJAyHhtV3aubNNY.webp",
  },
  {
    title: "Top 5 materials revolutionizing industrial components",
    href: "/blog/top-5-materials-revolutionizing-industrial-components",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-32 bg-light">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <SectionLabel>Insights &amp; Article</SectionLabel>
            <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
              Latest from our blog
            </h2>
          </div>
          <Button href="/blog">View all blogs</Button>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.href}
              href={blog.href}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="font-heading text-h5 font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {blog.title}
                </h3>
                <p className="text-sm text-accent font-medium">
                  Read full blog
                </p>
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
