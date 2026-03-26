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

  "h2s-scavenger-selection-guide": {
    slug: "h2s-scavenger-selection-guide",
    title: "H2S Scavenger Selection Guide",
    description:
      "Practical guide to selecting the right H2S scavenger for gas, liquids, tanks, offshore systems, and biogas service. Compare triazine, glyoxal, iron sponge, and hybrid treatment strategies.",
    keywords: [
      "H2S scavenger selection guide",
      "choose H2S scavenger",
      "triazine vs glyoxal vs iron sponge",
      "liquid vs solid H2S scavenger",
      "H2S removal technology selection",
      "best H2S scavenger for gas treating",
      "H2S scavenger buying guide",
    ],
    category: "Product Knowledge",
    h1: "H2S Scavenger Selection Guide for Oil, Gas, Biogas, and Tank Applications",
    intro:
      "Selecting an H2S scavenger is less about picking a brand and more about matching chemistry to the stream, the equipment, and the operating risk. This guide shows how experienced operators choose between liquid scavengers such as MEA Triazine, non-triazine liquid options such as glyoxal, and fixed-bed media such as iron sponge.",
    publishedDate: "2026-03-26",
    sections: [
      {
        heading: "Step 1: Define the Actual Duty",
        id: "define-duty",
        body: `Start by defining where H2S is located and what must be protected. Gas gathering lines, crude tank vapor space, produced water, offshore separators, and biogas polishing each create different treating requirements.

The main selection variables are H2S mass load, flow variability, available contact time, temperature, water content, footprint, and the consequence of breakthrough. If the stream is highly variable or an off-spec event is expensive, response speed becomes a major selection factor.`,
      },
      {
        heading: "Step 2: Choose Between Liquid and Solid Treatment Models",
        id: "liquid-vs-solid",
        body: `Liquid scavengers are usually preferred when operators want compact equipment, rapid deployment, or the ability to adjust treatment rates quickly. MEA Triazine is the most common example because it is easy to pump, well understood in the field, and effective across many oil and gas duties.

Solid media such as iron sponge fit best where gas flow is steady, H2S levels are relatively modest, and the site can accommodate a vessel plus media change-out. The tradeoff is that fixed beds add footprint, pressure drop, shutdown planning, and spent-media handling.`,
      },
      {
        heading: "Step 3: Match the Chemistry to the Application",
        id: "match-chemistry-application",
        body: `MEA Triazine is usually the best fit for gathering systems, offshore skids, contact towers, amine backup treatment, and many tank or pipeline applications. Glyoxal is more often selected when an operator wants a non-triazine liquid option or has a specific downstream compatibility reason to avoid triazine by-products.

Iron sponge remains useful in low-flow, steady gas service. Biogas plants sometimes use any of these options depending on outlet specification, staffing, and whether the plant values compact retrofit speed or lower reagent cost at larger footprint.`,
      },
      {
        heading: "Step 4: Evaluate Total Operating Risk",
        id: "evaluate-risk",
        body: `The correct choice is rarely the lowest nominal unit price. You also need to consider labor, inventory, waste handling, solids risk, safety exposure, and how hard the system is to recover after an upset.

In many field programs, a more flexible chemistry wins because it reduces off-spec events and operator intervention. In others, a hybrid approach is best: bulk removal with a vessel or primary system, followed by liquid scavenger trim treatment for excursions and polishing.`,
      },
      {
        heading: "Step 5: Validate With Monitoring and Supply Planning",
        id: "validate-selection",
        body: `No selection is complete until it is connected to outlet monitoring, dosing logic, and realistic supply planning. The best scavenger on paper will still disappoint if the site cannot replenish it on time or verify whether it is actually working.

For that reason, final selection should include delivery format, documentation, batch consistency, spare equipment, and the field team's ability to operate the chosen treatment method with confidence.`,
      },
    ],
    faqs: [
      {
        question: "What is the best H2S scavenger for most oil and gas applications?",
        answer:
          "For many compact and variable field applications, MEA Triazine is the best overall fit because it is easy to inject, reacts quickly, and is well proven in gathering systems, tanks, offshore service, and trim-treatment duty. The best choice still depends on the stream and site constraints.",
      },
      {
        question: "When should I choose iron sponge instead of triazine?",
        answer:
          "Iron sponge is often chosen for steady, lower-flow gas streams where a fixed bed is acceptable and the site can manage media replacement safely. It becomes less attractive when flow or H2S load is highly variable, footprint is limited, or shutdowns are costly.",
      },
      {
        question: "Where does glyoxal fit in H2S scavenger selection?",
        answer:
          "Glyoxal is typically a niche liquid option used when the operator wants a non-triazine chemistry or has a downstream compatibility issue that makes triazine less attractive. It can work well, but selection should be based on a specific process reason rather than treated as a universal substitute.",
      },
      {
        question: "Can one site use more than one H2S scavenging technology?",
        answer:
          "Yes. Many sites use hybrid strategies, such as bulk removal with a primary system and liquid scavenger trim treatment for upset control, polishing, or backup duty. Hybrid designs are common when uptime and specification control matter more than optimizing around a single technology.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "MEA Triazine vs Iron Sponge", href: "/resources/mea-triazine-vs-iron-sponge" },
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 7. Technical Datasheet                                        */
  /* ────────────────────────────────────────────────────────────── */
  "mea-triazine-technical-datasheet": {
    slug: "mea-triazine-technical-datasheet",
    title: "MEA Triazine 78% Technical Datasheet",
    description:
      "Download the full MEA Triazine 78% technical datasheet. Covers product specifications, physical properties, packaging options, storage guidelines, and quality certifications from Vasudev Chemo Pharma.",
    keywords: [
      "MEA Triazine technical datasheet",
      "MEA Triazine 78 TDS",
      "MEA Triazine specifications",
      "H2S scavenger datasheet",
      "triazine 78 product data",
      "MEA Triazine CAS 4719-04-4 datasheet",
      "H2S scavenger technical data sheet",
    ],
    category: "Technical Guide",
    h1: "MEA Triazine 78% Technical Datasheet — Product Specifications & Download",
    intro:
      "This technical datasheet provides the complete product specifications for MEA Triazine 78% (CAS 4719-04-4) manufactured by Vasudev Chemo Pharma. Use it as your reference for procurement, quality verification, and field deployment planning.",
    publishedDate: "2026-03-26",
    sections: [
      {
        heading: "Product Identity",
        id: "product-identity",
        body: `Chemical name: 1,3,5-Tris(2-hydroxyethyl)hexahydro-s-triazine
CAS Number: 4719-04-4
Trade name: MEA Triazine 78% H2S Scavenger
Manufacturer: Vasudev Chemo Pharma, Gujarat, India
Primary function: Hydrogen sulfide scavenging in oil & gas, refining, biogas, water treatment, and industrial applications`,
      },
      {
        heading: "Physical and Chemical Properties",
        id: "physical-chemical-properties",
        body: `Appearance: Clear to slightly yellow liquid
Active content: 78% (w/w) minimum
Density: 1.08 ± 0.02 kg/L at 25 °C
pH: 9.5–11.0 (neat)
Viscosity: 15–25 cP at 25 °C
Flash point: > 100 °C (closed cup)
Freezing point: approximately −5 °C
Water solubility: Fully miscible
Odour: Mild amine (slight formaldehyde trace)

The 78% active concentration is the highest commercially stable concentration of MEA Triazine. It delivers maximum scavenging capacity per litre, reducing transport volume and chemical consumption compared to lower-concentration alternatives (40–50%).`,
      },
      {
        heading: "Packaging and Delivery Options",
        id: "packaging-delivery",
        body: `Vasudev Chemo Pharma supplies MEA Triazine 78% in the following packaging formats:

200 L HDPE drums (net weight approximately 216 kg per drum)
1000 L IBC totes (net weight approximately 1080 kg per IBC)
Bulk ISO tank containers (20–24 MT per container)
Flexitanks for cost-effective bulk ocean freight

All packaging is UN-rated for safe international transport. Custom packaging and labelling are available for OEM and private-label customers. Deliveries are available FOB, CIF, and DDP to major ports worldwide.`,
      },
      {
        heading: "Storage and Shelf Life",
        id: "storage-shelf-life",
        body: `Store MEA Triazine 78% in a cool, dry, well-ventilated area away from direct sunlight and heat sources. Keep containers sealed when not in use. Recommended storage temperature is 10–35 °C. Avoid prolonged storage below 0 °C to prevent crystallisation.

Shelf life is 12 months from date of manufacture when stored under recommended conditions in original sealed packaging. Product integrity should be verified by active content analysis if stored beyond 12 months.

Material compatibility: HDPE, polypropylene, stainless steel (304/316), and carbon steel are suitable. Avoid copper, brass, aluminium, and zinc due to potential amine-metal reactions.`,
      },
      {
        heading: "Quality Certifications and Documentation",
        id: "quality-certifications",
        body: `Every shipment from Vasudev Chemo Pharma includes:

Certificate of Analysis (COA) with batch-specific active content, density, and pH
Technical Data Sheet (TDS) — this document
Material Safety Data Sheet (MSDS) / Safety Data Sheet (SDS) in GHS format
Customs and export documentation as required by destination country

Manufacturing facility is ISO 9001:2015 aligned. Product is manufactured under consistent batch conditions with in-process quality controls and final release testing.`,
      },
    ],
    faqs: [
      {
        question: "What is the active concentration of Vasudev MEA Triazine?",
        answer:
          "Our MEA Triazine is manufactured at 78% active content (w/w), which is the highest stable commercial concentration. This means more scavenging capacity per litre compared to 40–50% products commonly available.",
      },
      {
        question: "What documentation is included with each shipment?",
        answer:
          "Every shipment includes a batch-specific Certificate of Analysis (COA), Technical Data Sheet (TDS), and Safety Data Sheet (SDS/MSDS). We also provide customs documentation, packing lists, and any additional certificates required by the destination country.",
      },
      {
        question: "What is the minimum order quantity for export?",
        answer:
          "The minimum order quantity for international shipments is 1 metric tonne (approximately 5 drums of 200 L each). For domestic orders within India, the minimum is 220 kg (one drum).",
      },
      {
        question: "Can Vasudev provide private-label or OEM packaging?",
        answer:
          "Yes. We offer private-label and OEM packaging for chemical distributors, service companies, and industrial buyers. Contact our sales team to discuss custom labelling, packaging formats, and branding requirements.",
      },
      {
        question: "How should I verify product quality on arrival?",
        answer:
          "Check the COA against your purchase specification. For field verification, measure density (should be 1.08 ± 0.02 kg/L) and pH (should be 9.5–11.0). If active content testing is required, we can recommend suitable analytical methods.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Dosing Calculator & Guidelines", href: "/resources/mea-triazine-dosing-guidelines" },
      { text: "Safety Data Sheet", href: "/resources/mea-triazine-safety-data-sheet" },
      { text: "Contact for Quote", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 8. Safety Data Sheet                                          */
  /* ────────────────────────────────────────────────────────────── */
  "mea-triazine-safety-data-sheet": {
    slug: "mea-triazine-safety-data-sheet",
    title: "MEA Triazine 78% Safety Data Sheet (SDS)",
    description:
      "Access the MEA Triazine 78% Safety Data Sheet. Covers hazard identification, first aid, handling and storage, exposure controls, and regulatory information for safe H2S scavenger use.",
    keywords: [
      "MEA Triazine safety data sheet",
      "MEA Triazine SDS",
      "MEA Triazine MSDS",
      "H2S scavenger safety",
      "triazine 78 SDS",
      "CAS 4719-04-4 safety data",
      "MEA Triazine hazard classification",
    ],
    category: "Safety",
    h1: "MEA Triazine 78% Safety Data Sheet (SDS) — Hazards, Handling & Compliance",
    intro:
      "This safety data sheet summarises the key hazard, handling, storage, and regulatory information for MEA Triazine 78% (CAS 4719-04-4). Use it alongside the manufacturer-issued SDS included with every shipment from Vasudev Chemo Pharma.",
    publishedDate: "2026-03-26",
    sections: [
      {
        heading: "Hazard Identification",
        id: "hazard-identification",
        body: `MEA Triazine 78% is classified under the Globally Harmonized System (GHS) as:

Skin irritation — Category 2 (H315: Causes skin irritation)
Serious eye damage — Category 1 (H318: Causes serious eye damage)
Specific target organ toxicity, single exposure — Category 3 (H335: May cause respiratory irritation)

The product contains residual free formaldehyde (typically < 1%). Formaldehyde is classified as a suspected carcinogen (Category 1B) and skin sensitiser. Exposure to formaldehyde vapour should be minimised through proper ventilation and PPE use.

Signal word: DANGER
Hazard statements: H315, H318, H335
Precautionary statements: P261, P264, P271, P280, P302+P352, P305+P351+P338, P332+P313, P337+P313, P362+P364`,
      },
      {
        heading: "First Aid Measures",
        id: "first-aid",
        body: `Inhalation: Move the person to fresh air. If breathing is difficult, provide oxygen. If respiratory irritation persists, seek medical attention.

Skin contact: Remove contaminated clothing immediately. Wash affected skin with plenty of water and mild soap for at least 15 minutes. If irritation develops or persists, seek medical attention.

Eye contact: Rinse cautiously with water for at least 15 minutes. Remove contact lenses if present and easy to do. Continue rinsing. Seek immediate medical attention — MEA Triazine can cause serious eye damage.

Ingestion: Rinse mouth with water. Do not induce vomiting. Seek medical attention immediately. Provide the SDS to medical personnel.`,
      },
      {
        heading: "Handling and Storage Precautions",
        id: "handling-storage",
        body: `Handling: Use only in well-ventilated areas or with local exhaust ventilation. Avoid breathing vapours or mist. Wear appropriate PPE (chemical splash goggles, nitrile gloves, chemical-resistant clothing). Avoid contact with skin and eyes. Wash hands thoroughly after handling.

Storage: Store in original sealed containers in a cool, dry, well-ventilated area. Keep away from direct sunlight and heat sources (recommended 10–35 °C). Keep containers tightly closed when not in use. Do not store with strong oxidisers or acids. Ensure secondary containment is in place to manage potential spills.

Incompatible materials: Strong acids, strong oxidisers, copper, brass, aluminium, and zinc.`,
      },
      {
        heading: "Exposure Controls and Personal Protection",
        id: "exposure-controls",
        body: `Occupational exposure limits:
Formaldehyde (residual): OSHA PEL 0.75 ppm (TWA), 2 ppm (STEL)
MEA Triazine: No specific OEL established — apply good industrial hygiene practice

Engineering controls: Use local exhaust ventilation at mixing and injection points. Enclosed systems are preferred for continuous dosing operations. Ensure adequate general ventilation in storage and handling areas.

Personal protective equipment:
Eye protection — Chemical splash goggles or full-face shield
Hand protection — Nitrile or neoprene chemical-resistant gloves
Body protection — Chemical-resistant clothing or coveralls
Respiratory protection — If ventilation is insufficient, use an organic vapour respirator (e.g. half-face with formaldehyde cartridge)`,
      },
      {
        heading: "Regulatory and Transport Information",
        id: "regulatory-transport",
        body: `UN Number: Not classified as dangerous goods for transport under standard conditions. Some jurisdictions may classify based on formaldehyde content — check local regulations.

REACH: The substance is pre-registered under REACH (EC 1907/2006).
TSCA: Listed on the US Toxic Substances Control Act Inventory.
DSL: Listed on the Canadian Domestic Substances List.

Export documentation: Vasudev Chemo Pharma provides all required export safety documentation including GHS-compliant SDS in the language of the destination country, dangerous goods declarations where required, and customs classification support.

Waste disposal: Spent MEA Triazine solution (containing dithiazine reaction products) is generally non-hazardous and can be disposed of through standard industrial wastewater treatment. Check local regulations for specific disposal requirements.`,
      },
    ],
    faqs: [
      {
        question: "Is MEA Triazine 78% classified as a dangerous good for shipping?",
        answer:
          "Under most international transport regulations, MEA Triazine 78% is not classified as a dangerous good. However, some jurisdictions may apply additional requirements based on the residual formaldehyde content. We provide all necessary shipping documentation for your destination.",
      },
      {
        question: "What PPE is required when handling MEA Triazine?",
        answer:
          "At minimum, wear chemical splash goggles, nitrile gloves, and chemical-resistant clothing. If handling in poorly ventilated areas or during open mixing, add respiratory protection with an organic vapour cartridge.",
      },
      {
        question: "What should I do if MEA Triazine contacts my eyes?",
        answer:
          "Rinse immediately with clean water for at least 15 minutes, removing contact lenses if present. MEA Triazine can cause serious eye damage — seek medical attention promptly even if symptoms seem mild initially.",
      },
      {
        question: "How should spent MEA Triazine solution be disposed of?",
        answer:
          "Spent solution containing dithiazine reaction products is generally non-hazardous and can be treated through standard industrial wastewater systems. Always check local environmental regulations for specific disposal requirements in your jurisdiction.",
      },
      {
        question: "Does Vasudev provide SDS in local languages?",
        answer:
          "Yes. We provide GHS-compliant Safety Data Sheets in the official language of the destination country as part of our standard export documentation package.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "Technical Datasheet", href: "/resources/mea-triazine-technical-datasheet" },
      { text: "Import Compliance Guide", href: "/resources/import-compliance-guide" },
      { text: "Storage & Handling Guide", href: "/resources/mea-triazine-storage-handling" },
      { text: "Request Custom Documentation", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 9. H2S Scavenger Dosing Guide                                 */
  /* ────────────────────────────────────────────────────────────── */
  "h2s-scavenger-dosing-guide": {
    slug: "h2s-scavenger-dosing-guide",
    title: "H2S Scavenger Dosing Guide — Calculation & Field Reference",
    description:
      "Complete H2S scavenger dosing guide covering dosing calculations, injection methods, contact tower sizing, field optimisation, and troubleshooting for MEA Triazine 78% applications.",
    keywords: [
      "H2S scavenger dosing guide",
      "MEA Triazine dosing calculation",
      "H2S scavenger injection rate",
      "triazine contact tower dosing",
      "H2S removal dosing chart",
      "scavenger dosing optimisation",
      "H2S scavenger field guide",
    ],
    category: "Technical Guide",
    h1: "H2S Scavenger Dosing Guide — Calculations, Injection Methods & Field Optimisation",
    intro:
      "This dosing guide provides the practical calculations and field reference information you need to design and operate an MEA Triazine 78% H2S scavenging programme. It covers dosing from first principles through to field optimisation and troubleshooting.",
    publishedDate: "2026-03-26",
    sections: [
      {
        heading: "Dosing Fundamentals",
        id: "dosing-fundamentals",
        body: `MEA Triazine reacts with H2S at a theoretical stoichiometry of 1 mole triazine to 3 moles H2S. At 78% active content and 1.08 kg/L density, the theoretical minimum consumption is approximately 2.6 litres of MEA Triazine 78% per kilogram of H2S removed.

In field conditions, expect practical consumption of 3.2–5.0 L/kg H2S in well-designed systems with good gas-liquid contact, and 5–10 L/kg in less favourable conditions such as direct pipeline injection without a contact vessel.

The key variables that affect dosing efficiency are: H2S concentration and mass loading, gas or liquid flow rate, system temperature, contact time and mixing quality, water availability in the system, and competing reactions with CO2 or organic acids.`,
      },
      {
        heading: "Step-by-Step Dosing Calculation",
        id: "dosing-calculation",
        body: `Step 1 — Determine H2S mass load:
Calculate the total mass of H2S entering your system per hour. For gas systems: H2S load (kg/hr) = gas flow rate (Nm³/hr) × H2S concentration (mg/Nm³) ÷ 1,000,000. For liquid systems: H2S load (kg/hr) = liquid flow rate (m³/hr) × H2S concentration (mg/L) ÷ 1,000.

Step 2 — Select a consumption factor:
Use 3.2 L/kg for contact tower systems with good mixing. Use 4.5 L/kg for inline injection with a static mixer. Use 6–8 L/kg for direct pipeline injection without a mixer. Use 8–10 L/kg for batch treatment of tanks or low-contact systems.

Step 3 — Calculate hourly dosing rate:
Dose rate (L/hr) = H2S load (kg/hr) × consumption factor (L/kg).

Step 4 — Size the dosing pump:
Select a chemical metering pump rated for at least 1.5x the calculated dose rate to allow for turndown and H2S variability. Ensure the pump materials are compatible with MEA Triazine (stainless steel or PTFE wetted parts recommended).`,
      },
      {
        heading: "Contact Tower and Injection Design",
        id: "contact-tower-design",
        body: `Contact towers deliver the best chemical efficiency because they maximise gas-liquid contact time and surface area. A well-designed contact tower can achieve near-stoichiometric consumption (2.6–3.5 L/kg).

Tower sizing guidelines: Minimum gas residence time of 15–30 seconds in the packed section. Liquid circulation rate sufficient to keep packing wetted — typically 2–5 L/min/m² of tower cross-section. Packing height of 1.5–3 metres depending on H2S loading and target outlet specification.

For inline injection (no tower), install a static mixer downstream of the injection point to improve dispersion. Minimum pipe length of 10–15 pipe diameters after the mixer is recommended for adequate reaction time. Injection quills should be oriented to spray into the gas or liquid flow, not against the pipe wall.`,
      },
      {
        heading: "Monitoring and Field Optimisation",
        id: "field-optimisation",
        body: `Effective field optimisation requires regular monitoring of inlet and outlet H2S concentrations, chemical consumption rates, and system operating conditions.

Key monitoring points: Measure H2S at the inlet and outlet of the treatment system. Track litres of MEA Triazine consumed per kilogram of H2S removed — this is your primary efficiency metric. Log operating temperature, flow rate, and any changes in H2S loading.

Optimisation actions: If consumption is above expected range, check for poor mixing, low temperature, or competing reactions. If outlet H2S is consistently well below target, reduce the dose rate — you may be over-treating. If you observe solids formation, reduce the dose rate and check temperature (solids risk increases below 15 °C and with overdosing).

Our technical team provides dosing optimisation support for customers purchasing MEA Triazine 78% from Vasudev Chemo Pharma.`,
      },
      {
        heading: "Dosing Quick-Reference Table",
        id: "dosing-reference-table",
        body: `Application type — Consumption factor — Typical dose range:

Contact tower (gas treating): 3.0–3.5 L/kg H2S — 50–500 L/hr depending on gas volume
Inline injection with static mixer: 4.0–5.0 L/kg H2S — 20–200 L/hr
Direct pipeline injection: 6.0–8.0 L/kg H2S — 10–150 L/hr
Batch tank treatment: 8.0–10.0 L/kg H2S — volume-based calculation
Produced water treatment: 5.0–7.0 L/kg H2S — proportional to water flow

These are starting estimates. Actual consumption should be verified in the field and optimised based on monitoring data. Vasudev Chemo Pharma's technical team can assist with site-specific dosing calculations.`,
      },
    ],
    faqs: [
      {
        question: "What is the typical dosing rate for MEA Triazine 78% in a gas contact tower?",
        answer:
          "In a well-designed gas contact tower, expect consumption of 3.0–3.5 litres of MEA Triazine 78% per kilogram of H2S removed. The exact rate depends on gas flow, H2S concentration, temperature, and tower design.",
      },
      {
        question: "How do I calculate MEA Triazine dosing for my specific system?",
        answer:
          "Start by calculating your H2S mass load in kg/hr, then multiply by the appropriate consumption factor for your system type (3.2 L/kg for towers, 4.5 L/kg for inline, 6–8 L/kg for direct injection). Our technical team can help with site-specific calculations.",
      },
      {
        question: "What pump do I need for MEA Triazine injection?",
        answer:
          "Use a chemical metering pump (diaphragm or plunger type) with stainless steel or PTFE wetted parts. Size it for at least 1.5x your calculated maximum dose rate to allow for flow variability and turndown.",
      },
      {
        question: "Can I use this guide for dosing other H2S scavengers?",
        answer:
          "The principles of dosing calculation apply broadly, but the consumption factors in this guide are specific to MEA Triazine 78%. Other scavenger chemistries (glyoxal, iron sponge, MMA Triazine) have different reaction stoichiometry and efficiency profiles.",
      },
      {
        question: "How often should I adjust my dosing rate?",
        answer:
          "Monitor outlet H2S continuously or at least every shift. Adjust dosing when H2S loading changes (production rate changes, new wells, seasonal variation) or when your consumption efficiency metric drifts outside the expected range.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "Gas Sweetening Applications", href: "/applications/gas-sweetening" },
      { text: "Solids Formation: Causes & Prevention", href: "/resources/h2s-scavenger-solids-formation" },
      { text: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
      { text: "Contact Technical Team", href: "/contact" },
    ],
  },

  /* ────────────────────────────────────────────────────────────── */
  /* 10. Import Compliance Guide                                   */
  /* ────────────────────────────────────────────────────────────── */
  "import-compliance-guide": {
    slug: "import-compliance-guide",
    title: "MEA Triazine Import Compliance Guide — Country-Specific Requirements",
    description:
      "Practical import compliance guide for MEA Triazine 78% covering HS codes, documentation, customs requirements, and regulatory frameworks for major importing countries.",
    keywords: [
      "MEA Triazine import compliance",
      "H2S scavenger import requirements",
      "triazine customs documentation",
      "MEA Triazine HS code",
      "chemical import regulations",
      "MEA Triazine export documentation",
      "H2S scavenger import guide",
    ],
    category: "Product Knowledge",
    h1: "MEA Triazine Import Compliance Guide — Documentation, HS Codes & Country Requirements",
    intro:
      "Importing MEA Triazine 78% requires the right documentation, HS classification, and an understanding of destination-country regulations. This guide covers the compliance essentials for major importing markets so you can plan procurement with confidence.",
    publishedDate: "2026-03-26",
    sections: [
      {
        heading: "HS Code Classification",
        id: "hs-code",
        body: `MEA Triazine (1,3,5-tris(2-hydroxyethyl)hexahydro-s-triazine, CAS 4719-04-4) is typically classified under HS Code 2933.69 — other compounds containing an unfused triazine ring in the structure. Some countries may also accept classification under 3824.99 (chemical preparations not elsewhere specified) depending on end-use declarations.

The correct HS code affects duty rates, import licensing requirements, and regulatory classification. Vasudev Chemo Pharma provides the appropriate HS code recommendation for each destination country as part of our standard export documentation.

Always confirm the HS classification with your customs broker before the first shipment to a new destination. We can provide supporting documentation including chemical composition certificates and end-use declarations to assist with customs classification.`,
      },
      {
        heading: "Standard Export Documentation",
        id: "export-documentation",
        body: `Every shipment from Vasudev Chemo Pharma includes the following documentation package:

Commercial Invoice with full product description, quantity, value, and Incoterms
Packing List with container, drum/IBC count, and gross/net weights
Certificate of Analysis (COA) with batch-specific test results
Technical Data Sheet (TDS)
Safety Data Sheet (SDS/MSDS) in GHS format and destination-country language
Certificate of Origin (COO) — preferably issued by the Indian Chamber of Commerce
Bill of Lading or Airway Bill

Additional documents available on request: Phytosanitary certificate, fumigation certificate, dangerous goods declaration (where applicable), and pre-shipment inspection certificates (SGS, Bureau Veritas, Intertek).`,
      },
      {
        heading: "GCC and Middle East Import Requirements",
        id: "gcc-middle-east",
        body: `The Gulf Cooperation Council countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain) and broader Middle East markets (Iraq, Iran, Jordan, Egypt) represent major demand centres for MEA Triazine due to extensive oil and gas operations.

Common requirements across the GCC: SASO/GSO conformity for Saudi Arabia, ESMA registration for UAE, Qatar QS mark or pre-clearance for chemicals, and Kuwait KUCAS or PAI approval depending on the product classification.

Import documentation typically requires: COA, SDS in Arabic and English, certificate of origin, and in some cases a pre-shipment inspection certificate. Halal certification is not applicable for industrial chemicals but some buyers request it for supply chain compliance.

Transit and logistics: Vasudev Chemo Pharma ships regularly to Jebel Ali (UAE), Hamad Port (Qatar), Shuwaikh (Kuwait), Sohar (Oman), and Jeddah/Jubail (Saudi Arabia) with established freight forwarding relationships.`,
      },
      {
        heading: "Americas Import Requirements",
        id: "americas",
        body: `United States: MEA Triazine is listed on the TSCA Inventory. No import permit is required for industrial use. The importer of record must ensure compliance with EPA TSCA reporting requirements and OSHA hazard communication standards. An SDS conforming to OSHA HCS 2012 (GHS-aligned) is required.

Brazil: ANVISA registration is required for chemical products used in certain applications. For oilfield chemicals, ANP (Agência Nacional do Petróleo) may require additional documentation. Import duties are applied based on NCM classification (Brazilian Mercosur tariff code). A licença de importação (import licence) may be needed depending on the product classification.

Both markets require clear end-use documentation. Vasudev Chemo Pharma provides all necessary supporting documentation for US and Brazilian customs clearance.`,
      },
      {
        heading: "Asia-Pacific Import Requirements",
        id: "asia-pacific",
        body: `Vietnam: Chemical import requires registration with the Ministry of Industry and Trade (MOIT) chemical inventory. An SDS in Vietnamese is recommended. Import duties are based on HS code classification and any applicable ASEAN trade agreements with India.

Thailand: The Department of Industrial Works (DIW) regulates chemical imports. A chemical import notification is required. Thailand has specific labelling requirements in Thai language for hazardous chemicals. GHS-compliant SDS in Thai is recommended.

Both countries benefit from reduced duty rates under regional trade agreements. Vasudev Chemo Pharma has experience shipping to Hai Phong (Vietnam) and Laem Chabang (Thailand) with full compliance documentation.`,
      },
    ],
    faqs: [
      {
        question: "What HS code is used for MEA Triazine 78%?",
        answer:
          "MEA Triazine is typically classified under HS 2933.69 (triazine ring compounds). Some countries may accept 3824.99 (chemical preparations NES). We provide destination-specific HS code guidance with every quotation.",
      },
      {
        question: "Does Vasudev handle export documentation?",
        answer:
          "Yes. We provide the complete documentation package including commercial invoice, COA, TDS, SDS (in destination language), certificate of origin, and any additional certificates required by your country. We work with your freight forwarder to ensure smooth customs clearance.",
      },
      {
        question: "Do I need an import licence for MEA Triazine?",
        answer:
          "This depends on your country. In the US, no import permit is required for industrial-use MEA Triazine. In Brazil, a licença de importação may be needed. GCC countries have varying requirements. Contact us with your destination and we will advise on specific requirements.",
      },
      {
        question: "Can Vasudev supply to countries not listed in this guide?",
        answer:
          "Yes. We export to over 25 countries worldwide. If your destination is not covered here, contact our export team and we will provide country-specific compliance guidance and documentation.",
      },
      {
        question: "How long does customs clearance typically take?",
        answer:
          "With proper documentation, customs clearance typically takes 2–5 business days in most markets. Delays usually occur when documentation is incomplete or HS codes are disputed. Our export team works proactively to prevent clearance issues.",
      },
    ],
    relatedLinks: [
      { text: "MEA Triazine 78% Product Page", href: "/product" },
      { text: "Technical Datasheet", href: "/resources/mea-triazine-technical-datasheet" },
      { text: "Safety Data Sheet", href: "/resources/mea-triazine-safety-data-sheet" },
      { text: "MEA Triazine Supply to UAE", href: "/supply/mea-triazine-78/uae" },
      { text: "Contact Export Team", href: "/contact" },
    ],
  },
};

export const RESOURCE_SLUGS: string[] = Object.keys(RESOURCE_ARTICLES_DATA);
