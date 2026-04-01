import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vasudevchemopharma.com";

const DISALLOW_PATHS = [
  "/admin",
  "/admin/*",
  "/payload",
  "/payload/*",
  "/api",
  "/api/*",
  "/legal-pages",
  "/legal-pages/*",
  "/tmp",
  "/tmp/*",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      // AI search crawlers — explicitly allowed for GEO
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: DISALLOW_PATHS,
      },
      // Block training-only scrapers (no search benefit)
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
