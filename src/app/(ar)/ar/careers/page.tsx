import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { COMPANY_STATS } from '@/lib/data/stats';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'الوظائف — ابنِ برامج، لا كتالوجات',
  description: 'UNEOM توظّف في العمليات والتصميم والتصنيع وفرق القياسات الميدانية. ملكية سعودية، تركيز على البرامج، ومبنية للمدى البعيد.',
  alternates: {
    canonical: 'https://uneom.com/ar/careers/',
    languages: {
      en: 'https://uneom.com/careers/',
      'ar-SA': 'https://uneom.com/ar/careers/',
      'x-default': 'https://uneom.com/careers/'
    }
  }
};

const ROLES = [
  { title: 'مدير برنامج عمليات', team: 'العمليات', city: 'الرياض', type: 'دوام كامل' },
  { title: 'مهندس نسيج أول', team: 'الإنتاج', city: 'الرياض', type: 'دوام كامل' },
  { title: 'قائد قياسات ميدانية — المنطقة الشرقية', team: 'العمليات', city: 'الدمام', type: 'دوام كامل' },
  { title: 'قائد مبيعات برامج — الضيافة', team: 'المبيعات', city: 'جدة', type: 'دوام كامل' },
  { title: 'مفتّش ضمان الجودة', team: 'الإنتاج', city: 'الرياض', type: 'دوام كامل' },
  { title: 'مصمّم هوية بصرية', team: 'التصميم', city: 'الرياض', type: 'دوام كامل' }
];

export default function ArCareersPage() {
  const schema = webPageSchema({ path: '/ar/careers/', name: 'الوظائف — UNEOM', description: 'وظائف شاغرة في العمليات والتصميم والتصنيع وفرق القياسات الميدانية.' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'الوظائف', path: '/ar/careers/' }]} />

      <section className="container-page section-tight">
        <SectionHeader as="h1"
          eyebrow={`${COMPANY_STATS.staff}+ موظف · ${ROLES.length} وظائف شاغرة`}
          title={<>نوظّف للعقد <span className="text-accent-700">الثاني</span>، لا البيعة الأولى.</>}
          lead="UNEOM شركة سعودية لتشغيل برامج الزي الموحّد. لا نبيع كتالوجات — ندير عقوداً متعددة السنوات. الأدوار أدناه للأشخاص الذين يريدون بناء شيء يصمد أمام تدقيق العام الثاني."
          hero
        />
      </section>

      <section className="container-page pb-24">
        <div className="overflow-hidden rounded-3xl ring-1 ring-ink-100">
          <table className="w-full text-right">
            <thead className="bg-ink-50">
              <tr>
                <th className="p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500">الدور</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 md:table-cell">الفريق</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 md:table-cell">المدينة</th>
                <th className="hidden p-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-500 lg:table-cell">النوع</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {ROLES.map((r, i) => (
                <tr key={i} className="hover:bg-ink-50/60 transition-colors">
                  <td className="p-5">
                    <div className="font-bold text-navy-900">{r.title}</div>
                    <div className="text-xs text-ink-500 md:hidden">{r.team} · {r.city} · {r.type}</div>
                  </td>
                  <td className="hidden p-5 text-sm text-ink-500 md:table-cell">{r.team}</td>
                  <td className="hidden p-5 text-sm text-ink-500 md:table-cell">{r.city}</td>
                  <td className="hidden p-5 text-sm text-ink-500 lg:table-cell">{r.type}</td>
                  <td className="p-5 text-left">
                    <a href="mailto:careers@uneom.com" className="text-sm font-semibold text-accent-700 hover:text-accent-600 inline-flex items-center gap-1">
                      تقدّم <span aria-hidden>←</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-page section">
        <CtaBlock dark heading="لا ترى دورك هنا؟" body="إذا كنت ستبني مع UNEOM، راسلنا على أيّ حال. careers@uneom.com." primary={{ label: 'أرسل سيرتك الذاتية', href: 'mailto:careers@uneom.com' }} />
      </section>
    </>
  );
}
