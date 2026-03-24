import Link from "next/link";
import { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { getAllProducts } from "@/lib/products-payload";
import { products as staticProducts } from "@/lib/products";
import { CATEGORY_LABELS, Product } from "@/lib/types";
import { getCategoryPriorityMap } from "@/lib/product-sequencing";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Chemical Products — Industrial, Specialty & Pharmaceutical | Vasudev Chemo Pharma",
  description:
    "Browse chemical products from Vasudev Chemo Pharma — ISO 9001:2015 certified manufacturer in Gujarat, India. Industrial chemicals, specialty chemicals, and pharmaceutical API intermediates. Request a quote today.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/product",
  },
};

function groupByCategory(products: Product[]) {
  const groups: Record<string, Product[]> = {};
  for (const p of products) {
    const label = CATEGORY_LABELS[p.category];
    if (!groups[label]) groups[label] = [];
    groups[label].push(p);
  }
  return groups;
}

export default async function ProductPage() {
  let products: Product[];
  let categoryPriorityMap: Record<string, number> = {};
  try {
    categoryPriorityMap = await getCategoryPriorityMap();
  } catch (error) {
    console.error("Failed to load category priorities:", error);
    categoryPriorityMap = {};
  }
  try {
    products = await getAllProducts();
  } catch {
    products = staticProducts;
  }

  const sortedProducts = [...products].sort((a, b) => {
    const aPriority = typeof a.productPriority === "number" ? a.productPriority : 100;
    const bPriority = typeof b.productPriority === "number" ? b.productPriority : 100;
    if (aPriority !== bPriority) return aPriority - bPriority;
    return a.name.localeCompare(b.name);
  });

  const grouped = groupByCategory(sortedProducts);
  const orderedGroups = Object.entries(grouped).sort(([aLabel, aProducts], [bLabel, bProducts]) => {
    const aCategory = aProducts[0]?.category;
    const bCategory = bProducts[0]?.category;
    const aPriority = aCategory ? categoryPriorityMap[aCategory] ?? 100 : 100;
    const bPriority = bCategory ? categoryPriorityMap[bCategory] ?? 100 : 100;
    if (aPriority !== bPriority) return aPriority - bPriority;
    return aLabel.localeCompare(bLabel);
  });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Products", url: "https://www.vasudevchemopharma.com/product" },
        ]}
      />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <SectionLabel>Our Chemical Products</SectionLabel>
                <h1 className="font-heading text-display font-semibold mt-4">
                  Industrial & Specialty Chemicals
                </h1>
                <p className="text-gray-500 mt-4 max-w-xl">
                  Chemical products manufactured in Gujarat, India — ISO 9001:2015 certified,
                  export-ready packaging, shipped worldwide.
                </p>
              </div>
              <Button href="/contact">Request a quote</Button>
            </div>
          </div>
        </section>

        {/* Product Grid by Category */}
        {orderedGroups.map(([categoryLabel, categoryProducts]) => (
          <section key={categoryLabel} className="pb-16">
            <div className="max-w-container mx-auto px-6 lg:px-10">
              <h2 className="font-heading text-h3 font-semibold text-primary mb-8">
                {categoryLabel}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/product/${product.slug}`}
                    className="bg-light rounded-2xl p-6 hover:shadow-lg hover:border-accent/30 border border-transparent transition-all group"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {product.subcategory || categoryLabel}
                    </span>
                    <h3 className="font-heading text-h5 text-primary mt-2 mb-3 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <div className="space-y-1.5 text-sm text-gray-500">
                      {product.formula && (
                        <p>
                          <span className="font-medium text-gray-600">Formula:</span>{" "}
                          {product.formula}
                        </p>
                      )}
                      {product.casNumber && (
                        <p>
                          <span className="font-medium text-gray-600">CAS:</span>{" "}
                          {product.casNumber}
                        </p>
                      )}
                      {product.sku && (
                        <p>
                          <span className="font-medium text-gray-600">SKU:</span>{" "}
                          {product.sku}
                        </p>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4">
                      View details
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl overflow-hidden bg-primary p-12 lg:p-16 text-center">
              <h3 className="font-heading text-h3 font-semibold text-white mb-4">
                Can&apos;t find what you need?
              </h3>
              <p className="text-white/70 max-w-lg mx-auto mb-8">
                We manufacture custom chemical products to your specifications.
                Send us your requirements and our team will respond within 24 hours.
              </p>
              <Button href="/contact" variant="dark">
                Send inquiry
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
