import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Corporate Security Branding: Building Trust Through Professional Image and Strategic Presence | UNEOM",
  description: "Corporate Security Branding — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/corporate-security-branding/',
    languages: {
      'en': 'https://uneom.com/blog/corporate-security-branding/',
      'ar-SA': 'https://uneom.com/ar/blog/corporate-security-branding/',
      'x-default': 'https://uneom.com/blog/corporate-security-branding/',
    },
  },
  openGraph: {
    title: "Corporate Security Branding: Building Trust Through Professional Image and Strategic Presence | UNEOM",
    description: "Corporate Security Branding — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/corporate-security-branding/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
