'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug, getRelatedPosts as getRelatedPostsFromData } from '@/lib/data/blogPosts';
import { generateBlogPostSchema } from '@/lib/schema/blogPost';
import MainLayout from '@/components/layout/MainLayout';

interface ClientPageProps {
  slug: string;
}

export default function ClientPage({ slug }: ClientPageProps) {
  const locale = 'ar';
  
  // Debug logging
  useEffect(() => {
    console.log('Blog post slug:', slug);
    const post = getBlogPostBySlug(slug, locale);
    console.log('Found blog post:', post ? 'Yes' : 'No');
    if (!post) {
      console.log('Available posts:', require('@/lib/data/blogPosts').getBlogPosts(locale).map((p: any) => p.slug));
    }
  }, [slug]);
  
  // Get the blog post
  const blogPost = getBlogPostBySlug(slug, locale);
  
  // Handle case when blog post is not found
  if (!blogPost) {
    return notFound();
  }
  
  // Get related posts
  const relatedPosts = getRelatedPostsFromData(slug, locale, 3);
  
  // Generate structured data for SEO
  const blogPostSchema = generateBlogPostSchema(blogPost, locale);
  
  return (
    <MainLayout locale={locale}>
      {/* Schema.org structured data */}
      {blogPostSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostSchema)
          }}
        />
      )}
      
      {/* Hero Section */}
      <section className="pt-16 pb-20">
        <Container>
          <div className="mb-8 text-right">
            <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {'مدونة'}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center justify-end gap-4 text-neutral-600 mb-8">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.tags?.length || 0} وسوم</span>
            </div>
            <p className="text-xl text-neutral-600 max-w-3xl mr-auto">
              {blogPost.excerpt}
            </p>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
            <Image
              src={blogPost.featuredImage}
              alt={blogPost.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </Container>
      </section>
      
      {/* Blog Content */}
      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 lg:col-start-5">
              {/* Author */}
              <div className="flex items-center mb-8 p-6 bg-neutral-50 rounded-lg">
                {typeof blogPost.author === 'object' && blogPost.author.avatar && (
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={blogPost.author.avatar}
                      alt={typeof blogPost.author === 'object' ? blogPost.author.name : 'المؤلف'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-lg">
                    {typeof blogPost.author === 'object' ? blogPost.author.name : blogPost.author}
                  </h3>
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="prose prose-lg max-w-none text-right">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>
              
              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-12 text-right">
                  <h4 className="text-lg font-bold mb-4">الوسوم</h4>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {blogPost.tags.map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/${locale}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-4 lg:col-start-1 lg:row-start-1">
              {/* Related Posts */}
              {relatedPosts && relatedPosts.length > 0 && (
                <div className="sticky top-24">
                  <h3 className="text-xl font-bold mb-6 text-right">مقالات ذات صلة</h3>
                  <div className="space-y-6">
                    {relatedPosts.map((post) => (
                      <Link 
                        key={post.slug} 
                        href={`/${locale}/blog/${post.slug}`}
                        className="block group"
                      >
                        <div className="flex items-start">
                          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={post.featuredImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="mr-4 text-right">
                            <h4 className="font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-200">
                              {post.title}
                            </h4>
                            <span className="text-sm text-neutral-500">{post.date}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى حلول أزياء موحدة احترافية؟</h2>
            <p className="text-lg text-neutral-600 mb-8">
              استكشف مجموعتنا من الأزياء الموحدة عالية الجودة المصممة لمختلف الصناعات أو اتصل بنا للحصول على حلول مخصصة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ar/shop" 
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                تسوق الأزياء الموحدة
              </Link>
              <Link 
                href="/ar/contact" 
                className="inline-block bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-md hover:bg-neutral-50 transition-colors duration-200"
              >
                اتصل بنا
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 