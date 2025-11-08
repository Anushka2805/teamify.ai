import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},        // ✅ Add this
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/backend/**"],
    };
    return config;
  },
};

export default nextConfig;
