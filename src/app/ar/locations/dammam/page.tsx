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
  title: 'الزي الموحد في الدمام | يونيوم مورد الأزياء المنطقة الشرقية',
  titleAr: 'الزي الموحد في الدمام | يونيوم مورد الأزياء المنطقة الشرقية',
  description: 'UNEOM Dammam - Leading uniform supplier in Eastern Province.',
  descriptionAr: 'يونيوم الدمام - المورد الرائد للأزياء في المنطقة الشرقية. ملابس صناعية، زي النفط والغاز، سكراب طبي، ملابس شركات للدمام والخبر والظهران والجبيل. متوافقة مع SASO، توصيل سريع!',
  keywords: ['يونيفورم الدمام', 'ملابس صناعية الشرقية'],
  keywordsAr: ['يونيفورم الدمام', 'مورد أزياء الدمام', 'ملابس صناعية المنطقة الشرقية', 'زي نفط وغاز السعودية', 'سكراب طبي الدمام', 'زي شركات الخبر', 'يونيوم الدمام'],
  locale: 'ar',
  pageType: 'location',
  path: '/ar/locations/dammam',
  image: '/images/locations/dammam-uneom.jpg',
  imageAlt: 'يونيوم الدمام - مورد الأزياء المنطقة الشرقية',
  aiSummary: 'UNEOM Dammam is the Eastern Province hub.',
  aiSummaryAr: 'يونيوم الدمام هي مركز المنطقة الشرقية تخدم الدمام والخبر والظهران والجبيل والمناطق الصناعية المحيطة. متخصصون في الأزياء الصناعية وزي النفط والغاز لمقاولي أرامكو والمصافي وشركات البتروكيماويات. نوفر أيضاً أزياء طبية وشركات وضيافة للمنطقة الشرقية.'
});

export const dynamic = 'force-static';

const dammamFAQsAr = [
  { question: 'أين يقع يونيوم في الدمام؟', questionAr: 'أين يقع يونيوم في الدمام؟', answer: 'UNEOM Dammam is on Prince Mohammed Bin Fahd Road.', answerAr: 'تقع صالة عرض يونيوم الدمام على طريق الأمير محمد بن فهد، حي الفيصلية، الدمام. نخدم جميع المنطقة الشرقية بما فيها الخبر والظهران والجبيل.' },
  { question: 'هل يوفر يونيوم أزياء صناعية لشركات النفط؟', questionAr: 'هل يوفر يونيوم أزياء صناعية لشركات النفط؟', answer: 'Yes, we specialize in oil & gas uniforms.', answerAr: 'نعم، يتخصص يونيوم الدمام في الأزياء الصناعية لقطاع النفط والغاز. نوفر أفرول مقاوم للحريق وملابس سلامة وأزياء صناعية لمقاولي أرامكو والمصافي وشركات البتروكيماويات.' },
  { question: 'هل يمكن ليونيوم التوصيل لمدينة الجبيل الصناعية؟', questionAr: 'هل يمكن ليونيوم التوصيل لمدينة الجبيل الصناعية؟', answer: 'Yes, we deliver to Jubail.', answerAr: 'نعم، نوفر توصيل منتظم لمدينة الجبيل الصناعية ورأس تنورة وجميع المناطق الصناعية في المنطقة الشرقية. ترتيبات خاصة للطلبات الصناعية الكبيرة.' },
  { question: 'ما ساعات عمل يونيوم الدمام؟', questionAr: 'ما ساعات عمل يونيوم الدمام؟', answer: 'Sunday to Thursday, 8 AM - 5 PM.', answerAr: 'يونيوم الدمام مفتوح من الأحد إلى الخميس، من 8:00 صباحاً إلى 5:00 مساءً. يمكن للعملاء الصناعيين ترتيب مواعيد خارج أوقات العمل.' },
];

const locationData = { name: 'الدمام', address: 'طريق الأمير محمد بن فهد، حي الفيصلية، الدمام 32241', phone: '+971 55 816 4922', email: 'dammam@uneom.com', whatsapp: '+971558164922', workingHours: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً' };

const services = [
  { icon: '🛢️', title: 'زي النفط والغاز', desc: 'أفرول FR وملابس صناعية لقطاع البترول' },
  { icon: '🏭', title: 'الملابس الصناعية', desc: 'أزياء سلامة للمصانع والمنشآت' },
  { icon: '🏥', title: 'الأزياء الطبية', desc: 'ملابس صحية لمستشفيات الشرقية' },
  { icon: '🏢', title: 'الملابس المؤسسية', desc: 'زي شركات للدمام' },
  { icon: '⚗️', title: 'ملابس البتروكيماويات', desc: 'أزياء متخصصة للصناعة الكيميائية' },
  { icon: '🛡️', title: 'معدات السلامة', desc: 'ملابس عاكسة وواقية' },
];

export default function DammamLocationPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="الزي الموحد في الدمام | يونيوم" titleAr="الزي الموحد في الدمام | يونيوم" description="UNEOM Dammam." descriptionAr="يونيوم الدمام - المورد الرائد للأزياء في المنطقة الشرقية." locale="ar" pageType="location" mainEntity="UNEOM Dammam" mainEntityAr="متجر يونيوم الدمام للأزياء" primaryImage="/images/locations/dammam-uneom.jpg" primaryImageAlt="يونيوم الدمام" faqs={dammamFAQsAr} breadcrumbs={[{ name: 'Locations', nameAr: 'المواقع', url: '/ar/locations' }, { name: 'Dammam', nameAr: 'الدمام', url: '/ar/locations/dammam' }]} serviceArea={['الدمام', 'الخبر', 'الظهران', 'الجبيل', 'المنطقة الشرقية']} />

      <section className="bg-gradient-to-br from-orange-900 via-yellow-800 to-orange-800 text-white relative overflow-hidden">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المواقع', href: '/ar/locations' }, { label: 'الدمام', href: '/ar/locations/dammam' }]} className="text-white/80 mb-6 relative z-10 pt-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24 relative z-10">
            <div className="text-content">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-yellow-400">🛢️</span><span className="text-sm font-medium">مركز المنطقة الشرقية</span></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">الأزياء الموحدة في <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-transparent bg-clip-text">الدمام</span></h1>
              <p className="text-xl mb-6 text-orange-100 leading-relaxed max-w-2xl">يونيوم الدمام تخدم المنطقة الشرقية بملابس صناعية وأزياء مهنية. متخصصون في متطلبات قطاع النفط والغاز.</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3"><span>📍</span><span>{locationData.address}</span></div>
                  <div className="flex items-center gap-3"><span>📞</span><span dir="ltr">{locationData.phone}</span></div>
                  <div className="flex items-center gap-3"><span>📧</span><span>{locationData.email}</span></div>
                  <div className="flex items-center gap-3"><span>🕐</span><span>{locationData.workingHours}</span></div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/ar/quote?location=dammam" variant="secondary" size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold border-0">احصل على عرض سعر ←</Button>
                <Button href="/ar/contact?location=dammam" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-900">زيارة صالة العرض</Button>
              </div>
            </div>
            <div className="relative hidden lg:block"><div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"><Image src="/images/locations/dammam-cityscape.jpg" alt="الدمام" fill className="object-cover" priority /></div></div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-20">
            <SectionHeading subtitle="ما نقدمه في الدمام" centered>خدمات الأزياء المتوفرة</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{services.map((service, index) => (<div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"><div className="text-4xl mb-4">{service.icon}</div><h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3><p className="text-gray-600 text-sm">{service.desc}</p></div>))}</div>
          </section>
          <section className="mb-20" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن يونيوم الدمام</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">{dammamFAQsAr.map((faq, index) => (<div key={index} className="bg-white rounded-xl shadow-sm p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question"><h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3><div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div></div>))}</div>
          </section>
          <section className="text-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">زوروا يونيوم الدمام اليوم</h2>
            <p className="text-xl mb-8 text-orange-100">نخدم المنطقة الشرقية بأزياء صناعية ومهنية عالية الجودة.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote?location=dammam" className="inline-flex items-center px-8 py-4 bg-white text-orange-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر ←</Link>
              <Link href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`} className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all">واتساب</Link>
            </div>
          </section>
        </Container>
      </main>
      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/locations/dammam" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}


