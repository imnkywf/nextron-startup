/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  reactStrictMode: false,
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config
  },
}
