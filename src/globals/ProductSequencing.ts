import type { GlobalConfig } from "payload";

export const ProductSequencing: GlobalConfig = {
  slug: "product-sequencing",
  label: "Product Sequencing",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "categoryPriorities",
      type: "array",
      validate: (value) => {
        if (!Array.isArray(value)) return true;

        const seen = new Set<string>();
        for (const item of value) {
          const category =
            item && typeof item === "object" && "category" in item
              ? (item as { category?: unknown }).category
              : undefined;
          if (!category || typeof category !== "string") continue;
          if (seen.has(category)) {
            return `Duplicate category priority found for "${category}". Keep only one entry per category.`;
          }
          seen.add(category);
        }

        return true;
      },
      labels: {
        singular: "Category Priority",
        plural: "Category Priorities",
      },
      admin: {
        description:
          "Set category order for product listing pages. Lower number appears first.",
      },
      fields: [
        {
          name: "category",
          type: "select",
          required: true,
          options: [
            { label: "Industrial Chemicals", value: "industrial" },
            { label: "Specialty Chemicals", value: "specialty" },
            { label: "Surfactant Chemicals", value: "surfactant" },
          ],
        },
        {
          name: "priority",
          type: "number",
          required: true,
          defaultValue: 100,
        },
      ],
    },
  ],
};
