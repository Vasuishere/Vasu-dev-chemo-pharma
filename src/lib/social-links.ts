export const INSTAGRAM_URL =
  "https://www.instagram.com/vasudevchemopharmaa/";

export const LINKEDIN_URL =
  "https://www.linkedin.com/company/vasudev-chemo-pharma";

export const WHATSAPP_NUMBER = "919898837713";
export const WHATSAPP_DISPLAY_NUMBER = "+91 9898837713";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I am interested in your products. Could you please provide more information?";

export function buildWhatsAppUrl(message = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    shortLabel: "@vasudevchemopharmaa",
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    shortLabel: "Vasudev Chemo Pharma",
  },
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl(),
    shortLabel: WHATSAPP_DISPLAY_NUMBER,
  },
] as const;

export const ORGANIZATION_SAME_AS = [
  LINKEDIN_URL,
  INSTAGRAM_URL,
] as const;
