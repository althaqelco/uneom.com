import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'UNEOM — الأزياء المهنية السعودية | الرعاية الصحية والضيافة والطيران والتصنيع',
    template: '%s | UNEOM'
  },
  description: 'شريك المملكة العربية السعودية في الأزياء المهنية منذ 2013. برامج زي مؤسسي للرعاية الصحية والضيافة والطيران والمؤسسات والتعليم والتصنيع والأمن والتجزئة عبر جميع الـ24 مدينة.',
  alternates: {
    canonical: 'https://uneom.com/ar/',
    languages: {
      en: 'https://uneom.com/',
      'ar-SA': 'https://uneom.com/ar/',
      'x-default': 'https://uneom.com/'
    }
  },
  openGraph: {
    type: 'website', locale: 'ar_SA', alternateLocale: 'en_US',
    url: 'https://uneom.com/ar/', siteName: 'UNEOM',
    title: 'UNEOM — الأزياء المهنية السعودية',
    description: 'برامج زي مؤسسي عبر 8 قطاعات و24 مدينة سعودية.',
    images: [{ url: '/images/uneom-og-image.jpg', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image', title: 'UNEOM — الأزياء المهنية السعودية', description: 'برامج زي مؤسسي عبر 8 قطاعات و24 مدينة سعودية.' }
};

/**
 * AR layout — wraps Arabic routes with RTL + AR header/footer.
 * Note: `<html lang>` is set on root layout; we wrap content in a
 * `dir="rtl"` div + lang="ar" attribute so RTL/A11y work end-to-end.
 */
export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ar" dir="rtl" className="font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        انتقل إلى المحتوى
      </a>
      <Header lang="ar" />
      <main id="main" className="flex-1">{children}</main>
      <Footer lang="ar" />
    </div>
  );
}
