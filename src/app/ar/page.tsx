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
import { ClientLogos } from '@/components/ui/ClientLogos';
import { TestimonialSection } from '@/components/ui/TestimonialSection';
import { ProcessTimeline } from '@/components/ui/ProcessTimeline';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema, collectionPageSchema } from '@/lib/seo/schemas';

export const metadata = {
  title: 'UNEOM — يونيفورم وزي موحد في السعودية | سكراب طبي، يونيفورم مدارس، الزي الموحد للشركات',
  description: `شركة الزي الموحد الرائدة في السعودية. ${COMPANY_STATS.activeClients}+ مؤسسة تثق بـ UNEOM — يونيفورم عاملات، سكراب طبي، يونيفورم مطاعم، زي موحد للمدارس والشركات — تفصيل وخياطة الزي الموحد في الرياض وجدة والدمام وكل المدن الـ 24.`,
  alternates: { canonical: 'https://uneom.com/ar/' }
};

export default function ArHomePage() {
  const heroIndustries = INDUSTRIES.slice(0, 4);

  const arHomePageSchema = webPageSchema({ path: '/ar/', name: 'يونيوم — شركة الزي الموحد السعودية', description: 'برامج الزي الموحّد عبر 8 قطاعات و24 مدينة سعودية. معتمدون ISO 9001 + OEKO-TEX.' });
  const arIndustriesListSchema = collectionPageSchema({ path: '/ar/', name: 'قطاعات يونيوم', description: 'ثمانية برامج زي موحّد متخصّصة بالقطاع', items: INDUSTRIES.map(i => ({ name: i.nameAr, url: `/ar/industries/${i.slug}/`, description: i.taglineAr, image: `/images/${i.heroImage}.avif` })) });

  return (
    <>
      <JsonLd data={[arHomePageSchema, arIndustriesListSchema]} />
      {/* ============== HERO ============== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/avif"
              srcSet="/images/heroes/healthcare-pillar-hero-640.avif 640w, /images/heroes/healthcare-pillar-hero-960.avif 960w, /images/heroes/healthcare-pillar-hero-1440.avif 1440w, /images/heroes/healthcare-pillar-hero.avif 1920w"
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet="/images/heroes/healthcare-pillar-hero-640.webp 640w, /images/heroes/healthcare-pillar-hero-960.webp 960w, /images/heroes/healthcare-pillar-hero-1440.webp 1440w, /images/heroes/healthcare-pillar-hero.webp 1920w"
              sizes="100vw"
            />
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
              يونيفورم بلس سكراب طبي ولاب كوت وكل ما يحمل معنى يونيفورم مهني، مبنية وفق معايير ISO 9001 + OEKO-TEX ومُسلَّمة إلى جميع {COMPANY_STATS.cities} مدينة.
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

      {/* ============== CLIENT LOGOS MARQUEE ============== */}
      <ClientLogos lang="ar" />

      {/* ============== TRUST STRIP ============== */}
      <section className="border-b border-ink-100 bg-white">
        <div className="container-page py-12">
          <div className="flex flex-col items-center gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
              الامتثال والاعتماد
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-semibold text-ink-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                ISO 9001:2015
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                OEKO-TEX Standard 100
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                معتمد من SASO
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                موثّق في مرقوم
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden />
                فوترة ZATCA الإلكترونية
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== INDUSTRIES ============== */}
      <section className="section bg-ink-50 cv-auto">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeader
              eyebrow={`${COMPANY_STATS.industries} قطاعات · ${COMPANY_STATS.activeClients}+ عميل`}
              title={<>ثمانية قطاعات سعودية. <span className="text-accent-700">متخصّصون فيها، لا مجرّد كتالوج.</span></>}
              lead="كل قطاع في هذه الصفحة هو برنامج متكامل — صفحات رئيسية، منتجات، جهات تنظيمية، دراسات حالة، وعمليات على مستوى المدينة لتنفيذه."
            />
            <Link href="/ar/industries/" className="btn-outline shrink-0">
              جميع القطاعات الثمانية
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {heroIndustries.map(industry => (
              <IndustryCard key={industry.slug} industry={industry} lang="ar" />
            ))}
          </div>

          {/* Remaining 4 — compact */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.slice(4).map(industry => (
              <IndustryCard key={industry.slug} industry={industry} variant="compact" lang="ar" />
            ))}
          </div>
        </div>
      </section>

      {/* ============== HOW IT WORKS — PROCESS TIMELINE ============== */}
      <ProcessTimeline lang="ar" />

      {/* ============== WHY UNEOM — INFORMATION GAIN ============== */}
      <section className="section bg-ink-50 cv-auto">
        <div className="container-page">
          <div className="grid items-start gap-16 lg:grid-cols-[1.2fr_1fr]">
            <div className="grid gap-10 sm:grid-cols-2">
              <StatBlock
                value={`${COMPANY_STATS.activeClients}+`}
                label="مؤسسة سعودية تخدمها"
                context="من عيادات تضمّ 50 موظفاً إلى سلاسل تجزئة على مستوى المملكة. عقود برامج، لا مبيعات كتالوج."
              />
              <StatBlock
                value="78%"
                label="معدّل تكرار العملاء"
                context="عبر 12 عاماً. نموذجنا مبني للعقد الثاني، لا للبيع الأول."
              />
              <StatBlock
                value="14–21"
                label="يوماً للشحن بالجملة"
                context="مدّة تسليم برنامج التكرار. التصاميم الجديدة تُشحن خلال 21–35 يوماً تشمل القياسات."
              />
              <StatBlock
                value="18 شهراً"
                label="ضمان الرعاية الصحية"
                context="6 أشهر فوق المعيار الصناعي — نحن نقف وراء تحمّل دورات الغسيل."
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="لماذا UNEOM"
                title={<>أرقام نكسبها. معايير نمتلكها.</>}
                lead="سوق الزي الموحّد السعودي مليء بالكتالوجات. نحن نتنافس بالحقائق التشغيلية التي لا ينشرها أحد غيرنا."
              />
              <div className="mt-10 space-y-2">
                <Link href="/ar/about/" className="link inline-flex items-center gap-1">
                  اقرأ الموجز التشغيلي
                  <span aria-hidden>←</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS ============== */}
      <TestimonialSection lang="ar" />

      {/* ============== CITIES ============== */}
      <section className="section bg-navy-900 text-white cv-auto">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">
                التغطية الجغرافية
              </span>
              <h2 className="mt-5 text-display-lg text-white balance">
                {COMPANY_STATS.cities} مدينة. <span className="text-accent-400">فريق عمليات واحد.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 pretty">
                قياسات ميدانية وإرسال حقيبة المنضمّين ودورات استبدال —
                من الحزام الصناعي بالمنطقة الشرقية إلى مرتفعات عسير.
              </p>
            </div>
            <Link href="/ar/locations/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white shrink-0">
              كل الـ {COMPANY_STATS.cities} مدينة ←
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METRO_CITIES.map(city => (
              <CityCard key={city.slug} city={city} lang="ar" />
            ))}
          </div>
          <p className="mt-8 text-sm text-white/60">
            + {SAUDI_CITIES.length - METRO_CITIES.length} مدينة أخرى تشمل {SAUDI_CITIES.slice(5, 11).map(c => c.nameAr).join('، ')}، وغيرها.
          </p>
        </div>
      </section>

      {/* ============== SERVICES ============== */}
      <section className="section bg-white cv-auto">
        <div className="container-page">
          <SectionHeader
            eyebrow="سبع خدمات. فريق عمليات واحد."
            title={<>من <span className="text-accent-700">التصميم</span> إلى الخياطة، وكل خطوة بينهما.</>}
            lead="UNEOM شريك في البرامج وليس متجراً للكتالوجات. هذه الخدمات التشغيلية هي التي تُبقي كل عقد زي موحّد متماسكاً."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/ar/services/${service.slug}/`}
                className="group flex flex-col gap-4 bg-white p-8 transition-colors hover:bg-ink-50/60"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-accent-700 transition-colors">
                    {service.nameAr}
                  </h3>
                  <span className="text-ink-300 transition-transform group-hover:-translate-x-1 group-hover:text-accent-500" aria-hidden>←</span>
                </div>
                <p className="text-sm leading-relaxed text-ink-500 line-clamp-3">
                  {service.summaryAr}
                </p>
                <div className="mt-auto pt-3">
                  <div className="text-xl font-bold text-navy-900 stat-number">{service.outcomeAr.value}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-accent-700">{service.outcomeAr.label}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== EDITORIAL QUOTE / PROOF POINT ============== */}
      <section className="section-tight bg-ink-50 cv-auto-sm">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow>مكسب معلوماتي</Eyebrow>
            <p className="mt-6 text-display text-navy-900 balance">
              في الرياض، يمرّ سكراب الرعاية الصحية بـ <span className="text-accent-700">4.2 دورة غسيل</span> لكل وردية —
              <br />
              38% فوق المعدّل العالمي. معظم الأزياء لم تُبنَ لذلك. أزياؤنا بُنيت لذلك.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              بيانات عمليات UNEOM، 38 مستشفى سعودي شريك، 2024–2026.
            </p>
          </div>
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="section bg-white">
        <div className="container-page">
          <CtaBlock
            dark
            eyebrow="الخطوة التالية"
            heading="أخبرنا عن متطلبات الزي الموحّد لمؤسستك."
            body="طلب عرض سعر من 4 خطوات يستغرق أقل من دقيقتين. نردّ خلال يوم عمل واحد بعيّنات قماش وخيارات تصميم ومقترح برنامج."
            primary={{ label: 'طلب عرض سعر', href: '/ar/quote/' }}
            secondary={{ label: 'تحدّث مع العمليات', href: '/ar/contact/' }}
          />
        </div>
      </section>
    </>
  );
}
