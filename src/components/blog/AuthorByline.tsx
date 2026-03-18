type AuthorBylineProps = {
  name: string;
  credentials: string;
  publishedDate: string;
  lastUpdated?: string;
};

export default function AuthorByline({
  name,
  credentials,
  publishedDate,
  lastUpdated,
}: AuthorBylineProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-6 border-y border-gray-200">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
        <span className="text-accent font-heading font-semibold text-lg">
          {name
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .map((n) => n[0] ?? "")
            .join("")
            .slice(0, 2)}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-heading font-semibold text-primary text-sm">
          {name}
        </p>
        <p className="text-xs text-muted mt-0.5">{credentials}</p>
      </div>

      {/* Dates */}
      <div className="flex flex-col items-start sm:items-end text-xs text-muted gap-0.5">
        <time dateTime={publishedDate}>
          Published: {publishedDate}
        </time>
        {lastUpdated && (
          <time dateTime={lastUpdated} className="text-accent font-medium">
            Updated: {lastUpdated}
          </time>
        )}
      </div>
    </div>
  );
}
