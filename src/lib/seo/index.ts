/**
 * SEO Integration Module
 * 
 * This module centralizes all SEO-related utilities and components for easy access
 * and consistent implementation across the UNEOM website.
 * 
 * By using this module, developers can easily implement SEO best practices
 * and ensure all pages adhere to the SEO standards required by the project.
 */

// SEO Utilities
export { formatUrl, ensureTrailingSlash, removeTrailingSlash } from './url-formatter';
export { getPageTitle, getPageDescription, generateH1 } from './title-description-generator';
export { getPageKeywords } from './keyword-optimizer';
export { default as contentAnalyzer } from './content-analyzer';
export { default as seoVerifier } from './verify-seo';

// Image SEO utilities
export { generateAltTag, generateSpecificAltTag } from '../images/alt-tag-generator';

// Configuration and checking utilities
export { useUrlValidation } from './config-check';

// Constants and types
export * from './seo-types';

/**
 * Quick SEO setup function for pages
 * 
 * This helper function collects all the parameters needed for EnhancedSEO component
 * based on the page information, making it easier to implement SEO on new pages.
 */
export function setupPageSEO(
  pageName: string,
  locale: string = 'en',
  subpage?: string,
  specificParams?: {
    title?: string;
    description?: string;
    keywords?: string[];
    location?: string;
    industry?: string;
    service?: string;
  }
) {
  // Import these functions dynamically to avoid circular dependencies
  const { getPageTitle, getPageDescription } = require('./title-description-generator');
  const { getPageKeywords } = require('./keyword-optimizer');
  
  // Generate SEO metadata
  const title = specificParams?.title || getPageTitle(pageName, locale, subpage);
  const description = specificParams?.description || getPageDescription(pageName, locale, subpage);
  const keywords = specificParams?.keywords || getPageKeywords(pageName, locale, subpage);
  
  return {
    title,
    description,
    keywords,
    pageName,
    subpage,
    specificLocation: specificParams?.location,
    specificIndustry: specificParams?.industry,
    specificService: specificParams?.service
  };
}

/**
 * SEO Compliance Check
 * 
 * Determines if the current SEO implementation meets all requirements
 * from the Screaming Frog report. Returns a report of all fixes and
 * any outstanding issues.
 */
export async function checkSEOCompliance() {
  const seoVerifier = require('./verify-seo').default;
  return await seoVerifier.verifyAllSEOFixes();
}

export default {
  formatUrl,
  setupPageSEO,
  checkSEOCompliance
};
