import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'أزياء وبدل المشرفين ومراقبي الجودة في المصانع | يونيوم',
  titleAr: 'أزياء وبدل المشرفين ومراقبي الجودة في المصانع | يونيوم',
  description: 'ملابس واحترافية لمشرفي المصانع، رؤساء الورديات، ومراقبي الجودة في السعودية. أزياء تمزج بين المظهر الإداري الأنيق ومتطلبات السلامة في الصالات الصناعية.',
  descriptionAr: 'ملابس واحترافية لمشرفي المصانع، رؤساء الورديات، ومراقبي الجودة في السعودية. أزياء تمزج بين المظهر الإداري الأنيق ومتطلبات السلامة في الصالات الصناعية.',
  keywords: ['supervisor uniforms saudi arabia', 'factory manager attire riyadh', 'quality control apparel ksa', 'plant supervisor uniform'],
  keywordsAr: ['زي مشرفي المصانع', 'أزياء مراقبي الجودة', 'بدل مهندسي المصانع', 'رؤساء الورديات', 'يونيفورم إداريي الصناعة'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/manufacturing-workwear/supervisor-uniform',
  image: '/images/industrial/supervisor.jpg', 
  imageAlt: 'أزياء مشرفي المصانع ومهندسي الجودة',
  aiSummary: 'أزياء يونيوم لمشرفي المصانع صممت لتوفير السلطة الإدارية والهيبة (Authority) مع الحفاظ التام على شروط السلامة والتواجد الميداني بجوار خطوط الإنتاج والتصنيع.',
  aiSummaryAr: 'أزياء يونيوم لمشرفي المصانع صممت لتوفير السلطة الإدارية والهيبة (Authority) مع الحفاظ التام على شروط السلامة والتواجد الميداني بجوار خطوط الإنتاج والتصنيع.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'قميص المشرف التنفيذي الميداني', price: '160 ريال', desc: 'قميص رسمي مصمم لمدراء المصانع ورؤساء الأقسام، مصنوع من نسيج معالج يقاوم التجاعيد ويحتوي على حامل لبطاقة الهوية (ID Badge) وجيوب للمعدات الخفيفة.' },
  { name: 'جاكيت مهندسي مراقبة الجودة (QC)', price: '210 ريال', desc: 'جاكيت عملي بمظهر إداري، مزود بجيوب ذكية لحمل أجهزة القياس والفحص، وتصميم بارز يسهل التعرف على مفتشي الجودة في خط الإنتاج.' },
  { name: 'فيست الإشراف الأمني والإداري', price: '135 ريال', desc: 'سترة عالية الجودة تلبس فوق القميص للإشراف والتوجيه الميداني، مزودة بمسامات للتهوية وجيوب مخصصة لأجهزة اللاسلكي والتابلت.' },
  { name: 'لاب كوت المراقب الميداني', price: '180 ريال', desc: 'معطف عملي طويل لمشرفي مصانع الأغذية والأدوية، يحمي الملابس الداخلية ويمنح المشرف مظهراً رقابياً صارماً ومحترفاً.' },
];

const faqs = [
  { question: 'لماذا يجب تخصيص زي مختلف للمشرفين عن العمال؟', answer: 'التمايز البصري (Visual Hierarchy) حيوي في حالات الطوارئ والإدارة اليومية للمصنع. عندما يختلف زي المشرف أو مدير الوردية، يسهل على العمال تحديده سريعاً لطلب التوجيه أو الإبلاغ عن الأعطال.' },
  { question: 'هل أزياء المشرفين تتوافق مع التواجد في صالات التصنيع؟', answer: 'نعم، فرغم مظهرها الإداري، نصنعها خالية من الأجزاء المتدلية، بأكمام قابلة للطي بأمان، وأقمشة لا تتأثر بالغبار الصناعي أو الشحوم العرضية.' },
  { question: 'كيف يمكن تخصيص ملابس المشرفين لتمييز أقسامهم؟', answer: 'بالإضافة لتطريز المسمى الوظيفي المباشر على الصدر أو الظهر (مثل: مشرف إنتاج، مفتش جودة)، يمكننا تغيير لون الياقات أو إضافة شريط جانبي بلون القسم المخصص له.' },
];

export default function SupervisorUniformPageAr() {
  return (
    <>
      <SEO2026 
        title="أزياء وملابس المشرفين ومراقبي الجودة" 
        titleAr="أزياء وملابس المشرفين ومراقبي الجودة" 
        description="ملابس إدارية وميدانية لمشرفي المصانع." 
        locale="ar" 
        pageType="product" 
        mainEntity="أزياء مهندسي ومشرفي المصانع" 
        primaryImage="/images/industrial/supervisor.jpg" 
        primaryImageAlt="أزياء المشرفين ومراقبي الجودة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'أزياء الصناعة والتشغيل', url: '/ar/shop/manufacturing-workwear' }, 
          { name: 'أزياء المشرفين', url: '/ar/shop/manufacturing-workwear/supervisor-uniform' }
        ]} 
        certifications={['Safety & Style Balanced', 'Visual Hierarchy Standard']} 
        clientCount={110} 
        yearsInBusiness={15} 
        industry="Industrial Management" 
      />
      <section className="bg-gradient-to-br from-blue-950 via-slate-800 to-black text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'أزياء الصناعة', href: '/ar/shop/manufacturing-workwear' }, 
            { label: 'أزياء المشرفين', href: '/ar/shop/manufacturing-workwear/supervisor-uniform' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              أزياء <span className="text-blue-400">المشرفين</span> ومراقبي الجودة
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              هيبة الإدارة وأمان الميدان. تصاميم حصرية تميز الطاقم الإشرافي ورؤساء الورديات في المنشآت الصناعية السعودية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="القيادة من قلب خط الإنتاج" centered>أزياء الطاقم الإداري والهندسي</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-slate-200 hover:shadow-lg hover:border-blue-400 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-blue-800 font-bold bg-blue-50 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=supervisor-uniform" className="inline-flex items-center gap-2 mt-6 text-blue-700 font-medium hover:text-blue-900 hover:underline">
                  طلب تجهيز المهندسين والمشرفين <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="تنظيم بصري وإدارة فاعلة" centered>الأسئلة المتكررة لتجهيز الإشراف</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
