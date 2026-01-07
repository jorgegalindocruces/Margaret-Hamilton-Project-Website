/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // GitHub Pages deployment configuration
  basePath: '/margarethamilton',
  assetPrefix: '/margarethamilton/',
}

module.exports = nextConfig
