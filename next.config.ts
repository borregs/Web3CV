import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },

      {
        protocol: "https",
        hostname: "afterestudio.com.mx",
      },

    ],
  },
};

export default nextConfig;
