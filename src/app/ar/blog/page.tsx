import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { getAllBlogPosts, getAllTags } from '@/lib/data/blogPosts.server';
import { formatDate } from '@/lib/utils';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'المدونة | يونيوم - الأزياء المهنية وملابس العمل',
  description: 'استكشف مدونتنا للحصول على رؤى ونصائح واتجاهات في الأزياء المهنية وملابس العمل في المملكة العربية السعودية',
  keywords: 'مدونة يونيوم، الأزياء المهنية، ملابس العمل، اتجاهات الموضة، نصائح الزي الموحد، المملكة العربية السعودية',
  openGraph: {
    title: 'المدونة | يونيوم - الأزياء المهنية وملابس العمل',
    description: 'استكشف مدونتنا للحصول على رؤى ونصائح واتجاهات في الأزياء المهنية وملابس العمل',
    url: 'https://uneom.com/ar/blog/',
    siteName: 'يونيوم',
    images: [
      {
        url: 'https://uneom.com/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg',
        width: 1200,
        height: 630,
        alt: 'مدونة يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/',
    languages: {
      'en-SA': 'https://uneom.com/blog/',
      'ar-SA': 'https://uneom.com/ar/blog/',
      'x-default': 'https://uneom.com/blog/'
    }
  }
};

export const dynamic = 'force-static';

export default function BlogPage() {
  const allPosts = getAllBlogPosts('ar');
  const allTags = getAllTags('ar');
  
  
  return (
    <div dir="rtl">
      <EnhancedSEO2025
        title="المدونة | يونيوم - الأزياء المهنية وملابس العمل"
        description="استكشف مدونتنا للحصول على رؤى ونصائح واتجاهات في الأزياء المهنية وملابس العمل في المملكة العربية السعودية"
        canonicalUrl="https://uneom.com/ar/blog/"
        locale="ar"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-700 text-white py-20">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/business-professionals-having-meeting-in-conference-room-2025-01-02-22-59-16-utc.jpg"
            alt="مدونة يونيوم للأزياء المهنية"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المدونة', href: '/ar/blog' }
            ]}
            className="text-white/80 mb-6 relative z-10"
          />
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">مدونة يونيوم</h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl">
              نشارك هنا أحدث الرؤى والاتجاهات في عالم الأزياء المهنية وملابس العمل في المملكة العربية السعودية
            </p>
            <Button 
              href="#latest-articles"
              variant="secondary" 
              size="lg"
            >
              استكشف المقالات
            </Button>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <div className="max-w-7xl mx-auto">
            {/* Featured Post */}
            {allPosts && allPosts.length > 0 ? (
              <div className="mb-16">
                <SectionHeading subtitle="المقال المميز">
                  أحدث إصداراتنا
                </SectionHeading>
                
                <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow-lg overflow-hidden mt-8">
                  {allPosts[0].featuredImage ? (
                    <div className="relative aspect-video">
                      <Image
                        src={allPosts[0].featuredImage}
                        alt={allPosts[0].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-video">
                      <Image
                        src="/images/professional-textile-expert-checking-the-quality-of-a-fabric-in-a-factory-man-SBI-300990818.jpg"
                        alt="مقال مدونة يونيوم"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-3 text-sm text-gray-500">
                      {formatDate(allPosts[0].date)} • 
                      {typeof allPosts[0].author === 'string' 
                        ? ` بواسطة ${allPosts[0].author}` 
                        : ` بواسطة ${allPosts[0].author.name}`}
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">
                      <Link href={`/ar/blog/${allPosts[0].slug}/`} className="hover:text-primary-600 transition-colors">
                        {allPosts[0].title}
                      </Link>
                    </h2>
                    
                    <p className="text-lg text-gray-600 mb-6 line-clamp-3">{allPosts[0].excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {allPosts[0].tags && allPosts[0].tags.map(tag => (
                        <Link 
                          key={tag}
                          href={`/ar/blog/tag/${tag}/`}
                          className="text-xs px-3 py-1 bg-primary-100 text-primary-700 hover:bg-primary-200 rounded-full transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                    
                    <Button 
                      href={`/ar/blog/${allPosts[0].slug}/`}
                      variant="primary"
                      size="md"
                      className="inline-flex items-center"
                    >
                      اقرأ المقال كاملاً
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mb-16 text-center p-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <div className="max-w-2xl mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">المحتوى قيد الإنشاء</h2>
                  <p className="text-lg text-gray-600 mb-8">نعمل حاليًا على إثراء مدونتنا بمحتوى قيّم حول الأزياء المهنية والاتجاهات الحديثة. ترقبوا مقالاتنا القادمة قريبًا!</p>
                  <Button href="/ar/contact" variant="primary" size="lg">
                    تواصل معنا للاستفسار
                  </Button>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12" id="latest-articles">
              {/* Main Content - Blog Posts */}
              <div className="lg:col-span-3">
                <SectionHeading subtitle="تابع أحدث المقالات والرؤى">
                  أحدث المقالات
                </SectionHeading>
                
                <div className="grid gap-8 mt-8">
                  {allPosts && allPosts.length > 1 ? allPosts.slice(1).map((post, index) => {
                    const authorName = typeof post.author === 'string' ? post.author : post.author.name;
                    
                    return (
                      <article
                        key={post.slug}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                      >
                        <div className="grid md:grid-cols-3 gap-0">
                          <div className="md:col-span-1">
                            <Link href={`/ar/blog/${post.slug}/`} className="block relative aspect-video overflow-hidden">
                              <Image
                                src={post.featuredImage || `/images/arabic-businessman-in-the-middle-east-SBI-300984430.jpg`}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform hover:scale-105 duration-300"
                              />
                            </Link>
                          </div>
                          
                          <div className="md:col-span-2 p-6">
                            <div className="mb-3 text-sm text-gray-500">
                              {formatDate(post.date)} • بواسطة {authorName}
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-primary-600 transition-colors">
                              <Link href={`/ar/blog/${post.slug}/`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags && post.tags.slice(0, 3).map(tag => (
                                  <Link 
                                    key={tag}
                                    href={`/ar/blog/tag/${tag}/`}
                                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                  >
                                    #{tag}
                                  </Link>
                                ))}
                              </div>
                              
                              <Link 
                                href={`/ar/blog/${post.slug}/`}
                                className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center transition-colors"
                              >
                                اقرأ المزيد
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  }) : (
                    <div className="text-center p-8 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-600">لا توجد مقالات إضافية حالياً. ترقبوا المزيد من المحتوى قريباً!</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Categories */}
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">التصنيفات</h3>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map(tag => (
                        <Link 
                          key={tag}
                          href={`/ar/blog/tag/${tag}/`}
                          className="text-sm px-3 py-2 bg-gray-50 border border-gray-200 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700 rounded-full transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Newsletter */}
                  <motion.div 
                    className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-primary-900">اشترك في نشرتنا الإخبارية</h3>
                      <p className="text-sm text-primary-700 mb-4">
                        ابق على اطلاع بأحدث الاتجاهات والرؤى في الأزياء المهنية
                      </p>
                    </div>
                    <form className="space-y-3">
                      <div>
                        <input 
                          type="email" 
                          placeholder="بريدك الإلكتروني" 
                          className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                          required
                        />
                      </div>
                      <button 
                        type="submit" 
                        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                      >
                        اشترك الآن
                      </button>
                    </form>
                  </div>
                  
                  {/* Popular Topics */}
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                  >
                    <h3 className="text-lg font-bold mb-4 text-gray-900">مواضيع شائعة</h3>
                    <div className="space-y-3">
                      <Link href="/ar/blog/tag/healthcare" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">الأزياء الطبية</span>
                        </div>
                      </Link>
                      <Link href="/ar/blog/tag/corporate" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">أزياء الشركات</span>
                        </div>
                      </Link>
                      <Link href="/ar/blog/tag/trends" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                          <span className="text-sm font-medium">اتجاهات الموضة</span>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}