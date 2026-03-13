import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { getCompanyInfo } from "@/lib/company";

const avatars = [
  "https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png",
  "https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png",
  "https://framerusercontent.com/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png",
  "https://framerusercontent.com/images/crOykN7l4AlMK9acNXCVRzJmcg.png",
];

const capabilities = [
  { title: "Chemical Manufacturing", href: "/service/chemical-manufacturing" },
  { title: "Import & Export", href: "/service/import-export" },
  { title: "Custom Formulation", href: "/service/custom-formulation" },
  { title: "Quality Testing & Packaging", href: "/service/quality-testing-packaging" },
];

export default async function AboutPage() {
  const company = await getCompanyInfo();
  const companyName = company.companyName || "Our company";
  const companyAddress = company.address || "";
  const brochureUrl = company.brochureUrl?.trim();
  const currentYear = new Date().getFullYear();
  const hasValidFoundingYear =
    typeof company.foundingYear === "number" &&
    company.foundingYear > 1900 &&
    company.foundingYear <= currentYear;
  const derivedStartYear =
    typeof company.yearsOfExperience === "number" && company.yearsOfExperience > 0
      ? currentYear - company.yearsOfExperience + 1
      : null;
  const startYear = hasValidFoundingYear ? company.foundingYear : derivedStartYear;

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel>Who we are</SectionLabel>
              <h1 className="font-heading text-display font-semibold mt-4">
                About us
              </h1>
            </div>
            <div className="flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {avatars.map((src, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    10+
                  </div>
                </div>
                <p className="text-sm text-secondary">
                  Team of dedicated chemical professionals
                </p>
              </div>
              <p className="text-sm text-muted">{companyAddress || "-"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Image + Description */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden aspect-[16/7] mb-12">
            <Image
              src="https://framerusercontent.com/images/yHbIIVOj7hK29ucygE5eIDV47I.jpg"
              alt="About Image"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-base text-secondary leading-relaxed">
                {companyName} is an ISO 9001:2015 certified industrial &amp;
                specialty chemical manufacturer{companyAddress ? ` based in ${companyAddress}` : ""}. We
                supply 28+ chemical products to buyers across the globe —
                directly from the manufacturer, ensuring competitive pricing
                and reliable quality.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <Button href="/contact">Request a quote</Button>
                {brochureUrl ? (
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    <Image
                      src="https://framerusercontent.com/images/ss0bmyns6jeXRaMshGzNYH68.svg"
                      alt="Icon"
                      width={20}
                      height={20}
                    />
                    Download brochure
                  </a>
                ) : null}
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-heading text-h2 font-semibold text-primary opacity-20">
                {startYear ? `SINCE ${startYear}` : "SINCE -"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Our journey</SectionLabel>
            <h2 className="font-heading text-h2 font-semibold text-primary mt-4 max-w-3xl mx-auto">
              Building trust and quality through years of chemical
              manufacturing expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Company Info */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png"
                  alt="Avatar"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary">
                    {companyName}
                  </h3>
                  <p className="text-sm text-secondary">
                    {companyAddress
                      ? `Founded in ${companyAddress}`
                      : "Founded location not set"}
                  </p>
                </div>
              </div>

              <h4 className="font-heading text-h5 font-semibold text-primary mb-4">
                Our story
              </h4>
              <p className="text-secondary leading-relaxed mb-4">
                {companyName} started with a vision to become a trusted
                name in the industrial and specialty chemicals industry. Based in
                {companyAddress || "its operating region"}, we have grown into a
                reliable supplier of 28+ chemical products serving clients
                across multiple international markets.
              </p>
              <p className="text-secondary leading-relaxed">
                What drives us is not just manufacturing chemicals, but
                delivering value — ensuring every product meets international
                quality standards. Our ISO 9001:2015 certification, in-house
                quality testing, and direct-from-manufacturer approach have
                helped us establish long-term partnerships with industrial buyers
                worldwide.
              </p>
            </div>

            {/* Right - Capabilities */}
            <div>
              <h5 className="font-heading text-h5 font-semibold text-primary mb-6">
                Our capabilities
              </h5>
              <div className="space-y-3 mb-8">
                {capabilities.map((cap) => (
                  <Link
                    key={cap.href}
                    href={cap.href}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl hover:shadow-md transition-shadow group"
                  >
                    <span className="text-sm font-medium text-primary">
                      {cap.title}
                    </span>
                    <Image
                      src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={12}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                ))}
              </div>
              <Button href="/service">View all services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h2 className="font-heading text-h2 font-semibold max-w-2xl">
              Delivering quality across industries and borders.
            </h2>
            <p className="text-h2 font-heading font-semibold text-accent">
              28+
            </p>
            <p className="text-sm text-white/60">
              Chemical products exported worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Team Section - Hidden per request */}
    </main>
  );
}
