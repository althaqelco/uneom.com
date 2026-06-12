import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Industry Events in Saudi Arabia | UNEOM",
  description: "Upcoming exhibitions, conferences and workshops for the Saudi uniform and workwear industry \u2014 dates, venues and registration.",
  alternates: {
    canonical: 'https://uneom.com/resources/events/',
    languages: {
      'en': 'https://uneom.com/resources/events/',
      'ar-SA': 'https://uneom.com/ar/resources/events/',
      'x-default': 'https://uneom.com/resources/events/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
