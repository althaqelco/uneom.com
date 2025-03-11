'use client';

/**
 * Internationalization configuration for the UNEOM website
 * Handles language detection, switching, and provides translation functions.
 */

// Supported languages
export const LANGUAGES = {
  EN: 'en',
  AR: 'ar'
};

// Default language
export const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Language direction mapping
export const LANGUAGE_DIRECTION = {
  [LANGUAGES.EN]: 'ltr',
  [LANGUAGES.AR]: 'rtl'
};

/**
 * Check if a language is RTL
 * @param {string} lang - Language code to check
 * @returns {boolean} True if the language is RTL
 */
export const isRTL = (lang) => LANGUAGE_DIRECTION[lang] === 'rtl';

/**
 * Get language direction
 * @param {string} lang - Language code
 * @returns {string} 'rtl' or 'ltr'
 */
export const getDirection = (lang) => LANGUAGE_DIRECTION[lang] || 'ltr';

/**
 * Get the current language from the pathname or default to 'en'
 * @param {string} pathname - Current pathname
 * @returns {string} Language code
 */
export const getLanguageFromPath = (pathname) => {
  if (!pathname) return DEFAULT_LANGUAGE;
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === LANGUAGES.AR) return LANGUAGES.AR;
  return DEFAULT_LANGUAGE;
};

/**
 * Switch the language in a URL
 * @param {string} currentPath - Current path
 * @param {string} newLang - New language code
 * @returns {string} New path with updated language
 */
export const switchLanguageInPath = (currentPath, newLang) => {
  const segments = currentPath.split('/').filter(Boolean);
  const currentLang = getLanguageFromPath(currentPath);
  
  // If current path has a language prefix and we're switching languages
  if (currentLang !== DEFAULT_LANGUAGE && currentLang !== newLang) {
    segments.shift(); // Remove the current language prefix
  }
  
  // If new language is not the default, add it as prefix
  if (newLang !== DEFAULT_LANGUAGE) {
    return `/${newLang}/${segments.join('/')}`;
  }
  
  // If new language is the default, just use the path without language prefix
  return `/${segments.join('/')}`;
}; 