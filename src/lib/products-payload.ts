import { getPayload } from "./payload";
import type { Product } from "./types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapQuickImageUrls(doc: any): Product["images"] {
  if (!Array.isArray(doc.imageDriveUrls)) return [];

  return doc.imageDriveUrls
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((item: any) => typeof item?.url === "string" && item.url.trim())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any, index: number) => ({
      src: item.url.trim(),
      alt: item.alt?.trim() || `${doc.name || "Product"} image ${index + 1}`,
      width: 800,
      height: 600,
      isPrimary: Boolean(item.isPrimary),
      caption: "",
    }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapQuickDocumentUrls(doc: any): Product["documents"] {
  if (!Array.isArray(doc.documentDriveUrls)) return [];

  return doc.documentDriveUrls
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((item: any) => typeof item?.url === "string" && item.url.trim())
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((item: any, index: number) => ({
      fileUrl: item.url.trim(),
      fileName: item.fileName?.trim() || `Document ${index + 1}`,
      docType: item.docType || "OTHER",
      accessLevel: "public",
    }));
}

function dedupeByUrl<T extends { src?: string; fileUrl?: string }>(items: T[]): T[] {
  const seen = new Set<string>();
  return items.filter((item) => {
    const key = (item.src || item.fileUrl || "").trim();
    if (!key) return false;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortByPriorityThenName(a: Product, b: Product): number {
  const aPriority = typeof a.productPriority === "number" ? a.productPriority : 100;
  const bPriority = typeof b.productPriority === "number" ? b.productPriority : 100;
  if (aPriority !== bPriority) return aPriority - bPriority;
  return a.name.localeCompare(b.name);
}

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

  const mappedImages = dedupeByUrl([
    ...(Array.isArray(doc.images) ? doc.images : []),
    ...mapQuickImageUrls(doc),
  ]);

  const mappedDocuments = dedupeByUrl([
    ...(Array.isArray(doc.documents) ? doc.documents : []),
    ...mapQuickDocumentUrls(doc),
  ]);

  const quickImageUrls = Array.isArray(doc.imageDriveUrls)
    ? doc.imageDriveUrls.filter((item: { url?: string }) =>
        typeof item?.url === "string" && item.url.trim()
      )
    : [];

  const quickDocumentUrls = Array.isArray(doc.documentDriveUrls)
    ? doc.documentDriveUrls.filter((item: { url?: string }) =>
        typeof item?.url === "string" && item.url.trim()
      )
    : [];

  return {
    id: doc.id,
    name: doc.name,
    slug: doc.slug,
    productPriority:
      typeof doc.productPriority === "number" ? doc.productPriority : undefined,
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
    complianceDisclaimer: doc.complianceDisclaimer ?? "",
    documents: mappedDocuments,
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
    imageUrl: doc.imageUrl ?? "",
    documentUrl: doc.documentUrl ?? "",
    imageDriveUrls: quickImageUrls,
    documentDriveUrls: quickDocumentUrls,
    images: mappedImages,
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
  return result.docs.map(toProduct).sort(sortByPriorityThenName);
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
  return result.docs.map(toProduct).sort(sortByPriorityThenName).slice(0, limit);
}
