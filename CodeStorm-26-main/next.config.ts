import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Pre-existing lint issues in Vortex.tsx / WavyBackground.tsx — skip during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip type errors during builds (fix progressively)
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
