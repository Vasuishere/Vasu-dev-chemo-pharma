import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vasudevchemopharma.com";
const ALLOW_PUBLIC_PATHS = ["/", "/_next/static/", "/_next/image"];
const DISALLOW_PRIVATE_PATHS = [
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
  "/*.json$",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ALLOW_PUBLIC_PATHS,
        disallow: DISALLOW_PRIVATE_PATHS,
      },
      {
        userAgent: "Bingbot",
        allow: ALLOW_PUBLIC_PATHS,
        disallow: DISALLOW_PRIVATE_PATHS,
      },
      {
        userAgent: "*",
        allow: ALLOW_PUBLIC_PATHS,
        disallow: DISALLOW_PRIVATE_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
