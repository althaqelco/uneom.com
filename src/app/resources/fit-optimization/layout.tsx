import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Fit Optimization Guide | UNEOM",
  description: "Practical fit-optimization techniques for company uniforms: measurement workflows, size-run planning and exchange-rate reduction.",
  alternates: {
    canonical: 'https://uneom.com/resources/fit-optimization/',
    languages: {
      'en': 'https://uneom.com/resources/fit-optimization/',
      'ar-SA': 'https://uneom.com/ar/resources/fit-optimization/',
      'x-default': 'https://uneom.com/resources/fit-optimization/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
