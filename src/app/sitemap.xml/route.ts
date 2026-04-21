import { NextResponse } from "next/server";
import { getAllProductSlugs } from "@/lib/products-payload";
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
  normalizeCountrySlug,
} from "@/lib/seo/seo-route-helpers";

const SITE_URL = "https://www.vasudevchemopharma.com";

// Cache sitemap for 1 hour; regenerate in background via ISR.
// force-dynamic was causing every crawl request to rebuild from DB,
// which hurt crawl budget on slow cold starts.
export const revalidate = 3600;

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

type RouteConfig = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const HIGH_PRIORITY_PRODUCTS = new Set([
  "mea-triazine-78-h2s-scavenger",
]);

const STATIC_ROUTES: RouteConfig[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/product", changeFrequency: "weekly", priority: 0.9 },
  { path: "/service", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.6 },
  { path: "/how-h2s-scavengers-work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mea-triazine-vs-mma-triazine", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mea-triazine-prices", changeFrequency: "weekly", priority: 0.9 },
  { path: "/mea-triazine-production-plant-cost", changeFrequency: "monthly", priority: 0.8 },
  { path: "/supply/mea-triazine-78", changeFrequency: "weekly", priority: 0.85 },
  { path: "/compare", changeFrequency: "weekly", priority: 0.8 },
  { path: "/applications", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.75 },
  { path: "/legal/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

const SERVICE_SLUGS = [
  "chemical-manufacturing",
  "import-export",
  "custom-formulation",
  "quality-testing-packaging",
  "global-logistics-shipping",
  "bulk-contract-supply",
];

// Must mirror keys in src/app/(frontend)/industries/[slug]/page.tsx
const INDUSTRY_SLUGS = [
  "oil-gas-h2s-scavenger",
  "water-treatment",
  "metal-working-fluids",
  "petrochemical",
  "refining",
  "biogas",
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
    `    <changefreq>${escapeXml(entry.changeFrequency)}</changefreq>`,
    `    <priority>${escapeXml(entry.priority.toFixed(2))}</priority>`,
    "  </url>",
  ].join("\n");
}

function buildAbsoluteUrl(path: string): string {
  return path ? `${SITE_URL}${path}` : SITE_URL;
}

function buildEntry(
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified: string
): SitemapEntry {
  return {
    url: buildAbsoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

function toIsoDateString(value: string | undefined): string | null {
  if (!value) return null;

  const timestamp = Date.parse(value);
  if (Number.isNaN(timestamp)) {
    return null;
  }

  return new Date(timestamp).toISOString();
}

// De-dup country slugs through the canonical normalizer so aliases
// like `usa` collapse to `united-states` and never appear twice.
function canonicalCountrySlugs(): string[] {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const slug of COUNTRY_SLUGS) {
    const canonical = normalizeCountrySlug(slug);
    if (!seen.has(canonical)) {
      seen.add(canonical);
      result.push(canonical);
    }
  }
  return result;
}

export async function GET() {
  const fallbackProductSlugs = getStaticProductSlugs();
  let productSlugs: string[] = fallbackProductSlugs;

  try {
    const liveSlugs = await getAllProductSlugs();
    if (liveSlugs.length > 0) {
      productSlugs = liveSlugs;
    }
  } catch (err) {
    console.error("Failed to fetch product slugs for sitemap", { error: err });
    productSlugs = fallbackProductSlugs;
  }

  const now = new Date().toISOString();

  const rawEntries: SitemapEntry[] = [
    ...STATIC_ROUTES.map((route) =>
      buildEntry(route.path, route.changeFrequency, route.priority, now)
    ),
    ...productSlugs.map((slug) =>
      buildEntry(
        `/product/${slug}`,
        "monthly",
        HIGH_PRIORITY_PRODUCTS.has(slug) ? 0.95 : 0.9,
        now
      )
    ),
    ...SERVICE_SLUGS.map((slug) =>
      buildEntry(`/service/${slug}`, "monthly", 0.7, now)
    ),
    ...Object.entries(blogData).map(([slug, blog]) =>
      buildEntry(
        `/blog/${slug}`,
        "monthly",
        0.6,
        toIsoDateString(blog.lastUpdated) ?? toIsoDateString(blog.date) ?? now
      )
    ),
    ...CASE_STUDY_SLUGS.map((slug) =>
      buildEntry(`/case-study/${slug}`, "monthly", 0.5, now)
    ),
    ...INDUSTRY_SLUGS.map((slug) =>
      buildEntry(`/industries/${slug}`, "monthly", 0.85, now)
    ),
    ...canonicalCountrySlugs().map((slug) =>
      buildEntry(buildCountryPagePath(slug), "weekly", 0.85, now)
    ),
    ...COMPETITOR_SLUGS.map((slug) =>
      buildEntry(buildComparisonPagePath(slug), "monthly", 0.8, now)
    ),
    ...APPLICATION_SLUGS.map((slug) =>
      buildEntry(buildApplicationPagePath(slug), "monthly", 0.8, now)
    ),
    ...RESOURCE_SLUGS.map((slug) =>
      buildEntry(buildResourceArticlePath(slug), "monthly", 0.75, now)
    ),
  ];

  // Dedupe by URL so overlapping slug sources can't emit the same <loc> twice.
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
      "X-Robots-Tag": "noindex",
    },
  });
}
