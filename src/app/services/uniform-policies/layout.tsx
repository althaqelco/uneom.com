import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "Corporate Uniform Policy Development | UNEOM",
  description: "We help Saudi organisations design practical uniform policies: dress codes, grooming standards, compliance and rollout communication.",
  alternates: {
    canonical: 'https://uneom.com/services/uniform-policies/',
    languages: {
      'en': 'https://uneom.com/services/uniform-policies/',
      'ar-SA': 'https://uneom.com/ar/services/uniform-policies/',
      'x-default': 'https://uneom.com/services/uniform-policies/',
    },
  },
  openGraph: {
    title: "Corporate Uniform Policy Development | UNEOM",
    description: "We help Saudi organisations design practical uniform policies: dress codes, grooming standards, compliance and rollout communication.",
    url: 'https://uneom.com/services/uniform-policies/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
