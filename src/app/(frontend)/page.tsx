import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import GlobalSupplySection from "@/components/home/GlobalSupplySection";
import BlogSection from "@/components/home/BlogSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import QuickEnquiryModal from "@/components/home/QuickEnquiryModal";
import {
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  TRIAZINE_MANUFACTURER_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

export const metadata: Metadata = {
  title:
    "Vasudev Chemo Pharma — India's Leading MEA Triazine 78% Manufacturer",
  description:
    "Direct manufacturer of MEA Triazine 78% H2S scavenger (CAS 4719-04-4) for oil & gas, biogas, and water treatment. Triazine-based H2S scavenging chemical, ISO 9001:2015 certified, factory pricing, bulk drum/IBC export from Gujarat, India to USA, UAE, Saudi Arabia, Qatar, Oman.",
  keywords: mergeKeywordClusters(
    H2S_SCAVENGER_CORE,
    MEA_TRIAZINE_KEYWORDS,
    TRIAZINE_MANUFACTURER_KEYWORDS
  ),
  alternates: {
    canonical: "https://www.vasudevchemopharma.com",
  },
  openGraph: {
    title:
      "H2S Scavenger & MEA Triazine 78% Manufacturer — Vasudev Chemo Pharma",
    description:
      "ISO 9001:2015 manufacturer & exporter of MEA Triazine 78% H2S scavenger. Direct factory pricing, bulk drum/IBC supply to 10+ countries from Gujarat, India.",
    url: "https://www.vasudevchemopharma.com",
  },
};

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.vasudevchemopharma.com",
          },
        ]}
      />
      <main>
        <QuickEnquiryModal />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <IndustriesSection />
        <WhyChooseSection />
        <GlobalSupplySection />
        <BlogSection />
      </main>
    </>
  );
}
