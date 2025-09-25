/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Support both legacy domain allowlist and explicit remote patterns
    domains: ['images.unsplash.com', 'randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/portraits/**',
      },
    ],
    // Fallback to direct loading to avoid optimizer issues on some hosts
    unoptimized: true,
  },
}

export default nextConfig


