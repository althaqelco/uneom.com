import { getBlogPostBySlug, getRelatedPosts } from '@/lib/data/blogPosts';
import ClientPage from './ClientPage';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

// This generates all possible static paths during build time for Arabic blog
export async function generateStaticParams() {
  // Define all possible blog post slugs for the Arabic version
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
  ];
}

export default function BlogPostPage({ params }: PageProps) {
  const locale = 'ar';
  
  // Get the blog post
  const blogPost = getBlogPostBySlug(params.slug, locale);
  
  // Handle case when blog post is not found
  if (!blogPost) {
    return notFound();
  }
  
  // Get related posts
  const relatedPosts = getRelatedPosts(params.slug, locale, 3);
  
  return <ClientPage blogPost={blogPost} relatedPosts={relatedPosts} locale={locale} />;
} 