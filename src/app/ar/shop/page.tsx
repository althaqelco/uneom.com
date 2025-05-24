// Server Component
import { Metadata } from 'next';
import ClientShopPage from './ClientShopPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// SEO metadata for the page
export const metadata: Metadata = {
  title: 'متجر الزي المهني | المورد الرائد للزي الموحد في المملكة العربية السعودية',
  description: 'تسوق الزي المهني عالي الجودة من المورد الرائد في المملكة العربية السعودية. أزياء الرعاية الصحية والطيران والضيافة والشركات متوفرة.',
  keywords: 'متجر الزي الموحد، شراء الزي الموحد، المملكة العربية السعودية، الزي المهني، متجر الزي الموحد عبر الإنترنت، أزياء الشركات',
  openGraph: {
    title: 'متجر الزي المهني | المورد الرائد للزي الموحد في المملكة العربية السعودية',
    description: 'تسوق الزي المهني عالي الجودة من المورد الرائد في المملكة العربية السعودية',
    url: 'https://uneom.com/ar/shop/',
    siteName: 'يونيوم | الأزياء الموحدة في المملكة العربية السعودية',
    images: [
      {
        url: 'https://uneom.com/images/shop-page-banner.webp',
        width: 1200,
        height: 630,
        alt: 'متجر الزي المهني من يونيوم',
      },
    ],
    locale: 'ar_SA',
    type: 'website'
  },
  // Add canonical URL and hreflang tags
  alternates: {
    canonical: 'https://uneom.com/ar/shop/',
    languages: {
      'en-SA': 'https://uneom.com/shop/',
      'ar-SA': 'https://uneom.com/ar/shop/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ShopPage() {
  return <ClientShopPage />;
} 