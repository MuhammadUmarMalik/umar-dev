import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move turbo config out of experimental since it's now stable
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    resolveAlias: {
      // Configure any necessary aliases
    },
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  experimental: {
    // Enable CSS optimization for Tailwind CSS v4
    optimizeCss: true,
  },
  // Webpack configuration for production builds only
  webpack: (config, { dev }) => {
    // Skip webpack config in development when using Turbopack
    if (dev) {
      return config;
    }

    // Apply webpack config only for production builds
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
};

export default nextConfig;
