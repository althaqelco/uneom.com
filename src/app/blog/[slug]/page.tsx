import React from 'react';
import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Define all possible blog post slugs for the English version
  return [
    { slug: 'uniform-trends-2023' },
    { slug: 'sustainable-fabrics' },
    { slug: 'healthcare-uniforms-innovation' },
    { slug: 'corporate-identity-uniforms' },
    { slug: 'uniform-maintenance-tips' },
    { slug: 'aviation-uniform-design' },
    { slug: 'hotel-staff-uniforms' },
    { slug: 'security-uniform-standards' },
    { slug: 'uniform-customization' },
    { slug: 'medical-scrubs-evolution' },
    { slug: 'corporate-uniform-employee-satisfaction' },
    { slug: 'industrial-protective-clothing-advances' },
    { slug: 'sustainable-uniforms-2024-trends' },
    // Add the missing blog slugs that caused the errors
    { slug: 'evolving-trends-gulf-airline-uniforms' },
    { slug: 'uniforms-airline-brand-identity' },
    { slug: 'islamic-compliant-aviation-attire' },
    { slug: 'vision-2030-reshaping-dress-codes' },
    { slug: 'sustainable-uniform-solutions' },
    { slug: 'advanced-fabrics-healthcare-uniforms' },
    { slug: 'cultural-identity-saudi-school-uniforms' },
    { slug: 'school-uniforms-academic-performance' },
    { slug: 'sustainable-school-uniforms-saudi' },
    { slug: 'industrial-safety-compliance-guide' },
  ];
}

// The page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!slug) {
    return notFound();
  }
  
  return <ClientPage slug={slug} />;
}
