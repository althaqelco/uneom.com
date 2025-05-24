/**
 * URL Consistency Utility
 * 
 * This utility ensures consistent URL formats across the site, particularly
 * enforcing trailing slashes as specified in the Screaming Frog report (TASK SF_FIX_010).
 * 
 * Having consistent URL formats prevents duplicate content issues and improves crawl efficiency.
 */

/**
 * Ensures a URL has a trailing slash
 * @param url The URL to process
 * @returns URL with trailing slash
 */
export function ensureTrailingSlash(url: string): string {
  // Don't add trailing slash to URLs with query parameters or hash
  if (url.includes('?') || url.includes('#')) {
    const [basePath, rest] = url.split(/[?#]/);
    const separator = url.includes('?') ? '?' : '#';
    
    // Only add trailing slash to the base path
    if (!basePath.endsWith('/')) {
      return `${basePath}/${separator}${rest}`;
    }
    return url;
  }
  
  // Don't add trailing slash to URLs that point to files with extensions
  if (/\.[a-zA-Z0-9]{2,4}$/.test(url)) {
    return url;
  }
  
  // Add trailing slash if not present
  if (!url.endsWith('/')) {
    return `${url}/`;
  }
  
  return url;
}

/**
 * Validate that the next.config.js has trailingSlash: true configured
 * @param configContent The content of next.config.js
 * @returns Whether the config has trailingSlash enabled
 */
export function validateTrailingSlashConfig(configContent: string): boolean {
  // Check if trailingSlash: true is in the config
  return /trailingSlash\s*:\s*true/.test(configContent);
}

/**
 * Generate redirects for common non-slashed URLs to their slashed counterparts
 * @param urls Array of canonical URLs (with trailing slashes)
 * @returns Array of redirect objects for next.config.js
 */
export function generateTrailingSlashRedirects(urls: string[]): Array<{
  source: string;
  destination: string;
  permanent: boolean;
}> {
  return urls
    .filter(url => url.endsWith('/') && !url.includes('?') && !url.includes('#'))
    .map(url => {
      const sourceUrl = url.slice(0, -1); // Remove trailing slash
      
      return {
        source: sourceUrl,
        destination: url,
        permanent: true // 301 redirect for SEO value
      };
    });
}

/**
 * Test if a URL redirects properly to its trailing slash version
 * @param baseUrl The base URL of the site (e.g., https://uneom.com)
 * @param path The path to test (e.g., /about)
 * @returns Promise resolving to a test result object
 */
export async function testTrailingSlashRedirect(
  baseUrl: string, 
  path: string
): Promise<{
  path: string;
  redirects: boolean;
  statusCode?: number;
  redirectLocation?: string;
  error?: string;
}> {
  try {
    // Ensure path doesn't already have a trailing slash
    const testPath = path.endsWith('/') ? path.slice(0, -1) : path;
    const url = `${baseUrl}${testPath}`;
    
    // Make a request and check if it redirects
    const response = await fetch(url, { redirect: 'manual' });
    
    // Check if it's a redirect (status codes 301, 302, 307, 308)
    const isRedirect = response.status >= 300 && response.status < 400;
    
    return {
      path: testPath,
      redirects: isRedirect,
      statusCode: response.status,
      redirectLocation: response.headers.get('location') || undefined
    };
  } catch (error) {
    return {
      path,
      redirects: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export default {
  ensureTrailingSlash,
  validateTrailingSlashConfig,
  generateTrailingSlashRedirects,
  testTrailingSlashRedirect
};
