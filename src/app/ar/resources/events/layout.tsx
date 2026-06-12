import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "يونيوم | تصنيع وتوريد الزي الموحد والأزياء المهنية في السعودية",
  description: "الرعاية الصحية الطيران الضيافة الشركات التعليم التصنيع الأمن الصناعة المصنعية المحلات التجارية تصنيع التوريدات الخدمات إدارة برامج الزي الموحد تصميم مخص…",
  alternates: {
    canonical: 'https://uneom.com/ar/resources/events/',
    languages: {
      'en': 'https://uneom.com/resources/events/',
      'ar-SA': 'https://uneom.com/ar/resources/events/',
      'x-default': 'https://uneom.com/resources/events/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
