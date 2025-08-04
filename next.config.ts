import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["utfs.io"],
  },
};

export default nextConfig;
