import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "atjtpw4vvodv5rtp.public.blob.vercel-storage.com",
      },
    ],
    domains: [
      'media.istockphoto.com',
      // add other allowed domains here if needed
    ],
  },
  experimental: {
    reactCompiler: false,
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=900, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/about',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/contact',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=1800, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/case-study',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/service',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/legal/privacy-policy',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        source: '/product/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Content-Language',
            value: 'en',
          },
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/products/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/mea-triazine-78',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/mea-triazine-78-scavenger',
        destination: '/product/mea-triazine-78-h2s-scavenger',
        permanent: true,
      },
      {
        source: '/product/active-pharmaceutical-ingredients',
        destination: '/product',
        permanent: true,
      },
      {
        source: '/service/chemical-manufacturing-services',
        destination: '/service/chemical-manufacturing',
        permanent: true,
      },
      {
        source: '/service/custom-chemical-formulation',
        destination: '/service/custom-formulation',
        permanent: true,
      },
      {
        source: '/service/chemical-supply-chain-management',
        destination: '/service/global-logistics-shipping',
        permanent: true,
      },
      {
        source: '/service/advanced-control-systems',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/service/process-optimization',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/legal-pages/privacy-policy',
        destination: '/legal/privacy-policy',
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
