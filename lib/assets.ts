/**
 * Get the correct asset path with basePath prefix for production
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path

  // In production with GitHub Pages, prepend basePath
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}
