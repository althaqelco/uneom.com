import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Hospital Uniform Safety Standards: Comprehensive Healthcare Compliance Guide | UNEOM",
  description: "Hospital Uniform Safety Standards — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/hospital-uniform-safety-standards/',
    languages: {
      'en': 'https://uneom.com/blog/hospital-uniform-safety-standards/',
      'ar-SA': 'https://uneom.com/ar/blog/hospital-uniform-safety-standards/',
      'x-default': 'https://uneom.com/blog/hospital-uniform-safety-standards/',
    },
  },
  openGraph: {
    title: "Hospital Uniform Safety Standards: Comprehensive Healthcare Compliance Guide | UNEOM",
    description: "Hospital Uniform Safety Standards — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/hospital-uniform-safety-standards/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
