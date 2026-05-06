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
  title: 'الزي الموحد في جدة | يونيوم مورد الأزياء جدة السعودية',
  titleAr: 'الزي الموحد في جدة | يونيوم مورد الأزياء جدة السعودية',
  description: 'UNEOM Jeddah - Premium uniform supplier in Jeddah, Western Region.',
  descriptionAr: 'يونيوم جدة - مورد الأزياء الرائد في جدة والمنطقة الغربية. سكراب طبي، زي فنادق، ملابس شركات، زي مدرسي. نخدم جدة ومكة والمدينة. صالة عرض على شارع التحلية، توصيل سريع!',
  keywords: ['يونيفورم جدة', 'مورد أزياء جدة', 'سكراب طبي جدة'],
  keywordsAr: ['يونيفورم جدة', 'مورد أزياء جدة', 'سكراب طبي جدة', 'زي فنادق جدة', 'زي شركات جدة', 'أزياء الحج والعمرة', 'يونيوم جدة'],
  locale: 'ar',
  pageType: 'location',
  path: '/ar/locations/jeddah',
  image: '/images/locations/jeddah-uneom.jpg',
  imageAlt: 'يونيوم جدة - مورد الأزياء المنطقة الغربية',
  aiSummary: 'UNEOM Jeddah serves the Western Region.',
  aiSummaryAr: 'يونيوم جدة هي صالة عرض المنطقة الغربية تخدم جدة ومكة والمدينة والمناطق المحيطة. تقع على شارع التحلية، حي الأندلس. نقدم أزياء طبية، زي موظفي الفنادق، ملابس شركات، وزي مدرسي. خبرة خاصة في أزياء الضيافة لفنادق جدة وخدمات الحج والعمرة.'
});

export const dynamic = 'force-static';

const jeddahFAQsAr = [
  { question: 'أين يقع يونيوم في جدة؟', questionAr: 'أين يقع يونيوم في جدة؟', answer: 'UNEOM Jeddah is on Tahlia Street.', answerAr: 'تقع صالة عرض يونيوم جدة على شارع التحلية، حي الأندلس، جدة. نخدم جميع المنطقة الغربية بما فيها مكة والمدينة.' },
  { question: 'هل يوفر يونيوم جدة أزياء الفنادق؟', questionAr: 'هل يوفر يونيوم جدة أزياء الفنادق؟', answer: 'Yes, hospitality uniforms are our specialty.', answerAr: 'نعم، يتخصص يونيوم جدة في أزياء الضيافة للعديد من الفنادق والمنتجعات في المنطقة الغربية. نخدم سلاسل الفنادق الكبرى على ساحل البحر الأحمر ونوفر أزياء ضيافة الحج والعمرة.' },
  { question: 'هل يمكن ليونيوم التوصيل لمكة والمدينة من جدة؟', questionAr: 'هل يمكن ليونيوم التوصيل لمكة والمدينة من جدة؟', answer: 'Yes, we deliver to all Western Region.', answerAr: 'نعم، يوفر فرع جدة توصيل سريع لمكة والمدينة وجميع مدن المنطقة الغربية. نقدم توصيل في نفس اليوم للمناطق القريبة.' },
  { question: 'ما ساعات عمل يونيوم جدة؟', questionAr: 'ما ساعات عمل يونيوم جدة؟', answer: 'Sunday to Thursday, 9 AM - 6 PM.', answerAr: 'يونيوم جدة مفتوح من الأحد إلى الخميس، من 9:00 صباحاً إلى 6:00 مساءً. ساعات ممتدة خلال مواسم الحج والعمرة.' },
];

const locationData = { name: 'جدة', address: 'شارع التحلية، حي الأندلس، جدة 23432', phone: '+966 56 461 2017', email: 'jeddah@uneom.com', whatsapp: '+966564612017', workingHours: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً' };

const services = [
  { icon: '🏨', title: 'زي الفنادق', desc: 'أزياء ضيافة لفنادق ومنتجعات جدة' },
  { icon: '🏥', title: 'الأزياء الطبية', desc: 'ملابس صحية لمستشفيات جدة' },
  { icon: '🏢', title: 'الملابس المؤسسية', desc: 'زي شركات لشركات جدة' },
  { icon: '🕌', title: 'خدمات الحج/العمرة', desc: 'أزياء ضيافة لخدمات الحجاج' },
  { icon: '🎓', title: 'الزي المدرسي', desc: 'زي طلاب لمدارس جدة' },
  { icon: '🏭', title: 'الملابس الصناعية', desc: 'ملابس سلامة لمصانع جدة' },
];

export default function JeddahLocationPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الزي الموحد في جدة | يونيوم" titleAr="الزي الموحد في جدة | يونيوم" description="UNEOM Jeddah." descriptionAr="يونيوم جدة - المورد الرائد للأزياء في المنطقة الغربية." locale="ar" pageType="location" mainEntity="UNEOM Jeddah" mainEntityAr="متجر يونيوم جدة للأزياء" primaryImage="/images/locations/jeddah-uneom.jpg" primaryImageAlt="يونيوم جدة" faqs={jeddahFAQsAr} breadcrumbs={[{ name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' }, { name: 'Jeddah', nameAr: 'جدة', url: '/ar/locations/jeddah' }]} serviceArea={['جدة', 'مكة', 'المدينة', 'المنطقة الغربية']} />

      <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المواقع', href: '/ar/locations' }, { label: 'جدة', href: '/ar/locations/jeddah' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-cyan-400">🌊</span><span className="text-sm font-medium">صالة عرض المنطقة الغربية</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأزياء الموحدة في <span className="bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">جدة</span></h1>
              <p className="text-xl mb-6 text-blue-100 leading-relaxed max-w-2xl">يونيوم جدة تخدم المنطقة الغربية بأزياء فاخرة. متخصصون في الضيافة وخدمات الحج والعمرة.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3"><span>📍</span><span>{locationData.address}</span></div>
                  <div className="flex items-center gap-3"><span>📞</span><span dir="ltr">{locationData.phone}</span></div>
                  <div className="flex items-center gap-3"><span>📧</span><span>{locationData.email}</span></div>
                  <div className="flex items-center gap-3"><span>🕐</span><span>{locationData.workingHours}</span></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?location=jeddah" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold border-0">احصل على عرض سعر ←</Button>
                <Button href="/ar/contact?location=jeddah" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">زيارة صالة العرض</Button>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"><Image src="/images/locations/jeddah-cityscape.jpg" alt="جدة" fill className="object-cover" priority /></div></div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="ما نقدمه في جدة" centered>خدمات الأزياء المتوفرة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{services.map((service, index) => (<div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"><div className="text-4xl mb-4">{service.icon}</div><h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3><p className="text-gray-600 text-sm">{service.desc}</p></div>))}</div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم جدة</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{jeddahFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>
          <section className="text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">زوروا يونيوم جدة اليوم</h2>
            <p className="text-xl mb-8 text-blue-100">نخدم المنطقة الغربية بأزياء عالية الجودة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote?location=jeddah" className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
              <Link href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`} className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">واتساب</Link>
            </div>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/locations/jeddah" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}


