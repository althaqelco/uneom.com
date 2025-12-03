import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Uniform Case Studies Saudi Arabia | Success Stories | UNEOM',
  titleAr: 'دراسات حالة الأزياء الموحدة السعودية | قصص النجاح | يونيوم',
  description: 'Real uniform success stories from Saudi businesses. See how UNEOM transformed hotels, hospitals, retail chains with professional uniform solutions. ROI results included.',
  descriptionAr: 'قصص نجاح حقيقية للأزياء الموحدة من الشركات السعودية. شاهد كيف حولت يونيوم الفنادق والمستشفيات وسلاسل البيع بالتجزئة بحلول الأزياء المهنية.',
  keywords: ['uniform case studies', 'success stories saudi', 'hotel uniform transformation', 'hospital uniform ROI', 'retail branding uniform'],
  keywordsAr: ['دراسات حالة الأزياء', 'قصص النجاح السعودية', 'تحويل زي الفنادق', 'عائد استثمار زي المستشفيات'],
  locale: 'en',
  pageType: 'resources',
  path: '/case-studies',
  image: '/images/case-studies/hero.jpg',
  imageAlt: 'UNEOM Case Studies',
  aiSummary: 'UNEOM case studies showcase real uniform transformations. Featured cases: 5-Star Hotel Spa (50% staff satisfaction increase), Beauty Chain Standardization (30% brand recognition boost), Hospital Aesthetic Clinic (improved patient trust), Luxury Salon Evolution (premium brand positioning), Retail Brand Transformation (unified multi-location branding). Each case includes: challenge, solution, results with metrics.',
  aiSummaryAr: 'دراسات حالة يونيوم تعرض تحولات أزياء حقيقية. الحالات المميزة: سبا فندق 5 نجوم، توحيد سلسلة صالونات التجميل، عيادة تجميل مستشفى، تطور صالون فاخر، تحويل علامة تجارية للبيع بالتجزئة.'
});

export const dynamic = 'force-static';

const caseStudies = [
  { id: '5-star-hotel-spa', title: '5-Star Hotel & Spa', category: 'Hospitality', description: 'Complete uniform transformation for a luxury resort, increasing staff satisfaction by 50%.', image: '/images/hospitality/hospitality_uniform_hotel_service.jpg', href: '/case-studies/5-star-hotel-spa', results: ['50% satisfaction increase', '200+ staff uniformed', 'Brand consistency'] },
  { id: 'beauty-chain-standardization', title: 'Beauty Chain Standardization', category: 'Beauty & Wellness', description: 'Unified branding across 15 salon locations, boosting brand recognition by 30%.', image: '/images/hospitality/hospitality_uniform_concierge.jpg', href: '/case-studies/beauty-chain-standardization', results: ['30% brand boost', '15 locations', '150+ employees'] },
  { id: 'hospital-aesthetic-clinic', title: 'Hospital Aesthetic Clinic', category: 'Healthcare', description: 'Professional uniform program improving patient trust and staff confidence.', image: '/images/products/medical/medical-scrubs-hero.jpg', href: '/case-studies/hospital-aesthetic-clinic', results: ['Improved trust', '50+ staff', 'Premium quality'] },
  { id: 'luxury-salon-evolution', title: 'Luxury Salon Evolution', category: 'Beauty & Wellness', description: 'Premium brand positioning through elegant uniform design for high-end salon.', image: '/images/hospitality/hospitality_uniform_restaurant.jpg', href: '/case-studies/luxury-salon-evolution', results: ['Premium positioning', 'Custom design', 'Brand elevation'] },
  { id: 'nationwide-retail-branding', title: 'Nationwide Retail Branding', category: 'Retail', description: 'Unified multi-location branding for major retail chain across Saudi Arabia.', image: '/images/retail-shops/retail-showcase.jpg', href: '/case-studies/nationwide-retail-branding', results: ['50+ locations', '500+ staff', 'Consistent brand'] },
  { id: 'retail-brand-transformation', title: 'Retail Brand Transformation', category: 'Retail', description: 'Complete brand refresh through strategic uniform redesign for retail stores.', image: '/images/products/retail/uniform-1.jpg', href: '/case-studies/retail-brand-transformation', results: ['Brand refresh', 'Modern design', 'Customer impact'] },
];

const caseStudyFAQs = [
  { question: 'Are these real case studies?', answer: 'Yes, all case studies are based on real UNEOM projects. Client names may be anonymized for confidentiality, but all results and metrics are authentic.' },
  { question: 'Can I get similar results for my business?', answer: 'Results vary by project scope and industry. Contact us for a free consultation to discuss how we can help achieve similar outcomes for your organization.' },
  { question: 'How long do uniform transformation projects take?', answer: 'Typical projects range from 4-12 weeks depending on scope. Simple rollouts may be faster, while custom design programs take longer.' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SEO2026
        title="Uniform Case Studies | UNEOM"
        titleAr="دراسات حالة الأزياء | يونيوم"
        description="Real uniform success stories from Saudi businesses."
        descriptionAr="قصص نجاح حقيقية للأزياء من الشركات السعودية."
        locale="en"
        pageType="resources"
        mainEntity="Uniform Case Studies"
        mainEntityAr="دراسات حالة الأزياء"
        primaryImage="/images/case-studies/hero.jpg"
        primaryImageAlt="UNEOM Case Studies"
        faqs={caseStudyFAQs}
        breadcrumbs={[
          { name: 'Case Studies', nameAr: 'دراسات الحالة', url: '/case-studies' },
        ]}
      />

      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden py-16">
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-purple-400">📊</span>
              <span className="text-sm font-medium">Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Case <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">Studies</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">
              Real results from real businesses. See how UNEOM transformed uniform programs across Saudi Arabia.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">6</div>
                <div className="text-sm text-purple-200">Cases</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">1000+</div>
                <div className="text-sm text-purple-200">Staff</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">50%</div>
                <div className="text-sm text-purple-200">Avg. Impact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">100%</div>
                <div className="text-sm text-purple-200">Success</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Real Results" centered>Featured Case Studies</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {caseStudies.map((study) => (
                <Link key={study.id} href={study.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <span className="text-xs font-bold px-2 py-1 bg-purple-500 rounded-full mb-2 inline-block">{study.category}</span>
                        <h3 className="text-xl font-bold">{study.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.results.map((result, i) => (
                        <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">✓ {result}</span>
                      ))}
                    </div>
                    <span className="text-purple-600 font-semibold text-sm group-hover:underline">Read Case Study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Case Studies FAQ</SectionHeading>
            <div className="max-w-3xl mx-auto mt-12 space-y-4">
              {caseStudyFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-2" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl mb-8 text-purple-100">Contact us to discuss how we can transform your uniform program.</p>
            <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Started →</Link>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t">
        <div className="container mx-auto px-4 text-center">
          <Link href="/ar/case-studies" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
            🇸🇦 العربية
          </Link>
        </div>
      </section>
    </>
  );
}
