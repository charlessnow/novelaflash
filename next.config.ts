import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 30,
    },
  },
  async headers() {
    return [
      {
        source: "/(images|videos|platforms)/:path*",
        headers: [
          {
            // Public assets are unversioned, so retain a short browser cache but
            // allow Vercel's CDN to serve repeat visitors without revalidation.
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/og.jpg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.reelpulse.net' }],
        destination: 'https://reelpulse.net/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
