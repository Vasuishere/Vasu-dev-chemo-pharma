import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CopyProtection from "@/components/CopyProtection";
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  H2S_SCAVENGER_CORE,
  MEA_TRIAZINE_KEYWORDS,
  TRIAZINE_MANUFACTURER_KEYWORDS,
  mergeKeywordClusters,
} from "@/lib/seo/keyword-clusters";

const monaSans = localFont({
  src: "../fonts/MonaSans.woff2",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "200 900",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vasudevchemopharma.com"),
  title: {
    template: "%s | Vasudev Chemo Pharma",
    default:
      "Vasudev Chemo Pharma — Industrial, Specialty & Surfactant Chemicals",
  },
  description:
    "Vasudev Chemo Pharma is an ISO 9001:2015 certified manufacturer and exporter of industrial chemicals, specialty chemicals, and surfactant chemicals from Gujarat, India. Global shipping.",
  keywords: mergeKeywordClusters(
    H2S_SCAVENGER_CORE,
    MEA_TRIAZINE_KEYWORDS,
    TRIAZINE_MANUFACTURER_KEYWORDS,
    [
      "chemical manufacturer India",
      "industrial chemicals exporter",
      "specialty chemicals supplier Gujarat",
      "surfactant chemicals manufacturer",
    "chemical exporter Gujarat India",
    "industrial chemical manufacturer Gujarat",
    "specialty chemical exporter India",
    "oilfield chemical manufacturer India",
    "organic intermediate manufacturer India",
    "hydrotrope manufacturer India",
    "bulk chemical supplier India",
      "ISO 9001:2015 chemical manufacturer",
    "custom chemical manufacturer India",
      "MEA Triazine 78% H2S scavenger",
    "MEA Triazine 78 manufacturer",
      "MMA Triazine 40 supplier",
    "MMA Triazine 40 manufacturer India",
      "P-Toluenesulfonic Acid manufacturer",
      "PTSA manufacturer India",
    "PTSA monohydrate supplier",
    "PTSA anhydrous supplier",
      "Sodium Cumene Sulfonate 40 manufacturer",
    "Sodium Cumene Sulfonate 90 manufacturer",
    "Sodium Xylene Sulfonate 40 manufacturer",
    "Sodium Xylene Sulfonate 90 manufacturer",
    "sodium cumene sulfonate supplier India",
    "sodium xylene sulfonate supplier India",
    "Bis(2-chloroethyl)amine Hydrochloride supplier",
      "Bis(2-chloroethyl)amine HCl manufacturer",
    "Di Ethyl Amino Ethyl Chloride Hydrochloride supplier",
      "DEAE Cl HCl manufacturer",
    "2-Amino-5-methylthiazole supplier",
      "2-Amino-5-methylthiazole manufacturer India",
      "2-Chloroethylamine Hydrochloride supplier",
    "2-Chloroethylamine Hydrochloride manufacturer",
    "MEA Triazine 78% manufacturer for oil and gas H2S scavenging",
    "MEA Triazine 78% supplier for natural gas sweetening",
    "MEA Triazine 78% exporter for pipeline H2S treatment",
    "MEA Triazine 78% supplier for crude oil sweetening",
    "MMA Triazine 40% BTEX free H2S scavenger supplier",
    "MMA Triazine 40% manufacturer for gas processing plants",
    "P-Toluenesulfonic Acid catalyst manufacturer for esterification",
    "PTSA supplier for alkyd resin manufacturing",
    "PTSA manufacturer for biodiesel production catalyst",
    "Sodium Cumene Sulfonate 40 manufacturer for liquid detergents",
    "Sodium Cumene Sulfonate 90 supplier for cleaner formulations",
    "Sodium Xylene Sulfonate 40 hydrotrope manufacturer",
    "Sodium Xylene Sulfonate 90 supplier for household cleaners",
    "hydrotrope manufacturer for detergent and cleaning chemicals",
    "Bis(2-chloroethyl)amine Hydrochloride manufacturer for pharma intermediates",
    "Bis(2-chloroethyl)amine HCl supplier with export compliance",
    "DEAE Cl HCl supplier for chloroquine intermediate manufacturing",
    "Diethylaminoethyl chloride hydrochloride manufacturer in India",
    "2-Amino-5-methylthiazole manufacturer for famotidine intermediate",
    "2-Amino-5-methylthiazole supplier for heterocyclic synthesis",
    "2-Chloroethylamine Hydrochloride supplier for aziridine synthesis",
    "2-Chloroethylamine Hydrochloride manufacturer for specialty polymers",
    "industrial chemical exporter from Gujarat for global markets",
    "specialty chemical manufacturer for pharmaceutical intermediates",
    "surfactant chemical manufacturer for detergent industry",
      "oilfield chemical supplier for sour gas treatment",
    "Indian manufacturer of H2S scavenger chemicals",
    "Indian manufacturer of surfactant hydrotropes",
      "chemical manufacturer for pharma agrochemical and oilfield applications",
    ]
  ),
  authors: [{ name: "Vasudev Chemo Pharma" }],
  creator: "Vasudev Chemo Pharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vasudev Chemo Pharma",
    title:
      "Vasudev Chemo Pharma — Industrial, Specialty & Surfactant Chemicals",
    description:
      "ISO 9001:2015 certified manufacturer and global exporter of 15+ industrial chemicals, specialty chemicals, and surfactant chemicals from Gujarat, India.",
    url: "https://www.vasudevchemopharma.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vasudev Chemo Pharma — Industrial, Specialty & Surfactant Chemicals",
    description:
      "ISO 9001:2015 certified manufacturer and global exporter of industrial, specialty & surfactant chemicals from Gujarat, India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.vasudevchemopharma.com",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon — local file so it shows before page loads */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />

        {/* Preconnect to external image CDN for faster LCP */}
        <link rel="preconnect" href="https://framerusercontent.com" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />

        {/* Preconnect to Google services (analytics/fonts if used) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${monaSans.variable} ${GeistSans.variable} antialiased`}
      >
        <SiteJsonLd />
        <CopyProtection />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
