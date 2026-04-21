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
    title: "MMA Triazine 40% – H2S Scavenger (Methylamine Triazine)",
    description:
      "MMA Triazine 40% — methylamine-based H2S scavenger for oil, gas, water treatment & paper mill. ISO 9001 Gujarat manufacturer. MOQ 1 MT. Request a quote.",
  },
  "copper-sulphate": {
    title: "Copper Sulphate – Agri & Industrial Grade Manufacturer",
    description:
      "Copper Sulphate (CAS 7758-98-7) — agri & industrial grade from ISO 9001 Gujarat manufacturer. Bulk domestic & export supply. Get competitive pricing today.",
  },
  "manganese-sulphate": {
    title: "Manganese Sulphate – Agri & Industrial Grade Manufacturer",
    description:
      "Manganese Sulphate (CAS 10034-96-5) — agri & industrial grade from ISO 9001 India manufacturer in Ankleshwar. Bulk export supply. Request pricing today.",
  },
  "p-toluenesulfonic-acid": {
    title: "P-Toluenesulfonic Acid – Industrial Grade Supplier India",
    description:
      "P-Toluenesulfonic Acid (PTSA) — high-purity industrial grade from ISO 9001 Gujarat manufacturer. Bulk domestic & export supply. Request a quote today.",
  },
  "2-amino-5-methylthiazole": {
    title: "2-Amino-5-methylthiazole – Pharma & Industrial Grade",
    description:
      "2-Amino-5-methylthiazole — pharma & industrial grade from ISO 9001 Ankleshwar manufacturer. Export-ready bulk supply. Request COA & pricing today.",
  },
  "2-chloroethylamine-hydrochloride": {
    title: "2-Chloroethylamine Hydrochloride – Pharma Grade Supplier",
    description:
      "2-Chloroethylamine Hydrochloride — high-purity pharma & industrial grade from ISO 9001 Gujarat manufacturer. Export-ready supply. Request COA & quote.",
  },
  "bis-2-chloroethyl-amine-hydrochloride": {
    title: "Bis(2-chloroethyl)amine HCl – Manufacturer India",
    description:
      "Bis(2-chloroethyl)amine Hydrochloride — ISO 9001 Ankleshwar manufacturer. Bulk pharma-grade supply for domestic & export. Request COA & pricing today.",
  },
  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    title: "Di Ethyl Amino Ethyl Chloride HCl – Manufacturer India",
    description:
      "Di Ethyl Amino Ethyl Chloride HCl — pharma & industrial grade from ISO 9001 Gujarat manufacturer. Bulk export supply. Request COA & pricing today.",
  },
  "sodium-cumene-sulfonate-40": {
    title: "Sodium Cumene Sulfonate 40% (SCS-40) – Liquid Hydrotrope",
    description:
      "Sodium Cumene Sulfonate 40% liquid (CAS 28348-53-0) — hydrotrope & coupling agent for detergent, personal care & oilfield cleaners. ISO 9001 India manufacturer.",
  },
  "sodium-cumene-sulfonate-90": {
    title: "Sodium Cumene Sulfonate 90% Powder (SCS-90) – Hydrotrope",
    description:
      "Sodium Cumene Sulfonate 90% powder (CAS 28348-53-0) — high-purity hydrotrope for detergent, industrial cleaners & oilfield chemicals. ISO 9001 India export supply.",
  },
  "sodium-xylene-sulfonate-90": {
    title: "Sodium Xylene Sulfonate 90% – Hydrotrope Manufacturer",
    description:
      "Sodium Xylene Sulfonate 90% (CAS 1300-72-7) — powder hydrotrope for industrial cleaners & formulations. ISO 9001 Gujarat manufacturer. Bulk export supply.",
  },
  "sodium-xylene-sulfonate-40": {
    title: "Sodium Xylene Sulfonate 40% – Liquid Hydrotrope Supplier",
    description:
      "Sodium Xylene Sulfonate 40% liquid (CAS 1300-72-7) — hydrotrope for detergent & cleaning formulations. ISO 9001 Gujarat manufacturer. Bulk export supply.",
  },
};
