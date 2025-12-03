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
  title: 'أزياء الضيافة السعودية | زي الفنادق والمطاعم | يونيوم',
  titleAr: 'أزياء الضيافة السعودية | زي الفنادق والمطاعم | يونيوم',
  description: 'Premium hospitality uniforms in Saudi Arabia.',
  descriptionAr: 'أزياء ضيافة فاخرة في السعودية. زي موظفي الفنادق، المطاعم، الطهاة للفنادق وصناعة الضيافة. من 249 ريال. علامة تجارية مخصصة، توصيل سريع!',
  keywords: ['أزياء الضيافة السعودية', 'زي الفنادق'],
  keywordsAr: ['أزياء الضيافة السعودية', 'زي الفنادق', 'زي المطاعم', 'زي الطهاة', 'زي النادل', 'زي الكونسيرج'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/hospitality-attire',
  image: '/images/hospitality_uniform_concierge.jpg',
  imageAlt: 'أزياء الضيافة السعودية - موظفي الفنادق والمطاعم',
  aiSummary: 'UNEOM hospitality uniforms for Saudi hotels.',
  aiSummaryAr: 'أزياء الضيافة من يونيوم للفنادق والمطاعم السعودية. المنتجات: زي الفنادق الفاخرة (من 399 ريال)، زي موظفي المطاعم (من 249 ريال)، زي الطهاة (من 299 ريال)، زي الكونسيرج (من 349 ريال). نخدم فنادق 5 نجوم، المنتجعات الفاخرة، ومطاعم الطعام الفاخر.'
});

export const dynamic = 'force-static';

const hospitalityFAQsAr = [
  { question: 'هل توردون أزياء لفنادق 5 نجوم؟', questionAr: 'هل توردون أزياء لفنادق 5 نجوم؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد أزياء الضيافة للعديد من فنادق 5 نجوم والمنتجعات الفاخرة في جميع أنحاء السعودية. نقدم برامج أزياء كاملة من مكتب الاستقبال إلى خدمة التنظيف.' },
  { question: 'هل يمكنكم مطابقة ألوان علامتنا التجارية الفندقية؟', questionAr: 'هل يمكنكم مطابقة ألوان علامتنا التجارية الفندقية؟', answer: 'Yes.', answerAr: 'بالتأكيد! يمكننا مطابقة ألوان العلامة التجارية بدقة باستخدام مراجع بانتون ودمج شعار فندقكم من خلال التطريز أو الطباعة.' },
  { question: 'ما المشمول في برنامج أزياء الفندق؟', questionAr: 'ما المشمول في برنامج أزياء الفندق؟', answer: 'Full program.', answerAr: 'برامج أزياء الفنادق لدينا تغطي جميع الموظفين: مكتب الاستقبال، الكونسيرج، الحمالين، خدمة التنظيف، خدمة الأطعمة والمشروبات، طاقم المطبخ، السبا، والإدارة. نقدم التصميم والإنتاج والتوريد المستمر.' },
];

const products = [
  { id: 'luxury-hotel-uniform', name: 'زي الفنادق الفاخرة', description: 'أزياء فاخرة لفنادق 5 نجوم', price: 'من 399 ريال', image: '/images/products/hotel-uniform.jpg', href: '/ar/shop/hospitality-attire/luxury-hotel-uniform', features: ['تصميم أنيق', 'مقاوم للبقع', 'قابل للتنفس'] },
  { id: 'restaurant-staff-uniform', name: 'زي موظفي المطاعم', description: 'ملابس نادل وخدمة احترافية', price: 'من 249 ريال', image: '/images/products/restaurant-uniform.jpg', href: '/ar/shop/hospitality-attire/restaurant-staff-uniform', features: ['سهل العناية', 'متين', 'مريح'] },
  { id: 'chef-uniform', name: 'زي الطهاة', description: 'معاطف طهاة وملابس مطبخ احترافية', price: 'من 299 ريال', image: '/images/products/chef-coat-white.jpg', href: '/ar/shop/hospitality-attire/chef-uniform', features: ['مقاوم للحرارة', 'مقاوم للبقع', 'قابل للتنفس'] },
  { id: 'concierge-attire', name: 'زي الكونسيرج', description: 'أزياء راقية لخدمات الضيوف', price: 'من 349 ريال', image: '/images/hospitality_uniform_concierge.jpg', href: '/ar/shop/hospitality-attire/concierge-attire', features: ['قماش فاخر', 'مقاس مفصل', 'احترافي'] },
  { id: 'housekeeping-uniform', name: 'زي خدمة التنظيف', description: 'أزياء عملية لموظفي التنظيف', price: 'من 199 ريال', image: '/images/products/housekeeping-uniform.jpg', href: '/ar/shop/hospitality-attire/housekeeping-uniform', features: ['متين', 'سهل الغسل', 'مريح'] },
  { id: 'spa-uniform', name: 'زي السبا والعافية', description: 'أزياء مريحة لمعالجي السبا', price: 'من 229 ريال', image: '/images/products/spa-uniform.jpg', href: '/ar/shop/hospitality-attire/spa-uniform', features: ['قماش ناعم', 'مقاس مريح', 'احترافي'] },
];

export default function HospitalityAttirePageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="أزياء الضيافة السعودية | يونيوم" titleAr="أزياء الضيافة السعودية | يونيوم" description="Hospitality uniforms." descriptionAr="أزياء ضيافة فاخرة." locale="ar" pageType="category" mainEntity="Hospitality Uniforms" mainEntityAr="أزياء الضيافة" primaryImage="/images/hospitality_uniform_concierge.jpg" primaryImageAlt="أزياء الضيافة" faqs={hospitalityFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Hospitality', nameAr: 'الضيافة', url: '/ar/shop/hospitality-attire' }]} industry="الضيافة" />

      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'أزياء الضيافة', href: '/ar/shop/hospitality-attire' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-amber-400">🏨</span><span className="text-sm font-medium">صناعة الضيافة</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء <span className="bg-gradient-to-r from-amber-300 to-orange-300 text-transparent bg-clip-text">الضيافة</span></h1>
            <p className="text-xl mb-8 text-amber-100 leading-relaxed">أزياء فاخرة للفنادق والمطاعم وخدمات الضيافة في السعودية.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق أزياء الضيافة" centered>مجموعة أزياء الضيافة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-amber-600">{product.price}</span><span className="text-gray-400 group-hover:text-amber-600">←</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن أزياء الضيافة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {hospitalityFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج أزياء فندق مخصصة؟</h2>
            <p className="text-xl mb-8 text-amber-100">تواصل معنا لبرامج أزياء خاصة بالفنادق مع علامة تجارية مخصصة.</p>
            <Link href="/ar/quote?category=hospitality" className="inline-flex items-center px-8 py-4 bg-white text-amber-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر للفنادق ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/hospitality-attire" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
