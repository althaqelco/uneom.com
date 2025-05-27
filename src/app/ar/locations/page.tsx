import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define locations data in Arabic
const locationsData = {
  heroImage: '/images/locations/saudi-arabia-map.jpg',
  introduction: 'يونيوم تخدم المملكة العربية السعودية من خلال شبكة واسعة من المواقع الاستراتيجية، مما يضمن وصولنا إلى جميع المناطق الرئيسية وتقديم خدمات استثنائية في مجال الزي الموحد.',
  description: 'مع مقرنا الرئيسي في الرياض ومكاتب إقليمية في المدن الكبرى، نحن في موقع مثالي لخدمة احتياجات الزي الموحد لمؤسستك بكفاءة عالية وجودة متميزة.',
  commitment: 'التزامنا بالتميز يمتد عبر جميع مواقعنا، حيث نقدم نفس مستوى الجودة العالية والخدمة المهنية التي تشتهر بها يونيوم في كل منطقة نخدمها.',
  locations: [
    {
      id: 'riyadh',
      name: 'الرياض',
      title: "UNEOM - Professional Uniforms",
      description: 'مقرنا الرئيسي في العاصمة يضم استوديوهات التصميم ومرافق الإنتاج الحديثة وصالة العرض الرئيسية.',
      image: '/images/locations/riyadh-office.jpg',
      address: 'طريق الملك فهد، حي العليا، الرياض',
      phone: '+966 11 234 5678',
      email: 'riyadh@uneom.com',
      services: [
        'تصميم وتطوير المنتجات',
        'مرافق الإنتاج الرئيسية',
        'خدمات الشركات المتخصصة',
        'برامج الرعاية الصحية',
        'حلول التعليم المتكاملة'
      ],
      href: '/ar/locations/riyadh'
    },
    {
      id: 'jeddah',
      name: 'جدة',
      title: 'المكتب الإقليمي الغربي',
      description: 'يخدم المنطقة الغربية ويركز على قطاعات الضيافة والخدمات التجارية والرعاية الصحية.',
      image: '/images/locations/jeddah-office.jpg',
      address: 'طريق الأمير محمد بن عبدالعزيز، جدة',
      phone: '+966 12 345 6789',
      email: 'jeddah@uneom.com',
      services: [
        'حلول الضيافة المتخصصة',
        'الزي التجاري الراقي',
        'خدمات الرعاية الصحية',
        'برامج القطاع الخاص',
        'التصميم المخصص'
      ],
      href: '/ar/locations/jeddah'
    },
    {
      id: 'dammam',
      name: 'الدمام',
      title: 'المكتب الإقليمي الشرقي',
      description: 'يركز على الصناعات البترولية والكيميائية والتصنيع مع التخصص في ملابس السلامة.',
      image: '/images/locations/dammam-office.jpg',
      address: 'طريق الملك فهد، الدمام',
      phone: '+966 13 456 7890',
      email: 'dammam@uneom.com',
      services: [
        'ملابس السلامة الصناعية',
        'الزي البترولي المتخصص',
        'حلول التصنيع',
        'معدات الحماية الشخصية',
        'الاستشارات التقنية'
      ],
      href: '/ar/locations/dammam'
    },
    {
      id: 'mecca',
      name: 'مكة المكرمة',
      title: 'مكتب الخدمات المقدسة',
      description: 'متخصص في خدمة قطاع الحج والعمرة والخدمات الدينية والضيافة المقدسة.',
      image: '/images/locations/mecca-office.jpg',
      address: 'شارع إبراهيم الخليل، مكة المكرمة',
      phone: '+966 12 567 8901',
      email: 'mecca@uneom.com',
      services: [
        'زي موظفي الحرمين',
        'ملابس خدمة الحجاج',
        'الزي الفندقي المقدس',
        'ملابس النقل والمواصلات',
        'الخدمات الطارئة'
      ],
      href: '/ar/locations/mecca'
    },
    {
      id: 'medina',
      name: 'المدينة المنورة',
      title: 'مكتب الخدمات النبوية',
      description: 'يقدم خدمات متخصصة للمؤسسات الدينية والتعليمية وخدمة زوار المسجد النبوي.',
      image: '/images/locations/medina-office.jpg',
      address: 'طريق قباء، المدينة المنورة',
      phone: '+966 14 678 9012',
      email: 'medina@uneom.com',
      services: [
        'زي المؤسسات الدينية',
        'ملابس الخدمات التعليمية',
        'زي استقبال الزوار',
        'الملابس التراثية',
        'برامج التطوع'
      ],
      href: '/ar/locations/medina'
    }
  ],
  coverage: {
    title: 'تغطية شاملة للمملكة',
    description: 'شبكتنا من المكاتب والمراكز تضمن وصولنا إلى جميع مناطق المملكة العربية السعودية',
    regions: [
      {
        name: 'المنطقة الوسطى',
        cities: ['الرياض', 'القصيم', 'حائل'],
        specialization: 'الشركات والحكومة'
      },
      {
        name: 'المنطقة الغربية',
        cities: ['جدة', 'مكة المكرمة', 'المدينة المنورة', 'الطائف'],
        specialization: 'الضيافة والخدمات المقدسة'
      },
      {
        name: 'المنطقة الشرقية',
        cities: ['الدمام', 'الخبر', 'الأحساء', 'الجبيل'],
        specialization: 'الصناعة والبتروكيماويات'
      },
      {
        name: 'المنطقة الجنوبية',
        cities: ['أبها', 'خميس مشيط', 'نجران', 'جازان'],
        specialization: 'التعليم والصحة'
      },
      {
        name: 'المنطقة الشمالية',
        cities: ['تبوك', 'عرعر', 'سكاكا'],
        specialization: 'الزراعة والخدمات'
      }
    ]
  },
  whyChooseUs: [
    {
      title: 'قرب جغرافي',
      description: 'مواقعنا الاستراتيجية تضمن سرعة الاستجابة وتقليل أوقات التسليم',
      icon: '/images/icons/location.svg'
    },
    {
      title: 'خبرة محلية',
      description: 'فهم عميق لاحتياجات كل منطقة والخصائص الثقافية والمناخية',
      icon: '/images/icons/expertise.svg'
    },
    {
      title: 'دعم مستمر',
      description: 'فرق محلية متاحة لتقديم الدعم والصيانة وخدمة ما بعد البيع',
      icon: '/images/icons/support.svg'
    },
    {
      title: 'جودة موحدة',
      description: 'نفس معايير الجودة العالية والخدمة المهنية في جميع مواقعنا',
      icon: '/images/icons/quality.svg'
    }
  ]
};

export const metadata: Metadata = {
  title: 'مواقعنا في المملكة | شبكة يونيوم الواسعة لخدمة جميع المناطق',
  description: 'اكتشف مواقع يونيوم في جميع أنحاء المملكة العربية السعودية. مقرنا الرئيسي في الرياض ومكاتب إقليمية في جدة والدمام ومكة المكرمة والمدينة المنورة لخدمة احتياجات الزي الموحد.',
  keywords: ['مواقع يونيوم', 'فروع يونيوم السعودية', 'مكاتب الزي الموحد', 'خدمات المناطق', 'يونيوم الرياض', 'يونيوم جدة', 'يونيوم الدمام', 'يونيوم مكة', 'يونيوم المدينة', 'شبكة الخدمات'],
  alternates: {
    canonical: 'https://uneom.com/ar/locations/',
    languages: {
      'en': 'https://uneom.com/locations/',
      'ar': 'https://uneom.com/ar/locations/'
    }
  },
  openGraph: {
    title: 'مواقعنا في المملكة | شبكة يونيوم الواسعة لخدمة جميع المناطق',
    description: 'اكتشف مواقع يونيوم في جميع أنحاء المملكة العربية السعودية. مقرنا الرئيسي في الرياض ومكاتب إقليمية في جدة والدمام ومكة المكرمة والمدينة المنورة لخدمة احتياجات الزي الموحد.',
    url: 'https://uneom.com/ar/locations/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/locations/saudi-arabia-map.jpg',
        width: 1200,
        height: 630,
        alt: 'مواقع يونيوم في المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};

export default function LocationsPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src={locationsData.heroImage}
            alt="مواقع يونيوم في المملكة العربية السعودية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            مواقعنا في جميع أنحاء المملكة العربية السعودية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            {locationsData.introduction}
          </p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">خدمة شاملة عبر المملكة</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {locationsData.description}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {locationsData.commitment}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Locations */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">مواقعنا الرئيسية</SectionHeading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {locationsData.locations.map((location) => (
              <Link 
                key={location.id}
                href={location.href}
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-800">{location.name}</h3>
                    <span className="text-sm text-primary-600 font-medium">{location.title}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{location.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">العنوان:</span> {location.address}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">الهاتف:</span> {location.phone}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">البريد الإلكتروني:</span> {location.email}
                    </p>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">الخدمات المتخصصة:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {location.services.slice(0, 3).map((service, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full ml-2"></span>
                          {service}
                        </li>
                      ))}
                      {location.services.length > 3 && (
                        <li className="text-primary-600 font-medium">+ المزيد...</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <span className="text-primary-600 font-medium group-hover:text-primary-700">
                      اعرف المزيد عن {location.name} ←
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">{locationsData.coverage.title}</SectionHeading>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            {locationsData.coverage.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationsData.coverage.regions.map((region, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{region.name}</h3>
                <p className="text-sm text-primary-600 font-medium mb-3">{region.specialization}</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  {region.cities.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full ml-2"></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Our Network */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">لماذا تختار شبكة يونيوم؟</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationsData.whyChooseUs.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary-600 rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">خريطة مواقعنا</SectionHeading>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/images/locations/saudi-arabia-locations-map.jpg"
              alt="خريطة مواقع يونيوم في المملكة العربية السعودية"
              fill
              className="object-cover"
            />
            {/* Interactive map overlay could go here */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">5 مواقع رئيسية</h3>
                <p className="text-gray-600">تغطية شاملة لجميع مناطق المملكة</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact All Locations */}
      <section className="py-16 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ابحث عن أقرب موقع لك
            </h2>
            <p className="text-lg md:text-xl mb-8">
              تواصل مع أي من مواقعنا للحصول على استشارة مجانية وحلول مخصصة لاحتياجات الزي الموحد الخاصة بك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/ar/contact" size="lg" variant="secondary">
                تواصل معنا
              </Button>
              <Button href="/ar/quote" size="lg" variant="outline">
                طلب عرض سعر
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}