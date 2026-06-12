import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Case Studies & Client Results | UNEOM",
  description: "Real uniform program results from Saudi enterprises: scope, rollout and measurable outcomes across healthcare, hospitality and industry.",
  alternates: {
    canonical: 'https://uneom.com/resources/case-studies/',
    languages: {
      'en': 'https://uneom.com/resources/case-studies/',
      'ar-SA': 'https://uneom.com/ar/resources/case-studies/',
      'x-default': 'https://uneom.com/resources/case-studies/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
