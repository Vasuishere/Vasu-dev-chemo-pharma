import { NextResponse } from "next/server";
import { getAllProductSlugsWithDates } from "@/lib/products-payload";
import { getAllProductSlugs as getStaticProductSlugs } from "@/lib/products";
import { blogData } from "@/app/(frontend)/blog/[slug]/seo-blog-data";
import { CASE_STUDY_SLUGS } from "@/lib/case-studies-data";
import { COUNTRY_SLUGS } from "@/lib/seo/country-pages-data";
import { COMPETITOR_SLUGS } from "@/lib/seo/competitor-comparison-data";
import { APPLICATION_SLUGS } from "@/lib/seo/application-pages-data";
import { RESOURCE_SLUGS } from "@/lib/seo/resource-articles-data";
import {
  buildApplicationPagePath,
  buildComparisonPagePath,
  buildCountryPagePath,
  buildResourceArticlePath,
} from "@/lib/seo/seo-route-helpers";

const SITE_URL = "https://www.vasudevchemopharma.com";
export const dynamic = "force-dynamic";

type SitemapEntry = {
  url: string;
  lastModified: string;
};

const PRODUCT_FALLBACK_DATE = "2026-03-15";

/**
 * Static routes with approximate last-modified dates.
 * These should be updated when page content actually changes.
 */
const STATIC_ROUTES: { path: string; lastmod: string }[] = [
  { path: "", lastmod: "2026-03-28" },
  { path: "/about", lastmod: "2026-03-15" },
  { path: "/product", lastmod: "2026-03-28" },
  { path: "/service", lastmod: "2026-02-01" },
  { path: "/blog", lastmod: "2026-03-28" },
  { path: "/contact", lastmod: "2026-03-01" },
  { path: "/case-study", lastmod: "2026-02-15" },
  { path: "/how-h2s-scavengers-work", lastmod: "2026-01-15" },
  { path: "/mea-triazine-vs-mma-triazine", lastmod: "2026-01-15" },
  { path: "/supply/mea-triazine-78", lastmod: "2026-03-20" },
  { path: "/compare", lastmod: "2026-03-01" },
  { path: "/applications", lastmod: "2026-03-01" },
  { path: "/resources", lastmod: "2026-02-15" },
  { path: "/legal/privacy-policy", lastmod: "2025-12-01" },
];

const SERVICE_SLUGS = [
  "chemical-manufacturing",
  "import-export",
  "custom-formulation",
  "quality-testing-packaging",
  "global-logistics-shipping",
  "bulk-contract-supply",
];

const INDUSTRY_SLUGS = [
  "oil-gas-h2s-scavenger",
  "water-treatment",
  "metal-working-fluids",
  "paper-mill",
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlEntry(entry: SitemapEntry): string {
  return [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${escapeXml(entry.lastModified)}</lastmod>`,
    "  </url>",
  ].join("\n");
}

function buildAbsoluteUrl(path: string): string {
  return path ? `${SITE_URL}${path}` : SITE_URL;
}

function buildEntry(path: string, lastModified: string): SitemapEntry {
  return {
    url: buildAbsoluteUrl(path),
    lastModified,
  };
}

/**
 * Converts a date string to YYYY-MM-DD format.
 * Returns null if the value is invalid.
 */
function toDateString(value: string | undefined): string | null {
  if (!value) return null;

  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return null;
  }

  return new Date(timestamp).toISOString().split("T")[0];
}

export async function GET() {
  const fallbackProductSlugs = getStaticProductSlugs();
  let productEntries: { slug: string; updatedAt: string | null }[];

  try {
    productEntries = await getAllProductSlugsWithDates();
    if (productEntries.length === 0) {
      productEntries = fallbackProductSlugs.map((slug) => ({ slug, updatedAt: null }));
    }
  } catch (err) {
    console.error("Failed to fetch product slugs for sitemap", { error: err });
    productEntries = fallbackProductSlugs.map((slug) => ({ slug, updatedAt: null }));
  }

  const today = new Date().toISOString().split("T")[0];

  const rawEntries: SitemapEntry[] = [
    // Static routes with meaningful dates
    ...STATIC_ROUTES.map((route) =>
      buildEntry(route.path, route.lastmod)
    ),
    // Product pages — use real CMS updatedAt when available
    ...productEntries.map(({ slug, updatedAt }) =>
      buildEntry(
        `/product/${slug}`,
        toDateString(updatedAt ?? undefined) ?? PRODUCT_FALLBACK_DATE
      )
    ),
    // Service pages
    ...SERVICE_SLUGS.map((slug) =>
      buildEntry(`/service/${slug}`, "2026-02-01")
    ),
    // Blog posts — use real dates from blog data
    ...Object.entries(blogData).map(([slug, blog]) =>
      buildEntry(
        `/blog/${slug}`,
        toDateString(blog.lastUpdated) ?? toDateString(blog.date) ?? today
      )
    ),
    // Case studies
    ...CASE_STUDY_SLUGS.map((slug) =>
      buildEntry(`/case-study/${slug}`, "2026-02-15")
    ),
    // Industry pages
    ...INDUSTRY_SLUGS.map((slug) =>
      buildEntry(`/industries/${slug}`, "2026-03-01")
    ),
    // Country supply pages
    ...COUNTRY_SLUGS.map((slug) =>
      buildEntry(buildCountryPagePath(slug), "2026-03-20")
    ),
    // Competitor comparison pages
    ...COMPETITOR_SLUGS.map((slug) =>
      buildEntry(buildComparisonPagePath(slug), "2026-03-01")
    ),
    // Application pages
    ...APPLICATION_SLUGS.map((slug) =>
      buildEntry(buildApplicationPagePath(slug), "2026-03-01")
    ),
    // Resource articles
    ...RESOURCE_SLUGS.map((slug) =>
      buildEntry(buildResourceArticlePath(slug), "2026-02-15")
    ),
  ];

  const entries = Array.from(
    new Map(rawEntries.map((entry) => [entry.url, entry])).values()
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(buildUrlEntry),
    "</urlset>",
  ].join("\n");

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
