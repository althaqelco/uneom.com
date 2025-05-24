import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllTags, getBlogPostsByTag } from '@/lib/data/blogPosts.server';
import Container from '@/components/ui/Container';
import { formatDate } from '@/lib/utils';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

type Props = {
  params: {
    locale: string;
    tag: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const tag = decodeURIComponent(params.tag);
  const isArabic = params.locale === 'ar';
  
  if (isArabic) {
    return {
      title: `مقالات ${tag} | مدونة يونيوم`,
      description: `استكشف مقالاتنا حول ${tag} - رؤى ونصائح واتجاهات في الزي الموحد المهني وملابس العمل.`,
      openGraph: {
        title: `مقالات ${tag} | مدونة يونيوم`,
        description: `استكشف مقالاتنا حول ${tag} - رؤى ونصائح واتجاهات في الزي الموحد المهني وملابس العمل.`,
        url: `https://uneom.com/ar/blog/tag/${params.tag}`,
        siteName: 'يونيوم',
        images: [
          {
            url: 'https://uneom.com/images/og-blog.jpg',
            width: 1200,
            height: 630,
            alt: `مدونة يونيوم - مقالات ${tag}`
          }
        ],
        locale: 'ar_SA',
        type: 'website',
      }
    };
  }
  
  return {
    title: `${tag} Articles | Uneom Blog`,
    description: `Explore our blog posts about ${tag} - insights, tips, and trends in professional uniforms and workwear.`,
    openGraph: {
      title: `${tag} Articles | Uneom Blog`,
      description: `Explore our blog posts about ${tag} - insights, tips, and trends in professional uniforms and workwear.`,
      url: `https://uneom.com/blog/tag/${params.tag}`,
      siteName: 'Uneom',
      images: [
        {
          url: 'https://uneom.com/images/og-blog.jpg',
          width: 1200,
          height: 630,
          alt: `Uneom Blog - ${tag} Articles`
        }
      ],
      locale: 'en_US',
      type: 'website',
    }
  };
}

export function generateStaticParams() {
  // Get tags for both English and Arabic
  const enTags = getAllTags('en');
  const arTags = getAllTags('ar');
  
  // Create params for English tags
  const enParams = enTags.map(tag => ({
    locale: 'en',
    tag,
  }));
  
  // Create params for Arabic tags
  const arParams = arTags.map(tag => ({
    locale: 'ar',
    tag,
  }));
  
  // Combine all params
  return [...enParams, ...arParams];
}

export const dynamic = 'force-static';

export default function TagPage({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const locale = params.locale as 'en' | 'ar';
  const posts = getBlogPostsByTag(tag, locale);
  const allTags = getAllTags(locale);
  const isArabic = locale === 'ar';
  
  return (
    <main className={`py-10 ${isArabic ? 'dir-rtl' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Container>
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              #{tag}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isArabic 
                ? `المقالات والرؤى المتعلقة بـ ${tag} في الزي الموحد المهني وملابس العمل`
                : `Articles and insights related to ${tag} in professional uniforms and workwear`
              }
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
                              <Link href={`/${locale}/blog/${post.slug}`} className="block relative aspect-video overflow-hidden rounded-lg">
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
                              {formatDate(post.date)} • {isArabic ? 'بواسطة' : 'By'} {authorName}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                              <Link href={`/${locale}/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags && post.tags.slice(0, 3).map(tag => (
                                  <Link 
                                    key={tag}
                                    href={`/${locale}/blog/tag/${tag}`}
                                    className="text-xs px-2 py-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  >
                                    #{tag}
                                  </Link>
                                ))}
                              </div>
                              
                              <Link 
                                href={`/${locale}/blog/${post.slug}`}
                                className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center"
                              >
                                {isArabic ? 'قراءة المزيد' : 'Read More'}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isArabic ? 'mr-1 rotate-180' : 'ml-1'}`} viewBox="0 0 20 20" fill="currentColor">
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
                    <h3 className="text-xl font-semibold mb-4">
                      {isArabic ? 'لا توجد مقالات' : 'No articles found'}
                    </h3>
                    <p className="text-gray-600">
                      {isArabic 
                        ? 'ليس لدينا أي مقالات بهذه العلامة حتى الآن. تحقق مرة أخرى قريبًا!'
                        : 'We don\'t have any articles with this tag yet. Check back soon!'}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-lg font-bold mb-4">
                    {isArabic ? 'التصنيفات' : 'Categories'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tagItem => (
                      <Link 
                        key={tagItem}
                        href={`/${locale}/blog/tag/${tagItem}`}
                        className={`text-sm px-3 py-1 ${tagItem === tag ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 hover:bg-gray-100'} rounded-full mb-2 inline-block`}
                      >
                        {tagItem}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-3">
                    {isArabic ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isArabic 
                      ? 'ابق على اطلاع بأحدث الاتجاهات والرؤى في الزي الموحد المهني'
                      : 'Stay updated with the latest trends and insights in professional uniforms'}
                  </p>
                  <form className="space-y-3">
                    <div>
                      <input 
                        type="email" 
                        placeholder={isArabic ? 'عنوان بريدك الإلكتروني' : 'Your email address'} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      {isArabic ? 'اشتراك' : 'Subscribe'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-gray-200">
            <Link 
              href={`/${locale}/blog`}
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isArabic ? 'ml-1 rotate-180' : 'mr-1'}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              {isArabic ? 'العودة إلى جميع المقالات' : 'Back to all articles'}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
} 