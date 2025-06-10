import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable CSS optimization for Tailwind CSS v4
    optimizeCss: true,
  },
  // Ensure CSS is processed correctly
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
