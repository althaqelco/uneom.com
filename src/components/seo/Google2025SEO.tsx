'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { 
  SEOConfig, 
  generateOpenGraphTags, 
  generateTwitterTags, 
  generateRobotsTags,
  generateHreflangTags,
  optimizeTitle,
  optimizeDescription,
  generateCanonicalUrl,
  DEFAULT_SEO_CONFIG
} from '@/lib/seo/google-2025-optimization';

interface Google2025SEOProps {
  config?: Partial<SEOConfig>;
  locale?: 'ar' | 'en';
  structuredData?: any;
}

export default function Google2025SEO({ 
  config = {}, 
  locale = 'ar',
  structuredData 
}: Google2025SEOProps) {
  const pathname = usePathname();
  
  // دمج الإعدادات مع الإعدادات الافتراضية
  const seoConfig: SEOConfig = {
    ...DEFAULT_SEO_CONFIG,
    ...config
  };

  // تحسين العنوان والوصف
  const optimizedTitle = optimizeTitle(seoConfig.title);
  const optimizedDescription = optimizeDescription(seoConfig.description);
  const canonicalUrl = generateCanonicalUrl(pathname || '/');

  // إنشاء العلامات
  const openGraphTags = seoConfig.openGraph ? generateOpenGraphTags(seoConfig.openGraph) : {};
  const twitterTags = seoConfig.twitter ? generateTwitterTags(seoConfig.twitter) : {};
  const robotsContent = seoConfig.robots ? generateRobotsTags(seoConfig.robots) : 'index, follow';
  const hreflangTags = seoConfig.hreflang ? generateHreflangTags(seoConfig.hreflang) : [];

  // البيانات المنظمة
  const jsonLd = structuredData || seoConfig.structuredData;

  return (
    <Head>
      {/* العلامات الأساسية */}
      <title>{optimizedTitle}</title>
      <meta name="description" content={optimizedDescription} />
      <meta name="keywords" content={seoConfig.keywords.join(', ')} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang Tags */}
      {hreflangTags.map((tag, index) => (
        <link key={index} rel={tag.rel} hrefLang={tag.hreflang} href={tag.href} />
      ))}
      
      {/* Open Graph Tags */}
      {Object.entries(openGraphTags).map(([property, content]) => (
        <meta key={property} property={property} content={content} />
      ))}
      
      {/* Twitter Tags */}
      {Object.entries(twitterTags).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
      
      {/* علامات إضافية لجوجل 2025 */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      
      {/* علامات اللغة والاتجاه */}
      <meta httpEquiv="content-language" content={locale} />
      <meta name="language" content={locale} />
      <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} />
      
      {/* علامات الجغرافيا */}
      <meta name="geo.region" content="SA" />
      <meta name="geo.country" content="Saudi Arabia" />
      <meta name="geo.placename" content="Riyadh, Saudi Arabia" />
      <meta name="ICBM" content="24.7136, 46.6753" />
      
      {/* علامات التجارة الإلكترونية */}
      <meta name="product:price:currency" content="SAR" />
      <meta name="product:availability" content="in stock" />
      <meta name="product:condition" content="new" />
      
      {/* علامات الأمان */}
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* علامات الأداء */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* علامات PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="application-name" content="UNEOM" />
      <meta name="apple-mobile-web-app-title" content="UNEOM" />
      
      {/* أيقونات متعددة الأحجام */}
      <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
      <link rel="mask-icon" href="/images/icons/safari-pinned-tab.svg" color="#1e40af" />
      
      {/* علامات Microsoft */}
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileImage" content="/images/icons/mstile-144x144.png" />
      
      {/* علامات Facebook Domain Verification */}
      <meta name="facebook-domain-verification" content="your-facebook-domain-verification-code" />
      
      {/* علامات Google Site Verification */}
      <meta name="google-site-verification" content="your-google-site-verification-code" />
      
      {/* علامات Bing Site Verification */}
      <meta name="msvalidate.01" content="your-bing-site-verification-code" />
      
      {/* علامات Yandex Site Verification */}
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* البيانات المنظمة */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd)
          }}
        />
      )}
      
      {/* Google Analytics 4 */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              page_title: '${optimizedTitle}',
              page_location: '${canonicalUrl}',
              content_group1: '${locale}',
              custom_map: {
                'dimension1': 'page_category',
                'dimension2': 'user_type'
              }
            });
          `
        }}
      />
      
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `
        }}
      />
      
      {/* Microsoft Clarity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
          `
        }}
      />
      
      {/* Hotjar */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `
        }}
      />
      
      {/* Schema.org للموقع */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "UNEOM - يونيوم",
            "alternateName": "يونيوم للأزياء المهنية",
            "url": "https://uneom.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://uneom.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "sameAs": [
              "https://www.linkedin.com/company/uneom",
              "https://twitter.com/uneom_sa",
              "https://www.instagram.com/uneom_uniforms",
              "https://www.facebook.com/uneom.sa"
            ]
          })
        }}
      />
      
      {/* Rich Snippets للتقييمات */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AggregateRating",
            "itemReviewed": {
              "@type": "Organization",
              "name": "UNEOM"
            },
            "ratingValue": "4.8",
            "reviewCount": "1247",
            "bestRating": "5",
            "worstRating": "1"
          })
        }}
      />
    </Head>
  );
}

// مكون للصفحات الفرعية
export function PageSEO({ 
  title, 
  description, 
  keywords = [], 
  locale = 'ar',
  structuredData,
  noindex = false 
}: {
  title: string;
  description: string;
  keywords?: string[];
  locale?: 'ar' | 'en';
  structuredData?: any;
  noindex?: boolean;
}) {
  const config: Partial<SEOConfig> = {
    title,
    description,
    keywords,
    robots: {
      index: !noindex,
      follow: true,
      maxSnippet: 160,
      maxImagePreview: 'large'
    }
  };

  return <Google2025SEO config={config} locale={locale} structuredData={structuredData} />;
}

// مكون للمنتجات
export function ProductSEO({ 
  product, 
  locale = 'ar' 
}: { 
  product: any; 
  locale?: 'ar' | 'en' 
}) {
  const config: Partial<SEOConfig> = {
    title: `${product.name} - يونيوم`,
    description: product.description,
    keywords: product.tags || [],
    openGraph: {
      title: product.name,
      description: product.description,
      image: product.images?.[0] || '/images/default-product.jpg',
      imageAlt: product.name,
      type: 'product',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      siteName: 'UNEOM'
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.images,
    "brand": {
      "@type": "Brand",
      "name": "UNEOM"
    },
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock"
    }
  };

  return <Google2025SEO config={config} locale={locale} structuredData={productSchema} />;
}

// مكون للمقالات
export function ArticleSEO({ 
  article, 
  locale = 'ar' 
}: { 
  article: any; 
  locale?: 'ar' | 'en' 
}) {
  const config: Partial<SEOConfig> = {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags || [],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      image: article.featuredImage || '/images/default-blog.jpg',
      imageAlt: article.title,
      type: 'article',
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      siteName: 'UNEOM'
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.featuredImage,
    "author": {
      "@type": "Person",
      "name": article.author?.name || "فريق يونيوم"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UNEOM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://uneom.com/images/logo/uneom-logo.png"
      }
    },
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt
  };

  return <Google2025SEO config={config} locale={locale} structuredData={articleSchema} />;
}