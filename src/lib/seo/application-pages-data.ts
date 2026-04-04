/* ── Application pages data for MEA Triazine 78% use-case pages ─── */

export type ApplicationPageData = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: { heading: string; id: string; body: string }[];
  specs: { label: string; value: string }[];
  benefits: string[];
  relatedCountries: { name: string; slug: string }[];
  faqs: { question: string; answer: string }[];
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
  "how MEA Triazine is used in field applications",
  "Hydrogen Sulfide Scavenger application guide",
  "Gas sweetener application examples",
  "triazine biocide terminology",
  "MEA Triazine CAS 4719-04-4 explanation",
  "what is hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
  "MEA Triazine TDS vs SDS",
  "where to use MEA Triazine 78%",
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
  "request MEA Triazine quote",
  "request MEA Triazine TDS and SDS",
  "request MEA Triazine sample",
  "Gas sweetening chemical supplier",
  "Mercaptan scavenger supplier",
  "Industrial biocide supplier",
  "Cutting fluid preservative supplier",
  "Paper mill slimicide supplier",
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

function buildApplicationSearchLanguageSection(page: ApplicationPageData) {
  const applicationLabel = page.h1.replace(/\s+with MEA Triazine 78%$/i, "").trim();

  return {
    heading: "Search Language, Chemical Names, and Buying Terms",
    id: "search-language-buying-terms",
    body: `Buyers and technical teams often search ${applicationLabel.toLowerCase()} using a mix of chemical identity, functional terminology, and commercial procurement phrases. Some users ask for MEA Triazine by its full chemistry name, others search for hydrogen sulfide scavenger, gas sweetener, desulfurizer, mercaptan scavenger, or even preservation-oriented terms that overlap with triazine chemistry in other markets.

Common chemical name searches: ${COMMON_MEATRIAZINE_CHEMICAL_NAMES.join("; ")}.

Common functional and application terms: ${COMMON_FUNCTIONAL_TERMS.join("; ")}.

Market and brand reference terms sometimes used in search or comparison: ${COMMON_BRAND_REFERENCES.join("; ")}.

Informational-intent searches: ${COMMON_INFORMATIONAL_INTENT.join("; ")}.

Buying-intent searches: ${COMMON_BUYING_INTENT.join("; ")}.

The key commercial point is that similar search terms do not always mean identical application fit. In oil and gas, MEA Triazine 78% is commonly selected as a direct H2S scavenger and gas sweetening chemical. In other industrial settings, related terms may appear in preservation, slimicide, or cutting-fluid contexts. Matching the chemical name, CAS number, concentration, end use, and required documents is the best way to select the right application and supplier.`,
  };
}

function enrichApplicationPage(page: ApplicationPageData): ApplicationPageData {
  return {
    ...page,
    keywords: dedupeKeywords([
      ...page.keywords,
      ...COMMON_MEATRIAZINE_CHEMICAL_NAMES,
      ...COMMON_FUNCTIONAL_TERMS,
      ...COMMON_BRAND_REFERENCES,
      ...COMMON_INFORMATIONAL_INTENT,
      ...COMMON_BUYING_INTENT,
      `${page.h1} supplier`,
      `${page.h1} manufacturer`,
      `${page.h1} quote`,
      `${page.h1} application guide`,
    ]),
    sections: [...page.sections, buildApplicationSearchLanguageSection(page)],
  };
}

const RAW_APPLICATION_PAGES_DATA: Record<string, ApplicationPageData> = {
  /* ----------------------------------------------------------------
   * 1. H2S Scavenging in Natural Gas Pipelines
   * -------------------------------------------------------------- */
  "h2s-scavenging-natural-gas": {
    slug: "h2s-scavenging-natural-gas",
    title: "H2S Scavenging in Natural Gas Pipelines — MEA Triazine 78%",
    description:
      "Learn how MEA Triazine 78% removes hydrogen sulfide (H2S) from natural gas pipelines. Irreversible reaction chemistry, dosing methods, and field applications from Vasudev Chemo Pharma.",
    keywords: [
      "H2S scavenging natural gas",
      "MEA Triazine natural gas pipeline",
      "hydrogen sulfide removal gas",
      "H2S scavenger gas processing",
      "triazine H2S reaction chemistry",
      "dithiazine formation",
      "gas sweetening chemical",
      "liquid H2S scavenger",
    ],
    h1: "H2S Scavenging in Natural Gas Pipelines with MEA Triazine 78%",
    intro:
      "Hydrogen sulfide (H2S) in natural gas is a critical safety, corrosion, and compliance concern throughout the upstream and midstream value chain. MEA Triazine 78% is the industry-standard liquid scavenger for continuous H2S removal — it reacts irreversibly with H2S to form water-soluble dithiazine, eliminating the need for regeneration. Vasudev Chemo Pharma manufactures MEA Triazine at 78% active concentration for direct supply to gas fields, gathering systems, and processing plants worldwide.",
    sections: [
      {
        heading: "The H2S Problem in Natural Gas",
        id: "h2s-problem",
        body: `Natural gas reservoirs frequently contain hydrogen sulfide at concentrations ranging from tens of ppm to several percent. H2S is acutely toxic — OSHA sets the permissible exposure limit at 20 ppm, and concentrations above 100 ppm are immediately dangerous to life. Beyond personnel safety, H2S causes sulfide stress cracking in carbon steel pipelines, corrodes wellhead equipment, poisons amine systems, and contaminates gas products below pipeline sales-gas specifications (typically < 4 ppm H2S).

Sour gas fields including the Permian Basin, Shah gas field (Abu Dhabi), North Field (Qatar), and South Pars (Iran) produce gas with substantial H2S content that must be treated before transport or sale. Without effective scavenging, operators face regulatory penalties, equipment failures, and unplanned shutdowns costing millions per incident.`,
      },
      {
        heading: "How MEA Triazine Removes H2S",
        id: "reaction-chemistry",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine, CAS 4719-04-4) reacts with hydrogen sulfide in an irreversible, non-regenerable reaction. The triazine ring opens and reacts with H2S to form dithiazine — a water-soluble, non-toxic by-product that remains in the aqueous phase and is easily disposed of.

The stoichiometry requires approximately 4.5 litres of MEA Triazine 78% per kilogram of H2S removed. The reaction is fast at typical gas system temperatures (20-80 degrees C) and effective across a wide pressure range. At 78% active concentration, our product delivers maximum scavenging capacity per unit volume, reducing logistics costs and chemical consumption compared to lower-concentration alternatives.

Unlike amine-based regenerable systems, MEA Triazine requires no stripping columns, reboilers, or complex process equipment — only a chemical injection pump and a contact vessel or pipeline injection point.`,
      },
      {
        heading: "Dosing & Application Methods",
        id: "dosing-methods",
        body: `MEA Triazine 78% is injected as a liquid into gas streams using chemical dosing pumps — typically positive-displacement diaphragm or plunger pumps. The most common application methods include:

Wellhead injection: MEA Triazine is injected directly into the gas stream at the wellhead or Christmas tree. This is the earliest intervention point and protects all downstream equipment from H2S corrosion.

Gas gathering systems: Injection at gathering manifolds or pipeline junctions treats combined production from multiple wells before the gas enters processing facilities.

Gas processing plants: MEA Triazine is used in contactor towers or inline injection systems as part of the gas sweetening process, either as the primary scavenging method or as a polishing step after amine treatment.

Pipeline transport: For long-distance pipeline transport, MEA Triazine can be injected at compressor stations or pipeline entry points to maintain sales-gas H2S specifications throughout the transport route.

Dosing is controlled by gas flow rate and inlet H2S concentration, typically monitored by online H2S analysers that feed back to the chemical injection system for automatic rate adjustment.`,
      },
      {
        heading: "Advantages of MEA Triazine for Gas Operations",
        id: "advantages",
        body: `MEA Triazine 78% offers several key advantages over alternative H2S removal technologies for natural gas applications:

Non-regenerable simplicity: Unlike amine systems (MDEA, DEA), MEA Triazine requires no regeneration equipment, reducing capital expenditure and operational complexity. This makes it ideal for remote wellhead locations, smaller gathering systems, and applications where amine plant economics are not justified.

High active concentration: At 78% w/w, our product minimises the volume of chemical required per kilogram of H2S removed, reducing storage requirements, transport costs, and injection pump sizing.

Safe by-products: Dithiazine is water-soluble and non-toxic, eliminating hazardous waste disposal concerns. The spent chemical can typically be disposed of through standard produced water treatment systems.

Temperature and pressure flexibility: MEA Triazine performs effectively across the range of temperatures and pressures encountered in upstream and midstream gas operations, from wellhead conditions to processing plant environments.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Chemical name", value: "1,3,5-Tri(2-hydroxyethyl)-hexahydro-s-triazine" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Specific gravity", value: "1.10 - 1.14 at 25 °C" },
      { label: "pH (neat)", value: "9.0 - 11.0" },
      { label: "Scavenging capacity", value: "~4.5 L per kg H2S removed" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Irreversible reaction — H2S cannot re-release from dithiazine by-product",
      "No regeneration equipment required — simple liquid injection",
      "78% active concentration maximises scavenging capacity per litre",
      "Effective across typical gas field temperatures (20-80 °C) and pressures",
      "Water-soluble, non-toxic by-products — no hazardous waste",
      "ISO 9001:2015 certified manufacturer — COA, TDS, MSDS on every shipment",
    ],
    relatedCountries: [
      { name: "United States (Permian Basin)", slug: "usa" },
      { name: "UAE (Shah Gas Field)", slug: "uae" },
      { name: "Qatar (North Field)", slug: "qatar" },
      { name: "Iran (South Pars)", slug: "iran" },
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "Kuwait", slug: "kuwait" },
    ],
    faqs: [
      {
        question: "How much MEA Triazine 78% is needed to remove 1 kg of H2S from natural gas?",
        answer:
          "Approximately 4.5 litres of MEA Triazine 78% is required to scavenge 1 kilogram of H2S. The exact consumption depends on contact efficiency, gas temperature, and system design. Our technical team can help you calculate the optimal dosage for your specific gas composition and flow rate.",
      },
      {
        question: "Can MEA Triazine be used in high-pressure sour gas pipelines?",
        answer:
          "Yes. MEA Triazine 78% is effective across the pressure ranges typically encountered in natural gas pipelines and processing systems. The reaction with H2S proceeds efficiently under both low-pressure gathering conditions and high-pressure transmission pipeline conditions.",
      },
      {
        question: "What happens to the spent MEA Triazine after it reacts with H2S?",
        answer:
          "MEA Triazine reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product. The spent chemical partitions into the aqueous phase and is typically removed through standard produced water separation and treatment systems. There is no regeneration step required.",
      },
      {
        question: "Is MEA Triazine better than amine scrubbing for H2S removal?",
        answer:
          "They serve different scales. Amine systems (MDEA, DEA) are regenerable and economical for large-volume, high-H2S gas processing plants. MEA Triazine is preferred for wellhead injection, smaller gathering systems, pipeline polishing, and locations where the capital cost of amine regeneration equipment is not justified. Many operators use both — amine for bulk removal and MEA Triazine for polishing to meet pipeline specifications.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 2. Crude Oil Sweetening
   * -------------------------------------------------------------- */
  "crude-oil-sweetening": {
    slug: "crude-oil-sweetening",
    title: "Crude Oil Sweetening with MEA Triazine 78%",
    description:
      "MEA Triazine 78% for sour crude oil sweetening. Removes H2S from crude oil at wellbore, pipeline, tank farm, and refinery operations. Manufacturer direct from India.",
    keywords: [
      "crude oil sweetening",
      "MEA Triazine crude oil",
      "sour crude H2S removal",
      "hydrogen sulfide crude oil treatment",
      "oil sweetening chemical",
      "H2S scavenger crude oil",
      "tank farm degassing",
      "pipeline sweetening",
    ],
    h1: "Crude Oil Sweetening with MEA Triazine 78%",
    intro:
      "Sour crude oil containing dissolved hydrogen sulfide poses serious safety, corrosion, and quality challenges throughout the production and refining chain. MEA Triazine 78% is the proven liquid scavenger for removing H2S from crude oil — from wellbore treatment through pipeline transport to tank farm operations. Vasudev Chemo Pharma manufactures and exports MEA Triazine 78% directly to oil producers and refiners across the Middle East, Asia, and globally.",
    sections: [
      {
        heading: "The Sour Crude Oil Challenge",
        id: "sour-crude-challenge",
        body: `Crude oil produced from many of the world's major reservoirs contains dissolved hydrogen sulfide, making it "sour." H2S concentrations in crude can range from tens to thousands of ppm, depending on reservoir geology and production conditions. Major sour crude producing regions include Saudi Arabia (Arab Heavy, Arab Medium), Kuwait (Kuwait Export Crude), Iran (Iranian Heavy), Iraq, and parts of the Permian Basin.

Sour crude creates multiple operational problems: toxic gas exposure risk during tank gauging, sampling, and maintenance; aggressive corrosion of carbon steel storage tanks, pipelines, and processing equipment; failure to meet crude sales specifications for H2S content; and environmental compliance issues at loading terminals and refineries. Crude oil with H2S above specification is subject to price penalties, rejected loads, and shipping restrictions.`,
      },
      {
        heading: "How MEA Triazine Sweetens Crude Oil",
        id: "how-it-works",
        body: `MEA Triazine 78% is injected into the crude oil stream where it reacts irreversibly with dissolved H2S to form dithiazine. The reaction occurs in the aqueous phase — MEA Triazine is water-soluble and mixes with the produced water naturally present in crude oil. The dithiazine by-product remains dissolved in the water phase and is removed during standard oil-water separation.

The key application points for crude oil sweetening include:

Wellbore treatment: Chemical injection downhole or at the wellhead treats H2S at the source, protecting all downstream infrastructure from sour corrosion.

Pipeline sweetening: Injection at pipeline entry points or pump stations maintains H2S below specification during transport from production facilities to terminals or refineries.

Tank farm degassing: MEA Triazine is added to sour crude in storage tanks to reduce vapour-phase H2S concentrations, improving safety during tank maintenance, gauging, and loading operations.

Refinery off-gas: MEA Triazine can be used for off-gas treatment at refineries, scavenging H2S from crude distillation overhead systems and other refinery process streams.`,
      },
      {
        heading: "Dosing and Field Application",
        id: "dosing-application",
        body: `MEA Triazine 78% is injected using standard chemical dosing pumps — positive-displacement diaphragm or plunger pumps rated for oilfield service. The chemical is typically injected upstream of a mixing device (static mixer, choke, or pump) to ensure thorough contact with the crude oil.

Dosage is determined by the crude oil flow rate and H2S concentration. As a guideline, approximately 4.5 litres of MEA Triazine 78% is needed per kilogram of H2S removed. For crude oils with very high H2S content, a contact vessel (scrubber or sparging column) may be used to increase contact time and improve scavenging efficiency.

Operators in Saudi Aramco, Kuwait Oil Company (KOC), and National Iranian Oil Company (NIOC) operations routinely use triazine-based H2S scavengers for crude oil sweetening. The treatment is well-established, field-proven, and accepted by major oil companies worldwide.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Specific gravity", value: "1.10 - 1.14 at 25 °C" },
      { label: "pH (neat)", value: "9.0 - 11.0" },
      { label: "Flash point", value: "> 100 °C (closed cup)" },
      { label: "Solubility", value: "Fully miscible with water" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Removes dissolved H2S from crude oil irreversibly — no re-release risk",
      "Simple liquid injection — no complex process equipment required",
      "Protects pipelines, tanks, and equipment from sulfide corrosion",
      "Helps meet crude sales specifications and avoid price penalties",
      "Water-soluble by-products removed during standard oil-water separation",
      "Direct manufacturer supply with ISO 9001:2015 certification",
    ],
    relatedCountries: [
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "Kuwait", slug: "kuwait" },
      { name: "Iran", slug: "iran" },
      { name: "Iraq", slug: "iraq" },
      { name: "UAE", slug: "uae" },
      { name: "United States", slug: "usa" },
    ],
    faqs: [
      {
        question: "At what H2S levels is MEA Triazine used for crude oil sweetening?",
        answer:
          "MEA Triazine is effective for crude oils with H2S concentrations from tens of ppm to several thousand ppm. For very high H2S crude (above 5,000 ppm), a contact vessel is recommended to improve reaction efficiency. Our technical team can help you size the treatment system for your specific crude characteristics.",
      },
      {
        question: "Does MEA Triazine affect crude oil quality or refining properties?",
        answer:
          "No. MEA Triazine reacts specifically with H2S and does not affect crude oil properties such as API gravity, viscosity, or distillation characteristics. The dithiazine by-product partitions into the water phase and is removed during normal oil-water separation, so it does not enter the refining process.",
      },
      {
        question: "Can MEA Triazine be used in high-temperature crude oil applications?",
        answer:
          "Yes. MEA Triazine is effective at temperatures up to approximately 80 °C, which covers most crude oil production and storage conditions. At higher temperatures, the reaction rate increases, which can improve scavenging efficiency. For extreme-temperature applications, contact our technical team for guidance.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 3. Biogas H2S Removal
   * -------------------------------------------------------------- */
  "biogas-h2s-removal": {
    slug: "biogas-h2s-removal",
    title: "Biogas H2S Removal with MEA Triazine",
    description:
      "Remove H2S from biogas using MEA Triazine 78%. Effective for landfill gas, WWTP digesters, agricultural biogas, and food waste biogas. No media change-out required.",
    keywords: [
      "biogas H2S removal",
      "MEA Triazine biogas",
      "hydrogen sulfide biogas treatment",
      "landfill gas H2S scavenger",
      "biogas purification",
      "anaerobic digester H2S",
      "biogas upgrading chemical",
      "agricultural biogas treatment",
    ],
    h1: "Biogas H2S Removal with MEA Triazine 78%",
    intro:
      "Biogas produced from anaerobic digestion typically contains 100 to 10,000 ppm hydrogen sulfide — far above the limits for engine combustion, grid injection, or CNG vehicle use. MEA Triazine 78% provides a simple, liquid-injection solution for biogas H2S removal without the operational burden of solid media change-outs. Vasudev Chemo Pharma supplies MEA Triazine to biogas facilities across Asia, the Middle East, and globally.",
    sections: [
      {
        heading: "H2S in Biogas: Sources and Impacts",
        id: "h2s-in-biogas",
        body: `Biogas from anaerobic digestion contains hydrogen sulfide produced by sulfate-reducing bacteria that break down sulfur-containing organic matter. The H2S concentration varies widely depending on the feedstock: municipal wastewater sludge digesters typically produce 100-3,000 ppm H2S; landfill gas contains 50-500 ppm; agricultural biogas from livestock manure ranges from 500-5,000 ppm; and certain industrial feedstocks like palm oil mill effluent (POME) and cassava starch wastewater in Thailand can produce biogas with 3,000-10,000 ppm H2S.

Untreated H2S in biogas causes rapid corrosion of engines, turbines, and boilers; produces toxic sulfur dioxide (SO2) upon combustion; damages biogas upgrading membranes and catalysts; and fails to meet grid injection or vehicle fuel quality standards. Most biogas utilisation equipment requires H2S below 200 ppm, and grid-quality biomethane specifications typically demand below 5 ppm.`,
      },
      {
        heading: "MEA Triazine for Biogas Treatment",
        id: "mea-triazine-biogas",
        body: `MEA Triazine 78% is injected into the biogas stream as a liquid, where it reacts irreversibly with H2S to form dithiazine. The reaction is fast and efficient, capable of reducing H2S from thousands of ppm to below engine or grid specifications in a single treatment stage.

For biogas applications, MEA Triazine is typically used in one of two configurations:

Scrubbing tower: Biogas flows upward through a packed column while MEA Triazine solution is sprayed downward, providing counter-current gas-liquid contact. This is the most efficient configuration for high-flow, high-H2S biogas.

Inline injection: For smaller biogas systems, MEA Triazine can be injected directly into the biogas pipeline upstream of a static mixer or contact vessel. The spent liquid is collected in a knockout drum downstream.

Both methods are straightforward to install and operate, requiring only a chemical dosing pump, storage tank, and contact device — no thermal regeneration, no solid media beds, and no complex process controls.`,
      },
      {
        heading: "Advantages Over Iron Sponge and Other Methods",
        id: "advantages-over-alternatives",
        body: `The traditional approach to biogas H2S removal uses iron sponge (iron oxide on wood chips) or iron-impregnated media beds. While effective, these solid media systems have significant operational drawbacks that MEA Triazine avoids:

No media change-out: Iron sponge beds require periodic replacement of spent media — a labour-intensive, messy operation that generates large volumes of waste. Spent iron sponge can be pyrophoric (self-igniting) and requires careful handling. MEA Triazine is a liquid that is continuously injected, eliminating media change-out entirely.

Consistent performance: Iron sponge performance degrades as the media becomes spent, requiring operators to monitor breakthrough carefully. MEA Triazine provides consistent H2S removal as long as the injection rate matches the H2S load.

Lower labour requirements: Liquid chemical injection systems are largely automated — a dosing pump, level sensor, and H2S analyser provide hands-off operation. Iron sponge systems require regular manual inspection, media testing, and change-out scheduling.

Compact footprint: A triazine injection system takes a fraction of the space required by iron sponge vessels, an important consideration for biogas plants with limited site area.

Applications served include landfill gas-to-energy facilities, wastewater treatment plant (WWTP) digesters, agricultural biogas plants (palm oil, cassava, livestock in Thailand and Southeast Asia), and food waste biogas facilities.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Effective H2S range", value: "100 - 10,000+ ppm inlet" },
      { label: "Achievable outlet", value: "< 5 ppm (with proper design)" },
      { label: "Operating temperature", value: "10 - 60 °C typical for biogas" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Liquid injection — no solid media change-out or pyrophoric waste",
      "Effective across 100 to 10,000+ ppm inlet H2S concentrations",
      "Achieves < 5 ppm outlet for grid-quality biomethane",
      "Simple, automated operation — low labour requirements",
      "Compact footprint compared to iron sponge vessels",
      "Non-toxic, water-soluble by-products (dithiazine)",
    ],
    relatedCountries: [
      { name: "Thailand", slug: "thailand" },
      { name: "Vietnam", slug: "vietnam" },
      { name: "Brazil", slug: "brazil" },
      { name: "UAE", slug: "uae" },
      { name: "Qatar", slug: "qatar" },
    ],
    faqs: [
      {
        question: "Can MEA Triazine replace iron sponge for biogas H2S removal?",
        answer:
          "Yes. MEA Triazine 78% is a liquid alternative to iron sponge that eliminates solid media change-outs, reduces labour, and provides more consistent H2S removal performance. It is particularly advantageous for biogas plants that want to avoid the handling and disposal challenges of spent iron sponge media.",
      },
      {
        question: "What biogas H2S concentration can MEA Triazine handle?",
        answer:
          "MEA Triazine 78% is effective for biogas with H2S concentrations from 100 ppm up to 10,000 ppm or more. For very high H2S biogas (such as from palm oil or cassava digestion), a properly designed scrubbing tower provides sufficient contact for effective removal to below engine or grid specifications.",
      },
      {
        question: "Is MEA Triazine suitable for biomethane grid injection quality?",
        answer:
          "Yes. With proper system design (counter-current scrubbing tower and adequate dosing), MEA Triazine can reduce biogas H2S to below 5 ppm, meeting the requirements for grid injection and vehicle fuel (CNG/CBG) quality standards in most jurisdictions.",
      },
      {
        question: "How is spent MEA Triazine from biogas treatment disposed of?",
        answer:
          "The spent chemical (containing dithiazine) is water-soluble and non-toxic. It can typically be disposed of through the biogas plant's existing wastewater treatment system or sent to a licensed liquid waste facility. Unlike spent iron sponge, there is no pyrophoric waste or special solid waste handling requirement.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 4. Water Treatment Biocide
   * -------------------------------------------------------------- */
  "water-treatment-biocide": {
    slug: "water-treatment-biocide",
    title: "MEA Triazine as Industrial Biocide for Water Treatment",
    description:
      "MEA Triazine 78% as a formaldehyde-releasing biocide for industrial water treatment. Cooling towers, produced water, oil-water separators. Manufacturer supply from India.",
    keywords: [
      "MEA Triazine biocide",
      "water treatment biocide",
      "formaldehyde releasing biocide",
      "cooling tower biocide",
      "produced water biocide",
      "industrial biocide manufacturer",
      "triazine microbial control",
      "oilfield water treatment chemical",
      "water based biocide",
      "water based biocide manufacturer India",
      "biocide used as h2s scavenger",
    ],
    h1: "MEA Triazine as Industrial Biocide for Water Treatment",
    intro:
      "Beyond H2S scavenging, MEA Triazine 78% functions as an effective formaldehyde-releasing biocide for microbial control in industrial water systems. It provides broad-spectrum antimicrobial activity against bacteria, fungi, and algae in cooling towers, produced water systems, oil-water separators, and other industrial water circuits. Vasudev Chemo Pharma manufactures MEA Triazine 78% for both H2S scavenging and biocide applications.",
    sections: [
      {
        heading: "Microbial Problems in Industrial Water Systems",
        id: "microbial-problems",
        body: `Industrial water systems provide ideal conditions for microbial growth — warm temperatures, dissolved nutrients, and large surface areas for biofilm attachment. Uncontrolled microbial contamination causes a range of costly problems:

Cooling towers suffer from Legionella risk, biofilm fouling that reduces heat transfer efficiency, and microbiologically influenced corrosion (MIC) of metal surfaces. Produced water from oil and gas operations harbours sulfate-reducing bacteria (SRB) that generate H2S, causing pipeline souring and corrosion. Oil-water separators develop bacterial mats that impair separation efficiency and cause odour problems.

Effective biocide treatment is essential to control these microbial populations, protect equipment, maintain process efficiency, and comply with health and safety regulations — including Legionella risk management requirements for cooling systems.`,
      },
      {
        heading: "How MEA Triazine Works as a Biocide",
        id: "biocide-mechanism",
        body: `MEA Triazine belongs to the class of formaldehyde-releasing biocides. In aqueous solution, the triazine ring slowly hydrolyses to release formaldehyde at controlled, low concentrations. This sustained-release mechanism provides several advantages over dosing free formaldehyde:

The controlled release maintains effective antimicrobial concentrations over an extended period, reducing dosing frequency. The handling and storage of MEA Triazine is significantly safer than handling free formaldehyde. The slow release avoids the sharp concentration spikes associated with direct formaldehyde dosing, which can cause compatibility issues with other treatment chemicals.

MEA Triazine provides broad-spectrum activity against bacteria (including SRB and Legionella), fungi, and algae. It is effective in both planktonic (free-floating) populations and against established biofilms when used at appropriate concentrations.

The product is compatible with common water treatment programmes including corrosion inhibitors, scale inhibitors, and dispersants. It does not cause foaming or interfere with oil-water separation in produced water systems.`,
      },
      {
        heading: "Application Methods and Dosing",
        id: "application-dosing",
        body: `MEA Triazine biocide is dosed into water systems using standard chemical metering pumps. Typical applications and dosing guidelines include:

Cooling towers: 50-200 ppm active product, dosed on a slug or continuous basis depending on system volume and microbial challenge. Regular microbiological monitoring (dip slides or ATP testing) guides dosing frequency and concentration.

Produced water treatment: 100-500 ppm for control of SRB and other oilfield bacteria. Dosed at the produced water handling facility, upstream of water disposal or reinjection wells.

Oil-water separators: 50-150 ppm to prevent bacterial mat formation and maintain separation efficiency. Typically dosed into the separator inlet.

Once-through cooling systems: 5-20 ppm continuous dosing to maintain microbial control throughout the system.

All dosing should comply with applicable EPA registration requirements and local regulatory guidelines for biocide use in industrial water systems. Material Safety Data Sheets and dosing recommendations are provided with every shipment.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Biocide class", value: "Formaldehyde-releasing" },
      { label: "Spectrum", value: "Bacteria, fungi, algae (broad-spectrum)" },
      { label: "pH range", value: "Effective pH 6.0 - 10.0" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Broad-spectrum antimicrobial activity — bacteria, fungi, and algae",
      "Controlled formaldehyde release — safer handling than free formaldehyde",
      "Effective against SRB and Legionella species",
      "Compatible with common water treatment chemical programmes",
      "Long-lasting protection — sustained-release reduces dosing frequency",
      "ISO 9001:2015 certified — full documentation (COA, TDS, MSDS)",
    ],
    relatedCountries: [
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "UAE", slug: "uae" },
      { name: "Kuwait", slug: "kuwait" },
      { name: "Qatar", slug: "qatar" },
      { name: "Oman", slug: "oman" },
      { name: "United States", slug: "usa" },
    ],
    faqs: [
      {
        question: "Is MEA Triazine registered as a biocide?",
        answer:
          "MEA Triazine is classified as a formaldehyde-releasing biocide. Registration requirements vary by jurisdiction — in the US, formaldehyde-releasing biocides are registered under EPA regulations. We provide full regulatory documentation and can assist with compliance requirements for your specific market.",
      },
      {
        question: "Can MEA Triazine control sulfate-reducing bacteria (SRB) in oilfield water?",
        answer:
          "Yes. MEA Triazine is effective against SRB at dosages of 100-500 ppm in produced water systems. SRB are a primary cause of pipeline souring and microbiologically influenced corrosion in oilfield water handling systems. Regular biocide treatment with MEA Triazine helps control SRB populations and reduce associated H2S generation.",
      },
      {
        question: "How does MEA Triazine compare to glutaraldehyde as a water treatment biocide?",
        answer:
          "Both are effective industrial biocides. MEA Triazine offers advantages in sustained-release activity (longer protection between doses) and is generally less expensive. Glutaraldehyde provides faster kill kinetics and is often preferred for shock treatment. Some operators use both in rotation to prevent microbial resistance development.",
      },
      {
        question: "What is the shelf life of MEA Triazine used as a biocide?",
        answer:
          "MEA Triazine 78% has a shelf life of 12 months when stored in sealed containers at temperatures between 5-40 °C. Avoid freezing and prolonged exposure to temperatures above 50 °C. The product should be stored in a cool, dry, well-ventilated area away from direct sunlight.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 5. Metalworking Fluid Preservative
   * -------------------------------------------------------------- */
  "metalworking-fluid-preservative": {
    slug: "metalworking-fluid-preservative",
    title: "MEA Triazine Preservative for Metalworking Fluids",
    description:
      "MEA Triazine 78% as a biocide preservative for metalworking fluids. Prevents bacterial and fungal degradation of water-miscible cutting fluids, grinding fluids, and coolants.",
    keywords: [
      "metalworking fluid preservative",
      "MEA Triazine cutting fluid biocide",
      "MWF biocide triazine",
      "metalworking fluid bacteria control",
      "cutting fluid preservative",
      "Grotan BK alternative",
      "CNC coolant biocide",
      "grinding fluid preservative",
      "biocides for metalworking fluids",
      "metalworking biocide manufacturer India",
    ],
    h1: "MEA Triazine Preservative for Metalworking Fluids",
    intro:
      "Water-miscible metalworking fluids are highly susceptible to microbial degradation — bacteria and fungi break down fluid components, causing rancid odours, reduced performance, health risks, and premature sump disposal. MEA Triazine 78% is a proven formaldehyde-releasing biocide that preserves cutting fluids, grinding coolants, and other water-based metalworking fluids at typical dosages of 500-2,000 ppm. Vasudev Chemo Pharma manufactures this product as a cost-effective alternative to branded preservatives like Grotan BK.",
    sections: [
      {
        heading: "Microbial Degradation of Metalworking Fluids",
        id: "microbial-degradation",
        body: `Water-miscible metalworking fluids (MWFs) — including soluble oils, semi-synthetics, and full synthetics — contain organic components (oils, emulsifiers, corrosion inhibitors, lubricity additives) that serve as nutrients for microorganisms. Warm sump temperatures (25-40 °C), continuous aeration from machining operations, and contamination from operators, tramp oil, and swarf create ideal conditions for microbial proliferation.

Bacterial contamination typically manifests as a "Monday morning smell" — hydrogen sulfide and other malodorous metabolites produced by anaerobic bacteria that thrive over weekend shutdown periods. Fungal contamination appears as slimy mats on sump surfaces, machine surfaces, and fluid lines. Both bacterial and fungal contamination degrade fluid performance, reduce pH, break emulsion stability, increase corrosion risk on workpieces and machines, and create health hazards including occupational dermatitis and respiratory sensitisation.

Uncontrolled microbial growth shortens sump life from months to weeks, dramatically increasing fluid disposal costs and environmental impact. Effective biocide treatment is the most practical approach to extending sump life and maintaining fluid quality.`,
      },
      {
        heading: "How MEA Triazine Preserves Metalworking Fluids",
        id: "preservation-mechanism",
        body: `MEA Triazine 78% is a formaldehyde-releasing biocide that hydrolyses slowly in the aqueous environment of metalworking fluids to release formaldehyde at controlled, low concentrations. This sustained-release mechanism provides continuous broad-spectrum antimicrobial protection against bacteria, fungi, and yeasts without the handling hazards of free formaldehyde.

The product is functionally equivalent to established hexahydro-triazine preservatives such as Grotan BK. It is compatible with the full range of water-miscible MWF chemistries — soluble oils, semi-synthetics, and synthetic fluids — and does not adversely affect emulsion stability, pH, corrosion protection, or machining performance.

MEA Triazine can be used both as an initial-charge biocide (added when the sump is filled with fresh fluid) and as a maintenance biocide (added periodically to replenish antimicrobial protection). This dual-use capability simplifies the fluid management programme compared to systems requiring separate tank-side and formulation biocides.`,
      },
      {
        heading: "Dosing Guidelines for Metalworking Applications",
        id: "dosing-guidelines",
        body: `Recommended dosages for MEA Triazine 78% in metalworking fluid applications:

Initial charge: 1,000-2,000 ppm (0.1-0.2% by volume) added to freshly prepared metalworking fluid before use. This establishes baseline antimicrobial protection from day one.

Maintenance dosing: 500-1,000 ppm (0.05-0.1% by volume) added at regular intervals based on microbiological monitoring. Dip slide testing weekly or biweekly is recommended to guide maintenance dosing frequency.

Rescue treatment: For sumps that have already developed significant microbial contamination, a one-time dose of 2,000-3,000 ppm may be used to bring the population under control, followed by regular maintenance dosing.

Typical metalworking operations where MEA Triazine is used include CNC machining centres, surface and cylindrical grinding, stamping and forming with water-based lubricants, and EDM (electrical discharge machining) with water-based dielectrics.

The product is added directly to the sump or central fluid system and mixes readily with the fluid. No special mixing equipment is required. For central systems, dosing via a metering pump ensures consistent treatment across all connected machines.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Biocide class", value: "Formaldehyde-releasing preservative" },
      { label: "Typical dosage", value: "500-2,000 ppm (0.05-0.2% v/v)" },
      { label: "Compatible fluids", value: "Soluble oils, semi-synthetics, synthetics" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
    ],
    benefits: [
      "Extends sump life — reduces fluid disposal frequency and cost",
      "Broad-spectrum: effective against bacteria, fungi, and yeasts",
      "Compatible with all major MWF chemistries — no emulsion issues",
      "Grotan BK equivalent at competitive pricing from Indian manufacturer",
      "Controlled formaldehyde release — safer than free formaldehyde",
      "Dual-use: suitable for both initial charge and maintenance dosing",
    ],
    relatedCountries: [
      { name: "Vietnam", slug: "vietnam" },
      { name: "Thailand", slug: "thailand" },
      { name: "UAE", slug: "uae" },
      { name: "United States", slug: "usa" },
      { name: "Brazil", slug: "brazil" },
    ],
    faqs: [
      {
        question: "What is the typical dosage of MEA Triazine for cutting fluid preservation?",
        answer:
          "For initial charge, use 1,000-2,000 ppm (0.1-0.2% by volume). For ongoing maintenance, add 500-1,000 ppm based on dip slide monitoring results. Severely contaminated sumps may require a one-time rescue dose of 2,000-3,000 ppm followed by regular maintenance treatment.",
      },
      {
        question: "Is MEA Triazine a direct replacement for Grotan BK?",
        answer:
          "Yes. MEA Triazine 78% is chemically equivalent to Grotan BK (both are hexahydro-1,3,5-triazine formaldehyde-releasing biocides). It provides the same antimicrobial mechanism and is compatible with the same range of metalworking fluid formulations. It can be used as a drop-in replacement at the same dosage levels.",
      },
      {
        question: "Will MEA Triazine affect the performance of my cutting fluid?",
        answer:
          "No. At recommended dosages (500-2,000 ppm), MEA Triazine does not affect emulsion stability, pH, corrosion protection, lubricity, or surface finish quality. It is designed to protect the fluid without interfering with its metalworking performance.",
      },
      {
        question: "How often should I add MEA Triazine to my metalworking fluid sump?",
        answer:
          "Frequency depends on your operating conditions and microbial challenge level. We recommend weekly dip slide testing and adding maintenance doses of 500-1,000 ppm when bacterial counts exceed 10^4 CFU/mL. In high-contamination environments (warm climates, heavy tramp oil), more frequent dosing may be needed.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 6. Drilling Fluids Biocide
   * -------------------------------------------------------------- */
  "drilling-fluids-biocide": {
    slug: "drilling-fluids-biocide",
    title: "MEA Triazine Biocide for Oil Drilling Fluids | Vasudev Chemo Pharma",
    description:
      "MEA Triazine 78% biocide for oil drilling fluids, drilling mud systems, and water-based drilling fluid preservation. Control SRB, odor, and fluid spoilage with manufacturer supply from India.",
    keywords: [
      "oil drilling fluids biocide",
      "drilling fluid preservative",
      "drilling mud biocide",
      "water based drilling fluid biocide",
      "SRB control drilling fluids",
      "drilling fluid bacteria control",
      "mud system biocide supplier",
      "oilfield drilling biocide manufacturer",
    ],
    h1: "MEA Triazine Biocide for Oil Drilling Fluids",
    intro:
      "Water-based drilling fluids are vulnerable to bacterial contamination that destroys rheology, generates odor, accelerates corrosion, and contributes to hydrogen sulfide formation in active mud systems. MEA Triazine 78% gives drilling contractors and mud formulators a dual-function chemistry: it works as a formaldehyde-releasing biocide for microbial control while also helping scavenge H2S generated by sulfate-reducing bacteria. Vasudev Chemo Pharma manufactures MEA Triazine 78% in India for direct supply to drilling fluid companies and oilfield service providers.",
    sections: [
      {
        heading: "Microbial Problems in Drilling Fluids",
        id: "microbial-problems",
        body: `Water-based mud systems contain starches, polymers, lubricants, and other additives that become nutrient sources for bacteria and fungi. In active drilling operations, warm mud pits, recycled water, storage tanks, and low-flow corners of the circulation system allow microbial populations to multiply quickly.

Sulfate-reducing bacteria (SRB) are especially problematic because they generate H2S in anaerobic zones of the mud system. This creates odor, increases corrosion risk in tanks and tubulars, and can contribute to safety exposure during fluid handling. Aerobic bacteria and fungi also break down viscosifiers and fluid-loss additives, causing unstable mud properties, poor hole cleaning, and higher treatment cost. Effective preservation of drilling fluids is therefore both a fluid-quality issue and a field-safety issue.`,
      },
      {
        heading: "How MEA Triazine Works in Drilling Mud Systems",
        id: "mechanism",
        body: `MEA Triazine 78% works through two complementary mechanisms. First, it acts as a formaldehyde-releasing biocide, slowly hydrolysing in the aqueous phase to maintain antimicrobial activity against bacteria, fungi, and slime-forming organisms. This helps preserve the drilling fluid package and reduces biological degradation of starch and polymer components.

Second, where SRB activity or formation contamination introduces hydrogen sulfide into the mud system, the same triazine chemistry reacts irreversibly with H2S to form water-soluble dithiazine. This makes the product particularly useful in drilling environments where microbial control and H2S control overlap. The chemistry is fully water-soluble and easy to meter into pits, mud tanks, dilution water, and recirculating systems using standard dosing pumps.`,
      },
      {
        heading: "Dosing Guidelines for Water-Based Drilling Fluids",
        id: "dosing",
        body: `For routine preservation of water-based drilling fluids, MEA Triazine is typically used at 200-1,000 ppm depending on mud composition, recycled water quality, and microbial loading. Initial charge dosing is often applied to fresh make-up water or new mud batches, followed by maintenance dosing based on ATP testing, dip slides, odor development, or visible slime formation.

When SRB activity is confirmed or H2S is detected in the active system, the dosage can be increased based on both microbial challenge and the measured H2S load. The product can be added directly into the active pit, suction pit, dilution water line, or a dedicated side-stream treatment loop. Regular monitoring of bacterial counts, mud properties, and H2S readings is the best way to optimize dose while avoiding unnecessary overtreatment.`,
      },
      {
        heading: "Advantages for Drilling Operations",
        id: "advantages",
        body: `MEA Triazine 78% offers several practical advantages for drilling fluid programmes. It supports fluid stability by controlling bacteria that degrade polymers and starches. It reduces odor and microbiologically influenced corrosion associated with SRB contamination. It can also address incidental H2S in the same water-based system, lowering the need for separate treatment chemicals in some operations.

For procurement teams, Vasudev Chemo Pharma adds supply-chain advantages: direct manufacturer pricing, ISO 9001:2015 certified production, batch-specific CoA, export capability to major oil-producing regions, and sample support for mud-system qualification. This makes the product suitable for drilling contractors, mud companies, and oilfield chemical distributors seeking a reliable Indian source for water-based drilling fluid biocide chemistry.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Function", value: "Drilling fluid biocide and incidental H2S scavenger" },
      { label: "Typical dosage", value: "200-1,000 ppm for routine preservation" },
      { label: "Target organisms", value: "SRB, aerobic bacteria, fungi" },
      { label: "Fluid type", value: "Water-based drilling fluids and drilling mud systems" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Controls SRB and other bacteria that spoil water-based drilling muds",
      "Helps reduce H2S generated by microbial activity in active mud systems",
      "Protects starches, polymers, and other performance-critical mud additives",
      "Easy liquid dosing into pits, tanks, make-up water, and recirculation loops",
      "Factory-direct supply from India with CoA, TDS, and MSDS",
      "Suitable for qualification by drilling contractors and mud formulators",
    ],
    relatedCountries: [
      { name: "India", slug: "india" },
      { name: "UAE", slug: "uae" },
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "Kuwait", slug: "kuwait" },
      { name: "Oman", slug: "oman" },
      { name: "United States", slug: "usa" },
    ],
    faqs: [
      {
        question: "Can MEA Triazine be used in water-based drilling mud systems as a biocide?",
        answer:
          "Yes. MEA Triazine 78% is used in water-based drilling fluids as a formaldehyde-releasing biocide to control bacteria, fungi, and SRB that spoil mud systems and degrade additives. It is especially useful where recycled water and starch-containing muds create persistent biological contamination.",
      },
      {
        question: "Does MEA Triazine help with H2S in drilling fluids?",
        answer:
          "Yes. In addition to biocide performance, MEA Triazine reacts with hydrogen sulfide to form water-soluble dithiazine. That makes it valuable in drilling operations where SRB activity or sour formations contribute H2S to the active fluid system.",
      },
      {
        question: "What dosage is typical for drilling fluid preservation?",
        answer:
          "Routine preservation typically falls in the 200-1,000 ppm range, but the exact dose depends on the mud formulation, contamination level, recycled water quality, and whether H2S control is also required. We recommend dosing based on microbial monitoring and field observations rather than a fixed blanket rate.",
      },
      {
        question: "Can Vasudev supply drilling fluid biocide to GCC and US operations?",
        answer:
          "Yes. Vasudev Chemo Pharma exports to major oil and gas markets including India, the GCC, and the USA. We provide commercial documentation, CoA, TDS, and MSDS with each shipment and can arrange samples for qualification in drilling fluid applications.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 6. Paper Mill Biocide
   * -------------------------------------------------------------- */
  "paper-mill-biocide": {
    slug: "paper-mill-biocide",
    title: "MEA Triazine Biocide for Paper & Pulp Mills",
    description:
      "MEA Triazine 78% slimicide and biocide for paper and pulp mill white water systems. Controls slime-forming bacteria, compatible with paper chemistry. Export from India.",
    keywords: [
      "paper mill biocide",
      "MEA Triazine slimicide",
      "pulp and paper biocide",
      "white water biocide",
      "slime control paper mill",
      "paper mill slimicide manufacturer",
      "wet end biocide",
      "paper mill microbial control",
    ],
    h1: "MEA Triazine Biocide for Paper & Pulp Mills",
    intro:
      "Slime-forming bacteria in paper mill white water systems cause sheet breaks, spots, holes, and costly unplanned shutdowns. MEA Triazine 78% is a proven formaldehyde-releasing slimicide that controls microbial contamination in wet-end systems, coating circuits, and starch slurry storage — with the advantage of effectiveness at low pH and full compatibility with paper machine chemistry. Vasudev Chemo Pharma exports MEA Triazine to paper mills across Vietnam, Thailand, and Southeast Asia.",
    sections: [
      {
        heading: "Slime and Microbial Problems in Paper Mills",
        id: "slime-problems",
        body: `Paper and pulp mills operate large-volume water circuits that recirculate warm, nutrient-rich white water — an ideal environment for microbial proliferation. Bacteria, fungi, and algae form biofilms (slime) on paper machine surfaces including wires, felts, rolls, save-alls, and white water chests. These slime deposits periodically detach and enter the paper sheet, causing defects.

The consequences of uncontrolled microbial growth in paper mills are significant: sheet breaks and holes from slime deposits reduce machine efficiency and increase broke; spots, specks, and odour complaints degrade product quality; biofilm-induced corrosion attacks machine components and piping; and clogged showers, nozzles, and felt conditioning systems require frequent maintenance shutdowns.

In addition to wet-end systems, microbial contamination affects coating kitchens (starch and coating colour degradation), broke handling systems, and fresh water storage. A comprehensive biocide programme targeting multiple contamination points is essential for maintaining paper quality and machine runnability.`,
      },
      {
        heading: "MEA Triazine as a Paper Mill Slimicide",
        id: "slimicide-mechanism",
        body: `MEA Triazine 78% functions as a formaldehyde-releasing slimicide in paper mill applications. It hydrolyses in the aqueous white water environment to release formaldehyde at controlled concentrations, providing sustained antimicrobial activity against the full spectrum of slime-forming organisms — aerobic and anaerobic bacteria, fungi, and yeasts.

A key advantage of MEA Triazine for paper mills is its effectiveness at low pH. Many paper machine wet-end systems operate at pH 4.5-7.0 (especially in acidic sizing systems), where some biocides lose activity. MEA Triazine maintains its antimicrobial performance across this pH range, making it versatile for both acid and neutral/alkaline papermaking conditions.

The product is compatible with common paper mill wet-end chemistry including cationic and anionic retention aids, AKD and ASA sizing agents, wet-strength resins, starch, and defoamers. It does not cause foaming, does not interfere with retention or drainage, and does not affect paper sheet properties at recommended dosages.`,
      },
      {
        heading: "Application Points and Dosing",
        id: "application-dosing",
        body: `MEA Triazine 78% is applied at multiple points in the paper mill to provide comprehensive microbial control:

Wet-end treatment: Continuous dosing into the white water system at 50-200 ppm, targeting the short and long circulation loops. This is the primary application point for preventing slime deposition on the paper machine.

Coating systems: Addition to coating colour and starch preparation systems at 100-300 ppm to prevent microbial degradation of starch and coating components. Bacterial degradation of starch causes viscosity loss and coating quality problems.

Starch slurry preservation: Starch slurries held in storage tanks are particularly susceptible to bacterial fermentation. MEA Triazine at 200-500 ppm prevents degradation and maintains starch quality until use.

Broke handling: Treatment of broke storage chests and repulping systems at 100-200 ppm to prevent microbial build-up in recycled fibre streams.

Dosing is typically continuous via chemical metering pumps, with rates adjusted based on regular microbiological monitoring (dip slides, ATP testing, or deposit weight tests). Some mills also use periodic shock dosing during scheduled wash-ups to supplement continuous treatment.`,
      },
      {
        heading: "Advantages for Paper Mill Operations",
        id: "advantages",
        body: `MEA Triazine 78% offers several specific advantages for paper mill biocide treatment:

Low-pH effectiveness: Unlike some biocides that lose activity below neutral pH, MEA Triazine performs well in acidic papermaking conditions (pH 4.5+). This makes it suitable for mills running acidic or transitional sizing systems.

No foaming: The product does not generate foam, which is critical in paper machine wet-end applications where foam causes sheet defects and drainage problems.

Compatibility: Fully compatible with retention aid systems, sizing chemicals, and other wet-end additives. No interference with Zeta potential, drainage, or retention performance.

Sustained release: The formaldehyde-releasing mechanism provides extended antimicrobial protection between doses, reducing the frequency of shock treatments and the associated chemical consumption spikes.

Cost-effective: As a direct manufacturer, Vasudev Chemo Pharma offers competitive pricing compared to branded slimicide products, with the same active chemistry and proven performance. We regularly export to paper mills in Vietnam, Thailand, Indonesia, and other paper-producing regions.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Function", value: "Slimicide / formaldehyde-releasing biocide" },
      { label: "Effective pH range", value: "4.5 - 10.0" },
      { label: "Wet-end dosage", value: "50-200 ppm in white water" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Effective slime control across pH 4.5-10.0 — works in acidic papermaking",
      "No foaming — safe for paper machine wet-end application",
      "Compatible with retention aids, sizing agents, and wet-end chemistry",
      "Sustained-release formaldehyde mechanism — extended protection",
      "Prevents starch degradation in coating and sizing systems",
      "Competitive export pricing — direct manufacturer supply",
    ],
    relatedCountries: [
      { name: "Vietnam", slug: "vietnam" },
      { name: "Thailand", slug: "thailand" },
      { name: "Brazil", slug: "brazil" },
      { name: "UAE", slug: "uae" },
    ],
    faqs: [
      {
        question: "Is MEA Triazine effective at low pH in paper mill white water?",
        answer:
          "Yes. MEA Triazine maintains antimicrobial activity across pH 4.5-10.0, making it effective in both acidic and neutral/alkaline papermaking systems. This is a key advantage over some alternative biocides that lose activity below neutral pH.",
      },
      {
        question: "Will MEA Triazine cause foaming on the paper machine?",
        answer:
          "No. MEA Triazine does not generate foam at recommended dosages. It is fully compatible with paper machine wet-end operations and does not interfere with drainage, retention, or defoamer performance.",
      },
      {
        question: "What dosage of MEA Triazine is recommended for paper mill white water?",
        answer:
          "Continuous dosing at 50-200 ppm in white water is typical for wet-end slime control. For coating systems and starch slurry preservation, higher dosages of 100-500 ppm may be required. Our technical team can help you establish optimal dosing based on your mill conditions and microbiological monitoring results.",
      },
      {
        question: "Do you export MEA Triazine to paper mills in Southeast Asia?",
        answer:
          "Yes. We regularly export MEA Triazine 78% to paper and pulp mills in Vietnam, Thailand, Indonesia, and other Southeast Asian countries. Our manufacturing facility in Gujarat, India, provides competitive freight rates and reliable delivery within 10-15 days to major Asian ports.",
      },
    ],
  },
  /* ----------------------------------------------------------------
   * 7. Natural Gas Sweetening
   * -------------------------------------------------------------- */
  "gas-sweetening": {
    slug: "gas-sweetening",
    title: "Natural Gas Sweetening with MEA Triazine 78% — Remove H2S from Sour Gas",
    description:
      "MEA Triazine 78% for natural gas sweetening. Remove H2S from sour gas to meet pipeline sales-gas specifications. Direct manufacturer supply from Vasudev Chemo Pharma, India.",
    keywords: [
      "natural gas sweetening",
      "gas sweetening MEA Triazine",
      "sour gas treatment",
      "H2S removal natural gas",
      "gas sweetening chemical",
      "triazine gas sweetening",
      "sales gas H2S specification",
      "sour gas H2S scavenger",
    ],
    h1: "Natural Gas Sweetening with MEA Triazine 78%",
    intro:
      "Natural gas sweetening is the process of removing hydrogen sulfide (H2S) and other acid gases from raw natural gas to meet pipeline sales-gas specifications — typically less than 4 ppm H2S. MEA Triazine 78% is the most widely used non-regenerable liquid scavenger for gas sweetening applications worldwide, from small wellhead systems to large gas processing facilities. Vasudev Chemo Pharma manufactures MEA Triazine 78% for direct supply to gas sweetening operations globally.",
    sections: [
      {
        heading: "What Is Gas Sweetening?",
        id: "what-is-gas-sweetening",
        body: `Gas sweetening refers to the removal of hydrogen sulfide (H2S) and carbon dioxide (CO2) from natural gas. "Sour" gas contains H2S above the allowable limit for pipeline transport or commercial sale — typically 4 ppm for most pipeline specifications and 5.7 mg/m3 under many international standards.

Untreated sour gas poses severe risks: H2S is acutely toxic at concentrations above 100 ppm, causes sulfide stress cracking in carbon steel infrastructure, and fails to meet environmental emissions standards. Gas sweetening is mandatory before gas can be sold, transported, or used as feedstock in LNG and petrochemical operations.

Common gas sweetening methods include amine systems (MDEA, DEA), solid scavengers (iron sponge, zinc oxide), and liquid scavengers like MEA Triazine. The choice depends on gas volume, H2S concentration, operating conditions, and whether regeneration economics are justified.`,
      },
      {
        heading: "How MEA Triazine 78% Sweetens Natural Gas",
        id: "mea-triazine-mechanism",
        body: `MEA Triazine (CAS 4719-04-4) sweetens natural gas through an irreversible chemical reaction with H2S. The triazine ring structure opens and reacts with hydrogen sulfide to form dithiazine — a water-soluble, non-toxic by-product that remains in the liquid phase and is easily removed.

The reaction proceeds efficiently at typical gas processing temperatures (20-80°C) and pressures. At 78% active concentration, MEA Triazine delivers maximum H2S scavenging capacity per litre — approximately 0.22 kg of H2S removed per litre of product. This high concentration reduces chemical consumption, storage requirements, and logistics costs compared to 40-70% alternatives.

MEA Triazine is classified as a non-regenerable scavenger, meaning it is consumed in the reaction. This simplicity is its advantage: no regeneration towers, reboilers, or recirculation systems are needed. For gas sweetening applications with moderate H2S loads, this translates to significantly lower capital and operating costs compared to regenerable amine systems.`,
      },
      {
        heading: "Gas Sweetening Application Methods",
        id: "application-methods",
        body: `MEA Triazine 78% is deployed in gas sweetening operations using several proven methods:

Contactor towers: The most common setup for continuous gas sweetening. Gas flows upward through a packed or tray column while MEA Triazine is circulated counter-currently. Contact time is typically 30-60 seconds for effective H2S removal. This method is standard at gas processing plants and large gathering facilities.

Direct pipeline injection: MEA Triazine is injected directly into the gas pipeline via chemical dosing pumps. The turbulent flow provides mixing and contact. This method is ideal for wellhead sweetening, remote locations, and applications where contactor tower installation is not practical.

Batch treatment: For intermittent or low-volume applications, MEA Triazine can be batch-applied in storage tanks, slug catchers, or separators. This is common during well testing, start-up operations, and emergency H2S mitigation.

Polishing after amine systems: In large gas plants using regenerable amine (MDEA/DEA) systems, MEA Triazine is used as a final polishing step to ensure treated gas consistently meets the tight H2S specifications required for LNG feed or pipeline sales gas.`,
      },
      {
        heading: "When to Choose MEA Triazine Over Amine Systems",
        id: "triazine-vs-amine",
        body: `The decision between MEA Triazine (non-regenerable) and amine systems (regenerable) for gas sweetening depends on gas volume, H2S loading, and economics:

MEA Triazine is preferred when: H2S loading is moderate (typically below 500-1000 ppm at moderate gas flows), the gas field is remote or has limited infrastructure, capital expenditure must be minimised, or the operation is temporary (well testing, early field life, satellite wells). The simplicity of injection-based systems means lower CAPEX, faster deployment, and minimal operator training.

Amine systems are preferred when: H2S loading is high (thousands of ppm) at large gas volumes, the gas contains significant CO2 requiring simultaneous removal, and the operation will run for decades — justifying the higher capital investment in regeneration equipment.

Many operations use both: amine systems for bulk H2S removal and MEA Triazine for final polishing to meet the tightest sales-gas specifications. This hybrid approach is common at major gas processing complexes in the Middle East, North America, and Southeast Asia.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "\u226578% (w/w)" },
      { label: "H2S capacity", value: "\u22480.22 kg H2S per litre" },
      { label: "Target spec", value: "< 4 ppm H2S (pipeline quality)" },
      { label: "Application", value: "Contactor towers, direct injection, batch treatment" },
      { label: "Packaging", value: "200 L drums, 1,000 L IBC, bulk ISO tanks" },
    ],
    benefits: [
      "No regeneration equipment needed — lower CAPEX",
      "78% active concentration — maximum scavenging per litre",
      "Simple injection-based deployment",
      "Effective across 20-80°C operating range",
      "Non-toxic dithiazine by-product",
      "ISO 9001:2015 certified manufacturer",
    ],
    relatedCountries: [
      { name: "United States (Permian Basin)", slug: "usa" },
      { name: "Qatar (North Field)", slug: "qatar" },
      { name: "UAE (Shah Gas Field)", slug: "uae" },
      { name: "Iran (South Pars)", slug: "iran" },
      { name: "Saudi Arabia (Ghawar)", slug: "saudi-arabia" },
      { name: "Oman (Block 6)", slug: "oman" },
    ],
    faqs: [
      {
        question: "What H2S level can MEA Triazine 78% achieve in gas sweetening?",
        answer:
          "MEA Triazine 78% can reduce H2S in natural gas to below 4 ppm — meeting standard pipeline sales-gas specifications. With adequate contact time and proper dosing, levels below 1 ppm are achievable. The product is effective for both primary sweetening and polishing applications.",
      },
      {
        question: "How much MEA Triazine is needed per kg of H2S removed?",
        answer:
          "Approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. This translates to roughly 0.22 kg H2S removed per litre of product. Actual consumption depends on contact efficiency, temperature, and gas composition.",
      },
      {
        question: "Can MEA Triazine replace an amine sweetening unit?",
        answer:
          "For moderate H2S loads (typically below 500-1000 ppm at moderate flow rates), MEA Triazine can replace amine systems entirely with significantly lower capital cost. For high H2S loads, it is commonly used as a polishing step after amine treatment to ensure sales-gas specifications are met consistently.",
      },
      {
        question: "Is MEA Triazine suitable for LNG feed gas sweetening?",
        answer:
          "Yes. MEA Triazine 78% is used as a polishing scavenger in LNG feed gas systems to ensure H2S levels are consistently below the tight specifications required for liquefaction (typically < 3.3 mg/Nm3). It provides an additional safety margin downstream of amine systems.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 8. Pipeline H2S Treatment
   * -------------------------------------------------------------- */
  "pipeline-h2s-treatment": {
    slug: "pipeline-h2s-treatment",
    title: "Pipeline H2S Treatment with MEA Triazine 78% — Inline Scavenging",
    description:
      "MEA Triazine 78% for pipeline H2S treatment. Inline injection for sour gas and crude oil pipelines. Prevent corrosion, meet transport specifications. Direct manufacturer supply.",
    keywords: [
      "pipeline H2S treatment",
      "H2S scavenger pipeline injection",
      "inline H2S removal",
      "sour pipeline treatment",
      "pipeline corrosion H2S",
      "H2S scavenger injection pipeline",
      "pipeline H2S mitigation",
      "MEA Triazine pipeline",
    ],
    h1: "Pipeline H2S Treatment with MEA Triazine 78%",
    intro:
      "Hydrogen sulfide in pipelines causes corrosion, safety hazards, and product quality failures. MEA Triazine 78% is injected directly into sour gas and crude oil pipelines to react with H2S inline, protecting infrastructure and ensuring transported products meet downstream specifications. Vasudev Chemo Pharma supplies MEA Triazine 78% for pipeline H2S treatment operations across 10+ countries from our manufacturing facility in India.",
    sections: [
      {
        heading: "H2S Risks in Pipeline Systems",
        id: "h2s-pipeline-risks",
        body: `Hydrogen sulfide in pipeline systems creates three critical problems that demand chemical treatment:

Corrosion: H2S reacts with carbon steel to form iron sulfide, causing internal pitting, sulfide stress cracking (SSC), and hydrogen-induced cracking (HIC). These corrosion mechanisms can lead to catastrophic pipeline failures — particularly at welds, bends, and areas of turbulent flow. The cost of a single pipeline failure (repair, lost production, environmental remediation) can exceed millions of dollars.

Safety: H2S is lethal at concentrations above 100 ppm and is heavier than air, accumulating in low-lying areas around pipeline infrastructure. Maintenance workers, valve operators, and pig launcher/receiver crews face direct exposure risks. Regulatory frameworks (OSHA, HSE, OISD) mandate H2S management in pipeline operations.

Product quality: Pipeline sales-gas specifications require H2S below 4 ppm for most jurisdictions. Crude oil with elevated H2S faces price penalties and requires additional processing at the refinery. Failing to meet pipeline specifications results in shut-in production and rejected deliveries.`,
      },
      {
        heading: "Inline MEA Triazine Injection for Pipelines",
        id: "inline-injection",
        body: `MEA Triazine 78% is injected directly into the pipeline flow using chemical dosing pumps — typically positive-displacement diaphragm or plunger pumps rated for the pipeline operating pressure. The injection point is usually located upstream of the section requiring protection, with a chemical injection quill designed for optimal mixing with the pipeline flow.

The turbulent flow conditions inside operating pipelines provide the mixing energy needed for MEA Triazine to contact and react with dissolved H2S. Contact time depends on pipeline velocity and distance between injection point and measurement location. For gas pipelines, typical contact distances of 50-200 metres provide adequate reaction time.

Dosing is controlled automatically using online H2S analysers at the injection point (inlet concentration) and at a downstream measurement point (treated concentration). A feedback control loop adjusts the injection rate to maintain the target H2S specification while minimising chemical consumption. Manual dosing based on periodic sampling is used at simpler installations.

For multiphase pipelines carrying both gas and liquid, the injection quill must be positioned to ensure the MEA Triazine contacts the gas phase where H2S is present. Atomising nozzles or spray injection quills improve distribution in large-diameter pipelines.`,
      },
      {
        heading: "Pipeline Applications for MEA Triazine",
        id: "pipeline-applications",
        body: `MEA Triazine 78% is deployed across multiple pipeline configurations:

Gas gathering lines: Injection at wellhead manifolds or gathering system headers protects carbon steel gathering lines from H2S corrosion and ensures gas meets processing plant inlet specifications. This is the most common pipeline H2S treatment application in producing fields.

Trunk and transmission pipelines: Long-distance gas transmission lines require H2S levels below sales-gas specification. MEA Triazine injection at compressor stations or pipeline entry points provides consistent H2S control throughout the transport route.

Crude oil flowlines: Sour crude oil pipelines benefit from MEA Triazine injection to reduce H2S in the vapor space above the liquid, protecting against top-of-line corrosion and reducing H2S release at tank farms and loading terminals.

Subsea and offshore risers: MEA Triazine is injected at subsea manifolds or at the base of risers to treat H2S before the produced fluids reach topside processing facilities. This protects the riser and topside equipment from sour service conditions.

Emergency and temporary treatment: Portable MEA Triazine injection skids can be deployed rapidly for emergency H2S mitigation during well interventions, pipeline upsets, or facility turnarounds.`,
      },
      {
        heading: "Dosing & Monitoring for Pipeline Treatment",
        id: "dosing-monitoring",
        body: `Effective pipeline H2S treatment requires accurate dosing and monitoring:

Dosing calculation: The basic formula is 4.5 litres of MEA Triazine 78% per kilogram of H2S to be removed. For a gas pipeline, this translates to: Injection rate (L/hr) = Gas flow rate (Nm3/hr) x H2S concentration (ppm) x 0.00153 x 4.5 / 1000. Our technical team provides detailed dosing calculations for each project.

Monitoring equipment: Online H2S analysers (electrochemical, lead acetate tape, or tunable diode laser) measure inlet and outlet H2S concentrations continuously. Regular calibration ensures accurate dosing control and prevents both under-treatment (specification failures) and over-treatment (excess chemical consumption).

Chemical storage: MEA Triazine 78% is stored in standard carbon steel or HDPE tanks at the injection site. The product has a shelf life of 12 months under recommended conditions. Storage tanks should be sized for 7-14 days of consumption at maximum dosing rate to ensure continuity of treatment.

Spent chemical handling: The reaction product (dithiazine) is water-soluble and remains in the liquid phase. In gas pipelines, it is removed at slug catchers or liquid knock-out vessels. In crude pipelines, it remains in the produced water phase and is handled through normal produced water treatment systems.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "\u226578% (w/w)" },
      { label: "Injection method", value: "Chemical dosing pump + injection quill" },
      { label: "Target spec", value: "< 4 ppm H2S (pipeline gas)" },
      { label: "Dosing rate", value: "\u22484.5 L per kg H2S removed" },
      { label: "Packaging", value: "200 L drums, 1,000 L IBC, bulk ISO tanks" },
    ],
    benefits: [
      "Protects pipelines from H2S corrosion (SSC, HIC, pitting)",
      "No process equipment needed — injection pump only",
      "Automatic dosing with H2S analyser feedback",
      "Effective in gas, crude, and multiphase pipelines",
      "Fast deployment for emergency H2S situations",
      "78% concentration minimises chemical volume and logistics",
    ],
    relatedCountries: [
      { name: "United States (Permian, Marcellus)", slug: "usa" },
      { name: "Saudi Arabia (Ghawar)", slug: "saudi-arabia" },
      { name: "UAE (ADNOC pipelines)", slug: "uae" },
      { name: "Iraq (Basra pipelines)", slug: "iraq" },
      { name: "Kuwait (KOC fields)", slug: "kuwait" },
      { name: "Oman (PDO fields)", slug: "oman" },
    ],
    faqs: [
      {
        question: "Can MEA Triazine be injected directly into high-pressure pipelines?",
        answer:
          "Yes. MEA Triazine 78% is injected using chemical dosing pumps rated for the pipeline operating pressure — commonly up to 100+ bar for gas transmission lines. Injection quills are designed for the specific pipeline diameter and pressure rating. Our product is compatible with standard chemical injection equipment used in the oil and gas industry.",
      },
      {
        question: "How quickly does MEA Triazine react with H2S in a pipeline?",
        answer:
          "The reaction between MEA Triazine and H2S is fast — typically reaching 80-95% completion within 30-60 seconds under pipeline flow conditions. The turbulent flow inside pipelines provides effective mixing. For gas pipelines, a contact distance of 50-200 metres downstream of the injection point is typically sufficient.",
      },
      {
        question: "Does MEA Triazine cause pipeline corrosion or deposits?",
        answer:
          "No. MEA Triazine 78% is non-corrosive to carbon steel pipeline materials. The reaction product (dithiazine) is water-soluble and does not form deposits or scale on pipeline walls. At high H2S removal rates, monitoring for amorphous sulfur precipitation is recommended — contact our technical team for guidance.",
      },
      {
        question: "What is the shelf life of MEA Triazine at pipeline injection sites?",
        answer:
          "MEA Triazine 78% has a shelf life of 12 months when stored in sealed containers at temperatures between 5-40\u00B0C. For field storage at pipeline injection sites, standard HDPE or carbon steel tanks with closed tops are suitable. Avoid prolonged exposure to temperatures above 40\u00B0C or direct sunlight.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 9. Crude Oil Desulfurization
   * -------------------------------------------------------------- */
  "crude-oil-desulfurization": {
    slug: "crude-oil-desulfurization",
    title: "Crude Oil Desulfurization with MEA Triazine 78% — H2S Removal from Crude",
    description:
      "MEA Triazine 78% for crude oil desulfurization and H2S removal. Reduce vapor-phase H2S in crude storage, loading, and transport. Direct manufacturer supply from India.",
    keywords: [
      "crude oil desulfurization",
      "H2S removal crude oil",
      "crude oil H2S scavenger",
      "sour crude treatment",
      "crude oil sweetening triazine",
      "vapor phase H2S crude",
      "crude oil storage H2S",
      "crude oil loading H2S",
    ],
    h1: "Crude Oil Desulfurization with MEA Triazine 78%",
    intro:
      "Sour crude oil contains dissolved hydrogen sulfide (H2S) that creates safety hazards during storage, loading, and transport. MEA Triazine 78% is used for crude oil desulfurization — removing H2S from the vapor space above crude oil in tanks, from dissolved H2S in produced fluids, and from crude streams during pipeline transport. Vasudev Chemo Pharma manufactures MEA Triazine 78% for direct supply to crude oil production and refining operations across the Middle East, Americas, and Asia.",
    sections: [
      {
        heading: "The H2S Problem in Crude Oil",
        id: "h2s-crude-oil-problem",
        body: `Hydrogen sulfide in crude oil originates from the reservoir and from bacterial activity in production systems. Sour crude — defined as crude oil with more than 0.5% sulfur by weight — is produced from many of the world's major oil fields, including those in Saudi Arabia, Iraq, Iran, Kuwait, and parts of the Permian Basin.

H2S in crude oil creates multiple problems: vapor-phase H2S above stored crude in tanks creates lethal atmospheric conditions for tank gaugers and maintenance workers. During crude loading operations at marine terminals, H2S release during tank filling and cargo transfer creates safety exclusion zones. In pipelines, H2S causes internal corrosion and sulfide stress cracking.

Crude oil with elevated H2S also faces price penalties at refineries. Buyers apply sour crude discounts, and some refineries refuse shipments exceeding their H2S handling limits. Reducing H2S content through chemical scavenging can improve the crude's marketability and realized price.`,
      },
      {
        heading: "How MEA Triazine Desulfurizes Crude Oil",
        id: "desulfurization-mechanism",
        body: `MEA Triazine 78% is water-soluble and reacts preferentially with H2S dissolved in the aqueous phase that co-exists with crude oil in production systems. The reaction produces dithiazine, which remains dissolved in the water phase.

For crude oil desulfurization, MEA Triazine is typically applied in three ways:

Produced water treatment: MEA Triazine is dosed into the produced water stream before or after oil-water separation. This removes H2S from the water phase, which in turn reduces the equilibrium H2S concentration in the oil phase and vapor space.

Direct injection into crude streams: MEA Triazine can be injected into multiphase crude-water streams before tank storage. As the fluids separate in tanks, the triazine reacts with H2S in the water phase, progressively reducing vapor-space H2S concentrations.

Tank vapor space treatment: For tanks with persistent vapor-phase H2S, MEA Triazine can be sprayed or circulated into the vapor space using mist injection systems. This provides direct contact between the scavenger and the H2S gas.

The dosing requirement depends on the H2S mass loading and the target vapor-space H2S concentration. Our technical team provides project-specific dosing calculations based on crude composition, production rates, and tank configurations.`,
      },
      {
        heading: "Crude Oil Desulfurization Applications",
        id: "desulfurization-applications",
        body: `MEA Triazine 78% is used across the crude oil value chain for H2S management:

Production separators: Injection at the three-phase separator reduces H2S in both the gas and water outlets, protecting downstream equipment and ensuring separated gas meets flare or sales specifications.

Crude storage tanks: Chemical treatment of the water bottom and vapor space in crude storage tanks is critical for personnel safety during tank gauging, sampling, and maintenance. OSHA and equivalent international standards mandate H2S monitoring and control at crude storage facilities.

Marine loading terminals: During crude loading operations, H2S release from the cargo creates safety risks. Pre-treatment of crude with MEA Triazine before loading, or continuous injection during loading operations, reduces H2S emissions at the terminal to acceptable levels.

Pipeline transport: MEA Triazine injection into crude pipelines reduces vapor-phase H2S at receiving facilities and prevents top-of-line corrosion. This is particularly important for long-distance crude transport where H2S concentrations can increase due to temperature changes and bacterial activity.

Refinery crude feed: Some refineries inject MEA Triazine into incoming crude feed to reduce H2S loading on their crude distillation unit overhead systems, extending the life of overhead condensers and reducing corrosion inhibitor consumption.`,
      },
      {
        heading: "Safety & Regulatory Compliance",
        id: "safety-compliance",
        body: `Crude oil desulfurization with MEA Triazine helps operators meet critical safety and regulatory requirements:

OSHA / HSE compliance: H2S exposure limits (OSHA PEL: 20 ppm, STEL: 50 ppm) apply to all crude oil handling operations. Chemical scavenging is a primary engineering control for reducing worker exposure at tank farms, loading terminals, and pipeline facilities.

API and NACE standards: American Petroleum Institute and NACE International standards define material and operational requirements for sour crude handling. MEA Triazine treatment reduces the severity of sour service conditions, extending the service life of existing equipment.

Environmental regulations: Fugitive H2S emissions from crude storage and handling operations are regulated under EPA and equivalent international environmental frameworks. Reducing H2S content through chemical treatment directly reduces fugitive emissions and associated regulatory exposure.

MEA Triazine 78% does not introduce new environmental hazards — the reaction product (dithiazine) is water-soluble and non-toxic, handled through standard produced water treatment systems without special disposal requirements.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "\u226578% (w/w)" },
      { label: "Application", value: "Crude oil, produced water, vapor space" },
      { label: "Target", value: "Reduce vapor-space H2S below PEL (20 ppm)" },
      { label: "Dosing rate", value: "\u22484.5 L per kg H2S removed" },
      { label: "Packaging", value: "200 L drums, 1,000 L IBC, bulk ISO tanks" },
    ],
    benefits: [
      "Reduces crude oil H2S for safer storage and handling",
      "Improves crude marketability — reduces sour crude discount",
      "Meets OSHA/HSE exposure limits at tank farms and terminals",
      "Water-soluble — reacts in produced water phase",
      "Non-toxic by-product — standard water treatment disposal",
      "78% concentration — maximum efficiency per litre",
    ],
    relatedCountries: [
      { name: "Saudi Arabia (Ghawar, Safaniyah)", slug: "saudi-arabia" },
      { name: "Iraq (Basra, Rumaila)", slug: "iraq" },
      { name: "Kuwait (Burgan)", slug: "kuwait" },
      { name: "Iran (Ahwaz, Marun)", slug: "iran" },
      { name: "UAE (ADNOC Upper Zakum)", slug: "uae" },
      { name: "Libya (Sirte Basin)", slug: "libya" },
    ],
    faqs: [
      {
        question: "Can MEA Triazine reduce the sour crude discount on my production?",
        answer:
          "Yes. By reducing the H2S content of your crude oil, MEA Triazine treatment can reduce or eliminate the sour crude price penalty applied by refineries and crude oil traders. The economics depend on your production volume, current H2S levels, and the applicable sour crude discount. Our technical team can provide a cost-benefit analysis for your specific situation.",
      },
      {
        question: "How is MEA Triazine dosed for crude oil tank farm applications?",
        answer:
          "For tank farm applications, MEA Triazine is typically injected into the produced water stream entering the tank, or into the water bottom of the tank using a recirculation system. Dosing rates depend on the H2S mass loading and target vapor-space concentration. For routine applications, 50-200 ppm in the water phase is typical. Our technical team provides project-specific dosing recommendations.",
      },
      {
        question: "Is MEA Triazine compatible with crude oil demulsifier chemicals?",
        answer:
          "Yes. MEA Triazine 78% is compatible with standard crude oil treatment chemicals including demulsifiers, corrosion inhibitors, and pour point depressants. It operates in the water phase and does not interfere with oil-water separation or other treatment processes. We recommend a compatibility test with your specific chemical programme for new applications.",
      },
      {
        question: "Can MEA Triazine be used at marine crude loading terminals?",
        answer:
          "Yes. MEA Triazine 78% is used at marine terminals to reduce H2S emissions during crude loading operations. It can be injected into the crude stream during loading, pre-applied in shore tanks, or used in vapor recovery systems. This helps terminals comply with port authority H2S emission limits and worker safety regulations.",
      },
    ],
  },

  /* ----------------------------------------------------------------
   * 10. Downhole H2S Scavenging
   * -------------------------------------------------------------- */
  "downhole-h2s-scavenging": {
    slug: "downhole-h2s-scavenging",
    title: "Downhole H2S Scavenger Injection — MEA Triazine 78%",
    description:
      "MEA Triazine 78% for downhole H2S scavenger injection in sour wells. Reduces H2S at source, protects wellbore tubulars, and improves surface safety. Direct manufacturer supply from India.",
    keywords: [
      "downhole H2S scavenger",
      "downhole H2S injection",
      "sour well H2S treatment",
      "wellbore H2S scavenging",
      "MEA Triazine downhole injection",
      "H2S scavenger sour well",
      "chemical injection sour gas well",
      "wellhead H2S removal",
    ],
    h1: "Downhole H2S Scavenger Injection with MEA Triazine 78%",
    intro:
      "Sour wells that produce hydrogen sulfide (H2S) alongside hydrocarbons require chemical intervention at the earliest possible point in the production system. Downhole injection of MEA Triazine 78% directly into the wellbore scavenges H2S at source — before it reaches surface facilities, flowlines, and personnel. Vasudev Chemo Pharma manufactures MEA Triazine 78% for downhole scavenger injection programmes across oil and gas producing regions worldwide, including the Middle East, Americas, and Southeast Asia.",
    sections: [
      {
        heading: "Why Treat H2S Downhole?",
        id: "why-downhole",
        body: `Surface H2S treatment — at separators, treaters, or gas plants — is the conventional approach, but it leaves all upstream equipment exposed to corrosive sour production. Wellbore tubulars, downhole safety valves, production tubing, and surface flowlines from the wellhead to the processing facility are all at risk of sulfide stress cracking, pitting corrosion, and material failure.

Downhole chemical injection addresses H2S at the source. By injecting MEA Triazine directly into the wellbore — below the tubing hanger or at the perforations — the scavenger reacts with H2S as soon as it enters the production stream. This protects the entire production system from wellbore to surface, reduces corrosion inhibitor requirements, and improves safety at the wellhead where personnel exposure risk is highest.

For wells with intermittent or increasing H2S production — common in mature fields and in reservoirs undergoing souring from bacterial sulfate reduction — downhole treatment is often the most cost-effective first response, requiring no new surface facilities.`,
      },
      {
        heading: "MEA Triazine 78% for Downhole Service",
        id: "downhole-application",
        body: `MEA Triazine 78% is injected downhole through a chemical injection capillary line (typically 1/4" or 3/8" stainless steel or Inconel tubing) that runs alongside or is strapped to the production tubing. The injection point is positioned near the perforations or in the tubing-casing annulus, depending on well completion design.

At 78% active concentration, MEA Triazine provides maximum scavenging capacity per litre of injected fluid — a critical advantage in downhole applications where injection rates are constrained by capillary line capacity and downhole pressures. The product is fully water-soluble and compatible with common completion and workover fluids.

Dosing is controlled by a surface chemical injection pump, with rates adjusted based on wellhead H2S measurements and production rate changes. Typical downhole injection rates range from 5 to 100 litres per day depending on well production rate and H2S concentration. The dithiazine by-product remains in the produced water phase and is separated at surface facilities.`,
      },
      {
        heading: "Field Application Considerations",
        id: "field-considerations",
        body: `Successful downhole H2S scavenging with MEA Triazine requires attention to several field factors:

Capillary line sizing: The injection line must deliver sufficient chemical volume at the required downhole pressure. For deep or high-pressure wells, pump discharge pressures of 5,000-10,000 psi may be required. Chemical injection pump selection should account for the viscosity of MEA Triazine 78% at ambient temperature.

Chemical compatibility: MEA Triazine 78% is compatible with most production chemicals including corrosion inhibitors, scale inhibitors, and demulsifiers. However, it should not be co-mingled with strong acids or oxidizers in the injection system. Dedicated capillary lines or verified compatibility testing are recommended.

Temperature stability: MEA Triazine 78% is effective at bottomhole temperatures up to approximately 120°C. Above this temperature, thermal degradation may reduce scavenging efficiency. For higher-temperature wells, contact our technical team for alternative formulation recommendations.

Monitoring: Regular wellhead H2S measurements (using Draeger tubes, online analyzers, or portable H2S detectors) are essential for optimizing injection rates and confirming treatment effectiveness.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Chemical name", value: "1,3,5-Tri(2-hydroxyethyl)-hexahydro-s-triazine" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Specific gravity", value: "1.10 - 1.14 at 25 °C" },
      { label: "Effective temperature range", value: "Up to ~120 °C bottomhole" },
      { label: "Scavenging capacity", value: "~4.5 L per kg H2S removed" },
      { label: "Injection method", value: "Capillary line (1/4\" or 3/8\" SS/Inconel)" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
    ],
    benefits: [
      "Treats H2S at source — protects entire production system from wellbore to surface",
      "78% concentration — maximum scavenging per litre through capillary lines",
      "No surface facilities required — low capital expenditure",
      "Effective for continuous and intermittent sour well treatment",
      "Reduces wellhead H2S exposure risk for field personnel",
      "Compatible with standard completion and production chemicals",
    ],
    relatedCountries: [
      { name: "UAE", slug: "uae" },
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "Qatar", slug: "qatar" },
      { name: "Kuwait", slug: "kuwait" },
      { name: "Oman", slug: "oman" },
      { name: "USA", slug: "usa" },
      { name: "Iraq", slug: "iraq" },
      { name: "Iran", slug: "iran" },
    ],
    faqs: [
      {
        question: "What injection rate of MEA Triazine is needed for downhole H2S scavenging?",
        answer:
          "Downhole injection rates depend on the well's H2S production rate and target surface H2S concentration. As a starting point, approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S. For a well producing 50 ppm H2S at 5 MMscfd gas, this translates to roughly 15-25 litres per day. Our technical team provides well-specific dosing calculations based on your production data.",
      },
      {
        question: "Can MEA Triazine be injected through existing chemical injection capillary lines?",
        answer:
          "Yes. MEA Triazine 78% is a low-viscosity liquid that flows readily through standard 1/4\" and 3/8\" capillary lines used for downhole chemical injection. Ensure the injection pump can achieve the required downhole pressure and that the capillary line is flushed with fresh water if the well is shut in for extended periods to prevent crystallization.",
      },
      {
        question: "Does downhole MEA Triazine injection affect produced water quality?",
        answer:
          "The dithiazine by-product of the MEA Triazine + H2S reaction is water-soluble and reports to the produced water phase. It is non-toxic and does not typically affect produced water treatment processes (oil-water separation, hydrocyclones, water injection). At standard dosing rates, dithiazine concentrations in produced water are low and do not create disposal issues.",
      },
      {
        question: "What is the maximum bottomhole temperature for MEA Triazine?",
        answer:
          "MEA Triazine 78% is effective at bottomhole temperatures up to approximately 120°C (248°F). Above this temperature, thermal degradation may reduce scavenging efficiency. For wells with higher bottomhole temperatures, contact our technical team to discuss alternative H2S scavenger formulations designed for high-temperature service.",
      },
      {
        question: "Is downhole H2S scavenging more cost-effective than surface treatment?",
        answer:
          "For sour wells with moderate H2S levels (< 5% in gas phase), downhole scavenging often has a lower total cost than installing dedicated surface H2S treatment equipment. The capital cost is limited to a capillary line and injection pump. Operating cost depends on H2S loading and chemical consumption. Our team provides economic comparisons for your specific well conditions.",
      },
    ],
  },
};

export const APPLICATION_PAGES_DATA: Record<string, ApplicationPageData> =
  Object.fromEntries(
    Object.entries(RAW_APPLICATION_PAGES_DATA).map(([slug, page]) => [
      slug,
      enrichApplicationPage(page),
    ])
  );

export const APPLICATION_SLUGS: string[] = Object.keys(APPLICATION_PAGES_DATA);
