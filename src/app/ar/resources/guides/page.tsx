'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function GuidesPageArabic() {
  return (
    <div dir="rtl" className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              أدلة يونيوم الشاملة للزي الموحد
            </h1>
            <p className="text-xl text-white/90 mb-8">
              موارد متخصصة لمساعدة مؤسستك على تحقيق أقصى استفادة من برنامج الزي الموحد الخاص بك في المملكة العربية السعودية
            </p>
          </div>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>
                مجموعة شاملة من الأدلة المخصصة لبرامج الزي الموحد
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-6">
                تقدم أدلة يونيوم المتخصصة معلومات قيمة ونصائح عملية بناءً على خبرتنا الواسعة في تصميم وتنفيذ برامج الزي الموحد في جميع أنحاء المملكة العربية السعودية. توفر هذه الموارد رؤى مفصلة تساعد المؤسسات على اتخاذ قرارات مستنيرة وتطوير برامج زي موحد ناجحة.
              </p>
              <p className="text-neutral-700 mb-6">
                سواء كنت تبحث عن معلومات حول أنواع الأقمشة، أو الحجم المناسب، أو أفضل الممارسات في الشراء، أو نماذج لسياسات الزي الموحد، فإن أدلتنا المتخصصة توفر الإرشادات التي تحتاجها لتحقيق النجاح.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/Fabric_Guide.jpg" 
                alt="دليل الأقمشة من يونيوم" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Guides */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            أدلتنا المتخصصة
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            تصفح مجموعتنا من الأدلة الشاملة المصممة لمساعدتك في تطوير وإدارة برنامج الزي الموحد المثالي لمؤسستك
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Guide 1 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/CottonـandـCottonـBlends.jpg" 
                  alt="دليل الأقمشة" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">دليل الأقمشة</h3>
                <p className="text-neutral-600 mb-6">
                  تعرف على مختلف أنواع الأقمشة المستخدمة في الزي الموحد، وخصائصها، ومزاياها ومناسبتها للمناخ السعودي والصناعات المختلفة.
                </p>
                <Link href="/ar/resources/fabric-guide">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/sewing-machines-nobody-dressmaker-equipment-2024-12-04-15-11-57-utc.jpg" 
                  alt="دليل المقاسات" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">دليل المقاسات</h3>
                <p className="text-neutral-600 mb-6">
                  فهم مخططات المقاسات، وكيفية الحصول على القياسات الدقيقة، وأفضل الممارسات لضمان ملاءمة مثالية لجميع الموظفين.
                </p>
                <Link href="/ar/resources/size-guide">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>

            {/* Guide 3 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/caucasian-delivery-man-checking-a-list-of-deliveri-2025-01-30-20-43-07-utc.jpg" 
                  alt="دليل المشتريات" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">دليل المشتريات</h3>
                <p className="text-neutral-600 mb-6">
                  استراتيجيات فعالة لشراء الزي الموحد، بما في ذلك الميزانية، والتخطيط، وإدارة المخزون، وتحقيق أفضل قيمة لاستثمارك.
                </p>
                <Link href="/ar/resources/procurement-guide">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>

            {/* Guide 4 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/corporate/corporate_uniform_office.jpg" 
                  alt="نماذج سياسات الزي الموحد" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">نماذج سياسات الزي الموحد</h3>
                <p className="text-neutral-600 mb-6">
                  نماذج قابلة للتخصيص لسياسات الزي الموحد للمؤسسات، مع إرشادات لتطبيقها بما يتناسب مع الثقافة السعودية ومتطلبات العمل.
                </p>
                <Link href="/ar/resources/policy-templates">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>

            {/* Guide 5 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/zipper-on-clothes-2025-02-22-02-05-22-utc.jpg" 
                  alt="دليل العناية بالزي الموحد" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">دليل العناية بالزي الموحد</h3>
                <p className="text-neutral-600 mb-6">
                  نصائح وإرشادات عملية للحفاظ على جودة ومظهر الزي الموحد لفترة أطول، مع مراعاة الظروف المناخية في المملكة.
                </p>
                <Link href="/ar/resources/uniform-care-guide">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>

            {/* Guide 6 */}
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-56">
                <Image 
                  src="/images/arabian-businessman-wearing-traditional-clothes-while-using-smartphone-at-home-SBI-350765162.jpg" 
                  alt="دليل الزي السعودي التقليدي في بيئة العمل" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">دليل الزي السعودي في بيئة العمل</h3>
                <p className="text-neutral-600 mb-6">
                  إرشادات لدمج العناصر التقليدية السعودية في الزي الموحد المؤسسي، بما يحقق التوازن بين الهوية الثقافية والأداء المهني.
                </p>
                <Link href="/ar/resources/saudi-business-attire-guide">
                  <Button className="w-full">استكشف الدليل</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industries-specific Guides */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            أدلة متخصصة حسب القطاع
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            موارد مخصصة تستهدف احتياجات الزي الموحد المحددة للقطاعات المختلفة في المملكة العربية السعودية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Healthcare */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="/images/healthcare/healthcare_doctor_consultation.jpg" 
                  alt="أدلة الرعاية الصحية" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">الرعاية الصحية</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  أدلة متخصصة حول الأزياء الطبية ومكافحة العدوى ومتطلبات الأقمشة المضادة للميكروبات.
                </p>
                <Link href="/ar/resources/guides/healthcare" className="text-primary-600 hover:text-primary-700 font-medium">
                  استكشف الأدلة &larr;
                </Link>
              </div>
            </div>

            {/* Hospitality */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="/images/hospitality/hospitality_hotel_uniform.jpg" 
                  alt="أدلة الضيافة" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">الضيافة</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  موارد حول أزياء الفنادق والمطاعم والخدمات السياحية بما يعكس ضيافة المملكة.
                </p>
                <Link href="/ar/resources/guides/hospitality" className="text-primary-600 hover:text-primary-700 font-medium">
                  استكشف الأدلة &larr;
                </Link>
              </div>
            </div>

            {/* Aviation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="/images/aviation/aviation_captin_uniform.jpg" 
                  alt="أدلة الطيران" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">الطيران</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  إرشادات حول أزياء طاقم الطائرة وموظفي المطار بما يتوافق مع معايير الخطوط السعودية.
                </p>
                <Link href="/ar/resources/guides/aviation" className="text-primary-600 hover:text-primary-700 font-medium">
                  استكشف الأدلة &larr;
                </Link>
              </div>
            </div>

            {/* Corporate */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="/images/corporate/corporate_uniform_group.jpg" 
                  alt="أدلة الشركات" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">الشركات</h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  موارد لتطوير برامج الزي الموحد المؤسسي التي تعزز الهوية المؤسسية والاحترافية.
                </p>
                <Link href="/ar/resources/guides/corporate" className="text-primary-600 hover:text-primary-700 font-medium">
                  استكشف الأدلة &larr;
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">هل تحتاج إلى مساعدة متخصصة؟</h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
              فريق الخبراء لدينا جاهز لتقديم استشارات مخصصة حول برنامج الزي الموحد الخاص بمؤسستك. اتصل بنا اليوم للحصول على معلومات متخصصة ومخصصة لاحتياجاتك الفريدة.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/ar/contact">
                <Button size="lg" className="w-full sm:w-auto">اتصل بمستشار الزي الموحد</Button>
              </Link>
              <Link href="/ar/shop">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">استكشف منتجاتنا</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container>
          <SectionHeading centered>
            الأسئلة الشائعة
          </SectionHeading>
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">هل يمكنني تحميل الأدلة واستخدامها داخل مؤسستي؟</h3>
              <p className="text-neutral-600">
                نعم، نحن نشجع المؤسسات على تحميل أدلتنا واستخدامها كموارد داخلية. يمكنك استخدامها للتدريب وتطوير سياسات الزي الموحد. نرجو فقط الإشارة إلى يونيوم كمصدر للمعلومات.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">هل الأدلة متوفرة بلغات أخرى غير العربية والإنجليزية؟</h3>
              <p className="text-neutral-600">
                حالياً، تتوفر أدلتنا باللغتين العربية والإنجليزية فقط. إذا كنت تحتاج إلى ترجمات بلغات أخرى، يرجى التواصل معنا للحصول على مساعدة متخصصة.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">هل يمكنني طلب دليل مخصص لصناعة أو احتياجات محددة؟</h3>
              <p className="text-neutral-600">
                بالتأكيد! نحن نقدم خدمات تطوير أدلة مخصصة للمؤسسات ذات الاحتياجات الخاصة. اتصل بفريق الاستشارات لدينا لمناقشة متطلباتك المحددة وكيف يمكننا مساعدتك.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">كم مرة يتم تحديث هذه الأدلة؟</h3>
              <p className="text-neutral-600">
                نحن نراجع ونحدث أدلتنا بانتظام، عادةً على أساس سنوي أو عندما تتغير معايير الصناعة أو التكنولوجيا بشكل كبير. تحمل جميع الأدلة تاريخ آخر تحديث لمساعدتك في تتبع أحدث المعلومات.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 