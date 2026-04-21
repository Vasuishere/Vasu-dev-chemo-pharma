/**
 * Keyword clusters for the site.
 *
 * Derived from docs/seo-keyword-expansion.md (21 seeds × 10 research + 10 buying intent).
 * Each cluster targets one page type. Import only the cluster a page needs —
 * do NOT pull the whole file into one page, as stuffing a single <meta keywords>
 * with 400+ terms dilutes every signal.
 */

const dedupe = (items: string[]): string[] =>
  Array.from(new Set(items.map((value) => value.trim()).filter(Boolean)));

/* ── Core H2S scavenger umbrella (homepage + /product hub) ─────────── */
export const H2S_SCAVENGER_CORE = dedupe([
  "h2s scavenger",
  "h2s scavenger manufacturer",
  "h2s scavenger manufacturer india",
  "h2s scavenger supplier",
  "h2s scavenger supplier USA",
  "h2s scavenger exporter",
  "h2s scavengers manufacturer supplier exporter",
  "h2s scavenger oil and gas chemicals",
  "oilfield h2s scavenger",
  "h2s scavenger for oilfield operations",
  "h2s scavenger manufacturers for oilfields",
  "triazine based h2s scavenger manufacturer",
  "triazine based h2s scavenging chemical",
  "triazine based sulfide scavengers",
  "scavenger for h2s gas triazine",
  "water soluble triazine h2s scavenger",
  "triazine h2s scavenger corrosion inhibitor",
  "controlling hydrogen sulfide in oilfield operations",
  "iso 9001 certified h2s scavenger supplier",
  "buy h2s scavenger bulk drum ibc",
  "h2s scavenger price per kg 2026",
  "h2s scavenger wholesale MOQ 1 ton",
  "h2s scavenger quote online free sample",
  "h2s scavenger direct factory Gujarat",
  "h2s scavenger bulk tanker delivery middle east",
  "h2s scavenger CIF FOB price offshore platform",
  "h2s scavenger permian basin supply",
  "h2s scavenger container load rate",
]);

/* ── MEA Triazine product cluster (for /product/mea-triazine-78-h2s-scavenger) ── */
export const MEA_TRIAZINE_KEYWORDS = dedupe([
  "mea triazine",
  "mea triazine 78",
  "mea triazine 78 percent",
  "mea triazine 78% h2s scavenger",
  "monoethanol amine triazine",
  "hexahydro-1,3,5-tris(hydroxyethyl) triazine",
  "mea triazine CAS 4719-04-4",
  "mea triazine hexahydro molecular structure",
  "mea triazine chemical formula",
  "mea triazine dithiazine formation",
  "mea triazine shelf life storage conditions",
  "mea triazine vs mma triazine",
  "mea triazine freezing point low temperature",
  "mea triazine compatibility amine systems",
  "mea triazine spent product disposal",
  "oilfield chemical 40 80 percent mea triazine h2s scavenger",
  "mea triazine 40 percent",
  "mea triazine 80 percent freezing point",
  "mea triazine field performance case study",
  "buy mea triazine 78 percent bulk india",
  "mea triazine price per metric ton 2026",
  "mea triazine manufacturer direct Gujarat",
  "mea triazine supplier export UAE Saudi Arabia",
  "mea triazine CAS 4719-04-4 wholesale order",
  "mea triazine 1000 kg IBC delivery",
  "mea triazine quote request free sample",
  "mea triazine MOQ 5 drums container load",
  "mea triazine factory price USA import",
  "mea triazine distributor Oman Qatar Kuwait",
  "mea triazine 78 percent supplier USA Texas direct",
  "mea triazine 78 percent ISO 9001 india factory",
  "mea triazine 40 80 percent CIF Jebel Ali Houston",
  "monoethanol amine triazine manufacturer Gujarat direct",
  "monoethanol amine triazine bulk india export",
  "hexahydro-1,3,5-tris(hydroxyethyl) triazine bulk supplier",
]);

/* ── Triazine manufacturer / exporter India cluster ───────────────── */
export const TRIAZINE_MANUFACTURER_KEYWORDS = dedupe([
  "triazine manufacturer",
  "triazine manufacturers",
  "triazine manufacturer and exporter in india",
  "triazine based h2s scavenger manufacturer",
  "triazine companies top company list",
  "china triazine manufacturers alternative india",
  "leading triazine manufacturers in India 2026",
  "india triazine manufacturing cluster Gujarat",
  "triazine exporter india CHEMEXCIL member",
  "triazine manufacturer india ISO 9001",
  "triazine manufacturer direct factory Ankleshwar",
  "triazine manufacturer india REACH compliance",
  "triazine export India to USA",
  "triazine manufacturer exporter india private label",
  "triazine manufacturer india RFQ wholesale",
  "triazine manufacturers bulk MOQ wholesale",
  "triazine manufacturers container load pricing",
  "triazine manufacturers free sample factory",
  "triazine manufacturers india direct quote",
  "triazine exporter india FOB Mundra rate",
  "triazine exporter india to middle east bulk",
  "top triazine companies india buy direct",
  "top triazine companies ISO certified quote",
  "best triazine company price quote 2026",
  "alternative to china triazine manufacturers india supplier",
  "replace china triazine manufacturer india direct",
  "buy triazine india instead of china MOQ",
  "india triazine manufacturer quote vs china price",
]);

/* ── Triazine biocide cluster (water treatment / metalworking / paper) ── */
export const TRIAZINE_BIOCIDE_KEYWORDS = dedupe([
  "triazine based biocide",
  "triazine biocide manufacturer",
  "triazine biocide supplier",
  "how triazine based biocide works",
  "triazine biocide efficacy sulfate reducing bacteria",
  "triazine biocide vs glutaraldehyde",
  "triazine based biocide application industries",
  "triazine biocide regulatory status EPA BPR",
  "triazine biocide dosage water treatment",
  "triazine biocide compatibility with surfactants",
  "triazine based biocide shelf life stability",
  "triazine biocide cooling tower supplier",
  "triazine biocide metalworking fluids",
  "buy triazine based biocide bulk manufacturer",
  "triazine based biocide price per liter 2026",
  "triazine biocide supplier india export",
  "triazine based biocide MOQ 200 kg drum",
  "triazine biocide manufacturer direct Gujarat",
  "triazine based biocide wholesale distributor",
  "triazine based biocide ISO certified exporter",
  "triazine based biocide sample request free",
]);

/* ── Oilfield / upstream oil & gas cluster (industries/oil-gas-h2s-scavenger) ── */
export const OILFIELD_H2S_KEYWORDS = dedupe([
  "h2s scavenger oil and gas chemicals",
  "oilfield h2s scavenger chemistry",
  "h2s scavenger gas sweetening process",
  "controlling hydrogen sulfide in oilfield operations",
  "h2s scavenger placement in oilfield operations",
  "controlling h2s in sour gas wells",
  "oilfield operations h2s monitoring standards",
  "h2s scavenger integration flow assurance",
  "h2s scavenger continuous vs batch injection",
  "oilfield h2s control NACE regulatory",
  "h2s scavengers manufacturer supplier exporter oilfield",
  "h2s scavenger manufacturers for oilfields",
  "oilfield chemical 40 80 percent mea triazine",
  "triazine based h2s scavenger corrosion inhibitor",
  "buy h2s scavenger for oilfield operations bulk",
  "h2s scavenger oilfield price quote per MT",
  "oilfield h2s scavenger Permian Basin delivery",
  "oilfield h2s scavenger MOQ container load",
  "oilfield h2s scavenger direct manufacturer Gujarat",
  "oilfield h2s scavenger distributor USA Canada",
  "oilfield h2s scavenger CIF Houston FOB Mundra",
  "oilfield h2s scavenger ISO certified supplier quote",
  "oilfield h2s scavenger manufacturers factory Gujarat",
  "oilfield h2s scavenger manufacturers CIF Houston",
  "oilfield h2s scavenger manufacturers india direct price",
]);

/* ── Water-soluble scavenger & produced water cluster (industries/water-treatment) ── */
export const WATER_SOLUBLE_SCAVENGER_KEYWORDS = dedupe([
  "water soluble triazine h2s scavenger",
  "water soluble triazine scavenger formulation",
  "water soluble triazine scavenger vs oil soluble",
  "water soluble scavenger produced water",
  "water soluble triazine h2s scavenger dosage",
  "water soluble triazine scavenger salt tolerance",
  "water soluble triazine scavenger biodegradability",
  "triazine biocide water treatment supplier",
  "buy water soluble triazine h2s scavenger bulk",
  "water soluble triazine h2s scavenger price",
  "water soluble triazine scavenger manufacturer india",
  "water soluble triazine h2s scavenger supplier USA",
  "water soluble triazine scavenger MOQ 5 MT",
  "water soluble triazine h2s scavenger RFQ",
  "water soluble triazine scavenger drum IBC quote",
  "water soluble triazine h2s scavenger sample request",
  "water soluble triazine scavenger ISO certified Gujarat",
  "water soluble triazine h2s scavenger distributor UAE",
]);

/* ── Sulfide scavenger / gas triazine cluster (how-h2s-scavengers-work) ──── */
export const SULFIDE_SCAVENGER_KEYWORDS = dedupe([
  "triazine based sulfide scavengers",
  "triazine sulfide scavenger vs aldehyde scavenger",
  "sulfide scavenger triazine reaction with mercaptans",
  "triazine based sulfide scavenger spent product chemistry",
  "triazine sulfide scavenger performance hot sour gas",
  "triazine based sulfide scavenger environmental fate",
  "scavenger for h2s gas triazine",
  "triazine scavenger h2s gas removal efficiency",
  "scavenger for h2s gas triazine dosage calculation",
  "triazine h2s gas scavenger temperature range",
  "triazine h2s gas scavenger cold weather use",
  "scavenger for h2s gas triazine stoichiometry ratio",
  "buy triazine based sulfide scavenger bulk india",
  "triazine sulfide scavenger price per MT",
  "triazine based sulfide scavenger manufacturer Gujarat",
  "triazine sulfide scavenger supplier USA Texas",
  "triazine based sulfide scavenger MOQ container",
  "triazine sulfide scavenger free sample quote",
  "triazine based sulfide scavenger ISO 9001 exporter",
  "triazine sulfide scavenger distributor Middle East",
]);

/* ── Dual-function scavenger + corrosion inhibitor cluster (compare pages) ── */
export const SCAVENGER_CORROSION_KEYWORDS = dedupe([
  "triazine based h2s scavenger and corrosion inhibitor",
  "triazine h2s scavenger with corrosion inhibitor formulation",
  "triazine scavenger corrosion inhibitor compatibility",
  "dual function triazine h2s corrosion inhibitor chemistry",
  "triazine scavenger corrosion inhibitor cost analysis",
  "triazine h2s scavenger corrosion inhibitor field trial",
  "triazine scavenger corrosion inhibitor dosage split",
  "triazine and corrosion inhibitor sour service pipelines",
  "buy triazine h2s scavenger and corrosion inhibitor combo",
  "triazine scavenger corrosion inhibitor price bulk",
  "triazine h2s scavenger corrosion inhibitor manufacturer",
  "triazine scavenger corrosion inhibitor supplier India",
  "triazine h2s scavenger corrosion inhibitor MOQ",
  "triazine scavenger corrosion inhibitor sample request",
  "triazine h2s scavenger corrosion inhibitor quote online",
  "triazine scavenger corrosion inhibitor CIF UAE Saudi",
  "triazine h2s scavenger corrosion inhibitor ISO exporter",
]);

/* ── Price / commercial intent cluster (mea-triazine-prices) ──────── */
export const MEA_TRIAZINE_PRICING_KEYWORDS = dedupe([
  "mea triazine price",
  "mea triazine price per metric ton 2026",
  "mea triazine price per kg 2026",
  "h2s scavenger price per kg 2026",
  "triazine h2s scavenging chemical price per ton",
  "triazine sulfide scavenger price per MT",
  "mea triazine 40 percent price per MT 2026",
  "mea triazine hexahydro CAS 4719-04-4 price",
  "triazine manufacturers price list 2026",
  "china triazine manufacturers price comparison 2026",
  "india triazine manufacturer quote vs china price",
  "mea triazine 78 percent RFQ container load",
  "mea triazine factory price USA import",
  "mea triazine quote request free sample",
  "triazine h2s scavenger manufacturer bulk price per drum",
  "oilfield mea triazine 78 percent h2s scavenger bulk price",
  "h2s scavenger CIF FOB price offshore platform",
]);

/* ── Supply / country hub cluster (/supply/mea-triazine-78) ───────── */
export const SUPPLY_HUB_KEYWORDS = dedupe([
  "mea triazine 78 supply",
  "mea triazine 78 supplier",
  "mea triazine distributor Oman Qatar Kuwait",
  "mea triazine supplier export UAE Saudi Arabia",
  "mea triazine 78 percent supplier USA Texas direct",
  "mea triazine 40 percent distributor Middle East",
  "h2s scavenger exporter to UAE Saudi Arabia price",
  "h2s scavenger supplier exporter Vietnam Thailand",
  "h2s scavenger exporter Jebel Ali Mundra Nhava Sheva",
  "monoethanol amine triazine distributor UAE Saudi Oman",
  "oilfield h2s scavenger manufacturers distributor Middle East",
  "triazine exporter india to middle east bulk",
  "triazine exporter india FOB Mundra rate",
  "mea triazine 40 80 percent CIF Jebel Ali Houston",
  "iso 9001 certified h2s scavenger supplier",
]);

/* ── MEA vs MMA comparison page ───────────────────────────────────── */
export const MEA_VS_MMA_KEYWORDS = dedupe([
  "mea triazine vs mma triazine",
  "mea triazine vs mma triazine side by side",
  "mma triazine 40 percent BTEX free h2s scavenger",
  "monoethanol amine triazine vs monomethyl amine triazine",
  "mea triazine 78 percent vs mma triazine 40 percent performance",
  "triazine h2s scavenger cold weather mea vs mma",
  "triazine scavenger reaction with mercaptans mea mma",
  "mea triazine dithiazine formation vs mma",
  "mma triazine 40 percent supplier india",
  "buy mma triazine 40 percent bulk",
  "mma triazine 40 percent vs mea triazine 78 percent price",
]);

/* ── Utility: merge clusters without duplicates ───────────────────── */
export function mergeKeywordClusters(
  ...clusters: readonly (readonly string[])[]
): string[] {
  return dedupe(clusters.flatMap((cluster) => [...cluster]));
}
