import type { MetadataRoute } from "next";

const SITE_URL = "https://vasudevchemopharma.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Google — full access, no crawl-delay needed
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/payload", "/api/", "/_next/", "/admin/*", "/legal-pages/"],
      },
      {
        // Bing — full access
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin", "/payload", "/api/", "/_next/", "/admin/*", "/legal-pages/"],
      },
      {
        // All other crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/payload",
          "/payload/*",
          "/api/",
          "/api/*",
          "/_next/",
          "/_next/*",
          "/legal-pages/",
          "/tmp/",
          "/*.json$",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
