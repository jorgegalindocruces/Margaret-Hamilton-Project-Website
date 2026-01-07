/** @type {import('next').NextConfig} */

// Detectar si estamos en producción (build) o desarrollo (dev)
const isProd = process.env.NODE_ENV === 'production'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig = {
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure MDX
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],

  // GitHub Pages deployment configuration
  // Solo aplicar basePath en producción para GitHub Pages
  ...(isProd && isGitHubPages
    ? {
        basePath: '/margarethamilton',
        assetPrefix: '/margarethamilton/',
      }
    : {}),
}

module.exports = nextConfig
