import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "Bulk Uniform Ordering in Saudi Arabia | UNEOM",
  description: "Order uniforms in bulk for your Saudi organisation: tiered volume pricing, dedicated account manager, quality control and nationwide delivery.",
  alternates: {
    canonical: 'https://uneom.com/services/bulk-ordering/',
    languages: {
      'en': 'https://uneom.com/services/bulk-ordering/',
      'ar-SA': 'https://uneom.com/ar/services/bulk-ordering/',
      'x-default': 'https://uneom.com/services/bulk-ordering/',
    },
  },
  openGraph: {
    title: "Bulk Uniform Ordering in Saudi Arabia | UNEOM",
    description: "Order uniforms in bulk for your Saudi organisation: tiered volume pricing, dedicated account manager, quality control and nationwide delivery.",
    url: 'https://uneom.com/services/bulk-ordering/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
