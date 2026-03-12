import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3c2a98",
        // primary color for headings and important text
        secondary: "#3d4dda", 
        // text color for paragraphs and descriptions
        muted: "#F9F8F6",
        // lighter text for labels and small text
        accent: "#00a658",
        // primary accent color for buttons and highlights
        "accent-dark": "#008a48",
        // darker shade of accent for hover states
        light: "#F9F8F6",
        // light background color for cards and sections
        dark: "#3c2a98",
        // dark background color for contrast and emphasis
      },
      fontFamily: {
        heading: ["var(--font-mona-sans)", "sans-serif"],
        // font for headings and titles
        body: ["var(--font-geist)", "sans-serif"],
        // font for body text and paragraphs
      },
      fontSize: {
        "display": ["72px", { lineHeight: "72px", fontWeight: "600" }],
        "h2": ["48px", { lineHeight: "52px", fontWeight: "600" }],
        "h3": ["32px", { lineHeight: "38px", fontWeight: "600" }],
        "h4": ["24px", { lineHeight: "30px", fontWeight: "600" }],
        "h5": ["20px", { lineHeight: "26px", fontWeight: "600" }],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
