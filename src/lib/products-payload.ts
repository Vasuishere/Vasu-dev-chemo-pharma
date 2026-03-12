import { getPayload } from "./payload";
import type { Product } from "./types";

/**
 * Map a Payload CMS product document to the frontend Product type.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toProduct(doc: any): Product {
  const specs: Record<string, string> = {};
  if (Array.isArray(doc.specs)) {
    for (const s of doc.specs) {
      if (s.key && s.value) specs[s.key] = s.value;
    }
  }

  return {
    id: doc.id,
    name: doc.name,
    slug: doc.slug,
    sku: doc.sku ?? "",
    formula: doc.formula ?? "",
    casNumber: doc.casNumber ?? "",
    category: doc.category,
    subcategory: doc.subcategory ?? "",
    metaTitle: doc.metaTitle ?? "",
    metaDescription: doc.metaDescription ?? "",
    description: doc.description ?? "",
    appearance: doc.appearance ?? "",
    molecularWeight: doc.molecularWeight ?? "",
    hsCode: doc.hsCode ?? "",
    specs,
    safetyClass: doc.safetyClass ?? "",
    ghsPictograms: doc.ghsPictograms ?? [],
    signalWord: doc.signalWord ?? "",
    hazardStatements: doc.hazardStatements ?? [],
    documents: doc.documents ?? [],
    applications: doc.applications ?? [],
    industries: doc.industries ?? [],
    price: doc.price ?? 0,
    priceUnit: doc.priceUnit ?? "/MT",
    currency: doc.currency ?? "USD",
    unitOfMeasure: doc.unitOfMeasure ?? "MT",
    grades: doc.grades ?? [],
    packaging: doc.packaging ?? [],
    minOrderQuantity: doc.minOrderQuantity ?? "",
    originCountry: doc.originCountry ?? "India",
    certifications: doc.certifications ?? [],
    supplier: doc.supplier ?? "VasuDev Chemo Pharma",
    images: doc.images ?? [],
    status: doc.status ?? "active",
    faqs: doc.faqs ?? [],
  };
}

/** Fetch all active products */
export async function getAllProducts(): Promise<Product[]> {
  const payload = await getPayload();
  const result = await payload.find({
    collection: "products",
    where: { status: { equals: "active" } },
    limit: 200,
    sort: "name",
  });
  return result.docs.map(toProduct);
}

/** Find a product by slug */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const payload = await getPayload();
  const result = await payload.find({
    collection: "products",
    where: { slug: { equals: slug } },
    limit: 1,
  });
  return result.docs.length > 0 ? toProduct(result.docs[0]) : undefined;
}

/** Get all active product slugs for static generation */
export async function getAllProductSlugs(): Promise<string[]> {
  const payload = await getPayload();
  const result = await payload.find({
    collection: "products",
    where: { status: { equals: "active" } },
    limit: 200,
  });
  return result.docs.map((d) => d.slug).filter((s): s is string => typeof s === 'string');
}

/** Get related products (same category, excluding current) */
export async function getRelatedProducts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Product[]> {
  const payload = await getPayload();
  const result = await payload.find({
    collection: "products",
    where: {
      and: [
        { category: { equals: category } },
        { slug: { not_equals: currentSlug } },
        { status: { equals: "active" } },
      ],
    },
    limit,
  });
  return result.docs.map(toProduct);
}
