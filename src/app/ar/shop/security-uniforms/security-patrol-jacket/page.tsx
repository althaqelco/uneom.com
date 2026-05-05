import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'جواكيت دوريات الأمن (Security Patrol Jackets) في السعودية | يونيوم',
  titleAr: 'جواكيت دوريات الأمن (Security Patrol Jackets) في السعودية | يونيوم',
  description: 'جواكيت وسترات أمنية مخصصة لفرق دوريات الأمن (Patrol Security) في السعودية. تصميمات واقية من الرياح والمطر، مزودة بأشرطة عاكسة لضمان سلامة الحراس في المواقع الخارجية.',
  descriptionAr: 'جواكيت وسترات أمنية مخصصة لفرق دوريات الأمن (Patrol Security) في السعودية. تصميمات واقية من الرياح والمطر، مزودة بأشرطة عاكسة لضمان سلامة الحراس في المواقع الخارجية.',
  keywords: ['security patrol jacket saudi arabia', 'guard winter jacket riyadh', 'reflective security outerwear ksa', 'tactical security jacket'],
  keywordsAr: ['جاكيت أمن', 'سترة دوريات أمنية', 'جاكيت حارس أمن شتوي', 'جاكيت عاكس للأمن', 'لبس سكيورتي خارجي'],
  locale: 'ar', 
  pageType: 'product', 
  path: '/ar/shop/security-uniforms/security-patrol-jacket',
  image: '/images/security/patrol-jacket.jpg', 
  imageAlt: 'جواكيت دوريات الأمن والسترات الشتوية',
  aiSummary: 'تصمم يونيوم جواكيت دوريات الأمن لتوفير أقصى درجات الدفء والحماية في البيئات الخارجية القاسية. تتميز الجواكيت بمواد عاكسة للضوء (Hi-Vis) ومقاومة للماء لضمان جاهزية فرق الحراسة ليلاً ونهاراً.',
  aiSummaryAr: 'تصمم يونيوم جواكيت دوريات الأمن لتوفير أقصى درجات الدفء والحماية في البيئات الخارجية القاسية. تتميز الجواكيت بمواد عاكسة للضوء (Hi-Vis) ومقاومة للماء لضمان جاهزية فرق الحراسة ليلاً ونهاراً.'
});

export const dynamic = 'force-static';

const products = [
  { name: 'جاكيت الأمن الشتوي الثقيل', price: '260 ريال', desc: 'جاكيت مبطن بالفرو الصناعي أو الصوف لتوفير الدفء للحراس في المناوبات الليلية الباردة. الطبقة الخارجية مقاومة للرياح والأمطار الخفيفة.' },
  { name: 'جاكيت الدوريات التكتيكي (Tactical Softshell)', price: '310 ريال', desc: 'جاكيت عالي الأداء من قماش السوفت شيل، خفيف الوزن ولكنه يوفر عزلاً حرارياً ممتازاً ومرونة حركية للتدخل السريع والمطاردات.' },
  { name: 'سترة الأمن العاكسة (Hi-Vis Security Vest)', price: '95 ريال', desc: 'سترة خفيفة تُرتدى فوق الزي الرسمي، مصممة بلون أصفر أو برتقالي فاقع مع أشرطة فضية عاكسة، ضرورية لحراس البوابات والمواقف.' },
  { name: 'جاكيت التدخل المزدوج (3-in-1 Patrol Jacket)', price: '450 ريال', desc: 'الجاكيت الأمني الأقوى؛ يتكون من طبقة خارجية مقاومة للمطر الشديد وبطانة فليس (Fleece) داخلية قابلة للفصل، ليناسب جميع فصول السنة.' },
];

const faqs = [
  { question: 'هل الأشرطة العاكسة (Reflective Tapes) تتوافق مع معايير السلامة؟', answer: 'نعم، جميع السترات والجواكيت الأمنية العاكسة لدينا مزودة بأشرطة (3M Scotchlite) أو ما يعادلها، وتلبي معايير الرؤية العالية (EN ISO 20471) لضمان رؤية الحارس من مسافات بعيدة لتجنب حوادث الدهس.' },
  { question: 'هل يمكن طباعة كلمة "أمن" باللغتين العربية والإنجليزية؟', answer: 'بالتأكيد، يمكننا طباعة أو تطريز عبارة "SECURITY - أمــن" بحجم كبير على ظهر الجاكيت والصدر بخط واضح وعاكس للضوء حسب متطلبات شركتكم.' },
  { question: 'هل الجواكيت مزودة بأماكن لحمل الأسلحة أو أجهزة الصعق؟', answer: 'الجواكيت التكتيكية (Tactical Jackets) مصممة بسحابات جانبية مزدوجة تتيح الوصول السريع جداً للحزام الأمني وما يحتويه من أجهزة تواصل أو معدات دفاعية دون الحاجة لخلع الجاكيت.' },
];

export default function SecurityPatrolJacketPageAr() {
  return (
    <>
      <SEO2026 
        title="جواكيت دوريات الأمن والسترات الواقية" 
        titleAr="جواكيت دوريات الأمن والسترات الواقية" 
        description="جواكيت شتوية وعاكسة مصممة لدوريات الحراسة الخارجية." 
        locale="ar" 
        pageType="product" 
        mainEntity="جواكيت دوريات الأمن (Patrol Jackets)" 
        primaryImage="/images/security/patrol-jacket.jpg" 
        primaryImageAlt="جواكيت دوريات الأمن والسترات العاكسة" 
        faqs={faqs} 
        breadcrumbs={[
          { name: 'المتجر', url: '/ar/shop' }, 
          { name: 'الأزياء الأمنية', url: '/ar/shop/security-uniforms' }, 
          { name: 'جواكيت الدوريات', url: '/ar/shop/security-uniforms/security-patrol-jacket' }
        ]} 
        certifications={['Hi-Vis EN ISO 20471', 'Water Resistant', 'Windproof']} 
        clientCount={90} 
        yearsInBusiness={15} 
        industry="Private Security Patrols" 
      />
      <section className="bg-gradient-to-br from-neutral-900 via-gray-800 to-slate-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المتجر', href: '/ar/shop' }, 
            { label: 'الأزياء الأمنية', href: '/ar/shop/security-uniforms' }, 
            { label: 'جواكيت الدوريات', href: '/ar/shop/security-uniforms/security-patrol-jacket' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              جواكيت <span className="text-yellow-400">دوريات الأمن</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              حماية من الطقس القاسي ووضوح في الرؤية. جواكيت تكتيكية وعاكسة تضمن سلامة وأداء حراس الأمن في المهام الخارجية والميدانية.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="تصميمات للتدخل والعمليات" centered>تجهيزات الدوريات الميدانية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {products.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg hover:border-yellow-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                  <span className="text-yellow-800 font-bold bg-yellow-100 px-3 py-1 rounded-full">{p.price}</span>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mt-4">{p.desc}</p>
                <Link href="/ar/quote?product=security-patrol-jacket" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-medium hover:text-yellow-900 hover:underline">
                  طلب تسعيرة لتجهيز دوريات الأمن <span aria-hidden="true">←</span>
                </Link>
              </div>
            ))}
          </div>

          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="حماية الحارس أولاً" centered>أسئلة تجهيز أمن المواقع الخارجية</SectionHeading>
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
