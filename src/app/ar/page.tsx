import Link from 'next/link';
import { INDUSTRIES } from '@/lib/data/industries';
import { SAUDI_CITIES, METRO_CITIES } from '@/lib/data/saudi-cities';
import { SERVICES } from '@/lib/data/services';
import { COMPANY_STATS } from '@/lib/data/stats';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatBlock } from '@/components/ui/StatBlock';
import { IndustryCard } from '@/components/ui/IndustryCard';
import { CityCard } from '@/components/ui/CityCard';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { Eyebrow } from '@/components/ui/Eyebrow';

export const metadata = {
  title: 'UNEOM — الأزياء المهنية السعودية | الرعاية الصحية والضيافة والطيران والتصنيع',
  description: `${COMPANY_STATS.activeClients}+ مؤسسة سعودية تثق بـ UNEOM للرعاية الصحية والضيافة والطيران والشركات والتعليم والتصنيع والأمن والتجزئة — عبر جميع الـ 24 مدينة سعودية.`,
  alternates: { canonical: 'https://uneom.com/ar/' }
};

export default function ArHomePage() {
  const heroIndustries = INDUSTRIES.slice(0, 4);

  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source type="image/avif" srcSet="/images/heroes/healthcare-pillar-hero.avif" />
            <source type="image/webp" srcSet="/images/heroes/healthcare-pillar-hero.webp" />
            <img
              src="/images/heroes/healthcare-pillar-hero.avif"
              alt=""
              role="presentation"
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-900/80 to-navy-900/40" aria-hidden />
        </div>

        <div className="relative container-page pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-36 lg:pb-44">
          <div className="max-w-4xl text-white animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              <span className="h-px w-10 bg-accent-400" aria-hidden />
              المملكة العربية السعودية · منذ {COMPANY_STATS.yearsInMarket} سنة
            </span>
            <h1 className="mt-6 text-display-2xl text-white balance">
              الأزياء المهنية للمؤسسات السعودية
              <br />
              التي <span className="text-accent-400">تبني المملكة.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              UNEOM هو الشريك في برامج الزي الموحّد بالجملة لـ {COMPANY_STATS.activeClients}+ عميل سعودي B2B عبر
              الرعاية الصحية والضيافة والطيران والشركات والتعليم والتصنيع والأمن والتجزئة —
              مبنية وفق معايير ISO 9001 + OEKO-TEX ومُسلَّمة إلى جميع {COMPANY_STATS.cities} مدينة.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/ar/quote/" className="btn-accent">
                طلب عرض سعر
              </Link>
              <Link href="/ar/industries/" className="btn-ghost text-white hover:bg-white/10 hover:text-white">
                استعراض القطاعات ←
              </Link>
            </div>
          </div>
        </div>

        <div className="relative bg-navy-950/90 backdrop-blur-sm">
          <div className="container-page grid grid-cols-2 gap-8 py-8 sm:grid-cols-4 lg:py-10">
            {[
              { v: `${COMPANY_STATS.activeClients}+`, l: 'مؤسسة سعودية' },
              { v: `${COMPANY_STATS.cities}`, l: 'مدينة مخدومة' },
              { v: `${COMPANY_STATS.industries}`, l: 'قطاع صناعي' },
              { v: `${COMPANY_STATS.yearsInMarket}`, l: 'سنة في السوق' }
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-1">
                <span className="stat-number font-display text-3xl font-extrabold text-white sm:text-4xl">{s.v}</span>
                <span className="text-xs font-medium text-white/60">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES ============== */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow={`${COMPANY_STATS.industries} قطاعات · ${COMPANY_STATS.activeClients}+ عميل`}
            title={<>ثمانية قطاعات سعودية. <span className="text-accent-700">متخصّصون فيها، لا مجرّد كتالوج.</span></>}
            lead="كل قطاع في هذه الصفحة هو برنامج متكامل — صفحات رئيسية، منتجات، جهات تنظيمية، دراسات حالة، وعمليات على مستوى المدينة لتنفيذه."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroIndustries.map(industry => (
              <IndustryCard key={industry.slug} industry={industry} lang="ar" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/ar/industries/" className="btn-secondary">
              جميع القطاعات الثمانية ←
            </Link>
          </div>
        </div>
      </section>

      {/* ============== CITIES ============== */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow={`${COMPANY_STATS.cities} مدينة · فريق عمليات واحد`}
            title={<>من الحزام الصناعي بالمنطقة الشرقية إلى <span className="text-accent-700">مرتفعات عسير.</span></>}
            lead="UNEOM يُسلِّم برامج الزي الموحّد لكل مقاطعة سعودية. قياسات ميدانية للتجمعات التي تتجاوز 50 موظفاً، توصيل دورات الاستبدال في أي مكان خلال 48 ساعة."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRO_CITIES.map(city => (
              <CityCard key={city.slug} city={city} lang="ar" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/ar/locations/" className="btn-secondary">
              جميع الـ {COMPANY_STATS.cities} مدينة ←
            </Link>
          </div>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader
            eyebrow="سبع خدمات. فريق عمليات واحد."
            title={<>من <span className="text-accent-700">التصميم</span> إلى الخياطة، وكل خطوة بينهما.</>}
            lead="UNEOM شريك في البرامج وليس متجراً للكتالوجات. هذه الخدمات التشغيلية هي التي تُبقي كل عقد زي موحّد متماسكاً."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map(s => (
              <Link key={s.slug} href={`/ar/services/${s.slug}/`} className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:border-accent-500/40 hover:shadow-elevation-lg">
                <div>
                  <h3 className="font-bold text-navy-900 group-hover:text-accent-700 transition-colors">{s.nameAr}</h3>
                  <p className="mt-1 text-sm text-ink-500 line-clamp-1">{s.summaryAr}</p>
                </div>
                <span className="text-ink-300 transition-transform group-hover:-translate-x-1 group-hover:text-accent-500" aria-hidden>←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TRUST ============== */}
      <section className="section bg-navy-900 text-white">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">الامتثال والاعتماد</span>
              <h2 className="mt-5 text-display-lg text-white balance">
                مبني على المعايير السعودية والدولية.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 pretty">
                كل برنامج يُقاس مقابل الوزارة أو السلطة وجهة الاعتماد ذات الصلة. مسار التدقيق هو المُخرَج.
              </p>
              <div className="mt-8">
                <Link href="/ar/quote/" className="btn-accent">طلب عرض سعر</Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'ISO 9001:2015', body: 'نظام إدارة الجودة يُدقَّق عليه سنوياً.' },
                { title: 'OEKO-TEX 100', body: 'شهادة المواد الضارة في المنسوجات.' },
                { title: 'علامة جودة SASO', body: 'مسجّل لدى الهيئة السعودية للمواصفات.' },
                { title: 'موثّق في مرقوم', body: 'التحقق من أعمال وزارة التجارة السعودية.' }
              ].map(c => (
                <div key={c.title} className="rounded-2xl bg-white/8 p-6">
                  <h3 className="font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70 pretty">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="الخطوة التالية"
          heading="أخبرنا عن متطلبات الزي الموحّد لمؤسستك."
          body="طلب عرض سعر من 4 خطوات يستغرق أقل من دقيقتين. نردّ خلال يوم عمل واحد بعيّنات قماش وخيارات تصميم ومقترح برنامج."
          primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
          secondary={{ label: 'تحدّث مع العمليات', href: '/ar/contact/' }}
        />
      </section>
    </>
  );
}
