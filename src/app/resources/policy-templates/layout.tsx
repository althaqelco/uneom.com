import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Uniform Policy Templates | Free Downloads | UNEOM Resources",
  description: "Download free uniform policy templates for healthcare, corporate, hospitality, and industrial sectors. Comprehensive guidelines and implementation checklists for Saudi Arabian organizations.",
  alternates: {
    canonical: 'https://uneom.com/resources/policy-templates/',
    languages: {
      'en': 'https://uneom.com/resources/policy-templates/',
      'ar-SA': 'https://uneom.com/ar/resources/policy-templates/',
      'x-default': 'https://uneom.com/resources/policy-templates/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
