type OrganizationSchemaProps = {
  name: string;
  url: string;
  logo: string;
  description: string;
  email?: string;
  sameAs?: string[];
};

export default function OrganizationSchema({
  name,
  url,
  logo,
  description,
  email,
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    contactPoint: email
      ? {
          "@type": "ContactPoint",
          contactType: "sales",
          email,
        }
      : undefined,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
