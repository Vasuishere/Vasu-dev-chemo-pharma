import type { MetadataRoute } from "next";
import { getAllProductSlugs } from "@/lib/products-payload";

const SITE_URL = "https://vasudevchemopharma.com";

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

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/product`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
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

  const productPages: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${SITE_URL}/product/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${SITE_URL}/service/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

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
