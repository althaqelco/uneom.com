import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Advanced Fabrics for Security Uniforms: Next-Generation Protection and Performance | UNEOM",
  description: "Advanced Fabrics for Security Uniforms — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/advanced-fabrics-security-uniforms/',
    languages: {
      'en': 'https://uneom.com/blog/advanced-fabrics-security-uniforms/',
      'ar-SA': 'https://uneom.com/ar/blog/advanced-fabrics-security-uniforms/',
      'x-default': 'https://uneom.com/blog/advanced-fabrics-security-uniforms/',
    },
  },
  openGraph: {
    title: "Advanced Fabrics for Security Uniforms: Next-Generation Protection and Performance | UNEOM",
    description: "Advanced Fabrics for Security Uniforms — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/advanced-fabrics-security-uniforms/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
