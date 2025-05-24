/**
 * Custom 404 Page
 * 
 * A properly SEO-optimized 404 page that:
 * 1. Uses proper HTTP status code (404)
 * 2. Includes enhanced SEO meta tags with noindex
 * 3. Provides helpful navigation options for users
 * 4. Properly handles errors in both English and Arabic
 */

import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EnhancedSEO from '@/components/seo/EnhancedSEO';

// Define the interface for page translations
interface NotFoundTranslations {
  title: string;
  heading: string;
  message: string;
  goHome: string;
  exploreSuggestions: string;
  suggestions: {
    title: string;
    links: Array<{
      text: string;
      href: string;
    }>;
  };
}

// Translations for 404 page
const translations: Record<string, NotFoundTranslations> = {
  en: {
    title: 'Page Not Found | UNEOM',
    heading: 'Page Not Found',
    message: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
    goHome: 'Go to Homepage',
    exploreSuggestions: 'Or explore these sections',
    suggestions: {
      title: 'Popular destinations:',
      links: [
        { text: 'Corporate Uniforms', href: '/industries/corporate/' },
        { text: 'Healthcare Uniforms', href: '/industries/healthcare/' },
        { text: 'Uniform Design Services', href: '/services/design/' },
        { text: 'UNEOM in Riyadh', href: '/locations/riyadh/' },
        { text: 'Contact Us', href: '/contact/' }
      ]
    }
  },
  ar: {
    title: 'الصفحة غير موجودة | يونيوم',
    heading: 'الصفحة غير موجودة',
    message: 'الصفحة التي تبحث عنها قد تكون أزيلت، أو تغير اسمها، أو غير متاحة مؤقتًا.',
    goHome: 'الذهاب إلى الصفحة الرئيسية',
    exploreSuggestions: 'أو استكشف هذه الأقسام',
    suggestions: {
      title: 'الوجهات الشائعة:',
      links: [
        { text: 'أزياء موحدة للشركات', href: '/ar/industries/corporate/' },
        { text: 'أزياء موحدة للرعاية الصحية', href: '/ar/industries/healthcare/' },
        { text: 'خدمات تصميم الزي الموحد', href: '/ar/services/design/' },
        { text: 'يونيوم في الرياض', href: '/ar/locations/riyadh/' },
        { text: 'اتصل بنا', href: '/ar/contact/' }
      ]
    }
  }
};

export default function Custom404() {
  const router = useRouter();
  const locale = router.locale || 'en';
  const t = translations[locale] || translations.en;
  const isRTL = locale === 'ar';
  
  return (
    <>
      {/* Enhanced SEO with noindex directive for 404 page */}
      <EnhancedSEO
        title={t.title}
        description={t.message}
        noindex={true}
        nofollow={false}
      />
      
      {/* Additional meta tags */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-8">
              <Link href="/" locale={locale}>
                <img
                  src="/images/logo.png"
                  alt="UNEOM Logo"
                  className="h-12"
                />
              </Link>
            </div>
            
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{t.heading}</h2>
              <p className="text-gray-600 mb-8">{t.message}</p>
              
              <Link
                href="/"
                locale={locale}
                className="inline-block bg-primary-600 text-white font-medium py-3 px-6 rounded-md hover:bg-primary-700 transition-colors"
              >
                {t.goHome}
              </Link>
            </div>
            
            <div className="mt-12">
              <h3 className="text-lg font-medium text-gray-800 mb-4">{t.suggestions.title}</h3>
              <ul className="space-y-2">
                {t.suggestions.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-primary-600 hover:text-primary-800 hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} UNEOM. All rights reserved.
        </div>
      </div>
    </>
  );
}

// This ensures the page is server-side rendered with proper status code
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      // No need for additional props as translations are handled in the component
    }
  };
};
