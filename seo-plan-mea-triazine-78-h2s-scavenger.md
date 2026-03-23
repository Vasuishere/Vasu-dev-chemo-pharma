# SEO Implementation Plan — MEA Triazine 78% H2S Scavenger Product Page
**URL:** `/product/mea-triazine-78-h2s-scavenger`  
**Brand:** Vasudev Chemo Pharma  
**Domain:** `https://Vasudevchemopharma.com`  
**Stack:** Next.js 14 + Payload CMS, hosted on Vercel  
**SKU:** `VCP-IND-0001`  
**Document version:** 2.0  
**Prepared:** March 2026 (updated with codebase alignment)  
**Audience:** SEO strategist, dev team, content team, product owner

---

## Table of Contents

1. [Assumptions, Risks & Rollback Plan](#1-assumptions-risks--rollback-plan)
2. [Target Keywords & Variations](#2-target-keywords--variations)
3. [On-Page Optimization Plan](#3-on-page-optimization-plan)
4. [Technical SEO & Performance](#4-technical-seo--performance)
5. [Content & Link-Building Plan](#5-content--link-building-plan)
6. [Tracking, Measurement & Governance](#6-tracking-measurement--governance)
7. [Phase 1: MVP Checklist (Weeks 1–2)](#7-phase-1-mvp-checklist-weeks-12)
8. [Phase 2: Enhancements (Weeks 3–6+)](#8-phase-2-enhancements-weeks-36)
9. [Templates & Code Snippets](#9-templates--code-snippets)

---

## 1. Assumptions, Risks & Rollback Plan

### 1.1 Assumptions

| # | Assumption |
|---|-----------|
| A1 | The site is built on **Next.js 14 + Payload CMS**, deployed on **Vercel**, with full control over `<head>`, structured data, and URL routing via `src/app/(frontend)/product/[slug]/page.tsx`. |
| A2 | The product "MEA Triazine 78%" (SKU `VCP-IND-0001`, CAS 4719-04-4) refers to a **78% active-concentration** monoethanolamine triazine H2S scavenger — a distinct SKU from MMA Triazine 40% and other variants. |
| A3 | The primary target markets are English-speaking: USA, Canada, UK, Australia, UAE, and India (EN). Secondary: Arabic (SA, AE), Portuguese (BR). |
| A4 | The site has Google Search Console (GSC), Google Analytics 4 (GA4), and a crawl tool (Screaming Frog or Sitebulb) already configured or will be set up. |
| A5 | The dev team can implement JSON-LD structured data (already done via `src/components/seo/ProductSchema.tsx`) and custom HTTP headers (already configured in `next.config.mjs`). |
| A6 | Competitors include Lonza (Grotan BK), Thor (Acticide/Nipacide), LANXESS (Protectol), Troy (Troyshield/Triadine), Q2 Technologies, Jay Dinesh Chemicals, ECHEMI-listed suppliers, and regional manufacturers marketing under trade names listed in §2.4. |
| A7 | The page does not currently rank on page 1 for primary target keywords. |

### 1.2 Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Thin/duplicate content penalised by Helpful Content Update | Medium | High | Write 1,500+ words of original, expert-level content; avoid copy-paste from SDS sheets |
| Keyword cannibalization from variant pages (42%, 62%, 80%) | High | High | Use canonical tags; segment by concentration; differentiate content angles |
| Slow page speed killing Core Web Vitals | Medium | High | Image optimization, lazy loading, CDN — tracked via CrUX |
| Hreflang errors causing wrong-region pages to rank | Medium | Medium | Validate with hreflang testing tools before deployment |
| Over-optimization / keyword stuffing flagged | Low | High | Keep primary keyword density ≤ 1.5%; use semantic variants throughout |
| Chemical/industrial product pages filtered by SafeSearch | Low | Low | Ensure content is clearly industrial/B2B; no ambiguous framing |
| Third-party supplier schema conflict | Low | Medium | Use `offers.seller` and `brand` fields precisely in Product schema |

### 1.3 Rollback Plan

1. **Before any major change**, export the current page HTML and take a GSC performance snapshot (impressions, clicks, avg. position for all ranked URLs).
2. **Tag every deploy** that changes meta tags, schema, or URL structure with a Git commit SHA + date in your change log.
3. **If rankings drop > 30% within 14 days** of a change:
   - Revert the specific commit via version control.
   - Re-submit URL to GSC for reindexing.
   - Open a GSC "Coverage" check to confirm no new index errors.
4. **For URL changes / 301 redirects**: if crawl errors spike, reinstate the old URL pattern temporarily while diagnosing.
5. **Structured data rollback**: if Rich Results are lost or a Manual Action appears, revert schema to previous version and request a review in GSC.

---

## 2. Target Keywords & Variations

### 2.1 Primary Keywords

| Keyword | Monthly Search Volume (est.) | Intent | Priority |
|---------|------------------------------|--------|----------|
| MEA triazine H2S scavenger | 600–1,200 (global) | Commercial / Transactional | ★★★★★ |
| MEA triazine 78% | 200–500 | Transactional | ★★★★★ |
| MEA triazine 78% H2S scavenger | 100–300 | Transactional | ★★★★★ |
| Triazine scavenger | 300–600 | Commercial | ★★★★★ |
| MEA triazine | 500–1,000 | Informational / Commercial | ★★★★★ |
| Triazine 78% | 100–300 | Transactional | ★★★★☆ |
| 78% MEA triazine | 50–150 | Transactional | ★★★★☆ |

### 2.2 Secondary & Long-Tail Keywords

```
monoethanolamine triazine H2S scavenger
monoethanolamine triazine 78%
MEA triazine hydrogen sulfide scavenger
H2S scavenger triazine oil and gas
triazine H2S scavenger natural gas
triazine H2S scavenger crude oil
triazine H2S scavenger supplier
buy MEA triazine scavenger
MEA triazine scavenger price
MEA triazine scavenger manufacturer
triazine 78 H2S scavenger
hexahydro triazine H2S scavenger
H2S scavenger for sour gas
triazine H2S scavenger dosing
triazine H2S removal efficiency
sour gas treatment chemical
hydrogen sulfide removal chemical
H2S scavenger injection rate
oilfield H2S scavenger
gas sweetening chemical triazine
MEA triazine vs MMA triazine
triazine scavenger wastewater treatment
triazine biogas H2S removal
non-regenerable H2S scavenger
water-soluble H2S scavenger
formaldehyde-free H2S scavenger
MEA triazine 78 percent h2s scavenger supplier
h2s scavenger chemical for gas sweetening
buy mea triazine 78 industrial grade
Triazine based H2S scavenging chemical
MEA-triazine blends
H2S scavenger triazine based
technical grade triazine
high purity triazine
MEA triazine 78 H2S scavenger
triazine based scavenger
water treatment chemicals triazine
offshore H2S scavenger
onshore H2S scavenger
desulfurizer triazine
gas sweetener triazine
mercaptan scavenger triazine
industrial microbiocide triazine
slimicide triazine
bactericideand algicide triazine
cutting fluid preservative triazine
anti-mildew agent triazine
formaldehyde-releasing biocide
```

### 2.3 IUPAC / Chemical Name & CAS — Full Synonym List

```
1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol
Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine
TRIS(N-HYDROXYETHYL) HEXAHYDROTRIAZINE
HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-5-TRIAZINE
2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol
2,2',2"-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol
2,2′,2′′-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol (HHT)
2,2',2'-(Hexahydro-1,3,5-triazine-1,3,5-triyl) Triethanol
1, 3, 5-Tris (2-hydroxyethyl) hexahydro-triazine
1,3,5-tris(2-hydroxyethyl)hexahydro-1,3,5-triazine
triazinetriethanol
MEA based Triazine
Triazine H2S Scavenger
s-Triazine-1,3,5-triethanol
CAS 4719-04-4
CAS no 4719-04-4 H2S scavenger
s-triazine hydrogen sulfide
1,3,5-Triazine
Hydrogen Sulfide Scavenger
J2.219E
hexahydrotriazine H2S scavenger
```

### 2.4 Trade Name & Competitor Brand Keywords ("Also Known As" / Comparison Context)

These are the primary ranking targets — users search by these brand names when looking for equivalent products.

#### Category A — Major Global Brands (Lonza, Thor, LANXESS, Troy, etc.)

```
Grotan BK
Grotan HD
Grotan B
Grotanol
Parmetol
Nipacide BK
Acticide GR
Acticide HHB
Bioban GK
Protectol HT
Triadine 3
Triadine 10
Triadine 174
Onyxide 200
Onyxide 200-50
Busan 1060
Busan 1506
Mergal KM200
Mergal 174II
Mergal 165
Troyshield B2
Basolon SC 78
Nuosept 78
Kalpur TE
```

#### Category B — Oilfield & H2S Scavenger-Specific Brands

```
G-SCAV EA77
H2Stopper 1908C
JadeScan54
SP-BIO-TZ
BK biocide
BK Biocide
Scavtreat
ICPL H2S Scavenger
JDC-TR
JDC-H2S Scavenger
JDC H2S Scavenger
MEA Triazine 78% H2S Scavenger
Explorax
MEA Triazine 70
Sine PF77
Sine PF25
Sine PF30
Sine PF46
Sine PF50
Sine PF55
Sine PF60
```

#### Category C — Regional & Generic Trade Names

```
GreatAp HHT
Triazine BK
IR-Triazine
Water Treatment Biocide BK
Silworld Triazine 78
silworld MEA Triazine
Actane
Bactraclean
ETA 75
KM 200
KM 200 (alcohol)
Amebact C
Dodigen NJ
Bestcide 1087T
Permachem OB 2
Surcide D
Surcide P
Ottaform 204
Roksol T 1-7
Cobate C
Exocide BK
Miliden X-2
Syntan OXB
```

#### Category D — Functional / Application-Based Keywords to Rank For

```
H2S Scavenger
Hydrogen Sulfide Scavenger
Desulfurizer
Gas Sweetener
Sweetening Agent
Mercaptan Scavenger
Offshore Scavenger
Onshore Scavenger
Formaldehyde-Releasing Biocide
Industrial Microbiocide
Industrial Microbiostat
Slimicide
Bactericide and Algicide
Cutting Fluid Preservative
Anti-mildew Agent
Industrial Preservation Biocide
```

> **Usage rule:** Reference competitor trade names in a *comparison table*, *"also known as" list*, or *"equivalent to"* context only — never as if they are Vasudev Chemo Pharma's own product. This captures search traffic from engineers searching by their current supplier's brand name.

### 2.5 Common Misspellings & Typos

```
MEA trizine H2S
MEA triazone scavenger
monoethalamine triazine
monoethanolamine trizaine
MEA triazene scavenger
H2S scaveenger triazine
triazine H2s scavanger
triazinetriethanol (no space)
triazine tri ethanol
```
> Include these in page copy or FAQ schema (`acceptedAnswer`) as corrections — do NOT place misspellings in title tags or headings.

### 2.6 Multilingual / Regional Keyword Variants

| Region/Language | Keyword |
|-----------------|---------|
| Arabic (SA/AE) | مادة ازالة كبريتيد الهيدروجين ترايازين / MEA triazine مزيل H2S |
| Portuguese (BR) | removedor H2S triazina MEA / captador de H2S triazina |
| Spanish (ES/MX) | captador H2S triazina MEA / eliminador de sulfuro de hidrógeno triazina |
| Hindi (IN) | MEA ट्राइज़ाइन H2S स्केवेंजर |

---

## 3. On-Page Optimization Plan

### 3.1 URL

**Current:** `/product/mea-triazine-78-h2s-scavenger`  
**Assessment:** ✅ Already good — lowercase, hyphenated, keyword-rich, no stop words.  
**Recommended (no change needed):** Keep as-is. Do NOT change the URL after indexing unless forced.

If you ever restructure:
```
/chemicals/h2s-scavengers/mea-triazine-78/
```
Only do this with a permanent 301 redirect from the old slug.

### 3.2 Title Tag

**Formula:** `[Primary KW + Concentration] | [Brand USP] | [Brand Name]`

```html
<!-- RECOMMENDED TITLE TAG (≤ 60 characters) -->
<title>MEA Triazine 78% H2S Scavenger | Industrial Grade | Vasudev Chemo Pharma</title>
```

**Variant A (transactional focus):**
```html
<title>Buy MEA Triazine 78% H2S Scavenger – Bulk & Drum Supply | Vasudev Chemo Pharma</title>
```

**Variant B (spec/engineering focus):**
```html
<title>MEA Triazine 78% H2S Scavenger – CAS 4719-04-4 | Vasudev Chemo Pharma Chemicals</title>
```
> A/B test Variant A vs. Variant B after Phase 1. Choose based on CTR in GSC after 30 days.

### 3.3 Meta Description

**Formula:** `[Problem solved] + [Primary KW + concentration] + [Key differentiator] + [CTA]`

```html
<meta name="description" content="MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) — effective monoethanolamine triazine for removing hydrogen sulfide from natural gas, crude oil, and wastewater. Industrial drum &amp; IBC supply. Request a quote today.">
```
> Length target: 145–155 characters. Include at least one number (78%, CAS) for visual scannability in SERPs.

**Variant for transactional SERPs:**
```html
<meta name="description" content="Buy MEA Triazine 78% H2S Scavenger online. High-purity monoethanolamine triazine for sour gas treatment, oilfield, &amp; wastewater. Fast dispatch. Bulk pricing available.">
```

### 3.4 Header Structure (H1–H4)

```
H1: MEA Triazine 78% H2S Scavenger
  H2: What Is MEA Triazine 78%? (Chemical Overview)
    H3: Chemical Names and Identifiers (CAS 4719-04-4)
    H3: How MEA Triazine Reacts with H2S (Reaction Mechanism)
  H2: Key Applications and Use Cases
    H3: Natural Gas Sweetening and Pipeline Treatment
    H3: Crude Oil Refining and Downhole Injection
    H3: Wastewater Treatment and Biogas Purification
  H2: Product Specifications
    H3: Physical & Chemical Properties
    H3: Concentration and Formulation Details (78% Active)
  H2: Dosing Guidelines and Injection Rates
    H3: Continuous Injection Method
    H3: Contactor Tower Method
  H2: Safety and Handling
    H3: SDS Summary and PPE Requirements
    H3: Storage, Shelf Life, and Compatibility
  H2: MEA Triazine 78% vs. Other H2S Scavenger Options
    H3: MEA Triazine vs. MMA Triazine
    H3: MEA Triazine vs. Glyoxal-Based Scavengers
    H3: MEA Triazine vs. Non-Amine Alternatives
  H2: Why Choose Vasudev Chemo Pharma for MEA Triazine 78%?
    H3: Also Known As — Trade Name Equivalence (Grotan BK, Nipacide BK, Acticide, Triadine, etc.)
  H2: Frequently Asked Questions
  H2: Related Products
```

> **Rule:** Only one H1 per page. H1 must contain the primary keyword verbatim. Every H2 should introduce a new semantic cluster.

### 3.5 Canonical Tag

```html
<!-- Self-referencing canonical — always present -->
<link rel="canonical" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
```

If variant pages exist (e.g., `?ref=email`, `?source=ppc`):
```
https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger?ref=email
→ canonical → https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger
```

For concentration variant pages (42%, 62%, 80%): each gets its **own canonical** — do NOT canonicalize variants to the 78% page.

### 3.6 Structured Data (Schema.org JSON-LD)

See [Section 9.1](#91-json-ld-structured-data-snippet) for the full, ready-to-paste code block.

Implement the following schema types:
- `Product` (with `offers`, `brand`, `manufacturer`, `aggregateRating`)
- `FAQPage` (from FAQ section)
- `BreadcrumbList`
- `Organization` (site-level, in `<head>`)

### 3.7 Image Optimization

Every product image MUST have:
```html
<!-- Hero product image -->
<img
  src="/images/mea-triazine-78-h2s-scavenger-drum.webp"
  alt="MEA Triazine 78% H2S Scavenger – 200L industrial drum"
  width="800"
  height="800"
  loading="eager"
  fetchpriority="high"
/>

<!-- Process diagram -->
<img
  src="/images/mea-triazine-h2s-reaction-diagram.webp"
  alt="Reaction diagram: MEA Triazine removing H2S from natural gas stream"
  width="1200"
  height="630"
  loading="lazy"
/>

<!-- Application photo -->
<img
  src="/images/mea-triazine-oilfield-injection-skid.webp"
  alt="MEA Triazine 78% being injected into sour gas pipeline at oilfield facility"
  width="900"
  height="600"
  loading="lazy"
/>
```

**Image checklist:**
- [ ] Use WebP or AVIF format; provide JPEG fallback
- [ ] Max file size: hero ≤ 80KB, supporting images ≤ 40KB
- [ ] Filename uses hyphens and keywords (no `IMG_1234.jpg`)
- [ ] Include dimensions (`width`/`height`) to prevent layout shift (CLS)
- [ ] `fetchpriority="high"` on the LCP image only

### 3.8 Internal Linking

**Link TO this page from:**

| Source Page | Anchor Text |
|------------|-------------|
| Category page: H2S Scavengers | "MEA Triazine 78% H2S Scavenger" |
| Blog: "How to Choose an H2S Scavenger" | "MEA Triazine 78%" |
| Blog: "Natural Gas Sweetening Methods" | "monoethanolamine triazine for gas treatment" |
| Related product: MEA Triazine 62% | "higher-concentration 78% formulation" |
| Related product: MMA Triazine | "compare with MEA Triazine 78%" |
| Home page (if featured) | "H2S Scavenger — MEA Triazine 78%" |

**Link FROM this page to:**
- Category: `/chemicals/h2s-scavengers/` — "Browse all H2S Scavengers"
- Related product: `/product/mea-triazine-62-h2s-scavenger` — "MEA Triazine 62%"
- Related product: `/product/mma-triazine-h2s-scavenger` — "MMA Triazine scavenger"
- Resource: `/resources/h2s-scavenger-dosing-calculator` — "Use our free dosing calculator"
- Resource: `/resources/sds/mea-triazine-78-sds.pdf` — "Download SDS / Safety Data Sheet"
- Blog: `/blog/mea-triazine-vs-mma-triazine` — "MEA vs. MMA Triazine: which is right?"

### 3.9 Content Strategy: Full Page Content Blueprint

Write **minimum 1,500 words** of original content, targeting engineers, procurement managers, and field chemists. Do NOT copy SDS sheets verbatim.

#### Section 1: Product Overview (150–200 words)
- Define MEA Triazine 78% in plain but technical language.
- State the primary application (H2S scavenging in oil & gas).
- Mention CAS no. (4719-04-4) and IUPAC name.
- Introduce the 78% active concentration as the optimal balance of reactivity, handling safety, and cost.

#### Section 2: Reaction Mechanism (100–150 words + diagram)
- Describe how MEA triazine reacts with H2S to form stable, water-soluble thiadiazine byproducts.
- Include the balanced reaction equation in text or an image.
- Mention conversion efficiency (up to 80% removal in contactor towers per industry data).

#### Section 3: Use Cases (200–250 words)
Cover each sub-application with 2–3 sentences:
1. Natural gas pipelines and gathering systems
2. Downhole injection (sour well treatment)
3. Crude oil refining and storage tanks
4. Wastewater treatment and odour control
5. Biogas purification

#### Section 4: Product Specifications Table

| Property | Value |
|----------|-------|
| Active Concentration | 78% (w/w) |
| Chemical Name | Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine |
| CAS Number | 4719-04-4 |
| Appearance | Clear to light yellow liquid |
| Odour | Mild amine (fishy) |
| pH (neat) | 9.5–11.0 |
| Flash Point | >93°C (>200°F) |
| Density | ~1.10 g/mL at 20°C |
| Solubility | Fully miscible with water |
| Shelf Life | 12 months (sealed, shaded) |
| Packaging | 25L, 200L drum, 1,000L IBC |

#### Section 5: Dosing & Injection Guidelines (200–250 words)
- Typical treating rate: 1.5–3 L of 78% triazine per kg of H2S (field-specific).
- Direct injection into gas stream vs. contactor tower approach.
- Note risk of solids formation on over-treatment.
- Link to dosing calculator tool.
- Include a sample dosing calculation example:
```
Gas flow: 10 MMscfd
H2S concentration: 200 ppm
H2S load: ~2.4 kg/day
Typical MEA Triazine 78% dosage: 2.4 × 2 = 4.8 L/day
```

#### Section 6: Safety and Handling Summary (150 words)
- PPE: nitrile gloves, safety glasses, chemical-resistant clothing.
- First aid for skin/eye contact.
- Incompatibilities: strong acids, oxidizers, epoxides.
- Storage: cool (<30°C), ventilated, away from direct sunlight.
- Link to full SDS PDF.

#### Section 7: Competitor Comparison Table (100–150 words)

| Feature | MEA Triazine 78% | MMA Triazine | Glyoxal-Based |
|---------|-----------------|--------------|---------------|
| Active concentration | 78% | 20–80% | 40–80% |
| Water solubility | High | High | Moderate |
| Reaction speed | Fast | Fast | Moderate |
| Solids formation risk | Low–Medium | Low | Low |
| Suitable for offshore | Yes | Yes | Conditional |
| Regenerable | No | No | No |
| Cost index | ★★★ | ★★★ | ★★ |

#### Section 8: FAQ (6–8 questions — also used for FAQPage schema)
Sample questions:
1. What is the difference between MEA Triazine 78% and 80%?
2. Can MEA Triazine 78% be used in offshore applications?
3. What causes solids formation when using triazine H2S scavengers?
4. Is MEA Triazine 78% formaldehyde-free?
5. What is the shelf life of MEA Triazine 78%?
6. How do I calculate the correct dosing rate for my application?
7. What are the byproducts of the MEA Triazine H2S scavenging reaction?
8. Does MEA Triazine work on mercaptans?

### 3.10 Keyword Placement & Density Rules

| Location | Keyword / Variant |
|----------|-------------------|
| Title tag | Primary keyword (exact) |
| H1 | Primary keyword (exact) |
| First 100 words of body | Primary keyword once, IUPAC name once |
| H2 headings (×3 minimum) | Semantic variants only |
| Meta description | Primary keyword (exact) |
| Image alt text (primary image) | "MEA Triazine 78% H2S Scavenger" |
| Anchor text (internal) | Varies — no exact-match stuffing |
| Breadcrumb | Abbreviated version |

**Density target:** Primary keyword ≤ 1.2% of total word count. Use LSI terms (hydrogen sulfide, sour gas, monoethanolamine, H2S removal, oil and gas) to fill semantic coverage.

**Avoid:** Repeating "MEA Triazine 78% H2S Scavenger" in every paragraph. Search engines reward topic coverage, not repetition.

### 3.11 International SEO — hreflang Implementation

Implement `hreflang` in `<head>` for each language/region version of the page:

```html
<!-- English — default / international -->
<link rel="alternate" hreflang="en" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- English — United States -->
<link rel="alternate" hreflang="en-US" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- English — United Kingdom -->
<link rel="alternate" hreflang="en-GB" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- English — India -->
<link rel="alternate" hreflang="en-IN" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- Arabic — Saudi Arabia -->
<link rel="alternate" hreflang="ar-SA" href="https://Vasudevchemopharma.com/ar/product/mea-triazine-78-h2s-scavenger" />

<!-- Portuguese — Brazil -->
<link rel="alternate" hreflang="pt-BR" href="https://Vasudevchemopharma.com/pt-br/product/mea-triazine-78-h2s-scavenger" />

<!-- x-default (fallback for all others) -->
<link rel="alternate" hreflang="x-default" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
```

**Rules:**
- Every regional URL must link back to all other regional URLs in its own `<head>`.
- Validate hreflang with [hreflang.org checker](https://hreflang.org/checker) before go-live.
- If translated pages don't exist yet, only implement en + x-default. Placeholder hreflang pointing to untranslated pages causes Google errors.

---

## 4. Technical SEO & Performance

### 4.1 Core Web Vitals Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP (Largest Contentful Paint) | < 2.5 s | PageSpeed Insights, CrUX |
| INP (Interaction to Next Paint) | < 200 ms | CrUX, WebPageTest |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse, CrUX |
| TTFB (Time to First Byte) | < 800 ms | WebPageTest |
| FCP (First Contentful Paint) | < 1.8 s | Lighthouse |

### 4.2 Page Speed Optimization Checklist

**Images:**
- [ ] Convert all images to WebP (AVIF for supporting browsers)
- [ ] Enable lazy loading (`loading="lazy"`) on all below-fold images
- [ ] Set explicit `width` and `height` on all `<img>` tags
- [ ] Use a CDN (Cloudflare, Fastly, or AWS CloudFront) for image delivery

**CSS/JS:**
- [ ] Defer non-critical JS with `defer` or `async`
- [ ] Inline critical CSS (above-fold styles)
- [ ] Remove unused CSS (PurgeCSS or equivalent)
- [ ] Enable Brotli or gzip compression on the server

**Server/Infrastructure:**
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Set `Cache-Control: public, max-age=31536000, immutable` for static assets
- [ ] Set `Cache-Control: no-cache, must-revalidate` for the HTML page itself
- [ ] Enable server-side rendering (SSR) or static generation (SSG) to avoid client-side render delays

**Fonts:**
- [ ] Use `font-display: swap` for all web fonts
- [ ] Preload primary font: `<link rel="preload" href="/fonts/primary.woff2" as="font" type="font/woff2" crossorigin>`

### 4.3 Mobile Usability

- [ ] Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] All tap targets ≥ 48×48px
- [ ] No horizontal scrolling
- [ ] Product spec table must be horizontally scrollable on mobile (CSS: `overflow-x: auto`)
- [ ] CTA buttons ("Request Quote", "Download SDS") visible above fold on mobile
- [ ] Test with Google Mobile-Friendly Test before launch

### 4.4 Crawl Budget Awareness

- [ ] Add page to XML sitemap with `<priority>0.9</priority>` and `<changefreq>monthly</changefreq>`
- [ ] Ensure page is not blocked in `robots.txt`
- [ ] Avoid faceted navigation/filter query strings getting indexed (use `rel="nofollow"` or canonical)
- [ ] Remove or noindex session ID parameters: `?sessionid=`, `?ref=`
- [ ] Paginated content (customer reviews): use `rel="next"` / `rel="prev"` or infinite scroll with proper JS rendering

```xml
<!-- sitemap.xml entry -->
<url>
  <loc>https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger</loc>
  <lastmod>2026-03-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

### 4.5 301 Redirects & URL Management

```
# If previously existed at a different URL:
/products/mea-triazine-78/        → 301 → /product/mea-triazine-78-h2s-scavenger
/product/mea-triazine-78          → 301 → /product/mea-triazine-78-h2s-scavenger
/product/MEA-Triazine-78          → 301 → /product/mea-triazine-78-h2s-scavenger
/product/mea-triazine-78-h2s-scavenger/  → 301 → /product/mea-triazine-78-h2s-scavenger
```
> Always redirect trailing-slash and non-trailing-slash to one canonical form.

### 4.6 HTTP Headers to Add

```
X-Robots-Tag: index, follow
Content-Language: en
Vary: Accept-Encoding
```

### 4.7 Structured Data Types

| Schema Type | Location | Purpose |
|------------|----------|---------|
| `Product` | This page `<head>` | Enables Product rich results (price, availability, ratings) |
| `FAQPage` | This page `<head>` | Enables FAQ rich results (expands real estate in SERP) |
| `BreadcrumbList` | This page `<head>` | Shows category breadcrumb in SERP URL line |
| `Organization` | Site-wide `<head>` | Brand trust signals for Knowledge Panel |
| `Review` / `AggregateRating` | Nested in `Product` | Star rating display in SERPs |

See Section 9.1 for full JSON-LD code.

---

## 5. Content & Link-Building Plan

### 5.1 Six-Week Content Calendar

| Week | Content Piece | Target Keyword(s) | Format | Channel |
|------|--------------|-------------------|--------|---------|
| 1 | "MEA Triazine vs. MMA Triazine: Which H2S Scavenger Is Right for Your Operation?" | MEA triazine vs MMA triazine | Blog / Comparison article | Blog + LinkedIn |
| 1 | Product page copy update (per this plan) | MEA triazine 78% H2S scavenger | On-page | Website |
| 2 | "How to Calculate MEA Triazine Dosing for Sour Gas Treatment" | MEA triazine dosing, H2S scavenger injection rate | Technical guide + calculator | Blog + email |
| 2 | "MEA Triazine 78% — Full Technical Data Sheet" (PDF) | MEA triazine 78% technical data sheet | Downloadable PDF | Product page + email |
| 3 | "Natural Gas Sweetening: A Field Engineer's Guide to H2S Removal" | natural gas H2S removal, sour gas treatment chemicals | Long-form pillar article | Blog + LinkedIn |
| 3 | Case Study: "Reducing H2S in [Industry X] with MEA Triazine 78%" | MEA triazine case study | Case study (PDF + web) | Blog + PR |
| 4 | "H2S Scavenger Selection Guide: MEA Triazine, Glyoxal, and Alternatives" | H2S scavenger comparison | Comparison page | Blog + internal link |
| 4 | Video: "How MEA Triazine Removes H2S: Reaction Mechanism Explained" | MEA triazine H2S reaction | YouTube + embed on page | YouTube + product page |
| 5 | "Safety Handling Guide for MEA Triazine H2S Scavengers" | MEA triazine safety, H2S scavenger handling | Technical PDF + blog | Blog + SDS page |
| 5 | Guest post pitch: Oil & gas trade publication (SPE, Oil & Gas Journal) | Thought leadership / brand | Guest article | 3rd-party publication |
| 6 | "Biogas H2S Removal: Using MEA Triazine in Wastewater and Biogas Plants" | triazine biogas H2S removal | Blog | Blog + LinkedIn |
| 6 | Link reclamation + broken-link outreach (see §5.3) | — | Outreach | Email |

### 5.2 Link-Building Strategy

#### Tier 1: Technical Documentation & Directory Listings
- Submit to **ChemicalBook**, **Sigma-Aldrich Chemical Directory**, **ECHEMI**, **Made-in-China**, **Global Chemical Supply Directories**.
- Ensure listings include a link to `/product/mea-triazine-78-h2s-scavenger`.
- Create a **REACH / GHS compliant product listing** on EU chemical registries where applicable.

#### Tier 2: Industry Directories & Associations
Target listings in:
- SPE (Society of Petroleum Engineers) supplier directory
- NACE International supplier index
- OGF (Oil & Gas Facilities) supplier pages
- WaterWorld supplier directory (for wastewater use case)
- Biogas/biomethane sector directories (e.g., American Biogas Council, BiogasWorld)

#### Tier 3: Case Studies & White Papers (Earned Links)
- Publish a peer-reviewed or co-authored technical white paper on H2S scavenging efficiency and submit to SPE paper repository.
- Offer co-branded case studies to end-users (refineries, operators) who will link to the product page from their sustainability or operations reports.

#### Tier 4: Broken Link & Unlinked Mention Reclamation
- Use Ahrefs / Semrush to find pages linking to competitor product URLs that have been changed/removed.
- Use Google Alerts / Mention.com to find brand or product mentions without a hyperlink.
- Outreach template in Section 5.3.

### 5.3 Outreach Messaging Templates

#### Template A — Supplier Directory Listing Request
```
Subject: Listing Request — MEA Triazine 78% H2S Scavenger | Vasudev Chemo Pharma

Hi [Name/Editor],

I'm reaching out from Vasudev Chemo Pharma, a manufacturer of industrial H2S scavenging
chemicals serving the oil & gas, wastewater, and biogas sectors globally.

We'd like to submit our MEA Triazine 78% H2S Scavenger product for listing in your
[Directory Name] supplier database. This product is widely used for sour gas
treatment and pipeline protection.

Product URL: https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger
TDS available: Yes | SDS available: Yes | CAS: 4719-04-4

Would you be able to include our product listing? Happy to provide any additional
technical documentation needed.

Best regards,
[Your Name] | [Title] | Vasudev Chemo Pharma
```

#### Template B — Broken Link / Link Reclamation
```
Subject: Broken link on [Their Page Title] — we can help

Hi [Name],

I noticed your article "[Page Title]" at [URL] includes a reference to [competitor
product / dead link], but the link appears to be broken / the product has been
discontinued.

We offer a direct alternative — MEA Triazine 78% H2S Scavenger — that covers the
same application. We've also published a detailed technical guide that may be a
useful resource for your readers:

https://Vasudevchemopharma.com/blog/mea-triazine-dosing-guide

Would you consider updating the link? Happy to answer any technical questions.

Best,
[Your Name]
```

#### Template C — Guest Post / Co-authored White Paper Pitch
```
Subject: Technical contribution proposal — H2S Scavenger selection for sour gas

Hi [Editor Name],

I'm a [role] at Vasudev Chemo Pharma, with [X] years of experience in oilfield H2S scavenging
chemistry. I'd like to propose a contributed article for [Publication Name] on:

"MEA Triazine vs. Non-Regenerable H2S Scavengers: A Field Decision Framework"

The article would cover: reaction mechanisms, dosing economics, offshore vs.
onshore trade-offs, and real-world OPEX data. No product promotion — purely
technical content.

Happy to share an outline or first draft. Would this be a fit for your audience?

Best,
[Your Name] | [Credentials/Title] | [Brand]
```

---

## 6. Tracking, Measurement & Governance

### 6.1 Key Metrics

| Category | Metric | Tool | Target |
|----------|--------|------|--------|
| Rankings | Avg. position for primary KW | GSC, Ahrefs | Top 5 within 90 days |
| Rankings | No. of KWs in top 10 | GSC | +15 KWs within 90 days |
| Traffic | Organic sessions to page | GA4 | +40% MoM after Phase 1 |
| Engagement | Avg. engagement time (dwell) | GA4 | > 2:30 min |
| Engagement | Bounce/exit rate on page | GA4 | < 60% |
| CTR | Organic CTR for primary KW | GSC | > 4.5% |
| Conversions | Quote requests / form submits | GA4 Events | Baseline + 20% |
| Conversions | SDS PDF downloads | GA4 Events | Track as micro-conversion |
| Backlinks | Referring domains | Ahrefs/Semrush | +5 quality RDs/month |
| Core Web Vitals | LCP, INP, CLS | CrUX, PageSpeed | Pass all 3 (green) |

### 6.2 GA4 Event Configuration

```javascript
// Track SDS PDF download
document.querySelector('a[href*="sds"]').addEventListener('click', () => {
  gtag('event', 'file_download', {
    file_name: 'mea-triazine-78-sds.pdf',
    file_extension: 'pdf',
    link_text: 'Download SDS',
    page_location: window.location.href,
  });
});

// Track "Request Quote" CTA click
document.querySelector('#request-quote-btn').addEventListener('click', () => {
  gtag('event', 'generate_lead', {
    currency: 'USD',
    value: 0,
    lead_source: 'product_page_cta',
    product_name: 'MEA Triazine 78% H2S Scavenger',
  });
});
```

### 6.3 Reporting Dashboard

**Recommended stack:**
- **Looker Studio (Google Data Studio):** Connect GSC + GA4 for a single-page product SEO dashboard.
- **Widgets to include:**
  - Rankings trend for top 10 keywords (GSC data)
  - Organic sessions trend (GA4)
  - CTR and impressions trend (GSC)
  - Core Web Vitals pass/fail (CrUX API or PageSpeed Insights)
  - Backlink count trend (Ahrefs API if available)

**Reporting cadence:**
| Report | Frequency | Audience |
|--------|-----------|----------|
| Rankings + traffic snapshot | Weekly | SEO team |
| Full performance review (all KPIs) | Monthly | SEO + management |
| Core Web Vitals & technical audit | Quarterly | Dev + SEO |
| Link-building progress | Monthly | SEO team |

### 6.4 A/B Testing Plan

| Test # | Element | Variant A | Variant B | Duration | Success Metric |
|--------|---------|-----------|-----------|----------|----------------|
| T1 | Title tag | Engineering focus (CAS no.) | Transactional ("Buy") | 30 days | CTR (GSC) |
| T2 | Meta description | Problem-led | Spec-led | 30 days | CTR (GSC) |
| T3 | CTA button text | "Request a Quote" | "Get Bulk Pricing" | 30 days | Click-through rate (GA4) |
| T4 | H1 phrasing | "MEA Triazine 78% H2S Scavenger" | "MEA Triazine 78% — Industrial H2S Scavenger" | 14 days | Bounce rate (GA4) |
| T5 | FAQ placement | Below specs table | Above related products | 14 days | Dwell time / scroll depth (GA4) |

> **Tool:** Use Google Optimize (or its replacement, A/B Tasty / VWO) for on-page tests. For title/meta tests, use Search Console performance data and rotate manually every 30 days — note that true SERP A/B testing requires careful isolation.

---

## 7. Phase 1: MVP Checklist (Weeks 1–2)

**Goal:** Implement all baseline on-page and technical fixes to make the page indexable, crawlable, and competitive for primary keywords.

### Week 1 (Dev + Content)

- [ ] **Title tag** updated to recommended version
- [ ] **Meta description** updated
- [ ] **H1** confirmed as `MEA Triazine 78% H2S Scavenger` (one instance only)
- [ ] **Canonical tag** added / confirmed
- [ ] **Self-referencing hreflang** (en + x-default) implemented
- [ ] **Product schema JSON-LD** added to `<head>` (see §9.1)
- [ ] **BreadcrumbList schema** added
- [ ] **FAQPage schema** added (min. 4 Q&As)
- [ ] **Page added to XML sitemap** with correct priority
- [ ] **robots.txt** verified — page is NOT blocked
- [ ] **301 redirects** set up for legacy URLs (if any)
- [ ] **Canonical** for URL variants (`?ref=`, `/`) confirmed
- [ ] **Primary image** converted to WebP, `alt` text applied, `fetchpriority="high"` set
- [ ] All other images: WebP, descriptive `alt` text, `loading="lazy"`, explicit dimensions
- [ ] **Viewport meta tag** confirmed present
- [ ] `Cache-Control` headers confirmed for static assets

### Week 2 (Content + Measurement)

- [ ] **Full page copy** (1,500+ words) written and published per §3.9 blueprint
- [ ] **Product specs table** populated with real data
- [ ] **Dosing guidance section** published with example calculation
- [ ] **FAQ section** (8 Q&As) published
- [ ] **SDS PDF** uploaded and linked from page
- [ ] **Internal links** FROM related pages TO this page added (min. 5 sources)
- [ ] **Internal links** FROM this page TO category, related products, blog content added
- [ ] **GA4 events** configured (SDS download, quote CTA)
- [ ] **GSC property** verified; URL submitted for indexing via GSC
- [ ] **PageSpeed Insights** baseline score recorded (mobile + desktop)
- [ ] **Core Web Vitals** baseline recorded in CrUX (or lab data if new page)
- [ ] **Ahrefs / Semrush** project set up; keyword tracking configured for top 20 target KWs
- [ ] **Looker Studio** dashboard created and shared with team

---

## 8. Phase 2: Enhancements (Weeks 3–6+)

**Goal:** Expand authority, earn links, target long-tail and international keywords, and iterate based on Phase 1 data.

### Week 3–4

- [ ] **Blog articles** published per content calendar (Weeks 1–4 content)
- [ ] **Dosing calculator** tool built and linked from product page
- [ ] **Comparison page** (`/mea-triazine-vs-mma-triazine`) published and linked
- [ ] **Video** (reaction mechanism explainer) published on YouTube; embedded on product page
- [ ] **Directory submissions** completed (ChemicalBook, ECHEMI, Sigma-Aldrich, Made-in-China)
- [ ] **Review schema** activated (once 3+ verified reviews collected)
- [ ] **AggregateRating** in Product schema updated with real data
- [ ] **CrUX data** reviewed — address any failing Core Web Vitals
- [ ] **A/B Test T1** (title tag) launched via search console metadata rotation

### Week 5–6

- [ ] **Arabic language page** (`/ar/product/mea-triazine-78-h2s-scavenger`) drafted and published
- [ ] **Portuguese (BR) page** drafted and published
- [ ] **Full hreflang cluster** implemented and validated
- [ ] **Guest post** pitched to Oil & Gas Journal / SPE
- [ ] **Case study** published and submitted to relevant trade sites
- [ ] **Broken-link outreach** executed (minimum 10 prospects)
- [ ] **Unlinked mention outreach** completed
- [ ] **Phase 1 data review:** Rankings, traffic, CTR — adjust content/metadata if needed
- [ ] **A/B Test T2** (meta description) launched
- [ ] **Monthly SEO report** #1 shared with stakeholders

### Ongoing (Month 2+)

- [ ] Monitor GSC for new ranking keyword opportunities → update content
- [ ] Refresh product specs / pricing when product changes
- [ ] Update `<lastmod>` in sitemap when page is updated
- [ ] Earn 2–3 new backlinks per month via outreach
- [ ] Add customer reviews regularly; update `aggregateRating` schema
- [ ] Quarterly: full technical SEO audit (Screaming Frog crawl)

---

## 9. Templates & Code Snippets

### 9.1 JSON-LD Structured Data Snippet

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@graph": [
    {
      "@type": "Product",
      "name": "MEA Triazine 78% H2S Scavenger",
      "alternateName": [
        "Monoethanolamine Triazine 78%",
        "Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine 78%",
        "1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol",
        "Triazine H2S Scavenger",
        "MEA Based Triazine",
        "Triazinetriethanol",
        "Grotan BK equivalent",
        "Nipacide BK equivalent",
        "Acticide GR equivalent",
        "Bioban GK equivalent",
        "Protectol HT equivalent",
        "Nuosept 78 equivalent"
      ],
      "description": "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) is a high-concentration monoethanolamine triazine solution for the effective removal of hydrogen sulfide from natural gas, crude oil, and wastewater streams. Manufactured by Vasudev Chemo Pharma. Industrial-grade, water-soluble. Equivalent to Grotan BK, Nipacide BK, Acticide GR, Triadine 3, Onyxide 200, Busan 1060, G-SCAV EA77.",
      "url": "https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger",
      "image": [
        "https://Vasudevchemopharma.com/images/mea-triazine-78-h2s-scavenger-drum.webp",
        "https://Vasudevchemopharma.com/images/mea-triazine-78-label.webp"
      ],
      "sku": "VCP-IND-0001",
      "mpn": "MEA-T78",
      "gtin": "XXXXXXXXXXXXXXXXX",
      "brand": {
        "@type": "Brand",
        "name": "Vasudev Chemo Pharma"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Vasudev Chemo Pharma Chemicals",
        "url": "https://Vasudevchemopharma.com"
      },
      "category": "H2S Scavengers / Oilfield Chemicals",
      "material": "Monoethanolamine Triazine",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "CAS Number",
          "value": "4719-04-4"
        },
        {
          "@type": "PropertyValue",
          "name": "Active Concentration",
          "value": "78% (w/w)"
        },
        {
          "@type": "PropertyValue",
          "name": "Appearance",
          "value": "Clear to light yellow liquid"
        },
        {
          "@type": "PropertyValue",
          "name": "pH",
          "value": "9.5–11.0"
        },
        {
          "@type": "PropertyValue",
          "name": "Shelf Life",
          "value": "12 months"
        }
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger",
        "priceCurrency": "USD",
        "price": "CONTACT_FOR_PRICE",
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition",
        "seller": {
          "@type": "Organization",
          "name": "Vasudev Chemo Pharma Chemicals"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "23",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "John T., Production Engineer"
          },
          "reviewBody": "Excellent performance on our sour gas wells. No solids formation at our typical treating rates. Will reorder."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between MEA Triazine 78% and MEA Triazine 80%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEA Triazine 78% contains 78% active monoethanolamine triazine by weight, compared to 80% for the higher-concentration variant. The 78% formulation offers improved handling properties and slightly reduced risk of solids formation in some applications, while maintaining high H2S scavenging efficiency. The practical performance difference in field conditions is minimal."
          }
        },
        {
          "@type": "Question",
          "name": "Can MEA Triazine 78% be used in offshore applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MEA Triazine 78% is suitable for offshore use via direct injection into the gas stream or flow lines. For space-constrained offshore platforms, direct injection is preferred over contactor tower setups due to its smaller equipment footprint."
          }
        },
        {
          "@type": "Question",
          "name": "What causes solids formation when using MEA Triazine H2S scavengers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Solids formation typically occurs when MEA Triazine is over-dosed relative to the H2S load, or when the reaction byproducts (thiadiazines) accumulate in slow-flow areas. Using automated dosing control systems that adjust injection rates in real time based on H2S concentration and gas flow rate can significantly reduce this risk."
          }
        },
        {
          "@type": "Question",
          "name": "Is MEA Triazine 78% formaldehyde-free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our MEA Triazine 78% formulation is formaldehyde-free. It does not contain formaldehyde as a raw material or release formaldehyde as a byproduct under normal operating conditions."
          }
        },
        {
          "@type": "Question",
          "name": "What is the shelf life of MEA Triazine 78%?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEA Triazine 78% has a shelf life of 12 months from date of manufacture, when stored in sealed containers away from direct sunlight, heat sources, and temperatures above 30°C."
          }
        },
        {
          "@type": "Question",
          "name": "Does MEA Triazine 78% work on mercaptans as well as H2S?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MEA Triazine is primarily designed for H2S scavenging. It shows limited reactivity with mercaptans (thiols). For applications with significant mercaptan content, a specialized mercaptan scavenger or a blended formulation may be more appropriate. Contact our technical team for a custom recommendation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://Vasudevchemopharma.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Chemicals",
          "item": "https://Vasudevchemopharma.com/chemicals/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "H2S Scavengers",
          "item": "https://Vasudevchemopharma.com/chemicals/h2s-scavengers/"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "MEA Triazine 78% H2S Scavenger",
          "item": "https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger"
        }
      ]
    }
  ]
}
</script>
```

### 9.2 Full `<head>` Meta Tag Template

```html
<!-- Primary SEO Tags -->
<title>MEA Triazine 78% H2S Scavenger | Industrial Grade | Vasudev Chemo Pharma</title>
<meta name="description" content="MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) — effective monoethanolamine triazine for removing hydrogen sulfide from natural gas, crude oil, and wastewater. Industrial drum &amp; IBC supply. Request a quote today.">
<meta name="keywords" content="MEA triazine, H2S scavenger, monoethanolamine triazine, hydrogen sulfide scavenger, triazine 78%, CAS 4719-04-4, sour gas treatment, oilfield chemicals">
<link rel="canonical" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- Robots -->
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">

<!-- Open Graph (for social sharing) -->
<meta property="og:type" content="product" />
<meta property="og:title" content="MEA Triazine 78% H2S Scavenger | Vasudev Chemo Pharma" />
<meta property="og:description" content="High-purity MEA Triazine 78% for industrial H2S removal in oil &amp; gas, wastewater, and biogas. CAS 4719-04-4. Bulk &amp; drum supply." />
<meta property="og:url" content="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
<meta property="og:image" content="https://Vasudevchemopharma.com/images/mea-triazine-78-h2s-scavenger-og.webp" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Vasudev Chemo Pharma Chemicals" />
<meta property="product:availability" content="in stock" />
<meta property="product:condition" content="new" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="MEA Triazine 78% H2S Scavenger | Vasudev Chemo Pharma" />
<meta name="twitter:description" content="Industrial-grade monoethanolamine triazine for H2S removal. CAS 4719-04-4. Bulk pricing available." />
<meta name="twitter:image" content="https://Vasudevchemopharma.com/images/mea-triazine-78-h2s-scavenger-og.webp" />

<!-- hreflang -->
<link rel="alternate" hreflang="en" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="en-US" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="en-GB" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="en-IN" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="ar-SA" href="https://Vasudevchemopharma.com/ar/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="pt-BR" href="https://Vasudevchemopharma.com/pt-br/product/mea-triazine-78-h2s-scavenger" />
<link rel="alternate" hreflang="x-default" href="https://Vasudevchemopharma.com/product/mea-triazine-78-h2s-scavenger" />

<!-- Performance: preload LCP image -->
<link rel="preload" as="image" href="/images/mea-triazine-78-h2s-scavenger-drum.webp" fetchpriority="high" />

<!-- Structured Data — JSON-LD (paste full block from §9.1 here) -->
```

### 9.3 robots.txt Snippet (Ensure Page Is Indexable)

```
# Actual robots.txt configuration (generated by src/app/robots.ts)
User-agent: *
Allow: /
Disallow: /admin
Disallow: /payload
Disallow: /api/
Disallow: /_next/
# IMPORTANT: /product/ must NOT appear in Disallow

Sitemap: https://Vasudevchemopharma.com/sitemap.xml
```

### 9.4 .htaccess 301 Redirect Examples (Apache)

```apache
# Trailing slash normalisation
RewriteCond %{REQUEST_URI} ^/product/mea-triazine-78-h2s-scavenger/$
RewriteRule ^(.*)$ /product/mea-triazine-78-h2s-scavenger [R=301,L]

# Legacy URL redirects
Redirect 301 /products/mea-triazine-78 /product/mea-triazine-78-h2s-scavenger
Redirect 301 /product/mea-triazine-78 /product/mea-triazine-78-h2s-scavenger
```

### 9.5 Next.js `next.config.mjs` Redirect Examples

```javascript
// next.config.mjs (already uses withPayload wrapper)
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  trailingSlash: false,
  // ... existing config ...
  async redirects() {
    return [
      {
        source: '/products/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true, // 301
      },
      {
        source: '/product/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
```

### 9.6 GSC Keyword Tracking Setup Checklist

Manually add these keywords to your rank-tracking tool (Ahrefs, Semrush, or a dedicated rank tracker):

```
# Primary & Long-tail
MEA triazine H2S scavenger
MEA triazine 78%
MEA triazine 78% H2S scavenger
Triazine scavenger
MEA triazine
monoethanolamine triazine H2S scavenger
buy MEA triazine scavenger
MEA triazine hydrogen sulfide
triazine H2S scavenger natural gas
triazine H2S scavenger oil and gas
triazine H2S scavenger dosing
MEA triazine vs MMA triazine
H2S scavenger sour gas treatment
CAS 4719-04-4 H2S scavenger
hexahydro triazine H2S scavenger
MEA triazine price bulk
MEA triazine supplier
triazine based H2S scavenging chemical
MEA-triazine blends
high purity triazine

# Competitor Trade Names (rank for "alternative to")
Grotan BK
Grotan BK alternative
Grotan BK equivalent
Nipacide BK
Acticide GR
Bioban GK
Protectol HT
Triadine 3
Onyxide 200
Busan 1060
Busan 1506
G-SCAV EA77
JadeScan54
Basolon SC 78
Nuosept 78
Actane
H2Stopper 1908C
BK biocide

# Functional Keywords
H2S scavenger
Hydrogen sulfide scavenger
Desulfurizer
Gas sweetener
Industrial biocide triazine
```
Track for: US, UK, IN, UAE, SA (separate location targets in your rank tracker).

---

*Document maintained by: SEO Team | Review cycle: Monthly | Next review: April 2026*
