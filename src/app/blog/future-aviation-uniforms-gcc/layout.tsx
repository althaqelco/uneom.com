import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "The Future of Aviation Uniforms in the GCC: Innovations and Trends for 2025-2030 | UNEOM",
  description: "The Future of Aviation Uniforms in the GCC — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/future-aviation-uniforms-gcc/',
    languages: {
      'en': 'https://uneom.com/blog/future-aviation-uniforms-gcc/',
      'ar-SA': 'https://uneom.com/ar/blog/future-aviation-uniforms-gcc/',
      'x-default': 'https://uneom.com/blog/future-aviation-uniforms-gcc/',
    },
  },
  openGraph: {
    title: "The Future of Aviation Uniforms in the GCC: Innovations and Trends for 2025-2030 | UNEOM",
    description: "The Future of Aviation Uniforms in the GCC — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/future-aviation-uniforms-gcc/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
