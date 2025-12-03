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
  title: 'ملابس الشركات السعودية | أزياء العمل الرسمية | يونيوم',
  titleAr: 'ملابس الشركات السعودية | أزياء العمل الرسمية | يونيوم',
  description: 'Premium corporate workwear in Saudi Arabia.',
  descriptionAr: 'ملابس شركات فاخرة في السعودية. بدلات رسمية، زي مكاتب، بولو شركات للشركات. من 299 ريال. علامة تجارية مخصصة، خصومات بالجملة!',
  keywords: ['ملابس الشركات السعودية', 'أزياء العمل الرسمية'],
  keywordsAr: ['ملابس الشركات السعودية', 'أزياء العمل الرسمية', 'زي المكاتب', 'بولو شركات', 'بدلات تنفيذية', 'قمصان رسمية'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/corporate-workwear',
  image: '/images/products/corporate-suit-executive.jpg',
  imageAlt: 'ملابس الشركات السعودية - أزياء العمل الرسمية',
  aiSummary: 'UNEOM corporate workwear for Saudi businesses.',
  aiSummaryAr: 'ملابس الشركات من يونيوم للشركات السعودية. المنتجات: بدلات تنفيذية (من 799 ريال)، زي مكاتب (من 299 ريال)، بولو شركات (من 149 ريال)، قمصان رسمية (من 129 ريال). جميع المنتجات متاحة مع تطريز شعار الشركة. نخدم البنوك والشركات والمكاتب الحكومية.'
});

export const dynamic = 'force-static';

const corporateFAQsAr = [
  { question: 'هل توردون أزياء شركات للبنوك؟', questionAr: 'هل توردون أزياء شركات للبنوك؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد أزياء الشركات للبنوك الكبرى والمؤسسات المالية في السعودية. نقدم برامج أزياء كاملة تشمل البدلات والقمصان والإكسسوارات.' },
  { question: 'هل يمكنكم مطابقة ألوان علامتنا التجارية؟', questionAr: 'هل يمكنكم مطابقة ألوان علامتنا التجارية؟', answer: 'Yes.', answerAr: 'بالتأكيد! يمكننا مطابقة ألوان العلامة التجارية بدقة باستخدام مراجع بانتون ودمج شعار شركتكم من خلال التطريز أو الطباعة على جميع عناصر الزي.' },
  { question: 'هل تقدمون أنماطاً مختلفة لأقسام مختلفة؟', questionAr: 'هل تقدمون أنماطاً مختلفة لأقسام مختلفة؟', answer: 'Yes.', answerAr: 'نعم، يمكننا إنشاء برامج أزياء متدرجة بأنماط مميزة لأقسام مختلفة مع الحفاظ على اتساق العلامة التجارية الشاملة.' },
];

const products = [
  { id: 'executive-suits', name: 'بدلات تنفيذية', description: 'بدلات فاخرة للمدراء والإدارة', price: 'من 799 ريال', image: '/images/products/corporate-suit-executive.jpg', href: '/ar/shop/corporate-workwear/executive-suits', features: ['صوف فاخر', 'مقاس مفصل', 'مقاوم للتجاعيد'] },
  { id: 'office-uniforms', name: 'زي المكاتب', description: 'ملابس مكتب احترافية للموظفين', price: 'من 299 ريال', image: '/images/products/office-uniform.jpg', href: '/ar/shop/corporate-workwear/office-uniforms', features: ['مريح', 'متين', 'سهل العناية'] },
  { id: 'corporate-polo', name: 'بولو الشركات', description: 'بولو ذكية كاجوال مع الشعار', price: 'من 149 ريال', image: '/images/products/corporate-polo.jpg', href: '/ar/shop/corporate-workwear/corporate-polo', features: ['قابل للتنفس', 'جاهز للشعار', 'ألوان متعددة'] },
  { id: 'dress-shirts', name: 'قمصان رسمية', description: 'قمصان رسمية احترافية للأعمال', price: 'من 129 ريال', image: '/images/products/dress-shirt.jpg', href: '/ar/shop/corporate-workwear/dress-shirts', features: ['بدون كي', 'مقاس كلاسيكي', 'قطن فاخر'] },
];

export default function CorporateWorkwearPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="ملابس الشركات السعودية | يونيوم" titleAr="ملابس الشركات السعودية | يونيوم" description="Corporate workwear." descriptionAr="ملابس شركات فاخرة." locale="ar" pageType="category" mainEntity="Corporate Workwear" mainEntityAr="ملابس الشركات" primaryImage="/images/products/corporate-suit-executive.jpg" primaryImageAlt="ملابس الشركات" faqs={corporateFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Corporate', nameAr: 'الشركات', url: '/ar/shop/corporate-workwear' }]} industry="الشركات" />

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-blue-400">🏢</span><span className="text-sm font-medium">قطاع الشركات</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">ملابس <span className="bg-gradient-to-r from-blue-300 to-gray-300 text-transparent bg-clip-text">الشركات</span></h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">أزياء عمل احترافية وملابس شركات للشركات السعودية.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق الملابس الرسمية" centered>مجموعة ملابس الشركات</SectionHeading>
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
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن ملابس الشركات</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {corporateFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-gray-700 to-blue-800 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج برنامج أزياء شركات؟</h2>
            <p className="text-xl mb-8 text-blue-100">تواصل معنا لحلول أزياء على مستوى الشركة مع علامة تجارية مخصصة.</p>
            <Link href="/ar/quote?category=corporate" className="inline-flex items-center px-8 py-4 bg-white text-blue-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر للشركات ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/corporate-workwear" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
