"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
      {submitted ? (
        <div className="text-center py-12">
          <h3 className="font-heading text-h3 font-semibold text-primary mb-2">Thank you!</h3>
          <p className="text-secondary">Your message has been sent. We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
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
  );
}
