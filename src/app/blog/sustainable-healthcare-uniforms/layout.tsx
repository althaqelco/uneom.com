import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Sustainable Healthcare Uniforms: Eco-Friendly Medical Attire | UNEOM Blog",
  description: "Discover how sustainable healthcare uniforms are transforming the medical industry. Learn about eco-friendly fabrics, sustainable manufacturing, and environmental benefits in Saudi Arabia.",
  alternates: {
    canonical: 'https://uneom.com/blog/sustainable-healthcare-uniforms/',
    languages: {
      'en': 'https://uneom.com/blog/sustainable-healthcare-uniforms/',
      'ar-SA': 'https://uneom.com/ar/blog/sustainable-healthcare-uniforms/',
      'x-default': 'https://uneom.com/blog/sustainable-healthcare-uniforms/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
