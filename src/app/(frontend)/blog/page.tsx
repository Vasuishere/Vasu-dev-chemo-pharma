import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { hydrotropeBlogListItems } from "./[slug]/hydrotrope-articles-data";
import BlogPageClient from "./BlogPageClient";
import { getAllBlogImageOverrides } from "@/lib/blogs-payload";

export const revalidate = 3600;

export const metadata: Metadata = applyPageMetaOverride("/blog", {
  title: "Chemical Industry Blog | Vasudev Chemo Pharma",
  description: "Expert insights on H2S scavengers, MEA Triazine applications, and chemical manufacturing.",
});

type BlogListItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

const blogs: BlogListItem[] = [
  ...hydrotropeBlogListItems,
  {
    slug: "what-is-mea-triazine-best-h2s-scavenger-oil-gas",
    title: "What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas?",
    category: "H2S Scavengers",
    date: "Mar 24, 2026",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/industry_Solutions/Oil_Gas_Vasudev_Chemo_Pharma.png",
    imageAlt: "MEA Triazine 78 percent H2S scavenger for oil and gas",
    featured: true,
  },
  {
    slug: "h2s-natural-gas-pipelines-risks-regulations-removal",
    title: "H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods",
    category: "Technical Guides",
    date: "Mar 24, 2026",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/H2S%20in%20Natural%20Gas%20Pipelines%20Risks%2C%20Regulations%2C%20and%20Removal%20Methods.png",
    imageAlt: "Natural gas pipeline H2S monitoring and removal",
  },
  {
    slug: "top-5-specialty-chemicals-revolutionizing-industrial-applications",
    title: "Top 5 Specialty Chemicals Revolutionizing Industrial Applications",
    category: "Specialty Chemicals",
    date: "Jan 10, 2026",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/top%205%20specialty%20chemicals%20revolutionizing%20industrial.svg",
    imageAlt: "Specialty chemical compounds including triazine scavengers and pharmaceutical intermediates",
  },
  {
    slug: "sustainable-chemical-manufacturing-greener-future-india",
    title: "Sustainable Chemical Manufacturing: Driving a Greener Future in India",
    category: "Sustainability",
    date: "Jan 6, 2026",
    image: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Blogs/sustainable-chemical-manufacturing-greener-future-india.svg",
    imageAlt: "Sustainable chemical manufacturing processes in India",
  },
  {
    slug: "triazine-scavenger-supplier-usa-mea-triazine-78",
    title: "Triazine Scavenger Supplier in USA — MEA Triazine 78% Direct from Manufacturer",
    category: "H2S Scavengers",
    date: "Mar 21, 2026",
    image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp",
    imageAlt: "Triazine scavenger supplier in USA providing MEA Triazine 78 percent",
  },
  {
    slug: "h2s-scavenger-permian-basin-triazine-supplier",
    title: "H2S Scavenger for Permian Basin Operations — Trusted Triazine Supplier",
    category: "H2S Scavengers",
    date: "Mar 21, 2026",
    image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png",
    imageAlt: "H2S scavenger triazine chemical supply for Permian Basin",
  },
  {
    slug: "mea-triazine-vs-alternative-h2s-scavengers-usa",
    title: "MEA Triazine vs Alternative H2S Scavengers — Complete US Market Comparison",
    category: "H2S Scavengers",
    date: "Mar 21, 2026",
    image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png",
    imageAlt: "Comparison of MEA Triazine versus alternative H2S scavengers",
  },
  {
    slug: "triazine-h2s-scavenger-dosing-guide-oil-gas",
    title: "Triazine H2S Scavenger Dosing Guide for Oil & Gas Operations",
    category: "Technical Guides",
    date: "Mar 21, 2026",
    image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png",
    imageAlt: "Triazine H2S scavenger dosing calculation guide",
  },
  {
    slug: "bulk-triazine-scavenger-supply-shale-gas-usa",
    title: "Bulk Triazine Scavenger Supply for US Shale Gas Operations",
    category: "H2S Scavengers",
    date: "Mar 21, 2026",
    image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp",
    imageAlt: "Bulk triazine scavenger chemical supply for US shale gas",
  },

  // -- Brand Competitor Articles (36) --
  { slug: "bioban-gk-alternative-mea-triazine-78-h2s-scavenger", title: "Bioban GK Alternative — MEA Triazine 78% H2S Scavenger for US Oil & Gas", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "Bioban GK alternative MEA Triazine 78 H2S scavenger" },
  { slug: "bioban-gk-vs-mea-triazine-78-comparison", title: "Bioban GK vs MEA Triazine 78% — H2S Scavenger Performance Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "Bioban GK vs MEA Triazine comparison" },
  { slug: "buy-bioban-gk-equivalent-usa-mea-triazine-supplier", title: "Buy Bioban GK Equivalent in USA — MEA Triazine 78% Direct Manufacturer From India", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy Bioban GK equivalent USA supplier" },
  { slug: "onyxide-200-alternative-mea-triazine-78-h2s-scavenger", title: "Onyxide 200 Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "Onyxide 200 alternative MEA Triazine 78" },
  { slug: "onyxide-200-vs-mea-triazine-78-comparison", title: "Onyxide 200 vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "Onyxide 200 vs MEA Triazine comparison" },
  { slug: "buy-onyxide-200-equivalent-usa-mea-triazine-supplier", title: "Buy Onyxide 200 Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy Onyxide 200 equivalent USA" },
  { slug: "busan-1060-alternative-mea-triazine-78-h2s-scavenger", title: "Busan 1060 Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "Busan 1060 alternative MEA Triazine 78" },
  { slug: "busan-1506-vs-mea-triazine-78-comparison", title: "Busan 1506 vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "Busan 1506 vs MEA Triazine comparison" },
  { slug: "buy-busan-1060-1506-equivalent-usa-supplier", title: "Buy Busan 1060/1506 Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy Busan equivalent USA supplier" },
  { slug: "km200-mergal-alternative-mea-triazine-78-scavenger", title: "KM200 / Mergal Alternative — MEA Triazine 78% H2S Scavenger", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "KM200 Mergal alternative MEA Triazine" },
  { slug: "mergal-174-vs-mea-triazine-78-comparison", title: "Mergal 174II vs MEA Triazine 78% — Performance & Cost Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "Mergal 174 vs MEA Triazine comparison" },
  { slug: "buy-km200-mergal-equivalent-usa-supplier", title: "Buy KM200 / Mergal Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy KM200 Mergal equivalent USA" },
  { slug: "kalpur-te-alternative-mea-triazine-78-h2s-scavenger", title: "Kalpur TE Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "Kalpur TE alternative MEA Triazine 78" },
  { slug: "kalpur-te-vs-mea-triazine-78-comparison", title: "Kalpur TE vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "Kalpur TE vs MEA Triazine comparison" },
  { slug: "buy-kalpur-te-equivalent-usa-mea-triazine-supplier", title: "Buy Kalpur TE Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy Kalpur TE equivalent USA" },
  { slug: "h2stopper-1908c-alternative-mea-triazine-78-scavenger", title: "H2Stopper 1908C Alternative — MEA Triazine 78% H2S Scavenger", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "H2Stopper 1908C alternative MEA Triazine" },
  { slug: "h2stopper-1908c-vs-mea-triazine-78-comparison", title: "H2Stopper 1908C vs MEA Triazine 78% — Performance Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "H2Stopper 1908C vs MEA Triazine comparison" },
  { slug: "buy-h2stopper-1908c-equivalent-usa-supplier", title: "Buy H2Stopper 1908C Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy H2Stopper 1908C equivalent USA" },
  { slug: "cobate-c-alternative-mea-triazine-78-h2s-scavenger", title: "Cobate C Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "Cobate C alternative MEA Triazine 78" },
  { slug: "cobate-c-vs-mea-triazine-78-comparison", title: "Cobate C vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "Cobate C vs MEA Triazine comparison" },
  { slug: "buy-cobate-c-equivalent-usa-mea-triazine-supplier", title: "Buy Cobate C Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy Cobate C equivalent USA" },
  { slug: "actane-alternative-mea-triazine-78-h2s-scavenger", title: "Actane Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "Actane alternative MEA Triazine 78" },
  { slug: "actane-vs-mea-triazine-78-comparison", title: "Actane vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "Actane vs MEA Triazine comparison" },
  { slug: "buy-actane-equivalent-usa-mea-triazine-supplier", title: "Buy Actane Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy Actane equivalent USA" },
  { slug: "eta-75-alternative-mea-triazine-78-h2s-scavenger", title: "ETA 75 Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "ETA 75 alternative MEA Triazine 78" },
  { slug: "eta-75-vs-mea-triazine-78-comparison", title: "ETA 75 vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "ETA 75 vs MEA Triazine comparison" },
  { slug: "buy-eta-75-equivalent-usa-mea-triazine-supplier", title: "Buy ETA 75 Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy ETA 75 equivalent USA" },
  { slug: "bestcide-1087t-alternative-mea-triazine-78-scavenger", title: "Bestcide 1087T Alternative — MEA Triazine 78% H2S Scavenger", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "Bestcide 1087T alternative MEA Triazine" },
  { slug: "bestcide-1087t-vs-mea-triazine-78-comparison", title: "Bestcide 1087T vs MEA Triazine 78% — Performance Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "Bestcide 1087T vs MEA Triazine comparison" },
  { slug: "buy-bestcide-1087t-equivalent-usa-supplier", title: "Buy Bestcide 1087T Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy Bestcide 1087T equivalent USA" },
  { slug: "permachem-ob-2-alternative-mea-triazine-78-scavenger", title: "Permachem OB 2 Alternative — MEA Triazine 78% H2S Scavenger", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/Hxgnn8KfIJnGioOtBbfYA5iYdQ8.webp", imageAlt: "Permachem OB 2 alternative MEA Triazine" },
  { slug: "permachem-ob-2-vs-mea-triazine-78-comparison", title: "Permachem OB 2 vs MEA Triazine 78% — Performance Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/a2Zqj4XmuHOPsbeGYtBENVFMufs.png", imageAlt: "Permachem OB 2 vs MEA Triazine comparison" },
  { slug: "buy-permachem-ob-2-equivalent-usa-supplier", title: "Buy Permachem OB 2 Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NKrt6BfazML4t6STW4J7jw1qHoQ.png", imageAlt: "Buy Permachem OB 2 equivalent USA" },
  { slug: "surcide-d-alternative-mea-triazine-78-h2s-scavenger", title: "Surcide D Alternative — MEA Triazine 78% H2S Scavenger USA", category: "Brand Alternatives", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/nwElwJzRsjpV0KeBSkL7mR2bQ.png", imageAlt: "Surcide D alternative MEA Triazine 78" },
  { slug: "surcide-p-vs-mea-triazine-78-comparison", title: "Surcide P vs MEA Triazine 78% — H2S Scavenger Comparison", category: "Comparisons", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/u48JppC0L67MN952GwxQr0v8uY8.webp", imageAlt: "Surcide P vs MEA Triazine comparison" },
  { slug: "buy-surcide-equivalent-usa-mea-triazine-supplier", title: "Buy Surcide D/P Equivalent in USA — MEA Triazine 78% Supplier", category: "Buying Guides", date: "Mar 21, 2026", image: "https://framerusercontent.com/images/NaB1BTPudXw9U4z7E7pwUp79iic.webp", imageAlt: "Buy Surcide equivalent USA" },
];

export default async function BlogPage() {
  const imageOverrides = await getAllBlogImageOverrides();

  return (
    <BlogPageClient 
      initialBlogs={blogs} 
      imageOverrides={imageOverrides} 
    />
  );
}
