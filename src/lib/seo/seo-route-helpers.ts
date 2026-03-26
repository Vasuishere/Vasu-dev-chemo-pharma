export const SITE_URL = "https://www.vasudevchemopharma.com";

export const MEA_TRIAZINE_PRODUCT_SLUG = "mea-triazine-78-h2s-scavenger";
export const MEA_TRIAZINE_PRODUCT_PATH = `/product/${MEA_TRIAZINE_PRODUCT_SLUG}`;
export const SUPPLY_BASE_PATH = "/supply/mea-triazine-78";
export const COMPARE_BASE_PATH = "/compare";
export const APPLICATIONS_BASE_PATH = "/applications";
export const RESOURCES_BASE_PATH = "/resources";

const COUNTRY_ROUTE_ALIASES: Record<string, string> = {
  usa: "united-states",
  us: "united-states",
  "united-states": "united-states",
};

export const FEATURED_COUNTRY_SLUGS = [
  "vietnam",
  "uae",
  "oman",
  "qatar",
  "thailand",
  "united-states",
] as const;

export const FEATURED_COMPARISON_SLUGS = [
  "pro3-q2-technologies",
  "rxsol-triazine",
  "sulfa-clear-lubrizol",
  "chinese-suppliers",
] as const;

export const FEATURED_APPLICATION_SLUGS = [
  "h2s-scavenging-natural-gas",
  "crude-oil-sweetening",
  "biogas-h2s-removal",
  "water-treatment-biocide",
] as const;

export const FEATURED_RESOURCE_SLUGS = [
  "mea-triazine-dosing-guidelines",
  "h2s-scavenger-solids-formation",
  "mea-triazine-storage-handling",
  "triazine-reaction-chemistry",
  "mea-triazine-technical-datasheet",
  "mea-triazine-safety-data-sheet",
  "h2s-scavenger-dosing-guide",
  "import-compliance-guide",
] as const;

export function buildAbsoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function normalizeCountrySlug(slug: string): string {
  return COUNTRY_ROUTE_ALIASES[slug] ?? slug;
}

export function buildCountryPagePath(slug: string): string {
  return `${SUPPLY_BASE_PATH}/${normalizeCountrySlug(slug)}`;
}

export function buildComparisonPagePath(slug: string): string {
  return `${COMPARE_BASE_PATH}/mea-triazine-vs-${slug}`;
}

export function parseComparisonPageSlug(routeSlug: string): string {
  return routeSlug.replace(/^mea-triazine-vs-/, "");
}

export function buildApplicationPagePath(slug: string): string {
  return `${APPLICATIONS_BASE_PATH}/${slug}`;
}

export function buildResourceArticlePath(slug: string): string {
  return `${RESOURCES_BASE_PATH}/${slug}`;
}

export function resolveSeoHref(href: string): string {
  if (href === "/product") {
    return MEA_TRIAZINE_PRODUCT_PATH;
  }

  return href;
}
