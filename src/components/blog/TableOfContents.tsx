type TocItem = {
  id: string;
  label: string;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="bg-light rounded-2xl p-6 mb-10"
    >
      <h2 className="font-heading font-semibold text-primary text-base mb-4">
        Table of Contents
      </h2>
      <ol className="space-y-2 list-decimal list-inside">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-secondary hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
