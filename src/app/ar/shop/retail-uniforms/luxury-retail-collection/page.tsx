import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'مجموعة أزياء المتاجر الفاخرة والبوتيكات في السعودية | يونيوم',
  titleAr: 'مجموعة أزياء المتاجر الفاخرة والبوتيكات في السعودية | يونيوم',
  description: 'أزياء حصرية ومصممة خصيصاً لموظفي المتاجر الفاخرة (Luxury Retail) والبوتيكات الراقية في السعودية. أقمشة مستوردة تعكس الفخامة والحصرية للعلامات التجارية الكبرى.',
  descriptionAr: 'أزياء حصرية ومصممة خصيصاً لموظفي المتاجر الفاخرة (Luxury Retail) والبوتيكات الراقية في السعودية. أقمشة مستوردة تعكس الفخامة والحصرية للعلامات التجارية الكبرى.',
  keywords: ['luxury retail uniforms saudi arabia', 'boutique staff attire riyadh', 'high end store uniform ksa', 'premium retail clothing'],
  keywordsAr: ['أزياء المتاجر الفاخرة', 'يونيفورم بوتيك', 'ملابس موظفي الماركات', 'أزياء مبيعات فاخرة', 'تفصيل بدل بوتيكات'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/retail-uniforms/luxury-retail-collection',
  image: '/images/retail/luxury-retail.jpg', 
  imageAlt: 'مجموعة أزياء المتاجر الفاخرة',
  aiSummary: 'توفر يونيوم أزياء لا مثيل لها للمتاجر الفاخرة التي تتطلب معايير صارمة للأناقة. نستخدم أقمشة صوفية وحريرية وخدمات تفصيل (Bespoke) لجعل موظف المبيعات جزءاً من التجربة الفاخرة للعميل.',
  aiSummaryAr: 'توفر يونيوم أزياء لا مثيل لها للمتاجر الفاخرة التي تتطلب معايير صارمة للأناقة. نستخدم أقمشة صوفية وحريرية وخدمات تفصيل (Bespoke) لجعل موظف المبيعات جزءاً من التجربة الفاخرة للعميل.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'بدلة مستشار المبيعات الفاخرة', price: '750 ريال', desc: 'بدلة رسمية (Suit) من الصوف المخلوط الإيطالي، مفصلة بدقة لتمنح مستشاري مبيعات المجوهرات والساعات مظهراً بالغ الاحترافية والرقي.' },
  { name: 'فستان البوتيك الكلاسيكي', price: '420 ريال', desc: 'فستان ميدي أسود أنيق (Little Black Dress) لموظفات البوتيكات العالمية، مصنوع من قماش كريب عالي الجودة مع قصة تناسب العمل الميداني.' },
  { name: 'بليزر المخمل الراقي (Velvet Accent Blazer)', price: '580 ريال', desc: 'بليزر مميز بياقات من المخمل أو الحرير، يعطي انطباعاً استثنائياً لموظفي الاستقبال في المتاجر الفاخرة وصالات كبار الشخصيات (VIP).' },
  { name: 'إكسسوارات الماركات الحصرية', price: '150 ريال', desc: 'قفازات بيضاء قطنية لعرض المجوهرات، أوشحة حريرية مصممة خصيصاً بشعار الدار، ودبابيس معدنية (Lapel Pins) مطلية بالذهب للتميز.' },
];

const faqs = [
  { question: 'هل تقومون بتصميم وتفصيل الزي حصرياً لعلامتنا التجارية؟', answer: 'نعم، هذه هي خدمة (White Label / Bespoke) الخاصة بنا. يعمل مصممونا جنباً إلى جنب مع مدراء علامتكم التجارية لابتكار زي حصري لا يتم إنتاجه لأي شركة أخرى، ليعكس الـ DNA الخاص بماركتكم.' },
  { question: 'كيف تتعاملون مع معدل دوران الموظفين (Turnover) في قطاع التجزئة؟', answer: 'بالنسبة للملابس الفاخرة التي يتم تفصيلها خصيصاً، نقوم بالاحتفاظ بـ (أنماط وقوالب) المقاسات الخاصة بشركتكم، وبمجرد انضمام موظف جديد نقوم بتنفيذ زيه الفاخر في غضون 7-10 أيام عمل ليطابق زملائه.' },
  { question: 'هل يمكن أخذ مقاسات الموظفين في المتاجر دون إعاقة العمل؟', answer: 'بالتأكيد. נוفر خدمة زيارة الخياط الميداني (Mobile Tailoring)، حيث يزور فريقنا بوتيكاتكم قبل أو بعد أوقات العمل الرسمية لأخذ القياسات الدقيقة (Made-to-Measure) للموظفين.' },
];

export default function LuxuryRetailCollectionPageAr() {
  return (
    <>
      <SEO2026 
        title="مجموعة أزياء المتاجر والبوتيكات الفاخرة" 
        titleAr="مجموعة أزياء المتاجر والبوتيكات الفاخرة" 
        description="أزياء مفصلة حصرياً لقطاع التجزئة الفاخرة والمجوهرات." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء قطاع التجزئة الفاخرة (Luxury Retail)" 
        primaryImage="/images/retail/luxury-retail.jpg" 
        primaryImageAlt="أزياء المتاجر الفاخرة والبوتيكات" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التجزئة والخدمات', url: '/ar/shop/retail-uniforms' }, 
          { name: 'المتاجر الفاخرة', url: '/ar/shop/retail-uniforms/luxury-retail-collection' }
        ]} 
        certifications={['Bespoke Tailoring', 'Premium Fabrics', 'Exclusive Design']} 
        clientCount={20} 
        yearsInBusiness={15} 
        industry="Luxury Retail" 
      />
      <section className="bg-gradient-to-br from-neutral-900 via-stone-900 to-black text-amber-50" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التجزئة', href: '/ar/shop/retail-uniforms' }, 
            { label: 'المتاجر الفاخرة', href: '/ar/shop/retail-uniforms/luxury-retail-collection' }
          ]} className="text-amber-200/60 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif">
              مجموعة المتاجر <span className="text-amber-500">الفاخرة</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed font-light">
              حينما يكون الزي جزءاً من التجربة. تصاميم حصرية وخياطة راقية تعكس عراقة دور المجوهرات والبوتيكات الفاخرة في المملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16 bg-stone-50" dir="rtl">
        <Container>
          <SectionHeading subtitle="حرفية يدوية وتصاميم حصرية" centered>مجموعة التفصيل الخاص (Bespoke)</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-stone-200 hover:shadow-md hover:border-amber-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-stone-900">{p.name}</h3>
                  <span className="text-amber-700 font-bold bg-amber-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-stone-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=luxury-retail" className="inline-flex items-center gap-2 mt-6 text-amber-700 font-medium hover:text-amber-900 hover:underline">
                  تحديد موعد مع مصممينا للعلامات الفاخرة <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="خدمات مصممة لكبار العملاء" centered>أسئلة قطاع التجزئة الفاخر</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-stone-200 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-stone-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-stone-600 leading-relaxed" itemProp="text">{faq.answer}</p>
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
