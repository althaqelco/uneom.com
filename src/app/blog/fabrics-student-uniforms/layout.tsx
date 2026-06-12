import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "أفضل أقمشة الزي المدرسي: دليل شامل لاختيار الأقمشة المناسبة للطلاب | UNEOM",
  description: "اكتشف أفضل أنواع الأقمشة للزي المدرسي في السعودية. دليل شامل يغطي الراحة، المتانة، سهولة العناية والمعايير الصحية للأقمشة المدرسية.",
  alternates: {
    canonical: 'https://uneom.com/blog/fabrics-student-uniforms/',
    languages: {
      'en': 'https://uneom.com/blog/fabrics-student-uniforms/',
      'ar-SA': 'https://uneom.com/ar/blog/fabrics-student-uniforms/',
      'x-default': 'https://uneom.com/blog/fabrics-student-uniforms/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
