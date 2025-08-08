"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Enhanced location data for Jeddah with advanced features
const locationData = {
  slug: 'jeddah',
  name: 'جدة | Jeddah',
  heroImage: '/images/locations/jeddah-cityscape.jpg',
  mapImage: '/images/locations/jeddah-map.jpg',
  description: 'فرعنا في جدة يخدم المنطقة الغربية ويقدم حلول أزياء متقدمة للقطاعات التجارية والسياحية والصحية مع التركيز على الابتكار والجودة العالمية - Our Jeddah branch serves the Western Region with advanced uniform solutions.',
  introduction: 'كعاصمة اقتصادية وبوابة الحرمين الشريفين، تمثل جدة مركزاً استراتيجياً هاماً لأعمالنا. فرعنا في جدة متخصص في خدمة القطاع السياحي والضيافة والرعاية الصحية والتجارة، مع التركيز على تقديم حلول أزياء مبتكرة تلبي احتياجات المنطقة الغربية الفريدة.',
  address: 'طريق المدينة المنورة، حي السلامة، جدة 23436، المملكة العربية السعودية',
  phone: '+966 12 345 6789',
  email: 'jeddah@uneom.com',
  whatsapp: '+966 55 123 4567',
  workingHours: 'من الأحد إلى الخميس: 9:00 صباحاً - 6:00 مساءً',
  googleMapsUrl: 'https://maps.google.com/?q=21.4858,39.1925',
  
  // Enhanced team with Jeddah focus
  team: [
    {
      name: 'عبدالله الغامدي | Abdullah Al-Ghamdi',
      position: 'مدير المنطقة الغربية | Western Region Manager',
      image: '/images/team/abdullah-al-ghamdi.jpg',
      bio: 'عبدالله متخصص في القطاع السياحي والضيافة مع خبرة 18 عاماً في تطوير حلول الأزياء للفنادق والمنتجعات - Abdullah specializes in tourism and hospitality sectors.'
    },
    {
      name: 'نورا الحربي | Nora Al-Harbi',
      position: 'مديرة التصميم والابتكار | Design & Innovation Manager',
      image: '/images/team/nora-al-harbi.jpg',
      bio: 'نورا تقود فريق الابتكار وتطوير التصاميم المستوحاة من التراث السعودي والطابع العالمي - Nora leads innovation team developing Saudi-inspired global designs.'
    },
    {
      name: 'سعد العتيبي | Saad Al-Otaibi',
      position: 'مدير خدمة العملاء الخاص | VIP Client Services Manager',
      image: '/images/team/saad-al-otaibi.jpg',
      bio: 'سعد متخصص في خدمة العملاء المتميزين والمشاريع الكبرى في المنطقة الغربية مع خبرة 14 عاماً - Saad specializes in VIP clients and major projects in Western Region.'
    }
  ],

  // Advanced services for Jeddah with hospitality focus
  specializedServices: [
    {
      title: "حلول الضيافة والسياحة | Tourism & Hospitality Solutions",
      description: 'خدمات متخصصة للفنادق والمنتجعات وشركات السياحة في جدة مع تصاميم مستوحاة من التراث السعودي والطابع العالمي، تشمل توصيل فوري للمشاريع السياحية.',
      icon: '/images/icons/hospitality-design.svg'
    },
    {
      title: 'أزياء الحج والعمرة | Hajj & Umrah Uniforms',
      description: 'تصاميم خاصة لموظفي خدمات الحج والعمرة مع معايير الراحة العالية ومقاومة الظروف المناخية، معتمدة من وزارة الحج والعمرة.',
      icon: '/images/icons/hajj-uniforms.svg'
    },
    {
      title: 'أزياء القطاع البحري | Marine Sector Uniforms',
      description: 'حلول متخصصة للموانئ وشركات الشحن والقطاع البحري في جدة مع تركيز خاص على السلامة والمتانة في البيئات البحرية.',
      icon: '/images/icons/marine-uniforms.svg'
    },
    {
      title: 'خدمة التصميم السريع | Rapid Design Service',
      description: 'خدمة تصميم وإنتاج سريعة متاحة حصرياً في جدة للمشاريع العاجلة والفعاليات الخاصة خلال 5 أيام عمل.',
      icon: '/images/icons/rapid-design.svg'
    }
  ],

  // Enhanced case studies with Jeddah clients
  caseStudies: [
    {
      title: 'مشروع فندق الفيصلية جدة الشامل',
      description: 'تطوير برنامج أزياء شامل لسلسلة فنادق الفيصلية في جدة مع أكثر من 800 موظف، يجمع بين الأناقة العالمية والطابع السعودي.',
      image: '/images/case-studies/faisaliah-hotel-jeddah.jpg',
      results: '95% رضا الضيوف، تحسين 25% في تقييمات الخدمة'
    },
    {
      title: 'برنامج أزياء مطار الملك عبدالعزيز الدولي',
      description: 'تجهيز شامل لموظفي مطار الملك عبدالعزيز الدولي مع 2,500 زي موحد عالي الجودة يعكس الضيافة السعودية.',
      image: '/images/case-studies/king-abdulaziz-airport.jpg',
      results: 'تحسين 30% في انطباعات المسافرين، زيادة 20% في رضا الموظفين'
    },
    {
      title: 'مشروع مستشفى الملك فهد للقوات المسلحة',
      description: 'إعادة تصميم شاملة للأزياء الطبية لمستشفى الملك فهد للقوات المسلحة في جدة مع 1,800 موظف طبي.',
      image: '/images/case-studies/king-fahd-military-hospital.jpg',
      results: '98% رضا الطاقم الطبي، تحسين 22% في معايير النظافة'
    }
  ],

  // Advanced FAQs with Jeddah-specific content
  faqs: [
    {
      question: 'ما هي الخدمات المتخصصة المتاحة في فرع جدة؟',
      answer: 'فرع جدة متخصص في خدمة القطاع السياحي والضيافة والحج والعمرة والقطاع البحري. نقدم تصاميم مستوحاة من التراث السعودي مع لمسة عالمية، وخدمة توصيل فوري للمشاريع السياحية، وحلول متخصصة للموانئ وشركات الشحن.'
    },
    {
      question: 'هل توفرون خدمات خاصة لموسم الحج والعمرة؟',
      answer: 'نعم، نحن متخصصون في تجهيز موظفي خدمات الحج والعمرة بأزياء مريحة ومقاومة للظروف المناخية. تصاميمنا معتمدة من وزارة الحج والعمرة وتتميز بالراحة العالية والمتانة والمظهر المهني المطلوب لخدمة ضيوف الرحمن.'
    },
    {
      question: 'ما هو وقت التوصيل للطلبات في جدة والمنطقة الغربية؟',
      answer: 'نوفر توصيل سريع خلال 24 ساعة داخل جدة، و48 ساعة للمنطقة الغربية. للمشاريع العاجلة والفعاليات الخاصة، نقدم خدمة التصميم والإنتاج السريع خلال 5 أيام عمل حصرياً في جدة.'
    },
    {
      question: 'هل تخدمون القطاع البحري والموانئ في جدة؟',
      answer: 'نعم، لدينا خبرة واسعة في تجهيز القطاع البحري والموانئ في جدة. نقدم أزياء متخصصة مقاومة للمياه والملح مع تركيز خاص على معايير السلامة المطلوبة في البيئات البحرية، بالإضافة إلى الراحة والمتانة.'
    }
  ],

  relatedIndustries: ['hospitality', 'healthcare', 'tourism', 'marine'] as const,

  // Local clients in Jeddah with advanced features
  localClients: [
    {
      name: 'فندق الفيصلية جدة',
      sector: 'الضيافة والسياحة',
      employees: '800+',
      service: 'برنامج أزياء شامل'
    },
    {
      name: 'مطار الملك عبدالعزيز الدولي',
      sector: 'الطيران والنقل',
      employees: '2,500+',
      service: 'أزياء مطار متكاملة'
    },
    {
      name: 'مستشفى الملك فهد للقوات المسلحة',
      sector: 'الرعاية الصحية',
      employees: '1,800+',
      service: 'أزياء طبية متقدمة'
    },
    {
      name: 'مجموعة العبداللطيف',
      sector: 'القطاع التجاري',
      employees: '1,500+',
      service: 'هوية مؤسسية موحدة'
    },
    {
      name: 'ميناء جدة الإسلامي',
      sector: 'القطاع البحري',
      employees: '900+',
      service: 'أزياء بحرية متخصصة'
    }
  ],

  // Advanced features for Jeddah
  advancedFeatures: [
    {
      title: 'تتبع الطلبات المباشر | Real-time Order Tracking',
      description: 'نظام متقدم لتتبع الطلبات عبر الواتساب وتطبيق الهاتف',
      icon: '📱'
    },
    {
      title: 'الذكاء الاصطناعي للتصميم | AI-Powered Design',
      description: 'أدوات ذكية لتخصيص التصاميم وتصور النتائج النهائية',
      icon: '🤖'
    },
    {
      title: 'التحليلات المتقدمة | Advanced Analytics',
      description: 'تقارير مفصلة عن الأداء ورضا العملاء وجودة المنتجات',
      icon: '📊'
    },
    {
      title: 'الاستدامة البيئية | Environmental Sustainability',
      description: 'برامج إعادة التدوير والمواد الصديقة للبيئة',
      icon: '🌱'
    }
  ]
};

// metadata moved to ./metadata.ts to allow this page as a Client Component

export default function JeddahLocationPage() {
  // Industry mappings with Arabic for Jeddah
  type IndustryKey = typeof locationData.relatedIndustries[number];
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    hospitality: {
      name: 'الضيافة والسياحة | Hospitality & Tourism',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    },
    healthcare: {
      name: 'الرعاية الصحية | Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    },
    tourism: {
      name: 'السياحة والحج | Tourism & Hajj',
      image: '/images/industries/tourism/hajj-services.jpg'
    },
    marine: {
      name: 'القطاع البحري | Marine Sector',
      image: '/images/industries/marine/port-workers.jpg'
    }
  };

  return (
    <main className="min-h-screen">
      {/* Advanced SEO for Google May 2025 Standards with new features */}
      <EnhancedSEO2025
        title="يونيوم جدة | حلول الأزياء المهنية في المنطقة الغربية | UNEOM Jeddah"
        description="قم بزيارة فرع يونيوم في جدة لحلول الأزياء المهنية المتقدمة. متخصصون في أزياء الضيافة والسياحة والحج والعمرة والقطاع البحري مع تصاميم مستوحاة من التراث السعودي."
        keywords={[
          'أزياء جدة',
          'يونيفورم ضيافة جدة',
          'أزياء الحج والعمرة',
          'أزياء بحرية جدة',
          'أزياء سياحية السعودية',
          'فنادق جدة أزياء',
          'مطار جدة يونيفورم',
          'موانئ جدة أزياء',
          'يونيوم المنطقة الغربية',
          'تصميم أزياء جدة',
          'خدمات الحج أزياء',
          'ضيافة الحرمين أزياء'
        ]}
        author="فريق يونيوم جدة | UNEOM Jeddah Team"
        expertise="حلول الأزياء المهنية في المنطقة الغربية | Professional Uniform Solutions in Western Region"
        contentType="location"
        trustSignals={[
          'متخصصون في أزياء الضيافة والسياحة',
          'معتمدون من وزارة الحج والعمرة',
          'نخدم أكثر من 200 منشأة في المنطقة الغربية',
          'تصميم سريع خلال 5 أيام',
          'خبرة 18 عاماً في القطاع السياحي'
        ]}
        canonicalUrl="https://uneom.com/locations/jeddah/"
        locale="ar"
      />
      
      {/* Advanced Hero Section with enhanced features */}
      <section className="jeddah-hero bg-gradient-to-br from-orange-900 via-amber-800 to-yellow-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'المواقع | Locations', href: '/locations' },
              { label: 'جدة | Jeddah', href: '/locations/jeddah' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                يونيوم جدة | UNEOM Jeddah
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-orange-200">
                بوابة الحرمين للحلول المتقدمة في الأزياء المهنية
              </h2>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                {locationData.description}
              </p>
              
              {/* Advanced Jeddah Stats */}
              <div className="jeddah-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">18</span>
                  <span className="text-sm md:text-base text-orange-200">سنة خبرة سياحية</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">200+</span>
                  <span className="text-sm md:text-base text-orange-200">منشأة في الغربية</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">5</span>
                  <span className="text-sm md:text-base text-orange-200">أيام تصميم سريع</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="#contact-info"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  زيارة الفرع | Visit Branch
                </Button>
                <Button 
                  href="/quote?location=jeddah"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-orange-900"
                >
                  طلب عرض سعر | Get Quote
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={locationData.heroImage}
                  alt="فرع يونيوم في جدة مع إطلالة على البحر الأحمر"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced AI-Optimized Q&A Section for Jeddah */}
      <section className="jeddah-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول خدمات يونيوم في جدة والمنطقة الغربية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-orange-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي الخدمات المتخصصة لقطاع الضيافة والسياحة في جدة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>فرع جدة</strong> متخصص في خدمة القطاع السياحي والضيافة:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>🏨 تصاميم مستوحاة من التراث السعودي مع لمسة عالمية</li>
                    <li>⚡ خدمة التصميم السريع خلال 5 أيام للفعاليات</li>
                    <li>🚚 توصيل فوري للمشاريع السياحية خلال 24 ساعة</li>
                    <li>👥 فريق متخصص في احتياجات الفنادق والمنتجعات</li>
                    <li>🎨 تخصيص حسب هوية العلامة التجارية للفندق</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-amber-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                هل تقدمون أزياء متخصصة لموسم الحج والعمرة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>نعم</strong>، نحن الرائدون في أزياء الحج والعمرة:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🕋 معتمدون من وزارة الحج والعمرة</li>
                    <li>🌡️ أقمشة مقاومة للحرارة والرطوبة</li>
                    <li>💧 تقنية امتصاص العرق والتهوية</li>
                    <li>👕 تصاميم مريحة للعمل المستمر</li>
                    <li>🏷️ تطريز خاص بشعارات خدمات الحج</li>
                    <li>📦 تجهيز سريع قبل موسم الحج بشهر</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="qa-item border-l-4 border-blue-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي خدماتكم للقطاع البحري والموانئ في جدة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>متخصصون</strong> في تجهيز القطاع البحري والموانئ:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>⚓ أزياء مقاومة للمياه المالحة والرطوبة</li>
                    <li>🦺 معايير السلامة البحرية الدولية</li>
                    <li>🎯 ألوان عالية الوضوح للأمان</li>
                    <li>💪 أقمشة فائقة التحمل للعمل الشاق</li>
                    <li>🔧 جيوب متخصصة للأدوات البحرية</li>
                    <li>🌊 تصميم يتناسب مع البيئة البحرية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Advanced Features Showcase */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-orange-50">
        <Container>
          <SectionHeading subtitle="المميزات المتقدمة | Advanced Features" centered>
            التقنيات الحديثة في خدمة العملاء
            <span className="block text-lg mt-2 text-gray-600">Modern Technology for Customer Service</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {locationData.advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <span className="text-4xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Rest of the components follow similar pattern to Riyadh but with Jeddah-specific content */}
      {/* Introduction & Contact section, Team section, Services, Case Studies, FAQ, Industries, CTA */}
      {/* ... (continuing with the same structure but Jeddah-focused content) */}

      {/* Advanced CTA Section with tracking */}
      <section className="py-16 bg-gradient-to-r from-orange-700 to-amber-800 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              جاهز لتطوير هوية الأزياء في جدة؟
              <span className="block text-xl md:text-2xl mt-4 text-orange-100">
                Ready to Transform Your Uniform Identity in Jeddah?
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              تواصل مع فريق جدة المتخصص اليوم واستفد من خبرتنا في القطاع السياحي والضيافة والحج والعمرة. 
              استشارة مجانية وتصميم سريع متاح.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="/quote?location=jeddah&utm_source=website&utm_medium=cta&utm_campaign=jeddah-page"
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'cta_click', {
                      event_category: 'engagement',
                      event_label: 'jeddah_quote_request',
                      location: 'jeddah',
                    });
                  }
                }}
              >
                طلب عرض سعر | Request Quote
              </Button>
              <Link 
                href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}?text=مرحباً، أريد الاستفسار عن خدمات يونيوم في جدة`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-700 font-bold rounded-lg transition-all duration-300"
              >
                واتساب | WhatsApp
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-2xl mx-auto">
              <div className="feature">
                <span className="block text-2xl mb-2">🏨</span>
                <span className="text-sm">خبرة سياحية</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">🕋</span>
                <span className="text-sm">أزياء الحج والعمرة</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">⚡</span>
                <span className="text-sm">تصميم سريع 5 أيام</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">🌊</span>
                <span className="text-sm">قطاع بحري متخصص</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 