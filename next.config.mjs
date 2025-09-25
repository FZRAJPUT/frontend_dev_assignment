/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Support both legacy domain allowlist and explicit remote patterns
    domains: ['images.unsplash.com', 'randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
}

export default nextConfig


