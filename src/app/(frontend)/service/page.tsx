"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const services = [
  {
    title: "Chemical Manufacturing",
    description: "ISO 9001:2015 certified manufacturing of 28+ industrial & specialty chemicals.",
    href: "/service/chemical-manufacturing",
    image: "https://framerusercontent.com/images/YZXZfUWqk3mC6dHxTkY5u8hc5SA.webp",
  },
  {
    title: "Import & Export",
    description: "Global chemical trade with complete export documentation and competitive shipping.",
    href: "/service/import-export",
    image: "https://framerusercontent.com/images/uyAxZj87pJISHmPmWJFmfS2Xqw.webp",
  },
  {
    title: "Custom Formulation",
    description: "Tailored chemical blends and application-specific formulations for your industry.",
    href: "/service/custom-formulation",
    image: "https://framerusercontent.com/images/sCJnodXX6iVr5PAmaVz3lhv3l0.webp",
  },
  {
    title: "Quality Testing & Packaging",
    description: "In-house lab testing with COA, MSDS documentation and export-grade packaging.",
    href: "/service/quality-testing-packaging",
    image: "https://framerusercontent.com/images/DC7FRNfj79xbtthq0V0ykebbAGU.webp",
  },
  {
    title: "Global Logistics & Shipping",
    description: "End-to-end logistics with FOB, CIF & CFR terms from Gujarat ports.",
    href: "/service/global-logistics-shipping",
    image: "https://framerusercontent.com/images/LhPTSEVoZEIypVL0icUZIbKl3uA.webp",
  },
  {
    title: "Bulk & Contract Supply",
    description: "Long-term supply contracts and bulk chemical orders with reliable delivery.",
    href: "/service/bulk-contract-supply",
    image: "https://framerusercontent.com/images/FWAVl33ic80iuYm3hIN84RA50k.webp",
  },
];

const faqs = [
  {
    q: "What chemical products do you manufacture?",
    a: "We manufacture 28+ industrial and specialty chemicals including caustic soda, soda ash, sodium metabisulphite, zinc oxide, stearic acid, calcium carbonate, MEA triazine, and many more.",
  },
  {
    q: "Do you export chemicals internationally?",
    a: "Yes, we export to buyers across Gulf countries, USA, Middle East, Africa, and Southeast Asia. We handle all export documentation, compliance, and shipping.",
  },
  {
    q: "What quality certifications do you hold?",
    a: "We are ISO 9001:2015 certified. Every batch comes with COA (Certificate of Analysis) and MSDS (Material Safety Data Sheet) documentation.",
  },
  {
    q: "Can you handle custom or bulk orders?",
    a: "Yes, we offer custom formulation, bulk orders, and long-term contract supply arrangements tailored to your specific requirements.",
  },
  {
    q: "Which industries do you serve?",
    a: "We serve oil & gas, lubricant manufacturing, water treatment, paper mill, textile, construction, and general industrial chemical requirements.",
  },
];

export default function ServicePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
          <h1 className="font-heading text-display font-semibold">
            Our services
          </h1>
        </div>
      </section>

      {/* Service Grid */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-light rounded-3xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6 flex items-center justify-between">
                  <Image
                    src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
                    alt="Button Icon"
                    width={16}
                    height={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="px-6">
                  <div className="relative rounded-2xl overflow-hidden aspect-[7/4]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-h4 font-semibold text-primary mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-secondary">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="relative mt-16 rounded-3xl overflow-hidden bg-dark p-12 lg:p-16 text-center">
            <Image
              src="https://framerusercontent.com/images/qbL1L4EXzTjrYawN3GV9Zww8wb4.png"
              alt="CTA BG"
              fill
              className="object-cover opacity-30"
            />
            <div className="relative z-10">
              <h2 className="font-heading text-h2 font-semibold text-white mb-6">
                Ready to source quality chemicals?
              </h2>
              <Button href="/contact">Request a quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-light">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Common questions</SectionLabel>
            <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
              Frequently asked questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-2xl p-6 group"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="font-heading text-lg font-semibold text-primary cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-secondary mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionLabel>Get in touch</SectionLabel>
              <h2 className="font-heading text-h2 font-semibold text-primary mt-4">
                Start your chemical sourcing journey
              </h2>
            </div>
            {formSubmitted ? (
              <div className="text-center py-12">
                <h3 className="font-heading text-h3 font-semibold text-primary mb-2">Thank you!</h3>
                <p className="text-secondary">Your inquiry has been sent. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="nameInput" className="text-sm font-medium text-primary">Name*</label>
                <input id="nameInput" name="name" type="text" required placeholder="Enter your name" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="emailInput" className="text-sm font-medium text-primary">Email*</label>
                <input id="emailInput" name="email" type="email" required placeholder="Enter your email" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="inquiryInput" className="text-sm font-medium text-primary">Inquiry</label>
                <input id="inquiryInput" name="inquiry" type="text" placeholder="Enter inquiry details" className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="messageInput" className="text-sm font-medium text-primary">Message</label>
                <textarea id="messageInput" name="message" placeholder="Tell us about your project" rows={4} className="w-full mt-1 border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button type="submit" className="bg-accent hover:bg-accent-dark text-white text-sm font-medium px-8 py-3 rounded-full transition-colors">
                Send your details
              </button>
            </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
