import type { MetadataRoute } from "next";

const SITE_URL = "https://vasudevchemopharma.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow major crawlers to fetch framework assets and render SSR pages fully.
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin", "/payload", "/api/", "/admin/*", "/legal-pages/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin", "/payload", "/api/", "/admin/*", "/legal-pages/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/payload",
          "/payload/*",
          "/api/",
          "/api/*",
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
