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
  title: 'الزي الموحد في المدينة المنورة | يونيوم أزياء الضيافة والفنادق',
  titleAr: 'الزي الموحد في المدينة المنورة | يونيوم أزياء الضيافة والفنادق',
  description: 'UNEOM Medina - Uniforms for hotels and hospitality near Prophet\'s Mosque.',
  descriptionAr: 'يونيوم المدينة المنورة - أزياء للفنادق والضيافة قرب المسجد النبوي. زي موظفي الفنادق، أزياء صحية، ملابس النقل. نخدم مقدمي خدمات الزوار!',
  keywords: ['يونيفورم المدينة', 'زي فنادق المدينة'],
  keywordsAr: ['يونيفورم المدينة', 'زي فنادق المدينة المنورة', 'ضيافة المدينة', 'يونيوم المدينة', 'أزياء خدمة الزوار'],
  locale: 'ar',
  pageType: 'location',
  path: '/ar/locations/medina',
  image: '/images/locations/medina-uneom.jpg',
  imageAlt: 'يونيوم المدينة المنورة',
  aiSummary: 'UNEOM Medina serves the hospitality sector in Al-Madinah Al-Munawwarah.',
  aiSummaryAr: 'يونيوم المدينة تخدم قطاع الضيافة في المدينة المنورة. توفير أزياء للفنادق قرب المسجد النبوي، خدمات نقل الزوار، المرافق الصحية، ومقدمي الضيافة الذين يخدمون زوار المدينة المقدسة.'
});

export const dynamic = 'force-static';

const medinaFAQsAr = [
  { question: 'هل يوفر يونيوم أزياء لفنادق المدينة؟', questionAr: 'هل يوفر يونيوم أزياء لفنادق المدينة؟', answer: 'Yes, we serve many hotels in Medina.', answerAr: 'نعم، يخدم يونيوم العديد من الفنادق في المدينة، خاصة تلك القريبة من المسجد النبوي. نقدم أزياء موظفي الفنادق والتدبير المنزلي والاستقبال.' },
  { question: 'هل يمكن ليونيوم التوصيل خلال موسم العمرة في المدينة؟', questionAr: 'هل يمكن ليونيوم التوصيل خلال موسم العمرة في المدينة؟', answer: 'Yes, express delivery from Jeddah branch.', answerAr: 'نعم، نحافظ على عمليات خاصة خلال المواسم المزدحمة مع توصيل سريع للمدينة من فرع جدة. ساعات ممتدة متاحة.' },
  { question: 'ما خدمات الأزياء المتوفرة في المدينة؟', questionAr: 'ما خدمات الأزياء المتوفرة في المدينة؟', answer: 'Hotel, healthcare, transport, restaurant uniforms.', answerAr: 'نقدم أزياء فنادق، ملابس صحية للعيادات، أزياء موظفي النقل، ملابس المطاعم، وأزياء المرشدين. جميعها مصممة للراحة في مناخ المدينة.' },
];

const services = [
  { icon: '🕌', title: 'زي الفنادق', desc: 'ملابس لفنادق المدينة قرب المسجد النبوي' },
  { icon: '🏨', title: 'أزياء الضيافة', desc: 'حلول أزياء ضيافة كاملة' },
  { icon: '🚌', title: 'موظفي النقل', desc: 'أزياء لخدمات نقل الزوار' },
  { icon: '🏥', title: 'الملابس الصحية', desc: 'أزياء طبية لعيادات الزوار' },
  { icon: '🍽️', title: 'أزياء المطاعم', desc: 'ملابس خدمة الطعام' },
  { icon: '🎯', title: 'زي المرشدين', desc: 'أزياء مهنية للمرشدين' },
];

export default function MedinaLocationPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الزي الموحد في المدينة | يونيوم" titleAr="الزي الموحد في المدينة المنورة | يونيوم" description="UNEOM Medina." descriptionAr="يونيوم المدينة - أزياء للفنادق والضيافة." locale="ar" pageType="location" mainEntity="UNEOM Medina" mainEntityAr="خدمات يونيوم المدينة للأزياء" primaryImage="/images/locations/medina-uneom.jpg" primaryImageAlt="يونيوم المدينة" faqs={medinaFAQsAr} breadcrumbs={[{ name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' }, { name: 'Medina', nameAr: 'المدينة المنورة', url: '/ar/locations/medina' }]} serviceArea={['المدينة المنورة', 'منطقة المدينة']} />

      <section className="bg-gradient-to-br from-teal-900 via-emerald-800 to-green-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المواقع', href: '/ar/locations' }, { label: 'المدينة', href: '/ar/locations/medina' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-emerald-400">🕌</span><span className="text-sm font-medium">خدمات المدينة</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأزياء الموحدة في <span className="bg-gradient-to-r from-emerald-300 to-green-300 text-transparent bg-clip-text">المدينة المنورة</span></h1>
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed max-w-2xl">نخدم صناعة الضيافة في المدينة المنورة. أزياء عالية الجودة للفنادق وخدمات الزوار.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?location=medina" variant="secondary" size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 text-white font-bold border-0">احصل على عرض سعر للمدينة ←</Button>
                <Button href="/ar/contact?location=medina" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-900">تواصل معنا</Button>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"><Image src="/images/locations/medina-cityscape.jpg" alt="المدينة المنورة" fill className="object-cover" priority /></div></div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="خدمات أزياء الضيافة" centered>ما نقدمه في المدينة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{services.map((service, index) => (<div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"><div className="text-4xl mb-4">{service.icon}</div><h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3><p className="text-gray-600 text-sm">{service.desc}</p></div>))}</div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم المدينة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{medinaFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>
          <section className="text-center bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">نخدم صناعة ضيافة المدينة</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">أزياء عالية الجودة للفنادق ومقدمي خدمات الزوار.</p>
            <Link href="/ar/quote?location=medina" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/locations/medina" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}


