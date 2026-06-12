import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Material Innovations in Aviation Attire: The Science Behind Next-Generation Uniforms | UNEOM",
  description: "Material Innovations in Aviation Attire — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/material-innovations-aviation-attire/',
    languages: {
      'en': 'https://uneom.com/blog/material-innovations-aviation-attire/',
      'ar-SA': 'https://uneom.com/ar/blog/material-innovations-aviation-attire/',
      'x-default': 'https://uneom.com/blog/material-innovations-aviation-attire/',
    },
  },
  openGraph: {
    title: "Material Innovations in Aviation Attire: The Science Behind Next-Generation Uniforms | UNEOM",
    description: "Material Innovations in Aviation Attire — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/material-innovations-aviation-attire/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
