# Vasudev Chemo Pharma — 4-Month Website SEO & Growth Plan

**Company:** Vasudev Chemo Pharma  
**Website:** [vasudevchemopharma.com](https://vasudevchemopharma.com)  
**Location:** F-29, Plot No. 328/329, Near Asian Paint Circle, G.I.D.C, Ankleshwar, Gujarat, 393002  
**ISO:** 9001:2015 Certified  
**Goal:** Rank globally for MEA Triazine, MMA Triazine, and H2S Scavenger — make Vasudev Chemo Pharma the first choice for any buyer worldwide  
**Developer Note:** You own the source code. All tasks below can be implemented directly in your codebase.

---

## Table of Contents

1. [Current Website Audit](#1-current-website-audit)
2. [Month 1 — Foundation & Technical SEO](#2-month-1--foundation--technical-seo)
3. [Month 2 — Content & Industry Pages](#3-month-2--content--industry-pages)
4. [Month 3 — B2B Platforms & Lead Generation](#4-month-3--b2b-platforms--lead-generation)
5. [Month 4 — Outreach, Ads & Scale](#5-month-4--outreach-ads--scale)
6. [Keyword Master List](#6-keyword-master-list)
7. [Meta Titles & Descriptions — All 12 Products](#7-meta-titles--descriptions--all-12-products)
8. [Schema Markup Templates](#8-schema-markup-templates)
9. [Blog Content Calendar](#9-blog-content-calendar)
10. [B2B Platform Checklist](#10-b2b-platform-checklist)
11. [Contact Form Upgrade Spec](#11-contact-form-upgrade-spec)
12. [WhatsApp Button Implementation](#12-whatsapp-button-implementation)
13. [Synonym Sections — Product Pages](#13-synonym-sections--product-pages)
14. [Tracking & KPIs](#14-tracking--kpis)

---

## 1. Current Website Audit

### ✅ What is Already Good — Do Not Break These

| Item | Status | Notes |
|------|--------|-------|
| Individual product pages per product | ✅ Good | Each product has its own URL — critical for SEO |
| SSL Certificate (HTTPS) | ✅ Good | Google requires HTTPS |
| Google Analytics set up | ✅ Good | Verify it is linked to Search Console |
| Google Search Console set up | ✅ Good | Submit sitemap monthly |
| Mobile responsive design | ✅ Good | Over 60% of B2B searches are on mobile |
| CAS numbers listed | ✅ Good | Chemists and procurement managers search by CAS |
| Google Maps listing | ✅ Good | Local SEO — helps "chemical manufacturer Gujarat" |
| ISO 9001:2015 mentioned | ✅ Good | Trust signal — keep it above the fold |
| Blog section exists | ✅ Good | Needs regular posts — currently underused |
| Video on website | ✅ Good | Needs a transcript added for SEO |

### 🔴 Critical Problems — Fix in Week 1

| Problem | Impact | Fix |
|---------|--------|-----|
| No WhatsApp button | High — Gulf buyers use WhatsApp exclusively for business | Add floating WhatsApp button (see Section 12) |
| No "Request Free Sample" CTA on product pages | High — you offer samples but no one knows | Add button on MEA Triazine and MMA Triazine pages |
| No TDS / MSDS download on product pages | High — technical buyers will not inquire without these | Upload PDFs to /public/docs/ and link from each product page |
| No synonym / "Also Known As" section | High — missing 40+ search terms buyers use | Add section to MEA and MMA Triazine pages (see Section 13) |
| Meta titles are not optimised | High — Google uses title to rank your page | Rewrite all 12 product meta titles (see Section 7) |
| No JSON-LD schema markup | Medium — enables rich results in Google search | Add Product + Organization + FAQPage schema (see Section 8) |
| Brochure hosted on Google Drive | Medium — Google cannot crawl external Drive files | Move PDF to /public/vasudev-brochure.pdf on your server |

### 🟡 Important Gaps — Fix in Month 2

| Problem | Impact | Fix |
|---------|--------|-----|
| No customer testimonials | Medium | Collect 3–5 quotes from existing customers |
| No industry-specific pages | High — buyers search by their industry | Create 4 industry pages (see Section 3) |
| No multi-language support | Medium — Gulf and Brazil buyers prefer local language | Add Arabic and Spanish at minimum |
| No packaging photos | Medium — buyers want to see drums, IBCs, bulk tankers | Add real photos to product pages |
| Video not on YouTube | Medium — second search channel missed | Upload plant video to YouTube with keyword description |
| No live chat | Medium — Gulf buyers want instant responses | Add Tidio or Crisp (both have free plans) |

### 🔵 Stretch Goals — Month 3–4

- Competitor brand comparison pages (Vasudev vs Grotan BK)
- H2S Scavenger Dosage Calculator tool (interactive — major lead magnet)
- Trade show virtual listing on ADIPEC website
- LinkedIn ads targeting Gulf procurement managers

---

## 2. Month 1 — Foundation & Technical SEO

**Theme: Fix what is broken. Build the technical base.**

### Week 1 — Developer Tasks (Your Code)

#### Task 1.1 — Add Floating WhatsApp Button

See full implementation in [Section 12](#12-whatsapp-button-implementation).

- Position: fixed, bottom-right, z-index 9999
- Mobile number: your WhatsApp business number
- Pre-filled message: "Hello, I am interested in your MEA Triazine / MMA Triazine products. Please share your TDS and pricing."

#### Task 1.2 — Rewrite All Product Page Meta Titles and Descriptions

Replace existing meta tags with the optimised versions in [Section 7](#7-meta-titles--descriptions--all-12-products).

File locations will vary by your framework. Search for `<title>` and `<meta name="description"` in your source.

#### Task 1.3 — Add "Also Known As" Synonym Sections

For MEA Triazine and MMA Triazine product pages, add the synonym sections from [Section 13](#13-synonym-sections--product-pages).

This is the single highest-impact SEO change you can make. Google will start ranking you for 40+ additional search terms.

#### Task 1.4 — Add TDS and MSDS Download Links

```
MEA Triazien 78 TDS : https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/Vasudec_Chemo_Pharma_MEA_Triazine_TDS.pdf
  mea-triazine-78-msds : https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MEA%20Triazine/Vasudec_Chemo_Pharma_MEA_Triazine_MSDS.pdf
  mma-triazine-40-msds : https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/MMA%20Triazine/Vasudec_Chemo_Pharma_MMA_Triazine_MSDS.pdf
  [repeat for all 12 products]
```

On each product page, add:

```html
<div class="document-downloads">
  <h3>Technical Documents</h3>
  <a href="/docs/mea-triazine-78-tds.pdf" download>
    📄 Download Technical Data Sheet (TDS)
  </a>
  <a href="/docs/mea-triazine-78-msds.pdf" download>
    ⚠️ Download Safety Data Sheet (MSDS/SDS)
  </a>
</div>
```

#### Task 1.5 — Add "Request Free Sample" CTA

Add to MEA Triazine and MMA Triazine pages immediately. Add to all other product pages by end of month.

```html
<div class="sample-cta">
  <h3>Request a Free Sample</h3>
  <p>We offer free samples to qualified buyers. Export: 1MT minimum order. Domestic: 220 Kg minimum order.</p>
  <a href="/contact?product=mea-triazine&type=sample" class="btn-primary">
    Request Free Sample →
  </a>
</div>
```

Pass the product name as a query param so your contact form pre-fills the product field.

#### Task 1.6 — Move Brochure to Your Own Server

- vasudev-chemo-pharma-brochure : https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev%20Chemo%20Pharma%20Brochure.pdf`
- Update all links on the website to point to this path
- Add PDF meta title: "Vasudev Chemo Pharma — Chemical Manufacturer & Exporter — Product Catalogue 2025"

---

### Week 2 — Schema Markup (JSON-LD)

Add all schema markup from [Section 8](#8-schema-markup-templates) to the appropriate pages.

**Priority order:**
1. Organization schema → `<head>` of every page (via layout/base template)
2. Product schema → each of the 12 product pages
3. FAQPage schema → MEA Triazine and MMA Triazine pages

**How to verify:** After deploying, test at [Google Rich Results Test](https://search.google.com/test/rich-results)

---

### Week 3 — Contact Form Upgrade

Replace your existing contact form with the upgraded version from [Section 11](#11-contact-form-upgrade-spec).

New fields to add:
- Company name (required)
- Country (dropdown — required)
- Industry (dropdown)
- Product interested in (dropdown — pre-fill from URL param)
- Quantity needed (text)
- Preferred contact method (Email / WhatsApp / Phone)

---

### Week 4 — Google Search Console & Sitemap

```bash
# If using Next.js
# Add to next-sitemap.config.js or generate sitemap.xml manually

# Sitemap must include:
# - All product pages
# - All blog posts
# - All industry pages (once created)
# - About, Services, Contact pages
```

Actions:
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Request indexing for all product pages manually
- [ ] Check for crawl errors and fix 404s
- [ ] Verify Core Web Vitals scores — aim for green on all metrics
- [ ] Set up Google Analytics goal for "Contact Form Submission"

---

## 3. Month 2 — Content & Industry Pages

**Theme: Build topical authority. Give Google a reason to rank you over competitors.**

### New Pages to Create

Create these as new routes in your codebase:

```
/industries/oil-gas-h2s-scavenger
/industries/water-treatment
/industries/metal-working-fluids
/industries/paper-mill
/mea-triazine-vs-mma-triazine          ← comparison guide
/how-h2s-scavengers-work               ← educational guide
```

---

#### Page: /industries/oil-gas-h2s-scavenger

**Target keywords:** H2S Scavenger oil gas, MEA Triazine upstream oil gas, hydrogen sulfide removal natural gas

**Page structure:**

```
H1: MEA Triazine H2S Scavenger for Oil & Gas — Manufacturer Direct from India

Section 1: The H2S Problem in Oil & Gas (200 words)
  - What is H2S, why it is dangerous
  - Regulatory limits (OSHA, API standards)
  - Cost of untreated H2S (corrosion, safety, compliance)

Section 2: How MEA Triazine 78% Solves It (300 words)
  - Reaction mechanism (triazine + H2S → dithiazine)
  - Effective for upstream, midstream, downstream
  - Safe, water-soluble, biodegradable

Section 3: Our Product Specifications (table)
  - Concentration: 78%
  - Appearance: Clear to slightly yellow liquid
  - CAS Number: 4719-04-4
  - Packaging: 220L drums, IBC 1000L, bulk tanker
  - MOQ Export: 1MT | MOQ Domestic: 220 Kg
  - Lead time: Export 10–15 days | Domestic 4–5 days

Section 4: Why Choose Vasudev Chemo Pharma (bullet points)
  - ISO 9001:2015 certified manufacturer
  - Direct from manufacturer — no middlemen
  - Near Kandla, Mundra, Hazira ports — fast export
  - COA, TDS, MSDS available on every order
  - Free samples available

Section 5: Industries We Serve (cards)
  - Natural gas pipelines
  - Offshore oil platforms
  - Gas processing plants
  - Petroleum refineries

CTA: Request a quote | Download TDS | Request Free Sample
```

**Word count target:** 1200–1500 words  
**Internal links:** Link to MEA Triazine product page, contact page, blog posts

---

#### Page: /industries/water-treatment

**Target keywords:** MMA Triazine water treatment, H2S scavenger wastewater, triazine for sewage treatment

**Page structure:**

```
H1: Triazine H2S Scavenger for Water & Wastewater Treatment

Section 1: H2S in Water Treatment Systems (150 words)
Section 2: MMA Triazine 40% for Wastewater (250 words)
  - How it reacts with dissolved H2S
  - Safe for municipal systems
  - Dosage guidelines
Section 3: Product Specifications (table — same format as above)
Section 4: Why Vasudev Chemo Pharma
CTA block
```

---

#### Page: /industries/metal-working-fluids

**Target keywords:** Triazine biocide cutting fluid, metalworking fluid preservative, formaldehyde releasing biocide India

**Page structure:**

```
H1: Triazine Biocide for Metal Working Fluids — MMA & MEA Triazine Supplier

Section 1: Microbial Contamination in Cutting Fluids (150 words)
Section 2: How Triazine Acts as a Biocide Preservative (200 words)
  - Formaldehyde-releasing mechanism
  - Effective against bacteria, fungi, algae
  - Grotan BK equivalent
Section 3: Specifications + Dosage Recommendations
Section 4: Advantages of Indian Supply
CTA block
```

---

#### Page: /industries/paper-mill

**Target keywords:** Triazine slimicide paper mill, biocide pulp and paper, anti-slime agent paper industry

**Page structure:**

```
H1: MEA Triazine Slimicide for Pulp & Paper Mills

Section 1: Biofilm and Slime in Paper Production (150 words)
Section 2: Triazine as an Industrial Slimicide (200 words)
Section 3: Specifications
Section 4: We Export to Paper Mills in Vietnam, Thailand, Southeast Asia
CTA block
```

---

#### Page: /how-h2s-scavengers-work

**Target keywords:** how H2S scavengers work, H2S removal chemistry, triazine H2S reaction mechanism

This is your "pillar" content page. Aim for 2500–3000 words.

```
H1: How H2S Scavengers Work — A Complete Technical Guide

1. What is Hydrogen Sulfide (H2S)? (300 words)
   - Sources: natural gas, crude oil, wastewater, geothermal
   - Hazards: toxicity, corrosion, odour
   - Regulatory standards: OSHA PEL, NIOSH IDLH

2. Types of H2S Treatment Methods (400 words)
   - Physical absorption (amine scrubbing)
   - Chemical scavenging (triazine, glyoxal, iron-based)
   - Biological treatment
   - Comparison table of methods

3. How Triazine H2S Scavengers Work (500 words)
   - MEA Triazine: reaction with H2S → dithiazine
   - Chemical equation
   - Why triazine is preferred in liquid phase systems
   - MEA vs MMA: when to use each

4. Dosage and Application Guidelines (400 words)
   - Continuous injection vs batch treatment
   - How to calculate required dose
   - pH considerations
   - Temperature effects

5. Frequently Asked Questions (500 words)
   - Is triazine safe for the environment?
   - What is the shelf life of MEA Triazine?
   - Can triazine be used in sour gas pipelines?
   - What concentration should I use?
   - What are the storage requirements?

6. About Vasudev Chemo Pharma (200 words)
   - ISO 9001:2015 certified
   - Manufacturing in Ankleshwar, Gujarat
   - Export to 10+ countries
   - Free samples available

CTA: Request a sample | Download TDS | Contact our technical team
```

---

#### Page: /mea-triazine-vs-mma-triazine

**Target keywords:** MEA Triazine vs MMA Triazine, difference between MEA and MMA triazine, which triazine to use

```
H1: MEA Triazine vs MMA Triazine — Which H2S Scavenger Should You Choose?

Comparison table:
| Property          | MEA Triazine 78% | MMA Triazine 40% |
|-------------------|-----------------|-----------------|
| Active content    | 78%             | 40%             |
| Primary use       | Oil & Gas, H2S scavenging | Water treatment, Paper mills |
| CAS Number        | 4719-04-4       | [MMA CAS]       |
| Typical dosage    | 5–10 ppm        | 10–20 ppm       |
| Packaging         | Drums, IBCs, Bulk | Drums, IBCs    |
| MOQ (Export)      | 1 MT            | 1 MT            |

Section: When to Choose MEA Triazine 78%
Section: When to Choose MMA Triazine 40%
Section: Can they be used together?
CTA: Request Technical Guidance | Download Both TDS
```

---

### Blog Posts — Month 2 (Publish 2 Posts)

See the full blog calendar in [Section 9](#9-blog-content-calendar).

**Publish this month:**
- Blog Post 1: "What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas?"
- Blog Post 2: "H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods"

Each post must:
- Be 1500+ words
- Include 1–2 internal links to product pages
- Include a CTA at the end (free sample, contact us)
- Be shared on LinkedIn on publish day

---

## 4. Month 3 — B2B Platforms & Lead Generation

**Theme: Get listed everywhere your buyers search. Build a pipeline outside Google.**

### B2B Platform Registration — Complete List

See full checklist in [Section 10](#10-b2b-platform-checklist).

**Priority this month:**
1. Alibaba.com — Gold Supplier account
2. ChemDirect.com — free listing
3. Made-in-China.com — free listing
4. GlobalSpec.com — free listing

**For each platform listing, you need:**
- Company description (250–500 words) — focus on MEA Triazine, MMA Triazine, H2S Scavenger
- Product photos (high resolution, real photos — not stock images)
- TDS and MSDS PDF attachments
- CAS numbers for all products
- Packaging options with photos
- MOQ: Export 1MT | Domestic 220 Kg
- Lead time: Export 10–15 days | Domestic 4–5 days
- Certifications: ISO 9001:2015
- Export countries: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Brazil, USA, Vietnam, Thailand, Türkiye, Russia

---

### LinkedIn Strategy

**Company Page Actions:**
- [ ] Add ISO 9001:2015 badge to company description
- [ ] Add "Specialty Chemicals" and "H2S Scavenger" as featured products
- [ ] Update tagline: "MEA Triazine & H2S Scavenger Manufacturer | ISO 9001:2015 | Export to 10+ Countries"
- [ ] Post 3x per week (see content ideas below)
- [ ] Add contact info: Vaibhav Lohiya — Sales | vaibhav@vasudevchemopharma.com

**Vaibhav Lohiya Personal LinkedIn Actions:**
- [ ] Headline: "Sales Manager — MEA Triazine & H2S Scavenger | Vasudev Chemo Pharma | Ankleshwar, Gujarat"
- [ ] Connect with 10 Gulf procurement managers per day
- [ ] Search filters: Job title "Procurement Manager" OR "Chemical Engineer" | Location: UAE, Saudi Arabia, Oman, Qatar, Kuwait
- [ ] Connection message template (personalise for each):

```
Hi [Name],

I'm Vaibhav from Vasudev Chemo Pharma — we manufacture MEA Triazine 78% 
H2S Scavenger and MMA Triazine 40% in Ankleshwar, Gujarat, India.

We are ISO 9001:2015 certified and currently exporting to UAE, Egypt, 
Brazil, and USA.

Would you be open to receiving our TDS and pricing? We also offer free 
samples.

Best regards,
Vaibhav Lohiya
```

**LinkedIn Post Ideas (rotate weekly):**

```
Week 1: Product post
"Our MEA Triazine 78% is used by oil & gas companies across the Gulf region 
to remove H2S from natural gas. ISO 9001:2015 certified. Manufactured in 
Ankleshwar, India. Free samples available.
#H2SScavenger #MEATriazine #OilAndGas #SpecialtyChemicals"

Week 2: Technical post
"Did you know MEA Triazine reacts with H2S to form a stable, non-toxic 
dithiazine product? This makes it the preferred scavenger for liquid phase 
H2S treatment in pipelines and gas processing.
Learn more → [link to your /how-h2s-scavengers-work page]
#ChemicalEngineering #H2SRemoval #GasTreatment"

Week 3: Company post
"We ship from Ankleshwar, Gujarat — just hours from Hazira, Mundra, and 
Kandla ports. This means faster export lead times for our international 
clients in UAE, Saudi Arabia, Egypt, and Brazil.
Current availability: MEA Triazine 78% — in stock.
Contact Vaibhav: [phone/email]"

Week 4: Export post
"We recently shipped [X MT] of MEA Triazine 78% to [Country — if permitted].
Lead time: 12 working days. Documentation: COA, MSDS, Commercial Invoice, 
Packing List, Bill of Lading — all prepared.
DM us for pricing.
#ChemicalExport #IndiaChemicals #SpecialtyChemicals"
```

---

### YouTube Channel

- [ ] Create YouTube channel: "Vasudev Chemo Pharma"
- [ ] Upload plant/facility tour video with this description:

```
Title: Vasudev Chemo Pharma — MEA Triazine & H2S Scavenger Manufacturer | Ankleshwar, Gujarat, India

Description:
Vasudev Chemo Pharma is an ISO 9001:2015 certified manufacturer and exporter 
of specialty chemicals including MEA Triazine 78%, MMA Triazine 40%, and 
other H2S Scavengers for the oil & gas, water treatment, and metalworking 
fluid industries.

Products shown in this video:
- MEA Triazine 78% H2S Scavenger (CAS 4719-04-4)
- MMA Triazine 40%
- Copper Sulphate, Manganese Sulphate
- Pharmaceutical APIs: Albendazole, Ketoconazole, Pregabalin

Exporting to: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Egypt, Brazil, USA, 
Vietnam, Thailand

Contact: vaibhav@vasudevchemopharma.com | WhatsApp: +91-XXXXXXXXXX

Tags: MEA Triazine, H2S Scavenger, Hydrogen Sulfide Scavenger, MMA Triazine, 
Triazine manufacturer India, H2S removal oil gas, chemical manufacturer 
Gujarat, specialty chemicals India
```

---

## 5. Month 4 — Outreach, Ads & Scale

**Theme: Paid amplification of what is now working organically.**

### Google Ads — Search Campaign

**Budget:** ₹20,000–30,000 per month to start

**Campaign 1: MEA Triazine Buyers (High intent)**

```
Ad Group: MEA Triazine
Keywords (exact match):
  [MEA triazine manufacturer]
  [MEA triazine 78% supplier]
  [H2S scavenger india]
  [hydrogen sulfide scavenger supplier]
  [triazine h2s scavenger]

Ad Copy:
Headline 1: MEA Triazine 78% — Direct Manufacturer
Headline 2: ISO 9001:2015 | Free Sample Available
Headline 3: Export to UAE, Gulf, USA, Brazil
Description 1: H2S Scavenger for oil & gas. CAS 4719-04-4. MOQ 1MT for export. COA + MSDS provided.
Description 2: ISO certified chemical manufacturer in Gujarat, India. Contact Vaibhav for pricing.
Final URL: https://vasudevchemopharma.com/product/mea-triazine-78
```

**Campaign 2: MMA Triazine Buyers**

```
Ad Group: MMA Triazine
Keywords (exact match):
  [MMA triazine 40% supplier]
  [MMA triazine manufacturer]
  [1,3,5-triazine manufacturer india]

Ad Copy:
Headline 1: MMA Triazine 40% — Manufacturer Direct
Headline 2: Bulk Orders | Free Sample Available
Headline 3: ISO 9001:2015 Certified Gujarat
```

**Geo targeting:** India, UAE, Saudi Arabia, Oman, Qatar, Kuwait, Egypt, USA, Brazil, Vietnam

**Bidding:** Target CPA — let Google optimise after first 30 clicks

---

### Testimonials Campaign

By now you should have 3–5 buyers who have ordered from you. Contact each one:

```
Email/WhatsApp template to existing customers:

"Hi [Name],

We hope you are happy with the [product] we supplied. 

We are improving our website and would love to feature a short quote from 
you about your experience working with us.

Even just 1–2 sentences would be very helpful. We can keep your company name 
anonymous if preferred.

Could you share something like:
- How quickly we delivered
- The quality of documentation (COA, MSDS)
- Technical support you received
- Whether you would recommend us

Thank you!
Vaibhav — Vasudev Chemo Pharma"
```

Add approved testimonials to:
- Homepage (in a testimonial carousel or section)
- Each product page (relevant testimonials only)

---

### Live Chat Installation

Install Tidio (free plan) or Crisp (free plan):

**Tidio:** https://www.tidio.com  
**Crisp:** https://crisp.chat

Add the chat widget script to your base layout. Configure:
- Auto-greeting: "Hi! Looking for MEA Triazine or H2S Scavengers? We are here to help."
- Trigger: Show after 15 seconds on product pages
- Offline message: "We are offline right now. Leave your email and WhatsApp number and Vaibhav will reply within 2 hours."

---

### Arabic Landing Page (Gulf Market)

Create a simple Arabic landing page at `/ar` or `/arabic`:

```
URL: /ar/mea-triazine-h2s-scavenger

Content (translated):
Title: موردو ثلاثي أزين MEA 78% لمعالجة H2S — فاسوديف كيمو فارما، الهند
(MEA Triazine 78% H2S Scavenger Supplier — Vasudev Chemo Pharma, India)

Key points in Arabic:
- شهادة ISO 9001:2015
- تصدير إلى الإمارات، المملكة العربية السعودية، عُمان، قطر، الكويت
- عينات مجانية متاحة
- تواصل عبر واتساب: +91-XXXXXXXXXX
```

---

## 6. Keyword Master List

### Primary Keywords — MEA Triazine (Highest Priority)

```
MEA Triazine manufacturer India
MEA Triazine 78% supplier
MEA Triazine exporter Gujarat
MEA Triazine H2S Scavenger
H2S Scavenger manufacturer India
Hydrogen Sulfide Scavenger supplier
CAS 4719-04-4 supplier
Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine manufacturer
1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol supplier
Triazine H2S Scavenger oil gas
Gas sweetening agent manufacturer
H2S removal chemical India
Triazine biocide manufacturer
MEA based Triazine supplier
Grotan BK alternative India
Grotan BK equivalent supplier
```

### Primary Keywords — MMA Triazine

```
MMA Triazine 40% manufacturer
MMA Triazine supplier India
MMA Triazine exporter
1,3,5-Triazine manufacturer India
Triazine water treatment chemical
MMA Triazine for paper mill
```

### Secondary Keywords — All Products

```
H2S Scavenger for oil and gas
Hydrogen Sulfide Scavenger manufacturer
Mercaptan Scavenger India
Offshore H2S Scavenger supplier
Onshore H2S Scavenger supplier
Desulfurizer chemical India
Industrial Microbiocide manufacturer
Slimicide for paper mill India
Bactericide cutting fluid India
Anti-mildew agent manufacturer India
Formaldehyde releasing biocide India
Cutting fluid preservative India
Triazine biocide metalworking
Gas Sweetener India
chemical manufacturer Ankleshwar GIDC
specialty chemical manufacturer Gujarat
ISO certified chemical exporter India
Copper Sulphate manufacturer India
Manganese Sulphate manufacturer India
Albendazole API manufacturer India
Ketoconazole API manufacturer
Pregabalin supplier India
P-Toluenesulfonic Acid supplier India
2-Amino-5-methylthiazole manufacturer
```

### Long-tail Keywords (Add to Blog Posts and FAQ)

```
how does MEA Triazine remove H2S
MEA Triazine dosage for natural gas
difference between MEA and MMA Triazine
Triazine H2S Scavenger reaction mechanism
H2S Scavenger for sour gas pipelines
MEA Triazine shelf life storage
is Triazine safe for the environment
H2S Scavenger for wastewater treatment plant
Triazine biocide for metalworking fluid
how to calculate H2S Scavenger dose
```

---

## 7. Meta Titles & Descriptions — All 12 Products

Format: `[Product Name] | [Key Benefit] | Vasudev Chemo Pharma`  
Rule: Title under 60 characters. Description under 160 characters.

### MEA Triazine 78% H2S Scavenger

```html
<title>MEA Triazine 78% H2S Scavenger | Manufacturer & Exporter | Vasudev Chemo Pharma</title>
<meta name="description" content="ISO 9001:2015 certified MEA Triazine 78% manufacturer in Gujarat, India. CAS 4719-04-4. Export to UAE, Gulf, USA, Brazil. Free samples. TDS & MSDS available." />
```

### MMA Triazine 40%

```html
<title>MMA Triazine 40% | H2S Scavenger Manufacturer India | Vasudev Chemo Pharma</title>
<meta name="description" content="MMA Triazine 40% for oil & gas, water treatment, and paper mill applications. ISO certified manufacturer in Ankleshwar, Gujarat. MOQ 1MT for export." />
```

### Copper Sulphate

```html
<title>Copper Sulphate | Agriculture & Industrial Grade Manufacturer | Vasudev Chemo Pharma</title>
<meta name="description" content="Agriculture and industrial grade Copper Sulphate manufacturer in Gujarat, India. Bulk supply. ISO 9001:2015 certified. Domestic & export supply available." />
```

### Manganese Sulphate

```html
<title>Manganese Sulphate | Agriculture & Industrial Grade | Vasudev Chemo Pharma India</title>
<meta name="description" content="Agriculture and industrial grade Manganese Sulphate from ISO certified manufacturer in Ankleshwar, Gujarat. Bulk orders for domestic and international buyers." />
```

### P-Toluenesulfonic Acid

```html
<title>P-Toluenesulfonic Acid Supplier India | Vasudev Chemo Pharma</title>
<meta name="description" content="P-Toluenesulfonic Acid manufacturer in Gujarat, India. High purity, industrial grade. Bulk supply for domestic and export. ISO 9001:2015 certified." />
```

### 2-Amino-5-methylthiazole

```html
<title>2-Amino-5-methylthiazole Manufacturer India | Vasudev Chemo Pharma</title>
<meta name="description" content="2-Amino-5-methylthiazole supplier in Ankleshwar, Gujarat. Pharmaceutical and industrial grade. Bulk orders, export ready. ISO 9001:2015 certified manufacturer." />
```

### 2-Chloroethylamine Hydrochloride

```html
<title>2-Chloroethylamine Hydrochloride Supplier | Vasudev Chemo Pharma India</title>
<meta name="description" content="2-Chloroethylamine Hydrochloride manufacturer in Gujarat, India. High purity, pharma and industrial grade. ISO 9001:2015 certified. Export available." />
```

### Bis(2-chloroethyl)amine Hydrochloride

```html
<title>Bis(2-chloroethyl)amine Hydrochloride Manufacturer India | Vasudev Chemo Pharma</title>
<meta name="description" content="Bis(2-chloroethyl)amine Hydrochloride supplier from ISO 9001:2015 certified manufacturer in Ankleshwar, Gujarat, India. Bulk supply and export." />
```

### Di Ethyl Amino Ethyl Chloride Hydrochloride

```html
<title>Di Ethyl Amino Ethyl Chloride HCl Manufacturer | Vasudev Chemo Pharma India</title>
<meta name="description" content="Di Ethyl Amino Ethyl Chloride Hydrochloride manufacturer in Gujarat, India. ISO 9001:2015 certified. Pharmaceutical and industrial grade. Export available." />
```

### Albendazole

```html
<title>Albendazole API Manufacturer India | ISO 9001:2015 | Vasudev Chemo Pharma</title>
<meta name="description" content="Albendazole Active Pharmaceutical Ingredient (API) manufacturer in Ankleshwar, Gujarat. ISO 9001:2015 certified. Bulk export to pharmaceutical companies globally." />
```

### Ketoconazole

```html
<title>Ketoconazole API Manufacturer Gujarat India | Vasudev Chemo Pharma</title>
<meta name="description" content="Ketoconazole API manufacturer in Ankleshwar, Gujarat, India. ISO 9001:2015 certified. High purity, pharmaceutical grade. Bulk supply for domestic and export." />
```

### Pregabalin

```html
<title>Pregabalin API Supplier India | ISO Certified | Vasudev Chemo Pharma</title>
<meta name="description" content="Pregabalin API manufacturer in Gujarat, India. ISO 9001:2015 certified. Pharmaceutical grade. Subject to regulatory compliance. Domestic and export supply." />
```

---

## 8. Schema Markup Templates

Add all JSON-LD scripts in `<head>` of the relevant pages.

### Organization Schema — Add to Every Page (in base layout)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Vasudev Chemo Pharma",
  "url": "https://vasudevchemopharma.com",
  "logo": "https://vasudevchemopharma.com/logo.png",
  "description": "ISO 9001:2015 certified manufacturer and exporter of MEA Triazine, MMA Triazine H2S Scavengers, and specialty chemicals. Based in Ankleshwar, Gujarat, India.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-29, Plot No. 328/329, Near Asian Paint Circle, G.I.D.C",
    "addressLocality": "Ankleshwar",
    "addressRegion": "Gujarat",
    "postalCode": "393002",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@vasudevchemopharma.com",
    "areaServed": ["IN", "AE", "SA", "OM", "QA", "KW", "IQ", "EG", "BR", "US", "VN", "TH"],
    "availableLanguage": ["English", "Hindi"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/vasudev-chemo-pharma",
    "https://www.indiamart.com/vasudev-chemo-pharma"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "ISO 9001:2015"
  }
}
</script>
```

### Product Schema — MEA Triazine 78% (template for all products)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MEA Triazine 78% H2S Scavenger",
  "description": "MEA Triazine 78% is a highly effective H2S scavenger used in oil & gas, water treatment, and paper mill applications. CAS 4719-04-4. ISO 9001:2015 certified manufacturer.",
  "sku": "VCP-MEA-78",
  "brand": {
    "@type": "Brand",
    "name": "Vasudev Chemo Pharma"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Vasudev Chemo Pharma",
    "url": "https://vasudevchemopharma.com"
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "CAS Number",
      "value": "4719-04-4"
    },
    {
      "@type": "PropertyValue",
      "name": "Active Content",
      "value": "78%"
    },
    {
      "@type": "PropertyValue",
      "name": "Packaging",
      "value": "220L Drums, 1000L IBC, Bulk Tanker"
    },
    {
      "@type": "PropertyValue",
      "name": "Minimum Order Quantity",
      "value": "1 MT (Export), 220 Kg (Domestic)"
    }
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://vasudevchemopharma.com/product/mea-triazine-78",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Vasudev Chemo Pharma"
    }
  }
}
</script>
```

### FAQPage Schema — MEA Triazine Page

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is MEA Triazine used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MEA Triazine 78% is primarily used as an H2S Scavenger in oil and gas pipelines, gas processing plants, and refineries. It is also used as a biocide in water treatment, paper mills, and metal working fluids."
      }
    },
    {
      "@type": "Question",
      "name": "What is the CAS number for MEA Triazine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CAS number for MEA Triazine (Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine) is 4719-04-4."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum order quantity for MEA Triazine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For export orders, the minimum order quantity is 1 MT. For domestic (India) orders, the minimum order quantity is 220 Kg (1 drum)."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer free samples of MEA Triazine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vasudev Chemo Pharma offers free samples to qualified buyers. Contact us via our website or WhatsApp to request a sample along with our TDS and MSDS."
      }
    },
    {
      "@type": "Question",
      "name": "What concentrations of MEA Triazine do you supply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manufacture and supply MEA Triazine in 78%, 60%, 50%, and 40% concentrations. The 78% concentration is the most commonly used for H2S scavenging in oil and gas applications."
      }
    },
    {
      "@type": "Question",
      "name": "What countries do you export MEA Triazine to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We currently export to UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Brazil, USA, Vietnam, Thailand, Türkiye, and Russia. We can supply to any country with appropriate export documentation."
      }
    }
  ]
}
</script>
```

---

## 9. Blog Content Calendar

### Month 2

| # | Title | Target Keyword | Word Count | CTA |
|---|-------|----------------|------------|-----|
| 1 | What is MEA Triazine and Why is it the Best H2S Scavenger for Oil & Gas? | MEA Triazine H2S Scavenger | 1800 | Request free sample |
| 2 | H2S in Natural Gas Pipelines: Risks, Regulations, and Removal Methods | H2S natural gas pipeline treatment | 2000 | Download TDS |

### Month 3

| # | Title | Target Keyword | Word Count | CTA |
|---|-------|----------------|------------|-----|
| 3 | Why India is the World's Best Source for Triazine H2S Scavengers | H2S Scavenger India supplier | 1500 | Contact us |
| 4 | How to Properly Dose H2S Scavengers in Gas Treatment Systems | H2S Scavenger dosage calculation | 1800 | Request technical guidance |

### Month 4

| # | Title | Target Keyword | Word Count | CTA |
|---|-------|----------------|------------|-----|
| 5 | MMA Triazine in Water Treatment: A Complete Guide | MMA Triazine water treatment | 1600 | Request sample |
| 6 | Exporting Specialty Chemicals from India: How We Ship to 10+ Countries | chemical exporter India | 1200 | Contact for export inquiry |
| 7 | Grotan BK Alternative: How MEA Triazine 78% Compares | Grotan BK alternative supplier | 1400 | Request free sample |
| 8 | Triazine Biocide for Metal Working Fluids: Usage, Dosage & Benefits | triazine biocide cutting fluid | 1500 | Download TDS |

### Blog Post Requirements (all posts)

Every blog post must include:
- [ ] Focus keyword in H1 title
- [ ] Focus keyword in first paragraph
- [ ] Focus keyword in at least 2–3 subheadings (H2/H3)
- [ ] At least 2 internal links to product pages
- [ ] 1 external link to a reputable source (e.g., OSHA, API, academic paper)
- [ ] CTA at the end (free sample, contact, TDS download)
- [ ] Meta title and description optimised for focus keyword
- [ ] Featured image with alt text containing focus keyword

---

## 10. B2B Platform Checklist

### Tier 1 — Register in Month 3 (Mandatory)

- [ ] **Alibaba.com** — Gold Supplier account (~₹80,000/year). Create separate listings for MEA Triazine at each concentration (40%, 50%, 60%, 78%). URL: https://supplier.alibaba.com
- [ ] **ChemDirect.com** — Free listing. Chemical-specific marketplace. URL: https://www.chemdirect.com/suppliers
- [ ] **Made-in-China.com** — Free basic listing. Strong in Southeast Asia and Middle East. URL: https://supplier.made-in-china.com
- [ ] **GlobalSpec.com** — Free listing. Preferred by US and European engineers. URL: https://www.globalspec.com/suppliers

### Tier 2 — Register in Month 4

- [ ] **TradeIndia.com** — Good for domestic Indian buyers and secondary export markets
- [ ] **ExportHub.co** — Export-focused. Good Gulf reach
- [ ] **Kemix.com** — Chemical directory popular with European buyers
- [ ] **EC21.com** — Strong in South Korea, Vietnam, Southeast Asia

### What to Upload to Every Platform

```
Required for each listing:
□ Company name: Vasudev Chemo Pharma
□ Full address with GIDC, Ankleshwar, Gujarat, 393002
□ ISO 9001:2015 certificate (upload scan)
□ Year established: 2020
□ Number of employees: 10+
□ Production capacity: 50 MT/month (Triazine)
□ Export markets: UAE, Saudi Arabia, Oman, Qatar, Kuwait, Iraq, Egypt, Brazil, USA, Vietnam, Thailand
□ Product photos (high resolution, real photos)
□ TDS PDF for each product
□ MSDS PDF for each product
□ Company brochure PDF
□ Contact: Vaibhav Lohiya | sales@vasudevchemopharma.com | WhatsApp: +91-XXXXXXXXXX
```

---

## 11. Contact Form Upgrade Spec

Replace the current basic contact form with this enhanced version.

### New Form Fields

```html
<form action="/api/contact" method="POST">

  <!-- Row 1 -->
  <div class="form-row">
    <div class="form-group">
      <label for="name">Full Name *</label>
      <input type="text" id="name" name="name" required placeholder="Your full name" />
    </div>
    <div class="form-group">
      <label for="company">Company Name *</label>
      <input type="text" id="company" name="company" required placeholder="Your company name" />
    </div>
  </div>

  <!-- Row 2 -->
  <div class="form-row">
    <div class="form-group">
      <label for="email">Email Address *</label>
      <input type="email" id="email" name="email" required placeholder="you@company.com" />
    </div>
    <div class="form-group">
      <label for="whatsapp">WhatsApp Number</label>
      <input type="tel" id="whatsapp" name="whatsapp" placeholder="+1 555 000 0000" />
    </div>
  </div>

  <!-- Row 3 -->
  <div class="form-row">
    <div class="form-group">
      <label for="country">Country *</label>
      <select id="country" name="country" required>
        <option value="">Select your country</option>
        <option value="AE">UAE</option>
        <option value="SA">Saudi Arabia</option>
        <option value="OM">Oman</option>
        <option value="QA">Qatar</option>
        <option value="KW">Kuwait</option>
        <option value="IQ">Iraq</option>
        <option value="EG">Egypt</option>
        <option value="BR">Brazil</option>
        <option value="US">USA</option>
        <option value="VN">Vietnam</option>
        <option value="TH">Thailand</option>
        <option value="IN">India</option>
        <option value="OTHER">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="industry">Your Industry</label>
      <select id="industry" name="industry">
        <option value="">Select your industry</option>
        <option value="oil-gas">Oil & Gas</option>
        <option value="water-treatment">Water Treatment</option>
        <option value="paper-mill">Paper Mill</option>
        <option value="metalworking">Metal Working Fluids</option>
        <option value="pharma">Pharmaceuticals</option>
        <option value="agriculture">Agriculture</option>
        <option value="other">Other</option>
      </select>
    </div>
  </div>

  <!-- Row 4 -->
  <div class="form-row">
    <div class="form-group">
      <label for="product">Product Interested In *</label>
      <select id="product" name="product" required>
        <option value="">Select a product</option>
        <option value="mea-triazine-78">MEA Triazine 78%</option>
        <option value="mea-triazine-60">MEA Triazine 60%</option>
        <option value="mea-triazine-50">MEA Triazine 50%</option>
        <option value="mea-triazine-40">MEA Triazine 40%</option>
        <option value="mma-triazine-40">MMA Triazine 40%</option>
        <option value="copper-sulphate">Copper Sulphate</option>
        <option value="manganese-sulphate">Manganese Sulphate</option>
        <option value="albendazole">Albendazole API</option>
        <option value="ketoconazole">Ketoconazole API</option>
        <option value="pregabalin">Pregabalin API</option>
        <option value="other">Other / Multiple Products</option>
      </select>
    </div>
    <div class="form-group">
      <label for="quantity">Quantity Needed</label>
      <input type="text" id="quantity" name="quantity" placeholder="e.g. 1 MT, 5000 Kg" />
    </div>
  </div>

  <!-- Row 5 -->
  <div class="form-group">
    <label for="inquiry_type">Type of Inquiry</label>
    <div class="radio-group">
      <label><input type="radio" name="inquiry_type" value="quote" checked /> Request Pricing / Quote</label>
      <label><input type="radio" name="inquiry_type" value="sample" /> Request Free Sample</label>
      <label><input type="radio" name="inquiry_type" value="tds" /> Request TDS / MSDS</label>
      <label><input type="radio" name="inquiry_type" value="general" /> General Inquiry</label>
    </div>
  </div>

  <!-- Row 6 -->
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4" placeholder="Tell us more about your requirement..."></textarea>
  </div>

  <button type="submit">Send Inquiry →</button>

</form>

<!-- Pre-fill product from URL param -->
<script>
  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const type = params.get('type');
  if (product) {
    const productSelect = document.getElementById('product');
    if (productSelect) productSelect.value = product;
  }
  if (type === 'sample') {
    const sampleRadio = document.querySelector('input[value="sample"]');
    if (sampleRadio) sampleRadio.checked = true;
  }
</script>
```

### Form Submission — Email Notification to Vaibhav

When form is submitted, send an email to your sales team with all fields. Subject line format:

```
[LEAD] [Country] — [Product] — [Company Name]

Example:
[LEAD] UAE — MEA Triazine 78% — Al Noor Petroleum LLC
```

---

## 12. WhatsApp Button Implementation

Add this to your base layout (appears on every page):

```html
<!-- WhatsApp Floating Button -->
<a 
  href="https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20am%20interested%20in%20your%20MEA%20Triazine%20%2F%20MMA%20Triazine%20products.%20Please%20share%20your%20TDS%20and%20pricing." 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  style="
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    width: 56px;
    height: 56px;
    background-color: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.2s ease;
  "
  onmouseover="this.style.transform='scale(1.1)'"
  onmouseout="this.style.transform='scale(1)'"
>
  <!-- WhatsApp SVG Icon -->
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    width="30" 
    height="30" 
    fill="white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

Replace `91XXXXXXXXXX` with your actual WhatsApp number (country code + number, no + sign, no spaces).

The pre-filled message URL-encodes to: "Hello, I am interested in your MEA Triazine / MMA Triazine products. Please share your TDS and pricing."

---

## 13. Synonym Sections — Product Pages

### MEA Triazine — "Also Known As" Section

Add this HTML section to your MEA Triazine product page, below the main description and above the specifications table:

```html
<section class="synonyms-section">
  <h2>Also Known As / Synonyms / Trade Names</h2>
  <p>
    MEA Triazine 78% is known by many chemical names, IUPAC names, and trade names. 
    Our product is the same compound regardless of the name your specification uses:
  </p>

  <h3>IUPAC and Chemical Names</h3>
  <ul>
    <li>Hexahydro-1,3,5-tris(2-hydroxyethyl)-s-triazine</li>
    <li>1,3,5-Triazine-1,3,5(2H,4H,6H)-triethanol</li>
    <li>2,2',2''-(1,3,5-triazinane-1,3,5-triyl)triethanol</li>
    <li>2,2',2''-(hexahydro-1,3,5-triazine-1,3,5-triyl)triethanol</li>
    <li>TRIS(N-HYDROXYETHYL) HEXAHYDROTRIAZINE</li>
    <li>HEXAHYDRO-1,3,5-TRIS(HYDROXYETHYL)-S-TRIAZINE</li>
    <li>1,3,5-Tris(2-hydroxyethyl)hexahydro-1,3,5-triazine</li>
    <li>Triazinetriethanol</li>
    <li>HHT (Hexahydrotriazine Triethanol)</li>
  </ul>

  <h3>Trade Names and Brand Equivalents</h3>
  <ul>
    <li>Grotan BK (equivalent)</li>
    <li>J2.219E</li>
    <li>MEA based Triazine</li>
    <li>MEA Triazine</li>
    <li>1,3,5-Triazine</li>
  </ul>

  <h3>Application-Based Names</h3>
  <ul>
    <li>H2S Scavenger</li>
    <li>Hydrogen Sulfide Scavenger</li>
    <li>Mercaptan Scavenger</li>
    <li>Gas Sweetener / Sweetening Agent</li>
    <li>Desulfurizer</li>
    <li>Offshore H2S Scavenger</li>
    <li>Onshore H2S Scavenger</li>
    <li>Triazine H2S Scavenger</li>
    <li>Formaldehyde-Releasing Biocide</li>
    <li>Industrial Microbiocide / Microbiostat</li>
    <li>Slimicide</li>
    <li>Bactericide and Algicide</li>
    <li>Cutting Fluid Preservative</li>
    <li>Anti-mildew Agent</li>
    <li>Industrial Preservation Biocide</li>
  </ul>

  <h3>CAS Number</h3>
  <p><strong>CAS: 4719-04-4</strong></p>
  <p>
    If your specification, purchase order, or safety requirement lists any of the 
    above names or the CAS number 4719-04-4, Vasudev Chemo Pharma can supply 
    the matching product. <a href="/contact">Contact us</a> for confirmation and TDS.
  </p>
</section>
```

### MMA Triazine — "Also Known As" Section

```html
<section class="synonyms-section">
  <h2>Also Known As / Synonyms</h2>
  <p>MMA Triazine 40% may be listed under various names in technical specifications:</p>
  <ul>
    <li>MMA Triazine</li>
    <li>MMA based Triazine</li>
    <li>1,3,5-Triazine (MMA variant)</li>
    <li>Monomethylamine Triazine</li>
    <li>H2S Scavenger (MMA type)</li>
    <li>Hydrogen Sulfide Scavenger</li>
    <li>Triazine biocide</li>
    <li>Industrial biocide for water treatment</li>
    <li>Formaldehyde condensate biocide</li>
  </ul>
  <p><strong>CAS Number:</strong> [Add MMA Triazine CAS here]</p>
  <p>
    Contact us if your specification lists any of these names — we will confirm 
    whether our MMA Triazine 40% matches your requirement.
  </p>
</section>
```

---

## 14. Tracking & KPIs

### Monthly Metrics to Review

Track these in Google Analytics + Google Search Console + each B2B platform dashboard:

| Metric | Where to Track | Target (Month 4) |
|--------|---------------|-----------------|
| Organic website visitors | Google Analytics | 2× current traffic |
| Search Console impressions | Google Search Console | 5,000+/month |
| Search Console clicks | Google Search Console | 200+/month |
| Keywords ranking (top 10) | Search Console | 20+ keywords |
| Contact form submissions | Google Analytics Goals | 30+/month |
| WhatsApp inquiries | Manual count | 15+/month |
| Alibaba inquiries | Alibaba dashboard | 10+/month |
| LinkedIn profile views | LinkedIn Analytics | 500+/month |
| Blog posts published | Manual | 8 total |
| B2B platforms registered | Manual | 6 platforms |

### Google Search Console — Keywords to Monitor

Set up a filter in Search Console to track these queries specifically:

```
mea triazine
mma triazine
h2s scavenger
hydrogen sulfide scavenger
triazine manufacturer
h2s scavenger india
triazine exporter
vasudev chemo pharma
```

If any of these are not showing impressions by Month 2, the synonym section and meta tag updates need to be reviewed.

### Monthly Review Checklist

At the end of each month, review:

- [ ] Which product pages got the most traffic this month?
- [ ] Which blog posts are getting clicks from Search Console?
- [ ] Which countries are visitors coming from?
- [ ] How many contact form submissions were received?
- [ ] How many Alibaba inquiries?
- [ ] What is the WhatsApp inquiry count?
- [ ] Are there any new keywords we are appearing for in Search Console?
- [ ] Are Core Web Vitals still green?
- [ ] Are there any new 404 errors or crawl issues?

---

## Quick Reference — Developer Task Summary

| Priority | Task | File/Page | Time Estimate |
|----------|------|-----------|---------------|
| P1 | Add WhatsApp floating button | Base layout | 15 minutes |
| P1 | Rewrite all 12 meta titles + descriptions | All product pages | 1 hour |
| P1 | Add synonym sections to MEA + MMA pages | 2 product pages | 1 hour |
| P1 | Add TDS/MSDS PDF download links | All 12 product pages | 2 hours |
| P1 | Add "Request Free Sample" CTA button | All product pages | 30 minutes |
| P1 | Move brochure PDF to /public/ | Site root + all links | 20 minutes |
| P2 | Add Organization schema to base layout | Base layout / _app | 30 minutes |
| P2 | Add Product schema to all 12 product pages | All product pages | 2 hours |
| P2 | Add FAQPage schema to MEA + MMA pages | 2 product pages | 30 minutes |
| P2 | Upgrade contact form with new fields | Contact page | 2 hours |
| P3 | Create /industries/oil-gas-h2s-scavenger | New page | 3 hours |
| P3 | Create /industries/water-treatment | New page | 2 hours |
| P3 | Create /industries/metal-working-fluids | New page | 2 hours |
| P3 | Create /industries/paper-mill | New page | 2 hours |
| P3 | Create /how-h2s-scavengers-work | New page | 4 hours |
| P3 | Create /mea-triazine-vs-mma-triazine | New page | 3 hours |
| P4 | Add Arabic landing page | New route /ar | 4 hours |
| P4 | Add live chat (Tidio/Crisp) | Base layout | 30 minutes |

**Total P1 tasks: ~5 hours developer time — do these in Week 1.**

---

*Document version: 1.0 | Created: March 2026 | Owner: Vasudev Chemo Pharma*  
*Sales Contact: Vaibhav Lohiya | LinkedIn: linkedin.com/company/vasudev-chemo-pharma*
