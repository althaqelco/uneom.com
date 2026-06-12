import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "The Psychology of Security Uniforms: Authority, Deterrence, and Professional Presence | UNEOM",
  description: "The Psychology of Security Uniforms — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/security-uniform-psychology/',
    languages: {
      'en': 'https://uneom.com/blog/security-uniform-psychology/',
      'ar-SA': 'https://uneom.com/ar/blog/security-uniform-psychology/',
      'x-default': 'https://uneom.com/blog/security-uniform-psychology/',
    },
  },
  openGraph: {
    title: "The Psychology of Security Uniforms: Authority, Deterrence, and Professional Presence | UNEOM",
    description: "The Psychology of Security Uniforms — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/security-uniform-psychology/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
