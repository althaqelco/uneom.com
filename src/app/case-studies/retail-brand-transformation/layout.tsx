import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Retail Brand Transformation Case Study | UNEOM",
  description: "How a Saudi retail chain unified 1,200 staff under one uniform identity \u2014 design, rollout and brand-impact results.",
  alternates: {
    canonical: 'https://uneom.com/case-studies/retail-brand-transformation/',
    languages: {
      'en': 'https://uneom.com/case-studies/retail-brand-transformation/',
      'ar-SA': 'https://uneom.com/ar/case-studies/retail-brand-transformation/',
      'x-default': 'https://uneom.com/case-studies/retail-brand-transformation/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
