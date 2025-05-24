/**
 * SEO Verification Utility
 * 
 * This utility provides functions to verify that SEO fixes have been 
 * properly implemented and are working correctly. It checks for all issues
 * identified in the Screaming Frog report and provides detailed feedback.
 *
 * This is a comprehensive tool to verify fixes for:
 * - E001: robots.txt blocking
 * - E002: Missing H1
 * - E003: Low Text Ratio
 * - E004: Title tag issues
 * - E005: Meta description issues
 * - E006: Meta keywords issues
 * - E007: Missing alt tags
 * - E008: Structured data implementation
 * - E009: Hreflang implementation
 * - E010: URL structure consistency
 */

import contentAnalyzer from './content-analyzer';

/**
 * Verifies if robots.txt is correctly configured to allow access to critical resources
 * Helps confirm fix for Error E001 (robots.txt blocking)
 */
export const verifyRobotsTxt = async (): Promise<{
  success: boolean;
  blockedResources: string[];
  message: string;
}> => {
  try {
    const response = await fetch('/robots.txt');
    const text = await response.text();
    
    // Check if critical resources are allowed
    const criticalAllowChecks = [
      '/_next/static/css/',
      '/_next/static/chunks/',
      '/_next/static/media/',
      '/_next/static/image/'
    ];
    
    const blockedResources: string[] = [];
    
    criticalAllowChecks.forEach(resource => {
      if (!text.includes(`Allow: ${resource}`)) {
        blockedResources.push(resource);
      }
    });
    
    return {
      success: blockedResources.length === 0,
      blockedResources,
      message: blockedResources.length === 0 
        ? 'robots.txt correctly allows critical resources'
        : `robots.txt is still blocking: ${blockedResources.join(', ')}`
    };
  } catch (error) {
    return {
      success: false,
      blockedResources: [],
      message: `Error fetching robots.txt: ${error}`
    };
  }
};

/**
 * Verifies if the page has exactly one H1 tag
 * Helps confirm fix for Error E002 (Missing H1)
 */
export const verifyH1Tag = (): {
  success: boolean;
  count: number;
  message: string;
} => {
  if (typeof window === 'undefined') {
    return { 
      success: false, 
      count: 0, 
      message: 'Cannot check H1 tags server-side' 
    };
  }
  
  const h1Tags = document.querySelectorAll('h1');
  const count = h1Tags.length;
  
  if (count === 0) {
    return {
      success: false,
      count,
      message: 'ERROR: No H1 tag found on page'
    };
  }
  
  if (count > 1) {
    return {
      success: false,
      count,
      message: `ERROR: ${count} H1 tags found on page (should be exactly 1)`
    };
  }
  
  return {
    success: true,
    count,
    message: `Success: Exactly 1 H1 tag found: "${h1Tags[0].textContent}"`
  };
};

/**
 * Verifies if the page has sufficient text content
 * Helps confirm fix for Error E003 (Low Text Ratio)
 */
export const verifyTextContent = (): {
  success: boolean;
  wordCount: number;
  textRatio: number;
  message: string;
  recommendations: string[];
} => {
  if (typeof window === 'undefined') {
    return { 
      success: false, 
      wordCount: 0, 
      textRatio: 0,
      message: 'Cannot check text content server-side',
      recommendations: []
    };
  }
  
  // Get full HTML content
  const htmlContent = document.documentElement.outerHTML;
  
  // Use the content analyzer for accurate analysis
  const analysis = contentAnalyzer.analyzeContent(
    window.location.href,
    htmlContent
  );
  
  return {
    success: analysis.hasSufficientContent,
    wordCount: analysis.wordCount,
    textRatio: analysis.textRatio,
    message: analysis.hasSufficientContent
      ? `Success: Page has ${analysis.wordCount} words and ${(analysis.textRatio * 100).toFixed(2)}% text ratio`
      : `ERROR: Page has insufficient content (${analysis.wordCount} words, ${(analysis.textRatio * 100).toFixed(2)}% text ratio)`,
    recommendations: analysis.recommendations
  };
};

/**
 * Verifies if meta tags are properly implemented
 * Helps confirm fixes for Errors E004, E005, E006 (Title, Meta Description, Keywords)
 */
export const verifyMetaTags = (): {
  title: { success: boolean; value: string; message: string; };
  description: { success: boolean; value: string; message: string; };
  keywords: { success: boolean; value: string; message: string; };
  canonical: { success: boolean; value: string; message: string; };
  hreflang: { success: boolean; values: string[]; message: string; };
  ogTags: { success: boolean; count: number; message: string; };
} => {
  if (typeof window === 'undefined') {
    return {
      title: { success: false, value: '', message: '' },
      description: { success: false, value: '', message: '' },
      keywords: { success: false, value: '', message: '' },
      canonical: { success: false, value: '', message: '' },
      hreflang: { success: false, values: [], message: '' },
      ogTags: { success: false, count: 0, message: '' }
    };
  }
  
  // Check title
  const title = document.title || '';
  const titleSuccess = title.length > 10 && title.length <= 60;
  const titleMessage = titleSuccess
    ? `Success: Title tag has ${title.length} characters`
    : `ERROR: Title tag has ${title.length} characters (should be between 10-60)`;
  
  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  const descContent = metaDesc ? metaDesc.getAttribute('content') || '' : '';
  const descSuccess = descContent.length > 50 && descContent.length <= 160;
  const descMessage = descSuccess
    ? `Success: Meta description has ${descContent.length} characters`
    : `ERROR: Meta description has ${descContent.length} characters (should be between 50-160)`;
  
  // Check meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  const keywordsContent = metaKeywords ? metaKeywords.getAttribute('content') || '' : '';
  const keywordsArray = keywordsContent.split(',').map(k => k.trim()).filter(k => k.length > 0);
  const keywordsSuccess = keywordsArray.length >= 5 && keywordsArray.length <= 10;
  const keywordsMessage = keywordsSuccess
    ? `Success: Meta keywords has ${keywordsArray.length} keywords`
    : `ERROR: Meta keywords has ${keywordsArray.length} keywords (should be between 5-10)`;
  
  // Check canonical
  const canonical = document.querySelector('link[rel="canonical"]');
  const canonicalHref = canonical ? canonical.getAttribute('href') || '' : '';
  const canonicalSuccess = canonicalHref.length > 0 && 
                           canonicalHref.includes('https://') &&
                           (canonicalHref.endsWith('/') || 
                            canonicalHref.includes('?') || 
                            canonicalHref.includes('#'));
  const canonicalMessage = canonicalSuccess
    ? `Success: Canonical URL properly implemented: ${canonicalHref}`
    : `ERROR: Canonical URL issue: ${canonicalHref || 'missing'}`;
  
  // Check hreflang - more thorough validation
  const hreflangTags = Array.from(document.querySelectorAll('link[rel="alternate"][hrefLang]'));
  const hreflangValues = hreflangTags.map(tag => (tag as HTMLLinkElement).getAttribute('hrefLang') || '');
  
  // Check for required hreflang values (en-SA, ar-SA, x-default)
  const hasEnglish = hreflangValues.some(val => val === 'en-SA');
  const hasArabic = hreflangValues.some(val => val === 'ar-SA');
  const hasDefault = hreflangValues.some(val => val === 'x-default');
  
  const hreflangSuccess = hasEnglish && hasArabic && hasDefault;
  const hreflangMessage = hreflangSuccess
    ? `Success: All required hreflang tags present (${hreflangValues.join(', ')})`
    : `ERROR: Missing required hreflang tags (needs en-SA, ar-SA, x-default)`;
  
  // Check Open Graph tags
  const ogTags = document.querySelectorAll('meta[property^="og:"]');
  const ogSuccess = ogTags.length >= 3; // At minimum should have og:title, og:description, og:image
  const ogMessage = ogSuccess
    ? `Success: ${ogTags.length} Open Graph tags found`
    : `Warning: Only ${ogTags.length} Open Graph tags found (recommend at least 3)`;
  
  return {
    title: { success: titleSuccess, value: title, message: titleMessage },
    description: { success: descSuccess, value: descContent, message: descMessage },
    keywords: { success: keywordsSuccess, value: keywordsContent, message: keywordsMessage },
    canonical: { success: canonicalSuccess, value: canonicalHref, message: canonicalMessage },
    hreflang: { success: hreflangSuccess, values: hreflangValues, message: hreflangMessage },
    ogTags: { success: ogSuccess, count: ogTags.length, message: ogMessage }
  };
};

// This function has been replaced with a more comprehensive version below

/**
 * Verifies if image alt tags are properly implemented
 * Helps confirm fix for Error E007 (Missing Alt Tags)
 */
export const verifyImageAltTags = (): {
  success: boolean;
  totalImages: number;
  missingAlt: number;
  emptyAlt: number;
  message: string;
  imagesWithIssues: {src: string; issue: string}[];
} => {
  if (typeof window === 'undefined') {
    return { 
      success: false,
      totalImages: 0, 
      missingAlt: 0,
      emptyAlt: 0,
      message: 'Cannot check image alt tags server-side',
      imagesWithIssues: []
    };
  }
  
  const images = document.querySelectorAll('img');
  const totalImages = images.length;
  const imagesWithIssues: {src: string; issue: string}[] = [];
  
  let missingAlt = 0;
  let emptyAlt = 0;
  
  images.forEach((img) => {
    const src = img.getAttribute('src') || '(no src)';
    const hasAlt = img.hasAttribute('alt');
    const altValue = img.getAttribute('alt') || '';
    
    if (!hasAlt) {
      missingAlt++;
      imagesWithIssues.push({ src, issue: 'Missing alt attribute' });
    } else if (altValue.trim() === '') {
      emptyAlt++;
      imagesWithIssues.push({ src, issue: 'Empty alt attribute' });
    }
  });
  
  const success = missingAlt === 0 && emptyAlt === 0;
  const message = success
    ? `Success: All ${totalImages} images have proper alt attributes`
    : `ERROR: ${missingAlt} images missing alt attribute and ${emptyAlt} with empty alt`;
  
  return {
    success,
    totalImages,
    missingAlt,
    emptyAlt,
    message,
    imagesWithIssues: imagesWithIssues.slice(0, 10) // Limit to first 10 issues
  };
};

/**
 * Verifies if structured data is properly implemented
 * Helps confirm fix for Error E008 (Structured Data)
 */
export const verifyStructuredData = (): {
  success: boolean;
  schemas: string[];
  message: string;
} => {
  if (typeof window === 'undefined') {
    return { 
      success: false,
      schemas: [],
      message: 'Cannot check structured data server-side'
    };
  }
  
  const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (jsonLdScripts.length === 0) {
    return {
      success: false,
      schemas: [],
      message: 'ERROR: No structured data (JSON-LD) found on page'
    };
  }
  
  const schemas: string[] = [];
  
  jsonLdScripts.forEach(script => {
    try {
      const content = JSON.parse(script.textContent || '{}');
      const type = content['@type'] || 'Unknown';
      schemas.push(type);
    } catch (e) {
      // Invalid JSON
      schemas.push('Invalid JSON-LD');
    }
  });
  
  return {
    success: schemas.length > 0,
    schemas,
    message: schemas.length > 0
      ? `Success: Found structured data schemas: ${schemas.join(', ')}`
      : 'ERROR: No valid structured data schemas found'
  };
};

/**
 * Verifies URL structure consistency
 * Helps confirm fix for Error E010 (URL Structure)
 */
export const verifyUrlConsistency = (): {
  success: boolean;
  hasTrailingSlash: boolean;
  message: string;
} => {
  if (typeof window === 'undefined') {
    return { 
      success: false,
      hasTrailingSlash: false,
      message: 'Cannot check URL consistency server-side'
    };
  }
  
  const currentPath = window.location.pathname;
  const hasTrailingSlash = currentPath.endsWith('/') || currentPath === '';
  
  // Canonical should match the trailing slash pattern
  const canonical = document.querySelector('link[rel="canonical"]');
  const canonicalHref = canonical ? canonical.getAttribute('href') : null;
  
  let success = true;
  let message = '';
  
  if (canonicalHref) {
    const canonicalUrl = new URL(canonicalHref);
    const canonicalPath = canonicalUrl.pathname;
    const canonicalHasTrailingSlash = canonicalPath.endsWith('/') || canonicalPath === '';
    
    success = hasTrailingSlash === canonicalHasTrailingSlash;
    
    if (success) {
      message = `Success: URL structure is consistent with ${hasTrailingSlash ? 'trailing slashes' : 'no trailing slashes'}`;
    } else {
      message = `ERROR: URL structure is inconsistent: path ${hasTrailingSlash ? 'has' : 'doesn\'t have'} a trailing slash but canonical ${canonicalHasTrailingSlash ? 'has' : 'doesn\'t have'} one`;
    }
  } else {
    success = false;
    message = 'ERROR: Cannot verify URL consistency (no canonical URL found)';
  }
  
  return {
    success,
    hasTrailingSlash,
    message
  };
};

/**
 * Verifies all SEO fixes in one call and provides a comprehensive report
 */
export const verifyAllSEOFixes = async (): Promise<{
  robotsTxt: Awaited<ReturnType<typeof verifyRobotsTxt>>;
  h1Tag: ReturnType<typeof verifyH1Tag>;
  textContent: ReturnType<typeof verifyTextContent>;
  metaTags: ReturnType<typeof verifyMetaTags>;
  imageAltTags: ReturnType<typeof verifyImageAltTags>;
  structuredData: ReturnType<typeof verifyStructuredData>;
  urlConsistency: ReturnType<typeof verifyUrlConsistency>;
  overallSuccess: boolean;
  passedChecks: number;
  totalChecks: number;
  percentComplete: number;
}> => {
  const robotsTxtResult = await verifyRobotsTxt();
  const h1TagResult = verifyH1Tag();
  const textContentResult = verifyTextContent();
  const metaTagsResult = verifyMetaTags();
  const imageAltTagsResult = verifyImageAltTags();
  const structuredDataResult = verifyStructuredData();
  const urlConsistencyResult = verifyUrlConsistency();
  
  // Count all checks
  const allChecks = [
    robotsTxtResult.success,
    h1TagResult.success,
    textContentResult.success,
    metaTagsResult.title.success,
    metaTagsResult.description.success,
    metaTagsResult.keywords.success,
    metaTagsResult.canonical.success,
    metaTagsResult.hreflang.success,
    metaTagsResult.ogTags.success,
    imageAltTagsResult.success,
    structuredDataResult.success,
    urlConsistencyResult.success
  ];
  
  const passedChecks = allChecks.filter(check => check).length;
  const totalChecks = allChecks.length;
  const percentComplete = Math.round((passedChecks / totalChecks) * 100);
  
  // Determine overall success
  const overallSuccess = passedChecks === totalChecks;
  
  return {
    robotsTxt: robotsTxtResult,
    h1Tag: h1TagResult,
    textContent: textContentResult,
    metaTags: metaTagsResult,
    imageAltTags: imageAltTagsResult,
    structuredData: structuredDataResult,
    urlConsistency: urlConsistencyResult,
    overallSuccess,
    passedChecks,
    totalChecks,
    percentComplete
  };
};

export default {
  verifyRobotsTxt,
  verifyH1Tag,
  verifyTextContent,
  verifyMetaTags,
  verifyImageAltTags,
  verifyStructuredData,
  verifyUrlConsistency,
  verifyAllSEOFixes
};
