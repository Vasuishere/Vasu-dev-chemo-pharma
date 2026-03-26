import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  keywords: [
    "chemical manufacturer India",
    "industrial chemicals exporter",
    "specialty chemicals supplier Gujarat",
    "surfactant chemicals manufacturer",
    "chemical exporter Gujarat India",
  ],
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
