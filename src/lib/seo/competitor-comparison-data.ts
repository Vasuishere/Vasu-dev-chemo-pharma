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
  "HSCAV-70",
  "Tacelene Chem 62090",
  "Tacelene Chem 62087",
  "Tacelene Chem 62081",
  "ICPL Triazine",
  "K2P MEA-T",
  "Kwantum MEA Triazine",
  "Melzer MEA Triazine",
  "Microtreat MZ TR",
  "Vendecor (Esteem)",
  "SCAV HS (Yogi)",
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
  "mea triazine manufacturers in india",
  "triazine manufacturer in india",
  "monoethanolamine triazine india",
  "monoethanolamine-triazine supplier in india",
  "H2S Scavengers & Triazine-Based Gas Treatment Chemicals",
  "amine base triazine",
  "cas no. 4719-04-4",
  "MEA Triazine 70% vs 78% difference",
  "h2s scavenger types comparison",
  "triazine based h2s scavenger mechanism",
  "how triazine removes hydrogen sulfide",
  "mea triazine concentration grades",
  "monoethanolamine triazine chemistry",
  "amine based triazine synthesis",
  "triazine h2s scavenger dosing calculation",
  "h2s scavenger environmental impact",
  "triazine biocide vs oxidizing biocide",
  "mea triazine shelf life and storage",
  "h2s scavenger for sour gas fields India",
  "water based biocide applications",
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
  "h2s scavenger 78 manufacturer in INDIA",
  "h2s scavenger manufacturer in INDIA",
  "mea triazine 78 suppliers in india",
  "Triazine Based H2S scavenger Manufacturer",
  "mea triazine supplier india bulk",
  "h2s scavenger quote India",
  "mea triazine factory price India",
  "triazine h2s scavenger bulk order India",
  "mea triazine ISO certified manufacturer",
  "h2s scavenger direct manufacturer",
  "mea triazine sample request India",
  "monoethanolamine triazine bulk supplier",
  "mea triazine export from India",
  "h2s scavenger for natural gas India",
  "h2s scavenger for oil refinery India",
  "triazine biocide manufacturer Gujarat",
  "mea triazine Ankleshwar manufacturer",
  "h2s scavenger CIF price",
  "MEA Triazine 70% supplier",
  "water based biocide manufacturer India",
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

  /* ── 9. Jay Dinesh Chemicals ─────────────────────────────────── */
  "jay-dinesh-chemicals": {
    slug: "jay-dinesh-chemicals",
    competitorBrand: "JadeScan 54 / JDC H2S Scavenger",
    competitorCompany: "Jay Dinesh Chemicals",
    competitorOrigin: "India (Ahmedabad)",
    title:
      "MEA Triazine 78% vs JadeScan 54 (Jay Dinesh Chemicals) — Indian Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with JadeScan 54 from Jay Dinesh Chemicals. Both are Indian manufacturers — Vasudev offers higher 78% concentration, ISO certification, and export-proven supply to 60+ countries.",
    keywords: [
      "JadeScan 54 alternative",
      "Jay Dinesh Chemicals triazine replacement",
      "JDC H2S scavenger equivalent",
      "jadescan 54",
      "jay dinesh chemicals mea triazine",
      "jaydinesh h2s scavenger",
      "jaydinesh triazine biocide",
      "JadeScan 54 vs Vasudev MEA Triazine",
      "h2s scavenger manufacturer Ahmedabad",
      "triazine manufacturer Gujarat",
    ],
    h1: "MEA Triazine 78% vs JadeScan 54 (Jay Dinesh Chemicals) — Direct Comparison",
    intro:
      "Jay Dinesh Chemicals (JDC) is an Ahmedabad-based manufacturer producing triazine-based H2S scavengers and biocides under trade names like JadeScan 54. While JDC serves the domestic Indian market and some export destinations, Vasudev Chemo Pharma manufactures MEA Triazine at a guaranteed 78% active concentration — the highest in the Indian market — with ISO 9001:2015 certification and proven export capability to 60+ countries.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Varies by product line (54–78% reported)",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing facility in Ahmedabad — certification status varies",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery to all major global ports",
        competitor: "Primarily domestic India with some exports",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Drums, IBC tanks",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS/SDS with every shipment — GHS compliant",
        competitor: "Documentation provided on request",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "25 Kg minimum reported",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA — independent verification not always available",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration — highest in the Indian market, verified by batch CoA",
      "ISO 9001:2015 certified manufacturing with documented QA processes",
      "Export-proven to 60+ countries with international documentation standards",
      "Full GHS-compliant documentation (CoA, TDS, MSDS) included with every shipment",
      "Dedicated production facility in Ankleshwar with consistent batch quality",
      "Free samples available for qualification testing before purchase commitment",
    ],
    markets: [
      "India — ONGC, Reliance, GAIL, Cairn, Vedanta operations",
      "Middle East — UAE, Oman, Qatar, Saudi Arabia, Kuwait",
      "Southeast Asia — Vietnam, Thailand, Indonesia",
      "International buyers seeking ISO-certified Indian manufacturer",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% chemically equivalent to JadeScan 54?",
        answer:
          "Both products are based on hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4). The key difference is the guaranteed active concentration — Vasudev guarantees 78% active on every batch CoA, which is the highest available from an Indian manufacturer. JadeScan 54 product naming suggests a different concentration grade. Buyers should verify the actual active percentage on the supplier CoA before assuming equivalence.",
      },
      {
        question:
          "Why choose Vasudev over Jay Dinesh Chemicals for export orders?",
        answer:
          "Vasudev Chemo Pharma has established export operations to 60+ countries with CIF delivery capability, international documentation standards (GHS-compliant SDS, export-grade CoA), and experience with customs clearance across multiple jurisdictions. Our ISO 9001:2015 certification is specifically relevant for international procurement where quality certification is a tender requirement.",
      },
      {
        question:
          "Can I switch from JadeScan 54 to Vasudev MEA Triazine 78%?",
        answer:
          "Yes. If you are using JadeScan 54 for H2S scavenging or biocide applications, Vasudev MEA Triazine 78% is a direct replacement with higher active concentration. You may need to adjust dosing rates downward due to the higher concentration. We provide free samples for qualification testing.",
      },
      {
        question:
          "Does Vasudev offer competitive pricing compared to Jay Dinesh Chemicals?",
        answer:
          "As a direct manufacturer with a dedicated production facility in Ankleshwar, Gujarat, Vasudev offers factory-direct pricing without intermediary markup. For domestic Indian orders, we offer competitive pricing with 4–5 day delivery. For export orders, our CIF pricing is highly competitive due to proximity to Hazira and Kandla ports.",
      },
    ],
  },

  /* ── 10. Imperial Oilfield Chemicals ────────────────────────── */
  "imperial-oilfield-chemicals": {
    slug: "imperial-oilfield-chemicals",
    competitorBrand: "ICPL Triazine H2S Scavenger",
    competitorCompany: "Imperial Oilfield Chemicals Pvt. Ltd.",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs ICPL Triazine (Imperial Oilfield Chemicals) — Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with ICPL Triazine from Imperial Oilfield Chemicals. Both Indian manufacturers — Vasudev offers guaranteed 78% concentration, ISO certification, and factory-direct pricing.",
    keywords: [
      "Imperial oilfield chemicals alternative",
      "ICPL triazine replacement",
      "imperial chem h2s scavenger",
      "imperialchem triazine equivalent",
      "ICPL triazine h2s scavenger",
      "imperial oilfield chemicals triazine biocide",
      "h2s scavenger manufacturer India",
      "triazine based biocide manufacturer India",
    ],
    h1: "MEA Triazine 78% vs ICPL Triazine (Imperial Oilfield Chemicals) — Direct Comparison",
    intro:
      "Imperial Oilfield Chemicals Pvt. Ltd. (ICPL) manufactures triazine-based H2S scavengers and biocides for the oil and gas industry. They offer both water-soluble and oil-soluble H2S scavenger products. Vasudev Chemo Pharma is a dedicated MEA Triazine manufacturer with guaranteed 78% active concentration, ISO 9001:2015 certification, and export capability to 60+ countries — offering a focused, quality-assured alternative.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Concentration varies by product grade",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing facility — certification details vary",
      },
      {
        feature: "Product Focus",
        vasudev: "Dedicated MEA Triazine specialist — deep expertise",
        competitor: "Broad oilfield chemical portfolio — triazine is one of many products",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery to all major ports",
        competitor: "Export operations to select markets",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS/SDS — GHS compliant with every shipment",
        competitor: "Documentation available on request",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Drums and IBC tanks",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA with actual test results",
        competitor: "Internal QA processes",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration verified by independent batch CoA",
      "ISO 9001:2015 certified manufacturing — meets international tender requirements",
      "Dedicated MEA Triazine specialist with deep process expertise",
      "Export-proven supply chain to 60+ countries with international documentation",
      "Factory-direct pricing without distributor or agent markups",
      "Free samples for qualification testing before purchase commitment",
    ],
    markets: [
      "India — domestic oilfield operations and refineries",
      "Middle East — UAE, Oman, Qatar, Saudi Arabia, Kuwait, Iraq",
      "Africa — Egypt, Nigeria, Angola operations",
      "International tenders requiring ISO-certified supply",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to ICPL Triazine H2S Scavenger?",
        answer:
          "Both products are based on hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4). Vasudev guarantees 78% active concentration on every batch CoA. Imperial offers multiple concentration grades — buyers should verify the specific active percentage matches their requirement. The underlying chemistry is the same.",
      },
      {
        question:
          "Why choose Vasudev over Imperial Oilfield Chemicals?",
        answer:
          "Vasudev Chemo Pharma is a dedicated MEA Triazine manufacturer — triazine is our core product, not one item in a broad oilfield chemical catalogue. This focus means deeper process expertise, tighter quality control, and guaranteed 78% concentration on every batch. Our ISO 9001:2015 certification and 60+ country export track record also differentiate us for international procurement.",
      },
      {
        question:
          "Can I use Vasudev MEA Triazine as a replacement for ICPL Triazine biocide?",
        answer:
          "Yes. For both H2S scavenging and biocide applications, Vasudev MEA Triazine 78% is a direct replacement. The same CAS number (4719-04-4) and triazine chemistry applies. We provide free samples so you can test compatibility with your specific system before committing.",
      },
      {
        question:
          "Does Vasudev supply triazine-based biocides in addition to H2S scavengers?",
        answer:
          "Yes. MEA Triazine 78% functions as both an H2S scavenger and a formaldehyde-releasing biocide. It is used in water treatment, metalworking fluids, oil drilling, and industrial preservation. One product serves both functions, simplifying procurement.",
      },
    ],
  },

  /* ── 11. Geocon Products India (HSCAV-70) ───────────────────── */
  "geocon-products-india": {
    slug: "geocon-products-india",
    competitorBrand: "HSCAV-70",
    competitorCompany: "Geocon Products",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs HSCAV-70 (Geocon Products) — Concentration & Quality Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with HSCAV-70 from Geocon Products. 78% vs 70% active concentration — Vasudev delivers more H2S scavenging capacity per litre with ISO 9001:2015 certified quality.",
    keywords: [
      "HSCAV-70 alternative",
      "HSCAV-70 equivalent",
      "Geocon Products India",
      "HSCAV-70 h2s scavenger replacement",
      "geocon mea triazine 70",
      "HSCAV-70 vs MEA Triazine 78",
      "geocon products triazine",
      "h2s scavenger 70 vs 78",
    ],
    h1: "MEA Triazine 78% vs HSCAV-70 (Geocon Products) — Direct Comparison",
    intro:
      "Geocon Products manufactures HSCAV-70, a 70% active MEA Triazine H2S scavenger. While HSCAV-70 is a proven product, Vasudev Chemo Pharma offers MEA Triazine at 78% active concentration — delivering approximately 11% more H2S scavenging capacity per litre. This higher concentration means lower dosing volumes, reduced logistics costs, and better economics per tonne of H2S removed.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "70% active (HSCAV-70)",
      },
      {
        feature: "Effective H2S Capacity",
        vasudev: "~11% more scavenging per litre than 70% product",
        competitor: "Standard 70% capacity",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing facility in India",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Primarily domestic and select export markets",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Drums, IBC totes, customised formulations",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS/SDS — GHS compliant",
        competitor: "TDS and documentation available",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch CoA with actual test results",
        competitor: "Internal QA processes",
      },
    ],
    advantages: [
      "78% active concentration — 11% more scavenging capacity per litre than HSCAV-70",
      "Lower dosing volumes required — reduces chemical consumption and logistics costs",
      "ISO 9001:2015 certified manufacturing with batch-specific Certificate of Analysis",
      "Export-proven to 60+ countries with international documentation standards",
      "Factory-direct pricing from dedicated production facility in Ankleshwar, Gujarat",
      "Free samples available for head-to-head performance testing",
    ],
    markets: [
      "India — ONGC, GAIL, Oil India, Vedanta, Cairn operations",
      "Middle East — operators seeking higher concentration for cost optimisation",
      "Any market where 70% concentration is currently used and efficiency gains are desired",
      "International tenders specifying minimum 75% or 78% active concentration",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Why is 78% concentration better than 70% for H2S scavenging?",
        answer:
          "At 78% active concentration, each litre of product contains approximately 11% more triazine than a 70% product. This means you need less volume to scavenge the same amount of H2S — reducing chemical consumption, storage requirements, and logistics costs. For high-volume operations, this concentration advantage translates to significant annual savings.",
      },
      {
        question:
          "Can I switch from HSCAV-70 to Vasudev MEA Triazine 78% without changing equipment?",
        answer:
          "Yes. Both products are MEA Triazine with similar physical properties. You can use the same injection equipment and chemical storage. The only adjustment needed is a slight reduction in dosing rate (approximately 10%) to account for the higher concentration.",
      },
      {
        question:
          "Is Vasudev MEA Triazine 78% more expensive than HSCAV-70?",
        answer:
          "While the per-litre price may differ, the effective cost per unit of H2S removed is typically lower with 78% product because you use less volume. When evaluating total cost, factor in reduced chemical consumption, lower freight costs (less volume shipped), and reduced storage requirements.",
      },
      {
        question:
          "Does Geocon also offer an 80% MEA Triazine product?",
        answer:
          "Geocon Products offers HSCAV-80 in some markets. For a comparison with that product, see our separate HSCAV-80 comparison page. Vasudev's 78% product is positioned between the 70% and 80% grades, offering an excellent balance of concentration and cost-effectiveness.",
      },
    ],
  },

  /* ── 12. K2P Chemicals ──────────────────────────────────────── */
  "k2p-chemicals": {
    slug: "k2p-chemicals",
    competitorBrand: "K2P MEA-T",
    competitorCompany: "K2P Chemical Products",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs K2P MEA-T (K2P Chemicals) — Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with K2P MEA-T from K2P Chemical Products. Both Indian suppliers — Vasudev offers guaranteed 78% concentration, ISO certification, and global export capability.",
    keywords: [
      "K2P chemicals alternative",
      "K2P MEA-T replacement",
      "k2pchemicals h2s scavenger",
      "K2P triazine equivalent",
      "K2P chemical products triazine",
      "K2P monoethanolamine triazine",
      "mea triazine supplier India",
    ],
    h1: "MEA Triazine 78% vs K2P MEA-T (K2P Chemical Products) — Direct Comparison",
    intro:
      "K2P Chemical Products supplies monoethanolamine triazine (MEA-T) for H2S scavenging and gas treatment applications. Vasudev Chemo Pharma is a dedicated MEA Triazine manufacturer with guaranteed 78% active concentration, ISO 9001:2015 certification, and a proven export track record to 60+ countries — offering buyers a quality-assured, factory-direct alternative.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Concentration grade not always specified publicly",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing/supply operation — certification varies",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Primarily Indian domestic market",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant with every shipment",
        competitor: "Available on request",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard packaging options",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Contact for details",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration on every batch — verified by Certificate of Analysis",
      "ISO 9001:2015 certified manufacturing facility in Ankleshwar, Gujarat",
      "Export-proven supply to 60+ countries with full international documentation",
      "Factory-direct pricing without intermediary markup",
      "Dedicated MEA Triazine specialist — not a general chemical trader",
      "Free samples for qualification testing",
    ],
    markets: [
      "India — oil and gas, refining, water treatment operations",
      "Middle East — GCC countries",
      "International buyers requiring certified supply",
      "Operations switching from local suppliers to ISO-certified manufacturer",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to K2P MEA-T?",
        answer:
          "Both products are monoethanolamine triazine (CAS 4719-04-4). Vasudev guarantees 78% active concentration on every batch CoA. Buyers should verify the specific concentration grade offered by K2P to confirm equivalence. The base chemistry is the same.",
      },
      {
        question:
          "Why choose Vasudev over K2P Chemical Products?",
        answer:
          "Vasudev Chemo Pharma is a dedicated MEA Triazine manufacturer with ISO 9001:2015 certification, guaranteed 78% concentration, and export capability to 60+ countries. Our focused production expertise and international supply chain experience make us the preferred choice for buyers requiring consistent quality and reliable global delivery.",
      },
      {
        question:
          "Can I get a sample before switching from K2P to Vasudev?",
        answer:
          "Yes. We provide free samples for laboratory and field qualification testing. This allows you to verify concentration, physical properties, and performance compatibility with your system before committing to a purchase order.",
      },
    ],
  },

  /* ── 13. Venus Ethoxyethers ─────────────────────────────────── */
  "venus-ethoxyethers": {
    slug: "venus-ethoxyethers",
    competitorBrand: "Venus MEA Triazine",
    competitorCompany: "Venus Ethoxyethers Pvt. Ltd.",
    competitorOrigin: "India (Goa)",
    title:
      "MEA Triazine 78% vs Venus Ethoxyethers — Indian Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Venus Ethoxyethers (Goa). Vasudev offers guaranteed 78% concentration, ISO 9001:2015 certification, and factory-direct pricing from Gujarat.",
    keywords: [
      "Venus Ethoxyethers alternative",
      "venus goa triazine replacement",
      "Venus MEA triazine equivalent",
      "venus ethoxyethers h2s scavenger",
      "venus goa monoethanolamine triazine",
      "monoethanolamine triazine Goa",
      "triazine manufacturer Goa vs Gujarat",
    ],
    h1: "MEA Triazine 78% vs Venus Ethoxyethers — Direct Comparison",
    intro:
      "Venus Ethoxyethers Pvt. Ltd. (Goa) manufactures monoethanolamine triazine and MMA triazine for the oil and gas sector. They also supply under the Vendecor trade name. Vasudev Chemo Pharma manufactures MEA Triazine at a guaranteed 78% active concentration from our ISO 9001:2015 certified facility in Ankleshwar, Gujarat — closer to major Indian ports (Hazira, Kandla) for faster export logistics.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Multiple grades offered — verify specific concentration",
      },
      {
        feature: "Manufacturing Location",
        vasudev: "Ankleshwar, Gujarat — near Hazira & Kandla ports",
        competitor: "Goa — further from major industrial ports",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing facility in Goa",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Export operations available",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant with every shipment",
        competitor: "Documentation available",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard packaging options",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Manufacturing QA processes",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration — verified on every batch CoA",
      "Strategic manufacturing location near Hazira and Kandla ports for faster export",
      "ISO 9001:2015 certified manufacturing with documented quality processes",
      "Export-proven to 60+ countries with international compliance documentation",
      "Factory-direct pricing from dedicated production facility",
      "Free samples for qualification testing",
    ],
    markets: [
      "India — domestic oilfield and industrial operations",
      "Middle East — UAE, Oman, Qatar, Saudi Arabia",
      "Southeast Asia — Vietnam, Thailand",
      "Buyers currently sourcing from Goa seeking Gujarat-based alternative",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to Venus Ethoxyethers triazine?",
        answer:
          "Both products are monoethanolamine triazine (CAS 4719-04-4). Vasudev guarantees 78% active concentration on every batch. Venus offers multiple concentration grades — confirm the specific grade matches your requirement. The base chemistry is identical.",
      },
      {
        question:
          "Does Venus also manufacture MMA Triazine?",
        answer:
          "Yes, Venus Ethoxyethers manufactures both MEA and MMA triazine. Vasudev Chemo Pharma also manufactures MMA Triazine 40% in addition to MEA Triazine 78%. We can supply both chemistries from a single source.",
      },
      {
        question:
          "What is the logistics advantage of Ankleshwar over Goa?",
        answer:
          "Ankleshwar in Gujarat is strategically located near Hazira port (for containerised exports) and Kandla port (for bulk shipments). This proximity reduces inland transportation costs and transit time compared to Goa, particularly for export orders destined for the Middle East, Africa, or Southeast Asia.",
      },
    ],
  },

  /* ── 14. Esteem Industries ──────────────────────────────────── */
  "esteem-industries": {
    slug: "esteem-industries",
    competitorBrand: "Vendecor / Esteem H2S Scavenger",
    competitorCompany: "Esteem Industries",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs Esteem Industries (Vendecor) — Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Esteem Industries Vendecor series H2S scavengers. Vasudev offers guaranteed 78% concentration, ISO certification, and export-proven supply.",
    keywords: [
      "Esteem Industries alternative",
      "esteem india triazine replacement",
      "Esteem H2S scavenger equivalent",
      "Vendecor H2S scavenger alternative",
      "esteem india mea triazine",
      "Vendecor triazine replacement",
      "h2s scavenger manufacturer India",
    ],
    h1: "MEA Triazine 78% vs Esteem Industries (Vendecor) — Direct Comparison",
    intro:
      "Esteem Industries manufactures triazine-based H2S scavengers under the Vendecor brand name for oil and gas applications. They offer both MEA triazine and MMA triazine products. Vasudev Chemo Pharma provides MEA Triazine at a guaranteed 78% active concentration with ISO 9001:2015 certification and export capability to 60+ countries.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Multiple grades — concentration varies by product",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing operations — certification details on request",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Domestic and select export markets",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant with every shipment",
        competitor: "Documentation available",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard industrial packaging",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Contact for details",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA processes",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration on every batch — highest in Indian market",
      "ISO 9001:2015 certified manufacturing facility in Ankleshwar, Gujarat",
      "Export-proven supply chain to 60+ countries",
      "Full GHS-compliant documentation included with every shipment",
      "Factory-direct pricing without intermediary markup",
      "Free samples for qualification testing before commitment",
    ],
    markets: [
      "India — oil and gas, petrochemical, water treatment",
      "Middle East — GCC countries, Iraq",
      "Africa and Latin America",
      "International tenders requiring ISO-certified manufacturer",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to Vendecor H2S scavenger?",
        answer:
          "Both products are based on triazine chemistry for H2S scavenging. Vasudev guarantees 78% active concentration. Vendecor is a brand name used by Esteem Industries — buyers should verify the specific concentration grade to confirm equivalence. The underlying monoethanolamine triazine chemistry (CAS 4719-04-4) is the same.",
      },
      {
        question:
          "Can Vasudev supply both MEA and MMA triazine like Esteem Industries?",
        answer:
          "Yes. Vasudev Chemo Pharma manufactures both MEA Triazine 78% and MMA Triazine 40%. We can supply both chemistries from a single source with consistent quality and documentation.",
      },
      {
        question:
          "Why switch from Esteem Industries to Vasudev?",
        answer:
          "Vasudev offers guaranteed 78% concentration (the highest available from an Indian manufacturer), ISO 9001:2015 certified production, and export capability to 60+ countries. Our factory-direct pricing and comprehensive documentation make us ideal for both domestic and international procurement.",
      },
    ],
  },

  /* ── 15. Yogi Intermediates ─────────────────────────────────── */
  "yogi-intermediates": {
    slug: "yogi-intermediates",
    competitorBrand: "SCAV HS / Yogi MEA Triazine",
    competitorCompany: "Yogi Intermediates Pvt. Ltd.",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs SCAV HS (Yogi Intermediates) — Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with SCAV HS from Yogi Intermediates. Vasudev offers guaranteed 78% concentration, ISO 9001:2015 certification, and export-proven global supply.",
    keywords: [
      "Yogi Intermediates alternative",
      "yogiintermediates triazine replacement",
      "Yogi h2s scavenger equivalent",
      "SCAV HS alternative",
      "yogi intermediates mea triazine",
      "SCAV HS h2s scavenger replacement",
      "triazine manufacturer India",
    ],
    h1: "MEA Triazine 78% vs SCAV HS (Yogi Intermediates) — Direct Comparison",
    intro:
      "Yogi Intermediates Pvt. Ltd. manufactures SCAV HS, an organic triazine-based H2S scavenger for oil and gas applications. Their product is designed for neutral to high pH conditions. Vasudev Chemo Pharma offers MEA Triazine at a guaranteed 78% active concentration with ISO 9001:2015 certification, providing a quality-assured alternative with international export capability.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Concentration varies — verify on CoA",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing facility in India",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Domestic India focused",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant",
        competitor: "Documentation available",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard packaging",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Contact for details",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration — highest available from Indian manufacturer",
      "ISO 9001:2015 certified production with batch Certificate of Analysis",
      "Export-proven to 60+ countries with full international documentation",
      "Factory-direct pricing from dedicated Ankleshwar facility",
      "Proven track record in both H2S scavenging and biocide applications",
      "Free samples for qualification testing",
    ],
    markets: [
      "India — domestic oil and gas operations",
      "Middle East — GCC countries",
      "Southeast Asia",
      "Buyers seeking ISO-certified alternative to local manufacturers",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to Yogi SCAV HS?",
        answer:
          "Both products are triazine-based H2S scavengers using monoethanolamine triazine chemistry (CAS 4719-04-4). Vasudev guarantees 78% active concentration on every batch. Verify the specific concentration of SCAV HS to confirm equivalence.",
      },
      {
        question:
          "Can I switch from Yogi Intermediates to Vasudev?",
        answer:
          "Yes. The chemistry is the same. You can use the same dosing equipment and treatment protocols. We provide free samples for qualification testing to verify compatibility with your system before switching.",
      },
      {
        question:
          "Does Vasudev MEA Triazine work at neutral to high pH like SCAV HS?",
        answer:
          "Yes. MEA Triazine 78% performs effectively across a wide pH range, including neutral to high pH conditions. The H2S scavenging reaction proceeds optimally at pH 8–12, which is the typical operating range for most oilfield and gas treatment applications.",
      },
    ],
  },

  /* ── 16. Melzer Chemicals ───────────────────────────────────── */
  "melzer-chemicals": {
    slug: "melzer-chemicals",
    competitorBrand: "Microtreat MZ TR / Melzer MEA Triazine",
    competitorCompany: "Melzer Speciality Chemicals Pvt. Ltd.",
    competitorOrigin: "India (Pune / Navi Mumbai)",
    title:
      "MEA Triazine 78% vs Microtreat MZ TR (Melzer Chemicals) — Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Microtreat MZ TR from Melzer Chemicals. Vasudev is a dedicated H2S scavenger manufacturer; Melzer focuses on biocide/preservative applications.",
    keywords: [
      "Melzer Chemicals alternative",
      "melzer speciality triazine replacement",
      "Melzer h2s scavenger Pune",
      "melzerspeciality triazine equivalent",
      "Microtreat MZ TR alternative",
      "Microtreat MZ TR equivalent",
      "melzer chemicals mea triazine",
      "triazine biocide Pune",
      "water treatment biocide India",
    ],
    h1: "MEA Triazine 78% vs Microtreat MZ TR (Melzer Chemicals) — Direct Comparison",
    intro:
      "Melzer Speciality Chemicals Pvt. Ltd. (Pune/Navi Mumbai) manufactures Microtreat MZ TR, a hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine product positioned primarily as a biocide/preservative for water treatment, metalworking fluids, and industrial applications. Vasudev Chemo Pharma manufactures the same CAS 4719-04-4 chemistry at 78% active concentration, serving both the H2S scavenging (oil & gas) and biocide markets from an ISO 9001:2015 certified facility.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Concentration varies by product formulation",
      },
      {
        feature: "Primary Market Focus",
        vasudev: "Oil & gas H2S scavenging + industrial biocide",
        competitor: "Industrial biocide, water treatment, metalworking fluids",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Manufacturing in Navi Mumbai / TTC MIDC Turbhe",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Exports to select countries (Middle East, SEA, Indonesia)",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant with every shipment",
        competitor: "Technical data sheets available",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard industrial packaging",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA processes",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration — higher active content for both H2S scavenging and biocide use",
      "Dual-market expertise — serving oil & gas AND industrial biocide customers",
      "ISO 9001:2015 certified manufacturing with batch Certificate of Analysis",
      "Export-proven to 60+ countries — wider international reach",
      "Factory-direct pricing from Ankleshwar, Gujarat — port proximity advantage",
      "Free samples for qualification testing in your specific application",
    ],
    markets: [
      "Water treatment — cooling towers, recirculating systems",
      "Metalworking fluids — cutting oil preservative",
      "Oil & gas — H2S scavenging",
      "Industrial preservation — paints, coatings, adhesives",
      "International buyers seeking competitive alternative to Melzer products",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% chemically the same as Microtreat MZ TR?",
        answer:
          "Yes. Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4). The chemistry is identical. Vasudev guarantees 78% active concentration, which may differ from specific Melzer formulation grades. Verify the active percentage on the Melzer product CoA to confirm direct equivalence.",
      },
      {
        question:
          "Can Vasudev MEA Triazine be used as a biocide for metalworking fluids?",
        answer:
          "Yes. MEA Triazine 78% functions as a formaldehyde-releasing biocide and is widely used in metalworking fluid preservation, water treatment, and industrial applications — the same markets Melzer serves. The higher 78% concentration means you need less product per dosing event.",
      },
      {
        question:
          "Why choose Vasudev over Melzer for triazine biocide supply?",
        answer:
          "Vasudev offers ISO 9001:2015 certified manufacturing, guaranteed 78% active concentration, and export capability to 60+ countries. Our factory-direct pricing from Gujarat is competitive, and we serve both the oil & gas H2S scavenging market and the industrial biocide market from a single production line — providing procurement flexibility.",
      },
      {
        question:
          "Does Vasudev export to the same markets as Melzer?",
        answer:
          "Yes, and more. Vasudev exports to 60+ countries including the Middle East, Southeast Asia, Africa, Europe, and the Americas. Melzer's export footprint is primarily focused on a smaller number of countries. We can supply CIF to any major port worldwide.",
      },
    ],
  },

  /* ── 17. Tacelene Chem Series ───────────────────────────────── */
  "tacelene-chem": {
    slug: "tacelene-chem",
    competitorBrand: "Tacelene Chem 62090 / 62087 / 62081",
    competitorCompany: "Tacelene Chemical",
    competitorOrigin: "International",
    title:
      "MEA Triazine 78% vs Tacelene Chem 62090/62087/62081 — Alternative Supplier Comparison",
    description:
      "Looking for a Tacelene Chem 62090, 62087, or 62081 alternative? Vasudev MEA Triazine 78% is a direct replacement with guaranteed concentration, ISO certification, and factory-direct pricing.",
    keywords: [
      "Tacelene Chem 62090 alternative",
      "Tacelene Chem 62087 replacement",
      "Tacelene Chem 62081 equivalent",
      "Tacelene chem h2s scavenger",
      "Tacelene chem 62090",
      "Tacelene chem 62087",
      "Tacelene chem 62081",
      "Tacelene triazine alternative supplier",
      "Tacelene biocide replacement",
    ],
    h1: "MEA Triazine 78% as Alternative to Tacelene Chem 62090 / 62087 / 62081",
    intro:
      "Tacelene Chem 62090, 62087, and 62081 are triazine-based products used in H2S scavenging and industrial biocide applications. If you are seeking a cost-effective, quality-assured alternative to any of the Tacelene Chem triazine grades, Vasudev Chemo Pharma manufactures MEA Triazine at 78% active concentration from an ISO 9001:2015 certified facility with export capability to 60+ countries.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Varies by product code (62090 / 62087 / 62081)",
      },
      {
        feature: "Chemistry",
        vasudev: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4)",
        competitor: "Triazine-based — verify specific CAS on product TDS",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Varies by manufacturer",
      },
      {
        feature: "Pricing",
        vasudev: "Factory-direct pricing — no brand premium",
        competitor: "Branded product pricing with margin",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant",
        competitor: "Available from supplier",
      },
      {
        feature: "Global Availability",
        vasudev: "CIF delivery to all major ports, 60+ countries",
        competitor: "Regional distribution networks",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Manufacturer QA",
      },
    ],
    advantages: [
      "Direct manufacturer pricing — no branded product premium",
      "Guaranteed 78% active concentration with batch Certificate of Analysis",
      "ISO 9001:2015 certified manufacturing for procurement compliance",
      "CIF delivery to any major port — 60+ countries served",
      "Same CAS 4719-04-4 chemistry as Tacelene triazine products",
      "Free samples to verify equivalence before committing to orders",
    ],
    markets: [
      "Any market currently using Tacelene Chem 62090, 62087, or 62081",
      "Oil and gas — H2S scavenging applications",
      "Industrial biocide and preservation applications",
      "Buyers seeking cost reduction on branded triazine products",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% a direct replacement for Tacelene Chem 62090?",
        answer:
          "If Tacelene Chem 62090 is a hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine product (CAS 4719-04-4), then yes — Vasudev MEA Triazine 78% is chemically equivalent. Verify the CAS number and active concentration on the Tacelene product TDS to confirm. We provide free samples for qualification testing.",
      },
      {
        question:
          "What is the difference between Tacelene Chem 62090, 62087, and 62081?",
        answer:
          "The different product codes typically indicate different concentration grades or formulation variants within the Tacelene product line. Vasudev MEA Triazine 78% is the highest concentration grade available — suitable as an alternative to any Tacelene triazine grade where equivalent or higher performance is desired.",
      },
      {
        question:
          "Why switch from Tacelene to Vasudev?",
        answer:
          "Factory-direct pricing from an ISO 9001:2015 certified Indian manufacturer — no branded product premium. Guaranteed 78% active concentration on every batch. CIF delivery worldwide. Many buyers switch from branded triazine products to direct manufacturer supply to reduce procurement costs by 15–30% without compromising quality.",
      },
    ],
  },

  /* ── 18. Nipacide BK ────────────────────────────────────────── */
  "nipacide-bk": {
    slug: "nipacide-bk",
    competitorBrand: "Nipacide BK",
    competitorCompany: "Clariant (formerly Zeneca)",
    competitorOrigin: "Europe",
    title:
      "MEA Triazine 78% vs Nipacide BK (Clariant) — Biocide Alternative Comparison",
    description:
      "Looking for a Nipacide BK alternative? Vasudev MEA Triazine 78% is the same CAS 4719-04-4 chemistry at factory-direct pricing — without multinational brand premiums.",
    keywords: [
      "Nipacide BK alternative",
      "Nipacide BK equivalent",
      "Nipacide BK replacement",
      "nipacide bk biocide substitute",
      "Clariant triazine biocide",
      "nipacide bk",
      "Nipacide BK CAS 4719-04-4",
      "triazine biocide alternative to Nipacide",
      "formaldehyde releasing biocide alternative",
    ],
    h1: "MEA Triazine 78% as Alternative to Nipacide BK (Clariant)",
    intro:
      "Nipacide BK from Clariant (originally developed by Zeneca) is a widely specified hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine biocide (CAS 4719-04-4) used in metalworking fluids, water treatment, paints, coatings, and industrial preservation. Vasudev Chemo Pharma manufactures the identical chemistry at 78% active concentration from an ISO 9001:2015 certified facility — offering a cost-effective factory-direct alternative to this multinational brand.",
    comparisonRows: [
      {
        feature: "Active Chemistry",
        vasudev: "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4)",
        competitor: "Same CAS 4719-04-4 chemistry",
      },
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "~78% active (verify on product TDS)",
      },
      {
        feature: "Pricing",
        vasudev: "Factory-direct pricing — no multinational brand premium",
        competitor: "Multinational brand pricing with distribution margin",
      },
      {
        feature: "Manufacturing",
        vasudev: "ISO 9001:2015 certified facility in India",
        competitor: "Clariant manufacturing/distribution network",
      },
      {
        feature: "Supply Chain",
        vasudev: "Direct from manufacturer — shorter, transparent",
        competitor: "Through Clariant distribution — multiple intermediaries",
      },
      {
        feature: "Documentation",
        vasudev: "Manufacturer CoA, TDS, MSDS/SDS — GHS compliant",
        competitor: "Clariant product documentation",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic India)",
        competitor: "Distributor-dependent minimums",
      },
    ],
    advantages: [
      "Same CAS 4719-04-4 chemistry — drop-in replacement for Nipacide BK",
      "Factory-direct pricing — typically 20–40% lower than multinational brand pricing",
      "ISO 9001:2015 certified manufacturing with batch Certificate of Analysis",
      "No distributor intermediaries — direct supply relationship",
      "78% guaranteed active concentration — match or exceed Nipacide BK spec",
      "Free samples for qualification testing before switching",
    ],
    markets: [
      "Metalworking fluids — cutting oil preservation (current Nipacide BK users)",
      "Water treatment — cooling towers, recirculating systems",
      "Industrial preservation — paints, coatings, adhesives, inks",
      "Any application currently specifying Nipacide BK by name",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% a drop-in replacement for Nipacide BK?",
        answer:
          "Yes. Both products are hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine at CAS 4719-04-4. The active chemistry is identical. Vasudev guarantees 78% active concentration — matching the Nipacide BK specification. The product can be used in the same applications at the same dosing rates.",
      },
      {
        question:
          "Why is Vasudev priced lower than Nipacide BK?",
        answer:
          "Nipacide BK is sold through Clariant's multinational distribution network, with brand premium and multiple distribution margins built into the price. Vasudev Chemo Pharma is a direct manufacturer — you buy the same chemistry without brand markup or distribution chain costs. Typical savings are 20–40% compared to Nipacide BK pricing.",
      },
      {
        question:
          "Will my formulation approval be affected if I switch from Nipacide BK?",
        answer:
          "Since both products share the same CAS number (4719-04-4) and active chemistry, switching typically does not require reformulation. However, if your product is approved with Nipacide BK listed by brand name, you may need to update your specification to reference the chemical name or CAS number instead. We provide comprehensive technical documentation to support this transition.",
      },
      {
        question:
          "Can Vasudev supply the same volumes as Clariant for industrial biocide use?",
        answer:
          "Yes. Our production facility in Ankleshwar, Gujarat has capacity to supply industrial biocide volumes for water treatment, metalworking, and preservation markets. We offer packaging from 220L drums to ISO tanks and bulk tanker delivery for high-volume requirements.",
      },
    ],
  },

  /* ── 19. Kwantum India ──────────────────────────────────────── */
  "kwantum-india": {
    slug: "kwantum-india",
    competitorBrand: "Kwantum MEA Triazine",
    competitorCompany: "Kwantum India",
    competitorOrigin: "India",
    title:
      "MEA Triazine 78% vs Kwantum India — Manufacturer Comparison",
    description:
      "Searching for MEA Triazine by Kwantum India? Compare with Vasudev MEA Triazine 78% — ISO 9001:2015 certified, guaranteed concentration, factory-direct pricing from Gujarat.",
    keywords: [
      "mea triazine by kwantum india",
      "kwantum india triazine alternative",
      "kwantum india h2s scavenger replacement",
      "kwantum mea triazine",
      "kwantum india chemical",
      "kwantum triazine equivalent",
    ],
    h1: "MEA Triazine 78% vs Kwantum India — Direct Comparison",
    intro:
      "Kwantum India supplies MEA Triazine for H2S scavenging and industrial applications. Vasudev Chemo Pharma is an ISO 9001:2015 certified manufacturer offering MEA Triazine at a guaranteed 78% active concentration with export capability to 60+ countries — providing a quality-assured, factory-direct alternative.",
    comparisonRows: [
      {
        feature: "Active Concentration",
        vasudev: "78% (w/w) — guaranteed by batch CoA",
        competitor: "Verify concentration on supplier CoA",
      },
      {
        feature: "Manufacturing Certification",
        vasudev: "ISO 9001:2015 certified production facility",
        competitor: "Certification details on request",
      },
      {
        feature: "Export Capability",
        vasudev: "60+ countries, CIF delivery worldwide",
        competitor: "Market coverage varies",
      },
      {
        feature: "Documentation",
        vasudev: "CoA, TDS, MSDS/SDS — GHS compliant",
        competitor: "Available on request",
      },
      {
        feature: "Packaging",
        vasudev: "220L drums, IBC 1000L, ISO tank, bulk tanker",
        competitor: "Standard options",
      },
      {
        feature: "MOQ",
        vasudev: "1 MT (export), 220 Kg (domestic)",
        competitor: "Contact for details",
      },
      {
        feature: "Quality Assurance",
        vasudev: "ISO 9001:2015 certified, batch-specific CoA",
        competitor: "Internal QA",
      },
    ],
    advantages: [
      "Guaranteed 78% active concentration on every batch",
      "ISO 9001:2015 certified manufacturing in Ankleshwar, Gujarat",
      "Export-proven to 60+ countries with international documentation",
      "Factory-direct pricing — no intermediary markup",
      "Comprehensive documentation (CoA, TDS, MSDS) with every shipment",
      "Free samples for qualification testing",
    ],
    markets: [
      "India — domestic oil and gas, water treatment",
      "Middle East and GCC",
      "International buyers comparing Indian manufacturers",
    ],
    lastReviewed: "2026-04-04",
    faqs: [
      {
        question:
          "Is Vasudev MEA Triazine 78% equivalent to Kwantum India MEA Triazine?",
        answer:
          "Both products are monoethanolamine triazine (CAS 4719-04-4). Vasudev guarantees 78% active concentration on every batch CoA. Verify the specific concentration from Kwantum to confirm equivalence.",
      },
      {
        question:
          "Why choose Vasudev over Kwantum India?",
        answer:
          "Vasudev Chemo Pharma offers ISO 9001:2015 certified manufacturing, guaranteed 78% concentration, and proven export to 60+ countries. Our dedicated production facility and factory-direct pricing provide both quality assurance and cost advantage.",
      },
      {
        question:
          "Can I get samples before switching?",
        answer:
          "Yes. We provide free samples for laboratory and field testing so you can verify quality and performance before committing to a purchase order.",
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
