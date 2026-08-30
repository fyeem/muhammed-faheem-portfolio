import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "raw.githubusercontent.com"],
  },
};

export default nextConfig;
