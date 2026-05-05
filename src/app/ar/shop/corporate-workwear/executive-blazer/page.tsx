import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'البليزرات التنفيذية لمدراء الشركات في السعودية | يونيوم',
  titleAr: 'البليزرات التنفيذية لمدراء الشركات في السعودية | يونيوم',
  description: 'بليزرات تنفيذية فاخرة مصممة خصيصاً للمدراء والمسؤولين التنفيذيين بالشركات السعودية. خياطة راقية من الصوف الفاخر مع بطانات مريحة وخيارات تطريز مخصصة.',
  descriptionAr: 'بليزرات تنفيذية فاخرة مصممة خصيصاً للمدراء والمسؤولين التنفيذيين بالشركات السعودية. خياطة راقية من الصوف الفاخر مع بطانات مريحة وخيارات تطريز مخصصة.',
  keywords: ['executive blazers saudi arabia', 'corporate manager jackets riyadh', 'premium business blazers ksa', 'c-level uniform attire'],
  keywordsAr: ['بليزرات تنفيذية', 'جاكيتات للمدراء', 'أزياء الإدارة العليا', 'بليزرات الشركات السعودية', 'تفصيل بليزرات'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/corporate-workwear/executive-blazer',
  image: '/images/corporate/executive.jpg', 
  imageAlt: 'البليزرات التنفيذية الفاخرة للشركات',
  aiSummary: 'توفر يونيوم بليزرات تنفيذية مصممة خصيصاً للمناصب الإدارية العليا، تعكس قوة الهوية المؤسسية بمواد مستوردة وتفصيل مخصص لكل مدير.',
  aiSummaryAr: 'توفر يونيوم بليزرات تنفيذية مصممة خصيصاً للمناصب الإدارية العليا، تعكس قوة الهوية المؤسسية بمواد مستوردة وتفصيل مخصص لكل مدير.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بليزر صوف إيطالي تنفيذي', price: '680 ريال', desc: 'بليزر كلاسيكي فاخر من الصوف الإيطالي بنسبة 100٪، يتميز ببطانة حريرية ولمسات نهائية تعكس الفخامة.' },
  { name: 'بليزر الأعمال اليومي', price: '450 ريال', desc: 'بليزر ذكي وعملي من مزيج الصوف والبوليستر المقاوم للتجاعيد، مصمم ليحافظ على مظهره طوال يوم العمل.' },
  { name: 'بليزر خفيف (Unlined Summer Blazer)', price: '490 ريال', desc: 'بليزر صيفي بدون بطانة لمزيد من التهوية والراحة في الأجواء الحارة للمملكة، مناسب للاجتماعات والمقابلات.' },
  { name: 'بليزر مزدوج الصدر (Double-Breasted)', price: '720 ريال', desc: 'تصميم كلاسيكي قوي وهيبة استثنائية للإدارة العليا والمناصب السيادية بالشركة.' },
];

const faqs = [
  { question: 'هل تقدمون خدمة أخذ المقاسات لمدراء الشركة في مكاتبهم؟', answer: 'نعم، نوفر خدمة التفصيل المخصص (Bespoke) والإكسسوارات الشخصية، حيث نقوم بإرسال خياط محترف إلى مقر شركتك أو البنك لأخذ مقاسات المدراء التنفيذيين بدقة وتوفير وقتهم.' },
  { question: 'ما هو الوقت التقريبي لتسليم طلبات البليزرات التنفيذية؟', answer: 'إذا كان الطلب للمقاسات الجاهزة (Ready-to-wear)، يستغرق التوريد من 7 إلى 10 أيام عمل. أما بالنسبة لخدمات التفصيل المخصص، فتستغرق العملية حوالي 3-4 أسابيع نظراً للدقة المطلوبة وتجربة البروفة.' },
  { question: 'كيف يمكن تطريز شعار الشركة دون أن يؤثر على فخامة البليزر؟', answer: 'نقوم بتطريز شعار الشركة بخيوط حريرية دقيقة (Tone-on-tone) على جيب الصدر الداخلي، أو بشكل خفي وأنيق على العروة، أو حتى باستخدام دبابيس معدنية راقية (Lapel Pins) قابلة للإزالة.' },
];

export default function ExecutiveBlazerPageAr() {
  return (
    <>
      <SEO2026 
        title="البليزرات التنفيذية الفاخرة" 
        titleAr="البليزرات التنفيذية الفاخرة" 
        description="بليزرات وجاكيتات رسمية لمدراء ومسؤولي الشركات." 
        locale="ar" 
        pageType="product" 
        mainEntity="البليزرات التنفيذية للمدراء" 
        primaryImage="/images/corporate/executive.jpg" 
        primaryImageAlt="البليزرات التنفيذية الفاخرة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'ملابس الشركات', url: '/ar/shop/corporate-workwear' }, 
          { name: 'البليزرات التنفيذية', url: '/ar/shop/corporate-workwear/executive-blazer' }
        ]} 
        certifications={['Italian Wool Providers', 'ISO 9001:2015']} 
        clientCount={60} 
        yearsInBusiness={15} 
        industry="Corporate" 
      />
      <section className="bg-gradient-to-br from-zinc-900 via-stone-800 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'ملابس الشركات', href: '/ar/shop/corporate-workwear' }, 
            { label: 'البليزرات التنفيذية', href: '/ar/shop/corporate-workwear/executive-blazer' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              البليزرات <span className="text-amber-500">التنفيذية</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              هيبة الحضور وثقة القيادة. بليزرات فاخرة مصممة خصيصاً لمدراء ومسؤولي الإدارة العليا في المملكة العربية السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="حرفية في التفصيل وجودة في الأقمشة" centered>المجموعة التنفيذية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-stone-200 hover:shadow-lg hover:border-amber-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=executive-blazer" className="inline-flex items-center gap-2 mt-6 text-amber-700 font-medium hover:text-amber-800 hover:underline">
                  احجز موعداً لأخذ المقاسات <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة المتداولة" centered>خدمات التفصيل والبليزرات</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
