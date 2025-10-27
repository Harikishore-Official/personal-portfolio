/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'], // Add your image domains here
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
