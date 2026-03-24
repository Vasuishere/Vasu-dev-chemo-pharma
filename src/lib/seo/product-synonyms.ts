export type SynonymGroup = {
  heading: string;
  items: string[];
};

export type ProductSynonyms = {
  intro: string;
  groups: SynonymGroup[];
  casNote?: string;
  closingText: string;
};

export const MEA_TRIAZINE_SYNONYMS: ProductSynonyms = {
  intro:
    "MEA Triazine 78% is known by many chemical names, IUPAC names, and trade names. Our product is the same compound regardless of the name your specification uses:",
  groups: [
    {
      heading: "IUPAC and Chemical Names",
      items: [
        "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine",
        "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
        "2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol",
        "2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol",
        "TRIS(N-HYDROXYETHYL) HEXAHYDROTRIAZINE",
        "HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-S-TRIAZINE",
        "1,3,5-Tris(2-hydroxyethyl)hexahydro-1,3,5-triazine",
        "Triazinetriethanol",
        "HHT (Hexahydrotriazine Triethanol)",
      ],
    },
    {
      heading: "Trade Names and Brand Equivalents",
      items: [
        "Grotan BK (equivalent)",
        "J2.219E",
        "MEA based Triazine",
        "MEA Triazine",
        "1,3,5-Triazine",
      ],
    },
    {
      heading: "Application-Based Names",
      items: [
        "H2S Scavenger",
        "Hydrogen Sulfide Scavenger",
        "Mercaptan Scavenger",
        "Gas Sweetener / Sweetening Agent",
        "Desulfurizer",
        "Offshore H2S Scavenger",
        "Onshore H2S Scavenger",
        "Triazine H2S Scavenger",
        "Formaldehyde-Releasing Biocide",
        "Industrial Microbiocide / Microbiostat",
        "Slimicide",
        "Bactericide and Algicide",
        "Cutting Fluid Preservative",
        "Anti-mildew Agent",
        "Industrial Preservation Biocide",
      ],
    },
  ],
  casNote: "CAS: 4719-04-4",
  closingText:
    "If your specification, purchase order, or safety requirement lists any of the above names or the CAS number 4719-04-4, Vasudev Chemo Pharma can supply the matching product. Contact us for confirmation and TDS.",
};

export const MMA_TRIAZINE_SYNONYMS: ProductSynonyms = {
  intro:
    "MMA Triazine 40% may be listed under various names in technical specifications:",
  groups: [
    {
      heading: "Synonyms and Application Names",
      items: [
        "MMA Triazine",
        "MMA based Triazine",
        "1,3,5-Triazine (MMA variant)",
        "Monomethylamine Triazine",
        "H2S Scavenger (MMA type)",
        "Hydrogen Sulfide Scavenger",
        "Triazine biocide",
        "Industrial biocide for water treatment",
        "Formaldehyde condensate biocide",
      ],
    },
  ],
  closingText:
    "Contact us if your specification lists any of these names — we will confirm whether our MMA Triazine 40% matches your requirement.",
};
