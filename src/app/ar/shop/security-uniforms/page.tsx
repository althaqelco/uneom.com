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
  title: 'أزياء الأمن والحراسة في السعودية | زي حراس الأمن | يونيوم',
  titleAr: 'أزياء الأمن والحراسة في السعودية | زي حراس الأمن | يونيوم',
  description: 'Premium security uniforms in Saudi Arabia for security companies and guards.',
  descriptionAr: 'أفضل أزياء أمن وحراسة في السعودية. زي حراس الأمن، ملابس تكتيكية، جاكيتات دوريات لشركات الأمن والمولات والفنادق. أقمشة متينة. من 199 ريال. تطريز شعار الشركة!',
  keywords: ['security uniforms saudi arabia', 'guard uniforms ksa', 'tactical wear'],
  keywordsAr: ['أزياء الأمن السعودية', 'زي الحراسة', 'ملابس تكتيكية', 'جاكيت دوريات', 'زي شركات الأمن', 'زي حراس المولات'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/security-uniforms',
  image: '/images/security/security-guard-professional.jpg',
  imageAlt: 'أزياء الأمن والحراسة في السعودية - يونيوم',
  aiSummary: 'UNEOM security uniforms for Saudi security companies.',
  aiSummaryAr: 'أزياء الأمن من يونيوم لشركات الأمن السعودية. المنتجات: زي ضابط أمن (من 199 ريال)، سترات تكتيكية (من 149 ريال)، جاكيت دوريات (من 229 ريال). نخدم شركات الأمن الخاصة والمولات والفنادق.'
});

export const dynamic = 'force-static';

const securityFAQsAr = [
  { question: 'هل توردون لشركات الأمن؟', questionAr: 'هل توردون لشركات الأمن؟', answer: 'Yes, UNEOM supplies to security companies.', answerAr: 'نعم، يونيوم تورد أزياء الأمن لشركات الأمن الخاصة والمنشآت الحكومية والمولات والفنادق وفرق أمن الشركات في جميع أنحاء السعودية.' },
  { question: 'هل يمكنكم إضافة شعارات شركات الأمن؟', questionAr: 'هل يمكنكم إضافة شعارات شركات الأمن؟', answer: 'Yes, we provide professional embroidery.', answerAr: 'نعم، نقدم تطريزاً احترافياً وتثبيت شارات لشعارات شركات الأمن ورتب الضباط وشارات الأسماء.' },
  { question: 'هل توفرون إكسسوارات تكتيكية؟', questionAr: 'هل توفرون إكسسوارات تكتيكية؟', answer: 'Yes, we supply security accessories.', answerAr: 'نعم، نوفر إكسسوارات الأمن بما فيها أحزمة المعدات وحافظات الراديو وحاملات الهوية والأحذية التكتيكية لتكمل مجموعة الأزياء.' },
  { question: 'ما متانة أزياء الأمن؟', questionAr: 'ما متانة أزياء الأمن؟', answer: 'Our uniforms are made from heavy-duty fabrics.', answerAr: 'أزياء الأمن لدينا مصنوعة من أقمشة شديدة التحمل مصممة للاستخدام اليومي والظروف القاسية. تحافظ على مظهرها بعد أكثر من 100 دورة غسيل.' },
];

const products = [
  { id: 'security-officer-uniform', name: 'زي ضابط الأمن', description: 'زي احترافي لضباط الأمن', price: 'من ١٩٩ ريال', image: '/images/products/security/security-patrol-jacket-main.jpg', href: '/ar/shop/security-uniforms/security-officer-uniform', features: ['محترف', 'متين', 'مريح'] },
  { id: 'tactical-security-vest', name: 'سترة أمنية تكتيكية', description: 'سترة متعددة الاستخدامات لموظفي الأمن', price: 'من ١٤٩ ريال', image: '/images/security/bulletproof-vest-modern.jpg', href: '/ar/shop/security-uniforms/tactical-security-vest', features: ['جيوب متعددة', 'متين', 'قابل للتعديل'] },
  { id: 'security-patrol-jacket', name: 'جاكيت دورية أمن', description: 'جاكيت دورية مقاوم للطقس', price: 'من ٢٢٩ ريال', image: '/images/security/security_guard.jpg', href: '/ar/shop/security-uniforms/security-patrol-jacket', features: ['مقاوم للماء', 'عاكس', 'دافئ'] },
  { id: 'security-accessories', name: 'طقم إكسسوارات الأمن', description: 'حزمة إكسسوارات أمنية كاملة', price: 'من ٤٩ ريال', image: '/images/security/security-compliance.jpg', href: '/ar/shop/security-uniforms/security-accessories-kit', features: ['حزام متعدد الاستخدامات', 'حامل هوية', 'جيب راديو'] },
];

export default function SecurityUniformsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="أزياء الأمن والحراسة في السعودية | يونيوم" titleAr="أزياء الأمن والحراسة في السعودية | يونيوم" description="Security uniforms for Saudi Arabia." descriptionAr="أزياء أمن وحراسة للسعودية." locale="ar" pageType="category" mainEntity="Security Uniforms" mainEntityAr="أزياء الأمن" primaryImage="/images/security/security-guard-professional.jpg" primaryImageAlt="أزياء الأمن" faqs={securityFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Security', nameAr: 'الأمن', url: '/ar/shop/security-uniforms' }]} industry="الأمن" />

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'أزياء الأمن', href: '/ar/shop/security-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-gray-400">🛡️</span><span className="text-sm font-medium">قطاع الأمن</span></div>
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

          <section className="text-center bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج أزياء أمن مخصصة؟</h2>
            <p className="text-xl mb-8 text-gray-300">تواصل معنا لحلول أزياء أمن كاملة مع التخصيص بشعار شركتك.</p>
            <Link href="/ar/quote?category=security" className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/security-uniforms" className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
