import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء و ملابس طلاب الجامعات السعودية وتخصصاتها | يونيوم',
  titleAr: 'أزياء و ملابس طلاب الجامعات السعودية وتخصصاتها | يونيوم',
  description: 'أزياء جامعية موحدة لطلاب الكليات الطبية، الهندسية، والتقنية في السعودية. يونيفورم متين ومريح يلبي متطلبات التخصصات الأكاديمية المختلفة بأعلى معايير الجودة.',
  descriptionAr: 'أزياء جامعية موحدة لطلاب الكليات الطبية، الهندسية، والتقنية في السعودية. يونيفورم متين ومريح يلبي متطلبات التخصصات الأكاديمية المختلفة بأعلى معايير الجودة.',
  keywords: ['university attire saudi arabia', 'college student uniforms riyadh', 'medical college scrubs ksa', 'engineering student uniform'],
  keywordsAr: ['أزياء طلاب الجامعة', 'يونيفورم كليات الطب', 'ملابس التخصصات الصحية', 'بدل التدريب العملي', 'أزياء الكليات السعودية'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/education/university-attire',
  image: '/images/education/students.jpg', 
  imageAlt: 'أزياء و يونيفورم طلاب الجامعات السعودية',
  aiSummary: 'تصمم يونيوم وتنفذ ملابس وتجهيزات طلاب الجامعات حسب متطلبات كل كلية (سكراب للكليات الطبية، أطقم عمل للكليات التقنية)، مع الالتزام التام بالمواصفات الأكاديمية المعتمدة للجامعات السعودية.',
  aiSummaryAr: 'تصمم يونيوم وتنفذ ملابس وتجهيزات طلاب الجامعات حسب متطلبات كل كلية (سكراب للكليات الطبية، أطقم عمل للكليات التقنية)، مع الالتزام التام بالمواصفات الأكاديمية المعتمدة للجامعات السعودية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'سكراب طلاب الكليات الصحية', price: '120 ريال', desc: 'طقم سكراب طبي (قميص وبنطلون) مصمم لطلاب كليات الطب والتمريض، من نسيج مقاوم للبكتيريا يتحمل التعقيم المستمر وساعات العمل الطويلة بالمستشفيات.' },
  { name: 'لاب كوت طلاب العلوم والصيدلة', price: '85 ريال', desc: 'معطف مختبر (Lab Coat) أبيض من القطن المخلوط، مصمم لحماية الطلاب أثناء التجارب العلمية، مزود بجيوب واسعة لحمل الأدوات.' },
  { name: 'بدل تدريب الكليات الهندسية والتقنية', price: '160 ريال', desc: 'أفرول (Coverall) أو طقم قطعتين متين مخصص لطلاب الكليات الصناعية ومعاهد التدريب المهني لحمايتهم أثناء الورش والتدريب العملي.' },
  { name: 'بليزر التخرج وحفلات المناقشة', price: '320 ريال', desc: 'بليزر رسمي وأنيق مصمم خصيصاً ليوم المناقشة وحفلات التخرج (للجنسين)، يمكن تطريزه بشعار الجامعة وسنة التخرج.' },
];

const faqs = [
  { question: 'هل تتعاقدون مباشرة مع الجامعات لتوريد أزياء الطلاب؟', answer: 'نعم، نحن نتعاقد مع الجامعات الحكومية والخاصة لتوريد الزي لآلاف الطلاب دفعة واحدة وبأسعار الجملة، مع إمكانية توفير متجر إلكتروني داخلي للجامعة لتسهيل طلب الطلاب بأنفسهم.' },
  { question: 'كيف يتم تمييز طلاب كل كلية في حالة توحيد المورد؟', answer: 'نعتمد على الكود اللوني (Color Coding)؛ حيث يتم تخصيص لون محدد لسكراب كل كلية (مثلاً الكحلي للطب، العنابي للأسنان، والأخضر للتمريض)، مع تطريز شعار الكلية الدقيق على الصدر.' },
  { question: 'هل تتوفر أزياء للطالبات المحجبات والمنقبات؟', answer: 'بالتأكيد، نوفر خيارات تتناسب تماماً مع الحجاب والنقاب، بما في ذلك التنانير الطويلة الواسعة للمعامل، والسكراب بأكمام طويلة وقصات محتشمة مريحة جداً.' },
];

export default function UniversityAttirePageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء وملابس طلاب الجامعات" 
        titleAr="أزياء وملابس طلاب الجامعات" 
        description="أزياء متخصصة لطلاب الكليات الصحية والتقنية." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء الجامعات والكليات" 
        primaryImage="/images/education/students.jpg" 
        primaryImageAlt="أزياء طلاب الجامعة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التعليم', url: '/ar/shop/education' }, 
          { name: 'أزياء الجامعات', url: '/ar/shop/education/university-attire' }
        ]} 
        certifications={['Medical Grade Scrubs', 'Heavy Duty Certified']} 
        clientCount={25} 
        yearsInBusiness={15} 
        industry="Higher Education" 
      />
      <section className="bg-gradient-to-br from-indigo-900 via-sky-800 to-indigo-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التعليم', href: '/ar/shop/education' }, 
            { label: 'أزياء الجامعات', href: '/ar/shop/education/university-attire' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء طلاب <span className="bg-gradient-to-r from-sky-300 to-white text-transparent bg-clip-text">الجامعات</span>
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              تجهيزات كاملة من السكراب الطبي للقطاع الصحي إلى أطقم الورش للكليات التقنية، بجودة تتحمل كثافة التدريب العملي.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصاميم مخصصة لكل تخصص أكاديمي" centered>تشكيلة الأزياء الجامعية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-sky-100 hover:shadow-lg hover:border-indigo-300 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-indigo-700 font-bold bg-sky-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=university-attire" className="inline-flex items-center gap-2 mt-6 text-indigo-700 font-medium hover:text-indigo-800 hover:underline">
                  طلب تسعيرة للكليات <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="دليل التعاقد للجامعات" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-sky-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
