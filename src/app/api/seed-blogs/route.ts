import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";
import { hydrotropeBlogListItems } from "../../(frontend)/blog/[slug]/hydrotrope-articles-data";

// Extract hardcoded blogs from page.tsx (I'll copy them here for simplicity in the seed)
const staticBlogs = [
  {
    slug: "what-is-mea-triazine-best-h2s-scavenger-oil-gas",
    title: "What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas?",
  },
  {
    slug: "h2s-natural-gas-pipelines-risks-regulations-removal",
    title: "H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods",
  },
  {
    slug: "top-5-specialty-chemicals-revolutionizing-industrial-applications",
    title: "Top 5 Specialty Chemicals Revolutionizing Industrial Applications",
  },
  {
    slug: "sustainable-chemical-manufacturing-greener-future-india",
    title: "Sustainable Chemical Manufacturing: Driving a Greener Future in India",
  },
  {
    slug: "triazine-scavenger-supplier-usa-mea-triazine-78",
    title: "Triazine Scavenger Supplier in USA — MEA Triazine 78% Direct from Manufacturer",
  },
  {
    slug: "h2s-scavenger-permian-basin-triazine-supplier",
    title: "H2S Scavenger for Permian Basin Operations — Trusted Triazine Supplier",
  },
  {
    slug: "mea-triazine-vs-alternative-h2s-scavengers-usa",
    title: "MEA Triazine vs Alternative H2S Scavengers — Complete US Market Comparison",
  },
  {
    slug: "triazine-h2s-scavenger-dosing-guide-oil-gas",
    title: "Triazine H2S Scavenger Dosing Guide for Oil & Gas Operations",
  },
  {
    slug: "bulk-triazine-scavenger-supply-shale-gas-usa",
    title: "Bulk Triazine Scavenger Supply for US Shale Gas Operations",
  },
  // -- Brand Competitor Articles --
  { slug: "bioban-gk-alternative-mea-triazine-78-h2s-scavenger", title: "Bioban GK Alternative — MEA Triazine 78% H2S Scavenger for US Oil & Gas" },
  { slug: "bioban-gk-vs-mea-triazine-78-comparison", title: "Bioban GK vs MEA Triazine 78% — H2S Scavenger Performance Comparison" },
  { slug: "buy-bioban-gk-equivalent-usa-mea-triazine-supplier", title: "Buy Bioban GK Equivalent in USA — MEA Triazine 78% Direct Manufacturer From India" },
  { slug: "onyxide-200-alternative-mea-triazine-78-h2s-scavenger", title: "Onyxide 200 Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "onyxide-200-vs-mea-triazine-78-comparison", title: "Onyxide 200 vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-onyxide-200-equivalent-usa-mea-triazine-supplier", title: "Buy Onyxide 200 Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "busan-1060-alternative-mea-triazine-78-h2s-scavenger", title: "Busan 1060 Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "busan-1506-vs-mea-triazine-78-comparison", title: "Busan 1506 vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-busan-1060-1506-equivalent-usa-supplier", title: "Buy Busan 1060/1506 Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "km200-mergal-alternative-mea-triazine-78-scavenger", title: "KM200 / Mergal Alternative — MEA Triazine 78% H2S Scavenger" },
  { slug: "mergal-174-vs-mea-triazine-78-comparison", title: "Mergal 174II vs MEA Triazine 78% — Performance & Cost Comparison" },
  { slug: "buy-km200-mergal-equivalent-usa-supplier", title: "Buy KM200 / Mergal Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "kalpur-te-alternative-mea-triazine-78-h2s-scavenger", title: "Kalpur TE Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "kalpur-te-vs-mea-triazine-78-comparison", title: "Kalpur TE vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-kalpur-te-equivalent-usa-mea-triazine-supplier", title: "Buy Kalpur TE Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "h2stopper-1908c-alternative-mea-triazine-78-scavenger", title: "H2Stopper 1908C Alternative — MEA Triazine 78% H2S Scavenger" },
  { slug: "h2stopper-1908c-vs-mea-triazine-78-comparison", title: "H2Stopper 1908C vs MEA Triazine 78% — Performance Comparison" },
  { slug: "buy-h2stopper-1908c-equivalent-usa-supplier", title: "Buy H2Stopper 1908C Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "cobate-c-alternative-mea-triazine-78-h2s-scavenger", title: "Cobate C Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "cobate-c-vs-mea-triazine-78-comparison", title: "Cobate C vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-cobate-c-equivalent-usa-mea-triazine-supplier", title: "Buy Cobate C Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "actane-alternative-mea-triazine-78-h2s-scavenger", title: "Actane Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "actane-vs-mea-triazine-78-comparison", title: "Actane vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-actane-equivalent-usa-mea-triazine-supplier", title: "Buy Actane Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "eta-75-alternative-mea-triazine-78-h2s-scavenger", title: "ETA 75 Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "eta-75-vs-mea-triazine-78-comparison", title: "ETA 75 vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-eta-75-equivalent-usa-mea-triazine-supplier", title: "Buy ETA 75 Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "bestcide-1087t-alternative-mea-triazine-78-scavenger", title: "Bestcide 1087T Alternative — MEA Triazine 78% H2S Scavenger" },
  { slug: "bestcide-1087t-vs-mea-triazine-78-comparison", title: "Bestcide 1087T vs MEA Triazine 78% — Performance Comparison" },
  { slug: "buy-bestcide-1087t-equivalent-usa-supplier", title: "Buy Bestcide 1087T Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "permachem-ob-2-alternative-mea-triazine-78-scavenger", title: "Permachem OB 2 Alternative — MEA Triazine 78% H2S Scavenger" },
  { slug: "permachem-ob-2-vs-mea-triazine-78-comparison", title: "Permachem OB 2 vs MEA Triazine 78% — Performance Comparison" },
  { slug: "buy-permachem-ob-2-equivalent-usa-supplier", title: "Buy Permachem OB 2 Equivalent in USA — MEA Triazine 78% Supplier" },
  { slug: "surcide-d-alternative-mea-triazine-78-h2s-scavenger", title: "Surcide D Alternative — MEA Triazine 78% H2S Scavenger USA" },
  { slug: "surcide-p-vs-mea-triazine-78-comparison", title: "Surcide P vs MEA Triazine 78% — H2S Scavenger Comparison" },
  { slug: "buy-surcide-equivalent-usa-mea-triazine-supplier", title: "Buy Surcide D/P Equivalent in USA — MEA Triazine 78% Supplier" },
];

export async function GET(request: Request) {
  const token = request.headers.get("x-api-key");
  if (!token || token !== process.env.SEED_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (process.env.NODE_ENV === "production" && process.env.SEED_ENABLED !== "true") {
    return NextResponse.json({ error: "Seeding disabled in production" }, { status: 403 });
  }

  try {
    const payload = await getPayload({ config });

    const rawAllBlogs = [
      ...staticBlogs,
      ...hydrotropeBlogListItems.map(item => ({ title: item.title, slug: item.slug }))
    ];

    // Deduplicate by slug
    const blogMap = new Map();
    for (const blog of rawAllBlogs) {
      if (!blogMap.has(blog.slug)) {
        blogMap.set(blog.slug, blog);
      }
    }
    const allBlogs = Array.from(blogMap.values());

    let created = 0;
    let skipped = 0;

    const slugs = allBlogs.map((b) => b.slug);

    const existing = await payload.find({
      collection: 'blogs',
      where: {
        slug: {
          in: slugs
        }
      },
      pagination: false,
    });

    const existingSlugs = new Set(existing.docs.map((doc) => doc.slug));

    for (const blog of allBlogs) {
      if (!existingSlugs.has(blog.slug)) {
        await payload.create({
          collection: 'blogs',
          data: {
            title: blog.title,
            slug: blog.slug,
          }
        });
        created++;
      } else {
        skipped++;
      }
    }

    return NextResponse.json({
      message: "Seeding complete",
      created,
      skipped,
      total: allBlogs.length
    });
  } catch (error: unknown) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
