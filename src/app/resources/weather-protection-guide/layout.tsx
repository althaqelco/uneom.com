import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Weather Protection Workwear Guide | UNEOM",
  description: "Protecting outdoor teams in Saudi climates: heat, sun, sand and rare rain \u2014 fabric choices and layering strategies.",
  alternates: {
    canonical: 'https://uneom.com/resources/weather-protection-guide/',
    languages: {
      'en': 'https://uneom.com/resources/weather-protection-guide/',
      'ar-SA': 'https://uneom.com/ar/resources/weather-protection-guide/',
      'x-default': 'https://uneom.com/resources/weather-protection-guide/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
