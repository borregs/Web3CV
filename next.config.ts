import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Web3CV/',
  productionBrowserSourceMaps: false,
  images: { 
    unoptimized : true ,
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
