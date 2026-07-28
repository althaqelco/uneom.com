import type { Metadata } from 'next';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatBlock } from '@/components/ui/StatBlock';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { JsonLd } from '@/lib/seo/JsonLd';
import { aboutPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'عن UNEOM — مصنّع الزي الموحّد السعودي B2B منذ 2013',
  description: 'UNEOM شركة سعودية لتصنيع الزي الموحّد بخبرة 12 عاماً في خدمة عملاء الرعاية الصحية والضيافة والطيران والتصنيع والشركات في جميع الـ 24 مدينة.',
  alternates: {
    canonical: 'https://uneom.com/ar/about/',
    languages: {
      en: 'https://uneom.com/about/',
      'ar-SA': 'https://uneom.com/ar/about/',
      'x-default': 'https://uneom.com/about/'
    }
  }
};

export default function ArAboutPage() {
  return (
    <>
      <JsonLd data={aboutPageSchema('ar')} />
      <Breadcrumbs items={[{ name: 'عن UNEOM', path: '/ar/about/' }]} />

      {/* Hero with background image */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" srcSet="/images/process/custom-design-workflow.avif" />
            <source type="image/webp" srcSet="/images/process/custom-design-workflow.webp" />
            <img src="/images/process/custom-design-workflow.avif" alt="" role="presentation" className="h-full w-full object-cover opacity-30" loading="eager" width={1920} height={800} />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">{`سعودية الملكية · ${COMPANY_STATS.yearsInMarket} سنة في السوق`}</span>
            <h1 className="mt-5 text-display-2xl text-white balance">نصنع <span className="text-accent-300">الأزياء الموحّدة</span> للمؤسسات السعودية التي تبني المملكة.</h1>
            <p className="mt-6 text-xl leading-relaxed text-white/85 pretty">{`UNEOM شركة سعودية لتصنيع الزي الموحّد تأسّست عام 2013. نُشغّل مصنعاً واحداً وثلاثة مراكز عمليات وفريق قياسات يتنقّل إلى كل مقاطعة سعودية. لا نبيع كتالوجات — نُدير برامج.`}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <StatBlock value={`${COMPANY_STATS.activeClients}+`} label="مؤسسة سعودية" context={`عقود برامج نشطة عبر ${COMPANY_STATS.industries} قطاعات.`} size="lg" />
          <StatBlock value={`${COMPANY_STATS.yearsInMarket}`} label="سنة في السوق" context="تأسّست عام 2013، المقرّ الرئيسي في الرياض." size="lg" />
          <StatBlock value={`${COMPANY_STATS.cities}`} label="مدينة مخدومة" context="كل مقاطعة سعودية في خريطة العمليات." size="lg" />
          <StatBlock value={`${COMPANY_STATS.repeatClientRate}%`} label="عملاء متكرّرون" context="مبنية للعقد الثاني، لا البيعة الأولى." size="lg" />
        </div>
      </section>

      <section className="section bg-ink-50">
        <div className="container-page">
          <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <SectionHeader
                eyebrow="مبدأ التشغيل"
                title="شريك في البرنامج. لا كتالوجاً."
              />
              {/* Process image */}
              <div className="mt-8 overflow-hidden rounded-2xl">
                <picture>
                  <source type="image/avif" srcSet="/images/process/quality-assurance.avif" />
                  <source type="image/webp" srcSet="/images/process/quality-assurance.webp" />
                  <img src="/images/process/quality-assurance.avif" alt="فحص الجودة في مصنع UNEOM" className="w-full object-cover rounded-2xl" loading="lazy" width={640} height={480} />
                </picture>
              </div>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink-500 pretty">
              <p>
                معظم موردي الزي الموحّد في المملكة العربية السعودية موزّعو كتالوجات. يشحنون منتجاً قياسياً، يأخذون الدفع، ثم يختفون حتى الطلب التالي. ينكسر الخياطة، يبهت اللون، لا تصل مجموعة الموظفين الجدد — فتكتب إدارة الموارد البشرية طلب مناقصة جديداً.
              </p>
              <p>
                UNEOM مبنية بشكل مختلف. كل عقد يبدأ بمدير عمليات مخصّص لبرنامجك — نفس الشخص الذي ستتحدّث معه عن مجموعات الموظفين الجدد ودورات الاستبدال وتجديد الأقمشة بعد ثلاث سنوات. نقيس الأشياء المهمة لفريقك: دقة الشحن، واتساق المقاسات عبر الأحجام المختلفة، وقدرة القماش الذي بعناه قبل 18 شهراً على تحمّل دورات الغسيل.
              </p>
              <p>
                نموذجنا مبني للعقد الثاني، لا البيعة الأولى. {COMPANY_STATS.repeatClientRate}% من إيرادات UNEOM تأتي من عملاء في دورة برنامجهم الثالثة أو أبعد. هذا المقياس الوحيد الذي يهمّنا.
              </p>
              {/* Measurement image */}
              <div className="mt-4 overflow-hidden rounded-2xl">
                <picture>
                  <source type="image/avif" srcSet="/images/process/measurement-services.avif" />
                  <source type="image/webp" srcSet="/images/process/measurement-services.webp" />
                  <img src="/images/process/measurement-services.avif" alt="خدمات القياس الميدانية" className="w-full object-cover rounded-2xl" loading="lazy" width={640} height={400} />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="الامتثال"
            title="الشهادات والتسجيلات التي تُرسّخ كل مطالبة."
            lead="UNEOM شركة سعودية مسجّلة، متوافقة مع الفواتير الإلكترونية ZATCA، وتُدقَّق عليها سنوياً وفق معايير الجودة والمنسوجات الدولية."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'ISO 9001:2015', body: 'نظام إدارة الجودة يُدقَّق عليه سنوياً.' },
              { title: 'OEKO-TEX Standard 100', body: 'شهادة المواد الضارة في المنسوجات لكامل خط الرعاية الصحية.' },
              { title: 'علامة جودة SASO', body: 'مسجّلة لدى الهيئة السعودية للمواصفات والمقاييس والجودة.' },
              { title: 'موثّق في مرقوم', body: 'التحقق من أعمال وزارة التجارة السعودية.' }
            ].map(c => (
              <div key={c.title} className="bg-white p-8">
                <h3 className="text-base font-bold text-navy-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="هل تريد الاطّلاع على ملخّص العمليات؟" body="اقتصاديات البرنامج التفصيلية، مواصفات الأقمشة، ومحفظة المؤسسات السعودية التي عملنا معها — اطلب الوثيقة وسنُرسلها عبر البريد الإلكتروني في غضون ساعة." primary={{ label: 'تحدّث معنا', href: '/ar/contact/' }} />
      </section>
    </>
  );
}
