/**
 * SEO Helper functions
 * Various utilities to help with implementing proper SEO across the website
 */

import React from 'react';

/**
 * Component that ensures there is exactly one H1 tag on the page
 * Use this in page components when you want to guarantee a proper H1 exists
 */
export function MainHeading({ 
  children, 
  className = "text-3xl md:text-4xl font-bold mb-6",
  fallbackText,
  id
}: { 
  children: React.ReactNode, 
  className?: string,
  fallbackText?: string,
  id?: string
}) {
  return (
    <h1 id={id} className={className}>
      {children || fallbackText || "Untitled Page"}
    </h1>
  );
}

/**
 * Checks if a page has an H1 tag and logs warnings if multiple H1s are found
 * For development purposes only
 */
export function checkPageH1Tags() {
  if (typeof window === 'undefined') return; // Only run in browser
  
  // Check for H1 tags
  const h1Tags = document.querySelectorAll('h1');
  
  if (h1Tags.length === 0) {
    console.warn('⚠️ SEO Warning: No H1 tag found on this page. Every page should have exactly one H1.');
  } else if (h1Tags.length > 1) {
    console.warn(`⚠️ SEO Warning: ${h1Tags.length} H1 tags found on this page. Every page should have exactly one H1.`);
    
    // Log the h1 tags for debugging
    h1Tags.forEach((h1, index) => {
      console.warn(`H1 #${index + 1}: ${h1.textContent}`);
    });
  }
}

/**
 * Converts a standard heading into the next heading level down if an H1 already exists
 * This helps prevent duplicate H1s on the page
 */
export function SmartHeading({ 
  level = 1,
  forceLevel,
  children,
  className = "",
  id
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6,
  forceLevel?: 1 | 2 | 3 | 4 | 5 | 6,
  children: React.ReactNode,
  className?: string,
  id?: string
}) {
  const [headingLevel, setHeadingLevel] = React.useState(forceLevel || level);
  
  React.useEffect(() => {
    // If forcing a specific level, don't adjust
    if (forceLevel) return;
    
    // If this is an H1, check if an H1 already exists
    if (level === 1) {
      // Check if there's already an H1 on the page
      const existingH1s = document.querySelectorAll('h1');
      if (existingH1s.length > 0) {
        // If an H1 already exists, make this an H2 instead
        setHeadingLevel(2);
      }
    }
  }, [level, forceLevel]);
  
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  
  return <HeadingTag id={id} className={className}>{children}</HeadingTag>;
}

/**
 * Helps generate proper page titles
 */
export function generatePageTitle(title: string, includeBrandName = true) {
  const brandName = 'UNEOM';
  
  // If title already contains the brand name, return as is
  if (title.includes(brandName)) {
    return title;
  }
  
  // Otherwise, add the brand name
  return includeBrandName ? `${title} | ${brandName}` : title;
}

/**
 * Generate a proper heading hierarchy for a page section
 */
export function SectionHeadingWithProperId({
  title,
  subtitle,
  level = 2,
  id,
  className = "",
  centered = false
}: {
  title: string,
  subtitle?: string,
  level?: 2 | 3 | 4 | 5 | 6,
  id?: string,
  className?: string,
  centered?: boolean
}) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  const SubheadingTag = `h${Math.min(6, level + 1)}` as keyof JSX.IntrinsicElements;
  
  const alignment = centered ? 'text-center' : '';
  
  return (
    <div className={`${alignment} ${className}`}>
      <HeadingTag id={id} className="font-bold text-2xl md:text-3xl mb-2">
        {title}
      </HeadingTag>
      {subtitle && (
        <SubheadingTag className="text-neutral-600 text-lg mb-6">
          {subtitle}
        </SubheadingTag>
      )}
    </div>
  );
} 