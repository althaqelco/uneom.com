/**
 * Metadata helper for Next.js app router
 * Handles canonical URLs and hreflang tags
 */

/**
 * Creates proper metadata with canonical and hreflang tags
 * 
 * @param {Object} options - Metadata options
 * @param {string} options.path - The page path without locale (e.g., /about)
 * @param {string} options.locale - The current locale (en or ar)
 * @param {string} options.title - The page title
 * @param {string} options.description - The page description
 * @param {string[]} options.keywords - Keywords for the page
 * @param {Object} options.openGraph - Additional Open Graph properties
 * @returns {Object} Metadata object with canonical and hreflang
 */
export function createMetadata({
  path,
  locale = 'en',
  title,
  description,
  keywords = [],
  openGraph = {},
}) {
  // Ensure path starts with / and doesn't end with / (we'll add it)
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const cleanPath = normalizedPath.endsWith('/') 
    ? normalizedPath.slice(0, -1) 
    : normalizedPath;

  // Base URL
  const baseUrl = 'https://uneom.com';
  
  // Current page URL based on locale
  const currentUrl = locale === 'ar'
    ? `${baseUrl}/ar${cleanPath}/`
    : `${baseUrl}${cleanPath}/`;
    
  // Alternate language URL
  const alternateUrl = locale === 'ar'
    ? `${baseUrl}${cleanPath}/`
    : `${baseUrl}/ar${cleanPath}/`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en-SA': `${baseUrl}${cleanPath}/`,
        'ar-SA': `${baseUrl}/ar${cleanPath}/`,
        'x-default': `${baseUrl}${cleanPath}/`
      }
    },
    openGraph: {
      title,
      description,
      url: currentUrl,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      alternateLocale: locale === 'ar' ? 'en_US' : 'ar_SA',
      ...openGraph,
    },
  };
}

/**
 * Generates dynamic metadata for pages with URL parameters
 * 
 * @param {Object} options - Metadata options
 * @param {Object} options.params - URL parameters from Next.js
 * @param {string} options.locale - The current locale (en or ar)
 * @param {Function} options.getTitle - Function to generate title based on params
 * @param {Function} options.getDescription - Function to generate description based on params
 * @param {Function} options.getPath - Function to generate the path for canonical URL
 * @returns {Object} Metadata object with canonical and hreflang
 */
export async function generateDynamicMetadata({
  params,
  locale = 'en',
  getTitle,
  getDescription,
  getPath,
  getKeywords = () => [],
  getOpenGraph = () => ({}),
}) {
  const title = await getTitle(params, locale);
  const description = await getDescription(params, locale);
  const path = await getPath(params);
  const keywords = await getKeywords(params, locale);
  const openGraph = await getOpenGraph(params, locale);

  return createMetadata({
    path,
    locale,
    title,
    description,
    keywords,
    openGraph,
  });
}
