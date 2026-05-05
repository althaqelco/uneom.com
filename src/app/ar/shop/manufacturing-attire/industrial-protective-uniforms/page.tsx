import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'الملابس الواقية الصناعية وأزياء المصانع في السعودية | يونيوم',
  titleAr: 'الملابس الواقية الصناعية وأزياء المصانع في السعودية | يونيوم',
  description: 'ملابس واقية صناعية متينة (Industrial Protective Uniforms) للعاملين في المصانع والقطاع الصناعي بالسعودية. أقمشة مقاومة للتمزق والمواد الكيميائية توافق معايير الأوشا.',
  descriptionAr: 'ملابس واقية صناعية متينة (Industrial Protective Uniforms) للعاملين في المصانع والقطاع الصناعي بالسعودية. أقمشة مقاومة للتمزق والمواد الكيميائية توافق معايير الأوشا.',
  keywords: ['industrial protective uniforms ksa', 'factory workwear saudi arabia', 'osha compliant uniform riyadh', 'heavy duty coveralls'],
  keywordsAr: ['ملابس واقية صناعية', 'أزياء المصانع', 'أفرول صناعي', 'يونيفورم تصنيع', 'ملابس الأمن والسلامة'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/manufacturing-attire/industrial-protective-uniforms',
  image: '/images/industrial/industrial-1.jpg', 
  imageAlt: 'الملابس الواقية والأزياء الصناعية',
  aiSummary: 'توفر يونيوم أزياء وملابس واقية للصناعات الثقيلة والخفيفة، مصممة لتحمل البيئات القاسية، مقاومة للزيوت والمواد الكيميائية وتوفر الحماية القصوى للمشغلين والفنيين.',
  aiSummaryAr: 'توفر يونيوم أزياء وملابس واقية للصناعات الثقيلة والخفيفة، مصممة لتحمل البيئات القاسية، مقاومة للزيوت والمواد الكيميائية وتوفر الحماية القصوى للمشغلين والفنيين.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'أفرول صناعي متين (Heavy-Duty Coverall)', price: '240 ريال', desc: 'أفرول قطعة واحدة يوفر تغطية وحماية كاملة، مصنوع من قطن معالج بنسبة 100٪ بوزن ثقيل، مقاوم للتمزق والاحتكاك الشديد في المصانع.' },
  { name: 'طقم المصانع قطعتين (جاكيت وبنطلون)', price: '210 ريال', desc: 'طقم عملي وسهل الارتداء لخطوط الإنتاج والتجميع، مزود بشرائط عاكسة للضوء (Hi-Vis) ومقوى عند الركبتين والمرفقين.' },
  { name: 'جاكيت واقي مضاد للمواد الكيميائية', price: '380 ريال', desc: 'جاكيت مبطن بخامات تقنية تمنع تسرب السوائل الكيميائية والزيوت، مخصص لقطاع البتروكيماويات والتصنيع الكيميائي.' },
  { name: 'فيست مهندسي الإنتاج (Multi-pocket Vest)', price: '120 ريال', desc: 'فيست مريح ومزود بجيوب متعددة لحمل الأدوات وأجهزة القياس، مثالي للمهندسين والمشرفين داخل صالات التصنيع.' },
];

const faqs = [
  { question: 'هل الملابس الصناعية لديكم مطابقة لمواصفات الأمن والسلامة (OSHA)؟', answer: 'نعم، جميع ملابسنا الواقية تتوافق مع معايير OSHA و ISO المتعلقة بملابس العمل الصناعية. نحن نستخدم خيوطاً مزدوجة وأقمشة معتمدة لتحمل بيئات العمل القاسية.' },
  { question: 'كيف يمكننا تمييز الأقسام المختلفة في المصنع (كالصيانة، والإنتاج، والسلامة)؟', answer: 'نقدم نظام (Color-Coding) لتسهيل إدارة المصنع. على سبيل المثال: الأزرق لخطوط الإنتاج، الرمادي للصيانة، والأحمر أو البرتقالي لمسؤولي الأمن والسلامة.' },
  { question: 'هل توفرون أحذية السلامة ومعدات الوقاية الشخصية (PPE) بالإضافة للملابس؟', answer: 'نعم، نوفر حلاً متكاملاً لتجهيز المصانع، يمتد من الملابس إلى أحذية السلامة (Safety Shoes) ذات المقدمة الفولاذية، الخوذات، نظارات الحماية، وقفازات العمل المتخصصة.' },
];

export default function IndustrialProtectiveUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="الملابس الواقية الصناعية وأزياء المصانع" 
        titleAr="الملابس الواقية الصناعية وأزياء المصانع" 
        description="ملابس أمن وسلامة متينة لقطاع التصنيع والمصانع." 
        locale="ar" 
        pageType="product" 
        mainEntity="الملابس الواقية للقطاع الصناعي" 
        primaryImage="/images/industrial/industrial-1.jpg" 
        primaryImageAlt="أزياء وملابس واقية للصناعة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الصناعة', url: '/ar/shop/manufacturing-attire' }, 
          { name: 'الملابس الواقية الصناعية', url: '/ar/shop/manufacturing-attire/industrial-protective-uniforms' }
        ]} 
        certifications={['OSHA Compliant', 'Heavy Duty Cotton', 'Chemical Resistant']} 
        clientCount={160} 
        yearsInBusiness={15} 
        industry="Manufacturing & Industrial" 
      />
      <section className="bg-gradient-to-br from-yellow-900 via-stone-800 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الصناعة', href: '/ar/shop/manufacturing-attire' }, 
            { label: 'الملابس الواقية', href: '/ar/shop/manufacturing-attire/industrial-protective-uniforms' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              الملابس الواقية <span className="text-yellow-500">الصناعية</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              درع حماية موثوق. ملابس مصممة بأعلى معايير المتانة لتحمل بيئات العمل الشاقة في قطاع المصانع والإنتاج السعودي.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="حماية فائقة وعمر افتراضي طويل" centered>مجموعة الصناعات الثقيلة</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-yellow-100 hover:shadow-lg hover:border-yellow-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-yellow-800 font-bold bg-yellow-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=industrial-protective-uniforms" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-medium hover:text-yellow-800 hover:underline">
                  طلب تسعيرة لخطوط الإنتاج والمصانع <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="معايير الأمان التي نتبعها" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-yellow-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
