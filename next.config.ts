import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    qualities: [75, 80],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/treatments/weight-loss",
        destination: "/treatments/weight-management/tirzepatide",
        permanent: false,
      },
      { source: "/state-availability", destination: "/states-we-serve", permanent: false },
    ];
  },
};

export default nextConfig;
