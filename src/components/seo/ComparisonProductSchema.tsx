import type { CompetitorPageData } from "@/lib/seo/competitor-comparison-data";
import {
  buildAbsoluteUrl,
  buildComparisonPagePath,
  SITE_URL,
} from "@/lib/seo/seo-route-helpers";

type ComparisonProductSchemaProps = {
  page: CompetitorPageData;
};

export default function ComparisonProductSchema({
  page,
}: ComparisonProductSchemaProps) {
  const pageUrl = buildAbsoluteUrl(buildComparisonPagePath(page.slug));

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "MEA Triazine 78% H2S Scavenger",
    description:
      "78% active hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) H2S scavenger. Direct manufacturer supply from ISO 9001:2015 certified facility in Gujarat, India.",
    sku: "VCP-MEA-78",
    brand: {
      "@type": "Brand",
      name: "Vasudev Chemo Pharma",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vasudev Chemo Pharma",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    url: `${SITE_URL}/product/mea-triazine-78-h2s-scavenger`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vasudev Chemo Pharma",
      },
      url: pageUrl,
    },
    isSimilarTo: {
      "@type": "Product",
      name: page.competitorBrand,
      brand: {
        "@type": "Brand",
        name: page.competitorCompany,
      },
      description: `${page.competitorBrand} from ${page.competitorCompany} (${page.competitorOrigin})`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(productSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
