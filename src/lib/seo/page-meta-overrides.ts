import type { Metadata } from "next";

export type PageMetaOverride = {
  h1?: string;
  title?: string;
  description?: string;
};

/**
 * Central place to track page H1, <title>, and meta description by URL path.
 *
 * This list mirrors the public SEO pages in the sitemap. Edit any title or
 * description here when search-result metadata needs to change without editing
 * each route file. H1 values are included for SEO auditing and future page-level
 * heading overrides. Paths must start with "/" and should not include the
 * domain or trailing slash.
 */
export const PAGE_META_OVERRIDES: Record<string, PageMetaOverride> = {
  "/": {
    h1: "India's leading manufacturer of MEA Triazine 78% H2S scavenger.",
    title: "Vasudev Chemo Pharma — India's Leading MEA Triazine 78% Manufacturer",
    description:
      "Direct manufacturer of MEA Triazine 78% H2S scavenger (CAS 4719-04-4) for oil & gas, biogas, and water treatment. Triazine-based H2S scavenging chemical, ISO 9001:2015 certified, factory pricing, bulk drum/IBC export from Gujarat, India to USA, UAE, Saudi Arabia, Qatar, Oman.",
  },
  "/about": {
    h1: "About Vasudev Chemo Pharma",
    title: "About Vasudev Chemo Pharma — Chemical Manufacturer India",
    description:
      "Learn about Vasudev Chemo Pharma — ISO 9001:2015 certified industrial and specialty chemical manufacturer from Gujarat, India. 15+ chemical products exported worldwide.",
  },
  "/product": {
    h1: "Industrial & Specialty Chemical Products",
    title: "Chemical Products — Industrial, Specialty & Surfactant | Vasudev Chemo Pharma",
    description:
      "Browse chemical products from Vasudev Chemo Pharma — ISO 9001:2015 certified manufacturer in Gujarat, India. Industrial chemicals, specialty chemicals, and surfactant chemicals. Request a quote today.",
  },
  "/service": {
    h1: "Chemical Manufacturing Services",
    title: "Chemical Manufacturing Services — Gujarat, India",
    description:
      "Explore chemical manufacturing, import-export, custom formulation, quality testing, and bulk supply services from Vasudev Chemo Pharma. Request a quote today.",
  },
  "/industries": {
    h1: "Industry Solutions",
    title: "Industry Solutions — MEA Triazine & H2S Scavenger Applications | Vasudev Chemo Pharma",
    description:
      "Explore MEA Triazine 78% industry applications: oil & gas, refining, petrochemical, biogas, water treatment, metalworking fluids, and pulp & paper. Direct manufacturer supply from India.",
  },
  "/blog": {
    h1: "Chemical Industry Blog",
    title: "Chemical Industry Blog | Vasudev Chemo Pharma",
    description:
      "Expert insights on H2S scavengers, MEA Triazine applications, and chemical manufacturing.",
  },
  "/contact": {
    h1: "Contact Us",
    title: "Contact Us — Request a Quote",
    description:
      "Contact Vasudev Chemo Pharma for product inquiries, bulk orders, and export requirements. ISO 9001:2015 certified chemical manufacturer from Gujarat, India. Get a reply within 24 hours.",
  },
  "/case-study": {
    h1: "Case Studies",
    title: "Case Studies - Chemical Manufacturing and Process Improvement Projects",
    description:
      "Explore chemical-industry case studies across H2S treatment, specialty chemicals, pharma intermediates, and process optimization.",
  },
  "/how-h2s-scavengers-work": {
    h1: "How H2S Scavengers Work",
    title: "How H2S Scavengers Work — A Complete Technical Guide | Vasudev Chemo Pharma",
    description:
      "Learn how H2S scavengers work, including triazine reaction chemistry, dosage guidelines, MEA vs MMA comparison, and application methods. Technical guide by Vasudev Chemo Pharma.",
  },
  "/mea-triazine-vs-mma-triazine": {
    h1: "MEA Triazine vs MMA Triazine",
    title: "MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You Choose? | Vasudev Chemo Pharma",
    description:
      "Compare MEA Triazine 78% and MMA Triazine 40% — active content, applications, dosage, and pricing. Find out which triazine H2S scavenger is right for your industry.",
  },
  "/h2s-scavenger-oil-gas": {
    h1: "H2S Scavenger for Oil & Gas",
    title: "H2S Scavenger for Oil & Gas | MEA & MMA Triazine | Vasudev Chemo Pharma",
    description:
      "Expert H2S scavenger solutions for oil & gas. Featuring MEA Triazine 78% for high-capacity H2S removal and BTEX-free MMA Triazine 40%. ISO 9001:2015 certified manufacturer from India.",
  },
  "/hydrotropes": {
    h1: "Hydrotropes: Sodium Cumene Sulfonate and Sodium Xylene Sulfonate",
    title: "Hydrotropes Explained — SCS & SXS Manufacturer | Vasudev Chemo Pharma",
    description:
      "Hydrotropes pillar guide: Sodium Cumene Sulfonate (SCS) and Sodium Xylene Sulfonate (SXS) — chemistry, 40% liquid vs 90% powder, applications, dosage, and REACH status. ISO 9001 India manufacturer.",
  },
  "/hydrotropes-global-export": {
    h1: "Global Hydrotrope Export Supply",
    title: "Global Export: Sodium Cumene Sulphonate & Sodium Xylene Sulphonate | Vasudev Chemo Pharma",
    description:
      "Leading global exporter of Sodium Cumene Sulphonate (SCS) and Sodium Xylene Sulphonate (SXS) in 40% liquid and 90% powder forms. We supply to USA, Europe, Asia, and worldwide.",
  },
  "/mea-triazine-prices": {
    h1: "MEA Triazine 78% Prices",
    title: "MEA Triazine Prices – 78% H2S Scavenger Cost Guide",
    description:
      "MEA Triazine 78% price guide — cost per MT, drum/IBC/bulk rates, and factors that affect pricing. Get a same-day quote from an ISO 9001 India manufacturer.",
  },
  "/mea-triazine-production-plant-cost": {
    h1: "MEA Triazine Production Plant Cost",
    title: "MEA Triazine Production Plant Cost – CAPEX Guide",
    description:
      "MEA Triazine 78% production plant cost guide — CAPEX ranges, equipment, feedstock, utilities & feasibility factors. Or skip CAPEX: supply from an ISO 9001 India manufacturer.",
  },
  "/supply/mea-triazine-78": {
    h1: "MEA Triazine 78% Global Supply",
    title: "MEA Triazine 78% Manufacturer — Direct Factory Supply | Vasudev Chemo Pharma",
    description:
      "Vasudev Chemo Pharma is a direct manufacturer of MEA Triazine 78% (CAS 4719-04-4) H2S scavenger. ISO 9001:2015 certified. Factory pricing. 200L drums, 1000L IBC, bulk. Supply to 10+ countries.",
  },
  "/compare": {
    h1: "MEA Triazine 78% Comparison Pages",
    title: "MEA Triazine 78% Comparison Pages",
    description:
      "Compare Vasudev MEA Triazine 78% against major market alternatives, including Pro3, RXSOL, SULFA-CLEAR, Triasorb, and Chinese supplier offers.",
  },
  "/applications": {
    h1: "MEA Triazine 78% Applications",
    title: "MEA Triazine 78% Applications",
    description:
      "Application and use-case pages for MEA Triazine 78%, including gas treating, crude sweetening, biogas H2S removal, and industrial biocide use.",
  },
  "/resources": {
    h1: "MEA Triazine Technical Resources & Downloads",
    title: "MEA Triazine Technical Resources & Downloads",
    description:
      "Technical resources for MEA Triazine 78% including datasheets, safety data sheets, dosing guides, import compliance documentation, storage and handling guides, and reaction chemistry references.",
  },
  "/legal/privacy-policy": {
    h1: "Privacy Policy",
    title: "Privacy Policy",
    description:
      "Privacy policy for Vasudev Chemo Pharma — how we collect, use, and protect your personal information on our website and services.",
  },
  "/product/mea-triazine-78-h2s-scavenger": {
    h1: "MEA Triazine 78% H2S Scavenger",
    title: "MEA Triazine 78% H2S Scavenger | Monoethanolamine Triazine Manufacturer",
    description:
      "MEA Triazine (Monoethanolamine Triazine) is a highly effective H2S scavenger for oil & gas, wastewater, and biogas. Protect infrastructure and ensure safety with our premium quality MEA Triazine 78%.",
  },
  "/product/mma-triazine-40": {
    h1: "MMA Triazine 40%",
    title: "MMA Triazine 40% &ndash; H2S Scavenger (Mono Methylamine Triazine 40%) Manufacturer India",
    description:
      "MMA Triazine 40% &ndash; H2S Scavenger for oil, gas, water treatment & paper mill. ISO 9001 Gujarat manufacturer. MOQ 1 MT. Request a quote.",
  },
  "/product/p-toluenesulfonic-acid": {
    h1: "P-Toluenesulfonic Acid",
    title: "P-Toluenesulfonic Acid - Industrial Grade Supplier India",
    description:
      "P-Toluenesulfonic Acid (PTSA) - high-purity industrial grade from ISO 9001 Gujarat manufacturer. Bulk domestic & export supply. Request a quote today.",
  },
  "/product/sodium-cumene-sulfonate-40": {
    h1: "Sodium Cumene Sulfonate 40%",
    title: "Sodium Cumene Sulfonate 40% Manufacturer | SCS 40% Liquid",
    description:
      "Sodium Cumene Sulfonate 40% liquid (SCS 40%, CAS 28348-53-0) direct manufacturer in India for detergents, cleaners & agrochemicals. Request COA, sample & bulk quote.",
  },
  "/product/sodium-cumene-sulfonate-90": {
    h1: "Sodium Cumene Sulfonate 90%",
    title: "Sodium Cumene Sulfonate 90% Manufacturer | SCS 90% Powder",
    description:
      "Sodium Cumene Sulfonate 90% powder (SCS 90%, CAS 28348-53-0) high-active hydrotrope from ISO 9001 India manufacturer. Bulk export supply, COA, SDS & samples.",
  },
  "/product/sodium-xylene-sulfonate-90": {
    h1: "Sodium Xylene Sulfonate 90%",
    title: "Sodium Xylene Sulfonate 90% Manufacturer | SXS 90% Powder",
    description:
      "Sodium Xylene Sulfonate 90% powder (SXS 90%, CAS 1300-72-7) hydrotrope manufacturer in India for detergent powders, alkaline cleaners & exports. Request quote.",
  },
  "/product/sodium-xylene-sulfonate-40": {
    h1: "Sodium Xylene Sulfonate 40%",
    title: "Sodium Xylene Sulfonate 40% Manufacturer | SXS 40 Liquid",
    description:
      "Sodium Xylene Sulfonate 40% liquid (SXS 40%, CAS 1300-72-7) hydrotrope for detergents, cleaners and agrochemicals from ISO 9001 India manufacturer.",
  },
  "/product/bis-2-chloroethyl-amine-hydrochloride": {
    h1: "Bis(2-chloroethyl)amine Hydrochloride",
    title: "Bis(2-chloroethyl)amine HCl - Manufacturer India",
    description:
      "Bis(2-chloroethyl)amine Hydrochloride - ISO 9001 Ankleshwar manufacturer. Bulk pharma-grade supply for domestic & export. Request COA & pricing today.",
  },
  "/product/di-ethyl-amino-ethyl-chloride-hydrochloride": {
    h1: "Di Ethyl Amino Ethyl Chloride Hydrochloride",
    title: "Di Ethyl Amino Ethyl Chloride HCl - Manufacturer India",
    description:
      "Di Ethyl Amino Ethyl Chloride HCl - pharma & industrial grade from ISO 9001 Gujarat manufacturer. Bulk export supply. Request COA & pricing today.",
  },
  "/product/2-amino-5-methylthiazole": {
    h1: "2-Amino-5-methylthiazole",
    title: "2-Amino-5-methylthiazole - Pharma & Industrial Grade",
    description:
      "2-Amino-5-methylthiazole - pharma & industrial grade from ISO 9001 Ankleshwar manufacturer. Export-ready bulk supply. Request COA & pricing today.",
  },
  "/product/2-chloroethylamine-hydrochloride": {
    h1: "2-Chloroethylamine Hydrochloride",
    title: "2-Chloroethylamine Hydrochloride - Pharma Grade Supplier",
    description:
      "2-Chloroethylamine Hydrochloride - high-purity pharma & industrial grade from ISO 9001 Gujarat manufacturer. Export-ready supply. Request COA & quote.",
  },
  "/product/triazine-h2s-scavenger-general": {
    h1: "Triazine Based H2S Scavenger (General)",
    title: "Triazine Based H2S Scavenger Manufacturer Vasudev Chemo Pharma",
    description:
      "Comprehensive range of Triazine Based H2S Scavengers. Custom concentrations for oilfield, refinery, and biogas H2S removal. Trusted Indian manufacturer.",
  },
  "/product/metal-working-fluids": {
    h1: "Metal Working Fluids",
    title: "Metal Working Fluids - Manufacturer Vasudev Chemo Pharma",
    description:
      "Enhance the life of your Metal Working Fluids (MWF) with Vasudev's specialized triazine biocides. Prevents odor, slime, and fluid degradation.",
  },
  "/product/biocide-oil-gas": {
    h1: "Biocide for Oil & Gas Industries",
    title: "Biocide for Oil & Gas Industries - Manufacturer Vasudev Chemo Pharma",
    description:
      "Control bacteria in pipelines and water injection systems with Vasudev's Oil & Gas Biocides. Prevents SRB-induced corrosion and biofouling.",
  },
  "/product/mea-triazine-78-high-concentration": {
    h1: "MEA Triazine 78% (High Concentration)",
    title: "Triazine Based H2S Scavenger - MEA Triazine 78% Manufacturer Vasudev Chemo Pharma",
    description:
      "Leading manufacturer of high-concentration MEA Triazine 78%. Export-ready H2S scavenger for global oilfield services. Guaranteed purity and performance.",
  },
  "/product/mma-triazine-40-btx-free": {
    h1: "MMA Triazine 40% (BTX-Free)",
    title: "Triazine Based H2S Scavenger - MMA Triazine 40% Manufacturer Vasudev Chemo Pharma",
    description:
      "Discover the benefits of BTX-Free MMA Triazine 40% for H2S removal. Safer for the environment, reduced solids formation.",
  },
  "/service/chemical-manufacturing": {
    h1: "Chemical Manufacturing",
    title: "Chemical Manufacturing — Chemical Manufacturing Services",
    description:
      "Vasudev Chemo Pharma manufactures a wide range of industrial and specialty chemicals including caustic soda, soda ash, sodium metabisulphite, zinc oxide, stearic acid, and more. ISO 9001:2015 certified facility in Gujarat, India.",
  },
  "/service/import-export": {
    h1: "Import & Export",
    title: "Import & Export — Chemical Manufacturing Services",
    description:
      "Located strategically near Gujarat's major ports — Kandla, Mundra, and Hazira — we offer efficient global shipping with competitive rates. We handle all export documentation, customs clearance, and logistics.",
  },
  "/service/custom-formulation": {
    h1: "Custom Formulation",
    title: "Custom Formulation — Chemical Manufacturing Services",
    description:
      "Our custom formulation service creates tailored chemical blends designed for your specific application needs. Whether you need modified concentrations, unique blends, or custom packaging — we deliver.",
  },
  "/service/quality-testing-packaging": {
    h1: "Quality Testing & Packaging",
    title: "Quality Testing & Packaging — Chemical Manufacturing Services",
    description:
      "Every product undergoes rigorous in-house quality testing before dispatch. We provide Certificate of Analysis (COA) and Material Safety Data Sheet (MSDS) with every shipment.",
  },
  "/service/global-logistics-shipping": {
    h1: "Global Logistics & Shipping",
    title: "Global Logistics & Shipping — Chemical Manufacturing Services",
    description:
      "We manage the complete logistics chain from our manufacturing facility to your doorstep. With proximity to Kandla, Mundra, and Hazira ports, we offer fast turnaround for global chemical exports.",
  },
  "/service/bulk-contract-supply": {
    h1: "Bulk & Contract Supply",
    title: "Bulk & Contract Supply — Chemical Manufacturing Services",
    description:
      "For businesses with ongoing chemical requirements, we offer bulk supply and long-term contract arrangements. Benefit from preferential pricing, guaranteed supply consistency, and dedicated account management.",
  },
  "/blog/bioban-gk-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Bioban GK Alternative — MEA Triazine 78% H2S Scavenger for US Oil & Gas",
    title: "Bioban GK Alternative — MEA Triazine 78% H2S Scavenger for US Oil & Gas",
    description:
      "Searching for a Bioban GK alternative for H2S scavenging? MEA Triazine 78% from Vasudev Chemo Pharma delivers equivalent triazine-based performance at direct-manufacturer pricing — without service-company markups.",
  },
  "/blog/bioban-gk-vs-mea-triazine-78-comparison": {
    h1: "Bioban GK vs MEA Triazine 78% — H2S Scavenger Performance Comparison",
    title: "Bioban GK vs MEA Triazine 78% — H2S Scavenger Performance Comparison",
    description:
      "How does Bioban GK compare to generic MEA Triazine 78% for H2S scavenging in US oil and gas operations? This head-to-head comparison covers active chemistry, performance metrics, cost analysis, and application suitability.",
  },
  "/blog/buy-bioban-gk-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Bioban GK Equivalent in USA — MEA Triazine 78% Direct Manufacturer From India",
    title: "Buy Bioban GK Equivalent in USA — MEA Triazine 78% Direct Manufacturer From India",
    description:
      "Need a Bioban GK equivalent for US oil and gas operations? Vasudev Chemo Pharma supplies MEA Triazine 78% — the same triazine active chemistry — directly from our manufacturing facility with CIF Houston delivery and transparent pricing.",
  },
  "/blog/onyxide-200-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Onyxide 200 Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Onyxide 200 Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Looking for an Onyxide 200 alternative? MEA Triazine 78% offers the same triazine-based H2S scavenging performance at manufacturer-direct pricing — available for US oil and gas operators via CIF Houston delivery.",
  },
  "/blog/onyxide-200-vs-mea-triazine-78-comparison": {
    h1: "Onyxide 200 vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Onyxide 200 vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Comparing Onyxide 200 and MEA Triazine 78% for H2S removal in US oil and gas? Both use the same triazine chemistry. This comparison covers specifications, field performance, pricing, and which option delivers better value.",
  },
  "/blog/buy-onyxide-200-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Onyxide 200 Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Onyxide 200 Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Onyxide 200 equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine chemistry, same H2S scavenging performance, delivered CIF Houston at manufacturer-direct pricing.",
  },
  "/blog/busan-1060-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Busan 1060 Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Busan 1060 Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Searching for a Busan 1060 alternative for H2S scavenging? MEA Triazine 78% from Vasudev Chemo Pharma delivers equivalent triazine performance at direct-manufacturer pricing for US oil and gas operators.",
  },
  "/blog/busan-1506-vs-mea-triazine-78-comparison": {
    h1: "Busan 1506 vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Busan 1506 vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Comparing Busan 1506 and MEA Triazine 78% for H2S removal? Both use the same triazine active chemistry. This comparison examines specifications, field performance, cost differences, and which option delivers better value for US operations.",
  },
  "/blog/buy-busan-1060-1506-equivalent-usa-supplier": {
    h1: "Buy Busan 1060/1506 Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Busan 1060/1506 Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Busan 1060/1506 equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine chemistry, full quality documentation, delivered CIF Houston at transparent manufacturer pricing.",
  },
  "/blog/km200-mergal-alternative-mea-triazine-78-scavenger": {
    h1: "KM200 / Mergal Alternative — MEA Triazine 78% H2S Scavenger",
    title: "KM200 / Mergal Alternative — MEA Triazine 78% H2S Scavenger",
    description:
      "Looking for a KM200 or Mergal 174II/165 alternative? MEA Triazine 78% provides the same triazine-based H2S scavenging chemistry at direct-manufacturer pricing in USA  — ideal for US oil and gas and industrial applications.",
  },
  "/blog/mergal-174-vs-mea-triazine-78-comparison": {
    h1: "Mergal 174II vs MEA Triazine 78% — Performance & Cost Comparison",
    title: "Mergal 174II vs MEA Triazine 78% — Performance & Cost Comparison",
    description:
      "How does Mergal 174II compare to generic MEA Triazine 78% for H2S scavenging? This comparison covers active chemistry, specifications, field performance, and the cost differential that drives operators to seek alternatives in USA",
  },
  "/blog/buy-km200-mergal-equivalent-usa-supplier": {
    h1: "Buy KM200 / Mergal Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy KM200 / Mergal Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the KM200 or Mergal equivalent — MEA Triazine 78% — directly from the manufacturer. Vasudev Chemo Pharma delivers the same triazine H2S scavenging chemistry CIF Houston with transparent pricing and full documentation.",
  },
  "/blog/kalpur-te-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Kalpur TE Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Kalpur TE Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Seeking a Kalpur TE alternative for H2S scavenging in the US market? MEA Triazine 78% from Vasudev Chemo Pharma offers the same triazine performance with direct-manufacturer pricing and CIF Houston delivery.",
  },
  "/blog/kalpur-te-vs-mea-triazine-78-comparison": {
    h1: "Kalpur TE vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Kalpur TE vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Comparing Kalpur TE and MEA Triazine 78% for H2S treatment? Both use triazine chemistry but differ in quality assurance, supply reliability, and US logistics. This comparison helps operators choose the right supplier.",
  },
  "/blog/buy-kalpur-te-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Kalpur TE Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Kalpur TE Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Kalpur TE equivalent — MEA Triazine 78% — from Vasudev Chemo Pharma with ISO-certified quality, TSCA compliance, and CIF Houston logistics. Same triazine chemistry, established US supply chain.",
  },
  "/blog/h2stopper-1908c-alternative-mea-triazine-78-scavenger": {
    h1: "H2Stopper 1908C Alternative — MEA Triazine 78% H2S Scavenger",
    title: "H2Stopper 1908C Alternative — MEA Triazine 78% H2S Scavenger",
    description:
      "Need an H2Stopper 1908C alternative? MEA Triazine 78% from Vasudev Chemo Pharma provides equivalent triazine-based H2S scavenging at direct-manufacturer pricing for US oil and gas operations.",
  },
  "/blog/h2stopper-1908c-vs-mea-triazine-78-comparison": {
    h1: "H2Stopper 1908C vs MEA Triazine 78% — Performance Comparison",
    title: "H2Stopper 1908C vs MEA Triazine 78% — Performance Comparison",
    description:
      "How does H2Stopper 1908C compare to MEA Triazine 78% for H2S removal? This comparison examines active chemistry, scavenging performance, cost structure, and which product delivers better value for US operations.",
  },
  "/blog/buy-h2stopper-1908c-equivalent-usa-supplier": {
    h1: "Buy H2Stopper 1908C Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy H2Stopper 1908C Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the H2Stopper 1908C equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine H2S scavenging chemistry, CIF Houston delivery, transparent manufacturer pricing.",
  },
  "/blog/cobate-c-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Cobate C Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Cobate C Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Looking for a Cobate C alternative for H2S scavenging? MEA Triazine 78% from Vasudev Chemo Pharma delivers the same triazine-based performance at direct-manufacturer pricing for US oil and gas operators.",
  },
  "/blog/cobate-c-vs-mea-triazine-78-comparison": {
    h1: "Cobate C vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Cobate C vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Comparing Cobate C and MEA Triazine 78% for hydrogen sulfide removal? Both use identical triazine chemistry. This comparison covers specifications, field performance, cost structure, and the best option for US operators.",
  },
  "/blog/buy-cobate-c-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Cobate C Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Cobate C Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Cobate C equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine chemistry, CIF Houston delivery, transparent pricing, and complete quality documentation.",
  },
  "/blog/actane-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Actane Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Actane Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Need an Actane alternative for H2S treatment? MEA Triazine 78% from Vasudev Chemo Pharma provides the same triazine-based H2S scavenging at manufacturer-direct pricing for US oil and gas operators.",
  },
  "/blog/actane-vs-mea-triazine-78-comparison": {
    h1: "Actane vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Actane vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Actane vs MEA Triazine 78% — how do they compare for H2S scavenging? This detailed comparison covers chemistry, performance, costs, and helps US operators decide which product delivers better value.",
  },
  "/blog/buy-actane-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Actane Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Actane Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Actane equivalent — MEA Triazine 78% — directly from the manufacturer. Vasudev Chemo Pharma delivers the same H2S scavenging chemistry CIF Houston at transparent pricing.",
  },
  "/blog/eta-75-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "ETA 75 Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "ETA 75 Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Seeking an ETA 75 alternative for H2S scavenging in the US or European markets? MEA Triazine 78% from Vasudev Chemo Pharma delivers the same triazine chemistry at direct-manufacturer pricing.",
  },
  "/blog/eta-75-vs-mea-triazine-78-comparison": {
    h1: "ETA 75 vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "ETA 75 vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "Comparing ETA 75 and MEA Triazine 78% for H2S treatment across US and European operations? Both use identical triazine chemistry. This comparison covers specifications, performance, cost, and multi-market logistics.",
  },
  "/blog/buy-eta-75-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy ETA 75 Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy ETA 75 Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the ETA 75 equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine chemistry, US and European regulatory compliance, manufacturer-direct pricing.",
  },
  "/blog/bestcide-1087t-alternative-mea-triazine-78-scavenger": {
    h1: "Bestcide 1087T Alternative — MEA Triazine 78% H2S Scavenger",
    title: "Bestcide 1087T Alternative — MEA Triazine 78% H2S Scavenger",
    description:
      "Looking for a Bestcide 1087T alternative? MEA Triazine 78% from Vasudev Chemo Pharma provides the same triazine-based performance at direct-manufacturer pricing for US oil and gas operators.",
  },
  "/blog/bestcide-1087t-vs-mea-triazine-78-comparison": {
    h1: "Bestcide 1087T vs MEA Triazine 78% — Performance Comparison",
    title: "Bestcide 1087T vs MEA Triazine 78% — Performance Comparison",
    description:
      "How does Bestcide 1087T stack up against MEA Triazine 78%? Both use identical triazine chemistry for H2S removal. This comparison covers active ingredient, performance data, and cost analysis for US operators.",
  },
  "/blog/buy-bestcide-1087t-equivalent-usa-supplier": {
    h1: "Buy Bestcide 1087T Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Bestcide 1087T Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Bestcide 1087T equivalent — MEA Triazine 78% — directly from the manufacturer. Same triazine chemistry, CIF Houston delivery, transparent pricing, complete documentation.",
  },
  "/blog/permachem-ob-2-alternative-mea-triazine-78-scavenger": {
    h1: "Permachem OB 2 Alternative — MEA Triazine 78% H2S Scavenger",
    title: "Permachem OB 2 Alternative — MEA Triazine 78% H2S Scavenger",
    description:
      "Need a Permachem OB 2 alternative for US or Canadian H2S treatment? MEA Triazine 78% from Vasudev Chemo Pharma provides the same triazine chemistry at manufacturer-direct pricing with North American logistics.",
  },
  "/blog/permachem-ob-2-vs-mea-triazine-78-comparison": {
    h1: "Permachem OB 2 vs MEA Triazine 78% — Performance Comparison",
    title: "Permachem OB 2 vs MEA Triazine 78% — Performance Comparison",
    description:
      "Comparing Permachem OB 2 and MEA Triazine 78% for H2S scavenging in US and Canadian operations? Both use the same triazine chemistry. This comparison covers specifications, performance, cost, and cross-border supply.",
  },
  "/blog/buy-permachem-ob-2-equivalent-usa-supplier": {
    h1: "Buy Permachem OB 2 Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Permachem OB 2 Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Permachem OB 2 equivalent — MEA Triazine 78% — from Vasudev Chemo Pharma. Same triazine chemistry with North American delivery, transparent pricing, and dual US/Canadian regulatory compliance.",
  },
  "/blog/surcide-d-alternative-mea-triazine-78-h2s-scavenger": {
    h1: "Surcide D Alternative — MEA Triazine 78% H2S Scavenger USA",
    title: "Surcide D Alternative — MEA Triazine 78% H2S Scavenger USA",
    description:
      "Looking for a Surcide D alternative for H2S scavenging? MEA Triazine 78% from Vasudev Chemo Pharma offers the same triazine-based chemistry at direct-manufacturer pricing for US operations.",
  },
  "/blog/surcide-p-vs-mea-triazine-78-comparison": {
    h1: "Surcide P vs MEA Triazine 78% — H2S Scavenger Comparison",
    title: "Surcide P vs MEA Triazine 78% — H2S Scavenger Comparison",
    description:
      "How does Surcide P compare to MEA Triazine 78% for H2S removal? Both use the same triazine active chemistry. This comparison covers specifications, field performance, cost, and the best choice for US operators.",
  },
  "/blog/buy-surcide-equivalent-usa-mea-triazine-supplier": {
    h1: "Buy Surcide D/P Equivalent in USA — MEA Triazine 78% Supplier",
    title: "Buy Surcide D/P Equivalent in USA — MEA Triazine 78% Supplier",
    description:
      "Buy the Surcide D/P equivalent — MEA Triazine 78% — directly from Vasudev Chemo Pharma. Same triazine chemistry for H2S scavenging and biocide applications, CIF Houston delivery, transparent pricing.",
  },
  "/blog/sodium-cumene-sulfonate-40-manufacturer-india-bulk-supply": {
    h1: "Sodium Cumene Sulfonate 40% Manufacturer in India: Bulk Supply Buying Guide",
    title: "Sodium Cumene Sulfonate 40% Manufacturer in India: Bulk Supply Buying Guide",
    description:
      "How to source Sodium Cumene Sulfonate 40% (SCS 40%, CAS 28348-53-0) directly from an ISO 9001 Indian manufacturer for detergent, cleaner, and specialty formulation supply.",
  },
  "/blog/sodium-cumene-sulfonate-40-price-quote-moq-packaging": {
    h1: "Sodium Cumene Sulfonate 40% Price, MOQ, Packaging and Quote Requirements",
    title: "Sodium Cumene Sulfonate 40% Price, MOQ, Packaging and Quote Requirements",
    description:
      "A procurement-focused guide to Sodium Cumene Sulfonate 40% price drivers, MOQ, packaging, sample requests, COA review, and export quotation details.",
  },
  "/blog/sodium-cumene-sulfonate-40-detergent-cleaner-supplier-selection": {
    h1: "How to Choose a Sodium Cumene Sulfonate 40% Supplier for Detergents and Cleaners",
    title: "How to Choose a Sodium Cumene Sulfonate 40% Supplier for Detergents and Cleaners",
    description:
      "Supplier selection checklist for detergent and industrial cleaner manufacturers buying Sodium Cumene Sulfonate 40% hydrotrope in bulk.",
  },
  "/blog/sodium-cumene-sulfonate-40-bulk-export-from-india": {
    h1: "Buying Sodium Cumene Sulfonate 40% in Bulk from India for Export Markets",
    title: "Buying Sodium Cumene Sulfonate 40% in Bulk from India for Export Markets",
    description:
      "Export buying guide for Sodium Cumene Sulfonate 40%: documentation, port planning, packaging, lead time, and landed-cost decisions for overseas buyers.",
  },
  "/blog/sodium-cumene-sulfonate-40-sample-coa-technical-qualification": {
    h1: "Sodium Cumene Sulfonate 40% Sample, COA and Technical Qualification Guide",
    title: "Sodium Cumene Sulfonate 40% Sample, COA and Technical Qualification Guide",
    description:
      "How R&D and procurement teams can qualify Sodium Cumene Sulfonate 40% samples using COA checks, lab tests, and production-trial criteria.",
  },
  "/blog/sodium-cumene-sulfonate-40-hydrotrope-function-formulation-science": {
    h1: "What Does Sodium Cumene Sulfonate 40% Do in Formulations? Hydrotrope Science Explained",
    title: "What Does Sodium Cumene Sulfonate 40% Do in Formulations? Hydrotrope Science Explained",
    description:
      "Research guide to how Sodium Cumene Sulfonate 40% functions as a hydrotrope, coupling agent, solubilizer, viscosity modifier, and cloud-point controller.",
  },
  "/blog/sodium-cumene-sulfonate-40-cloud-point-viscosity-stability": {
    h1: "Sodium Cumene Sulfonate 40% for Cloud Point, Viscosity and Phase Stability",
    title: "Sodium Cumene Sulfonate 40% for Cloud Point, Viscosity and Phase Stability",
    description:
      "Technical guide to using Sodium Cumene Sulfonate 40% for cloud-point depression, viscosity control, gel prevention, and phase-stable detergent systems.",
  },
  "/blog/sodium-cumene-sulfonate-40-vs-other-hydrotropes": {
    h1: "Sodium Cumene Sulfonate 40% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    title: "Sodium Cumene Sulfonate 40% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    description:
      "Comparison of Sodium Cumene Sulfonate 40% with common hydrotropes such as SCS, SXS, sodium toluene sulfonate, urea, and glycols.",
  },
  "/blog/sodium-cumene-sulfonate-40-40-vs-90-active-content": {
    h1: "Sodium Cumene Sulfonate 40%: 40% Liquid vs 90% Powder Active Content Explained",
    title: "Sodium Cumene Sulfonate 40%: 40% Liquid vs 90% Powder Active Content Explained",
    description:
      "Research-led explanation of how active content changes hydrotrope handling, dilution, freight economics, and formulation design for Sodium Cumene Sulfonate 40%.",
  },
  "/blog/sodium-cumene-sulfonate-40-applications-detergent-agrochemical-personal-care": {
    h1: "Sodium Cumene Sulfonate 40% Applications in Detergent, Agrochemical and Personal Care Formulas",
    title: "Sodium Cumene Sulfonate 40% Applications in Detergent, Agrochemical and Personal Care Formulas",
    description:
      "Application research guide for Sodium Cumene Sulfonate 40% across detergent, cleaner, agrochemical, personal care, and industrial formulation systems.",
  },
  "/blog/sodium-cumene-sulfonate-90-manufacturer-india-bulk-supply": {
    h1: "Sodium Cumene Sulfonate 90% Manufacturer in India: Bulk Supply Buying Guide",
    title: "Sodium Cumene Sulfonate 90% Manufacturer in India: Bulk Supply Buying Guide",
    description:
      "How to source Sodium Cumene Sulfonate 90% (SCS 90%, CAS 28348-53-0) directly from an ISO 9001 Indian manufacturer for detergent, cleaner, and specialty formulation supply.",
  },
  "/blog/sodium-cumene-sulfonate-90-price-quote-moq-packaging": {
    h1: "Sodium Cumene Sulfonate 90% Price, MOQ, Packaging and Quote Requirements",
    title: "Sodium Cumene Sulfonate 90% Price, MOQ, Packaging and Quote Requirements",
    description:
      "A procurement-focused guide to Sodium Cumene Sulfonate 90% price drivers, MOQ, packaging, sample requests, COA review, and export quotation details.",
  },
  "/blog/sodium-cumene-sulfonate-90-detergent-cleaner-supplier-selection": {
    h1: "How to Choose a Sodium Cumene Sulfonate 90% Supplier for Detergents and Cleaners",
    title: "How to Choose a Sodium Cumene Sulfonate 90% Supplier for Detergents and Cleaners",
    description:
      "Supplier selection checklist for detergent and industrial cleaner manufacturers buying Sodium Cumene Sulfonate 90% hydrotrope in bulk.",
  },
  "/blog/sodium-cumene-sulfonate-90-bulk-export-from-india": {
    h1: "Buying Sodium Cumene Sulfonate 90% in Bulk from India for Export Markets",
    title: "Buying Sodium Cumene Sulfonate 90% in Bulk from India for Export Markets",
    description:
      "Export buying guide for Sodium Cumene Sulfonate 90%: documentation, port planning, packaging, lead time, and landed-cost decisions for overseas buyers.",
  },
  "/blog/sodium-cumene-sulfonate-90-sample-coa-technical-qualification": {
    h1: "Sodium Cumene Sulfonate 90% Sample, COA and Technical Qualification Guide",
    title: "Sodium Cumene Sulfonate 90% Sample, COA and Technical Qualification Guide",
    description:
      "How R&D and procurement teams can qualify Sodium Cumene Sulfonate 90% samples using COA checks, lab tests, and production-trial criteria.",
  },
  "/blog/sodium-cumene-sulfonate-90-hydrotrope-function-formulation-science": {
    h1: "What Does Sodium Cumene Sulfonate 90% Do in Formulations? Hydrotrope Science Explained",
    title: "What Does Sodium Cumene Sulfonate 90% Do in Formulations? Hydrotrope Science Explained",
    description:
      "Research guide to how Sodium Cumene Sulfonate 90% functions as a hydrotrope, coupling agent, solubilizer, viscosity modifier, and cloud-point controller.",
  },
  "/blog/sodium-cumene-sulfonate-90-cloud-point-viscosity-stability": {
    h1: "Sodium Cumene Sulfonate 90% for Cloud Point, Viscosity and Phase Stability",
    title: "Sodium Cumene Sulfonate 90% for Cloud Point, Viscosity and Phase Stability",
    description:
      "Technical guide to using Sodium Cumene Sulfonate 90% for cloud-point depression, viscosity control, gel prevention, and phase-stable detergent systems.",
  },
  "/blog/sodium-cumene-sulfonate-90-vs-other-hydrotropes": {
    h1: "Sodium Cumene Sulfonate 90% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    title: "Sodium Cumene Sulfonate 90% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    description:
      "Comparison of Sodium Cumene Sulfonate 90% with common hydrotropes such as SCS, SXS, sodium toluene sulfonate, urea, and glycols.",
  },
  "/blog/sodium-cumene-sulfonate-90-40-vs-90-active-content": {
    h1: "Sodium Cumene Sulfonate 90%: 40% Liquid vs 90% Powder Active Content Explained",
    title: "Sodium Cumene Sulfonate 90%: 40% Liquid vs 90% Powder Active Content Explained",
    description:
      "Research-led explanation of how active content changes hydrotrope handling, dilution, freight economics, and formulation design for Sodium Cumene Sulfonate 90%.",
  },
  "/blog/sodium-cumene-sulfonate-90-applications-detergent-agrochemical-personal-care": {
    h1: "Sodium Cumene Sulfonate 90% Applications in Detergent, Agrochemical and Personal Care Formulas",
    title: "Sodium Cumene Sulfonate 90% Applications in Detergent, Agrochemical and Personal Care Formulas",
    description:
      "Application research guide for Sodium Cumene Sulfonate 90% across detergent, cleaner, agrochemical, personal care, and industrial formulation systems.",
  },
  "/blog/sodium-xylene-sulfonate-40-manufacturer-india-bulk-supply": {
    h1: "Sodium Xylene Sulfonate 40% Manufacturer in India: Bulk Supply Buying Guide",
    title: "Sodium Xylene Sulfonate 40% Manufacturer in India: Bulk Supply Buying Guide",
    description:
      "How to source Sodium Xylene Sulfonate 40% (SXS 40%, CAS 1300-72-7) directly from an ISO 9001 Indian manufacturer for detergent, cleaner, and specialty formulation supply.",
  },
  "/blog/sodium-xylene-sulfonate-40-price-quote-moq-packaging": {
    h1: "Sodium Xylene Sulfonate 40% Price, MOQ, Packaging and Quote Requirements",
    title: "Sodium Xylene Sulfonate 40% Price, MOQ, Packaging and Quote Requirements",
    description:
      "A procurement-focused guide to Sodium Xylene Sulfonate 40% price drivers, MOQ, packaging, sample requests, COA review, and export quotation details.",
  },
  "/blog/sodium-xylene-sulfonate-40-detergent-cleaner-supplier-selection": {
    h1: "How to Choose a Sodium Xylene Sulfonate 40% Supplier for Detergents and Cleaners",
    title: "How to Choose a Sodium Xylene Sulfonate 40% Supplier for Detergents and Cleaners",
    description:
      "Supplier selection checklist for detergent and industrial cleaner manufacturers buying Sodium Xylene Sulfonate 40% hydrotrope in bulk.",
  },
  "/blog/sodium-xylene-sulfonate-40-bulk-export-from-india": {
    h1: "Buying Sodium Xylene Sulfonate 40% in Bulk from India for Export Markets",
    title: "Buying Sodium Xylene Sulfonate 40% in Bulk from India for Export Markets",
    description:
      "Export buying guide for Sodium Xylene Sulfonate 40%: documentation, port planning, packaging, lead time, and landed-cost decisions for overseas buyers.",
  },
  "/blog/sodium-xylene-sulfonate-40-sample-coa-technical-qualification": {
    h1: "Sodium Xylene Sulfonate 40% Sample, COA and Technical Qualification Guide",
    title: "Sodium Xylene Sulfonate 40% Sample, COA and Technical Qualification Guide",
    description:
      "How R&D and procurement teams can qualify Sodium Xylene Sulfonate 40% samples using COA checks, lab tests, and production-trial criteria.",
  },
  "/blog/sodium-xylene-sulfonate-40-hydrotrope-function-formulation-science": {
    h1: "What Does Sodium Xylene Sulfonate 40% Do in Formulations? Hydrotrope Science Explained",
    title: "What Does Sodium Xylene Sulfonate 40% Do in Formulations? Hydrotrope Science Explained",
    description:
      "Research guide to how Sodium Xylene Sulfonate 40% functions as a hydrotrope, coupling agent, solubilizer, viscosity modifier, and cloud-point controller.",
  },
  "/blog/sodium-xylene-sulfonate-40-cloud-point-viscosity-stability": {
    h1: "Sodium Xylene Sulfonate 40% for Cloud Point, Viscosity and Phase Stability",
    title: "Sodium Xylene Sulfonate 40% for Cloud Point, Viscosity and Phase Stability",
    description:
      "Technical guide to using Sodium Xylene Sulfonate 40% for cloud-point depression, viscosity control, gel prevention, and phase-stable detergent systems.",
  },
  "/blog/sodium-xylene-sulfonate-40-vs-other-hydrotropes": {
    h1: "Sodium Xylene Sulfonate 40% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    title: "Sodium Xylene Sulfonate 40% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    description:
      "Comparison of Sodium Xylene Sulfonate 40% with common hydrotropes such as SCS, SXS, sodium toluene sulfonate, urea, and glycols.",
  },
  "/blog/sodium-xylene-sulfonate-40-40-vs-90-active-content": {
    h1: "Sodium Xylene Sulfonate 40%: 40% Liquid vs 90% Powder Active Content Explained",
    title: "Sodium Xylene Sulfonate 40%: 40% Liquid vs 90% Powder Active Content Explained",
    description:
      "Research-led explanation of how active content changes hydrotrope handling, dilution, freight economics, and formulation design for Sodium Xylene Sulfonate 40%.",
  },
  "/blog/sodium-xylene-sulfonate-40-applications-detergent-agrochemical-personal-care": {
    h1: "Sodium Xylene Sulfonate 40% Applications in Detergent, Agrochemical and Personal Care Formulas",
    title: "Sodium Xylene Sulfonate 40% Applications in Detergent, Agrochemical and Personal Care Formulas",
    description:
      "Application research guide for Sodium Xylene Sulfonate 40% across detergent, cleaner, agrochemical, personal care, and industrial formulation systems.",
  },
  "/blog/sodium-xylene-sulfonate-90-manufacturer-india-bulk-supply": {
    h1: "Sodium Xylene Sulfonate 90% Manufacturer in India: Bulk Supply Buying Guide",
    title: "Sodium Xylene Sulfonate 90% Manufacturer in India: Bulk Supply Buying Guide",
    description:
      "How to source Sodium Xylene Sulfonate 90% (SXS 90%, CAS 1300-72-7) directly from an ISO 9001 Indian manufacturer for detergent, cleaner, and specialty formulation supply.",
  },
  "/blog/sodium-xylene-sulfonate-90-price-quote-moq-packaging": {
    h1: "Sodium Xylene Sulfonate 90% Price, MOQ, Packaging and Quote Requirements",
    title: "Sodium Xylene Sulfonate 90% Price, MOQ, Packaging and Quote Requirements",
    description:
      "A procurement-focused guide to Sodium Xylene Sulfonate 90% price drivers, MOQ, packaging, sample requests, COA review, and export quotation details.",
  },
  "/blog/sodium-xylene-sulfonate-90-detergent-cleaner-supplier-selection": {
    h1: "How to Choose a Sodium Xylene Sulfonate 90% Supplier for Detergents and Cleaners",
    title: "How to Choose a Sodium Xylene Sulfonate 90% Supplier for Detergents and Cleaners",
    description:
      "Supplier selection checklist for detergent and industrial cleaner manufacturers buying Sodium Xylene Sulfonate 90% hydrotrope in bulk.",
  },
  "/blog/sodium-xylene-sulfonate-90-bulk-export-from-india": {
    h1: "Buying Sodium Xylene Sulfonate 90% in Bulk from India for Export Markets",
    title: "Buying Sodium Xylene Sulfonate 90% in Bulk from India for Export Markets",
    description:
      "Export buying guide for Sodium Xylene Sulfonate 90%: documentation, port planning, packaging, lead time, and landed-cost decisions for overseas buyers.",
  },
  "/blog/sodium-xylene-sulfonate-90-sample-coa-technical-qualification": {
    h1: "Sodium Xylene Sulfonate 90% Sample, COA and Technical Qualification Guide",
    title: "Sodium Xylene Sulfonate 90% Sample, COA and Technical Qualification Guide",
    description:
      "How R&D and procurement teams can qualify Sodium Xylene Sulfonate 90% samples using COA checks, lab tests, and production-trial criteria.",
  },
  "/blog/sodium-xylene-sulfonate-90-hydrotrope-function-formulation-science": {
    h1: "What Does Sodium Xylene Sulfonate 90% Do in Formulations? Hydrotrope Science Explained",
    title: "What Does Sodium Xylene Sulfonate 90% Do in Formulations? Hydrotrope Science Explained",
    description:
      "Research guide to how Sodium Xylene Sulfonate 90% functions as a hydrotrope, coupling agent, solubilizer, viscosity modifier, and cloud-point controller.",
  },
  "/blog/sodium-xylene-sulfonate-90-cloud-point-viscosity-stability": {
    h1: "Sodium Xylene Sulfonate 90% for Cloud Point, Viscosity and Phase Stability",
    title: "Sodium Xylene Sulfonate 90% for Cloud Point, Viscosity and Phase Stability",
    description:
      "Technical guide to using Sodium Xylene Sulfonate 90% for cloud-point depression, viscosity control, gel prevention, and phase-stable detergent systems.",
  },
  "/blog/sodium-xylene-sulfonate-90-vs-other-hydrotropes": {
    h1: "Sodium Xylene Sulfonate 90% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    title: "Sodium Xylene Sulfonate 90% vs Other Hydrotropes: SCS, SXS, STS and Urea Compared",
    description:
      "Comparison of Sodium Xylene Sulfonate 90% with common hydrotropes such as SCS, SXS, sodium toluene sulfonate, urea, and glycols.",
  },
  "/blog/sodium-xylene-sulfonate-90-40-vs-90-active-content": {
    h1: "Sodium Xylene Sulfonate 90%: 40% Liquid vs 90% Powder Active Content Explained",
    title: "Sodium Xylene Sulfonate 90%: 40% Liquid vs 90% Powder Active Content Explained",
    description:
      "Research-led explanation of how active content changes hydrotrope handling, dilution, freight economics, and formulation design for Sodium Xylene Sulfonate 90%.",
  },
  "/blog/sodium-xylene-sulfonate-90-applications-detergent-agrochemical-personal-care": {
    h1: "Sodium Xylene Sulfonate 90% Applications in Detergent, Agrochemical and Personal Care Formulas",
    title: "Sodium Xylene Sulfonate 90% Applications in Detergent, Agrochemical and Personal Care Formulas",
    description:
      "Application research guide for Sodium Xylene Sulfonate 90% across detergent, cleaner, agrochemical, personal care, and industrial formulation systems.",
  },
  "/blog/what-is-mea-triazine-best-h2s-scavenger-oil-gas": {
    h1: "What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas?",
    title: "What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas?",
    description:
      "MEA Triazine 78% is the most widely used liquid H2S scavenger in the oil and gas industry. Learn what it is, how it works, why it outperforms alternatives, and how to source it directly from an ISO-certified Indian manufacturer.",
  },
  "/blog/h2s-natural-gas-pipelines-risks-regulations-removal": {
    h1: "H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods",
    title: "H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods",
    description:
      "Hydrogen sulfide in natural gas pipelines causes corrosion, safety hazards, and regulatory non-compliance. This guide covers H2S risks, OSHA/NACE regulations, and the most effective removal methods including triazine chemical scavenging.",
  },
  "/blog/sustainable-chemical-manufacturing-greener-future-india": {
    h1: "Sustainable Chemical Manufacturing: Driving a Greener Future in India",
    title: "Sustainable Chemical Manufacturing: Driving a Greener Future in India",
    description:
      "How Indian chemical manufacturers are adopting sustainable practices — from green chemistry to renewable energy — to reduce environmental impact while maintaining world-class production quality.",
  },
  "/blog/automation-shaping-future-chemical-manufacturing": {
    h1: "How Automation Is Shaping the Future of Chemical Manufacturing",
    title: "How Automation Is Shaping the Future of Chemical Manufacturing",
    description:
      "From robotic process automation to collaborative robots, automation is revolutionising chemical production lines — improving safety, consistency, and throughput across industrial and pharmaceutical chemical manufacturing.",
  },
  "/blog/top-5-specialty-chemicals-revolutionizing-industrial-applications": {
    h1: "Top 5 Specialty Chemicals Revolutionizing Industrial Applications",
    title: "Top 5 Specialty Chemicals Revolutionizing Industrial Applications",
    description:
      "From H2S scavengers powering the oil and gas industry to pharmaceutical API intermediates saving lives — discover the five specialty chemicals transforming modern industrial applications worldwide.",
  },
  "/blog/smart-factory-technology-modern-chemical-plants": {
    h1: "Smart Factory Technology Transforming Modern Chemical Plants",
    title: "Smart Factory Technology Transforming Modern Chemical Plants",
    description:
      "Explore how smart factory technologies — digital twins, predictive analytics, and connected manufacturing systems — are setting new standards for chemical plant efficiency, safety, and product quality.",
  },
  "/blog/3d-printing-additive-manufacturing-chemical-industry": {
    h1: "3D Printing & Additive Manufacturing in the Chemical Industry",
    title: "3D Printing & Additive Manufacturing in the Chemical Industry",
    description:
      "How additive manufacturing is creating new possibilities in chemical plant design — from rapid prototyping of reactor components to custom catalytic structures and advanced microreactor technology.",
  },
  "/blog/triazine-scavenger-supplier-usa-mea-triazine-78": {
    h1: "Triazine Scavenger Supplier in USA — MEA Triazine 78% Direct from Manufacturer",
    title: "Triazine Scavenger Supplier in USA — MEA Triazine 78% Direct from Manufacturer",
    description:
      "Looking for a reliable triazine scavenger supplier in USA? Vasudev Chemo Pharma supplies MEA Triazine 78% directly from our ISO-certified manufacturing facility — offering US oil and gas operators transparent pricing, batch-level quality documentation, and flexible logistics via Houston.",
  },
  "/blog/h2s-scavenger-permian-basin-triazine-supplier": {
    h1: "H2S Scavenger for Permian Basin Operations — Trusted Triazine Supplier",
    title: "H2S Scavenger for Permian Basin Operations — Trusted Triazine Supplier",
    description:
      "Permian Basin operators face some of the highest H2S concentrations in the continental US. Discover why MEA Triazine 78% from a direct-manufacturer triazine supplier delivers superior H2S scavenging performance and cost savings for Wolfcamp, Bone Spring, and Delaware Basin operations.",
  },
  "/blog/mea-triazine-vs-alternative-h2s-scavengers-usa": {
    h1: "MEA Triazine vs Alternative H2S Scavengers — Complete US Market Comparison",
    title: "MEA Triazine vs Alternative H2S Scavengers — Complete US Market Comparison",
    description:
      "Choosing the right H2S scavenger for US oil and gas operations requires understanding the strengths and limitations of each option. This guide compares MEA Triazine 78% against MMA Triazine, glyoxal-based scavengers, iron sponge, and solid scavengers on performance, cost, and operational factors.",
  },
  "/blog/triazine-h2s-scavenger-dosing-guide-oil-gas": {
    h1: "Triazine H2S Scavenger Dosing Guide for Oil & Gas Operations",
    title: "Triazine H2S Scavenger Dosing Guide for Oil & Gas Operations",
    description:
      "A practical, engineer-friendly guide to calculating MEA Triazine 78% dosing rates for H2S scavenging in oil and gas operations. Covers stoichiometric fundamentals, field-adjusted calculations, injection methods, monitoring, and common dosing mistakes.",
  },
  "/blog/bulk-triazine-scavenger-supply-shale-gas-usa": {
    h1: "Bulk Triazine Scavenger Supply for US Shale Gas Operations",
    title: "Bulk Triazine Scavenger Supply for US Shale Gas Operations",
    description:
      "US shale gas operators running high-volume H2S treatment programs need bulk triazine supply they can count on. Learn how direct-manufacturer sourcing, flexible packaging, and Houston-hub logistics deliver cost-effective MEA Triazine 78% to operations across the Permian, Eagle Ford, Marcellus, Bakken, and Haynesville basins.",
  },
  "/blog/natural-gas-sweetening-field-guide": {
    h1: "Natural Gas Sweetening Field Guide",
    title: "Natural Gas Sweetening Field Guide",
    description:
      "A field-oriented guide to natural gas sweetening. Learn when to use amine units, when chemical scavengers make more sense, how to manage upset conditions, and how operators keep gas on spec from wellhead to pipeline custody transfer.",
  },
  "/blog/h2s-scavenger-selection-guide": {
    h1: "H2S Scavenger Selection Guide",
    title: "H2S Scavenger Selection Guide",
    description:
      "A practical decision guide for selecting the right H2S scavenger by stream type, H2S concentration, contact method, solids risk, safety constraints, and total cost. Covers MEA Triazine, glyoxal, iron sponge, and backup-treatment use cases.",
  },
  "/blog/mea-triazine-safety-handling-guide": {
    h1: "MEA Triazine Safety Handling Guide",
    title: "MEA Triazine Safety Handling Guide",
    description:
      "Safe storage, transfer, PPE, spill control, and job-site handling practices for MEA Triazine 78%. Built for field supervisors, chemical coordinators, and operators managing H2S scavenger inventory in oil and gas facilities.",
  },
  "/blog/biogas-h2s-removal-guide": {
    h1: "Biogas H2S Removal Guide",
    title: "Biogas H2S Removal Guide",
    description:
      "How to remove H2S from biogas and landfill gas for CHP engines, boilers, and pipeline injection. Covers triazine, iron sponge, biological systems, moisture effects, and how to choose the right removal strategy.",
  },
  "/blog/offshore-h2s-scavenging-operations": {
    h1: "Offshore H2S Scavenging Operations",
    title: "Offshore H2S Scavenging Operations",
    description:
      "Operational guide to using H2S scavengers offshore. Covers platform footprint limits, chemical inventory planning, injection point design, weather and logistics constraints, and how offshore teams manage sulfide treatment with minimal intervention.",
  },
  "/blog/spent-triazine-dithiazine-management": {
    h1: "Spent Triazine and Dithiazine Management",
    title: "Spent Triazine and Dithiazine Management",
    description:
      "Guide to managing spent triazine, dissolved dithiazine, and solids risk in H2S scavenger programs. Covers why dithiazine forms, where it causes trouble, and how operators reduce fouling, disposal issues, and unnecessary chemical waste.",
  },
  "/blog/osha-nace-api-h2s-compliance-guide": {
    h1: "OSHA NACE API H2S Compliance Guide",
    title: "OSHA NACE API H2S Compliance Guide",
    description:
      "A practical compliance guide tying together OSHA worker safety, NACE or AMPP sour-service integrity requirements, and API operating practices for H2S management in oil and gas facilities.",
  },
  "/blog/mea-triazine-for-amine-system-backup": {
    h1: "MEA Triazine for Amine System Backup",
    title: "MEA Triazine for Amine System Backup",
    description:
      "How operators use MEA Triazine as backup or trim treatment when amine systems foam, lose circulation, or face temporary capacity shortfalls. Includes planning, limitations, and field implementation guidance.",
  },
  "/blog/h2s-scavenger-crude-oil-storage-tanks": {
    h1: "H2S Scavenger for Crude Oil Storage Tanks",
    title: "H2S Scavenger for Crude Oil Storage Tanks",
    description:
      "Guide to controlling H2S in crude oil storage tanks, tank batteries, and vapor spaces. Covers vapor hazards, liquid-phase treatment, mixing needs, and how to avoid overdosing while protecting workers and tank-side equipment.",
  },
  "/blog/triazine-vs-glyoxal-vs-iron-sponge-comparison": {
    h1: "Triazine vs Glyoxal vs Iron Sponge Comparison",
    title: "Triazine vs Glyoxal vs Iron Sponge Comparison",
    description:
      "Head-to-head comparison of MEA Triazine, glyoxal, and iron sponge for H2S removal. Understand where each technology fits, how they differ on footprint and waste, and which one usually wins on operational simplicity.",
  },
  "/case-study/sour-gas-gathering-h2s-scavenger-optimization": {
    h1: "Sour gas gathering system H2S scavenger optimization",
    title: "Sour gas gathering system H2S scavenger optimization - Case Study",
    description:
      "An upstream producer operating a multi-well sour gas gathering network was missing pipeline H2S specification during well changeovers and seasonal production sw",
  },
  "/case-study/ptsa-scale-up-alkyd-resin-manufacturer": {
    h1: "PTSA scale-up for alkyd resin manufacturer",
    title: "PTSA scale-up for alkyd resin manufacturer - Case Study",
    description:
      "A regional alkyd resin manufacturer was expanding export production but was losing time to catalyst variability, repeated QA holds, and inconsistent reactor tur",
  },
  "/case-study/api-intermediate-solvent-recovery-upgrade": {
    h1: "API intermediate solvent recovery upgrade",
    title: "API intermediate solvent recovery upgrade - Case Study",
    description:
      "A pharmaceutical intermediate plant was seeing high solvent loss and elevated waste handling cost during a recurring campaign for an export API intermediate. Th",
  },
  "/industries/oil-gas-h2s-scavenger": {
    h1: "MEA Triazine H2S Scavenger for Oil & Gas",
    title: "MEA Triazine H2S Scavenger for Oil & Gas | Vasudev Chemo Pharma",
    description:
      "Vasudev Chemo Pharma manufactures MEA Triazine 78% H2S scavenger for oil & gas. Direct supply from India with ISO 9001:2015 certification. Request a free sample.",
  },
  "/industries/water-treatment": {
    h1: "Triazine H2S Scavenger for Water & Wastewater Treatment",
    title: "Triazine H2S Scavenger for Water & Wastewater Treatment | Vasudev Chemo Pharma",
    description:
      "MMA Triazine 40% H2S scavenger for water and wastewater treatment. Safe for municipal systems. Manufactured by Vasudev Chemo Pharma, India.",
  },
  "/industries/metal-working-fluids": {
    h1: "Triazine Biocide for Metal Working Fluids",
    title: "Triazine Biocide for Metal Working Fluids | Vasudev Chemo Pharma",
    description:
      "Triazine biocide for metalworking fluid preservation. Formaldehyde-releasing biocide effective against bacteria, fungi, and algae. Manufactured in India.",
  },
  "/industries/petrochemical": {
    h1: "MEA Triazine H2S Scavenger for Petrochemical Plants",
    title: "MEA Triazine H2S Scavenger for Petrochemical Plants | Vasudev Chemo Pharma",
    description:
      "MEA Triazine 78% H2S scavenger for petrochemical plants. Protects crackers, reformers, and downstream units from sulfide corrosion. Manufactured by Vasudev Chemo Pharma, India.",
  },
  "/industries/refining": {
    h1: "H2S Scavenger for Refinery Operations â€” MEA Triazine 78%",
    title: "H2S Scavenger for Refinery Operations â€” MEA Triazine 78% | Vasudev Chemo Pharma",
    description:
      "MEA Triazine 78% H2S scavenger for petroleum refineries. Crude unit overheads, FCC off-gas, and tank vapour treatment. Manufactured by Vasudev Chemo Pharma, India.",
  },
  "/industries/biogas": {
    h1: "MEA Triazine H2S Scavenger for Biogas Purification",
    title: "MEA Triazine H2S Scavenger for Biogas Purification | Vasudev Chemo Pharma",
    description:
      "MEA Triazine 78% removes H2S from biogas, landfill gas, and anaerobic digester output. Protects engines, turbines, and upgrading equipment. Supplied by Vasudev Chemo Pharma, India.",
  },
  "/industries/paper-mill": {
    h1: "MEA Triazine Slimicide for Pulp & Paper Mills",
    title: "MEA Triazine Slimicide for Pulp & Paper Mills | Vasudev Chemo Pharma",
    description:
      "MEA Triazine slimicide for pulp and paper mill biofilm control. Anti-slime agent for paper production. Exported to mills in Vietnam, Thailand, Southeast Asia.",
  },
  "/supply/mea-triazine-78/vietnam": {
    h1: "MEA Triazine 78% Supplier to Vietnam — CIF Ho Chi Minh City",
    title: "MEA Triazine 78% Supplier to Vietnam — CIF Ho Chi Minh City",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Vietnam. CIF delivery to Cat Lai & Hai Phong ports. 8–12 day transit from India. Free samples available.",
  },
  "/supply/mea-triazine-78/united-states": {
    h1: "MEA Triazine 78% Supplier to the USA — CIF Houston",
    title: "MEA Triazine 78% Supplier to the USA — CIF Houston",
    description:
      "Vasudev Chemo Pharma exports MEA Triazine 78% to the United States. CIF Houston delivery. TSCA-listed, GHS-compliant SDS. Direct manufacturer pricing for E&P operators and distributors.",
  },
  "/supply/mea-triazine-78/uae": {
    h1: "MEA Triazine 78% Supplier to UAE — CIF Jebel Ali Port",
    title: "MEA Triazine 78% Supplier to UAE — CIF Jebel Ali",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to UAE via Jebel Ali and Khalifa Port. 3–5 day transit from India. Re-export support for GCC distribution.",
  },
  "/supply/mea-triazine-78/oman": {
    h1: "MEA Triazine 78% Supplier to Oman — CIF Sohar Port",
    title: "MEA Triazine 78% Supplier to Oman — CIF Sohar Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Oman via Sohar Port. 2–4 day transit from India. PDO vendor pre-qualification support.",
  },
  "/supply/mea-triazine-78/egypt": {
    h1: "MEA Triazine 78% Supplier to Egypt — CIF Alexandria Port",
    title: "MEA Triazine 78% Supplier to Egypt — CIF Alexandria",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Egypt via Alexandria and Damietta ports. 10–14 day transit. Documentation formatted for GOEIC import procedures.",
  },
  "/supply/mea-triazine-78/brazil": {
    h1: "MEA Triazine 78% Supplier to Brazil — CIF Santos",
    title: "MEA Triazine 78% Supplier to Brazil — CIF Santos",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Brazil via Santos Port. 20–25 day transit. Petrobras specification compliant. Documentation in Portuguese and English.",
  },
  "/supply/mea-triazine-78/saudi-arabia": {
    h1: "MEA Triazine 78% Supplier to Saudi Arabia — CIF Dammam",
    title: "MEA Triazine 78% Supplier to Saudi Arabia — CIF Dammam",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Saudi Arabia via Dammam and Jeddah. 4–7 day transit. SASO-compliant documentation. Saudi Aramco grade.",
  },
  "/supply/mea-triazine-78/iraq": {
    h1: "MEA Triazine 78% Supplier to Iraq — CIF Umm Qasr (Basra)",
    title: "MEA Triazine 78% Supplier to Iraq — CIF Umm Qasr",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iraq via Umm Qasr Port (Basra). 8–12 day transit. Also supplies Kurdistan Region via Turkey.",
  },
  "/supply/mea-triazine-78/qatar": {
    h1: "MEA Triazine 78% Supplier to Qatar — CIF Hamad Port",
    title: "MEA Triazine 78% Supplier to Qatar — CIF Hamad Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Qatar via Hamad Port. 3–5 day transit. QatarEnergy vendor pre-qualification support for Ras Laffan and North Field.",
  },
  "/supply/mea-triazine-78/kuwait": {
    h1: "MEA Triazine 78% Supplier to Kuwait — CIF Shuwaikh Port",
    title: "MEA Triazine 78% Supplier to Kuwait — CIF Shuwaikh Port",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Kuwait via Shuwaikh and Shuaiba ports. 4–6 day transit. KOC vendor pre-qualification support.",
  },
  "/supply/mea-triazine-78/thailand": {
    h1: "MEA Triazine 78% Supplier to Thailand — CIF Laem Chabang",
    title: "MEA Triazine 78% Supplier to Thailand — CIF Laem Chabang",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Thailand via Laem Chabang Port. 7–10 day transit. DIW-compliant documentation. Biogas and PTTEP applications.",
  },
  "/supply/mea-triazine-78/iran": {
    h1: "MEA Triazine 78% Supplier to Iran — CIF Bandar Abbas",
    title: "MEA Triazine 78% Supplier to Iran — CIF Bandar Abbas",
    description:
      "Vasudev Chemo Pharma ships MEA Triazine 78% to Iran via Bandar Abbas. 3–5 day transit from India. Suitable for South Pars, NIOC, and NIGC operations.",
  },
  "/supply/mea-triazine-78/libya": {
    h1: "MEA Triazine 78% Supplier to Libya — CIF Tripoli & Misrata",
    title: "MEA Triazine 78% Supplier to Libya — CIF Tripoli & Misrata",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Libya. CIF delivery to Tripoli and Misrata ports. 12–16 day transit from India. Suitable for NOC and Sirte Basin operations.",
  },
  "/supply/mea-triazine-78/jordan": {
    h1: "MEA Triazine 78% Supplier to Jordan — CIF Aqaba Port",
    title: "MEA Triazine 78% Supplier to Jordan — CIF Aqaba Port",
    description:
      "Vasudev Chemo Pharma supplies MEA Triazine 78% H2S scavenger to Jordan. CIF delivery to Aqaba Port. 7–10 day transit from India. Suitable for JPRC refinery, Risha gas field, and water treatment.",
  },
  "/compare/mea-triazine-vs-pro3-q2-technologies": {
    h1: "MEA Triazine 78% vs Pro3 (Q2 Technologies) — Direct Comparison",
    title: "MEA Triazine 78% vs Pro3 (Q2 Technologies) — Direct Manufacturer Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Pro3 and Pro3 HT from Q2 Technologies. Direct manufacturer pricing vs bundled oilfield services. Same active chemistry, significantly lower cost.",
  },
  "/compare/mea-triazine-vs-rxsol-triazine": {
    h1: "MEA Triazine 78% vs RXSOL-43-8160-210 (RX Chemicals) — Direct Comparison",
    title: "MEA Triazine 78% vs RXSOL-43-8160-210 (RX Chemicals) — Manufacturer vs Distributor",
    description:
      "Compare Vasudev MEA Triazine 78% with RXSOL-43-8160-210 from RX Chemicals. Direct manufacturer supply vs regional distributor markup. Same chemistry, better pricing.",
  },
  "/compare/mea-triazine-vs-grotan-bk": {
    h1: "MEA Triazine 78% vs Grotan BK (Schulke & Mayr) — Direct Comparison",
    title: "MEA Triazine 78% vs Grotan BK (Schulke & Mayr) — Equivalent Chemistry, Competitive Pricing",
    description:
      "Compare Vasudev MEA Triazine 78% with Grotan BK from Schulke & Mayr. Functionally equivalent triazine biocide at competitive pricing with faster delivery to Asia and Middle East.",
  },
  "/compare/mea-triazine-vs-sulfa-clear-lubrizol": {
    h1: "MEA Triazine 78% vs SULFA-CLEAR 8411HC (Lubrizol) — Direct Comparison",
    title: "MEA Triazine 78% vs SULFA-CLEAR 8411HC (Lubrizol) — Comparable Chemistry at Lower Cost",
    description:
      "Compare Vasudev MEA Triazine 78% with SULFA-CLEAR 8411HC from Lubrizol. Comparable active concentration at significantly lower cost. Direct manufacturer supply from India.",
  },
  "/compare/mea-triazine-vs-triasorb-sintez-oka": {
    h1: "MEA Triazine 78% vs Triasorb (Sintez-Oka) — Direct Comparison",
    title: "MEA Triazine 78% vs Triasorb (Sintez-Oka, Russia) — Alternative Supply Source",
    description:
      "Compare Vasudev MEA Triazine 78% with Triasorb from Sintez-Oka (Russia). Reliable alternative supply from India with no sanctions risk, faster ME/Asia delivery, and competitive pricing.",
  },
  "/compare/mea-triazine-vs-championx": {
    h1: "MEA Triazine 78% vs ChampionX H2S Scavenger — Direct Comparison",
    title: "MEA Triazine 78% vs ChampionX H2S Scavenger — Unbundled Transparent Pricing",
    description:
      "Compare Vasudev MEA Triazine 78% with ChampionX H2S scavenger. Transparent manufacturer pricing vs bundled oilfield service pricing. Ideal for independent operators.",
  },
  "/compare/mea-triazine-vs-hscav-80-geocon": {
    h1: "MEA Triazine 78% vs HSCAV-80 / Kontin (Geocon Products) — Direct Comparison",
    title: "MEA Triazine 78% vs HSCAV-80 (Geocon Products) — Direct Manufacturer Alternative",
    description:
      "Compare Vasudev MEA Triazine 78% with HSCAV-80 and Kontin from Geocon Products. Direct manufacturer supply with export-ready packaging and competitive pricing.",
  },
  "/compare/mea-triazine-vs-chinese-suppliers": {
    h1: "MEA Triazine 78% vs Chinese Suppliers (BK Biocide, Dayong, IRO, ECHEMI) — Quality Comparison",
    title: "MEA Triazine 78% vs Chinese Suppliers (BK Biocide, Dayong, IRO, ECHEMI) — Quality Comparison",
    description:
      "Compare Vasudev MEA Triazine 78% with Chinese marketplace suppliers. Guaranteed 78% concentration vs typical 70-75%, consistent quality with batch CoA, and full documentation.",
  },
  "/applications/h2s-scavenging-natural-gas": {
    h1: "H2S Scavenging in Natural Gas Pipelines with MEA Triazine 78%",
    title: "H2S Scavenging in Natural Gas Pipelines — MEA Triazine 78%",
    description:
      "Learn how MEA Triazine 78% removes hydrogen sulfide (H2S) from natural gas pipelines. Irreversible reaction chemistry, dosing methods, and field applications from Vasudev Chemo Pharma.",
  },
  "/applications/crude-oil-sweetening": {
    h1: "Crude Oil Sweetening with MEA Triazine 78%",
    title: "Crude Oil Sweetening with MEA Triazine 78%",
    description:
      "MEA Triazine 78% for sour crude oil sweetening. Removes H2S from crude oil at wellbore, pipeline, tank farm, and refinery operations. Manufacturer direct from India.",
  },
  "/applications/biogas-h2s-removal": {
    h1: "Biogas H2S Removal with MEA Triazine 78%",
    title: "Biogas H2S Removal with MEA Triazine",
    description:
      "Remove H2S from biogas using MEA Triazine 78%. Effective for landfill gas, WWTP digesters, agricultural biogas, and food waste biogas. No media change-out required.",
  },
  "/applications/water-treatment-biocide": {
    h1: "MEA Triazine as Industrial Biocide for Water Treatment",
    title: "MEA Triazine as Industrial Biocide for Water Treatment",
    description:
      "MEA Triazine 78% as a formaldehyde-releasing biocide for industrial water treatment. Cooling towers, produced water, oil-water separators. Manufacturer supply from India.",
  },
  "/applications/metalworking-fluid-preservative": {
    h1: "MEA Triazine Preservative for Metalworking Fluids",
    title: "MEA Triazine Preservative for Metalworking Fluids",
    description:
      "MEA Triazine 78% as a biocide preservative for metalworking fluids. Prevents bacterial and fungal degradation of water-miscible cutting fluids, grinding fluids, and coolants.",
  },
  "/applications/paper-mill-biocide": {
    h1: "MEA Triazine Biocide for Paper & Pulp Mills",
    title: "MEA Triazine Biocide for Paper & Pulp Mills",
    description:
      "MEA Triazine 78% slimicide and biocide for paper and pulp mill white water systems. Controls slime-forming bacteria, compatible with paper chemistry. Export from India.",
  },
  "/applications/gas-sweetening": {
    h1: "Natural Gas Sweetening with MEA Triazine 78%",
    title: "Natural Gas Sweetening with MEA Triazine 78% — Remove H2S from Sour Gas",
    description:
      "MEA Triazine 78% for natural gas sweetening. Remove H2S from sour gas to meet pipeline sales-gas specifications. Direct manufacturer supply from Vasudev Chemo Pharma, India.",
  },
  "/applications/pipeline-h2s-treatment": {
    h1: "Pipeline H2S Treatment with MEA Triazine 78%",
    title: "Pipeline H2S Treatment with MEA Triazine 78% — Inline Scavenging",
    description:
      "MEA Triazine 78% for pipeline H2S treatment. Inline injection for sour gas and crude oil pipelines. Prevent corrosion, meet transport specifications. Direct manufacturer supply.",
  },
  "/applications/crude-oil-desulfurization": {
    h1: "Crude Oil Desulfurization with MEA Triazine 78%",
    title: "Crude Oil Desulfurization with MEA Triazine 78% — H2S Removal from Crude",
    description:
      "MEA Triazine 78% for crude oil desulfurization and H2S removal. Reduce vapor-phase H2S in crude storage, loading, and transport. Direct manufacturer supply from India.",
  },
  "/applications/downhole-h2s-scavenging": {
    h1: "Downhole H2S Scavenger Injection with MEA Triazine 78%",
    title: "Downhole H2S Scavenger Injection — MEA Triazine 78%",
    description:
      "MEA Triazine 78% for downhole H2S scavenger injection in sour wells. Reduces H2S at source, protects wellbore tubulars, and improves surface safety. Direct manufacturer supply from India.",
  },
  "/resources/mea-triazine-dosing-guidelines": {
    h1: "MEA Triazine Dosing Calculator & Guidelines for H2S Scavenging",
    title: "MEA Triazine Dosing Calculator & Guidelines",
    description:
      "Learn how to calculate MEA Triazine dosing rates for H2S scavenging. Covers stoichiometry, practical excess factors, continuous injection, batch treatment, and field monitoring methods.",
  },
  "/resources/h2s-scavenger-solids-formation": {
    h1: "H2S Scavenger Solids Formation: Causes, Prevention & Remediation",
    title: "H2S Scavenger Solids Formation: Causes & Prevention",
    description:
      "Understand why solids form during triazine H2S scavenging — including dithiazine precipitation and amorphous sulfur — and how to prevent plugging with proper dosing, mixing, and temperature management.",
  },
  "/resources/mea-triazine-vs-iron-sponge": {
    h1: "MEA Triazine vs Iron Sponge: Choosing the Right H2S Removal Technology",
    title: "MEA Triazine vs Iron Sponge: H2S Removal Comparison",
    description:
      "Compare MEA Triazine liquid scavenger with iron sponge (iron oxide) for H2S removal. Covers cost, operational complexity, footprint, waste disposal, and when to use each technology.",
  },
  "/resources/mea-triazine-storage-handling": {
    h1: "How to Store and Handle MEA Triazine 78% Safely",
    title: "How to Store and Handle MEA Triazine 78% Safely",
    description:
      "Complete guide to safe storage, handling, PPE requirements, spill response, and shelf life for MEA Triazine 78% H2S scavenger. Includes GHS classification and compatibility information.",
  },
  "/resources/triazine-reaction-chemistry": {
    h1: "MEA Triazine H2S Scavenger: Reaction Chemistry Explained",
    title: "MEA Triazine H2S Scavenger: Reaction Chemistry Explained",
    description:
      "Detailed explanation of MEA Triazine synthesis, the triazine-H2S scavenging reaction mechanism, stoichiometry, reaction by-products, and the effect of temperature and pH on reaction kinetics.",
  },
  "/resources/h2s-scavenger-selection-guide": {
    h1: "H2S Scavenger Selection Guide for Oil, Gas, Biogas, and Tank Applications",
    title: "H2S Scavenger Selection Guide",
    description:
      "Practical guide to selecting the right H2S scavenger for gas, liquids, tanks, offshore systems, and biogas service. Compare triazine, glyoxal, iron sponge, and hybrid treatment strategies.",
  },
  "/resources/mea-triazine-technical-datasheet": {
    h1: "MEA Triazine 78% Technical Datasheet — Product Specifications & Download",
    title: "MEA Triazine 78% Technical Datasheet",
    description:
      "Download the full MEA Triazine 78% technical datasheet. Covers product specifications, physical properties, packaging options, storage guidelines, and quality certifications from Vasudev Chemo Pharma.",
  },
  "/resources/mea-triazine-safety-data-sheet": {
    h1: "MEA Triazine 78% Safety Data Sheet (SDS) — Hazards, Handling & Compliance",
    title: "MEA Triazine 78% Safety Data Sheet (SDS)",
    description:
      "Access the MEA Triazine 78% Safety Data Sheet. Covers hazard identification, first aid, handling and storage, exposure controls, and regulatory information for safe H2S scavenger use.",
  },
  "/resources/h2s-scavenger-dosing-guide": {
    h1: "H2S Scavenger Dosing Guide — Calculations, Injection Methods & Field Optimisation",
    title: "H2S Scavenger Dosing Guide — Calculation & Field Reference",
    description:
      "Complete H2S scavenger dosing guide covering dosing calculations, injection methods, contact tower sizing, field optimisation, and troubleshooting for MEA Triazine 78% applications.",
  },
  "/resources/import-compliance-guide": {
    h1: "MEA Triazine Import Compliance Guide — Documentation, HS Codes & Country Requirements",
    title: "MEA Triazine Import Compliance Guide — Country-Specific Requirements",
    description:
      "Practical import compliance guide for MEA Triazine 78% covering HS codes, documentation, customs requirements, and regulatory frameworks for major importing countries.",
  },
  "/resources/natural-gas-sweetening-guide": {
    h1: "Natural Gas Sweetening: A Complete Guide to Process, Methods & Equipment",
    title: "Natural Gas Sweetening: Process, Methods & Equipment Guide",
    description:
      "Complete guide to natural gas sweetening — amine treating, triazine scavengers, membrane separation, and solid bed methods. Learn when to choose each technology, typical equipment, and how H2S scavengers fit sour gas treatment.",
  },
};

function normalizePath(path: string): string {
  if (!path) return "/";

  try {
    const url = new URL(path);
    path = url.pathname;
  } catch {
    // Path is already relative.
  }

  const cleanPath = path.split(/[?#]/)[0].replace(/\/+$/, "");
  return cleanPath === "" ? "/" : cleanPath;
}

function overrideTitle(
  title: Metadata["title"],
  override: string
): Metadata["title"] {
  if (title && typeof title === "object" && "template" in title) {
    return { ...title, default: override };
  }

  return override;
}

export function getPageH1Override(path: string): string | undefined {
  return PAGE_META_OVERRIDES[normalizePath(path)]?.h1;
}

export function applyPageMetaOverride(
  path: string,
  metadata: Metadata
): Metadata {
  const override = PAGE_META_OVERRIDES[normalizePath(path)];

  if (!override) {
    return metadata;
  }

  const nextMetadata: Metadata = { ...metadata };

  if (override.title) {
    nextMetadata.title = overrideTitle(metadata.title, override.title);

    if (metadata.openGraph) {
      nextMetadata.openGraph = {
        ...metadata.openGraph,
        title: override.title,
      };
    }

    if (metadata.twitter) {
      nextMetadata.twitter = {
        ...metadata.twitter,
        title: override.title,
      };
    }
  }

  if (override.description) {
    nextMetadata.description = override.description;

    if (metadata.openGraph) {
      nextMetadata.openGraph = {
        ...nextMetadata.openGraph,
        description: override.description,
      };
    }

    if (metadata.twitter) {
      nextMetadata.twitter = {
        ...nextMetadata.twitter,
        description: override.description,
      };
    }
  }

  return nextMetadata;
}
