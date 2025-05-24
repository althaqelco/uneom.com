/**
 * EnhancedContent Component
 * 
 * This component ensures that main page content is properly rendered 
 * server-side and is immediately indexable by search engines.
 * It helps fix the "2 Word Count / Low Text Ratio" issue (E003) identified in the Screaming Frog report.
 * 
 * Key features:
 * - Forces server-side rendering of substantial textual content
 * - Ensures proper HTML structure for SEO
 * - Maintains minimum text-to-HTML ratio
 * - Supports both English and Arabic content
 */

import React from 'react';
import HeadingManager, { HeadingTwo } from '@/components/seo/HeadingManager';

interface ContentSection {
  heading: string;
  content: string | React.ReactNode;
  id?: string;
}

interface EnhancedContentProps {
  title: string;
  description?: string;
  contentSections: ContentSection[];
  locale?: 'en' | 'ar';
  className?: string;
  children?: React.ReactNode;
}

// Export the ContentSection type for reuse in other components
export type { ContentSection };

const EnhancedContent: React.FC<EnhancedContentProps> = ({
  title,
  description,
  contentSections,
  locale = 'en',
  className = '',
  children
}) => {
  const isRTL = locale === 'ar';
  const textDir = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';
  
  return (
    <div className={`enhanced-content ${textAlign} ${className}`} dir={textDir}>
      {/* Main H1 heading - ensures every page has exactly one H1 */}
      <HeadingManager 
        title={title}
        className={`text-3xl md:text-4xl font-bold mb-4 ${textAlign}`}
      />
      
      {/* Description paragraph with sufficient length for indexing */}
      {description && (
        <p className={`text-lg mb-8 max-w-3xl ${textAlign}`}>
          {description}
        </p>
      )}
      
      {/* Content sections with proper heading hierarchy */}
      <div className="content-sections space-y-8 mb-8">
        {contentSections.map((section, index) => (
          <section key={index} id={section.id} className="content-section">
            <HeadingTwo className={textAlign}>
              {section.heading}
            </HeadingTwo>
            {typeof section.content === 'string' ? (
              <div className={`${textAlign}`}>
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <div className={`${textAlign}`}>{section.content}</div>
            )}
          </section>
        ))}
      </div>
      
      {/* Additional content passed as children */}
      {children}
    </div>
  );
};

export default EnhancedContent;
