import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    BASE_URL_BACKEND: process.env.BASE_URL_BACKEND,
  },
};

export default nextConfig;
