import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';
import { CtaBlock } from '@/components/ui/CtaBlock';

export const metadata: Metadata = {
  title: 'الأسئلة الشائعة — برامج الزي الموحّد UNEOM السعودية',
  description: 'أسئلة شائعة حول برامج الزي الموحّد من UNEOM: أوقات التسليم، التخصيص، مواصفات الأقمشة، الامتثال، العمليات متعددة المدن، ودورات الاستبدال.',
  alternates: {
    canonical: 'https://uneom.com/ar/faq/',
    languages: {
      en: 'https://uneom.com/faq/',
      'ar-SA': 'https://uneom.com/ar/faq/',
      'x-default': 'https://uneom.com/faq/'
    }
  }
};

const FAQS = [
  { q: 'ما هو الوقت المعتاد لتسليم برنامج الزي الموحّد من UNEOM؟', a: 'البرامج المتكرّرة تُشحَن في 14–21 يوماً. التصاميم الجديدة تُشحَن في 21–35 يوماً، تشمل القياسات الميدانية.' },
  { q: 'هل يخدم UNEOM جميع المدن السعودية؟', a: 'نعم. UNEOM يعمل من الرياض مع مراكز عمليات في جدة والدمام، ويشحن إلى جميع الـ 24 مدينة سعودية. الزيارات الميدانية للقياسات تصل إلى أي منطقة للتجمعات التي تتجاوز 50 موظفاً.' },
  { q: 'ما هو الحدّ الأدنى لكميّة الطلب؟', a: 'عقود البرامج تبدأ من 50 وحدة. يمكننا تنفيذ عيّنات أولية أصغر لكن نموذجنا مبني للبرامج المستمرة وليس للمشتريات الفردية.' },
  { q: 'هل يمكن لـ UNEOM تخصيص التصاميم وفق هويّتنا البصرية؟', a: 'التصميم المخصّص خدمة أساسية. سير عمل من ست خطوات من مراجعة الهوية البصرية إلى الحزمة التقنية للإنتاج. متوسط وقت المفهوم إلى العيّنة 14 يوماً.' },
  { q: 'ما هي الأطر التنظيمية السعودية التي يغطّيها UNEOM؟', a: 'الفواتير الإلكترونية ZATCA، معايير المنسوجات لوزارة الصحة (الرعاية الصحية)، متطلبات صلاحية الطيران GACA (الطيران)، أنظمة PPE لـ HCIS (الصناعي/الأمني)، وعلامة جودة SASO عبر جميع الفئات.' },
  { q: 'ما هي الشهادات الدولية التي يحملها UNEOM؟', a: 'ISO 9001:2015 (إدارة الجودة) وOEKO-TEX Standard 100 (شهادة المواد الضارة في المنسوجات) لكامل خط الرعاية الصحية.' },
  { q: 'هل يُقدّم UNEOM ضمانات؟', a: 'ضمان قياسي 12 شهراً على جميع البرامج. خط الرعاية الصحية يحمل ضمان 18 شهراً. ملابس التغطية المقاومة للحريق في التصنيع تحمل ضماناً هيكلياً لمدة 18 شهراً.' },
  { q: 'ما هي طرق الدفع التي يقبلها UNEOM؟', a: 'مدى، STC Pay، Apple Pay، SADAD، والتحويل البنكي. فواتير إلكترونية متوافقة مع ZATCA على كل معاملة.' },
  { q: 'هل يمكن لـ UNEOM إدارة مجموعات الموظفين الجدد والاستبدالات؟', a: 'نعم — إدارة البرامج خدمة مخصّصة. مجموعات الموظفين الجدد تُشحَن خلال 48 ساعة على مستوى الوطن، وتنسيق استلام المرتجعات، ودورات مجدولة بموجب العقد.' },
  { q: 'كيف تتعاملون مع العمليات متعددة المدن؟', a: 'عقد واحد، مدير عمليات واحد، توزيع للتسليم. ننسّق الزيارات الميدانية عبر المدن ونوحّد دورات الاستبدال في إيقاع موحّد.' }
];

export default function ArFaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <Breadcrumbs items={[{ name: 'الأسئلة الشائعة', path: '/ar/faq/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow="الأسئلة الشائعة"
          title="أسئلة البرنامج، مُجابة."
          lead="الأسئلة التي نسمعها أكثر من المؤسسات السعودية التي تُقيّم شركاء برامج الزي الموحّد."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="mx-auto max-w-3xl">
          <dl className="divide-y divide-ink-100 border-t border-ink-100">
            {FAQS.map(f => (
              <div key={f.q} className="py-8">
                <dt className="text-lg font-bold text-navy-900 balance">{f.q}</dt>
                <dd className="mt-3 text-base leading-relaxed text-ink-500 pretty">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock
          dark
          heading="سؤالك غير مُجاب هنا؟"
          body="تحدّث مع العمليات مباشرة. info@uneom.com أو +966 56 461 2017."
          primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }}
          secondary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
        />
      </section>
    </>
  );
}
