'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Case study data
const caseStudies = [
  {
    id: 'saudi-airlines',
    title: 'تجديد زي الخطوط السعودية',
    category: 'الطيران',
    summary: 'كيف ساعدنا الخطوط السعودية في تطوير زي موحد جديد يعكس التراث السعودي مع تلبية متطلبات الراحة والأداء.',
    image: '/images/aviation/aviation_crew_uniform_group.jpg',
    results: ['زيادة رضا الموظفين بنسبة 87%', 'تحسين التعرف على العلامة التجارية', 'تخفيض تكاليف الصيانة بنسبة 35%'],
    slug: 'saudi-airlines-uniform-redesign'
  },
  {
    id: 'riyadh-hilton',
    title: 'فنادق هيلتون الرياض',
    category: 'الضيافة',
    summary: 'تطوير برنامج زي موحد متكامل لفنادق هيلتون في الرياض يعكس الضيافة السعودية الأصيلة مع الحفاظ على معايير العلامة التجارية العالمية.',
    image: '/images/hospitality/hospitality_hotel_reception.jpg',
    results: ['تعزيز تجربة الضيوف', 'توحيد مظهر 450+ موظف', 'توفير 25% في تكاليف التوريد السنوية'],
    slug: 'riyadh-hilton-hotel-uniforms'
  },
  {
    id: 'king-fahad-medical-city',
    title: 'مدينة الملك فهد الطبية',
    category: 'الرعاية الصحية',
    summary: 'تزويد أكبر مجمع طبي في الرياض بأزياء طبية متخصصة تلبي متطلبات مكافحة العدوى والراحة في بيئة العمل المكثفة.',
    image: '/images/healthcare/healthcare_doctor_diverse_team.jpg',
    results: ['تقليل معدل العدوى المكتسبة من المستشفى', 'زيادة راحة الطاقم الطبي أثناء النوبات الطويلة', 'تحسين تمييز الأقسام المختلفة'],
    slug: 'king-fahad-medical-city-scrubs'
  },
  {
    id: 'sabic',
    title: 'سابك - برنامج الزي الموحد الشامل',
    category: 'الصناعة والبتروكيماويات',
    summary: 'تصميم وتنفيذ برنامج زي موحد شامل لشركة سابك يغطي المكاتب والمواقع الصناعية مع التركيز على السلامة والاستدامة.',
    image: '/images/corporate/corporate_uniform_group.jpg',
    results: ['توحيد هوية بصرية عبر 40+ موقع', 'تحسين معايير السلامة', 'تقليل البصمة الكربونية من خلال أقمشة مستدامة'],
    slug: 'sabic-comprehensive-uniform-program'
  },
  {
    id: 'neom-tourism',
    title: 'نيوم للسياحة',
    category: 'السياحة',
    summary: 'تطوير أزياء مبتكرة لفريق نيوم السياحي تعكس المستقبل مع الحفاظ على الهوية السعودية في مشروع عالمي طموح.',
    image: '/images/corporate/business_formal_presentation.jpg',
    results: ['إبراز هوية نيوم المستقبلية', 'استخدام تقنيات نسيج متطورة', 'تصميم يتكيف مع مختلف البيئات في المشروع'],
    slug: 'neom-tourism-uniforms'
  },
  {
    id: 'alrahji-bank',
    title: 'مصرف الراجحي',
    category: 'الخدمات المالية',
    summary: 'تحديث الزي الموحد لأكبر بنك إسلامي في العالم بما يعكس القيم الإسلامية والتطور المالي للمملكة.',
    image: '/images/corporate/corporate_diverse_team.jpg',
    results: ['زيادة ثقة العملاء', 'تصميم يعزز قيم العلامة التجارية', 'أزياء عملية تناسب مختلف الأدوار المصرفية'],
    slug: 'alrajhi-bank-uniform-modernization'
  },
];

export default function CaseStudiesPageArabic() {
  return (
    <div dir="rtl" className="bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              دراسات حالة
            </h1>
            <p className="text-xl text-white/90 mb-8">
              قصص نجاح حقيقية لعملائنا في المملكة العربية السعودية وكيف ساعدناهم في تطوير برامج زي موحد استثنائية
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading>
                نتائج ملموسة من خلال برامج الزي الموحد المتميزة
              </SectionHeading>
              <p className="text-lg text-neutral-700 mb-6">
                في يونيوم، نفخر بتقديم حلول زي موحد تحقق نتائج استثنائية لعملائنا. تستعرض دراسات الحالة هذه كيف ساعدنا مؤسسات رائدة في المملكة العربية السعودية على تحويل برامج الزي الموحد الخاصة بها إلى عناصر استراتيجية تعزز الهوية المؤسسية وتحسن تجربة الموظفين والعملاء.
              </p>
              <p className="text-neutral-700 mb-6">
                من شركات الطيران إلى المستشفيات، ومن الفنادق إلى المؤسسات المالية، استفاد عملاؤنا من نهجنا الشامل والمخصص لتطوير الزي الموحد الذي يراعي الاحتياجات الخاصة لكل قطاع والثقافة السعودية الفريدة.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden">
              <Image 
                src="/images/corporate/business_consultation.jpg" 
                alt="استشارات يونيوم للزي الموحد" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading centered>
            قصص نجاح عملائنا
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-16">
            اكتشف كيف ساعدنا المؤسسات الرائدة في المملكة العربية السعودية على تحقيق أهدافها من خلال برامج زي موحد متميزة
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-12">
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-neutral-50 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-neutral-600 mb-4">
                    {caseStudy.summary}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-neutral-800 mb-2">النتائج الرئيسية:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          <span className="text-sm text-neutral-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/ar/resources/case-studies/${caseStudy.slug}`}>
                    <Button className="w-full">قراءة دراسة الحالة الكاملة</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* By Industry Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            استكشف حسب القطاع
          </SectionHeading>
          <p className="text-center text-neutral-700 max-w-3xl mx-auto mb-12">
            تصفح دراسات الحالة حسب القطاع لمعرفة كيف ساعدنا المؤسسات في مجالك
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/ar/resources/case-studies/industry/healthcare" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/healthcare/healthcare_team.jpg" 
                    alt="دراسات حالة الرعاية الصحية" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">الرعاية الصحية</h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    كيف ساعدنا المستشفيات والعيادات على تطوير أزياء تعزز الثقة وتلبي متطلبات مكافحة العدوى
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/ar/resources/case-studies/industry/aviation" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/aviation/aviation_crew_terminal.jpg" 
                    alt="دراسات حالة الطيران" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">الطيران</h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    تجديد أزياء شركات الطيران وموظفي المطارات بما يعكس الهوية السعودية والمعايير العالمية
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/ar/resources/case-studies/industry/hospitality" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/hospitality/hospitality_hotel_lobby.jpg" 
                    alt="دراسات حالة الضيافة" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">الضيافة</h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    تطوير أزياء تعكس كرم الضيافة السعودية التقليدية مع تلبية احتياجات الفنادق والمطاعم العصرية
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/ar/resources/case-studies/industry/corporate" className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all group-hover:shadow-lg">
                <div className="relative h-48">
                  <Image 
                    src="/images/corporate/corporate_team_meeting.jpg" 
                    alt="دراسات حالة الشركات" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-primary-600 transition-colors">الشركات</h3>
                  <p className="text-sm text-neutral-600 mt-2">
                    كيف ساعدنا الشركات الرائدة على تعزيز هويتها المؤسسية من خلال برامج زي موحد متكاملة
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-700 text-white">
        <Container>
          <SectionHeading centered>
            <span className="text-white">ماذا يقول عملاؤنا</span>
          </SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-primary-300 mb-4">
                ★★★★★
              </div>
              <p className="italic mb-4">
                "استطاع فريق يونيوم فهم احتياجاتنا الفريدة وتطوير زي موحد يعكس هويتنا السعودية مع الحفاظ على المعايير العالمية. النتائج تجاوزت توقعاتنا من حيث جودة المنتج ورضا الموظفين."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold">
                  م.أ
                </div>
                <div className="ml-3">
                  <p className="font-semibold">م. أحمد القحطاني</p>
                  <p className="text-sm text-white/70">مدير العمليات، الخطوط السعودية</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-primary-300 mb-4">
                ★★★★★
              </div>
              <p className="italic mb-4">
                "المستوى المهني لفريق يونيوم كان استثنائياً. من مرحلة التصميم إلى التسليم، كانت العملية سلسة ومنظمة. ساعدونا في تحسين برنامج الزي الطبي بشكل شامل مع تحقيق وفورات كبيرة."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold">
                  د.ن
                </div>
                <div className="ml-3">
                  <p className="font-semibold">د. نورة العتيبي</p>
                  <p className="text-sm text-white/70">المدير الطبي، مستشفى الملك فهد</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-primary-300 mb-4">
                ★★★★★
              </div>
              <p className="italic mb-4">
                "بفضل يونيوم، أصبح الزي الموحد لفنادقنا جزءًا من تجربة الضيافة المتميزة التي نقدمها. الأقمشة عالية الجودة والتصميم المدروس ساهما في تطوير صورتنا وتحسين أداء فريقنا."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center font-bold">
                  س.م
                </div>
                <div className="ml-3">
                  <p className="font-semibold">سلطان المالكي</p>
                  <p className="text-sm text-white/70">مدير العمليات، فنادق الرياض</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">حان الوقت لتطوير قصة نجاح خاصة بمؤسستك</h2>
            <p className="text-lg text-neutral-700 mb-8">
              دعنا نساعدك في تطوير برنامج زي موحد يحقق نتائج استثنائية لمؤسستك. فريق الخبراء لدينا جاهز لدراسة احتياجاتك وتقديم حلول مخصصة تناسب قطاعك.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/ar/contact">
                <Button size="lg" className="w-full sm:w-auto">تحدث مع مستشار اليوم</Button>
              </Link>
              <Link href="/ar/resources/guides">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">استكشف أدلتنا</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered>
            الأسئلة الشائعة
          </SectionHeading>
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">كيف يمكنني أن أصبح دراسة حالة ناجحة تالية؟</h3>
              <p className="text-neutral-600">
                تبدأ العملية باستشارة أولية مع فريقنا لفهم احتياجاتك وأهدافك. سنعمل معك خلال كل مرحلة من مراحل تطوير برنامج الزي الموحد، من التصميم إلى التنفيذ. اتصل بنا اليوم لبدء رحلتك.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">هل يمكنكم العمل مع مؤسسات من جميع الأحجام؟</h3>
              <p className="text-neutral-600">
                نعم، لدينا خبرة في العمل مع مؤسسات من مختلف الأحجام، من الشركات الصغيرة إلى المؤسسات الكبرى. نقدم حلولاً مرنة تناسب احتياجاتك وميزانيتك.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">كم من الوقت يستغرق تطوير برنامج زي موحد كامل؟</h3>
              <p className="text-neutral-600">
                تختلف المدة حسب حجم ومتطلبات المشروع. بشكل عام، يمكن أن تستغرق العملية من 2-6 أشهر من التصميم المبدئي إلى التسليم النهائي. سنقدم لك جدولاً زمنياً مفصلاً خلال مرحلة التخطيط.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-3">هل تقدمون خدمات متابعة بعد تنفيذ المشروع؟</h3>
              <p className="text-neutral-600">
                نعم، نحن نؤمن بتطوير علاقات طويلة الأمد مع عملائنا. نقدم خدمات متابعة وصيانة لضمان استمرار نجاح برنامج الزي الموحد الخاص بك، بما في ذلك الإمداد المستمر والتحديثات وحلول إدارة المخزون.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 