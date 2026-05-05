import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء قطاع التجزئة في السعودية | يونيوم',
  titleAr: 'أزياء قطاع التجزئة | متجر يونيوم',
  description: 'أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين.',
  descriptionAr: 'أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين.',
  keywords: ['أزياء التجزئة', 'ملابس موظفي مبيعات', 'زي موحد للمتاجر'],
  keywordsAr: ['أزياء التجزئة', 'ملابس موظفي مبيعات', 'زي موحد للمتاجر'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/industries/retail',
  image: '/images/hero/hero-1.jpg',
  imageAlt: 'أزياء قطاع التجزئة',
  aiSummary: 'أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين.',
});

export const dynamic = 'force-static';

const features = [
  { title: 'جودة استثنائية', desc: 'منتجات مصنعة من أفضل الخامات لضمان المتانة وتحمل ظروف العمل.' },
  { title: 'خيارات التخصيص', desc: 'إمكانية إضافة التطريز والشعارات المخصصة لتتناسب مع هوية علامتك التجارية.' },
  { title: 'أسعار الجملة', desc: 'خصومات خاصة وتنافسية لطلبات الكميات الكبيرة وعقود التوريد المستمرة.' },
  { title: 'مطابقة المعايير', desc: 'توافق كامل مع المعايير والمواصفات السعودية (SASO) ومتطلبات السلامة.' }
];

const faqs = [
  { question: 'هل يمكن توفير منتجات بتصاميم خاصة ومقاسات محددة؟', answer: 'نعم، نحن نقدم خدمة التفصيل حسب الطلب لضمان ملاءمة المنتجات تماماً لاحتياجات ومقاسات الموظفين الخاصة.' },
  { question: 'ما هو الوقت المتوقع للتسليم للطلبات الكبيرة؟', answer: 'يختلف وقت التسليم حسب حجم الطلب ومستوى التخصيص، وعادة ما يتراوح بين 2 إلى 4 أسابيع للكميات التجارية.' },
  { question: 'هل تقدمون ضماناً على المنتجات؟', answer: 'جميع منتجاتنا تخضع لرقابة صارمة على الجودة، ونضمن استبدال أي قطع بها عيوب تصنيعية.' }
];

export default function RetailIndustryPageAR() {
  return (
    <>
      <SEO2026 title="أزياء قطاع التجزئة" titleAr="أزياء قطاع التجزئة" description="أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين." locale="ar" pageType="service" mainEntity="أزياء قطاع التجزئة" primaryImage="/images/hero/hero-1.jpg" primaryImageAlt="أزياء قطاع التجزئة" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'أزياء قطاع التجزئة', url: '/ar/industries/retail' }]} certifications={['SASO']} clientCount={200} yearsInBusiness={20} industry="تجهيزات مهنية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-indigo-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'أزياء قطاع التجزئة', href: '/ar/industries/retail' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء قطاع التجزئة</h1>
            <p className="text-xl text-gray-300 leading-relaxed">أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="التفاصيل" centered>معلومات المنتجات</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
            {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.desc}</p></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>استفسارات متكررة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">جاهز للطلب أو بحاجة لتفاصيل أكثر؟</h2>
            <p className="text-xl mb-8 text-gray-600">فريق مبيعات يونيوم جاهز لخدمتك وتلبية احتياجاتك بأفضل الأسعار.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl transition-all shadow-lg">طلب عرض سعر →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
