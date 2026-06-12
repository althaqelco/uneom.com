import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Tactical Equipment Standards Guide | UNEOM",
  description: "Tactical equipment standards for professional teams in Saudi Arabia: vests, pouches, materials and care.",
  alternates: {
    canonical: 'https://uneom.com/resources/tactical-equipment-standards/',
    languages: {
      'en': 'https://uneom.com/resources/tactical-equipment-standards/',
      'ar-SA': 'https://uneom.com/ar/resources/tactical-equipment-standards/',
      'x-default': 'https://uneom.com/resources/tactical-equipment-standards/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
