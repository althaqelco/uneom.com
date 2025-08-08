import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllTags, getBlogPostsByTag } from '@/lib/data/blogPosts.server';
import Container from '@/components/ui/Container';
import MainHeading from '@/components/ui/MainHeading';
import SmartHeading from '@/components/ui/SmartHeading';
import { formatDate, safeDecodeURIComponent, safeEncodeURIComponent } from '@/lib/utils';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

type Props = {
  params: {
    tag: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  // Decodificar la etiqueta de la URL de forma segura
  const tag = params.tag;
  const decodedTag = safeDecodeURIComponent(tag);
  
  // Verificar que la etiqueta existe
  const allTags = getAllTags('ar');
  if (!allTags.includes(decodedTag) && !allTags.includes(tag)) {
    return {
      title: 'عنوان غير موجود | مدونة يونيوم',
      description: 'لم يتم العثور على الصفحة المطلوبة.'
    };
  }
  
  // Usar la etiqueta decodificada para la visualización
  const displayTag = allTags.includes(decodedTag) ? decodedTag : tag;
  
  return {
    title: `مقالات ${displayTag} | مدونة يونيوم`,
    description: `استكشف مقالاتنا حول ${displayTag} - رؤى ونصائح واتجاهات في الزي الموحد المهني وملابس العمل.`,
    openGraph: {
      title: `مقالات ${displayTag} | مدونة يونيوم`,
      description: `استكشف مقالاتنا حول ${displayTag} - رؤى ونصائح واتجاهات في الزي الموحد المهني وملابس العمل.`,
      url: `https://uneom.com/ar/blog/tag/${params.tag}/`,
      siteName: 'يونيوم',
      images: [
        {
          url: 'https://uneom.com/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: `مدونة يونيوم - مقالات ${displayTag}`
        }
      ],
      locale: 'ar_SA',
      type: 'website'},
    alternates: {
      canonical: `https://uneom.com/ar/blog/tag/${params.tag}/`,
      languages: {
        'en-SA': `https://uneom.com/blog/tag/${params.tag}/`,
        'ar-SA': `https://uneom.com/ar/blog/tag/${params.tag}/`,
        'x-default': `https://uneom.com/blog/tag/${params.tag}/`
      }
    }
  };
}

export function generateStaticParams() {
  const tags = getAllTags('ar');
  return tags.map(tag => ({
    tag: tag}));
}

export const dynamic = 'force-static';

export default function TagPage({ params }: Props) {
  // Decodificar la etiqueta de la URL de forma segura
  const tag = params.tag;
  const decodedTag = safeDecodeURIComponent(tag);
  
  // Verificar que la etiqueta existe
  const allTags = getAllTags('ar');
  if (!allTags.includes(decodedTag) && !allTags.includes(tag)) {
    notFound();
  }
  
  // Usar la etiqueta correcta para buscar los posts
  const displayTag = allTags.includes(decodedTag) ? decodedTag : tag;
  const posts = getBlogPostsByTag(displayTag, 'ar');
  
  return (
    <main className="py-10" dir="rtl">
      <Container>
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <MainHeading centered>
              #{displayTag}
            </MainHeading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              المقالات والرؤى المتعلقة بـ {displayTag} في الزي الموحد المهني وملابس العمل
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              <div className="grid gap-10">
                {posts.length > 0 ? (
                  posts.map(post => {
                    const authorName = typeof post.author === 'string' ? post.author : post.author.name;
                    
                    return (
                      <article key={post.slug} className="border-b border-gray-200 pb-10 last:border-0">
                        <div className="grid md:grid-cols-3 gap-6">
                          {post.featuredImage && (
                            <div className="md:col-span-1">
                              <Link href={`/ar/blog/${post.slug}/`} className="block relative aspect-video overflow-hidden rounded-lg">
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
                              {formatDate(post.date)} • بواسطة {authorName}
                            </div>
                            
                            <SmartHeading level={3} className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                              <Link href={`/ar/blog/${post.slug}/`}>
                                {post.title}
                              </Link>
                            </SmartHeading>
                            
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags && post.tags.slice(0, 3).map(tag => (
                                  <Link 
                                    key={tag}
                                    href={`/ar/blog/tag/${tag}/`}
                                    className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  >
                                    #{tag}
                                  </Link>
                                ))}
                              </div>
                              
                              <Link 
                                href={`/ar/blog/${post.slug}/`}
                                className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                              >
                                قراءة المزيد
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="text-center py-12">
                    <SmartHeading level={3} className="text-xl font-semibold mb-4">لا توجد مقالات</SmartHeading>
                    <p className="text-gray-600">ليس لدينا أي مقالات بهذه العلامة حتى الآن. تحقق مرة أخرى قريبًا!</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <SmartHeading level={3} className="text-lg font-bold mb-4">التصنيفات</SmartHeading>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tagItem => (
                      <Link 
                        key={tagItem}
                        href={`/ar/blog/tag/${tagItem}/`}
                        className={`text-sm px-3 py-1 ${tagItem === displayTag ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 hover:bg-gray-100'} rounded-full mb-2 inline-block`}
                      >
                        {tagItem}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <SmartHeading level={3} className="text-lg font-bold mb-3">اشترك في نشرتنا الإخبارية</SmartHeading>
                  <p className="text-sm text-gray-600 mb-4">
                    ابق على اطلاع بأحدث الاتجاهات والرؤى في الزي الموحد المهني
                  </p>
                  <form className="space-y-3">
                    <div>
                      <input 
                        type="email" 
                        placeholder="عنوان بريدك الإلكتروني" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      اشتراك
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link 
              href="/ar/blog/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              العودة إلى جميع المقالات
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
} 