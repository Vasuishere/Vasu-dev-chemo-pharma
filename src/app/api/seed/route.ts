import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";
import {
  checkWriteRateLimit,
  createCorsPreflightResponse,
  tooManyRequestsResponse,
  validateCorsOrigin,
  verifyApiKey,
  withCorsHeaders,
} from "@/lib/api-security";
import { logApiError, logApiEvent } from '@/lib/observability';

// Only allow seeding in development
export const dynamic = 'force-dynamic';

function json(body: unknown, init: ResponseInit, req: Request): NextResponse {
  return withCorsHeaders(NextResponse.json(body, init), req);
}

function isSeedApiEnabled(): boolean {
  if (process.env.NODE_ENV !== 'development') {
    return false;
  }

  const seedApiEnabled = process.env.SEED_API_ENABLED;
  if (!seedApiEnabled) {
    return true;
  }

  return seedApiEnabled.toLowerCase() === 'true';
}

export async function OPTIONS(req: Request) {
  return createCorsPreflightResponse(req, {
    methods: ['POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'X-API-Key', 'X-Seed-Key'],
  });
}

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
      answer: product.minOrderQuantity
        ? `The typical MOQ for ${product.name} is ${product.minOrderQuantity}.`
        : `The minimum order quantity for ${product.name} varies based on grade and packaging. Please contact us for details.`,
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
    description: "MEA Triazine 78% is a high-concentration hydrogen sulphide scavenger formulated for oil and gas applications. It reacts irreversibly with H₂S to form non-hazardous dithiazine by-products, ensuring efficient sweetening of crude oil and natural gas streams. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India, this product is supplied at a guaranteed minimum active content of 78%, making it one of the most concentrated MEA Triazine solutions available in the market. It is compatible with both contact tower and direct-injection scavenging systems, and is suitable for sour gas treatment, amine unit support, and pipeline sweetening operations.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "177.20 g/mol",
    hsCode: "29336990",
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
    imageUrl: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma1.jpeg",
    images: [
      {
        src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma1.jpeg",
        alt: "MEA Triazine 78% H2S Scavenger — Vasudev Chemo Pharma",
        width: 1200,
        height: 900,
        isPrimary: true,
      },
      {
        src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma2.jpeg",
        alt: "MEA Triazine 78% H2S Scavenger packaging — Vasudev Chemo Pharma",
        width: 1200,
        height: 900,
        isPrimary: false,
      },
    ],
    videos: [
      {
        src: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma.mp4",
        title: "MEA Triazine 78% H2S Scavenger — Product Overview",
        description: "Product demonstration video for MEA Triazine 78% H2S Scavenger by Vasudev Chemo Pharma.",
        thumbnail: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/MEA-triazine-78%25-VasudevChemoPharma1.jpeg",
        isPrimary: true,
      },
    ],
  },
  {
    name: "MMA Triazine 40%",
    slug: "mma-triazine-40",
    sku: "VCP-IND-0002",
    formula: "C₃H₆N₆",
    casNumber: "108-74-7",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description: "MMA Triazine 40% is a methyl-substituted triazine-based H₂S scavenger designed for applications where BTEX-free alternatives are required. It is widely used in natural gas processing and crude oil stabilisation. This formulation provides effective hydrogen sulphide removal at a moderate concentration, offering excellent cost-performance balance for continuous-injection systems. Manufactured by Vasudev Chemo Pharma, MMA Triazine 40% meets the stringent requirements of major oil and gas operators and is suitable for both onshore and offshore applications. The product is non-corrosive to common oilfield metallurgy and does not contribute to foaming in gas processing equipment.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "126.12 g/mol",
    hsCode: "29336990",
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
    description: "P-Toluenesulfonic Acid (PTSA) is a strong organic acid widely used as a catalyst in esterification, polymerization, and dehydration reactions. It is preferred over mineral acids due to its milder and more selective reactivity. Vasudev Chemo Pharma supplies PTSA in both monohydrate and anhydrous forms, manufactured under strict quality controls at our Gujarat facility. The product is a versatile acid catalyst for resin synthesis, alkyd coatings, and biodiesel transesterification. PTSA is valued for its non-oxidising nature, ease of handling, and clean reaction profiles compared to sulphuric acid or hydrochloric acid.",
    appearance: "White crystalline solid",
    molecularWeight: "172.20 g/mol",
    hsCode: "29042090",
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
    description: "Copper Sulphate Pentahydrate is used in agriculture as a fungicide and soil additive, in mining as a flotation reagent, and in water treatment for algae control. Also used in electroplating and the production of copper compounds. Vasudev Chemo Pharma manufactures Copper Sulphate in multiple grades — from feed-grade micronutrient supplements to high-purity electroplating grade — at our ISO 9001:2015 certified facility. The product is available as blue crystalline granules or fine powder, and is exported to over 30 countries. Copper Sulphate (CAS 7758-99-8) is an essential input across agriculture, animal husbandry, and industrial chemistry.",
    appearance: "Blue crystalline granules",
    molecularWeight: "249.69 g/mol",
    hsCode: "28332500",
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
    description: "Manganese Sulphate Monohydrate is used as a micronutrient in animal feed and fertilisers, as a precursor in the production of electrolytic manganese dioxide (EMD) for batteries, and in various chemical processes. Vasudev Chemo Pharma supplies Manganese Sulphate (CAS 10034-96-5) in feed-grade and industrial-grade variants, manufactured at our Gujarat-based facility. The product provides a bioavailable source of manganese essential for plant growth and animal health, and serves as a critical raw material in the lithium-ion battery supply chain for EMD and manganese-based cathode materials.",
    appearance: "Pale pink crystalline powder",
    molecularWeight: "169.02 g/mol",
    hsCode: "28332990",
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
    description: "Bis(2-chloroethyl)amine Hydrochloride is a specialty organic intermediate used in pharmaceutical synthesis and the production of nitrogen mustard derivatives for research and industrial applications. Supplied by Vasudev Chemo Pharma, this compound (CAS 821-48-7) is manufactured under controlled conditions with strict purity assurance. It serves as a key building block for the synthesis of anti-cancer alkylating agents, cross-linking reagents, and nitrogen heterocycles. This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations (e.g. ECCN, REACH Annex XIV). The product is handled and shipped in compliance with applicable dangerous goods and export-control regulations. All sales and shipments require prior end-user vetting and appropriate licensing documentation.",
    appearance: "White to off-white crystalline solid",
    molecularWeight: "178.49 g/mol",
    hsCode: "29211990",
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
    complianceDisclaimer: "This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations including ECCN classification, REACH Annex XIV authorisation, and other chemical-control frameworks. Sale, purchase, and shipment of this product require prior end-user vetting, valid import/export licences, and appropriate regulatory documentation. Vasudev Chemo Pharma will not process orders without completed compliance verification.",
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
    description: "DEAE-Cl HCl (Diethylaminoethyl Chloride Hydrochloride) is a key pharmaceutical intermediate used in the synthesis of various active pharmaceutical ingredients including antihistamines and local anaesthetics. Vasudev Chemo Pharma supplies this compound (CAS 869-24-9) in high purity for GMP and non-GMP applications. It is used as an alkylating agent to introduce the diethylaminoethyl side chain into drug molecules — a structural motif found in Chloroquine, Procaine, and several other pharmaceuticals. The product is manufactured under rigorous process controls at our specialty synthesis unit in Gujarat, India.",
    appearance: "White crystalline powder",
    molecularWeight: "172.10 g/mol",
    hsCode: "29211990",
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
    description: "2-Amino-5-methylthiazole is a heterocyclic building block used in the synthesis of pharmaceuticals, agrochemicals, and dyes. It is a key intermediate in the manufacture of several drug molecules. Supplied by Vasudev Chemo Pharma (CAS 7305-71-7), this thiazole derivative is manufactured in high purity for pharmaceutical and research applications. The compound serves as a starting material for the synthesis of Famotidine (H₂-receptor antagonist), Nizatidine, and various sulfonamide antibiotics. It is also used as a corrosion inhibitor in industrial applications and as a building block in materials science.",
    appearance: "Pale yellow crystalline solid",
    molecularWeight: "114.17 g/mol",
    hsCode: "29341090",
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
    description: "2-Chloroethylamine Hydrochloride is a versatile organic intermediate used in the synthesis of pharmaceuticals, agrochemicals, and specialty polymers. It is a key building block for ethyleneimine derivatives. Vasudev Chemo Pharma supplies this compound (CAS 870-24-6) in high purity for use in the production of aziridine-based crosslinkers, surfactants, and pharmaceutical intermediates. The product is manufactured at our specialty chemicals unit under controlled conditions and is available in research and bulk quantities for industrial-scale synthesis.",
    appearance: "White crystalline powder",
    molecularWeight: "116.01 g/mol",
    hsCode: "29211990",
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

  // ─── SURFACTANT CHEMICALS — HYDROTROPES (4) ─────────────────
  {
    name: "Sodium Cumene Sulfonate 40%",
    slug: "sodium-cumene-sulfonate-40",
    sku: "VCP-SFC-0001",
    formula: "C₉H₁₁NaO₃S",
    casNumber: "28348-53-0",
    category: "surfactant",
    subcategory: "Hydrotropes",
    description: "Sodium Cumene Sulfonate 40% (SCS 40%) is a high-performance liquid hydrotrope used as a coupling agent, solubiliser, and viscosity reducer in surfactant-based formulations. It enhances the aqueous solubility of sparingly soluble organic compounds — such as surfactants, fragrances, and dyes — preventing phase separation, cloudiness, and gel formation in concentrated liquid detergents, industrial cleaners, and personal care products. SCS 40% is sulfate-free and sulfone-free, making it suitable for mild and sensitive-skin formulations. Also known as sodium isopropylbenzenesulfonate or sodium 4-(propan-2-yl)benzenesulfonate, it is a versatile ingredient used across household, industrial, oilfield, and agrochemical applications. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India, this product is exported to detergent manufacturers, personal care formulators, and specialty chemical companies worldwide.",
    appearance: "Clear to slightly hazy liquid",
    molecularWeight: "222.24 g/mol",
    hsCode: "29041090",
    specs: [
      { key: "Active Content", value: "39.0 – 41.0%" },
      { key: "pH (as supplied)", value: "7.0 – 10.0" },
      { key: "Specific Gravity (25°C)", value: "1.07 – 1.12" },
      { key: "Colour", value: "Clear to slightly hazy" },
      { key: "Odour", value: "Mild aromatic" },
      { key: "Solubility in Water", value: "Fully miscible" },
      { key: "Sulfate Content", value: "< 1.0%" },
      { key: "Sulfone Content", value: "< 1.0%" },
      { key: "Moisture", value: "58 – 62%" },
      { key: "Cloud Point", value: "< 0°C (as supplied)" },
      { key: "Storage Temperature", value: "> 10°C (to prevent crystallisation)" },
    ],
    applications: [
      "Hydrotrope and coupling agent in liquid detergents",
      "Solubiliser in concentrated all-purpose cleaners",
      "Viscosity reducer in high-surfactant formulations",
      "Cloud point depressant in industrial cleaning products",
      "Stabiliser in shampoos, body washes, and liquid soaps",
      "Dispersant in paints, coatings, and dye formulations",
      "Compatibility enhancer for anionic, nonionic, and amphoteric surfactant blends",
      "Drilling fluid additive and cementing aid in oilfield operations",
      "Wetting agent in agrochemical and pesticide formulations",
      "Metal cleaning and electroplating bath additive",
    ],
    industries: [
      "Household & Industrial Cleaning",
      "Personal Care & Cosmetics",
      "Detergent Manufacturing",
      "Oil & Gas",
      "Paints & Coatings",
      "Agrochemicals",
      "Textile Processing",
      "Metal Processing & Electroplating",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Technical Grade", "Industrial Grade"],
    packaging: [
      "240 L HDPE drums",
      "1000 L IBC tanks",
      "Bulk tanker loads",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
  },
  {
    name: "Sodium Cumene Sulfonate 90%",
    slug: "sodium-cumene-sulfonate-90",
    sku: "VCP-SFC-0002",
    formula: "C₉H₁₁NaO₃S",
    casNumber: "28348-53-0",
    category: "surfactant",
    subcategory: "Hydrotropes",
    description: "Sodium Cumene Sulfonate 90% (SCS 90%) is a concentrated powder-form hydrotrope containing approximately 90% active sodium 4-isopropylbenzenesulfonate. It is used as a coupling agent, solubiliser, and viscosity reducer in surfactant-based formulations including liquid detergents, industrial cleaners, and personal care products. The high active content makes SCS 90% cost-effective for large-volume formulators who dissolve it on-site before blending, significantly reducing freight costs compared to liquid grades. It is sulfate-free and sulfone-free, biodegradable, and compatible with anionic, nonionic, and amphoteric surfactant systems. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India.",
    appearance: "White to off-white powder / flakes",
    molecularWeight: "222.24 g/mol",
    hsCode: "29041090",
    specs: [
      { key: "Active Content", value: "≥ 90.0%" },
      { key: "pH (10% solution)", value: "8.0 – 11.0" },
      { key: "Colour", value: "White to off-white" },
      { key: "Odour", value: "Mild aromatic" },
      { key: "Solubility in Water", value: "Freely soluble" },
      { key: "Sulfate Content", value: "< 0.5%" },
      { key: "Sulfone Content", value: "< 1.0%" },
      { key: "Moisture", value: "≤ 5.0%" },
      { key: "Bulk Density", value: "0.5 – 0.7 g/mL" },
    ],
    applications: [
      "Hydrotrope and coupling agent in liquid detergents",
      "Solubiliser in concentrated all-purpose cleaners",
      "Viscosity reducer in high-surfactant formulations",
      "Cloud point depressant in industrial cleaning products",
      "Stabiliser in shampoos, body washes, and liquid soaps",
      "Dispersant in paints, coatings, and dye formulations",
      "Compatibility enhancer for anionic, nonionic, and amphoteric surfactant blends",
      "Drilling fluid additive and cementing aid in oilfield operations",
      "Wetting agent in agrochemical and pesticide formulations",
    ],
    industries: [
      "Household & Industrial Cleaning",
      "Personal Care & Cosmetics",
      "Detergent Manufacturing",
      "Oil & Gas",
      "Paints & Coatings",
      "Agrochemicals",
      "Textile Processing",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Technical Grade", "Industrial Grade"],
    packaging: [
      "25 kg HDPE-lined bags",
      "500 kg jumbo bags",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
  },
  {
    name: "Sodium Xylene Sulfonate 90%",
    slug: "sodium-xylene-sulfonate-90",
    sku: "VCP-SFC-0003",
    formula: "C₈H₉NaO₃S",
    casNumber: "1300-72-7",
    category: "surfactant",
    subcategory: "Hydrotropes",
    description: "Sodium Xylene Sulfonate 90% (SXS 90%) is a concentrated powder-form hydrotrope containing approximately 90% active sodium xylenesulfonate. It functions as a coupling agent, solubiliser, viscosity reducer, and cloud point depressant in surfactant-based formulations. SXS 90% is widely used in liquid detergent manufacturing, industrial and institutional cleaners, and personal care products to prevent phase separation, reduce gel formation, and maintain product clarity at high surfactant concentrations. It is biodegradable, non-toxic at use concentrations, and compatible with anionic, nonionic, cationic, and amphoteric surfactant systems. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India.",
    appearance: "White to off-white powder",
    molecularWeight: "208.21 g/mol",
    hsCode: "29041090",
    specs: [
      { key: "Active Content", value: "≥ 90.0%" },
      { key: "pH (10% solution)", value: "8.0 – 11.0" },
      { key: "Colour", value: "White to off-white" },
      { key: "Odour", value: "Mild" },
      { key: "Solubility in Water", value: "Freely soluble" },
      { key: "Sulfate Content", value: "< 1.0%" },
      { key: "Moisture", value: "≤ 5.0%" },
      { key: "Bulk Density", value: "0.5 – 0.7 g/mL" },
    ],
    applications: [
      "Hydrotrope and coupling agent in liquid detergents",
      "Solubiliser in concentrated household and industrial cleaners",
      "Viscosity reducer in high-surfactant formulations",
      "Cloud point depressant in cleaning product formulations",
      "Stabiliser in shampoos, body washes, and liquid hand soaps",
      "Dispersant in textile and dye processing",
      "Compatibility enhancer for mixed surfactant systems",
      "Wetting agent in agrochemical formulations",
    ],
    industries: [
      "Household & Industrial Cleaning",
      "Personal Care & Cosmetics",
      "Detergent Manufacturing",
      "Textile Processing",
      "Agrochemicals",
      "Paints & Coatings",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Technical Grade", "Industrial Grade"],
    packaging: [
      "25 kg HDPE-lined bags",
      "500 kg jumbo bags",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
  },
  {
    name: "Sodium Xylene Sulfonate 40%",
    slug: "sodium-xylene-sulfonate-40",
    sku: "VCP-SFC-0004",
    formula: "C₈H₉NaO₃S",
    casNumber: "1300-72-7",
    category: "surfactant",
    subcategory: "Hydrotropes",
    description: "Sodium Xylene Sulfonate 40% (SXS 40%) is a ready-to-use liquid hydrotrope containing approximately 40% active sodium xylenesulfonate in aqueous solution. It is used as a coupling agent, solubiliser, and viscosity reducer in surfactant-based formulations — keeping concentrated liquid detergents, all-purpose cleaners, and personal care products clear, stable, and pourable. SXS 40% blends easily into liquid formulations without pre-dissolution, making it the preferred choice for detergent and personal care manufacturers who value formulation speed and ease of handling. It is biodegradable, non-toxic at use concentrations, and compatible with anionic, nonionic, cationic, and amphoteric surfactant systems. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India.",
    appearance: "Clear to slightly hazy liquid",
    molecularWeight: "208.21 g/mol",
    hsCode: "29041090",
    specs: [
      { key: "Active Content", value: "39.0 – 41.0%" },
      { key: "pH (as supplied)", value: "7.0 – 10.0" },
      { key: "Specific Gravity (25°C)", value: "1.06 – 1.10" },
      { key: "Colour", value: "Clear to slightly hazy" },
      { key: "Odour", value: "Mild" },
      { key: "Solubility in Water", value: "Fully miscible" },
      { key: "Sulfate Content", value: "< 1.0%" },
      { key: "Moisture", value: "58 – 62%" },
      { key: "Cloud Point", value: "< 0°C (as supplied)" },
      { key: "Storage Temperature", value: "> 10°C (to prevent crystallisation)" },
    ],
    applications: [
      "Hydrotrope and coupling agent in liquid detergents",
      "Solubiliser in concentrated household and industrial cleaners",
      "Viscosity reducer in high-surfactant formulations",
      "Cloud point depressant in cleaning product formulations",
      "Stabiliser in shampoos, body washes, and liquid hand soaps",
      "Dispersant in textile and dye processing",
      "Compatibility enhancer for mixed surfactant systems",
      "Wetting agent in agrochemical formulations",
      "Metal cleaning and degreasing formulations",
    ],
    industries: [
      "Household & Industrial Cleaning",
      "Personal Care & Cosmetics",
      "Detergent Manufacturing",
      "Textile Processing",
      "Agrochemicals",
      "Paints & Coatings",
      "Metal Processing",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Technical Grade", "Industrial Grade"],
    packaging: [
      "240 L HDPE drums",
      "1000 L IBC tanks",
      "Bulk tanker loads",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 MT",
  },
];

export async function POST(req: Request) {
  const corsError = validateCorsOrigin(req);
  if (corsError) {
    return corsError;
  }

  if (!isSeedApiEnabled()) {
    return json({ error: 'Not Found' }, { status: 404 }, req);
  }

  const seedSecret = process.env.SEED_API_KEY || process.env.ASSET_API_KEY;
  const authError = verifyApiKey(req, seedSecret, {
    headerNames: ['x-seed-key', 'x-api-key'],
  });
  if (authError) {
    return withCorsHeaders(authError, req);
  }

  const rateLimit = checkWriteRateLimit({
    request: req,
    keyPrefix: 'seed-write',
    ipLimit: 3,
    tokenLimit: 10,
    windowMs: 60 * 1000,
    tokenHeaderNames: ['x-seed-key', 'x-api-key'],
  });

  if (!rateLimit.allowed) {
    return withCorsHeaders(tooManyRequestsResponse(rateLimit), req);
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
          supplier: "Vasudev Chemo Pharma",
          certifications: ["ISO 9001:2015"],
          currency: "USD",
          price: 0,
          priceUnit: product.sku.startsWith("VCP-IND") ? "/MT" : "/kg",
          unitOfMeasure: product.sku.startsWith("VCP-IND") ? "MT" : "kg",
          originCountry: "India",
          images: (product as { images?: unknown[] }).images ?? [],
          videos: (product as { videos?: unknown[] }).videos ?? [],
          documents: [],
          faqs: buildCommonProductFaqs(product),
          status: "active",
        },
      });
      results.push(created.name);
    }

    logApiEvent('seed.run.succeeded', {
      route: '/api/seed',
      productCount: results.length,
    });

    return json({
      success: true,
      message: `Seeded ${results.length} products`,
      products: results,
    }, { status: 200 }, req);
  } catch (error) {
    logApiError('seed.run.failed', error, {
      route: '/api/seed',
    });
    return json(
      { success: false, error: 'Internal Server Error', errorCode: 'INTERNAL_SERVER_ERROR' },
      { status: 500 },
      req
    );
  }
}
