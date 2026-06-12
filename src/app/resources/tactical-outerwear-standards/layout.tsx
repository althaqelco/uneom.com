import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Tactical Outerwear Standards Guide | UNEOM",
  description: "Outerwear standards for tactical and security wear: weather resistance, mobility, visibility and layering.",
  alternates: {
    canonical: 'https://uneom.com/resources/tactical-outerwear-standards/',
    languages: {
      'en': 'https://uneom.com/resources/tactical-outerwear-standards/',
      'ar-SA': 'https://uneom.com/ar/resources/tactical-outerwear-standards/',
      'x-default': 'https://uneom.com/resources/tactical-outerwear-standards/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
