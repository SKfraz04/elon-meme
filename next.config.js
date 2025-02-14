/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['geist'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@next/font/local': false,
      'next/font/local': false,
    }
    return config
  }
}

module.exports = nextConfig 