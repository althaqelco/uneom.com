import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FaCalendar, FaUser } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/data/blogPosts.server';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface BlogPostPageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug, params.locale);
  const isArabic = params.locale === 'ar';
  
  if (!post) {
    return {
      title: isArabic ? 'المقال غير موجود | مدونة يونيوم' : 'Post Not Found | Uneom Blog',
      description: isArabic ? 'لم يتم العثور على المقال المطلوب.' : 'The requested blog post could not be found.'
    };
  }
  
  const authorName = typeof post.author === 'string' ? post.author : post.author.name;
  
  return {
    title: `${post.title} | ${isArabic ? 'مدونة يونيوم' : 'Uneom Blog'}`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | ${isArabic ? 'مدونة يونيوم' : 'Uneom Blog'}`,
      description: post.excerpt,
      url: `https://uneom.com/${params.locale}/blog/${post.slug}`,
      siteName: isArabic ? 'يونيوم' : 'Uneom',
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ] : undefined,
      locale: isArabic ? 'ar_SA' : 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [authorName],
      tags: post.tags,
    }
  };
}

export const dynamic = 'force-static';
export const revalidate = 3600; // revalidate every hour

// Generate static params for all blog posts
export async function generateStaticParams() {
  // Define only the blog post slugs that actually exist as markdown files
  const slugs = [
    'school-uniforms-academic-performance',
    'sustainable-school-uniforms-saudi',
    'sustainable-uniforms-2024-trends',
    'hospital-uniform-safety-standards',
    'airline-uniform-design-cultural-identity',
  ];

  // Create English and Arabic versions for each slug
  const params = [];
  for (const slug of slugs) {
    params.push({
      locale: 'en',
      slug: slug,
    });
    params.push({
      locale: 'ar',
      slug: slug,
    });
  }
  
  return params;
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
  const post = getBlogPostBySlug(params.slug, params.locale);
  const locale = params.locale;
  const isArabic = locale === 'ar';
  
  if (!post) {
    notFound();
  }
  
  const authorName = typeof post.author === 'string' ? post.author : post.author.name;
  const authorAvatar = typeof post.author === 'string' ? null : post.author.avatar;
  const authorBio = typeof post.author === 'string' ? null : post.author.bio;
  const authorTitle = typeof post.author === 'string' ? null : post.author.title;
  
  const relatedPosts = getRelatedPosts(post.slug, 3, params.locale);
  
  return (
    <main className="py-10" dir={isArabic ? 'rtl' : 'ltr'}>
      <Container>
        <div className="max-w-4xl mx-auto">
          <Link 
            href={`/${locale}/blog`} 
            className="text-blue-600 hover:text-blue-800 mb-6 inline-flex items-center"
          >
            {isArabic ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                العودة إلى المدونة
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Blog
              </>
            )}
          </Link>
          
          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
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
                          href={`/${locale}/blog/tag/${tag}`}
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
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                {authorAvatar && (
                  <div className={isArabic ? "ml-4" : "mr-4"}>
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
                  <h3 className="font-bold text-lg">{authorName}</h3>
                  {authorTitle && <p className="text-gray-600 text-sm mb-1">{authorTitle}</p>}
                  {authorBio && <p className="text-gray-600">{authorBio}</p>}
                </div>
              </div>
            </div>
          </article>
          
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">{isArabic ? 'مقالات ذات صلة' : 'Related Articles'}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => {
                  const relatedAuthorName = typeof relatedPost.author === 'string' 
                    ? relatedPost.author 
                    : relatedPost.author.name;
                  
                  return (
                    <div key={relatedPost.slug} className="flex flex-col">
                      {relatedPost.featuredImage && (
                        <Link href={`/${locale}/blog/${relatedPost.slug}`} className="block relative aspect-video overflow-hidden rounded-lg mb-4">
                          <Image
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform hover:scale-105 duration-300"
                          />
                        </Link>
                      )}
                      
                      <div className="mb-2 text-sm text-gray-500">
                        {formatDate(relatedPost.date)} • {isArabic ? 'بواسطة' : 'By'} {relatedAuthorName}
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 hover:text-blue-600 transition-colors">
                        <Link href={`/${locale}/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{relatedPost.excerpt}</p>
                      
                      <Link 
                        href={`/${locale}/blog/${relatedPost.slug}`}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center mt-auto"
                      >
                        {isArabic ? (
                          <>
                            قراءة المزيد
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        ) : (
                          <>
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="mt-16 text-center">
            <Link 
              href={`/${locale}/blog`}
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-md font-medium transition-colors"
            >
              {isArabic ? 'عرض جميع المقالات' : 'View All Articles'}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
} 