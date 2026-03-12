// Product data model for VasuDev Chemo Pharma PDP

export type ProductCategory = "industrial" | "specialty" | "pharmaceutical";
export type ProductStatus = "active" | "inactive" | "discontinued";
export type DocumentType = "COA" | "TDS" | "MSDS" | "SDS" | "SPEC" | "OTHER";
export type DocumentAccess = "public" | "on-request" | "internal";

export interface ProductDocument {
  docType: DocumentType;
  fileUrl: string;
  fileName: string;
  accessLevel: DocumentAccess;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
  caption?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  // Identity
  id: number;
  name: string;
  slug: string;
  sku: string;
  formula: string;
  casNumber: string;
  category: ProductCategory;
  subcategory: string;

  // SEO
  metaTitle: string;
  metaDescription: string;

  // Content
  description: string;
  appearance: string;
  molecularWeight: string;
  hsCode: string;

  // Technical
  specs: Record<string, string>;

  // Safety & compliance
  safetyClass: string;
  ghsPictograms: string[];
  signalWord: string;
  hazardStatements: string[];
  documents: ProductDocument[];

  // Applications
  applications: string[];
  industries: string[];

  // Commercial
  price: number;
  priceUnit: string;
  currency: string;
  unitOfMeasure: string;
  grades: string[];
  packaging: string[];
  minOrderQuantity: string;
  originCountry: string;

  // Trust
  certifications: string[];
  supplier: string;

  // Media
  images: ProductImage[];

  // Status
  status: ProductStatus;

  // FAQ
  faqs: ProductFAQ[];
}

/** Category display labels */
export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  industrial: "Industrial Chemicals",
  specialty: "Specialty Chemicals",
  pharmaceutical: "Pharmaceutical API Intermediates",
};
