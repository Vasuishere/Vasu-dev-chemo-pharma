import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

// Only allow seeding in development
export const dynamic = 'force-dynamic';

function buildCommonProductFaqs(product: {
  name: string;
  casNumber: string;
  grades: string[];
  packaging: string[];
  minOrderQuantity: string;
  applications: string[];
}) {
  const topApplications = product.applications.slice(0, 3).join(", ");

  return [
    {
      question: `What is ${product.name} used for?`,
      answer: topApplications
        ? `${product.name} is commonly used for ${topApplications}. It is suitable for industrial and commercial formulations based on your process requirements.`
        : `${product.name} is used in industrial and commercial formulations depending on the application and process requirements.`,
    },
    {
      question: `What is the CAS number of ${product.name}?`,
      answer: `The CAS number of ${product.name} is ${product.casNumber}.`,
    },
    {
      question: `What grades are available for ${product.name}?`,
      answer: product.grades.length
        ? `Available grades include ${product.grades.join(", ")}.`
        : `Grade availability depends on your requirement. Please contact us for current stock and specifications.`,
    },
    {
      question: `What packaging options are available for ${product.name}?`,
      answer: product.packaging.length
        ? `Standard packaging includes ${product.packaging.join(", ")}.`
        : `Packaging can be offered in standard drums, bags, or customized bulk options on request.`,
    },
    {
      question: `What is the minimum order quantity (MOQ) for ${product.name}?`,
      answer: `The typical MOQ for ${product.name} is ${product.minOrderQuantity}.`,
    },
    {
      question: `Do you provide COA and technical documents with ${product.name}?`,
      answer:
        "Yes. We provide COA and relevant technical documents such as TDS/SDS based on shipment and compliance requirements.",
    },
    {
      question: `Can I get a sample of ${product.name} before bulk order?`,
      answer:
        "Yes, sample quantities can be arranged for qualification, subject to product availability and logistics feasibility.",
    },
    {
      question: `What is the shelf life of ${product.name}?`,
      answer:
        "Typical shelf life is up to 24 months in original sealed packaging under recommended storage conditions. Final shelf life should be confirmed from the batch COA.",
    },
    {
      question: `Is ${product.name} export-ready and shipped internationally?`,
      answer:
        "Yes. We support domestic and export shipments from India with standard documentation for international trade.",
    },
  ];
}

// Seed data for all 12 products
const seedProducts = [
  // ─── INDUSTRIAL CHEMICALS (5) ──────────────────────────────
  {
    name: "MEA Triazine 78% H2S Scavenger",
    slug: "mea-triazine-78-h2s-scavenger",
    sku: "VCP-IND-0001",
    formula: "C₆H₁₅N₃O₃",
    casNumber: "4719-04-4",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description: "MEA Triazine 78% is a high-concentration hydrogen sulphide scavenger formulated for oil and gas applications. It reacts irreversibly with H₂S to form non-hazardous dithiazine by-products, ensuring efficient sweetening of crude oil and natural gas streams. Manufactured by VasuDev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India, this product is supplied at a guaranteed minimum active content of 78%, making it one of the most concentrated MEA Triazine solutions available in the market. It is compatible with both contact tower and direct-injection scavenging systems, and is suitable for sour gas treatment, amine unit support, and pipeline sweetening operations.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "177.20 g/mol",
    hsCode: "2933.69",
    specs: [
      { key: "Active Content", value: "≥ 78%" },
      { key: "pH (1% solution)", value: "10.0 – 12.0" },
      { key: "Specific Gravity (25°C)", value: "1.10 – 1.15" },
      { key: "Colour", value: "Clear to pale yellow" },
      { key: "Odour", value: "Mild amine" },
      { key: "Solubility in Water", value: "Fully miscible" },
      { key: "Flash Point", value: "> 93°C" },
      { key: "Freezing Point", value: "< −5°C" },
      { key: "Viscosity (25°C)", value: "15 – 30 cP" },
    ],
    applications: ["H₂S scavenging in natural gas", "Crude oil sweetening", "Amine unit support", "Pipeline and wellhead treatment", "Biogas desulphurisation", "Refinery sour water treatment"],
    industries: ["Oil & Gas", "Petrochemicals", "Refineries", "Biogas & Renewable Energy", "Water Treatment"],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H315 – Causes skin irritation", "H319 – Causes serious eye irritation", "H335 – May cause respiratory irritation"],
    grades: ["Industrial Grade", "Oilfield Grade"],
    packaging: ["210 L HDPE drums", "1000 L IBC tanks", "Bulk tanker loads", "Custom packaging on request"],
    minOrderQuantity: "1 MT",
  },
  {
    name: "MMA Triazine 40%",
    slug: "mma-triazine-40",
    sku: "VCP-IND-0002",
    formula: "C₃H₆N₆",
    casNumber: "108-74-7",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description: "MMA Triazine 40% is a methyl-substituted triazine-based H₂S scavenger designed for applications where BTEX-free alternatives are required. It is widely used in natural gas processing and crude oil stabilisation. This formulation provides effective hydrogen sulphide removal at a moderate concentration, offering excellent cost-performance balance for continuous-injection systems. Manufactured by VasuDev Chemo Pharma, MMA Triazine 40% meets the stringent requirements of major oil and gas operators and is suitable for both onshore and offshore applications. The product is non-corrosive to common oilfield metallurgy and does not contribute to foaming in gas processing equipment.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "126.12 g/mol",
    hsCode: "2933.69",
    specs: [
      { key: "Active Content", value: "≥ 40%" },
      { key: "pH (1% solution)", value: "9.5 – 11.5" },
      { key: "Specific Gravity (25°C)", value: "1.05 – 1.10" },
      { key: "Colour", value: "Clear to pale yellow" },
      { key: "Odour", value: "Mild amine" },
      { key: "Solubility in Water", value: "Fully miscible" },
      { key: "Flash Point", value: "> 93°C" },
      { key: "Freezing Point", value: "< −10°C" },
    ],
    applications: ["H₂S removal in natural gas streams", "Crude oil stabilisation", "BTEX-free scavenging operations", "Wellhead and pipeline treatment", "Gas processing plant sweetening"],
    industries: ["Oil & Gas", "Petrochemicals", "Refineries", "Biogas & Renewable Energy"],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H315 – Causes skin irritation", "H319 – Causes serious eye irritation"],
    grades: ["Industrial Grade", "Oilfield Grade"],
    packaging: ["210 L HDPE drums", "1000 L IBC tanks", "Bulk tanker loads", "Custom packaging on request"],
    minOrderQuantity: "1 MT",
  },
  {
    name: "P-Toluenesulfonic Acid",
    slug: "p-toluenesulfonic-acid",
    sku: "VCP-IND-0003",
    formula: "CH₃C₆H₄SO₃H",
    casNumber: "104-15-4",
    category: "industrial",
    subcategory: "Organic Acids",
    description: "P-Toluenesulfonic Acid (PTSA) is a strong organic acid widely used as a catalyst in esterification, polymerization, and dehydration reactions. It is preferred over mineral acids due to its milder and more selective reactivity. VasuDev Chemo Pharma supplies PTSA in both monohydrate and anhydrous forms, manufactured under strict quality controls at our Gujarat facility. The product is a versatile acid catalyst for resin synthesis, alkyd coatings, and biodiesel transesterification. PTSA is valued for its non-oxidising nature, ease of handling, and clean reaction profiles compared to sulphuric acid or hydrochloric acid.",
    appearance: "White crystalline solid",
    molecularWeight: "172.20 g/mol",
    hsCode: "2904.20",
    specs: [
      { key: "Purity", value: "≥ 95.0%" },
      { key: "Melting Point", value: "103 – 106°C (monohydrate)" },
      { key: "Moisture", value: "≤ 5.0% (monohydrate)" },
      { key: "Colour (Hazen)", value: "≤ 50" },
      { key: "Sulphated Ash", value: "≤ 0.1%" },
      { key: "Iron (Fe)", value: "≤ 10 ppm" },
      { key: "pH (10% solution)", value: "1.0 – 2.0" },
      { key: "Solubility in Water", value: "Freely soluble" },
    ],
    applications: ["Esterification catalyst", "Polymerisation catalyst", "Alkyd resin manufacturing", "Biodiesel production", "Pharmaceutical synthesis", "Dehydration reactions", "Crosslinking catalyst for coatings"],
    industries: ["Paints & Coatings", "Resins & Polymers", "Pharmaceuticals", "Biofuels", "Agrochemicals", "Fine Chemicals"],
    safetyClass: "Corrosive / Irritant",
    ghsPictograms: ["GHS05", "GHS07"],
    signalWord: "Danger",
    hazardStatements: ["H314 – Causes severe skin burns and eye damage", "H335 – May cause respiratory irritation"],
    grades: ["Industrial Grade", "Technical Grade", "Pharmaceutical Grade"],
    packaging: ["25 kg HDPE bags", "50 kg fibre drums", "500 kg jumbo bags", "Custom packaging on request"],
    minOrderQuantity: "500 kg",
  },
  {
    name: "Copper Sulphate",
    slug: "copper-sulphate",
    sku: "VCP-IND-0004",
    formula: "CuSO₄·5H₂O",
    casNumber: "7758-99-8",
    category: "industrial",
    subcategory: "Inorganic Salts",
    description: "Copper Sulphate Pentahydrate is used in agriculture as a fungicide and soil additive, in mining as a flotation reagent, and in water treatment for algae control. Also used in electroplating and the production of copper compounds. VasuDev Chemo Pharma manufactures Copper Sulphate in multiple grades — from feed-grade micronutrient supplements to high-purity electroplating grade — at our ISO 9001:2015 certified facility. The product is available as blue crystalline granules or fine powder, and is exported to over 30 countries. Copper Sulphate (CAS 7758-99-8) is an essential input across agriculture, animal husbandry, and industrial chemistry.",
    appearance: "Blue crystalline granules",
    molecularWeight: "249.69 g/mol",
    hsCode: "2833.25",
    specs: [
      { key: "Purity (as CuSO₄·5H₂O)", value: "≥ 98.0%" },
      { key: "Copper (Cu) Content", value: "≥ 25.0%" },
      { key: "Iron (Fe)", value: "≤ 0.05%" },
      { key: "Insoluble Matter", value: "≤ 0.1%" },
      { key: "pH (5% solution)", value: "3.5 – 4.5" },
      { key: "Moisture", value: "≤ 1.0%" },
      { key: "Lead (Pb)", value: "≤ 10 ppm" },
      { key: "Arsenic (As)", value: "≤ 5 ppm" },
    ],
    applications: ["Agricultural fungicide (Bordeaux mixture)", "Animal feed micronutrient", "Electroplating & electroforming", "Water treatment & algae control", "Mining flotation reagent", "Wood preservative (CCA treatment)", "Lab reagent & analytical chemistry"],
    industries: ["Agriculture", "Animal Feed", "Mining", "Water Treatment", "Electroplating", "Construction (wood treatment)"],
    safetyClass: "Harmful / Irritant / Hazardous to aquatic environment",
    ghsPictograms: ["GHS07", "GHS09"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H315 – Causes skin irritation", "H318 – Causes serious eye damage", "H410 – Very toxic to aquatic life with long lasting effects"],
    grades: ["Industrial Grade", "Feed Grade", "Electroplating Grade", "Lab / Reagent Grade"],
    packaging: ["25 kg HDPE bags", "50 kg HDPE bags", "1 MT jumbo bags", "Custom packaging on request"],
    minOrderQuantity: "1 MT",
  },
  {
    name: "Manganese Sulphate",
    slug: "manganese-sulphate",
    sku: "VCP-IND-0005",
    formula: "MnSO₄·H₂O",
    casNumber: "10034-96-5",
    category: "industrial",
    subcategory: "Inorganic Salts",
    description: "Manganese Sulphate Monohydrate is used as a micronutrient in animal feed and fertilisers, as a precursor in the production of electrolytic manganese dioxide (EMD) for batteries, and in various chemical processes. VasuDev Chemo Pharma supplies Manganese Sulphate (CAS 10034-96-5) in feed-grade and industrial-grade variants, manufactured at our Gujarat-based facility. The product provides a bioavailable source of manganese essential for plant growth and animal health, and serves as a critical raw material in the lithium-ion battery supply chain for EMD and manganese-based cathode materials.",
    appearance: "Pale pink crystalline powder",
    molecularWeight: "169.02 g/mol",
    hsCode: "2833.29",
    specs: [
      { key: "Purity (as MnSO₄·H₂O)", value: "≥ 98.0%" },
      { key: "Manganese (Mn) Content", value: "≥ 31.5%" },
      { key: "Iron (Fe)", value: "≤ 0.01%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Insoluble Matter", value: "≤ 0.05%" },
      { key: "Moisture", value: "≤ 1.0%" },
      { key: "pH (5% solution)", value: "3.5 – 5.0" },
      { key: "Lead (Pb)", value: "≤ 5 ppm" },
    ],
    applications: ["Animal feed micronutrient", "Agricultural fertiliser additive", "Electrolytic Manganese Dioxide (EMD) production", "Battery cathode precursor", "Ceramic and dye manufacturing", "Water purification reagent"],
    industries: ["Agriculture", "Animal Feed", "Batteries & Energy Storage", "Ceramics", "Chemicals Manufacturing", "Water Treatment"],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H315 – Causes skin irritation", "H319 – Causes serious eye irritation"],
    grades: ["Industrial Grade", "Feed Grade", "Battery Grade"],
    packaging: ["25 kg HDPE bags", "50 kg HDPE bags", "1 MT jumbo bags", "Custom packaging on request"],
    minOrderQuantity: "1 MT",
  },

  // ─── SPECIALTY CHEMICALS (4) ───────────────────────────────
  {
    name: "Bis(2-chloroethyl)amine Hydrochloride",
    slug: "bis-2-chloroethyl-amine-hydrochloride",
    sku: "VCP-SPC-0009",
    formula: "C₄H₉Cl₂N·HCl",
    casNumber: "821-48-7",
    category: "specialty",
    subcategory: "Organic Intermediates",
    description: "Bis(2-chloroethyl)amine Hydrochloride is a specialty organic intermediate used in pharmaceutical synthesis and the production of nitrogen mustard derivatives for research and industrial applications. Supplied by VasuDev Chemo Pharma, this compound (CAS 821-48-7) is manufactured under controlled conditions with strict purity assurance. It serves as a key building block for the synthesis of anti-cancer alkylating agents, cross-linking reagents, and nitrogen heterocycles. This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations (e.g. ECCN, REACH Annex XIV). The product is handled and shipped in compliance with applicable dangerous goods and export-control regulations. All sales and shipments require prior end-user vetting and appropriate licensing documentation.",
    appearance: "White to off-white crystalline solid",
    molecularWeight: "178.49 g/mol",
    hsCode: "2921.19",
    specs: [
      { key: "Purity (by HPLC)", value: "≥ 98.0%" },
      { key: "Melting Point", value: "210 – 215°C (decomp.)" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Chloride Content", value: "Within spec" },
      { key: "Appearance", value: "White to off-white crystalline solid" },
    ],
    applications: ["Anti-cancer drug intermediate (nitrogen mustard derivatives)", "Cross-linking reagent for bioconjugation", "Synthesis of nitrogen heterocycles", "Pharmaceutical R&D and process chemistry"],
    industries: ["Pharmaceuticals", "Oncology Research", "Fine Chemicals", "Biotechnology"],
    safetyClass: "Toxic / Harmful",
    ghsPictograms: ["GHS06", "GHS08"],
    signalWord: "Danger",
    hazardStatements: ["H301 – Toxic if swallowed", "H311 – Toxic in contact with skin", "H331 – Toxic if inhaled", "H350 – May cause cancer"],
    complianceDisclaimer: "This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations including ECCN classification, REACH Annex XIV authorisation, and other chemical-control frameworks. Sale, purchase, and shipment of this product require prior end-user vetting, valid import/export licences, and appropriate regulatory documentation. VasuDev Chemo Pharma will not process orders without completed compliance verification.",
    grades: ["Synthesis Grade (≥ 98%)", "Research Grade"],
    packaging: ["1 kg HDPE containers", "5 kg HDPE drums", "25 kg fibre drums", "Custom packaging on request"],
    minOrderQuantity: "1 kg",
  },
  {
    name: "Di Ethyl Amino Ethyl Chloride Hydrochloride",
    slug: "di-ethyl-amino-ethyl-chloride-hydrochloride",
    sku: "VCP-SPC-0010",
    formula: "C₆H₁₄ClN·HCl",
    casNumber: "869-24-9",
    category: "specialty",
    subcategory: "Organic Intermediates",
    description: "DEAE-Cl HCl (Diethylaminoethyl Chloride Hydrochloride) is a key pharmaceutical intermediate used in the synthesis of various active pharmaceutical ingredients including antihistamines and local anaesthetics. VasuDev Chemo Pharma supplies this compound (CAS 869-24-9) in high purity for GMP and non-GMP applications. It is used as an alkylating agent to introduce the diethylaminoethyl side chain into drug molecules — a structural motif found in Chloroquine, Procaine, and several other pharmaceuticals. The product is manufactured under rigorous process controls at our specialty synthesis unit in Gujarat, India.",
    appearance: "White crystalline powder",
    molecularWeight: "172.10 g/mol",
    hsCode: "2921.19",
    specs: [
      { key: "Purity (by GC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "210 – 215°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "pH (5% solution)", value: "3.0 – 5.0" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
    ],
    applications: ["Intermediate for Chloroquine and Hydroxychloroquine", "Synthesis of local anaesthetics (Procaine family)", "Antihistamine API manufacturing", "Alkylating agent in organic synthesis", "Ion-exchange resin functionalisation"],
    industries: ["Pharmaceuticals", "API Manufacturing", "Fine Chemicals", "Polymer Chemistry"],
    safetyClass: "Corrosive / Toxic",
    ghsPictograms: ["GHS05", "GHS06"],
    signalWord: "Danger",
    hazardStatements: ["H301 – Toxic if swallowed", "H311 – Toxic in contact with skin", "H314 – Causes severe skin burns and eye damage"],
    grades: ["Pharmaceutical Grade (≥ 99%)", "Technical Grade (≥ 98%)"],
    packaging: ["1 kg HDPE containers", "5 kg HDPE drums", "25 kg fibre drums", "Custom packaging on request"],
    minOrderQuantity: "5 kg",
  },
  {
    name: "2-Amino-5-methylthiazole",
    slug: "2-amino-5-methylthiazole",
    sku: "VCP-SPC-0011",
    formula: "C₄H₆N₂S",
    casNumber: "7305-71-7",
    category: "specialty",
    subcategory: "Heterocyclic Compounds",
    description: "2-Amino-5-methylthiazole is a heterocyclic building block used in the synthesis of pharmaceuticals, agrochemicals, and dyes. It is a key intermediate in the manufacture of several drug molecules. Supplied by VasuDev Chemo Pharma (CAS 7305-71-7), this thiazole derivative is manufactured in high purity for pharmaceutical and research applications. The compound serves as a starting material for the synthesis of Famotidine (H₂-receptor antagonist), Nizatidine, and various sulfonamide antibiotics. It is also used as a corrosion inhibitor in industrial applications and as a building block in materials science.",
    appearance: "Pale yellow crystalline solid",
    molecularWeight: "114.17 g/mol",
    hsCode: "2934.10",
    specs: [
      { key: "Purity (by HPLC)", value: "≥ 98.0%" },
      { key: "Melting Point", value: "93 – 97°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Appearance", value: "Pale yellow crystalline solid" },
      { key: "Solubility", value: "Soluble in ethanol, sparingly soluble in water" },
    ],
    applications: ["Famotidine API intermediate", "Nizatidine & ranitidine synthesis", "Agrochemical intermediate", "Dye and pigment synthesis", "Corrosion inhibitor", "Heterocyclic building block for research"],
    industries: ["Pharmaceuticals", "Agrochemicals", "Dyes & Pigments", "Fine Chemicals", "Research & Development"],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H315 – Causes skin irritation", "H319 – Causes serious eye irritation"],
    grades: ["Pharmaceutical Grade (≥ 98%)", "Technical Grade (≥ 97%)"],
    packaging: ["1 kg HDPE containers", "5 kg HDPE drums", "25 kg fibre drums", "Custom packaging on request"],
    minOrderQuantity: "5 kg",
  },
  {
    name: "2-Chloroethylamine Hydrochloride",
    slug: "2-chloroethylamine-hydrochloride",
    sku: "VCP-SPC-0012",
    formula: "ClCH₂CH₂NH₂·HCl",
    casNumber: "870-24-6",
    category: "specialty",
    subcategory: "Organic Intermediates",
    description: "2-Chloroethylamine Hydrochloride is a versatile organic intermediate used in the synthesis of pharmaceuticals, agrochemicals, and specialty polymers. It is a key building block for ethyleneimine derivatives. VasuDev Chemo Pharma supplies this compound (CAS 870-24-6) in high purity for use in the production of aziridine-based crosslinkers, surfactants, and pharmaceutical intermediates. The product is manufactured at our specialty chemicals unit under controlled conditions and is available in research and bulk quantities for industrial-scale synthesis.",
    appearance: "White crystalline powder",
    molecularWeight: "116.01 g/mol",
    hsCode: "2921.19",
    specs: [
      { key: "Purity (by GC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "143 – 146°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "pH (5% solution)", value: "2.0 – 4.0" },
      { key: "Appearance", value: "White crystalline powder" },
    ],
    applications: ["Ethyleneimine (aziridine) synthesis", "Pharmaceutical intermediate", "Agrochemical intermediate", "Cross-linking agent for coatings & resins", "Surfactant synthesis", "Specialty polymer building block"],
    industries: ["Pharmaceuticals", "Agrochemicals", "Polymers & Resins", "Fine Chemicals", "Coatings"],
    safetyClass: "Corrosive / Toxic",
    ghsPictograms: ["GHS05", "GHS06"],
    signalWord: "Danger",
    hazardStatements: ["H301 – Toxic if swallowed", "H311 – Toxic in contact with skin", "H314 – Causes severe skin burns and eye damage", "H331 – Toxic if inhaled"],
    grades: ["Pharmaceutical Grade (≥ 99%)", "Technical Grade (≥ 98%)"],
    packaging: ["1 kg HDPE containers", "5 kg HDPE drums", "25 kg fibre drums", "Custom packaging on request"],
    minOrderQuantity: "5 kg",
  },

  // ─── PHARMACEUTICAL API INTERMEDIATES (3) ───────────────────
  {
    name: "Albendazole",
    slug: "albendazole",
    sku: "VCP-PHR-0001",
    formula: "C₁₂H₁₅N₃O₂S",
    casNumber: "54965-21-8",
    category: "pharmaceutical",
    subcategory: "Anthelmintics",
    description: "Albendazole is a broad-spectrum anthelmintic API intermediate used for the treatment of parasitic worm infestations. It is a benzimidazole derivative effective against nematodes, cestodes, and trematodes. VasuDev Chemo Pharma manufactures Albendazole (CAS 54965-21-8) in compliance with WHO-GMP guidelines at our pharmaceutical-grade facility in Gujarat, India. The product is supplied in high purity (≥ 99% by HPLC) and is accompanied by a Certificate of Analysis (COA) and Drug Master File (DMF) documentation. Albendazole is listed on the WHO Model List of Essential Medicines and is used globally in mass drug administration programmes for deworming.",
    appearance: "White to off-white powder",
    molecularWeight: "265.33 g/mol",
    hsCode: "2933.99",
    specs: [
      { key: "Assay (HPLC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "208 – 210°C" },
      { key: "Loss on Drying", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Residual Solvents", value: "Meets ICH Q3C guidelines" },
      { key: "Related Substances", value: "≤ 0.5% total impurities" },
      { key: "Particle Size (D90)", value: "≤ 30 µm" },
    ],
    applications: ["Oral anthelmintic tablet formulation", "Suspension & chewable tablet manufacturing", "WHO mass drug administration programmes", "Veterinary deworming formulations", "Anti-parasitic combination therapies"],
    industries: ["Pharmaceuticals", "Veterinary Medicine", "Public Health (WHO programmes)", "Contract Manufacturing (CDMO)"],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07", "GHS08"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H361 – Suspected of damaging fertility or the unborn child"],
    grades: ["Pharmaceutical Grade (USP/BP/IP compliant)", "Veterinary Grade"],
    packaging: ["1 kg double LDPE bags in fibre drums", "5 kg double LDPE bags in fibre drums", "25 kg HDPE drums", "Custom packaging on request"],
    minOrderQuantity: "5 kg",
  },
  {
    name: "Ketoconazole",
    slug: "ketoconazole",
    sku: "VCP-PHR-0002",
    formula: "C₂₆H₂₈Cl₂N₄O₄",
    casNumber: "65277-42-1",
    category: "pharmaceutical",
    subcategory: "Antifungals",
    description: "Ketoconazole is a synthetic imidazole antifungal agent used in the treatment of fungal infections. As an API intermediate, it is supplied in high purity for formulation into oral tablets, topical creams, and shampoos. VasuDev Chemo Pharma manufactures Ketoconazole (CAS 65277-42-1) at our WHO-GMP compliant facility in Gujarat, India. The product meets USP/BP pharmacopoeial specifications and is supported by a comprehensive Drug Master File. Ketoconazole works by inhibiting ergosterol synthesis in fungal cell membranes, making it effective against a broad spectrum of dermatophytes, yeasts, and dimorphic fungi.",
    appearance: "White to off-white powder",
    molecularWeight: "531.43 g/mol",
    hsCode: "2933.29",
    specs: [
      { key: "Assay (HPLC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "148 – 152°C" },
      { key: "Loss on Drying", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Residual Solvents", value: "Meets ICH Q3C guidelines" },
      { key: "Related Substances", value: "≤ 0.5% total impurities" },
      { key: "Optical Rotation", value: "Within pharmacopoeial limits" },
    ],
    applications: ["Oral antifungal tablet formulation", "Topical cream & ointment manufacturing", "Anti-dandruff shampoo formulation", "Veterinary antifungal preparations", "Combination dermatological products"],
    industries: ["Pharmaceuticals", "Dermatology & Cosmeceuticals", "Veterinary Medicine", "Contract Manufacturing (CDMO)"],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07", "GHS08"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H361 – Suspected of damaging fertility or the unborn child", "H370 – Causes damage to organs (liver) through prolonged exposure"],
    grades: ["Pharmaceutical Grade (USP/BP/IP compliant)", "Topical Grade"],
    packaging: ["1 kg double LDPE bags in fibre drums", "5 kg double LDPE bags in fibre drums", "25 kg HDPE drums", "Custom packaging on request"],
    minOrderQuantity: "1 kg",
  },
  {
    name: "Pregabalin",
    slug: "pregabalin",
    sku: "VCP-PHR-0003",
    formula: "C₈H₁₇NO₂",
    casNumber: "148553-50-8",
    category: "pharmaceutical",
    subcategory: "Anticonvulsants",
    description: "Pregabalin is an API intermediate for a medication used to treat neuropathic pain, epilepsy, and generalized anxiety disorder. It is a GABA analogue that reduces neuronal excitability. VasuDev Chemo Pharma supplies Pregabalin (CAS 148553-50-8) manufactured at our GMP-compliant facility in Gujarat, India. The product meets pharmacopoeial standards (USP/IP) and is supplied with a Certificate of Analysis and complete analytical documentation. Pregabalin binds to the alpha-2-delta subunit of voltage-gated calcium channels, modulating neurotransmitter release — making it highly effective for neuropathic pain management, fibromyalgia, and adjunctive epilepsy therapy.",
    appearance: "White crystalline powder",
    molecularWeight: "159.23 g/mol",
    hsCode: "2922.49",
    specs: [
      { key: "Assay (HPLC)", value: "≥ 99.5%" },
      { key: "Melting Point", value: "193 – 197°C" },
      { key: "Specific Optical Rotation", value: "+10.0° to +13.0°" },
      { key: "Loss on Drying", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
      { key: "Residual Solvents", value: "Meets ICH Q3C guidelines" },
      { key: "Enantiomeric Purity", value: "≥ 99.5% (S-enantiomer)" },
    ],
    applications: ["Neuropathic pain capsule formulation", "Anti-epileptic drug manufacturing", "Generalised anxiety disorder treatment", "Fibromyalgia therapy formulations", "Combination neurological products"],
    industries: ["Pharmaceuticals", "Neurology & Pain Management", "Contract Manufacturing (CDMO)", "Generic Drug Manufacturers"],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: ["H302 – Harmful if swallowed", "H315 – Causes skin irritation", "H319 – Causes serious eye irritation"],
    grades: ["Pharmaceutical Grade (USP/IP compliant)"],
    packaging: ["1 kg double LDPE bags in fibre drums", "5 kg double LDPE bags in fibre drums", "25 kg HDPE drums", "Custom packaging on request"],
    minOrderQuantity: "1 kg",
  },
];

export async function POST() {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Seed route is disabled in production' }, { status: 403 });
  }

  try {
    const payload = await getPayload({ config });

    // Clear existing products
    const existing = await payload.find({ collection: "products", limit: 200 });
    for (const doc of existing.docs) {
      await payload.delete({ collection: "products", id: doc.id });
    }

    // Insert all products
    const results = [];
    for (const product of seedProducts) {
      const created = await payload.create({
        collection: "products",
        data: {
          ...product,
          supplier: "VasuDev Chemo Pharma",
          certifications: ["ISO 9001:2015"],
          currency: "USD",
          price: 0,
          priceUnit: product.sku.startsWith("VCP-IND") ? "/MT" : "/kg",
          unitOfMeasure: product.sku.startsWith("VCP-IND") ? "MT" : "kg",
          originCountry: "India",
          images: [],
          documents: [],
          faqs: buildCommonProductFaqs(product),
          status: "active",
        },
      });
      results.push(created.name);
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${results.length} products`,
      products: results,
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
