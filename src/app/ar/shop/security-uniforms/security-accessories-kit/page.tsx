import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'حزمة إكسسوارات ومعدات الأمن للحراس | يونيوم',
  titleAr: 'حزمة إكسسوارات ومعدات الأمن للحراس | يونيوم',
  description: 'إكسسوارات ومعدات أمنية متكاملة (Security Accessories Kit) لرجال وحراس الأمن في السعودية. تشمل أحزمة تكتيكية، شارات معدنية، كتافيات، وأحذية سلامة عالية الأداء.',
  descriptionAr: 'إكسسوارات ومعدات أمنية متكاملة (Security Accessories Kit) لرجال وحراس الأمن في السعودية. تشمل أحزمة تكتيكية، شارات معدنية، كتافيات، وأحذية سلامة عالية الأداء.',
  keywords: ['security accessories kit saudi arabia', 'guard duty belt riyadh', 'security badges ksa', 'tactical security gear'],
  keywordsAr: ['إكسسوارات حراس الأمن', 'حزام تكتيكي', 'شارات أمنية', 'كتافيات حارس أمن', 'معدات الأمن والسلامة', 'حذاء أمني'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/security-uniforms/security-accessories-kit',
  image: '/images/security/accessories.jpg', 
  imageAlt: 'إكسسوارات ومعدات حراس الأمن',
  aiSummary: 'توفر يونيوم حزماً متكاملة من الإكسسوارات الأمنية لتعزيز كفاءة ومظهر حراس الأمن. من الأحزمة التكتيكية المتينة إلى الشارات والرتب (Epaulettes) لضمان جاهزية الفريق الأمني.',
  aiSummaryAr: 'توفر يونيوم حزماً متكاملة من الإكسسوارات الأمنية لتعزيز كفاءة ومظهر حراس الأمن. من الأحزمة التكتيكية المتينة إلى الشارات والرتب (Epaulettes) لضمان جاهزية الفريق الأمني.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'حزام الواجب التكتيكي (Duty Belt)', price: '135 ريال', desc: 'حزام عريض وقوي من النايلون المقوى أو الجلد الصناعي، مصمم خصيصاً لحمل أجهزة اللاسلكي، الكشافات، والمعدات الأمنية بوزن موزّع يمنع إرهاق الظهر.' },
  { name: 'شارات ورتب أمنية (Epaulettes & Badges)', price: '45 ريال', desc: 'كتافيات منسوجة ورتب معدنية لتحديد التسلسل القيادي لفريق الأمن (حارس، مشرف، قائد فرقة)، مع شارات نحاسية أو فضية للصدر.' },
  { name: 'حذاء أمن تكتيكي مريح (Tactical Boots)', price: '280 ريال', desc: 'أحذية خفيفة الوزن ولكن شديدة المتانة، بنعل مضاد للانزلاق ووسادات ممتصة للصدمات، مثالية للحراس الذين يقفون أو يمشون لساعات طويلة.' },
  { name: 'قبعات أمنية وكابات (Security Caps)', price: '50 ريال', desc: 'قبعات رأس (بيسبول كاب أو قبعات بيريه عسكرية) مع إمكانية تطريز كلمة "SECURITY" أو "أمن" بخيوط عاكسة للضوء لتحسين الرؤية الليلية.' },
];

const faqs = [
  { question: 'هل الإكسسوارات متوافقة مع متطلبات شركات الحراسات الأمنية السعودية؟', answer: 'نعم، جميع الإكسسوارات من الرتب والشارات مصممة وفق المعايير المتعارف عليها في قطاع الحراسات الأمنية الخاصة في المملكة العربية السعودية.' },
  { question: 'هل تأتي الأحزمة التكتيكية مع حقائب حفظ المعدات (Pouches)؟', answer: 'يمكن طلب الحزام التكتيكي بمفرده، أو طلب "الحزمة الكاملة" التي تأتي مزودة بجرابات قابلة للإزالة لحفظ اللاسلكي، المفاتيح، والكشاف اليدوي.' },
  { question: 'هل تتوفر أحذية أمن بمقدمة صلبة (Steel Toe) لحراس المصانع؟', answer: 'بالتأكيد. نوفر نوعين من الأحذية: أحذية المشي التكتيكية الخفيفة لأمن المولات والمكاتب، وأحذية السلامة ذات المقدمة الفولاذية لحراس المنشآت الصناعية والمقاولات.' },
];

export default function SecurityAccessoriesKitPageAr() {
  return (
    <>
      <SEO2026 
        title="حزمة إكسسوارات ومعدات الأمن" 
        titleAr="حزمة إكسسوارات ومعدات الأمن" 
        description="معدات وأحزمة وشارات أمنية متكاملة لرجال الحراسة." 
        locale="ar" 
        pageType="product" 
        mainEntity="معدات وإكسسوارات حراس الأمن" 
        primaryImage="/images/security/accessories.jpg" 
        primaryImageAlt="حزمة إكسسوارات ومعدات الأمن" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الأزياء الأمنية', url: '/ar/shop/security-uniforms' }, 
          { name: 'معدات الأمن', url: '/ar/shop/security-uniforms/security-accessories-kit' }
        ]} 
        certifications={['Heavy Duty Nylon', 'Standard Security Specs']} 
        clientCount={120} 
        yearsInBusiness={15} 
        industry="Security Hardware" 
      />
      <section className="bg-gradient-to-br from-zinc-900 via-gray-800 to-zinc-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' }, 
            { label: 'إكسسوارات الأمن', href: '/ar/shop/security-uniforms/security-accessories-kit' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              إكسسوارات <span className="text-gray-400">ومعدات الأمن</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              تجهيزات متكاملة من الأحزمة التكتيكية والشارات إلى الأحذية المريحة، لإكمال الزي الأمني ورفع كفاءة وجاهزية فرق الحراسة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="التفاصيل التي تكمل الاحترافية" centered>تجهيزات الحراسة والمعدات</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-gray-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-gray-800 font-bold bg-gray-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=security-accessories" className="inline-flex items-center gap-2 mt-6 text-gray-700 font-medium hover:text-black hover:underline">
                  طلب توريد معدات وإكسسوارات <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="جودة تدعم الأداء" centered>الأسئلة الشائعة حول الإكسسوارات</SectionHeading>
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
