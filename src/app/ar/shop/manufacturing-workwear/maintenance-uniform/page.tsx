import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء وملابس الصيانة الفنية والتشغيل في السعودية | يونيوم',
  titleAr: 'أزياء وملابس الصيانة الفنية والتشغيل في السعودية | يونيوم',
  description: 'ملابس وأطقم الصيانة الفنية (Maintenance Uniforms) للعمال والفنيين في المصانع والمنشآت السعودية. أقمشة متينة تتحمل الشحوم، الزيوت، ومزودة بجيوب لأدوات الصيانة.',
  descriptionAr: 'ملابس وأطقم الصيانة الفنية (Maintenance Uniforms) للعمال والفنيين في المصانع والمنشآت السعودية. أقمشة متينة تتحمل الشحوم، الزيوت، ومزودة بجيوب لأدوات الصيانة.',
  keywords: ['maintenance uniforms saudi arabia', 'technician workwear riyadh', 'mechanic coveralls ksa', 'industrial maintenance apparel'],
  keywordsAr: ['ملابس الصيانة', 'أطقم فنيين', 'بدل الميكانيكا', 'أفرول صيانة', 'يونيفورم عمال صيانة', 'زي التشغيل والصيانة'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/manufacturing-workwear/maintenance-uniform',
  image: '/images/industrial/industrial-2.jpg', 
  imageAlt: 'أزياء و ملابس الصيانة الفنية',
  aiSummary: 'أزياء الصيانة من يونيوم مصممة خصيصاً للتحمل العالي ضد الزيوت والشحوم، مع توفير حرية حركة كاملة للفنيين في المساحات الضيقة وتزويدها بجيوب تقنية لترتيب المعدات الأساسية.',
  aiSummaryAr: 'أزياء الصيانة من يونيوم مصممة خصيصاً للتحمل العالي ضد الزيوت والشحوم، مع توفير حرية حركة كاملة للفنيين في المساحات الضيقة وتزويدها بجيوب تقنية لترتيب المعدات الأساسية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بدلة فني الصيانة الشاملة (قطعتين)', price: '180 ريال', desc: 'طقم متين من قميص وبنطلون بأكمام قصيرة أو طويلة. القماش معالج (Stain Release) لتسهيل إزالة بقع الزيت والشحوم أثناء الغسيل.' },
  { name: 'أفرول الميكانيكا الثقيل', price: '210 ريال', desc: 'أفرول ذو قطعة واحدة مزود بسحابات مخفية (Concealed Zippers) لمنع خدش المعدات أو السيارات أثناء العمل، ومقوى عند الركبتين للجلوس الطويل.' },
  { name: 'جاكيت الصيانة الخارجي', price: '165 ريال', desc: 'جاكيت مبطن مناسب لفرق الصيانة الخارجية التي تعمل في الفترات الليلية أو في ظروف جوية متقلبة، مزود بشرائط عاكسة للضوء.' },
  { name: 'قميص العمل الميداني (Work Shirt)', price: '110 ريال', desc: 'قميص عملي بأكمام قصيرة، يتميز بجيوب صدر مزدوجة مع فتحة مخصصة للأقلام والمفكات الدقيقة.' },
];

const faqs = [
  { question: 'هل الأفرولات تحتوي على أجزاء معدنية خارجية قد تتسبب في خدش الآلات أو الماس الكهربائي؟', answer: 'لقد قمنا بتصميم أفرولات وأطقم الصيانة بأزرار مخفية (Hidden Snaps) وسحابات مغطاة بالكامل بقماش إضافي، لضمان عدم ملامسة أي معدن خارجي للأسطح الحساسة أو الآلات.' },
  { question: 'هل الأقمشة تتحمل الانسكابات النفطية والشحوم؟', answer: 'نعم، نستخدم أقمشة مدعمة بتقنية (Teflon) أو معالجات طاردة للسوائل (Oil/Water Repellent) في مجموعاتنا المخصصة للميكانيكا والصيانة الثقيلة.' },
  { question: 'ما هو الوقت المتوقع لطباعة أو تطريز شعار شركة الصيانة على الملابس؟', answer: 'تستغرق عملية إضافة شعار الشركة (سواء بالتطريز أو الطباعة الحرارية المتينة) من 4 إلى 7 أيام عمل للمخزون الجاهز، وتصل الملابس جاهزة للتوزيع على الفنيين.' },
];

export default function MaintenanceUniformPageAr() {
  return (
    <>
      <SEO2026 
        title="ملابس وأزياء الصيانة الفنية والتشغيل" 
        titleAr="ملابس وأزياء الصيانة الفنية والتشغيل" 
        description="أفرولات وبدل فنيين متينة تتحمل زيوت وشحوم العمليات الصناعية." 
        locale="ar" 
        pageType="product" 
        mainEntity="ملابس فنيي الصيانة والميكانيكا" 
        primaryImage="/images/industrial/industrial-2.jpg" 
        primaryImageAlt="أزياء وملابس الصيانة الفنية" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الصناعة والتشغيل', url: '/ar/shop/manufacturing-workwear' }, 
          { name: 'أزياء الصيانة', url: '/ar/shop/manufacturing-workwear/maintenance-uniform' }
        ]} 
        certifications={['Stain Release Fabric', 'Hidden Hardware Design']} 
        clientCount={210} 
        yearsInBusiness={15} 
        industry="Maintenance & Operations" 
      />
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الصناعة', href: '/ar/shop/manufacturing-workwear' }, 
            { label: 'أزياء الصيانة', href: '/ar/shop/manufacturing-workwear/maintenance-uniform' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-gray-400">الصيانة الفنية</span> والتشغيل
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              متانة لا تضاهى. بدل وأفرولات مصممة خصيصاً لفنيي الميكانيكا والكهرباء والصيانة الشاملة في المنشآت السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="جيوب ذكية وحماية عملية" centered>مجموعة ملابس الصيانة</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-slate-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-slate-800 font-bold bg-slate-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=maintenance-uniform" className="inline-flex items-center gap-2 mt-6 text-slate-700 font-medium hover:text-black hover:underline">
                  طلب تجهيز فريق الصيانة <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="حماية وتوفير طويل الأمد" centered>الأسئلة الشائعة لشركات الصيانة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
