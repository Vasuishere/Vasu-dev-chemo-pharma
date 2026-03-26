import type { GlobalConfig } from "payload";

export const CompanyInfo: GlobalConfig = {
  slug: "company-info",
  label: "Company Information",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "companyName",
      type: "text",
      required: true,
    },
    {
      name: "primaryEmail",
      type: "email",
      required: true,
    },
    {
      name: "secondaryEmail",
      type: "email",
    },
    {
      name: "phoneNumbers",
      type: "array",
      labels: {
        singular: "Phone Number",
        plural: "Phone Numbers",
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "number",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "address",
      type: "textarea",
      required: true,
    },
    {
      name: "mapUrl",
      type: "text",
      admin: {
        description: "Google Maps URL for location link",
      },
    },
    {
      name: "brochureUrl",
      type: "text",
      admin: {
        description:
          "Company brochure PDF URL (direct PDF URL).",
      },
    },
    {
      name: "yearsOfExperience",
      type: "number",
      required: true,
      min: 0,
    },
    {
      name: "foundingYear",
      type: "number",
      admin: {
        description:
          "Optional. If set, frontend will show period as foundingYear-currentYear.",
      },
      min: 1900,
    },
    {
      name: "workingHours",
      type: "group",
      fields: [
        {
          name: "monToFri",
          type: "text",
        },
        {
          name: "saturday",
          type: "text",
        },
        {
          name: "sunday",
          type: "text",
        },
      ],
    },
  ],
};
