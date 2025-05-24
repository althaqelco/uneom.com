import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface BlogPageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = params;
  
  return {
    title: locale === 'ar' ? 'المدونة - يونيوم' : 'Blog - UNEOM',
    description: locale === 'ar' 
      ? 'اكتشف أحدث المقالات والنصائح حول الزي الموحد والأزياء المهنية'
      : 'Discover the latest articles and tips about uniforms and professional attire',
  };
}

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

export default function BlogPage({ params }: BlogPageProps) {
  const { locale } = params;

  // Static blog posts for now
  const posts = [
    {
      slug: 'hospital-uniform-safety-standards',
      title: locale === 'ar' ? 'معايير السلامة في الزي الطبي' : 'Hospital Uniform Safety Standards',
      excerpt: locale === 'ar' 
        ? 'تعرف على أهم معايير السلامة في تصميم وتصنيع الزي الطبي'
        : 'Learn about the essential safety standards in medical uniform design and manufacturing',
      date: '2024-01-15',
      author: 'UNEOM Team'
    },
    {
      slug: 'airline-uniform-design-cultural-identity',
      title: locale === 'ar' ? 'تصميم زي الطيران والهوية الثقافية' : 'Airline Uniform Design and Cultural Identity',
      excerpt: locale === 'ar'
        ? 'كيف تعكس أزياء شركات الطيران الهوية الثقافية والتراث المحلي'
        : 'How airline uniforms reflect cultural identity and local heritage',
      date: '2024-01-10',
      author: 'UNEOM Team'
    },
    {
      slug: 'sustainable-uniforms-2024-trends',
      title: locale === 'ar' ? 'اتجاهات الزي المستدام 2024' : 'Sustainable Uniform Trends 2024',
      excerpt: locale === 'ar'
        ? 'استكشف أحدث اتجاهات الاستدامة في صناعة الزي الموحد'
        : 'Explore the latest sustainability trends in the uniform industry',
      date: '2024-01-05',
      author: 'UNEOM Team'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {locale === 'ar' ? 'المدونة' : 'Blog'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'ar' 
              ? 'اكتشف أحدث المقالات والنصائح حول الزي الموحد والأزياء المهنية'
              : 'Discover the latest articles and tips about uniforms and professional attire'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US')}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{locale === 'ar' ? '5 دقائق قراءة' : '5 min read'}</span>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {locale === 'ar' ? 'بواسطة' : 'By'} {post.author}
                  </span>
                  
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    {locale === 'ar' ? 'اقرأ المزيد' : 'Read More'} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}