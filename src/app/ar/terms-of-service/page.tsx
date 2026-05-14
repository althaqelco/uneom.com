import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { JsonLd } from '@/lib/seo/JsonLd';
import { webPageSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'شروط الخدمة — UNEOM',
  description: 'الشروط التي تحكم استخدام uneom.com والتعامل مع برامج الزي الموحّد من UNEOM.',
  alternates: {
    canonical: 'https://uneom.com/ar/terms-of-service/',
    languages: {
      en: 'https://uneom.com/terms-of-service/',
      'ar-SA': 'https://uneom.com/ar/terms-of-service/',
      'x-default': 'https://uneom.com/terms-of-service/'
    }
  }
};

export default function ArTermsPage() {
  const schema = webPageSchema({ path: '/ar/terms-of-service/', name: 'شروط الخدمة — UNEOM', description: 'شروط استخدام خدمات وبرامج الزي الموحّد من UNEOM.', dateModified: '2026-05-08' });
  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={[{ name: 'شروط الخدمة', path: '/ar/terms-of-service/' }]} />
      <article className="container-prose section">
        <header>
          <span className="eyebrow">قانوني</span>
          <h1 className="mt-5 text-display-xl text-navy-900 balance">شروط الخدمة</h1>
          <p className="mt-5 text-base text-ink-500">آخر تحديث: 2026-05-08 · الإصدار 1.0</p>
        </header>

        <section className="prose prose-slate mt-12 max-w-none">
          <h2 className="text-display text-navy-900">1. النطاق</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            تحكم هذه الشروط الوصول إلى واستخدام <a href="https://uneom.com" className="link">uneom.com</a>
            والتعامل مع برامج الزي الموحّد من UNEOM. باستخدامك للموقع أو تقديم طلب عرض سعر، فإنّك تقبل هذه الشروط.
          </p>

          <h2 className="mt-12 text-display text-navy-900">2. طلبات عروض الأسعار غير مُلزِمة</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            تقديم طلب عرض سعر لا يُشكّل طلباً أو عقداً مُلزِماً. UNEOM يردّ بمقترح برنامج خلال يوم عمل واحد؛
            تنطبق الشروط التعاقدية المُلزِمة فقط بعد تبادل عقد برنامج موقَّع.
          </p>

          <h2 className="mt-12 text-display text-navy-900">3. التسعير</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            جميع الأسعار المُدرجة على uneom.com هي أسعار برامج استرشادية بالريال السعودي (SAR)، لا تشمل ضريبة القيمة المضافة
            إلا إذا نُصّ على ذلك صراحةً. التسعير النهائي يعتمد على الحجم ومواصفات القماش والتخصيص ودورة تدوير البرنامج.
          </p>

          <h2 className="mt-12 text-display text-navy-900">4. الملكية الفكرية</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            جميع محتويات uneom.com — بما يشمل المقالات التحريرية والتصوير ومواصفات الأقمشة وترميز المخطط —
            ملك لـ UNEOM. المرجعية التحريرية مع الإسناد مسموح بها.
            تتطلّب إعادة الإنتاج التجاري موافقة كتابية. راجع <a href="/ar/license/" className="link">/ar/license/</a> للتفاصيل.
          </p>

          <h2 className="mt-12 text-display text-navy-900">5. الامتثال</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            UNEOM يعمل بموجب السجل التجاري السعودي ومسجّل للفواتير الإلكترونية ZATCA.
            جميع المعاملات تصدر فواتير متوافقة مع ZATCA. شهادات الامتثال المُشار إليها في الموقع
            (ISO 9001، OEKO-TEX) مدقَّق عليها باستقلالية وتُجدَّد سنوياً.
          </p>

          <h2 className="mt-12 text-display text-navy-900">6. المسؤولية</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            تُقدّم UNEOM الموقع كما هو وليست مسؤولة عن الأضرار غير المباشرة أو التبعية أو الخاصة الناجمة عن استخدام الموقع.
            تحكم المسؤولية التعاقدية بشكل حصري عقد البرنامج الموقَّع لكل عملية.
          </p>

          <h2 className="mt-12 text-display text-navy-900">7. القانون الحاكم</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            تخضع هذه الشروط لأنظمة المملكة العربية السعودية. تختصّ المحاكم السعودية بالنظر في النزاعات.
          </p>

          <h2 className="mt-12 text-display text-navy-900">8. التواصل</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            الاستفسارات القانونية: <a href="mailto:legal@uneom.com" className="link">legal@uneom.com</a>
          </p>
        </section>
      </article>
    </>
  );
}
