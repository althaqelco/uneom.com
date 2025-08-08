import { Metadata } from 'next';

interface ServerSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  locale: 'en' | 'ar';
  imageUrl?: string;
  noIndex?: boolean;
}

const baseUrl = 'https://uneom.com';

/**
 * Generates standardized Next.js metadata with proper SEO attributes
 * @param props SEO properties for the page
 * @returns Metadata object compatible with Next.js
 */
export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  locale,
  imageUrl = '/images/og-image.jpg',
  noIndex = false}: ServerSEOProps): Metadata {
  // Ensure path starts with a / but doesn't end with one
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  // Create canonical URL with trailing slash
  const canonicalPath = locale === 'ar' ? `/ar${cleanPath}/` : `${cleanPath}/`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  
  // Create alternate URLs for hreflang
  const enUrl = locale === 'ar' ? `${baseUrl}${cleanPath}/` : canonicalUrl;
  const arUrl = locale === 'ar' ? canonicalUrl : `${baseUrl}/ar${cleanPath}/`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-SA': enUrl,
        'ar-SA': arUrl,
        'x-default': enUrl}},
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: locale === 'ar' ? 'يونيوم المملكة العربية السعودية' : 'UNEOM Saudi Arabia',
      images: [
        {
          url: imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: title},
      ],
      locale: locale === 'ar' ? 'ar_SA' : 'en_SA'},
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl.startsWith('http') ? imageUrl : `${baseUrl}${imageUrl}`]},
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex}}};
}

/**
 * Creates a metadata object for pages that shouldn't be indexed
 */
export function generateNoIndexMetadata(): Metadata {
  return {
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false}}};
} 