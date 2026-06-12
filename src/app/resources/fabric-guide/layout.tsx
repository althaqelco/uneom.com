import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Complete Fabric Guide for Professional Uniforms | UNEOM Resources",
  description: "Comprehensive guide to choosing the right fabrics for professional uniforms. Learn about cotton, polyester, blends, and specialty fabrics for healthcare, corporate, and industrial use.",
  alternates: {
    canonical: 'https://uneom.com/resources/fabric-guide/',
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
