import { getPayload } from "./payload";
import type { ProductCategory } from "./types";

type CategoryPriority = {
  category: ProductCategory;
  priority: number;
};

const DEFAULT_CATEGORY_PRIORITIES: CategoryPriority[] = [
  { category: "industrial", priority: 100 },
  { category: "specialty", priority: 200 },
  { category: "pharmaceutical", priority: 300 },
];

export async function getCategoryPriorityMap(): Promise<Record<ProductCategory, number>> {
  try {
    const payload = await getPayload();
    const data = await payload.findGlobal({ slug: "product-sequencing" });

    const map: Record<ProductCategory, number> = {
      industrial: 100,
      specialty: 200,
      pharmaceutical: 300,
    };

    const rows = Array.isArray(data?.categoryPriorities)
      ? data.categoryPriorities
      : DEFAULT_CATEGORY_PRIORITIES;

    for (const row of rows) {
      const category = row?.category as ProductCategory | undefined;
      const priority = row?.priority;
      if (!category) continue;
      if (typeof priority !== "number" || Number.isNaN(priority)) continue;
      map[category] = priority;
    }

    return map;
  } catch {
    return {
      industrial: 100,
      specialty: 200,
      pharmaceutical: 300,
    };
  }
}
