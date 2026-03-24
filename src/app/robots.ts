import type { MetadataRoute } from "next";

const SITE_URL = "https://www.Vasudevchemopharma.com";

export default function robots(): MetadataRoute.Robots {
  const allowPublicCrawlPaths = ["/", "/_next/static/", "/_next/image"];
  const disallowPrivatePaths = [
    "/admin",
    "/admin/*",
    "/payload",
    "/payload/*",
    "/api/",
    "/api/*",
    "/legal-pages/",
    "/tmp/",
    "/*.json$",
  ];

  return {
    rules: [
      {
        // Explicitly allow Next.js assets so Google can render App Router pages.
        userAgent: "Googlebot",
        allow: allowPublicCrawlPaths,
        disallow: disallowPrivatePaths,
      },
      {
        userAgent: "Bingbot",
        allow: allowPublicCrawlPaths,
        disallow: disallowPrivatePaths,
      },
      {
        userAgent: "*",
        allow: allowPublicCrawlPaths,
        disallow: disallowPrivatePaths,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
