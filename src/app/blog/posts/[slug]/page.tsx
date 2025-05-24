import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug } from '../../lib/data/blogPosts.server';
import { Metadata } from 'next';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export async function generateMetadata(
  { params }: { 
    params: { slug: string } 
  }
): Promise<Metadata> {
  // You might fetch data here for dynamic metadata
  // const data = await fetchData(params.slug);
  
  if (!params || !params.slug) {
    return {
      title: 'Blog Post | UNEOM Saudi Arabia',
      description: 'UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.'
    };
  }
  
  // Get the page name from the URL parameter
  const pageName = params.slug;
  const formattedPageName = pageName
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join(' ');
    
  return {
    title: `${formattedPageName} | UNEOM Saudi Arabia`,
    description: `Explore our premium ${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.`,
    keywords: [
      pageName.toLowerCase(),
      'uniform',
      'professional clothing',
      'UNEOM',
      'Saudi Arabia',
      'workwear',
      'corporate attire'
    ],
    openGraph: {
      title: `${formattedPageName} | UNEOM Saudi Arabia`,
      description: `Explore our premium ${formattedPageName} collection. UNEOM provides high-quality professional uniforms and workwear solutions tailored for Saudi Arabian businesses and institutions.`,
      url: `https://uneom.com/shop/${pageName}`,
      siteName: 'UNEOM',
      images: [
        {
          url: `https://uneom.com/images/products/${pageName.replace(/\//g, '-')}.webp`,
          width: 1200,
          height: 630,
          alt: `${formattedPageName} - UNEOM Saudi Arabia`
        }
      ],
      locale: 'en_US',
      type: 'website'
    }
  };
}


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
  if (!params || !params.slug) {
    return notFound();
  }
  
  const { slug } = params;
  
  // Get the blog post data
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return notFound();
  }
  
  // Return the blog post content directly
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

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
                      href={`/blog/tag/${encodeURIComponent(tag)}`}
                      className="text-xs uppercase tracking-wide bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-neutral-600 mb-8">
                <div className="flex items-center">
                  <FaCalendar className="text-primary-600 mr-2" />
                  <span>{formatBlogDate(post.date)}</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <FaUser className="text-primary-600 mr-2" />
                  <span>
                    {typeof post.author === 'object' ? post.author.name : post.author}
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-neutral-600 max-w-3xl">
                {post.excerpt}
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg">
            {post.featuredImage && (
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 border border-neutral-100">
                <article className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags Bottom */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="font-bold mr-2">Tags:</span>
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="space-y-6 sticky top-8">
                {/* Author Box */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-l-4 border-primary-600 pl-3">Author</h3>
                  <div className="flex items-center">
                    {typeof post.author === 'object' && post.author.avatar && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <Image
                          src={post.author.avatar}
                          alt={typeof post.author === 'object' ? post.author.name : 'Author'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-lg">
                        {typeof post.author === 'object' ? post.author.name : post.author}
                      </h4>
                      <p className="text-sm text-neutral-600">UNEOM Expert Writer</p>
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-l-4 border-primary-600 pl-3">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
