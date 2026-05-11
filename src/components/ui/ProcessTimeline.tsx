import { Eyebrow } from './Eyebrow';
import type { Lang } from '@/lib/i18n/ui';

interface Step {
  numberEn: string;
  numberAr: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  metricEn: string;
  metricAr: string;
  iconPath: string;
}

const STEPS: Step[] = [
  {
    numberEn: '01',
    numberAr: '٠١',
    titleEn: 'Brief & Audit',
    titleAr: 'الموجز والمراجعة',
    descEn: 'We assess your workforce size, regulatory environment, and existing uniform lifecycle. A site visit maps climate, shifts, and laundry infrastructure.',
    descAr: 'نقيّم حجم القوى العاملة وبيئة الامتثال ودورة حياة الزي الحالي. زيارة ميدانية تُحدّد المناخ والورديات والبنية التحتية للغسيل.',
    metricEn: '< 2 days',
    metricAr: '< يومين',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  },
  {
    numberEn: '02',
    numberAr: '٠٢',
    titleEn: 'Design & Sample',
    titleAr: 'التصميم والعيّنة',
    descEn: 'Our design team produces fabric swatches and sample garments. Includes fit testing, colour matching to brand standards, and regulator sign-off.',
    descAr: 'يُنتج فريق التصميم عيّنات أقمشة وملابس. يشمل اختبار المقاس ومطابقة الألوان لمعايير العلامة التجارية وموافقة الجهة التنظيمية.',
    metricEn: '7–14 days',
    metricAr: '٧–١٤ يوماً',
    iconPath: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    numberEn: '03',
    numberAr: '٠٣',
    titleEn: 'Bulk Production',
    titleAr: 'الإنتاج بالجملة',
    descEn: 'Approved designs enter our production line with per-unit tracking. QC checkpoints at cutting, stitching, finishing, and packaging.',
    descAr: 'تدخل التصاميم المُعتمَدة خط الإنتاج مع تتبّع لكل قطعة. نقاط فحص الجودة عند القص والخياطة والتشطيب والتغليف.',
    metricEn: '14–21 days',
    metricAr: '١٤–٢١ يوماً',
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    numberEn: '04',
    numberAr: '٠٤',
    titleEn: 'Delivery & Programme',
    titleAr: 'التسليم والبرنامج',
    descEn: 'On-site delivery, department-level sorting, and joiner-kit dispatch. Ongoing programme management includes replacement cycles and quarterly reviews.',
    descAr: 'تسليم ميداني، فرز على مستوى الأقسام، وإرسال حقيبة المنضمّين الجُدد. إدارة مستمرة تشمل دورات الاستبدال والمراجعات الفصلية.',
    metricEn: '48h dispatch',
    metricAr: 'إرسال خلال ٤٨ ساعة',
    iconPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
  }
];

interface Props {
  lang?: Lang;
}

export function ProcessTimeline({ lang = 'en' }: Props) {
  const isAr = lang === 'ar';

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-16">
          <Eyebrow>{isAr ? 'كيف يعمل البرنامج' : 'How it works'}</Eyebrow>
          <h2 className="mt-5 text-display-lg text-navy-900 balance max-w-3xl">
            {isAr ? (
              <>من الموجز إلى التسليم في <span className="text-accent-700">أربع مراحل</span>.</>
            ) : (
              <>From brief to delivery in <span className="text-accent-700">four stages</span>.</>
            )}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 pretty">
            {isAr
              ? 'كل برنامج يتبع خط أنابيب عمليات مُجرّب. لا مفاجآت — فقط مراحل قابلة للقياس ومخرجات واضحة.'
              : 'Every programme follows a battle-tested operations pipeline. No surprises — just measurable stages and clear deliverables.'}
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-accent-200 via-accent-400 to-accent-200" aria-hidden />

          {STEPS.map((step, i) => (
            <div key={step.numberEn} className="process-step group relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white shadow-elevation transition-all duration-500 group-hover:bg-accent-600 group-hover:scale-110 group-hover:shadow-elevation-lg">
                <span className="text-lg font-bold stat-number">
                  {isAr ? step.numberAr : step.numberEn}
                </span>
              </div>

              {/* Icon */}
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-700 transition-colors duration-500 group-hover:bg-accent-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
                </svg>
              </div>

              <h3 className="mt-4 text-lg font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
                {isAr ? step.titleAr : step.titleEn}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 pretty">
                {isAr ? step.descAr : step.descEn}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy-900/5 px-4 py-1.5 text-xs font-bold text-navy-800 stat-number">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                {isAr ? step.metricAr : step.metricEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
