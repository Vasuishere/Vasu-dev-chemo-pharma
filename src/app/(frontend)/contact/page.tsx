import Image from "next/image";
import { headers } from "next/headers";
import ContactForm from "@/components/contact/ContactForm";
import { getCompanyInfo } from "@/lib/company";

export const revalidate = 900;

const clientLogos = [
  "https://framerusercontent.com/images/XWAlPb58nstaS4Qe2V64MPJ3oEg.svg",
  "https://framerusercontent.com/images/BAmFSi2zDMhpaE7hI1HjoHTKUM.svg",
  "https://framerusercontent.com/images/BvZomeQDc5TuXtVugasI3vjA.svg",
  "https://framerusercontent.com/images/e5YBm1OqZwwtrOjfApIJrIomdM.svg",
  "https://framerusercontent.com/images/509cFwvGZfkVPdYW7zVHR7EYWt0.svg",
  "https://framerusercontent.com/images/Jq1zwerPuAxxeeU8AdM3nowkc2Q.svg",
  "https://framerusercontent.com/images/beRZrWDYxb5i7Y1Z00iFBVzwAog.svg",
  "https://framerusercontent.com/images/wiofWjcMmYrLE1oQSPB7XuGaoQE.svg",
];

export default async function ContactPage() {
  const company = await getCompanyInfo();
  const brochureUrl = company.brochureUrl?.trim();
  const nonce = (await headers()).get('x-nonce') || undefined;

  return (
    <main>
      {/* Hero + Form */}
      <section className="pt-32 pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h1 className="font-heading text-display font-semibold text-primary">
                Let&apos;s work together
              </h1>
              <p className="text-secondary text-lg mt-6 max-w-md">
                Got questions about our chemicals or need a quote? Reach out to
                us anytime — our team is ready to assist with product inquiries,
                bulk orders, and export requirements.
              </p>
              {brochureUrl ? (
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Download Brochure
                  <Image
                    src="https://framerusercontent.com/images/GWsMEVHFHDveouGCfOoMhWpXLA.svg"
                    alt="Button Icon"
                    width={18}
                    height={18}
                  />
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
              </div>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <ContactForm nonce={nonce} />
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-50">
            {clientLogos.map((logo, i) => (
              <Image
                key={i}
                src={logo}
                alt="Client Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
