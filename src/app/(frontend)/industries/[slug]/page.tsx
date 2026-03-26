import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import {
  buildCountryPagePath,
  FEATURED_COUNTRY_SLUGS,
} from "@/lib/seo/seo-route-helpers";
import { COUNTRY_PAGES_DATA } from "@/lib/seo/country-pages-data";

/* ── Industry data ────────────────────────────────────────────── */

type IndustryPage = {
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  image: string;
  sections: {
    heading: string;
    body: string;
  }[];
  specs?: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  servedIndustries: string[];
  faqs: { question: string; answer: string }[];
};

const industryData: Record<string, IndustryPage> = {
  "oil-gas-h2s-scavenger": {
    title: "MEA Triazine H2S Scavenger for Oil & Gas",
    h1: "MEA Triazine H2S Scavenger for Oil & Gas — Manufacturer Direct from India",
    description:
      "Vasudev Chemo Pharma manufactures MEA Triazine 78% H2S scavenger for oil & gas. Direct supply from India with ISO 9001:2015 certification. Request a free sample.",
    keywords: [
      "H2S Scavenger oil gas",
      "MEA Triazine upstream oil gas",
      "hydrogen sulfide removal natural gas",
      "H2S scavenger manufacturer India",
      "MEA Triazine 78 oil and gas",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The H2S Problem in Oil & Gas",
        body: `Hydrogen sulfide (H2S) is one of the most dangerous gases encountered in oil and gas operations. Even at low concentrations, H2S is acutely toxic — the OSHA permissible exposure limit (PEL) is just 20 ppm, and concentrations above 100 ppm are immediately life-threatening. Beyond personnel safety, H2S causes severe corrosion in pipelines, wellhead equipment, and processing facilities, leading to costly unplanned shutdowns and regulatory penalties.

In upstream production, H2S occurs naturally in sour crude oil and natural gas reservoirs. Midstream and downstream operations face H2S in gas processing, refining, and pipeline transport. Left untreated, H2S corrodes carbon steel infrastructure, contaminates products, and creates compliance failures with API and NACE standards. The cost of inaction — equipment replacement, safety incidents, and environmental fines — far exceeds the cost of effective chemical scavenging.`,
      },
      {
        heading: "How MEA Triazine 78% Solves It",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine) reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product. This reaction is fast, efficient, and works across a wide range of temperatures and pressures encountered in oil and gas operations.

At 78% active concentration, our MEA Triazine delivers maximum scavenging capacity per litre, reducing your chemical consumption and logistics costs. It is effective across upstream wellhead injection, midstream gas sweetening, and downstream refinery off-gas treatment. The product is water-soluble, biodegradable, and does not introduce new environmental hazards into your operations.

MEA Triazine is the industry-standard liquid H2S scavenger for good reason: it is cost-effective, easy to inject via chemical dosing pumps, and does not require special handling equipment beyond standard chemical safety protocols.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Direct from manufacturer — no middlemen",
      "Near Kandla, Mundra, Hazira ports — fast export",
      "COA, TDS, MSDS available on every order",
      "Free samples available for qualification testing",
      "Technical support for dosage optimisation",
    ],
    servedIndustries: [
      "Natural gas pipelines",
      "Offshore oil platforms",
      "Gas processing plants",
      "Petroleum refineries",
    ],
    faqs: [
      {
        question: "What concentration of MEA Triazine do you supply for oil and gas?",
        answer:
          "We supply MEA Triazine at 78% active concentration, which is the industry standard for oil and gas H2S scavenging. This high concentration maximises scavenging efficiency per litre and reduces overall chemical consumption.",
      },
      {
        question: "Can MEA Triazine be used in sour gas pipelines?",
        answer:
          "Yes. MEA Triazine 78% is widely used for continuous injection into sour gas pipelines to remove H2S. It is effective across typical pipeline operating temperatures and pressures, and the dithiazine by-product remains in the liquid phase.",
      },
      {
        question: "What is the typical dosage of MEA Triazine for H2S removal?",
        answer:
          "Dosage depends on the H2S concentration and flow rate. As a rule of thumb, approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. Our technical team can help you calculate the optimal dosage for your specific application.",
      },
      {
        question: "Do you provide free samples for testing?",
        answer:
          "Yes. We provide free samples of MEA Triazine 78% for laboratory and field qualification testing. Contact us with your requirements and we will arrange sample shipment.",
      },
      {
        question: "What export documentation do you provide?",
        answer:
          "Every shipment includes a Certificate of Analysis (COA), Technical Data Sheet (TDS), and Material Safety Data Sheet (MSDS). We also handle all export compliance documentation including customs paperwork, phytosanitary certificates, and dangerous goods declarations as required.",
      },
    ],
  },

  "water-treatment": {
    title: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    h1: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    description:
      "MMA Triazine 40% H2S scavenger for water and wastewater treatment. Safe for municipal systems. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "MMA Triazine water treatment",
      "H2S scavenger wastewater",
      "triazine for sewage treatment",
      "hydrogen sulfide removal wastewater",
      "MMA Triazine 40 manufacturer",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S in Water Treatment Systems",
        body: `Hydrogen sulfide is a common problem in wastewater collection systems, treatment plants, and industrial water circuits. It forms when sulphate-reducing bacteria thrive in anaerobic conditions — inside sewer lines, lift stations, digesters, and stagnant holding tanks. The result is foul odour complaints, concrete and metal corrosion, and health risks for maintenance workers.

Municipal authorities and industrial operators face increasing pressure to control H2S emissions at the source. Chemical scavenging with triazine-based products offers an effective, easy-to-deploy solution that works in both batch treatment and continuous dosing scenarios.`,
      },
      {
        heading: "MMA Triazine 40% for Wastewater",
        body: `MMA Triazine (mono-methylamine triazine) at 40% active concentration is specifically formulated for water and wastewater applications. It reacts with dissolved H2S to form a stable, water-soluble by-product that does not re-release hydrogen sulfide.

MMA Triazine 40% is safe for use in municipal wastewater systems and does not introduce harmful residues. Typical dosage ranges from 10–20 ppm depending on H2S levels and system pH. The product can be injected at lift stations, headworks, or directly into collection lines using standard chemical dosing equipment.

Compared to iron-based and oxidiser alternatives, MMA Triazine offers consistent performance across varying pH and temperature conditions, with lower equipment maintenance requirements.`,
      },
    ],
    specs: [
      { label: "Product", value: "MMA Triazine 40%" },
      { label: "Active content", value: "40% (w/w)" },
      { label: "Appearance", value: "Clear liquid" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "MOQ (Domestic)", value: "220 Kg" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "Safe for municipal wastewater systems",
      "Direct from manufacturer — competitive pricing",
      "COA, TDS, MSDS with every shipment",
      "Free samples for pilot testing",
      "Technical dosage guidance available",
    ],
    servedIndustries: [
      "Municipal wastewater treatment plants",
      "Industrial effluent treatment",
      "Sewage collection systems",
      "Water recycling facilities",
    ],
    faqs: [
      {
        question: "Is MMA Triazine safe for municipal wastewater systems?",
        answer:
          "Yes. MMA Triazine 40% is widely used in municipal wastewater treatment. The reaction by-products are water-soluble and non-toxic, and the product does not introduce harmful residues into treated water.",
      },
      {
        question: "What dosage of MMA Triazine is needed for wastewater?",
        answer:
          "Typical dosage ranges from 10–20 ppm based on H2S concentration and system conditions. Our technical team can help you optimise dosage based on your specific water chemistry and treatment targets.",
      },
      {
        question: "Can MMA Triazine be used alongside other treatment chemicals?",
        answer:
          "MMA Triazine is compatible with most common wastewater treatment chemicals. However, we recommend consulting our technical team before combining with strong oxidisers or highly acidic chemicals to ensure optimal performance.",
      },
    ],
  },

  "metal-working-fluids": {
    title: "Triazine Biocide for Metal Working Fluids",
    h1: "Triazine Biocide for Metal Working Fluids — MMA & MEA Triazine Supplier",
    description:
      "Triazine biocide for metalworking fluid preservation. Formaldehyde-releasing biocide effective against bacteria, fungi, and algae. Manufactured in India.",
    keywords: [
      "Triazine biocide cutting fluid",
      "metalworking fluid preservative",
      "formaldehyde releasing biocide India",
      "Grotan BK equivalent India",
      "triazine biocide manufacturer",
    ],
    image:
      "https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp",
    sections: [
      {
        heading: "Microbial Contamination in Cutting Fluids",
        body: `Metalworking fluids (MWFs) provide an ideal environment for microbial growth. Water-miscible cutting fluids, grinding fluids, and coolants contain organic nutrients and operate at warm temperatures — conditions that promote rapid proliferation of bacteria, fungi, and algae. Uncontrolled microbial contamination leads to foul odours, reduced fluid performance, shortened sump life, skin irritation for operators, and increased disposal costs.

Regular biocide treatment is essential to maintain fluid quality, extend sump life, and protect worker health. Triazine-based biocides offer a proven, cost-effective solution used across the metalworking industry globally.`,
      },
      {
        heading: "How Triazine Acts as a Biocide Preservative",
        body: `Triazine biocides work through a formaldehyde-releasing mechanism. In the aqueous environment of metalworking fluids, triazine slowly hydrolyses to release formaldehyde at controlled, low concentrations. This sustained release provides broad-spectrum antimicrobial activity against bacteria, fungi, and algae without the handling risks associated with free formaldehyde.

Our triazine biocides are functionally equivalent to Grotan BK and other established formaldehyde-releasing preservatives. They are compatible with most water-miscible metalworking fluid formulations and can be used both as an initial charge biocide and for ongoing maintenance dosing.

Recommended dosage is typically 0.1–0.3% by volume for initial charge, with maintenance additions of 0.05–0.1% as needed based on microbiological monitoring. The product is easy to handle, mixes readily with metalworking fluids, and does not adversely affect fluid performance or surface finish quality.`,
      },
    ],
    specs: [
      { label: "Products available", value: "MMA Triazine 40%, MEA Triazine 78%" },
      { label: "Function", value: "Formaldehyde-releasing biocide" },
      { label: "Application", value: "Metalworking fluids, cutting oils, coolants" },
      { label: "Typical dosage", value: "0.1–0.3% (initial), 0.05–0.1% (maintenance)" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Grotan BK equivalent — proven performance",
      "Broad-spectrum: bacteria, fungi, and algae",
      "Controlled formaldehyde release — safer handling",
      "Compatible with most MWF formulations",
      "Competitive pricing — direct from Indian manufacturer",
      "COA, TDS, MSDS documentation included",
    ],
    servedIndustries: [
      "Automotive machining plants",
      "Aerospace component manufacturing",
      "General metalworking and fabrication",
      "Cutting fluid and coolant formulators",
    ],
    faqs: [
      {
        question: "Is your triazine biocide equivalent to Grotan BK?",
        answer:
          "Yes. Our triazine biocides are functionally equivalent to Grotan BK and other hexahydro-1,3,5-triazine based preservatives. They provide the same formaldehyde-releasing antimicrobial mechanism and are compatible with standard metalworking fluid formulations.",
      },
      {
        question: "What dosage is recommended for cutting fluids?",
        answer:
          "For initial charge, we recommend 0.1–0.3% by volume. Maintenance dosing of 0.05–0.1% should be applied based on regular microbiological monitoring (dip slides or plate counts). Our technical team can help you establish a monitoring and dosing programme.",
      },
      {
        question: "Is triazine biocide safe for operators?",
        answer:
          "Triazine biocides release formaldehyde at controlled, low concentrations — well below levels that would cause workplace exposure concerns when used at recommended dosages. Standard chemical handling precautions (gloves, eye protection) should be observed when adding the concentrate.",
      },
    ],
  },

  "petrochemical": {
    title: "MEA Triazine H2S Scavenger for Petrochemical Plants",
    h1: "MEA Triazine H2S Scavenger for Petrochemical Operations — Direct from Manufacturer",
    description:
      "MEA Triazine 78% H2S scavenger for petrochemical plants. Protects crackers, reformers, and downstream units from sulfide corrosion. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "MEA Triazine petrochemical",
      "H2S scavenger petrochemical plant",
      "hydrogen sulfide removal petrochemical",
      "triazine for naphtha cracker",
      "petrochemical corrosion inhibitor H2S",
      "H2S scavenger manufacturer India",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S Challenges in Petrochemical Operations",
        body: `Petrochemical complexes process hydrocarbon feedstocks that frequently contain hydrogen sulfide and other sulfur compounds. Steam crackers, catalytic reformers, hydrotreaters, and amine regeneration units all generate or encounter H2S at concentrations that threaten equipment integrity and product quality. Sulfide stress cracking in heat exchangers, fouling of catalyst beds, and off-spec product contamination are common consequences of inadequate H2S management.

The scale of petrochemical operations amplifies the cost of corrosion-related failures. A single unplanned shutdown of a cracker or reformer can cost millions in lost production. Regulatory compliance under OSHA, EPA, and local environmental agencies requires continuous monitoring and control of sulfur emissions from process vents, flare systems, and wastewater streams.`,
      },
      {
        heading: "MEA Triazine 78% in Petrochemical Applications",
        body: `MEA Triazine (1,3,5-tri(2-hydroxyethyl)-hexahydro-s-triazine) is deployed across multiple points in petrochemical facilities for H2S control. It is injected into process streams, amine system overheads, sour water strippers, and flare gas headers to reduce H2S concentrations below safety and compliance thresholds.

At 78% active concentration, MEA Triazine delivers high scavenging capacity with minimal dilution of process streams. The irreversible reaction with H2S produces water-soluble dithiazine — a stable, non-toxic by-product that does not re-release hydrogen sulfide under process conditions. This makes MEA Triazine suitable for both continuous injection and batch treatment scenarios common in petrochemical plants.

Unlike regenerable amine systems that require dedicated stripping columns and reboilers, MEA Triazine is a simple liquid injection that can be deployed at any point in the process where H2S control is needed — including locations where installing a full amine unit is impractical or uneconomical.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Application points", value: "Amine overheads, sour water strippers, flare headers" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "High 78% concentration — maximum scavenging per litre",
      "Direct from manufacturer — competitive bulk pricing",
      "Effective across cracker, reformer, and amine system applications",
      "COA, TDS, MSDS documentation with every shipment",
      "Technical support for process-specific dosing optimisation",
    ],
    servedIndustries: [
      "Steam cracker complexes",
      "Catalytic reforming units",
      "Amine regeneration systems",
      "Sulfur recovery units",
    ],
    faqs: [
      {
        question: "Where is MEA Triazine injected in a petrochemical plant?",
        answer:
          "MEA Triazine 78% is typically injected at amine system overheads, sour water stripper outlets, flare gas headers, and any process stream where H2S concentrations exceed safety or specification limits. The exact injection points depend on your facility configuration — our technical team can help you identify optimal locations.",
      },
      {
        question: "Can MEA Triazine replace amine systems in petrochemical operations?",
        answer:
          "MEA Triazine is used as a complement to amine systems — not a replacement for large-scale amine treating. It is ideal for polishing residual H2S after amine treatment, treating low-volume streams where a full amine unit is uneconomical, and providing backup scavenging during amine system upsets or turnarounds.",
      },
      {
        question: "What is the scavenging capacity of MEA Triazine 78% in petrochemical service?",
        answer:
          "Approximately 4.5 litres of MEA Triazine 78% is required per kilogram of H2S removed. Actual consumption depends on H2S concentration, contact time, temperature, and injection method. Our team provides dosing calculations for your specific process conditions.",
      },
      {
        question: "Do you supply MEA Triazine in bulk for petrochemical complexes?",
        answer:
          "Yes. We supply MEA Triazine 78% in 220 L drums, 1000 L IBCs, and bulk tanker quantities. For large petrochemical complexes with continuous consumption, we offer scheduled bulk supply arrangements with competitive pricing.",
      },
    ],
  },

  "refining": {
    title: "H2S Scavenger for Refinery Operations — MEA Triazine 78%",
    h1: "H2S Scavenger for Refinery Operations — MEA Triazine 78% Manufacturer",
    description:
      "MEA Triazine 78% H2S scavenger for petroleum refineries. Crude unit overheads, FCC off-gas, and tank vapour treatment. Manufactured by Vasudev Chemo Pharma, India.",
    keywords: [
      "H2S scavenger refinery",
      "MEA Triazine refinery operations",
      "hydrogen sulfide removal refinery",
      "crude unit overhead H2S",
      "FCC off-gas H2S scavenger",
      "refinery corrosion control H2S",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "H2S Corrosion Risks in Refineries",
        body: `Petroleum refineries process crude oil containing varying levels of sulfur compounds that decompose into hydrogen sulfide during thermal and catalytic processing. The crude distillation unit (CDU) overhead system, fluid catalytic cracker (FCC) off-gas, hydrocracker effluent, and coker unit are all significant H2S generation points. Storage tanks receiving sour intermediates also accumulate H2S in the vapour space.

H2S-induced corrosion in refinery equipment is a leading cause of unplanned shutdowns and safety incidents. Overhead condenser systems are particularly vulnerable — wet H2S combined with chlorides creates aggressive corrosion environments that can perforate heat exchanger tubes and overhead piping within months. API 571 classifies wet H2S damage as one of the most common damage mechanisms in refining service. Beyond equipment integrity, refineries must comply with SOx emission limits and sulfur content specifications in finished products.`,
      },
      {
        heading: "MEA Triazine 78% for Refinery H2S Control",
        body: `MEA Triazine is applied in refineries as a targeted H2S scavenging agent at process points where amine treatment alone is insufficient or impractical. Common refinery applications include:

Crude unit overhead systems: MEA Triazine injection into the overhead accumulator or reflux drum controls H2S that contributes to overhead corrosion. This complements neutralising amines and filming inhibitors in a comprehensive overhead corrosion management programme.

FCC off-gas treatment: The FCC wet gas compressor discharge and downstream absorber overhead contain H2S that must be removed before the gas enters the fuel gas system or sulfur recovery unit. MEA Triazine provides fast-acting scavenging at these critical points.

Tank vapour treatment: Crude and intermediate storage tanks accumulate H2S in the vapour space. MEA Triazine-based scrubbing systems or direct vapour-space injection reduce H2S to safe levels for tank maintenance and reduce emissions from tank vents.

The 78% active concentration provides maximum chemical efficiency, reducing the volume of scavenger required per unit of H2S removed — an important consideration in refineries where chemical storage and handling space is often constrained.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "Refinery applications", value: "CDU overheads, FCC off-gas, tank vapour, sour water" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
      { label: "Lead time (Domestic)", value: "4–5 days" },
    ],
    benefits: [
      "ISO 9001:2015 certified manufacturer",
      "78% concentration — high efficiency in constrained spaces",
      "Effective at CDU overheads, FCC off-gas, and tank vapour service",
      "Direct from manufacturer — no middlemen, competitive pricing",
      "COA, TDS, MSDS included with every shipment",
      "Technical support for refinery-specific dosing programmes",
    ],
    servedIndustries: [
      "Crude oil refineries",
      "FCC and hydrocracking units",
      "Petroleum storage terminals",
      "Refinery wastewater treatment",
    ],
    faqs: [
      {
        question: "How is MEA Triazine used in refinery overhead systems?",
        answer:
          "MEA Triazine 78% is injected into the crude unit overhead system — typically at the overhead accumulator or reflux drum — to scavenge H2S before it can cause corrosion in condenser tubes and piping. It works alongside neutralising amines and filming corrosion inhibitors as part of a comprehensive overhead treatment programme.",
      },
      {
        question: "Can MEA Triazine treat FCC off-gas?",
        answer:
          "Yes. MEA Triazine is commonly injected into FCC wet gas compressor discharge and absorber overhead streams to remove H2S before the gas enters the refinery fuel gas system or sulfur recovery unit. Dosing is adjusted based on FCC feed sulfur content and operating severity.",
      },
      {
        question: "Is MEA Triazine compatible with other refinery chemical treatments?",
        answer:
          "MEA Triazine 78% is compatible with neutralising amines (MDEA, morpholine), filming inhibitors, and demulsifiers commonly used in refinery operations. Our technical team can review your existing chemical programme to ensure compatibility.",
      },
      {
        question: "What quantity of MEA Triazine does a typical refinery consume?",
        answer:
          "Consumption depends on crude sulfur content, throughput, and the number of injection points. A mid-size refinery processing sour crude may consume 5–20 MT per month of MEA Triazine 78%. We offer bulk supply arrangements with scheduled deliveries for continuous operations.",
      },
    ],
  },

  "biogas": {
    title: "MEA Triazine H2S Scavenger for Biogas Purification",
    h1: "MEA Triazine H2S Scavenger for Biogas & Biomethane Purification",
    description:
      "MEA Triazine 78% removes H2S from biogas, landfill gas, and anaerobic digester output. Protects engines, turbines, and upgrading equipment. Supplied by Vasudev Chemo Pharma, India.",
    keywords: [
      "H2S scavenger biogas",
      "MEA Triazine biogas purification",
      "hydrogen sulfide removal biogas",
      "biogas H2S removal chemical",
      "landfill gas H2S treatment",
      "biomethane H2S scavenger",
      "anaerobic digester H2S",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Waste_Water_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "The H2S Problem in Biogas",
        body: `Biogas produced from anaerobic digestion of organic waste, wastewater sludge, agricultural residues, and landfill decomposition typically contains hydrogen sulfide at concentrations ranging from 100 to over 10,000 ppm. This H2S originates from the bacterial reduction of sulfate and the decomposition of sulfur-containing proteins in the feedstock.

Untreated H2S in biogas causes rapid corrosion of engines, turbines, piping, and biogas upgrading equipment. It also poses a direct safety hazard to plant operators and produces sulfur dioxide (SO2) emissions when combusted — a regulated air pollutant. For biogas upgrading to biomethane or renewable natural gas (RNG), pipeline injection specifications typically require H2S below 4 ppm, demanding effective and reliable removal technology.`,
      },
      {
        heading: "MEA Triazine for Biogas H2S Removal",
        body: `MEA Triazine 78% is an effective liquid H2S scavenger for biogas applications. It is injected into the biogas stream — typically in a packed scrubbing column or inline injection system — where it reacts irreversibly with H2S to form dithiazine, a water-soluble and non-toxic by-product.

For smaller biogas plants (agricultural digesters, small landfills), MEA Triazine offers a simple, low-capital solution: a chemical dosing pump and a contact vessel are the only equipment required. For larger operations, MEA Triazine can be used as a polishing step after biological desulfurisation or iron-based removal to achieve the stringent H2S limits required for biomethane upgrading and grid injection.

The 78% active concentration minimises chemical consumption and reduces the frequency of chemical deliveries — an important consideration for biogas plants in rural or remote locations. The spent solution is non-hazardous and can typically be disposed of through the existing wastewater management system at the biogas facility.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Active content", value: "78% (w/w)" },
      { label: "CAS Number", value: "4719-04-4" },
      { label: "Appearance", value: "Clear to slightly yellow liquid" },
      { label: "H2S removal capacity", value: "~4.5 L per kg H2S removed" },
      { label: "Biogas applications", value: "Digesters, landfill gas, biomethane upgrading" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Simple deployment — dosing pump + contact vessel only",
      "78% concentration — fewer deliveries to remote biogas sites",
      "Non-hazardous spent solution — easy disposal",
      "Effective from 100 ppm to 10,000+ ppm H2S",
      "Suitable for biomethane upgrading to pipeline spec (< 4 ppm H2S)",
      "ISO 9001:2015 certified manufacturer — COA, TDS, MSDS included",
    ],
    servedIndustries: [
      "Agricultural biogas plants",
      "Landfill gas collection facilities",
      "Wastewater sludge digesters",
      "Biomethane upgrading and RNG plants",
    ],
    faqs: [
      {
        question: "Can MEA Triazine achieve biomethane pipeline specifications?",
        answer:
          "Yes. MEA Triazine 78% can reduce H2S to below 4 ppm when used in a properly designed scrubbing system. For high-H2S biogas, it is often used as a polishing step after biological or iron-based primary removal to reliably achieve pipeline-grade biomethane specifications.",
      },
      {
        question: "What equipment is needed to use MEA Triazine in a biogas plant?",
        answer:
          "A basic MEA Triazine dosing system requires a chemical storage tank, a metering/dosing pump, and a gas-liquid contact vessel (packed column or spray tower). For smaller plants, inline injection with a static mixer can also be effective. No regeneration equipment is needed.",
      },
      {
        question: "How does MEA Triazine compare to iron sponge for biogas?",
        answer:
          "Iron sponge (iron oxide) media requires periodic replacement and generates spent media that may be classified as hazardous waste. MEA Triazine is a liquid that is continuously dosed, produces non-hazardous spent solution, and requires no media change-outs. MEA Triazine has higher operating cost per unit of H2S removed but lower capital and maintenance costs.",
      },
      {
        question: "Is MEA Triazine suitable for landfill gas applications?",
        answer:
          "Yes. MEA Triazine 78% is effective for landfill gas H2S removal. Landfill gas typically contains 50–500 ppm H2S, which is well within the effective range for MEA Triazine treatment. It protects landfill gas engines, turbines, and upgrading equipment from sulfide corrosion.",
      },
    ],
  },

  "paper-mill": {
    title: "MEA Triazine Slimicide for Pulp & Paper Mills",
    h1: "MEA Triazine Slimicide for Pulp & Paper Mills",
    description:
      "MEA Triazine slimicide for pulp and paper mill biofilm control. Anti-slime agent for paper production. Exported to mills in Vietnam, Thailand, Southeast Asia.",
    keywords: [
      "Triazine slimicide paper mill",
      "biocide pulp and paper",
      "anti-slime agent paper industry",
      "paper mill biocide India",
      "slimicide manufacturer export",
    ],
    image:
      "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Paper_Mill_Treatment_Vasudev_Chemo_Pharma.png",
    sections: [
      {
        heading: "Biofilm and Slime in Paper Production",
        body: `Paper and pulp mills operate extensive water circuits that are highly susceptible to microbial contamination. Warm, nutrient-rich white water systems, stock preparation areas, and paper machine wet ends provide ideal conditions for bacterial growth and biofilm formation. Slime deposits on wires, felts, and machine surfaces cause sheet breaks, holes, spots, and reduced paper quality.

Uncontrolled biofilm accumulation leads to costly unplanned machine shutdowns for cleaning, increased reject rates, and elevated fibre and chemical consumption. Effective slimicide treatment is essential for maintaining production efficiency and product quality.`,
      },
      {
        heading: "Triazine as an Industrial Slimicide",
        body: `MEA Triazine is an effective formaldehyde-releasing slimicide for paper mill applications. It provides sustained antimicrobial activity in the high-volume water circuits of paper machines, controlling bacterial growth and preventing biofilm accumulation on machine surfaces.

The product can be dosed continuously into the white water system or applied as a targeted shock treatment during scheduled cleaning. Its water solubility ensures uniform distribution throughout the water circuit, and the controlled formaldehyde release mechanism provides lasting protection between doses.

MEA Triazine is compatible with common paper mill chemicals including retention aids, sizing agents, and wet-strength resins. It does not cause foaming or interfere with paper machine runnability when used at recommended dosages.`,
      },
    ],
    specs: [
      { label: "Product", value: "MEA Triazine 78%" },
      { label: "Function", value: "Slimicide / biocide" },
      { label: "Application", value: "White water systems, stock preparation, wet end" },
      { label: "Packaging", value: "220 L drums, IBC 1000 L, bulk tanker" },
      { label: "MOQ (Export)", value: "1 MT" },
      { label: "Lead time (Export)", value: "10–15 days" },
    ],
    benefits: [
      "Effective biofilm and slime control",
      "Compatible with paper mill chemistry",
      "No foaming — safe for paper machines",
      "ISO 9001:2015 certified production",
      "Export experience to Vietnam, Thailand, Southeast Asia",
      "COA, TDS, MSDS documentation provided",
    ],
    servedIndustries: [
      "Kraft and recycled paper mills",
      "Tissue and packaging board production",
      "Pulp manufacturing facilities",
      "Specialty paper manufacturers",
    ],
    faqs: [
      {
        question: "Do you export triazine slimicide to Southeast Asia?",
        answer:
          "Yes. We regularly export MEA Triazine to paper mills in Vietnam, Thailand, Indonesia, and other Southeast Asian countries. Our manufacturing facility near Gujarat ports enables competitive freight rates and reliable lead times of 10–15 days.",
      },
      {
        question: "Will MEA Triazine cause foaming in our paper machine?",
        answer:
          "No. MEA Triazine does not cause foaming when used at recommended dosages. It is compatible with standard paper mill wet-end chemistry including retention aids, sizing agents, and defoamers.",
      },
      {
        question: "What is the recommended dosage for white water systems?",
        answer:
          "Dosage depends on your system volume, temperature, and contamination level. Typical continuous dosing rates range from 50–200 ppm in the white water circuit. Our technical team can help you determine the optimal dosage for your specific mill conditions.",
      },
    ],
  },
};

const SITE_URL = "https://www.vasudevchemopharma.com";

/* ── Static params ────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(industryData).map((slug) => ({ slug }));
}

/* ── Metadata ─────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) return {};

  return {
    title: `${page.title} | Vasudev Chemo Pharma`,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_URL}/industries/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}/industries/${slug}`,
      images: [{ url: page.image }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

/* ── Page component ───────────────────────────────────────────── */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = industryData[slug];
  if (!page) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Industries", url: `${SITE_URL}/industries` },
          { name: page.title, url: `${SITE_URL}/industries/${slug}` },
        ]}
      />
      <FAQSchema items={page.faqs} />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionLabel>Industry solutions</SectionLabel>
                <h1 className="font-heading text-h2 lg:text-display font-semibold mt-4 text-primary">
                  {page.h1}
                </h1>
                <p className="text-secondary text-lg mt-6">{page.description}</p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button href="/contact">Request a quote</Button>
                  <Button href="/contact?subject=sample" variant="outline">
                    Request free sample
                  </Button>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden aspect-[7/4]">
                <Image
                  src={page.image}
                  alt={page.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content sections */}
        {page.sections.map((section, i) => (
          <section
            key={section.heading}
            className={`py-16 ${i % 2 === 0 ? "bg-light" : ""}`}
          >
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((paragraph, j) => (
                <p
                  key={j}
                  className="text-secondary leading-relaxed mb-4 max-w-3xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}

        {/* Specifications table */}
        {page.specs && (
          <section className="py-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
                Product Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl text-left border-collapse">
                  <tbody>
                    {page.specs.map((spec) => (
                      <tr key={spec.label} className="border-b border-gray-200">
                        <td className="py-3 pr-8 font-medium text-primary">
                          {spec.label}
                        </td>
                        <td className="py-3 text-secondary">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Why choose us */}
        <section className="py-16 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
                  Why Choose Vasudev Chemo Pharma
                </h2>
                <div className="space-y-4">
                  {page.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 bg-white rounded-2xl p-4"
                    >
                      <svg
                        width="15"
                        height="10"
                        viewBox="0 0 15 10"
                        fill="none"
                        className="flex-shrink-0"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 5L5.5 9L14 1"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-accent"
                        />
                      </svg>
                      <span className="text-base text-primary font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries served */}
              <div>
                <h3 className="font-heading text-h4 font-semibold text-primary mb-6">
                  Industries We Serve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.servedIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="bg-white rounded-2xl p-5 text-center"
                    >
                      <span className="text-sm font-medium text-primary">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h2 font-semibold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {page.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-light rounded-2xl"
                >
                  <summary className="cursor-pointer p-5 font-medium text-primary list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Technical resources */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
              Technical Resources
            </h2>
            <p className="text-secondary mb-6">
              <Link href="/resources" className="text-accent underline underline-offset-2 hover:text-accent-dark">
                View all technical resources
              </Link>{" "}
              for MEA Triazine 78% including datasheets, safety information, and dosing guides.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/resources/mea-triazine-technical-datasheet"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Technical Datasheet
                </h3>
                <p className="text-xs text-secondary mt-1">Product specs &amp; download</p>
              </Link>
              <Link
                href="/resources/mea-triazine-safety-data-sheet"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Safety Data Sheet
                </h3>
                <p className="text-xs text-secondary mt-1">Hazards, handling &amp; compliance</p>
              </Link>
              <Link
                href="/resources/h2s-scavenger-dosing-guide"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Dosing Guide
                </h3>
                <p className="text-xs text-secondary mt-1">Calculations &amp; field reference</p>
              </Link>
              <Link
                href="/resources/import-compliance-guide"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Import Compliance Guide
                </h3>
                <p className="text-xs text-secondary mt-1">Country-specific requirements</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Global supply links */}
        <section className="py-12 bg-light">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-6">
              Global Supply for Industry Operations
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {FEATURED_COUNTRY_SLUGS.map((countrySlug) => {
                const countryData = COUNTRY_PAGES_DATA[countrySlug];
                if (!countryData) return null;
                return (
                  <Link
                    key={countrySlug}
                    href={buildCountryPagePath(countrySlug)}
                    className="rounded-2xl bg-white p-4 text-center text-sm font-medium text-primary hover:text-accent hover:shadow-md transition-all"
                  >
                    <span className="text-2xl block mb-1">{countryData.flag}</span>
                    MEA Triazine 78% supply to {countryData.countryName}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-12">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/product"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA Triazine 78% Specifications
                </h3>
                <p className="text-sm text-secondary mt-1">
                  View full product details and specifications
                </p>
              </Link>
              <Link
                href="/how-h2s-scavengers-work"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  Understand H2S Scavenger Chemistry
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Complete technical guide to H2S removal chemistry
                </p>
              </Link>
              <Link
                href="/mea-triazine-vs-mma-triazine"
                className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">
                  MEA vs MMA Triazine
                </h3>
                <p className="text-sm text-secondary mt-1">
                  Detailed comparison to choose the right scavenger
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="relative rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
              <Image
                src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover opacity-30"
              />
              <div className="relative z-10">
                <h2 className="font-heading text-h2 font-semibold text-white mb-4">
                  Ready to solve your H2S challenge?
                </h2>
                <p className="text-white/80 mb-8 max-w-xl mx-auto">
                  Get a quote, request a free sample, or download our Technical Data Sheet.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button href="/contact">Request industry-specific consultation</Button>
                  <Button href="/contact?subject=sample" variant="dark">
                    Request free sample
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
