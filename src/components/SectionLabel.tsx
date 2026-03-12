import { ReactNode } from "react";

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-primary">
      <span className="w-2 h-2 bg-accent rounded-sm" />
      <span>{children}</span>
    </div>
  );
}
