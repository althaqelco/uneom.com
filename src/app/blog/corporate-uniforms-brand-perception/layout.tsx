import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Corporate Uniforms and Brand Perception: The Psychology of Professional Attire | UNEOM",
  description: "Corporate Uniforms and Brand Perception — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/corporate-uniforms-brand-perception/',
    languages: {
      'en': 'https://uneom.com/blog/corporate-uniforms-brand-perception/',
      'ar-SA': 'https://uneom.com/ar/blog/corporate-uniforms-brand-perception/',
      'x-default': 'https://uneom.com/blog/corporate-uniforms-brand-perception/',
    },
  },
  openGraph: {
    title: "Corporate Uniforms and Brand Perception: The Psychology of Professional Attire | UNEOM",
    description: "Corporate Uniforms and Brand Perception — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/corporate-uniforms-brand-perception/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
