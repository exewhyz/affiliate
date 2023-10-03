/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["cdn1.smartprix.com", "cdn.sanity.io", "m.media-amazon.com"],
  },
};

module.exports = nextConfig;
