import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'السكراب الطبي التنفيذي والملابس الطبية الفاخرة | يونيوم',
  titleAr: 'السكراب الطبي التنفيذي والملابس الطبية الفاخرة | يونيوم',
  description: 'سكراب طبي تنفيذي (Executive Medical Scrubs) مصمم لكبار الأطباء، الجراحين، والاستشاريين في السعودية. أقمشة فائقة النعومة وتقنيات مضادة للميكروبات لراحة تدوم طوال فترة المناوبة.',
  descriptionAr: 'سكراب طبي تنفيذي (Executive Medical Scrubs) مصمم لكبار الأطباء، الجراحين، والاستشاريين في السعودية. أقمشة فائقة النعومة وتقنيات مضادة للميكروبات لراحة تدوم طوال فترة المناوبة.',
  keywords: ['executive medical scrubs saudi arabia', 'premium doctors uniform riyadh', 'luxury surgeon scrubs ksa', 'consultant medical attire'],
  keywordsAr: ['سكراب طبي تنفيذي', 'سكراب أطباء استشاريين', 'زي جراحين فاخر', 'ملابس طبية راقية', 'يونيفورم مستشفيات كبار'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/medical-scrubs/executive-medical-uniform',
  image: '/images/healthcare/executive-scrubs.jpg', 
  imageAlt: 'السكراب الطبي التنفيذي والملابس الطبية الفاخرة',
  aiSummary: 'يمثل السكراب الطبي التنفيذي من يونيوم ذروة الفخامة في القطاع الصحي. يتميز بقصات مصممة بدقة، أقمشة مطاطية بأربعة اتجاهات (4-way stretch)، وحماية متقدمة ضد الميكروبات تناسب الاستشاريين ومدراء الأقسام الطبية.',
  aiSummaryAr: 'يمثل السكراب الطبي التنفيذي من يونيوم ذروة الفخامة في القطاع الصحي. يتميز بقصات مصممة بدقة، أقمشة مطاطية بأربعة اتجاهات (4-way stretch)، وحماية متقدمة ضد الميكروبات تناسب الاستشاريين ومدراء الأقسام الطبية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'سكراب الاستشاريين (Signature Set)', price: '380 ريال', desc: 'طقم فاخر جداً بياقة فريدة من نوعها وتفاصيل خياطة دقيقة. قماش يجمع بين القطن، الرايون، والسباندكس لراحة لا مثيل لها ومرونة بأربعة اتجاهات.' },
  { name: 'لاب كوت كبار الأطباء (Tailored Lab Coat)', price: '450 ريال', desc: 'معطف مختبر مفصل باحترافية يشبه البدلة الرسمية. يتميز بمقاومة البقع (Teflon Coating) وجيوب مصممة خصيصاً للأجهزة الطبية الدقيقة والأقلام الفاخرة.' },
  { name: 'سكراب جراحي متقدم (Performance)', price: '320 ريال', desc: 'مصمم لتحمل غرف العمليات المجهدة لساعات طويلة. أقمشة طاردة للسوائل، ومزودة بتقنية تنظيم درجة حرارة الجسم (Thermoregulation).' },
  { name: 'جاكيت العيادات والأقسام الإدارية', price: '290 ريال', desc: 'جاكيت خفيف وأنيق يلبس فوق السكراب، مخصص لمدراء الأقسام ورؤساء الأطباء عند القيام بالجولات الميدانية (Ward Rounds) أو الاجتماعات.' },
];

const faqs = [
  { question: 'ما هو الفرق بين السكراب التنفيذي والسكراب الطبي العادي؟', answer: 'السكراب التنفيذي مخصص للإدارة العليا والاستشاريين. نستخدم فيه أجود الأقمشة العالمية بتركيبات خاصة (Premium Blends) وقصات (Tailored Fit) تعطي مظهراً أقرب للبدلة الرسمية منه إلى زي العمل المعتاد، مع الحفاظ على كل المواصفات الطبية.' },
  { question: 'هل تتوفر تقنية مضادة للميكروبات (Antimicrobial) في الملابس التنفيذية؟', answer: 'نعم، جميع ملابس الفئة التنفيذية معالجة بتقنيات أيونات الفضة (Silver-ion technology) المدمجة في ألياف القماش، مما يمنع نمو البكتيريا ويقضي على الروائح طوال المناوبة.' },
  { question: 'كيف يمكن تطريز الاسم والتخصص بطريقة تعكس الفخامة؟', answer: 'نعتمد تقنية التطريز عالي الكثافة باستخدام خيوط لامعة أو غير لامعة حسب الرغبة. نقوم بتطريز (اسم الطبيب + التخصص الدقيق + شعار المستشفى) بدقة متناهية تحافظ على قوام القماش دون تجعد.' },
];

export default function ExecutiveMedicalUniformPageAr() {
  return (
    <>
      <SEO2026 
        title="السكراب الطبي التنفيذي لكبار الأطباء" 
        titleAr="السكراب الطبي التنفيذي لكبار الأطباء" 
        description="أطقم سكراب ولاب كوت فاخرة مصممة للاستشاريين والإدارة الطبية." 
        locale="ar" 
        pageType="product" 
        mainEntity="السكراب الطبي التنفيذي" 
        primaryImage="/images/healthcare/executive-scrubs.jpg" 
        primaryImageAlt="السكراب الطبي التنفيذي الفاخر" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الملابس الطبية', url: '/ar/shop/medical-scrubs' }, 
          { name: 'السكراب التنفيذي', url: '/ar/shop/medical-scrubs/executive-medical-uniform' }
        ]} 
        certifications={['Antimicrobial Treated', '4-Way Stretch', 'Tailored Fit']} 
        clientCount={80} 
        yearsInBusiness={15} 
        industry="Healthcare" 
      />
      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-cyan-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الملابس الطبية', href: '/ar/shop/medical-scrubs' }, 
            { label: 'السكراب التنفيذي', href: '/ar/shop/medical-scrubs/executive-medical-uniform' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              السكراب الطبي <span className="text-emerald-300">التنفيذي</span>
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              ذروة الفخامة والتقنية الطبية. أزياء استثنائية مصممة خصيصاً لكبار الأطباء والاستشاريين وقادة الرعاية الصحية في المملكة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصاميم ترتقي بمكانتك المهنية" centered>مجموعة كبار الاستشاريين</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg hover:border-teal-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-teal-800 font-bold bg-teal-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=executive-medical-uniform" className="inline-flex items-center gap-2 mt-6 text-teal-700 font-medium hover:text-teal-900 hover:underline">
                  طلب تفصيل أو استعراض عينات <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="التميز في الرعاية الصحية" centered>الأسئلة الشائعة للقطاع الطبي التنفيذي</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-teal-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
