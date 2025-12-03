import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'الزي الموحد في مكة المكرمة | يونيوم أزياء الحج والعمرة',
  titleAr: 'الزي الموحد في مكة المكرمة | يونيوم أزياء الحج والعمرة',
  description: 'UNEOM Mecca - Uniforms for Hajj/Umrah hospitality services.',
  descriptionAr: 'يونيوم مكة المكرمة - أزياء لخدمات ضيافة الحج والعمرة. زي الفنادق، الملابس الصحية، زي موظفي النقل في المدينة المقدسة. نخدم مقدمي خدمات الحجاج!',
  keywords: ['يونيفورم مكة', 'أزياء الحج', 'زي ضيافة العمرة'],
  keywordsAr: ['يونيفورم مكة', 'أزياء الحج', 'زي ضيافة العمرة', 'زي فنادق مكة', 'يونيوم مكة', 'ملابس خدمة الحجاج'],
  locale: 'ar',
  pageType: 'location',
  path: '/ar/locations/mecca',
  image: '/images/locations/mecca-uneom.jpg',
  imageAlt: 'يونيوم مكة - أزياء خدمات الحج والعمرة',
  aiSummary: 'UNEOM Mecca serves hospitality and service providers in the Holy City.',
  aiSummaryAr: 'يونيوم مكة تخدم مقدمي الضيافة والخدمات في المدينة المقدسة. متخصصون في أزياء ضيافة الحج والعمرة، فنادق قرب الحرم، خدمات النقل، مقدمي الرعاية الصحية، وخدمات الحجاج. توصيل سريع خلال مواسم الذروة.'
});

export const dynamic = 'force-static';

const meccaFAQsAr = [
  { question: 'هل يوفر يونيوم أزياء لمقدمي خدمات الحج في مكة؟', questionAr: 'هل يوفر يونيوم أزياء لمقدمي خدمات الحج في مكة؟', answer: 'Yes, we specialize in Hajj/Umrah uniforms.', answerAr: 'نعم، يتخصص يونيوم في أزياء مقدمي خدمات الحج والعمرة. نوفر للفنادق وشركات النقل وخدمات التموين ومقدمي الرعاية الصحية الذين يخدمون الحجاج في مكة.' },
  { question: 'هل يمكن ليونيوم التوصيل خلال موسم الحج؟', questionAr: 'هل يمكن ليونيوم التوصيل خلال موسم الحج؟', answer: 'Yes, we have special operations during peak seasons.', answerAr: 'نعم، نحافظ على عمليات خاصة خلال مواسم الحج والعمرة مع ساعات ممتدة وتوصيل سريع. ننصح بالطلب مسبقاً للمواسم المزدحمة.' },
  { question: 'ما أنواع الأزياء المطلوبة لضيافة مكة؟', questionAr: 'ما أنواع الأزياء المطلوبة لضيافة مكة؟', answer: 'Hotel, transport, catering, healthcare uniforms.', answerAr: 'ضيافة مكة تتطلب أزياء فنادق، ملابس موظفي النقل، أزياء التموين، ملابس صحية لعيادات الحجاج، وأزياء المرشدين. جميعها مصممة للراحة في الطقس الحار.' },
];

const services = [
  { icon: '🕌', title: 'ضيافة الحج/العمرة', desc: 'أزياء لمقدمي خدمات الحجاج' },
  { icon: '🏨', title: 'زي الفنادق', desc: 'ملابس لفنادق مكة قرب الحرم' },
  { icon: '🚌', title: 'موظفي النقل', desc: 'أزياء لخدمات نقل الحجاج' },
  { icon: '🏥', title: 'الملابس الصحية', desc: 'أزياء طبية لعيادات الزوار' },
  { icon: '🍽️', title: 'أزياء التموين', desc: 'ملابس خدمة الطعام لوجبات الحجاج' },
  { icon: '🎯', title: 'زي المرشدين', desc: 'أزياء للمرشدين الدينيين' },
];

export default function MeccaLocationPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الزي الموحد في مكة | يونيوم" titleAr="الزي الموحد في مكة المكرمة | يونيوم" description="UNEOM Mecca." descriptionAr="يونيوم مكة - أزياء لخدمات ضيافة الحج والعمرة." locale="ar" pageType="location" mainEntity="UNEOM Mecca" mainEntityAr="خدمات يونيوم مكة للأزياء" primaryImage="/images/locations/mecca-uneom.jpg" primaryImageAlt="يونيوم مكة" faqs={meccaFAQsAr} breadcrumbs={[{ name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' }, { name: 'Mecca', nameAr: 'مكة المكرمة', url: '/ar/locations/mecca' }]} serviceArea={['مكة', 'منى', 'عرفات', 'مزدلفة']} />

      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المواقع', href: '/ar/locations' }, { label: 'مكة', href: '/ar/locations/mecca' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-green-400">🕌</span><span className="text-sm font-medium">خدمات المدينة المقدسة</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأزياء الموحدة في <span className="bg-gradient-to-r from-green-300 to-emerald-300 text-transparent bg-clip-text">مكة المكرمة</span></h1>
              <p className="text-xl mb-8 text-green-100 leading-relaxed max-w-2xl">نخدم مقدمي ضيافة الحج والعمرة بأزياء عالية الجودة. فنادق، نقل، رعاية صحية، وخدمات تموين.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?location=mecca" variant="secondary" size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold border-0">احصل على عرض سعر لمكة ←</Button>
                <Button href="/ar/contact?location=mecca" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">تواصل معنا</Button>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"><Image src="/images/locations/mecca-cityscape.jpg" alt="مكة المكرمة" fill className="object-cover" priority /></div></div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="خدمات أزياء الحج والعمرة" centered>ما نقدمه في مكة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{services.map((service, index) => (<div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"><div className="text-4xl mb-4">{service.icon}</div><h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3><p className="text-gray-600 text-sm">{service.desc}</p></div>))}</div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم مكة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{meccaFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>
          <section className="text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">نخدم صناعة ضيافة مكة</h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">أزياء عالية الجودة لمقدمي خدمات الحج والعمرة.</p>
            <Link href="/ar/quote?location=mecca" className="inline-flex items-center px-8 py-4 bg-white text-green-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/locations/mecca" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}


