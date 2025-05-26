import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import MainHeading from '@/components/ui/MainHeading';
import SmartHeading from '@/components/ui/SmartHeading';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/data/blogPosts.server';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import Markdown from 'react-markdown';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug, 'ar');
  
  if (!post) {
    return {
      title: 'المقال غير موجود | مدونة يونيوم',
      description: 'لم يتم العثور على المقال المطلوب.'
    };
  }
  
  const authorName = typeof post.author === 'string' ? post.author : post.author.name;
  
  return {
    title: `${post.title} | مدونة يونيوم`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | مدونة يونيوم`,
      description: post.excerpt,
      url: `https://uneom.com/ar/blog/${post.slug}/`,
      siteName: 'يونيوم',
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : undefined,
      locale: 'ar_SA',
      type: 'article',
      publishedTime: post.date,
      authors: [authorName],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://uneom.com/ar/blog/${post.slug}/`,
      languages: {
        'en-SA': `https://uneom.com/blog/${post.slug}/`,
        'ar-SA': `https://uneom.com/ar/blog/${post.slug}/`,
        'x-default': `https://uneom.com/blog/${post.slug}/`
      }
    }
  };
}

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Define all possible blog post slugs for the Arabic version
  return [
    { slug: 'school-uniforms-academic-performance' },
    { slug: 'sustainable-uniforms-2024-trends' },
    { slug: 'sustainable-school-uniforms-saudi' },
    { slug: 'retail-uniform-selection-guide' },
    { slug: 'restaurant-uniform-trends' },
    { slug: 'hospital-uniform-safety-standards' },
    { slug: 'industrial-protective-clothing-advances' },
    { slug: 'security-uniform-safety-standards' },
    { slug: 'corporate-uniforms-brand-perception' },
    { slug: 'fabrics-professional-attire' },
    { slug: 'future-aviation-uniforms-gcc' },
    { slug: 'material-innovations-aviation-attire' },
    { slug: 'airline-uniform-design-cultural-identity' },
    // Placeholder posts
    { slug: 'placeholder1' },
    { slug: 'placeholder2' },
    { slug: 'placeholder-corporate1' },
    { slug: 'placeholder-corporate2' },
    { slug: 'placeholder-aviation1' },
    { slug: 'placeholder-aviation2' },
    // Add any other Arabic blog post slugs here
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
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug, 'ar');
  
  if (!post) {
    notFound();
  }
  
  const authorName = typeof post.author === 'string' ? post.author : post.author.name;
  const authorAvatar = typeof post.author === 'string' ? null : post.author.avatar;
  const authorBio = typeof post.author === 'string' ? null : post.author.bio;
  const authorTitle = typeof post.author === 'string' ? null : post.author.title;
  
  const relatedPosts = getRelatedPosts(post.slug, 3, 'ar');
  
  return (
    <main className="py-10" dir="rtl">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/ar/blog" 
            className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            العودة إلى المدونة
          </Link>
          
          <article>
            <header className="mb-8">
              <MainHeading>{post.title}</MainHeading>
              
              <div className="flex items-center text-gray-600 mb-6">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime}</span>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <Link 
                          key={tag}
                          href={`/ar/blog/tag/${tag}`}
                          className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {post.featuredImage && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </header>
            
            <div className="prose prose-lg max-w-none">
              <Markdown>{post.content}</Markdown>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                {authorAvatar && (
                  <div className="ml-4">
                    <Image
                      src={authorAvatar}
                      alt={authorName}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                )}
                
                <div>
                  <SmartHeading level={3} className="font-bold text-lg">{authorName}</SmartHeading>
                  {authorTitle && <p className="text-gray-600 text-sm mb-1">{authorTitle}</p>}
                  {authorBio && <p className="text-gray-600">{authorBio}</p>}
                </div>
              </div>
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <SmartHeading level={2} className="text-2xl font-bold mb-8">مقالات ذات صلة</SmartHeading>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => {
                  const relatedAuthorName = typeof relatedPost.author === 'string' 
                    ? relatedPost.author 
                    : relatedPost.author.name;
                  
                  return (
                    <div key={relatedPost.slug} className="flex flex-col">
                      {relatedPost.featuredImage && (
                        <Link href={`/ar/blog/${relatedPost.slug}`} className="block relative aspect-video overflow-hidden rounded-lg mb-4">
                          <Image
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </Link>
                      )}
                      
                      <div className="mb-2 text-sm text-gray-500">
                        {formatDate(relatedPost.date)} • بواسطة {relatedAuthorName}
                      </div>
                      
                      <SmartHeading level={3} className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors">
                        <Link href={`/ar/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </SmartHeading>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{relatedPost.excerpt}</p>
                      
                      <Link 
                        href={`/ar/blog/${relatedPost.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center mt-auto"
                      >
                        قراءة المزيد
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link 
              href="/ar/blog"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
            >
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
} 