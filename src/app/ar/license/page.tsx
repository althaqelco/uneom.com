import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'ترخيص الصور والمحتوى — UNEOM',
  description: 'شروط ترخيص التصوير التحريري لـ UNEOM وصور المنتجات وأصول العلامة التجارية.',
  alternates: {
    canonical: 'https://uneom.com/ar/license/',
    languages: {
      en: 'https://uneom.com/license/',
      'ar-SA': 'https://uneom.com/ar/license/',
      'x-default': 'https://uneom.com/license/'
    }
  }
};

export default function ArLicensePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'الترخيص', path: '/ar/license/' }]} />
      <article className="container-prose section">
        <header>
          <span className="eyebrow">قانوني</span>
          <h1 className="mt-5 text-display-xl text-navy-900 balance">ترخيص الصور والمحتوى</h1>
          <p className="mt-5 text-base text-ink-500">الشروط التي تحكم استخدام التصوير التحريري وصور المنتجات وأصول العلامة التجارية المنشورة على uneom.com.</p>
        </header>

        <section className="prose prose-slate mt-12 max-w-none">
          <h2 className="text-display text-navy-900">1. الملكية</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            جميع المحتويات الفوتوغرافية والتوضيحية والرسومية المنشورة على{' '}
            <code>https://uneom.com</code> ونطاقاتها الفرعية هي ملك لـ UNEOM
            (السجل التجاري السعودي معلق). تحمل كل صورة بيانات وصفية مضمّنة
            تُعلن UNEOM مبدعاً وصاحب حقوق.
          </p>

          <h2 className="mt-12 text-display text-navy-900">2. الاستخدام المسموح بلا إذن</h2>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>المرجعية التحريرية (مقالات الأخبار، الأبحاث الأكاديمية، تقارير الصناعة) مع الإسناد الصحيح لـ <em>UNEOM (uneom.com)</em>.</li>
            <li>الربط والتضمين عبر آليات الويب القياسية (مع الحفاظ على الإسناد).</li>
            <li>محرّكات البحث وزواحف تدريب الذكاء الاصطناعي ومُحقِّقو صحة المحتوى الذين يفهرسون المحتوى لأغراض البحث والتحقق.</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">3. مجموعة بيانات مؤشر الأسعار (CC BY 4.0)</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            مجموعة البيانات المنشورة على{' '}
            <a href="/ar/resources/uniform-price-index-ksa/" className="link">
              /ar/resources/uniform-price-index-ksa/
            </a>{' '}
            مرخّصة بموجب{' '}
            <a href="https://creativecommons.org/licenses/by/4.0/" rel="nofollow">
              Creative Commons Attribution 4.0 International
            </a>
            . صيغة الاستشهاد:
          </p>
          <blockquote>
            UNEOM (2026). Saudi Professional Uniform Price Index. Retrieved from
            https://uneom.com/resources/uniform-price-index-ksa/
          </blockquote>

          <h2 className="mt-12 text-display text-navy-900">4. الاستخدام المحظور</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">تستلزم الاستخدامات التالية موافقة كتابية مسبقة من UNEOM:</p>
          <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink-500">
            <li>إعادة الإنتاج التجاري أو إعادة التوزيع أو إعادة البيع</li>
            <li>التعديل أو الأعمال المشتقّة (بخلاف الاستخدام التحريري العادل)</li>
            <li>الاستخدام في الإعلانات أو الترويج أو أي سياق يُوحي بتأييد UNEOM</li>
            <li>تدريب نماذج الذكاء الاصطناعي أو ضبطها الدقيق دون موافقة صريحة مسبقة (وفق توجيهات <code>llms.txt</code>)</li>
          </ul>

          <h2 className="mt-12 text-display text-navy-900">5. أصول العلامة التجارية (الشعارات، العلامات الكلامية)</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            لا يُجوز استخدام شعارات UNEOM وعلاماتها الكلامية إلا للمرجعية التحريرية لـ UNEOM كشركة،
            دون الإيحاء بالشراكة أو التأييد. تعديل العلامات التجارية محظور.
          </p>

          <h2 className="mt-12 text-display text-navy-900">6. أصالة المحتوى</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            حيثما ينطبق، تحمل الصور بيانات اعتماد C2PA تُوقّع UNEOM ناشراً. يمكن التحقق من المصدر عبر{' '}
            <a href="https://contentcredentials.org/verify" rel="nofollow">
              مُحقِّق بيانات الاعتماد
            </a>
            . إزالة البيانات الوصفية المضمّنة أو التوقيعات أو التلاعب بها ينتهك هذا الترخيص.
          </p>

          <h2 className="mt-12 text-display text-navy-900">7. التواصل</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500 pretty">
            لاستفسارات الترخيص التي تتجاوز النطاق أعلاه، تواصل عبر{' '}
            <a href="mailto:legal@uneom.com">legal@uneom.com</a>.
          </p>

          <hr />
          <p className="text-sm text-ink-500">آخر تحديث: 2026-05-08. الإصدار 1.0.</p>
        </section>
      </article>
    </>
  );
}
