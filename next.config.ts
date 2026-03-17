import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/sell',
        permanent: true,
      },
      {
        source: '/resources/sell-rv-park-california',
        destination: '/industries/rv-parks',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
