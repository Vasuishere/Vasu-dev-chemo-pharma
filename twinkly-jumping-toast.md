# Plan: Seed Complete Data for 4 Surfactant Hydrotrope Products

## Context

Four surfactant products exist in the codebase and database but with **empty/stub data**:
- Sodium Cumene Sulfonate 40% (VCP-SFC-0001)
- Sodium Cumene Sulfonate 90% (VCP-SFC-0002)
- Sodium Xylene Sulfonate 90% (VCP-SFC-0003)
- Sodium Xylene Sulfonate 40% (VCP-SFC-0004)

**Problem 1:** The API seed route (`src/app/api/seed/route.ts`, lines 391-483) has all fields blank for these 4 products — empty description, specs, applications, industries, grades, packaging, etc. When seeded via this route, the database receives empty records. The standalone Node.js seed script (`src/seed.ts`) has complete data but the API route doesn't.

**Problem 2:** The `hsCode` value is stored as `"2904.10"` (float-like string) in `src/seed.ts`. The user requires it to be a proper integer HSN Code: **`29041090`** (Indian 8-digit Harmonized System of Nomenclature code for sulphonated derivatives of hydrocarbons, other — Chapter 29, Heading 2904, Sub-heading 10, Tariff Item 90).

**Problem 3:** The frontend label at `src/app/(frontend)/product/[slug]/page.tsx:626` shows "HS Code". It must read **"HSN Code"**.

**Problem 4:** The static fallback in `src/lib/products.ts` (lines 363-511) also has empty data for the 4 products — used when the database is unavailable.

## Files to Modify

| File | Change |
|------|--------|
| `src/app/api/seed/route.ts` | Fill in complete product data for the 4 surfactant products; fix `hsCode: "29041090"` |
| `src/seed.ts` | Fix `hsCode` from `"2904.10"` to `"29041090"` for all 4 products; fix FAQ text "HS code" → "HSN Code" |
| `src/lib/products.ts` | Fill in complete static fallback data for the 4 products; fix `hsCode: "29041090"` |
| `src/app/(frontend)/product/[slug]/page.tsx` | Line 626: change label `"HS Code"` → `"HSN Code"` |

## Complete Data to Seed

All data cross-referenced from: Stepan Chemical (SCS-40/SXS), Nandadeep Chemicals, Navdeep Chemicals, ExSyn Corp, Ashland PSS, PubChem, ERASM environmental fact sheets, and IndiaMART supplier listings.

### HSN Code
All 4 products: **`29041090`**
- Chapter 29 = Organic Chemicals
- Heading 2904 = Sulphonated, nitrated or nitrosated derivatives of hydrocarbons
- Sub-heading 10 = Only sulpho group derivatives, their salts and esters
- Tariff item 90 = Other (not saccharin, etc.)

---

### SCS 40% — Sodium Cumene Sulfonate 40% (VCP-SFC-0001)

```
formula: "C₉H₁₁NaO₃S"
casNumber: "28348-53-0"
appearance: "Clear to slightly hazy liquid"
molecularWeight: "222.24 g/mol"
hsCode: "29041090"
description: (full paragraph — see seed.ts line 843)
specs: [
  { key: "Active Content", value: "39.0 – 41.0%" },
  { key: "pH (as supplied)", value: "7.0 – 10.0" },
  { key: "Specific Gravity (25°C)", value: "1.07 – 1.12" },
  { key: "Colour", value: "Clear to slightly hazy" },
  { key: "Odour", value: "Mild aromatic" },
  { key: "Solubility in Water", value: "Fully miscible" },
  { key: "Sulfate Content", value: "< 1.0%" },
  { key: "Sulfone Content", value: "< 1.0%" },
  { key: "Moisture", value: "58 – 62%" },
  { key: "Cloud Point", value: "< 0°C (as supplied)" },
  { key: "Storage Temperature", value: "> 10°C (to prevent crystallisation)" },
]
applications: [10 entries — hydrotrope in liquid detergents, solubiliser, viscosity reducer, cloud point depressant, stabiliser in personal care, dispersant in paints/dyes, compatibility enhancer, drilling fluid additive, wetting agent in agrochemicals, metal cleaning additive]
industries: [8 entries — Household & Industrial Cleaning, Personal Care & Cosmetics, Detergent Manufacturing, Oil & Gas, Paints & Coatings, Agrochemicals, Textile Processing, Metal Processing & Electroplating]
safetyClass: "Irritant"
ghsPictograms: ["GHS07"]
signalWord: "Warning"
hazardStatements: ["H315 – Causes skin irritation", "H319 – Causes serious eye irritation"]
grades: ["Technical Grade", "Industrial Grade"]
packaging: ["240 L HDPE drums", "1000 L IBC tanks", "Bulk tanker loads", "Custom packaging on request"]
minOrderQuantity: "1 MT"
```

### SCS 90% — Sodium Cumene Sulfonate 90% (VCP-SFC-0002)

```
formula: "C₉H₁₁NaO₃S"
casNumber: "28348-53-0"
appearance: "White to off-white powder / flakes"
molecularWeight: "222.24 g/mol"
hsCode: "29041090"
description: (full paragraph — see seed.ts line 912)
specs: [
  { key: "Active Content", value: "≥ 90.0%" },
  { key: "pH (10% solution)", value: "8.0 – 11.0" },
  { key: "Colour", value: "White to off-white" },
  { key: "Odour", value: "Mild aromatic" },
  { key: "Solubility in Water", value: "Freely soluble" },
  { key: "Sulfate Content", value: "< 0.5%" },
  { key: "Sulfone Content", value: "< 1.0%" },
  { key: "Moisture", value: "≤ 5.0%" },
  { key: "Bulk Density", value: "0.5 – 0.7 g/mL" },
]
applications: [9 entries — same as SCS 40% minus metal cleaning]
industries: [7 entries — same as SCS 40% minus Metal Processing]
safetyClass: "Irritant"
ghsPictograms: ["GHS07"]
signalWord: "Warning"
hazardStatements: ["H315 – Causes skin irritation", "H319 – Causes serious eye irritation"]
grades: ["Technical Grade", "Industrial Grade"]
packaging: ["25 kg HDPE-lined bags", "500 kg jumbo bags", "Custom packaging on request"]
minOrderQuantity: "1 MT"
```

### SXS 90% — Sodium Xylene Sulfonate 90% (VCP-SFC-0003)

```
formula: "C₈H₉NaO₃S"
casNumber: "1300-72-7"
appearance: "White to off-white powder"
molecularWeight: "208.21 g/mol"
hsCode: "29041090"
description: (full paragraph — see seed.ts line 976)
specs: [
  { key: "Active Content", value: "≥ 90.0%" },
  { key: "pH (10% solution)", value: "8.0 – 11.0" },
  { key: "Colour", value: "White to off-white" },
  { key: "Odour", value: "Mild" },
  { key: "Solubility in Water", value: "Freely soluble" },
  { key: "Sulfate Content", value: "< 1.0%" },
  { key: "Moisture", value: "≤ 5.0%" },
  { key: "Bulk Density", value: "0.5 – 0.7 g/mL" },
]
applications: [8 entries]
industries: [6 entries — Household & Industrial Cleaning, Personal Care & Cosmetics, Detergent Manufacturing, Textile Processing, Agrochemicals, Paints & Coatings]
safetyClass: "Irritant"  |  GHS07  |  Warning  |  H315 + H319
grades: ["Technical Grade", "Industrial Grade"]
packaging: ["25 kg HDPE-lined bags", "500 kg jumbo bags", "Custom packaging on request"]
minOrderQuantity: "1 MT"
```

### SXS 40% — Sodium Xylene Sulfonate 40% (VCP-SFC-0004)

```
formula: "C₈H₉NaO₃S"
casNumber: "1300-72-7"
appearance: "Clear to slightly hazy liquid"
molecularWeight: "208.21 g/mol"
hsCode: "29041090"
description: (full paragraph — see seed.ts line 1037)
specs: [
  { key: "Active Content", value: "39.0 – 41.0%" },
  { key: "pH (as supplied)", value: "7.0 – 10.0" },
  { key: "Specific Gravity (25°C)", value: "1.06 – 1.10" },
  { key: "Colour", value: "Clear to slightly hazy" },
  { key: "Odour", value: "Mild" },
  { key: "Solubility in Water", value: "Fully miscible" },
  { key: "Sulfate Content", value: "< 1.0%" },
  { key: "Moisture", value: "58 – 62%" },
  { key: "Cloud Point", value: "< 0°C (as supplied)" },
  { key: "Storage Temperature", value: "> 10°C (to prevent crystallisation)" },
]
applications: [9 entries — including metal cleaning and degreasing]
industries: [7 entries — including Metal Processing]
safetyClass: "Irritant"  |  GHS07  |  Warning  |  H315 + H319
grades: ["Technical Grade", "Industrial Grade"]
packaging: ["240 L HDPE drums", "1000 L IBC tanks", "Bulk tanker loads", "Custom packaging on request"]
minOrderQuantity: "1 MT"
```

## Implementation Steps

### Step 1: Fix `src/app/api/seed/route.ts`
Replace the 4 stub surfactant product objects (lines 391–483) with complete data as above, with `hsCode: "29041090"`. Source the full description and arrays directly from `src/seed.ts`.

### Step 2: Fix `src/seed.ts`
- Lines 846, 915, 979, 1040: Change `hsCode: "2904.10"` → `hsCode: "29041090"`
- Lines 249, 275: Change "HS code" / "HS Code" → "HSN Code" in the FAQ text

### Step 3: Fix `src/lib/products.ts`
Fill in the 4 stub surfactant records (lines 363–511) with complete data, converting specs from array-of-pairs format to the object format the static fallback uses. Set `hsCode: "29041090"`.

### Step 4: Fix frontend label
`src/app/(frontend)/product/[slug]/page.tsx` line 626: Change `"HS Code"` → `"HSN Code"`.

### Step 5: Seed the database
After editing, call `POST /api/seed` with the appropriate API key to clear and re-insert all 16 products into Payload CMS with complete data.

## Verification

1. After running seed, visit `/product/sodium-cumene-sulfonate-40` — should show full description, all specs in table, applications list, HSN Code displayed as `29041090` (not `2904.10`), and the label reads "HSN Code" (not "HS Code").
2. Repeat for the other 3 product pages.
3. Check Payload CMS admin (`/admin/collections/products`) to confirm all 4 products have populated fields.
4. Confirm the static fallback in `products.ts` also has correct data (viewable without database by temporarily short-circuiting the DB fetch in the page component).
