import "dotenv/config";
import { getPayload } from "payload";
import config from "./payload.config";

/**
 * Seed script — inserts all 12 catalogue products into Payload CMS.
 * Run with: npm run seed
 */

type SeedProduct = {
  name: string;
  slug: string;
  sku: string;
  formula: string;
  casNumber: string;
  category: "industrial" | "specialty" | "pharmaceutical";
  subcategory: string;
  description: string;
  appearance: string;
  molecularWeight: string;
  hsCode: string;
  originCountry: string;
  priceUnit: string;
  unitOfMeasure: string;
  status: "active";
  isActive: boolean;
  specs: { key: string; value: string }[];
  applications: string[];
  industries: string[];
  safetyClass: string;
  ghsPictograms: string[];
  signalWord: string;
  hazardStatements: string[];
  complianceDisclaimer?: string;
  grades: string[];
  packaging: string[];
  minOrderQuantity: string;
};

/* ─── Product-specific FAQ overrides for Google "People Also Ask" ─── */

const productSpecificFaqs: Record<string, { question: string; answer: string }[]> = {
  "mea-triazine-78-h2s-scavenger": [
    {
      question: "What is MEA Triazine 78% and how does it remove H2S?",
      answer: "MEA Triazine 78% (1,3,5-tris(2-hydroxyethyl)-s-triazine, CAS 4719-04-4) is a liquid hydrogen sulphide scavenger that reacts irreversibly with H₂S to form water-soluble, non-toxic dithiazine by-products. At 78% active content, it is one of the most concentrated MEA Triazine solutions available, providing superior scavenging efficiency per litre compared to lower-concentration alternatives. It is widely used in natural gas sweetening, crude oil stabilisation, and biogas desulphurisation.",
    },
    {
      question: "What is the difference between MEA Triazine and MMA Triazine?",
      answer: "MEA Triazine (monoethylamine-based) and MMA Triazine (monomethylamine-based) are both triazine H₂S scavengers, but they differ in chemistry and application profile. MEA Triazine 78% offers higher active content and faster reaction kinetics, making it ideal for high-H₂S-concentration streams. MMA Triazine 40% is a BTEX-free alternative preferred for applications where BTEX emissions must be minimised, such as in gas processing plants subject to strict VOC regulations.",
    },
    {
      question: "How much MEA Triazine 78% is needed to treat 1 ppm of H2S?",
      answer: "The stoichiometric ratio is approximately 3.1 kg of MEA Triazine 78% per kg of H₂S removed. In field practice, actual consumption is typically 4–6 kg per kg of H₂S due to inefficiencies in contact, competing reactions, and temperature effects. Exact dosing depends on H₂S concentration, gas flow rate, contact time, temperature, and whether a contact tower or direct-injection system is used. Vasudev Chemo Pharma's technical team can assist with dosing calculations for your specific application.",
    },
    {
      question: "Is MEA Triazine 78% safe to handle?",
      answer: "MEA Triazine 78% is classified as an irritant (GHS07). It may cause skin and eye irritation (H315, H319) and respiratory irritation (H335). Standard handling precautions include chemical-resistant gloves, safety goggles, and adequate ventilation. It is non-flammable (flash point > 93°C) and fully miscible in water, making spill cleanup straightforward. A Safety Data Sheet (SDS) is provided with every shipment from Vasudev Chemo Pharma.",
    },
  ],
  "mma-triazine-40": [
    {
      question: "What is MMA Triazine 40% used for in oil and gas?",
      answer: "MMA Triazine 40% (CAS 108-74-7) is a methyl-substituted triazine-based hydrogen sulphide scavenger used for H₂S removal in natural gas processing, crude oil stabilisation, and pipeline treatment. Its key advantage is that it is BTEX-free, making it the preferred choice for gas processing operations where BTEX (benzene, toluene, ethylbenzene, xylene) emissions are regulated. It provides effective H₂S scavenging at a moderate concentration with excellent cost-performance balance.",
    },
    {
      question: "Why choose MMA Triazine 40% over MEA Triazine 78%?",
      answer: "MMA Triazine 40% is preferred over MEA Triazine 78% in applications where BTEX-free operation is required by environmental regulations. While MEA Triazine offers higher concentration and faster kinetics, MMA Triazine produces reaction by-products that do not contribute to BTEX emissions — a critical factor for operators subject to EPA NSPS, EU IED, or similar emission standards. It is also non-corrosive to common oilfield metallurgy and does not contribute to foaming in gas processing equipment.",
    },
    {
      question: "What is the CAS number of MMA Triazine?",
      answer: "The CAS number of MMA Triazine (hexahydro-1,3,5-trimethyl-s-triazine) is 108-74-7. Its molecular formula is C₃H₆N₆ with a molecular weight of 126.12 g/mol. Vasudev Chemo Pharma supplies MMA Triazine at 40% active content in solution form, meeting the specifications required by major international oil and gas operators.",
    },
    {
      question: "Can MMA Triazine 40% be used for biogas treatment?",
      answer: "Yes. MMA Triazine 40% is effective for H₂S removal in biogas applications, including anaerobic digester gas, landfill gas, and wastewater treatment biogas. Its BTEX-free formulation is particularly advantageous in biogas-to-energy projects where gas quality standards prohibit BTEX compounds. It can be injected directly into the gas stream or used in a contact tower configuration.",
    },
  ],
  "p-toluenesulfonic-acid": [
    {
      question: "What is P-Toluenesulfonic Acid (PTSA) used for?",
      answer: "P-Toluenesulfonic Acid (PTSA, CAS 104-15-4) is a strong organic acid widely used as a catalyst in esterification, polymerisation, and dehydration reactions. Key applications include alkyd resin manufacturing, biodiesel transesterification, pharmaceutical synthesis, coatings crosslinking, and fragrance production. PTSA is preferred over mineral acids like sulphuric acid because of its non-oxidising nature, milder reaction conditions, and cleaner reaction profiles that reduce side-product formation.",
    },
    {
      question: "What is the difference between PTSA monohydrate and anhydrous PTSA?",
      answer: "PTSA monohydrate (molecular weight 190.22 g/mol) contains one molecule of water of crystallisation, has a melting point of 103–106°C, and is easier to handle and store. Anhydrous PTSA (molecular weight 172.20 g/mol) has a higher active acid content per gram and is preferred for moisture-sensitive reactions. Vasudev Chemo Pharma supplies both forms in industrial, technical, and pharmaceutical grades with purity ≥ 95%.",
    },
    {
      question: "Is P-Toluenesulfonic Acid hazardous?",
      answer: "PTSA is classified as corrosive (GHS05) and irritant (GHS07). It causes severe skin burns and eye damage (H314) and may cause respiratory irritation (H335). It should be handled with chemical-resistant gloves, face protection, and in a well-ventilated area. Despite being a strong acid, PTSA is non-oxidising, which makes it safer to handle than mineral acids like sulphuric or nitric acid. Full safety information is provided in the SDS included with every Vasudev Chemo Pharma shipment.",
    },
    {
      question: "Can PTSA be used as a catalyst in pharmaceutical manufacturing?",
      answer: "Yes. PTSA is widely used in pharmaceutical synthesis as an acid catalyst and as a counter-ion for drug salt formation (tosylate salts). Pharmaceutical-grade PTSA from Vasudev Chemo Pharma meets stringent purity specifications (≥ 95%, low heavy metals) suitable for GMP manufacturing environments. It is used in the synthesis of various APIs, drug intermediates, and excipients.",
    },
  ],
  "copper-sulphate": [
    {
      question: "What is Copper Sulphate used for?",
      answer: "Copper Sulphate Pentahydrate (CuSO₄·5H₂O, CAS 7758-99-8) is used across multiple industries: in agriculture as a fungicide (Bordeaux mixture) and soil micronutrient; in animal feed as a copper supplement; in mining as a flotation reagent for mineral separation; in water treatment for algae and bacteria control; in electroplating and electroforming; and in wood preservation (CCA treatment). Vasudev Chemo Pharma exports Copper Sulphate to over 30 countries in multiple grades.",
    },
    {
      question: "What is the copper content in Copper Sulphate Pentahydrate?",
      answer: "High-quality Copper Sulphate Pentahydrate contains ≥ 25.0% copper (Cu) by weight. Vasudev Chemo Pharma's product also meets specifications of ≥ 98.0% purity (as CuSO₄·5H₂O), ≤ 0.05% iron (Fe), ≤ 10 ppm lead (Pb), and ≤ 5 ppm arsenic (As). These specifications ensure suitability for agriculture, feed, and water treatment applications where contaminant levels must be tightly controlled.",
    },
    {
      question: "Is Copper Sulphate safe for use in agriculture and animal feed?",
      answer: "Copper Sulphate is approved for agricultural use as a fungicide (Bordeaux mixture) by regulatory agencies worldwide when applied per label directions. Feed-grade Copper Sulphate is used as a trace mineral supplement in livestock and poultry diets at recommended inclusion rates. However, it is classified as harmful if swallowed (H302), causes serious eye damage (H318), and is very toxic to aquatic life (H410). Always follow local regulations and SDS guidelines for safe application.",
    },
    {
      question: "What grades of Copper Sulphate does Vasudev Chemo Pharma supply?",
      answer: "Vasudev Chemo Pharma manufactures and supplies four grades of Copper Sulphate: Industrial Grade (general chemical use), Feed Grade (animal nutrition, meets feed additive specifications), Electroplating Grade (high purity for plating and electroforming), and Lab/Reagent Grade (analytical and laboratory use). All grades are available in 25 kg bags, 50 kg bags, and 1 MT jumbo bags, with custom packaging on request.",
    },
  ],
  "manganese-sulphate": [
    {
      question: "What is Manganese Sulphate used for?",
      answer: "Manganese Sulphate Monohydrate (MnSO₄·H₂O, CAS 10034-96-5) is used as a micronutrient in animal feed and agricultural fertilisers, as a precursor in the production of electrolytic manganese dioxide (EMD) for batteries, and in ceramic, dye, and water treatment applications. It is a bioavailable source of manganese essential for plant growth, animal health, and increasingly important in the lithium-ion battery supply chain for manganese-based cathode materials.",
    },
    {
      question: "What is the manganese content in Manganese Sulphate Monohydrate?",
      answer: "Vasudev Chemo Pharma's Manganese Sulphate Monohydrate contains ≥ 31.5% manganese (Mn) by weight, with overall purity ≥ 98.0%. The product meets strict specifications for iron (≤ 0.01%), heavy metals (≤ 10 ppm as Pb), and insoluble matter (≤ 0.05%), making it suitable for feed-grade, agricultural, and battery-precursor applications.",
    },
    {
      question: "Can Manganese Sulphate be used in battery manufacturing?",
      answer: "Yes. Battery-grade Manganese Sulphate is a critical precursor in the production of electrolytic manganese dioxide (EMD) used in alkaline and zinc-carbon batteries, and for synthesising manganese-rich cathode materials (NMC) used in lithium-ion batteries for electric vehicles and energy storage systems. Vasudev Chemo Pharma supplies battery-grade Manganese Sulphate with ultra-low impurity levels to meet the demanding specifications of battery manufacturers.",
    },
    {
      question: "What is the HS code for Manganese Sulphate?",
      answer: "The HS (Harmonised System) code for Manganese Sulphate is 2833.29. This code covers other sulphates of metals. Vasudev Chemo Pharma provides all necessary export documentation including commercial invoice, packing list, COA, and customs paperwork using the correct HS code to facilitate smooth international trade and customs clearance.",
    },
  ],
  "bis-2-chloroethyl-amine-hydrochloride": [
    {
      question: "What is Bis(2-chloroethyl)amine Hydrochloride used for?",
      answer: "Bis(2-chloroethyl)amine Hydrochloride (CAS 821-48-7) is a specialty organic intermediate used primarily in pharmaceutical research and industrial synthesis. It is a key building block for the synthesis of nitrogen mustard derivatives used as alkylating agents in oncology drug development, cross-linking reagents for bioconjugation, and nitrogen heterocycle synthesis. Due to its chemical reactivity, it is handled under strict regulatory controls.",
    },
    {
      question: "Is Bis(2-chloroethyl)amine Hydrochloride a controlled substance?",
      answer: "Yes. This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations including ECCN classification and REACH Annex XIV authorisation. All sales and shipments from Vasudev Chemo Pharma require prior end-user vetting, valid import/export licences, and appropriate regulatory documentation. We maintain full compliance with international chemical control frameworks.",
    },
    {
      question: "What safety precautions are needed for handling this compound?",
      answer: "Bis(2-chloroethyl)amine Hydrochloride is classified as Toxic (GHS06) and Health Hazard (GHS08). It is toxic if swallowed (H301), in contact with skin (H311), or inhaled (H331), and may cause cancer (H350). Handling requires full PPE including chemical-resistant gloves, safety goggles, face shield, and respiratory protection. Work must be conducted in a fume hood or ventilated enclosure. The SDS must be reviewed before handling.",
    },
    {
      question: "What purity does Vasudev Chemo Pharma offer for this compound?",
      answer: "Vasudev Chemo Pharma supplies Bis(2-chloroethyl)amine Hydrochloride in two grades: Synthesis Grade (≥ 98% purity by HPLC) for industrial-scale pharmaceutical synthesis, and Research Grade for laboratory R&D applications. Both grades are accompanied by a Certificate of Analysis (COA) detailing purity, melting point, moisture, and residue on ignition. Available in 1 kg, 5 kg, and 25 kg packaging.",
    },
  ],
  "di-ethyl-amino-ethyl-chloride-hydrochloride": [
    {
      question: "What is DEAE-Cl HCl used for in pharmaceutical synthesis?",
      answer: "Diethylaminoethyl Chloride Hydrochloride (DEAE-Cl HCl, CAS 869-24-9) is a key pharmaceutical intermediate used as an alkylating agent to introduce the diethylaminoethyl side chain into drug molecules. This structural motif is found in several important pharmaceuticals including Chloroquine and Hydroxychloroquine (antimalarials), Procaine (local anaesthetic), and various antihistamine drugs. It is also used in ion-exchange resin functionalisation and specialty polymer synthesis.",
    },
    {
      question: "What is the CAS number and molecular formula of DEAE-Cl HCl?",
      answer: "The CAS number of Diethylaminoethyl Chloride Hydrochloride is 869-24-9. Its molecular formula is C₆H₁₄ClN·HCl with a molecular weight of 172.10 g/mol. The compound appears as a white crystalline powder with a melting point of 210–215°C. Vasudev Chemo Pharma supplies it at ≥ 99.0% purity (by GC) in pharmaceutical and technical grades.",
    },
    {
      question: "Is DEAE-Cl HCl used in Chloroquine manufacturing?",
      answer: "Yes. DEAE-Cl HCl is a critical intermediate in the synthesis of Chloroquine and Hydroxychloroquine — antimalarial drugs included in the WHO Model List of Essential Medicines. The diethylaminoethyl group introduced by DEAE-Cl HCl is an essential pharmacophore responsible for the drug's activity against Plasmodium parasites. Vasudev Chemo Pharma supplies pharmaceutical-grade DEAE-Cl HCl (≥ 99%) suitable for GMP manufacturing of these essential medicines.",
    },
    {
      question: "What safety precautions are required when handling DEAE-Cl HCl?",
      answer: "DEAE-Cl HCl is classified as Corrosive (GHS05) and Toxic (GHS06). It is toxic if swallowed (H301) or in contact with skin (H311), and causes severe skin burns and eye damage (H314). Handling requires chemical-resistant gloves, safety goggles, face shield, and protective clothing. Work should be conducted in a fume hood. Emergency eyewash and safety shower access must be available. Refer to the Safety Data Sheet provided by Vasudev Chemo Pharma for complete handling, storage, and first-aid information.",
    },
  ],
  "2-amino-5-methylthiazole": [
    {
      question: "What is 2-Amino-5-methylthiazole used for?",
      answer: "2-Amino-5-methylthiazole (CAS 7305-71-7) is a heterocyclic building block used in the synthesis of pharmaceuticals, agrochemicals, and dyes. In the pharmaceutical industry, it is a key starting material for the synthesis of Famotidine (a histamine H₂-receptor antagonist for heartburn/GERD treatment) and Nizatidine. In agrochemistry, thiazole derivatives are used in herbicide and fungicide formulations. It also serves as a corrosion inhibitor in industrial applications.",
    },
    {
      question: "Is 2-Amino-5-methylthiazole used in Famotidine API manufacturing?",
      answer: "Yes. 2-Amino-5-methylthiazole is one of the key starting materials in the multi-step synthesis of Famotidine API — a widely prescribed H₂-receptor antagonist used to treat stomach ulcers, gastroesophageal reflux disease (GERD), and Zollinger-Ellison syndrome. Vasudev Chemo Pharma supplies pharmaceutical-grade 2-Amino-5-methylthiazole (≥ 98% by HPLC) that meets the quality requirements for GMP pharmaceutical manufacturing.",
    },
    {
      question: "What is the melting point and solubility of 2-Amino-5-methylthiazole?",
      answer: "2-Amino-5-methylthiazole has a melting point of 93–97°C. It appears as a pale yellow crystalline solid with molecular formula C₄H₆N₂S and molecular weight 114.17 g/mol. It is soluble in ethanol and other organic solvents, and sparingly soluble in water. These physical properties make it suitable for use as a building block in solution-phase organic synthesis.",
    },
    {
      question: "What grades of 2-Amino-5-methylthiazole are available?",
      answer: "Vasudev Chemo Pharma supplies two grades: Pharmaceutical Grade (≥ 98% purity by HPLC, suitable for API synthesis) and Technical Grade (≥ 97% purity, suitable for agrochemical and industrial applications). Both grades are tested for moisture (≤ 0.5%), residue on ignition (≤ 0.1%), and appearance. Available in 1 kg, 5 kg, and 25 kg packaging with COA provided for every batch.",
    },
  ],
  "2-chloroethylamine-hydrochloride": [
    {
      question: "What is 2-Chloroethylamine Hydrochloride used for?",
      answer: "2-Chloroethylamine Hydrochloride (CAS 870-24-6) is a versatile organic intermediate used in the synthesis of ethyleneimine (aziridine), pharmaceutical intermediates, agrochemicals, cross-linking agents for coatings and resins, surfactants, and specialty polymers. It is a key building block for aziridine-based crosslinkers used in paper coatings, textile treatments, and advanced polymer systems.",
    },
    {
      question: "How is 2-Chloroethylamine Hydrochloride used in aziridine production?",
      answer: "2-Chloroethylamine Hydrochloride is the primary starting material for the synthesis of ethyleneimine (aziridine) through base-mediated intramolecular cyclisation. The chloroethylamine undergoes dehydrohalogenation in the presence of a strong base (typically NaOH) to form the highly reactive three-membered aziridine ring. Aziridine and its derivatives are used as crosslinking agents in coatings, adhesives, and polymer modifications.",
    },
    {
      question: "What is the purity specification of 2-Chloroethylamine Hydrochloride from Vasudev Chemo Pharma?",
      answer: "Vasudev Chemo Pharma supplies 2-Chloroethylamine Hydrochloride in Pharmaceutical Grade (≥ 99.0% purity by GC) and Technical Grade (≥ 98.0%). Key specifications include melting point 143–146°C, moisture ≤ 0.5%, residue on ignition ≤ 0.1%, and pH 2.0–4.0 (5% solution). Each batch is accompanied by a Certificate of Analysis (COA) verifying these parameters.",
    },
    {
      question: "What are the safety hazards of 2-Chloroethylamine Hydrochloride?",
      answer: "2-Chloroethylamine Hydrochloride is classified as Corrosive (GHS05) and Toxic (GHS06). It is toxic if swallowed (H301), in contact with skin (H311), or inhaled (H331), and causes severe skin burns and eye damage (H314). Full PPE including chemical-resistant gloves, goggles, face shield, and respiratory protection is required. The product must be stored in a cool, dry, well-ventilated area away from incompatible materials.",
    },
  ],
  "albendazole": [
    {
      question: "What is Albendazole API used for?",
      answer: "Albendazole (CAS 54965-21-8) is a broad-spectrum anthelmintic Active Pharmaceutical Ingredient used to treat parasitic worm infections including roundworms, hookworms, whipworms, tapeworms, and liver flukes. It is listed on the WHO Model List of Essential Medicines and is used globally in mass drug administration (MDA) programmes for deworming in endemic regions. It is formulated into oral tablets, chewable tablets, and suspensions.",
    },
    {
      question: "Does Vasudev Chemo Pharma supply WHO-GMP compliant Albendazole?",
      answer: "Yes. Vasudev Chemo Pharma manufactures Albendazole API at our WHO-GMP compliant pharmaceutical-grade facility in Gujarat, India. The product meets USP/BP/IP pharmacopoeial specifications with ≥ 99.0% assay (HPLC), controlled particle size (D90 ≤ 30 µm), and full compliance with ICH Q3C residual solvent guidelines. A Certificate of Analysis (COA) and Drug Master File (DMF) documentation are provided with every shipment.",
    },
    {
      question: "What is the CAS number of Albendazole?",
      answer: "The CAS number of Albendazole is 54965-21-8. Its molecular formula is C₁₂H₁₅N₃O₂S with a molecular weight of 265.33 g/mol. The IUPAC name is methyl [5-(propylthio)-1H-benzimidazol-2-yl]carbamate. Albendazole appears as a white to off-white powder with a melting point of 208–210°C.",
    },
    {
      question: "Is Albendazole used in veterinary medicine?",
      answer: "Yes. Albendazole is widely used in veterinary medicine as an anthelmintic for the treatment of gastrointestinal nematodes, tapeworms, and liver flukes in cattle, sheep, goats, and other livestock. Vasudev Chemo Pharma supplies both pharmaceutical-grade Albendazole (USP/BP/IP compliant for human formulations) and veterinary-grade Albendazole for animal health products. Both grades meet stringent purity and impurity profile requirements.",
    },
  ],
  "ketoconazole": [
    {
      question: "What is Ketoconazole API used for?",
      answer: "Ketoconazole (CAS 65277-42-1) is a synthetic imidazole antifungal API used in the formulation of oral tablets (systemic fungal infections), topical creams and ointments (dermatophyte infections, tinea, candidiasis), and anti-dandruff shampoos (seborrheic dermatitis, dandruff). It works by inhibiting the enzyme lanosterol 14α-demethylase (CYP51) in fungal cell membranes, disrupting ergosterol synthesis and killing the fungal cell.",
    },
    {
      question: "What pharmacopoeial standards does Vasudev Chemo Pharma's Ketoconazole meet?",
      answer: "Vasudev Chemo Pharma's Ketoconazole API meets USP (United States Pharmacopeia), BP (British Pharmacopoeia), and IP (Indian Pharmacopoeia) specifications. Key quality parameters include ≥ 99.0% assay (HPLC), melting point 148–152°C, loss on drying ≤ 0.5%, residue on ignition ≤ 0.1%, total related substances ≤ 0.5%, and residual solvents meeting ICH Q3C guidelines. A comprehensive Drug Master File (DMF) and COA are provided.",
    },
    {
      question: "Can Ketoconazole be used in shampoo formulations?",
      answer: "Yes. Ketoconazole at 1% and 2% concentrations is one of the most effective active ingredients in medicated anti-dandruff and anti-fungal shampoos. It treats seborrheic dermatitis, dandruff, and scalp fungal infections. Vasudev Chemo Pharma supplies topical-grade Ketoconazole specifically formulated for cosmeceutical and dermatological shampoo manufacturing, with particle size and dissolution characteristics optimised for topical formulations.",
    },
    {
      question: "What is the molecular formula and CAS number of Ketoconazole?",
      answer: "Ketoconazole has the molecular formula C₂₆H₂₈Cl₂N₄O₄ and molecular weight 531.43 g/mol. Its CAS number is 65277-42-1. The HS code for export is 2933.29. The compound appears as a white to off-white powder and is practically insoluble in water but soluble in acidic aqueous solutions and organic solvents such as dichloromethane and methanol.",
    },
  ],
  "pregabalin": [
    {
      question: "What is Pregabalin API used for?",
      answer: "Pregabalin (CAS 148553-50-8) is a GABA analogue API used for the treatment of neuropathic pain (diabetic neuropathy, post-herpetic neuralgia), as adjunctive therapy for partial-onset seizures in epilepsy, for generalised anxiety disorder (GAD), and fibromyalgia. It works by binding to the α2-δ subunit of voltage-gated calcium channels, reducing the release of excitatory neurotransmitters including glutamate, noradrenaline, and substance P.",
    },
    {
      question: "What enantiomeric purity does Vasudev Chemo Pharma's Pregabalin offer?",
      answer: "Vasudev Chemo Pharma supplies Pregabalin API with ≥ 99.5% enantiomeric purity (S-enantiomer), meeting the strict chiral specifications required by USP and IP pharmacopoeias. The specific optical rotation is controlled within +10.0° to +13.0°. This high enantiomeric purity is critical because the R-enantiomer has a different pharmacological profile and is considered an impurity in pharmaceutical formulations.",
    },
    {
      question: "What is the CAS number and molecular weight of Pregabalin?",
      answer: "Pregabalin has CAS number 148553-50-8, molecular formula C₈H₁₇NO₂, and molecular weight 159.23 g/mol. The IUPAC name is (S)-3-(aminomethyl)-5-methylhexanoic acid. It appears as a white crystalline powder with a melting point of 193–197°C. The HS code for export is 2922.49. Vasudev Chemo Pharma manufactures Pregabalin at our GMP-compliant facility in Gujarat, India.",
    },
    {
      question: "Does Vasudev Chemo Pharma provide DMF documentation for Pregabalin?",
      answer: "Yes. Vasudev Chemo Pharma provides complete regulatory documentation for Pregabalin API including Certificate of Analysis (COA) for every batch, Drug Master File (DMF), stability study data, and comprehensive impurity profile analysis. Our Pregabalin meets USP/IP pharmacopoeial standards including assay ≥ 99.5%, related substances ≤ 0.5% total impurities, and residual solvents meeting ICH Q3C guidelines.",
    },
  ],
};

function buildProductFaqs(product: SeedProduct) {
  const topApplications = product.applications.slice(0, 3).join(", ");
  const specificFaqs = productSpecificFaqs[product.slug] || [];

  // Start with product-specific FAQs (highest ranking value)
  const faqs = [...specificFaqs];

  // Add common FAQs that weren't already covered by specific ones
  const specificQuestionKeys = new Set(
    specificFaqs.map((f) => f.question.toLowerCase().slice(0, 30))
  );

  const commonFaqs = [
    {
      question: `What is ${product.name} used for?`,
      answer: topApplications
        ? `${product.name} (CAS ${product.casNumber}) is used for ${topApplications}. It is manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India, and is suitable for industrial and commercial applications across ${product.industries.slice(0, 3).join(", ")} sectors.`
        : `${product.name} (CAS ${product.casNumber}) is manufactured by Vasudev Chemo Pharma and is used in industrial and commercial formulations. Contact our team for application-specific guidance.`,
    },
    {
      question: `What is the CAS number of ${product.name}?`,
      answer: `The CAS (Chemical Abstracts Service) Registry Number of ${product.name} is ${product.casNumber}. The molecular formula is ${product.formula} with a molecular weight of ${product.molecularWeight}. The HS code for international trade is ${product.hsCode}.`,
    },
    {
      question: `What grades of ${product.name} are available from Vasudev Chemo Pharma?`,
      answer: product.grades.length
        ? `Vasudev Chemo Pharma supplies ${product.name} in the following grades: ${product.grades.join(", ")}. Grade selection depends on your application requirements — contact our technical team for guidance on the best grade for your process.`
        : `Grade availability depends on your specific requirement. Please contact Vasudev Chemo Pharma for current stock, pricing, and specifications.`,
    },
    {
      question: `What packaging options are available for ${product.name}?`,
      answer: product.packaging.length
        ? `Standard packaging for ${product.name} includes ${product.packaging.join(", ")}. All packaging is designed for safe transport and storage in compliance with applicable regulations. Custom packaging solutions are available for bulk or specialised requirements.`
        : `Packaging can be provided in standard drums, bags, or customised bulk options on request. Contact us for packaging specifications.`,
    },
    {
      question: `What is the minimum order quantity (MOQ) for ${product.name}?`,
      answer: `The minimum order quantity for ${product.name} from Vasudev Chemo Pharma is ${product.minOrderQuantity}. Sample quantities can be arranged for product qualification prior to bulk orders. We also support trial orders for new customers evaluating our product quality.`,
    },
    {
      question: `Do you provide COA and SDS documents with ${product.name}?`,
      answer: `Yes. Every shipment of ${product.name} from Vasudev Chemo Pharma includes a batch-specific Certificate of Analysis (COA) and Safety Data Sheet (SDS/MSDS). Additional documentation such as Technical Data Sheets (TDS) and compliance certificates can be provided on request to support your regulatory and quality system requirements.`,
    },
    {
      question: `Is ${product.name} available for international export from India?`,
      answer: `Yes. Vasudev Chemo Pharma exports ${product.name} (HS Code: ${product.hsCode}) worldwide from our facility in Gujarat, India. We support FOB, CIF, and CFR Incoterms with shipments from Kandla, Mundra, and Hazira ports. Export documentation includes commercial invoice, packing list, COA, SDS, and customs paperwork for smooth international clearance.`,
    },
  ];

  for (const faq of commonFaqs) {
    const key = faq.question.toLowerCase().slice(0, 30);
    if (!specificQuestionKeys.has(key)) {
      faqs.push(faq);
    }
  }

  return faqs;
}

const seedProducts: SeedProduct[] = [
  // ─── INDUSTRIAL CHEMICALS (5) ──────────────────────────────
  {
    name: "MEA Triazine 78% H2S Scavenger",
    slug: "mea-triazine-78-h2s-scavenger",
    sku: "VCP-IND-0001",
    formula: "C₆H₁₅N₃O₃",
    casNumber: "4719-04-4",
    category: "industrial",
    subcategory: "Oilfield Chemicals",
    description:
      "MEA Triazine 78% is a high-concentration hydrogen sulphide scavenger formulated for oil and gas applications. It reacts irreversibly with H₂S to form non-hazardous dithiazine by-products, ensuring efficient sweetening of crude oil and natural gas streams. Manufactured by Vasudev Chemo Pharma at our ISO 9001:2015 certified facility in Gujarat, India, this product is supplied at a guaranteed minimum active content of 78%, making it one of the most concentrated MEA Triazine solutions available in the market. It is compatible with both contact tower and direct-injection scavenging systems, and is suitable for sour gas treatment, amine unit support, and pipeline sweetening operations.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "177.20 g/mol",
    hsCode: "2933.69",
    originCountry: "India",
    priceUnit: "/MT",
    unitOfMeasure: "MT",
    status: "active",
    isActive: true,
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
    applications: [
      "H₂S scavenging in natural gas",
      "Crude oil sweetening",
      "Amine unit support",
      "Pipeline and wellhead treatment",
      "Biogas desulphurisation",
      "Refinery sour water treatment",
    ],
    industries: [
      "Oil & Gas",
      "Petrochemicals",
      "Refineries",
      "Biogas & Renewable Energy",
      "Water Treatment",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
      "H335 – May cause respiratory irritation",
    ],
    grades: ["Industrial Grade", "Oilfield Grade"],
    packaging: [
      "210 L HDPE drums",
      "1000 L IBC tanks",
      "Bulk tanker loads",
      "Custom packaging on request",
    ],
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
    description:
      "MMA Triazine 40% is a methyl-substituted triazine-based H₂S scavenger designed for applications where BTEX-free alternatives are required. It is widely used in natural gas processing and crude oil stabilisation. This formulation provides effective hydrogen sulphide removal at a moderate concentration, offering excellent cost-performance balance for continuous-injection systems. Manufactured by Vasudev Chemo Pharma, MMA Triazine 40% meets the stringent requirements of major oil and gas operators and is suitable for both onshore and offshore applications. The product is non-corrosive to common oilfield metallurgy and does not contribute to foaming in gas processing equipment.",
    appearance: "Clear to pale yellow liquid",
    molecularWeight: "126.12 g/mol",
    hsCode: "2933.69",
    originCountry: "India",
    priceUnit: "/MT",
    unitOfMeasure: "MT",
    status: "active",
    isActive: true,
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
    applications: [
      "H₂S removal in natural gas streams",
      "Crude oil stabilisation",
      "BTEX-free scavenging operations",
      "Wellhead and pipeline treatment",
      "Gas processing plant sweetening",
    ],
    industries: [
      "Oil & Gas",
      "Petrochemicals",
      "Refineries",
      "Biogas & Renewable Energy",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Industrial Grade", "Oilfield Grade"],
    packaging: [
      "210 L HDPE drums",
      "1000 L IBC tanks",
      "Bulk tanker loads",
      "Custom packaging on request",
    ],
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
    description:
      "P-Toluenesulfonic Acid (PTSA) is a strong organic acid widely used as a catalyst in esterification, polymerization, and dehydration reactions. It is preferred over mineral acids due to its milder and more selective reactivity. Vasudev Chemo Pharma supplies PTSA in both monohydrate and anhydrous forms, manufactured under strict quality controls at our Gujarat facility. The product is a versatile acid catalyst for resin synthesis, alkyd coatings, and biodiesel transesterification. PTSA is valued for its non-oxidising nature, ease of handling, and clean reaction profiles compared to sulphuric acid or hydrochloric acid.",
    appearance: "White crystalline solid",
    molecularWeight: "172.20 g/mol",
    hsCode: "2904.20",
    originCountry: "India",
    priceUnit: "/MT",
    unitOfMeasure: "MT",
    status: "active",
    isActive: true,
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
    applications: [
      "Esterification catalyst",
      "Polymerisation catalyst",
      "Alkyd resin manufacturing",
      "Biodiesel production",
      "Pharmaceutical synthesis",
      "Dehydration reactions",
      "Crosslinking catalyst for coatings",
    ],
    industries: [
      "Paints & Coatings",
      "Resins & Polymers",
      "Pharmaceuticals",
      "Biofuels",
      "Agrochemicals",
      "Fine Chemicals",
    ],
    safetyClass: "Corrosive / Irritant",
    ghsPictograms: ["GHS05", "GHS07"],
    signalWord: "Danger",
    hazardStatements: [
      "H314 – Causes severe skin burns and eye damage",
      "H335 – May cause respiratory irritation",
    ],
    grades: ["Industrial Grade", "Technical Grade", "Pharmaceutical Grade"],
    packaging: [
      "25 kg HDPE bags",
      "50 kg fibre drums",
      "500 kg jumbo bags",
      "Custom packaging on request",
    ],
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
    description:
      "Copper Sulphate Pentahydrate is used in agriculture as a fungicide and soil additive, in mining as a flotation reagent, and in water treatment for algae control. Also used in electroplating and the production of copper compounds. Vasudev Chemo Pharma manufactures Copper Sulphate in multiple grades — from feed-grade micronutrient supplements to high-purity electroplating grade — at our ISO 9001:2015 certified facility. The product is available as blue crystalline granules or fine powder, and is exported to over 30 countries. Copper Sulphate (CAS 7758-99-8) is an essential input across agriculture, animal husbandry, and industrial chemistry.",
    appearance: "Blue crystalline granules",
    molecularWeight: "249.69 g/mol",
    hsCode: "2833.25",
    originCountry: "India",
    priceUnit: "/MT",
    unitOfMeasure: "MT",
    status: "active",
    isActive: true,
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
    applications: [
      "Agricultural fungicide (Bordeaux mixture)",
      "Animal feed micronutrient",
      "Electroplating & electroforming",
      "Water treatment & algae control",
      "Mining flotation reagent",
      "Wood preservative (CCA treatment)",
      "Lab reagent & analytical chemistry",
    ],
    industries: [
      "Agriculture",
      "Animal Feed",
      "Mining",
      "Water Treatment",
      "Electroplating",
      "Construction (wood treatment)",
    ],
    safetyClass: "Harmful / Irritant / Hazardous to aquatic environment",
    ghsPictograms: ["GHS07", "GHS09"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H315 – Causes skin irritation",
      "H318 – Causes serious eye damage",
      "H410 – Very toxic to aquatic life with long lasting effects",
    ],
    grades: [
      "Industrial Grade",
      "Feed Grade",
      "Electroplating Grade",
      "Lab / Reagent Grade",
    ],
    packaging: [
      "25 kg HDPE bags",
      "50 kg HDPE bags",
      "1 MT jumbo bags",
      "Custom packaging on request",
    ],
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
    description:
      "Manganese Sulphate Monohydrate is used as a micronutrient in animal feed and fertilisers, as a precursor in the production of electrolytic manganese dioxide (EMD) for batteries, and in various chemical processes. Vasudev Chemo Pharma supplies Manganese Sulphate (CAS 10034-96-5) in feed-grade and industrial-grade variants, manufactured at our Gujarat-based facility. The product provides a bioavailable source of manganese essential for plant growth and animal health, and serves as a critical raw material in the lithium-ion battery supply chain for EMD and manganese-based cathode materials.",
    appearance: "Pale pink crystalline powder",
    molecularWeight: "169.02 g/mol",
    hsCode: "2833.29",
    originCountry: "India",
    priceUnit: "/MT",
    unitOfMeasure: "MT",
    status: "active",
    isActive: true,
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
    applications: [
      "Animal feed micronutrient",
      "Agricultural fertiliser additive",
      "Electrolytic Manganese Dioxide (EMD) production",
      "Battery cathode precursor",
      "Ceramic and dye manufacturing",
      "Water purification reagent",
    ],
    industries: [
      "Agriculture",
      "Animal Feed",
      "Batteries & Energy Storage",
      "Ceramics",
      "Chemicals Manufacturing",
      "Water Treatment",
    ],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Industrial Grade", "Feed Grade", "Battery Grade"],
    packaging: [
      "25 kg HDPE bags",
      "50 kg HDPE bags",
      "1 MT jumbo bags",
      "Custom packaging on request",
    ],
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
    description:
      "Bis(2-chloroethyl)amine Hydrochloride is a specialty organic intermediate used in pharmaceutical synthesis and the production of nitrogen mustard derivatives for research and industrial applications. Supplied by Vasudev Chemo Pharma, this compound (CAS 821-48-7) is manufactured under controlled conditions with strict purity assurance. It serves as a key building block for the synthesis of anti-cancer alkylating agents, cross-linking reagents, and nitrogen heterocycles. This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations (e.g. ECCN, REACH Annex XIV). The product is handled and shipped in compliance with applicable dangerous goods and export-control regulations. All sales and shipments require prior end-user vetting and appropriate licensing documentation.",
    appearance: "White to off-white crystalline solid",
    molecularWeight: "178.49 g/mol",
    hsCode: "2921.19",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
    specs: [
      { key: "Purity (by HPLC)", value: "≥ 98.0%" },
      { key: "Melting Point", value: "210 – 215°C (decomp.)" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Chloride Content", value: "Within spec" },
      { key: "Appearance", value: "White to off-white crystalline solid" },
    ],
    applications: [
      "Anti-cancer drug intermediate (nitrogen mustard derivatives)",
      "Cross-linking reagent for bioconjugation",
      "Synthesis of nitrogen heterocycles",
      "Pharmaceutical R&D and process chemistry",
    ],
    industries: [
      "Pharmaceuticals",
      "Oncology Research",
      "Fine Chemicals",
      "Biotechnology",
    ],
    safetyClass: "Toxic / Harmful",
    ghsPictograms: ["GHS06", "GHS08"],
    signalWord: "Danger",
    hazardStatements: [
      "H301 – Toxic if swallowed",
      "H311 – Toxic in contact with skin",
      "H331 – Toxic if inhaled",
      "H350 – May cause cancer",
    ],
    complianceDisclaimer:
      "This substance is listed under the Chemical Weapons Convention (CWC) Schedule 2 and may be subject to national export-control regulations including ECCN classification, REACH Annex XIV authorisation, and other chemical-control frameworks. Sale, purchase, and shipment of this product require prior end-user vetting, valid import/export licences, and appropriate regulatory documentation. Vasudev Chemo Pharma will not process orders without completed compliance verification.",
    grades: ["Synthesis Grade (≥ 98%)", "Research Grade"],
    packaging: [
      "1 kg HDPE containers",
      "5 kg HDPE drums",
      "25 kg fibre drums",
      "Custom packaging on request",
    ],
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
    description:
      "DEAE-Cl HCl (Diethylaminoethyl Chloride Hydrochloride) is a key pharmaceutical intermediate used in the synthesis of various active pharmaceutical ingredients including antihistamines and local anaesthetics. Vasudev Chemo Pharma supplies this compound (CAS 869-24-9) in high purity for GMP and non-GMP applications. It is used as an alkylating agent to introduce the diethylaminoethyl side chain into drug molecules — a structural motif found in Chloroquine, Procaine, and several other pharmaceuticals. The product is manufactured under rigorous process controls at our specialty synthesis unit in Gujarat, India.",
    appearance: "White crystalline powder",
    molecularWeight: "172.10 g/mol",
    hsCode: "2921.19",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
    specs: [
      { key: "Purity (by GC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "210 – 215°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "pH (5% solution)", value: "3.0 – 5.0" },
      { key: "Heavy Metals (as Pb)", value: "≤ 10 ppm" },
    ],
    applications: [
      "Intermediate for Chloroquine and Hydroxychloroquine",
      "Synthesis of local anaesthetics (Procaine family)",
      "Antihistamine API manufacturing",
      "Alkylating agent in organic synthesis",
      "Ion-exchange resin functionalisation",
    ],
    industries: [
      "Pharmaceuticals",
      "API Manufacturing",
      "Fine Chemicals",
      "Polymer Chemistry",
    ],
    safetyClass: "Corrosive / Toxic",
    ghsPictograms: ["GHS05", "GHS06"],
    signalWord: "Danger",
    hazardStatements: [
      "H301 – Toxic if swallowed",
      "H311 – Toxic in contact with skin",
      "H314 – Causes severe skin burns and eye damage",
    ],
    grades: ["Pharmaceutical Grade (≥ 99%)", "Technical Grade (≥ 98%)"],
    packaging: [
      "1 kg HDPE containers",
      "5 kg HDPE drums",
      "25 kg fibre drums",
      "Custom packaging on request",
    ],
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
    description:
      "2-Amino-5-methylthiazole is a heterocyclic building block used in the synthesis of pharmaceuticals, agrochemicals, and dyes. It is a key intermediate in the manufacture of several drug molecules. Supplied by Vasudev Chemo Pharma (CAS 7305-71-7), this thiazole derivative is manufactured in high purity for pharmaceutical and research applications. The compound serves as a starting material for the synthesis of Famotidine (H₂-receptor antagonist), Nizatidine, and various sulfonamide antibiotics. It is also used as a corrosion inhibitor in industrial applications and as a building block in materials science.",
    appearance: "Pale yellow crystalline solid",
    molecularWeight: "114.17 g/mol",
    hsCode: "2934.10",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
    specs: [
      { key: "Purity (by HPLC)", value: "≥ 98.0%" },
      { key: "Melting Point", value: "93 – 97°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "Appearance", value: "Pale yellow crystalline solid" },
      { key: "Solubility", value: "Soluble in ethanol, sparingly soluble in water" },
    ],
    applications: [
      "Famotidine API intermediate",
      "Nizatidine & ranitidine synthesis",
      "Agrochemical intermediate",
      "Dye and pigment synthesis",
      "Corrosion inhibitor",
      "Heterocyclic building block for research",
    ],
    industries: [
      "Pharmaceuticals",
      "Agrochemicals",
      "Dyes & Pigments",
      "Fine Chemicals",
      "Research & Development",
    ],
    safetyClass: "Irritant",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: ["Pharmaceutical Grade (≥ 98%)", "Technical Grade (≥ 97%)"],
    packaging: [
      "1 kg HDPE containers",
      "5 kg HDPE drums",
      "25 kg fibre drums",
      "Custom packaging on request",
    ],
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
    description:
      "2-Chloroethylamine Hydrochloride is a versatile organic intermediate used in the synthesis of pharmaceuticals, agrochemicals, and specialty polymers. It is a key building block for ethyleneimine derivatives. Vasudev Chemo Pharma supplies this compound (CAS 870-24-6) in high purity for use in the production of aziridine-based crosslinkers, surfactants, and pharmaceutical intermediates. The product is manufactured at our specialty chemicals unit under controlled conditions and is available in research and bulk quantities for industrial-scale synthesis.",
    appearance: "White crystalline powder",
    molecularWeight: "116.01 g/mol",
    hsCode: "2921.19",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
    specs: [
      { key: "Purity (by GC)", value: "≥ 99.0%" },
      { key: "Melting Point", value: "143 – 146°C" },
      { key: "Moisture", value: "≤ 0.5%" },
      { key: "Residue on Ignition", value: "≤ 0.1%" },
      { key: "pH (5% solution)", value: "2.0 – 4.0" },
      { key: "Appearance", value: "White crystalline powder" },
    ],
    applications: [
      "Ethyleneimine (aziridine) synthesis",
      "Pharmaceutical intermediate",
      "Agrochemical intermediate",
      "Cross-linking agent for coatings & resins",
      "Surfactant synthesis",
      "Specialty polymer building block",
    ],
    industries: [
      "Pharmaceuticals",
      "Agrochemicals",
      "Polymers & Resins",
      "Fine Chemicals",
      "Coatings",
    ],
    safetyClass: "Corrosive / Toxic",
    ghsPictograms: ["GHS05", "GHS06"],
    signalWord: "Danger",
    hazardStatements: [
      "H301 – Toxic if swallowed",
      "H311 – Toxic in contact with skin",
      "H314 – Causes severe skin burns and eye damage",
      "H331 – Toxic if inhaled",
    ],
    grades: ["Pharmaceutical Grade (≥ 99%)", "Technical Grade (≥ 98%)"],
    packaging: [
      "1 kg HDPE containers",
      "5 kg HDPE drums",
      "25 kg fibre drums",
      "Custom packaging on request",
    ],
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
    description:
      "Albendazole is a broad-spectrum anthelmintic API intermediate used for the treatment of parasitic worm infestations. It is a benzimidazole derivative effective against nematodes, cestodes, and trematodes. Vasudev Chemo Pharma manufactures Albendazole (CAS 54965-21-8) in compliance with WHO-GMP guidelines at our pharmaceutical-grade facility in Gujarat, India. The product is supplied in high purity (≥ 99% by HPLC) and is accompanied by a Certificate of Analysis (COA) and Drug Master File (DMF) documentation. Albendazole is listed on the WHO Model List of Essential Medicines and is used globally in mass drug administration programmes for deworming.",
    appearance: "White to off-white powder",
    molecularWeight: "265.33 g/mol",
    hsCode: "2933.99",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
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
    applications: [
      "Oral anthelmintic tablet formulation",
      "Suspension & chewable tablet manufacturing",
      "WHO mass drug administration programmes",
      "Veterinary deworming formulations",
      "Anti-parasitic combination therapies",
    ],
    industries: [
      "Pharmaceuticals",
      "Veterinary Medicine",
      "Public Health (WHO programmes)",
      "Contract Manufacturing (CDMO)",
    ],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07", "GHS08"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H361 – Suspected of damaging fertility or the unborn child",
    ],
    grades: [
      "Pharmaceutical Grade (USP/BP/IP compliant)",
      "Veterinary Grade",
    ],
    packaging: [
      "1 kg double LDPE bags in fibre drums",
      "5 kg double LDPE bags in fibre drums",
      "25 kg HDPE drums",
      "Custom packaging on request",
    ],
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
    description:
      "Ketoconazole is a synthetic imidazole antifungal agent used in the treatment of fungal infections. As an API intermediate, it is supplied in high purity for formulation into oral tablets, topical creams, and shampoos. Vasudev Chemo Pharma manufactures Ketoconazole (CAS 65277-42-1) at our WHO-GMP compliant facility in Gujarat, India. The product meets USP/BP pharmacopoeial specifications and is supported by a comprehensive Drug Master File. Ketoconazole works by inhibiting ergosterol synthesis in fungal cell membranes, making it effective against a broad spectrum of dermatophytes, yeasts, and dimorphic fungi.",
    appearance: "White to off-white powder",
    molecularWeight: "531.43 g/mol",
    hsCode: "2933.29",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
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
    applications: [
      "Oral antifungal tablet formulation",
      "Topical cream & ointment manufacturing",
      "Anti-dandruff shampoo formulation",
      "Veterinary antifungal preparations",
      "Combination dermatological products",
    ],
    industries: [
      "Pharmaceuticals",
      "Dermatology & Cosmeceuticals",
      "Veterinary Medicine",
      "Contract Manufacturing (CDMO)",
    ],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07", "GHS08"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H361 – Suspected of damaging fertility or the unborn child",
      "H370 – Causes damage to organs (liver) through prolonged exposure",
    ],
    grades: [
      "Pharmaceutical Grade (USP/BP/IP compliant)",
      "Topical Grade",
    ],
    packaging: [
      "1 kg double LDPE bags in fibre drums",
      "5 kg double LDPE bags in fibre drums",
      "25 kg HDPE drums",
      "Custom packaging on request",
    ],
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
    description:
      "Pregabalin is an API intermediate for a medication used to treat neuropathic pain, epilepsy, and generalized anxiety disorder. It is a GABA analogue that reduces neuronal excitability. Vasudev Chemo Pharma supplies Pregabalin (CAS 148553-50-8) manufactured at our GMP-compliant facility in Gujarat, India. The product meets pharmacopoeial standards (USP/IP) and is supplied with a Certificate of Analysis and complete analytical documentation. Pregabalin binds to the alpha-2-delta subunit of voltage-gated calcium channels, modulating neurotransmitter release — making it highly effective for neuropathic pain management, fibromyalgia, and adjunctive epilepsy therapy.",
    appearance: "White crystalline powder",
    molecularWeight: "159.23 g/mol",
    hsCode: "2922.49",
    originCountry: "India",
    priceUnit: "/kg",
    unitOfMeasure: "kg",
    status: "active",
    isActive: true,
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
    applications: [
      "Neuropathic pain capsule formulation",
      "Anti-epileptic drug manufacturing",
      "Generalised anxiety disorder treatment",
      "Fibromyalgia therapy formulations",
      "Combination neurological products",
    ],
    industries: [
      "Pharmaceuticals",
      "Neurology & Pain Management",
      "Contract Manufacturing (CDMO)",
      "Generic Drug Manufacturers",
    ],
    safetyClass: "Harmful",
    ghsPictograms: ["GHS07"],
    signalWord: "Warning",
    hazardStatements: [
      "H302 – Harmful if swallowed",
      "H315 – Causes skin irritation",
      "H319 – Causes serious eye irritation",
    ],
    grades: [
      "Pharmaceutical Grade (USP/IP compliant)",
    ],
    packaging: [
      "1 kg double LDPE bags in fibre drums",
      "5 kg double LDPE bags in fibre drums",
      "25 kg HDPE drums",
      "Custom packaging on request",
    ],
    minOrderQuantity: "1 kg",
  },
];

async function seed() {
  const payload = await getPayload({ config });

  console.log("🌱 Seeding products...");

  // Clear existing products
  let productsDeleting = true;
  while (productsDeleting) {
    const existing = await payload.find({ collection: "products", limit: 100 });
    if (existing.docs.length > 0) {
      console.log(`  Deleting ${existing.docs.length} existing products...`);
      for (const doc of existing.docs) {
        await payload.delete({ collection: "products", id: doc.id });
      }
    } else {
      productsDeleting = false;
    }
  }

  // Insert all products
  for (const product of seedProducts) {
    await payload.create({
      collection: "products",
      data: {
        ...product,
        supplier: "Vasudev Chemo Pharma",
        certifications: ["ISO 9001:2015"],
        currency: "USD",
        price: 0,
        images: [],
        documents: [],
        faqs: buildProductFaqs(product),
      },
    });
    console.log(`  ✓ ${product.name}`);
  }

  console.log(`\n✅ Seeded ${seedProducts.length} products successfully.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
