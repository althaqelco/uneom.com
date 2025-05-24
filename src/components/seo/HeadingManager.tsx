/**
 * HeadingManager Component
 * 
 * Ensures each page has a unique H1 tag and checks for duplicates.
 * This component helps address the "Missing H1" issue (E002) identified in the Screaming Frog report.
 * 
 * It also provides a way to manage proper heading hierarchy throughout the site.
 */

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import getSEOMetadata from '@/lib/i18n/seo';

interface HeadingManagerProps {
  title?: string;
  pageName?: string;
  subpage?: string;
  className?: string;
  disableWarnings?: boolean;
  onDuplicateH1?: (count: number) => void;
}

/**
 * Main HeadingManager component
 * Ensures each page has exactly one H1 tag
 */
const HeadingManager: React.FC<HeadingManagerProps> = ({ 
  title, 
  pageName,
  subpage = '',
  className = '',
  disableWarnings = false,
  onDuplicateH1
}) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const [hasMultipleH1s, setHasMultipleH1s] = useState(false);
  const [h1Count, setH1Count] = useState(0);
  const componentMounted = useRef(false);
  
  // Get title from SEO metadata if not provided directly
  const pageToUse = pageName || 
    router.pathname.replace(/^\/(\/ar)?/, '').replace(/\/$/, '') || 'home';
  
  const seoData = getSEOMetadata(locale, pageToUse, subpage);
  const displayTitle = title || seoData.title || pageToUse;
  
  // Check for duplicate H1 tags on client-side
  useEffect(() => {
    if (typeof window === 'undefined') return;
    componentMounted.current = true;
    
    // Wait for DOM to be fully loaded
    const checkH1Tags = () => {
      const h1Tags = document.querySelectorAll('h1');
      const count = h1Tags.length;
      
      setH1Count(count);
      setHasMultipleH1s(count > 1);
      
      // Callback for parent components to track H1 issues
      if (onDuplicateH1 && count > 1) {
        onDuplicateH1(count);
      }
      
      // Log warning in development
      if (process.env.NODE_ENV === 'development' && count > 1 && !disableWarnings) {
        console.warn(`[HeadingManager] ${count} H1 tags found on page: ${router.pathname}`);
        
        // Log all H1 tags for debugging
        h1Tags.forEach((h1, index) => {
          console.warn(`H1 #${index + 1}: ${h1.textContent}`);
        });
      }
      
      // Check for missing H1 tags
      if (process.env.NODE_ENV === 'development' && count === 0 && !disableWarnings) {
        console.warn(`[HeadingManager] No H1 tags found on page: ${router.pathname}`);
      }
    };
    
    // Initial check after component mounts and DOM is ready
    const timer = setTimeout(checkH1Tags, 1000);
    
    // Re-check on route change
    const handleRouteChange = () => {
      setTimeout(checkH1Tags, 1000);
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    
    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeComplete', handleRouteChange);
      componentMounted.current = false;
    };
  }, [router, onDuplicateH1, disableWarnings]);
  return (
    <>
      {/* Render the primary H1 tag */}
      <h1 className={className}>{displayTitle}</h1>
      
      {/* Warning for developers in development mode */}
      {process.env.NODE_ENV === 'development' && hasMultipleH1s && !disableWarnings && (
        <div 
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4" 
          role="alert"
          style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, maxWidth: '400px' }}
        >
          <p className="font-bold">Warning: Multiple H1 Tags Detected</p>
          <p>
            This page has {h1Count} H1 tags, which is not recommended for SEO.
            Please ensure only one H1 tag exists on this page.
          </p>
        </div>
      )}
    </>
  );
};

/**
 * HeadingTwo component for consistent H2 styling and structure
 */
export const HeadingTwo: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return <h2 className={`text-2xl font-semibold mb-4 ${className}`}>{children}</h2>;
};

/**
 * HeadingThree component for consistent H3 styling and structure
 */
export const HeadingThree: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-medium mb-3 ${className}`}>{children}</h3>;
};

/**
 * Heading utilities to check for heading issues
 */
export const headingUtils = {
  /**
   * Checks if a page has the correct heading structure
   */
  checkHeadingStructure: () => {
    if (typeof window === 'undefined') return { valid: true, errors: [] };
    
    const errors: string[] = [];
    const h1Tags = document.querySelectorAll('h1');
    
    // Check for exactly one H1
    if (h1Tags.length === 0) {
      errors.push('Missing H1 tag on page');
    } else if (h1Tags.length > 1) {
      errors.push(`Multiple H1 tags found (${h1Tags.length})`);
    }
    
    // Check for proper heading hierarchy (no skipping levels)
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 1;
    
    for (let i = 0; i < headings.length; i++) {
      const currentLevel = parseInt(headings[i].tagName.charAt(1));
      
      // Check if we're skipping heading levels (e.g., h2 to h4)
      if (currentLevel > lastLevel + 1) {
        errors.push(`Heading level skipped from H${lastLevel} to H${currentLevel}`);
      }
      
      lastLevel = currentLevel;
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }
};

export default HeadingManager;
