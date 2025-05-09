import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale, locales } from '@/lib/i18n/config';

// Define types for location data
interface LocationData {
  slug: string;
  name: {
    en: string;
    ar: string;
  };
  image: string;
  description: {
    en: string;
    ar: string;
  };
  address: {
    en: string;
    ar: string;
  };
  phone: string;
  email: string;
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }));
}

// Location data for all UNEOM locations
const locations: LocationData[] = [
  {
    slug: 'riyadh',
    name: {
      en: 'Riyadh',
      ar: 'الرياض'
    },
    image: '/images/locations/riyadh-cityscape.jpg',
    description: {
      en: 'Our headquarters in Riyadh serves as the central hub for UNEOM\'s operations across Saudi Arabia, offering comprehensive uniform solutions for healthcare, corporate, hospitality, and educational institutions.',
      ar: 'مقرنا الرئيسي في الرياض هو المركز المحوري لعمليات يونيوم في جميع أنحاء المملكة العربية السعودية، حيث نقدم حلولاً شاملة للزي الموحد لقطاعات الرعاية الصحية والشركات والضيافة والمؤسسات التعليمية.'
    },
    address: {
      en: 'King Fahd Road, Al Olaya District, Riyadh 12214, Saudi Arabia',
      ar: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية'
    },
    phone: '+966 11 234 5678',
    email: 'riyadh@uneom.com'
  },
  {
    slug: 'jeddah',
    name: {
      en: 'Jeddah',
      ar: 'جدة'
    },
    image: '/images/locations/jeddah-waterfront.jpg',
    description: {
      en: 'Our Jeddah branch specializes in hospitality and aviation uniforms, serving the western region of Saudi Arabia with innovative designs and high-performance fabrics suitable for the coastal climate.',
      ar: 'يتخصص فرعنا في جدة في زي الضيافة والطيران، حيث يخدم المنطقة الغربية من المملكة العربية السعودية بتصاميم مبتكرة وأقمشة عالية الأداء مناسبة للمناخ الساحلي.'
    },
    address: {
      en: 'Prince Sultan Road, Al Zahra District, Jeddah 23424, Saudi Arabia',
      ar: 'طريق الأمير سلطان، حي الزهراء، جدة 23424، المملكة العربية السعودية'
    },
    phone: '+966 12 345 6789',
    email: 'jeddah@uneom.com'
  },
  {
    slug: 'dammam',
    name: {
      en: 'Dammam',
      ar: 'الدمام'
    },
    image: '/images/locations/dammam-corniche.jpg',
    description: {
      en: 'Our Dammam location focuses on industrial and manufacturing uniforms, providing specialized workwear solutions for the oil and gas sector and other industries in the Eastern Province.',
      ar: 'يركز موقعنا في الدمام على الزي الصناعي والتصنيعي، حيث يوفر حلولاً متخصصة لملابس العمل لقطاع النفط والغاز والصناعات الأخرى في المنطقة الشرقية.'
    },
    address: {
      en: 'King Saud Street, Al Adama District, Dammam 32415, Saudi Arabia',
      ar: 'شارع الملك سعود، حي العدامة، الدمام 32415، المملكة العربية السعودية'
    },
    phone: '+966 13 456 7890',
    email: 'dammam@uneom.com'
  },
  {
    slug: 'mecca',
    name: {
      en: 'Mecca',
      ar: 'مكة'
    },
    image: '/images/locations/mecca-skyline.jpg',
    description: {
      en: 'Our Mecca branch provides specialized uniform solutions for hospitality and religious facilities, with a focus on modest designs, comfort, and functionality for the unique climate and requirements of the Holy City.',
      ar: 'يوفر فرعنا في مكة حلولاً متخصصة للزي الموحد للضيافة والمرافق الدينية، مع التركيز على التصاميم المحتشمة والراحة والوظائف العملية للمناخ والمتطلبات الفريدة للمدينة المقدسة.'
    },
    address: {
      en: 'Ibrahim Al Khalil Road, Al Hajla District, Mecca 24231, Saudi Arabia',
      ar: 'طريق إبراهيم الخليل، حي الحجلة، مكة 24231، المملكة العربية السعودية'
    },
    phone: '+966 12 567 8901',
    email: 'mecca@uneom.com'
  },
  {
    slug: 'medina',
    name: {
      en: 'Medina',
      ar: 'المدينة'
    },
    image: '/images/locations/medina-mosque.jpg',
    description: {
      en: 'Our Medina location serves the hospitality and education sectors with custom uniform solutions that combine traditional values with modern functionality, designed specifically for the unique environment of the Prophet\'s City.',
      ar: 'يخدم موقعنا في المدينة قطاعات الضيافة والتعليم بحلول مخصصة للزي الموحد تجمع بين القيم التقليدية والوظائف العصرية، مصممة خصيصًا للبيئة الفريدة لمدينة الرسول.'
    },
    address: {
      en: 'King Abdullah Road, Al Amir District, Medina 42317, Saudi Arabia',
      ar: 'طريق الملك عبدالله، حي الأمير، المدينة المنورة 42317، المملكة العربية السعودية'
    },
    phone: '+966 14 678 9012',
    email: 'medina@uneom.com'
  }
];

// Get metadata for the page
export const generateMetadata = ({ params }: { params: { locale: Locale } }): Metadata => {
  const locale = params.locale || defaultLocale;
  
  return {
    title: locale === 'ar' 
      ? 'مواقع يونيوم | تواجدنا في المملكة العربية السعودية' 
      : 'UNEOM Locations | Our Presence Across Saudi Arabia',
    description: locale === 'ar'
      ? 'استكشف مواقع يونيوم في جميع أنحاء المملكة العربية السعودية. نقدم خدمات متخصصة للزي الموحد في الرياض وجدة والدمام ومكة والمدينة المنورة.'
      : 'Explore UNEOM locations throughout Saudi Arabia. We provide specialized uniform services in Riyadh, Jeddah, Dammam, Mecca, and Medina.',
    alternates: {
      canonical: 'https://uneom.com/locations/',
      languages: {
        'en': 'https://uneom.com/locations/',
        'ar': 'https://uneom.com/ar/locations/'
      }
    }
  };
};

export default function LocationsPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    heading: isArabic ? 'مواقع يونيوم في المملكة العربية السعودية' : 'UNEOM Locations in Saudi Arabia',
    subheading: isArabic 
      ? 'خدمات متخصصة للزي الموحد المهني في جميع أنحاء المملكة'
      : 'Specialized Professional Uniform Services Throughout the Kingdom',
    introduction: isArabic
      ? 'تفخر يونيوم بتقديم خدماتها المتخصصة في الزي الموحد المهني عبر شبكة استراتيجية من المواقع في جميع أنحاء المملكة العربية السعودية. كل موقع مجهز بشكل فريد لتلبية احتياجات الزي الموحد المحددة للمنطقة والقطاعات المهنية المحلية.'
      : 'UNEOM proudly serves its specialized professional uniform services through a strategic network of locations across Saudi Arabia. Each location is uniquely equipped to address the specific uniform needs of the region and local professional sectors.',
    viewDetails: isArabic ? 'عرض التفاصيل' : 'View Details',
    contact: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    nationalPresence: isArabic ? 'تواجدنا الوطني' : 'Our National Presence',
    nationalPresenceText: isArabic
      ? 'تغطي شبكة مواقعنا المناطق الرئيسية في المملكة العربية السعودية، مما يضمن قدرتنا على تقديم خدمات سريعة وفعالة لجميع عملائنا. سواء كنت في المنطقة الوسطى أو الغربية أو الشرقية، فإن خبراء يونيوم على استعداد لتلبية احتياجاتك.'
      : 'Our network of locations covers the key regions of Saudi Arabia, ensuring we can provide rapid and efficient service to all our clients. Whether you are in the Central, Western, or Eastern Region, UNEOM experts are ready to meet your needs.',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote'
  };

  return (
    <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/hero/uneom_locations_map.jpg"
            alt={isArabic ? "خريطة مواقع يونيوم" : "UNEOM locations map"}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.heading}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            {translations.subheading}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {translations.introduction}
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {translations.nationalPresence}
              </h2>
              <p className="text-gray-700">
                {translations.nationalPresenceText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src={location.image}
                    alt={location.name[locale]}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {location.name[locale]}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {location.description[locale]}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                      {translations.contact}
                    </h3>
                    <p className="text-gray-700 mb-1">{location.address[locale]}</p>
                    <p className="text-gray-700 mb-1">{location.phone}</p>
                    <p className="text-gray-700">{location.email}</p>
                  </div>
                  
                  <Link 
                    href={`/${locale}/locations/${location.slug}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                  >
                    {translations.viewDetails}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {isArabic ? 'هل تبحث عن حلول مخصصة للزي الموحد؟' : 'Looking for Customized Uniform Solutions?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {isArabic 
              ? 'اتصل بنا اليوم للحصول على استشارة مجانية ومعرفة كيف يمكن ليونيوم تلبية احتياجات الزي الموحد لمؤسستك.' 
              : 'Contact us today for a free consultation and discover how UNEOM can meet your organization\'s uniform needs.'}
          </p>
          <Link 
            href={`/${locale}/quote`}
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </main>
  );
} 