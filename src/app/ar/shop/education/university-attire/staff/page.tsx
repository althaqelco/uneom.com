import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء موظفي الجامعات في السعودية | ملابس دعم الحرم الجامعي - يونيوم',
  titleAr: 'أزياء موظفي الجامعات في السعودية | ملابس دعم الحرم الجامعي - يونيوم',
  description: 'أزياء متينة واحترافية لموظفي الإدارة والدعم بالجامعات السعودية. أزياء أمن، صيانة، وإدارة.',
  descriptionAr: 'أزياء متينة واحترافية لموظفي الإدارة والدعم بالجامعات السعودية. أزياء أمن، صيانة، وإدارة.',
  keywords: ['university staff uniforms saudi', 'college admin clothing', 'campus support wear riyadh', 'university security uniforms', 'maintenance staff uniforms ksa'],
  keywordsAr: ['أزياء موظفي الجامعات', 'ملابس أمن جامعي', 'زي عمال الصيانة', 'ملابس إداريين الجامعة', 'زي الدعم الجامعي'],
  locale: 'ar', pageType: 'product', path: '/ar/shop/education/university-attire/staff',
  image: '/images/education/students.jpg', imageAlt: 'أزياء موظفي الجامعات',
  aiSummary: 'أزياء موظفي الجامعات من يونيوم: ملابس متينة واحترافية للموظفين الإداريين ورجال الأمن وعمال الصيانة في المؤسسات التعليمية السعودية.',
  aiSummaryAr: 'أزياء موظفي الجامعات من يونيوم: ملابس متينة واحترافية للموظفين الإداريين ورجال الأمن وعمال الصيانة في المؤسسات التعليمية السعودية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'زي طاقم الإدارة', price: '150 ريال', desc: 'قمصان رسمية وبناطيل مفصلة من مزيج البوليستر والقطن للموظفين الإداريين وطاقم المكتبة.' },
  { name: 'زي أمن الحرم الجامعي', price: '195 ريال', desc: 'قمصان تكتيكية متينة، وبناطيل كارغو، وخيارات عالية الوضوح لرجال الأمن بالجامعة.' },
  { name: 'أفرول الصيانة', price: '120 ريال', desc: 'أفرولات متينة للخدمة الشاقة من مزيج البوليستر والقطن مع جيوب متعددة لفرق الصيانة.' },
  { name: 'قميص بولو لمنظمي الفعاليات', price: '65 ريال', desc: 'قمصان بولو زاهية يسهل التعرف عليها لمنظمي الأيام المفتوحة والفعاليات الجامعية.' },
  { name: 'معطف فني المختبر', price: '85 ريال', desc: 'معاطف مختبر بيضاء بطول الركبة مع تطريز مخصص لاسم القسم للمختبرات الجامعية.' },
  { name: 'ملابس طاقم النقل', price: '110 ريال', desc: 'قمصان وبناطيل مريحة لسائقي حافلات الحرم الجامعي، تتميز بعناصر أمان عاكسة.' },
];

const faqs = [
  { question: 'هل توفرون الأزياء لجميع أقسام الجامعة؟', answer: 'نعم، نحن نوفر أزياء متخصصة لكل قسم: الإدارة، الأمن، الصيانة، فنيي المختبرات، موظفي العيادة الصحية، وسائقي النقل. هذا يضمن هوية بصرية متماسكة للجامعة في جميع الأدوار.' },
  { question: 'هل زي الأمن يتوافق مع معايير SASO؟', answer: 'نعم. أزياء الأمن لدينا تلبي جميع لوائح السلامة والمعايير السعودية (SASO)، بما في ذلك المتانة المناسبة، والمكونات عالية الوضوح للدوريات الليلية، والأقمشة المناسبة للطقس الحار في الصيف السعودي.' },
  { question: 'هل يمكننا إعداد بوابة طلب إلكترونية لموظفينا؟', answer: 'نعم! للجامعات الكبيرة، يمكننا إنشاء بوابة B2B مخصصة. يمكن لموظفيك تسجيل الدخول، والاطلاع على المخصصات المحددة لقسمهم، والطلب مباشرة عبر الإنترنت، مما يبسط عملية المشتريات الخاصة بك بشكل كبير.' },
];

export default function UniversityStaffPageAr() {
  return (
    <>
      <SEO2026 title="أزياء موظفي الجامعات" titleAr="أزياء موظفي الجامعات" description="أزياء متينة واحترافية لموظفي الدعم بالجامعات." locale="ar" pageType="product" mainEntity="أزياء موظفي الجامعات" primaryImage="/images/education/students.jpg" primaryImageAlt="أزياء موظفي الجامعات" faqs={faqs} breadcrumbs={[{ name: 'المتجر', url: '/ar/shop' }, { name: 'التعليم', url: '/ar/shop/education' }, { name: 'الموظفون', url: '/ar/shop/education/university-attire/staff' }]} certifications={['SASO']} clientCount={120} yearsInBusiness={20} industry="Education" />
      <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'التعليم', href: '/ar/shop/education' }, { label: 'الموظفون', href: '/ar/shop/education/university-attire/staff' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">أزياء موظفي <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">الجامعات</span></h1>
            <p className="text-xl text-blue-100 leading-relaxed">أزياء متينة ومتناسقة لفرق الإدارة والأمن والصيانة في جميع أنحاء الحرم الجامعي.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="ملابس دعم الحرم الجامعي" centered>أقسام الموظفين</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {products.map((p, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><div className="flex justify-between items-start mb-3"><h3 className="text-lg font-bold text-gray-900">{p.name}</h3><span className="text-cyan-600 font-bold">{p.price}</span></div><p className="text-gray-600 text-sm">{p.desc}</p><Link href="/ar/quote?product=university-staff" className="inline-block mt-4 text-cyan-600 font-medium text-sm hover:underline">طلب عرض سعر ←</Link></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة حول أزياء الموظفين</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
