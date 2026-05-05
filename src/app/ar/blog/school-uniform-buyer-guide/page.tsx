import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'دليل مدراء المدارس لاختيار وشراء الزي المدرسي | مدونة يونيوم',
  titleAr: 'دليل مدراء المدارس لاختيار وشراء الزي المدرسي | مدونة يونيوم',
  description: 'كيف تخطط المدارس الأهلية والدولية في السعودية لتوريد الزي المدرسي؟ دليل شامل لمدراء المدارس يشمل الجداول الزمنية، اختيار الأقمشة المريحة، وإدارة التوزيع لأولياء الأمور.',
  descriptionAr: 'كيف تخطط المدارس الأهلية والدولية في السعودية لتوريد الزي المدرسي؟ دليل شامل لمدراء المدارس يشمل الجداول الزمنية، اختيار الأقمشة المريحة، وإدارة التوزيع لأولياء الأمور.',
  keywords: ['school uniform buyer guide saudi arabia', 'international school attire riyadh', 'education uniform procurement ksa', 'school uniform distribution'],
  keywordsAr: ['شراء الزي المدرسي', 'دليل مدراء المدارس', 'يونيفورم مدارس أهلية', 'مواصفات ملابس الطلاب', 'توريد أزياء المدارس'],
  locale: 'ar', 
  pageType: 'article', 
  path: '/ar/blog/school-uniform-buyer-guide'
});

export const dynamic = 'force-static';

export default function SchoolUniformBuyerGuideBlogPageAr() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-950 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' }, 
            { label: 'المدونة', href: '/ar/blog' }, 
            { label: 'دليل الزي المدرسي', href: '/ar/blog/school-uniform-buyer-guide' }
          ]} className="text-white/80 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              دليل مدراء المدارس لاختيار <span className="text-blue-300">الزي المدرسي</span> وتوريده
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              من اختيار الأقمشة المناسبة لجو السعودية إلى التوزيع السلس على أولياء الأمور.. كيف تضمن المدارس الدولية والأهلية موسماً خالياً من أزمات الزي الموحد.
            </p>
          </div>
        </Container>
      </section>
      
      <main className="py-16" dir="rtl">
        <Container>
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue text-gray-800">
            <p className="lead text-xl text-gray-600 font-medium">
              بالنسبة للمدارس الأهلية والدولية، الزي المدرسي ليس مجرد ملابس، بل هو انعكاس لقيم المدرسة، انضباطها، وهويتها البصرية في المجتمع. لكن عملية الشراء والتوريد يمكن أن تكون كابوساً لوجستياً إذا لم يتم التخطيط لها بشكل سليم.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4 border-b pb-2">1. الجداول الزمنية: متى يجب أن تبدأ؟</h2>
            <p>
              أكبر خطأ تقع فيه المدارس هو التأخر في طلب الزي الموحد. الجدول الزمني المثالي (للمدارس التي تبدأ في أواخر أغسطس/سبتمبر) هو:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li><strong>فبراير - مارس:</strong> اعتماد التصاميم النهائية، الألوان، وأنواع الأقمشة.</li>
              <li><strong>أبريل:</strong> حصر أعداد الطلاب المتوقعة وتأكيد طلبات الشراء (PO) مع المصنع.</li>
              <li><strong>مايو - يونيو:</strong> بدء الإنتاج الشامل والتطريز.</li>
              <li><strong>يوليو:</strong> تسليم الأزياء لمستودعات المدرسة للبدء في تنظيمها.</li>
              <li><strong>أغسطس:</strong> فتح باب التوزيع لأولياء الأمور قبل زحام العودة للمدارس.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4 border-b pb-2">2. اختيار الأقمشة: راحة الطالب أولاً</h2>
            <p>
              يُمضي الطالب حوالي 7-8 ساعات يومياً بالزي المدرسي. في مناخ السعودية، يجب التركيز على:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li><strong>البولي-قطن (Poly-Cotton Blends):</strong> المزيج المثالي (عادة 60% قطن، 40% بوليستر)؛ القطن يوفر النعومة والتهوية، والبوليستر يمنع التكسر المتكرر ويطيل عمر الملابس.</li>
              <li><strong>المعالجة ضد الوبر (Anti-Pilling):</strong> لضمان بقاء الملابس بمظهر جديد حتى بعد عشرات الغسلات.</li>
              <li><strong>المعالجة ضد البقع (Teflon Coated):</strong> خاصة لمراحل الروضة والابتدائي لتسهيل تنظيف الزي من بقع الألوان والطعام.</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4 border-b pb-2">3. التوزيع اللوجستي وراحة أولياء الأمور</h2>
            <p>
              توزيع الزي يسبب صداعاً سنوياً للمدارس وأولياء الأمور. للتغلب على ذلك، تقدم يونيوم خدمة مبتكرة للمدارس عبر <strong>المتاجر الإلكترونية المخصصة (B2C Portals)</strong>، حيث:
            </p>
            <ul className="list-disc pr-6 space-y-2">
              <li>يتم إنشاء صفحة متجر إلكتروني تحمل شعار المدرسة ومخصصة لطلابها فقط.</li>
              <li>يقوم ولي الأمر بالدخول، اختيار المرحلة الدراسية، تحديد المقاس، والدفع إلكترونياً.</li>
              <li>يتم شحن الزي مباشرة إلى منزل الطالب، مما يلغي تماماً الطوابير المزدحمة في ساحة المدرسة ويخفف العبء الإداري.</li>
            </ul>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mt-12 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">هل ترغب بتطوير الزي المدرسي وتسهيل توريده؟</h3>
              <p className="text-blue-800 mb-6">
                شراكتك مع يونيوم تعني التزاماً تاماً بالجودة ومواعيد التسليم الدقيقة. دعنا نهتم بملابس طلابك لتتفرغ أنت لتعليمهم.
              </p>
              <Link href="/ar/shop/education" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors">
                تصفح تشكيلة المدارس والجامعات
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
