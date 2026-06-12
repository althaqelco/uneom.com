import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Procurement Guide for Saudi Companies | UNEOM",
  description: "Step-by-step uniform procurement for Saudi organisations: specs, tendering, sampling, quality control and supplier evaluation.",
  alternates: {
    canonical: 'https://uneom.com/resources/procurement-guide/',
    languages: {
      'en': 'https://uneom.com/resources/procurement-guide/',
      'ar-SA': 'https://uneom.com/ar/resources/procurement-guide/',
      'x-default': 'https://uneom.com/resources/procurement-guide/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
