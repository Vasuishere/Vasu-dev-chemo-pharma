import type { MetadataRoute } from "next";
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let productSlugs: string[] = [];
  try {
    productSlugs = await getAllProductSlugs();
  } catch (err) {
    console.error("Failed to fetch product slugs for sitemap", {
      error: err,
      fallbackProductSlugs: productSlugs.length,
    });
    productSlugs = [];
  }

  const now = new Date();

  /* ── Static pages ─────────────────────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "x-default": SITE_URL,
          en: SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "x-default": `${SITE_URL}/about`,
          en: `${SITE_URL}/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/product`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "x-default": `${SITE_URL}/product`,
          en: `${SITE_URL}/product`,
        },
      },
    },
    {
      url: `${SITE_URL}/service`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/case-study`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/legal/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  /* ── Product pages ────────────────────────────────────────────── */
  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => {
    const isHighPriority = HIGH_PRIORITY_PRODUCTS.has(slug);
    const productUrl = `${SITE_URL}/product/${slug}`;
    return {
      url: productUrl,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: isHighPriority ? 0.95 : 0.9,
      alternates: {
        languages: {
          "x-default": productUrl,
          en: productUrl,
        },
      },
    };
  });

  /* ── Service pages ────────────────────────────────────────────── */
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/service/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  /* ── Blog pages ───────────────────────────────────────────────── */
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /* ── Case study pages ─────────────────────────────────────────── */
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${SITE_URL}/case-study/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...servicePages,
    ...blogPages,
    ...caseStudyPages,
  ];
}

