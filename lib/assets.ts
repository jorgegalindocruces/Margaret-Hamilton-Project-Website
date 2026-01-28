/**
 * Get the correct asset path
 * Simplified since we're using a custom domain without basePath
 */
export function getAssetPath(path: string): string {
  // Ensure path starts with /
  return path.startsWith('/') ? path : `/${path}`
}
