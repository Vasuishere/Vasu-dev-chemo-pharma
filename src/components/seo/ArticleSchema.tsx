type ArticleSchemaProps = {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  authorCredentials?: string;
  wordCount?: number;
};

export default function ArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
  authorCredentials,
  wordCount,
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    ...(wordCount != null ? { wordCount } : {}),
    mainEntityOfPage: url,
    image: [image],
    author: authorName
      ? {
        "@type": "Person",
        name: authorName,
        ...(authorCredentials ? { jobTitle: authorCredentials } : {}),
      }
      : {
        "@type": "Organization",
        name: "Vasudev Chemo Pharma",
      },
    publisher: {
      "@type": "Organization",
      name: "Vasudev Chemo Pharma",
      logo: {
        "@type": "ImageObject",
        url: "https://atjtpw4vvodv5rtp.public.blob.vercel-storage.com/Vasudev/Vasudev_Chemo_Pharma_LOGO.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
