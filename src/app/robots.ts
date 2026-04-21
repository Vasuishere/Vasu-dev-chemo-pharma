import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vasudevchemopharma.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/payload",
          "/payload/*",
          "/api/",
          "/tmp",
          "/tmp/*",
          "/*?*",
        ],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "DuckDuckBot",
          "Slurp",
          "Baiduspider",
          "YandexBot",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Google-Extended",
        ],
        allow: "/",
        disallow: [
          "/admin",
          "/admin/*",
          "/payload",
          "/payload/*",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
