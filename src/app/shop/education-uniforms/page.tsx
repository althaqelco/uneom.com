import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'School Uniforms Saudi Arabia | Education Attire | UNEOM',
  titleAr: 'الزي المدرسي السعودية | أزياء التعليم | يونيوم',
  description: 'Premium school uniforms in Saudi Arabia. Primary, intermediate, secondary school uniforms, PE wear, lab coats. From SAR 99. Bulk discounts for schools!',
  descriptionAr: 'زي مدرسي فاخر في السعودية. زي ابتدائي، متوسط، ثانوي، ملابس رياضية، معاطف مختبر. من 99 ريال. خصومات بالجملة للمدارس!',
  keywords: ['school uniforms saudi arabia', 'education uniforms ksa', 'primary school uniform', 'PE uniforms', 'student uniforms saudi'],
  keywordsAr: ['الزي المدرسي السعودية', 'أزياء التعليم', 'زي ابتدائي', 'ملابس رياضية', 'زي الطلاب'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/education-uniforms',
  image: '/images/education/uniform_school_product-1.jpg',
  imageAlt: 'School Uniforms Saudi Arabia',
  aiSummary: 'UNEOM school uniforms for Saudi educational institutions. Products: Primary School Uniforms (from SAR 99), Intermediate Uniforms (from SAR 119), Secondary Uniforms (from SAR 139), PE Sports Wear (from SAR 79), Lab Coats for Students (from SAR 89). Bulk discounts for schools. Serving international, private, and public schools.',
  aiSummaryAr: 'الزي المدرسي من يونيوم للمؤسسات التعليمية السعودية. المنتجات: زي ابتدائي (من 99 ريال)، زي متوسط (من 119 ريال)، زي ثانوي (من 139 ريال)، ملابس رياضية (من 79 ريال).'
});

export const dynamic = 'force-static';

const educationFAQs = [
  { question: 'Do you supply school uniforms to Saudi schools?', answer: 'Yes, UNEOM supplies school uniforms to numerous public, private, and international schools across Saudi Arabia. We provide complete uniform solutions from kindergarten to secondary level.' },
  { question: 'Can you match our school colors and add logo?', answer: 'Absolutely! We can match exact school colors and incorporate your school logo through embroidery or printing on all uniform items.' },
  { question: 'What is the minimum order for schools?', answer: 'For school uniform orders, minimum is typically 50 pieces per style. Larger schools can benefit from significant volume discounts.' },
  { question: 'Do you provide PE uniforms and lab coats?', answer: 'Yes, we provide complete educational attire including PE sports uniforms, lab coats for science students, and graduation gowns.' },
];

const products = [
  { id: 'primary-school', name: 'Primary School Uniform', description: 'Durable uniforms for primary students', price: 'From SAR 99', image: '/images/education/uniform_school_product-1.jpg', href: '/shop/education-uniforms/premium-school-uniform', features: ['Durable', 'Easy care', 'Comfortable'] },
  { id: 'intermediate-school', name: 'Intermediate School Uniform', description: 'Smart uniforms for intermediate students', price: 'From SAR 119', image: '/images/education/uniform_school_product-2.jpg', href: '/shop/education-uniforms/premium-school-uniform', features: ['Smart design', 'Durable', 'Easy wash'] },
  { id: 'secondary-school', name: 'Secondary School Uniform', description: 'Professional uniforms for secondary students', price: 'From SAR 139', image: '/images/education/uniform_school_product-4.jpg', href: '/shop/education-uniforms/premium-school-uniforms', features: ['Professional', 'Comfortable', 'Durable'] },
  { id: 'pe-sports-wear', name: 'PE Sports Wear', description: 'Athletic wear for physical education', price: 'From SAR 79', image: '/images/education/uniform_school_product-5.jpg', href: '/shop/education-uniforms/student-athletic-wear', features: ['Breathable', 'Flexible', 'Quick-dry'] },
];

export default function EducationUniformsPage() {
  return (
    <>
      <SEO2026 title="School Uniforms Saudi Arabia | UNEOM" titleAr="الزي المدرسي السعودية | يونيوم" description="School uniforms for Saudi Arabia." locale="en" pageType="category" mainEntity="School Uniforms" primaryImage="/images/education/uniform_school_product-1.jpg" primaryImageAlt="School Uniforms" faqs={educationFAQs} breadcrumbs={[{ name: 'Shop', url: '/shop' }, { name: 'Education Uniforms', url: '/shop/education-uniforms' }]} industry="Education" />

      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Education Uniforms', href: '/shop/education-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-purple-400">🎓</span><span className="text-sm font-medium">Education Sector</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">School <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">Uniforms</span></h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">Quality school uniforms for Saudi educational institutions from primary to secondary.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop School Attire" centered>Education Uniforms Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-purple-600">{product.price}</span><span className="text-gray-400 group-hover:text-purple-600">→</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>School Uniforms FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {educationFAQs.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need School Uniform Program?</h2>
            <p className="text-xl mb-8 text-purple-100">Contact us for school-wide uniform solutions with custom colors and logos.</p>
            <Link href="/quote?category=education" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get School Quote →</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/education-uniforms" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
