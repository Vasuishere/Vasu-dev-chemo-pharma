import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import ArticleSchema from "@/components/seo/ArticleSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import AuthorByline from "@/components/blog/AuthorByline";
import TableOfContents from "@/components/blog/TableOfContents";
import { blogData, type BlogEntry } from "./seo-blog-data";

export const revalidate = 3600;


/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

const allBlogs = Object.entries(blogData).map(([slug, data]) => ({
  slug,
  ...data,
}));

function toIsoDateString(value: string): string | undefined {
  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) return undefined;
  return new Date(timestamp).toISOString();
}

function countWords(blog: BlogEntry): number {
  const text = [
    blog.excerpt,
    ...blog.sections.map((s) => s.body),
    blog.quote,
    blog.closing,
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                          */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  // Pre-render all known blog posts at build time; unknown slugs use ISR on first request
  return Object.keys(blogData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) return {};
  const publishedTime = toIsoDateString(blog.date);
  const modifiedTime = toIsoDateString(blog.lastUpdated);

  return {
    title: blog.title,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.vasudevchemopharma.com/blog/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `https://www.vasudevchemopharma.com/blog/${slug}`,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [blog.author],
      images: [{ url: blog.image, alt: blog.imageAlt }],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) notFound();

  const publishedDateIso = toIsoDateString(blog.date);
  const modifiedDateIso = toIsoDateString(blog.lastUpdated);
  const wordCount = countWords(blog);
  const isPillar = wordCount >= 1500;

  const relatedBlogs = allBlogs.filter((b) => b.slug !== slug).slice(0, 3);

  const tocItems = blog.sections.map((s) => ({
    id: s.id,
    label: s.heading,
  }));

  return (
    <>
      {/* Schema markup */}
      <ArticleSchema
        headline={blog.title}
        description={blog.excerpt}
        datePublished={publishedDateIso}
        dateModified={modifiedDateIso}
        image={blog.image}
        url={`https://www.vasudevchemopharma.com/blog/${slug}`}
        authorName={blog.author}
        authorCredentials={blog.authorCredentials}
        wordCount={wordCount}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Blog", url: "https://www.vasudevchemopharma.com/blog" },
          {
            name: blog.title,
            url: `https://www.vasudevchemopharma.com/blog/${slug}`,
          },
        ]}
      />

      <main>
        {/* ── Hero ── */}
        <section className="pt-32 pb-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-sm font-medium text-accent">
                  {blog.category}
                </span>
              </div>

              {/* H1 — target keyword in first 60 chars */}
              <h1 className="font-heading text-display font-semibold text-primary">
                {blog.title}
              </h1>

              <p className="text-secondary text-lg mt-6">{blog.excerpt}</p>
            </div>

            {/* Hero image with keyword-rich alt text */}
            <div className="relative mt-12 rounded-3xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── Author byline ── */}
        <section className="pb-8">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <AuthorByline
              name={blog.author}
              credentials={blog.authorCredentials}
              publishedDate={blog.date}
              lastUpdated={blog.lastUpdated}
            />
          </div>
        </section>

        {/* ── Content ── */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="prose prose-lg max-w-none">
              {/* Table of contents for pillar posts (1500+ words) */}
              {isPillar && <TableOfContents items={tocItems} />}

              {/* Sections with H2 headings */}
              {blog.sections.map((section, idx) => (
                <div key={section.id} className="mb-8">
                  <h2
                    id={section.id}
                    className="font-heading text-h3 font-semibold text-primary mb-4 scroll-mt-24"
                  >
                    {section.heading}
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    {section.body}
                  </p>

                  {/* Insert bullets after first section */}
                  {idx === 0 && (
                    <ul className="my-8 space-y-2">
                      {blog.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="text-secondary">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Block quote */}
              <blockquote className="my-10 border-l-4 border-accent pl-6 py-2">
                <p className="text-primary font-medium italic text-lg">
                  {blog.quote}
                </p>
              </blockquote>

              {/* Internal links section */}
              {blog.internalLinks.length > 0 && (
                <div className="my-8 bg-light rounded-2xl p-6">
                  <h3 className="font-heading font-semibold text-primary text-base mb-3">
                    Related Products &amp; Services
                  </h3>
                  <ul className="space-y-2">
                    {blog.internalLinks.map((link) => (
                      <li key={link.href} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <Link
                          href={link.href}
                          className="text-accent hover:underline font-medium text-sm"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Closing paragraph */}
              <p className="text-secondary leading-relaxed">{blog.closing}</p>

              {/* External references */}
              {blog.externalLinks.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-heading font-semibold text-primary text-sm mb-2">
                    References &amp; Further Reading
                  </h3>
                  <ul className="space-y-1">
                    {blog.externalLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-accent hover:underline"
                        >
                          {link.text} ↗
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Related Blogs ── */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <SectionLabel>Insights &amp; Articles</SectionLabel>
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
                      alt={related.imageAlt}
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
    </>
  );
}
