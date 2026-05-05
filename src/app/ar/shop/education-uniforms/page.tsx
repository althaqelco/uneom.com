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
  title: 'الزي المدرسي في السعودية | أزياء التعليم والطلاب | يونيوم',
  titleAr: 'الزي المدرسي في السعودية | أزياء التعليم والطلاب | يونيوم',
  description: 'Premium school uniforms in Saudi Arabia for all educational stages.',
  descriptionAr: 'أفضل زي مدرسي في السعودية. زي ابتدائي، متوسط، ثانوي، ملابس رياضية. أقمشة متينة ومريحة للطلاب. من 99 ريال. خصومات كبيرة للمدارس!',
  keywords: ['school uniforms saudi arabia', 'education uniforms ksa', 'primary school uniform'],
  keywordsAr: ['الزي المدرسي السعودية', 'زي طلاب الرياض', 'أزياء التعليم', 'زي ابتدائي', 'ملابس رياضية'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/education-uniforms',
  image: '/images/education/uniform_school_product-1.jpg',
  imageAlt: 'الزي المدرسي في السعودية - يونيوم',
  aiSummary: 'UNEOM school uniforms for Saudi educational institutions.',
  aiSummaryAr: 'الزي المدرسي من يونيوم للمؤسسات التعليمية السعودية. المنتجات: زي ابتدائي (من 99 ريال)، زي متوسط (من 119 ريال)، زي ثانوي (من 139 ريال)، ملابس رياضية (من 79 ريال). خصومات بالجملة للمدارس.'
});

export const dynamic = 'force-static';

const educationFAQsAr = [
  { question: 'هل توردون زي مدرسي للمدارس السعودية؟', questionAr: 'هل توردون زي مدرسي للمدارس السعودية؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد زي مدرسي للعديد من المدارس الحكومية والخاصة والدولية في جميع أنحاء السعودية. نقدم حلول زي كاملة من الروضة إلى الثانوية.' },
  { question: 'هل يمكنكم مطابقة ألوان مدرستنا وإضافة الشعار؟', questionAr: 'هل يمكنكم مطابقة ألوان مدرستنا وإضافة الشعار؟', answer: 'Yes.', answerAr: 'بالتأكيد! يمكننا مطابقة ألوان المدرسة بدقة ودمج شعار مدرستكم من خلال التطريز أو الطباعة على جميع عناصر الزي.' },
  { question: 'ما الحد الأدنى لطلب المدارس؟', questionAr: 'ما الحد الأدنى لطلب المدارس؟', answer: 'Minimum 50 pieces.', answerAr: 'لطلبات الزي المدرسي، الحد الأدنى عادةً 50 قطعة لكل نمط. المدارس الأكبر يمكنها الاستفادة من خصومات كمية كبيرة.' },
  { question: 'هل تقدمون زي رياضي ومعاطف مختبر؟', questionAr: 'هل تقدمون زي رياضي ومعاطف مختبر؟', answer: 'Yes.', answerAr: 'نعم، نقدم ملابس تعليمية كاملة تشمل زي رياضي للتربية البدنية، معاطف مختبر لطلاب العلوم، وأثواب التخرج.' },
];

const products = [
  { id: 'primary-school', name: 'الزي المدرسي الابتدائي', description: 'زي متين لطلاب المرحلة الابتدائية', price: 'من ٩٩ ريال', image: '/images/education/uniform_school_product-1.jpg', href: '/ar/shop/education-uniforms/premium-school-uniform', features: ['متين', 'سهل العناية', 'مريح'] },
  { id: 'intermediate-school', name: 'الزي المدرسي المتوسط', description: 'زي أنيق لطلاب المرحلة المتوسطة', price: 'من ١١٩ ريال', image: '/images/education/uniform_school_product-2.jpg', href: '/ar/shop/education-uniforms/premium-school-uniform', features: ['تصميم أنيق', 'متين', 'سهل الغسيل'] },
  { id: 'secondary-school', name: 'الزي المدرسي الثانوي', description: 'زي محترف لطلاب المرحلة الثانوية', price: 'من ١٣٩ ريال', image: '/images/education/uniform_school_product-4.jpg', href: '/ar/shop/education-uniforms/premium-school-uniforms', features: ['محترف', 'مريح', 'متين'] },
  { id: 'pe-sports-wear', name: 'ملابس الرياضة البدنية', description: 'ملابس رياضية للتربية البدنية', price: 'من ٧٩ ريال', image: '/images/education/uniform_school_product-5.jpg', href: '/ar/shop/education-uniforms/student-athletic-wear', features: ['قابل للتنفس', 'مرن', 'سريع الجفاف'] },
];

export default function EducationUniformsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الزي المدرسي في السعودية | يونيوم" titleAr="الزي المدرسي في السعودية | يونيوم" description="زي مدرسي للمدارس السعودية." descriptionAr="زي مدرسي للمدارس السعودية." locale="ar" pageType="category" mainEntity="School Uniforms" mainEntityAr="الزي المدرسي" primaryImage="/images/education/uniform_school_product-1.jpg" primaryImageAlt="الزي المدرسي" faqs={educationFAQsAr} breadcrumbs={[{ name: 'المتجر', url: '/ar/shop' }, { name: 'الزي المدرسي', url: '/ar/shop/education-uniforms' }]} industry="Education" />

      <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'الزي المدرسي', href: '/ar/shop/education-uniforms' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-purple-400">🎓</span><span className="text-sm font-medium">قطاع التعليم</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الزي <span className="bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">المدرسي</span></h1>
            <p className="text-xl mb-8 text-purple-100 leading-relaxed">زي مدرسي عالي الجودة للمؤسسات التعليمية السعودية من الابتدائية إلى الثانوية.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق الزي المدرسي" centered>مجموعة أزياء التعليم</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-purple-600">{product.price}</span><span className="text-gray-400 group-hover:text-purple-600">←</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن الزي المدرسي</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {educationFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج برنامج زي مدرسي؟</h2>
            <p className="text-xl mb-8 text-purple-100">تواصل معنا لحلول زي على مستوى المدرسة مع ألوان وشعارات مخصصة.</p>
            <Link href="/ar/quote?category=education" className="inline-flex items-center px-8 py-4 bg-white text-purple-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر للمدارس ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/education-uniforms" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
