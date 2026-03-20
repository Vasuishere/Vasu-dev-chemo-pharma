import { getPayload } from "./payload";

export type SiteImagesData = {
  homePage: {
    heroSection: {
      backgroundVideoUrl: string;
    };
    aboutSection: {
      avatars: string[];
      statLogoUrl: string;
      reviewStarImageUrl: string;
      statStepImageUrl: string;
      experienceImageUrl: string;
    };
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toSiteImages(doc: any): SiteImagesData {
  const homeHero = doc?.homeHero || {};
  const homeAbout = doc?.homeAbout || {};

  const avatars = Array.isArray(homeAbout.avatars)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ? homeAbout.avatars.map((a: any) => a.imageUrl).filter(Boolean)
    : [];

  return {
    homePage: {
      heroSection: {
        backgroundVideoUrl: homeHero.backgroundVideoUrl || "",
      },
      aboutSection: {
        avatars,
        statLogoUrl: homeAbout.statLogoUrl || "",
        reviewStarImageUrl: homeAbout.reviewStarImageUrl || "",
        statStepImageUrl: homeAbout.statStepImageUrl || "",
        experienceImageUrl: homeAbout.experienceImageUrl || "",
      },
    },
  };
}

export async function getSiteImages(): Promise<SiteImagesData> {
  try {
    const payload = await getPayload();
    const data = await payload.findGlobal({ slug: "site-images" });
    return toSiteImages(data);
  } catch {
    return toSiteImages(null);
  }
}
