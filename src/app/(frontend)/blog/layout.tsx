import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Chemical Industry Insights & News",
  description:
    "Read the latest insights on sustainable chemical manufacturing, smart factories, specialty chemicals, and pharmaceutical intermediates from Vasudev Chemo Pharma.",
  alternates: {
    canonical: "https://www.Vasudevchemopharma.com/blog",
  },
  openGraph: {
    title: "Blog — Chemical Industry Insights | Vasudev Chemo Pharma",
    description:
      "Latest insights on sustainable chemical manufacturing, smart factories, and specialty chemicals.",
    url: "https://www.Vasudevchemopharma.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
