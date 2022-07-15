/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.qa.rightmove.com'],
  },
};

module.exports = nextConfig;
