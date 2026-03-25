import { getPayload } from "./payload";

/**
 * Canonical brochure URL — hosted on Vercel Blob (fast, crawlable).
 * Title: "Vasudev Chemo Pharma — Chemical Manufacturer & Exporter — Product Catalogue 2025"
 * Update this constant if the file is ever re-uploaded to a new location.
 */
export const BROCHURE_URL =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev%20Chemo%20Pharma%20Brochure.pdf";

type PhoneNumber = {
  label: string;
  number: string;
};

export type CompanyInfoData = {
  companyName: string;
  primaryEmail: string;
  secondaryEmail: string;
  phoneNumbers: PhoneNumber[];
  address: string;
  mapUrl: string;
  brochureUrl: string;
  yearsOfExperience: number;
  foundingYear?: number;
  workingHours: {
    monToFri: string;
    saturday: string;
    sunday: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toCompanyInfo(doc: any): CompanyInfoData {
  const mappedPhoneNumbers = Array.isArray(doc?.phoneNumbers)
    ? doc.phoneNumbers
        .filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (phone: any) => phone?.number && typeof phone.number === "string"
        )
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((phone: any) => ({
          label: phone.label || "Contact",
          number: phone.number,
        }))
    : [];

  const phoneNumbers = mappedPhoneNumbers.length > 0 ? mappedPhoneNumbers : [];

  return {
    companyName: doc?.companyName || "",
    primaryEmail: doc?.primaryEmail || "",
    secondaryEmail: doc?.secondaryEmail || "",
    phoneNumbers,
    address: doc?.address || "",
    mapUrl: doc?.mapUrl || "",
    brochureUrl: doc?.brochureUrl || BROCHURE_URL,
    yearsOfExperience:
      typeof doc?.yearsOfExperience === "number"
        ? doc.yearsOfExperience
        : 0,
    foundingYear:
      typeof doc?.foundingYear === "number" && doc.foundingYear > 1900
        ? doc.foundingYear
        : undefined,
    workingHours: {
      monToFri: doc?.workingHours?.monToFri || "",
      saturday: doc?.workingHours?.saturday || "",
      sunday: doc?.workingHours?.sunday || "",
    },
  };
}

import { cache } from "react";

// Build-level singleton: during SSG Next.js generates many pages concurrently,
// each calling getCompanyInfo. React.cache() only deduplicates within a single
// request, so without this the DB pool is exhausted. This promise is shared
// across all concurrent page renders within the same process.
let _companyInfoPromise: Promise<CompanyInfoData> | null = null;

export const getCompanyInfo = cache(async function getCompanyInfo(): Promise<CompanyInfoData> {
  if (_companyInfoPromise) return _companyInfoPromise;

  _companyInfoPromise = (async () => {
    try {
      const payload = await getPayload();
      const data = await payload.findGlobal({ slug: "company-info" });
      return toCompanyInfo(data);
    } catch (error) {
      console.error("[getCompanyInfo] Error fetching company-info:", error);
      return toCompanyInfo(null);
    }
  })();

  return _companyInfoPromise;
});
