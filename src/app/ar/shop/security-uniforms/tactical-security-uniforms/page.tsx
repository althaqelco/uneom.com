import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء وبدل الأمن التكتيكي (Tactical Uniforms) في السعودية | يونيوم',
  titleAr: 'أزياء وبدل الأمن التكتيكي (Tactical Uniforms) في السعودية | يونيوم',
  description: 'أزياء أمن تكتيكية عالية التحمل (Tactical Security Uniforms) مخصصة لفرق التدخل السريع، حراس المنشآت الحساسة، ونقل الأموال في السعودية. تصميمات تعتمد على متانة لا تضاهى وحرية حركة كاملة.',
  descriptionAr: 'أزياء أمن تكتيكية عالية التحمل (Tactical Security Uniforms) مخصصة لفرق التدخل السريع، حراس المنشآت الحساسة، ونقل الأموال في السعودية. تصميمات تعتمد على متانة لا تضاهى وحرية حركة كاملة.',
  keywords: ['tactical security uniforms saudi arabia', 'swat style uniform riyadh', 'cash in transit guard clothing', 'heavy duty security apparel ksa'],
  keywordsAr: ['أزياء أمن تكتيكي', 'بدل التدخل السريع', 'ملابس حراس نقل الأموال', 'يونيفورم حراسات مشددة', 'ملابس سكيورتي تكتيكية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/security-uniforms/tactical-security-uniforms',
  image: '/images/security/tactical.jpg', 
  imageAlt: 'أزياء الأمن التكتيكي والتدخل السريع',
  aiSummary: 'أزياء الأمن التكتيكي من يونيوم تعتمد على تصميمات (SWAT-style) وتستخدم أقمشة (Ripstop) المقاومة للتمزق. تم تجهيزها بجيوب تكتيكية معززة ودروع خفيفة لتناسب مهام الحراسات المشددة ونقل الأموال.',
  aiSummaryAr: 'أزياء الأمن التكتيكي من يونيوم تعتمد على تصميمات (SWAT-style) وتستخدم أقمشة (Ripstop) المقاومة للتمزق. تم تجهيزها بجيوب تكتيكية معززة ودروع خفيفة لتناسب مهام الحراسات المشددة ونقل الأموال.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'قميص التدخل التكتيكي (Combat Shirt)', price: '180 ريال', desc: 'قميص يجمع بين القطن الماص للعرق في منطقة الصدر (ليلبس تحت السترة الواقية) وأكمام من قماش (Ripstop) المتين والمقاوم للاحتكاك.' },
  { name: 'بنطلون تكتيكي متعدد الجيوب (Cargo Pants)', price: '165 ريال', desc: 'بنطلون مزود بـ 8 جيوب تكتيكية محكمة الإغلاق، مع طبقة مزدوجة عند الركبتين قابلة لإضافة وسادات حماية (Knee Pads)، وخصر مرن.' },
  { name: 'طقم أمن نقل الأموال (CIT Uniform)', price: '320 ريال', desc: 'طقم متكامل وعملي لحراس سيارات نقل الأموال، يتميز بتصميم صارم لا يعيق الحركة أثناء حمل الصناديق والصعود للسيارات المصفحة.' },
  { name: 'بدلة الحراسات للمنشآت الحساسة (Coverall)', price: '250 ريال', desc: 'أفرول تكتيكي قطعة واحدة يعطي مظهراً مهيباً وصارماً، مقاوم للتمزق والاشتعال العرضي، مخصص لحراس البوابات الرئيسية والمقرات الحساسة.' },
];

const faqs = [
  { question: 'ما هو قماش (Ripstop) ولماذا هو مهم في الأزياء التكتيكية؟', answer: 'قماش (Ripstop) يتميز بنسج خيوط سميكة متقاطعة على شكل مربعات صغيرة. هذا التصميم يمنع التمزق الصغير من التوسع، مما يجعله مثالياً لفرق التدخل التي تتعرض لاحتكاك عنيف مع الأسطح.' },
  { question: 'هل الأزياء التكتيكية مريحة للاستخدام اليومي المستمر؟', answer: 'نعم، رغم متانتها، نستخدم ألواحاً مطاطية (Stretch Panels) مخفية في مناطق المفاصل والخصر، ونسيجاً قابلاً للتنفس لضمان راحة الحارس حتى عند ارتداء معدات ثقيلة.' },
  { question: 'هل يتوفر تصميم موحد للفرق التي تعمل في المناطق الصحراوية؟', answer: 'نوفر ألواناً تكتيكية متنوعة، منها الكحلي الغامق، الأسود القياسي، بالإضافة إلى لوني "الكاكي" و"الجملي" المخصصين لفرق الحراسة في المواقع الصحراوية ومشاريع التعدين.' },
];

export default function TacticalSecurityUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء وبدل الأمن التكتيكي" 
        titleAr="أزياء وبدل الأمن التكتيكي" 
        description="يونيفورم تكتيكي للتدخل السريع وفرق الحراسات المشددة." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء الأمن التكتيكي (Tactical Uniforms)" 
        primaryImage="/images/security/tactical.jpg" 
        primaryImageAlt="أزياء الأمن التكتيكي وحراسات المهام الخاصة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الأزياء الأمنية', url: '/ar/shop/security-uniforms' }, 
          { name: 'الأمن التكتيكي', url: '/ar/shop/security-uniforms/tactical-security-uniforms' }
        ]} 
        certifications={['Ripstop Fabric', 'Combat Ready', 'Heavy Duty']} 
        clientCount={65} 
        yearsInBusiness={15} 
        industry="Private Security & CIT" 
      />
      <section className="bg-gradient-to-br from-zinc-950 via-slate-900 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' }, 
            { label: 'الأمن التكتيكي', href: '/ar/shop/security-uniforms/tactical-security-uniforms' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-zinc-500">الأمن التكتيكي</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              جاهزية قصوى وهيبة مطلقة. أطقم مصممة لفرق التدخل السريع ونقل الأموال باستخدام أقوى الأقمشة المقاومة للتمزق في العالم.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصميمات تتحمل المهام الصعبة" centered>مجموعة الأطقم التكتيكية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-zinc-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-zinc-800 font-bold bg-zinc-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=tactical-uniform" className="inline-flex items-center gap-2 mt-6 text-zinc-700 font-medium hover:text-black hover:underline">
                  طلب تسعيرة لفرق المهام الخاصة <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="كل ما تحتاجه للجاهزية" centered>الأسئلة الشائعة للأمن التكتيكي</SectionHeading>
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
