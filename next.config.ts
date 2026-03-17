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
      {
        source: '/resources/self-storage-facility-investments',
        destination: '/industries/self-storage',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/partnership',
        permanent: true,
      },
      {
        source: '/resources/laundromat-business-exit-strategies',
        destination: '/industries/laundromat',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
