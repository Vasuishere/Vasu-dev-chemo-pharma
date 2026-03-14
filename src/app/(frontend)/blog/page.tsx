import Image from "next/image";
import Link from "next/link";

export const revalidate = 3600;

const blogs = [
  {
    slug: "sustainable-manufacturing-driving-a-greener-future",
    title: "Sustainable manufacturing driving a greener future",
    category: "Sustainability",
    date: "Jan 6, 2026",
    image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    featured: true,
  },
  {
    slug: "breakthroughs-powering-manufacturing-efficiency",
    title: "Breakthroughs powering manufacturing efficiency",
    category: "Smart manufacturing",
    date: "Jan 15, 2026",
    image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    featured: false,
  },
  {
    slug: "how-automation-is-shaping-the-future-of-manufacturing",
    title: "How automation is shaping the future of manufacturing",
    category: "Industry 4.0",
    date: "Jan 13, 2026",
    image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    featured: false,
  },
  {
    slug: "top-5-materials-revolutionizing-industrial-components",
    title: "Top 5 materials revolutionizing industrial components",
    category: "Advanced materials",
    date: "Jan 10, 2026",
    image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp",
    featured: false,
  },
  {
    slug: "smart-factories-transforming-modern-manufacturing",
    title: "Smart factories transforming modern manufacturing",
    category: "Smart manufacturing",
    date: "Jan 8, 2026",
    image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
    featured: false,
  },
  {
    slug: "3d-printing-revolutionizing-product-development",
    title: "3D printing revolutionizing product development",
    category: "Additive manufacturing",
    date: "Jan 4, 2026",
    image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogs[0];
  const rest = blogs.slice(1);

  return (
    <main>
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h1 className="font-heading text-display font-semibold text-primary mb-12">
            Our blogs
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
                    alt={featured.title}
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
                      alt={blog.title}
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
  );
}
