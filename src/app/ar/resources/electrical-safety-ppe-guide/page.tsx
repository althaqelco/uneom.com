import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دليل معدات السلامة الكهربائية في السعودية | يونيوم',
  titleAr: 'دليل معدات السلامة الكهربائية | دليل خبير - يونيوم',
  description: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E.',
  descriptionAr: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E.',
  keywords: ['معدات سلامة كهربائية', 'قفازات معزولة', 'بدلة قوس كهربائي'],
  keywordsAr: ['معدات سلامة كهربائية', 'قفازات معزولة', 'بدلة قوس كهربائي'],
  locale: 'ar',
  pageType: 'article',
  path: '/ar/resources/electrical-safety-ppe-guide',
  image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
  imageAlt: 'دليل معدات السلامة الكهربائية',
  aiSummary: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E.',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'نظرة عامة', content: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E. هذا الدليل الشامل يغطي المعايير الدولية والمتطلبات الخاصة بالسوق السعودي وأفضل الممارسات لمديري المشتريات ومسؤولي السلامة.' },
  { title: 'المعايير والشهادات الرئيسية', content: 'يغطي هذا القسم المعايير الدولية والسعودية الأساسية المطبقة على دليل معدات السلامة الكهربائية. ويشمل ذلك متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)، وشهادات الأيزو، وأطر الامتثال الخاصة بالصناعة ذات الصلة بالمؤسسات العاملة في جميع أنحاء المملكة.' },
  { title: 'معايير الاختيار', content: 'عند اختيار المنتجات ذات الصلة بـ دليل معدات السلامة الكهربائية، ضع في اعتبارك: صلاحية الشهادة، تقييمات الأداء، الملاءمة للمناخ السعودي، موثوقية المورد، والتكلفة الإجمالية للملكية. تقدم يونيوم إرشادات خبراء حول جميع معايير الاختيار.' },
  { title: 'الاعتبارات الخاصة بالسوق السعودي', content: 'لدى المملكة العربية السعودية متطلبات فريدة بسبب الظروف المناخية القاسية، والامتثال لرؤية 2030، والشهادات الإلزامية من الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)، ولوائح الصناعة المحددة (مثل أرامكو، والشركة السعودية للكهرباء). يتناول هذا الدليل كل هذه العوامل.' },
  { title: 'أفضل ممارسات الشراء', content: 'أفضل الممارسات لـ دليل معدات السلامة الكهربائية: تحقق من جميع شهادات SASO، واطلب تقارير اختبار من مختبرات معتمدة، وقم بتقييم التكلفة الإجمالية لدورة الحياة، وقم بتضمين شروط الصيانة والاستبدال في العقود.' },
];

const faqs = [
  { question: 'ما هي المعايير المطبقة في المملكة العربية السعودية؟', answer: 'تشمل المعايير الرئيسية شهادات SASO الإلزامية، ومعايير ISO ذات الصلة، والمتطلبات الخاصة بالصناعة من الجهات الكبرى. تلبي منتجات يونيوم جميع المعايير السعودية والدولية المعمول بها.' },
  { question: 'كيف يمكن لـ يونيوم المساعدة في تحقيق الامتثال؟', answer: 'توفر يونيوم: منتجات معتمدة تلبي جميع المعايير ذات الصلة، ووثائق الامتثال للتدقيق، واستشارات الخبراء بشأن الاختيار، والتدريب على الاستخدام السليم والصيانة.' },
  { question: 'ما هي الوثائق المطلوبة للشراء؟', answer: 'الوثائق المطلوبة: شهادات مطابقة SASO، وتقارير اختبار من مختبرات معتمدة، وشهادات ISO للمورد، وأوراق مواصفات المنتج. توفر يونيوم حزم وثائق كاملة مع كل طلب.' },
];

export default function ElectricalSafetyPPEGuidePageAR() {
  return (
    <>
      <SEO2026 title="دليل معدات السلامة الكهربائية" titleAr="دليل معدات السلامة الكهربائية" description="دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E." locale="ar" pageType="article" mainEntity="دليل معدات السلامة الكهربائية" primaryImage="/images/industries/manufacturing/manufacturing_uniforms_background.jpg" primaryImageAlt="دليل معدات السلامة الكهربائية" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'الموارد الأدلة', url: '/ar/resources' }, { name: 'دليل معدات السلامة الكهربائية', url: '/ar/resources/electrical-safety-ppe-guide' }]} certifications={['SASO', 'ISO 9001']} clientCount={150} yearsInBusiness={20} industry="الخدمات المؤسسية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-zinc-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الموارد الأدلة', href: '/ar/resources' }, { label: 'دليل معدات السلامة الكهربائية', href: '/ar/resources/electrical-safety-ppe-guide' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span>⚡</span><span className="text-sm font-medium">دليل الخبراء</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">دليل معدات السلامة الكهربائية</h1>
            <p className="text-xl text-gray-300 leading-relaxed">دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E.</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-slate-100 text-slate-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>أسئلة متكررة حول دليل معدات السلامة الكهربائية</SectionHeading>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى استشارة الخبراء؟</h2>
            <p className="text-xl mb-8 text-gray-300">خبراء يونيوم جاهزون لمساعدتك في تلبية جميع المعايير والمتطلبات بفعالية.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-white text-slate-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">تواصل مع خبرائنا →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
