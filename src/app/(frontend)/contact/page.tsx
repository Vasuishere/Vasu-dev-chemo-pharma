import type { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getCompanyInfo } from "@/lib/company";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import { ORGANIZATION_SAME_AS } from "@/lib/social-links";

// Lazy-load ContactForm; not part of LCP.
const ContactForm = dynamic(() => import("@/components/contact/ContactForm"), {
  loading: () => <div className="h-96 bg-light rounded-2xl animate-pulse" />,
});

export const revalidate = 1800;

export const metadata: Metadata = {
  title: "Contact Us - Request a Quote",
  description:
    "Contact Vasudev Chemo Pharma for product inquiries, bulk orders, and export requirements. ISO 9001:2015 certified chemical manufacturer from Gujarat, India. Get a reply within 24 hours.",
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/contact",
  },
  openGraph: {
    title: "Contact Vasudev Chemo Pharma - Request a Quote",
    description:
      "Contact us for product inquiries, bulk orders, and chemical export requirements. Get a reply within 24 hours.",
    url: "https://www.vasudevchemopharma.com/contact",
  },
};

// const clientLogos = [
//   "https://framerusercontent.com/images/XWAlPb58nstaS4Qe2V64MPJ3oEg.svg",
//   "https://framerusercontent.com/images/BAmFSi2zDMhpaE7hI1HjoHTKUM.svg",
//   "https://framerusercontent.com/images/BvZomeQDc5TuXtVugasI3vjA.svg",
//   "https://framerusercontent.com/images/e5YBm1OqZwwtrOjfApIJrIomdM.svg",
//   "https://framerusercontent.com/images/509cFwvGZfkVPdYW7zVHR7EYWt0.svg",
//   "https://framerusercontent.com/images/Jq1zwerPuAxxeeU8AdM3nowkc2Q.svg",
//   "https://framerusercontent.com/images/beRZrWDYxb5i7Y1Z00iFBVzwAog.svg",
//   "https://framerusercontent.com/images/wiofWjcMmYrLE1oQSPB7XuGaoQE.svg",
// ];

export default async function ContactPage() {
  const company = await getCompanyInfo();
  const brochureUrl = company.brochureUrl?.trim();
  const mapQuery = [company.companyName?.trim(), company.address?.trim()]
    .filter(Boolean)
    .join(", ");
  const mapEmbedSrc = mapQuery
    ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
    : "";

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.vasudevchemopharma.com" },
          { name: "Contact", url: "https://www.vasudevchemopharma.com/contact" },
        ]}
      />
      <OrganizationSchema
        name="Vasudev Chemo Pharma"
        url="https://www.vasudevchemopharma.com"
        logo="https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png"
        description="ISO 9001:2015 certified manufacturer and exporter of MEA Triazine, MMA Triazine H2S Scavengers, and specialty chemicals. Based in Ankleshwar, Gujarat, India."
        email="info@vasudevchemopharma.com"
        telephone="+918128372559"
        foundingDate="2020"
        sameAs={[...ORGANIZATION_SAME_AS]}
      />
      <main>
        {/* Hero + Form */}
        <section className="pt-32 pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h1 className="font-heading text-display font-semibold text-primary">
                  Contact Vasudev Chemo Pharma
                </h1>
                <p className="text-secondary text-lg mt-6 max-w-md">
                  Need a quote for industrial chemicals or specialty chemical products?
                  Reach out to our team - we respond within 24 hours with pricing,
                  specifications, and export documentation support.
                </p>
                {brochureUrl ? (
                  <a
                    href={brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Download Brochure
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 4v10m0 0l-4-4m4 4l4-4M5 18h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}

                {/* Contact info */}
                <div className="mt-12 space-y-8">
                  <div>
                    <p className="text-xs text-muted tracking-wider uppercase mb-3">
                      {"// Contact us on //"}
                    </p>
                    <div className="space-y-2">
                      {company.primaryEmail ? (
                        <p>
                          <a
                            href={`mailto:${company.primaryEmail}`}
                            className="text-primary hover:text-accent transition-colors"
                          >
                            {company.primaryEmail}
                          </a>
                        </p>
                      ) : null}
                      {company.secondaryEmail ? (
                        <p>
                          <a
                            href={`mailto:${company.secondaryEmail}`}
                            className="text-primary hover:text-accent transition-colors"
                          >
                            {company.secondaryEmail}
                          </a>
                        </p>
                      ) : null}
                      {company.phoneNumbers?.map((phone) => (
                        <p key={`${phone.label}-${phone.number}`} className="text-primary">
                          {phone.number} - {phone.label}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted tracking-wider uppercase mb-3">
                      {"// Find us //"}
                    </p>
                    <div className="space-y-2">
                      {company.mapUrl ? (
                        <p>
                          <a
                            href={company.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-accent transition-colors"
                          >
                            {company.address || "Open map"}
                          </a>
                        </p>
                      ) : company.address ? (
                        <p className="text-primary">{company.address}</p>
                      ) : null}
                    </div>
                  </div>

                  {/* Google Maps Embed */}
                  <div className="mt-8">
                    <p className="text-xs text-muted tracking-wider uppercase mb-3">
                      {"// Our Location //"}
                    </p>
                    <div className="rounded-2xl overflow-hidden border border-gray-200">
                      {mapEmbedSrc ? (
                        <iframe
                          src={mapEmbedSrc}
                          width="100%"
                          height="250"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Vasudev Chemo Pharma Location - Ankleshwar, Gujarat, India"
                        />
                      ) : company.mapUrl ? (
                        <div className="flex min-h-[250px] items-center justify-center bg-light p-6 text-center">
                          <a
                            href={company.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-primary transition-colors hover:text-accent"
                          >
                            Open our location in Google Maps
                          </a>
                        </div>
                      ) : company.address ? (
                        <div className="flex min-h-[250px] items-center justify-center bg-light p-6 text-center">
                          <p className="text-sm text-primary">{company.address}</p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        {/* <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-50">
              {clientLogos.map((logo, i) => (
                <Image
                  key={i}
                  src={logo}
                  alt="Trusted chemical industry partner"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Internal Links */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <h2 className="font-heading text-h3 font-semibold text-primary mb-6">Explore Our Offerings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/product" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">Chemical Products</h3>
                <p className="text-sm text-secondary mt-1">Browse our full product catalogue</p>
              </Link>
              <Link href="/service" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">Our Services</h3>
                <p className="text-sm text-secondary mt-1">Manufacturing, formulation, and export</p>
              </Link>
              <Link href="/about" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">About Us</h3>
                <p className="text-sm text-secondary mt-1">ISO 9001:2015 certified manufacturer</p>
              </Link>
              <Link href="/blog" className="bg-light rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <h3 className="font-heading text-h5 font-semibold text-primary group-hover:text-accent transition-colors">Industry Blog</h3>
                <p className="text-sm text-secondary mt-1">Chemical manufacturing insights</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Review Solicitation */}
        <section className="pb-20">
          <div className="max-w-container mx-auto px-6 lg:px-10">
            <div className="rounded-3xl bg-accent/5 border border-accent/20 p-8 text-center">
              <h2 className="font-heading text-h4 font-semibold text-primary mb-3">
                Already a Vasudev Chemo Pharma Customer?
              </h2>
              <p className="text-sm text-secondary max-w-lg mx-auto mb-6">
                We value your feedback. If you&apos;ve worked with us, please consider leaving a review to help other
                buyers make informed decisions.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://g.page/r/vasudev-chemo-pharma/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark transition-colors text-white text-sm font-medium px-6 py-3 rounded-full"
                >
                  Leave a Google Review
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
