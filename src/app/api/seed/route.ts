import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

// Only allow seeding in development
export const dynamic = 'force-dynamic';

// Seed data for all 12 products
const seedProducts = [
  // ─── INDUSTRIAL CHEMICALS (5) ──────────────────────────────
  {
    name: "MEA Triazine 78% H2S Scavenger",
    slug: "mea-triazine-78-h2s-scavenger",
    sku: "VCP-IND-0009",
    formula: "C₆H₁₅N₃O₃",
    casNumber: "4719-04-4",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description: "MEA Triazine 78% is a high-concentration hydrogen sulphide scavenger formulated for oil and gas applications. It reacts irreversibly with H₂S to form non-hazardous dithiazine by-products, ensuring efficient sweetening of crude oil and natural gas streams.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "177.20 g/mol",
  },
  {
    name: "MMA Triazine 40%",
    slug: "mma-triazine-40",
    sku: "VCP-IND-0010",
    formula: "C₃H₆N₆",
    casNumber: "108-74-7",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description: "MMA Triazine 40% is a methyl-substituted triazine-based H₂S scavenger designed for applications where BTEX-free alternatives are required. It is widely used in natural gas processing and crude oil stabilisation.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "126.12 g/mol",
  },
  {
    name: "P-Toluenesulfonic Acid",
    slug: "p-toluenesulfonic-acid",
    sku: "VCP-IND-0011",
    formula: "CH₃C₆H₄SO₃H",
    casNumber: "104-15-4",
    category: "industrial",
    subcategory: "Organic Acids",
    description: "P-Toluenesulfonic Acid (PTSA) is a strong organic acid widely used as a catalyst in esterification, polymerization, and dehydration reactions. It is preferred over mineral acids due to its milder and more selective reactivity.",
    appearance: "White crystalline solid",
    molecularWeight: "172.20 g/mol",
  },
  {
    name: "Copper Sulphate",
    slug: "copper-sulphate",
    sku: "VCP-IND-0012",
    formula: "CuSO₄·5H₂O",
    casNumber: "7758-99-8",
    category: "industrial",
    subcategory: "Inorganic Salts",
    description: "Copper Sulphate Pentahydrate is used in agriculture as a fungicide and soil additive, in mining as a flotation reagent, and in water treatment for algae control. Also used in electroplating and the production of copper compounds.",
    appearance: "Blue crystalline granules",
    molecularWeight: "249.69 g/mol",
  },
  {
    name: "Manganese Sulphate",
    slug: "manganese-sulphate",
    sku: "VCP-IND-0013",
    formula: "MnSO₄·H₂O",
    casNumber: "10034-96-5",
    category: "industrial",
    subcategory: "Inorganic Salts",
    description: "Manganese Sulphate Monohydrate is used as a micronutrient in animal feed and fertilisers, as a precursor in the production of electrolytic manganese dioxide (EMD) for batteries, and in various chemical processes.",
    appearance: "Pale pink crystalline powder",
    molecularWeight: "169.02 g/mol",
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
    description: "Bis(2-chloroethyl)amine Hydrochloride is a specialty organic intermediate used in pharmaceutical synthesis and the production of nitrogen mustard derivatives for research and industrial applications.",
    appearance: "White to off-white crystalline solid",
    molecularWeight: "178.49 g/mol",
  },
  {
    name: "Di Ethyl Amino Ethyl Chloride Hydrochloride",
    slug: "di-ethyl-amino-ethyl-chloride-hydrochloride",
    sku: "VCP-SPC-0010",
    formula: "C₆H₁₄ClN·HCl",
    casNumber: "869-24-9",
    category: "specialty",
    subcategory: "Organic Intermediates",
    description: "DEAE-Cl HCl is a key pharmaceutical intermediate used in the synthesis of various active pharmaceutical ingredients including antihistamines and local anaesthetics.",
    appearance: "White crystalline powder",
    molecularWeight: "172.10 g/mol",
  },
  {
    name: "2-Amino-5-methylthiazole",
    slug: "2-amino-5-methylthiazole",
    sku: "VCP-SPC-0011",
    formula: "C₄H₆N₂S",
    casNumber: "7305-71-7",
    category: "specialty",
    subcategory: "Heterocyclic Compounds",
    description: "2-Amino-5-methylthiazole is a heterocyclic building block used in the synthesis of pharmaceuticals, agrochemicals, and dyes. It is a key intermediate in the manufacture of several drug molecules.",
    appearance: "Pale yellow crystalline solid",
    molecularWeight: "114.17 g/mol",
  },
  {
    name: "2-Chloroethylamine Hydrochloride",
    slug: "2-chloroethylamine-hydrochloride",
    sku: "VCP-SPC-0012",
    formula: "ClCH₂CH₂NH₂·HCl",
    casNumber: "870-24-6",
    category: "specialty",
    subcategory: "Organic Intermediates",
    description: "2-Chloroethylamine Hydrochloride is a versatile organic intermediate used in the synthesis of pharmaceuticals, agrochemicals, and specialty polymers. It is a key building block for ethyleneimine derivatives.",
    appearance: "White crystalline powder",
    molecularWeight: "116.01 g/mol",
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
    description: "Albendazole is a broad-spectrum anthelmintic API intermediate used for the treatment of parasitic worm infestations. It is a benzimidazole derivative effective against nematodes, cestodes, and trematodes.",
    appearance: "White to off-white powder",
    molecularWeight: "265.33 g/mol",
  },
  {
    name: "Ketoconazole",
    slug: "ketoconazole",
    sku: "VCP-PHR-0002",
    formula: "C₂₆H₂₈Cl₂N₄O₄",
    casNumber: "65277-42-1",
    category: "pharmaceutical",
    subcategory: "Antifungals",
    description: "Ketoconazole is a synthetic imidazole antifungal agent used in the treatment of fungal infections. As an API intermediate, it is supplied in high purity for formulation into oral tablets, topical creams, and shampoos.",
    appearance: "White to off-white powder",
    molecularWeight: "531.43 g/mol",
  },
  {
    name: "Pregabalin",
    slug: "pregabalin",
    sku: "VCP-PHR-0003",
    formula: "C₈H₁₇NO₂",
    casNumber: "148553-50-8",
    category: "pharmaceutical",
    subcategory: "Anticonvulsants",
    description: "Pregabalin is an API intermediate for a medication used to treat neuropathic pain, epilepsy, and generalized anxiety disorder. It is a GABA analogue that reduces neuronal excitability.",
    appearance: "White crystalline powder",
    molecularWeight: "159.23 g/mol",
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
          ghsPictograms: [],
          hazardStatements: [],
          applications: [],
          industries: [],
          grades: [],
          packaging: [],
          images: [],
          specs: [],
          documents: [],
          faqs: [],
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
