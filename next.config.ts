import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  turbopack: {}, // Use Turbopack with default settings
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-hook-form'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'nixtudio.in' }],
        destination: 'https://www.nixtudio.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
