export type KeywordCluster = {
  seed: string;
  baseTerm: string;
  category:
    | "india-commercial"
    | "brand-alternative"
    | "application"
    | "generic-h2s"
    | "chemistry"
    | "competitor-topic";
  suggestedRoute: string;
  generatedKeywords: string[];
};

function normalizeKeyword(keyword: string): string {
  return keyword.replace(/\s+/g, " ").trim();
}

function buildKeywordList(values: string[]): string[] {
  return Array.from(new Set(values.map(normalizeKeyword).filter(Boolean)));
}

function assertTwenty(seed: string, values: string[]): string[] {
  const unique = buildKeywordList(values);

  if (unique.length !== 20) {
    throw new Error(
      `Keyword cluster "${seed}" must produce exactly 20 generated keywords. Received ${unique.length}.`
    );
  }

  return unique;
}

function buildIndiaCommercialKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} supplier India`,
    `${baseTerm} manufacturer India`,
    `${baseTerm} exporters India`,
    `${baseTerm} manufacturer Gujarat`,
    `${baseTerm} manufacturer Ankleshwar`,
    `buy ${baseTerm} India`,
    `${baseTerm} bulk supplier India`,
    `${baseTerm} factory price India`,
    `${baseTerm} direct manufacturer India`,
    `${baseTerm} quote India`,
    `${baseTerm} sample request India`,
    `${baseTerm} ISO certified manufacturer`,
    `${baseTerm} technical data sheet India`,
    `${baseTerm} MSDS supplier India`,
    `${baseTerm} OEM manufacturer India`,
    `${baseTerm} wholesale supplier India`,
    `${baseTerm} export from India`,
    `${baseTerm} drum IBC bulk supplier`,
    `${baseTerm} CIF price from India`,
    `${baseTerm} production company India`,
  ]);
}

function buildBrandAlternativeKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} alternative`,
    `${baseTerm} equivalent`,
    `${baseTerm} replacement`,
    `${baseTerm} substitute`,
    `${baseTerm} alternative supplier`,
    `${baseTerm} replacement supplier`,
    `${baseTerm} manufacturer alternative India`,
    `${baseTerm} equivalent India`,
    `${baseTerm} vs MEA Triazine`,
    `${baseTerm} CAS 4719-04-4`,
    `${baseTerm} technical data sheet`,
    `${baseTerm} MSDS`,
    `buy ${baseTerm} equivalent`,
    `${baseTerm} price alternative`,
    `${baseTerm} sample equivalent`,
    `${baseTerm} direct manufacturer replacement`,
    `${baseTerm} bulk supply alternative`,
    `${baseTerm} export supplier`,
    `${baseTerm} high concentration alternative`,
    `${baseTerm} India supplier`,
  ]);
}

function buildApplicationKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} biocide`,
    `${baseTerm} biocide manufacturer India`,
    `${baseTerm} preservative supplier`,
    `${baseTerm} microbial control chemical`,
    `${baseTerm} SRB control chemical`,
    `${baseTerm} triazine biocide`,
    `${baseTerm} formaldehyde releasing biocide`,
    `${baseTerm} water treatment chemical`,
    `${baseTerm} dosing guide`,
    `${baseTerm} technical data sheet`,
    `${baseTerm} MSDS`,
    `buy ${baseTerm} biocide`,
    `${baseTerm} bulk supplier`,
    `${baseTerm} industrial biocide India`,
    `${baseTerm} bacteria control additive`,
    `${baseTerm} odor control chemical`,
    `${baseTerm} process water preservative`,
    `${baseTerm} application guide`,
    `${baseTerm} India manufacturer`,
    `${baseTerm} compatible biocide`,
  ]);
}

function buildGenericH2sKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} manufacturer India`,
    `${baseTerm} supplier India`,
    `${baseTerm} price India`,
    `${baseTerm} for natural gas`,
    `${baseTerm} for crude oil`,
    `${baseTerm} for produced water`,
    `${baseTerm} for oilfield`,
    `${baseTerm} triazine based`,
    `${baseTerm} 78%`,
    `${baseTerm} gas treatment chemical`,
    `${baseTerm} dosing calculation`,
    `${baseTerm} direct manufacturer`,
    `${baseTerm} export supplier`,
    `${baseTerm} bulk order`,
    `${baseTerm} chemical supplier Gujarat`,
    `${baseTerm} safety data sheet`,
    `${baseTerm} technical data sheet`,
    `${baseTerm} sample request`,
    `${baseTerm} quote India`,
    `${baseTerm} CAS 4719-04-4`,
  ]);
}

function buildChemistryKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} chemical name`,
    `${baseTerm} CAS number`,
    `${baseTerm} manufacturer India`,
    `${baseTerm} supplier India`,
    `${baseTerm} H2S scavenger chemistry`,
    `${baseTerm} triazine equivalent`,
    `${baseTerm} technical data sheet`,
    `${baseTerm} MSDS`,
    `${baseTerm} reaction mechanism`,
    `${baseTerm} concentration grades`,
    `${baseTerm} oil and gas chemical`,
    `${baseTerm} water treatment biocide`,
    `${baseTerm} formaldehyde releasing biocide`,
    `${baseTerm} direct manufacturer`,
    `${baseTerm} bulk supplier`,
    `${baseTerm} India export supplier`,
    `${baseTerm} factory price India`,
    `${baseTerm} application guide`,
    `${baseTerm} product specification`,
    `${baseTerm} industrial use`,
  ]);
}

function buildCompetitorTopicKeywords(baseTerm: string): string[] {
  return assertTwenty(baseTerm, [
    `${baseTerm} alternative`,
    `${baseTerm} MEA triazine alternative`,
    `${baseTerm} India manufacturer`,
    `${baseTerm} water treatment chemical supplier`,
    `${baseTerm} triazine biocide`,
    `${baseTerm} formaldehyde releasing biocide`,
    `${baseTerm} industrial water treatment`,
    `${baseTerm} metalworking fluid biocide`,
    `${baseTerm} cooling tower biocide`,
    `${baseTerm} equivalent chemistry`,
    `${baseTerm} replacement supplier`,
    `${baseTerm} price comparison`,
    `${baseTerm} product equivalent India`,
    `${baseTerm} CAS 4719-04-4`,
    `${baseTerm} technical data sheet`,
    `${baseTerm} MSDS`,
    `${baseTerm} manufacturer vs distributor`,
    `${baseTerm} triazine supplier Gujarat`,
    `${baseTerm} direct factory alternative`,
    `${baseTerm} export supplier India`,
  ]);
}

const CLUSTER_DEFINITIONS = [
  {
    seed: "h2s scavenger 78 manufacturer in INDIA",
    baseTerm: "h2s scavenger 78",
    category: "india-commercial",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "monoethanolamine-triazine supplier in india",
    baseTerm: "monoethanolamine triazine",
    category: "india-commercial",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "monoethanolamine triazine india",
    baseTerm: "monoethanolamine triazine",
    category: "india-commercial",
    suggestedRoute: "/supply/mea-triazine-78/india",
  },
  {
    seed: "H2S Scavengers & Triazine-Based Gas Treatment Chemicals",
    baseTerm: "triazine based gas treatment chemicals",
    category: "india-commercial",
    suggestedRoute: "/applications/gas-sweetening",
  },
  {
    seed: "MEA Triazine 70%",
    baseTerm: "MEA Triazine 70%",
    category: "chemistry",
    suggestedRoute: "/compare/mea-triazine-vs-geocon-products-india",
  },
  {
    seed: "mea triazine manufacturers in india",
    baseTerm: "MEA Triazine",
    category: "india-commercial",
    suggestedRoute: "/supply/mea-triazine-78/india",
  },
  {
    seed: "mea triazine 78 suppliers in india",
    baseTerm: "MEA Triazine 78",
    category: "india-commercial",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "triazine manufacturer in india",
    baseTerm: "triazine",
    category: "india-commercial",
    suggestedRoute: "/supply/mea-triazine-78/india",
  },
  {
    seed: "melzer speciality water treatment",
    baseTerm: "Melzer speciality water treatment",
    category: "competitor-topic",
    suggestedRoute: "/compare/mea-triazine-vs-melzer-chemicals",
  },
  {
    seed: "Triazine Based H₂S scavenger Manufacturer",
    baseTerm: "triazine based H2S scavenger",
    category: "india-commercial",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "mea triazine by kwantum india",
    baseTerm: "Kwantum MEA Triazine",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-kwantum-india",
  },
  {
    seed: "mea triazine",
    baseTerm: "MEA Triazine",
    category: "chemistry",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "MEA Triazine 78%",
    baseTerm: "MEA Triazine 78%",
    category: "chemistry",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "h2s scavenger manufacturer in INDIA",
    baseTerm: "h2s scavenger",
    category: "india-commercial",
    suggestedRoute: "/supply/mea-triazine-78/india",
  },
  {
    seed: "h2s scavenger",
    baseTerm: "h2s scavenger",
    category: "generic-h2s",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "water based biocide",
    baseTerm: "water based biocide",
    category: "application",
    suggestedRoute: "/applications/water-treatment-biocide",
  },
  {
    seed: "Biocides for metalworking fluids",
    baseTerm: "metalworking fluids",
    category: "application",
    suggestedRoute: "/applications/metalworking-fluid-preservative",
  },
  {
    seed: "Tacelene chem 62090",
    baseTerm: "Tacelene Chem 62090",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-tacelene-chem",
  },
  {
    seed: "jadescan 54",
    baseTerm: "JadeScan 54",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-jay-dinesh-chemicals",
  },
  {
    seed: "Tacelene chem 62087",
    baseTerm: "Tacelene Chem 62087",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-tacelene-chem",
  },
  {
    seed: "Tacelene chem 62081",
    baseTerm: "Tacelene Chem 62081",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-tacelene-chem",
  },
  {
    seed: "monoethanolamine triazine",
    baseTerm: "monoethanolamine triazine",
    category: "chemistry",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "amine base triazine",
    baseTerm: "amine base triazine",
    category: "chemistry",
    suggestedRoute: "/resources/triazine-reaction-chemistry",
  },
  {
    seed: "cas no. 4719-04-4",
    baseTerm: "CAS 4719-04-4",
    category: "chemistry",
    suggestedRoute: "/resources/mea-triazine-technical-datasheet",
  },
  {
    seed: "biocide used as h2s scavenger",
    baseTerm: "biocide used as H2S scavenger",
    category: "application",
    suggestedRoute: "/resources/biocide-h2s-scavenger-dual-function",
  },
  {
    seed: "Triazine Based H2S Scavenger Manufacturer",
    baseTerm: "triazine based H2S scavenger",
    category: "india-commercial",
    suggestedRoute: "/product/mea-triazine-78-h2s-scavenger",
  },
  {
    seed: "oil drilling fluids",
    baseTerm: "oil drilling fluids",
    category: "application",
    suggestedRoute: "/applications/drilling-fluids-biocide",
  },
  {
    seed: "drilling fluids biocide",
    baseTerm: "drilling fluids",
    category: "application",
    suggestedRoute: "/applications/drilling-fluids-biocide",
  },
  {
    seed: "HSCAV-70",
    baseTerm: "HSCAV-70",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-geocon-products-india",
  },
  {
    seed: "nipacide bk",
    baseTerm: "Nipacide BK",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-nipacide-bk",
  },
  {
    seed: "water treatment biocide India",
    baseTerm: "water treatment biocide",
    category: "application",
    suggestedRoute: "/applications/water-treatment-biocide",
  },
  {
    seed: "melzer water treatment alternative",
    baseTerm: "Melzer water treatment",
    category: "competitor-topic",
    suggestedRoute: "/compare/mea-triazine-vs-melzer-chemicals",
  },
  {
    seed: "kwantum india triazine alternative",
    baseTerm: "Kwantum India triazine",
    category: "brand-alternative",
    suggestedRoute: "/compare/mea-triazine-vs-kwantum-india",
  },
] as const;

function generateKeywords(
  category: KeywordCluster["category"],
  baseTerm: string
): string[] {
  switch (category) {
    case "india-commercial":
      return buildIndiaCommercialKeywords(baseTerm);
    case "brand-alternative":
      return buildBrandAlternativeKeywords(baseTerm);
    case "application":
      return buildApplicationKeywords(baseTerm);
    case "generic-h2s":
      return buildGenericH2sKeywords(baseTerm);
    case "chemistry":
      return buildChemistryKeywords(baseTerm);
    case "competitor-topic":
      return buildCompetitorTopicKeywords(baseTerm);
  }
}

export const INDIA_TARGET_KEYWORD_CLUSTERS: KeywordCluster[] =
  CLUSTER_DEFINITIONS.map((cluster) => ({
    ...cluster,
    generatedKeywords: generateKeywords(cluster.category, cluster.baseTerm),
  }));

export const INDIA_TARGET_SEED_KEYWORDS: string[] = INDIA_TARGET_KEYWORD_CLUSTERS.map(
  (cluster) => cluster.seed
);

export const INDIA_TARGET_GENERATED_KEYWORDS: string[] =
  INDIA_TARGET_KEYWORD_CLUSTERS.flatMap((cluster) => cluster.generatedKeywords);

export const INDIA_TARGET_TOTAL_KEYWORD_COUNT =
  INDIA_TARGET_SEED_KEYWORDS.length + INDIA_TARGET_GENERATED_KEYWORDS.length;

