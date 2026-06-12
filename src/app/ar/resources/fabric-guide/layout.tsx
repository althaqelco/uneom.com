import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "دليل الأقمشة الشامل للأزياء المهنية | موارد يونيوم",
  description: "دليل شامل لاختيار الأقمشة المناسبة للأزياء المهنية. تعرف على القطن والبوليستر والخلطات والأقمشة المتخصصة للرعاية الصحية والشركات والاستخدام الصناعي.",
  alternates: {
    canonical: 'https://uneom.com/ar/resources/fabric-guide/',
    languages: {
      'en': 'https://uneom.com/resources/fabric-guide/',
      'ar-SA': 'https://uneom.com/ar/resources/fabric-guide/',
      'x-default': 'https://uneom.com/resources/fabric-guide/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
