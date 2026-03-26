type SocialLinkItem = {
  label: string;
  href: string;
};

function SocialIcon({ label, className = "h-5 w-5" }: { label: string; className?: string }) {
  if (label === "Instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.14 3.82 6.3 3 5.27 3S3.4 3.82 3.4 4.94c0 1.1.82 1.94 1.84 1.94h.02c1.04 0 1.9-.84 1.9-1.94ZM20.6 12.86c0-3.48-1.86-5.1-4.34-5.1-2 0-2.9 1.1-3.4 1.88V8.5H9.48c.04.76 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.26-.68.86-1.38 1.86-1.38 1.32 0 1.84 1 1.84 2.46V20H20.6v-7.14Z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.38-.27.29-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35Z" />
      <path d="M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.84 9.84 0 0 1-1.51-5.26C2.16 6.44 6.6 2 12.06 2a9.8 9.8 0 0 1 6.98 2.9 9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.44 9.9-9.89 9.9Zm0-21.8C5.48 0 .14 5.34.14 11.9c0 2.09.55 4.13 1.59 5.94L.04 24l6.31-1.65a11.84 11.84 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9A11.8 11.8 0 0 0 12.05 0Z" />
    </svg>
  );
}

export default function SocialLinksRow({
  links,
  className = "flex flex-wrap items-center gap-3",
  itemClassName,
  iconClassName = "h-5 w-5",
}: {
  links: readonly SocialLinkItem[];
  className?: string;
  itemClassName: string;
  iconClassName?: string;
}) {
  return (
    <div className={className}>
      {links.map((social) => (
        <a
          key={`${social.label}-${social.href}`}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className={itemClassName}
        >
          <SocialIcon label={social.label} className={iconClassName} />
          <span className="sr-only">{social.label}</span>
        </a>
      ))}
    </div>
  );
}
