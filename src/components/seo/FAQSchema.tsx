type FAQItem = {
  question: string;
  answer: string;
};

type FAQSchemaProps = {
  items: FAQItem[];
};

export default function FAQSchema({ items }: FAQSchemaProps) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items
      .filter((item) => item.question?.trim() && item.answer?.trim())
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
  };

  if (schema.mainEntity.length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
