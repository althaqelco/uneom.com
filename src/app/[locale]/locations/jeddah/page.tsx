import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Locale, defaultLocale } from '@/lib/i18n/config';
import { generateMetadata as generateSEO } from '@/components/seo/ServerSEO';
import MainLayout from '@/components/layout/MainLayout';
import { HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope, HiOutlineClock } from 'react-icons/hi2';
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
    ? 'يونيوم جدة | خدمات الزي الموحد المتميزة في المنطقة الغربية' 
    : 'UNEOM Jeddah | Premium Uniform Services in Western Saudi Arabia';
    
  const description = isArabic
    ? 'زيارة فرع يونيوم في جدة. نقدم تصميم وإنتاج وتوريد اليونيفورم عالي الجودة للشركات والمستشفيات والفنادق والمدارس في المنطقة الغربية من المملكة العربية السعودية.'
    : 'Visit UNEOM branch in Jeddah. We provide high-quality uniform design, production, and supply for corporate, healthcare, hospitality, and education sectors across Western Saudi Arabia.';
    
  const keywords = [
    isArabic ? 'يونيوم جدة' : 'UNEOM Jeddah',
    isArabic ? 'زي موحد جدة' : 'uniforms Jeddah',
    isArabic ? 'ملابس مهنية' : 'professional clothing',
    isArabic ? 'تصميم يونيفورم' : 'uniform design',
    isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia',
    isArabic ? 'المنطقة الغربية' : 'Western Region'
  ];

  return generateSEO({
    title,
    description,
    keywords,
    path: '/locations/jeddah',
    locale: locale as 'en' | 'ar',
    imageUrl: '/images/locations/jeddah-cityscape.jpg'
  });
}

// Define location data
const locationData = {
  slug: 'jeddah',
  name: {
    en: 'Jeddah',
    ar: 'جدة'
  },
  heroImage: '/images/locations/jeddah-waterfront.jpg',
  mapImage: '/images/locations/jeddah-map.jpg',
  description: {
    en: 'Our Jeddah branch specializes in hospitality and aviation uniforms, serving the western region of Saudi Arabia with innovative designs and high-performance fabrics suitable for the coastal climate.',
    ar: 'يتخصص فرعنا في جدة في زي الضيافة والطيران، حيث يخدم المنطقة الغربية من المملكة العربية السعودية بتصاميم مبتكرة وأقمشة عالية الأداء مناسبة للمناخ الساحلي.'
  },
  introduction: {
    en: 'As the gateway to Mecca and a major commercial hub on the Red Sea, Jeddah hosts our specialized facility focusing on hospitality, aviation, and marine sector uniforms. Our Jeddah location offers climate-adapted uniform solutions that provide comfort and durability in the coastal environment, while maintaining the professional aesthetics required by international hospitality standards.',
    ar: 'بصفتها بوابة مكة ومركزًا تجاريًا رئيسيًا على البحر الأحمر، تستضيف جدة منشأتنا المتخصصة التي تركز على أزياء الضيافة والطيران والقطاع البحري. يوفر موقعنا في جدة حلولًا للزي الموحد مكيفة مع المناخ توفر الراحة والمتانة في البيئة الساحلية، مع الحفاظ على الجماليات المهنية التي تتطلبها معايير الضيافة الدولية.'
  },
  address: {
    en: 'Prince Sultan Road, Al Zahra District, Jeddah 23424, Saudi Arabia',
    ar: 'طريق الأمير سلطان، حي الزهراء، جدة 23424، المملكة العربية السعودية'
  },
  phone: '+966 12 345 6789',
  email: 'jeddah@uneom.com',
  workingHours: {
    en: 'Sunday to Thursday: 9:00 AM - 6:00 PM',
    ar: 'الأحد إلى الخميس: 9:00 صباحًا - 6:00 مساءً'
  },
  googleMapsUrl: 'https://maps.google.com/?q=21.5433,39.1728',
  
  // Local team information
  team: [
    {
      name: {
        en: 'Khalid Al-Ghamdi',
        ar: 'خالد الغامدي'
      },
      position: {
        en: 'Branch Manager',
        ar: 'مدير الفرع'
      },
      image: '/images/team/khalid-al-ghamdi.jpg',
      bio: {
        en: 'Khalid brings 12 years of hospitality industry experience and deep connections with Jeddah\'s hotel and tourism sector.',
        ar: 'يجلب خالد 12 عامًا من الخبرة في صناعة الضيافة وعلاقات عميقة مع قطاع الفنادق والسياحة في جدة.'
      }
    },
    {
      name: {
        en: 'Sara Al-Amoudi',
        ar: 'سارة العمودي'
      },
      position: {
        en: 'Hospitality Design Specialist',
        ar: 'أخصائية تصميم الضيافة'
      },
      image: '/images/team/sara-al-amoudi.jpg',
      bio: {
        en: 'Sara specializes in designing high-performance uniforms for hospitality professionals working in Jeddah\'s coastal climate.',
        ar: 'تتخصص سارة في تصميم أزياء عالية الأداء للعاملين في مجال الضيافة في مناخ جدة الساحلي.'
      }
    }
  ],
  
  // Specialized services for this location
  specializedServices: [
    {
      title: {
        en: 'Hospitality Uniform Design',
        ar: 'تصميم زي الضيافة'
      },
      description: {
        en: 'Custom uniform solutions for Jeddah\'s luxury hotels, resorts, and restaurants, featuring breathable fabrics suitable for the coastal climate.',
        ar: 'حلول مخصصة للزي الموحد للفنادق والمنتجعات والمطاعم الفاخرة في جدة، تتميز بأقمشة تسمح بمرور الهواء مناسبة للمناخ الساحلي.'
      },
      icon: '/icons/hospitality-design.svg'
    },
    {
      title: {
        en: 'Aviation Uniform Solutions',
        ar: 'حلول زي الطيران'
      },
      description: {
        en: 'Professional uniform programs for airlines and airport services operating in Jeddah\'s King Abdulaziz International Airport.',
        ar: 'برامج الزي المهني لشركات الطيران وخدمات المطارات العاملة في مطار الملك عبد العزيز الدولي بجدة.'
      },
      icon: '/icons/aviation-solutions.svg'
    },
    {
      title: {
        en: 'Marine Sector Workwear',
        ar: 'ملابس عمل القطاع البحري'
      },
      description: {
        en: 'Specialized workwear for Jeddah\'s maritime industry, including port services, shipping companies, and marine logistics operators.',
        ar: 'ملابس عمل متخصصة لصناعة الملاحة البحرية في جدة، بما في ذلك خدمات الموانئ وشركات الشحن ومشغلي الخدمات اللوجستية البحرية.'
      },
      icon: '/icons/marine-workwear.svg'
    },
    {
      title: {
        en: 'Climate-Optimized Fabrics',
        ar: 'أقمشة محسنة للمناخ'
      },
      description: {
        en: 'Consultation services on fabric selection for Jeddah\'s humid coastal climate, focusing on moisture-wicking, quick-drying materials.',
        ar: 'خدمات استشارية حول اختيار الأقمشة لمناخ جدة الساحلي الرطب، مع التركيز على المواد الماصة للرطوبة وسريعة الجفاف.'
      },
      icon: '/icons/climate-fabrics.svg'
    }
  ],
  
  // Local case studies
  caseStudies: [
    {
      title: {
        en: 'Red Sea Resort Collection',
        ar: 'مجموعة منتجع البحر الأحمر'
      },
      description: {
        en: 'Development of a comprehensive uniform program for a luxury Red Sea resort chain, featuring climate-adaptive fabrics and elegant Arabian-inspired designs.',
        ar: 'تطوير برنامج شامل للزي الموحد لسلسلة منتجعات فاخرة على البحر الأحمر، يتميز بأقمشة متكيفة مع المناخ وتصاميم أنيقة مستوحاة من الطراز العربي.'
      },
      image: '/images/case-studies/red-sea-resort.jpg',
      results: {
        en: 'Improved staff comfort in hot conditions, 95% positive feedback on design aesthetics.',
        ar: 'تحسين راحة الموظفين في الظروف الحارة، 95٪ ردود فعل إيجابية على جماليات التصميم.'
      }
    },
    {
      title: {
        en: 'Jeddah Airport Services Uniform Redesign',
        ar: 'إعادة تصميم الزي الموحد لخدمات مطار جدة'
      },
      description: {
        en: 'Complete redesign of ground service and customer service uniforms for 600+ staff at King Abdulaziz International Airport.',
        ar: 'إعادة تصميم كاملة للزي الموحد للخدمات الأرضية وخدمة العملاء لأكثر من 600 موظف في مطار الملك عبد العزيز الدولي.'
      },
      image: '/images/case-studies/jeddah-airport.jpg',
      results: {
        en: '30% improvement in durability, distinctive brand identity recognized by international travelers.',
        ar: 'تحسين المتانة بنسبة 30٪، والتعرف على هوية العلامة التجارية المميزة من قبل المسافرين الدوليين.'
      }
    }
  ],
  
  // Local FAQs
  faqs: [
    {
      question: {
        en: 'Do you provide uniform solutions specifically designed for Jeddah\'s coastal climate?',
        ar: 'هل توفرون حلول زي موحد مصممة خصيصًا لمناخ جدة الساحلي؟'
      },
      answer: {
        en: 'Yes, our Jeddah branch specializes in climate-adaptive uniforms featuring moisture-wicking, breathable fabrics that maintain professional appearance while providing comfort in Jeddah\'s humid coastal conditions. We select materials specifically tested for performance in this region.',
        ar: 'نعم، يتخصص فرعنا في جدة في الأزياء المتكيفة مع المناخ التي تتميز بأقمشة تمتص الرطوبة وتسمح بمرور الهواء والتي تحافظ على المظهر المهني مع توفير الراحة في ظروف جدة الساحلية الرطبة. نختار المواد التي تم اختبارها خصيصًا للأداء في هذه المنطقة.'
      }
    },
    {
      question: {
        en: 'Can you accommodate rush orders for hospitality clients in Jeddah?',
        ar: 'هل يمكنكم استيعاب الطلبات العاجلة لعملاء الضيافة في جدة؟'
      },
      answer: {
        en: 'Our Jeddah location maintains an expedited service specifically for our hospitality clients, with the ability to deliver standard items within 10 business days and custom designs within 3-4 weeks. For emergency situations, we also offer limited stock of common hospitality uniform items that can be customized with your branding within 3-5 days.',
        ar: 'يحتفظ موقعنا في جدة بخدمة معجلة خصيصًا لعملاء الضيافة لدينا، مع القدرة على تسليم العناصر القياسية في غضون 10 أيام عمل والتصاميم المخصصة في غضون 3-4 أسابيع. بالنسبة للحالات الطارئة، نقدم أيضًا مخزونًا محدودًا من عناصر الزي الموحد الشائعة للضيافة والتي يمكن تخصيصها بعلامتك التجارية في غضون 3-5 أيام.'
      }
    },
    {
      question: {
        en: 'Does your Jeddah location offer fabric testing for marine environments?',
        ar: 'هل يوفر موقعكم في جدة اختبار الأقمشة للبيئات البحرية؟'
      },
      answer: {
        en: 'Yes, our Jeddah branch features a specialized lab for testing fabrics in marine conditions, including salt water exposure, UV resistance, and performance under high humidity. This service helps maritime clients select the optimal materials for their specific operational environment.',
        ar: 'نعم، يضم فرعنا في جدة مختبرًا متخصصًا لاختبار الأقمشة في الظروف البحرية، بما في ذلك التعرض للمياه المالحة، ومقاومة الأشعة فوق البنفسجية، والأداء في ظل الرطوبة العالية. تساعد هذه الخدمة العملاء البحريين على اختيار المواد المثلى لبيئة عملهم المحددة.'
      }
    },
    {
      question: {
        en: 'Do you work with international hotel chains in Jeddah to maintain global brand standards?',
        ar: 'هل تعملون مع سلاسل الفنادق الدولية في جدة للحفاظ على معايير العلامة التجارية العالمية؟'
      },
      answer: {
        en: 'Absolutely. We have extensive experience working with international hotel chains in Jeddah to maintain their global brand standards while adapting uniforms for local climate conditions. Our design team is familiar with the specifications of major hospitality brands and can ensure that all uniforms meet their requirements while providing enhanced comfort for staff working in Jeddah\'s unique environment.',
        ar: 'بالتأكيد. لدينا خبرة واسعة في العمل مع سلاسل الفنادق الدولية في جدة للحفاظ على معايير علامتها التجارية العالمية مع تكييف الزي الموحد لظروف المناخ المحلية. فريق التصميم لدينا على دراية بمواصفات العلامات التجارية الكبرى للضيافة ويمكنه ضمان تلبية جميع الأزياء لمتطلباتهم مع توفير راحة معززة للموظفين العاملين في بيئة جدة الفريدة.'
      }
    }
  ],
  
  // Related industries for this location
  relatedIndustries: ['hospitality', 'aviation', 'corporate', 'healthcare'] as const
};

export default function JeddahLocationPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale || defaultLocale;
  const isArabic = locale === 'ar';
  
  // Translations
  const translations = {
    visitUs: isArabic ? 'زورونا' : 'Visit Us',
    contactInfo: isArabic ? 'معلومات الاتصال' : 'Contact Information',
    workingHours: isArabic ? 'ساعات العمل' : 'Working Hours',
    getDirections: isArabic ? 'الحصول على الاتجاهات' : 'Get Directions',
    ourTeam: isArabic ? 'فريقنا في جدة' : 'Our Jeddah Team',
    teamDescription: isArabic 
      ? 'تعرف على خبرائنا المتخصصين في تصميم الزي الموحد للضيافة والطيران في جدة.'
      : 'Meet our specialists in hospitality and aviation uniform design in Jeddah.',
    specializedServices: isArabic ? 'خدمات متخصصة في جدة' : 'Specialized Services in Jeddah',
    servicesDescription: isArabic
      ? 'نقدم مجموعة من الخدمات المصممة خصيصًا للقطاعات الرئيسية في جدة، مع التركيز على الضيافة والطيران والقطاع البحري.'
      : 'We offer a range of services tailored to key sectors in Jeddah, with a focus on hospitality, aviation, and the marine sector.',
    successStories: isArabic ? 'قصص النجاح المحلية' : 'Local Success Stories',
    successDescription: isArabic
      ? 'اكتشف كيف ساعدنا العملاء في جدة على تحسين هويتهم المؤسسية وتجربة موظفيهم من خلال حلول الزي الموحد المبتكرة المصممة للمناخ الساحلي.'
      : 'Discover how we\'ve helped clients in Jeddah enhance their corporate identity and employee experience through innovative uniform solutions designed for the coastal climate.',
    results: isArabic ? 'النتائج' : 'Results',
    commonQuestions: isArabic ? 'الأسئلة الشائعة' : 'Common Questions',
    questionsDescription: isArabic
      ? 'إجابات على استفسارات عملائنا في جدة حول خدماتنا المتخصصة للمناخ الساحلي.'
      : 'Answers to common inquiries from our Jeddah clients about our specialized services for the coastal climate.',
    exploreIndustries: isArabic ? 'استكشف حلول الصناعات المتخصصة في جدة' : 'Explore Industry Solutions in Jeddah',
    industriesDescription: isArabic
      ? 'نقدم حلولاً متخصصة للزي الموحد مصممة للتحديات والمتطلبات الفريدة لكل قطاع في المنطقة الغربية.'
      : 'We provide specialized uniform solutions designed for the unique challenges and requirements of each industry in the Western Region.',
    viewIndustry: isArabic ? 'عرض حلول القطاع' : 'View Industry Solutions',
    getQuote: isArabic ? 'طلب عرض سعر' : 'Request a Quote',
    ctaHeading: isArabic 
      ? 'هل أنت جاهز لتجربة زي موحد مصمم للمناخ الساحلي؟' 
      : 'Ready for Uniforms Designed for Coastal Climate?',
    ctaDescription: isArabic
      ? 'اتصل بفريقنا في جدة اليوم لمناقشة كيف يمكن لحلولنا المتخصصة للمناخ الساحلي أن تحسن راحة موظفيك ومظهرهم المهني.'
      : 'Contact our Jeddah team today to discuss how our coastal climate-specialized solutions can enhance your staff comfort and professional appearance.'
  };

  // Industry mappings
  type IndustryKey = typeof locationData.relatedIndustries[number];
  
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    hospitality: {
      name: isArabic ? 'الضيافة' : 'Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    },
    aviation: {
      name: isArabic ? 'الطيران' : 'Aviation',
      image: '/images/industries/aviation/aviation-staff.jpg'
    },
    corporate: {
      name: isArabic ? 'الشركات' : 'Corporate',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    healthcare: {
      name: isArabic ? 'الرعاية الصحية' : 'Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    }
  };

  return (
    <main className={`min-h-screen ${isArabic ? 'rtl text-right' : 'ltr text-left'}`}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
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
            {isArabic 
              ? 'يونيوم جدة | خدمات تصميم وإنتاج الزي الموحد للضيافة والطيران في المنطقة الغربية'
              : 'UNEOM Jeddah | Premium Hospitality & Aviation Uniform Solutions in Western Saudi Arabia'}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            href={`/${locale}/quote?location=jeddah`}
            className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            {translations.getQuote}
          </Link>
        </div>
      </section>
    </main>
  );
} 