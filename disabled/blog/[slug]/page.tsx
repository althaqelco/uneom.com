import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug } from '@/lib/data/blogPosts.server';

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

// Format date function
function formatBlogDate(dateString: string) {
  try {
    return format(new Date(dateString), 'MMMM dd, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

// The page component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!slug) {
    return notFound();
  }
  
  // Get the blog post data
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return notFound();
  }
  
  // Return the blog post content directly
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="mb-8">
            <nav className="flex text-sm mb-6">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-neutral-600 hover:text-primary-700">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <Link href="/blog" className="text-neutral-600 hover:text-primary-700">
                    Blog
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <span className="text-neutral-900">{post.title.substring(0, 20)}...</span>
                </li>
              </ol>
            </nav>

            <div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag)}`