import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Lightweight Tactical Gear Guide | UNEOM",
  description: "Choosing lightweight tactical uniforms for Saudi conditions: fabrics, ventilation, durability and load distribution.",
  alternates: {
    canonical: 'https://uneom.com/resources/lightweight-tactical-guide/',
    languages: {
      'en': 'https://uneom.com/resources/lightweight-tactical-guide/',
      'ar-SA': 'https://uneom.com/ar/resources/lightweight-tactical-guide/',
      'x-default': 'https://uneom.com/resources/lightweight-tactical-guide/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
