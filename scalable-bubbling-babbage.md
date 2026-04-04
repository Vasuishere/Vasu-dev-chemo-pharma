# SEO Keyword Expansion & Competitor Pages Plan

## Context
Vasudev Chemo Pharma (vasudevchemopharma.com, live & indexed) manufactures MEA Triazine 78% H2S scavenger. The user provided a CSV of competitor SERP URLs and a list of ~25 target keywords. Goal: rank for all target keywords by creating new competitor comparison pages, new application pages, and enriching existing SEO data files with expanded keyword sets (20 related + 20 buying intent per keyword).

## Architecture
The site uses a **data-driven programmatic SEO** pattern. All content lives in TypeScript data files under `src/lib/seo/`. Dynamic Next.js `[slug]` routes auto-generate pages from these data records via `generateStaticParams()`. **No new page templates needed** — just add entries to existing data files.

---

## Phase 1: New Indian Competitor Comparison Pages
**File:** `src/lib/seo/competitor-comparison-data.ts`

Add 8 new entries to `RAW_COMPETITOR_PAGES_DATA` (existing: 8 entries → new total: 16+):

| # | Slug | Competitor | Brand | Origin |
|---|------|-----------|-------|--------|
| 1 | `jay-dinesh-chemicals` | Jay Dinesh Chemicals | JadeScan 54 / JDC H2S Scavenger | India (Ahmedabad) |
| 2 | `imperial-oilfield-chemicals` | Imperial Oilfield Chemicals | ICPL Triazine H2S Scavenger | India |
| 3 | `geocon-products-india` | Geocon Products | HSCAV-70 | India |
| 4 | `k2p-chemicals` | K2P Chemical Products | K2P MEA-T | India |
| 5 | `venus-ethoxyethers` | Venus Ethoxyethers | Venus MEA Triazine | India (Goa) |
| 6 | `esteem-industries` | Esteem Industries | Vendecor / Esteem H2S Scavenger | India |
| 7 | `yogi-intermediates` | Yogi Intermediates | SCAV HS / Yogi MEA Triazine | India |
| 8 | `melzer-chemicals` | Melzer Speciality Chemicals | Microtreat MZ TR / Melzer MEA Triazine | India (Pune) |

Each entry follows the `CompetitorPageData` type with: title, description, keywords, h1, intro, comparisonRows (7 rows), advantages (6 bullets), markets, faqs (4-5), lastReviewed.

The `enrichCompetitorPage()` function automatically merges common chemical names, functional terms, brand references, and intent keywords.

**Vasudev advantages to highlight on every Indian competitor page:**
- Direct manufacturer with dedicated production line (not trader/reseller)
- ISO 9001:2015 certified with batch CoA
- 78% guaranteed active concentration (highest in market)
- Export-proven to 60+ countries
- Factory pricing without intermediary markup
- Free samples for qualification testing

## Phase 2: Brand-Equivalent Comparison Pages
**File:** `src/lib/seo/competitor-comparison-data.ts`

Add 3 more entries for branded trade names:

| # | Slug | Brand | Company | Keywords |
|---|------|-------|---------|----------|
| 1 | `tacelene-chem` | Tacelene Chem 62090/62087/62081 | Tacelene Chemical | Tacelene chem 62090, 62087, 62081 alternative |
| 2 | `nipacide-bk` | Nipacide BK | Clariant (formerly Zeneca) | nipacide bk alternative, biocide substitute |
| 3 | `kwantum-india` | Kwantum MEA Triazine | Kwantum India | mea triazine by kwantum india |

JadeScan 54 and HSCAV-70 are covered by Jay Dinesh and Geocon entries in Phase 1.

## Phase 3: Expand Common Keyword Arrays
**Files:** `src/lib/seo/competitor-comparison-data.ts` AND `src/lib/seo/application-pages-data.ts`

Both files have duplicate `COMMON_INFORMATIONAL_INTENT`, `COMMON_BUYING_INTENT`, and `COMMON_BRAND_REFERENCES` arrays. Keywords added here propagate to ALL pages automatically.

### Add to COMMON_INFORMATIONAL_INTENT (~20 new):
- mea triazine manufacturers in india
- triazine manufacturer in india
- monoethanolamine triazine india
- monoethanolamine-triazine supplier in india
- H2S Scavengers & Triazine-Based Gas Treatment Chemicals
- amine base triazine
- cas no. 4719-04-4
- MEA Triazine 70% vs 78% difference
- h2s scavenger types comparison
- triazine based h2s scavenger mechanism
- how triazine removes hydrogen sulfide
- mea triazine concentration grades
- monoethanolamine triazine chemistry
- amine based triazine synthesis
- triazine h2s scavenger dosing calculation
- h2s scavenger environmental impact
- triazine biocide vs oxidizing biocide
- mea triazine shelf life and storage
- h2s scavenger for sour gas fields India
- water based biocide applications

### Add to COMMON_BUYING_INTENT (~20 new):
- h2s scavenger 78 manufacturer in INDIA
- h2s scavenger manufacturer in INDIA
- mea triazine 78 suppliers in india
- Triazine Based H2S scavenger Manufacturer
- mea triazine supplier india bulk
- h2s scavenger quote India
- mea triazine factory price India
- triazine h2s scavenger bulk order India
- mea triazine ISO certified manufacturer
- h2s scavenger direct manufacturer
- mea triazine sample request India
- monoethanolamine triazine bulk supplier
- mea triazine export from India
- h2s scavenger for natural gas India
- h2s scavenger for oil refinery India
- triazine biocide manufacturer Gujarat
- mea triazine Ankleshwar manufacturer
- h2s scavenger CIF price
- MEA Triazine 70% supplier
- water based biocide manufacturer India

### Add to COMMON_BRAND_REFERENCES:
- HSCAV-70
- Tacelene Chem 62090
- Tacelene Chem 62087
- Tacelene Chem 62081
- ICPL Triazine
- K2P MEA-T
- Kwantum MEA Triazine
- Melzer MEA Triazine
- Microtreat MZ TR
- Vendecor (Esteem)
- SCAV HS (Yogi)

## Phase 4: Update Product Synonyms
**File:** `src/lib/seo/product-synonyms.ts`

**A. Add items to "Trade Names and Brand Equivalents" group:**
- JadeScan 54 (Jay Dinesh Chemicals)
- HSCAV-70 (Geocon Products)
- Tacelene Chem 62090 / 62087 / 62081
- Nipacide BK (Clariant)
- Kwantum MEA Triazine
- ICPL Triazine (Imperial Oilfield Chemicals)
- K2P MEA-T (K2P Chemicals)
- Vendecor (Esteem Industries)
- SCAV HS (Yogi Intermediates)
- Microtreat MZ TR (Melzer Chemicals)

**B. Add new group: "Brand Names Recognized in India":**
All Indian competitor brand names (Jay Dinesh, Imperial, Geocon, K2P, Venus, Esteem, Yogi, Melzer, Kwantum, Sarex, etc.)

**C. Add new group: "Hindi-Language Names (हिन्दी नाम)":**
Hindi transliterations of key product/industry terms.

## Phase 5: New Application Page — Drilling Fluids
**File:** `src/lib/seo/application-pages-data.ts`

Add entry with slug `drilling-fluids-biocide`:
- Title: "MEA Triazine Biocide for Oil Drilling Fluids | Vasudev Chemo Pharma"
- Keywords: oil drilling fluids biocide, drilling fluid preservative, drilling mud biocide, water based drilling fluid biocide, SRB control drilling fluids
- 4 sections: Microbial Problems, Mechanism, Dosing, Advantages
- Related countries: India, UAE, Saudi Arabia, Kuwait, Oman, USA

### Enrich existing application pages:
- `water-treatment-biocide` → add: "water based biocide", "water based biocide manufacturer India", "biocide used as h2s scavenger"
- `metalworking-fluid-preservative` → add: "biocides for metalworking fluids", "metalworking biocide manufacturer India"

## Phase 6: New Resource Article — Dual-Function Biocide/H2S Scavenger
**File:** `src/lib/seo/resource-articles-data.ts`

Add article with slug `biocide-h2s-scavenger-dual-function`:
- Title: "MEA Triazine: The Biocide That Also Scavenges H2S"
- Keywords: biocide used as h2s scavenger, dual function h2s scavenger biocide, triazine biocide h2s
- 5 sections covering dual-function chemistry

## Phase 7: Update Route Configuration
**File:** `src/lib/seo/seo-route-helpers.ts`

Update `FEATURED_COMPARISON_SLUGS` to add top Indian competitors:
```
Current: pro3-q2-technologies, rxsol-triazine, sulfa-clear-lubrizol, chinese-suppliers
Add: jay-dinesh-chemicals, imperial-oilfield-chemicals, geocon-products-india, k2p-chemicals, tacelene-chem, nipacide-bk
```

Add to `FEATURED_APPLICATION_SLUGS`: `drilling-fluids-biocide`
Add to `FEATURED_RESOURCE_SLUGS`: `biocide-h2s-scavenger-dual-function`

---

## Implementation Order
1. `competitor-comparison-data.ts` — All 11 new comparison entries + expanded common keyword arrays (biggest impact, 11 new pages)
2. `application-pages-data.ts` — New drilling fluids page + keyword enrichment of existing pages + expanded common arrays
3. `product-synonyms.ts` — New brand equivalents, India group, Hindi group
4. `seo-route-helpers.ts` — Update featured slug lists
5. `resource-articles-data.ts` — New dual-function article
6. Build & verify

## Verification
1. `npm run build` — confirms all data entries type-check and pages generate
2. Count new pages in build output (~11 comparison + 1 application + 1 resource = 13 new pages)
3. `npm run dev` — visit each new URL to confirm rendering
4. Sitemap check — confirm new pages appear
5. Keyword coverage — search built HTML for each of the 25 target keywords

## Critical Files
- `src/lib/seo/competitor-comparison-data.ts` (main, ~1000 lines → ~2000+)
- `src/lib/seo/application-pages-data.ts`
- `src/lib/seo/product-synonyms.ts`
- `src/lib/seo/seo-route-helpers.ts`
- `src/lib/seo/resource-articles-data.ts`
