import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/assets/**",
      },
    ],
  },
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);
