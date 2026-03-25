import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import GlobalSupplySection from "@/components/home/GlobalSupplySection";
import BlogSection from "@/components/home/BlogSection";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Vasudev Chemo Pharma — India's Leading MEA Triazine 78% Manufacturer",
  description:
    "Direct manufacturer of MEA Triazine 78% H2S scavenger. ISO 9001:2015 certified. Factory pricing. Supplying oil & gas, petrochemical & water treatment industries in 14+ countries from Gujarat, India.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com",
  },
  openGraph: {
    title:
      "Vasudev Chemo Pharma — India's Leading MEA Triazine 78% Manufacturer",
    description:
      "Direct manufacturer of MEA Triazine 78% H2S scavenger. ISO 9001:2015 certified. Factory pricing. Supplying 14+ countries from Gujarat, India.",
    url: "https://www.vasudevchemopharma.com",
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationSchema
        name="Vasudev Chemo Pharma"
        url="https://www.vasudevchemopharma.com"
        logo="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png"
        description="ISO 9001:2015 certified manufacturer and exporter of MEA Triazine, MMA Triazine H2S Scavengers, and specialty chemicals. Based in Ankleshwar, Gujarat, India."
        email="info@vasudevchemopharma.com"
        foundingDate="2020"
        sameAs={[
          "https://www.linkedin.com/company/Vasudevchemo",
          "https://www.indiamart.com/vasudev-chemo-pharma",
        ]}
      />
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.vasudevchemopharma.com",
          },
        ]}
      />
      <main>
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
