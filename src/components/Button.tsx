import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all group";
  const variants = {
    primary: "bg-accent hover:bg-accent-dark text-white",
    secondary: "bg-dark hover:bg-primary text-white",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
    dark: "bg-white/10 border border-white/20 text-white hover:bg-white/20",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <Image
        src="https://framerusercontent.com/images/xYCVyxuBws5xxo0dgYvczUqqSI.svg"
        alt=""
        width={16}
        height={12}
        className={`transition-transform group-hover:translate-x-1 ${variant === "primary" || variant === "secondary" || variant === "dark" ? "invert" : ""}`}
      />
    </Link>
  );
}
