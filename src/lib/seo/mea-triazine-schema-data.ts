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
  "zh-CN",
  "es-ES",
  "it-IT",
  "de-DE",
  "pl-PL",
  "x-default",
] as const;

export const MEA_TRIAZINE_OG_LOCALES = [
  "en_US",
  "en_GB",
  "en_AE",
  "en_IN",
  "zh_CN",
  "es_ES",
  "it_IT",
  "de_DE",
  "pl_PL",
] as const;

const MEA_TRIAZINE_TARGET_MARKETS = [
  "India",
  "United States",
  "United Arab Emirates",
  "Saudi Arabia",
  "United Kingdom",
  "Canada",
  "Australia",
  "China",
  "Spain",
  "Italy",
  "Germany",
  "Poland",
  "Switzerland",
] as const;

export const MEA_TRIAZINE_METADATA = {
  title: "MEA Triazine 78% H2S Scavenger | Industrial Grade Manufacturer",
  description:
    "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) for hydrogen sulfide removal in oil & gas, wastewater & biogas. Drum, IBC & bulk supply from India.",
  openGraphDescription:
    "Industrial-grade MEA Triazine 78% for H2S removal in oil and gas, wastewater, and biogas applications. Gujarat, India manufacturer with export-ready supply.",
  twitterDescription:
    "MEA Triazine 78% H2S scavenger manufacturer in India with drum, IBC, and bulk export supply for oil and gas applications.",
} as const;

export const MEA_TRIAZINE_SCHEMA_ENRICHMENT = {
  description:
    "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) is a high-concentration monoethanolamine triazine solution used for removing hydrogen sulfide from natural gas, crude oil, wastewater, and biogas streams. Manufactured by Vasudev Chemo Pharma in Gujarat, India for industrial and export supply.",
  alternateName: [
    /* ── IUPAC / Chemical Synonyms ────────────────────────── */
    "Monoethanolamine Triazine 78%",
    "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
    "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine 78%",
    "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
    "1,3,5-Triazine",
    "Triazinetriethanol",
    "Tris(N-hydroxyethyl) hexahydrotriazine",
    "Hexahydro-1,3,5-tris(hydroxyethyl)-s-triazine",
    "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
    "2,2',2\"-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol",
    "2,2\u2032,2\u2032\u2032-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol (HHT)",
    "2,2',2''-(Hexahydro-1,3,5-triazine-1,3,5-triyl) Triethanol",
    "1,3,5-Tris(2-hydroxyethyl) hexahydro-triazine",
    "1,3,5-Tris(2-hydroxyethyl)hexahydro-1,3,5-triazine",
    "s-Triazine-1,3,5-triethanol",
    "J2.219E",
    /* ── Generic / Search Names ───────────────────────────── */
    "Triazine H2S Scavenger",
    "MEA Based Triazine",
    "MEA Triazine",
    "MEA Triazine 78",
    "MEA-triazine Blend",
    "Triazine 78%",
    "78% MEA Triazine",
    "MEA Triazine 78% H2S Scavenger",
    "Triazine Based H2S Scavenging Chemical",
    "Hexahydrotriazine H2S Scavenger",
    "Hydrogen Sulfide Scavenger",
    "Triazine Scavenger",
    "High Purity Triazine",
    /* ── Application-Based Synonyms ───────────────────────── */
    "H2S Scavenger",
    "Desulfurizer",
    "Gas Sweetener",
    "Gas Sweetening Agent",
    "Mercaptan Scavenger",
    "Offshore H2S Scavenger",
    "Onshore H2S Scavenger",
    "Formaldehyde-Releasing Biocide",
    "Industrial Microbiocide",
    "Microbiostat",
    "Slimicide",
    "Bactericide",
    "Algicide",
    "Cutting Fluid Preservative",
    "Anti-mildew Agent",
    "H2S Scavenger (Triazine based)",
    "Oil Drilling Fluid",
    /* ── Competitor / Trade Names ─────────────────────────── */
    "Grotan HD",
    "Grotan BK",
    "Grotan B",
    "Grotanol",
    "Acticide GR",
    "Acticide HHB",
    "Nipacide BK",
    "Bioban GK",
    "Onyxide 200",
    "Onyxide 200-50",
    "Busan 1060",
    "Busan 1506",
    "Protectol HT",
    "Basolon SC 78",
    "G-SCAV EA77",
    "Mergal KM200",
    "Mergal 174II",
    "Mergal 165",
    "Troyshield B2",
    "Triadine 3",
    "Triadine 10",
    "Triadine 174",
    "Kalpur TE",
    "H2Stopper 1908C",
    "JadeScan54",
    "BK Biocide",
    "SP-BIO-TZ",
    "Sine PF77",
    "Ottaform 204",
    "Roksol T",
    "Cobate C",
    "Bactraclean",
    "Actane",
    "ETA 75",
    "KM 200",
    "Amebact C",
    "Dodigen NJ",
    "Bestcide 1087T",
    "Permachem OB 2",
    "Surcide D",
    "Surcide P",
    "Silworld",
    "Silworld Triazine 78",
    "Nuosept 78",
    "Parmetol",
    "GreatAp HHT",
    "Triazine BK",
    "IR-Triazine",
    "Water Treatment Biocide BK",
    "Miliden X-2",
    "Scavtreat",
    "Syntan OXB",
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

/**
 * Real user search keywords mapped to their origin country.
 * Use for geo-targeted SEO, FAQ schema, and landing-page generation.
 */
export const MEA_TRIAZINE_SEARCH_KEYWORDS = [
  /* ── USA ────────────────────────────────────────────────── */
  { keyword: "Triazine Scavenger", country: "United States" },
  { keyword: "MEA Triazine", country: "United States" },
  { keyword: "MEA-triazine Blends", country: "United States" },
  { keyword: "Bioban GK", country: "United States" },
  { keyword: "Onyxide 200", country: "United States" },
  { keyword: "Onyxide 200-50", country: "United States" },
  { keyword: "Busan 1060", country: "United States" },
  { keyword: "Busan 1506", country: "United States" },
  { keyword: "Nuosept 78", country: "United States" },
  { keyword: "Mergal KM200", country: "United States" },
  { keyword: "Troyshield B2", country: "United States" },
  { keyword: "Triadine 3", country: "United States" },
  { keyword: "Triadine 10", country: "United States" },
  { keyword: "Triadine 174", country: "United States" },
  { keyword: "H2Stopper 1908C", country: "United States" },
  { keyword: "Cobate C", country: "United States" },
  { keyword: "Actane", country: "United States" },
  { keyword: "Bestcide 1087T", country: "United States" },
  { keyword: "Surcide D", country: "United States" },
  { keyword: "Surcide P", country: "United States" },
  { keyword: "Permachem OB 2", country: "United States" },
  { keyword: "ETA 75", country: "United States" },
  /* ── India ──────────────────────────────────────────────── */
  { keyword: "JadeScan54", country: "India" },
  { keyword: "Triazine Based H2S Scavenging Chemical", country: "India" },
  { keyword: "MEA Triazine 78% H2S Scavenger", country: "India" },
  { keyword: "78% MEA Triazine", country: "India" },
  { keyword: "Kalpur TE", country: "India" },
  { keyword: "MEA Triazine / JDC H2S Scavenger", country: "India" },
  { keyword: "SP-BIO-TZ", country: "India" },
  /* ── China ──────────────────────────────────────────────── */
  { keyword: "MEA Triazine 78%", country: "China" },
  { keyword: "MEA Triazine 78", country: "China" },
  { keyword: "BK Biocide", country: "China" },
  { keyword: "Triazine 78%", country: "China" },
  { keyword: "Triazine 78", country: "China" },
  { keyword: "MEA Triazine", country: "China" },
  { keyword: "Silworld", country: "China" },
  { keyword: "Silworld Triazine 78", country: "China" },
  { keyword: "G-SCAV EA77", country: "China" },
  { keyword: "Basolon SC 78", country: "China" },
  { keyword: "Sine PF77", country: "China" },
  { keyword: "Grotan BK equivalent", country: "China" },
  { keyword: "GreatAp HHT", country: "China" },
  { keyword: "Triazine BK", country: "China" },
  { keyword: "IR-Triazine", country: "China" },
  { keyword: "Water Treatment Biocide BK", country: "China" },
  { keyword: "H2S Scavenger (Triazine based)", country: "China" },
  { keyword: "High Purity Triazine", country: "China" },
  { keyword: "s-Triazine-1,3,5-triethanol", country: "China" },
  { keyword: "MEA Triazine Actane", country: "China" },
  { keyword: "Oil Drilling Fluid", country: "China" },
  /* ── Saudi Arabia ───────────────────────────────────────── */
  { keyword: "Triazine Scavenger", country: "Saudi Arabia" },
  { keyword: "MEA Triazine 78%", country: "Saudi Arabia" },
  { keyword: "G-SCAV EA77", country: "Saudi Arabia" },
  /* ── Germany ────────────────────────────────────────────── */
  { keyword: "Grotan HD", country: "Germany" },
  { keyword: "Grotan BK", country: "Germany" },
  { keyword: "Grotanol", country: "Germany" },
  { keyword: "Parmetol", country: "Germany" },
  { keyword: "Protectol HT", country: "Germany" },
  { keyword: "Basolon SC 78", country: "Germany" },
  { keyword: "KM 200", country: "Germany" },
  { keyword: "Dodigen NJ", country: "Germany" },
  { keyword: "Ottaform 204", country: "Germany" },
  /* ── UK ─────────────────────────────────────────────────── */
  { keyword: "Acticide GR", country: "United Kingdom" },
  { keyword: "Amebact C", country: "United Kingdom" },
  /* ── Spain ──────────────────────────────────────────────── */
  { keyword: "MEA Triazine 78%", country: "Spain" },
  /* ── Italy ──────────────────────────────────────────────── */
  { keyword: "MEA Triazine 78%", country: "Italy" },
  /* ── Switzerland ────────────────────────────────────────── */
  { keyword: "Nipacide BK", country: "Switzerland" },
  { keyword: "Triadine 3", country: "Switzerland" },
  /* ── Poland / Eastern Europe ────────────────────────────── */
  { keyword: "Roksol T", country: "Poland" },
  /* ── Canada ─────────────────────────────────────────────── */
  { keyword: "Permachem OB 2", country: "Canada" },
  /* ── Europe (multi-country) ─────────────────────────────── */
  { keyword: "Bactraclean", country: "Europe" },
  { keyword: "ETA 75", country: "Europe" },
  { keyword: "Acticide HHB", country: "Germany" },
] as const;

/**
 * Competitor brand → application mapping.
 * Shows where MEA Triazine 78% can serve as a drop-in alternative.
 * Use for comparison pages, FAQ schema, and "alternative to" SEO content.
 */
export const MEA_TRIAZINE_COMPETITOR_APPLICATIONS = [
  /* ── Metalworking & Cutting Fluids ──────────────────────── */
  {
    brand: "Grotan BK",
    application: "Benchmark biocide for cutting fluids",
    industry: "Metalworking",
    meaTriazineRole: "Biocide and H2S scavenger for metalworking fluid preservation",
  },
  {
    brand: "Triadine 3",
    application: "EPA-registered biocide (Arxada)",
    industry: "Metalworking",
    meaTriazineRole: "Cost-effective triazine alternative for metalworking biocide applications",
  },
  /* ── Industrial Preservation ────────────────────────────── */
  {
    brand: "Grotan HD",
    application: "Technical preservation solution",
    industry: "Industrial",
    meaTriazineRole: "High-concentration triazine preservative for industrial fluid systems",
  },
  {
    brand: "Grotan B",
    application: "Formaldehyde-releasing preservative",
    industry: "Industrial",
    meaTriazineRole: "Formaldehyde-donor biocide for broad-spectrum industrial preservation",
  },
  {
    brand: "Ottaform 204",
    application: "Formaldehyde donor biocide",
    industry: "Industrial",
    meaTriazineRole: "Triazine-based formaldehyde-releasing biocide for technical fluids",
  },
  {
    brand: "Roksol T 1-7",
    application: "Industrial biocide for technical fluids",
    industry: "CIS / Russia",
    meaTriazineRole: "Export-grade MEA Triazine alternative for CIS-region technical fluid preservation",
  },
  {
    brand: "Syntan OXB",
    application: "Additive for leather and technical fluids",
    industry: "Industrial",
    meaTriazineRole: "Biocide additive for leather processing and technical fluid systems",
  },
  /* ── Coatings & Paints ──────────────────────────────────── */
  {
    brand: "Nipacide BK",
    application: "In-can preservative for paints",
    industry: "Coatings",
    meaTriazineRole: "In-can preservation biocide for water-based paint and coating systems",
  },
  {
    brand: "Nuosept 78",
    application: "Industrial preservative for water-based media",
    industry: "Coatings",
    meaTriazineRole: "78% active triazine preservative for water-based coatings and emulsions",
  },
  /* ── Water Treatment & Paper ────────────────────────────── */
  {
    brand: "Busan 1060",
    application: "Water treatment and slime control",
    industry: "Paper / Oil",
    meaTriazineRole: "Triazine-based slime control and water treatment biocide",
  },
  {
    brand: "Busan 1506",
    application: "Broad-spectrum antimicrobial",
    industry: "Industrial",
    meaTriazineRole: "Broad-spectrum antimicrobial triazine for industrial water systems",
  },
  /* ── Adhesives & Emulsions ──────────────────────────────── */
  {
    brand: "Onyxide 200",
    application: "Highly active bactericide for emulsions",
    industry: "Adhesives",
    meaTriazineRole: "High-activity bactericide for adhesive and emulsion preservation",
  },
  /* ── Oilfield ───────────────────────────────────────────── */
  {
    brand: "Scavtreat",
    application: "Proprietary H2S scavenger blend (SLB)",
    industry: "Oilfield",
    meaTriazineRole: "Direct H2S scavenging alternative for upstream oil and gas operations",
  },
  /* ── Cleaning & Disinfection ────────────────────────────── */
  {
    brand: "Bactraclean",
    application: "Professional cleaning products",
    industry: "Disinfectant",
    meaTriazineRole: "Active biocide ingredient for professional cleaning and disinfectant formulations",
  },
  {
    brand: "Actane",
    application: "Biocide and anti-mildew agent",
    industry: "Global",
    meaTriazineRole: "Anti-mildew and antimicrobial triazine for global biocide applications",
  },
  /* ── Personal Care & Cosmetics ──────────────────────────── */
  {
    brand: "Miliden X-2",
    application: "Bactericide in cosmetic products",
    industry: "Personal Care",
    meaTriazineRole: "Cosmetic-grade triazine bactericide for personal care formulations",
  },
  {
    brand: "Kalpur TE",
    application: "Biocide in pesticides and cosmetics",
    industry: "Europe",
    meaTriazineRole: "Triazine biocide for European pesticide and cosmetic applications",
  },
  /* ── High-Purity / Specialty ────────────────────────────── */
  {
    brand: "Protectol HT",
    application: "BASF brand for high-purity triazine",
    industry: "High-end",
    meaTriazineRole: "High-purity 78% MEA Triazine as cost-effective Protectol HT alternative",
  },
  {
    brand: "ETA 75",
    application: "Generic term for 75% active triazine",
    industry: "Industrial",
    meaTriazineRole: "Higher-concentration 78% alternative to standard 75% triazine products",
  },
  {
    brand: "KM 200",
    application: "Alcohol-based biocide formulations",
    industry: "Industrial",
    meaTriazineRole: "Water-soluble triazine biocide alternative to alcohol-based KM 200 formulations",
  },
] as const;
