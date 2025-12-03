import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Hotel Staff Uniform Guide Saudi Arabia | Hospitality Attire | UNEOM',
  titleAr: 'دليل أزياء موظفي الفنادق السعودية | ملابس الضيافة | يونيوم',
  description: 'Complete guide to hotel staff uniforms in Saudi Arabia. Front desk, housekeeping, F&B, concierge. Luxury hotel standards, Saudi hospitality requirements, Vision 2030 tourism.',
  descriptionAr: 'دليل شامل لأزياء موظفي الفنادق في السعودية. الاستقبال، التدبير المنزلي، الأغذية والمشروبات، الكونسيرج. معايير الفنادق الفاخرة، متطلبات الضيافة السعودية.',
  keywords: ['hotel uniforms saudi arabia', 'hospitality attire riyadh', 'front desk uniforms', 'housekeeping uniforms', 'luxury hotel staff attire'],
  keywordsAr: ['أزياء الفنادق السعودية', 'ملابس الضيافة الرياض', 'أزياء الاستقبال', 'أزياء التدبير المنزلي'],
  locale: 'en',
  pageType: 'blog',
  path: '/blog/hotel-staff-uniform-guide',
  image: '/images/blog/hospitality-uniforms.jpg',
  imageAlt: 'Hotel Staff Uniform Guide',
  publishedTime: '2024-11-01T08:00:00Z',
  author: 'UNEOM Hospitality Team',
  aiSummary: 'Hotel staff uniform guide for Saudi Arabia. Department uniforms: Front desk (formal suits, abayas), Housekeeping (practical, modest), F&B (chef whites, server attire), Concierge (distinguished blazers). Saudi considerations: Modest design, heat-appropriate fabrics, cultural elements. Brand integration: Colors, logos, quality materials. Luxury standards for Vision 2030 tourism expansion. Cost range: 500-2000 SAR per uniform depending on role and quality.'
});

export const dynamic = 'force-static';

const hotelFAQs = [
  { question: 'What uniforms do hotel front desk staff need?', answer: 'Front desk staff typically require formal suits (blazers, trousers/skirts), name badges, and polished shoes. For female staff in Saudi Arabia, elegant abayas or modest professional attire is common. Colors should match hotel branding.' },
  { question: 'What are housekeeping uniform requirements?', answer: 'Housekeeping uniforms should be practical, modest, and comfortable. Include easy-clean polyester-cotton blend dresses or tunics with trousers, non-slip shoes, and protective aprons. Most hotels use specific colors to identify housekeeping staff.' },
  { question: 'How much do hotel uniforms cost in Saudi Arabia?', answer: 'Hotel uniform costs in Saudi Arabia range from 500 SAR for basic housekeeping uniforms to 2000+ SAR for luxury front-of-house attire. Bulk orders typically receive 15-30% discounts. Custom designs with embroidery add 10-20% to costs.' },
];

const departments = [
  { icon: '🛎️', title: 'Front Desk & Reception', description: 'Formal suits, blazers, elegant abayas. First impression excellence.', items: ['Blazers', 'Tailored trousers', 'Elegant abayas', 'Name badges'] },
  { icon: '🧹', title: 'Housekeeping', description: 'Practical, comfortable, easy-clean uniforms for daily duties.', items: ['Dresses/tunics', 'Trousers', 'Aprons', 'Non-slip shoes'] },
  { icon: '🍽️', title: 'Food & Beverage', description: 'Chef whites, server attire, and specialized kitchen wear.', items: ['Chef coats', 'Server vests', 'Aprons', 'Kitchen shoes'] },
  { icon: '🚗', title: 'Concierge & Valet', description: 'Distinguished uniforms representing hotel prestige.', items: ['Formal blazers', 'Caps', 'Gloves', 'Formal shoes'] },
  { icon: '🏊', title: 'Spa & Recreation', description: 'Comfortable, professional attire for wellness staff.', items: ['Tunics', 'Scrubs', 'Pool uniforms', 'Fitness wear'] },
  { icon: '🔒', title: 'Security', description: 'Professional, authoritative uniforms for guest safety.', items: ['Suits', 'Badges', 'Communication gear', 'Formal shoes'] },
];

export default function HotelStaffUniformGuidePage() {
  return (
    <>
      <SEO2026
        title="Hotel Staff Uniform Guide | UNEOM"
        titleAr="دليل أزياء موظفي الفنادق | يونيوم"
        description="Guide to hotel staff uniforms in Saudi Arabia."
        locale="en"
        pageType="blog"
        mainEntity="Hotel Staff Uniforms"
        primaryImage="/images/blog/hospitality-uniforms.jpg"
        primaryImageAlt="Hotel Staff Uniforms"
        faqs={hotelFAQs}
        breadcrumbs={[
          { name: 'Blog', url: '/blog' },
          { name: 'Hotel Uniform Guide', url: '/blog/hotel-staff-uniform-guide' },
        ]}
        publishedDate="2024-11-01T08:00:00Z"
        author={{ name: 'UNEOM Hospitality Team', title: 'Hospitality Specialists' }}
        industry="Hospitality"
      />

      <article>
        <header className="bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-800 text-white relative overflow-hidden py-16">
          <Container>
            <div className="relative z-10 max-w-4xl">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-amber-500 px-3 py-1 rounded-full">Hospitality Guide</span>
                <span>November 1, 2024</span>
                <span>•</span>
                <span>12 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Hotel Staff Uniform <span className="text-yellow-300">Guide</span> for Saudi Arabia
              </h1>
              <p className="text-xl text-amber-100 mb-8">
                Complete guide to creating exceptional hotel uniforms that blend international hospitality standards with Saudi cultural requirements.
              </p>
            </div>
          </Container>
        </header>

        <main className="py-16">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
                <Image src="/images/blog/hospitality-uniforms.jpg" alt="Hotel Staff Uniforms" fill className="object-cover" />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">Introduction</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  With Vision 2030 driving unprecedented growth in Saudi tourism, hotels need exceptional staff uniforms that create memorable guest experiences while respecting cultural values. This guide covers uniform requirements for every hotel department.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Department Uniform Guide</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {departments.map((dept, index) => (
                      <div key={index} className="bg-amber-50 rounded-xl p-6">
                        <div className="text-4xl mb-4">{dept.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                        <p className="text-gray-600 mb-4">{dept.description}</p>
                        <ul className="flex flex-wrap gap-2">
                          {dept.items.map((item, i) => (
                            <li key={i} className="bg-amber-200 text-amber-800 text-sm px-3 py-1 rounded-full">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Saudi Cultural Considerations</h2>
                  <p className="text-gray-600 mb-4">
                    Hotel uniforms in Saudi Arabia must balance international hospitality standards with local cultural requirements:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Modesty:</strong> Female staff uniforms should offer appropriate coverage, with options for abayas or modest alternatives.</li>
                    <li><strong>Climate:</strong> Lightweight, breathable fabrics are essential for comfort in Saudi&apos;s hot climate.</li>
                    <li><strong>Cultural Elements:</strong> Integration of Saudi design motifs can create unique, culturally relevant uniforms.</li>
                    <li><strong>Gender Considerations:</strong> Distinct male and female uniform options respecting local customs.</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Luxury Hotel Standards</h2>
                  <p className="text-gray-600 mb-4">
                    For 5-star and luxury properties, uniform quality must match service excellence:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Premium fabrics (Italian wool blends, Egyptian cotton)</li>
                    <li>Custom tailoring for perfect fit</li>
                    <li>Hand-stitched details and embroidery</li>
                    <li>High-quality hardware (buttons, zippers)</li>
                    <li>Regular replacement schedules to maintain appearance</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold mb-6">Brand Integration</h2>
                  <p className="text-gray-600 mb-4">
                    Effective hotel uniforms reinforce brand identity through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Brand colors incorporated into uniform design</li>
                    <li>Embroidered logos on blazers, shirts, and accessories</li>
                    <li>Consistent style across all departments</li>
                    <li>Quality materials reflecting brand positioning</li>
                  </ul>
                </section>
              </div>

              <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {hotelFAQs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                      <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                        <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-12 bg-amber-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Elevate Your Hotel Brand</h2>
                <p className="text-gray-600 mb-6">
                  UNEOM creates stunning hotel uniforms for Saudi Arabia&apos;s finest hospitality properties.
                </p>
                <Link href="/quote?category=hospitality" className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors">
                  Get Hospitality Quote →
                </Link>
              </section>
            </div>
          </Container>
        </main>
      </article>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/blog/hotel-staff-uniform-guide" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}

