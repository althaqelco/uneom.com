import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
  title: '🇸🇦 الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية | يونيوم',
  description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية. نخدم القطاعات الطبية والطيران والضيافة والشركات بأعلى معايير الجودة. خدمة شاملة في جميع أنحاء المملكة.',
  keywords: 'الأزياء المهنية السعودية, الزي الموحد, يونيوم, أزياء طبية, أزياء الطيران, الأزياء الصناعية, أزياء الضيافة, الأزياء التعليمية, أزياء الأمن, تصنيع الأزياء المهنية, الزي المدرسي, سكرابز طبية, أزياء المستشفيات, الرياض, جدة, الدمام',
  alternates: {
    canonical: 'https://uneom.com/ar',
    languages: {
      'en': 'https://uneom.com',
      'ar': 'https://uneom.com/ar',
    },
  },
  openGraph: {
    title: '🇸🇦 الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية | يونيوم',
    description: 'شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في السعودية. نخدم القطاعات الطبية والطيران والضيافة والشركات بأعلى معايير الجودة.',
    url: 'https://uneom.com/ar',
    siteName: 'يونيوم للأزياء المهنية',
    locale: 'ar',
    type: 'website',
  },
};

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar" />
        <link rel="alternate" hrefLang="x-default" href="https://uneom.com" />
        
        {/* Enhanced structured data for Arabic */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "يونيوم",
              "alternateName": "UNEOM",
              "url": "https://uneom.com/ar",
              "logo": "https://uneom.com/logo.png",
              "description": "شركة يونيوم الرائدة في تصنيع الأزياء المهنية والزي الموحد في المملكة العربية السعودية",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-123-4567",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": ["English", "Arabic"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "طريق الملك فهد، حي العليا",
                "addressLocality": "الرياض",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://twitter.com/uneom_sa",
                "https://linkedin.com/company/uneom",
                "https://instagram.com/uneom_official"
              ],
              "inLanguage": "ar"
            })
          }}
        />
      </head>
      <body className={`${inter.className} ${cairo.className} min-h-screen flex flex-col antialiased`}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}