type FAQItem = {
  question: string;
  answer: string;
};

/**
 * Fallback FAQs for product pages that have none stored in the CMS yet.
 * These are used to populate the FAQPage JSON-LD schema on the page.
 * Once FAQs are added to the CMS, the CMS values will take over automatically.
 */

export const MEA_TRIAZINE_FALLBACK_FAQS: FAQItem[] = [
  {
    question: "What is MEA Triazine used for?",
    answer:
      "MEA Triazine 78% is primarily used as an H2S Scavenger in oil and gas pipelines, gas processing plants, and refineries. It is also used as a biocide in water treatment, paper mills, and metal working fluids.",
  },
  {
    question: "What is the CAS number for MEA Triazine?",
    answer:
      "The CAS number for MEA Triazine (Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine) is 4719-04-4.",
  },
  {
    question: "What is the minimum order quantity for MEA Triazine?",
    answer:
      "For export orders, the minimum order quantity is 1 MT. For domestic (India) orders, the minimum order quantity is 220 Kg (1 drum).",
  },
  {
    question: "Do you offer free samples of MEA Triazine?",
    answer:
      "Yes, Vasudev Chemo Pharma offers free samples to qualified buyers. Contact us via our website or WhatsApp to request a sample along with our TDS and MSDS.",
  },
  {
    question: "What concentrations of MEA Triazine do you supply?",
    answer:
      "We manufacture and supply MEA Triazine in 78%, 60%, 50%, and 40% concentrations. The 78% concentration is the most commonly used for H2S scavenging in oil and gas applications.",
  },
  {
    question: "What countries do you export MEA Triazine to?",
    answer:
      "We currently export to UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Brazil, USA, Vietnam, Thailand, Türkiye, and Russia. We can supply to any country with appropriate export documentation.",
  },
];

export const MMA_TRIAZINE_FALLBACK_FAQS: FAQItem[] = [
  {
    question: "What is MMA Triazine 40% used for?",
    answer:
      "MMA Triazine 40% is used as an H2S scavenger in oil and gas applications, a biocide in water treatment systems, and a preservative in paper mill and industrial fluid applications where a BTX-free formulation is required.",
  },
  {
    question: "What is the difference between MEA Triazine and MMA Triazine?",
    answer:
      "MEA Triazine is based on monoethanolamine and is available at up to 78% concentration, offering fast H2S removal. MMA Triazine is based on monomethylamine and has a lower solids-formation risk, making it preferred where higher temperatures or pressures are involved.",
  },
  {
    question: "What is the minimum order quantity for MMA Triazine 40%?",
    answer:
      "For export orders, the minimum order quantity is 1 MT. For domestic (India) orders, the minimum order quantity is 220 Kg (1 drum). Contact us for bulk pricing.",
  },
  {
    question: "Do you provide a TDS and MSDS for MMA Triazine 40%?",
    answer:
      "Yes. Our Technical Data Sheet (TDS) and Material Safety Data Sheet (MSDS/SDS) are available on request. You can download the MSDS directly from this product page or contact us for the TDS.",
  },
];

export const PRODUCT_FALLBACK_FAQS: Record<string, FAQItem[]> = {
  "mea-triazine-78-h2s-scavenger": MEA_TRIAZINE_FALLBACK_FAQS,
  "mma-triazine-40": MMA_TRIAZINE_FALLBACK_FAQS,
};
