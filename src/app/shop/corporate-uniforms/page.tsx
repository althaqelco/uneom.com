import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Corporate Uniforms in Saudi Arabia | UNEOM',
  titleAr: 'الأزياء المؤسسية | متجر يونيوم',
  description: 'Shop the best premium corporate uniforms for companies in Saudi Arabia. Dress shirts, blazers, and management attire at competitive wholesale prices.',
  descriptionAr: 'تسوق أفضل الأزياء المؤسسية الفاخرة للشركات في السعودية. قمصان رسمية، بليزرات، وملابس إدارة بأسعار جملة تنافسية.',
  keywords: ['corporate uniforms', 'company clothing', 'management attire', 'business suits'],
  keywordsAr: ['أزياء مؤسسية', 'ملابس شركات', 'زي إداري'],
  locale: 'en',
  pageType: 'product',
  path: '/shop/corporate-uniforms',
  image: '/images/hero/hero-1.jpg',
  imageAlt: 'Corporate Uniforms',
  aiSummary: 'Shop the best premium corporate uniforms for companies in Saudi Arabia. Dress shirts, blazers, and management attire at competitive wholesale prices.',
});

export const dynamic = 'force-static';

const features = [
  { title: 'Exceptional Quality', desc: 'Products manufactured from the best materials to ensure durability and withstand working conditions.' },
  { title: 'Customization Options', desc: 'Ability to add custom embroidery and logos to match your brand identity.' },
  { title: 'Wholesale Prices', desc: 'Special and competitive discounts for large volume orders and ongoing supply contracts.' },
  { title: 'Standards Compliance', desc: 'Full compliance with Saudi standards and specifications (SASO) and safety requirements.' }
];

const faqs = [
  { question: 'Can you provide products with custom designs and specific sizes?', answer: 'Yes, we offer custom tailoring services to ensure products perfectly fit the specific needs and sizes of your employees.' },
  { question: 'What is the expected delivery time for large orders?', answer: 'Delivery time varies based on order volume and level of customization, typically ranging from 2 to 4 weeks for commercial quantities.' },
  { question: 'Do you offer a warranty on products?', answer: 'All our products undergo strict quality control, and we guarantee the replacement of any items with manufacturing defects.' }
];

export default function CorporateUniformsShopPageEN() {
  return (
    <>
      <SEO2026 
        title="Corporate Uniforms" 
        titleAr="الأزياء المؤسسية" 
        description="Shop the best premium corporate uniforms for companies in Saudi Arabia. Dress shirts, blazers, and management attire at competitive wholesale prices." 
        locale="en" 
        pageType="product" 
        mainEntity="Corporate Uniforms" 
        primaryImage="/images/hero/hero-1.jpg" 
        primaryImageAlt="Corporate Uniforms" 
        faqs={faqs} 
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Corporate Uniforms', url: '/shop/corporate-uniforms' }]} 
        certifications={['SASO']} 
        clientCount={200} 
        yearsInBusiness={20} 
        industry="Corporate Wear" 
      />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-indigo-900 text-white">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Corporate Uniforms', href: '/shop/corporate-uniforms' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Corporate Uniforms</h1>
            <p className="text-xl text-gray-300 leading-relaxed">Shop the best premium corporate uniforms for companies in Saudi Arabia. Dress shirts, blazers, and management attire at competitive wholesale prices.</p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <SectionHeading subtitle="Details" centered>Product Information</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
            {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.desc}</p></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="FAQs" centered>Frequently Asked Questions</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to order or need more details?</h2>
            <p className="text-xl mb-8 text-gray-600">The UNEOM sales team is ready to serve you and meet your needs with the best prices.</p>
            <Link href="/quote" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl transition-all shadow-lg">Request a Quote →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
