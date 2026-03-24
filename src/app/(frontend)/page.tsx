import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import BlogSection from "@/components/home/BlogSection";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title:
    "Vasudev Chemo Pharma — Industrial & Specialty Chemical Manufacturer",
  description:
    "ISO 9001:2015 certified manufacturer of industrial chemicals, specialty chemicals & pharmaceutical intermediates from Gujarat, India. Request a quote.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com",
  },
  openGraph: {
    title:
      "Vasudev Chemo Pharma — Industrial & Specialty Chemical Manufacturer",
    description:
      "ISO 9001:2015 certified manufacturer and global exporter of 15+ industrial chemicals from Gujarat, India.",
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
        <BlogSection />
      </main>
    </>
  );
}
