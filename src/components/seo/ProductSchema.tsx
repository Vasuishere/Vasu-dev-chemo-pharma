import type { Product } from "@/lib/types";
import { CATEGORY_LABELS } from "@/lib/types";
import {
  MEA_TRIAZINE_SLUG,
  MEA_TRIAZINE_SCHEMA_ENRICHMENT,
} from "@/lib/seo/mea-triazine-schema-data";


type ProductSchemaProps = {
  product: Product;
};

const SCHEMA_AVAILABILITY_MAP: Record<string, string> = {
  in_stock: "https://schema.org/InStock",
  out_of_stock: "https://schema.org/OutOfStock",
  preorder: "https://schema.org/PreOrder",
  active: "https://schema.org/InStock",
  inactive: "https://schema.org/OutOfStock",
  discontinued: "https://schema.org/Discontinued",
};

function getSchemaAvailability(product: Product): string | undefined {
  const productAvailability = product as Product & {
    availability?: unknown;
    stockStatus?: unknown;
  };
  const availabilityCandidate = [
    productAvailability.availability,
    productAvailability.stockStatus,
    product.status,
  ].find((candidate): candidate is string => typeof candidate === "string");
  const normalizedAvailability = availabilityCandidate?.toLowerCase().trim() || "";

  return SCHEMA_AVAILABILITY_MAP[normalizedAvailability];
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  const availability = getSchemaAvailability(product);
  const hasPrice = typeof product.price === "number" && Number.isFinite(product.price) && product.price > 0;
  const isEnrichedSlug = product.slug === MEA_TRIAZINE_SLUG;

  /* --- Base Product schema (all products) --- */
  const productSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description:
      product.description ||
      `${product.name} manufactured by Vasudev Chemo Pharma, Gujarat, India.`,
    sku: product.sku,
    image: product.imageUrl || undefined,
    url: `https://www.vasudevchemopharma.com/product/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "Vasudev Chemo Pharma",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Vasudev Chemo Pharma Chemicals",
      url: "https://www.vasudevchemopharma.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    category: CATEGORY_LABELS[product.category],
    offers: {
      "@type": "Offer",
      ...(availability ? { availability } : {}),
      priceCurrency: product.currency || "USD",
      ...(hasPrice
        ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            price: product.price,
            priceCurrency: product.currency || "USD",
          },
        }
        : {}),
      url: `https://www.vasudevchemopharma.com/product/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Vasudev Chemo Pharma Chemicals",
      },
    },
  };

  /* --- Slug-specific enrichment (MEA Triazine 78%) --- */
  if (isEnrichedSlug) {
    const enrichment = MEA_TRIAZINE_SCHEMA_ENRICHMENT;
    productSchema.description = enrichment.description;
    productSchema.alternateName = enrichment.alternateName.slice(0, 12);
    productSchema.additionalProperty = enrichment.additionalProperty;
    productSchema.material = enrichment.material;
    productSchema.mpn = enrichment.mpn;
    productSchema.category = enrichment.category;
    productSchema.countryOfOrigin = enrichment.countryOfOrigin;
    productSchema.audience = enrichment.audience;
    productSchema.areaServed = enrichment.areaServed;
  }

  /* --- H2S Scavenger / Biocide category enrichment (slug-driven) --- */
  const H2S_CATEGORY_SLUGS = [
    "mma-triazine-40",
    "triazine-h2s-scavenger-general",
    "mea-triazine-78-high-concentration",
    "mma-triazine-40-btx-free",
  ];
  const BIOCIDE_SLUGS = ["biocide-oil-gas", "metal-working-fluids"];

  if (!isEnrichedSlug && H2S_CATEGORY_SLUGS.includes(product.slug)) {
    productSchema.category = "H2S Scavenger";
    productSchema.additionalProperty = [
      ...(Array.isArray(productSchema.additionalProperty)
        ? productSchema.additionalProperty
        : []),
      {
        "@type": "PropertyValue",
        name: "Chemical Category",
        value: "H2S Scavenger (Hydrogen Sulphide Scavenger)",
      },
      {
        "@type": "PropertyValue",
        name: "Base Chemistry",
        value: "Triazine-based",
      },
      {
        "@type": "PropertyValue",
        name: "Primary Application",
        value:
          "Oil and gas, natural gas processing, biogas, refinery, pipeline",
      },
    ];
  } else if (!isEnrichedSlug && BIOCIDE_SLUGS.includes(product.slug)) {
    productSchema.category = product.slug === "metal-working-fluids"
      ? "Metal Working Fluid Biocide"
      : "Oilfield Biocide";
    productSchema.additionalProperty = [
      ...(Array.isArray(productSchema.additionalProperty)
        ? productSchema.additionalProperty
        : []),
      {
        "@type": "PropertyValue",
        name: "Chemical Category",
        value: product.slug === "metal-working-fluids"
          ? "Metal Working Fluid Biocide (Triazine-based)"
          : "Oilfield Biocide (Triazine-based)",
      },
      {
        "@type": "PropertyValue",
        name: "Base Chemistry",
        value: "Triazine-based",
      },
    ];
  }

  const chemicalSchema = {
    "@context": "https://schema.org",
    "@type": "ChemicalSubstance",
    name: product.name,
    molecularFormula: product.formula || undefined,
    identifier: product.casNumber
      ? {
        "@type": "PropertyValue",
        name: "CAS Number",
        value: product.casNumber,
      }
      : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chemicalSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

