'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import Container from '@/components/ui/Container';
import { getBlogPostBySlug, getRelatedPosts as getRelatedPostsFromData, getBlogPosts } from '@/lib/data/blogPosts';
import { generateBlogPostSchema } from '@/lib/schema/blogPost';
import { FaCalendar, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface ClientPageProps {
  initialPost?: any;
}

export default function ClientPage({ initialPost }: ClientPageProps) {
  const { slug } = useParams() as { slug: string };
  const [post, setPost] = useState(initialPost);
  const [loading, setLoading] = useState(!initialPost);
  const [error, setError] = useState(false);
  const locale = 'ar';
  const [mounted, setMounted] = useState(false);
  const [shareLinks, setShareLinks] = useState({
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    whatsapp: '#'
  });
  
  // Debug: Log all available blog posts
  useEffect(() => {
    console.log('DEBUG INFO:');
    console.log('Current slug:', slug);
    console.log('Current locale:', locale);
    console.log('All available posts:', getBlogPosts(locale).map(p => ({slug: p.slug, title: p.title})));
    console.log('Looking for post with slug:', slug, 'and locale:', locale);
    const post = getBlogPostBySlug(slug, locale);
    console.log('Post found?', post ? 'YES' : 'NO');
    if (post) {
      console.log('Post title:', post.title);
    }
  }, [slug]);
  
  // Get the blog post
  const blogPost = getBlogPostBySlug(slug, locale);
  
  // Debug output for blog post
  console.log('Blog post fetch attempted. Result:', blogPost ? 'Post found' : 'Post NOT found');
  
  // Handle case when blog post is not found
  if (!blogPost) {
    console.error('Blog post not found:', slug, locale);
    return notFound();
  }
  
  // Get related posts
  const relatedPosts = getRelatedPostsFromData(slug, locale, 3);
  
  // Generate structured data for SEO
  const blogPostSchema = generateBlogPostSchema(blogPost, locale);
  
  // Format date if it's a valid date string
  const formatBlogDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd MMMM yyyy', { locale: arSA });
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  // Handle client-side effects
  useEffect(() => {
    setMounted(true);
    
    // Generate social sharing URLs only on client side
    if (typeof window !== 'undefined' && blogPost) {
      const shareUrl = window.location.href;
      const shareTitle = encodeURIComponent(blogPost.title);
      setShareLinks({
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`,
        whatsapp: `https://wa.me/?text=${encodeURIComponent(blogPost.title + ' ' + shareUrl)}`
      });
    }
  }, [slug, blogPost]);
  
  useEffect(() => {
    if (!initialPost) {
      setLoading(true);
      console.log("Fetching blog post with slug:", slug);
      
      // Directly use the getBlogPostBySlug function with 'ar' locale
      const blogPost = getBlogPostBySlug(slug as string, 'ar');
      
      console.log("Blog post data from direct import:", blogPost);
      
      if (blogPost) {
        setPost(blogPost);
        setLoading(false);
      } else {
        console.error("Blog post not found:", slug);
        setError(true);
        setLoading(false);
      }
    }
  }, [slug, initialPost]);

  if (loading) {
    return (
      <div className="container mx-auto p-4 text-right">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded-md mb-4 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2 w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2 w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-2 w-5/6"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <p className="mb-4">عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.</p>
        <Link
          href="/ar/blog"
          className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
        >
          العودة إلى المدونة
        </Link>
      </div>
    );
  }

  return (
    <>
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
      <section className="pt-16 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="mb-8 text-right">
            <nav className="flex justify-end text-sm mb-6">
              <ol className="flex items-center space-x-2 space-x-reverse">
                <li>
                  <Link href="/ar" className="text-neutral-600 hover:text-primary-700">
                    الرئيسية
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <Link href="/ar/blog" className="text-neutral-600 hover:text-primary-700">
                    المدونة
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <span className="text-neutral-900">{post.title.substring(0, 20)}...</span>
                </li>
              </ol>
            </nav>

            <div className={mounted ? "animate-fadeIn" : "opacity-0"}>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-end mb-4">
                  {post.tags.slice(0, 3).map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
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
              
              <div className="flex flex-wrap items-center justify-end gap-4 text-neutral-600 mb-8">
                <div className="flex items-center">
                  <span className="mr-2">{formatBlogDate(post.date)}</span>
                  <FaCalendar className="text-primary-600" />
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <span className="mr-2">
                    {typeof post.author === 'object' ? post.author.name : post.author}
                  </span>
                  <FaUser className="text-primary-600" />
                </div>
              </div>
              
              <p className="text-xl text-neutral-600 max-w-3xl mr-0 ml-auto">
                {post.excerpt}
              </p>
            </div>
          </div>
          
          <div className={mounted ? "relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg animate-scaleIn" : "relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12 shadow-lg opacity-0"}>
            {post.featuredImage && (
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            )}
          </div>
        </Container>
      </section>
      
      {/* Blog Content */}
      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Right in RTL */}
            <div className="lg:col-span-3 lg:col-start-1 lg:row-start-1 order-2 lg:order-1">
              <div className="sticky top-24 space-y-8">
                {/* Author */}
                <div className="bg-white rounded-lg shadow-sm p-6 text-right border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">كاتب المقال</h3>
                  <div className="flex items-center justify-end">
                    {typeof post.author === 'object' && post.author.avatar && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <Image
                          src={post.author.avatar}
                          alt={typeof post.author === 'object' ? post.author.name : 'المؤلف'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">
                        {typeof post.author === 'object' ? post.author.name : post.author}
                      </h4>
                      <p className="text-sm text-neutral-600">كاتب متخصص في يونيوم</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Sharing - Only shown when mounted */}
                {mounted && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">شارك المقال</h3>
                    <div className="flex justify-center gap-3">
                      <a 
                        href={shareLinks.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#4267B2] text-white p-3 rounded-full hover:opacity-90 transition"
                        aria-label="شارك على فيسبوك"
                      >
                        <FaFacebook size={18} />
                      </a>
                      <a 
                        href={shareLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#1DA1F2] text-white p-3 rounded-full hover:opacity-90 transition"
                        aria-label="شارك على تويتر"
                      >
                        <FaTwitter size={18} />
                      </a>
                      <a 
                        href={shareLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#0077B5] text-white p-3 rounded-full hover:opacity-90 transition"
                        aria-label="شارك على لينكد إن"
                      >
                        <FaLinkedin size={18} />
                      </a>
                      <a 
                        href={shareLinks.whatsapp} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white p-3 rounded-full hover:opacity-90 transition"
                        aria-label="شارك على واتساب"
                      >
                        <FaWhatsapp size={18} />
                      </a>
                    </div>
                  </div>
                )}
                
                {/* Categories */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">التصنيفات</h3>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm transition-colors duration-200 flex items-center"
                        >
                          <span>{tag}</span>
                          <FaTag className="mr-1 text-xs text-primary-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Related Posts */}
                {relatedPosts && relatedPosts.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">مقالات ذات صلة</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <Link 
                          key={post.slug} 
                          href={`/ar/blog/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start">
                            {post.featuredImage && (
                              <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0 ml-3">
                                <Image
                                  src={post.featuredImage}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <div className="text-right">
                              <h4 className="font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                                {post.title}
                              </h4>
                              <span className="text-sm text-neutral-500">{formatBlogDate(post.date)}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 lg:col-start-4 order-1 lg:order-2">
              <div className={mounted ? "bg-white rounded-lg shadow-sm p-6 md:p-10 border border-neutral-100 animate-fadeInDelayed" : "bg-white rounded-lg shadow-sm p-6 md:p-10 border border-neutral-100 opacity-0"}>
                <article className="prose prose-lg max-w-none text-right rtl prose-headings:text-right prose-p:text-right prose-ul:text-right prose-ol:text-right">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags Bottom */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2 justify-end items-center">
                      <span className="font-bold ml-2">الوسوم:</span>
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm transition-colors duration-200"
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
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 via-primary-100 to-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى حلول أزياء موحدة احترافية؟</h2>
            <p className="text-lg text-neutral-700 mb-8">
              استكشف مجموعتنا من الأزياء الموحدة عالية الجودة المصممة لمختلف الصناعات أو اتصل بنا للحصول على حلول مخصصة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ar/shop/industrial-uniforms/hi-vis-safety-uniform" 
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                تسوق ملابس السلامة الصناعية
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
    </>
  );
} 