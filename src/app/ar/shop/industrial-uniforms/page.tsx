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
  title: 'الملابس الصناعية السعودية | ملابس السلامة | يونيوم',
  titleAr: 'الملابس الصناعية السعودية | ملابس السلامة | يونيوم',
  description: 'Industrial uniforms and safety workwear.',
  descriptionAr: 'ملابس صناعية وملابس سلامة فاخرة في السعودية. أفرول، ملابس FR، سترات عاكسة للنفط والغاز والتصنيع. من 199 ريال. متوافقة مع SASO!',
  keywords: ['الملابس الصناعية السعودية', 'ملابس السلامة'],
  keywordsAr: ['الملابس الصناعية السعودية', 'ملابس السلامة', 'أفرول السعودية', 'ملابس FR', 'سترات عاكسة', 'زي النفط والغاز'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/industrial-uniforms',
  image: '/images/products/industrial-coverall.jpg',
  imageAlt: 'الملابس الصناعية السعودية - ملابس السلامة',
  aiSummary: 'UNEOM industrial uniforms for Saudi manufacturing.',
  aiSummaryAr: 'الملابس الصناعية من يونيوم للتصنيع والنفط والغاز السعودي. المنتجات: أفرول صناعي (من 199 ريال)، ملابس FR مقاومة للحريق (من 399 ريال)، سترات عاكسة (من 79 ريال)، جاكيت سلامة (من 249 ريال). جميع المنتجات متوافقة مع SASO. نخدم مقاولي أرامكو، سابك، والمرافق الصناعية.'
});

export const dynamic = 'force-static';

const industrialFAQsAr = [
  { question: 'هل ملابسكم الصناعية متوافقة مع SASO؟', questionAr: 'هل ملابسكم الصناعية متوافقة مع SASO؟', answer: 'Yes, SASO compliant.', answerAr: 'نعم، جميع ملابسنا الصناعية تستوفي معايير SASO واللوائح الدولية للسلامة بما في ذلك معايير EN ISO لملابس الحماية.' },
  { question: 'هل توردون لشركات النفط والغاز؟', questionAr: 'هل توردون لشركات النفط والغاز؟', answer: 'Yes.', answerAr: 'نعم، يونيوم تورد ملابس صناعية لشركات النفط والغاز الكبرى ومقاولي أرامكو. نقدم ملابس FR وأفرول وملابس سلامة تستوفي معايير الصناعة.' },
  { question: 'هل يمكنكم التوريد بالجملة لمشاريع كبيرة؟', questionAr: 'هل يمكنكم التوريد بالجملة لمشاريع كبيرة؟', answer: 'Yes.', answerAr: 'نعم، نورد بانتظام ملابس صناعية لمشاريع كبيرة مع 1,000+ عامل. نقدم أسعار جملة تنافسية، تسليم مُجزأ، وإدارة مخزون.' },
];

const products = [
  { id: 'industrial-coverall', name: 'أفرول صناعي', description: 'أفرول متين للعمل الصناعي', price: 'من 199 ريال', image: '/images/products/industrial-coverall.jpg', href: '/ar/shop/industrial-uniforms/industrial-coverall', features: ['متين', 'متعدد الجيوب', 'قابل للتنفس'] },
  { id: 'fr-coverall', name: 'أفرول FR مقاوم للحريق', description: 'أفرول مقاوم للحريق للنفط والغاز', price: 'من 399 ريال', image: '/images/products/fr-coverall.jpg', href: '/ar/shop/industrial-uniforms/fr-coverall', features: ['NFPA 2112', 'مُقيَّم للقوس', 'خفيف الوزن'] },
  { id: 'hi-vis-vest', name: 'سترة عاكسة', description: 'سترات سلامة عالية الرؤية', price: 'من 79 ريال', image: '/images/products/hi-vis-vest.jpg', href: '/ar/shop/industrial-uniforms/hi-vis-vest', features: ['عاكس', 'قابل للتنفس', 'جيوب متعددة'] },
  { id: 'safety-jacket', name: 'جاكيت سلامة صناعي', description: 'جاكيت حماية للاستخدام الصناعي', price: 'من 249 ريال', image: '/images/products/safety-jacket.jpg', href: '/ar/shop/industrial-uniforms/safety-jacket', features: ['مقاوم للماء', 'معزول', 'عاكس'] },
];

export default function IndustrialUniformsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الملابس الصناعية السعودية | يونيوم" titleAr="الملابس الصناعية السعودية | يونيوم" description="Industrial uniforms." descriptionAr="ملابس صناعية وملابس سلامة." locale="ar" pageType="category" mainEntity="Industrial Uniforms" mainEntityAr="الملابس الصناعية" primaryImage="/images/products/industrial-coverall.jpg" primaryImageAlt="الملابس الصناعية" faqs={industrialFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Industrial', nameAr: 'الصناعي', url: '/ar/shop/industrial-uniforms' }]} industry="التصنيع" />

      <section className="bg-gradient-to-br from-yellow-700 via-orange-700 to-red-700 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'الملابس الصناعية', href: '/ar/shop/industrial-uniforms' }]} className="text-white/80 mb-6" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">🏭</span><span className="text-sm font-medium">السلامة الصناعية</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الملابس <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">الصناعية</span></h1>
            <p className="text-xl mb-8 text-yellow-100 leading-relaxed">ملابس سلامة متوافقة مع SASO للمرافق الصناعية السعودية والنفط والغاز.</p>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق ملابس السلامة" centered>مجموعة الملابس الصناعية</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.map((f, i) => (<span key={i} className="text-xs bg-orange-50 text-orange-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center"><span className="text-lg font-bold text-orange-600">{product.price}</span><span className="text-gray-400 group-hover:text-orange-600">←</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن الملابس الصناعية</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {industrialFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600" itemProp="text">{faq.answerAr}</p></div></div>))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج ملابس سلامة صناعية؟</h2>
            <p className="text-xl mb-8 text-orange-100">تواصل معنا لحلول ملابس سلامة خاصة بالمشاريع.</p>
            <Link href="/ar/quote?category=industrial" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر صناعي ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/industrial-uniforms" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
