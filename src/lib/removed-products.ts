export const REMOVED_PRODUCT_SLUGS = [
  "copper-sulphate",
  "manganese-sulphate",
] as const;

export function isRemovedProductSlug(slug: string): boolean {
  return (REMOVED_PRODUCT_SLUGS as readonly string[]).includes(slug);
}
