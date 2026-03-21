/**
 * Slug-specific Product schema enrichment for MEA Triazine 78% H2S Scavenger.
 * This data is merged into the base ProductSchema when rendering the
 * `/product/mea-triazine-78-h2s-scavenger` page.
 */

export const MEA_TRIAZINE_SLUG = "mea-triazine-78-h2s-scavenger";

export const MEA_TRIAZINE_MARKET_LANGUAGE_CODES = [
  "en",
  "en-IN",
  "en-US",
  "en-GB",
  "en-AE",
  "x-default",
] as const;

export const MEA_TRIAZINE_OG_LOCALES = ["en_US", "en_GB", "en_AE"] as const;

const MEA_TRIAZINE_TARGET_MARKETS = [
  "India",
  "United States",
  "United Arab Emirates",
  "Saudi Arabia",
  "United Kingdom",
  "Canada",
  "Australia",
] as const;

export const MEA_TRIAZINE_METADATA = {
  title: "MEA Triazine 78% H2S Scavenger Manufacturer | Vasudev Chemo Pharma",
  description:
    "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) manufactured in Gujarat, India for hydrogen sulfide removal in natural gas, crude oil, wastewater, and biogas systems. Export-ready drum, IBC, and bulk supply.",
  openGraphDescription:
    "Industrial-grade MEA Triazine 78% for H2S removal in oil and gas, wastewater, and biogas applications. Gujarat, India manufacturer with export-ready supply.",
  twitterDescription:
    "MEA Triazine 78% H2S scavenger manufacturer in India with drum, IBC, and bulk export supply for oil and gas applications.",
} as const;

export const MEA_TRIAZINE_SCHEMA_ENRICHMENT = {
  description:
    "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) is a high-concentration monoethanolamine triazine solution used for removing hydrogen sulfide from natural gas, crude oil, wastewater, and biogas streams. Manufactured by Vasudev Chemo Pharma in Gujarat, India for industrial and export supply.",
  alternateName: [
    "Monoethanolamine Triazine 78%",
    "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine 78%",
    "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
    "Triazine H2S Scavenger",
    "MEA Based Triazine",
    "Triazinetriethanol",
    "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
    "Hexahydrotriazine H2S Scavenger",
    "Hydrogen Sulfide Scavenger",
  ],
  mpn: "MEA-T78",
  material: "Monoethanolamine Triazine",
  category: "H2S Scavengers / Oilfield Chemicals",
  countryOfOrigin: "India",
  audience: {
    "@type": "BusinessAudience" as const,
    audienceType:
      "Oil and gas operators, refineries, wastewater treatment contractors, and industrial procurement teams",
  },
  areaServed: MEA_TRIAZINE_TARGET_MARKETS.map((name) => ({
    "@type": "Country" as const,
    name,
  })),
  additionalProperty: [
    { "@type": "PropertyValue" as const, name: "CAS Number", value: "4719-04-4" },
    { "@type": "PropertyValue" as const, name: "Active Concentration", value: "78% (w/w)" },
    { "@type": "PropertyValue" as const, name: "Appearance", value: "Clear to light yellow liquid" },
    { "@type": "PropertyValue" as const, name: "pH", value: "9.5-11.0" },
    { "@type": "PropertyValue" as const, name: "Shelf Life", value: "12 months" },
    { "@type": "PropertyValue" as const, name: "Flash Point", value: ">93 °C (>200 °F)" },
    { "@type": "PropertyValue" as const, name: "Density", value: "~1.10 g/mL at 20 °C" },
    { "@type": "PropertyValue" as const, name: "Solubility", value: "Fully miscible with water" },
  ],
} as const;

export const MEA_TRIAZINE_COMPARISON = [
  {
    feature: "Active concentration",
    meaTriazine78: "78%",
    mmaTriazine: "20-80%",
    glyoxalBased: "40-80%",
  },
  {
    feature: "Water solubility",
    meaTriazine78: "High",
    mmaTriazine: "High",
    glyoxalBased: "Moderate",
  },
  {
    feature: "Reaction speed",
    meaTriazine78: "Fast",
    mmaTriazine: "Fast",
    glyoxalBased: "Moderate",
  },
  {
    feature: "Solids formation risk",
    meaTriazine78: "Low-Medium",
    mmaTriazine: "Low",
    glyoxalBased: "Low",
  },
  {
    feature: "Suitable for offshore",
    meaTriazine78: "Yes",
    mmaTriazine: "Yes",
    glyoxalBased: "Conditional",
  },
  {
    feature: "Regenerable",
    meaTriazine78: "No",
    mmaTriazine: "No",
    glyoxalBased: "No",
  },
] as const;
