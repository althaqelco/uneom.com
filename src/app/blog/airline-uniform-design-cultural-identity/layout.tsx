import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Airline Uniform Design and Cultural Identity: Bridging Heritage and Modern Aviation | UNEOM",
  description: "Airline Uniform Design and Cultural Identity — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/airline-uniform-design-cultural-identity/',
    languages: {
      'en': 'https://uneom.com/blog/airline-uniform-design-cultural-identity/',
      'ar-SA': 'https://uneom.com/ar/blog/airline-uniform-design-cultural-identity/',
      'x-default': 'https://uneom.com/blog/airline-uniform-design-cultural-identity/',
    },
  },
  openGraph: {
    title: "Airline Uniform Design and Cultural Identity: Bridging Heritage and Modern Aviation | UNEOM",
    description: "Airline Uniform Design and Cultural Identity — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/airline-uniform-design-cultural-identity/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
