import { getPayload } from "./payload";

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
    brochureUrl: doc?.brochureUrl || "",
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

export const getCompanyInfo = cache(async function getCompanyInfo(): Promise<CompanyInfoData> {
  try {
    const payload = await getPayload();
    const data = await payload.findGlobal({ slug: "company-info" });
    return toCompanyInfo(data);
  } catch {
    return toCompanyInfo(null);
  }
});
