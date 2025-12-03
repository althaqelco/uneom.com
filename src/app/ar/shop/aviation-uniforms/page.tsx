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
  title: 'أزياء الطيران السعودية | زي الطيارين وطاقم الطائرة | يونيوم',
  titleAr: 'أزياء الطيران السعودية | زي الطيارين وطاقم الطائرة | يونيوم',
  description: 'Premium aviation uniforms in Saudi Arabia.',
  descriptionAr: 'أزياء طيران فاخرة في السعودية. زي الطيارين، ملابس طاقم الطائرة، زي موظفي الأرض للخطوط الجوية السعودية. من 899 ريال. تصاميم مخصصة، توصيل سريع!',
  keywords: ['أزياء الطيران السعودية', 'زي الطيارين'],
  keywordsAr: ['أزياء الطيران السعودية', 'زي الطيارين', 'ملابس طاقم الطائرة', 'زي الخطوط الجوية', 'زي المضيفات', 'زي طاقم الأرض'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/aviation-uniforms',
  image: '/images/airline-1.jpg',
  imageAlt: 'أزياء الطيران السعودية - الطيارين وطاقم الطائرة',
  aiSummary: 'UNEOM aviation uniforms for Saudi airlines.',
  aiSummaryAr: 'أزياء الطيران من يونيوم للخطوط الجوية السعودية. المنتجات: زي الطيارين (من 1,299 ريال) - احترافي، شارات الكتف مشمولة. ملابس طاقم الطائرة (من 899 ريال) - أنيقة، مريحة للرحلات الطويلة. زي موظفي الأرض (من 599 ريال) - متينة، ذات علامة تجارية. جميع الأزياء قابلة للتخصيص بشعارات الخطوط الجوية.'
});

export const dynamic = 'force-static';

const aviationFAQsAr = [
  { question: 'هل توردون أزياء الطيران للخطوط الجوية السعودية؟', questionAr: 'هل توردون أزياء الطيران للخطوط الجوية السعودية؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد أزياء الطيران لعدة خطوط جوية سعودية وأكاديميات طيران. نقدم حلول زي موحد كاملة تشمل زي الطيارين، ملابس طاقم الطائرة، وزي موظفي الأرض.' },
  { question: 'هل يمكنكم تخصيص أزياء الطيران بشعار خطوطنا الجوية؟', questionAr: 'هل يمكنكم تخصيص أزياء الطيران بشعار خطوطنا الجوية؟', answer: 'Yes.', answerAr: 'نعم، نقدم تخصيصاً كاملاً يشمل تطريز شعارات الخطوط الجوية، شارات الكتف المخصصة، الأجنحة، وشارات الاسم. نطابق ألوان العلامة التجارية بدقة باستخدام مراجع بانتون.' },
  { question: 'ما الحد الأدنى لطلب أزياء الطيران؟', questionAr: 'ما الحد الأدنى لطلب أزياء الطيران؟', answer: 'Minimum 25 pieces.', answerAr: 'الحد الأدنى للطلب لأزياء الطيران القياسية هو 25 قطعة لكل نمط. للأزياء المصممة خصيصاً، الحد الأدنى 50 قطعة. طلبات العينات متاحة للموافقة.' },
];

const products = [
  { id: 'pilot-uniform', name: 'طقم زي الطيار', description: 'زي طيار كامل مع جاكيت وبنطلون وشارات الكتف', price: 'من 1,299 ريال', image: '/images/products/pilot-uniform.jpg', href: '/ar/shop/aviation-uniforms/pilot-uniform', features: ['كابتن 4 خطوط', 'مقاوم للحريق', 'صوف فاخر'] },
  { id: 'cabin-crew-female', name: 'زي طاقم الطائرة للسيدات', description: 'ملابس طاقم طائرة أنيقة للمضيفات', price: 'من 899 ريال', image: '/images/products/cabin-crew-female.jpg', href: '/ar/shop/aviation-uniforms/cabin-crew-female', features: ['مقاوم للتجاعيد', 'تصميم أنيق', 'مقاس مريح'] },
  { id: 'cabin-crew-male', name: 'زي طاقم الطائرة للرجال', description: 'ملابس طاقم طائرة احترافية للمضيفين', price: 'من 899 ريال', image: '/images/products/cabin-crew-male.jpg', href: '/ar/shop/aviation-uniforms/cabin-crew-male', features: ['مظهر احترافي', 'قماش متين', 'سهل العناية'] },
  { id: 'ground-crew', name: 'زي طاقم الأرض', description: 'أزياء متينة لموظفي المطار الأرضي', price: 'من 599 ريال', image: '/images/products/ground-crew.jpg', href: '/ar/shop/aviation-uniforms/ground-crew', features: ['خيارات عاكسة', 'مقاوم للطقس', 'شرائط عاكسة'] },
];

export default function AviationUniformsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="أزياء الطيران السعودية | يونيوم" titleAr="أزياء الطيران السعودية | يونيوم" description="Aviation uniforms." descriptionAr="أزياء طيران فاخرة." locale="ar" pageType="category" mainEntity="Aviation Uniforms" mainEntityAr="أزياء الطيران" primaryImage="/images/airline-1.jpg" primaryImageAlt="أزياء الطيران" faqs={aviationFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Aviation', nameAr: 'الطيران', url: '/ar/shop/aviation-uniforms' }]} industry="الطيران" />

      <section className="bg-gradient-to-br from-blue-900 via-sky-800 to-indigo-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'أزياء الطيران', href: '/ar/shop/aviation-uniforms' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-sky-400">✈️</span><span className="text-sm font-medium">صناعة الطيران</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء <span className="bg-gradient-to-r from-sky-300 to-blue-300 text-transparent bg-clip-text">الطيران</span></h1>
            <p className="text-xl mb-8 text-sky-100 leading-relaxed">أزياء طيران فاخرة للخطوط الجوية السعودية. زي الطيارين، طاقم الطائرة، وموظفي الأرض مع علامة تجارية مخصصة.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق أزياء الطيران" centered>مجموعة أزياء الطيران</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-blue-600">{product.price}</span><span className="text-gray-400 group-hover:text-blue-600">←</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن أزياء الطيران</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {aviationFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج أزياء طيران مخصصة؟</h2>
            <p className="text-xl mb-8 text-blue-100">تواصل معنا لحلول أزياء خاصة بالخطوط الجوية مع علامة تجارية مخصصة.</p>
            <Link href="/ar/quote?category=aviation" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر للخطوط الجوية ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/aviation-uniforms" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
