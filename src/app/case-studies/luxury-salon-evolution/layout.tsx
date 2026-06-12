import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Luxury Salon Evolution Case Study | Premium Spa Uniforms | UNEOM Saudi Arabia",
  description: "How UNEOM helped transform a high-end Riyadh salon with bespoke staff uniforms that elevated brand perception and staff professionalism while maintaining Saudi cultural standards.",
  alternates: {
    canonical: 'https://uneom.com/case-studies/luxury-salon-evolution/',
    languages: {
      'en': 'https://uneom.com/case-studies/luxury-salon-evolution/',
      'ar-SA': 'https://uneom.com/ar/case-studies/luxury-salon-evolution/',
      'x-default': 'https://uneom.com/case-studies/luxury-salon-evolution/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
