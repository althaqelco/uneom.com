import { Metadata } from 'next';
import { getLanguageAlternates } from '@/lib/i18n';
import getSEOMetadata from '@/lib/i18n/seo';

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  noIndex?: boolean;
  alternateLanguages?: {
    lang: string;
    href: string;
  }[];
  locale?: string;
  page?: string;
  subpage?: string;
}

/**
 * Generate metadata for Next.js App Router (server component)
 */
export function generateMetadata({
  title,
  description,
  keywords,
  ogImage = '/images/uneom-social-share.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl,
  noIndex = false,
  alternateLanguages = [],
  locale = 'en',
  page,
  subpage,
}: MetadataProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://uneom.com';
  const fullOgImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // If page is provided, get SEO data from translations
  let seoData = { title, description, keywords };
  if (page) {
    const pageSEO = getSEOMetadata(locale, page, subpage);
    seoData = {
      title: pageSEO.title,
      description: pageSEO.description,
      keywords: pageSEO.keywords
    };
  }
  
  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords?.split(', '),
    openGraph: {
      title: seoData.title,
      description: seoData.description,
      type: ogType,
      url: canonicalUrl,
      images: [
        {
          url: fullOgImageUrl,
        },
      ],
      locale,
    },
    twitter: {
      card: twitterCard,
      title: seoData.title,
      description: seoData.description,
      images: [fullOgImageUrl],
    },
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      languages: alternateLanguages.reduce((acc, { lang, href }) => {
        acc[lang] = href;
        return acc;
      }, {} as Record<string, string>),
    },
  };
} 