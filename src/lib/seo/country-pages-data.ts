/* ── Country / market landing-page data for MEA Triazine 78% ──────────── */

export type CountryLogistics = {
  port: string;
  transitDays: string;
  packaging: string;
  incoterms: string;
};

export type CountryPageData = {
  slug: string;
  countryName: string;
  regionLabel: string;
  flag: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  logistics: CountryLogistics;
  importDocs: string[];
  localBrandNames: string[];
  localLanguageNames: string[];
  faqs: { question: string; answer: string }[];
  oilfields: string[];
};

/* ── Data ─────────────────────────────────────────────────────────────── */

export const COUNTRY_PAGES_DATA: Record<string, CountryPageData> = {
  /* ── Vietnam ────────────────────────────────────────────────────────── */
  vietnam: {
    slug: "vietnam",
    countryName: "Vietnam",
    regionLabel: "Southeast Asia",
    flag: "\u{1F1FB}\u{1F1F3}",
    title: "MEA Triazine 78% Supplier to Vietnam — CIF Ho Chi Minh City",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Vietnam. CIF delivery to Cat Lai & Hai Phong ports. 8\u201312 day transit from India. Free samples available.",
    keywords: [
      "MEA Triazine Vietnam",
      "H2S scavenger Vietnam",
      "MEA Triazine 78 CIF Ho Chi Minh",
      "triazine supplier Vietnam",
      "hydrogen sulfide scavenger Vietnam",
      "BK Biocide Vietnam",
    ],
    h1: "MEA Triazine 78% Supplier to Vietnam \u2014 CIF Ho Chi Minh City",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% CIF to Cat Lai port (Ho Chi Minh City) and Hai Phong port with typical transit of 8\u201312 days from India. We provide all required import documentation including Certificate of Analysis, GHS-compliant SDS, and packing list formatted for Vietnamese customs clearance under Decree 113/2017/ND-CP.",
    logistics: {
      port: "Cat Lai (Ho Chi Minh City), Hai Phong",
      transitDays: "8\u201312 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Ho Chi Minh City / CIF Hai Phong",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "TCVN-compliant labeling",
      "Chemical import licence under Decree 113/2017/ND-CP",
    ],
    localBrandNames: [
      "BK Biocide (Chinese trade name, widely traded in SEA)",
      "Dayong MEA Triazine (Dongying Dayong, Made-in-China)",
      "IRO MEA Triazine (IRO Group Inc.)",
      "JDC H2S Scavenger (Jay Dinesh Chemicals)",
      "H2S Scavenger Conc (generic trade description)",
      "MEA-T (Monoethanolamine Triazine abbreviation)",
      "Amine Solution (Q2 Technologies descriptor)",
    ],
    localLanguageNames: [
      "Ch\u1EA5t h\u1EA5p th\u1EE5 H2S (H2S Absorbent)",
      "H\u00F3a ch\u1EA5t kh\u1EED hydro sulfide (Hydrogen Sulfide Remover)",
      "H\u00F3a ch\u1EA5t x\u1EED l\u00FD kh\u00ED chua (Sour Gas Treatment Chemical)",
      "Ch\u1EA5t kh\u1EED l\u01B0u hu\u1EF3nh (Desulfurization Chemical)",
      "Triazine x\u1EED l\u00FD kh\u00ED chua (Sour Gas Triazine)",
      "H\u00F3a ch\u1EA5t d\u1EA7u kh\u00ED MEA Triazine (Oil & Gas Chemical)",
    ],
    faqs: [
      {
        question:
          "Can you supply MEA Triazine 78% to Vietnam with CIF delivery?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% CIF to Cat Lai port (Ho Chi Minh City) and Hai Phong port. Typical transit from India is 8\u201312 days by sea freight. We provide all required import documentation including Certificate of Analysis, GHS-compliant SDS, and packing list.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Vietnam?",
        answer:
          "Vietnam requires chemical import licensing under Decree 113/2017/ND-CP. You will need a Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and TCVN-compliant labeling. Vasudev Chemo Pharma provides all export documentation to facilitate smooth customs clearance.",
      },
      {
        question:
          "How does your MEA Triazine 78% compare to Chinese-sourced triazine?",
        answer:
          "Most Chinese suppliers offer 70\u201375% active concentration, while our product guarantees \u226578% active content verified by batch Certificate of Analysis. Higher concentration means lower dosing rates and reduced logistics cost per unit of H2S removed. We also provide consistent quality with full GHS-compliant documentation.",
      },
      {
        question:
          "What brand names is MEA Triazine known by in Vietnam?",
        answer:
          "MEA Triazine (CAS 4719-04-4) is recognized in Vietnam under several names including BK Biocide, H2S Scavenger Conc, MEA-T, Grotan BK (equivalent), and Vietnamese terms such as ch\u1EA5t h\u1EA5p th\u1EE5 H2S and h\u00F3a ch\u1EA5t x\u1EED l\u00FD kh\u00ED chua. Our product matches all specifications under these names.",
      },
    ],
    oilfields: [],
  },

  /* ── United States ──────────────────────────────────────────────────── */
  "united-states": {
    slug: "united-states",
    countryName: "United States",
    regionLabel: "North America",
    flag: "\u{1F1FA}\u{1F1F8}",
    title: "MEA Triazine 78% Supplier to the USA — CIF Houston",
    description:
      "Vasudev Chemo Pharma exports MEA Triazine 78% to the United States. CIF Houston delivery. TSCA-listed, GHS-compliant SDS. Direct manufacturer pricing for E&P operators and distributors.",
    keywords: [
      "MEA Triazine USA",
      "H2S scavenger United States",
      "MEA Triazine 78 CIF Houston",
      "triazine manufacturer India to USA",
      "TSCA MEA Triazine",
      "H2S scavenger Permian Basin",
      "Pro3 equivalent",
    ],
    h1: "MEA Triazine 78% Supplier to the USA \u2014 CIF Houston",
    intro:
      "Vasudev Chemo Pharma exports MEA Triazine 78% to the United States with CIF Houston delivery. The product is listed on the TSCA inventory and ships with a GHS-compliant SDS meeting OSHA HazCom 2012 requirements. We supply in 200 L drums, 1,000 L IBC totes, and ISO tanks for bulk contracts \u2014 ideal for independent E&P operators, midstream companies, and chemical distributors seeking transparent, unbundled pricing.",
    logistics: {
      port: "Houston, TX",
      transitDays: "25\u201330 days",
      packaging: "200 L drums, 1,000 L IBC totes, ISO tanks",
      incoterms: "CIF Houston",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS) \u2014 GHS / OSHA HazCom 2012 compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "TSCA certification (CAS 4719-04-4 listed)",
      "DOT classification UN3082",
    ],
    localBrandNames: [
      "Pro3 / Pro3 HT / Pro3 GT / Pro3 NGL (Q2 Technologies)",
      "PureMark M500 / PureMark B800 (Foremark Performance Chemicals)",
      "Enviro-Scrub / Enviro-Scrub Bio (Q2 Technologies)",
      "HSCAV-80 / Kontin (Geocon Products)",
      "HS-1526-40 (Univar Solutions product code)",
      "Sulfa-Check (oilfield trade name)",
      "Bioban GK (Dow Chemical)",
      "Onyxide 200 (Lonza)",
      "Busan 1060 / Busan 1506 (Buckman Laboratories)",
      "Nuosept 78 (industrial preservative)",
      "Protectol HT (BASF)",
      "Triadine 3 / Triadine 10 (Arxada / Lonza)",
      "Troyshield B2 (Troy Chemical)",
    ],
    localLanguageNames: [],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to the United States?",
        answer:
          "Yes. Vasudev Chemo Pharma exports MEA Triazine 78% to the USA with CIF Houston delivery. The product is listed on the TSCA inventory and ships with a GHS-compliant SDS meeting OSHA HazCom 2012 requirements. We supply in 200L drums, 1,000L IBC totes, and ISO tanks for bulk contracts.",
      },
      {
        question: "Is MEA Triazine 78% listed on the US TSCA inventory?",
        answer:
          "Yes. MEA Triazine (CAS 4719-04-4, Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine) is listed on the TSCA inventory. It is classified as a non-hazardous material for sea shipment and ships under DOT classification UN3082 for US domestic transport.",
      },
      {
        question:
          "What are the equivalent brand names for MEA Triazine in the US market?",
        answer:
          "In the US market, MEA Triazine 78% (CAS 4719-04-4) is sold under brands including Pro3 and Pro3 HT (Q2 Technologies), PureMark M500 and PureMark B800 (Foremark Performance), HSCAV-80 (Geocon), Bioban GK (Dow), Onyxide 200 (Lonza), Protectol HT (BASF), and Triadine 3 (Arxada). Our product is a direct equivalent to all of these.",
      },
      {
        question:
          "How does your pricing compare to US oilfield service companies?",
        answer:
          "Major US competitors like ChampionX, Baker Hughes, and SLB bundle triazine chemistry with field services at premium pricing. As a direct manufacturer, Vasudev Chemo Pharma offers equivalent 78% active MEA Triazine at significantly lower cost \u2014 ideal for independent E&P operators, midstream companies, and chemical distributors seeking transparent, unbundled pricing.",
      },
    ],
    oilfields: [
      "Permian Basin operations",
      "Eagle Ford Shale",
      "Haynesville Shale gas processing",
      "Gulf of Mexico offshore platforms",
      "Marcellus/Utica Shale midstream",
    ],
  },

  /* ── UAE ─────────────────────────────────────────────────────────────── */
  uae: {
    slug: "uae",
    countryName: "UAE",
    regionLabel: "Middle East / GCC",
    flag: "\u{1F1E6}\u{1F1EA}",
    title: "MEA Triazine 78% Supplier to UAE — CIF Jebel Ali",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to UAE via Jebel Ali and Khalifa Port. 3\u20135 day transit from India. Re-export support for GCC distribution.",
    keywords: [
      "MEA Triazine UAE",
      "H2S scavenger Dubai",
      "MEA Triazine 78 Jebel Ali",
      "triazine supplier Abu Dhabi",
      "H2S scavenger ADNOC",
      "BASOLON SC 78 equivalent",
    ],
    h1: "MEA Triazine 78% Supplier to UAE \u2014 CIF Jebel Ali Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% CIF to Jebel Ali Port (Dubai) and Khalifa Port (Abu Dhabi) with transit times of just 3\u20135 days from India. We also support re-export from Jebel Ali Free Trade Zone for distribution across Saudi Arabia, Oman, Qatar, and Kuwait. The product meets Abu Dhabi EHS regulatory framework requirements and UAE Federal chemical regulations.",
    logistics: {
      port: "Jebel Ali (Dubai), Khalifa Port (Abu Dhabi)",
      transitDays: "3\u20135 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Jebel Ali / CIF Khalifa Port",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "Abu Dhabi EHS compliance documentation",
      "UAE Civil Defence storage compliance docs",
    ],
    localBrandNames: [
      "RXSOL-43-8160-210 (RX Chemicals, UAE/India/Oman)",
      "Saudi Multichem MEA Triazine (Saudi Arabia regional producer)",
      "Geco Chemicals Triazine (UAE, Alibaba-listed)",
      "G-SCAV EA77 (77% active, specialty scavenger)",
      "BASOLON SC 78 (BASF, 78% H2S scavenger)",
      "STEPANQUAT 200 (Stepan Company)",
      "H2Stopper 1908C (specialty H2S scavenger)",
      "SINE PF77 (Chinese manufacturer, multiple variants)",
      "Dorf Ketal (service company, ADNOC JVs)",
      "Scomi Group (regional oilfield services)",
    ],
    localLanguageNames: [
      "\u0645\u0632\u064A\u0644 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Scavenger)",
      "\u0643\u0627\u0633\u062D H2S (H2S Scavenger)",
      "\u0645\u0627\u062F\u0629 \u0625\u0632\u0627\u0644\u0629 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Removal Substance)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment)",
      "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0643\u0628\u0631\u064A\u062A (Desulfurization)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 (Oilfield Chemicals)",
      "\u0645\u0628\u064A\u062F \u062D\u064A\u0648\u064A \u062A\u0631\u0627\u064A\u0627\u0632\u064A\u0646 (Triazine Biocide)",
    ],
    faqs: [
      {
        question:
          "Can you supply MEA Triazine 78% to the UAE and GCC countries?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% CIF to Jebel Ali Port (Dubai) and Khalifa Port (Abu Dhabi) with transit times of just 3\u20135 days from India. We also support re-export from Jebel Ali Free Trade Zone for distribution across Saudi Arabia, Oman, Qatar, and Kuwait.",
      },
      {
        question:
          "Can MEA Triazine 78% handle the high H2S concentrations in UAE sour gas fields?",
        answer:
          "Yes. MEA Triazine 78% is deployed in ultra-sour gas operations including fields with H2S concentrations exceeding 20%. At 78% active concentration, it delivers fast reaction kinetics for continuous injection systems and contactor towers used in Shah, Habshan, and Ghasha field operations.",
      },
      {
        question:
          "What brand names is MEA Triazine known by in the UAE and GCC?",
        answer:
          "In the UAE/GCC market, MEA Triazine (CAS 4719-04-4) is recognized under brand names including RXSOL-43-8160-210 (RX Chemicals), G-SCAV EA77, BASOLON SC 78 (BASF), STEPANQUAT 200 (Stepan), Grotan BK, and Protectol HT (BASF). Saudi Multichem Company is a regional producer. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "Does the product meet Abu Dhabi EHS and UAE regulatory requirements?",
        answer:
          "Yes. Our MEA Triazine 78% ships with a GHS-compliant Safety Data Sheet and Certificate of Analysis. The product meets Abu Dhabi EHS regulatory framework requirements and UAE Federal chemical regulations. We provide all documentation required for UAE customs clearance and Civil Defence storage compliance.",
      },
    ],
    oilfields: [
      "Shah ultra-sour gas field (ADNOC)",
      "Habshan gas processing complex (ADNOC)",
      "Ghasha concession (ADNOC)",
      "Upper Zakum field",
      "ADNOC Offshore operations",
    ],
  },

  /* ── Oman ────────────────────────────────────────────────────────────── */
  oman: {
    slug: "oman",
    countryName: "Oman",
    regionLabel: "Middle East / GCC",
    flag: "\u{1F1F4}\u{1F1F2}",
    title: "MEA Triazine 78% Supplier to Oman — CIF Sohar Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Oman via Sohar Port. 2\u20134 day transit from India. PDO vendor pre-qualification support.",
    keywords: [
      "MEA Triazine Oman",
      "H2S scavenger Oman",
      "MEA Triazine 78 Sohar Port",
      "triazine supplier PDO",
      "H2S scavenger Oman oilfield",
      "RXSOL H2S Scavenger Oman",
    ],
    h1: "MEA Triazine 78% Supplier to Oman \u2014 CIF Sohar Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% directly to Oman via Sohar Port with transit times of just 2\u20134 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with batch Certificates of Analysis and GHS-compliant Safety Data Sheets. We also support PDO vendor pre-qualification documentation.",
    logistics: {
      port: "Sohar Port, Sultan Qaboos Port (Muscat)",
      transitDays: "2\u20134 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Sohar / CIF Muscat",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "Oman Ministry of Commerce and Industry compliance",
    ],
    localBrandNames: [
      "RXSOL H2S Scavenger (RXSOL-11-5014-210, Oman Chemical)",
      "MC MX 2-1106 (Muscat Chemical, H2S scavenger equivalent)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "SULFA-CLEAR\u2122 8411C (Lubrizol, 60% MEA Triazine)",
      "OS TRI-SCAV (OSS Ltd., triazine-based H2S scavenger)",
      "BASOLON SC 78 (IRO Chemical, regional distribution)",
      "SINE PF77 (IRO Chemical, regional distribution)",
      "MBBT H2S Scavenger (Muscat & Barka Business Trading)",
      "OOISS Triazine (Oman Oil Industry Supplies & Services)",
      "ICPL Triazine H2S Scavenger (Imperial Oilfield Chemicals)",
    ],
    localLanguageNames: [
      "\u0645\u0632\u064A\u0644 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Scavenger)",
      "\u0643\u0627\u0633\u062D H2S (H2S Scavenger)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 (Oilfield Chemicals)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Oman?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% directly to Oman via Sohar Port with transit times of just 2\u20134 days from India. We supply in 200-litre drums and 1,000-litre IBC totes, accompanied by batch Certificates of Analysis and GHS-compliant Safety Data Sheets. We also support PDO vendor pre-qualification documentation.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in PDO-operated wells in Oman?",
        answer:
          "Yes. MEA Triazine 78% is compatible with all PDO sour gas field operations, including the Yibal, Lekhwair, and Birba fields. It is also suitable for Oman LNG operations and BP\u2019s Khazzan tight gas project. The product\u2019s high 78% active concentration provides efficient H2S scavenging for both wellhead injection and midstream gas sweetening applications.",
      },
      {
        question: "What brand names is MEA Triazine known by in Oman?",
        answer:
          "In Oman, MEA Triazine (CAS 4719-04-4) is recognized under brand names including RXSOL H2S Scavenger (RXSOL-11-5014-210, Oman Chemical), MC MX 2-1106 (Muscat Chemical), SULFA-CLEAR 8411HC (Lubrizol), OS TRI-SCAV (OSS Ltd.), BASOLON SC 78, and SINE PF77. Muscat & Barka Business Trading (MBBT) and Oman Oil Industry Supplies & Services (OOISS) also supply triazine-based H2S scavengers. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Oman?",
        answer:
          "Importing MEA Triazine 78% into Oman requires compliance with the Oman Ministry of Commerce and Industry chemical import rules. You will need a Certificate of Analysis (CoA), GHS-compliant Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and Bill of Lading. Vasudev Chemo Pharma provides all export documentation to facilitate customs clearance at Sohar Port or Sultan Qaboos Port in Muscat.",
      },
    ],
    oilfields: [
      "Yibal field (PDO)",
      "Lekhwair field (PDO)",
      "Birba field (PDO)",
      "Oman LNG operations",
      "BP Khazzan tight gas project",
    ],
  },

  /* ── Egypt ───────────────────────────────────────────────────────────── */
  egypt: {
    slug: "egypt",
    countryName: "Egypt",
    regionLabel: "North Africa / MENA",
    flag: "\u{1F1EA}\u{1F1EC}",
    title: "MEA Triazine 78% Supplier to Egypt — CIF Alexandria",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Egypt via Alexandria and Damietta ports. 10\u201314 day transit. Documentation formatted for GOEIC import procedures.",
    keywords: [
      "MEA Triazine Egypt",
      "H2S scavenger Egypt",
      "MEA Triazine 78 Alexandria",
      "triazine supplier Zohr gas field",
      "H2S scavenger MIDOR refinery",
      "ACPA H2S Scavenger equivalent",
    ],
    h1: "MEA Triazine 78% Supplier to Egypt \u2014 CIF Alexandria Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Egypt via Alexandria Port and Damietta Port with transit times of 10\u201314 days from India via the Suez route. We supply in 200-litre drums and 1,000-litre IBC totes with documentation formatted for Egyptian customs and GOEIC import procedures.",
    logistics: {
      port: "Alexandria Port, Damietta Port",
      transitDays: "10\u201314 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Alexandria / CIF Damietta",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "GOEIC (General Organization for Export and Import Control) testing documentation",
      "EEAA (Egyptian Environmental Affairs Agency) standards documentation",
    ],
    localBrandNames: [
      "ACPA H2S Scavenger (Alexandria Company for Petroleum Additives)",
      "AquaNile H2S Scavenger (Giza/Cairo)",
      "MPC H2S Scavenger (Manufacture of Production Chemicals, Alamia Oil Services Group)",
      "Scomi Egypt drilling chemicals (Scomi Group Bhd)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol)",
      "ICG MEA Triazine 40/60/77% (International Chemical Group)",
      "Filtron H2S Scavenger (Filtron Envirotech, India)",
      "CACIDE 301 (biodegradable triazine biocide)",
    ],
    localLanguageNames: [
      "\u0645\u0632\u064A\u0644 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Scavenger)",
      "\u0643\u0627\u0633\u062D H2S (H2S Scavenger)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 (Oilfield Chemicals)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Egypt?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Egypt via Alexandria Port and Damietta Port with transit times of 10\u201314 days from India via the Suez route. We supply in 200-litre drums and 1,000-litre IBC totes, accompanied by batch Certificates of Analysis and GHS-compliant Safety Data Sheets formatted for Egyptian customs and GOEIC import procedures.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in the Zohr gas processing facility in Egypt?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Egypt\u2019s major gas operations, including the Zohr field in the Mediterranean, Nooros field, Nile Delta offshore operations, and Western Desert gas production assets. It is also used in Egyptian refineries such as MIDOR (Alexandria) and Assiut for gas sweetening and crude oil stabilisation.",
      },
      {
        question: "What brand names is MEA Triazine known by in Egypt?",
        answer:
          "In Egypt, MEA Triazine (CAS 4719-04-4) is supplied under brand names including ACPA H2S Scavenger (Alexandria Company for Petroleum Additives), AquaNile H2S Scavenger (Giza/Cairo), MPC H2S Scavenger (Alamia Oil Services Group, Alexandria), and Scomi Egypt drilling chemicals. International brands such as SULFA-CLEAR 8411HC (Lubrizol), ICG MEA Triazine (International Chemical Group), and CACIDE 301 are also distributed. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Egypt?",
        answer:
          "Importing MEA Triazine 78% into Egypt requires compliance with the Egyptian Chemical Law and GOEIC (General Organization for Export and Import Control) testing requirements. You will need a Certificate of Analysis (CoA), GHS-compliant Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and documentation meeting EEAA (Egyptian Environmental Affairs Agency) standards. Vasudev Chemo Pharma provides all export documentation formatted for Egyptian customs clearance.",
      },
    ],
    oilfields: [
      "Zohr gas field (Mediterranean)",
      "Nooros field",
      "Nile Delta offshore operations",
      "Western Desert gas production",
      "MIDOR refinery (Alexandria)",
      "Assiut refinery",
    ],
  },

  /* ── Brazil ──────────────────────────────────────────────────────────── */
  brazil: {
    slug: "brazil",
    countryName: "Brazil",
    regionLabel: "South America",
    flag: "\u{1F1E7}\u{1F1F7}",
    title: "MEA Triazine 78% Supplier to Brazil — CIF Santos",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Brazil via Santos Port. 20\u201325 day transit. Petrobras specification compliant. Documentation in Portuguese and English.",
    keywords: [
      "MEA Triazine Brazil",
      "H2S scavenger Brazil",
      "MEA Triazina 78 CIF Santos",
      "triazine supplier Petrobras",
      "H2S scavenger pre-salt",
      "SCAVTREAT 1063 equivalent",
      "triazine manufacturer India to Brazil",
    ],
    h1: "MEA Triazine 78% Supplier to Brazil \u2014 CIF Santos",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Brazil via Santos Port and Paranagu\u00E1 with transit times of 20\u201325 days from India. Each shipment includes a Certificate of Analysis in Portuguese and English, a GHS-compliant SDS meeting ABNT-NBR standards, and documentation formatted for Receita Federal customs clearance. Our product meets Petrobras specification ET-3010.00-1260-010-PNG-027.",
    logistics: {
      port: "Santos Port, Paranagu\u00E1",
      transitDays: "20\u201325 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Santos / CIF Paranagu\u00E1",
    },
    importDocs: [
      "Certificate of Analysis (CoA) \u2014 Portuguese and English",
      "Safety Data Sheet (SDS/FISPQ) \u2014 ABNT-NBR compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "IBAMA environmental licensing",
      "Receita Federal customs documentation",
      "INMETRO standards compliance",
    ],
    localBrandNames: [
      "Global Trend MEA-Triazina 78% (Rio de Janeiro, local supplier)",
      "SCAVTREAT 1063 (Clariant Oil Services)",
      "ABATE\u2122 S-200 Scavenger (Dow Chemical)",
      "Brenntag MEA / Triazine (Brenntag Qu\u00EDmica Brasil, S\u00E3o Paulo)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "BerrySweet\u2122 80% (Berryman Chemical)",
      "ICS-5780 (International Chemical Group, 77% MEA Triazine)",
      "SLB Triazine H2S Scavenger (Schlumberger)",
      "Nalco/Ecolab H2S Scavenger (Ecolab Brasil)",
      "Foscote MEA (Foscote Group)",
    ],
    localLanguageNames: [],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Brazil?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Brazil via Santos Port and Paranagu\u00E1 with transit times of 20\u201325 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with CIF Santos pricing available. Each shipment includes a Certificate of Analysis in Portuguese and English, a GHS-compliant SDS meeting ABNT-NBR standards, and documentation formatted for Receita Federal customs clearance.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in Brazilian pre-salt operations?",
        answer:
          "Yes. MEA Triazine 78% meets the requirements of Petrobras specification ET-3010.00-1260-010-PNG-027 for Hexa-hidro-1,3,5-tris(hidroxietil)-s-triazina with minimum 70% concentration. It is suitable for H2S scavenging in Santos Basin pre-salt fields (Buzios, Tupi, Lula), Campos Basin operations, FPSO topside gas sweetening, and deepwater wellhead injection applications.",
      },
      {
        question: "What brand names is MEA Triazine known by in Brazil?",
        answer:
          "In Brazil, MEA Triazine (CAS 4719-04-4, also known as MEA-Triazina) is supplied under brand names including Global Trend MEA-Triazina 78% (Rio de Janeiro), SCAVTREAT 1063 (Clariant Oil Services), ABATE S-200 (Dow Chemical), Brenntag MEA/Triazine, SULFA-CLEAR 8411HC (Lubrizol), BerrySweet 80% (Berryman Chemical), ICS-5780 (ICG), and Nalco/Ecolab H2S Scavenger. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Brazil?",
        answer:
          "Importing MEA Triazine 78% into Brazil requires compliance with IBAMA environmental licensing, Receita Federal customs rules, and INMETRO standards. You will need a Certificate of Analysis (CoA), GHS-compliant Safety Data Sheet (SDS/FISPQ) meeting ABNT-NBR standards, packing list, commercial invoice, and Bill of Lading. Vasudev Chemo Pharma provides all export documentation in Portuguese and English formatted for Brazilian customs clearance.",
      },
    ],
    oilfields: [
      "Santos Basin pre-salt fields (Buzios, Tupi, Lula)",
      "Campos Basin operations",
      "FPSO topside gas sweetening",
      "Deepwater wellhead injection",
    ],
  },

  /* ── Saudi Arabia ────────────────────────────────────────────────────── */
  "saudi-arabia": {
    slug: "saudi-arabia",
    countryName: "Saudi Arabia",
    regionLabel: "Middle East / GCC",
    flag: "\u{1F1F8}\u{1F1E6}",
    title: "MEA Triazine 78% Supplier to Saudi Arabia — CIF Dammam",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Saudi Arabia via Dammam and Jeddah. 4\u20137 day transit. SASO-compliant documentation. Saudi Aramco grade.",
    keywords: [
      "MEA Triazine Saudi Arabia",
      "H2S scavenger KSA",
      "MEA Triazine 78 Dammam",
      "triazine supplier Saudi Aramco",
      "H2S scavenger Ghawar",
      "Chemara HS-1501 equivalent",
      "IKTVA triazine supplier",
    ],
    h1: "MEA Triazine 78% Supplier to Saudi Arabia \u2014 CIF Dammam",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to the Kingdom of Saudi Arabia via King Abdulaziz Port (Dammam) and Jeddah Islamic Port with transit times of just 4\u20137 days from India. We supply with SASO-compliant documentation, batch Certificate of Analysis, and GHS-aligned Safety Data Sheet in both English and Arabic.",
    logistics: {
      port: "King Abdulaziz Port (Dammam), Jeddah Islamic Port",
      transitDays: "4\u20137 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Dammam / CIF Jeddah",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-aligned, English and Arabic",
      "SASO-compliant labeling and documentation",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "SAMSS quality compliance (for Saudi Aramco supply)",
    ],
    localBrandNames: [
      "Chemara HS-1501 (Saudi Multichem, Dammam \u2014 local manufacturer)",
      "G-SCAV Triazine H2S Scavenger 78% (Global Company for Chemical Industries, Jubail)",
      "SUGEST H2S Scavenger (Dammam, Aramco approved vendor #10045611)",
      "CHEMAOIL Triazine (amine-based H2S scavenger, KSA)",
      "NassGuard MEA (oilfield chemicals, Dammam/Jubail)",
      "REPC Triazine (Dammam, serves Saudi Aramco)",
      "UCC Triazine (United Chemical Company, Dammam)",
      "Alkemist KSA MEA (Dammam, Eastern Province wholesale)",
      "DubiChem Triazine Biocide (UAE, distributes to KSA)",
      "Cola\u00AETriazine 50 ME (Colonial Chemical, Middle East)",
      "HME-FILM MEA Triazine (MED Drilling Fluids, GCC)",
    ],
    localLanguageNames: [
      "\u0645\u0632\u064A\u0644 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Scavenger)",
      "\u0643\u0627\u0633\u062D H2S (H2S Scavenger)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment)",
      "\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0643\u0628\u0631\u064A\u062A (Desulfurization)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 (Oilfield Chemicals)",
    ],
    faqs: [
      {
        question:
          "Can you supply MEA Triazine 78% to Saudi Arabia?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to the Kingdom of Saudi Arabia via King Abdulaziz Port (Dammam) and Jeddah Islamic Port with transit times of just 4\u20137 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with SASO-compliant documentation, batch Certificate of Analysis, and GHS-aligned Safety Data Sheet in both English and Arabic.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in Saudi Aramco operations?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Saudi Aramco\u2019s upstream and gas processing infrastructure, including the Ghawar field, Wasit and Fadhili gas plants, Haradh Gas Plant, Khurais and Safaniyah fields, and the Jafurah unconventional gas development. It is also used in SABIC petrochemical operations and NGL processing applications throughout the Kingdom.",
      },
      {
        question:
          "What brand names is MEA Triazine known by in Saudi Arabia?",
        answer:
          "In Saudi Arabia, MEA Triazine (CAS 4719-04-4) is manufactured and supplied under brand names including Chemara HS-1501 (Saudi Multichem, Dammam), G-SCAV Triazine 78% (Global Company for Chemical Industries, Jubail), SUGEST H2S Scavenger (Aramco vendor #10045611), NassGuard MEA, REPC Triazine, UCC Triazine (United Chemical Company), and Alkemist KSA. SABIC produces monoethanolamine (MEA) raw material at Jubail. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "What documents and certifications are needed to import MEA Triazine 78% into Saudi Arabia?",
        answer:
          "Importing MEA Triazine 78% into Saudi Arabia requires SASO-compliant labeling and documentation, GHS-aligned Safety Data Sheet in English and Arabic, Certificate of Analysis, packing list, commercial invoice, and Bill of Lading. For Saudi Aramco supply, SAMSS (Saudi Aramco Material System Specification) quality compliance is advantageous. Vasudev Chemo Pharma provides all documentation and supports IKTVA (In-Kingdom Total Value Add) program requirements for local content compliance under Saudi Vision 2030.",
      },
    ],
    oilfields: [
      "Ghawar field",
      "Wasit gas plant",
      "Fadhili gas plant",
      "Haradh Gas Plant",
      "Khurais field",
      "Safaniyah field",
      "Jafurah unconventional gas development",
    ],
  },

  /* ── Iraq ─────────────────────────────────────────────────────────────── */
  iraq: {
    slug: "iraq",
    countryName: "Iraq",
    regionLabel: "Middle East",
    flag: "\u{1F1EE}\u{1F1F6}",
    title: "MEA Triazine 78% Supplier to Iraq — CIF Umm Qasr",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iraq via Umm Qasr Port (Basra). 8\u201312 day transit. Also supplies Kurdistan Region via Turkey.",
    keywords: [
      "MEA Triazine Iraq",
      "H2S scavenger Iraq",
      "MEA Triazine 78 Umm Qasr",
      "triazine supplier Basra",
      "H2S scavenger Rumaila",
      "oilfield chemicals Iraq",
    ],
    h1: "MEA Triazine 78% Supplier to Iraq \u2014 CIF Umm Qasr (Basra)",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iraq via Umm Qasr Port (Basra) with transit times of 8\u201312 days from India. For Kurdistan Region operators, supply is also available via land routes through Turkey to Erbil. We supply in 200-litre drums and 1,000-litre IBC totes with full export documentation.",
    logistics: {
      port: "Umm Qasr Port (Basra), Erbil (via Turkey land route)",
      transitDays: "8\u201312 days (sea), variable (land via Turkey)",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Umm Qasr / DAP Erbil",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "Iraqi Ministry of Oil procurement compliance",
      "Chemical import licensing",
      "KRG-specific documentation (for Kurdistan Region imports)",
    ],
    localBrandNames: [
      "Tawreed H2S Scavenger (Baghdad, ISO-certified oilfield chemicals)",
      "ALDUHA H2S Scavenger (ALDUHA Engineering Group, Basra)",
      "SAHARA MEA Triazine (SAHARA Middle East Petroleum Services, North Rumaila)",
      "Federal Group / Advanced Chemicals (Erbil, Kurdistan Region)",
      "Sama Alyarmouk Oilfield Chemicals (Baghdad)",
      "Manar Al-Basra Oilfield Services (Basra)",
      "Petrobon MEA (Petrobon Trading, Iran \u2192 Iraq import)",
      "Ishtar MEA (Ishtar Company, petroleum/chemicals)",
      "ATDMCO MEA (ATDM Company, UAE/Turkey \u2192 Iraq supply)",
      "TAQA Group Chemicals (Iraq, oil & gas chemical distributor)",
      "Falizan HS-9003 (Falizan Tasfyeh, Iran)",
      "Xipeng MEA Triazine 78% (Xipeng Technology, China export)",
    ],
    localLanguageNames: [
      "\u0645\u0632\u064A\u0644 \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 (H2S Scavenger)",
      "\u0643\u0627\u0633\u062D H2S (H2S Scavenger)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 (Oilfield Chemicals)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Iraq?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Iraq via Umm Qasr Port (Basra) with transit times of 8\u201312 days from India. For Kurdistan Region operators, supply is also available via land routes through Turkey to Erbil. We supply in 200-litre drums and 1,000-litre IBC totes with full export documentation including Certificate of Analysis and GHS-compliant SDS.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in Iraqi oilfield operations?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Iraq\u2019s major oil and gas infrastructure, including the Rumaila field (BP JV), West Qurna field (Shell/ExxonMobil JVs), Zubair field, Halfaya field, Basra Gas Company operations, the Karbala refinery, and Kurdistan Regional Government (KRG) oilfields. It meets the HSE requirements of international oil company (IOC) service contractors operating in Iraq.",
      },
      {
        question: "What brand names is MEA Triazine known by in Iraq?",
        answer:
          "As there are no significant domestic manufacturers of MEA Triazine in Iraq, the product is supplied by local distributors and importers including Tawreed (Baghdad), ALDUHA Engineering Group (Basra), SAHARA Middle East Petroleum Services (North Rumaila), Federal Group / Advanced Chemicals (Erbil), Sama Alyarmouk (Baghdad), Petrobon (Iran/Iraq), and Ishtar Company. IOC contractors use Baker Hughes, ChampionX, and Dorf Ketal brands. Our product is a direct equivalent to all these supplies.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Iraq?",
        answer:
          "Importing MEA Triazine 78% into Iraq requires compliance with Iraqi Ministry of Oil procurement standards and chemical import licensing. You will need a Certificate of Analysis (CoA), GHS-compliant Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and Bill of Lading. For Kurdistan Region imports, KRG-specific documentation may apply. Vasudev Chemo Pharma provides all export documentation formatted for Iraqi customs clearance at both Umm Qasr and Erbil entry points.",
      },
    ],
    oilfields: [
      "Rumaila field (BP JV)",
      "West Qurna field (Shell/ExxonMobil JVs)",
      "Zubair field",
      "Halfaya field",
      "Basra Gas Company operations",
      "Karbala refinery",
      "Kurdistan Regional Government (KRG) oilfields",
    ],
  },

  /* ── Qatar ───────────────────────────────────────────────────────────── */
  qatar: {
    slug: "qatar",
    countryName: "Qatar",
    regionLabel: "Middle East / GCC",
    flag: "\u{1F1F6}\u{1F1E6}",
    title: "MEA Triazine 78% Supplier to Qatar — CIF Hamad Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Qatar via Hamad Port. 3\u20135 day transit. QatarEnergy vendor pre-qualification support for Ras Laffan and North Field.",
    keywords: [
      "MEA Triazine Qatar",
      "H2S scavenger Qatar",
      "MEA Triazine 78 Hamad Port",
      "triazine supplier QatarEnergy",
      "H2S scavenger North Field",
      "H2S scavenger Ras Laffan",
      "BKC Gulf Triazine equivalent",
    ],
    h1: "MEA Triazine 78% Supplier to Qatar \u2014 CIF Hamad Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Qatar via Hamad Port with transit times of just 3\u20135 days from India. We support QatarEnergy vendor pre-qualification documentation for supply into Ras Laffan and North Field operations \u2014 the world\u2019s largest non-associated gas field.",
    logistics: {
      port: "Hamad Port",
      transitDays: "3\u20135 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Hamad Port (Doha)",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "Qatar Standards (QS) for chemicals compliance",
      "Qatar Ministry of Environment regulatory documentation",
    ],
    localBrandNames: [
      "BKC Gulf Triazine Scavenger (Qatar-focused supplier)",
      "RXSOL Triazine Based Biocide (RXSOL-43-8160-210, DubiChem/RX Marine)",
      "DubiChem Triazine Biocide (distributed to GCC incl. Qatar)",
      "HS-1526-40 (Univar Solutions)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "ChampionX H2S Scavenger (QatarEnergy-approved)",
      "Baker Hughes H2S Scavenger (QatarEnergy-approved)",
      "Halliburton Triazine (QatarEnergy vendor)",
      "G-SCAV EA77 (77% active, GCC oilfields)",
      "BASOLON SC 78 (IRO Chemical)",
      "ICPL Triazine H2S Scavenger (Imperial Oilfield Chemicals)",
      "K2P MEA-T (K2P Chemical Products)",
      "JadeScan54 (Jay Dinesh Chemicals, Indian export)",
    ],
    localLanguageNames: [
      "\u0643\u0627\u0633\u062D \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 \u0642\u0637\u0631 (H2S Scavenger Qatar)",
      "\u0645\u0648\u0631\u062F \u062A\u0631\u0627\u064A\u0627\u0632\u064A\u0646 \u0642\u0637\u0631 (Triazine Supplier Qatar)",
      "\u0645\u0648\u0631\u062F \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0642\u0637\u0631 (Gas Treatment Chemical Supplier Qatar)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 \u0642\u0637\u0631 (Sour Gas Treatment Qatar)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 \u0642\u0637\u0631 (Oilfield Chemicals Qatar)",
      "\u0643\u0627\u0633\u062D H2S \u062D\u0642\u0644 \u0627\u0644\u0634\u0645\u0627\u0644 (H2S Scavenger North Field)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Qatar?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Qatar via Hamad Port with transit times of just 3\u20135 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with batch Certificate of Analysis and GHS-compliant Safety Data Sheet. We also support QatarEnergy vendor pre-qualification documentation for supply into Ras Laffan and North Field operations.",
      },
      {
        question:
          "Can MEA Triazine 78% be used at QatarEnergy\u2019s Ras Laffan and North Field facilities?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Qatar\u2019s major gas operations, including QatarEnergy\u2019s North Field (the world\u2019s largest non-associated gas field), Ras Laffan LNG complex, North Field Expansion projects (NFE and NFS), Pearl GTL, and the Dolphin gas pipeline. It is also used in Dukhan field operations and the Mesaieed Industrial City gas processing infrastructure.",
      },
      {
        question: "What brand names is MEA Triazine known by in Qatar?",
        answer:
          "In Qatar, MEA Triazine (CAS 4719-04-4) is supplied through several brands and distributors including BKC Gulf Triazine Scavenger (Qatar-focused), RXSOL Triazine Based Biocide (DubiChem), HS-1526-40 (Univar Solutions), SULFA-CLEAR 8411HC (Lubrizol), G-SCAV EA77, BASOLON SC 78, and ICPL Triazine H2S Scavenger. Major oilfield service companies ChampionX, Baker Hughes, and Halliburton also supply triazine-based H2S scavengers for QatarEnergy operations. Our product is a direct equivalent to all these brands.",
      },
      {
        question:
          "What documents are needed to import MEA Triazine 78% into Qatar?",
        answer:
          "Importing MEA Triazine 78% into Qatar requires compliance with Qatar Standards (QS) for chemicals and Qatar Ministry of Environment regulations. You will need a Certificate of Analysis (CoA), GHS-compliant Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and Bill of Lading. Vasudev Chemo Pharma provides all export documentation formatted for Qatar customs clearance at Hamad Port.",
      },
    ],
    oilfields: [
      "North Field (world\u2019s largest non-associated gas field)",
      "Ras Laffan LNG complex",
      "North Field Expansion projects (NFE and NFS)",
      "Pearl GTL",
      "Dolphin gas pipeline",
      "Dukhan field operations",
      "Mesaieed Industrial City gas processing",
    ],
  },

  /* ── Kuwait ──────────────────────────────────────────────────────────── */
  kuwait: {
    slug: "kuwait",
    countryName: "Kuwait",
    regionLabel: "Middle East / GCC",
    flag: "\u{1F1F0}\u{1F1FC}",
    title: "MEA Triazine 78% Supplier to Kuwait — CIF Shuwaikh Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Kuwait via Shuwaikh and Shuaiba ports. 4\u20136 day transit. KOC vendor pre-qualification support.",
    keywords: [
      "MEA Triazine Kuwait",
      "H2S scavenger Kuwait",
      "MEA Triazine 78 Shuwaikh",
      "triazine supplier KOC",
      "H2S scavenger Burgan field",
      "oilfield chemicals Kuwait",
      "Triasorb alternative Kuwait",
    ],
    h1: "MEA Triazine 78% Supplier to Kuwait \u2014 CIF Shuwaikh Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Kuwait via Shuwaikh Port and Shuaiba Port with transit times of just 4\u20136 days from India. We support KOC (Kuwait Oil Company) vendor pre-qualification documentation and supply in 200-litre drums and 1,000-litre IBC totes.",
    logistics: {
      port: "Shuwaikh Port, Shuaiba Port",
      transitDays: "4\u20136 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Shuwaikh / CIF Shuaiba",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "KEPA (Kuwait Environment Public Authority) regulatory compliance",
      "KFSD (Kuwait Fire Service Directorate) chemical storage compliance",
    ],
    localBrandNames: [
      "Bait Al Aseel H\u2082S Scavenger \u2013 Triazine Based (Shuwaikh, Kuwait)",
      "RXSOL Triazine Based Biocide (RX Chemicals / DubiChem, GCC distribution)",
      "HME-FILM MEA Triazine (MED Drilling Fluids, GCC oilfield use)",
      "HS-1526-40 (Univar Solutions)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "ChampionX H2S Scavenger (KOC service contracts)",
      "Baker Hughes H2S Scavenger (KOC service contracts)",
      "Dorf Ketal H2S Scavenger (KOC service contracts)",
      "Triasorb\u00AE (Sintez-Oka, Russia)",
      "ICPL Triazine H2S Scavenger (Imperial Oilfield Chemicals, India)",
      "K2P MEA-T (K2P Chemical Products)",
      "G-SCAV EA77 (77% active, GCC oilfields)",
      "Sarex HPT Triazine (Sarex Chemicals, India)",
    ],
    localLanguageNames: [
      "\u0643\u0627\u0633\u062D \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 \u0627\u0644\u0643\u0648\u064A\u062A (H2S Scavenger Kuwait)",
      "\u0645\u0648\u0631\u062F \u062A\u0631\u0627\u064A\u0627\u0632\u064A\u0646 \u0627\u0644\u0643\u0648\u064A\u062A (Triazine Supplier Kuwait)",
      "\u0645\u0627\u062F\u0629 \u0625\u0632\u0627\u0644\u0629 H2S \u0644\u062D\u0642\u0648\u0644 \u0646\u0641\u0637 \u0627\u0644\u0643\u0648\u064A\u062A (H2S Removal for Kuwait Oilfields)",
      "\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 \u0627\u0644\u0643\u0648\u064A\u062A (Sour Gas Treatment Kuwait)",
      "\u0643\u064A\u0645\u0627\u0648\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 \u0627\u0644\u0643\u0648\u064A\u062A (Oilfield Chemicals Kuwait)",
      "\u0643\u0627\u0633\u062D H2S \u062D\u0642\u0644 \u0628\u0631\u0642\u0627\u0646 (H2S Scavenger Burgan Field)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Kuwait?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Kuwait via Shuwaikh Port and Shuaiba Port with transit times of just 4\u20136 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with batch Certificate of Analysis and GHS-compliant Safety Data Sheet. We support KOC (Kuwait Oil Company) vendor pre-qualification documentation.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in KOC and KNPC operations in Kuwait?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Kuwait Oil Company (KOC) upstream operations, including the Greater Burgan area (Burgan, Magwa, Ahmadi), Ratqa heavy oil field, Minagish field, and Wafra joint-operations field. It is also used at KNPC refineries including Mina Al Ahmadi and Mina Abdullah for sour crude processing and gas sweetening applications.",
      },
      {
        question: "What brand names is MEA Triazine known by in Kuwait?",
        answer:
          "In Kuwait, MEA Triazine (CAS 4719-04-4) is available through Bait Al Aseel Trading (H\u2082S Scavenger \u2013 Triazine Based, Shuwaikh), and DK Petrochemicals supplies raw MEA. International brands include RXSOL Triazine Based Biocide (DubiChem), HME-FILM MEA Triazine (MED Drilling Fluids), HS-1526-40 (Univar), SULFA-CLEAR 8411HC (Lubrizol), and Triasorb (Sintez-Oka). KOC service contractors use ChampionX, Baker Hughes, and Dorf Ketal brands. Our product is a direct equivalent to all these.",
      },
      {
        question:
          "How does MEA Triazine 78% compare to Triasorb (Sintez-Oka)?",
        answer:
          "Triasorb, manufactured by Sintez-Oka (Russia), is an aqueous solution of hexahydro-1,3,5-tris(hydroxyethyl)-s-triazine \u2014 the same active compound as MEA Triazine 78% (CAS 4719-04-4). Both products irreversibly bind hydrogen sulfide and light mercaptans in natural gas, gas condensate, and liquid hydrocarbon streams. Vasudev Chemo Pharma\u2019s MEA Triazine 78% offers a cost-effective alternative with direct manufacturer pricing and faster India-to-Kuwait delivery (4\u20136 days vs. longer lead times from Russia).",
      },
    ],
    oilfields: [
      "Greater Burgan area (Burgan, Magwa, Ahmadi)",
      "Ratqa heavy oil field",
      "Minagish field",
      "Wafra joint-operations field",
      "KNPC Mina Al Ahmadi refinery",
      "KNPC Mina Abdullah refinery",
    ],
  },

  /* ── Thailand ────────────────────────────────────────────────────────── */
  thailand: {
    slug: "thailand",
    countryName: "Thailand",
    regionLabel: "Southeast Asia",
    flag: "\u{1F1F9}\u{1F1ED}",
    title: "MEA Triazine 78% Supplier to Thailand — CIF Laem Chabang",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Thailand via Laem Chabang Port. 7\u201310 day transit. DIW-compliant documentation. Biogas and PTTEP applications.",
    keywords: [
      "MEA Triazine Thailand",
      "H2S scavenger Thailand",
      "MEA Triazine 78 Laem Chabang",
      "triazine supplier PTTEP",
      "H2S scavenger Gulf of Thailand",
      "biogas H2S removal Thailand",
      "BK Biocide alternative Thailand",
    ],
    h1: "MEA Triazine 78% Supplier to Thailand \u2014 CIF Laem Chabang",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Thailand via Laem Chabang Port and Bangkok Port with transit times of 7\u201310 days from India. Documentation is formatted for Thai DIW (Department of Industrial Works) import requirements. Our 78% active concentration offers higher efficiency than Chinese alternatives commonly available in the Thai market.",
    logistics: {
      port: "Laem Chabang Port, Bangkok Port",
      transitDays: "7\u201310 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Laem Chabang / CIF Bangkok",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "Thai DIW (Department of Industrial Works) import documentation",
    ],
    localBrandNames: [
      "BK Biocide (Chinese trade name, widely traded in SEA)",
      "Dayong MEA Triazine (Dongying Dayong, China export)",
      "IRO MEA Triazine (IRO Group Inc., China export to SEA)",
      "ECHEMI MEA Triazine 78% (Chinese marketplace)",
      "Borregaard H2S Scavenger (Norway, bio-based scavenger)",
      "HS-1526-40 (Univar Solutions)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "ChampionX H2S Scavenger (PTTEP service contracts)",
      "JDC H2S Scavenger (Jay Dinesh Chemicals, India)",
      "Xipeng MEA Triazine 78% (Xipeng Technology, China export)",
    ],
    localLanguageNames: [
      "\u0E2A\u0E32\u0E23\u0E01\u0E33\u0E08\u0E31\u0E14 H2S \u0E44\u0E15\u0E23\u0E2D\u0E30\u0E0B\u0E35\u0E19 (H2S Scavenger Triazine)",
      "\u0E2A\u0E32\u0E23\u0E14\u0E31\u0E01\u0E08\u0E31\u0E1A\u0E44\u0E2E\u0E42\u0E14\u0E23\u0E40\u0E08\u0E19\u0E0B\u0E31\u0E25\u0E44\u0E1F\u0E14\u0E4C (Hydrogen Sulfide Scavenger)",
      "\u0E2A\u0E32\u0E23\u0E1A\u0E33\u0E1A\u0E31\u0E14\u0E01\u0E4A\u0E32\u0E0B\u0E40\u0E1B\u0E23\u0E35\u0E49\u0E22\u0E27 (Sour Gas Treatment Agent)",
      "\u0E1C\u0E39\u0E49\u0E1C\u0E25\u0E34\u0E15 MEA \u0E44\u0E15\u0E23\u0E2D\u0E30\u0E0B\u0E35\u0E19 \u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E44\u0E17\u0E22 (MEA Triazine Manufacturer Thailand)",
      "\u0E40\u0E04\u0E21\u0E35\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E38\u0E15\u0E2A\u0E32\u0E2B\u0E01\u0E23\u0E23\u0E21\u0E19\u0E49\u0E33\u0E21\u0E31\u0E19\u0E41\u0E25\u0E30\u0E41\u0E01\u0E4A\u0E2A (Oil & Gas Industry Chemicals)",
      "\u0E2A\u0E32\u0E23\u0E40\u0E04\u0E21\u0E35\u0E02\u0E08\u0E31\u0E14\u0E44\u0E2E\u0E42\u0E14\u0E23\u0E40\u0E08\u0E19\u0E0B\u0E31\u0E25\u0E44\u0E1F\u0E14\u0E4C\u0E01\u0E4A\u0E32\u0E0B\u0E0A\u0E35\u0E27\u0E20\u0E32\u0E1E (H2S Removal Chemical for Biogas)",
      "\u0E2A\u0E32\u0E23\u0E14\u0E31\u0E01\u0E08\u0E31\u0E1A H2S \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E17\u0E48\u0E19\u0E02\u0E38\u0E14\u0E40\u0E08\u0E32\u0E30\u0E2D\u0E48\u0E32\u0E27\u0E44\u0E17\u0E22 (H2S Scavenger Gulf of Thailand Rigs)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Thailand?",
        answer:
          "Yes. Vasudev Chemo Pharma ships MEA Triazine 78% to Thailand via Laem Chabang Port and Bangkok Port with transit times of 7\u201310 days from India. We supply in 200-litre drums and 1,000-litre IBC totes with batch Certificate of Analysis and GHS-compliant Safety Data Sheet formatted for Thai DIW (Department of Industrial Works) import requirements.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in PTTEP offshore operations and the Gulf of Thailand?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across Thailand\u2019s offshore gas operations, including PTTEP\u2019s Gulf of Thailand platforms, onshore gas separation plants, and the Map Ta Phut petrochemical complex. The 78% active concentration delivers efficient scavenging for both high-pressure wellhead injection and gas processing train applications.",
      },
      {
        question: "What brand names is MEA Triazine known by in Thailand?",
        answer:
          "In Thailand, MEA Triazine (CAS 4719-04-4) is supplied through Chinese brands like BK Biocide, Dayong MEA Triazine, IRO MEA Triazine, and ECHEMI. International brands include HS-1526-40 (Univar), SULFA-CLEAR 8411HC (Lubrizol), and Borregaard H2S Scavenger. Brenntag Ingredients Thailand, PTT Global Chemical, and Krungthep Trading supply raw MEA (not the finished triazine scavenger). Our product is a direct equivalent to all triazine-based H2S scavenger brands.",
      },
      {
        question:
          "Can MEA Triazine 78% be used for biogas H2S removal in Thailand?",
        answer:
          "Yes. Thailand\u2019s growing biogas sector \u2014 particularly from palm oil mill effluent (POME) and cassava processing \u2014 produces biogas with significant H2S content. MEA Triazine 78% is an effective non-regenerable H2S scavenger for biogas purification, landfill gas treatment, and agricultural biogas applications across Thailand. It offers higher removal efficiency per dose than lower-concentration Chinese alternatives.",
      },
      {
        question:
          "How does your MEA Triazine 78% compare to Chinese-sourced triazine sold in Thailand?",
        answer:
          "Most Chinese suppliers (BK Biocide, Dayong, IRO Group, ECHEMI) offer triazine at 70\u201375% active concentration, while our product guarantees \u226578% active content verified by batch Certificate of Analysis. Higher concentration means lower dosing rates and reduced logistics cost per unit of H2S removed. We also provide full English and Thai documentation, GHS-compliant SDS, and consistent batch quality \u2014 often lacking from Chinese marketplace suppliers.",
      },
    ],
    oilfields: [
      "PTTEP Gulf of Thailand platforms",
      "Onshore gas separation plants",
      "Map Ta Phut petrochemical complex",
      "Biogas plants (palm oil mill effluent, cassava processing)",
    ],
  },

  /* ── Iran ─────────────────────────────────────────────────────────────── */
  iran: {
    slug: "iran",
    countryName: "Iran",
    regionLabel: "Middle East",
    flag: "\u{1F1EE}\u{1F1F7}",
    title: "MEA Triazine 78% Supplier to Iran — CIF Bandar Abbas",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iran via Bandar Abbas. 3\u20135 day transit from India. Suitable for South Pars, NIOC, and NIGC operations.",
    keywords: [
      "MEA Triazine Iran",
      "H2S scavenger Iran",
      "MEA Triazine 78 Bandar Abbas",
      "triazine supplier NIOC",
      "H2S scavenger South Pars",
      "Tsorb3400 alternative",
      "Tasfyeh Group equivalent",
    ],
    h1: "MEA Triazine 78% Supplier to Iran \u2014 CIF Bandar Abbas",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iran via Bandar Abbas (Shahid Rajaee Port) with transit times of just 3\u20135 days from India. Supply is available in 200-litre drums and 1,000-litre IBC totes with batch Certificate of Analysis and MSDS/SDS documentation. All transactions are conducted in full compliance with applicable international trade regulations.",
    logistics: {
      port: "Bandar Abbas (Shahid Rajaee Port)",
      transitDays: "3\u20135 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Bandar Abbas",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS)",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
    ],
    localBrandNames: [
      "Tsorb3400 (Tasfyeh Group, Iran \u2014 MEA Triazine H2S scavenger)",
      "Tasfyeh MEA Triazine 80% (Tasfyeh Group, Iran)",
      "Tasfyeh MEA Triazine 60% (Tasfyeh Group, Iran)",
      "Tasfyeh MEA Triazine 50% (Tasfyeh Group, Iran)",
      "Chemical Iran MEA (Chemical Iran, Tehran \u2014 raw MEA supplier)",
      "IranChemicalMine MEA (Iran Chemical Mine \u2014 raw MEA exporter)",
      "RXSOL Triazine Based Biocide (RX Chemicals / DubiChem, GCC)",
      "Triasorb\u00AE (Sintez-Oka, Russia \u2014 supply to Iran)",
      "HS-1526-40 (Univar Solutions)",
      "SULFA-CLEAR\u2122 8411HC (Lubrizol, 80% MEA Triazine)",
      "ChampionX H2S Scavenger (NIOC service contracts)",
      "Baker Hughes H2S Scavenger (NIOC contractors)",
      "ICPL Triazine H2S Scavenger (Imperial Oilfield Chemicals, India)",
      "Sarex HPT Triazine (Sarex Chemicals, India export)",
    ],
    localLanguageNames: [
      "\u062D\u0630\u0641\u200C\u06A9\u0646\u0646\u062F\u0647 H2S \u062A\u0631\u06CC\u200C\u0622\u0632\u06CC\u0646 (H2S Scavenger Triazine)",
      "\u062D\u0630\u0641\u200C\u06A9\u0646\u0646\u062F\u0647 \u0633\u0648\u0644\u0641\u06CC\u062F \u0647\u06CC\u062F\u0631\u0648\u0698\u0646 \u0627\u06CC\u0631\u0627\u0646 (H2S Scavenger Iran)",
      "\u062A\u0631\u06CC\u200C\u0622\u0632\u06CC\u0646 \u062A\u0623\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u0647 \u0627\u06CC\u0631\u0627\u0646 (Triazine Supplier Iran)",
      "\u062A\u0635\u0641\u06CC\u0647 \u06AF\u0627\u0632 \u062A\u0631\u0634 \u0627\u06CC\u0631\u0627\u0646 (Sour Gas Treatment Iran)",
      "\u0645\u0648\u0627\u062F \u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC \u0635\u0646\u0639\u062A\u06CC \u0645\u06CC\u062F\u0627\u0646 \u067E\u0627\u0631\u0633 \u062C\u0646\u0648\u0628\u06CC (South Pars Industrial Chemicals)",
      "\u062E\u0631\u06CC\u062F \u062A\u0631\u06CC\u200C\u0622\u0632\u06CC\u0646 MEA \u0627\u06CC\u0631\u0627\u0646 (Buy MEA Triazine Iran)",
      "\u062A\u0623\u0645\u06CC\u0646\u200C\u06A9\u0646\u0646\u062F\u0647 \u0645\u0648\u0627\u062F \u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC \u0628\u0646\u062F\u0631\u0639\u0628\u0627\u0633 (Chemical Supplier Bandar Abbas)",
      "\u0634\u06CC\u0645\u06CC\u0627\u06CC\u06CC \u067E\u0627\u0644\u0627\u06CC\u0634\u06AF\u0627\u0647 \u0627\u0635\u0641\u0647\u0627\u0646 \u0622\u0628\u0627\u062F\u0627\u0646 (Isfahan Abadan Refinery Chemical)",
    ],
    faqs: [
      {
        question: "Can you supply MEA Triazine 78% to Iran?",
        answer:
          "Vasudev Chemo Pharma can ship MEA Triazine 78% to Iran via Bandar Abbas (Shahid Rajaee Port) with transit times of just 3\u20135 days from India. Supply is available in 200-litre drums and 1,000-litre IBC totes with batch Certificate of Analysis and MSDS/SDS documentation. All transactions are conducted in full compliance with applicable international trade regulations.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in NIOC/NIGC operations and South Pars?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across NIOC (National Iranian Oil Company) upstream operations, NIGC (National Iranian Gas Company) gas processing, and the South Pars/Assaluyeh gas complex \u2014 one of the world\u2019s largest gas processing operations. It is also applicable at Iranian refineries including Isfahan, Abadan, and Bandar Abbas for sour crude desulfurization and gas sweetening.",
      },
      {
        question: "What brand names is MEA Triazine known by in Iran?",
        answer:
          "In Iran, the primary domestic H2S scavenger brand is Tsorb3400 by Tasfyeh Group, which produces MEA Triazine at 50%, 60%, and 80% concentrations. Chemical Iran and IranChemicalMine supply raw MEA (not the finished triazine scavenger). International brands include RXSOL Triazine Biocide (DubiChem), Triasorb (Sintez-Oka, Russia), HS-1526-40 (Univar), and SULFA-CLEAR 8411HC (Lubrizol). Vasudev\u2019s MEA Triazine 78% is a direct equivalent.",
      },
      {
        question:
          "How does MEA Triazine 78% compare to Tsorb3400 (Tasfyeh Group)?",
        answer:
          "Tsorb3400, manufactured by Iran\u2019s Tasfyeh Group, is available in 50%, 60%, and 80% concentrations. Vasudev\u2019s MEA Triazine 78% offers a competitive import alternative with consistent guaranteed concentration, batch Certificate of Analysis, and competitive India-sourced pricing with 3\u20135 day transit to Bandar Abbas. Both products use the same MEA-formaldehyde triazine chemistry (CAS 4719-04-4) for irreversible H2S binding.",
      },
    ],
    oilfields: [
      "South Pars / Assaluyeh gas complex",
      "NIOC upstream operations",
      "NIGC gas processing infrastructure",
      "Isfahan refinery",
      "Abadan refinery",
      "Bandar Abbas refinery",
    ],
  },

  /* ── Libya ─────────────────────────────────────────────────────────────── */
  libya: {
    slug: "libya",
    countryName: "Libya",
    regionLabel: "North Africa",
    flag: "\u{1F1F1}\u{1F1FE}",
    title: "MEA Triazine 78% Supplier to Libya — CIF Tripoli & Misrata",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Libya. CIF delivery to Tripoli and Misrata ports. 12\u201316 day transit from India. Suitable for NOC and Sirte Basin operations.",
    keywords: [
      "MEA Triazine Libya",
      "H2S scavenger Libya",
      "MEA Triazine 78 Tripoli",
      "triazine supplier NOC Libya",
      "H2S scavenger Sirte Basin",
      "oilfield chemical Libya",
      "sour gas treatment Libya",
    ],
    h1: "MEA Triazine 78% Supplier to Libya \u2014 CIF Tripoli & Misrata",
    intro:
      "Vasudev Chemo Pharma exports MEA Triazine 78% to Libya with CIF delivery to Tripoli and Misrata ports. Transit from India takes 12\u201316 days. Each consignment includes Certificate of Analysis, GHS-compliant SDS, and export documentation compliant with international trade regulations. Our product supports H2S scavenging for NOC-affiliated operations across the Sirte Basin and western fields.",
    logistics: {
      port: "Tripoli, Misrata",
      transitDays: "12\u201316 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Tripoli / CIF Misrata",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "NOC procurement documentation (where applicable)",
    ],
    localBrandNames: [
      "Grotan BK (Lanxess \u2014 triazine biocide)",
      "BASF BASOLON SC 78 (BASF)",
      "RXSOL Triazine Biocide (RX Chemicals / DubiChem)",
      "ChampionX H2S Scavenger (oilfield service contracts)",
      "Baker Hughes SULFA-CLEAR (oilfield service contracts)",
      "JDC H2S Scavenger (Jay Dinesh Chemicals, India)",
      "H2S Scavenger Conc (generic trade description)",
    ],
    localLanguageNames: [
      "\u0643\u0627\u0633\u062D \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 \u0644\u064A\u0628\u064A\u0627 (H2S Scavenger Libya)",
      "\u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 \u0644\u064A\u0628\u064A\u0627 (Sour Gas Treatment Chemical Libya)",
      "\u062A\u0631\u0627\u064A\u0632\u064A\u0646 \u0645\u0632\u064A\u0644 H2S (Triazine H2S Remover)",
      "\u0645\u0648\u0631\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0627\u062A \u062D\u0642\u0648\u0644 \u0627\u0644\u0646\u0641\u0637 \u0644\u064A\u0628\u064A\u0627 (Oilfield Chemical Supplier Libya)",
    ],
    faqs: [
      {
        question:
          "Does Vasudev Chemo Pharma supply MEA Triazine 78% to Libya?",
        answer:
          "Yes. Vasudev Chemo Pharma exports MEA Triazine 78% to Libya with CIF delivery to Tripoli and Misrata ports. Transit from India takes 12\u201316 days by sea freight. We provide Certificate of Analysis, GHS-compliant SDS, and all required export documentation.",
      },
      {
        question:
          "What are the import documentation requirements for Libya?",
        answer:
          "Import documentation typically includes Certificate of Analysis (CoA), Safety Data Sheet (SDS/MSDS), packing list, commercial invoice, and Bill of Lading. For NOC-affiliated procurement, additional documentation may be required. Vasudev Chemo Pharma provides all export documents to facilitate customs clearance.",
      },
      {
        question:
          "Can MEA Triazine 78% be used in NOC Libya and Sirte Basin operations?",
        answer:
          "Yes. MEA Triazine 78% is suitable for H2S scavenging across National Oil Corporation (NOC) operations, including Sirte Basin fields, Mellitah Oil & Gas, Waha Oil Company, and Zueitina Oil Company operations. It is used for natural gas sweetening, crude oil desulfurization, and sour gas treatment in these fields.",
      },
      {
        question:
          "What is the transit time from India to Libya?",
        answer:
          "Sea freight transit from India (Gujarat ports) to Tripoli or Misrata is typically 12\u201316 days. Vasudev Chemo Pharma offers CIF delivery terms and handles all export logistics including documentation.",
      },
    ],
    oilfields: [
      "Sirte Basin oil and gas fields",
      "Mellitah Oil & Gas operations",
      "Waha Oil Company fields",
      "Zueitina Oil Company operations",
      "NOC upstream operations",
    ],
  },

  /* ── Jordan ────────────────────────────────────────────────────────────── */
  jordan: {
    slug: "jordan",
    countryName: "Jordan",
    regionLabel: "Middle East",
    flag: "\u{1F1EF}\u{1F1F4}",
    title: "MEA Triazine 78% Supplier to Jordan — CIF Aqaba Port",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Jordan. CIF delivery to Aqaba Port. 7\u201310 day transit from India. Suitable for JPRC refinery, Risha gas field, and water treatment.",
    keywords: [
      "MEA Triazine Jordan",
      "H2S scavenger Jordan",
      "MEA Triazine 78 Aqaba",
      "triazine supplier Jordan",
      "H2S scavenger JPRC",
      "oilfield chemical Jordan",
      "water treatment biocide Jordan",
    ],
    h1: "MEA Triazine 78% Supplier to Jordan \u2014 CIF Aqaba Port",
    intro:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Jordan with CIF delivery to Aqaba Port. Transit from India takes 7\u201310 days. We supply to Jordan\u2019s petroleum refining sector, the Risha gas field, oil shale development projects, and industrial water treatment facilities with full documentation in English and Arabic.",
    logistics: {
      port: "Aqaba Port",
      transitDays: "7\u201310 days",
      packaging: "200 L drums, 1,000 L IBC totes",
      incoterms: "CIF Aqaba",
    },
    importDocs: [
      "Certificate of Analysis (CoA)",
      "Safety Data Sheet (SDS/MSDS) \u2014 GHS-compliant",
      "Packing list",
      "Commercial invoice",
      "Bill of Lading",
      "JFDA industrial chemical documentation (where applicable)",
      "ASEZA import documentation for Aqaba SEZ",
    ],
    localBrandNames: [
      "Grotan BK (Lanxess \u2014 triazine biocide)",
      "BASF BASOLON SC 78 (BASF)",
      "RXSOL Triazine Biocide (RX Chemicals / DubiChem)",
      "ChampionX H2S Scavenger (oilfield service contracts)",
      "JDC H2S Scavenger (Jay Dinesh Chemicals, India)",
      "H2S Scavenger Conc (generic trade description)",
      "MEA-T (Monoethanolamine Triazine abbreviation)",
    ],
    localLanguageNames: [
      "\u0643\u0627\u0633\u062D \u0643\u0628\u0631\u064A\u062A\u064A\u062F \u0627\u0644\u0647\u064A\u062F\u0631\u0648\u062C\u064A\u0646 \u0627\u0644\u0623\u0631\u062F\u0646 (H2S Scavenger Jordan)",
      "\u0645\u0648\u0631\u062F \u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0635\u0646\u0627\u0639\u064A\u0629 \u0627\u0644\u0623\u0631\u062F\u0646 (Industrial Chemical Supplier Jordan)",
      "\u062A\u0631\u0627\u064A\u0632\u064A\u0646 \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u063A\u0627\u0632 \u0627\u0644\u062D\u0627\u0645\u0636 (Sour Gas Treatment Triazine)",
      "\u0645\u0648\u0627\u062F \u0643\u064A\u0645\u064A\u0627\u0626\u064A\u0629 \u0645\u0635\u0641\u0627\u0629 \u0627\u0644\u0628\u062A\u0631\u0648\u0644 \u0627\u0644\u0623\u0631\u062F\u0646\u064A\u0629 (JPRC Refinery Chemicals)",
    ],
    faqs: [
      {
        question:
          "Can MEA Triazine 78% be imported to Jordan via Aqaba Special Economic Zone?",
        answer:
          "Yes. Vasudev Chemo Pharma delivers MEA Triazine 78% CIF to Aqaba Port, including the Aqaba Special Economic Zone Authority (ASEZA) area. Transit from India takes 7\u201310 days. We provide all required import documentation including ASEZA-specific paperwork.",
      },
      {
        question:
          "What applications does MEA Triazine 78% serve in Jordan?",
        answer:
          "In Jordan, MEA Triazine 78% is used for H2S scavenging at the Jordan Petroleum Refinery Company (JPRC), Risha gas field operations, oil shale development projects, and as a biocide in industrial water treatment systems. It is effective for natural gas sweetening, crude desulfurization, and process water treatment.",
      },
      {
        question:
          "What is the transit time from India to Aqaba?",
        answer:
          "Sea freight transit from India (Gujarat ports) to Aqaba Port is typically 7\u201310 days. Vasudev Chemo Pharma offers CIF delivery and handles all export logistics including documentation in English and Arabic.",
      },
      {
        question:
          "Does Vasudev Chemo Pharma provide Arabic documentation?",
        answer:
          "Yes. We provide product documentation in both English and Arabic, including Certificate of Analysis, Safety Data Sheet (SDS/MSDS), and commercial documents. Arabic documentation facilitates local regulatory compliance and end-user requirements in Jordan.",
      },
    ],
    oilfields: [
      "Jordan Petroleum Refinery Company (JPRC)",
      "Risha gas field operations",
      "Oil shale development projects",
      "Industrial water treatment facilities",
    ],
  },
};

/* ── Slug list for static params ──────────────────────────────────────── */

export const COUNTRY_SLUGS: string[] = Object.keys(COUNTRY_PAGES_DATA);
