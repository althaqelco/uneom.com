import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'ممارسات الزي الموحد المستدام للشركات السعودية | مدونة يونيوم',
  titleAr: 'ممارسات الزي الموحد المستدام للشركات السعودية | مدونة يونيوم',
  description: 'دليل الشركات السعودية لتطبيق ممارسات أزياء مستدامة (Sustainable Uniform Practices). تعرف على كيفية تقليل الهدر النسيجي وإعادة تدوير ملابس العمل القديمة.',
  descriptionAr: 'دليل الشركات السعودية لتطبيق ممارسات أزياء مستدامة (Sustainable Uniform Practices). تعرف على كيفية تقليل الهدر النسيجي وإعادة تدوير ملابس العمل القديمة.',
  keywords: ['sustainable uniform practices saudi arabia', 'corporate clothing recycling', 'reduce textile waste ksa', 'eco friendly uniform program'],
  keywordsAr: ['ممارسات الزي المستدام', 'إعادة تدوير ملابس العمل', 'تقليل الهدر النسيجي', 'أزياء صديقة للبيئة للشركات', 'برنامج الزي الأخضر'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/blog/sustainable-uniform-practices'
});

export const dynamic = 'force-static';

export default function SustainableUniformPracticesBlogPageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المدونة', href: '/ar/blog' }, 
            { label: 'ممارسات الزي المستدام', href: '/ar/blog/sustainable-uniform-practices' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              كيف تطبق شركتك <span className="text-green-400">ممارسات الزي المستدام</span>؟
            </h1>
            <p className="text-xl text-green-200 leading-relaxed">
              خطوات عملية لمدراء الموارد البشرية لتقليل الهدر النسيجي وبناء برنامج زي موحد يتوافق مع مبادرة السعودية الخضراء.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg prose-green text-gray-800">
            <p className="lead text-xl text-gray-600 font-medium">
              الاستدامة في الزي الموحد لا تقتصر فقط على شراء ملابس من القطن العضوي. إنها "دورة حياة" (Lifecycle) كاملة تبدأ من تصميم الزي وتنتهي بكيفية التخلص منه بشكل آمن بيئياً.
            </p>

            <h2 className="text-2xl font-bold text-green-900 mt-10 mb-4 border-b pb-2">1. تصميم ذكي يقلل الاستهلاك (Smart Design)</h2>
            <p>
              يتم التخلص من الكثير من ملابس العمل بسبب تغير الهوية البصرية للشركة أو بسبب تلف أجزاء معينة منها فقط (مثل الياقة). الممارسات الذكية تشمل:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li><strong>تصاميم كلاسيكية لا تبطل موضتها:</strong> تجنب الألوان المفرطة والصيحات المؤقتة. الألوان الأساسية تعيش أطول وتسهل مطابقتها عند طلب دفعات جديدة.</li>
              <li><strong>شعارات قابلة للإزالة:</strong> للشركات التي تشهد معدل دوران موظفين مرتفع (High Turnover)، استخدام شعارات بنظام "الفيلكرو" (Velcro) أو الشارات المعدنية (Pins) يسمح بغسل الزي وإعادة منحه لموظف جديد بدلاً من التخلص منه.</li>
            </ul>

            <h2 className="text-2xl font-bold text-green-900 mt-10 mb-4 border-b pb-2">2. برامج الجمع وإعادة التدوير (Take-back Programs)</h2>
            <p>
              ماذا تفعل بالزي القديم عندما يغادر الموظف أو عندما تُحدث شركتك شعارها؟ رمي المنسوجات الممزوجة بالبوليستر في مكبات النفايات يضر بالبيئة بشدة.
            </p>
            <p>
              بدأت يونيوم بتطوير برامج شراكة مع المصانع المحلية لإعادة تدوير ملابس العمل المهلكة (Textile Recycling). يتم فرم هذه الملابس واستخدام الألياف الناتجة في صناعات أخرى مثل العوازل الحرارية لقطاع البناء والسيارات.
            </p>

            <h2 className="text-2xl font-bold text-green-900 mt-10 mb-4 border-b pb-2">3. التوريد المحلي لتقليل البصمة الكربونية</h2>
            <p>
              استيراد الزي الموحد من دول بعيدة عبر الشحن الجوي يساهم بشكل كبير في زيادة الانبعاثات الكربونية (Carbon Footprint). الاعتماد على مصانع وموردين محليين (Local Sourcing) في المملكة العربية السعودية لا يدعم الاقتصاد المحلي فحسب، بل يقلل بشكل جذري من التأثير البيئي لعملية النقل اللوجستي.
            </p>

            <div className="bg-green-50 p-8 rounded-xl border border-green-100 mt-12 text-center">
              <h3 className="text-2xl font-bold text-green-900 mb-4">هل ترغب في تقييم استدامة أزياء شركتك؟</h3>
              <p className="text-green-800 mb-6">
                يقدم فريق يونيوم خدمات تدقيق (Audit) لبرامج الزي الموحد الحالية في الشركات السعودية لتقديم توصيات تقلل الهدر والتكاليف على المدى الطويل.
              </p>
              <Link href="/ar/contact" className="inline-block bg-green-700 text-white px-8 py-3 rounded-md font-medium hover:bg-green-800 transition-colors">
                تواصل معنا لبناء برنامج زي مستدام
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
