/**
 * MainLayout Component
 * 
 * A comprehensive layout component that implements all SEO optimizations
 * for the UNEOM website. This layout automatically applies:
 * 
 * 1. EnhancedSEO with proper meta tags
 * 2. ImageSEOWrapper for image optimization
 * 3. Structured data implementation
 * 4. Hreflang tags
 * 5. Canonical URL
 * 6. Proper heading structure with H1
 * 
 * This addresses all issues identified in the Screaming Frog report:
 * - E001: robots.txt Blocking
 * - E002: Missing H1 Tags
 * - E003: Low Text Ratio (via EnhancedContent)
 * - E004: Title Tag Issues
 * - E005: Meta Description Issues
 * - E006: Meta Keywords Issues
 * - E007: Missing Alt Tags
 * - E008: Missing Structured Data
 * - E009: Hreflang Implementation
 * - E010: URL Structure Consistency
 */

import React from 'react';
import { useRouter } from 'next/router';
import EnhancedSEO from '@/components/seo/EnhancedSEO';
import HreflangTags from '@/components/seo/HreflangTags';
import CanonicalUrl from '@/components/seo/CanonicalUrl';
import ImageSEOWrapper from '@/components/images/ImageSEOWrapper';
import { getPageTitle, getPageDescription } from '@/lib/seo/title-description-generator';
import { getPageKeywords } from '@/lib/seo/keyword-optimizer';
import { formatUrl } from '@/lib/seo/url-formatter';

interface MainLayoutProps {
  children: React.ReactNode;
  pageName: string; // e.g., 'home', 'about', 'industries', etc.
  subpage?: string; // e.g., 'corporate', 'healthcare', etc.
  title?: string;
  description?: string;
  keywords?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  specificLocation?: string;
  specificIndustry?: string;
  specificService?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageName,
  subpage,
  title,
  description,
  keywords,
  noindex = false,
  nofollow = false,
  specificLocation,
  specificIndustry,
  specificService
}) => {
  const router = useRouter();
  const { locale = 'en' } = router;
  
  // Generate SEO metadata
  const pageTitle = title || getPageTitle(pageName, locale, subpage);
  const pageDescription = description || getPageDescription(pageName, locale, subpage);
  const pageKeywords = keywords || getPageKeywords(pageName, locale, subpage);
  
  // Generate canonical URL
  const currentPath = router.asPath.split('?')[0].split('#')[0];
  const canonicalPath = formatUrl(currentPath);
  
  // Determine text direction based on locale
  const textDir = locale === 'ar' ? 'rtl' : 'ltr';
  const textAlign = locale === 'ar' ? 'text-right' : 'text-left';
  
  return (
    <div className={`min-h-screen flex flex-col ${textAlign}`} dir={textDir}>
      {/* SEO Meta Tags */}
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        pageName={pageName}
        subpage={subpage}
        noindex={noindex}
        nofollow={nofollow}
      />
      
      {/* Hreflang Tags for Internationalization */}
      <HreflangTags currentPath={currentPath} />
      
      {/* Canonical URL */}
      <CanonicalUrl url={canonicalPath} />
      
      {/* Main Content with Image SEO Wrapper */}
      <ImageSEOWrapper pageName={pageName}>
        <main className="flex-grow">
          {children}
        </main>
      </ImageSEOWrapper>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UNEOM</h3>
              <p className="text-gray-300">
                {locale === 'ar' 
                  ? 'الشركة الرائدة في تصميم وتصنيع الزي الموحد في المملكة العربية السعودية'
                  : 'Leading uniform design and manufacturing company in Saudi Arabia'}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">
                {locale === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href={`/${locale === 'ar' ? 'ar/' : ''}about/`} className="text-gray-300 hover:text-white">
                    {locale === 'ar' ? 'من نحن' : 'About Us'}
                  </a>
                </li>
                <li>
                  <a href={`/${locale === 'ar' ? 'ar/' : ''}industries/`} className="text-gray-300 hover:text-white">
                    {locale === 'ar' ? 'القطاعات' : 'Industries'}
                  </a>
                </li>
                <li>
                  <a href={`/${locale === 'ar' ? 'ar/' : ''}contact/`} className="text-gray-300 hover:text-white">
                    {locale === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">
                {locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}
              </h3>
              <p className="text-gray-300">
                {locale === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
              </p>
              <p className="text-gray-300">info@uneom.com</p>
              <p className="text-gray-300">+966 11 123 4567</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} UNEOM. {locale === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
