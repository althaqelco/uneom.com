import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const services = [
  {
    path: 'src/app/ar/services/healthcare-uniform-program/page.tsx',
    title: 'برنامج أزياء الرعاية الصحية',
    desc: 'إدارة متكاملة لأزياء الرعاية الصحية في السعودية. تتبع دورة حياة الملابس الطبية، وتوافق مع معايير ساسو ووزارة الصحة.',
    keywords: 'أزياء الرعاية الصحية, ملابس طبية السعودية, برنامج زي طبي',
    slug: 'HealthcareUniformProgram',
    image: '/images/services/healthcare-program.jpg'
  },
  {
    path: 'src/app/ar/services/lightweight-tactical-program/page.tsx',
    title: 'برنامج الأزياء التكتيكية الخفيفة',
    desc: 'أزياء تكتيكية خفيفة الوزن مصممة خصيصاً للمناخ السعودي القاسي. مثالية لعمليات الحراسة وحماية الشخصيات.',
    keywords: 'أزياء تكتيكية خفيفة, ملابس أمنية سعودية, حماية شخصيات',
    slug: 'LightweightTacticalProgram',
    image: '/images/services/lightweight-tactical.jpg'
  },
  {
    path: 'src/app/ar/services/ppe-program-management/page.tsx',
    title: 'إدارة برنامج معدات الوقاية الشخصية',
    desc: 'إدارة شاملة لمعدات الوقاية الشخصية (PPE) للشركات السعودية. امتثال كامل لمعايير أرامكو وساسو والأيزو.',
    keywords: 'إدارة معدات الوقاية, معدات سلامة السعودية, PPE أرامكو',
    slug: 'PPEProgramManagement',
    image: '/images/services/ppe-program.jpg'
  },
  {
    path: 'src/app/ar/services/professional-security-program/page.tsx',
    title: 'برنامج الأمن الاحترافي',
    desc: 'أزياء وحلول أمنية احترافية لشركات الحراسات في السعودية. تصاميم تعكس القوة والموثوقية.',
    keywords: 'أزياء أمن احترافي, شركات حراسة سعودية, زي حراس أمن',
    slug: 'ProfessionalSecurityProgram',
    image: '/images/services/professional-security.jpg'
  },
  {
    path: 'src/app/ar/services/security-uniform-program/page.tsx',
    title: 'برنامج أزياء الأمن',
    desc: 'حلول متكاملة لأزياء الأمن والحراسات. أقمشة متينة، ومعدات متطورة لتلبية متطلبات القطاع الأمني في المملكة.',
    keywords: 'أزياء الأمن, ملابس حراس أمن, تجهيزات أمنية سعودية',
    slug: 'SecurityUniformProgram',
    image: '/images/services/security-uniforms.jpg'
  },
  {
    path: 'src/app/ar/services/sustainable-uniforms/page.tsx',
    title: 'الأزياء الموحدة المستدامة',
    desc: 'أزياء مستدامة للشركات متوافقة مع رؤية السعودية 2030. أقمشة معاد تدويرها وصديقة للبيئة.',
    keywords: 'أزياء مستدامة, ملابس معاد تدويرها, رؤية 2030',
    slug: 'SustainableUniforms',
    image: '/images/services/sustainable-uniforms.jpg'
  },
  {
    path: 'src/app/ar/services/tactical-equipment-program/page.tsx',
    title: 'برنامج المعدات التكتيكية',
    desc: 'تجهيزات ومعدات تكتيكية متطورة للقطاعات العسكرية والأمنية في السعودية. متوافقة مع أحدث المعايير العالمية.',
    keywords: 'معدات تكتيكية, تجهيزات أمنية, دروع تكتيكية سعودية',
    slug: 'TacticalEquipmentProgram',
    image: '/images/services/tactical-equipment.jpg'
  },
  {
    path: 'src/app/ar/services/tactical-patrol-program/page.tsx',
    title: 'برنامج الدوريات التكتيكية',
    desc: 'أزياء دوريات أمنية مصممة للحركة والمرونة العالية في المناخ السعودي. تحمل أقصى ظروف العمل.',
    keywords: 'أزياء دوريات, ملابس دوريات تكتيكية, أمن سعودي',
    slug: 'TacticalPatrolProgram',
    image: '/images/services/tactical-patrol.jpg'
  },
  {
    path: 'src/app/ar/services/uniform-program-management/page.tsx',
    title: 'إدارة برامج الزي الموحد',
    desc: 'خدمة إدارة متكاملة لبرامج الزي الموحد للشركات. من التصميم إلى التوزيع وإدارة المخزون في جميع أنحاء المملكة.',
    keywords: 'إدارة الزي الموحد, حلول ملابس الشركات, لوجستيات الأزياء',
    slug: 'UniformProgramManagement',
    image: '/images/services/program-management.jpg'
  },
  {
    path: 'src/app/ar/services/weather-protection-program/page.tsx',
    title: 'برنامج الحماية من عوامل الطقس',
    desc: 'أزياء واقية مصممة للتعامل مع درجات الحرارة العالية، الغبار، والأجواء القاسية في السعودية.',
    keywords: 'ملابس واقية من الحرارة, أزياء حماية الطقس, ملابس عمل سعودية',
    slug: 'WeatherProtectionProgram',
    image: '/images/services/weather-protection.jpg'
  }
];

services.forEach(service => {
  const fileContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: '${service.title} السعودية | يونيوم',
  titleAr: '${service.title} | حلول متكاملة - يونيوم',
  description: '${service.desc}',
  descriptionAr: '${service.desc}',
  keywords: ['${service.keywords.split(', ').join("', '")}'],
  keywordsAr: ['${service.keywords.split(', ').join("', '")}'],
  locale: 'ar',
  pageType: 'service',
  path: '/ar/${service.path.replace('src/app/ar/', '').replace('/page.tsx', '')}',
  image: '${service.image}',
  imageAlt: '${service.title}',
  aiSummary: '${service.desc}',
});

export const dynamic = 'force-static';

const features = [
  { title: 'تحليل المتطلبات', desc: 'دراسة شاملة لاحتياجات فريق العمل والبيئة التشغيلية في السعودية.' },
  { title: 'تصميم مخصص', desc: 'تطوير تصاميم تعكس هوية علامتك التجارية مع الحفاظ على معايير السلامة.' },
  { title: 'مواد عالية الجودة', desc: 'استخدام أقمشة متطورة تتناسب مع المناخ السعودي القاسي وتوفر أقصى درجات الراحة.' },
  { title: 'إدارة المخزون', desc: 'نظام آلي لتتبع الاستهلاك وإعادة الطلب لضمان توفر الأزياء بشكل دائم.' },
  { title: 'الامتثال للمعايير', desc: 'ضمان توافق جميع الأزياء مع معايير الجودة والسلامة المحلية والدولية (SASO).' },
  { title: 'الدعم المستمر', desc: 'فريق دعم محلي مخصص للاستجابة السريعة لأي طلبات إضافية أو تعديلات.' }
];

const faqs = [
  { question: 'كيف نبدأ العمل معكم؟', answer: 'تبدأ العملية بجلسة استشارية مجانية لتقييم احتياجاتكم الحالية والمستقبلية، تليها خطة مقترحة مخصصة تلبي أهدافكم.' },
  { question: 'هل توفرون عينات قبل الإنتاج؟', answer: 'نعم، نحن نوفر عينات مادية من التصاميم المعتمدة ليتم اختبارها من قبل فريقكم قبل البدء في الإنتاج الضخم.' },
  { question: 'ما هو الحد الأدنى للطلب؟', answer: 'يعتمد الحد الأدنى للطلب على نوع الأزياء والتعقيد في التصميم، ولكن بشكل عام نحن نخدم الشركات التي تحتاج إلى 50 قطعة فأكثر.' }
];

export default function ${service.slug}PageAR() {
  return (
    <>
      <SEO2026 title="${service.title}" titleAr="${service.title}" description="${service.desc}" locale="ar" pageType="service" mainEntity="${service.title}" primaryImage="${service.image}" primaryImageAlt="${service.title}" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: 'الخدمات', url: '/ar/services' }, { name: '${service.title}', url: '/ar/${service.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} certifications={['SASO', 'ISO 9001']} clientCount={300} yearsInBusiness={20} industry="الخدمات المؤسسية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-slate-800 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'الخدمات', href: '/ar/services' }, { label: '${service.title}', href: '/ar/${service.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">${service.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">${service.desc}</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="مميزات البرنامج" centered>الميزات الرئيسية</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-20">
            {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.desc}</p></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>أسئلة متكررة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gradient-to-r from-slate-800 to-gray-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">هل أنت مستعد لتطوير أزياء فريقك؟</h2>
            <p className="text-xl mb-8 text-gray-300">خبراؤنا مستعدون لمساعدتك في كل خطوة.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-white text-slate-800 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">تواصل معنا الآن →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
`;
  const targetPath = path.join(rootDir, service.path);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, fileContent);
  console.log('Created:', service.path);
});
