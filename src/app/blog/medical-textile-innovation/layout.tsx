import type { Metadata } from 'next';

// Metadata carrier generated from a full-site crawl audit. The page in
// this segment either could not export metadata ('use client') or lacked
// canonical/hreflang. Page-level metadata (when present) still wins for
// title/description; alternates apply from here.
export const metadata: Metadata = {
  title: "Medical Textile Innovation: Revolutionizing Healthcare Uniforms in Saudi Arabia | UNEOM Blog",
  description: "Explore the latest innovations in medical textiles and how they are transforming healthcare uniforms in Saudi Arabia. From antimicrobial fabrics to smart textiles, discover the future of medical apparel.",
  alternates: {
    canonical: 'https://uneom.com/blog/medical-textile-innovation/',
    languages: {
      'en': 'https://uneom.com/blog/medical-textile-innovation/',
      'ar-SA': 'https://uneom.com/ar/blog/medical-textile-innovation/',
      'x-default': 'https://uneom.com/blog/medical-textile-innovation/',
    },
  },
};

export default function SegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
