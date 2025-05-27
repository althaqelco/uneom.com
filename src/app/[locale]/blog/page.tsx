import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // Added Image import
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
  const isArabic = locale === 'ar'; // Defined isArabic

  // Static blog posts for now
  const posts = [
    {
      slug: 'hospital-uniform-safety-standards',
      title: locale === 'ar' ? 'معايير السلامة في الزي الطبي وأهميتها القصوى' : 'Hospital Uniform Safety Standards & Utmost Importance',
      excerpt: locale === 'ar'
        ? 'تعرف على أهم معايير السلامة في تصميم وتصنيع الزي الطبي لضمان حماية الكوادر والمرضى.'
        : 'Learn about the essential safety standards in medical uniform design and manufacturing to ensure staff and patient protection.',
      date: '2024-03-15',
      author: locale === 'ar' ? 'فريق خبراء يونيوم' : 'UNEOM Expert Team',
      image: '/images/blog/hospital-uniform-safety.jpg',
      category: locale === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
      readTime: locale === 'ar' ? '7 دقائق' : '7 min'
    },
    {
      slug: 'airline-uniform-design-cultural-identity',
      title: locale === 'ar' ? 'تصميم زي الطيران: مرآة الهوية الثقافية والاحترافية' : 'Airline Uniform Design: Reflecting Cultural Identity & Professionalism',
      excerpt: locale === 'ar'
        ? 'كيف تعكس أزياء شركات الطيران الهوية الثقافية والتراث المحلي مع الحفاظ على معايير الأناقة العالمية.'
        : 'How airline uniforms reflect cultural identity and local heritage while maintaining global elegance standards.',
      date: '2024-03-10',
      author: locale === 'ar' ? 'فريق تصميم يونيوم' : 'UNEOM Design Team',
      image: '/images/blog/airline-uniform-culture.jpg',
      category: locale === 'ar' ? 'الطيران' : 'Aviation',
      readTime: locale === 'ar' ? '6 دقائق' : '6 min'
    },
    {
      slug: 'sustainable-uniforms-2024-trends',
      title: locale === 'ar' ? 'اتجاهات الزي المستدام لعام 2024: نحو مستقبل أخضر للملابس المهنية' : 'Sustainable Uniform Trends 2024: Towards a Greener Future for Professional Attire',
      excerpt: locale === 'ar'
        ? 'استكشف أحدث اتجاهات الاستدامة في صناعة الزي الموحد، من الأقمشة الصديقة للبيئة إلى عمليات الإنتاج الأخلاقية.'
        : 'Explore the latest sustainability trends in the uniform industry, from eco-friendly fabrics to ethical production processes.',
      date: '2024-03-05',
      author: locale === 'ar' ? 'خبراء الاستدامة في يونيوم' : 'UNEOM Sustainability Experts',
      image: '/images/blog/sustainable-uniforms-trends.jpg',
      category: locale === 'ar' ? 'الاستدامة' : 'Sustainability',
      readTime: locale === 'ar' ? '8 دقائق' : '8 min'
    },
    {
      slug: 'corporate-uniforms-brand-image',
      title: locale === 'ar' ? 'الزي الموحد للشركات: تعزيز صورة العلامة التجارية واحترافية الموظفين' : 'Corporate Uniforms: Enhancing Brand Image & Employee Professionalism',
      excerpt: locale === 'ar'
        ? 'أهمية الزي الموحد في بناء هوية مؤسسية قوية وتأثيره على انطباعات العملاء ومعنويات الموظفين.'
        : 'The importance of corporate uniforms in building a strong institutional identity and its impact on customer impressions and employee morale.',
      date: '2024-02-28',
      author: locale === 'ar' ? 'فريق يونيوم للتسويق' : 'UNEOM Marketing Team',
      image: '/images/blog/corporate-uniforms-branding.jpg',
      category: locale === 'ar' ? 'الأعمال' : 'Business',
      readTime: locale === 'ar' ? '5 دقائق' : '5 min'
    }
  ];

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className={`min-h-screen bg-gray-100 ${isArabic ? 'font-cairo' : 'font-lato'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className={`text-center mb-16 ${isArabic ? 'rtl' : 'ltr'}`}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {locale === 'ar' ? 'مدونة يونيوم' : 'UNEOM Blog'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {locale === 'ar'
              ? 'أحدث المقالات والرؤى والنصائح حول عالم الأزياء المهنية والزي الموحد في المملكة.'
              : 'Latest articles, insights, and tips on the world of professional attire and uniforms in the Kingdom.'
            }
          </p>
        </div>

        {/* Featured Post Section */}
        {featuredPost && (
          <section className={`mb-16 ${isArabic ? 'rtl' : 'ltr'}`}>
            <article className="bg-white rounded-xl shadow-2xl overflow-hidden lg:flex">
              <div className="lg:w-1/2">
                {featuredPost.image && (
                  <Link href={`/${locale}/blog/${featuredPost.slug}`} passHref>
                    <div className="relative h-64 lg:h-full cursor-pointer group">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                  </Link>
                )}
              </div>
              <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 line-clamp-3 hover:text-blue-700 transition-colors">
                  <Link href={`/${locale}/blog/${featuredPost.slug}`} passHref>
                    {featuredPost.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-5 line-clamp-4 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <time dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime} {locale === 'ar' ? 'قراءة' : 'read'}</span>
                </div>
                <Link
                  href={`/${locale}/blog/${featuredPost.slug}`}
                  className={`mt-6 inline-block text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors ${isArabic ? 'self-start' : 'self-start'}`}
                >
                  {locale === 'ar' ? 'اقرأ المقال كاملاً' : 'Read Full Article'} →
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* Other Posts Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 ${isArabic ? 'rtl' : 'ltr'}`}>
          {otherPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl">
              {post.image && (
                <Link href={`/${locale}/blog/${post.slug}`} passHref>
                  <div className="relative h-56 w-full overflow-hidden cursor-pointer">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                </Link>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-grow group-hover:text-blue-700 transition-colors">
                  <Link href={`/${locale}/blog/${post.slug}`} passHref>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', { month: 'long', day: 'numeric' })}
                    </time>
                    <span className="mx-1.5">•</span>
                    <span>{post.readTime} {locale === 'ar' ? 'قراءة' : 'read'}</span>
                  </div>
                  <Link
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
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