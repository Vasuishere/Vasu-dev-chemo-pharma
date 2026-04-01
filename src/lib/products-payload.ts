import { getPayload } from "./payload";
import type { Product } from "./types";
import {
  getAllProductSlugs as getStaticAllProductSlugs,
  getProductBySlug as getStaticProductBySlug,
  getRelatedProducts as getStaticRelatedProducts,
  products as staticProducts,
} from "./products";

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

/** Fetch all active products — falls back to static seed data when CMS is unreachable */
export async function getAllProducts(): Promise<Product[]> {
  try {
    return await loadWithCache("all-products", async () => {
      const payload = await getPayload();
      const result = await payload.find({
        collection: "products",
        where: { status: { equals: "active" } },
        limit: 200,
        sort: "name",
      });

      return result.docs.map(toProduct).sort(sortByPriorityThenName);
    });
  } catch (err) {
    console.error("Payload CMS unavailable for getAllProducts, using static fallback", { error: err });
    return staticProducts.filter((p) => p.status === "active").sort(sortByPriorityThenName);
  }
}

/** Find a product by slug — falls back to static seed data when CMS is unreachable */
export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const cacheKey = `product:${slug}`;

  try {
    return await loadWithCache(cacheKey, async () => {
      const payload = await getPayload();
      const result = await payload.find({
        collection: "products",
        where: { slug: { equals: slug } },
        limit: 1,
      });

      return result.docs.length > 0 ? toProduct(result.docs[0]) : undefined;
    });
  } catch (err) {
    console.error(`Payload CMS unavailable for product "${slug}", using static fallback`, { error: err });
    return getStaticProductBySlug(slug);
  }
}

/** Get all active product slugs — falls back to static seed data when CMS is unreachable */
export async function getAllProductSlugs(): Promise<string[]> {
  try {
    return await loadWithCache("all-product-slugs", async () => {
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
  } catch (err) {
    console.error("Payload CMS unavailable for getAllProductSlugs, using static fallback", { error: err });
    return getStaticAllProductSlugs();
  }
}

/** Get all active product slugs with their updatedAt dates for sitemap generation */
export async function getAllProductSlugsWithDates(): Promise<{ slug: string; updatedAt: string | null }[]> {
  try {
    return await loadWithCache("all-product-slugs-dates", async () => {
      const payload = await getPayload();
      const result = await payload.find({
        collection: "products",
        where: { status: { equals: "active" } },
        limit: 200,
      });

      return result.docs
        .filter((doc) => typeof doc.slug === "string")
        .map((doc) => ({
          slug: doc.slug as string,
          updatedAt: typeof doc.updatedAt === "string" ? doc.updatedAt : null,
        }));
    });
  } catch (err) {
    console.error("Payload CMS unavailable for getAllProductSlugsWithDates, using static fallback", { error: err });
    return getStaticAllProductSlugs().map((slug) => ({ slug, updatedAt: null }));
  }
}

/** Get related products — falls back to static seed data when CMS is unreachable */
export async function getRelatedProducts(
  currentSlug: string,
  category: string,
  limit = 3
): Promise<Product[]> {
  const cacheKey = `related:${category}:${currentSlug}:${limit}`;

  try {
    return await loadWithCache(cacheKey, async () => {
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
  } catch (err) {
    console.error("Payload CMS unavailable for getRelatedProducts, using static fallback", { error: err });
    return getStaticRelatedProducts(currentSlug, category, limit);
  }
}
