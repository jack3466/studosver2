/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Ensure Next.js aggressively compresses (gzip/brotli enabled by standard)
  compress: true,
  poweredByHeader: false,
}

export default nextConfig
