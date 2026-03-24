import { NextResponse } from "next/server";
import { getAllProductSlugs } from "@/lib/products-payload";
import { getAllProductSlugs as getStaticProductSlugs } from "@/lib/products";
import { blogData } from "@/app/(frontend)/blog/[slug]/seo-blog-data";

const SITE_URL = "https://www.vasudevchemopharma.com";
export const dynamic = "force-dynamic";

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
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/case-study", changeFrequency: "monthly", priority: 0.6 },
  { path: "/how-h2s-scavengers-work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/mea-triazine-vs-mma-triazine", changeFrequency: "monthly", priority: 0.8 },
  { path: "/legal/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
];

const CASE_STUDY_SLUGS = [
  "lightweight-castings-for-industrial-equipment",
  "precision-cnc-milling-for-automotive-components",
  "additive-manufacturing-for-custom-tooling",
  "automated-assembly-line-optimization",
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
    `    <changefreq>${escapeXml(entry.changeFrequency)}</changefreq>`,
    `    <priority>${escapeXml(String(entry.priority))}</priority>`,
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

export async function GET() {
  const fallbackProductSlugs = getStaticProductSlugs();
  let productSlugs: string[] = fallbackProductSlugs;

  try {
    productSlugs = await getAllProductSlugs();
    if (productSlugs.length === 0) {
      productSlugs = fallbackProductSlugs;
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
