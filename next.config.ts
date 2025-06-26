import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: '/samchadha',
        destination: '/?name=Sam%20Chadha',
        permanent: false, // 308 redirect, use false for 307 temporary redirect
      },
      {
        source: '/pizzahut',
        destination: '/?name=Pizza%20Hut',
        permanent: false, // 308 redirect, use false for 307 temporary redirect
      },
    ];
  },
};

export default nextConfig;
