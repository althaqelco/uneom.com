import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const pages = [
  {
    path: 'src/app/ar/case-studies/beauty-chain-standardization/page.tsx',
    title: 'دراسة حالة: توحيد هوية صالونات التجميل',
    desc: 'كيف ساعدت يونيوم سلسلة صالونات تجميل كبرى في السعودية على توحيد هويتها البصرية وتقليل تكاليف الأزياء بنسبة 30٪.',
    keywords: 'أزياء صالونات التجميل, توحيد الهوية البصرية, ملابس سبا',
    slug: 'BeautyChainCaseStudy',
    type: 'article'
  },
  {
    path: 'src/app/ar/industries/retail/page.tsx',
    title: 'أزياء قطاع التجزئة',
    desc: 'أزياء موحدة متينة وأنيقة لقطاع التجزئة والمتاجر في السعودية. تعزيز هوية العلامة التجارية وراحة الموظفين.',
    keywords: 'أزياء التجزئة, ملابس موظفي مبيعات, زي موحد للمتاجر',
    slug: 'RetailIndustry',
    type: 'service'
  },
  {
    path: 'src/app/ar/shop/corporate-uniforms/page.tsx',
    title: 'الأزياء المؤسسية',
    desc: 'تسوق أفضل الأزياء المؤسسية الفاخرة للشركات في السعودية. قمصان رسمية، بليزرات، وملابس إدارة بأسعار جملة تنافسية.',
    keywords: 'أزياء مؤسسية, ملابس شركات, زي إداري',
    slug: 'CorporateUniformsShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/corporate/accessories/classic-ties/page.tsx',
    title: 'ربطات العنق الكلاسيكية',
    desc: 'مجموعة فاخرة من ربطات العنق الكلاسيكية المصنوعة من الحرير والميكروفايبر. يمكن تخصيصها بشعار الشركة.',
    keywords: 'ربطات عنق كلاسيكية, ربطة عنق بشعار, كرافتات شركات',
    slug: 'ClassicTiesShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/corporate/corporate-shirts/classic/page.tsx',
    title: 'القمصان المؤسسية الكلاسيكية',
    desc: 'قمصان كلاسيكية رسمية لموظفي الشركات. قطن أكسفورد مقاوم للتجعد بألوان متنوعة.',
    keywords: 'قمصان شركات, قمصان رسمية موحدة, قمصان موظفين',
    slug: 'ClassicCorporateShirtsShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/corporate/executive-shirts/premium/page.tsx',
    title: 'قمصان الإدارة العليا الفاخرة',
    desc: 'قمصان فاخرة مخصصة للإدارة العليا والتنفيذيين. أقمشة إيطالية فائقة الجودة وتفصيل حسب الطلب.',
    keywords: 'قمصان فاخرة, قمصان إدارة عليا, تفصيل قمصان رسمية',
    slug: 'PremiumExecutiveShirtsShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/education/page.tsx',
    title: 'أزياء قطاع التعليم',
    desc: 'متجر أزياء قطاع التعليم في السعودية. زي مدرسي، أزياء جامعية، وملابس رياضية متوافقة مع معايير الجودة.',
    keywords: 'زي مدرسي, أزياء جامعية, ملابس تعليم',
    slug: 'EducationShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/education/sports-equipment/training-gear/page.tsx',
    title: 'معدات التدريب والزي الرياضي',
    desc: 'معدات تدريب وملابس رياضية للمدارس والجامعات. أقمشة تمتص العرق وأطقم كاملة يمكن تخصيصها.',
    keywords: 'زي رياضي مدرسي, ملابس رياضة جامعية, معدات تدريب',
    slug: 'TrainingGearShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/education/university-attire/dress-shirt/page.tsx',
    title: 'قمصان جامعية',
    desc: 'قمصان رسمية وعملية لطلاب وموظفي الجامعات السعودية. متانة عالية وتحمل للغسيل المتكرر.',
    keywords: 'قمصان جامعية, زي جامعة, قمصان طلاب',
    slug: 'UniversityDressShirtsShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/education/university-attire/tie-collection/page.tsx',
    title: 'ربطات العنق الجامعية',
    desc: 'تشكيلة ربطات العنق الجامعية المخصصة. خيارات مطرزة أو مطبوعة بشعار الجامعة للكليات وجمعيات الخريجين.',
    keywords: 'ربطات عنق جامعية, ربطات تخرج, شعار كلية',
    slug: 'UniversityTiesShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/education/university-attire/trousers/page.tsx',
    title: 'بناطيل جامعية',
    desc: 'بناطيل عملية ومريحة لبيئة الجامعة. مزيج الصوف والبوليستر لمظهر أنيق ومقاومة للتجعد.',
    keywords: 'بناطيل جامعية, سروال طلاب, بنطال أكاديمي',
    slug: 'UniversityTrousersShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/healthcare-uniforms/page.tsx',
    title: 'أزياء الرعاية الصحية',
    desc: 'تسوق أزياء طبية عالية الجودة في السعودية. سكراب طبي، معاطف مختبر، وملابس تمريض بمضادات للبكتيريا.',
    keywords: 'أزياء طبية, سكراب طبي السعودية, لاب كوت',
    slug: 'HealthcareShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/medical-accessories/page.tsx',
    title: 'إكسسوارات طبية',
    desc: 'إكسسوارات طبية متخصصة تشمل غطاء الرأس الطبي، جوارب ضاغطة، وأحذية طبية مريحة لعمل المناوبات.',
    keywords: 'إكسسوارات طبية, غطاء رأس جراحي, حذاء طبي',
    slug: 'MedicalAccessoriesShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/ppe/page.tsx',
    title: 'معدات الوقاية الشخصية (PPE)',
    desc: 'متجر معدات الوقاية الشخصية المعتمدة في السعودية. سترات حماية، أحذية سلامة، وخوذ متوافقة مع معايير ساسو.',
    keywords: 'معدات وقاية شخصية, PPE السعودية, أحذية سيفتي',
    slug: 'PPEShop',
    type: 'product'
  },
  {
    path: 'src/app/ar/shop/security-accessories/page.tsx',
    title: 'إكسسوارات الأمن',
    desc: 'إكسسوارات أمنية وتكتيكية تشمل أحزمة عسكرية، أشرطة عاكسة، وشارات أمنية مطرزة عالية المتانة.',
    keywords: 'إكسسوارات أمن, أحزمة تكتيكية, تجهيزات حارس أمن',
    slug: 'SecurityAccessoriesShop',
    type: 'product'
  }
];

pages.forEach(page => {
  const fileContent = `import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: '${page.title} في السعودية | يونيوم',
  titleAr: '${page.title} | متجر يونيوم',
  description: '${page.desc}',
  descriptionAr: '${page.desc}',
  keywords: ['${page.keywords.split(', ').join("', '")}'],
  keywordsAr: ['${page.keywords.split(', ').join("', '")}'],
  locale: 'ar',
  pageType: '${page.type}',
  path: '/ar/${page.path.replace('src/app/ar/', '').replace('/page.tsx', '')}',
  image: '/images/hero/hero-1.jpg',
  imageAlt: '${page.title}',
  aiSummary: '${page.desc}',
});

export const dynamic = 'force-static';

const features = [
  { title: 'جودة استثنائية', desc: 'منتجات مصنعة من أفضل الخامات لضمان المتانة وتحمل ظروف العمل.' },
  { title: 'خيارات التخصيص', desc: 'إمكانية إضافة التطريز والشعارات المخصصة لتتناسب مع هوية علامتك التجارية.' },
  { title: 'أسعار الجملة', desc: 'خصومات خاصة وتنافسية لطلبات الكميات الكبيرة وعقود التوريد المستمرة.' },
  { title: 'مطابقة المعايير', desc: 'توافق كامل مع المعايير والمواصفات السعودية (SASO) ومتطلبات السلامة.' }
];

const faqs = [
  { question: 'هل يمكن توفير منتجات بتصاميم خاصة ومقاسات محددة؟', answer: 'نعم، نحن نقدم خدمة التفصيل حسب الطلب لضمان ملاءمة المنتجات تماماً لاحتياجات ومقاسات الموظفين الخاصة.' },
  { question: 'ما هو الوقت المتوقع للتسليم للطلبات الكبيرة؟', answer: 'يختلف وقت التسليم حسب حجم الطلب ومستوى التخصيص، وعادة ما يتراوح بين 2 إلى 4 أسابيع للكميات التجارية.' },
  { question: 'هل تقدمون ضماناً على المنتجات؟', answer: 'جميع منتجاتنا تخضع لرقابة صارمة على الجودة، ونضمن استبدال أي قطع بها عيوب تصنيعية.' }
];

export default function ${page.slug}PageAR() {
  return (
    <>
      <SEO2026 title="${page.title}" titleAr="${page.title}" description="${page.desc}" locale="ar" pageType="${page.type}" mainEntity="${page.title}" primaryImage="/images/hero/hero-1.jpg" primaryImageAlt="${page.title}" faqs={faqs} breadcrumbs={[{ name: 'الرئيسية', url: '/ar' }, { name: '${page.title}', url: '/ar/${page.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} certifications={['SASO']} clientCount={200} yearsInBusiness={20} industry="تجهيزات مهنية" />
      <section className="bg-gradient-to-bl from-slate-900 via-gray-800 to-indigo-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: '${page.title}', href: '/ar/${page.path.replace('src/app/ar/', '').replace('/page.tsx', '')}' }]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">${page.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">${page.desc}</p>
          </div>
        </Container>
      </section>
      <main className="py-16" dir="rtl">
        <Container>
          <SectionHeading subtitle="التفاصيل" centered>معلومات المنتجات</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6 mt-12 mb-20">
            {features.map((f, i) => (<div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"><h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3><p className="text-gray-600 leading-relaxed">{f.desc}</p></div>))}
          </div>
          <section className="mt-20 mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="الأسئلة الشائعة" centered>استفسارات متكررة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {faqs.map((faq, i) => (<div key={i} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div></div>))}
            </div>
          </section>
          <section className="text-center bg-gray-50 rounded-2xl p-12 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">جاهز للطلب أو بحاجة لتفاصيل أكثر؟</h2>
            <p className="text-xl mb-8 text-gray-600">فريق مبيعات يونيوم جاهز لخدمتك وتلبية احتياجاتك بأفضل الأسعار.</p>
            <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl transition-all shadow-lg">طلب عرض سعر →</Link>
          </section>
        </Container>
      </main>
    </>
  );
}
`;
  const targetPath = path.join(rootDir, page.path);
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, fileContent);
  console.log('Created:', page.path);
});
