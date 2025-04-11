import React from 'react';
import { redirect } from 'next/navigation';
import { Locale, defaultLocale } from '@/lib/i18n/config';

// Define props for the page component
interface LocaleBlogPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

// Required for static site generation with output: export config
export function generateStaticParams() {
  const slugs = [
    'uniform-trends-2023',
    'sustainable-fabrics',
    'healthcare-uniforms-innovation',
    'corporate-uniform-guide',
    'hospitality-uniform-best-practices',
    'security-uniforms-2023',
    'education-uniforms-guide',
    'industrial-workwear-innovations',
    'uniform-maintenance-tips',
    'custom-uniform-design-process',
    'sustainable-retail-uniforms',
    'retail-uniform-impact',
    'evolution-of-retail-uniforms-saudi-arabia',
    'luxury-retail-uniforms'
  ];

  const locales = ['en', 'ar'];
  
  return locales.flatMap(locale => 
    slugs.map(slug => ({
      locale,
      slug
    }))
  );
}

// This page handles /[locale]/blog/[slug] paths and redirects to the proper blog post
export default function LocaleBlogPage({ params }: LocaleBlogPageProps) {
  const { locale, slug } = params;
  
  // If it's the default locale (English), redirect to /blog/[slug]
  if (locale === defaultLocale) {
    redirect(`/blog/${slug}`);
  }
  
  // If it's Arabic or any other locale, redirect to /ar/blog/[slug]
  redirect(`/${locale}/blog/${slug}`);
} 