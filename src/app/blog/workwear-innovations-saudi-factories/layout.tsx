import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Workwear Innovations for Saudi Factories: Enhancing Safety & Productivity | UNEOM",
  description: "Explore cutting-edge workwear innovations transforming Saudi Arabian factories. Learn about smart fabrics, ergonomic designs, and safety-enhancing technologies for industrial uniforms.",
  alternates: {
    canonical: 'https://uneom.com/blog/workwear-innovations-saudi-factories/',
    languages: {
      'en': 'https://uneom.com/blog/workwear-innovations-saudi-factories/',
      'ar-SA': 'https://uneom.com/ar/blog/workwear-innovations-saudi-factories/',
      'x-default': 'https://uneom.com/blog/workwear-innovations-saudi-factories/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
