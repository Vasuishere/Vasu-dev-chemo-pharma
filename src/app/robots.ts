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
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
