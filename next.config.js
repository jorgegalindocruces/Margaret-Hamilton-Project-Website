/** @type {import('next').NextConfig} */

const isExport = process.env.NEXT_OUTPUT === 'export'

const nextConfig = {
  ...(isExport ? { output: 'export' } : {}),

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

module.exports = nextConfig
