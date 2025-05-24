import React from 'react';
import { Metadata } from 'next';
import { Locale } from '@/lib/i18n/config';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMapPin } from 'react-icons/hi2';
import MainLayout from '@/components/layout/MainLayout';
import { generateMetadata as generateSEO } from '@/components/seo/ServerSEO';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define possible locale values for static generation
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

// Define metadata for the page
export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const locale = params.locale;
  const isArabic = locale === 'ar';

  const title = isArabic 
    ? 'مواقع يونيوم | خدمات الزي الموحد في الرياض، جدة، الدمام، مكة والمدينة' 
    : 'UNEOM Locations | Premium Uniform Services in Riyadh, Jeddah, Dammam, Mecca & Medina';
    
  const description = isArabic
    ? 'تفضل بزيارة مراكز يونيوم للزي الموحد في المملكة العربية السعودية. نوفر تصميم وإنتاج وتوريد اليونيفورم عالي الجودة للشركات والمستشفيات والفنادق والمدارس في الرياض وجدة والدمام ومكة والمدينة.'
    : 'Visit UNEOM uniform centers across Saudi Arabia. We provide high-quality uniform design, production, and supply for corporate, healthcare, hospitality, and education sectors in Riyadh, Jeddah, Dammam, Mecca, and Medina.';
    
  const keywords = [
    isArabic ? 'مواقع يونيوم' : 'UNEOM locations',
    isArabic ? 'زي موحد الرياض' : 'uniforms Riyadh',
    isArabic ? 'يونيفورم جدة' : 'uniforms Jeddah',
    isArabic ? 'ملابس مهنية الدمام' : 'workwear Dammam',
    isArabic ? 'زي موحد مكة' : 'uniforms Mecca',
    isArabic ? 'يونيفورم المدينة' : 'uniforms Medina',
    isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'
  ];

  return generateSEO({
    title,
    description,
    keywords,
    path: '/locations',
    locale: locale as 'en' | 'ar',
    imageUrl: '/images/locations/saudi-map-og.jpg'
  });
}

// Define location data
const locations = [
  {
    name: {
      en: 'Riyadh',
      ar: 'الرياض'
    },
    slug: 'riyadh',
    image: '/images/locations/riyadh-cityscape.jpg',
    description: {
      en: 'Our headquarters, featuring design studios, production facilities, and showroom.',
      ar: 'مقرنا الرئيسي، يضم استوديوهات التصميم ومرافق الإنتاج وصالة العرض.'
    }
  },
  {
    name: {
      en: 'Jeddah',
      ar: 'جدة'
    },
    slug: 'jeddah',
    image: '/images/locations/jeddah-cityscape.jpg',
    description: {
      en: 'Serving the Western Region with specialized hospitality uniform solutions.',
      ar: 'خدمة المنطقة الغربية بحلول متخصصة للزي الموحد في قطاع الضيافة.'
    }
  },
  {
    name: {
      en: 'Dammam',
      ar: 'الدمام'
    },
    slug: 'dammam',
    image: '/images/locations/dammam-cityscape.jpg',
    description: {
      en: 'Our Eastern Province hub focusing on industrial uniforms and workwear.',
      ar: 'مركزنا في المنطقة الشرقية يركز على الزي الموحد الصناعي وملابس العمل.'
    }
  },
  {
    name: {
      en: 'Mecca',
      ar: 'مكة'
    },
    slug: 'mecca',
    image: '/images/locations/mecca-cityscape.jpg',
    description: {
      en: 'Specialized location for hospitality uniforms serving the holy city.',
      ar: 'موقع متخصص للزي الموحد في قطاع الضيافة يخدم المدينة المقدسة.'
    }
  },
  {
    name: {
      en: 'Medina',
      ar: 'المدينة'
    },
    slug: 'medina',
    image: '/images/locations/medina-cityscape.jpg',
    description: {
      en: 'Serving the holy city with dedicated uniform solutions for various sectors.',
      ar: 'خدمة المدينة المنورة بحلول مخصصة للزي الموحد لمختلف القطاعات.'
    }
  }
];

export default function LocationsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale;
  const isArabic = locale === 'ar';

  return (
    <MainLayout locale={locale}>
      <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28 pt-36">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src="/images/locations/saudi-map-bg.jpg"
              alt={isArabic ? "خريطة المملكة العربية السعودية" : "Map of Saudi Arabia"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {isArabic 
                ? 'مواقع يونيوم للزي الموحد عبر المملكة العربية السعودية' 
                : 'UNEOM Uniform Locations Across Saudi Arabia'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {isArabic 
                ? 'اكتشف مواقعنا في جميع أنحاء المملكة العربية السعودية، حيث نقدم حلول الزي الموحد عالية الجودة للشركات والرعاية الصحية والضيافة والمؤسسات التعليمية.'
                : 'Discover our locations across Saudi Arabia, where we provide high-quality uniform solutions for corporate, healthcare, hospitality, and educational institutions.'}
            </p>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {isArabic ? 'تواجدنا في المملكة' : 'Our Presence in the Kingdom'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location) => (
                <Link 
                  href={`/${locale}/locations/${location.slug}`} 
                  key={location.slug}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image
                      src={location.image}
                      alt={location.name[locale]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white flex items-center">
                        <HiOutlineMapPin className="mr-2" size={20} />
                        {location.name[locale]}
                      </h3>
                      <span className="bg-primary-600 text-white text-sm py-1 px-3 rounded-full">
                        {isArabic ? 'عرض' : 'View'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700">{location.description[locale]}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isArabic ? 'لا يوجد موقع بالقرب منك؟' : 'No Location Near You?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {isArabic 
                ? 'نحن نخدم العملاء في جميع أنحاء المملكة العربية السعودية. اتصل بنا لمناقشة كيف يمكننا تلبية احتياجاتك من الزي الموحد بغض النظر عن موقعك.'
                : 'We serve clients throughout Saudi Arabia. Contact us to discuss how we can meet your uniform needs regardless of your location.'}
            </p>
            <Link 
              href={`/${locale}/contact`}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300"
            >
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>
        </section>
      </main>
    </MainLayout>
  );
} 