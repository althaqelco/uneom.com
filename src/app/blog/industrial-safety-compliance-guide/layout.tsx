import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Industrial Safety Compliance Guide: Navigating PPE Standards and Regulatory Requirements | UNEOM",
  description: "Industrial Safety Compliance Guide — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/industrial-safety-compliance-guide/',
    languages: {
      'en': 'https://uneom.com/blog/industrial-safety-compliance-guide/',
      'ar-SA': 'https://uneom.com/ar/blog/industrial-safety-compliance-guide/',
      'x-default': 'https://uneom.com/blog/industrial-safety-compliance-guide/',
    },
  },
  openGraph: {
    title: "Industrial Safety Compliance Guide: Navigating PPE Standards and Regulatory Requirements | UNEOM",
    description: "Industrial Safety Compliance Guide — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/industrial-safety-compliance-guide/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
