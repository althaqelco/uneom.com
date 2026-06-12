import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Beauty Chain Standardization Case Study | UNEOM Salon Uniforms | Saudi Arabia",
  description: "How UNEOM helped a leading Saudi beauty salon chain standardize staff uniforms across 25+ locations, improving brand consistency and professional appearance while accommodating Saudi cultural requirements.",
  alternates: {
    canonical: 'https://uneom.com/case-studies/beauty-chain-standardization/',
    languages: {
      'en': 'https://uneom.com/case-studies/beauty-chain-standardization/',
      'ar-SA': 'https://uneom.com/ar/case-studies/beauty-chain-standardization/',
      'x-default': 'https://uneom.com/case-studies/beauty-chain-standardization/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
