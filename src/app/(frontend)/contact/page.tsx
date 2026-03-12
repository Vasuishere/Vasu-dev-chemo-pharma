"use client";

import { useState } from "react";
import Image from "next/image";

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
              <a
                href="https://framerusercontent.com/assets/v9AJ9QDAVxlfeZvrmT5L6X1m3I.pdf"
                download
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

              {/* Contact info */}
              <div className="mt-12 space-y-8">
                <div>
                  <p className="text-xs text-muted tracking-wider uppercase mb-3">
                    {"// Contact us on //"}
                  </p>
                  <div className="space-y-2">
                    <p>
                      <a
                        href="mailto:export@vasudevchemopharma.com"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        export@vasudevchemopharma.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:info@vasudevchemopharma.com"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        info@vasudevchemopharma.com
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted tracking-wider uppercase mb-3">
                    {"// Find us //"}
                  </p>
                  <div className="space-y-2">
                    <p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Gujarat+India+Kandla+Mundra+Hazira+Ports"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors"
                      >
                        Gujarat, India — Near Kandla, Mundra & Hazira Ports
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <h3 className="font-heading text-h3 font-semibold text-primary mb-2">Thank you!</h3>
                    <p className="text-secondary">Your message has been sent. We&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="firstName" className="text-sm text-primary font-medium block mb-2">
                      First name*
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Enter your first name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-sm text-primary font-medium block mb-2">
                      Last name*
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Enter your last name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm text-primary font-medium block mb-2">
                      Email*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm text-primary font-medium block mb-2">
                      Phone*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Enter your contact number"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm text-primary font-medium block mb-2">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Enter topic or subject"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm text-primary font-medium block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-accent transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-3 rounded-xl font-medium hover:bg-accent-dark transition-colors"
                  >
                    Submit details
                  </button>
                </form>
                )}
              </div>
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
