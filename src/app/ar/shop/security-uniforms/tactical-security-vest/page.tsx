import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'السترات الأمنية التكتيكية (Tactical Vests) في السعودية | يونيوم',
  titleAr: 'السترات الأمنية التكتيكية (Tactical Vests) في السعودية | يونيوم',
  description: 'سترات تكتيكية للأمن وحراس المواقع (Tactical Security Vests) في السعودية. سترات مزودة بجيوب متعددة وحوامل أجهزة اتصال لاسلكي، لتوزيع وزن المعدات بفعالية.',
  descriptionAr: 'سترات تكتيكية للأمن وحراس المواقع (Tactical Security Vests) في السعودية. سترات مزودة بجيوب متعددة وحوامل أجهزة اتصال لاسلكي، لتوزيع وزن المعدات بفعالية.',
  keywords: ['tactical security vest saudi arabia', 'guard load bearing vest riyadh', 'security utility vest ksa', 'multi-pocket tactical vest'],
  keywordsAr: ['سترة أمن تكتيكية', 'فيست سكيورتي', 'سترة حارس أمن', 'فيست تكتيكي جيوب', 'صديرية أمنية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/security-uniforms/tactical-security-vest',
  image: '/images/security/tactical-vest.jpg', 
  imageAlt: 'السترات الأمنية التكتيكية (Tactical Vests)',
  aiSummary: 'السترة التكتيكية من يونيوم تعد الخيار الأول للحراس الميدانيين. مصممة لتخفيف الحمل عن الظهر (Load-bearing) وتوزيع وزن المعدات الثقيلة، مع توفير وصول سريع وآمن لأجهزة الاتصال والمعدات.',
  aiSummaryAr: 'السترة التكتيكية من يونيوم تعد الخيار الأول للحراس الميدانيين. مصممة لتخفيف الحمل عن الظهر (Load-bearing) وتوزيع وزن المعدات الثقيلة، مع توفير وصول سريع وآمن لأجهزة الاتصال والمعدات.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'سترة المهام الشاملة (Utility Vest)', price: '120 ريال', desc: 'سترة تكتيكية خفيفة تلبس فوق الزي الرسمي، مزودة بـ 6 جيوب أمامية بأحجام مختلفة وحوامل للأقلام والمصابيح اليدوية لضمان سهولة الوصول.' },
  { name: 'سترة حاملة للمعدات (Load-Bearing Vest)', price: '190 ريال', desc: 'سترة متقدمة مصممة لتوزيع وزن المعدات والأجهزة اللاسلكية الكبيرة بالتساوي عبر الكتفين، مما يقلل إجهاد الظهر بشكل كبير أثناء نوبات الحراسة الطويلة.' },
  { name: 'فيست شبكي صيفي (Mesh Tactical Vest)', price: '110 ريال', desc: 'سترة تكتيكية مصنوعة بالكامل تقريباً من شبك النايلون القوي لتوفير أقصى درجات التهوية لفرق الأمن التي تعمل في حرارة الصيف الشديدة.' },
  { name: 'سترة تكتيكية عاكسة للتدخل المروري', price: '135 ريال', desc: 'سترة تجمع بين الجيوب التكتيكية المتعددة والألوان العاكسة (Hi-Vis)، مصممة لمشرفي الحركة وفرق التدخل في المواقف والمناطق الخارجية المظلمة.' },
];

const faqs = [
  { question: 'هل السترات التكتيكية توفر حماية ضد الرصاص؟', answer: 'لا، السترات المعروضة هنا هي سترات وظيفية (Utility Vests) مخصصة لحمل المعدات وتوزيع الوزن والظهور بمظهر أمني مهيب. سترات الحماية الباليستية (مضادة للرصاص) يتم توفيرها للجهات المختصة عبر قنوات توريد مخصصة.' },
  { question: 'هل يمكن تعديل مقاس السترة لتناسب أحجام الموظفين المختلفة؟', answer: 'نعم، السترات التكتيكية لدينا مزودة بأشرطة جانبية قابلة للتعديل (Adjustable Side Straps) بالإضافة إلى لاصقات الكتف، مما يجعلها "مقاس واحد يناسب الجميع" (One-Size-Fits-Most) وسهلة التبديل بين الحراس.' },
  { question: 'كيف يمكن وضع شعار شركة الحراسة أو الموقع على السترة؟', answer: 'تحتوي السترات على ألواح "فيلكرو" (Velcro Panels) عريضة على الصدر والظهر، مما يسمح بتثبيت أو إزالة الشارات الأمنية واسم الشركة (Patches) بسهولة شديدة، وهو أمر مثالي لتغيير المواقع بسرعة.' },
];

export default function TacticalSecurityVestPageAr() {
  return (
    <>
      <SEO2026 
        title="السترات الأمنية التكتيكية (فيست)" 
        titleAr="السترات الأمنية التكتيكية (فيست)" 
        description="سترات وجيوب تكتيكية عملية لحراس الأمن والمنشآت." 
        locale="ar" 
        pageType="product" 
        mainEntity="السترات التكتيكية (Tactical Vests)" 
        primaryImage="/images/security/tactical-vest.jpg" 
        primaryImageAlt="السترات الأمنية التكتيكية وحوامل المعدات" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الأزياء الأمنية', url: '/ar/shop/security-uniforms' }, 
          { name: 'السترات التكتيكية', url: '/ar/shop/security-uniforms/tactical-security-vest' }
        ]} 
        certifications={['Load-Bearing Design', 'Adjustable Fit', 'Mesh Ventilation']} 
        clientCount={140} 
        yearsInBusiness={15} 
        industry="Private Security & Guarding" 
      />
      <section className="bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' }, 
            { label: 'السترات التكتيكية', href: '/ar/shop/security-uniforms/tactical-security-vest' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              السترات الأمنية <span className="text-gray-400">التكتيكية</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              تحكم كامل في المعدات. سترات مصممة لحمل اللاسلكي والمعدات بكفاءة، مع توزيع ذكي للوزن يقلل من إجهاد حارس الأمن.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="عملية ومتانة في موقع العمل" centered>تشكيلة السترات (فيست)</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-gray-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-gray-800 font-bold bg-gray-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=tactical-vest" className="inline-flex items-center gap-2 mt-6 text-gray-700 font-medium hover:text-black hover:underline">
                  طلب تسعيرة لسترات الأمن <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="دليلك لاختيار السترة الأمنية" centered>الأسئلة الشائعة</SectionHeading>
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
