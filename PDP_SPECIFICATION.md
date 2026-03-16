# Product Detail Page (PDP) — Complete Specification

> **Project**: VasuDev Chemo Pharma  
> **Page**: Individual Product Detail Page  
> **Route**: `/product/[slug]` (e.g., `/product/sodium-sulphate`)  
> **Framework**: Next.js 14 (App Router) + Tailwind CSS  
> **Date**: March 2026

---

## 1. Page Purpose & Target Audience

### Purpose
Serve as the definitive information hub for each chemical product — providing technical, commercial, safety, and compliance data to convert international buyers into inquiry leads.

### Target Audience
| Segment | Intent |
|---|---|
| International importers & distributors | Evaluate product specs, request quotes |
| Oil & gas procurement teams | Verify CAS numbers, safety classes, and specs |
| Lubricant/water treatment manufacturers | Check grades, packaging, application fit |
| Regulatory/compliance officers | Access SDS/MSDS, GHS classifications |
| Search engines (Googlebot) | Crawl structured data (Product + ChemicalSubstance schema) |

---

## 2. Data Model — Product Fields

### Identity & SEO
| Field | Type | Required | Example |
|---|---|---|---|
| `name` | string | Yes | "Sodium Sulphate" |
| `slug` | string | Yes | "sodium-sulphate" |
| `sku` | string | No | "VCP-IND-0001" |
| `formula` | string | No | "Na₂SO₄" |
| `casNumber` | string | No | "7757-82-6" |
| `category` | enum | Yes | "industrial" / "specialty" / "pharmaceutical" |
| `subcategory` | string | No | "Inorganic Salts" |
| `metaTitle` | string | No | "Sodium Sulphate — Industrial Grade | VasuDev Chemicals" |
| `metaDescription` | string | No | "Buy industrial grade Sodium Sulphate (CAS 7757-82-6)..." |

### Technical Specifications
| Field | Type | Required | Example |
|---|---|---|---|
| `specs` | Record<string,string> | No | `{ "Purity": "≥99%", "pH": "6–8", "Moisture": "≤0.5%" }` |
| `molecularWeight` | string | No | "142.04 g/mol" |
| `appearance` | string | No | "White crystalline powder" |
| `hsCode` | string | No | "2833.11" |

### Safety & Compliance
| Field | Type | Required | Example |
|---|---|---|---|
| `safetyClass` | string | No | "Not classified (GHS)" |
| `ghsPictograms` | string[] | No | `["GHS07"]` |
| `signalWord` | string | No | "Warning" |
| `hazardStatements` | string[] | No | `["H319 – Causes serious eye irritation"]` |
| `documents` | Document[] | No | SDS, COA, TDS file references |

### Applications & Industries
| Field | Type | Required | Example |
|---|---|---|---|
| `applications` | string[] | No | `["Detergent filler", "Glass manufacturing"]` |
| `industries` | string[] | No | `["Oil & Gas", "Water Treatment"]` |
| `description` | string | Yes | Full product description paragraph |

### Commercial Info
| Field | Type | Required | Example |
|---|---|---|---|
| `price` | number | No | 0 = "Price on Request" |
| `priceUnit` | string | No | "/MT" |
| `currency` | string | No | "USD" |
| `unitOfMeasure` | string | No | "kg" |
| `grades` | string[] | No | `["Industrial Grade", "Lab Grade"]` |
| `packaging` | string[] | No | `["25 kg bags", "50 kg bags", "1 MT jumbo bags"]` |
| `minOrderQuantity` | string | No | "1 MT" |
| `originCountry` | string | No | "India" |

### Trust Signals
| Field | Type | Required | Example |
|---|---|---|---|
| `certifications` | string[] | No | `["ISO 9001:2015"]` |
| `supplier` | string | No | "VasuDev Chemo Pharma" |

### Media
| Field | Type | Required | Example |
|---|---|---|---|
| `images` | ProductImage[] | No | Array of `{ src, alt, width, height, isPrimary }` |
| `status` | enum | Yes | "active" / "inactive" / "discontinued" |

---

## 3. Content Requirements — Section Mapping

| PDP Section | Data Source Fields | Example Copy |
|---|---|---|
| **Hero / Header** | `name`, `formula`, `casNumber`, `category` | H1: "Sodium Sulphate", subtitle: "Na₂SO₄ · CAS 7757-82-6" |
| **Breadcrumb** | `category`, `name` | Home > Products > Industrial Chemicals > Sodium Sulphate |
| **Product Image Gallery** | `images[]` | Primary image + thumbnails; alt: "Sodium Sulphate powder — VCP-IND-0001" |
| **Description** | `description` | "Sodium Sulphate is a versatile inorganic compound..." |
| **Technical Specifications** | `specs`, `molecularWeight`, `appearance`, `hsCode` | Table: Purity ≥99%, pH 6–8, Moisture ≤0.5% |
| **Applications & Industries** | `applications`, `industries` | Pill tags: "Detergent filler", "Oil & Gas" |
| **Safety & Compliance** | `safetyClass`, `ghsPictograms`, `hazardStatements`, `documents` | GHS classification + downloadable SDS |
| **Packaging & Grades** | `packaging`, `grades`, `minOrderQuantity` | 25 kg bags, 50 kg drum, 1 MT jumbo bags |
| **RFQ Form (inline)** | Pre-filled `name` | "Request a Quote for Sodium Sulphate" |
| **Related Products** | Same `category`, different `slug` | 3 cards from same category |
| **FAQ** | Hardcoded per-product or dynamic | "What is the shelf life of Sodium Sulphate?" |

---

## 4. UI/UX Considerations

### Layout
- **Desktop**: 2-column hero (image left, info right), full-width specs/safety below, 2-column RFQ section
- **Tablet**: Stacked columns with maintained section ordering
- **Mobile**: Single column, sticky "Request Quote" CTA at bottom

### Navigation
- Breadcrumb at top: Home > Products > [Category] > [Product Name]
- Anchor links for long pages: Specs | Safety | Applications | Get Quote
- "Back to Products" link in breadcrumb
- Related products section with links to other PDPs

### Accessibility
- Semantic HTML: `<main>`, `<article>`, `<section>`, `<table>` for specs
- All images have descriptive `alt` text
- Form inputs have associated `<label>` elements
- Color contrast ≥ 4.5:1 for text
- Focus-visible outlines on interactive elements
- ARIA labels on icon-only buttons

### Responsive Breakpoints
- Mobile: < 768px — single column, collapsible sections
- Tablet: 768–1024px — 2-column where appropriate
- Desktop: > 1024px — full layout with sidebar RFQ

---

## 5. SEO Plan

### Per-Page Meta
| Element | Pattern | Example |
|---|---|---|
| `<title>` | `{name} — {category} Chemical | VasuDev Chemo Pharma` | "Sodium Sulphate — Industrial Chemical \| VasuDev Chemo Pharma" |
| `meta description` | `Buy {name} (CAS {casNumber}) from VasuDev Chemicals. {grades}. Export-ready packaging. Request a quote.` | "Buy Sodium Sulphate (CAS 7757-82-6)..." |
| `canonical` | `https://vasudevchemopharma.com/product/{slug}` | |
| `H1` | `{name}` | "Sodium Sulphate" |
| Open Graph | `og:title`, `og:description`, `og:image` | Product primary image |

### Schema Markup — JSON-LD

#### Product Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Sodium Sulphate",
  "description": "Industrial grade Sodium Sulphate powder...",
  "sku": "VCP-IND-0001",
  "brand": {
    "@type": "Brand",
    "name": "VasuDev Chemo Pharma"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "VasuDev Chemo Pharma",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankleshwar",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  },
  "category": "Industrial Chemicals",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "unitCode": "MTN",
        "value": "1"
      }
    }
  }
}
```

#### ChemicalSubstance Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ChemicalSubstance",
  "name": "Sodium Sulphate",
  "molecularFormula": "Na2SO4",
  "identifier": {
    "@type": "PropertyValue",
    "name": "CAS Number",
    "value": "7757-82-6"
  },
  "chemicalComposition": "Na₂SO₄",
  "hasMolecularFormula": "Na2SO4"
}
```

---

## 6. Validation & Data Integrity

| Field | Rule | Constraint |
|---|---|---|
| `name` | Required | Non-empty, max 200 chars |
| `slug` | Required, unique | Lowercase, kebab-case, max 200 chars |
| `category` | Required | Must be one of: `industrial`, `specialty`, `pharmaceutical` |
| `description` | Required | Non-empty, min 50 chars recommended |
| `casNumber` | Optional | Format: digits-digits-digit (e.g., `7757-82-6`) |
| `sku` | Optional, unique | Format: `VCP-{CAT}-{NNNN}` |
| `status` | Required | One of: `active`, `inactive`, `discontinued` |
| `price` | Optional | Non-negative number; 0 = "Price on Request" |
| `images[].src` | Optional | Valid URL or relative path |
| `images[].alt` | Optional | Descriptive text, recommended 50–125 chars |

---

## 7. Content Workflow

| Step | Owner | Action |
|---|---|---|
| 1. Product data entry | Sales / Product Manager | Fill all fields in seed file or CMS |
| 2. Technical review | Quality / R&D team | Verify specs, CAS numbers, safety data |
| 3. SDS / document upload | Compliance team | Upload SDS/COA to document storage |
| 4. SEO review | Marketing | Check meta titles, descriptions, schema |
| 5. Publish | Web admin | Set `status: "active"`, deploy |
| 6. Update cadence | Quarterly | Review specs, pricing, availability |

---

## 8. Key Features — Implementation Notes

### RFQ Form (Inline)
- Pre-filled with product name
- Fields: name, company, country, email, phone, quantity, message
- Client-side validation matching existing contact form patterns
- Submit sends data to backend API (future) or shows confirmation

### Downloadable SDS
- Each product can reference SDS in `documents[]` array
- Button: "Download Safety Data Sheet (SDS)"
- `access_level: "public"` → direct download; `"on-request"` → triggers RFQ

### Related Products
- Query same category, exclude current product, limit 3
- Display as cards linking to their PDP

### FAQ Section
- Per-product FAQ array: `{ question: string, answer: string }[]`
- Collapsible accordion UI
- Schema: `FAQPage` markup for SEO

---

## 9. Product Image Array — Recommended Fields

```typescript
interface ProductImage {
  src: string;        // URL or path to image
  alt: string;        // Descriptive alt text for SEO/accessibility
  width: number;      // Intrinsic width in px
  height: number;     // Intrinsic height in px
  isPrimary: boolean; // Flag for hero/thumbnail display
  caption?: string;   // Optional caption (e.g., "25 kg packaging")
}
```

---

## 10. MVP Scope & Phased Enhancements

### MVP (Phase 1) — Current Implementation
- [x] Static product data in TypeScript seed file (28 products)
- [x] Dynamic `[slug]` route with `generateStaticParams`
- [x] Hero section with product identity (name, formula, CAS, category)
- [x] Technical specifications table
- [x] Applications & industries tags
- [x] Packaging & grades info
- [x] Safety classification display
- [x] Inline RFQ form (pre-filled product name)
- [x] Related products section (same category)
- [x] FAQ accordion
- [x] Full SEO: meta tags, JSON-LD (Product + ChemicalSubstance), canonical
- [x] Responsive layout
- [x] Breadcrumb navigation

### Phase 2 — Post-MVP
- [ ] SDS document download (when files are uploaded)
- [ ] Product image gallery with multiple images
- [ ] Backend API for RFQ form submission
- [ ] Search within product catalog
- [ ] Product comparison feature

### Phase 3 — Scale
- [ ] Payload CMS or Prisma database for product management
- [ ] Admin panel for CRUD operations
- [ ] Customer reviews/testimonials per product
- [ ] Real-time inventory/availability status
- [ ] Multi-language support
