/* ── Competitor comparison data for MEA Triazine 78% ──────────── */

export type ComparisonRow = {
  feature: string;
  vasudev: string;
  competitor: string;
};

export type CompetitorFAQ = {
  question: string;
  answer: string;
};

export type CompetitorPageData = {
  slug: string;
  competitorBrand: string;
  competitorCompany: string;
  competitorOrigin: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  comparisonRows: ComparisonRow[];
  advantages: string[];
  markets: string[];
  faqs: CompetitorFAQ[];
  lastReviewed: string;
  searchLanguage?: {
    intro: string;
    chemicalNames: string[];
    functionalTerms: string[];
    brandReferences: string[];
    informationalIntent: string[];
    buyingIntent: string[];
    note: string;
  };
};

const COMMON_MEATRIAZINE_CHEMICAL_NAMES = [
  "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
  "1, 3, 5-Tris (2-hydroxyethyl) hexahydro-triazine",
  "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-5-TRIAZINE",
  "TRIS(N-HYDROXYETHYL) HEXAHYDROTRIAZINE",
  "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
  "2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol",
  "2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol (HHT)",
  "2,2',2''-(Hexahydro-1,3,5-triazine-1,3,5-triyl) Triethanol",
  "1,3,5-tris(2-hydroxyethyl)hexahydro-1,3,5-triazine",
  "triazinetriethanol",
  "Triazinetriethanol",
  "MEA based Triazine",
  "MEA Triazine",
  "1,3,5-Triazine",
  "J2.219E",
  "s-Triazine-1,3,5-triethanol",
];

const COMMON_FUNCTIONAL_TERMS = [
  "Triazine H2S Scavenger",
  "Hydrogen Sulfide Scavenger",
  "Desulfurizer",
  "Gas Sweetener",
  "Sweetening Agent",
  "Mercaptan Scavenger",
  "Offshore Scavenger",
  "Onshore Scavenger",
  "Industrial Preservation (Biocides)",
  "Formaldehyde-Releasing Biocide",
  "Industrial Microbiocide",
  "Microbiostat",
  "Slimicide",
  "Bactericide and Algicide",
  "Cutting Fluid Preservative",
  "Anti-mildew Agent",
];

const COMMON_BRAND_REFERENCES = [
  "Grotan BK",
  "Nipacide BK",
  "Acticide GR / HHB",
  "Bioban GK",
  "Protectol HT",
  "Triadine 3 / 174",
  "Actane",
  "Onyxide 200",
  "ETA 75",
  "Busan 1506",
  "Mergal KM200 / 174",
  "Troyshield B2",
  "Exocide BK",
  "Cobate C",
  "Miliden X-2",
  "Roksol T 1-7",
  "Surcide D / P",
  "Permachem OB 2",
  "Bactraclean",
  "Ottaform 204",
  "JadeScan54",
];

const COMMON_INFORMATIONAL_INTENT = [
  "MEA Triazine chemical name",
  "MEA Triazine synonyms and IUPAC names",
  "what is MEA Triazine 78%",
  "how MEA Triazine works as an H2S scavenger",
  "MEA Triazine vs competitor chemistry",
  "MEA Triazine vs Grotan BK chemistry",
  "Hydrogen Sulfide Scavenger comparison guide",
  "Gas sweetener brand comparison",
  "triazine biocide equivalence explanation",
  "what is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "MEA Triazine TDS vs SDS",
  "why buyers compare MEA Triazine brands",
];

const COMMON_BUYING_INTENT = [
  "buy MEA Triazine 78%",
  "MEA Triazine manufacturer India",
  "MEA Triazine supplier India",
  "MEA Triazine exporter India",
  "bulk MEA Triazine supplier",
  "MEA Triazine price per ton",
  "factory direct H2S scavenger supplier",
  "request MEA Triazine replacement quote",
  "request MEA Triazine TDS and SDS",
  "request MEA Triazine sample",
  "Gas sweetening chemical supplier",
  "Mercaptan scavenger supplier",
  "Industrial biocide supplier",
  "competitor replacement supplier for MEA Triazine",
  "direct manufacturer alternative to branded triazine",
];

function dedupeKeywords(values: string[]): string[] {
  return Array.from(new Set(values.map((value) => value.trim()).filter(Boolean)));
}

function buildSearchLanguageSection(page: CompetitorPageData) {
  return {
    intro: `Buyers comparing ${page.competitorBrand} with Vasudev MEA Triazine 78% often search using a mix of chemical identity, brand shorthand, functional terminology, and commercial procurement language. Some searches are explicitly oilfield-oriented, while others borrow language from preservation, slimicide, or industrial biocide markets where the same core triazine chemistry appears under different trade references.`,
    chemicalNames: COMMON_MEATRIAZINE_CHEMICAL_NAMES,
    functionalTerms: COMMON_FUNCTIONAL_TERMS,
    brandReferences: dedupeKeywords([
      page.competitorBrand,
      ...COMMON_BRAND_REFERENCES,
    ]),
    informationalIntent: dedupeKeywords([
      ...COMMON_INFORMATIONAL_INTENT,
      `${page.competitorBrand} equivalent chemistry`,
      `${page.competitorBrand} vs MEA Triazine`,
      `${page.competitorCompany} triazine replacement`,
    ]),
    buyingIntent: dedupeKeywords([
      ...COMMON_BUYING_INTENT,
      `${page.competitorBrand} alternative supplier`,
      `${page.competitorBrand} replacement quote`,
      `${page.competitorCompany} alternative manufacturer`,
    ]),
    note: "Comparable search terms do not always mean identical commercial positioning, concentration, or end-use fit. Buyers should match chemical identity, active concentration, application, and document set before treating one branded product as a direct replacement for another.",
  };
}

function enrichCompetitorPage(page: CompetitorPageData): CompetitorPageData {
  return {
    ...page,
    keywords: dedupeKeywords([
      ...page.keywords,
      ...COMMON_MEATRIAZINE_CHEMICAL_NAMES,
      ...COMMON_FUNCTIONAL_TERMS,
      ...COMMON_BRAND_REFERENCES,
      ...COMMON_INFORMATIONAL_INTENT,
      ...COMMON_BUYING_INTENT,
      `${page.competitorBrand} alternative`,
      `${page.competitorBrand} replacement`,
      `${page.competitorCompany} replacement supplier`,
      `${page.competitorBrand} quote`,
    ]),
    searchLanguage: buildSearchLanguageSection(page),
  };
}

const RAW_COMPETITOR_PAGES_DATA: Record<string, CompetitorPageData> = {
  /* ── 1. Pro3 / Q2 Technologies ──────────────────────────────── */
  "pro3-q2-technologies": {
    slug: "pro3-q2-technologies",
    competitorBrand: "Pro3 / Pro3 HT",
    competitorCompany: "Q2 Technologies",
    competitorOrigin: "USA",
    title:
      "MEA Triazine 78% vs Pro3 (Q2 Technologies) — Direct Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Pro3 and Pro3 HT from Q2 Technologies. Direct manufacturer pricing vs bundled oilfield services. Same active chemistry, significantly lower cost.",
    keywords: [
      "Pro3 alternative",
      "Q2 Technologies MEA Triazine",
      "Pro3 HT equivalent",
      "H2S scavenger alternative USA",
      "MEA Triazine manufacturer direct",
      "Pro3 H2S scavenger replacement",
      "unbundled triazine pricing",
    ],
    h1: "MEA Triazine 78% vs Pro3 (Q2 Technologies) — Direct Comparison",
    intro:
      "Pro3 and Pro3 HT from Q2 Technologies are well-known MEA triazine H2S scavengers in the US market, typically sold as part of bundled oilfield chemical service packages. Vasudev Chemo Pharma manufactures the same 78% active MEA triazine chemistry and supplies it directly — without bundled service markups — to independent operators, midstream companies, and chemical distributors worldwide.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "78% active (Pro3 HT)",
      },
      {
        feature: "Pricing Model",
        vasudev: "Direct manufacturer pricing — transparent, unbundled",
        competitor: "Bundled with field services — premium pricing",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days (export), 4–5 days (domestic India)",
        competitor: "Varies by service contract terms",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Drums, totes, bulk — contract dependent",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS with every shipment",
        competitor: "Provided through service agreement",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Contract-dependent minimums",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer, batch CoA",
        competitor: "Q2 Technologies internal QA",
      },
    ],
    advantages: [
      "Direct manufacturer pricing — significantly lower than bundled service contracts",
      "Same 78% active MEA triazine chemistry (CAS 4719-04-4)",
      "Transparent pricing with no hidden service fees or long-term contract lock-in",
      "Flexible packaging and MOQ — suitable for independent operators",
      "Full documentation (CoA, TDS, MSDS) included with every order",
      "Free samples available for qualification testing before commitment",
    ],
    markets: [
      "USA — Permian Basin, Eagle Ford, Marcellus, Haynesville",
      "Independent E&P operators seeking unbundled chemical supply",
      "Midstream gas gathering and processing companies",
      "Chemical distributors serving the US oilfield market",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% chemically equivalent to Pro3 HT?",
        answer:
          "Yes. Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) at 78% active concentration. The H2S scavenging chemistry and reaction mechanism are identical. Our product is manufactured at an ISO 9001:2015 certified facility with batch Certificate of Analysis verification.",
      },
      {
        question:
          "Can I switch from Pro3 to Vasudev MEA Triazine without changing my dosing setup?",
        answer:
          "Yes. Since both products have the same 78% active concentration and similar physical properties (density, viscosity, pH), you can use the same injection equipment, dosing pumps, and treatment rates. No system modifications are required.",
      },
      {
        question:
          "Why is Vasudev MEA Triazine priced lower than Pro3?",
        answer:
          "Q2 Technologies bundles Pro3 with field services, equipment rental, and technical support — all of which are reflected in the per-litre price. Vasudev Chemo Pharma is a direct manufacturer supplying the chemical only, without service markups. This makes our pricing significantly more competitive for operators who manage their own chemical programs.",
      },
      {
        question:
          "Can you supply MEA Triazine 78% CIF Houston?",
        answer:
          "Yes. We regularly export MEA Triazine 78% to the USA with CIF Houston delivery. The product is TSCA-listed and ships with a GHS-compliant SDS meeting OSHA HazCom requirements. Contact us for pricing and lead times.",
      },
    ],
  },

  /* ── 2. RXSOL ──────────────────────────────────────────────── */
  "rxsol-triazine": {
    slug: "rxsol-triazine",
    competitorBrand: "RXSOL-43-8160-210",
    competitorCompany: "RX Chemicals / DubiChem",
    competitorOrigin: "UAE / India",
    title:
      "MEA Triazine 78% vs RXSOL-43-8160-210 (RX Chemicals) — Manufacturer vs Distributor",
    description:
      "Compare Vasudev MEA Triazine 78% with RXSOL-43-8160-210 from RX Chemicals. Direct manufacturer supply vs regional distributor markup. Same chemistry, better pricing.",
    keywords: [
      "RXSOL triazine alternative",
      "RXSOL-43-8160-210 equivalent",
      "RX Chemicals H2S scavenger",
      "DubiChem triazine replacement",
      "MEA Triazine manufacturer UAE",
      "H2S scavenger GCC supplier",
    ],
    h1: "MEA Triazine 78% vs RXSOL-43-8160-210 (RX Chemicals) — Direct Comparison",
    intro:
      "RXSOL-43-8160-210 is a triazine-based H2S scavenger distributed by RX Chemicals and DubiChem across the UAE and GCC region. As a regional distributor, RX Chemicals sources and resells triazine products with distributor markup. Vasudev Chemo Pharma is the actual manufacturer — supplying the same MEA triazine chemistry directly from our ISO 9001:2015 certified production facility in India, with transit times of just 3–5 days to UAE ports.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Varies — typically 75–78% active",
      },
      {
        feature: "Pricing Model",
        vasudev: "Direct manufacturer pricing — no distributor markup",
        competitor: "Distributor/reseller pricing with margin added",
      },
      {
        feature: "Lead Time",
        vasudev: "3–5 days to Jebel Ali / Khalifa Port from India",
        competitor: "Varies by stock availability in UAE warehouse",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "210L drums, IBC totes",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS with every shipment",
        competitor: "Distributor-issued documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export)",
        competitor: "Varies — often higher for better pricing",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified production, batch CoA from manufacturer",
        competitor: "Dependent on upstream supplier QA",
      },
    ],
    advantages: [
      "Direct manufacturer pricing — eliminates distributor markup entirely",
      "Guaranteed 78% active concentration verified by manufacturer batch CoA",
      "3–5 day transit from India to UAE — reliable supply chain",
      "Full traceability from production to delivery with manufacturer documentation",
      "Flexible packaging options including ISO tanks for bulk orders",
      "Free samples for qualification testing — direct from the production facility",
    ],
    markets: [
      "UAE — Abu Dhabi, Dubai, Sharjah oilfield operations",
      "Oman — PDO operations, Sohar industrial zone",
      "Qatar — Ras Laffan, North Field operations",
      "GCC-wide distribution and re-export from Jebel Ali",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to RXSOL-43-8160-210?",
        answer:
          "Yes. Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4). Our product is manufactured at 78% guaranteed active concentration with ISO 9001:2015 certified quality assurance. RXSOL distributes triazine sourced from various manufacturers — by switching to Vasudev, you deal directly with the production source.",
      },
      {
        question:
          "Can I switch from RXSOL to Vasudev for my GCC operations?",
        answer:
          "Yes. The chemistry is identical, so no changes to your dosing equipment or treatment programs are needed. We supply CIF to all major GCC ports with 3–5 day transit from India. Many GCC operators have switched from distributors to direct manufacturer supply to reduce procurement costs.",
      },
      {
        question:
          "Why buy directly from Vasudev instead of through RX Chemicals?",
        answer:
          "RX Chemicals is a distributor that adds margin to products sourced from manufacturers. By purchasing directly from Vasudev Chemo Pharma, you eliminate the middleman markup, get guaranteed manufacturer-origin CoA, and establish a direct supply relationship with full production traceability.",
      },
    ],
  },

  /* ── 3. Grotan BK ──────────────────────────────────────────── */
  "grotan-bk": {
    slug: "grotan-bk",
    competitorBrand: "Grotan BK",
    competitorCompany: "Schulke & Mayr",
    competitorOrigin: "Germany",
    title:
      "MEA Triazine 78% vs Grotan BK (Schulke & Mayr) — Equivalent Chemistry, Competitive Pricing",
    description:
      "Compare Vasudev MEA Triazine 78% with Grotan BK from Schulke & Mayr. Functionally equivalent triazine biocide at competitive pricing with faster delivery to Asia and Middle East.",
    keywords: [
      "Grotan BK alternative",
      "Grotan BK equivalent India",
      "Schulke Mayr triazine replacement",
      "triazine biocide equivalent",
      "MEA Triazine biocide manufacturer",
      "Grotan BK substitute",
      "formaldehyde releasing biocide",
    ],
    h1: "MEA Triazine 78% vs Grotan BK (Schulke & Mayr) — Direct Comparison",
    intro:
      "Grotan BK from Schulke & Mayr (Germany) is a well-established hexahydrotriazine biocide used globally in metalworking fluids, paper mills, and industrial preservation. Vasudev Chemo Pharma manufactures a functionally equivalent MEA triazine product at competitive pricing, with faster delivery to customers in Asia, the Middle East, and other regions where European supply chains are longer and more expensive.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "~78% active hexahydrotriazine",
      },
      {
        feature: "Pricing Model",
        vasudev: "Competitive manufacturer direct pricing from India",
        competitor: "European premium brand pricing",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days (export), 3–5 days to ME, 7–10 days to SEA",
        competitor: "Longer supply chain from Germany to Asia/ME markets",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, bulk tanker",
        competitor: "Standard European packaging formats",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS — GHS compliant",
        competitor: "Full European regulatory documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Distributor-dependent minimums",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer, batch CoA",
        competitor: "German manufacturing standards",
      },
    ],
    advantages: [
      "Functionally equivalent hexahydrotriazine chemistry (CAS 4719-04-4)",
      "Significantly more competitive pricing than European brand products",
      "Faster delivery to Asia and Middle East — 3–10 days vs weeks from Europe",
      "Same formaldehyde-releasing biocide mechanism for MWF preservation",
      "Compatible with all formulations that currently use Grotan BK",
      "ISO 9001:2015 certified production with full documentation",
    ],
    markets: [
      "Southeast Asia — metalworking fluid and paper mill customers",
      "Middle East — industrial biocide and oilfield applications",
      "India — domestic MWF formulators and paper mills",
      "Global — any market where Grotan BK is specified but cost is a concern",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% a direct equivalent to Grotan BK?",
        answer:
          "Yes. Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) and function as formaldehyde-releasing biocides. Our MEA Triazine 78% is compatible with metalworking fluid formulations, paper mill white water systems, and industrial preservation applications that specify Grotan BK.",
      },
      {
        question:
          "Can I replace Grotan BK with Vasudev MEA Triazine in my MWF formulation?",
        answer:
          "Yes. Since the active chemistry is the same, you can substitute at the same dosage rates without reformulating. We recommend a simple compatibility test with your specific formulation, and we provide free samples for this purpose.",
      },
      {
        question:
          "How much can I save by switching from Grotan BK?",
        answer:
          "As a direct manufacturer in India, our pricing is significantly more competitive than European brand products which carry premium brand margins and longer supply chain costs. The exact savings depend on your order volume and delivery location — contact us for a specific quotation.",
      },
      {
        question:
          "Do you provide regulatory documentation equivalent to Grotan BK?",
        answer:
          "We provide a full Certificate of Analysis, Technical Data Sheet, and GHS-compliant Safety Data Sheet with every shipment. For specific regional regulatory requirements (EU BPR, REACH, etc.), we can provide supporting documentation on request.",
      },
    ],
  },

  /* ── 4. SULFA-CLEAR / Lubrizol ─────────────────────────────── */
  "sulfa-clear-lubrizol": {
    slug: "sulfa-clear-lubrizol",
    competitorBrand: "SULFA-CLEAR 8411HC",
    competitorCompany: "Lubrizol",
    competitorOrigin: "USA (global distribution)",
    title:
      "MEA Triazine 78% vs SULFA-CLEAR 8411HC (Lubrizol) — Comparable Chemistry at Lower Cost",
    description:
      "Compare Vasudev MEA Triazine 78% with SULFA-CLEAR 8411HC from Lubrizol. Comparable active concentration at significantly lower cost. Direct manufacturer supply from India.",
    keywords: [
      "SULFA-CLEAR alternative",
      "SULFA-CLEAR 8411HC equivalent",
      "Lubrizol H2S scavenger replacement",
      "MEA Triazine 80 vs 78",
      "H2S scavenger Lubrizol alternative",
      "SULFA-CLEAR substitute",
    ],
    h1: "MEA Triazine 78% vs SULFA-CLEAR 8411HC (Lubrizol) — Direct Comparison",
    intro:
      "SULFA-CLEAR 8411HC from Lubrizol is a premium-priced 80% MEA triazine H2S scavenger distributed globally. While it carries a marginally higher active concentration, Vasudev Chemo Pharma's MEA Triazine 78% delivers comparable scavenging performance at a significantly lower cost — making it the practical choice for operators focused on total cost of H2S removal rather than brand premium.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "80% active (SULFA-CLEAR 8411HC)",
      },
      {
        feature: "Pricing Model",
        vasudev: "Direct manufacturer pricing — highly competitive",
        competitor: "Premium multinational brand pricing",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days (export), 3–5 days to GCC",
        competitor: "Distribution network dependent — varies by region",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard Lubrizol packaging — drums and totes",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS with every shipment",
        competitor: "Lubrizol corporate documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Distributor-dependent minimums",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer, batch CoA",
        competitor: "Lubrizol global quality standards",
      },
    ],
    advantages: [
      "Comparable concentration (78% vs 80%) at significantly lower cost per tonne",
      "Direct manufacturer pricing — no multinational brand premium",
      "The 2% concentration difference is negligible in practice — minimal dosage adjustment needed",
      "ISO 9001:2015 certified production with guaranteed batch CoA",
      "Faster delivery to Middle East and Asia from India vs Lubrizol supply chain",
      "Free samples available for side-by-side qualification testing",
    ],
    markets: [
      "Oman — PDO operations where SULFA-CLEAR is currently specified",
      "GCC-wide — Saudi Arabia, Kuwait, Qatar oilfield operations",
      "Global — anywhere SULFA-CLEAR 8411HC or 8411C is used",
      "Operators seeking to reduce H2S scavenger procurement costs",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to SULFA-CLEAR 8411HC?",
        answer:
          "Both products are MEA-based hexahydrotriazine H2S scavengers (CAS 4719-04-4). SULFA-CLEAR 8411HC is 80% active; our product is 78% active. The 2% difference in concentration is negligible in field application — a minor dosage adjustment (approximately 2.5% more volume) compensates fully. The cost savings from direct manufacturer pricing far outweigh this marginal difference.",
      },
      {
        question:
          "Can I switch from SULFA-CLEAR to Vasudev without operational changes?",
        answer:
          "Yes. The chemistry is the same — both products react with H2S to form dithiazine. Your existing injection equipment and chemical handling procedures remain unchanged. A minor increase in injection rate (approximately 2.5%) compensates for the slightly lower concentration.",
      },
      {
        question:
          "Does Lubrizol also offer a 60% MEA triazine variant?",
        answer:
          "Yes — SULFA-CLEAR 8411C is Lubrizol's 60% active variant. Vasudev Chemo Pharma also manufactures MEA Triazine at 60% and 50% concentrations in addition to our standard 78%. Contact us for pricing on any concentration.",
      },
    ],
  },

  /* ── 5. Triasorb / Sintez-Oka ──────────────────────────────── */
  "triasorb-sintez-oka": {
    slug: "triasorb-sintez-oka",
    competitorBrand: "Triasorb",
    competitorCompany: "Sintez-Oka",
    competitorOrigin: "Russia (Dzerzhinsk)",
    title:
      "MEA Triazine 78% vs Triasorb (Sintez-Oka, Russia) — Alternative Supply Source",
    description:
      "Compare Vasudev MEA Triazine 78% with Triasorb from Sintez-Oka (Russia). Reliable alternative supply from India with no sanctions risk, faster ME/Asia delivery, and competitive pricing.",
    keywords: [
      "Triasorb alternative",
      "Sintez-Oka triazine replacement",
      "Russian H2S scavenger alternative",
      "MEA Triazine alternative to Russia",
      "H2S scavenger India vs Russia",
      "Triasorb equivalent",
    ],
    h1: "MEA Triazine 78% vs Triasorb (Sintez-Oka) — Direct Comparison",
    intro:
      "Triasorb, manufactured by Sintez-Oka in Dzerzhinsk (Russia), is one of the largest-volume MEA triazine products globally with over 10,000 tonnes per year capacity. However, ongoing geopolitical uncertainties and sanctions risks have led many international buyers to seek alternative supply sources. Vasudev Chemo Pharma offers the same hexahydrotriazine chemistry from India — with no sanctions risk, faster delivery to Middle East and Asian markets, and competitive pricing.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "~78% active hexahydrotriazine",
      },
      {
        feature: "Pricing Model",
        vasudev: "Competitive direct manufacturer pricing",
        competitor: "Competitive Russian production pricing",
      },
      {
        feature: "Lead Time",
        vasudev: "3–5 days to ME, 7–10 days to SEA, 10–15 days general export",
        competitor: "Longer transit from Russia, payment and shipping complications",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard Russian industrial packaging",
      },
      {
        feature: "Documentation",
        vasudev: "GHS-compliant CoA, TDS, MSDS in English and Arabic",
        competitor: "Russian documentation — may require translation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export)",
        competitor: "Bulk-oriented — typically larger minimums",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer",
        competitor: "Russian GOST standards",
      },
    ],
    advantages: [
      "No sanctions risk — India-origin supply with clean trade compliance",
      "Faster delivery to Middle East (3–5 days) and Asia (7–10 days) vs Russia",
      "Simpler payment and banking — no Russian financial system complications",
      "GHS-compliant English/Arabic documentation — no translation needed",
      "ISO 9001:2015 certified production with international quality standards",
      "Flexible MOQ and packaging options for all order sizes",
    ],
    markets: [
      "Kuwait — where Triasorb has historically been supplied",
      "Middle East — operators seeking Russia-free supply chains",
      "Central Asia — Kazakhstan, Uzbekistan, Turkmenistan operations",
      "Any market where Russian-origin chemicals face procurement restrictions",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% chemically equivalent to Triasorb?",
        answer:
          "Yes. Both products are aqueous solutions of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) that irreversibly bind H2S and light mercaptans in natural gas, gas condensate, and liquid hydrocarbon streams. The active chemistry and reaction mechanism are identical.",
      },
      {
        question:
          "Can I switch from Triasorb to Vasudev for my Middle East operations?",
        answer:
          "Yes. Many Middle East operators have transitioned from Russian-origin chemicals to Indian supply since 2022. Our product is a direct drop-in replacement — same chemistry, same dosing, same results. We supply CIF to all GCC ports with 3–5 day transit from India.",
      },
      {
        question:
          "Is there a sanctions risk with purchasing Triasorb from Russia?",
        answer:
          "Geopolitical circumstances have created complications for Russian-origin chemical procurement, including banking restrictions, shipping logistics challenges, and supply chain uncertainty. Vasudev Chemo Pharma's India-origin supply eliminates these risks entirely while providing the same MEA triazine chemistry.",
      },
      {
        question:
          "Can you match Sintez-Oka's production volume and bulk pricing?",
        answer:
          "We offer competitive bulk pricing with flexible contract terms. For large-volume requirements, we can arrange dedicated production batches, ISO tank shipments, and long-term supply agreements. Contact us with your volume requirements for a specific quotation.",
      },
    ],
  },

  /* ── 6. ChampionX ──────────────────────────────────────────── */
  championx: {
    slug: "championx",
    competitorBrand: "ChampionX H2S Scavenger",
    competitorCompany: "ChampionX",
    competitorOrigin: "USA (global operations)",
    title:
      "MEA Triazine 78% vs ChampionX H2S Scavenger — Unbundled Transparent Pricing",
    description:
      "Compare Vasudev MEA Triazine 78% with ChampionX H2S scavenger. Transparent manufacturer pricing vs bundled oilfield service pricing. Ideal for independent operators.",
    keywords: [
      "ChampionX H2S scavenger alternative",
      "ChampionX triazine replacement",
      "unbundled H2S scavenger pricing",
      "MEA Triazine vs ChampionX",
      "independent operator H2S scavenger",
      "ChampionX equivalent",
    ],
    h1: "MEA Triazine 78% vs ChampionX H2S Scavenger — Direct Comparison",
    intro:
      "ChampionX is a major oilfield specialty chemical company that bundles H2S scavenger supply with field services, monitoring, and technical support contracts. For operators who manage their own chemical programs — or simply want transparent, unbundled pricing on the chemistry itself — Vasudev Chemo Pharma provides the same MEA triazine H2S scavenging chemistry at direct manufacturer pricing, without service contract requirements.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Varies by product line — typically 75–80% active",
      },
      {
        feature: "Pricing Model",
        vasudev: "Transparent per-tonne pricing — no service bundling",
        competitor: "Bundled with field services, monitoring, and equipment",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days (export), 3–5 days to GCC",
        competitor: "Service contract dependent",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Contract-specific packaging",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS with every shipment",
        competitor: "Provided through service agreement",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Defined by service contract volume commitments",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer, batch CoA",
        competitor: "ChampionX proprietary QA system",
      },
    ],
    advantages: [
      "Transparent per-tonne pricing — no bundled service markups or hidden costs",
      "No long-term service contract required — order as needed",
      "Ideal for independent operators who manage their own chemical programs",
      "Same MEA triazine chemistry used by ChampionX in their service offerings",
      "Direct manufacturer relationship — faster decision-making and procurement",
      "Free samples for qualification testing — no sales meetings required",
    ],
    markets: [
      "USA — independent E&P operators, midstream companies",
      "Qatar — QatarEnergy operations where ChampionX is an approved vendor",
      "Kuwait — KOC service contract environments",
      "Global — anywhere ChampionX service contracts are in place",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine the same chemistry ChampionX uses?",
        answer:
          "ChampionX's triazine-based H2S scavengers use the same hexahydrotriazine chemistry (CAS 4719-04-4) that we manufacture. The core active ingredient is identical. ChampionX adds value through field services and monitoring; Vasudev Chemo Pharma provides the chemistry itself at manufacturer pricing.",
      },
      {
        question:
          "Can I use Vasudev MEA Triazine alongside my existing ChampionX service contract?",
        answer:
          "This depends on the terms of your ChampionX contract. Many operators use ChampionX for certain wells or facilities while sourcing chemical independently for others. We recommend reviewing your contract terms. For independent operations without exclusive supply obligations, our product is a direct drop-in.",
      },
      {
        question:
          "Why would I buy separately instead of through ChampionX?",
        answer:
          "Bundled oilfield service contracts include margins for field technicians, monitoring equipment, and administrative overhead. If you have in-house chemical management capability, purchasing MEA triazine directly from the manufacturer can reduce your H2S scavenger cost significantly while maintaining the same treatment performance.",
      },
    ],
  },

  /* ── 7. HSCAV-80 / Geocon Products ─────────────────────────── */
  "hscav-80-geocon": {
    slug: "hscav-80-geocon",
    competitorBrand: "HSCAV-80 / Kontin",
    competitorCompany: "Geocon Products",
    competitorOrigin: "USA",
    title:
      "MEA Triazine 78% vs HSCAV-80 (Geocon Products) — Direct Manufacturer Alternative",
    description:
      "Compare Vasudev MEA Triazine 78% with HSCAV-80 and Kontin from Geocon Products. Direct manufacturer supply with export-ready packaging and competitive pricing.",
    keywords: [
      "HSCAV-80 alternative",
      "Geocon Products triazine replacement",
      "Kontin H2S scavenger equivalent",
      "MEA Triazine manufacturer alternative",
      "H2S scavenger HSCAV-80 substitute",
      "Geocon H2S scavenger replacement",
    ],
    h1: "MEA Triazine 78% vs HSCAV-80 / Kontin (Geocon Products) — Direct Comparison",
    intro:
      "HSCAV-80 and Kontin from Geocon Products are MEA triazine H2S scavengers used primarily in the US domestic oilfield market. Vasudev Chemo Pharma manufactures the same active chemistry at 78% concentration and offers it with export-ready packaging, full international documentation, and competitive direct manufacturer pricing — making it an attractive alternative for both domestic and international buyers.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "~80% active (HSCAV-80)",
      },
      {
        feature: "Pricing Model",
        vasudev: "Direct manufacturer pricing from India",
        competitor: "US domestic production pricing",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days (to USA), 3–5 days to GCC",
        competitor: "US domestic delivery — typically faster for US buyers",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank — export-ready with UN markings",
        competitor: "US standard drums and totes",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS — GHS compliant, multi-language available",
        competitor: "US-standard documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic India)",
        competitor: "US domestic minimums",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified manufacturer, batch CoA",
        competitor: "Geocon internal quality control",
      },
    ],
    advantages: [
      "Direct manufacturer pricing — competitive with US domestic production",
      "Export-ready packaging with UN markings and multi-language documentation",
      "Same hexahydrotriazine chemistry (CAS 4719-04-4)",
      "ISO 9001:2015 certified production facility",
      "Flexible packaging and shipping options for international buyers",
      "Free samples available for qualification testing",
    ],
    markets: [
      "USA — independent operators and distributors",
      "International markets where US-origin products are currently used",
      "Middle East and Asia — buyers seeking alternatives to US supply",
      "Chemical distributors building import supply chains",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to HSCAV-80?",
        answer:
          "Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4). HSCAV-80 is approximately 80% active; our product is 78% active. This 2% difference requires only a marginal dosage adjustment (approximately 2.5% more volume) and is fully offset by the cost advantage of direct manufacturer pricing.",
      },
      {
        question:
          "Can I switch from Geocon to Vasudev for my chemical supply?",
        answer:
          "Yes. The chemistry is identical and the concentration is comparable. Your existing injection equipment, dosing rates, and treatment procedures can remain essentially unchanged. We recommend a simple field trial with our free sample to verify performance in your specific application.",
      },
      {
        question:
          "Do you supply to US distributors?",
        answer:
          "Yes. We work with chemical distributors in the USA and other markets. We provide bulk pricing, private labeling options, and consistent supply with full documentation. Contact us to discuss distributor partnership terms.",
      },
    ],
  },

  /* ── 8. Chinese suppliers ──────────────────────────────────── */
  "chinese-suppliers": {
    slug: "chinese-suppliers",
    competitorBrand: "BK Biocide / Dayong / IRO / ECHEMI",
    competitorCompany: "Various Chinese manufacturers and marketplace suppliers",
    competitorOrigin: "China",
    title:
      "MEA Triazine 78% vs Chinese Suppliers (BK Biocide, Dayong, IRO, ECHEMI) — Quality Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Chinese marketplace suppliers. Guaranteed 78% concentration vs typical 70-75%, consistent quality with batch CoA, and full documentation.",
    keywords: [
      "BK Biocide alternative",
      "Chinese MEA Triazine quality",
      "Dayong triazine vs India",
      "IRO MEA Triazine alternative",
      "ECHEMI triazine quality",
      "MEA Triazine China vs India",
      "reliable H2S scavenger supplier",
    ],
    h1: "MEA Triazine 78% vs Chinese Suppliers (BK Biocide, Dayong, IRO, ECHEMI) — Quality Comparison",
    intro:
      "Chinese marketplace suppliers — including BK Biocide, Dongying Dayong, IRO Group, ECHEMI, and Xipeng — offer MEA triazine at low prices through platforms like Alibaba and Made-in-China. However, buyers frequently report inconsistent concentrations (typically 70–75% instead of advertised 78%), variable quality between batches, and incomplete technical documentation. Vasudev Chemo Pharma offers guaranteed 78% active concentration with batch-level Certificate of Analysis, ISO 9001:2015 certification, and consistent quality that you can verify and rely on.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "Guaranteed ≥78% — verified by batch CoA",
        competitor: "Advertised 78% — often tests at 70–75% on arrival",
      },
      {
        feature: "Pricing Model",
        vasudev: "Competitive direct manufacturer pricing",
        competitor: "Low headline price — but lower concentration reduces effective value",
      },
      {
        feature: "Lead Time",
        vasudev: "10–15 days general export, 3–5 days to ME",
        competitor: "15–30 days from China, variable shipping reliability",
      },
      {
        feature: "Packaging",
        vasudev: "Export-grade 220L drums, IBC 1000L, ISO tank with UN markings",
        competitor: "Variable quality — packaging damage and leakage reported",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS — GHS compliant, accurate",
        competitor: "Often generic, incomplete, or inaccurate documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export)",
        competitor: "Varies — some accept small trial orders",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch CoA with actual test results",
        competitor: "Limited third-party verification, inconsistent batch QC",
      },
    ],
    advantages: [
      "Guaranteed ≥78% active concentration — verified by batch Certificate of Analysis",
      "Consistent quality across every batch — no surprises on arrival",
      "ISO 9001:2015 certified production facility with documented QA processes",
      "Accurate, complete, GHS-compliant documentation (CoA, TDS, MSDS)",
      "Export-grade packaging that meets international shipping standards",
      "Direct manufacturer relationship — not a trading company or marketplace listing",
    ],
    markets: [
      "Vietnam — where Chinese triazine is widely traded but quality is inconsistent",
      "Thailand — PTTEP and industrial buyers seeking reliable supply",
      "Southeast Asia — paper mills, oilfield operators, industrial users",
      "Any market where Chinese-sourced triazine has underperformed on specification",
    ],
    lastReviewed: "2026-04-01",
    faqs: [
      {
        question:
          "Why do Chinese suppliers often deliver lower concentration than advertised?",
        answer:
          "Many Chinese marketplace suppliers prioritise low price over consistent quality. To achieve lower production costs, some dilute the product or use less formaldehyde in the reaction, resulting in actual concentrations of 70–75% instead of the advertised 78%. Without independent verification, buyers only discover this after testing the received product. Vasudev Chemo Pharma provides a batch-specific Certificate of Analysis with every shipment.",
      },
      {
        question:
          "Is the price per tonne actually cheaper from China?",
        answer:
          "While the headline price from Chinese suppliers may appear lower, the effective cost per unit of H2S removed is often higher because the actual concentration is lower than stated. A product testing at 72% requires approximately 8% more volume to achieve the same scavenging as a true 78% product. When you factor in this overconsumption plus the risk of off-spec batches, Vasudev's guaranteed 78% product delivers better value.",
      },
      {
        question:
          "Can I switch from a Chinese supplier to Vasudev?",
        answer:
          "Yes. If you are currently using Chinese-sourced MEA triazine, switching to Vasudev is straightforward. You may find that your dosing rates actually decrease because our guaranteed 78% concentration means more active ingredient per litre. We provide free samples for qualification testing so you can verify performance before committing to an order.",
      },
      {
        question:
          "Do you offer small trial orders like Chinese marketplace suppliers?",
        answer:
          "Our minimum order quantity for export is 1 MT, which is standard for industrial chemical supply. However, we provide free samples for laboratory and field testing before you commit to an order. This allows you to verify the quality and concentration before making a purchase decision.",
      },
    ],
  },
};

export const COMPETITOR_PAGES_DATA: Record<string, CompetitorPageData> =
  Object.fromEntries(
    Object.entries(RAW_COMPETITOR_PAGES_DATA).map(([slug, page]) => [
      slug,
      enrichCompetitorPage(page),
    ])
  );

export const COMPETITOR_SLUGS: string[] = Object.keys(COMPETITOR_PAGES_DATA);
