import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
  },
  async redirects() {
    return [
      { source: "/shop", destination: "/treatments", permanent: false },
      { source: "/get-started", destination: "/treatments", permanent: false },
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
