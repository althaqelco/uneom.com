import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Security Equipment Standards Guide | UNEOM",
  description: "Equipment and accessory standards for security teams: belts, holsters, comms carriers and uniform integration.",
  alternates: {
    canonical: 'https://uneom.com/resources/security-equipment-standards/',
    languages: {
      'en': 'https://uneom.com/resources/security-equipment-standards/',
      'ar-SA': 'https://uneom.com/ar/resources/security-equipment-standards/',
      'x-default': 'https://uneom.com/resources/security-equipment-standards/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
