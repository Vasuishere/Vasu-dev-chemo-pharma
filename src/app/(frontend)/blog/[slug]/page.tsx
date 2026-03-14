import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";

export const revalidate = 3600;

const blogData: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    image: string;
    excerpt: string;
    content: string[];
    bullets: string[];
    quote: string;
    closing: string;
  }
> = {
  "sustainable-manufacturing-driving-a-greener-future": {
    title: "Sustainable manufacturing driving a greener future",
    date: "Jan 6, 2026",
    category: "Sustainability",
    image:
      "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    excerpt:
      "Manufacturers are adopting eco-friendly materials and energy-saving methods. Sustainability reduces waste and operating costs. It's the key to long-term industrial growth and responsibility.",
    content: [
      "Sustainable manufacturing is transforming industries by integrating eco-friendly practices, renewable energy, and resource-efficient processes into production. It focuses on reducing environmental impact while maintaining high productivity and quality standards. By adopting sustainable methods, companies can minimize waste, lower carbon emissions, and conserve natural resources. This approach not only benefits the planet but also enhances operational efficiency, reduces costs, and strengthens brand reputation. As global awareness of environmental issues grows, sustainable manufacturing is becoming essential for businesses striving to meet both economic and ecological goals.",
      "Sustainable manufacturing is revolutionizing production by prioritizing environmental responsibility alongside profitability. It allows industries to innovate without compromising the planet, ensuring long-term viability and resilience. As technology and sustainability practices advance, green manufacturing is set to become the standard, enabling companies to meet global demand while safeguarding natural resources.",
      "Sustainable manufacturing integrates energy-efficient technologies, renewable resources, and waste reduction strategies to create production systems that minimize environmental impact while maintaining high standards of productivity and quality. This approach allows companies to operate responsibly, reduce costs, and improve long-term sustainability.",
    ],
    bullets: [
      "Reduced carbon footprint",
      "Efficient resource utilization",
      "Waste minimization",
      "Improved brand reputation",
    ],
    quote:
      '"Sustainable manufacturing is more than a trend—it is the future of industry. By combining innovation, efficiency, and environmental responsibility, it allows businesses to produce high-quality products while conserving resources, reducing waste, and protecting the planet."',
    closing:
      "Sustainable manufacturing encourages innovation in product design, supply chain management, and operational workflows, enabling companies to create eco-friendly products and services without sacrificing efficiency. These practices foster resilience, improve corporate reputation, and position businesses as leaders in the global shift toward a greener, more responsible industrial future.",
  },
  "breakthroughs-powering-manufacturing-efficiency": {
    title: "Breakthroughs powering manufacturing efficiency",
    date: "Jan 15, 2026",
    category: "Smart manufacturing",
    image:
      "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    excerpt:
      "Emerging technologies like AI and IoT are reshaping manufacturing. These innovations boost speed, quality, and cost-effectiveness. Discover the breakthroughs pushing the industry forward.",
    content: [
      "Modern manufacturing is experiencing unprecedented transformation through technological breakthroughs that are redefining efficiency, productivity, and quality. From artificial intelligence and machine learning to the Internet of Things and advanced robotics, these innovations are enabling manufacturers to optimize processes, reduce waste, and deliver superior products faster than ever before.",
      "The convergence of digital technologies with traditional manufacturing processes is creating smart, connected factories that can adapt in real-time to changing conditions and demands. This digital transformation is not just about automation—it's about creating intelligent systems that learn, predict, and optimize continuously.",
      "As these technologies mature and become more accessible, manufacturers of all sizes are finding ways to integrate them into their operations, driving efficiency gains that were previously unimaginable.",
    ],
    bullets: [
      "AI-powered quality control",
      "IoT-enabled predictive maintenance",
      "Real-time production analytics",
      "Automated supply chain optimization",
    ],
    quote:
      '"The future of manufacturing lies in the intelligent integration of technology and human expertise. Breakthroughs in AI, IoT, and robotics are not replacing human workers—they are empowering them to achieve new levels of efficiency and innovation."',
    closing:
      "These technological breakthroughs are democratizing manufacturing excellence, making it possible for companies of all sizes to compete on a global stage with enhanced efficiency, quality, and sustainability.",
  },
  "how-automation-is-shaping-the-future-of-manufacturing": {
    title: "How automation is shaping the future of manufacturing",
    date: "Jan 13, 2026",
    category: "Industry 4.0",
    image:
      "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    excerpt:
      "Automation is revolutionizing production lines across the globe. This article explores how robotics and AI are streamlining operations and enhancing worker safety.",
    content: [
      "Automation is fundamentally reshaping the manufacturing landscape, introducing unprecedented levels of precision, speed, and consistency to production processes. From robotic assembly lines to AI-powered quality inspection systems, automation technologies are enabling manufacturers to meet growing demand while maintaining the highest standards of quality and safety.",
      "The integration of collaborative robots, or cobots, alongside human workers is creating a new paradigm in manufacturing where machines handle repetitive and dangerous tasks while humans focus on creative problem-solving and oversight. This symbiotic relationship is driving productivity gains while improving workplace safety.",
      "As automation technologies continue to evolve, they are becoming more accessible and adaptable, allowing manufacturers to implement flexible production systems that can quickly respond to market changes and customer demands.",
    ],
    bullets: [
      "Robotic process automation",
      "Collaborative robotics (cobots)",
      "AI-driven quality inspection",
      "Flexible manufacturing systems",
    ],
    quote:
      '"Automation in manufacturing is not about replacing humans—it is about augmenting human capabilities. The most successful factories of the future will be those that find the perfect balance between human ingenuity and machine precision."',
    closing:
      "The future of manufacturing automation promises even greater integration of AI, machine learning, and robotics, creating intelligent production systems that can self-optimize and adapt to new challenges in real-time.",
  },
  "top-5-materials-revolutionizing-industrial-components": {
    title: "Top 5 materials revolutionizing industrial components",
    date: "Jan 10, 2026",
    category: "Advanced materials",
    image:
      "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp",
    excerpt:
      "Advanced materials are changing what's possible in manufacturing. Learn about the latest innovations in composites, alloys, and polymers that are driving industrial progress.",
    content: [
      "The development of advanced materials is pushing the boundaries of what's possible in industrial manufacturing. From high-performance composites and super alloys to smart polymers and nanomaterials, these innovations are enabling the creation of components that are lighter, stronger, and more durable than ever before.",
      "These revolutionary materials are finding applications across diverse industries including aerospace, automotive, medical devices, and energy. Their unique properties—such as exceptional strength-to-weight ratios, thermal resistance, and corrosion immunity—are solving engineering challenges that were previously insurmountable.",
      "As material science continues to advance, manufacturers are gaining access to an ever-expanding palette of options that allow them to optimize designs for specific performance requirements while reducing costs and environmental impact.",
    ],
    bullets: [
      "Carbon fiber composites",
      "Titanium superalloys",
      "High-performance polymers",
      "Ceramic matrix composites",
    ],
    quote:
      '"Materials innovation is the silent revolution in manufacturing. Every breakthrough in material science opens new possibilities for product design, performance, and sustainability that ripple across every industry."',
    closing:
      "The continued evolution of advanced materials promises to unlock new manufacturing capabilities, enabling the production of components and products that are more efficient, sustainable, and capable than anything available today.",
  },
  "smart-factories-transforming-modern-manufacturing": {
    title: "Smart factories transforming modern manufacturing",
    date: "Jan 8, 2026",
    category: "Smart manufacturing",
    image:
      "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
    excerpt:
      "Smart factories use data, AI, and connected machines. They improve quality, reduce downtime, and adapt to changes quickly. Learn how they're transforming the industry.",
    content: [
      "Smart factories represent the pinnacle of modern manufacturing, combining advanced sensors, artificial intelligence, cloud computing, and the Internet of Things to create fully connected, intelligent production environments. These facilities can monitor, analyze, and optimize every aspect of the manufacturing process in real-time.",
      "By leveraging digital twin technology, predictive analytics, and machine learning algorithms, smart factories can anticipate problems before they occur, optimize production schedules dynamically, and maintain consistently high quality standards. This level of intelligence and adaptability is setting new benchmarks for manufacturing excellence.",
      "The transition to smart factory operations is not just a technological upgrade—it represents a fundamental shift in how manufacturers think about production, quality, and continuous improvement.",
    ],
    bullets: [
      "Real-time production monitoring",
      "Digital twin simulation",
      "Predictive maintenance systems",
      "Adaptive production scheduling",
    ],
    quote:
      '"Smart factories are not just about technology—they are about creating a culture of continuous improvement where data-driven decisions lead to better products, more efficient processes, and happier customers."',
    closing:
      "As smart factory technology becomes more accessible and affordable, manufacturers of all sizes will be able to harness the power of connected, intelligent production systems to compete more effectively in the global marketplace.",
  },
  "3d-printing-revolutionizing-product-development": {
    title: "3D printing revolutionizing product development",
    date: "Jan 4, 2026",
    category: "Additive manufacturing",
    image:
      "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp",
    excerpt:
      "3D printing enables rapid prototyping and complex geometries. It's used in aerospace, medical, and automotive sectors. The technology is accelerating innovation and cutting lead time.",
    content: [
      "3D printing, or additive manufacturing, is revolutionizing product development by enabling rapid prototyping, complex geometry production, and on-demand manufacturing. This technology allows designers and engineers to iterate faster, test more designs, and bring products to market in a fraction of the traditional timeline.",
      "From aerospace components and medical implants to automotive parts and consumer products, 3D printing is finding applications across virtually every industry. Its ability to produce complex internal structures, reduce material waste, and eliminate tooling costs makes it an increasingly attractive option for both prototyping and production.",
      "As 3D printing materials and processes continue to advance, the technology is moving beyond prototyping into full-scale production, creating new possibilities for mass customization and distributed manufacturing.",
    ],
    bullets: [
      "Rapid prototyping capabilities",
      "Complex geometry production",
      "Reduced material waste",
      "On-demand manufacturing",
    ],
    quote:
      '"3D printing is not just changing how we make things—it is changing what we can make. The freedom to design without traditional manufacturing constraints is unleashing a new era of innovation and creativity."',
    closing:
      "The continued advancement of 3D printing technology promises to further democratize manufacturing, enabling businesses and individuals to bring innovative products to life faster and more cost-effectively than ever before.",
  },
};

const allBlogs = Object.entries(blogData).map(([slug, data]) => ({
  slug,
  ...data,
}));

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) notFound();

  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-sm text-muted">{blog.date}</span>
              <span className="text-sm font-medium text-accent">
                {blog.category}
              </span>
            </div>
            <h1 className="font-heading text-display font-semibold text-primary">
              {blog.title}
            </h1>
            <p className="text-secondary text-lg mt-6">{blog.excerpt}</p>
          </div>
          <div className="relative mt-12 rounded-3xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="prose prose-lg max-w-none">
            <p className="text-secondary leading-relaxed">{blog.content[0]}</p>

            <ul className="my-8 space-y-2">
              {blog.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-secondary">{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-secondary leading-relaxed">{blog.content[1]}</p>

            <p className="text-secondary leading-relaxed mt-6">
              {blog.content[2]}
            </p>

            <blockquote className="my-10 border-l-4 border-accent pl-6 py-2">
              <p className="text-primary font-medium italic text-lg">
                {blog.quote}
              </p>
            </blockquote>

            <p className="text-secondary leading-relaxed">{blog.closing}</p>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <SectionLabel>Insights &amp; Article</SectionLabel>
              <h2 className="font-heading text-h2 font-semibold text-primary mt-3">
                Recent blogs
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group bg-light rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-accent">
                      {related.category}
                    </span>
                    <span className="text-xs text-muted">{related.date}</span>
                  </div>
                  <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
