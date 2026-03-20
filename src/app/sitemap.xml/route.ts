import { NextResponse } from "next/server";
import { getAllProductSlugs } from "@/lib/products-payload";

const SITE_URL = "https://vasudevchemopharma.com";

/** High-priority product slugs that get a priority boost in the sitemap */
const HIGH_PRIORITY_PRODUCTS = new Set([
  "mea-triazine-78-h2s-scavenger",
]);

const blogSlugs = [
  "sustainable-chemical-manufacturing-greener-future-india",
  "ai-iot-breakthroughs-chemical-manufacturing-efficiency",
  "automation-shaping-future-chemical-manufacturing",
  "top-5-specialty-chemicals-revolutionizing-industrial-applications",
  "smart-factory-technology-modern-chemical-plants",
  "3d-printing-additive-manufacturing-chemical-industry",
];

const caseStudySlugs = [
  "lightweight-castings-for-industrial-equipment",
  "precision-cnc-milling-for-automotive-components",
  "additive-manufacturing-for-custom-tooling",
  "automated-assembly-line-optimization",
];

const serviceSlugs = [
  "chemical-manufacturing",
  "import-export",
  "custom-formulation",
  "quality-testing-packaging",
  "global-logistics-shipping",
  "bulk-contract-supply",
];

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
};

function buildUrlEntry(entry: SitemapEntry): string {
  return [
    "  <url>",
    `    <loc>${entry.url}</loc>`,
    `    <lastmod>${entry.lastModified}</lastmod>`,
    `    <changefreq>${entry.changeFrequency}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export async function GET() {
  let productSlugs: string[] = [];
  try {
    productSlugs = await getAllProductSlugs();
  } catch (err) {
    console.error("Failed to fetch product slugs for sitemap", { error: err });
    productSlugs = [];
  }

  const now = new Date().toISOString();

  /* ── Collect all sitemap entries ───────────────────────────────── */
  const entries: SitemapEntry[] = [
    // Static pages
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/product`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/case-study`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/legal/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Product pages (dynamic from CMS)
    ...productSlugs.map((slug) => ({
      url: `${SITE_URL}/product/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: HIGH_PRIORITY_PRODUCTS.has(slug) ? 0.95 : 0.9,
    })),

    // Service pages
    ...serviceSlugs.map((slug) => ({
      url: `${SITE_URL}/service/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),

    // Blog pages
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })),

    // Case study pages
    ...caseStudySlugs.map((slug) => ({
      url: `${SITE_URL}/case-study/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];

  /* ── Build XML ────────────────────────────────────────────────── */
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
