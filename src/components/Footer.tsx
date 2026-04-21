import Link from "next/link";
import Image from "next/image";
import SocialLinksRow from "@/components/SocialLinksRow";
import { getCompanyInfo } from "@/lib/company";
import { SOCIAL_LINKS } from "@/lib/social-links";

const productLinks = [
  { label: "MEA Triazine 78%", href: "/supply/mea-triazine-78" },
  { label: "All Products", href: "/product" },
  { label: "MEA vs MMA Triazine", href: "/mea-triazine-vs-mma-triazine" },
  { label: "How H2S Scavengers Work", href: "/how-h2s-scavengers-work" },
  { label: "Product Comparisons", href: "/compare" },
  { label: "Resources & Datasheets", href: "/resources" },
];

const industryLinks = [
  { label: "Oil & Gas", href: "/industries/oil-gas-h2s-scavenger" },
  { label: "Water Treatment", href: "/industries/water-treatment" },
  { label: "Metal Working Fluids", href: "/industries/metal-working-fluids" },
  { label: "Paper Mill", href: "/industries/paper-mill" },
  { label: "Case Studies", href: "/case-study" },
];

const supplyRegionLinks = [
  { label: "UAE", href: "/supply/mea-triazine-78/uae" },
  { label: "Saudi Arabia", href: "/supply/mea-triazine-78/saudi-arabia" },
  { label: "Qatar", href: "/supply/mea-triazine-78/qatar" },
  { label: "Kuwait", href: "/supply/mea-triazine-78/kuwait" },
  { label: "United States", href: "/supply/mea-triazine-78/united-states" },
  { label: "Oman", href: "/supply/mea-triazine-78/oman" },
  { label: "Vietnam", href: "/supply/mea-triazine-78/vietnam" },
  { label: "Thailand", href: "/supply/mea-triazine-78/thailand" },
  { label: "View All Countries", href: "/supply/mea-triazine-78" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function Footer() {
  const company = await getCompanyInfo();

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-container mx-auto px-6 pb-4 pt-10 lg:px-10">
        <div className="relative z-10 mb-8 w-fit">
          <Link
            href="/"
            className="-mt-14 inline-flex items-center gap-4 rounded-2xl border border-gray-50 bg-white px-4 py-5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <Image
              src="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png"
              alt="Vasudev Chemo Pharma Logo — MEA Triazine Manufacturer"
              width={250}
              height={450}
              unoptimized
              className="h-12 w-auto"
            />
            <Image
              src="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_Name.png"
              alt="Vasudev Chemo Pharma"
              width={200}
              height={45}
              unoptimized
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <p className="mb-10 max-w-xl text-sm leading-relaxed text-white/50">
          India&apos;s leading manufacturer of MEA Triazine 78% H2S scavenger.
          ISO 9001:2015 certified. Direct factory pricing. Supplying 10+ countries
          across the Middle East, Americas, and Asia-Pacific.
        </p>

        <SocialLinksRow
          links={SOCIAL_LINKS}
          className="mb-10 flex flex-wrap items-center gap-3"
          itemClassName="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
        />

        <div className="grid grid-cols-2 gap-8 border-b border-white/10 pb-10 md:grid-cols-4">
          <FooterColumn title="Products" links={productLinks} />
          <FooterColumn title="Industries" links={industryLinks} />
          <FooterColumn title="Supply Regions" links={supplyRegionLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        <div className="grid grid-cols-1 gap-6 border-b border-white/10 py-8 md:grid-cols-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Corporate Office
            </p>
            <p className="text-sm text-white/60">{company.address}</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Phone
            </p>
            <div className="flex flex-col gap-1">
              {(company.phoneNumbers || []).map((phone) => (
                <p key={`${phone.label}-${phone.number}`} className="text-sm text-white/60">
                  {phone.number} - {phone.label}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Social Media
            </p>
            <SocialLinksRow
              links={SOCIAL_LINKS}
              className="flex flex-wrap items-center gap-3"
              itemClassName="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
              iconClassName="h-4.5 w-4.5"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Email
            </p>
            <div className="flex flex-col gap-1">
              {company.primaryEmail && (
                <a
                  href={`mailto:${company.primaryEmail}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {company.primaryEmail}
                </a>
              )}
              {company.secondaryEmail && (
                <a
                  href={`mailto:${company.secondaryEmail}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {company.secondaryEmail}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-5 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {company.companyName || "-"}. All
            rights reserved. Designed by{" "}
            <a
              href="https://www.aayvimotechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              Aayvimo Technologies, Ankleshwar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
