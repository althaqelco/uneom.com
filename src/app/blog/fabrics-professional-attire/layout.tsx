import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "The Complete Guide to Fabrics for Professional Attire: Performance, Durability, and Style | UNEOM",
  description: "The Complete Guide to Fabrics for Professional Attire — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/fabrics-professional-attire/',
    languages: {
      'en': 'https://uneom.com/blog/fabrics-professional-attire/',
      'ar-SA': 'https://uneom.com/ar/blog/fabrics-professional-attire/',
      'x-default': 'https://uneom.com/blog/fabrics-professional-attire/',
    },
  },
  openGraph: {
    title: "The Complete Guide to Fabrics for Professional Attire: Performance, Durability, and Style | UNEOM",
    description: "The Complete Guide to Fabrics for Professional Attire — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/fabrics-professional-attire/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
