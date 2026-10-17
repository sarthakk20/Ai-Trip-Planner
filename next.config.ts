import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // domains: ['places.googleapis.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
