import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "Uniform Fabric Selection Service | UNEOM",
  description: "Expert fabric selection for Saudi workwear: breathable, antimicrobial and flame-resistant options matched to your industry and climate.",
  alternates: {
    canonical: 'https://uneom.com/services/fabric-selection/',
    languages: {
      'en': 'https://uneom.com/services/fabric-selection/',
      'ar-SA': 'https://uneom.com/ar/services/fabric-selection/',
      'x-default': 'https://uneom.com/services/fabric-selection/',
    },
  },
  openGraph: {
    title: "Uniform Fabric Selection Service | UNEOM",
    description: "Expert fabric selection for Saudi workwear: breathable, antimicrobial and flame-resistant options matched to your industry and climate.",
    url: 'https://uneom.com/services/fabric-selection/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
