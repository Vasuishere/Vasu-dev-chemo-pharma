import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
} from "@/lib/products-payload";
import { CATEGORY_LABELS } from "@/lib/types";
import SectionLabel from "@/components/SectionLabel";
import StickyAnchorNav from "@/components/StickyAnchorNav";
import GoogleDriveImage from "@/components/GoogleDriveImage";
import { toGoogleDrivePreviewUrl } from "@/lib/gdrive";
import ProductSchema from "@/components/seo/ProductSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import { getProductSeoKeywords } from "@/lib/product-seo-keywords";
import {
  MEA_TRIAZINE_SLUG,
  MEA_TRIAZINE_COMPARISON,
  MEA_TRIAZINE_MARKET_LANGUAGE_CODES,
  MEA_TRIAZINE_METADATA,
  MEA_TRIAZINE_OG_LOCALES,
} from "@/lib/seo/mea-triazine-schema-data";

/* ─── ISR: revalidate product pages every hour ──────────────── */
export const revalidate = 3600;

/* ─── Static params for all products ─────────────────────────── */
export async function generateStaticParams() {
  try {
    const slugs = await getAllProductSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch {
    // DB unavailable at build time — pages will be generated on-demand via ISR
    return [];
  }
}

/* ─── Dynamic SEO metadata per product ──────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) return {};

    const isMeaTriazine = slug === MEA_TRIAZINE_SLUG;

    const title = isMeaTriazine
      ? MEA_TRIAZINE_METADATA.title
      : product.metaTitle ||
        `${product.name}${product.casNumber ? ` (CAS ${product.casNumber})` : ""} — ${CATEGORY_LABELS[product.category]} | Vasudev Chemo Pharma`;

    const description = isMeaTriazine
      ? "MEA Triazine 78% H2S Scavenger (CAS 4719-04-4) — effective monoethanolamine triazine for removing hydrogen sulfide from natural gas, crude oil, and wastewater. Industrial drum & IBC supply. Request a quote today."
      : product.metaDescription ||
        `Buy ${product.name}${product.casNumber ? ` (CAS ${product.casNumber})` : ""} from Vasudev Chemo Pharma — ISO 9001:2015 certified manufacturer in Gujarat, India. Export-ready packaging. Request a quote today.`;

    const keywordConfig = getProductSeoKeywords(
      product.slug,
      product.name,
      product.casNumber || ""
    );

    const canonicalUrl = `https://vasudevchemopharma.com/product/${product.slug}`;
    const ogImageUrl = product.imageUrl || "https://vasudevchemopharma.com/images/og-default.webp";
    const resolvedDescription = isMeaTriazine
      ? MEA_TRIAZINE_METADATA.description
      : description;
    const openGraphDescription = isMeaTriazine
      ? MEA_TRIAZINE_METADATA.openGraphDescription
      : resolvedDescription;
    const twitterDescription = isMeaTriazine
      ? MEA_TRIAZINE_METADATA.twitterDescription
      : resolvedDescription;
    const languageAlternates = isMeaTriazine
      ? Object.fromEntries(
          MEA_TRIAZINE_MARKET_LANGUAGE_CODES.map((languageCode) => [languageCode, canonicalUrl])
        )
      : {
          en: canonicalUrl,
          "x-default": canonicalUrl,
        };

    return {
      title,
      description: resolvedDescription,
      keywords: [
        keywordConfig.primaryKeyword,
        ...keywordConfig.longTailKeywords,
        `${product.name} CAS number`.toLowerCase(),
        `buy ${product.name} industrial grade`.toLowerCase(),
      ],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-image-preview": "large" as const,
          "max-video-preview": -1,
        },
      },
      alternates: {
        canonical: canonicalUrl,
        languages: languageAlternates,
      },
      openGraph: {
        title: isMeaTriazine
          ? MEA_TRIAZINE_METADATA.title
          : title,
        description: openGraphDescription,
        url: canonicalUrl,
        type: "website",
        siteName: "Vasudev Chemo Pharma Chemicals",
        locale: isMeaTriazine ? "en_IN" : "en_US",
        alternateLocale: isMeaTriazine ? [...MEA_TRIAZINE_OG_LOCALES] : undefined,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: product.name,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: isMeaTriazine
          ? MEA_TRIAZINE_METADATA.title
          : title,
        description: twitterDescription,
        images: [ogImageUrl],
      },
    };
  } catch {
    return {};
  }
}

/* ─── Placeholder badge component ───────────────────────────────── */
function ContentPlaceholder({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 bg-gray-50/50">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
        Content to add
      </p>
      <p className="text-sm text-gray-500">{label}</p>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PRODUCT DETAIL PAGE
   ═══════════════════════════════════════════════════════════════════ */
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const isMeaTriazine = slug === MEA_TRIAZINE_SLUG;
  const categoryLabel = CATEGORY_LABELS[product.category];
  const relatedProducts = await getRelatedProducts(
    product.slug,
    product.category,
    3
  );
  const safeImages = Array.isArray(product.images) ? product.images : [];
  const safeDocuments = Array.isArray(product.documents) ? product.documents : [];
  const sdsDocument = safeDocuments.find((doc) => {
    const docType = (doc.docType || "").toUpperCase();
    const fileName = (doc.fileName || "").toUpperCase();
    return docType.includes("SDS") || docType.includes("MSDS") || fileName.includes("SDS") || fileName.includes("MSDS");
  });
  const sdsSourceUrl = sdsDocument?.fileUrl || product.documentUrl || "";
  const sdsPreviewUrl = sdsSourceUrl ? toGoogleDrivePreviewUrl(sdsSourceUrl) : "";

  return (
    <>
      <ProductSchema product={product} />
      <FAQSchema items={product.faqs} />
      <BreadcrumbSchema
        items={
          isMeaTriazine
            ? [
                { name: "Home", url: "https://vasudevchemopharma.com" },
                { name: "Chemicals", url: "https://vasudevchemopharma.com/product" },
                { name: "H2S Scavengers", url: "https://vasudevchemopharma.com/product?category=industrial" },
                { name: "MEA Triazine 78% H2S Scavenger", url: `https://vasudevchemopharma.com/product/${product.slug}` },
              ]
            : [
                { name: "Home", url: "https://vasudevchemopharma.com" },
                { name: "Products", url: "https://vasudevchemopharma.com/product" },
                { name: product.name, url: `https://vasudevchemopharma.com/product/${product.slug}` },
              ]
        }
      />

      <main className="pt-28 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">

          {/* ─── 1. BREADCRUMB ──────────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/product"
                  className="hover:text-accent transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>/</li>
              <li>
                <span className="text-gray-400">{categoryLabel}</span>
              </li>
              <li>/</li>
              <li>
                <span className="font-medium text-primary">{product.name}</span>
              </li>
            </ol>
          </nav>

          {/* ─── 2. PRODUCT HERO ────────────────────────────────────── */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

            {/* Left — Product Image */}
            <div className="bg-light rounded-3xl p-8 flex items-center justify-center min-h-[360px]">
              {product.imageUrl ? (
                <div className="w-full space-y-4">
                  <GoogleDriveImage
                    src={product.imageUrl}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-contain max-h-[400px]"
                  />
                  {safeImages.length > 0 &&
                    safeImages.map((img, i) => (
                      <GoogleDriveImage
                        key={i}
                        src={img.src}
                        alt={img.alt}
                        width={img.width || 800}
                        height={img.height || 600}
                        className="w-full rounded-2xl object-contain max-h-[400px]"
                      />
                    ))}
                </div>
              ) : safeImages.length > 0 ? (
                <div className="w-full space-y-4">
                  {safeImages.map((img, i) => (
                    <GoogleDriveImage
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      width={img.width || 800}
                      height={img.height || 600}
                      className="w-full rounded-2xl object-contain max-h-[400px]"
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gray-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-400">Product image — to be added</p>
                </div>
              )}
            </div>

            {/* Right — Identity & Quick Info */}
            <div>
              <SectionLabel>{categoryLabel}</SectionLabel>

              {/* H1 — Product Name (SEO critical) */}
              <h1 className="font-heading text-[clamp(2rem,10vw,5.5rem)] leading-[1.05] [overflow-wrap:anywhere] hyphens-auto text-primary mt-4 mb-3">
                {product.name}
                {product.formula ? (
                  <span className="block text-base md:text-lg text-secondary font-normal mt-3">
                    {product.formula}
                  </span>
                ) : null}
              </h1>

              {/* Chemical identity row */}
              <div className="flex flex-wrap gap-4 mb-6">
                {product.formula && (
                  <span className="inline-flex items-center gap-1.5 bg-light rounded-full px-4 py-2 text-sm font-medium text-primary">
                    <span className="text-accent font-semibold">Formula:</span>{" "}
                    {product.formula}
                  </span>
                )}
                {product.casNumber && (
                  <span className="inline-flex items-center gap-1.5 bg-light rounded-full px-4 py-2 text-sm font-medium text-primary">
                    <span className="text-accent font-semibold">CAS:</span>{" "}
                    {product.casNumber}
                  </span>
                )}
                {product.molecularWeight && (
                  <span className="inline-flex items-center gap-1.5 bg-light rounded-full px-4 py-2 text-sm font-medium text-primary">
                    <span className="text-accent font-semibold">Mol. Wt:</span>{" "}
                    {product.molecularWeight}
                  </span>
                )}
              </div>

              {/* Quick identity table */}
              <div className="border border-gray-200 rounded-2xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50 w-40">Product Name</td>
                      <td className="px-5 py-3 font-semibold text-primary">{product.name}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50">SKU</td>
                      <td className="px-5 py-3 text-primary">{product.sku || "—"}</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50">Category</td>
                      <td className="px-5 py-3 text-primary">{categoryLabel}</td>
                    </tr>
                    {product.subcategory && (
                      <tr className="border-b border-gray-100">
                        <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50">Subcategory</td>
                        <td className="px-5 py-3 text-primary">{product.subcategory}</td>
                      </tr>
                    )}
                    <tr className="border-b border-gray-100">
                      <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50">Origin</td>
                      <td className="px-5 py-3 text-primary">{product.originCountry || "India"}</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-medium text-gray-500 bg-gray-50/50">Manufacturer</td>
                      <td className="px-5 py-3 text-primary">{product.supplier || "Vasudev Chemo Pharma"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA — Request Quote */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Request a Quote for {product.name}
              </Link>
            </div>
          </section>

          {/* ─── ANCHOR NAV (jump links for long page) ──────────────── */}
          <StickyAnchorNav />

          {/* ─── 3. PRODUCT DESCRIPTION / OVERVIEW ──────────────────── */}
          <section id="description" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              About {product.name}
            </h2>
            {product.description ? (
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                <p>{product.description}</p>
              </div>
            ) : (
              <ContentPlaceholder label="Product description — 2-3 paragraphs covering what the product is, how it is manufactured, key benefits, and why buyers should choose VasuDev as supplier. Should include the product name, formula, and CAS number naturally for SEO." />
            )}
          </section>

          {/* ─── 4. TECHNICAL SPECIFICATIONS ─────────────────────────── */}
          <section id="specifications" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Technical Specifications
            </h2>
            {Object.keys(product.specs).length > 0 ? (
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-5 py-3 font-semibold">Parameter</th>
                      <th className="text-left px-5 py-3 font-semibold">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <tr
                        key={key}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="px-5 py-3 font-medium text-gray-700">{key}</td>
                        <td className="px-5 py-3 text-primary">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <ContentPlaceholder label="Technical specifications table — key/value pairs such as: Purity (%), pH, Moisture (%), Density, Boiling Point, Melting Point, Solubility, Appearance, Colour, Odour, Molecular Weight, HS Code." />
            )}

            {/* Additional chemical/physical properties */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {product.appearance ? (
                <div className="bg-light rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Appearance</p>
                  <p className="text-sm text-primary font-medium">{product.appearance}</p>
                </div>
              ) : (
                <div className="bg-light rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Appearance</p>
                  <p className="text-sm text-gray-400 italic">To be added</p>
                </div>
              )}
              <div className="bg-light rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Molecular Weight</p>
                <p className="text-sm text-primary font-medium">{product.molecularWeight || "To be added"}</p>
              </div>
              <div className="bg-light rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">HS Code</p>
                <p className={`text-sm font-medium ${product.hsCode ? "text-primary" : "text-gray-400 italic"}`}>{product.hsCode || "To be added"}</p>
              </div>
            </div>
          </section>

          {/* ─── 5. APPLICATIONS & INDUSTRIES ────────────────────────── */}
          <section id="applications" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Applications & Industries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-h5 text-primary mb-4">Applications</h3>
                {product.applications.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ContentPlaceholder label="Application tags — e.g. Detergent filler, Glass manufacturing, Water treatment, Textile dyeing, Paper pulp processing. List all use-cases where this chemical is applied." />
                )}
              </div>
              <div>
                <h3 className="font-heading text-h5 text-primary mb-4">Target Industries</h3>
                {product.industries.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((ind) => (
                      <span
                        key={ind}
                        className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ContentPlaceholder label="Industry tags — e.g. Oil & Gas, Water Treatment, Lubricants, Pharmaceuticals, Agriculture, Food Processing, Paints & Coatings, Textiles, Construction." />
                )}
              </div>
            </div>
          </section>

          {/* ─── 6. SAFETY & COMPLIANCE ──────────────────────────────── */}
          <section id="safety" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Safety & Compliance
            </h2>
            {sdsPreviewUrl ? (
              <div className="mb-6">
                <a
                  href={sdsPreviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors text-sm font-semibold px-4 py-2 rounded-full"
                >
                  View SDS / MSDS
                </a>
              </div>
            ) : null}
            {product.safetyClass || product.ghsPictograms.length > 0 || product.hazardStatements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-heading text-h5 text-primary mb-4">GHS Classification</h3>
                  {product.safetyClass && (
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Safety Class:</span> {product.safetyClass}
                    </p>
                  )}
                  {product.signalWord && (
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-semibold">Signal Word:</span>{" "}
                      <span className="text-red-600 font-semibold">{product.signalWord}</span>
                    </p>
                  )}
                  {product.ghsPictograms.length > 0 && (
                    <div className="flex gap-3 mt-3">
                      {product.ghsPictograms.map((pic) => (
                        <span key={pic} className="bg-red-50 border border-red-200 text-red-700 text-xs font-semibold px-3 py-1.5 rounded">
                          {pic}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {product.hazardStatements.length > 0 && (
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-heading text-h5 text-primary mb-4">Hazard Statements</h3>
                    <ul className="space-y-2">
                      {product.hazardStatements.map((stmt) => (
                        <li key={stmt} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-500 mt-0.5">⚠</span>
                          {stmt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <ContentPlaceholder label="Safety & compliance data — GHS classification, Signal Word (Warning / Danger), GHS pictogram codes (GHS07, GHS05, etc.), Hazard statements (H-codes), Precautionary statements (P-codes), UN number for transport, Storage classification." />
            )}
            {product.complianceDisclaimer && (
              <div className="mt-6 border border-amber-300 bg-amber-50 rounded-2xl p-6">
                <h3 className="font-heading text-h5 text-amber-900 mb-3">Regulatory & Export-Control Notice</h3>
                <p className="text-sm text-amber-800 leading-relaxed">
                  {product.complianceDisclaimer}
                </p>
              </div>
            )}
          </section>

          {/* ─── 7. PACKAGING & GRADES ───────────────────────────────── */}
          <section id="packaging" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Packaging Options & Available Grades
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-h5 text-primary mb-4">Available Grades</h3>
                {product.grades.length > 0 ? (
                  <ul className="space-y-3">
                    {product.grades.map((grade) => (
                      <li key={grade} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        {grade}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ContentPlaceholder label="Available grades — e.g. Industrial Grade, Lab Grade, Technical Grade, Pharmaceutical Grade, Food Grade, Reagent Grade." />
                )}
              </div>
              <div>
                <h3 className="font-heading text-h5 text-primary mb-4">Packaging</h3>
                {product.packaging.length > 0 ? (
                  <ul className="space-y-3">
                    {product.packaging.map((pkg) => (
                      <li key={pkg} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {pkg}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ContentPlaceholder label="Packaging options — e.g. 25 kg HDPE bags, 50 kg drums, 200 kg barrels, 1 MT jumbo bags, IBC tanks, custom packaging on request." />
                )}

                {/* Min order quantity */}
                <div className="mt-6 bg-light rounded-2xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">Minimum Order Quantity</p>
                  <p className={`text-sm font-medium ${product.minOrderQuantity ? "text-primary" : "text-gray-400 italic"}`}>
                    {product.minOrderQuantity || "To be confirmed"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── 8. CERTIFICATIONS & QUALITY ─────────────────────────── */}
          <section id="certifications" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Certifications & Quality Assurance
            </h2>
            {product.certifications.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {product.certifications.map((cert) => (
                  <div
                    key={cert}
                    className="border border-accent/30 bg-accent/5 rounded-2xl px-6 py-4 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-semibold text-primary">{cert}</span>
                  </div>
                ))}
              </div>
            ) : (
              <ContentPlaceholder label="Certifications — ISO 9001:2015, GMP, REACH registration, FSSAI (for food-grade), WHO-GMP (for pharma), Halal, Kosher, etc." />
            )}
            <div className="mt-6">
              <ContentPlaceholder label="Quality assurance details — QC process description, in-house lab testing capabilities, COA (Certificate of Analysis) provided with each shipment, batch traceability." />
            </div>
          </section>

          {/* ─── 9. DOCUMENTS (SDS / COA / TDS) ─────────────────────── */}
          <section id="documents" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Documents & Downloads
            </h2>
            {safeDocuments.length > 0 || product.documentUrl ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.documentUrl && (
                  <a
                    href={toGoogleDrivePreviewUrl(product.documentUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-200 rounded-2xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all flex items-center gap-4"
                  >
                    <svg className="w-8 h-8 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-primary">Product Document</p>
                      <p className="text-xs text-gray-500 uppercase">Preview</p>
                    </div>
                  </a>
                )}
                {safeDocuments.map((doc) => (
                  <a
                    key={doc.fileName}
                    href={toGoogleDrivePreviewUrl(doc.fileUrl)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-200 rounded-2xl p-5 hover:border-accent/50 hover:bg-accent/5 transition-all flex items-center gap-4"
                  >
                    <svg className="w-8 h-8 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-primary">{doc.fileName}</p>
                      <p className="text-xs text-gray-500 uppercase">{doc.docType}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <ContentPlaceholder label="Downloadable documents — Safety Data Sheet (SDS/MSDS), Certificate of Analysis (COA), Technical Data Sheet (TDS), Product Specification Sheet. Each with file type, access level (public / on-request)." />
            )}
          </section>

          {/* ─── 10. SHIPPING & EXPORT INFO ──────────────────────────── */}
          <section className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Shipping & Export Information
            </h2>
            <ContentPlaceholder label="Shipping & export details — Export-ready packaging, nearest ports (Kandla, Mundra, Hazira), shipping lead time, Incoterms offered (FOB, CIF, CFR), countries exported to, customs documentation support, HS code for this product." />
          </section>

          {/* ─── 11. FAQ SECTION ─────────────────────────────────────── */}
          <section id="faq" className="mb-16">
            <h2 className="font-heading text-h3 text-primary mb-6">
              Frequently Asked Questions
            </h2>
            {product.faqs.length > 0 ? (
              <div className="space-y-4">
                {product.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="border border-gray-200 rounded-2xl overflow-hidden group"
                  >
                    <summary className="px-6 py-4 cursor-pointer flex items-center justify-between font-medium text-primary hover:bg-gray-50 transition-colors">
                      {faq.question}
                      <span className="text-accent ml-4 transition-transform group-open:rotate-45 text-xl">+</span>
                    </summary>
                    <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            ) : (
              <ContentPlaceholder label={`FAQ entries for ${product.name} — typical questions:\n• What is ${product.name} used for?\n• What is the CAS number of ${product.name}?\n• What grades are available?\n• What is the shelf life?\n• What packaging options do you offer?\n• Can you provide a sample?\n• What is the minimum order quantity?\n• Do you provide COA with shipments?\n• Which ports do you ship from?\n• Is this product export-ready?`} />
            )}
          </section>

          {/* ─── 12. TRADE NAME EQUIVALENCE (MEA Triazine only) ─────── */}
          {false && isMeaTriazine && (
            <section id="trade-names" className="mb-16">
              <h2 className="font-heading text-h3 text-primary mb-3">
                Also Known As — Trade Name Equivalence
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                MEA Triazine 78% H2S Scavenger by Vasudev Chemo Pharma is a direct equivalent to the following globally recognised trade names. Use this reference to match your current supplier&apos;s brand to our product.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(Object.entries({}) as [string, readonly string[]][]).map(([category, names]) => (
                  <div key={category} className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-heading text-h5 text-primary mb-4">{category}</h3>
                    <ul className="space-y-2">
                      {names.map((name) => (
                        <li key={name} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ─── 13. COMPETITOR COMPARISON TABLE (MEA Triazine only) ── */}
          {isMeaTriazine && (
            <section id="comparison" className="mb-16">
              <h2 className="font-heading text-h3 text-primary mb-6">
                MEA Triazine 78% vs. Other H2S Scavenger Options
              </h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-sm min-w-[500px]">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="text-left px-5 py-3 font-semibold">Feature</th>
                      <th className="text-left px-5 py-3 font-semibold">MEA Triazine 78%</th>
                      <th className="text-left px-5 py-3 font-semibold">MMA Triazine</th>
                      <th className="text-left px-5 py-3 font-semibold">Glyoxal-Based</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MEA_TRIAZINE_COMPARISON.map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-5 py-3 font-medium text-gray-700">{row.feature}</td>
                        <td className="px-5 py-3 text-accent font-semibold">{row.meaTriazine78}</td>
                        <td className="px-5 py-3 text-primary">{row.mmaTriazine}</td>
                        <td className="px-5 py-3 text-primary">{row.glyoxalBased}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* ─── 14. DOSING GUIDELINES (MEA Triazine only) ─────────── */}
          {isMeaTriazine && (
            <section id="dosing" className="mb-16">
              <h2 className="font-heading text-h3 text-primary mb-6">
                Dosing Guidelines &amp; Injection Rates
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
                <p>
                  Typical treating rate for MEA Triazine 78% is <strong>1.5–3 L per kg of H₂S</strong> depending on field conditions, contact time, and injection method. Two primary approaches are used:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 not-prose">
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-heading text-h5 text-primary mb-3">Continuous Injection Method</h3>
                    <p className="text-sm text-gray-600">Direct injection into the gas stream via chemical injection pump. Preferred for offshore platforms and space-constrained installations. Simpler equipment footprint.</p>
                  </div>
                  <div className="border border-gray-200 rounded-2xl p-6">
                    <h3 className="font-heading text-h5 text-primary mb-3">Contactor Tower Method</h3>
                    <p className="text-sm text-gray-600">Gas is passed through a packed tower or bubble column containing MEA Triazine solution. Higher removal efficiency (up to 80%) but requires more infrastructure.</p>
                  </div>
                </div>
                <div className="bg-light rounded-2xl p-6 mt-6 not-prose">
                  <h3 className="font-heading text-h5 text-primary mb-3">Sample Dosing Calculation</h3>
                  <div className="text-sm text-gray-600 space-y-1 font-mono">
                    <p>Gas flow: 10 MMscfd</p>
                    <p>H₂S concentration: 200 ppm</p>
                    <p>H₂S load: ~2.4 kg/day</p>
                    <p className="text-accent font-semibold">Typical MEA Triazine 78% dosage: 2.4 × 2 = 4.8 L/day</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-3">Note: always confirm with field data. Over-dosing may cause solids formation. Contact our technical team for application-specific guidance.</p>
                </div>
              </div>
            </section>
          )}

          {/* ─── 15. REQUEST QUOTE CTA ───────────────────────────────── */}
          <section id="quote" className="mb-16">
            <div className="bg-primary rounded-3xl p-10 lg:p-14 text-center">
              <h2 className="font-heading text-h3 text-white mb-4">
                Interested in {product.name}?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Get competitive pricing, request a sample, or ask for the
                technical data sheet. Our team responds within 24 hours.
              </p>
              <Link
                href="/contact"
                id="request-quote-btn"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-8 py-4 rounded-full"
              >
                Request a Quote
              </Link>
              <p className="text-white/50 text-xs mt-4">
                Contact form will be pre-filled with &quot;{product.name}&quot;
              </p>
            </div>
          </section>

          {/* ─── 16. RELATED PRODUCTS ────────────────────────────────── */}
          {relatedProducts.length > 0 && (
            <section className="mb-16">
              <h2 className="font-heading text-h3 text-primary mb-8">
                Related {categoryLabel}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/product/${rp.slug}`}
                    className="border border-gray-200 rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all group"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {CATEGORY_LABELS[rp.category]}
                    </span>
                    <h3 className="font-heading text-h5 text-primary mt-2 mb-2 group-hover:text-accent transition-colors">
                      {rp.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                      {rp.formula && <span>Formula: {rp.formula}</span>}
                      {rp.casNumber && <span>· CAS: {rp.casNumber}</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          
        </div>
      </main>
    </>
  );
}
