'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getAllBlogPosts } from '@/lib/data/blogPosts';

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
  category: string;
  coverImage: string;
  readTime: number;
}

// Define type for the blog post data we get from the API
interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  tags: string[];
}

export default function BlogPage() {
  const locale = 'en';
  
  // Get blog posts from the data file
  const blogPostsData = getAllBlogPosts(locale);
  
  // Transform the data to match the expected format
  const blogPosts: BlogPost[] = blogPostsData.map((post: BlogPostData) => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    author: {
      name: post.author.name,
      image: post.author.avatar
    },
    category: post.tags[0] || 'General',
    coverImage: post.featuredImage,
    readTime: Math.ceil(post.content.length / 2000) // Approximate read time based on content length
  }));
  
  // Featured post is the most recent one
  const featuredPost = blogPosts[0];
  // Regular posts are all but the featured one
  const regularPosts = blogPosts.slice(1);
  
  // Categories extracted from blog posts
  const categoriesSet = new Set<string>();
  blogPosts.forEach(post => categoriesSet.add(post.category));
  const categories = Array.from(categoriesSet);
  
  return (
    <MainLayout locale={locale}>
      {/* Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              UNEOM Insights
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert insights, industry trends, and best practices in uniform design and management for Saudi Arabian businesses.
            </p>
          </div>
        </Container>
      </div>
      
      {/* Featured Post */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative rounded-lg overflow-hidden h-96 lg:h-auto">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                  {featuredPost.category}
                </span>
                <span className="text-neutral-500 text-sm ml-3">
                  {featuredPost.date} • {featuredPost.readTime} min read
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary-600 transition-colors duration-200">
                <Link href={`/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-neutral-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center">
                <Link href={`/authors/${featuredPost.author.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-medium hover:text-primary-600 transition-colors">{featuredPost.author.name}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Category Filter */}
      <section className="pb-8">
        <Container>
          <div className="flex flex-wrap gap-2 justify-center">
            <button className="inline-block bg-primary-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-primary-700">
              All Posts
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className="inline-block bg-neutral-100 text-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-200"
              >
                {category}
              </button>
            ))}
            <Link 
              href="/authors"
              className="inline-block bg-neutral-100 text-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-200"
            >
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                Authors
              </div>
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Regular Posts Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <Link href={`/blog/${post.id}`} className="block relative h-56">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full mr-2">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-xs">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link href={`/authors/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium hover:text-primary-600 transition-colors">{post.author.name}</span>
                    </Link>
                    <span className="text-neutral-500 text-xs">
                      {post.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading centered>
              Stay Updated with UNEOM Insights
            </SectionHeading>
            <p className="text-lg text-neutral-700 mb-8">
              Subscribe to our newsletter to receive the latest industry trends, uniform best practices, and UNEOM news directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md border border-neutral-300 flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4">
              By subscribing, you agree to receive marketing emails from UNEOM. You can unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Related Resources */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>
            Explore More Resources
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            Discover more ways to optimize your uniform program and stay up-to-date with industry standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Case Studies</h3>
              <p className="text-neutral-600 mb-6">
                Real-world examples of how our uniform solutions have helped businesses across various industries.
              </p>
              <Link 
                href="/resources/case-studies" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                View Case Studies
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Uniform Guides</h3>
              <p className="text-neutral-600 mb-6">
                Comprehensive industry-specific guides to help you develop effective uniform programs.
              </p>
              <Link 
                href="/resources/guides" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                Download Guides
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Webinars & Events</h3>
              <p className="text-neutral-600 mb-6">
                Join our upcoming webinars and events to learn from industry experts and network with peers.
              </p>
              <Link 
                href="/resources/events" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
} 