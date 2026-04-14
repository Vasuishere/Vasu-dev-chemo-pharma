const SITE_URL = "https://www.vasudevchemopharma.com";

export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vasudev Chemo Pharma",
    alternateName: ["VCP", "Vasudev Pharma"],
    url: SITE_URL,
    description:
      "ISO 9001:2015 certified manufacturer of MEA Triazine 78% H2S scavenger, MMA Triazine, hydrotropes, and specialty chemicals from Gujarat, India.",
    publisher: {
      "@type": "Organization",
      name: "Vasudev Chemo Pharma",
      url: SITE_URL,
    },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/product?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
