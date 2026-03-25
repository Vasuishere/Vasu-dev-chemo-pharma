export type ProductDocument = {
  label: string;
  docType: "TDS" | "MSDS" | "SDS" | "COA";
  url: string;
};

/**
 * Hardcoded TDS / MSDS document URLs hosted on Vercel Blob storage.
 * Add entries here as new documents become available.
 * These supplement (not replace) documents stored in the CMS.
 */
export const PRODUCT_STATIC_DOCUMENTS: Record<string, ProductDocument[]> = {
  "mea-triazine-78-h2s-scavenger": [
    {
      label: "MEA Triazine 78% — Technical Data Sheet",
      docType: "TDS",
      url: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/Vasudec_Chemo_Pharma_MEA_Triazine_TDS.pdf",
    },
    {
      label: "MEA Triazine 78% — Safety Data Sheet (MSDS)",
      docType: "MSDS",
      url: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/Vasudec_Chemo_Pharma_MEA_Triazine_MSDS.pdf",
    },
  ],
  "mma-triazine-40": [
    {
      label: "MMA Triazine 40% — Safety Data Sheet (MSDS)",
      docType: "MSDS",
      url: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MMA%20Triazine/Vasudec_Chemo_Pharma_MMA_Triazine_MSDS.pdf",
    },
  ],
};
