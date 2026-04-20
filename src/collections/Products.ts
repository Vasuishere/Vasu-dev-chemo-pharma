import type { CollectionConfig } from "payload";
import { slugify } from "@/lib/slug";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "productPriority", "category", "status"],
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (!data || typeof data !== "object") return data;

        const next = { ...(data as Record<string, unknown>) };

        const sourceSlug =
          typeof next.slug === "string" && next.slug.trim().length > 0
            ? next.slug
            : typeof next.name === "string" && next.name.trim().length > 0
              ? next.name
              : "";
        if (sourceSlug) {
          next.slug = slugify(sourceSlug);
        }

        return next;
      },
    ],
  },
  fields: [
    // ─── Identity ──────────────────────────────────────────────
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "sku",
      type: "text",
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "formula",
      type: "text",
      admin: { description: "Chemical formula, e.g. Na₂SO₄" },
    },
    {
      name: "casNumber",
      type: "text",
      admin: { description: "CAS Registry Number, e.g. 7757-82-6" },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Industrial Chemicals", value: "industrial" },
        { label: "Specialty Chemicals", value: "specialty" },
        { label: "Surfactant Chemicals", value: "surfactant" },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "productPriority",
      type: "number",
      defaultValue: 100,
      admin: {
        position: "sidebar",
        description: "Lower number appears first in product listings.",
      },
    },
    {
      name: "subcategory",
      type: "text",
    },

    // ─── SEO ───────────────────────────────────────────────────
    {
      name: "metaTitle",
      type: "text",
      admin: {
        description: "Override page <title>. Defaults to product name if blank.",
      },
    },
    {
      name: "metaDescription",
      type: "textarea",
    },

    // ─── Content ───────────────────────────────────────────────
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "appearance",
      type: "text",
      admin: { description: "e.g. White crystalline powder" },
    },
    {
      name: "molecularWeight",
      type: "text",
      admin: { description: "e.g. 142.04 g/mol" },
    },
    {
      name: "hsCode",
      type: "text",
      admin: { description: "Harmonized System code for export" },
    },

    // ─── Technical Specifications ──────────────────────────────
    {
      name: "specs",
      type: "array",
      admin: { description: "Key/value specification pairs" },
      fields: [
        { name: "key", type: "text", required: true },
        { name: "value", type: "text", required: true },
      ],
    },

    // ─── Safety & Compliance ───────────────────────────────────
    {
      name: "safetyClass",
      type: "text",
    },
    {
      name: "ghsPictograms",
      type: "json",
      admin: { description: 'JSON array of GHS codes, e.g. ["GHS07"]' },
    },
    {
      name: "signalWord",
      type: "text",
    },
    {
      name: "hazardStatements",
      type: "json",
      admin: { description: "JSON array of hazard statements" },
    },
    {
      name: "complianceDisclaimer",
      type: "textarea",
      admin: {
        description:
          "Export-control / regulatory disclaimer text (e.g. CWC Schedule, ECCN, REACH). Displayed in the Safety & Compliance section on the product page.",
      },
    },
    {
      name: "documents",
      type: "array",
      fields: [
        {
          name: "docType",
          type: "select",
          options: ["COA", "TDS", "MSDS", "SDS", "SPEC", "OTHER"],
          required: true,
        },
        { name: "fileUrl", type: "text", required: true, admin: { description: "Direct document URL" } },
        { name: "fileName", type: "text", required: true },
        {
          name: "isPrimary",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "accessLevel",
          type: "select",
          options: ["public", "on-request", "internal"],
          defaultValue: "public",
        },
      ],
    },

    // ─── Applications & Industries ─────────────────────────────
    {
      name: "applications",
      type: "json",
      admin: { description: "JSON array of application strings" },
    },
    {
      name: "industries",
      type: "json",
      admin: { description: "JSON array of industry strings" },
    },

    // ─── Commercial ────────────────────────────────────────────
    {
      name: "price",
      type: "number",
      defaultValue: 0,
      admin: { description: "0 = Price on Request" },
    },
    {
      name: "priceUnit",
      type: "text",
      defaultValue: "/MT",
    },
    {
      name: "currency",
      type: "text",
      defaultValue: "USD",
    },
    {
      name: "unitOfMeasure",
      type: "text",
      defaultValue: "MT",
    },
    {
      name: "grades",
      type: "json",
      admin: { description: 'JSON array e.g. ["Industrial Grade", "Lab Grade"]' },
    },
    {
      name: "packaging",
      type: "json",
      admin: { description: 'JSON array e.g. ["25 kg bags", "1 MT jumbo bags"]' },
    },
    {
      name: "minOrderQuantity",
      type: "text",
    },
    {
      name: "originCountry",
      type: "text",
      defaultValue: "India",
    },

    // ─── Trust ─────────────────────────────────────────────────
    {
      name: "certifications",
      type: "json",
      admin: { description: 'JSON array e.g. ["ISO 9001:2015"]' },
    },
    {
      name: "supplier",
      type: "text",
      defaultValue: "Vasudev Chemo Pharma",
    },

    // ─── Media ─────────────────────────────────────────────────
    {
      name: "imageUrl",
      type: "text",
      admin: {
        description:
          "Primary image URL.",
      },
    },
    {
      name: "documentUrl",
      type: "text",
      admin: {
        description:
          "Primary document URL.",
      },
    },
    {
      name: "images",
      type: "array",
      admin: { description: "Additional product images (optional). Use the imageUrl field above for the primary image." },
      fields: [
        { name: "src", type: "text", required: true, admin: { description: "Direct image URL" } },
        { name: "alt", type: "text", required: true },
        { name: "width", type: "number", defaultValue: 800 },
        { name: "height", type: "number", defaultValue: 600 },
        { name: "isPrimary", type: "checkbox", defaultValue: false },
        { name: "caption", type: "text" },
      ],
    },
    {
      name: "videos",
      type: "array",
      admin: { description: "Product videos (optional). Videos will be displayed in the media gallery." },
      fields: [
        { name: "src", type: "text", required: true, admin: { description: "Direct video URL" } },
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
        { name: "thumbnail", type: "text", admin: { description: "Optional thumbnail image URL" } },
        { name: "isPrimary", type: "checkbox", defaultValue: false },
      ],
    },

    // ─── Status ────────────────────────────────────────────────
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "active",
      options: [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
        { label: "Discontinued", value: "discontinued" },
      ],
      admin: { position: "sidebar" },
    },

    // ─── FAQ ───────────────────────────────────────────────────
    {
      name: "faqs",
      type: "array",
      fields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "textarea", required: true },
      ],
    },
  ],
};
