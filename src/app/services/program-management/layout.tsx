import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "Managed Uniform Programs for Companies | UNEOM",
  description: "End-to-end uniform program management in Saudi Arabia: forecasting, replenishment, employee portals and reporting under one contract.",
  alternates: {
    canonical: 'https://uneom.com/services/program-management/',
    languages: {
      'en': 'https://uneom.com/services/program-management/',
      'ar-SA': 'https://uneom.com/ar/services/program-management/',
      'x-default': 'https://uneom.com/services/program-management/',
    },
  },
  openGraph: {
    title: "Managed Uniform Programs for Companies | UNEOM",
    description: "End-to-end uniform program management in Saudi Arabia: forecasting, replenishment, employee portals and reporting under one contract.",
    url: 'https://uneom.com/services/program-management/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
