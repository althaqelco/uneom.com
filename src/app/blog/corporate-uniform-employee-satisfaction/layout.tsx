import type { Metadata } from 'next';

// Metadata carrier for a client-component blog post ('use client' pages
// cannot export metadata; without this layout the post shipped the root
// homepage title). Title is the article's own H1.
export const metadata: Metadata = {
  title: "Corporate Uniform Employee Satisfaction: Building Engagement Through Thoughtful Design and Implementation | UNEOM",
  description: "Corporate Uniform Employee Satisfaction — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
  alternates: {
    canonical: 'https://uneom.com/blog/corporate-uniform-employee-satisfaction/',
    languages: {
      'en': 'https://uneom.com/blog/corporate-uniform-employee-satisfaction/',
      'ar-SA': 'https://uneom.com/ar/blog/corporate-uniform-employee-satisfaction/',
      'x-default': 'https://uneom.com/blog/corporate-uniform-employee-satisfaction/',
    },
  },
  openGraph: {
    title: "Corporate Uniform Employee Satisfaction: Building Engagement Through Thoughtful Design and Implementation | UNEOM",
    description: "Corporate Uniform Employee Satisfaction — an expert guide from UNEOM, Saudi Arabia's professional uniform manufacturer.",
    url: 'https://uneom.com/blog/corporate-uniform-employee-satisfaction/',
    siteName: 'UNEOM',
    locale: 'en',
    type: 'article',
  },
};

export default function PostSegmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
