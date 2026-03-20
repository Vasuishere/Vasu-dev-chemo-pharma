type ProductKeywordConfig = {
  primaryKeyword: string;
  longTailKeywords: string[];
};

export const PRODUCT_SEO_KEYWORDS: Record<string, ProductKeywordConfig> = {
  "mea-triazine-78-h2s-scavenger": {
    primaryKeyword: "MEA triazine 78% H2S scavenger",
    longTailKeywords: [
      // Primary, commercial, and application keywords
      "MEA triazine H2S scavenger",
      "MEA triazine 78%",
      "triazine scavenger",
      "MEA triazine",
      "monoethanolamine triazine H2S scavenger",
      "monoethanolamine triazine 78%",
      "MEA triazine hydrogen sulfide scavenger",
      "H2S scavenger triazine oil and gas",
      "triazine H2S scavenger natural gas",
      "triazine H2S scavenger crude oil",
      "triazine H2S scavenger supplier",
      "buy MEA triazine scavenger",
      "MEA triazine scavenger price",
      "MEA triazine scavenger manufacturer",
      "hexahydro triazine H2S scavenger",
      "H2S scavenger for sour gas",
      "triazine H2S scavenger dosing",
      "hydrogen sulfide removal chemical",
      "oilfield H2S scavenger",
      "gas sweetening chemical triazine",
      "MEA triazine vs MMA triazine",
      "triazine scavenger wastewater treatment",
      "triazine biogas H2S removal",
      "water-soluble H2S scavenger",
      "MEA triazine supplier",
      "MEA triazine manufacturer",
      "MEA triazine exporter",
      "H2S scavenger manufacturer India",
      "MEA triazine supplier India",
      "MEA triazine exporter India",
      "MEA triazine supplier UAE",
      "MEA triazine supplier USA",
      "MEA triazine supplier UK",
      "oilfield chemical supplier India",
      // CAS / IUPAC
      "CAS 4719-04-4",
      "CAS 4719-04-4 H2S scavenger",
      "hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
      "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
      // Functional keywords
      "H2S scavenger",
      "hydrogen sulfide scavenger",
      "desulfurizer",
      "gas sweetener",
      "mercaptan scavenger triazine",
      "sour gas treatment chemical",
      "natural gas sweetening chemical",
    ],
  },
  "mma-triazine-40": {
    primaryKeyword: "mma triazine 40 supplier",
    longTailKeywords: [
      "mma triazine 40 percent h2s scavenger",
      "btx free h2s scavenger chemical supplier",
      "buy mma triazine 40 industrial grade",
    ],
  },
  "p-toluenesulfonic-acid": {
    primaryKeyword: "p-toluenesulfonic acid manufacturer india",
    longTailKeywords: [
      "ptsa catalyst supplier for resin manufacturing",
      "p toluenesulfonic acid cas 104-15-4 supplier",
      "buy p toluenesulfonic acid industrial grade",
    ],
  },
  "copper-sulphate": {
    primaryKeyword: "copper sulphate exporter india",
    longTailKeywords: [
      "copper sulphate pentahydrate supplier bulk",
      "copper sulphate cas 7758-99-8 manufacturer",
      "buy copper sulphate industrial grade india",
    ],
  },
  "manganese-sulphate": {
    primaryKeyword: "manganese sulphate manufacturer",
    longTailKeywords: [
      "manganese sulphate monohydrate supplier india",
      "manganese sulphate cas number chemical supplier",
      "buy manganese sulphate industrial grade",
    ],
  },
  albendazole: {
    primaryKeyword: "albendazole api manufacturer india",
    longTailKeywords: [
      "albendazole active pharmaceutical ingredient supplier",
      "albendazole raw material manufacturer",
      "buy albendazole api bulk",
    ],
  },
  ketoconazole: {
    primaryKeyword: "ketoconazole raw material supplier",
    longTailKeywords: [
      "ketoconazole api manufacturer india",
      "ketoconazole pharmaceutical intermediate supplier",
      "buy ketoconazole api bulk",
    ],
  },
  pregabalin: {
    primaryKeyword: "pregabalin api supplier india",
    longTailKeywords: [
      "pregabalin raw material manufacturer",
      "pregabalin pharmaceutical api bulk supplier",
      "buy pregabalin api india",
    ],
  },
  "bis-2-chloroethyl-amine-hydrochloride": {
    primaryKeyword: "bis 2 chloroethyl amine hydrochloride supplier",
    longTailKeywords: [
      "bis 2 chloroethyl amine hydrochloride manufacturer",
      "bis 2 chloroethyl amine hydrochloride cas supplier",
      "buy bis 2 chloroethyl amine hydrochloride",
    ],
  },
  "di-ethyl-amino-ethyl-chloride-hydrochloride": {
    primaryKeyword: "di ethyl amino ethyl chloride hydrochloride manufacturer",
    longTailKeywords: [
      "di ethyl amino ethyl chloride hydrochloride supplier",
      "pharma intermediate deaec hydrochloride bulk",
      "buy di ethyl amino ethyl chloride hydrochloride",
    ],
  },
  "2-amino-5-methylthiazole": {
    primaryKeyword: "2 amino 5 methylthiazole supplier",
    longTailKeywords: [
      "2 amino 5 methylthiazole pharmaceutical intermediate",
      "2 amino 5 methylthiazole manufacturer india",
      "buy 2 amino 5 methylthiazole bulk",
    ],
  },
  "2-chloroethylamine-hydrochloride": {
    primaryKeyword: "2 chloroethylamine hydrochloride manufacturer india",
    longTailKeywords: [
      "2 chloroethylamine hydrochloride supplier",
      "2 chloroethylamine hydrochloride pharmaceutical intermediate",
      "buy 2 chloroethylamine hydrochloride bulk",
    ],
  },
};

function buildDefaultKeywords(name: string, casNumber: string): ProductKeywordConfig {
  const casSuffix = casNumber ? ` cas ${casNumber}` : "";
  return {
    primaryKeyword: `${name.toLowerCase()} manufacturer india`,
    longTailKeywords: [
      `${name.toLowerCase()} supplier${casSuffix}`.trim(),
      `buy ${name.toLowerCase()} industrial grade`,
      `${name.toLowerCase()} msds safety data sheet`,
    ],
  };
}

export function getProductSeoKeywords(slug: string, name: string, casNumber: string): ProductKeywordConfig {
  return PRODUCT_SEO_KEYWORDS[slug] || buildDefaultKeywords(name, casNumber);
}
