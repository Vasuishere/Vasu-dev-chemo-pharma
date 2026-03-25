/* ── Resource article data for /resources/[article] ──────────── */

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: "Technical Guide" | "Safety" | "Product Knowledge";
  h1: string;
  intro: string;
  publishedDate: string;
  sections: { heading: string; id: string; body: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { text: string; href: string }[];
};

export const RESOURCE_ARTICLES_DATA: Record<string, ResourceArticle> = {
  /* ────────────────────────────────────────────────────────────── */
  /* 1. Dosing Guidelines                                          */
  /* ────────────────────────────────────────────────────────────── */
  "mea-triazine-dosing-guidelines": {
    slug: "mea-triazine-dosing-guidelines",
    title: "MEA Triazine Dosing Calculator & Guidelines",
    description:
      "Learn how to calculate MEA Triazine dosing rates for H2S scavenging. Covers stoichiometry, practical excess factors, continuous injection, batch treatment, and field monitoring methods.",
    keywords: [
      "MEA Triazine dosing calculator",
      "H2S scavenger dosage",
      "triazine dosing rate",
      "H2S removal calculation",
      "MEA Triazine stoichiometry",
      "H2S scavenger injection rate",
      "triazine dosing guidelines",
    ],
    category: "Technical Guide",
    h1: "MEA Triazine Dosing Calculator & Guidelines for H2S Scavenging",
    intro:
      "Accurate dosing is the single most important factor in cost-effective H2S scavenging. Under-dosing leaves dangerous H2S in your process stream; over-dosing wastes chemical and can cause solids formation. This guide explains how to calculate MEA Triazine dosing rates from first principles, apply practical field corrections, and monitor treatment performance.",
    publishedDate: "2025-03-25",
    sections: [
      {
        heading: "Stoichiometric Basis of MEA Triazine Dosing",
        id: "stoichiometry",
        body: `The reaction between MEA Triazine (hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine) and hydrogen sulfide proceeds with a theoretical stoichiometry of 1 mole of triazine reacting with up to 3 moles of H2S. The molecular weight of MEA Triazine is approximately 219 g/mol, and the molecular weight of H2S is 34 g/mol.

At 78% active concentration and a density of approximately 1.08 kg/L, one litre of MEA Triazine 78% contains roughly 0.84 kg of active triazine — corresponding to about 3.84 millimoles of triazine. Theoretically, this can neutralise up to 11.5 millimoles (0.39 g) of H2S.

Working through the arithmetic, the theoretical minimum consumption is approximately 2.6 litres of MEA Triazine 78% per kilogram of H2S removed. However, in real-world applications, the full 1:3 stoichiometric ratio is rarely achieved because of incomplete gas-liquid contact, competing reactions with CO2 and organic acids, and kinetic limitations at lower temperatures.`,
      },
      {
        heading: "Practical Dosing: Applying Field Excess Factors",
        id: "practical-dosing",
        body: `In practice, operators typically apply an excess factor of 2x to 4x above the stoichiometric minimum. This translates to a practical consumption of approximately 3.2 litres of MEA Triazine 78% per kilogram of H2S removed under good contact conditions, rising to 5–10 litres per kilogram in less favourable systems.

The key factors that increase chemical consumption beyond stoichiometric include: H2S concentration (higher concentrations improve reaction efficiency), gas or liquid flow rate (higher velocities reduce contact time), temperature (reaction kinetics slow below 15 degrees Celsius), contact time and mixing efficiency (static mixers and contact towers improve utilisation), and water cut in oil systems (water is needed as a reaction medium for gas-phase scavenging).

A useful rule of thumb for budgeting: assume 3.2 L of MEA Triazine 78% per kg of H2S in well-designed continuous injection systems with adequate contact time, and 5–6 L/kg in direct pipeline injection without a contact vessel.`,
      },
      {
        heading: "Continuous Injection vs Batch Treatment",
        id: "injection-methods",
        body: `Continuous injection is the standard approach for ongoing H2S removal in pipelines, gas processing, and production facilities. A chemical metering pump delivers triazine at a controlled rate, typically proportional to the measured H2S load. The injection point should be upstream of a mixing device — a static mixer, venturi, or contact tower — to maximise gas-liquid contact.

Batch treatment is used for treating contained volumes such as storage tanks, produced water holding tanks, and during well-testing operations. A calculated volume of triazine is added to the system, agitated or circulated, and allowed to react over a contact period of 30 minutes to several hours depending on H2S loading and temperature. Batch treatment typically requires a higher excess factor (3–4x stoichiometric) because contact efficiency is lower than in continuous systems.

For continuous injection, the dosing rate in litres per hour can be calculated as: Dose (L/hr) = H2S load (kg/hr) multiplied by the consumption factor (L/kg). The H2S load is derived from the gas flow rate and H2S concentration. Our technical team can assist with dosing calculations for your specific operating conditions.`,
      },
      {
        heading: "Monitoring and Optimising Treatment Performance",
        id: "monitoring",
        body: `Effective monitoring is essential to ensure H2S is reduced to target levels without excessive chemical consumption. The most common monitoring methods are:

Gastec detector tubes provide a quick, low-cost spot measurement of H2S in gas streams. They are widely used for field verification at wellheads and pipeline outlets. Online H2S analysers (electrochemical or tunable diode laser) provide continuous real-time measurement and can be integrated with dosing pump controls for automatic rate adjustment. Stain-tube methods (Draeger, Gastec) are used for liquid-phase H2S measurement in produced water and treated fluids.

Best practice is to monitor H2S concentration at the outlet of the contact system and adjust the dosing rate to maintain the target H2S level with the minimum practical excess. Tracking chemical consumption per kilogram of H2S removed over time helps identify changes in system efficiency and optimise costs. If consumption rises above the expected range, check for changes in H2S loading, temperature drops, or equipment issues such as dosing pump malfunction or plugged injection quills.`,
      },
    ],
    faqs: [
      {
        question: "How many litres of MEA Triazine 78% are needed per kg of H2S?",
        answer:
          "The theoretical minimum is approximately 2.6 litres per kilogram of H2S. In practice, expect 3.2 L/kg in well-designed systems with good contact, rising to 5–6 L/kg in direct pipeline injection. The actual consumption depends on contact efficiency, temperature, and system design.",
      },
      {
        question: "Can I use MEA Triazine 78% in a gas contact tower?",
        answer:
          "Yes. Gas contact towers (bubble towers, packed columns, spray towers) are the most efficient way to use MEA Triazine for gas-phase H2S removal. The improved gas-liquid contact in a tower typically reduces chemical consumption to near-stoichiometric levels compared to direct pipeline injection.",
      },
      {
        question: "What happens if I overdose MEA Triazine?",
        answer:
          "Moderate overdosing (up to 2x stoichiometric) is normal and expected in field operations. Excessive overdosing — particularly at low temperatures or in systems with high dissolved solids — can lead to dithiazine precipitation and solids formation. Maintaining dosing within recommended ranges and monitoring outlet H2S levels prevents this issue.",
      },
      {
        question: "How do I adjust dosing when H2S concentration changes?",
        answer:
          "Dosing should be proportional to the H2S mass load (concentration multiplied by flow rate). If your system has variable H2S, consider installing an online H2S analyser with feedback control to the dosing pump. For manual systems, increase monitoring frequency during known periods of H2S variability.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Oil & Gas Applications", href: "/industries/oil-gas-h2s-scavenger" },
      { text: "Solids Formation: Causes & Prevention", href: "/resources/h2s-scavenger-solids-formation" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 2. Solids Formation                                           */
  /* ────────────────────────────────────────────────────────────── */
  "h2s-scavenger-solids-formation": {
    slug: "h2s-scavenger-solids-formation",
    title: "H2S Scavenger Solids Formation: Causes & Prevention",
    description:
      "Understand why solids form during triazine H2S scavenging — including dithiazine precipitation and amorphous sulfur — and how to prevent plugging with proper dosing, mixing, and temperature management.",
    keywords: [
      "H2S scavenger solids formation",
      "dithiazine precipitation",
      "triazine fouling",
      "H2S scavenger plugging",
      "triazine solids prevention",
      "amorphous sulfur scavenger",
      "MEA Triazine solids",
      "scavenger fouling oil gas",
    ],
    category: "Technical Guide",
    h1: "H2S Scavenger Solids Formation: Causes, Prevention & Remediation",
    intro:
      "Solids formation is the most common operational problem associated with triazine-based H2S scavenging. Precipitated dithiazine and amorphous sulfur can plug injection quills, foul contact equipment, and cause costly shutdowns. This guide explains why solids form and how to prevent them.",
    publishedDate: "2025-03-25",
    sections: [
      {
        heading: "What Solids Form During Triazine Scavenging?",
        id: "what-solids-form",
        body: `When MEA Triazine reacts with H2S, the primary reaction product is dithiazine (5-(2-hydroxyethyl)hexahydro-1,3,5-dithiazine). Under ideal conditions, dithiazine remains dissolved in the aqueous phase and is removed with the produced water. However, under certain conditions, dithiazine can precipitate out of solution as a white to off-white solid that adheres to pipe walls, valve internals, and contact equipment.

A secondary source of solids is amorphous elemental sulfur. This forms when the triazine-H2S reaction does not proceed to completion — typically under conditions of extreme overdosing, very high H2S concentrations, or when the spent triazine is exposed to oxygen. Amorphous sulfur appears as a yellow to orange deposit.

In some cases, operators also observe a gel-like or waxy deposit that is a mixture of partially reacted triazine, dithiazine, and co-precipitated formation solids. This combined fouling is particularly common in systems with high total dissolved solids (TDS) or high calcium/barium content in the produced water.`,
      },
      {
        heading: "Root Causes of Solids Formation",
        id: "root-causes",
        body: `The primary causes of solids formation during triazine H2S scavenging are:

Overdosing: Excessive triazine relative to the H2S load drives the reaction equilibrium toward higher dithiazine concentrations, exceeding the solubility limit. This is the single most common cause of solids problems in the field. Maintaining dosing at the minimum effective rate is critical.

Low temperature: Dithiazine solubility decreases with temperature. Systems operating below 15 degrees Celsius are at significantly higher risk of precipitation. Winter operations and subsea pipelines require particular attention to dosing ratios during cold periods.

High H2S loading with insufficient mixing: When triazine contacts a high-concentration H2S slug without adequate mixing, localised over-reaction can produce concentrated dithiazine that precipitates before it can disperse into the bulk fluid.

Incompatible water chemistry: High-TDS produced water, particularly water with elevated calcium, barium, or iron content, reduces dithiazine solubility. The interaction between dithiazine and divalent cations can accelerate precipitation.

Low water cut: In oil-dominated systems with very low water cut, there is insufficient aqueous phase to keep dithiazine dissolved. Ensuring adequate water contact is essential for solids-free operation.`,
      },
      {
        heading: "Prevention Strategies",
        id: "prevention",
        body: `Preventing solids formation is far more effective and less costly than remediation. The following strategies are recommended:

Optimise dosing ratios: Target the minimum effective dose — typically 1.5x to 2.5x stoichiometric — rather than applying a large excess. Use outlet H2S monitoring to fine-tune the dosing rate. Automated dosing control based on real-time H2S measurement is the most reliable approach.

Ensure adequate mixing: Install static mixers or use contact towers to ensure the triazine is thoroughly dispersed before it contacts H2S. Poor mixing creates localised high-concentration zones where precipitation is more likely.

Maintain temperature: Where possible, keep the system temperature above 15 degrees Celsius. In cold environments, consider insulating or heat-tracing the injection point and downstream piping. Pre-heating the triazine before injection can also help.

Use 78% concentration product: Higher-concentration MEA Triazine (78%) delivers more active scavenger per litre, meaning less total liquid volume is injected. This reduces the dilution of the aqueous phase and helps maintain dithiazine below its solubility limit. Lower-concentration products (40-50%) require more volume for the same scavenging effect, increasing the risk of aqueous phase overloading.

Monitor and respond: Track chemical consumption per unit of H2S removed. A sudden increase in consumption without a corresponding increase in H2S load may indicate that solids are forming and consuming chemical unproductively.`,
      },
      {
        heading: "Remediation: Removing Existing Solids",
        id: "remediation",
        body: `If solids have already formed, the following remediation approaches are effective:

Hot water flush: Dithiazine solubility increases significantly with temperature. Flushing the affected piping or equipment with hot water (60-80 degrees Celsius) at high circulation rate can dissolve and remove dithiazine deposits. This is the simplest and most commonly used remediation method.

Solvent wash: For stubborn deposits or mixed solids containing amorphous sulfur, a solvent wash with a compatible organic solvent (such as a glycol-based cleaning solution) can be effective. The choice of solvent depends on the equipment metallurgy and the nature of the deposit.

Mechanical cleaning: In severe cases — particularly in contact towers with packed beds — mechanical cleaning or media replacement may be necessary. This is typically a last resort after chemical cleaning methods have been exhausted.

Prevention is always preferred over remediation. If solids formation is a recurring problem, a systematic review of dosing practices, system temperatures, and water chemistry is recommended. Our technical team can assist with a root-cause analysis and recommend specific corrective actions for your system.`,
      },
    ],
    faqs: [
      {
        question: "Why does my triazine injection quill keep plugging?",
        answer:
          "Injection quill plugging is almost always caused by dithiazine precipitation at the injection point. The most common causes are overdosing, low temperature at the injection point, or insufficient flow past the quill to sweep away reaction products. Reducing the dose rate, improving mixing, or relocating the injection point to a higher-flow area typically resolves the problem.",
      },
      {
        question: "Does MEA Triazine 78% cause more or fewer solids than lower concentrations?",
        answer:
          "MEA Triazine 78% generally causes fewer solids problems than lower-concentration products. Because fewer litres are needed to deliver the same scavenging capacity, there is less total liquid added to the system and lower risk of exceeding the dithiazine solubility limit in the aqueous phase.",
      },
      {
        question: "Can solids formation damage my equipment?",
        answer:
          "Yes. Dithiazine deposits can restrict flow in pipelines, plug injection quills and valves, foul heat exchangers, and reduce the efficiency of contact towers. In severe cases, the pressure drop across fouled equipment can cause unplanned shutdowns. Early detection and prevention are essential.",
      },
    ],
    relatedLinks: [
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Storage & Handling Guide", href: "/resources/mea-triazine-storage-handling" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 3. MEA Triazine vs Iron Sponge                                */
  /* ────────────────────────────────────────────────────────────── */
  "mea-triazine-vs-iron-sponge": {
    slug: "mea-triazine-vs-iron-sponge",
    title: "MEA Triazine vs Iron Sponge: H2S Removal Comparison",
    description:
      "Compare MEA Triazine liquid scavenger with iron sponge (iron oxide) for H2S removal. Covers cost, operational complexity, footprint, waste disposal, and when to use each technology.",
    keywords: [
      "MEA Triazine vs iron sponge",
      "H2S removal comparison",
      "iron oxide H2S",
      "liquid vs solid H2S scavenger",
      "iron sponge vs triazine",
      "H2S scavenger selection",
    ],
    category: "Product Knowledge",
    h1: "MEA Triazine vs Iron Sponge: Choosing the Right H2S Removal Technology",
    intro:
      "Iron sponge and MEA Triazine are two of the most widely used H2S removal technologies for small-to-medium gas streams. Each has distinct advantages depending on H2S concentration, flow variability, operational resources, and site constraints. This comparison helps you select the right approach for your application.",
    publishedDate: "2025-03-25",
    sections: [
      {
        heading: "How Iron Sponge Works",
        id: "iron-sponge-overview",
        body: `Iron sponge is a solid-bed H2S scavenger consisting of iron oxide (Fe2O3) impregnated on a carrier material — traditionally wood chips, though modern versions use ceramic or synthetic substrates. Gas containing H2S passes through a packed vessel, and the iron oxide reacts with H2S to form iron sulfide (Fe2S3).

The reaction is: 2 Fe2O3 + 6 H2S yields 2 Fe2S3 + 6 H2O. The iron sponge can be partially regenerated by exposing the spent bed to air, which oxidises the iron sulfide back to iron oxide and elemental sulfur. However, regeneration is only partially effective, and the bed must eventually be replaced — typically after 2 to 5 regeneration cycles.

Iron sponge is effective for steady-state gas streams with H2S concentrations below approximately 50–100 ppm. It requires a vessel (tower or horizontal vessel) large enough to provide adequate contact time, and the gas must be saturated with water for the reaction to proceed. Dry gas must be humidified before entering the iron sponge vessel.`,
      },
      {
        heading: "How MEA Triazine Compares",
        id: "triazine-comparison",
        body: `MEA Triazine is a liquid chemical scavenger injected into the gas or liquid stream via a dosing pump. It reacts irreversibly with H2S to form water-soluble dithiazine. Unlike iron sponge, MEA Triazine is not regenerable — it is consumed in the reaction and the spent chemical is disposed of with the produced water or waste stream.

The key differences between the two technologies are:

Capital cost: Iron sponge requires a pressure vessel, piping, and associated infrastructure. MEA Triazine requires only a chemical storage tank, dosing pump, and injection quill — significantly lower capital investment.

Operating cost: For low H2S loads (below about 10 kg/day of H2S), iron sponge can be more economical because the media lasts for extended periods. For higher or variable H2S loads, MEA Triazine is typically more cost-effective because dosing rates can be adjusted in real time.

Operational complexity: Iron sponge requires periodic bed replacement, which involves vessel entry (confined space), handling of potentially pyrophoric spent media, and disposal of solid waste. MEA Triazine is a pump-and-forget system with no vessel entry or solid waste handling.

Footprint: Iron sponge vessels are large, especially for higher flow rates. MEA Triazine systems have a much smaller physical footprint — often just a tote tank and a small pump skid.

Waste disposal: Spent iron sponge media can be pyrophoric (self-heating) and requires careful handling and disposal, sometimes as hazardous waste. Spent MEA Triazine (dithiazine in water) is non-hazardous and typically disposed of with produced water.`,
      },
      {
        heading: "When to Use Each Technology",
        id: "selection-guide",
        body: `Iron sponge is generally the better choice when: H2S concentrations are consistently low (below 50 ppm in gas phase), gas flow rates are steady and predictable, the site has adequate space for a contact vessel, and local regulations or operator preference favour a regenerable system.

MEA Triazine is generally the better choice when: H2S concentrations are moderate to high or variable, the site requires a compact treatment system, operators want to avoid confined space entry and solid waste handling, fast response to changing H2S levels is needed, or capital budget is limited.

For many applications, particularly in upstream oil and gas production, MEA Triazine has become the default choice because of its operational simplicity, low capital cost, and ability to handle variable H2S loads. Iron sponge remains relevant for small, steady-state gas gathering systems and applications where chemical supply logistics are difficult.`,
      },
      {
        heading: "Hybrid Approaches",
        id: "hybrid",
        body: `In some applications, operators use both technologies in combination. A common hybrid approach is to use an iron sponge vessel as the primary bulk removal stage, with MEA Triazine injection downstream as a polishing step to ensure the treated gas meets the target H2S specification.

This hybrid approach can reduce overall chemical costs by using the cheaper iron oxide media for the bulk of the removal, while the triazine handles the variable portion of the H2S load and ensures consistent outlet quality. The approach is particularly effective at gas gathering stations with multiple wells feeding into a common header, where individual well H2S concentrations may vary significantly.

Another hybrid scenario is seasonal switching: iron sponge during stable, low-H2S periods and MEA Triazine injection during high-H2S events or when quick response is needed. Our technical team can evaluate your specific situation and recommend the most cost-effective treatment configuration.`,
      },
    ],
    faqs: [
      {
        question: "Which is cheaper — MEA Triazine or iron sponge?",
        answer:
          "It depends on the H2S load. For very low, steady H2S loads (below about 5–10 kg/day), iron sponge may have lower operating costs. For higher or variable loads, MEA Triazine is typically more cost-effective when total cost of ownership — including labour, waste disposal, and downtime — is considered. MEA Triazine always has lower capital cost.",
      },
      {
        question: "Can MEA Triazine replace an existing iron sponge system?",
        answer:
          "Yes. Many operators have converted from iron sponge to MEA Triazine injection to reduce operational complexity and labour costs. The conversion typically requires only a chemical storage tank, metering pump, and injection point — all of which can be installed without significant downtime.",
      },
      {
        question: "Is spent iron sponge media hazardous?",
        answer:
          "Spent iron sponge media containing iron sulfide can be pyrophoric — it may self-heat or ignite when exposed to air during removal. It must be handled with appropriate safety precautions and may be classified as hazardous waste depending on local regulations. This is one of the operational disadvantages of iron sponge compared to MEA Triazine.",
      },
      {
        question: "Does Vasudev Chemo Pharma supply iron sponge media?",
        answer:
          "No. We specialise in liquid triazine-based H2S scavengers — MEA Triazine 78% and MMA Triazine 40%. If you are considering a switch from iron sponge to liquid scavenging, our technical team can help you evaluate the economics and design the dosing system.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "Oil & Gas Applications", href: "/industries/oil-gas-h2s-scavenger" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 4. Storage & Handling                                         */
  /* ────────────────────────────────────────────────────────────── */
  "mea-triazine-storage-handling": {
    slug: "mea-triazine-storage-handling",
    title: "How to Store and Handle MEA Triazine 78% Safely",
    description:
      "Complete guide to safe storage, handling, PPE requirements, spill response, and shelf life for MEA Triazine 78% H2S scavenger. Includes GHS classification and compatibility information.",
    keywords: [
      "MEA Triazine storage",
      "MEA Triazine handling",
      "triazine safety data",
      "H2S scavenger storage requirements",
      "MEA Triazine shelf life",
      "MEA Triazine PPE",
      "triazine MSDS",
    ],
    category: "Safety",
    h1: "How to Store and Handle MEA Triazine 78% Safely",
    intro:
      "Proper storage and handling of MEA Triazine 78% ensures product integrity, worker safety, and regulatory compliance. While MEA Triazine is not classified as a dangerous good for transport, it requires standard chemical safety precautions during storage and use. This guide covers everything your team needs to know.",
    publishedDate: "2025-03-25",
    sections: [
      {
        heading: "Storage Requirements",
        id: "storage",
        body: `MEA Triazine 78% should be stored in its original sealed container — polyethylene (HDPE) drums, intermediate bulk containers (IBCs), or stainless steel tanks. Do not store in aluminium, galvanised steel, or copper containers, as the product can react with these metals.

Store at ambient temperature in a well-ventilated area, away from direct sunlight. The critical temperature constraint is to keep the product above 5 degrees Celsius. Below this temperature, MEA Triazine can begin to crystallise, reducing its effectiveness and making it difficult to pump. If the product has been exposed to low temperatures and shows signs of crystallisation, warming to 20-25 degrees Celsius with gentle agitation will usually restore it to full clarity and performance.

The maximum recommended storage temperature is 40 degrees Celsius. Prolonged exposure to temperatures above 40 degrees Celsius can accelerate degradation. If outdoor storage in hot climates is unavoidable, provide shade cover and adequate air circulation.

Keep the product away from strong acids (such as hydrochloric acid, sulfuric acid), strong oxidisers (such as bleach, hydrogen peroxide), and sources of ignition. MEA Triazine is not flammable, but contact with strong acids can cause rapid decomposition and release of formaldehyde vapour.`,
      },
      {
        heading: "Shelf Life and Product Integrity",
        id: "shelf-life",
        body: `MEA Triazine 78% has a shelf life of 12 months from the date of manufacture when stored in sealed, unopened containers under recommended conditions. After opening, the product should be used within 6 months, as exposure to air and moisture can gradually reduce the active triazine content.

Signs of product degradation include: a strong formaldehyde odour (indicating hydrolysis of the triazine ring), visible cloudiness or precipitate formation, and a drop in pH below 9. Fresh MEA Triazine 78% is a clear to slightly yellow liquid with a mild amine odour and a pH of approximately 10-11.

To verify product quality on receipt, check the Certificate of Analysis (COA) against the specification for active content (78% minimum), specific gravity (1.07-1.10), and pH. Vasudev Chemo Pharma provides a COA with every shipment. If you suspect degradation during storage, contact our technical team for guidance on field testing.`,
      },
      {
        heading: "Personal Protective Equipment and First Aid",
        id: "ppe-first-aid",
        body: `When handling MEA Triazine 78% concentrate, the following PPE is recommended:

Eye protection: Chemical splash goggles or a full face shield. MEA Triazine is alkaline (pH 10-11) and can cause serious eye irritation on contact. Safety glasses alone are not sufficient when pouring or transferring the product.

Skin protection: Nitrile or neoprene chemical-resistant gloves. Wear long sleeves and chemical-resistant apron or coveralls when handling drums or IBCs. Prolonged or repeated skin contact can cause irritation and dermatitis.

Respiratory protection: In well-ventilated areas, respiratory protection is generally not required for routine handling. In confined spaces or during spill response, use a half-face respirator with organic vapour cartridge (or SCBA for large spills in enclosed areas).

First aid measures: For eye contact, flush immediately with clean water for at least 15 minutes and seek medical attention. For skin contact, remove contaminated clothing and wash the affected area thoroughly with soap and water. If swallowed, do not induce vomiting — rinse the mouth with water and seek immediate medical attention. If inhaled, move the person to fresh air. In all cases of significant exposure, seek medical advice and provide the Material Safety Data Sheet (MSDS) to medical personnel.`,
      },
      {
        heading: "Spill Response and Disposal",
        id: "spill-disposal",
        body: `For small spills (less than 20 litres): Contain the spill with absorbent material (vermiculite, dry sand, or commercial chemical absorbent). Do not use sawdust or other combustible absorbents. Collect the absorbed material and place it in a sealed container for disposal. Flush the spill area with large volumes of water.

For large spills: Prevent the product from entering storm drains, waterways, or soil. Construct a bund or dike around the spill using absorbent material, earth, or sand. Recover as much product as possible by pumping into a suitable container. Flush the remaining residue with water. Notify local environmental authorities if the spill has the potential to reach waterways or groundwater.

Disposal: Spent MEA Triazine (containing dithiazine reaction products) is typically non-hazardous and can be disposed of with produced water or industrial wastewater, subject to local discharge limits. Unused or expired product should be disposed of through a licensed chemical waste contractor. Do not dispose of concentrated MEA Triazine into municipal sewage systems without treatment.

Transport classification: MEA Triazine 78% is not classified as a dangerous good under IMDG (International Maritime Dangerous Goods) code for sea transport, and is not classified as hazardous for land transport under ADR/DOT regulations. It can be shipped as a non-DG liquid in standard drums and IBCs.`,
      },
      {
        heading: "Chemical Compatibility",
        id: "compatibility",
        body: `MEA Triazine 78% is compatible with most common oilfield and industrial chemicals, including: corrosion inhibitors, demulsifiers, scale inhibitors, biocides, and methanol/glycol used for hydrate prevention.

Materials of construction that are compatible with MEA Triazine include: HDPE (polyethylene), polypropylene, stainless steel (304 and 316), fibreglass-reinforced plastic (FRP), and fluoropolymers (PTFE, PVDF). Viton and EPDM elastomers are suitable for gaskets and seals.

Materials to avoid: Aluminium, galvanised steel, copper, and brass can corrode on prolonged contact with MEA Triazine. Natural rubber gaskets may degrade. Carbon steel is acceptable for short-term contact but is not recommended for long-term storage.

Chemicals to avoid mixing with MEA Triazine: Strong mineral acids (HCl, H2SO4, HNO3) cause rapid decomposition and formaldehyde release. Strong oxidisers (sodium hypochlorite, hydrogen peroxide) can cause exothermic reactions. Always consult the MSDS and contact our technical team before combining MEA Triazine with unfamiliar chemicals.`,
      },
    ],
    faqs: [
      {
        question: "Is MEA Triazine 78% classified as a dangerous good for shipping?",
        answer:
          "No. MEA Triazine 78% is not classified as a dangerous good under IMDG code for sea transport or under ADR/DOT for land transport. It can be shipped in standard HDPE drums and IBCs as a non-DG liquid. An MSDS is provided with every shipment for customs and safety documentation.",
      },
      {
        question: "What happens if MEA Triazine freezes?",
        answer:
          "MEA Triazine 78% can begin to crystallise below 5 degrees Celsius. If this occurs, warm the container to 20-25 degrees Celsius and agitate gently to redissolve the crystals. The product should return to full clarity and performance. Avoid repeated freeze-thaw cycles, as these can accelerate degradation.",
      },
      {
        question: "Can I store MEA Triazine in a carbon steel tank?",
        answer:
          "Carbon steel is acceptable for short-term contact but is not recommended for long-term storage of MEA Triazine 78%. The alkaline nature of the product can cause corrosion over time. HDPE, polypropylene, stainless steel (304/316), and fibreglass-reinforced plastic are the recommended materials for storage tanks.",
      },
      {
        question: "Do you provide MSDS documentation?",
        answer:
          "Yes. Vasudev Chemo Pharma provides a Material Safety Data Sheet (MSDS), Technical Data Sheet (TDS), and Certificate of Analysis (COA) with every shipment. These documents are also available on request before purchase for your internal safety review.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "Solids Formation: Causes & Prevention", href: "/resources/h2s-scavenger-solids-formation" },
      { text: "Request MSDS / TDS", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 5. Reaction Chemistry                                         */
  /* ────────────────────────────────────────────────────────────── */
  "triazine-reaction-chemistry": {
    slug: "triazine-reaction-chemistry",
    title: "MEA Triazine H2S Scavenger: Reaction Chemistry Explained",
    description:
      "Detailed explanation of MEA Triazine synthesis, the triazine-H2S scavenging reaction mechanism, stoichiometry, reaction by-products, and the effect of temperature and pH on reaction kinetics.",
    keywords: [
      "MEA Triazine reaction chemistry",
      "triazine H2S mechanism",
      "dithiazine formation",
      "hexahydro triazine synthesis",
      "H2S scavenger chemistry",
      "triazine stoichiometry",
      "MEA Triazine 78 active content",
    ],
    category: "Product Knowledge",
    h1: "MEA Triazine H2S Scavenger: Reaction Chemistry Explained",
    intro:
      "Understanding the chemistry behind MEA Triazine H2S scavenging helps operators optimise dosing, predict by-product behaviour, and troubleshoot performance issues. This article covers the synthesis of MEA Triazine, the scavenging reaction mechanism, and the factors that influence reaction efficiency.",
    publishedDate: "2025-03-25",
    sections: [
      {
        heading: "Synthesis of MEA Triazine",
        id: "synthesis",
        body: `MEA Triazine — formally named hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (CAS 4719-04-4) — is synthesised by the condensation reaction of monoethanolamine (MEA) with formaldehyde. Three moles of each reactant combine to form one mole of the triazine ring compound, releasing three moles of water:

3 HOCH2CH2NH2 + 3 CH2O yields C9H21N3O3 + 3 H2O

The reaction is carried out in aqueous solution at controlled temperature. The resulting product at 78% active concentration contains the triazine dissolved in water, with small amounts of residual monoethanolamine and formaldehyde. The 78% figure refers to the weight percentage of the active hexahydrotriazine compound in the final solution.

The molecular weight of the active triazine is approximately 219.3 g/mol. At 78% w/w and a solution density of approximately 1.08 g/mL, one litre of MEA Triazine 78% contains about 842 g of active triazine, corresponding to approximately 3.84 millimoles. This high molar concentration is what makes 78% the industry-standard concentration for oil and gas H2S scavenging — it delivers the maximum number of reactive moles per litre of product.`,
      },
      {
        heading: "The Triazine-H2S Scavenging Reaction",
        id: "scavenging-reaction",
        body: `When MEA Triazine contacts hydrogen sulfide, the triazine ring undergoes nucleophilic attack by the bisulfide ion (HS-). The sulfur atom replaces nitrogen in the ring structure, and the reaction proceeds through intermediate thiadiazine species to form dithiazine as the primary product.

The overall simplified reaction can be written as: one mole of hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine reacts with up to three moles of H2S to produce dithiazine and trithiane ring compounds, while releasing monoethanolamine.

The reaction is irreversible under normal operating conditions — once H2S has reacted with the triazine, it is permanently bound in the dithiazine structure and cannot be released back into the gas or liquid phase. This irreversibility is a key advantage of triazine scavengers over regenerable amine systems, where H2S can be released during upsets.

The primary reaction product, dithiazine, is water-soluble at typical produced water temperatures and can be disposed of with the aqueous waste stream. Under conditions of high loading or low temperature, dithiazine can exceed its solubility limit and precipitate — this is the root cause of the solids formation problems discussed in our separate technical guide.`,
      },
      {
        heading: "Stoichiometry and Why 78% Active Content Matters",
        id: "stoichiometry-concentration",
        body: `The theoretical stoichiometry is 1 mole of triazine per 3 moles of H2S. Working through the molecular weights: 219 g of triazine reacts with 102 g of H2S (3 times 34 g/mol). This means 1 kg of pure triazine can theoretically remove 0.465 kg of H2S.

At 78% active content, 1 kg of product contains 0.78 kg of active triazine, capable of removing up to 0.363 kg of H2S. Given the product density of approximately 1.08 kg/L, one litre of MEA Triazine 78% can theoretically remove up to 0.39 kg of H2S — or equivalently, the theoretical minimum consumption is about 2.6 litres per kilogram of H2S.

Why does the active concentration matter? A product at 50% active content, for example, contains only 0.50 kg of triazine per kilogram of product — 36% less active material than the 78% product. This means you need proportionally more volume to achieve the same scavenging effect, increasing transport costs, storage requirements, and the volume of liquid injected into your process. For oil and gas applications where H2S loads are significant, the 78% concentration is the clear economic choice.

Lower-concentration products (such as MMA Triazine 40%) have their place in applications like water treatment where lower dosing rates are required and the smaller active content per litre makes precise low-rate dosing easier.`,
      },
      {
        heading: "Temperature and pH Effects on Reaction Kinetics",
        id: "kinetics",
        body: `The triazine-H2S reaction rate is influenced by both temperature and pH:

Temperature: The reaction follows Arrhenius kinetics — the rate approximately doubles for every 10 degree Celsius increase in temperature within the normal operating range of 5-80 degrees Celsius. At typical oilfield temperatures (20-60 degrees Celsius), the reaction is fast, typically reaching completion within seconds to minutes in well-mixed systems. Below 10 degrees Celsius, the reaction slows significantly, and longer contact times or higher excess factors may be required. Above 80 degrees Celsius, the triazine itself can begin to undergo thermal hydrolysis, releasing formaldehyde and reducing its scavenging capacity.

pH: The active scavenging species is the bisulfide ion (HS-), which is the predominant form of dissolved H2S at pH values above approximately 7. At low pH (below 6), most dissolved sulfide exists as molecular H2S rather than HS-, and the reaction rate with triazine decreases. Triazine scavengers perform best in the pH range of 7-10. The reaction itself releases monoethanolamine, which is mildly basic, so the pH of the system tends to rise as scavenging proceeds. In acidic systems (pH below 6), the triazine ring can also undergo acid-catalysed hydrolysis, which degrades the scavenger before it can react with H2S. If your system pH is consistently below 6, pH adjustment or an alternative scavenger chemistry may be required.

Understanding these kinetic factors allows operators to predict scavenger performance across different operating conditions and adjust dosing strategies accordingly. Our technical team can model expected scavenger consumption for your specific temperature, pH, and H2S profile.`,
      },
    ],
    faqs: [
      {
        question: "What is the CAS number for MEA Triazine?",
        answer:
          "The CAS number for hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine (MEA Triazine) is 4719-04-4. This is the internationally recognised Chemical Abstracts Service registry number used for regulatory, safety, and procurement purposes.",
      },
      {
        question: "Is the triazine-H2S reaction reversible?",
        answer:
          "No. The reaction between MEA Triazine and H2S is irreversible under normal operating conditions. Once H2S reacts with the triazine ring, it is permanently bound in the dithiazine product and cannot be released. This is a key advantage for safety — there is no risk of H2S re-release from spent scavenger under normal conditions.",
      },
      {
        question: "What by-products does the triazine-H2S reaction produce?",
        answer:
          "The primary reaction by-products are dithiazine (water-soluble, non-toxic) and monoethanolamine (MEA). In high-loading conditions, trithiane can also form. All by-products are water-soluble and non-hazardous at typical concentrations encountered in oilfield produced water. The released MEA is mildly alkaline and biodegradable.",
      },
      {
        question: "Why does MEA Triazine have a slight formaldehyde odour?",
        answer:
          "MEA Triazine is synthesised from monoethanolamine and formaldehyde. A small amount of free formaldehyde (typically less than 1% in fresh product) remains in equilibrium with the triazine ring. This is normal and does not indicate product degradation. A strong formaldehyde odour, however, may indicate that the product has begun to hydrolyse — check the shelf life and storage conditions.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "MEA Triazine vs MMA Triazine", href: "/mea-triazine-vs-mma-triazine" },
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },
};

export const RESOURCE_SLUGS: string[] = Object.keys(RESOURCE_ARTICLES_DATA);
