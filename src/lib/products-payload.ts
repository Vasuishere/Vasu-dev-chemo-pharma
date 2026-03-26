import { getPayload } from "./payload";
import type { Product } from "./types";

type ProductCacheEntry<T> = {
  value: T;
  expiresAt: number;
};

const PRODUCT_CACHE_TTL_MS = Number(process.env.PRODUCT_CACHE_TTL_MS || 60 * 1000);
const PRODUCT_CACHE_KEY = '__Vasudev_products_cache__';
const PRODUCT_IN_FLIGHT_KEY = "__Vasudev_products_in_flight__";

function getProductCacheStore(): Map<string, ProductCacheEntry<unknown>> {
  const globalScope = globalThis as typeof globalThis & {
    [PRODUCT_CACHE_KEY]?: Map<string, ProductCacheEntry<unknown>>;
  };

  if (!globalScope[PRODUCT_CACHE_KEY]) {
    globalScope[PRODUCT_CACHE_KEY] = new Map<string, ProductCacheEntry<unknown>>();
  }

  return globalScope[PRODUCT_CACHE_KEY];
}

function getProductInFlightStore(): Map<string, Promise<unknown>> {
  const globalScope = globalThis as typeof globalThis & {
    [PRODUCT_IN_FLIGHT_KEY]?: Map<string, Promise<unknown>>;
  };

  if (!globalScope[PRODUCT_IN_FLIGHT_KEY]) {
    globalScope[PRODUCT_IN_FLIGHT_KEY] = new Map<string, Promise<unknown>>();
  }

  return globalScope[PRODUCT_IN_FLIGHT_KEY];
}

function getCachedEntry<T>(key: string): ProductCacheEntry<T> | null {
  const store = getProductCacheStore();
  const entry = store.get(key);
  if (!entry) {
    return null;
  }

  if (entry.expiresAt <= Date.now()) {
    store.delete(key);
    return null;
  }

  return entry as ProductCacheEntry<T>;
}

function setCached<T>(key: string, value: T): void {
  const store = getProductCacheStore();
  store.set(key, {
    value,
    expiresAt: Date.now() + PRODUCT_CACHE_TTL_MS,
  });
}

async function loadWithCache<T>(key: string, loader: () => Promise<T>): Promise<T> {
  const cachedEntry = getCachedEntry<T>(key);
  if (cachedEntry) {
    return cachedEntry.value;
  }

  const inFlightStore = getProductInFlightStore();
  const inFlight = inFlightStore.get(key);
  if (inFlight) {
    return inFlight as Promise<T>;
  }

  const pending = loader()
    .then((value) => {
      setCached(key, value);
      return value;
    })
    .finally(() => {
      inFlightStore.delete(key);
    });

  inFlightStore.set(key, pending);
  return pending;
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

  const mappedImages: Product["images"] = dedupeByUrl(
    Array.isArray(doc.images) ? doc.images : []
  );

  const mappedDocuments: Product["documents"] = dedupeByUrl(
    Array.isArray(doc.documents) ? doc.documents : []
  );

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
    supplier: doc.supplier ?? "Vasudev Chemo Pharma",
    imageUrl: doc.imageUrl ?? "",
    documentUrl: doc.documentUrl ?? "",
    images: mappedImages,
    status: doc.status ?? "active",
    faqs: doc.faqs ?? [],
  };
}

/** Fetch all active products */
export async function getAllProducts(): Promise<Product[]> {
  return loadWithCache("all-products", async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: { status: { equals: "active" } },
      limit: 200,
      sort: "name",
    });

    return result.docs.map(toProduct).sort(sortByPriorityThenName);
  });
}

/** Find a product by slug */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const cacheKey = `product:${slug}`;

  return loadWithCache(cacheKey, async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: { slug: { equals: slug } },
      limit: 1,
    });

    return result.docs.length > 0 ? toProduct(result.docs[0]) : undefined;
  });
}

/** Get all active product slugs for static generation */
export async function getAllProductSlugs(): Promise<string[]> {
  return loadWithCache("all-product-slugs", async () => {
    const payload = await getPayload();
    const result = await payload.find({
      collection: "products",
      where: { status: { equals: "active" } },
      limit: 200,
    });

    return result.docs
      .map((doc) => doc.slug)
      .filter((slug): slug is string => typeof slug === "string");
  });
}

/** Get related products (same category, excluding current) */
export async function getRelatedProducts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Product[]> {
  const cacheKey = `related:${category}:${currentSlug}:${limit}`;

  return loadWithCache(cacheKey, async () => {
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
  });
}
