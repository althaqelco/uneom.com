import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء موظفي المتاجر والأسواق المركزية (سوبرماركت) | يونيوم',
  titleAr: 'أزياء موظفي المتاجر والأسواق المركزية (سوبرماركت) | يونيوم',
  description: 'يونيفورم عملي ومريح لعمال المتاجر، السوبرماركت، والهايبر ماركت في السعودية. أطقم تتحمل الحركة المستمرة، مزودة بجيوب وتوفر مظهراً احترافياً لخدمة المتسوقين.',
  descriptionAr: 'يونيفورم عملي ومريح لعمال المتاجر، السوبرماركت، والهايبر ماركت في السعودية. أطقم تتحمل الحركة المستمرة، مزودة بجيوب وتوفر مظهراً احترافياً لخدمة المتسوقين.',
  keywords: ['store staff uniforms saudi arabia', 'supermarket employee attire riyadh', 'grocery store uniform ksa', 'retail worker clothing'],
  keywordsAr: ['ملابس موظفي المتاجر', 'يونيفورم سوبرماركت', 'أزياء الهايبر ماركت', 'زي عمال التجزئة', 'ملابس الكاشير'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/retail-uniforms/store-staff',
  image: '/images/retail/store-staff.jpg', 
  imageAlt: 'أزياء موظفي المتاجر والأسواق المركزية',
  aiSummary: 'تصمم يونيوم أزياء موظفي المتاجر لتكون عملية ومريحة لحركة الرفع والتنظيم اليومية. نستخدم أقمشة متينة وسهلة التنظيف لضمان ظهور طاقم السوبرماركت أو المتجر بمظهر نظيف واحترافي دائماً.',
  aiSummaryAr: 'تصمم يونيوم أزياء موظفي المتاجر لتكون عملية ومريحة لحركة الرفع والتنظيم اليومية. نستخدم أقمشة متينة وسهلة التنظيف لضمان ظهور طاقم السوبرماركت أو المتجر بمظهر نظيف واحترافي دائماً.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'قميص بولو موظفي التجزئة', price: '75 ريال', desc: 'قميص بولو بيكيه (Pique Polo) متين ومريح، مثالي لموظفي ترتيب الأرفف والمبيعات المباشرة. سهل الغسيل ولا يحتاج لكي مستمر.' },
  { name: 'فيست سوبرماركت (Supermarket Vest)', price: '65 ريال', desc: 'سترة عملية تلبس فوق الملابس الشخصية أو قميص موحد، مزودة بجيوب واسعة لحمل أدوات التسعير وأجهزة المسح الضوئي (Barcode Scanners).' },
  { name: 'مريلة المحاسبين (Cashier Apron)', price: '55 ريال', desc: 'مريلة نصفية (Waist Apron) أو كاملة لموظفي الكاشير وخدمات التعبئة، تحمي الملابس الأساسية وتوفر جيوباً سريعة الوصول.' },
  { name: 'جاكيت مخازن التبريد', price: '190 ريال', desc: 'جاكيت مبطن حرارياً ومقاوم للرطوبة، مخصص للعاملين في أقسام اللحوم، الألبان، والمستودعات المبردة داخل الهايبر ماركت.' },
];

const faqs = [
  { question: 'موظفونا يرفعون الصناديق الثقيلة، هل الملابس تتمزق بسهولة؟', answer: 'لقد صممنا ملابس المتاجر مع تعزيز مزدوج للخياطة (Double-stitched seams) في مناطق الكتف والإبط والركبة لتتحمل الإجهاد البدني وحركات الرفع المتكررة دون تمزق.' },
  { question: 'هل يمكنكم طباعة شعار المتجر بحجم كبير على الظهر لسهولة تمييز الموظف؟', answer: 'نعم، نستخدم تقنية الطباعة الحرارية المتقدمة (DTF) التي تسمح بطباعة شعارات كبيرة وواضحة جداً على الظهر، مما يسهل على المتسوقين العثور على الموظفين لطلب المساعدة.' },
  { question: 'ما مدى سرعة توريد الملابس للموظفين الجدد في قطاع تكثر فيه الاستقالات؟', answer: 'ندرك تحديات قطاع التجزئة، لذلك نوفر خدمة (الاحتفاظ بالمخزون) للعلامات التجارية الكبرى، حيث نقوم بشحن أطقم الموظفين الجدد إلى فروعكم خلال 48 ساعة من طلبكم.' },
];

export default function StoreStaffUniformsPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء موظفي المتاجر والسوبرماركت" 
        titleAr="أزياء موظفي المتاجر والسوبرماركت" 
        description="يونيفورم متين وعملي لموظفي التجزئة والمبيعات المباشرة." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء موظفي المتاجر والأسواق المركزية" 
        primaryImage="/images/retail/store-staff.jpg" 
        primaryImageAlt="أزياء موظفي المتاجر والسوبرماركت" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء التجزئة والخدمات', url: '/ar/shop/retail-uniforms' }, 
          { name: 'موظفي المتاجر', url: '/ar/shop/retail-uniforms/store-staff' }
        ]} 
        certifications={['Heavy Duty Stitching', 'Easy Care Fabrics']} 
        clientCount={350} 
        yearsInBusiness={15} 
        industry="Retail & Supermarkets" 
      />
      <section className="bg-gradient-to-br from-emerald-800 via-green-800 to-teal-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء التجزئة والخدمات', href: '/ar/shop/retail-uniforms' }, 
            { label: 'موظفي المتاجر', href: '/ar/shop/retail-uniforms/store-staff' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-emerald-300">موظفي المتاجر</span> والأسواق
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              تصاميم عملية تدعم الحركة المستمرة، وتبرز هوية متجرك أو السوبرماركت الخاص بك بوضوح أمام المتسوقين.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="متانة يومية لخدمة سريعة" centered>تشكيلة الأزياء للمتاجر</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-emerald-100 hover:shadow-lg hover:border-green-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-green-800 font-bold bg-green-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=store-staff-uniform" className="inline-flex items-center gap-2 mt-6 text-green-700 font-medium hover:text-green-900 hover:underline">
                  طلب تسعيرة للأسواق والمتاجر <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="حلول للتجزئة السريعة" centered>الأسئلة الشائعة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-50 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
