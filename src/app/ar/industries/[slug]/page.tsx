import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { INDUSTRIES, getIndustry } from '@/lib/data/industries';
import { SAUDI_CITIES } from '@/lib/data/saudi-cities';
import { INDUSTRY_STATS } from '@/lib/data/stats';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TrustAnchorList } from '@/components/ui/TrustAnchorList';
import { CtaBlock } from '@/components/ui/CtaBlock';
import { SiloLinks } from '@/components/ui/SiloLinks';
import { JsonLd } from '@/lib/seo/JsonLd';
import { faqSchema } from '@/lib/seo/schemas';

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map(i => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const titleMap: Record<string, string> = {
    healthcare: 'الزي الطبي في السعودية — سكراب طبي ولابكوت معتمدة من وزارة الصحة | UNEOM',
    hospitality: 'يونيفورم مطاعم وشيف وخدم — زي موحد للفنادق السعودية | UNEOM',
    education: 'يونيفورم مدارس — الزي الموحد للمدارس السعودية | UNEOM',
    corporate: 'الزي الموحد للشركات — يونيفورم عاملات وموظفين | UNEOM',
    manufacturing: 'زي موحد للسلامة وأفرولات صناعية — معايير HCIS | UNEOM',
    security: 'أزياء أمنية وعسكرية — الزي الموحد للحراسات | UNEOM',
    aviation: 'أزياء الطيران — زي طيران الرياض والطاقم | UNEOM',
    retail: 'زي موحد للتجزئة — يونيفورم موظفي المتاجر | UNEOM'
  };
  const descMap: Record<string, string> = {
    healthcare: 'سكراب طبي وسكربات طبية ولابكوت ولبس تمريض معتمدة من وزارة الصحة وSFDA في 24 مدينة سعودية. قماش antimicrobial AATCC 100، ضمان 18 شهراً. اطلب عرضاً.',
    hospitality: 'يونيفورم شيف ويونيفورم خدم ويونيفورم مطاعم وزي موحد للفنادق السعودية الفاخرة. متانة موسم الحج، ألوان بانتون. اطلب عرضاً.',
    education: 'يونيفورم مدارس والزي الموحد للمدارس متوافق مع وزارة التعليم. مهندس لدورات نمو الطلاب. برامج جملة لـ 35,000+ مدرسة.',
    corporate: 'الزي الموحد للشركات ويونيفورم عاملات للمنشآت السعودية. بدلات نصف كانفاس، برامج هوية مؤسسية من 50 إلى 5,000 موظف.',
    manufacturing: 'زي موحد للسلامة وأفرولات صناعية وفق معايير HCIS وساسو. تتبع بمستوى أرامكو. عرض سعر خلال 24 ساعة.',
    security: 'أزياء أمنية تكتيكية وعسكرية متوافقة مع HCIS. بناء عسكري للأمن الخاص والحراسات السعودية.',
    aviation: 'أزياء طيران متوافقة مع هيئة الطيران المدني. مزيج صوف استوائي لدورات 14 ساعة من الرياض وجدة.',
    retail: 'زي موحد للتجزئة بمتانة 200+ دورة غسيل. برامج دورية لسلاسل المراكز التجارية السعودية.'
  };
  return {
    title: titleMap[slug] ?? `أزياء ${industry.nameAr} — المملكة العربية السعودية | UNEOM`,
    description: descMap[slug] ?? industry.taglineAr,
    alternates: {
      canonical: `https://uneom.com/ar/industries/${slug}/`,
      languages: {
        en: `https://uneom.com/industries/${slug}/`,
        'ar-SA': `https://uneom.com/ar/industries/${slug}/`,
        'x-default': `https://uneom.com/industries/${slug}/`
      }
    },
    openGraph: {
      title: `أزياء ${industry.nameAr} — UNEOM السعودية`,
      description: industry.taglineAr,
      images: [{ url: `/images/${industry.heroImage}.avif`, width: 1920, height: 1080 }]
    }
  };
}

export default async function ArIndustryPillarPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const stats = INDUSTRY_STATS[slug];

  // Use expanded 8-FAQ if present, otherwise default 5
  const faqs = industry.expandedFaqs
    ? industry.expandedFaqs.map(f => ({ q: f.qAr, a: f.aAr }))
    : [
        { q: `لماذا تتخصّص UNEOM في أزياء ${industry.nameAr}؟`, a: industry.architectEquationAr },
        { q: `ما هو وقت التسليم لبرامج أزياء ${industry.nameAr}؟`, a: 'البرامج المتكرّرة تُشحَن في 14–21 يوماً. التصاميم الجديدة تُشحَن في 21–35 يوماً، تشمل القياسات الميدانية.' },
        { q: `ما المعايير السعودية التي يمتثل لها UNEOM لقطاع ${industry.nameAr}؟`, a: `${industry.regulators.map(r => r.toUpperCase()).join('، ')}, بالإضافة إلى ISO 9001 وOEKO-TEX Standard 100 على كامل البرنامج.` },
        { q: `ما متوسط سعر الوحدة لأزياء ${industry.nameAr}؟`, a: `التسعير يعتمد على الحجم وفئة القماش والتخصيص. متوسط سعر الوحدة لقطاع ${industry.nameAr} يتراوح حول ${stats?.avgPriceSAR} ريال — اطلب عرض سعر للأرقام الدقيقة.` },
        { q: `هل تخدم UNEOM جميع المدن السعودية لقطاع ${industry.nameAr}؟`, a: 'نعم. UNEOM يشحن إلى جميع الـ 24 مدينة سعودية، مع قياسات ميدانية متاحة للتجمعات التي تتجاوز 50 موظفاً في أي منطقة.' }
      ];

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Breadcrumbs items={[
        { name: 'القطاعات', path: '/ar/industries/' },
        { name: industry.nameAr, path: `/ar/industries/${industry.slug}/` }
      ]} />

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <picture>
            <source
              type="image/avif"
              srcSet={`/images/${industry.heroImage}-640.avif 640w, /images/${industry.heroImage}-960.avif 960w, /images/${industry.heroImage}-1440.avif 1440w, /images/${industry.heroImage}.avif 1920w`}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={`/images/${industry.heroImage}-640.webp 640w, /images/${industry.heroImage}-960.webp 960w, /images/${industry.heroImage}-1440.webp 1440w, /images/${industry.heroImage}.webp 1920w`}
              sizes="100vw"
            />
            <img
              src={`/images/${industry.heroImage}.avif`}
              alt=""
              role="presentation"
              className="h-full w-full object-cover opacity-40"
              fetchPriority="high"
              decoding="sync"
              width={1920}
              height={1080}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-l from-navy-950/95 via-navy-900/80 to-transparent" aria-hidden />
        </div>
        <div className="relative container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-3xl text-white">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">
              القطاع · {industry.regulators.map(r => r.toUpperCase()).join(' · ')}
            </span>
            <h1 className="mt-5 text-display-2xl text-white balance">
              أزياء {industry.nameAr} — مبنية وفق <span className="text-accent-400">المعايير السعودية.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/85 lg:text-xl pretty">
              {industry.taglineAr}
            </p>
            {industry.lastUpdated && (
              <p className="mt-4 text-xs text-white/50">
                آخر تحديث: <time dateTime={industry.lastUpdated}>{industry.lastUpdated}</time>
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/ar/quote/?industry=${industry.slug}`} className="btn-accent">طلب عرض سعر</Link>
              <Link href="/ar/case-studies/" className="btn-ghost text-white border border-white/20 hover:bg-white/10 hover:text-white">
                مشاهدة دراسات الحالة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECT EQUATION ===== */}
      <section className="bg-ink-50 border-b border-ink-100">
        <div className="container-page section-tight">
          <div className="grid items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">
                معادلة المعمار
              </span>
              <p className="mt-5 text-display text-navy-900 balance">
                {industry.architectEquationAr}
              </p>
              {industry.definitionLockIn && (
                <blockquote className="mt-8 border-r-4 border-accent-500 bg-white p-6 text-base leading-relaxed text-navy-800 pretty">
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-accent-700 mb-2">التعريف</span>
                  {industry.definitionLockIn.ar}
                </blockquote>
              )}
            </div>
            {stats && (
              <div className="card p-8 lg:p-10">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">اقتصاديات البرنامج</h3>
                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">متوسط سعر الوحدة</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.avgPriceSAR} <span className="text-base font-medium text-ink-500">ريال</span></dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">وقت التسليم</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.leadTimeDays} <span className="text-base font-medium text-ink-500">يوم</span></dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wider text-ink-400">الضمان</dt>
                    <dd className="stat-number mt-1 text-3xl font-extrabold text-navy-900">{stats.warrantyMonths} <span className="text-base font-medium text-ink-500">شهر</span></dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY CONTEXT BLOCK (Saudi market reality) ===== */}
      {industry.industryContext && (
        <section className="section bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
              <SectionHeader
                eyebrow="السياق القطاعي"
                title={`واقع قطاع ${industry.nameAr} في السعودية.`}
                lead="لماذا تفشل الإرشادات العالمية الـgeneric في هذا السوق — وما الذي يتغيّر عند التصميم له تحديداً."
              />
              <div className="prose prose-lg max-w-none text-ink-700">
                {industry.industryContext.ar.map((para, i) => (
                  <p key={i} className="leading-relaxed pretty">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== COMPLIANCE CITATIONS ===== */}
      {industry.complianceCitations && industry.complianceCitations.length > 0 && (
        <section className="section bg-ink-50">
          <div className="container-page">
            <SectionHeader
              eyebrow="الالتزام والاستشهادات"
              title="نصوص حرفية من الجهات السعودية التي تُدقّق عملنا."
              lead="كل بند أدناه اقتباس مباشر من النصّ التنظيمي العام. برامج UNEOM مُصمَّمة لتلبية هذه المتطلّبات على مستوى الدفعة (batch)."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {industry.complianceCitations.map((c, i) => (
                <article key={i} className="bg-white border border-ink-100 rounded-2xl p-6">
                  <header>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-accent-700 hover:underline"
                    >
                      {c.entityAr} ↗
                    </a>
                    <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">{c.refLabelAr}</p>
                  </header>
                  <blockquote className="mt-4 border-r-2 border-accent-300 pr-4 text-sm leading-relaxed text-ink-700 italic">
                    «{c.quoteAr}»
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SIGNATURE STAT ===== */}
      <section className="section-tight bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">معلومة مميّزة</span>
            <p className="mt-6 text-display-lg text-navy-900 balance">
              <span className="text-accent-700 stat-number">{industry.signatureStat.value}</span>
              {' '}
              <span className="text-ink-500 font-medium">{industry.signatureStatAr.label}</span>
            </p>
            <p className="mt-6 text-base text-ink-500 max-w-2xl mx-auto pretty">
              {industry.signatureStatAr.context}
            </p>
          </div>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="section bg-ink-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="ما يميّز UNEOM"
            title={`ثلاثة أشياء تفعلها برامجنا لقطاع ${industry.nameAr} ولا تستطيع الكتالوجات فعلها.`}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-ink-100 lg:grid-cols-3">
            {industry.pillarsAr.map((p, i) => (
              <div key={i} className="bg-white p-8 lg:p-10">
                <div className="font-display text-5xl font-extrabold text-accent-200 stat-number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-xl font-bold text-navy-900 balance">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON MATRIX ===== */}
      {industry.comparisonMatrix && (
        <section className="section bg-white">
          <div className="container-page">
            <SectionHeader
              eyebrow="مقارنة المستويات"
              title={industry.comparisonMatrix.titleAr}
              lead="تفصيل جنباً إلى جنب لما يقدّمه كل مستوى فعلياً — القماش، الأداء، الضمان، وإجمالي الكلفة."
            />
            <div className="mt-12 overflow-x-auto rounded-2xl border border-ink-100">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    <th className="px-6 py-4 text-right font-bold">البُعد</th>
                    {industry.comparisonMatrix.columnsAr.map((col, i) => (
                      <th
                        key={i}
                        className={`px-6 py-4 text-right font-bold ${i === 0 ? 'bg-accent-700' : ''}`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {industry.comparisonMatrix.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-ink-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold text-navy-900 border-l border-ink-100">{row.dimensionAr}</td>
                      {row.valuesAr.map((val, j) => (
                        <td
                          key={j}
                          className={`px-6 py-4 text-ink-700 ${j === 0 ? 'font-bold text-accent-700 bg-accent-50/50' : ''}`}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-ink-400">
              التسعير يعكس عروض UNEOM للربع الأول من 2026. أسعار البرامج تُطبَّق على الطلبات فوق 500 قطعة.
            </p>
          </div>
        </section>
      )}

      {/* ===== NEGATIVE ENTITY FRAME ===== */}
      {industry.negativeFrames && industry.negativeFrames.length > 0 && (
        <section className="section bg-navy-900 text-white">
          <div className="container-page">
            <div className="text-white">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">ما يحدث خطأ</span>
              <h2 className="mt-5 text-display-lg text-white balance">
                اثنان من أخطاء الشراء في قطاع {industry.nameAr} — والفيزياء وراء فشلها.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80 pretty">
                ليس كل خيار رخيص خاطئاً. لكن بعض ردود الفعل الشرائية القياسية لها أوضاع فشل قابلة للقياس. هاتان أكثرهما تكراراً.
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {industry.negativeFrames.map((nf, i) => (
                <article key={i} className="rounded-2xl bg-white/5 backdrop-blur p-8 border border-white/10">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-red-300 mb-3">
                    ممارسة خاطئة {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white balance">{nf.practiceAr}</h3>
                  <div className="mt-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">لماذا تفشل</div>
                      <p className="text-sm leading-relaxed text-white/85 pretty">{nf.whyFailsAr}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-accent-300 mb-2">الحل</div>
                      <p className="text-sm leading-relaxed text-white pretty">{nf.solutionAr}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TRUST ANCHORS ===== */}
      <section className="section-tight bg-white">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <SectionHeader
                eyebrow="المعايير والجهات التنظيمية"
                title="مرتبطون بالجهات التنظيمية السعودية التي تُراجع عملنا."
                lead="كل برنامج يُقاس مقابل الوزارة أو السلطة وجهة الاعتماد ذات الصلة. مسار التدقيق هو المُخرَج."
              />
            </div>
            <TrustAnchorList regulators={industry.regulators} city={industry.anchorCity} lang="ar" />
          </div>
        </div>
      </section>

      {/* ===== CITY COVERAGE ===== */}
      <section className="section bg-navy-900 text-white">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-300">التغطية الجغرافية</span>
              <h2 className="mt-5 text-display-lg text-white balance">
                برامج {industry.nameAr} مُسلَّمة إلى جميع الـ 24 مدينة سعودية.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/80 pretty">
                قياسات ميدانية، شحن دورات الاستبدال، وإدارة مجموعات الموظفين الجدد — منطلقة من {industry.anchorCity ? SAUDI_CITIES.find(c => c.slug === industry.anchorCity)?.nameAr : 'الرياض'}.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {SAUDI_CITIES.map(city => (
              <Link
                key={city.slug}
                href={`/ar/locations/${city.slug}/`}
                className="group flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition-all hover:bg-white/10 hover:text-white"
              >
                <span>{city.nameAr}</span>
                <span className="text-white/40 transition-transform group-hover:-translate-x-1 group-hover:text-accent-400" aria-hidden>←</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SILO LINKS ===== */}
      <SiloLinks context={{ type: 'industry-pillar', silo: industry.slug }} lang="ar" />

      {/* ===== FAQ ===== */}
      <section className="section bg-white">
        <div className="container-page">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeader
              eyebrow="الأسئلة الشائعة"
              title={`أسئلة برنامج ${industry.nameAr}.`}
              lead="الأسئلة التي تطرحها فِرَق المشتريات السعودية قبل التوقيع. إجابات مباشرة، بدون التواء تسويقي."
            />
            <div>
              <dl className="divide-y divide-ink-100 border-t border-ink-100">
                {faqs.map(f => (
                  <div key={f.q} className="py-6">
                    <dt className="text-base font-bold text-navy-900">{f.q}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink-500 pretty">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXTERNAL SOURCES ===== */}
      {industry.externalSources && industry.externalSources.length > 0 && (
        <section className="section-tight bg-ink-50 border-y border-ink-100">
          <div className="container-page">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent-700">الجهات والمعايير الخارجية</span>
            <ul className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {industry.externalSources.map((src, i) => (
                <li key={i}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-900 hover:text-accent-700 underline-offset-4 hover:underline"
                  >
                    {src.nameAr} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="container-page section">
        <CtaBlock
          dark
          eyebrow="ابدأ برنامجك"
          heading={`أخبرنا عن متطلبات أزياء ${industry.nameAr} الموحّدة.`}
          body="طلب عرض سعر من 4 خطوات يستغرق أقل من دقيقتين. نردّ خلال يوم عمل واحد بعيّنات قماش وخيارات تصميم ومقترح برنامج."
          primary={{ label: 'طلب عرض سعر', href: `/ar/quote/?industry=${industry.slug}` }}
          secondary={{ label: 'تحدّث مع العمليات', href: '/ar/contact/' }}
        />
      </section>
    </>
  );
}
