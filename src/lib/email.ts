import nodemailer from "nodemailer";

/**
 * Gmail SMTP transporter.
 * Set SMTP_USER=vasudevchemopharma@gmail.com
 * Set SMTP_APP_PASSWORD=<16-char Gmail app password>
 * in your .env.local (never commit the real values).
 */
function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error(
      "SMTP_USER and SMTP_APP_PASSWORD environment variables are required."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

export type InquiryEmailData = {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  industry: string;
  product: string;
  quantity: string;
  inquiryType: string;
  message: string;
};

const INQUIRY_TYPE_LABELS: Record<string, string> = {
  quote: "Request Pricing / Quote",
  sample: "Request Free Sample",
  tds: "Request TDS / MSDS",
  general: "General Inquiry",
};

const PRODUCT_LABELS: Record<string, string> = {
  "mea-triazine-78-h2s-scavenger": "MEA Triazine 78% H2S Scavenger",
  "mea-triazine-78": "MEA Triazine 78%",
  "mea-triazine-60": "MEA Triazine 60%",
  "mea-triazine-50": "MEA Triazine 50%",
  "mea-triazine-40": "MEA Triazine 40%",
  "mma-triazine-40": "MMA Triazine 40%",
  "sodium-cumene-sulfonate-40": "Sodium Cumene Sulfonate 40%",
  "sodium-cumene-sulfonate-90": "Sodium Cumene Sulfonate 90%",
  "sodium-xylene-sulfonate-90": "Sodium Xylene Sulfonate 90%",
  "sodium-xylene-sulfonate-40": "Sodium Xylene Sulfonate 40%",
  "p-toluenesulfonic-acid": "P-Toluenesulfonic Acid",
  "2-amino-5-methylthiazole": "2-Amino-5-methylthiazole",
  "2-chloroethylamine-hydrochloride": "2-Chloroethylamine Hydrochloride",
  "bis-2-chloroethyl-amine-hydrochloride": "Bis(2-chloroethyl)amine Hydrochloride",
  "di-ethyl-amino-ethyl-chloride-hydrochloride": "Di Ethyl Amino Ethyl Chloride Hydrochloride",
  other: "Other / Multiple Products",
};

function productLabel(slug: string): string {
  return PRODUCT_LABELS[slug] || slug;
}

function inquiryLabel(type: string): string {
  return INQUIRY_TYPE_LABELS[type] || type;
}

/** Escape HTML special characters to prevent injection in email body */
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildInternalEmailHtml(d: InquiryEmailData): string {
  const rows = [
    ["Full Name", `${esc(d.firstName)} ${esc(d.lastName)}`],
    ["Company", esc(d.companyName)],
    ["Email", `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>`],
    ["Phone / WhatsApp", esc(d.phone)],
    ["Country", esc(d.country)],
    ["Industry", esc(d.industry) || "—"],
    ["Product Interested In", esc(productLabel(d.product))],
    ["Quantity Needed", esc(d.quantity) || "—"],
    ["Inquiry Type", esc(inquiryLabel(d.inquiryType))],
    ["Message", d.message ? `<pre style="white-space:pre-wrap;margin:0">${esc(d.message)}</pre>` : "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:10px 14px;background:#f7f7f7;font-weight:600;color:#555;width:180px;vertical-align:top;border-bottom:1px solid #eee">${label}</td>
          <td style="padding:10px 14px;color:#111;vertical-align:top;border-bottom:1px solid #eee">${value}</td>
        </tr>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Inquiry</title></head>
<body style="font-family:Arial,sans-serif;background:#f0f0f0;padding:24px;margin:0">
  <div style="max-width:620px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.1)">
    <div style="background:#1a2e44;padding:20px 24px">
      <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;color:#a0b0c0;text-transform:uppercase">Vasudev Chemo Pharma</p>
      <h1 style="margin:6px 0 0;font-size:20px;color:#fff">New Website Inquiry</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px">
      ${tableRows}
    </table>
    <div style="padding:16px 24px;background:#f7f7f7;border-top:1px solid #eee">
      <p style="margin:0;font-size:12px;color:#999">
        Received via vasudevchemopharma.com contact form.
        Reply directly to this email to reach the enquirer.
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendInquiryEmail(data: InquiryEmailData): Promise<void> {
  const smtpUser = process.env.SMTP_USER!;
  const toEmail = process.env.CONTACT_EMAIL_TO || "info@vasudevchemopharma.com";

  const productName = productLabel(data.product);
  const subject = `[LEAD] ${data.country} — ${productName} — ${data.companyName}`;

  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Vasudev Chemo Pharma Website" <${smtpUser}>`,
    to: toEmail,
    cc: smtpUser,                   // copy to the Gmail account itself
    replyTo: data.email,            // reply goes directly to the enquirer
    subject,
    html: buildInternalEmailHtml(data),
  });
}
