import type { GlobalConfig } from "payload";

export const SiteImages: GlobalConfig = {
  slug: "site-images",
  label: "Site Images & Media",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Home Page",
          fields: [
            {
              name: "homeHero",
              type: "group",
              label: "Hero Section",
              fields: [
                {
                  name: "backgroundVideoUrl",
                  type: "text",
                  admin: {
                    description:
                      "Google Drive URL or direct URL for the background video.",
                  },
                },
              ],
            },
            {
              name: "homeAbout",
              type: "group",
              label: "About Section",
              fields: [
                {
                  name: "avatars",
                  type: "array",
                  labels: {
                    singular: "Avatar Image",
                    plural: "Avatar Images",
                  },
                  fields: [
                    {
                      name: "imageUrl",
                      type: "text",
                      required: true,
                    },
                  ],
                },
                {
                  name: "statLogoUrl",
                  type: "text",
                  admin: { description: "URL for the first stat block logo" },
                },
                {
                  name: "reviewStarImageUrl",
                  type: "text",
                  admin: { description: "URL for the review stars image" },
                },
                {
                  name: "statStepImageUrl",
                  type: "text",
                  admin: { description: "URL for the middle stat image" },
                },
                {
                  name: "experienceImageUrl",
                  type: "text",
                  admin: {
                    description: "URL for the right side experience block image",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
