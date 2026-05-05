import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'ملابس وزي خطوط الإنتاج والتجميع للمصانع | يونيوم',
  titleAr: 'ملابس وزي خطوط الإنتاج والتجميع للمصانع | يونيوم',
  description: 'زي موحد مريح وعملي لعمال خطوط الإنتاج والتجميع في المصانع السعودية. أطقم مصممة لمرونة الحركة والامتثال لاشتراطات الأمن والسلامة.',
  descriptionAr: 'زي موحد مريح وعملي لعمال خطوط الإنتاج والتجميع في المصانع السعودية. أطقم مصممة لمرونة الحركة والامتثال لاشتراطات الأمن والسلامة.',
  keywords: ['production line uniforms saudi arabia', 'factory workers apparel riyadh', 'assembly line clothing ksa', 'light manufacturing workwear'],
  keywordsAr: ['زي خطوط الإنتاج', 'ملابس عمال التجميع', 'يونيفورم مصانع خفيفة', 'بدل عمال مصانع', 'أطقم الإنتاج والتعبئة'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/manufacturing-workwear/production-line-uniform',
  image: '/images/industrial/industrial-3.jpg', 
  imageAlt: 'أزياء عمال خطوط الإنتاج',
  aiSummary: 'تصمم يونيوم ملابس خطوط الإنتاج للحد من الإجهاد البدني للعمال بفضل الأقمشة خفيفة الوزن ذات التهوية العالية، والمطابقة لاشتراطات الهيئة السعودية للمدن الصناعية.',
  aiSummaryAr: 'تصمم يونيوم ملابس خطوط الإنتاج للحد من الإجهاد البدني للعمال بفضل الأقمشة خفيفة الوزن ذات التهوية العالية، والمطابقة لاشتراطات الهيئة السعودية للمدن الصناعية.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'طقم الإنتاج القياسي (قميص وبنطلون)', price: '140 ريال', desc: 'طقم قطعتين عملي جداً، مصنوع من نسيج البولي-قطن المتين الخفيف الذي يوفر تهوية ممتازة خلال مناوبات العمل الطويلة.' },
  { name: 'جاكيت التجميع الخفيف', price: '125 ريال', desc: 'جاكيت خفيف الوزن يُرتدى فوق الملابس، مزود بسحابات بلاستيكية آمنة (لا تصدأ ولا تنقل الحرارة/الكهرباء) مخصص لعمال التجميع.' },
  { name: 'فيست المصانع المعرّف (Color-Coded Vest)', price: '90 ريال', desc: 'سترة عملية تلبس فوق القميص لتمييز العمال حسب القسم أو خط الإنتاج بألوان محددة، مما يسهل الإدارة البصرية للمصنع.' },
  { name: 'ملابس الغرف النظيفة (Cleanroom Apparels)', price: '210 ريال', desc: 'بدل مضادة للكهرباء الساكنة (ESD Safe) وخالية من الوبر، مخصصة لمصانع الأدوية والأجهزة الإلكترونية الدقيقة.' },
];

const faqs = [
  { question: 'هل تصميم ملابس خط الإنتاج يعيق الحركة السريعة للعمال؟', answer: 'على العكس، نستخدم تقنية القص المريح (Ergonomic Fit) ونضيف كسرات إضافية في منطقة الظهر (Action Back) لتوفير أقصى درجات حرية الحركة للذراعين والكتفين لتسهيل مهام التجميع السريع.' },
  { question: 'كيف أستطيع طلب كميات ضخمة (فوق 1000 طقم) وهل يوجد خصم؟', answer: 'بالتأكيد. للمصانع الكبيرة، نقوم بتوقيع عقود توريد سنوية أو نصف سنوية تضمن لك تثبيت الأسعار بخصومات خاصة بالجملة وتوريد دفعات متتالية حسب احتياجك وحركة التوظيف.' },
  { question: 'هل توفرون خدمة استبدال الملابس التالفة للعمال؟', answer: 'ضمن برامج الإدارة الشاملة للزي (Uniform Management Program)، نوفر لبعض المصانع خدمة استبدال القطع التالفة دورياً بأسعار مدعومة لضمان بقاء المظهر العام للمصنع احترافياً.' },
];

export default function ProductionLineUniformPageAr() {
  return (
    <>
      <SEO2026 
        title="ملابس وأزياء خطوط الإنتاج والتجميع" 
        titleAr="ملابس وأزياء خطوط الإنتاج والتجميع" 
        description="أزياء مريحة وعملية لعمال التصنيع وخطوط الإنتاج." 
        locale="ar" 
        pageType="product" 
        mainEntity="ملابس عمال خطوط الإنتاج والتصنيع" 
        primaryImage="/images/industrial/industrial-3.jpg" 
        primaryImageAlt="أزياء وملابس خطوط الإنتاج والتجميع" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الصناعة والتشغيل', url: '/ar/shop/manufacturing-workwear' }, 
          { name: 'أزياء خطوط الإنتاج', url: '/ar/shop/manufacturing-workwear/production-line-uniform' }
        ]} 
        certifications={['Ergonomic Fit', 'ESD Safe Available']} 
        clientCount={300} 
        yearsInBusiness={15} 
        industry="Manufacturing & Production" 
      />
      <section className="bg-gradient-to-br from-neutral-700 via-gray-600 to-slate-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الصناعة', href: '/ar/shop/manufacturing-workwear' }, 
            { label: 'أزياء خطوط الإنتاج', href: '/ar/shop/manufacturing-workwear/production-line-uniform' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-gray-300">خطوط الإنتاج</span> والتجميع
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              مرونة الحركة وكفاءة الأداء. أطقم مصممة لتوفير أقصى درجات الراحة لعمال المصانع خلال نوبات العمل الطويلة والمجهدة.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تنظيم وإدارة بصرية أفضل لمصنعك" centered>مجموعة الملابس الصناعية الخفيفة</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-gray-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-gray-800 font-bold bg-gray-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=production-line-uniform" className="inline-flex items-center gap-2 mt-6 text-gray-700 font-medium hover:text-black hover:underline">
                  طلب تسعيرة كميات جملة <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="حلول للتصنيع المتكامل" centered>الأسئلة المتكررة لمدراء المصانع</SectionHeading>
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
