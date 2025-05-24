/**
 * URL Formatter Utility
 * 
 * This utility ensures consistent URL formatting across the site, addressing
 * [TASK SF_FIX_010] from the Screaming Frog report for trailing slash enforcement.
 * 
 * It provides functions to:
 * - Ensure trailing slashes on all canonical URLs
 * - Format URLs consistently based on locale
 * - Generate proper canonical URLs for both English and Arabic pages
 */

/**
 * Ensures a URL path has a trailing slash
 */
export function ensureTrailingSlash(path: string): string {
  // Return / for empty paths or just /
  if (!path || path === '/') {
    return '/';
  }
  
  // Remove query parameters and hash fragments before processing
  let cleanPath = path;
  const queryPos = path.indexOf('?');
  const hashPos = path.indexOf('#');
  let query = '';
  let hash = '';
  
  if (hashPos !== -1) {
    hash = path.substring(hashPos);
    cleanPath = path.substring(0, hashPos);
  }
  
  if (queryPos !== -1) {
    query = hashPos !== -1 && queryPos < hashPos 
      ? path.substring(queryPos, hashPos) 
      : path.substring(queryPos);
    cleanPath = hashPos !== -1 && queryPos < hashPos
      ? path.substring(0, queryPos)
      : (queryPos !== -1 ? path.substring(0, queryPos) : cleanPath);
  }
  
  // Add trailing slash if not present
  if (!cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }
  
  // Reconstruct full URL with query and hash
  return `${cleanPath}${query}${hash}`;
}

/**
 * Removes trailing slash from a URL path
 */
export function removeTrailingSlash(path: string): string {
  if (!path || path === '/') {
    return '/';
  }
  
  // Handle query parameters and hash fragments
  let cleanPath = path;
  const queryPos = path.indexOf('?');
  const hashPos = path.indexOf('#');
  let query = '';
  let hash = '';
  
  if (hashPos !== -1) {
    hash = path.substring(hashPos);
    cleanPath = path.substring(0, hashPos);
  }
  
  if (queryPos !== -1) {
    query = hashPos !== -1 && queryPos < hashPos 
      ? path.substring(queryPos, hashPos) 
      : path.substring(queryPos);
    cleanPath = hashPos !== -1 && queryPos < hashPos
      ? path.substring(0, queryPos)
      : (queryPos !== -1 ? path.substring(0, queryPos) : cleanPath);
  }
  
  // Remove trailing slash if present and not just /
  if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    cleanPath = cleanPath.slice(0, -1);
  }
  
  // Reconstruct full URL with query and hash
  return `${cleanPath}${query}${hash}`;
}

/**
 * Get the canonical version of a URL path based on the locale
 */
export function getCanonicalPath(path: string, locale: string = 'en'): string {
  // Ensure the path has a trailing slash
  const slashedPath = ensureTrailingSlash(path);
  
  // Handle locale in the path
  if (locale === 'ar') {
    // If AR locale, ensure path starts with /ar/
    if (slashedPath === '/') {
      return '/ar/';
    }
    
    if (!slashedPath.startsWith('/ar/')) {
      return `/ar${slashedPath}`;
    }
    
    return slashedPath;
  } else {
    // If EN locale (default), ensure path does NOT start with /en/
    if (slashedPath.startsWith('/en/')) {
      return slashedPath.replace('/en', '');
    }
    
    return slashedPath;
  }
}

/**
 * Get the full canonical URL for a path
 */
export function getCanonicalUrl(path: string, locale: string = 'en', baseUrl: string = 'https://uneom.com'): string {
  const canonicalPath = getCanonicalPath(path, locale);
  return `${baseUrl}${canonicalPath}`;
}

/**
 * Check if a URL path is correctly formatted based on locale
 */
export function isUrlValid(path: string, locale: string = 'en'): boolean {
  // Ensure path has trailing slash
  const hasTrailingSlash = path === '/' || path.endsWith('/');
  
  // Check locale prefix
  const hasCorrectLocalePrefix = locale === 'ar' 
    ? path === '/' || path === '/ar/' || path.startsWith('/ar/') 
    : path === '/' || !path.startsWith('/ar/');
  
  return hasTrailingSlash && hasCorrectLocalePrefix;
}

export default {
  ensureTrailingSlash,
  removeTrailingSlash,
  getCanonicalPath,
  getCanonicalUrl,
  isUrlValid
};
