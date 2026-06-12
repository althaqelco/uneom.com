import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "5-Star Hotel Spa Uniform Case Study | Luxury Spa Workwear | UNEOM Saudi Arabia",
  description: "How UNEOM transformed a prestigious 5-star hotel spa in Riyadh with custom luxury uniforms that elevated staff confidence, guest experiences, and brand identity",
  alternates: {
    canonical: 'https://uneom.com/case-studies/5-star-hotel-spa/',
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
