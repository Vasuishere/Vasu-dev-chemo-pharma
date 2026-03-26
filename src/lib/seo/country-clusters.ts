/* ── Country cluster map for "Also Available In" links ────────── */

import { COUNTRY_PAGES_DATA } from "./country-pages-data";

const CLUSTER_DEFINITIONS: Record<string, string[]> = {
  /* GCC */
  uae: ["qatar", "kuwait", "oman", "saudi-arabia", "iraq"],
  qatar: ["uae", "kuwait", "oman", "saudi-arabia", "iraq"],
  kuwait: ["uae", "qatar", "saudi-arabia", "iraq", "oman"],
  oman: ["uae", "qatar", "saudi-arabia", "kuwait", "iran"],
  "saudi-arabia": ["uae", "qatar", "kuwait", "oman", "iraq"],
  iraq: ["kuwait", "saudi-arabia", "iran", "jordan", "uae"],

  /* Asia-Pacific */
  vietnam: ["thailand", "uae", "qatar", "oman", "brazil"],
  thailand: ["vietnam", "uae", "qatar", "oman", "brazil"],

  /* Americas */
  "united-states": ["brazil", "uae", "saudi-arabia", "qatar", "vietnam"],
  brazil: ["united-states", "uae", "qatar", "vietnam", "thailand"],

  /* Middle East extended */
  iran: ["iraq", "uae", "oman", "qatar", "kuwait"],
  jordan: ["iraq", "saudi-arabia", "egypt", "uae", "kuwait"],
  egypt: ["jordan", "saudi-arabia", "libya", "uae", "qatar"],
  libya: ["egypt", "jordan", "uae", "qatar", "saudi-arabia"],
};

export const COUNTRY_CLUSTER_MAP: Record<
  string,
  { slug: string; countryName: string }[]
> = Object.fromEntries(
  Object.entries(CLUSTER_DEFINITIONS).map(([slug, neighbors]) => [
    slug,
    neighbors
      .filter((n) => COUNTRY_PAGES_DATA[n])
      .map((n) => ({
        slug: n,
        countryName: COUNTRY_PAGES_DATA[n].countryName,
      })),
  ])
);
