import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Chemical Manufacturing & Export",
  description:
    "Explore Vasudev Chemo Pharma's services — chemical manufacturing, import & export, custom formulation, quality testing, global logistics, and bulk supply. ISO 9001:2015 certified.",
  alternates: {
    canonical: "https://Vasudevchemopharma.com/service",
  },
  openGraph: {
    title: "Services — Chemical Manufacturing & Export | Vasudev Chemo Pharma",
    description:
      "Chemical manufacturing, import & export, custom formulation, quality testing, global logistics, and bulk supply. ISO 9001:2015 certified.",
    url: "https://Vasudevchemopharma.com/service",
  },
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
