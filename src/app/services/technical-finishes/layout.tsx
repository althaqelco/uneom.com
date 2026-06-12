import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "Technical Fabric Finishes for Uniforms | UNEOM",
  description: "Advanced uniform finishes in Saudi Arabia: antimicrobial, water-repellent, anti-static and UV-protective treatments for demanding workplaces.",
  alternates: {
    canonical: 'https://uneom.com/services/technical-finishes/',
    languages: {
      'en': 'https://uneom.com/services/technical-finishes/',
      'ar-SA': 'https://uneom.com/ar/services/technical-finishes/',
      'x-default': 'https://uneom.com/services/technical-finishes/',
    },
  },
  openGraph: {
    title: "Technical Fabric Finishes for Uniforms | UNEOM",
    description: "Advanced uniform finishes in Saudi Arabia: antimicrobial, water-repellent, anti-static and UV-protective treatments for demanding workplaces.",
    url: 'https://uneom.com/services/technical-finishes/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
