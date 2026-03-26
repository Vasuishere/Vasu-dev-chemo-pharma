import Image from "next/image";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import { getCompanyInfo } from "@/lib/company";
import { getSiteImages } from "@/lib/siteImages";

const defaultAvatars = [
  "https://framerusercontent.com/images/4joakeBMa5GHrq9uyQPg0bnmko.png",
  "https://framerusercontent.com/images/HfRFaPjzU8WCChxWa4MmTB1BWg.png",
  "https://framerusercontent.com/images/atqhDfm1Q5VKmWwNHnp8Cl7GHo.png",
  "https://framerusercontent.com/images/crOykN7l4AlMK9acNXCVRzJmcg.png",
];

export default async function AboutSection() {
  const company = await getCompanyInfo();
  const siteImagesData = await getSiteImages();
  const siteImages = siteImagesData.homePage?.aboutSection || {};

  const activeAvatars = siteImages.avatars?.length ? siteImages.avatars : defaultAvatars;

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
      ? currentYear - company.yearsOfExperience
      : currentYear;
  const startYear = hasValidFoundingYear ? company.foundingYear : derivedStartYear;
  const experiencePeriodLabel = `// ${startYear} - ${currentYear} //`;

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <SectionLabel>Who we are</SectionLabel>

            
          </div>

          {/* Right Column */}
          <div>
            <h2 className="font-heading text-h2 font-semibold text-primary mb-6">
              Driven by quality, backed by {company.yearsOfExperience}+ years of experience, focused on
              chemical manufacturing excellence
            </h2>
            <p className="text-secondary text-base leading-relaxed mb-8">
              {companyName} is an ISO 9001:2015 certified industrial &amp;
              specialty chemical manufacturer{companyAddress ? ` based in ${companyAddress}` : ""}. We supply
              15+ chemical products globally — direct from the manufacturer,
              eliminating middlemen and ensuring competitive pricing with
              reliable shipping.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/about">Learn more about us</Button>
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
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {/* Stat 1 */}
          <div className="bg-light rounded-3xl p-8">
            <Image
              src={siteImages.statLogoUrl || "https://framerusercontent.com/images/GhFAf9Nzk8NxLNAoAlvgFnivlg.svg"}
              alt="About Logo"
              width={120}
              height={16}
              className="mb-6 opacity-40"
            />
            <h3 className="font-heading text-h2 font-semibold text-primary">
              15+
            </h3>
            <p className="text-secondary text-sm mt-2">
              Chemical products exported to buyers across Gulf countries, USA, Middle East, Africa & Southeast Asia
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="font-heading text-h3 font-semibold">4.9</span>
              <span className="text-sm text-secondary">/5.0</span>
              <Image
                src={siteImages.reviewStarImageUrl || "https://framerusercontent.com/images/vLIB1zDP4bI0m0N2PXLiIxcw5Y.svg"}
                alt="Review Star"
                width={95}
                height={14}
                className="ml-2"
              />
            </div>
          </div>

          {/* Stat 2 - Image */}
          <div className="rounded-3xl overflow-hidden relative min-h-[300px]">
            <Image
              src={siteImages.statStepImageUrl || "https://drive.google.com/uc?export=view&id=1Z5199bCRGk6XIgdA6p_RdadeP-38aBFl"}
              alt="About Step Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Stat 3 */}
          <div className="bg-dark text-white rounded-3xl p-8">
            <p className="text-sm text-white/60 tracking-widest uppercase mb-4">
              {experiencePeriodLabel}
            </p>
            <h3 className="font-heading text-h2 font-semibold">{company.yearsOfExperience}+</h3>
            <p className="text-white/60 text-sm mt-2">
              Years of delivering consistent chemical manufacturing excellence.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden relative w-24 h-32">
              <Image
                src={siteImages.experienceImageUrl || "https://drive.google.com/uc?export=view&id=1Z5199bCRGk6XIgdA6p_RdadeP-38aBFl"}
                alt="About Image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
