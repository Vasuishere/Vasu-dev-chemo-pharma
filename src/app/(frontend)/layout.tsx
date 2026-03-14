import type { Metadata } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const monaSans = localFont({
  src: "../fonts/MonaSans.woff2",
  variable: "--font-mona-sans",
  display: "swap",
  weight: "200 900",
});

export const metadata: Metadata = {
  title: "Vasudev Chemo Pharma — Industrial, Specialty & Pharmaceutical Chemicals",
  description:
    "Vasudev Chemo Pharma is an ISO 9001:2015 certified manufacturer and exporter of industrial chemicals, specialty chemicals, and pharmaceutical API intermediates from Gujarat, India.",
  metadataBase: new URL("https://vasudevchemopharma.com"),
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${monaSans.variable} ${GeistSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
