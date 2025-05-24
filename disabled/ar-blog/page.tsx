'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function BlogPageArabic() {
  const locale = 'ar';
  
  // Get blog posts from the data file
  const blogPostsData = getAllBlogPosts(locale);
  
  // Transform the data to match the expected format
  const blogPosts: BlogPost[] = blogPostsData.map((post: BlogPostData) => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: new Date(post.date).toLocaleDateString('ar-SA', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    author: {
      name: post.author.name,
      image: post.author.avatar
    },
    category: post.tags[0] || 'عام',
    coverImage: post.featuredImage,
    readTime: Math.ceil(post.content.length / 2000) // Approximate read time based on content length
  }));
  
  // Featured post is the most recent one
  const featuredPost = blogPosts[0];
  // Regular posts are all but the featured one
  const regularPosts = blogPosts.slice(1);
  
  // Categories extracted from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative py-24 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
              رؤى يونيوم
            </h1>
            <p className="text-xl text-white/90 mb-8">
              رؤى الخبراء واتجاهات الصناعة وأفضل الممارسات في تصميم وإدارة الزي الموحد للشركات السعودية.
            </p>
          </div>
        </Container>
      </div>
      
      {/* Featured Post */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 relative rounded-lg overflow-hidden h-96 lg:h-auto order-2 lg:order-1">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full mb-2 ml-3">
                  {featuredPost.category}
                </span>
                <span className="text-neutral-500 text-sm">
                  {featuredPost.date} • {featuredPost.readTime} دقائق قراءة
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4 hover:text-primary-600 transition-colors duration-200">
                <Link href={`/ar/blog/${featuredPost.id}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-neutral-600 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ml-3">
                  <Image
                    src={featuredPost.author.image}
                    alt={featuredPost.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{featuredPost.author.name}</span>
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
              جميع المقالات
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className="inline-block bg-neutral-100 text-neutral-800 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200 hover:bg-neutral-200"
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Regular Posts Grid */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <Link href={`/ar/blog/${post.id}`} className="block relative h-56">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full ml-2">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-xs">
                      {post.readTime} دقائق قراءة
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/ar/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden ml-2">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.author.name}</span>
                    </div>
                    <span className="text-neutral-500 text-xs">{post.date}</span>
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
              ابق على اطلاع بأحدث رؤى يونيوم
            </SectionHeading>
            <p className="text-lg text-neutral-700 mb-8">
              اشترك في نشرتنا الإخبارية لتلقي أحدث اتجاهات الصناعة وأفضل ممارسات الزي الموحد وأخبار يونيوم مباشرة إلى صندوق الوارد الخاص بك.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="عنوان بريدك الإلكتروني"
                className="px-4 py-3 rounded-md border border-neutral-300 flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                اشتراك
              </button>
            </form>
            <p className="text-xs text-neutral-500 mt-4">
              من خلال الاشتراك، فإنك توافق على تلقي رسائل البريد الإلكتروني التسويقية من يونيوم. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </div>
        </Container>
      </section>
      
      {/* Related Resources */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>
            استكشف المزيد من الموارد
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            اكتشف المزيد من الطرق لتحسين برنامج الزي الموحد الخاص بك والبقاء على اطلاع بمعايير الصناعة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">دراسات الحالة</h3>
              <p className="text-neutral-600 mb-6">
                أمثلة واقعية عن كيفية مساعدة حلول الزي الموحد لدينا للشركات عبر مختلف الصناعات.
              </p>
              <Link 
                href="/ar/resources/case-studies" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                عرض دراسات الحالة
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">أدلة الزي الموحد</h3>
              <p className="text-neutral-600 mb-6">
                أدلة شاملة خاصة بالصناعة لمساعدتك في تطوير برامج زي موحد فعالة.
              </p>
              <Link 
                href="/ar/resources/guides" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                تحميل الأدلة
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-neutral-100 text-center">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">ندوات عبر الإنترنت والفعاليات</h3>
              <p className="text-neutral-600 mb-6">
                انضم إلى ندواتنا عبر الإنترنت والفعاليات القادمة للتعلم من خبراء الصناعة والتواصل مع النظراء.
              </p>
              <Link 
                href="/ar/resources/events" 
                className="inline-block text-primary-600 font-medium hover:text-primary-800 transition-colors duration-200"
              >
                عرض الجدول الزمني
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 
