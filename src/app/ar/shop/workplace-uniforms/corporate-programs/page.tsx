import React from 'react';
import { Metadata } from 'next';
import { generateMetadata2026 } from '@/lib/seo-2026';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = generateMetadata2026({
  title: 'برامج زي الشركات الموحد | حلول الأعمال في السعودية',
  titleAr: 'برامج زي الشركات الموحد | حلول الأعمال في السعودية',
  description: 'برامج زي موحد قابلة للتطوير للشركات الكبرى في السعودية. حلول أعمال متكاملة (B2B) تشمل التوريد، التصميم المخصص، وبوابات طلب الموظفين.',
  descriptionAr: 'برامج زي موحد قابلة للتطوير للشركات الكبرى في السعودية. حلول أعمال متكاملة (B2B) تشمل التوريد، التصميم المخصص، وبوابات طلب الموظفين.',
  keywords: ['برامج زي الشركات', 'حلول الزي الموحد (B2B)', 'توريد ملابس شركات', 'إدارة أزياء الموظفين', 'عقود الزي الموحد السنوية'],
  keywordsAr: ['برامج زي الشركات', 'حلول الزي الموحد (B2B)', 'توريد ملابس شركات', 'إدارة أزياء الموظفين', 'عقود الزي الموحد السنوية'],
  locale: 'ar',
  pageType: 'product',
  path: '/ar/shop/workplace-uniforms/corporate-programs'
});

export const dynamic = 'force-static';

export default function CorporateProgramsPageAr() {
  return (
    <>
      <section className="bg-blue-900 text-white" dir="rtl">
        <Container>
          <Breadcrumbs items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المتجر', href: '/ar/shop' },
            { label: 'أزياء العمل', href: '/ar/shop/workplace-uniforms' },
            { label: 'برامج الشركات', href: '/ar/shop/workplace-uniforms/corporate-programs' }
          ]} className="text-blue-200 mb-6 pt-8" />
          <div className="py-16 lg:py-24 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              برامج إدارة <span className="text-amber-500">الزي الموحد للشركات</span>
            </h1>
            <p className="text-xl text-blue-100">
              حلول متكاملة (B2B) لقطاع الأعمال مصممة لتبسيط عمليات المشتريات، فرض اتساق الهوية البصرية، وإدارة مخصصات الموظفين لأكبر الشركات في المملكة العربية السعودية.
            </p>
          </div>
        </Container>
      </section>

      <main className="py-16" dir="rtl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-neutral-900">إدارة أزياء بمستوى المؤسسات الكبرى</h2>
              <div className="prose prose-lg text-neutral-600 font-medium">
                <p>
                  تعد إدارة الزي الموحد لمئات أو آلاف الموظفين عبر فروع متعددة في السعودية تحدياً لوجستياً معقداً. برامج الشركات المدارة من يونيوم تزيل عبء المشتريات، إدارة المخزون، والتوزيع عن كاهل فرق الموارد البشرية (HR) وإدارة المشتريات لديك.
                </p>
                <p>
                  نحن نعمل كشريك استراتيجي وحصري لإدارة أزيائك، مقدمين عملية سلسة تبدأ من مرحلة التصميم الأولية وصولاً إلى التسليم النهائي للموظف.
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">مزايا البرنامج</h3>
                <ul className="list-disc pr-6 space-y-2">
                  <li><strong>بوابات إلكترونية مخصصة للموظفين:</strong> بوابة تجارة إلكترونية خاصة تحمل هوية شركتك، حيث يمكن لموظفيك طلب مخصصاتهم السنوية مباشرة باستخدام نظام النقاط أو القسائم (Vouchers).</li>
                  <li><strong>إدارة المخزون (Inventory Management):</strong> نحتفظ بمخزون أمان (Safety Stock) في مستودعاتنا في الرياض وجدة لضمان التجهيز السريع للموظفين الجدد (Onboarding).</li>
                  <li><strong>تجهيز متعدد الأقسام:</strong> الحفاظ على هوية بصرية موحدة عبر أدوار وظيفية مختلفة - من الإدارة التنفيذية إلى فرق اللوجستيات والصيانة.</li>
                  <li><strong>فواتير موحدة وتقارير:</strong> نظام فوترة مركزي وشفاف مع تقارير تفصيلية لكل قسم لمساعدتك على تتبع وتحسين إنفاق الشركة على الأزياء.</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-900">تحدث مع خبير قطاع الشركات</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-1">اسم الشركة / المؤسسة</label>
                  <input type="text" className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="أدخل اسم الشركة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-1">إجمالي عدد الموظفين</label>
                  <select className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>100 - 500 موظف</option>
                    <option>500 - 2,000 موظف</option>
                    <option>2,000 - 5,000 موظف</option>
                    <option>أكثر من 5,000 موظف</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-800 mb-1">التحدي الحالي (الهدف من البرنامج)</label>
                  <select className="w-full p-3 border border-blue-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option>عدم تناسق مظهر الهوية البصرية</option>
                    <option>مشاكل لوجستية في التوزيع والتخزين</option>
                    <option>تكاليف عالية وجودة متدنية</option>
                    <option>إطلاق هوية بصرية جديدة للشركة</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-amber-600 text-white font-bold py-3 rounded-md hover:bg-amber-700 transition">
                  طلب استشارة لحلول الأعمال (B2B)
                </button>
              </form>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
