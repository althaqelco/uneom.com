import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts, getAllTags } from '../../lib/data/blogPosts.server';
import Container from '@/components/ui/Container';
import { formatDate } from '@/lib/utils';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Blog | Uneom - Professional Uniforms & Workwear',
  description: 'Explore our blog for insights, tips, and trends in professional uniforms, workwear, and corporate attire across various industries.',
  openGraph: {
    title: 'Blog | Uneom - Professional Uniforms & Workwear',
    description: 'Explore our blog for insights, tips, and trends in professional uniforms, workwear, and corporate attire across various industries.',
    url: 'https://uneom.com/blog',
    siteName: 'Uneom',
    images: [
      {
        url: 'https://uneom.com/images/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Uneom Blog'
      }
    ],
    locale: 'en_US',
    type: 'website'}
};

export const dynamic = 'force-static';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const allTags = getAllTags();
  
  return (
    <main className="py-10">
      <Container>
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Uneom Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, trends, and expertise in professional uniforms and workwear across various industries
            </p>
          </header>
          
          {/* Featured Post */}
          {allPosts.length > 0 && (
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {allPosts[0].featuredImage && (
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={allPosts[0].featuredImage}
                      alt={allPosts[0].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                
                <div className={allPosts[0].featuredImage ? "" : "md:col-span-2"}>
                  <div className="mb-2 text-sm text-gray-500">
                    {formatDate(allPosts[0].date)} • 
                    {typeof allPosts[0].author === 'string' 
                      ? ` By ${allPosts[0].author}` 
                      : ` By ${allPosts[0].author.name}`}
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">
                    <Link href={`/blog/${allPosts[0].slug}`} className="hover:text-blue-600 transition-colors">
                      {allPosts[0].title}
                    </Link>
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">{allPosts[0].excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {allPosts[0].tags && allPosts[0].tags.map(tag => (
                      <Link 
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="text-xs px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${allPosts[0].slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              
              <div className="grid gap-10">
                {allPosts.slice(1).map(post => {
                  const authorName = typeof post.author === 'string' ? post.author : post.author.name;
                  
                  return (
                    <article key={post.slug} className="border-b border-gray-200 pb-10 last:border-0">
                      <div className="grid md:grid-cols-3 gap-6">
                        {post.featuredImage && (
                          <div className="md:col-span-1">
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden rounded-lg">
                              <Image
                                src={post.featuredImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform hover:scale-105 duration-300"
                              />
                            </Link>
                          </div>
                        )}
                        
                        <div className={post.featuredImage ? "md:col-span-2" : "md:col-span-3"}>
                          <div className="mb-2 text-sm text-gray-500">
                            {formatDate(post.date)} • By {authorName}
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {post.tags && post.tags.slice(0, 3).map(tag => (
                                <Link 
                                  key={tag}
                                  href={`/blog/tag/${tag}`}
                                  className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                >
                                  #{tag}
                                </Link>
                              ))}
                            </div>
                            
                            <Link 
                              href={`/blog/${post.slug}`}
                              className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                            >
                              Read More
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <Link 
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="text-sm px-3 py-1 bg-white border border-gray-200 hover:bg-gray-100 rounded-full mb-2 inline-block"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Stay updated with the latest trends and insights in professional uniforms
                  </p>
                  <form className="space-y-3">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
} 