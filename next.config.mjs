/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/backend/**"],
    };
    return config;
  },
};

export default nextConfig;
