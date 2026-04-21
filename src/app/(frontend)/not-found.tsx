import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found — 404",
  description:
    "The page you are looking for does not exist. Browse our chemical products, industries, and resources to find what you need.",
  robots: {
    index: false,
    follow: true,
  },
};

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: "All Products", href: "/product" },
  { label: "MEA Triazine 78% H2S Scavenger", href: "/product/mea-triazine-78-h2s-scavenger" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Case Studies", href: "/case-study" },
  { label: "Blog & Insights", href: "/blog" },
  { label: "Contact Sales", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
        404 — Page Not Found
      </p>
      <h1 className="mb-6 font-heading text-4xl font-semibold text-primary sm:text-5xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mb-10 text-base leading-relaxed text-secondary">
        The page you requested may have moved or no longer exists. Try one of
        the links below, or head back to the homepage.
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Back to Homepage
        </Link>
        <Link
          href="/product"
          className="rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
        >
          Browse Products
        </Link>
      </div>

      <nav aria-label="Popular pages" className="text-left">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Popular pages
        </h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg border border-gray-100 px-4 py-3 text-sm text-secondary transition-colors hover:border-primary/20 hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
