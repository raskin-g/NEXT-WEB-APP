import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "img.lazcdn.com"
      },
      {
        hostname: "placehold.co"
      }
    ],
    unoptimized: true
  }
};

export default nextConfig;
