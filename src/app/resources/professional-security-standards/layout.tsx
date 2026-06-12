import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Professional Security Uniform Standards | UNEOM",
  description: "Security uniform standards for Saudi facilities: appearance codes, badges, fabrics and compliance requirements.",
  alternates: {
    canonical: 'https://uneom.com/resources/professional-security-standards/',
    languages: {
      'en': 'https://uneom.com/resources/professional-security-standards/',
      'ar-SA': 'https://uneom.com/ar/resources/professional-security-standards/',
      'x-default': 'https://uneom.com/resources/professional-security-standards/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
