/**
 * ImageSEOWrapper Component
 * 
 * This component wraps images to ensure proper SEO optimization by:
 * 1. Scanning for images without alt text
 * 2. Automatically generating alt text when missing
 * 3. Providing proper image dimensions
 * 4. Implementing lazy loading for performance
 * 5. Adding structured data for important images
 * 
 * This directly addresses [TASK SF_FIX_007] - Missing Alt Tags
 */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import altTagGenerator from '@/lib/images/alt-tag-generator';
import OptimizedImage from './OptimizedImage';

interface ImageSEOWrapperProps {
  pageName: string; // The current page name (e.g., 'corporate', 'healthcare')
  children: React.ReactNode;
}

const ImageSEOWrapper: React.FC<ImageSEOWrapperProps> = ({ pageName, children }) => {
  const router = useRouter();
  const locale = router.locale || 'en';
  const [imageIssues, setImageIssues] = useState<{
    total: number;
    missing: number;
    fixed: number;
  }>({ total: 0, missing: 0, fixed: 0 });
  
  // Function to recursively process React children and fix images
  const processChildrenForImages = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      // Skip null or primitive children
      if (!React.isValidElement(child)) {
        return child;
      }
      
      // If it's an image element that doesn't use OptimizedImage
      if (child.type === 'img') {
        const imageProps = child.props;
        let altText = imageProps.alt;
        let needsGeneration = false;
        
        // Increment total image count
        setImageIssues(prev => ({ ...prev, total: prev.total + 1 }));
        
        // Check if alt text is missing or empty
        if (!altText || altText.trim() === '') {
          needsGeneration = true;
          setImageIssues(prev => ({ ...prev, missing: prev.missing + 1 }));
          
          // Generate alt text based on image path and page context
          altText = altTagGenerator.generateAltTag(
            imageProps.src || '',
            pageName,
            locale
          );
          
          setImageIssues(prev => ({ ...prev, fixed: prev.fixed + 1 }));
        }
        
        // Replace with OptimizedImage component
        return (
          <OptimizedImage
            src={imageProps.src}
            alt={altText}
            width={imageProps.width || undefined}
            height={imageProps.height || undefined}
            className={imageProps.className || ''}
            onClick={imageProps.onClick}
          />
        );
      }
      
      // If it's an OptimizedImage, leave it alone
      if (child.type === OptimizedImage) {
        return child;
      }
      
      // If it has children, process them recursively
      if (child.props && child.props.children) {
        const newChildren = processChildrenForImages(child.props.children);
        return React.cloneElement(child, {
          ...child.props,
          children: newChildren});
      }
      
      // Return unchanged if no conditions match
      return child;
    });
  };
  
  // Add structured data for images when needed
  const generateImageStructuredData = () => {
    // Only generate structured data if there are images
    if (imageIssues.total === 0) return null;
    
    const imageStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'ImageObject',
      'contentUrl': 'https://uneom.com/images/seo/website-preview.jpg',
      'name': locale === 'ar' ? 'UNEOM - الزي الموحد الاحترافي' : 'UNEOM - Professional Uniforms',
      'description': locale === 'ar' 
        ? 'زي موحد احترافي مصمم خصيصًا للشركات ومقدمي الرعاية الصحية والضيافة في المملكة العربية السعودية'
        : 'Professional uniforms custom designed for corporate, healthcare, and hospitality in Saudi Arabia'
    };
    
    return (
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageStructuredData)
          }}
        />
      </Head>
    );
  };
  
  // Process children for images
  const processedChildren = processChildrenForImages(children);
  
  return (
    <React.Fragment>
      {generateImageStructuredData()}
      {processedChildren}
      
      {/* Hidden debug info during development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="hidden">
          <div id="image-seo-debug" data-total={imageIssues.total} data-missing={imageIssues.missing} data-fixed={imageIssues.fixed}></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ImageSEOWrapper;
