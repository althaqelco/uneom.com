import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "معايير السلامة في التصنيع السعودي: دليل شامل للامتثال والجودة | UNEOM",
  description: "دليل متخصص لمعايير السلامة في قطاع التصنيع السعودي. تعرف على متطلبات SASO، معايير الجودة، وأفضل الممارسات لضمان السلامة المهنية.",
  alternates: {
    canonical: 'https://uneom.com/blog/safety-standards-saudi-manufacturing/',
    languages: {
      'en': 'https://uneom.com/blog/safety-standards-saudi-manufacturing/',
      'ar-SA': 'https://uneom.com/ar/blog/safety-standards-saudi-manufacturing/',
      'x-default': 'https://uneom.com/blog/safety-standards-saudi-manufacturing/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
