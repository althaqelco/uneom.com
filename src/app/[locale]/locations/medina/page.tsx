import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/i18n/config';
import LocationPageLayout from '@/components/layout/LocationPageLayout';

// Define possible locale values for static generation
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

// Define location data
const locationData = {
  slug: 'medina',
  name: {
    en: 'Medina',
    ar: 'المدينة المنورة'
  },
  heroImage: '/images/locations/medina-mosque.jpg',
  mapImage: '/images/locations/medina-map.jpg',
  description: {
    en: 'Our Medina branch specializes in religious institution apparel, educational uniforms, and hospitality wear that honors the sacred character of the Prophet\'s City while providing practical solutions.',
    ar: 'يتخصص فرعنا في المدينة المنورة في ملابس المؤسسات الدينية والأزياء التعليمية وملابس الضيافة التي تكرم الطابع المقدس لمدينة الرسول مع توفير حلول عملية.'
  },
  introduction: {
    en: 'Serving the blessed city of Medina, our facility provides specialized uniform solutions for religious institutions, educational facilities, and the hospitality sector serving pilgrims and visitors. We combine respectful design with practical functionality, creating apparel that honors Medina\'s sacred heritage while meeting the everyday needs of those who serve in this holy city.',
    ar: 'خدمةً للمدينة المنورة المباركة، توفر منشأتنا حلولاً متخصصة للزي الموحد للمؤسسات الدينية والمرافق التعليمية وقطاع الضيافة الذي يخدم الحجاج والزوار. نحن نجمع بين التصميم المحترم والوظائف العملية، مما يخلق ملابس تكرم تراث المدينة المنورة المقدس مع تلبية الاحتياجات اليومية لأولئك الذين يخدمون في هذه المدينة المقدسة.'
  },
  address: {
    en: 'King Faisal Road, Al Amir District, Medina 42311, Saudi Arabia',
    ar: 'طريق الملك فيصل، حي الأمير، المدينة المنورة 42311، المملكة العربية السعودية'
  },
  phone: '+966 14 678 9012',
  email: 'medina@uneom.com',
  workingHours: {
    en: 'Saturday to Thursday: 9:00 AM - 7:00 PM | Friday: 4:00 PM - 7:00 PM',
    ar: 'السبت إلى الخميس: 9:00 صباحًا - 7:00 مساءً | الجمعة: 4:00 مساءً - 7:00 مساءً'
  },
  googleMapsUrl: 'https://maps.google.com/?q=24.4672,39.6142',
  
  // Local team information
  team: [
    {
      name: {
        en: 'Abdullah Al-Madinah',
        ar: 'عبد الله المدني'
      },
      position: {
        en: 'Branch Director',
        ar: 'مدير الفرع'
      },
      image: '/images/team/abdullah-al-madinah.jpg',
      bio: {
        en: 'Abdullah has 18 years of experience in textile management and specialized knowledge of appropriate apparel for Medina\'s religious and educational sectors.',
        ar: 'يمتلك عبد الله 18 عامًا من الخبرة في إدارة المنسوجات ومعرفة متخصصة بالملابس المناسبة لقطاعات المدينة المنورة الدينية والتعليمية.'
      }
    },
    {
      name: {
        en: 'Aisha Al-Johani',
        ar: 'عائشة الجهني'
      },
      position: {
        en: 'Educational & Religious Apparel Designer',
        ar: 'مصممة الملابس التعليمية والدينية'
      },
      image: '/images/team/aisha-al-johani.jpg',
      bio: {
        en: 'Aisha specializes in creating respectful yet practical designs for educational institutions and religious organizations in Medina.',
        ar: 'تتخصص عائشة في إنشاء تصاميم محترمة وعملية للمؤسسات التعليمية والمنظمات الدينية في المدينة المنورة.'
      }
    }
  ],
  
  // Specialized services for this location
  specializedServices: [
    {
      title: {
        en: 'Sacred Site Staff Apparel',
        ar: 'ملابس موظفي المواقع المقدسة'
      },
      description: {
        en: 'Dignified, comfortable uniforms for staff at the Prophet\'s Mosque and other sacred sites in Medina, designed with reverence and attention to practical needs.',
        ar: 'أزياء موحدة كريمة ومريحة للموظفين في المسجد النبوي والمواقع المقدسة الأخرى في المدينة المنورة، مصممة باحترام واهتمام بالاحتياجات العملية.'
      },
      icon: '/icons/sacred-site-apparel.svg'
    },
    {
      title: {
        en: 'Educational Institution Uniforms',
        ar: 'أزياء المؤسسات التعليمية'
      },
      description: {
        en: 'Complete uniform programs for Medina\'s Islamic universities, schools, and educational centers, featuring modest, practical designs for students and staff.',
        ar: 'برامج كاملة للزي الموحد للجامعات الإسلامية والمدارس والمراكز التعليمية في المدينة المنورة، تتميز بتصاميم متواضعة وعملية للطلاب والموظفين.'
      },
      icon: '/icons/educational-uniforms.svg'
    },
    {
      title: {
        en: 'Pilgrim Service Provider Apparel',
        ar: 'ملابس مقدمي خدمات الحجاج'
      },
      description: {
        en: 'Specialized uniforms for transportation services, visitor guidance centers, and assistance organizations serving pilgrims visiting the Prophet\'s City.',
        ar: 'أزياء متخصصة لخدمات النقل ومراكز إرشاد الزوار ومنظمات المساعدة التي تخدم الحجاج الذين يزورون مدينة الرسول.'
      },
      icon: '/icons/pilgrim-service.svg'
    },
    {
      title: {
        en: 'Historical District Hospitality Wear',
        ar: 'ملابس الضيافة للحي التاريخي'
      },
      description: {
        en: 'Culturally sensitive uniform solutions for hotels, restaurants, and visitor services in Medina\'s historical districts, blending tradition with comfort.',
        ar: 'حلول زي موحد حساسة ثقافياً للفنادق والمطاعم وخدمات الزوار في الأحياء التاريخية بالمدينة المنورة، تمزج بين التقاليد والراحة.'
      },
      icon: '/icons/historical-hospitality.svg'
    }
  ],
  
  // Local case studies
  caseStudies: [
    {
      title: {
        en: 'Islamic University Faculty Apparel',
        ar: 'ملابس أعضاء هيئة التدريس بالجامعة الإسلامية'
      },
      description: {
        en: 'Development of a comprehensive faculty uniform program for one of Medina\'s prestigious Islamic universities, featuring dignified academic apparel that respects traditional values while providing comfort in the teaching environment.',
        ar: 'تطوير برنامج شامل للزي الموحد لأعضاء هيئة التدريس في إحدى الجامعات الإسلامية المرموقة في المدينة المنورة، يتميز بملابس أكاديمية كريمة تحترم القيم التقليدية مع توفير الراحة في بيئة التدريس.'
      },
      image: '/images/case-studies/islamic-university.jpg',
      results: {
        en: 'Enhanced institutional prestige, improved faculty comfort during lectures and ceremonies, 98% approval rating from university leadership.',
        ar: 'تعزيز هيبة المؤسسة، وتحسين راحة أعضاء هيئة التدريس أثناء المحاضرات والاحتفالات، ونسبة موافقة 98٪ من قيادة الجامعة.'
      }
    },
    {
      title: {
        en: 'Visitor Information Center Staff Uniforms',
        ar: 'أزياء موظفي مركز معلومات الزوار'
      },
      description: {
        en: 'Custom-designed uniforms for staff at Medina\'s visitor information centers, featuring easily identifiable yet culturally appropriate designs with practical features for staff comfort during long shifts.',
        ar: 'أزياء مصممة خصيصًا للموظفين في مراكز معلومات الزوار بالمدينة المنورة، تتميز بتصاميم يسهل التعرف عليها ومناسبة ثقافيًا مع ميزات عملية لراحة الموظفين خلال المناوبات الطويلة.'
      },
      image: '/images/case-studies/visitor-center.jpg',
      results: {
        en: 'Visitors reported 60% improvement in staff identification, staff reported significant comfort improvement, uniform durability increased by 40% over previous solution.',
        ar: 'أفاد الزوار بتحسن بنسبة 60٪ في تحديد الموظفين، وأبلغ الموظفون عن تحسن كبير في الراحة، وزيادة متانة الزي الموحد بنسبة 40٪ مقارنة بالحل السابق.'
      }
    }
  ],
  
  // Local FAQs
  faqs: [
    {
      question: {
        en: 'Do your uniforms for Medina\'s religious institutions meet traditional requirements?',
        ar: 'هل تلبي الأزياء الموحدة للمؤسسات الدينية في المدينة المنورة المتطلبات التقليدية؟'
      },
      answer: {
        en: 'Yes, our designs for religious institutions in Medina are created in consultation with religious scholars and institutional leaders to ensure they fully respect Islamic traditions and the sacred character of the Prophet\'s City. We combine appropriate modesty, dignity, and adherence to traditional expectations with comfortable, practical features suitable for long hours of service.',
        ar: 'نعم، يتم إنشاء تصميماتنا للمؤسسات الدينية في المدينة المنورة بالتشاور مع العلماء الدينيين وقادة المؤسسات لضمان احترامها الكامل للتقاليد الإسلامية والطابع المقدس لمدينة الرسول. نحن نجمع بين الاحتشام المناسب والكرامة والالتزام بالتوقعات التقليدية مع ميزات مريحة وعملية مناسبة لساعات طويلة من الخدمة.'
      }
    },
    {
      question: {
        en: 'What solutions do you offer for educational institutions in Medina?',
        ar: 'ما الحلول التي تقدمونها للمؤسسات التعليمية في المدينة المنورة؟'
      },
      answer: {
        en: 'We provide comprehensive uniform programs for all types of educational institutions in Medina, from elementary schools to prestigious Islamic universities. Our educational wear includes student uniforms, faculty attire, administrative staff apparel, and specialized garments for events and ceremonies. Each program is customized to reflect the institution\'s values and identity while ensuring comfort and practicality for daily wear.',
        ar: 'نقدم برامج شاملة للزي الموحد لجميع أنواع المؤسسات التعليمية في المدينة المنورة، من المدارس الابتدائية إلى الجامعات الإسلامية المرموقة. تشمل ملابسنا التعليمية الزي الموحد للطلاب، وملابس أعضاء هيئة التدريس، وملابس الموظفين الإداريين، والملابس المتخصصة للفعاليات والاحتفالات. يتم تخصيص كل برنامج ليعكس قيم المؤسسة وهويتها مع ضمان الراحة والعملية للارتداء اليومي.'
      }
    },
    {
      question: {
        en: 'Can you provide heat-adaptive uniforms suitable for outdoor staff in Medina?',
        ar: 'هل يمكنكم توفير أزياء موحدة متكيفة مع الحرارة مناسبة للموظفين العاملين في الهواء الطلق في المدينة المنورة؟'
      },
      answer: {
        en: 'Absolutely. Our Medina-specific designs include special consideration for the local climate. For outdoor staff, we utilize advanced moisture-wicking, breathable fabrics that maintain appropriate appearance while providing superior comfort in heat. We incorporate UV protection, quick-drying properties, and strategic ventilation that remains culturally appropriate while maximizing comfort during the hottest months.',
        ar: 'بالتأكيد. تتضمن تصميماتنا الخاصة بالمدينة المنورة اعتبارًا خاصًا للمناخ المحلي. بالنسبة للموظفين في الهواء الطلق، نستخدم أقمشة متقدمة لامتصاص الرطوبة وتسمح بمرور الهواء تحافظ على المظهر المناسب مع توفير راحة متفوقة في الحرارة. نحن ندمج الحماية من الأشعة فوق البنفسجية، وخصائص التجفيف السريع، والتهوية الاستراتيجية التي تظل مناسبة ثقافيًا مع زيادة الراحة خلال الأشهر الأكثر حرارة.'
      }
    },
    {
      question: {
        en: 'Do you offer special inventory preparation for the high visitor seasons in Medina?',
        ar: 'هل تقدمون إعدادًا خاصًا للمخزون لمواسم الزوار المرتفعة في المدينة المنورة؟'
      },
      answer: {
        en: 'Yes, we maintain seasonal preparation programs specifically for Medina\'s peak visitor periods, including Hajj, Ramadan, and school visit seasons. Our Medina facility increases inventory levels by 200% before these periods and offers expedited production schedules for hospitality and service clients. We also provide emergency uniform replacement services for local institutions with 24-hour turnaround during peak seasons to ensure visitor service continuity.',
        ar: 'نعم، نحافظ على برامج إعداد موسمية خصيصًا لفترات ذروة الزوار في المدينة المنورة، بما في ذلك الحج ورمضان ومواسم الزيارات المدرسية. تزيد منشأتنا في المدينة المنورة مستويات المخزون بنسبة 200٪ قبل هذه الفترات وتقدم جداول إنتاج معجلة لعملاء الضيافة والخدمات. كما نقدم خدمات استبدال طارئة للزي الموحد للمؤسسات المحلية مع مهلة 24 ساعة خلال مواسم الذروة لضمان استمرارية خدمة الزوار.'
      }
    }
  ],
  
  // Related industries for this location
  relatedIndustries: ['religious', 'education', 'hospitality', 'cultural'] as const
};

// Get metadata for the page
export const generateMetadata = ({ params }: { params: { locale: Locale } }): Metadata => {
  const locale = params.locale || defaultLocale;
  
  return {
    title: locale === 'ar' 
      ? `يونيوم المدينة المنورة | أزياء المؤسسات الدينية والتعليمية المتخصصة` 
      : `UNEOM Medina | Religious & Educational Institution Specialized Apparel`,
    description: locale === 'ar'
      ? `استكشف خدمات يونيوم للأزياء الموحدة في المدينة المنورة، المتخصصة في ملابس المؤسسات الدينية والتعليمية. نقدم تصاميم تحترم التقاليد مع الحفاظ على الوظائف العملية.`
      : `Explore UNEOM's uniform services in Medina, specializing in religious and educational institution apparel. We provide designs that respect traditions while maintaining practical functions.`,
    alternates: {
      canonical: `https://uneom.com/locations/medina/`,
      languages: {
        'en': `https://uneom.com/locations/medina/`,
        'ar': `https://uneom.com/ar/locations/medina/`
      }
    }
  };
};

export default function MedinaLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    visitUs: isArabic ? 'زورونا' : 'Visit Us',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    ourTeam: isArabic ? 'فريقنا في المدينة المنورة' : 'Our Medina Team',
    teamDescription: isArabic 
      ? 'تعرف على خبرائنا المتخصصين في أزياء المؤسسات الدينية والتعليمية في المدينة المنورة.'
      : 'Meet our specialists in religious and educational institution apparel in Medina.',
    specializedServices: isArabic ? 'خدمات متخصصة في المدينة المنورة' : 'Specialized Services in Medina',
    servicesDescription: isArabic
      ? 'نقدم مجموعة من الخدمات المصممة خصيصًا للقطاعات الرئيسية في المدينة المنورة، مع التركيز على المؤسسات الدينية والتعليمية وخدمات الزوار.'
      : 'We offer a range of services tailored to key sectors in Medina, with a focus on religious institutions, educational facilities, and visitor services.',
    successStories: isArabic ? 'قصص النجاح المحلية' : 'Local Success Stories',
    successDescription: isArabic
      ? 'اكتشف كيف ساعدنا العملاء في المدينة المنورة على تحسين خدماتهم من خلال حلول الزي الموحد المتخصصة التي تحترم تقاليد المدينة المنورة.'
      : 'Discover how we\'ve helped clients in Medina enhance their services through specialized uniform solutions that respect the traditions of the Prophet\'s City.',
    results: isArabic ? 'النتائج' : 'Results',
    commonQuestions: isArabic ? 'الأسئلة الشائعة' : 'Common Questions',
    questionsDescription: isArabic
      ? 'إجابات على استفسارات عملائنا في المدينة المنورة حول خدماتنا المتخصصة المناسبة للمدينة المباركة.'
      : 'Answers to common inquiries from our Medina clients about our specialized services appropriate for the blessed city.',
    exploreIndustries: isArabic ? 'استكشف حلول الصناعات المتخصصة في المدينة المنورة' : 'Explore Industry Solutions in Medina',
    industriesDescription: isArabic
      ? 'نقدم حلولاً متخصصة للزي الموحد مصممة للتحديات والمتطلبات الفريدة لكل قطاع في المدينة المنورة.'
      : 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in Medina.',
    viewIndustry: isArabic ? 'عرض حلول القطاع' : 'View Industry Solutions',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote',
    ctaHeading: isArabic 
      ? 'هل تحتاج إلى أزياء موحدة تحترم تقاليد المدينة المنورة؟' 
      : 'Need Uniforms That Respect Medina\'s Traditions?',
    ctaDescription: isArabic
      ? 'اتصل بفريقنا في المدينة المنورة اليوم لمناقشة كيف يمكن لحلولنا المتخصصة أن تلبي المتطلبات الفريدة لعملك في المدينة المباركة.'
      : 'Contact our Medina team today to discuss how our specialized solutions can meet your unique requirements in the blessed city.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    religious: {
      name: isArabic ? 'المؤسسات الدينية' : 'Religious Institutions',
      image: '/images/industries/religious/religious-staff.jpg'
    },
    education: {
      name: isArabic ? 'التعليم' : 'Education',
      image: '/images/industries/education/educational-staff.jpg'
    },
    hospitality: {
      name: isArabic ? 'الضيافة' : 'Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    },
    cultural: {
      name: isArabic ? 'الثقافي' : 'Cultural',
      image: '/images/industries/cultural/cultural-staff.jpg'
    }
  };

  return (
    <LocationPageLayout locale={locale}>
      <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28 pt-36">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image 
              src={locationData.heroImage}
              alt={locationData.name[locale]}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {isArabic ? `يونيوم ${locationData.name[locale]}` : `UNEOM ${locationData.name[locale]}`}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
              {locationData.description[locale]}
            </p>
          </div>
        </section>

        {/* Introduction & Contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Introduction */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  {isArabic ? `فرعنا في ${locationData.name[locale]}` : `Our Branch in ${locationData.name[locale]}`}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {locationData.introduction[locale]}
                </p>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-1 bg-gray-50 rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {translations.visitUs}
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {translations.contactInfo}
                  </h3>
                  <p className="text-gray-700 mb-1">{locationData.address[locale]}</p>
                  <p className="text-gray-700 mb-1">{locationData.phone}</p>
                  <p className="text-gray-700 mb-4">{locationData.email}</p>
                  
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {translations.workingHours}
                  </h3>
                  <p className="text-gray-700 mb-4">{locationData.workingHours[locale]}</p>
                  
                  <a 
                    href={locationData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
                  >
                    {translations.getDirections}
                  </a>
                </div>
                
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image 
                    src={locationData.mapImage}
                    alt={`${locationData.name[locale]} ${isArabic ? 'خريطة' : 'map'}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.ourTeam}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.teamDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {locationData.team.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={member.image}
                      alt={member.name[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">
                      {member.name[locale]}
                    </h3>
                    <p className="text-blue-600 mb-4">{member.position[locale]}</p>
                    <p className="text-gray-600">{member.bio[locale]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.specializedServices}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.servicesDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {locationData.specializedServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-start">
                  <div className="mr-4 rtl:ml-4 rtl:mr-0 flex-shrink-0">
                    <Image 
                      src={service.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="text-blue-600"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {service.title[locale]}
                    </h3>
                    <p className="text-gray-600">
                      {service.description[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.successStories}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.successDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {locationData.caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative h-64">
                    <Image 
                      src={study.image}
                      alt={study.title[locale]}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {study.title[locale]}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description[locale]}
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-800 uppercase mb-2">
                        {translations.results}
                      </h4>
                      <p className="text-gray-700">{study.results[locale]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {translations.commonQuestions}
                </h2>
                <p className="text-lg text-gray-600">
                  {translations.questionsDescription}
                </p>
              </div>
              
              <div className="space-y-6">
                {locationData.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {faq.question[locale]}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Industries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {translations.exploreIndustries}
              </h2>
              <p className="text-lg text-gray-600">
                {translations.industriesDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {locationData.relatedIndustries.map((industry) => (
                <div key={industry} className="relative rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative h-64">
                    <Image 
                      src={industryMapping[industry].image}
                      alt={industryMapping[industry].name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {industryMapping[industry].name}
                    </h3>
                    <Link 
                      href={`/${locale}/industries/${industry}`}
                      className="inline-block bg-white/90 hover:bg-white text-blue-700 text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
                    >
                      {translations.viewIndustry}
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
              {translations.ctaHeading}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {translations.ctaDescription}
            </p>
            <Link 
              href={`/${locale}/quote?location=medina`}
              className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              {translations.getQuote}
            </Link>
          </div>
        </section>
      </main>
    </LocationPageLayout>
  );
} 