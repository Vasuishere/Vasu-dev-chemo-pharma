import type { Metadata } from "next";
import { applyPageMetaOverride } from "@/lib/seo/page-meta-overrides";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = applyPageMetaOverride("/legal-pages/privacy-policy", {
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/legal/privacy-policy",
  },
});

export default function LegacyPrivacyPolicyPage() {
  permanentRedirect("/legal/privacy-policy");
}
