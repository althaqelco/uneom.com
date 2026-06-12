import type { Metadata } from 'next';

// Server layout exists ONLY to carry metadata: page.tsx in this segment is
// a client component ('use client') and cannot export metadata itself —
// without this file the page shipped the root layout's homepage title.
export const metadata: Metadata = {
  title: "On-Site Uniform Measurement Services | UNEOM",
  description: "Professional on-site measurement for company uniforms across Saudi Arabia \u2014 accurate sizing for every employee, fewer exchanges, faster rollout.",
  alternates: {
    canonical: 'https://uneom.com/services/measurement-services/',
    languages: {
      'en': 'https://uneom.com/services/measurement-services/',
      'ar-SA': 'https://uneom.com/ar/services/measurement-services/',
      'x-default': 'https://uneom.com/services/measurement-services/',
    },
  },
  openGraph: {
    title: "On-Site Uniform Measurement Services | UNEOM",
    description: "Professional on-site measurement for company uniforms across Saudi Arabia \u2014 accurate sizing for every employee, fewer exchanges, faster rollout.",
    url: 'https://uneom.com/services/measurement-services/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'website',
  },
};

export default function ServiceSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
