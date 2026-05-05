import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'المعاطف الطبية (لاب كوت) للأطباء والصيادلة في السعودية | يونيوم',
  titleAr: 'المعاطف الطبية (لاب كوت) للأطباء والصيادلة في السعودية | يونيوم',
  description: 'معاطف طبية ولاب كوت (Medical Lab Coats) عالية الجودة مصممة للأطباء، الصيادلة، والمختبرات بالسعودية. تصميمات مريحة مقاومة للبقع وتتحمل التعقيم المستمر.',
  descriptionAr: 'معاطف طبية ولاب كوت (Medical Lab Coats) عالية الجودة مصممة للأطباء، الصيادلة، والمختبرات بالسعودية. تصميمات مريحة مقاومة للبقع وتتحمل التعقيم المستمر.',
  keywords: ['medical lab coat saudi arabia', 'doctors white coat riyadh', 'pharmacist uniform ksa', 'lab coat custom embroidery'],
  keywordsAr: ['لاب كوت طبي', 'معطف الأطباء الأبيض', 'بالطو صيدلي', 'لاب كوت مختبر', 'تفصيل لاب كوت بالسعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/medical-scrubs/medical-lab-coat',
  image: '/images/healthcare/lab-coat.jpg', 
  imageAlt: 'المعاطف الطبية (لاب كوت)',
  aiSummary: 'يوفر يونيوم معاطف طبية (لاب كوت) صممت لتعكس الاحترافية العالية للقطاع الصحي. تتميز بأقمشة لا تتجعد بسهولة وتتحمل دورات الغسيل الصناعي مع جيوب واسعة للأجهزة الطبية.',
  aiSummaryAr: 'يوفر يونيوم معاطف طبية (لاب كوت) صممت لتعكس الاحترافية العالية للقطاع الصحي. تتميز بأقمشة لا تتجعد بسهولة وتتحمل دورات الغسيل الصناعي مع جيوب واسعة للأجهزة الطبية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'لاب كوت الطبيب الاستشاري', price: '240 ريال', desc: 'معطف طويل مفصل كالبدلة الرسمية، مزود بياقة نوتش (Notch Lapel) كلاسيكية، ونسيج مقاوم للسوائل ليمنح الطبيب مظهراً يفيض بالثقة.' },
  { name: 'لاب كوت المختبرات والصيدلة', price: '160 ريال', desc: 'تصميم عملي بطول متوسط، يغلق بأزرار ضغط مخفية لحماية إضافية من المواد الكيميائية، ومزود بجيوب مقواة لحمل الأدوات.' },
  { name: 'معطف طلاب الكليات الصحية (طول قصير)', price: '120 ريال', desc: 'لاب كوت قصير مريح للطلاب أثناء التدريب الميداني والجامعي، خفيف الوزن ومقاوم للتجعد ليتحمل يوم دراسي طويل.' },
  { name: 'لاب كوت نسائي بقصة محددة (Tailored Fit)', price: '175 ريال', desc: 'تصميم يراعي الأناقة والاحترافية للطبيبات، مزود بحزام خلفي لضبط المقاس وفتحات جانبية تتيح سهولة الوصول لجيوب البنطلون.' },
];

const faqs = [
  { question: 'هل المعطف الأبيض يتعرض للاصفرار مع الغسيل المتكرر؟', answer: 'نحن نستخدم أقمشة طبية متخصصة (Optical White Blends) مدعمة بتقنية تقاوم اصفرار القماش حتى مع الاستخدام اليومي والتعقيم بالحرارة العالية، ليبقى اللاب كوت ناصع البياض.' },
  { question: 'كيف أستطيع تطريز التخصص الدقيق والاسم على المعطف؟', answer: 'نوفر خدمة التطريز الطبي الدقيق بألوان متعددة. يمكننا تطريز الشعار الرسمي للمستشفى على جيب الصدر، والاسم والمسمى الوظيفي على الجانب المقابل بجودة تدوم أطول من القماش نفسه.' },
  { question: 'هل الجيوب تتحمل وضع أجهزة مثل الـ iPad Mini والمعدات الطبية؟', answer: 'نعم، جميع جيوب اللاب كوت لدينا "مقواة مزدوجة" (Double-stitched Reinforced) لتتحمل وزن الآيباد وسماعات الطبيب والأدوات دون أن تتمزق أو تترهل بمرور الوقت.' },
];

export default function MedicalLabCoatPageAr() {
  return (
    <>
      <SEO2026 
        title="المعاطف الطبية (لاب كوت)" 
        titleAr="المعاطف الطبية (لاب كوت)" 
        description="معاطف طبية ناصعة البياض وعالية المتانة للمستشفيات والعيادات." 
        locale="ar" 
        pageType="product" 
        mainEntity="المعاطف الطبية (لاب كوت) للأطباء" 
        primaryImage="/images/healthcare/lab-coat.jpg" 
        primaryImageAlt="المعاطف الطبية ولاب كوت الأطباء" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الملابس الطبية', url: '/ar/shop/medical-scrubs' }, 
          { name: 'اللاب كوت', url: '/ar/shop/medical-scrubs/medical-lab-coat' }
        ]} 
        certifications={['Optical White Retention', 'Stain Repellent', 'Reinforced Pockets']} 
        clientCount={150} 
        yearsInBusiness={15} 
        industry="Healthcare" 
      />
      <section className="bg-gradient-to-br from-slate-100 via-white to-gray-200 text-gray-900 border-b border-gray-300" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الملابس الطبية', href: '/ar/shop/medical-scrubs' }, 
            { label: 'اللاب كوت', href: '/ar/shop/medical-scrubs/medical-lab-coat' }
          ]} className="text-gray-500 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              المعاطف الطبية <span className="text-emerald-600">(لاب كوت)</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              رمز النقاء والثقة المهنية. معاطف مصممة بدقة للأطباء، أطقم التمريض، وعاملي المختبرات في المملكة، تقاوم البقع وتحتفظ ببياضها الناصع.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16 bg-gray-50" dir="rtl">
        <Container>
          <SectionHeading subtitle="جيوب مقواة وقصات احترافية" centered>تشكيلة اللاب كوت الطبي</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md hover:border-emerald-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=medical-lab-coat" className="inline-flex items-center gap-2 mt-6 text-emerald-700 font-medium hover:text-emerald-900 hover:underline">
                  طلب تجهيز أطقم الأطباء والمختبرات <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة من القطاع الصحي" centered>دليلك لاختيار اللاب كوت</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
