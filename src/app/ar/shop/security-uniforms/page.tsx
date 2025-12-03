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
  title: 'أزياء الأمن السعودية | زي الحراسة | يونيوم',
  titleAr: 'أزياء الأمن السعودية | زي الحراسة | يونيوم',
  description: 'Security uniforms in Saudi Arabia.',
  descriptionAr: 'أزياء أمن فاخرة في السعودية. زي حراسة أمنية، ملابس تكتيكية، جاكيت دوريات لشركات الأمن. من 199 ريال. علامة تجارية مخصصة!',
  keywords: ['أزياء الأمن السعودية', 'زي الحراسة'],
  keywordsAr: ['أزياء الأمن السعودية', 'زي الحراسة', 'ملابس تكتيكية', 'جاكيت دوريات', 'زي شركات الأمن'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/security-uniforms',
  image: '/images/products/security-officer-uniform.jpg',
  imageAlt: 'أزياء الأمن السعودية',
  aiSummary: 'UNEOM security uniforms for Saudi security companies.',
  aiSummaryAr: 'أزياء الأمن من يونيوم لشركات الأمن السعودية. المنتجات: زي ضابط أمن (من 199 ريال)، سترات أمنية تكتيكية (من 149 ريال)، جاكيت دوريات (من 229 ريال)، إكسسوارات أمنية (من 49 ريال). نخدم شركات الأمن الخاصة، أمن المولات، أمن الفنادق، وأمن الفعاليات.'
});

export const dynamic = 'force-static';

const securityFAQsAr = [
  { question: 'هل توردون لشركات الأمن؟', questionAr: 'هل توردون لشركات الأمن؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد أزياء الأمن لشركات الأمن الخاصة، المرافق الحكومية، المولات، الفنادق، وفرق الأمن المؤسسية في جميع أنحاء السعودية.' },
  { question: 'هل يمكنكم إضافة شعارات شركات الأمن؟', questionAr: 'هل يمكنكم إضافة شعارات شركات الأمن؟', answer: 'Yes.', answerAr: 'نعم، نقدم تطريز احترافي وتثبيت شارات لشعارات شركات الأمن، شارات الرتب، وشارات الأسماء.' },
  { question: 'هل تقدمون إكسسوارات تكتيكية؟', questionAr: 'هل تقدمون إكسسوارات تكتيكية؟', answer: 'Yes.', answerAr: 'نعم، نورد إكسسوارات أمنية تشمل أحزمة متعددة الاستخدامات، حوامل الراديو، حاملات الهوية، وأحذية تكتيكية لتكملة مجموعة أزيائنا.' },
];

const products = [
  { id: 'security-officer-uniform', name: 'زي ضابط الأمن', description: 'زي احترافي لضباط الأمن', price: 'من 199 ريال', image: '/images/products/security-officer-uniform.jpg', href: '/ar/shop/security-uniforms/security-officer-uniform', features: ['احترافي', 'متين', 'مريح'] },
  { id: 'tactical-security-vest', name: 'سترة أمنية تكتيكية', description: 'سترة متعددة الاستخدامات لأفراد الأمن', price: 'من 149 ريال', image: '/images/products/tactical-vest.jpg', href: '/ar/shop/security-uniforms/tactical-security-vest', features: ['متعددة الجيوب', 'متينة', 'قابلة للتعديل'] },
  { id: 'security-patrol-jacket', name: 'جاكيت دوريات الأمن', description: 'جاكيت مقاوم للطقس للدوريات', price: 'من 229 ريال', image: '/images/products/security-jacket.jpg', href: '/ar/shop/security-uniforms/security-patrol-jacket', features: ['مقاوم للماء', 'عاكس', 'دافئ'] },
  { id: 'security-accessories', name: 'طقم إكسسوارات الأمن', description: 'حزمة إكسسوارات أمنية كاملة', price: 'من 49 ريال', image: '/images/products/security-accessories.jpg', href: '/ar/shop/security-uniforms/security-accessories-kit', features: ['حزام متعدد الاستخدامات', 'حامل هوية', 'حامل راديو'] },
];

export default function SecurityUniformsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="أزياء الأمن السعودية | يونيوم" titleAr="أزياء الأمن السعودية | يونيوم" description="Security uniforms." descriptionAr="أزياء أمن فاخرة للسعودية." locale="ar" pageType="category" mainEntity="Security Uniforms" mainEntityAr="أزياء الأمن" primaryImage="/images/products/security-officer-uniform.jpg" primaryImageAlt="أزياء الأمن" faqs={securityFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Security', nameAr: 'الأمن', url: '/ar/shop/security-uniforms' }]} industry="الأمن" />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'أزياء الأمن', href: '/ar/shop/security-uniforms' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-gray-400">🛡️</span><span className="text-sm font-medium">صناعة الأمن</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء <span className="bg-gradient-to-r from-gray-300 to-white text-transparent bg-clip-text">الأمن</span></h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">أزياء أمن احترافية وملابس تكتيكية لشركات الأمن السعودية.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق أزياء الأمن" centered>مجموعة أزياء الأمن</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-gray-800">{product.price}</span><span className="text-gray-400 group-hover:text-gray-600">←</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن أزياء الأمن</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {securityFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج برنامج أزياء أمن؟</h2>
            <p className="text-xl mb-8 text-gray-300">تواصل معنا لحلول أزياء شركات الأمن مع علامة تجارية مخصصة.</p>
            <Link href="/ar/quote?category=security" className="inline-flex items-center px-8 py-4 bg-white text-gray-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر الأمن ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/security-uniforms" className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
