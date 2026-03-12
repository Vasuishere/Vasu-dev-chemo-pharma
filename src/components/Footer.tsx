import Link from "next/link";
import Image from "next/image";

const footerLinks1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/product" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
];

const footerLinks2 = [
  { label: "Case Studies", href: "/case-study" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/legal-pages/privacy-policy" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: "https://framerusercontent.com/images/ZbxMRNO7JDzSjhNLHwaJbT9go.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "https://framerusercontent.com/images/B5GmFTsLz2DFNxR0MiiWTmSvLQ.svg",
  },
  {
    label: "Twitter",
    href: "https://x.com/",
    icon: "https://framerusercontent.com/images/f4PSbhVbgSfhHw1bxNpYuHHEfI.svg",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-container mx-auto px-6 lg:px-10 pt-16 pb-6">
        {/* Logo */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/images/vcp-logo.png"
              alt="VCP Logo"
              width={50}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <Image
              src="/images/vcp-name.png"
              alt="Vasudev Chemo Pharma"
              width={200}
              height={45}
              className="h-9 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Links</h3>
            <div className="flex flex-col gap-3">
              {footerLinks1.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {footerLinks2.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Corporate Office Address
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/60">
                F-29, Plot No. 328/329, Near Asian Paint Circle, G.I.D.C, Ankleshwar, Gujarat, 393002 - India
              </p>
              <h3 className="font-heading text-lg font-semibold mb-4">
              Mobile Numbers
            </h3>
              <p className="text-sm text-white/60">
                Mobile No: +91 8128372559 - Sales Enquiries
              </p>
              <p className="text-sm text-white/60">
                Mobile No: +91 98988 37713 - General Enquiries
              </p>
              <h3 className="font-heading text-lg font-semibold mb-4">
              Emails 
            </h3>
              <a
                href="mailto:export@vasudevchemopharma.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                export@vasudevchemopharma.com
              </a>
              <a
                href="mailto:info@vasudevchemopharma.com"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                info@vasudevchemopharma.com
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">
              Working hours
            </h3>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/60">
                Mon to Fri: 9:00am - 6:00pm
              </p>
              <p className="text-sm text-white/60">
                Saturday: 9:00am - 4:00pm
              </p>
              <p className="text-sm text-white/60">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Vasudev Chemo Pharma. All rights reserved. Designed by{" "}
            <a
              href="https://www.linkedin.com/in/vaibhav-lohiya-354646221/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white"
            >
              Vaibhav Lohiya, Full Stack Developer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
