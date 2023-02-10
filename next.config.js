/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.azureedge.net',
      },
      {
        protocol: 'https',
        hostname: '**.windows.net',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
