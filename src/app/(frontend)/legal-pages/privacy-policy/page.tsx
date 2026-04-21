import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.vasudevchemopharma.com/legal/privacy-policy",
  },
};

export default function LegacyPrivacyPolicyPage() {
  permanentRedirect("/legal/privacy-policy");
}
