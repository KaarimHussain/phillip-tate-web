import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

// Webpack builds: `ANALYZE=true npm run build`. Turbopack (default): `npm run analyze`.
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === "true" });

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  // Book covers are served from Amazon's image CDN.
  images: { remotePatterns: [new URL("https://m.media-amazon.com/images/**")] },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withBundleAnalyzer(nextConfig);
