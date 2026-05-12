"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

/* ------------------------------------------------------------------ */
/*  Blog listing data types                                            */
/* ------------------------------------------------------------------ */

type BlogListItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

interface BlogPageClientProps {
  initialBlogs: BlogListItem[];
  imageOverrides: Record<string, string>;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ARTICLES_PER_PAGE = 12;

/* ------------------------------------------------------------------ */
/*  Search icon SVG (inline to avoid extra import)                     */
/* ------------------------------------------------------------------ */

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function BlogPageClient({ initialBlogs, imageOverrides }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  /* Apply image overrides */
  const blogs = useMemo(() => {
    return initialBlogs.map(blog => ({
      ...blog,
      image: imageOverrides[blog.slug] || blog.image
    }));
  }, [initialBlogs, imageOverrides]);

  const ALL_CATEGORIES = useMemo(() => [
    "All",
    ...Array.from(new Set(blogs.map((b) => b.category))).sort(),
  ], [blogs]);

  /* Derived data */
  const filteredBlogs = useMemo(() => {
    let result = blogs;

    if (activeCategory !== "All") {
      result = result.filter((b) => b.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q)
      );
    }

    return result;
  }, [activeCategory, searchQuery, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / ARTICLES_PER_PAGE);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  );

  /* Featured article (first one marked or fallback to first blog) */
  const featured = blogs.find((b) => b.featured) ?? blogs[0];

  /* Reset page when filters change */
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  /* Category counts */
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogs.length };
    blogs.forEach((b) => {
      counts[b.category] = (counts[b.category] ?? 0) + 1;
    });
    return counts;
  }, [blogs]);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.vasudevchemopharma.com";

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Blog", url: `${baseUrl}/blog` },
        ]}
      />
      <main>
        {/* ============ HERO SECTION ============ */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Gradient background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(135deg, #3c2a98 0%, #3d4dda 40%, #00a658 100%)",
            }}
          />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <span className="inline-block text-white/70 text-sm font-medium tracking-wider uppercase mb-4">
                Insights & Resources
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-display font-semibold text-white mb-5 leading-tight">
                Chemical Industry Blog
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                Expert insights on H2S scavengers, MEA Triazine applications,
                brand comparisons, and chemical manufacturing for oil &amp; gas
                professionals.
              </p>
            </div>

            {/* Article Count Badge */}
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20">
                <span
                  className="w-2 h-2 rounded-full bg-accent animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
                {blogs.length} Articles Published
              </span>
            </div>
          </div>
        </section>

        {/* ============ FEATURED ARTICLE ============ */}
        {featured && blogs.length > 0 && (
          <section className="relative -mt-8 z-10 pb-12">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <Link
                href={`/blog/${featured.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-xl shadow-primary/8 border border-gray-100 hover:shadow-2xl hover:shadow-primary/12 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto">
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent lg:bg-gradient-to-l" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 w-fit text-xs font-semibold tracking-wider uppercase text-white bg-accent px-3 py-1.5 rounded-full mb-5">
                    ★ Featured Article
                  </span>
                  <h2 className="font-heading text-2xl md:text-h3 font-semibold text-primary group-hover:text-secondary transition-colors duration-300 mb-4">
                    {featured.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-sm font-medium text-accent">
                      {featured.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="text-sm text-gray-500">
                      {featured.date}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Read Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
        )}

        {/* ============ FILTERS + SEARCH BAR ============ */}
        <section className="pb-4">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <SearchIcon />
              </div>
              <label htmlFor="blog-search" className="sr-only">Search articles by title or category</label>
              <input
                id="blog-search"
                type="text"
                placeholder="Search articles by title or category…"
                aria-label="Search articles by title or category"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors text-sm font-medium"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary/30 hover:text-primary hover:bg-primary/5"
                    }`}
                >
                  {cat}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    {categoryCounts[cat] ?? 0}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RESULTS COUNT ============ */}
        <section className="pt-4 pb-2">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {(() => {
                  const startIndex = filteredBlogs.length === 0 ? 0 : Math.min((currentPage - 1) * ARTICLES_PER_PAGE + 1, filteredBlogs.length);
                  const endIndex = filteredBlogs.length === 0 ? 0 : Math.min(currentPage * ARTICLES_PER_PAGE, filteredBlogs.length);
                  return (
                    <>
                      Showing{" "}
                      <span className="font-semibold text-gray-900">
                        {startIndex}–{endIndex}
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold text-gray-900">
                        {filteredBlogs.length}
                      </span>{" "}
                      articles
                    </>
                  );
                })()}
              </p>
              {totalPages > 1 && (
                <p className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* ============ ARTICLE GRID ============ */}
        <section className="py-8">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            {paginatedBlogs.length === 0 ? (
              <div className="text-center py-24">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="font-heading text-h4 font-semibold text-primary mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or filter to find what you&apos;re
                  looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/6 hover:border-primary/15 transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.imageAlt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Category badge on image */}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-sm text-primary px-2.5 py-1 rounded-md shadow-sm">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-5">
                      <span className="text-xs text-gray-400 mb-2.5">
                        {blog.date}
                      </span>
                      <h2 className="font-heading text-[17px] leading-snug font-semibold text-primary group-hover:text-accent transition-colors duration-200 line-clamp-3">
                        {blog.title}
                      </h2>

                      {/* Read more indicator */}
                      <div className="mt-auto pt-4 flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read Article
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ============ PAGINATION ============ */}
        {totalPages > 1 && (
          <section className="pb-20">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <div className="flex items-center justify-center gap-2">
                {/* Previous */}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.max(1, p - 1))
                  }
                  disabled={currentPage === 1}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous page"
                >
                  <ChevronIcon direction="left" />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    /* Show: first, last, current, and neighbors */
                    const show =
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1;

                    /* Ellipsis */
                    const showEllipsis =
                      !show &&
                      (page === currentPage - 2 ||
                        page === currentPage + 2);

                    if (showEllipsis) {
                      return (
                        <span
                          key={page}
                          className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm"
                        >
                          …
                        </span>
                      );
                    }

                    if (!show) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-semibold transition-all ${currentPage === page
                          ? "bg-primary text-white shadow-md shadow-primary/25"
                          : "border border-gray-200 text-gray-600 hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                          }`}
                      >
                        {page}
                      </button>
                    );
                  }
                )}

                {/* Next */}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next page"
                >
                  <ChevronIcon direction="right" />
                </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
