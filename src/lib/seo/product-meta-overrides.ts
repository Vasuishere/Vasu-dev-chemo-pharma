type ProductMetaOverride = {
  title: string;
  description: string;
};

/**
 * Optimised meta titles and descriptions for all product pages.
 * Source: Vasudev Chemo Pharma 4-Month SEO Plan — Section 7.
 *
 * These take precedence over CMS-stored metaTitle / metaDescription values
 * and the generic fallback template.
 */
export const PRODUCT_META_OVERRIDES: Record<string, ProductMetaOverride> = {
  "mma-triazine-40": {
    title: "MMA Triazine 40% | H2S Scavenger Manufacturer India | Vasudev Chemo Pharma",
    description:
      "MMA Triazine 40% for oil & gas, water treatment, and paper mill applications. ISO certified manufacturer in Ankleshwar, Gujarat. MOQ 1MT for export.",
  },
  "copper-sulphate": {
    title: "Copper Sulphate | Agriculture & Industrial Grade Manufacturer | Vasudev Chemo Pharma",
    description:
      "Agriculture and industrial grade Copper Sulphate manufacturer in Gujarat, India. Bulk supply. ISO 9001:2015 certified. Domestic & export supply available.",
  },
  "manganese-sulphate": {
    title: "Manganese Sulphate | Agriculture & Industrial Grade | Vasudev Chemo Pharma India",
    description:
      "Agriculture and industrial grade Manganese Sulphate from ISO certified manufacturer in Ankleshwar, Gujarat. Bulk orders for domestic and international buyers.",
  },
  "p-toluenesulfonic-acid": {
    title: "P-Toluenesulfonic Acid Supplier India | Vasudev Chemo Pharma",
    description:
      "P-Toluenesulfonic Acid manufacturer in Gujarat, India. High purity, industrial grade. Bulk supply for domestic and export. ISO 9001:2015 certified.",
  },
  "2-amino-5-methylthiazole": {
    title: "2-Amino-5-methylthiazole Manufacturer India | Vasudev Chemo Pharma",
    description:
      "2-Amino-5-methylthiazole supplier in Ankleshwar, Gujarat. Pharmaceutical and industrial grade. Bulk orders, export ready. ISO 9001:2015 certified manufacturer.",
  },
  "2-chloroethylamine-hydrochloride": {
    title: "2-Chloroethylamine Hydrochloride Supplier | Vasudev Chemo Pharma India",
    description:
      "2-Chloroethylamine Hydrochloride manufacturer in Gujarat, India. High purity, pharma and industrial grade. ISO 9001:2015 certified. Export available.",
  },
  "bis-2-chloroethyl-amine-hydrochloride": {
    title: "Bis(2-chloroethyl)amine Hydrochloride Manufacturer India | Vasudev Chemo Pharma",
    description:
      "Bis(2-chloroethyl)amine Hydrochloride supplier from ISO 9001:2015 certified manufacturer in Ankleshwar, Gujarat, India. Bulk supply and export.",
  },
  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    title: "Di Ethyl Amino Ethyl Chloride HCl Manufacturer | Vasudev Chemo Pharma India",
    description:
      "Di Ethyl Amino Ethyl Chloride Hydrochloride manufacturer in Gujarat, India. ISO 9001:2015 certified. Pharmaceutical and industrial grade. Export available.",
  },
  albendazole: {
    title: "Albendazole API Manufacturer India | ISO 9001:2015 | Vasudev Chemo Pharma",
    description:
      "Albendazole Active Pharmaceutical Ingredient (API) manufacturer in Ankleshwar, Gujarat. ISO 9001:2015 certified. Bulk export to pharmaceutical companies globally.",
  },
  ketoconazole: {
    title: "Ketoconazole API Manufacturer Gujarat India | Vasudev Chemo Pharma",
    description:
      "Ketoconazole API manufacturer in Ankleshwar, Gujarat, India. ISO 9001:2015 certified. High purity, pharmaceutical grade. Bulk supply for domestic and export.",
  },
  pregabalin: {
    title: "Pregabalin API Supplier India | ISO Certified | Vasudev Chemo Pharma",
    description:
      "Pregabalin API manufacturer in Gujarat, India. ISO 9001:2015 certified. Pharmaceutical grade. Subject to regulatory compliance. Domestic and export supply.",
  },
};
