import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const resources = [
  {
    path: 'src/app/ar/resources/cleanroom-best-practices/page.tsx',
    title: 'أفضل ممارسات الغرف النظيفة',
    desc: 'دليل خبير لملابس الغرف النظيفة في السعودية. معايير أيزو 14644، إجراءات الارتداء، ومكافحة التلوث للمنشآت الطبية والإلكترونية.',
    keywords: 'أفضل ممارسات الغرف النظيفة, ملابس أيزو 14644, مكافحة التلوث',
    slug: 'CleanroomBestPractices',
    image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
    icon: '🧪'
  },
  {
    path: 'src/app/ar/resources/electrical-safety-ppe-guide/page.tsx',
    title: 'دليل معدات السلامة الكهربائية',
    desc: 'دليل شامل لمعدات السلامة الكهربائية في السعودية. قفازات معزولة، دروع وجه، وملابس مقاومة للهب وفق معايير ساسو و NFPA 70E.',
    keywords: 'معدات سلامة كهربائية, قفازات معزولة, بدلة قوس كهربائي',
    slug: 'ElectricalSafetyPPEGuide',
    image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
    icon: '⚡'
  },
  {
    path: 'src/app/ar/resources/healthcare-uniform-standards/page.tsx',
    title: 'معايير أزياء الرعاية الصحية',
    desc: 'المعايير المعتمدة لأزياء الرعاية الصحية في مستشفيات وعيادات المملكة العربية السعودية، متضمنة معايير مكافحة العدوى وجودة الأقمشة.',
    keywords: 'معايير أزياء الرعاية الصحية, زي طبي معتمد, مكافحة العدوى',
    slug: 'HealthcareUniformStandards',
    image: '/images/healthcare/healthcare-hero.jpg',
    icon: '⚕️'
  },
  {
    path: 'src/app/ar/resources/lightweight-tactical-guide/page.tsx',
    title: 'دليل الأزياء التكتيكية الخفيفة',
    desc: 'دليل الملابس التكتيكية خفيفة الوزن المصممة لعمليات الحراسة السرية وحماية كبار الشخصيات في المناخ السعودي الحار.',
    keywords: 'دليل أزياء تكتيكية, ملابس حراسة شخصية, زي أمني سري',
    slug: 'LightweightTacticalGuide',
    image: '/images/industries/security/security_uniforms_background.jpg',
    icon: '🕶️'
  },
  {
    path: 'src/app/ar/resources/nfpa70e-guide/page.tsx',
    title: 'دليل معايير NFPA 70E',
    desc: 'دليل شامل لمعايير NFPA 70E للحماية من القوس الكهربائي وتحديد فئات الملابس المقاومة للهب في المنشآت الصناعية السعودية.',
    keywords: 'معايير NFPA 70E, حماية من القوس الكهربائي, ملابس مقاومة للهب',
    slug: 'NFPA70EGuide',
    image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
    icon: '🔥'
  },
  {
    path: 'src/app/ar/resources/nursing-uniform-guide/page.tsx',
    title: 'دليل أزياء التمريض',
    desc: 'دليل تفصيلي لاختيار أزياء التمريض المريحة والآمنة في السعودية، مع تفاصيل الأقمشة المضادة للبكتيريا وتصميمات السكراب.',
    keywords: 'دليل زي التمريض, اختيار سكراب التمريض, حجاب طبي',
    slug: 'NursingUniformGuide',
    image: '/images/healthcare/nursing-hero.jpg',
    icon: '👩‍⚕️'
  },
  {
    path: 'src/app/ar/resources/professional-security-standards/page.tsx',
    title: 'معايير الأمن الاحترافي',
    desc: 'المعايير الرسمية المعتمدة لأزياء فرق الحماية الشخصية (VIP) ومديري الأمن في الشركات والمنشآت الحساسة.',
    keywords: 'معايير أمن احترافي, زي حماية شخصيات, أزياء حراس أمن',
    slug: 'ProfessionalSecurityStandards',
    image: '/images/industries/security/security_uniforms_background.jpg',
    icon: '👔'
  },
  {
    path: 'src/app/ar/resources/safety-standards-guide/page.tsx',
    title: 'دليل معايير السلامة المهنية',
    desc: 'دليل متكامل لمعايير السلامة المهنية ومعدات الوقاية الشخصية في السعودية متوافق مع اشتراطات ساسو وأرامكو والأيزو.',
    keywords: 'معايير السلامة السعودية, لوائح ساسو, سلامة بيئة العمل',
    slug: 'SafetyStandardsGuide',
    image: '/images/industries/manufacturing/manufacturing_uniforms_background.jpg',
    icon: '🛡️'
  },
  {
    path: 'src/app/ar/resources/security-equipment-standards/page.tsx',
    title: 'معايير التجهيزات الأمنية',
    desc: 'مواصفات ومعايير المعدات الأمنية والدروع الواقية والسترات التكتيكية المستخدمة في القطاع الأمني في المملكة.',
    keywords: 'تجهيزات أمنية, معايير دروع تكتيكية, أحزمة أمنية',
    slug: 'SecurityEquipmentStandards',
    image: '/images/industries/security/security_uniforms_background.jpg',
    icon: '🔒'
  },
  {
    path: 'src/app/ar/resources/sustainability-guide/page.tsx',
    title: 'دليل استدامة الأزياء الموحدة',
    desc: 'الدليل الشامل لشراء أزياء موحدة مستدامة في السعودية، بما يتوافق مع أهداف المشتريات الخضراء ورؤية المملكة 2030.',
    keywords: 'دليل استدامة الأزياء, المشتريات الخضراء, أقمشة معاد تدويرها',
    slug: 'SustainabilityGuide',
    image: '/images/services/sustainable-uniforms.jpg',
    icon: '🌱'
  },
  {
    path: 'src/app/ar/resources/tactical-equipment-standards/page.tsx',
    title: 'معايير المعدات التكتيكية',
    desc: 'الدليل القياسي لمواصفات وتصنيفات المعدات التكتيكية والخوذ ومعدات الاقتحام وفق أحدث المعايير الدولية المعمول بها في المملكة.',
    keywords: 'معايير معدات تكتيكية, تصنيفات دروع واقية, خوذ تكتيكية',
    slug: 'TacticalEquipmentStandards',
    image: '/images/industries/security/security_uniforms_background.jpg',
    icon: '⚔️'
  },
  {
    path: 'src/app/ar/resources/tactical-outerwear-standards/page.tsx',
    title: 'معايير الملابس التكتيكية الخارجية',
    desc: 'أدلة الجودة والمواصفات للسترات والملابس التكتيكية الخارجية للقطاعات الأمنية والعسكرية لتحمل الظروف الجوية القاسية.',
    keywords: 'ملابس تكتيكية خارجية, سترات مقاومة للماء, معايير ملابس أمنية',
    slug: 'TacticalOuterwearStandards',
    image: '/images/industries/security/security_uniforms_background.jpg',
    icon: '🧥'
  },
  {
    path: 'src/app/ar/resources/weather-protection-guide/page.tsx',
    title: 'دليل الحماية من عوامل الطقس',
    desc: 'أفضل الممارسات لاختيار أزياء ومعدات الحماية من أشعة الشمس، الغبار، ودرجات الحرارة القصوى للعمال في السعودية.',
    keywords: 'دليل حماية الطقس, ملابس صيفية للعمال, حماية من الأشعة فوق البنفسجية',
    slug: 'WeatherProtectionGuide',
    image: '/images/services/weather-protection.jpg',
    icon: '🌡️'
  }
];

resources.forEach(resource => {
  const fileContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: '${resource.title} في السعودية | يونيوم',
  titleAr: '${resource.title} | دليل خبير - يونيوم',
  description: '${resource.desc}',
  descriptionAr: '${resource.desc}',
  keywords: ['${resource.keywords.split(', ').join("', '")}'],
  keywordsAr: ['${resource.keywords.split(', ').join("', '")}'],
  locale: 'ar',
  pageType: 'article',
  path: '/ar/${resource.path.replace('src/app/ar/', '').replace('/page.tsx', '')}',
  image: '${resource.image}',
  imageAlt: '${resource.title}',
  aiSummary: '${resource.desc}',
});

export const dynamic = 'force-static';

const sections = [
  { title: 'نظرة عامة', content: '${resource.desc} هذا الدليل الشامل يغطي المعايير الدولية والمتطلبات الخاصة بالسوق السعودي وأفضل الممارسات لمديري المشتريات ومسؤولي السلامة.' },
  { title: 'المعايير والشهادات الرئيسية', content: 'يغطي هذا القسم المعايير الدولية والسعودية الأساسية المطبقة على ${resource.title}. ويشمل ذلك متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)، وشهادات الأيزو، وأطر الامتثال الخاصة بالصناعة ذات الصلة بالمؤسسات العاملة في جميع أنحاء المملكة.' },
  { title: 'معايير الاختيار', content: 'عند اختيار المنتجات ذات الصلة بـ ${resource.title}، ضع في اعتبارك: صلاحية الشهادة، تقييمات الأداء، الملاءمة للمناخ السعودي، موثوقية المورد، والتكلفة الإجمالية للملكية. تقدم يونيوم إرشادات خبراء حول جميع معايير الاختيار.' },
  { title: 'الاعتبارات الخاصة بالسوق السعودي', content: 'لدى المملكة العربية السعودية متطلبات فريدة بسبب الظروف المناخية القاسية، والامتثال لرؤية 2030، والشهادات الإلزامية من الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)، ولوائح الصناعة المحددة (مثل أرامكو، والشركة السعودية للكهرباء). يتناول هذا الدليل كل هذه العوامل.' },
  { title: 'أفضل ممارسات الشراء', content: 'أفضل الممارسات لـ ${resource.title}: تحقق من جميع شهادات SASO، واطلب تقارير اختبار من مختبرات معتمدة، وقم بتقييم التكلفة الإجمالية لدورة الحياة، وقم بتضمين شروط الصيانة والاستبدال في العقود.' },
];

const faqs = [
  { question: 'ما هي المعايير المطبقة في المملكة العربية السعودية؟', answer: 'تشمل المعايير الرئيسية شهادات SASO الإلزامية، ومعايير ISO ذات الصلة، والمتطلبات الخاصة بالصناعة من الجهات الكبرى. تلبي منتجات يونيوم جميع المعايير السعودية والدولية المعمول بها.' },
  { question: 'كيف يمكن لـ يونيوم المساعدة في تحقيق الامتثال؟', answer: 'توفر يونيوم: منتجات معتمدة تلبي جميع المعايير ذات الصلة، ووثائق الامتثال للتدقيق، واستشارات الخبراء بشأن الاختيار، والتدريب على الاستخدام السليم والصيانة.' },
  { question: 'ما هي الوثائق المطلوبة للشراء؟', answer: 'الوثائق المطلوبة: شهادات مطابقة SASO، وتقارير اختبار من مختبرات معتمدة، وشهادات ISO للمورد، وأوراق مواصفات المنتج. توفر يونيوم حزم وثائق كاملة مع كل طلب.' },
];

export default function ${resource.slug}PageAR() {
  return (
    <>
      <SEO2026 title="${resource.title}" titleAr="${resource.title}" description="${resource.desc}" locale="ar" pageType="article" mainEntity="${resource.title}" primaryImage="${resource.image}" primaryImageAlt="${resource.title}" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'الموارد الأدلة', url: '/ar/resources' }, { name: '${resource.title}', url: '/ar/${resource.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} certifications={['SASO', 'ISO 9001']} clientCount={150} yearsInBusiness={20} industry="الخدمات المؤسسية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-zinc-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الموارد الأدلة', href: '/ar/resources' }, { label: '${resource.title}', href: '/ar/${resource.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span>${resource.icon}</span><span className="text-sm font-medium">دليل الخبراء</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">${resource.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">${resource.desc}</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-4xl mx-auto">
            {sections.map((s, i) => (<article key={i} className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-8"><h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"><span className="bg-slate-100 text-slate-700 text-sm font-mono px-3 py-1 rounded-full">{String(i+1).padStart(2,'0')}</span>{s.title}</h2><p className="text-gray-700 leading-relaxed text-lg">{s.content}</p></article>))}
          </div>
          <section className="max-w-4xl mx-auto mt-16 mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>أسئلة متكررة حول ${resource.title}</SectionHeading>
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
`;
  const targetPath = path.join(rootDir, resource.path);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, fileContent);
  console.log('Created:', resource.path);
});
