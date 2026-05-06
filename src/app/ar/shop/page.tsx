import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'تسوق الأزياء الموحدة أونلاين | متجر يونيوم السعودية',
  titleAr: 'تسوق الأزياء الموحدة أونلاين | متجر يونيوم السعودية',
  description: 'Shop professional uniforms online at UNEOM Saudi Arabia.',
  descriptionAr: 'تسوق الأزياء المهنية أونلاين من يونيوم السعودية. سكراب طبي، ملابس شركات، زي ضيافة، زي مدرسي، ملابس صناعية. أفضل الأسعار، توصيل سريع لجميع أنحاء المملكة! خصومات حتى 25% للطلبات بالجملة.',
  keywords: ['تسوق أزياء السعودية', 'شراء يونيفورم أونلاين'],
  keywordsAr: ['تسوق أزياء السعودية', 'شراء يونيفورم أونلاين', 'متجر أزياء السعودية', 'سكراب طبي للبيع', 'أسعار الأزياء الموحدة', 'ملابس شركات السعودية', 'زي مدرسي أونلاين', 'ملابس صناعية السعودية'],
  locale: 'ar',
  pageType: 'shop',
  path: '/ar/shop',
  image: '/images/shop/uneom-shop-banner.jpg',
  imageAlt: 'متجر يونيوم للأزياء أونلاين السعودية',
  aiSummary: 'UNEOM online shop offers professional uniforms in Saudi Arabia.',
  aiSummaryAr: 'متجر يونيوم أونلاين يقدم الأزياء المهنية في السعودية. الفئات تشمل: سكراب طبي وملابس صحية (من 169 ريال)، أزياء طيران (من 899 ريال)، زي ضيافة (من 329 ريال)، ملابس شركات (من 799 ريال)، أزياء طهاة (من 249 ريال)، ملابس صناعية (من 199 ريال)، زي تعليمي (من 149 ريال)، زي أمن (من 299 ريال). جميع المنتجات متاحة مع تطريز الشعار. توصيل مجاني للطلبات فوق 500 ريال. خصومات بالجملة متاحة.'
});

export const dynamic = 'force-static';

const shopFAQsAr = [
  { question: 'كيف أطلب الأزياء من متجر يونيوم؟', questionAr: 'كيف أطلب الأزياء من متجر يونيوم؟', answer: 'Browse, select, add to cart.', answerAr: 'تصفح فئاتنا، اختر المنتجات، حدد المقاسات والكميات، وأضف إلى السلة. يمكنك أيضاً طلب عرض سعر مخصص للطلبات بالجملة. نقبل البطاقات الائتمانية والتحويل البنكي والدفع عند الاستلام.' },
  { question: 'ما الحد الأدنى لكمية الطلب؟', questionAr: 'ما الحد الأدنى لكمية الطلب؟', answer: 'No minimum for stock items.', answerAr: 'لا يوجد حد أدنى للمنتجات الجاهزة. لتطريز الشعار المخصص، الحد الأدنى 12 قطعة. الأزياء المصممة خصيصاً تتطلب 25+ قطعة.' },
  { question: 'كم سرعة التوصيل في السعودية؟', questionAr: 'كم سرعة التوصيل في السعودية؟', answer: 'Stock items: 3-5 days.', answerAr: 'المنتجات الجاهزة: 3-5 أيام عمل. المطرزة: 7-10 أيام. التوصيل السريع متاح للطلبات العاجلة. توصيل مجاني للطلبات فوق 500 ريال.' },
  { question: 'هل يمكنني إضافة شعار شركتي على الأزياء؟', questionAr: 'هل يمكنني إضافة شعار شركتي على الأزياء؟', answer: 'Yes, embroidery from SAR 15.', answerAr: 'نعم! نقدم خدمات تطريز وطباعة احترافية. أرسل لنا شعارك وسنحوله للتطريز. الأسعار تبدأ من 15 ريال للقطعة.' },
  { question: 'هل تقدمون خصومات للجملة؟', questionAr: 'هل تقدمون خصومات للجملة؟', answer: 'Yes, up to 25% off.', answerAr: 'نعم! 50-99 قطعة: خصم 10%. 100-249 قطعة: خصم 15%. 250-499 قطعة: خصم 20%. 500+ قطعة: خصم 25%. الحسابات المؤسسية تحصل على مزايا إضافية.' },
  { question: 'ما طرق الدفع المقبولة؟', questionAr: 'ما طرق الدفع المقبولة؟', answer: 'Visa, mada, transfer, COD.', answerAr: 'نقبل فيزا، ماستركارد، مدى، التحويل البنكي، والدفع عند الاستلام (للطلبات أقل من 5000 ريال). الحسابات المؤسسية يمكنها التقدم لشروط ائتمان.' },
];

const categories = [
  { id: 'medical-scrubs', name: 'الملابس الصحية', description: 'سكراب طبي، معاطف مختبر، زي تمريض', image: '/images/healthcare/scrubs-collections.jpg', href: '/ar/shop/medical-scrubs', price: 'من 169 ريال', popular: true, gradient: 'from-emerald-600 to-teal-600' },
  { id: 'aviation-uniforms', name: 'أزياء الطيران', description: 'زي طيار، مضيفات، طاقم أرضي', image: '/images/aviation/aviation_uniform_airline.jpg', href: '/ar/shop/aviation-uniforms', price: 'من 899 ريال', popular: false, gradient: 'from-blue-600 to-sky-600' },
  { id: 'hospitality-attire', name: 'أزياء الضيافة', description: 'زي فنادق، مطاعم، كونسيرج', image: '/images/hospitality/hospitality_uniform_concierge.jpg', href: '/ar/shop/hospitality-attire', price: 'من 329 ريال', popular: true, gradient: 'from-orange-600 to-amber-600' },
  { id: 'corporate-workwear', name: 'ملابس الشركات', description: 'بدلات رسمية، زي مكاتب، بولو', image: '/images/products/corporate/corporate-suit-executive.jpg', href: '/ar/shop/corporate-workwear', price: 'من 799 ريال', popular: false, gradient: 'from-gray-700 to-blue-800' },
  { id: 'culinary-uniforms', name: 'أزياء الطهاة', description: 'معاطف شيف، زي مطبخ، مآزر', image: '/images/products/chef-coat-white.jpg', href: '/ar/shop/culinary-uniforms', price: 'من 249 ريال', popular: false, gradient: 'from-red-600 to-orange-600' },
  { id: 'industrial-uniforms', name: 'الملابس الصناعية', description: 'أفرول، ملابس سلامة، FR', image: '/images/products/industrial-coverall.jpg', href: '/ar/shop/industrial-uniforms', price: 'من 199 ريال', popular: true, gradient: 'from-yellow-600 to-orange-600' },
  { id: 'education-uniforms', name: 'الزي المدرسي', description: 'زي مدارس، رياضي، معاطف مختبر', image: '/images/products/school-uniform-primary.jpg', href: '/ar/shop/education-uniforms', price: 'من 149 ريال', popular: false, gradient: 'from-indigo-600 to-purple-600' },
  { id: 'security-uniforms', name: 'أزياء الأمن', description: 'زي حراسة، ملابس تكتيكية', image: '/images/products/security/security-patrol-jacket-main.jpg', href: '/ar/shop/security-uniforms', price: 'من 299 ريال', popular: false, gradient: 'from-gray-800 to-gray-900' },
  { id: 'retail-uniforms', name: 'أزياء التجزئة', description: 'زي محلات، صالات عرض، موظفي مبيعات', image: '/images/products/retail/luxury-collection.jpg', href: '/ar/shop/retail-uniforms', price: 'من 389 ريال', popular: false, gradient: 'from-pink-600 to-rose-600' },
];

export default function ShopPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="تسوق الأزياء الموحدة أونلاين | يونيوم" titleAr="تسوق الأزياء الموحدة أونلاين | يونيوم" description="Shop uniforms online." descriptionAr="تسوق الأزياء المهنية أونلاين من يونيوم السعودية." locale="ar" pageType="shop" mainEntity="UNEOM Shop" mainEntityAr="متجر يونيوم للأزياء أونلاين" primaryImage="/images/shop/uneom-shop-banner.jpg" primaryImageAlt="متجر يونيوم" faqs={shopFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }]} />

      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white relative overflow-hidden py-20">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">تسوق <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">الأزياء المهنية</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">تصفح مجموعتنا الكاملة من الأزياء المهنية لكل صناعة. منتجات عالية الجودة، أسعار تنافسية، توصيل سريع في جميع أنحاء السعودية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-yellow-300">+8</div><div className="text-sm text-blue-200">فئات</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-yellow-300">+500</div><div className="text-sm text-blue-200">منتج</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-yellow-300">مجاني</div><div className="text-sm text-blue-200">توصيل 500+</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-yellow-300">25%</div><div className="text-sm text-blue-200">خصم جملة</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="تصفح حسب الصناعة" centered>فئات الأزياء</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {categories.map((category) => (
                <Link key={category.id} href={category.href} className="group relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  {category.popular && <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">رائج</span>}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 group-hover:opacity-70 transition-opacity`}></div>
                    <Image src={category.image} alt={category.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{category.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">{category.price}</span>
                      <span className="text-gray-400 group-hover:text-blue-600 transition-colors">←</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="مساعدة التسوق" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-4">
              {shopFAQsAr.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 text-sm leading-relaxed" itemProp="text">{faq.answerAr}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج عرض سعر مخصص؟</h2>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-blue-100">للطلبات بالجملة أو التصاميم المخصصة أو المتطلبات الخاصة، فريقنا جاهز للمساعدة بحلول مخصصة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-xl transition-all">تواصل مع المبيعات</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
