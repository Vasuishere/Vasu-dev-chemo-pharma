/**
 * Slug-specific Product schema enrichment for MEA Triazine 78% H2S Scavenger.
 * This data is merged into the base ProductSchema when rendering the
 * `/product/mea-triazine-78-h2s-scavenger` page.
 *
 * Source: seo-plan-mea-triazine-78-h2s-scavenger.md §9.1
 */

export const MEA_TRIAZINE_SLUG = "mea-triazine-78-h2s-scavenger";

export const MEA_TRIAZINE_SCHEMA_ENRICHMENT = {
  /** IUPAC / chemical-name synonyms + competitor-trade-name equivalents */
  alternateName: [
    "Monoethanolamine Triazine 78%",
    "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine 78%",
    "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
    "Triazine H2S Scavenger",
    "MEA Based Triazine",
    "Triazinetriethanol",
    "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
    "Grotan BK equivalent",
    "Nipacide BK equivalent",
    "Acticide GR equivalent",
    "Bioban GK equivalent",
    "Protectol HT equivalent",
    "Nuosept 78 equivalent",
    "Triadine 3 equivalent",
    "Onyxide 200 equivalent",
    "Busan 1060 equivalent",
    "G-SCAV EA77 equivalent",
  ],

  mpn: "MEA-T78",
  material: "Monoethanolamine Triazine",
  category: "H2S Scavengers / Oilfield Chemicals",

  additionalProperty: [
    { "@type": "PropertyValue" as const, name: "CAS Number", value: "4719-04-4" },
    { "@type": "PropertyValue" as const, name: "Active Concentration", value: "78% (w/w)" },
    { "@type": "PropertyValue" as const, name: "Appearance", value: "Clear to light yellow liquid" },
    { "@type": "PropertyValue" as const, name: "pH", value: "9.5–11.0" },
    { "@type": "PropertyValue" as const, name: "Shelf Life", value: "12 months" },
    { "@type": "PropertyValue" as const, name: "Flash Point", value: ">93 °C (>200 °F)" },
    { "@type": "PropertyValue" as const, name: "Density", value: "~1.10 g/mL at 20 °C" },
    { "@type": "PropertyValue" as const, name: "Solubility", value: "Fully miscible with water" },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "23",
    bestRating: "5",
    worstRating: "1",
  },

  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
      },
      author: {
        "@type": "Person",
        name: "John T., Production Engineer",
      },
      reviewBody:
        "Excellent performance on our sour gas wells. No solids formation at our typical treating rates. Will reorder.",
    },
  ],
} as const;

/**
 * Trade-name equivalence table rendered on the product page.
 * Grouped by category for UI display.
 */
export const MEA_TRIAZINE_TRADE_NAMES = {
  "Major Global Brands": [
    "Grotan BK",
    "Grotan HD",
    "Nipacide BK",
    "Acticide GR",
    "Acticide HHB",
    "Bioban GK",
    "Protectol HT",
    "Triadine 3",
    "Triadine 10",
    "Onyxide 200",
    "Busan 1060",
    "Busan 1506",
    "Mergal KM200",
    "Troyshield B2",
    "Basolon SC 78",
    "Nuosept 78",
    "Kalpur TE",
  ],
  "Oilfield & H2S Scavenger Brands": [
    "G-SCAV EA77",
    "H2Stopper 1908C",
    "JadeScan54",
    "SP-BIO-TZ",
    "BK Biocide",
    "Scavtreat",
    "ICPL H2S Scavenger",
    "JDC-TR",
    "Explorax",
    "MEA Triazine 70",
    "Sine PF77",
  ],
  "Regional & Generic Trade Names": [
    "GreatAp HHT",
    "Triazine BK",
    "IR-Triazine",
    "Silworld Triazine 78",
    "Actane",
    "Bactraclean",
    "ETA 75",
    "KM 200",
    "Exocide BK",
    "Bestcide 1087T",
  ],
} as const;

/**
 * Competitor comparison table data (rendered on page §3.9 Section 7).
 */
export const MEA_TRIAZINE_COMPARISON = [
  {
    feature: "Active concentration",
    meaTriazine78: "78%",
    mmaTriazine: "20–80%",
    glyoxalBased: "40–80%",
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
    meaTriazine78: "Low–Medium",
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
