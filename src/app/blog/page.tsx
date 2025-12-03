import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAllBlogPosts, getAllTags } from '../../lib/data/blogPosts.server';
import Container from '@/components/ui/Container';
import { formatDate } from '@/lib/utils';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Industry Blog Saudi Arabia | Expert Insights & Trends | UNEOM',
  titleAr: 'مدونة صناعة الأزياء الموحدة السعودية | رؤى الخبراء والاتجاهات | يونيوم',
  description: 'Expert blog on professional uniforms in Saudi Arabia. Latest trends, fabric innovations, industry guides for healthcare, hospitality, corporate, education uniforms. Updated weekly!',
  descriptionAr: 'مدونة متخصصة في الأزياء المهنية في السعودية. أحدث الاتجاهات، ابتكارات الأقمشة، أدلة الصناعات للرعاية الصحية، الضيافة، الشركات، التعليم. تحديث أسبوعي!',
  keywords: ['uniform blog saudi arabia', 'workwear trends', 'healthcare uniform guide', 'corporate attire tips', 'hospitality uniform trends', 'industrial safety workwear', 'school uniform saudi'],
  keywordsAr: ['مدونة الأزياء الموحدة السعودية', 'اتجاهات ملابس العمل', 'دليل الزي الطبي', 'نصائح الملابس الرسمية', 'اتجاهات زي الضيافة'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog',
  image: '/images/blog/uniform-trends-2025.jpg',
  imageAlt: 'UNEOM Uniform Industry Blog',
  aiSummary: 'UNEOM blog covers professional uniforms and workwear in Saudi Arabia. Topics include: Healthcare uniforms (scrubs, lab coats), Corporate attire (suits, polo shirts), Hospitality uniforms (hotel, restaurant), Industrial safety wear (FR clothing, coveralls), School uniforms, Security uniforms. Weekly articles on fabric technology, sustainability, Saudi market trends, and uniform management.',
  aiSummaryAr: 'مدونة يونيوم تغطي الأزياء المهنية وملابس العمل في السعودية. المواضيع تشمل: أزياء الرعاية الصحية، الملابس الرسمية، أزياء الضيافة، ملابس السلامة الصناعية، الزي المدرسي، أزياء الأمن.'
});

export const dynamic = 'force-static';

const blogFAQs = [
  { question: 'How often is the UNEOM blog updated?', questionAr: 'كم مرة يتم تحديث مدونة يونيوم؟', answer: 'We publish new articles weekly, covering the latest trends, industry insights, and practical guides for uniform management in Saudi Arabia.', answerAr: 'ننشر مقالات جديدة أسبوعياً، تغطي أحدث الاتجاهات ورؤى الصناعة والأدلة العملية لإدارة الأزياء الموحدة في السعودية.' },
  { question: 'What topics does the blog cover?', questionAr: 'ما المواضيع التي تغطيها المدونة؟', answer: 'Our blog covers healthcare uniforms, corporate attire, hospitality uniforms, industrial safety wear, school uniforms, security uniforms, fabric technology, sustainability, and Saudi market trends.', answerAr: 'مدونتنا تغطي أزياء الرعاية الصحية، الملابس الرسمية، أزياء الضيافة، ملابس السلامة الصناعية، الزي المدرسي، أزياء الأمن، تقنية الأقمشة، الاستدامة، واتجاهات السوق السعودي.' },
  { question: 'Can I subscribe to the blog?', questionAr: 'هل يمكنني الاشتراك في المدونة؟', answer: 'Yes! Subscribe to our newsletter at the bottom of any page to receive the latest articles directly in your inbox.', answerAr: 'نعم! اشترك في نشرتنا الإخبارية في أسفل أي صفحة لتلقي أحدث المقالات مباشرة في بريدك الإلكتروني.' },
];

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const allTags = getAllTags();
  
  return (
    <>
      <SEO2026
        title="Uniform Industry Blog | UNEOM"
        titleAr="مدونة صناعة الأزياء الموحدة | يونيوم"
        description="Expert blog on professional uniforms in Saudi Arabia."
        descriptionAr="مدونة متخصصة في الأزياء المهنية في السعودية."
        locale="en"
        pageType="blog"
        mainEntity="Uniform Industry Blog"
        mainEntityAr="مدونة صناعة الأزياء الموحدة"
        primaryImage="/images/blog/uniform-trends-2025.jpg"
        primaryImageAlt="UNEOM Blog"
        faqs={blogFAQs}
        breadcrumbs={[
          { name: 'Blog', nameAr: 'المدونة', url: '/blog' },
        ]}
      />

      <main className="py-10">
        <Container>
          <div className="max-w-7xl mx-auto">
            <header className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
                <span>📚</span>
                <span className="text-sm font-medium">Industry Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">UNEOM <span className="text-blue-600">Blog</span></h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert insights, trends, and guides on professional uniforms and workwear in Saudi Arabia
              </p>
            </header>
            
            {/* Featured Post */}
            {allPosts.length > 0 && (
              <div className="mb-16">
                <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={allPosts[0].featuredImage || '/images/blog/placeholder.jpg'}
                      alt={allPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{formatDate(allPosts[0].date)}</span>
                      <span>•</span>
                      <span>{allPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${allPosts[0].slug}`}>{allPosts[0].title}</Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{allPosts[0].excerpt}</p>
                    <Link href={`/blog/${allPosts[0].slug}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                      Read Article →
                    </Link>
                  </div>
                </div>
              </div>
            )}
            
            {/* Tags */}
            {allTags.length > 0 && (
              <div className="mb-12">
                <h2 className="text-lg font-semibold mb-4">Browse by Topic</h2>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 12).map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag}`} className="px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full text-sm transition-colors">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.slice(1).map((post) => (
                  <article key={post.slug} className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.featuredImage || '/images/blog/placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-16" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {blogFAQs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
