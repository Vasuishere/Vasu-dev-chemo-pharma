import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { getCompanyInfo } from "@/lib/company";

const products = [
  {
    title: "Aluminum gear housing",
    image: "https://framerusercontent.com/images/jHDtKG45VXEX0nkiBpMkSEuN2VI.webp",
    material: "Aluminum 6061 / 7075",
    capability: "CNC Machining",
    sizeRange: "Custom dimensions up to 500mm",
  },
  {
    title: "Custom plastic enclosures",
    image: "https://framerusercontent.com/images/f0RFFjVJlOXDEiaSuyLTCybZqQ.png",
    material: "ABS, Polycarbonate, Nylon",
    capability: "Injection Molding",
    sizeRange: "Varies – custom moldable",
  },
  {
    title: "Electrical control panels",
    image: "https://framerusercontent.com/images/tAtl9axoEYtWCItpE02pQkhJW4.webp",
    material: "Mild Steel, Stainless Steel",
    capability: "Sheet Metal Fabrication & Assembly",
    sizeRange: "Small to full-scale cabinets",
  },
  {
    title: "Precision shaft assemblies",
    image: "https://framerusercontent.com/images/OE2OcltN5LzFLAcVdLYTaSeJAz0.webp",
    material: "Alloy Steel, Stainless Steel",
    capability: "Turning & Grinding",
    sizeRange: "Up to 1200mm",
  },
];

export default async function ProductsSection() {
  const company = await getCompanyInfo();
  const brochureUrl = company.brochureUrl?.trim();
  let safeBrochureUrl: string | null = null;

  if (brochureUrl) {
    try {
      const parsedUrl = new URL(brochureUrl);
      if (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:") {
        safeBrochureUrl = parsedUrl.toString();
      }
    } catch {
      safeBrochureUrl = null;
    }
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/8VGjgC528A5Gc4HiKedmx0Ak.png"
          alt=""
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/2">
            <SectionLabel>What we manufacture</SectionLabel>
            <div className="mt-6">
              <h2 className="font-heading text-h2 font-semibold text-primary">
                50,000+
              </h2>
              <p className="text-secondary text-base mt-2">
                Precision-built products delivered to clients across industries
                and continents.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://framerusercontent.com/images/wDVZkHZZ0vcjteNyXg3aK8aGPRw.svg"
              alt="Product Info Image"
              width={553}
              height={243}
              className="w-full"
            />
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <h3 className="font-heading text-h4 font-semibold text-primary flex-1">
                  {product.title}
                </h3>
                <div className="relative rounded-2xl overflow-hidden w-full sm:w-48 h-32">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    Material
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {product.material}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    Capability
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {product.capability}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider mb-1">
                    Size Range
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {product.sizeRange}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
          <h3 className="font-heading text-h3 font-semibold text-primary">
            Explore our complete product range across industries.
          </h3>
          <div className="flex items-center gap-4">
            {safeBrochureUrl ? (
              <a
                href={safeBrochureUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                <Image
                  src="https://framerusercontent.com/images/FMYHIQjdikOhoXe2cvZxTA5KY.svg"
                  alt=""
                  width={19}
                  height={17}
                />
                Download brochure
              </a>
            ) : null}
            <Link
              href="/product"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              View all products
              <Image
                src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                alt=""
                width={16}
                height={12}
                className="invert"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
