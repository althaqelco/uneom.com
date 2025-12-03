import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'School Uniform Buyer Guide Saudi Arabia | Parents & Schools | UNEOM',
  titleAr: 'دليل شراء الزي المدرسي السعودية | الآباء والمدارس | يونيوم',
  description: 'Complete guide to buying school uniforms in Saudi Arabia. Ministry of Education requirements, fabric quality, sizing, best suppliers. For parents, schools, and administrators.',
  descriptionAr: 'دليل شامل لشراء الزي المدرسي في السعودية. متطلبات وزارة التعليم، جودة الأقمشة، المقاسات، أفضل الموردين. للآباء والمدارس والإداريين.',
  keywords: ['school uniforms saudi arabia', 'buy school uniforms riyadh', 'ministry education uniform requirements', 'best school uniform suppliers', 'uniform quality guide'],
  keywordsAr: ['الزي المدرسي السعودية', 'شراء الزي المدرسي الرياض', 'متطلبات وزارة التعليم للزي'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/school-uniform-buyer-guide',
  image: '/images/blog/school-uniforms.jpg',
  imageAlt: 'School Uniform Buyer Guide',
  publishedTime: '2024-08-15T08:00:00Z',
  author: 'UNEOM Education Team',
  aiSummary: 'School uniform buyer guide for Saudi Arabia. MOE requirements: White thobe for boys, approved colors for girls, PE uniforms. Key buying factors: Fabric quality (cotton blend 60%+), durability, modesty compliance, size availability. Price ranges: 150-300 SAR standard, 300-500 SAR premium. Best time to buy: June-July for discounts. Suppliers: Major retailers, school-specific vendors, custom manufacturers. Tips: Buy 2-3 sets, check return policies, verify MOE approval.'
});

export const dynamic = 'force-static';

const schoolFAQs = [
  { question: 'What are Saudi Ministry of Education uniform requirements?', answer: 'MOE requires specific uniform standards including white thobes for boys in public schools, approved color schemes for girls (varies by region), modest design compliance, and designated PE uniforms. International schools may have their own approved uniforms.' },
  { question: 'How much do school uniforms cost in Saudi Arabia?', answer: 'Standard school uniforms cost 150-300 SAR per set. Premium quality uniforms range 300-500 SAR. PE uniforms typically cost 100-200 SAR. Most families budget 500-1000 SAR per child for the school year including all uniform items.' },
  { question: 'When is the best time to buy school uniforms?', answer: 'The best time is June-July, before the back-to-school rush. Early buyers get better selection and often find 10-20% discounts. August sees highest demand and potential stock shortages. Some retailers offer year-round uniform availability.' },
];

const buyingTips = [
  { icon: '📏', title: 'Size Right', description: 'Buy slightly larger for growing children. Most uniforms should last the full school year.' },
  { icon: '🧵', title: 'Check Fabric', description: 'Look for 60%+ cotton content for comfort. Polyester blend adds durability.' },
  { icon: '✅', title: 'MOE Approved', description: 'Ensure uniforms meet Ministry of Education standards for your school type.' },
  { icon: '🔢', title: 'Buy Multiples', description: '2-3 sets recommended for daily rotation and laundry convenience.' },
  { icon: '📅', title: 'Shop Early', description: 'June-July offers best selection and potential discounts.' },
  { icon: '↩️', title: 'Return Policy', description: 'Check exchange/return policies before purchasing.' },
];

export default function SchoolUniformBuyerGuidePage() {
  return (
    <>
      <SEO2026
        title="School Uniform Buyer Guide | UNEOM"
        titleAr="دليل شراء الزي المدرسي | يونيوم"
        description="Guide to buying school uniforms in Saudi Arabia."
        locale="en"
        pageType="blog"
        mainEntity="School Uniform Guide"
        primaryImage="/images/blog/school-uniforms.jpg"
        primaryImageAlt="School Uniforms"
        faqs={schoolFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'School Uniform Buyer Guide', url: '/blog/school-uniform-buyer-guide' },
        ]}
        publishedDate="2024-08-15T08:00:00Z"
        author={{ name: 'UNEOM Education Team', title: 'Education Specialists' }}
        industry="Education"
      />

      <article>
        <header className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-blue-500 px-3 py-1 rounded-full">Parent Guide</span>
                <span>August 15, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                School Uniform <span className="text-blue-300">Buyer Guide</span> for Saudi Arabia
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Everything parents and schools need to know about purchasing quality school uniforms that meet MOE requirements.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/school-uniforms.jpg" alt="School Uniforms" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Choosing the right school uniform is an important decision for Saudi parents. This guide covers Ministry of Education requirements, quality indicators, sizing tips, and the best time to buy.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Smart Buying Tips</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {buyingTips.map((tip, index) => (
                      <div key={index} className="bg-blue-50 rounded-xl p-6">
                        <div className="text-4xl mb-4">{tip.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">MOE Uniform Requirements</h2>
                  
                  <h3 className="text-2xl font-bold mb-4 text-blue-600">Boys&apos; Uniforms</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>White thobe (traditional dress) for public schools</li>
                    <li>White or colored dress shirts for international schools</li>
                    <li>Navy or gray trousers as alternative options</li>
                    <li>PE uniform in school colors</li>
                  </ul>

                  <h3 className="text-2xl font-bold mb-4 text-pink-600">Girls&apos; Uniforms</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                    <li>Approved colors vary by region (commonly navy, green, gray)</li>
                    <li>Modest design with appropriate coverage</li>
                    <li>Abaya or full-length dress options</li>
                    <li>Head covering requirements vary by school type</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Quality Indicators</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl">🧵</span>
                        <div>
                          <strong>Fabric Composition:</strong> Look for 60% cotton minimum. Polyester-cotton blends offer durability and easy care.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl">🪡</span>
                        <div>
                          <strong>Stitching Quality:</strong> Double-stitched seams last longer. Check stress points like armholes and pockets.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl">🎨</span>
                        <div>
                          <strong>Color Fastness:</strong> Quality uniforms shouldn&apos;t fade after washing. Ask about colorfastness ratings.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-500 text-xl">📐</span>
                        <div>
                          <strong>Fit & Comfort:</strong> Room for movement and growth. Comfortable waistbands and collar designs.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Price Guide</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="p-3">Item</th>
                          <th className="p-3">Standard</th>
                          <th className="p-3">Premium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-3">Thobe/Dress</td>
                          <td className="p-3">150-200 SAR</td>
                          <td className="p-3">300-400 SAR</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Shirt</td>
                          <td className="p-3">50-80 SAR</td>
                          <td className="p-3">100-150 SAR</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">Trousers/Skirt</td>
                          <td className="p-3">80-120 SAR</td>
                          <td className="p-3">150-200 SAR</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-3">PE Set</td>
                          <td className="p-3">100-150 SAR</td>
                          <td className="p-3">200-300 SAR</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {schoolFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-blue-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">School Uniforms for Your Institution</h2>
                <p className="text-gray-600 mb-6">
                  UNEOM supplies quality school uniforms to schools and parents across Saudi Arabia.
                </p>
                <Link href="/quote?category=education" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  Get Education Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/school-uniform-buyer-guide" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}

