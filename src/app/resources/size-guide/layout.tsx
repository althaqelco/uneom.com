import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Size Guide for Saudi Workwear | UNEOM",
  description: "Complete sizing charts for medical scrubs, corporate wear and industrial uniforms \u2014 measure once, order the right fit for your whole team.",
  alternates: {
    canonical: 'https://uneom.com/resources/size-guide/',
    languages: {
      'en': 'https://uneom.com/resources/size-guide/',
      'ar-SA': 'https://uneom.com/ar/resources/size-guide/',
      'x-default': 'https://uneom.com/resources/size-guide/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
