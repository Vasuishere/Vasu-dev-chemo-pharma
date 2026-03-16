# SEO-Friendly Website Implementation Guide

> **Project**: VasuDev Chemo Pharma
> **Stack**: Next.js 14 (App Router) + Payload CMS + Tailwind CSS
> **Domain**: Chemical manufacturing & export
> **Date**: March 2026

---

## Table of Contents

1. [Technical SEO Foundation](#1-technical-seo-foundation)
2. [URL Architecture](#2-url-architecture)
3. [Metadata & Head Tags](#3-metadata--head-tags)
4. [Structured Data / Schema Markup](#4-structured-data--schema-markup)
5. [Content SEO Strategy](#5-content-seo-strategy)
6. [On-Page SEO Checklist (Per Page Type)](#6-on-page-seo-checklist-per-page-type)
7. [Image & Media Optimization](#7-image--media-optimization)
8. [Core Web Vitals & Performance](#8-core-web-vitals--performance)
9. [Crawlability & Indexing](#9-crawlability--indexing)
10. [Internal Linking Strategy](#10-internal-linking-strategy)
11. [International SEO](#11-international-seo)
12. [Off-Page SEO & Authority](#12-off-page-seo--authority)
13. [Analytics & Monitoring Setup](#13-analytics--monitoring-setup)
14. [Implementation Checklist & Priority Matrix](#14-implementation-checklist--priority-matrix)

---

## 1. Technical SEO Foundation

### 1.1 Server-Side Rendering (SSR) & Static Generation

Next.js App Router gives us the best of both worlds. Pick the right rendering strategy per route:

| Route Pattern | Rendering Strategy | Why |
|---|---|---|
| `/` (Home) | SSG (`generateStaticParams`) | Rarely changes, maximum speed |
| `/about`, `/contact` | SSG | Static content |
| `/product` (listing) | ISR (revalidate: 3600) | Updates when products are added/edited |
| `/product/[slug]` | ISR (revalidate: 3600) | Product data changes infrequently |
| `/blog` (listing) | ISR (revalidate: 1800) | New posts added periodically |
| `/blog/[slug]` | ISR (revalidate: 3600) | Post content rarely changes after publish |
| `/service`, `/service/[slug]` | SSG | Rarely changes |
| `/case-study/[slug]` | SSG | Rarely changes |

**Action Items:**
- [x] Use `generateStaticParams()` for all known slugs at build time
- [x] Set `revalidate` values in route segments for ISR pages
- [x] Ensure every page returns valid HTML on first server response (no client-only rendering for content)

### 1.2 HTTPS & Security Headers

```ts
// next.config.js — Security headers
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];
```

- [x] Force HTTPS redirect at Vercel/edge level
- [x] Add security headers in `next.config.js`

---

## 2. URL Architecture

### 2.1 Clean URL Structure

Follow a flat, human-readable, keyword-rich hierarchy:

```
/                                    → Home
/about                               → About Us
/contact                             → Contact / Inquiry
/product                             → All Products listing
/product/sodium-sulphate             → Individual product (PDP)
/product/calcium-chloride            → Individual product (PDP)
/service                             → All Services listing
/service/cnc-machining-services      → Individual service
/blog                                → Blog listing
/blog/sustainable-manufacturing...   → Individual blog post
/case-study                          → Case studies listing
/case-study/precision-cnc-milling... → Individual case study
/legal/privacy-policy                → Privacy Policy
/sitemap.xml                         → XML Sitemap
```

### 2.2 URL Rules

| Rule | Example | Why |
|---|---|---|
| Lowercase only | `/product/sodium-sulphate` | Avoids duplicate content |
| Hyphens as separators | `/sodium-sulphate` not `/sodium_sulphate` | Google-recommended |
| No trailing slashes | `/product` not `/product/` | Consistent canonical URLs |
| No file extensions | `/about` not `/about.html` | Cleaner, modern |
| Max 3 levels deep | `/product/[slug]` | Easier crawling |
| Include target keyword | `/product/sodium-sulphate` | Direct ranking signal |

**Action Items:**
- [x] Configure trailing slash removal in `next.config.js`: `trailingSlash: false`
- [x] Add middleware to redirect uppercase URLs to lowercase
- [x] Ensure slug generation uses `slugify()` with lowercase + hyphen rules

---

## 3. Metadata & Head Tags

### 3.1 Global Metadata (layout.tsx)

```ts
// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vasudevchemopharma.com'),
  title: {
    template: '%s | VasuDev Chemo Pharma',
    default: 'VasuDev Chemo Pharma — Industrial & Specialty Chemical Manufacturer',
  },
  description: 'Leading Indian manufacturer and exporter of industrial chemicals, specialty chemicals, and pharmaceutical intermediates. ISO certified. Global shipping.',
  keywords: ['chemical manufacturer India', 'industrial chemicals exporter', 'specialty chemicals supplier', 'pharmaceutical intermediates'],
  authors: [{ name: 'VasuDev Chemo Pharma' }],
  creator: 'VasuDev Chemo Pharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'VasuDev Chemo Pharma',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'VasuDev Chemo Pharma' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@vasudevchemo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.vasudevchemopharma.com',
  },
};
```

### 3.2 Per-Page Dynamic Metadata

Each page type needs its own `generateMetadata()` function:

```ts
// app/product/[slug]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product.metaTitle || `${product.name} — ${product.category} Grade`,
    description: product.metaDescription || `Buy ${product.name} (CAS ${product.casNumber}) from VasuDev Chemo Pharma. ${product.appearance}. ISO certified manufacturer. Request a quote today.`,
    alternates: {
      canonical: `/product/${product.slug}`,
    },
    openGraph: {
      title: product.name,
      description: product.metaDescription,
      images: [{ url: product.heroImage || '/og-default.jpg' }],
      type: 'website',
    },
  };
}
```

### 3.3 Page-Specific Metadata Templates

| Page Type | Title Template | Description Pattern |
|---|---|---|
| Home | `VasuDev Chemo Pharma — Industrial & Specialty Chemical Manufacturer` | Company overview + key differentiators |
| Product Listing | `Chemical Products — Industrial & Specialty Grades \| VasuDev` | Browse all products + CTA |
| Product Detail | `{Product Name} — {Grade} Grade \| VasuDev Chemo Pharma` | Product name + CAS + key spec + CTA |
| Service | `{Service Name} — Chemical Manufacturing Services \| VasuDev` | Service description + capability |
| Blog Post | `{Post Title} \| VasuDev Chemo Pharma Blog` | Post excerpt (first 155 chars) |
| Case Study | `{Case Study Title} \| VasuDev Case Studies` | Result/outcome focused |
| Contact | `Contact Us — Request a Quote \| VasuDev Chemo Pharma` | Inquiry + global shipping mention |
| About | `About VasuDev Chemo Pharma — ISO Certified Chemical Manufacturer` | Company story + certifications |

**Action Items:**
- [ ] Implement `generateMetadata()` in every route segment
- [ ] Add `metaTitle` and `metaDescription` fields to every Payload CMS collection
- [ ] Ensure every page has a unique `<title>` (50-60 chars) and `<meta description>` (150-160 chars)
- [ ] Add canonical URLs to every page
- [ ] Create OG images for key pages (Home, Product listing, each Service)

---

## 4. Structured Data / Schema Markup

### 4.1 Schema Types Per Page

| Page | Schema Type(s) | Priority |
|---|---|---|
| Home | `Organization`, `WebSite`, `SearchAction` | HIGH |
| Product Detail | `Product`, `ChemicalSubstance`, `BreadcrumbList` | CRITICAL |
| Product Listing | `ItemList`, `BreadcrumbList` | HIGH |
| Service Pages | `Service`, `BreadcrumbList` | MEDIUM |
| Blog Post | `Article`, `BreadcrumbList` | MEDIUM |
| Contact | `LocalBusiness`, `ContactPoint` | HIGH |
| About | `Organization`, `BreadcrumbList` | MEDIUM |
| All Pages | `BreadcrumbList` | HIGH |

### 4.2 Product Detail Page — JSON-LD (Critical for Chemical Products)

```tsx
// components/seo/ProductSchema.tsx
export function ProductSchema({ product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription,
    sku: product.sku,
    image: product.heroImage,
    brand: {
      '@type': 'Organization',
      name: 'VasuDev Chemo Pharma',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'VasuDev Chemo Pharma',
      url: 'https://www.vasudevchemopharma.com',
    },
    category: product.category,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'CAS Number',
        value: product.casNumber,
      },
      {
        '@type': 'PropertyValue',
        name: 'Molecular Formula',
        value: product.formula,
      },
      {
        '@type': 'PropertyValue',
        name: 'HS Code',
        value: product.hsCode,
      },
      ...Object.entries(product.specs || {}).map(([key, val]) => ({
        '@type': 'PropertyValue',
        name: key,
        value: val,
      })),
    ],
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'VasuDev Chemo Pharma',
      },
      url: `https://www.vasudevchemopharma.com/product/${product.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 4.3 Organization Schema (Home Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VasuDev Chemo Pharma",
  "url": "https://www.vasudevchemopharma.com",
  "logo": "https://www.vasudevchemopharma.com/logo.png",
  "description": "Leading Indian manufacturer and global exporter of industrial chemicals, specialty chemicals, and pharmaceutical intermediates.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@vasudevchemopharma.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/vasudevchemo"
  ]
}
```

### 4.4 Breadcrumb Schema (Every Page)

```tsx
// components/seo/BreadcrumbSchema.tsx
export function BreadcrumbSchema({ items }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Action Items:**
- [x] Create `components/seo/` folder with reusable schema components
- [x] Add `ProductSchema` to every `/product/[slug]` page
- [x] Add `OrganizationSchema` to Home page
- [x] Add `BreadcrumbSchema` to every page
- [x] Add `ArticleSchema` to every blog post
- [ ] Validate all schemas at https://validator.schema.org/
- [ ] Test with Google Rich Results Test

---

## 5. Content SEO Strategy

### 5.1 Keyword Strategy for Chemical Products

#### Primary Keywords (Target on Product Pages)

| Product | Primary Keyword | Search Intent |
|---|---|---|
| MEA Triazine 78% H2S Scavenger | `mea triazine 78 h2s scavenger manufacturer india` | Commercial |
| MMA Triazine 40% | `mma triazine 40 supplier` | Commercial |
| P-Toluenesulfonic Acid | `p-toluenesulfonic acid manufacturer india` | Commercial |
| Copper Sulphate | `copper sulphate exporter india` | Commercial |
| Manganese Sulphate | `manganese sulphate manufacturer` | Commercial |
| Albendazole | `albendazole api manufacturer india` | Commercial |
| Ketoconazole | `ketoconazole raw material supplier` | Commercial |
| Pregabalin | `pregabalin api supplier india` | Commercial |
| Bis(2-chloroethyl)amine Hydrochloride | `bis 2 chloroethyl amine hydrochloride supplier` | Commercial |
| Di Ethyl Amino Ethyl Chloride Hydrochloride | `di ethyl amino ethyl chloride hydrochloride manufacturer` | Commercial |
| 2-Amino-5-methylthiazole | `2 amino 5 methylthiazole supplier` | Commercial |
| 2-Chloroethylamine Hydrochloride | `2 chloroethylamine hydrochloride manufacturer india` | Commercial |
| Each product | `{chemical name} + CAS number` | Informational/Commercial |
| Each product | `buy {chemical name} industrial grade` | Transactional |

#### Long-Tail Keywords (Target on Blog/Case Studies)

| Topic | Long-Tail Keywords |
|---|---|
| Chemical applications | `mea triazine h2s scavenger uses in gas sweetening` |
| Industry solutions | `chemicals for oil and gas exploration and refining` |
| Industrial processing | `p toluenesulfonic acid catalyst uses in resin manufacturing` |
| Export-focused buying | `copper sulphate bulk export supplier from india` |
| Pharma intermediates | `2 amino 5 methylthiazole pharmaceutical intermediate supplier` |
| Compliance | `chemical export regulations India` |
| Safety | `{chemical name} MSDS safety data sheet` |

### 5.2 Content Requirements Per Page Type Completed

#### Product Detail Page (PDP) — Content Checklist

- [x] H1: Product name with chemical formula
- [x] Product overview paragraph (100-200 words, keyword-rich)
- [x] Technical specifications table (purity, pH, moisture, etc.)
- [x] CAS number, molecular weight, HS code (crawlable text, not images)
- [x] Applications / use cases section (bulleted, keyword-rich)
- [x] Industries served section
- [x] Available packaging options
- [x] Safety/compliance section (GHS, SDS download link)
- [x] Related products section (internal linking)
- [x] CTA: "Request a Quote" form or button
- [x] FAQ section (targets People Also Ask snippets)

#### Blog Post — Content Checklist

- [x] H1: Target keyword in first 60 characters
- [x] 1500+ words for pillar content, 800+ for regular posts
- [x] At least 2-3 internal links to product/service pages
- [x] At least 1 external link to authoritative source
- [x] Images with alt text containing keywords
- [x] Table of contents for posts > 1500 words
- [x] Author byline with credentials
- [x] Published date and last updated date

### 5.3 Product Page FAQ Section (Target Featured Snippets)

Every product page should have an FAQ section like:

```
## Frequently Asked Questions

### What is Sodium Sulphate used for?
Sodium Sulphate (Na₂SO₄) is widely used in detergent manufacturing,
glass production, textile dyeing, and paper pulping...

### What is the CAS number of Sodium Sulphate?
The CAS number of Sodium Sulphate is 7757-82-6...

### What grades of Sodium Sulphate do you supply?
VasuDev Chemo Pharma supplies industrial grade and pharmaceutical
grade Sodium Sulphate with purity levels of ≥99%...
```

Add `FAQPage` schema markup for these sections.

---

## 6. On-Page SEO Checklist (Per Page Type)

### 6.1 Universal On-Page Rules

| Element | Rule | Character Limit |
|---|---|---|
| `<title>` | Unique, contains primary keyword, brand at end | 50-60 chars |
| `<meta description>` | Unique, contains CTA + keyword, compelling | 150-160 chars |
| H1 | Exactly one per page, contains primary keyword | - |
| H2-H6 | Logical hierarchy, contain secondary keywords | - |
| URL slug | Contains primary keyword, hyphen-separated | 3-5 words max |
| First paragraph | Primary keyword within first 100 words | - |
| Image alt text | Descriptive, contains keyword naturally | 125 chars max |
| Internal links | 3-5 relevant internal links per page | - |
| Canonical tag | Self-referencing canonical on every page | - |

### 6.2 Heading Hierarchy Example — Product Page

```
<h1>Sodium Sulphate — Industrial Grade Chemical</h1>
  <h2>Product Overview</h2>
  <h2>Technical Specifications</h2>
  <h2>Applications & Industries</h2>
    <h3>Detergent Manufacturing</h3>
    <h3>Glass Production</h3>
    <h3>Textile Processing</h3>
  <h2>Packaging & Shipping</h2>
  <h2>Safety Data & Compliance</h2>
  <h2>Related Products</h2>
  <h2>Frequently Asked Questions</h2>
```

---

## 7. Image & Media Optimization

### 7.1 Image Rules

| Rule | Implementation |
|---|---|
| Format | Use WebP with JPEG fallback via `<Image>` component |
| Sizing | Always set explicit `width` and `height` (prevents CLS) |
| Lazy loading | Use `loading="lazy"` for below-fold images |
| Priority loading | Use `priority` prop for hero/LCP images |
| Alt text | Descriptive + keyword: `"Industrial grade Sodium Sulphate white powder in 25kg bags"` |
| File naming | Keyword-rich: `sodium-sulphate-industrial-grade.webp` |
| Compression | Target < 100KB for product images, < 200KB for hero images |
| Responsive | Provide `sizes` prop for responsive serving |

### 7.2 Next.js Image Component Usage

```tsx
import Image from 'next/image';

<Image
  src="/images/products/sodium-sulphate-industrial-grade.webp"
  alt="Industrial grade Sodium Sulphate white crystalline powder — VasuDev Chemo Pharma"
  width={800}
  height={600}
  priority={isHero}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  quality={85}
/>
```

**Action Items:**
- [ ] Convert all images to WebP format
- [ ] Add meaningful alt text to every image (audit existing images)
- [ ] Set explicit dimensions on all `<Image>` components
- [ ] Use `priority` on LCP (hero) images only
- [ ] Implement responsive `sizes` attribute
- [ ] Name files with keywords before uploading to CMS

---

## 8. Core Web Vitals & Performance

### 8.1 Target Metrics

| Metric | Target | What It Measures |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Loading speed |
| INP (Interaction to Next Paint) | < 200ms | Responsiveness |
| CLS (Cumulative Layout Shift) | < 0.1 | Visual stability |
| FCP (First Contentful Paint) | < 1.8s | Perceived load speed |
| TTFB (Time to First Byte) | < 800ms | Server response time |

### 8.2 Performance Optimizations

```
Priority 1 — Critical Path
├── SSG/ISR for all content pages (no unnecessary SSR)
├── Priority loading for hero/LCP images
├── Font subsetting + font-display: swap
├── Inline critical CSS (Tailwind handles this well)
└── Minimal JavaScript in initial bundle

Priority 2 — Asset Optimization
├── next/image for automatic WebP + responsive images
├── Dynamic imports for heavy components (lazy load)
├── Bundle analysis + tree shaking
├── Preconnect to external domains (analytics, fonts)
└── Compress API responses with gzip/brotli (Vercel default)

Priority 3 — Runtime
├── Avoid layout shifts (set dimensions, use skeleton loaders)
├── Debounce search/filter interactions
├── Use React.memo/useMemo for expensive components
├── Minimize third-party scripts (defer non-critical)
└── Service worker for offline caching static assets
```

### 8.3 Font Loading

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',           // Prevents FOIT
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});
```

**Action Items:**
- [ ] Run Lighthouse audit on every page type — baseline scores
- [ ] Achieve 90+ Lighthouse Performance score on all pages
- [ ] Set up Web Vitals monitoring (Vercel Analytics or custom)
- [ ] Audit and reduce JavaScript bundle size
- [ ] Implement font optimization with `next/font`
- [ ] Add `preconnect` for external domains

---

## 9. Crawlability & Indexing

### 9.1 XML Sitemap

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();
  const blogPosts = await getAllBlogPosts();
  const services = await getAllServices();
  const caseStudies = await getAllCaseStudies();

  const staticPages = [
    { url: 'https://www.vasudevchemopharma.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.vasudevchemopharma.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.vasudevchemopharma.com/product', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.vasudevchemopharma.com/service', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.vasudevchemopharma.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://www.vasudevchemopharma.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://www.vasudevchemopharma.com/case-study', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  const productPages = products.map((p) => ({
    url: `https://www.vasudevchemopharma.com/product/${p.slug}`,
    lastModified: p.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const blogPages = blogPosts.map((b) => ({
    url: `https://www.vasudevchemopharma.com/blog/${b.slug}`,
    lastModified: b.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
```

### 9.2 Robots.txt

```ts
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/payload', '/api/', '/_next/'],
      },
    ],
    sitemap: 'https://www.vasudevchemopharma.com/sitemap.xml',
  };
}
```

### 9.3 Crawl Budget Optimization

| Action | Why |
|---|---|
| Block `/admin`, `/payload`, `/api/` | No value for search engines |
| Block `/_next/` static chunks | Internal framework assets |
| Use canonical tags on every page | Prevent duplicate content |
| Return proper 404 status for missing pages | Don't waste crawl budget on soft 404s |
| Implement pagination with `rel="next"` / `rel="prev"` | Help Googlebot understand paginated content |
| Keep sitemap under 50,000 URLs | Google sitemap limit |

**Action Items:**
- [ ] Create `app/sitemap.ts` with dynamic generation
- [ ] Create `app/robots.ts`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify no important pages are blocked by robots.txt
- [ ] Set up proper 404 page with helpful navigation

---

## 10. Internal Linking Strategy

### 10.1 Link Architecture

```
Home
├── /product (listing) ←→ linked from navbar, footer, home hero
│   ├── /product/sodium-sulphate ← related products, blog mentions
│   ├── /product/calcium-chloride ← related products, blog mentions
│   └── ... (each PDP links to 3-5 related products)
├── /service (listing) ←→ linked from navbar, home sections
│   ├── /service/cnc-machining-services ← case study backlinks
│   └── ...
├── /blog (listing) ←→ linked from navbar, footer
│   ├── /blog/sustainable-manufacturing... ← links TO products + services
│   └── ...
├── /case-study (listing)
│   ├── /case-study/precision-cnc-milling... ← links TO services + products
│   └── ...
├── /about
└── /contact ← linked from every CTA button across the site
```

### 10.2 Internal Linking Rules

| Rule | Details |
|---|---|
| Every PDP links to 3-5 related products | "You may also be interested in" section |
| Every blog post links to 1-2 product pages | Contextual link within body text |
| Every blog post links to 1 service page | Relevant to topic |
| Every case study links to the service it showcases | Direct connection |
| Footer has links to all main sections | Site-wide navigation |
| Breadcrumbs on every page | Structural linking + schema |
| CTAs always link to `/contact` | Lead generation path |
| Anchor text is descriptive, not "click here" | Contains keywords naturally |

### 10.3 Breadcrumb Implementation

```tsx
// components/Breadcrumbs.tsx
// Example for product page: Home > Products > Sodium Sulphate
<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-2 text-sm text-gray-500">
    <li><a href="/">Home</a></li>
    <li>/</li>
    <li><a href="/product">Products</a></li>
    <li>/</li>
    <li aria-current="page" className="text-gray-900">{product.name}</li>
  </ol>
</nav>
```

**Action Items:**
- [ ] Build reusable `<Breadcrumbs>` component
- [ ] Add "Related Products" section to every PDP
- [ ] Ensure blog posts contain contextual product/service links
- [ ] Audit all CTAs point to `/contact` or inquiry form
- [ ] Add footer links to all major sections

---

## 11. International SEO

Since VasuDev targets international buyers (importers, distributors):

### 11.1 Essentials

| Element | Implementation |
|---|---|
| Language | Set `<html lang="en">` |
| Content locale | Write in international English (not region-specific) |
| Currency mentions | Use USD as primary, mention FOB/CIF pricing |
| Country targeting | Do NOT restrict via `geo` meta tags (you want global reach) |
| hreflang | Not needed unless you create localized versions |

### 11.2 International Content Signals

- [ ] Mention "global shipping" / "worldwide export" on Home and Product pages
- [ ] Include HS codes on product pages (critical for international trade)
- [ ] Mention key target markets in content (Middle East, Southeast Asia, Africa, etc.)
- [ ] Include ISO certifications prominently
- [ ] Add shipping/logistics information page or section

---

## 12. Off-Page SEO & Authority

### 12.1 Quick Wins

| Action | Effort | Impact |
|---|---|---|
| Google Business Profile | Low | HIGH — local SEO + credibility |
| Submit to chemical industry directories (ICIS, ChemicalBook, IndiaMART) | Low | HIGH — niche backlinks |
| LinkedIn company page with regular posts | Low | MEDIUM — brand signals |
| Press releases for major certifications or expansions | Medium | MEDIUM — news backlinks |
| Guest articles on industry publications | Medium | HIGH — authority backlinks |

### 12.2 Directory Submissions

- [ ] Google Business Profile (complete with photos, products, hours)
- [ ] IndiaMART seller profile
- [ ] TradeIndia listing
- [ ] ExportHub / Alibaba (if applicable)
- [ ] ChemicalBook.com product listings
- [ ] LinkedIn company page

---

## 13. Analytics & Monitoring Setup

### 13.1 Tools to Set Up

| Tool | Purpose | Priority |
|---|---|---|
| Google Search Console | Index status, search queries, crawl errors | CRITICAL |
| Google Analytics 4 | Traffic, user behavior, conversions | CRITICAL |
| Bing Webmaster Tools | Bing indexing + international coverage | HIGH |
| Vercel Analytics | Core Web Vitals, real user metrics | HIGH |
| Google Tag Manager | Manage tracking scripts without deploys | MEDIUM |

### 13.2 Key Events to Track

```
Conversion Events (GA4):
├── contact_form_submit    → Lead generation
├── quote_request          → High-intent action
├── sds_download           → Product interest signal
├── product_inquiry_click  → CTA engagement
├── phone_click            → Direct contact
└── email_click            → Direct contact

Engagement Events:
├── product_view           → Product page visits
├── spec_tab_click         → Technical interest
├── related_product_click  → Cross-sell navigation
├── blog_read_complete     → Content quality signal
└── search_query           → On-site search terms
```

### 13.3 SEO Monitoring Checklist (Monthly)

- [ ] Review Search Console for crawl errors and fix within 48 hours
- [ ] Check index coverage — ensure all important pages are indexed
- [ ] Monitor Core Web Vitals — maintain green scores
- [ ] Track keyword rankings for top 20 target keywords
- [ ] Review top landing pages — optimize underperforming ones
- [ ] Check for broken links (internal and external)
- [ ] Monitor 404 errors and set up redirects where needed
- [ ] Review and update sitemap if new pages were added

---

## 14. Implementation Checklist & Priority Matrix

### Phase 1 — Foundation (Do First)

| # | Task | Files / Area | Priority |
|---|---|---|---|
| 1 | Set up `generateMetadata()` on every route | All `page.tsx` files | CRITICAL |
| 2 | Add canonical URLs to every page | All `page.tsx` files | CRITICAL |
| 3 | Create `app/sitemap.ts` | `app/sitemap.ts` | CRITICAL |
| 4 | Create `app/robots.ts` | `app/robots.ts` | CRITICAL |
| 5 | Set up Google Search Console + submit sitemap | External | CRITICAL |
| 6 | Set up Google Analytics 4 | `app/layout.tsx` + GTM | CRITICAL |
| 7 | Add `<html lang="en">` to root layout | `app/layout.tsx` | CRITICAL |
| 8 | Implement proper heading hierarchy (H1-H6) | All pages | CRITICAL |
| 9 | Set `trailingSlash: false` in Next.js config | `next.config.js` | HIGH |
| 10 | Add security headers | `next.config.js` | HIGH |

### Phase 2 — Structured Data & Content (Week 1-2)

| # | Task | Files / Area | Priority |
|---|---|---|---|
| 11 | Create `ProductSchema` JSON-LD component | `components/seo/` | CRITICAL |
| 12 | Create `OrganizationSchema` JSON-LD component | `components/seo/` | HIGH |
| 13 | Create `BreadcrumbSchema` JSON-LD component | `components/seo/` | HIGH |
| 14 | Build `<Breadcrumbs>` UI component | `components/` | HIGH |
| 15 | Add `metaTitle` + `metaDescription` to CMS collections | Payload CMS config | HIGH |
| 16 | Write unique meta descriptions for all 25 pages | CMS content | HIGH |
| 17 | Add FAQ sections to product pages + FAQPage schema | Product pages | HIGH |
| 18 | Add "Related Products" section to every PDP | Product pages | MEDIUM |

### Phase 3 — Performance & Media (Week 2-3)

| # | Task | Files / Area | Priority |
|---|---|---|---|
| 19 | Audit all images — convert to WebP, add alt text | All images | HIGH |
| 20 | Run Lighthouse baseline audit on all page types | Testing | HIGH |
| 21 | Optimize LCP — priority loading for hero images | Layout + pages | HIGH |
| 22 | Implement `next/font` for font optimization | `app/layout.tsx` | MEDIUM |
| 23 | Minimize CLS — set dimensions on all media | All components | MEDIUM |
| 24 | Bundle analysis and code splitting | Build config | MEDIUM |
| 25 | Set up Vercel Analytics for Web Vitals monitoring | Vercel dashboard | MEDIUM |

### Phase 4 — Authority & Growth (Ongoing)

| # | Task | Files / Area | Priority |
|---|---|---|---|
| 26 | Set up Google Business Profile | External | HIGH |
| 27 | Submit to chemical industry directories | External | HIGH |
| 28 | Create LinkedIn company page | External | MEDIUM |
| 29 | Plan blog content calendar (2 posts/month minimum) | Content strategy | MEDIUM |
| 30 | Set up monthly SEO monitoring routine | Process | MEDIUM |
| 31 | Build internal link audit script or use tool | DevOps | LOW |

---

## Quick Reference — Files to Create/Modify

```
app/
├── layout.tsx              ← Global metadata, lang, fonts, OG defaults
├── sitemap.ts              ← Dynamic XML sitemap generation
├── robots.ts               ← Robots.txt rules
├── not-found.tsx           ← Custom 404 page with navigation
├── product/
│   ├── page.tsx            ← Product listing metadata + ItemList schema
│   └── [slug]/page.tsx     ← PDP metadata + Product schema + Breadcrumbs
├── blog/
│   ├── page.tsx            ← Blog listing metadata
│   └── [slug]/page.tsx     ← Article schema + metadata
├── service/
│   ├── page.tsx            ← Services listing metadata
│   └── [slug]/page.tsx     ← Service schema + metadata
├── case-study/
│   └── [slug]/page.tsx     ← CaseStudy metadata + Breadcrumbs
├── about/page.tsx          ← Organization schema + metadata
└── contact/page.tsx        ← LocalBusiness schema + metadata

components/
├── seo/
│   ├── ProductSchema.tsx   ← Product + ChemicalSubstance JSON-LD
│   ├── OrganizationSchema.tsx
│   ├── ArticleSchema.tsx
│   ├── BreadcrumbSchema.tsx
│   └── FAQSchema.tsx
├── Breadcrumbs.tsx         ← Reusable breadcrumb UI
└── RelatedProducts.tsx     ← Related products section

next.config.js              ← Security headers, trailing slash, redirects
```

---

> **Summary**: SEO for a chemical manufacturing website is 40% technical foundation (metadata, schema, sitemap, performance), 30% content quality (unique descriptions, FAQs, specifications), 20% internal architecture (linking, breadcrumbs, URL structure), and 10% off-page authority (directories, profiles, backlinks). Get the technical foundation right first, then build out content and authority over time.
