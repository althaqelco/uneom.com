import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "دراسة حالة سبا فندق خمس نجوم | أزياء سبا فاخرة | UNEOM المملكة العربية السعودية | يونيوم",
  description: "كيف قامت UNEOM بتحويل سبا مرموق في فندق خمس نجوم بالرياض بأزياء موحدة فاخرة مخصصة رفعت من ثقة الموظفين، وتجارب الضيوف، وهوية العلامة التجارية",
  alternates: {
    canonical: 'https://uneom.com/ar/case-studies/5-star-hotel-spa/',
    languages: {
      'en': 'https://uneom.com/case-studies/5-star-hotel-spa/',
      'ar-SA': 'https://uneom.com/ar/case-studies/5-star-hotel-spa/',
      'x-default': 'https://uneom.com/case-studies/5-star-hotel-spa/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
