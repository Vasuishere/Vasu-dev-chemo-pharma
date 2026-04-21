import { ORGANIZATION_SAME_AS } from "@/lib/social-links";

const SITE_URL = "https://www.vasudevchemopharma.com";
const SITE_NAME = "Vasudev Chemo Pharma";
const LOGO_URL =
  "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png";
const DESCRIPTION =
  "ISO 9001:2015 certified manufacturer and global exporter of industrial, specialty, and surfactant chemicals from Gujarat, India. Leading producer of MEA Triazine 78% H2S scavenger.";

export default function SiteJsonLd() {
  const sameAs = [...ORGANIZATION_SAME_AS];

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    image: LOGO_URL,
    description: DESCRIPTION,
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F-29, Plot No. 328/329, Near Asian Paint Circle, G.I.D.C",
      addressLocality: "Ankleshwar",
      addressRegion: "Gujarat",
      postalCode: "393002",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "vasudevchemopharma@gmail.com",
      areaServed: [
        "IN", "AE", "SA", "OM", "QA", "KW", "IQ", "EG", "BR", "US", "VN", "TH",
      ],
      availableLanguage: ["English", "Hindi"],
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "ISO 9001:2015",
    },
    sameAs,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
