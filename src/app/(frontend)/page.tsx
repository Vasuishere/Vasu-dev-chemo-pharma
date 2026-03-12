import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProductsSection from "@/components/home/ProductsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import BlogSection from "@/components/home/BlogSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyChooseSection />
      <BlogSection />
    </main>
  );
}
