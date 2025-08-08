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

// Enhanced location data with bilingual content
const locationData = {
  slug: 'riyadh',
  name: 'الرياض | Riyadh',
  heroImage: '/images/locations/riyadh-cityscape.jpg',
  mapImage: '/images/locations/riyadh-map.jpg',
  description: 'مقرنا الرئيسي في الرياض يعمل كمركز مركزي لعمليات يونيوم في جميع أنحاء المملكة العربية السعودية، حيث نقدم حلول الأزياء الشاملة للمؤسسات الطبية والشركات والضيافة والتعليمية - Our headquarters in Riyadh serves as the central hub for UNEOM\'s operations across Saudi Arabia.',
  introduction: 'كعاصمة للمملكة العربية السعودية، تمثل الرياض قلب عملياتنا. موقعنا الرئيسي يضم استوديوهات التصميم ومرافق الإنتاج والمعرض الرئيسي. من هنا، نخدم أكبر تجمع للمؤسسات الشركات والطبية والتعليمية في المملكة، مقدمين حلول أزياء مخصصة تلبي الاحتياجات المحددة لمناخ وبيئة الأعمال في المنطقة الوسطى.',
  address: 'طريق الملك فهد، حي العليا، الرياض 12214، المملكة العربية السعودية',
  phone: '+966 11 234 5678',
  email: 'riyadh@uneom.com',
  whatsapp: '+966 50 123 4567',
  workingHours: 'من الأحد إلى الخميس: 8:30 صباحاً - 5:30 مساءً',
  googleMapsUrl: 'https://maps.google.com/?q=24.7136,46.6753',
  
  // Enhanced team with Arabic names
  team: [
    {
      name: 'أحمد السعود | Ahmed Al-Saud',
      position: 'المدير الإقليمي | Regional Manager',
      image: '/images/team/ahmed-al-saud.jpg',
      bio: 'أحمد لديه أكثر من 15 عاماً من الخبرة في صناعة الأزياء، متخصص في حلول الشركات والرعاية الصحية - Ahmed has over 15 years of experience in the uniform industry.'
    },
    {
      name: 'فاطمة القحطاني | Fatima Al-Qahtani',
      position: 'استشارية التصميم الأولى | Senior Design Consultant',
      image: '/images/team/fatima-al-qahtani.jpg',
      bio: 'فاطمة تقود فريق التصميم لدينا، وتبتكر حلول أزياء تجمع بين الوظائف والجماليات الحديثة - Fatima leads our design team, creating innovative uniform solutions.'
    },
    {
      name: 'محمد العتيبي | Mohammed Al-Otaibi',
      position: 'مدير المبيعات المؤسسية | Corporate Sales Manager',
      image: '/images/team/mohammed-al-otaibi.jpg',
      bio: 'محمد متخصص في خدمة الشركات الكبرى والمؤسسات الحكومية في الرياض مع خبرة 12 عاماً - Specializing in serving major corporations and government institutions.'
    }
  ],

  // Enhanced services with Arabic content
  specializedServices: [
    {
      title: "أزياء مؤسسية احترافية | Corporate Professional Uniforms",
      description: 'حلول أزياء مخصصة لقطاع الشركات في الرياض، بما في ذلك البنوك والاتصالات والمؤسسات الحكومية مع تسليم خلال 48 ساعة في الرياض.',
      icon: '/images/icons/corporate-design.svg'
    },
    {
      title: 'استشارات الأزياء الطبية | Healthcare Uniform Consultation',
      description: 'خدمات استشارية متخصصة للمستشفيات والعيادات في الرياض، مع التركيز على الأقمشة المضادة للميكروبات والتصاميم المحسنة للراحة.',
      icon: '/images/icons/healthcare-consultation.svg'
    },
    {
      title: 'برامج المؤسسات التعليمية | Educational Institution Programs',
      description: 'برامج أزياء شاملة لمدارس وجامعات الرياض، تشمل التصميم والإنتاج وحلول التوزيع مع خصومات خاصة للمؤسسات التعليمية.',
      icon: '/images/icons/education-programs.svg'
    },
    {
      title: 'خدمات الإنتاج السريع | Rush Production Services',
      description: 'خدمات إنتاج سريعة متاحة حصرياً في مقرنا الرئيسي بالرياض لاحتياجات الأزياء العاجلة خلال 7 أيام عمل.',
      icon: '/images/icons/rush-production.svg'
    }
  ],

  // Enhanced case studies with local clients
  caseStudies: [
    {
      title: 'إعادة تصميم أزياء مدينة الملك سعود الطبية',
      description: 'إعادة تصميم كاملة للأزياء الطبية لأكثر من 3000 موظف، مع دمج أقمشة متقدمة مضادة للميكروبات ووظائف محسنة.',
      image: '/images/case-studies/king-saud-medical.jpg',
      results: '98% رضا الموظفين، انخفاض 15% في مشاكل الأزياء'
    },
    {
      title: 'برنامج الهوية المؤسسية لبنك الرياض',
      description: 'تطوير هوية مؤسسية موحدة من خلال أزياء مصممة بعناية لـ 120 فرعاً عبر المنطقة الوسطى.',
      image: '/images/case-studies/riyadh-bank.jpg',
      results: 'تعزيز التعرف على العلامة التجارية، زيادة 22% في مقاييس ثقة العملاء'
    },
    {
      title: 'مشروع جامعة الملك سعود للأزياء الأكاديمية',
      description: 'تصميم وتنفيذ برنامج أزياء شامل لأكبر جامعة في المملكة مع 65,000 طالب وموظف.',
      image: '/images/case-studies/ksu-uniforms.jpg',
      results: 'تحسين الهوية الأكاديمية، زيادة 30% في الانتماء المؤسسي'
    }
  ],

  // Enhanced FAQs with Arabic content
  faqs: [
    {
      question: 'ما هو الوقت المعتاد لتنفيذ طلبات الأزياء المؤسسية في الرياض؟',
      answer: 'للطلبات المؤسسية العادية، وقت التنفيذ هو 2-3 أسابيع من الموافقة على التصميم. للطلبات العاجلة، نقدم خدمة سريعة يمكنها التسليم خلال 7-10 أيام عمل مقابل رسوم إضافية.'
    },
    {
      question: 'هل تقدمون خدمات القياس في الموقع للشركات في الرياض؟',
      answer: 'نعم، مقرنا الرئيسي في الرياض يقدم خدمات قياس مجانية في الموقع للطلبات المؤسسية من 50 زياً أو أكثر داخل حدود المدينة. للطلبات الأصغر أو المواقع خارج الرياض، قد تطبق رسوم رمزية.'
    },
    {
      question: 'هل يمكنني زيارة معرضكم في الرياض لرؤية عينات الأقمشة وخيارات الأزياء؟',
      answer: 'بالطبع! معرضنا في الرياض يرحب بالزوار خلال ساعات العمل. نوصي بتحديد موعد مع استشاريي التصميم لدينا للحصول على تجربة شخصية مخصصة لصناعتك ومتطلباتك.'
    },
    {
      question: 'ما الصناعات التي تخدمونها بشكل أساسي من موقع الرياض؟',
      answer: 'موقعنا في الرياض يخدم جميع الصناعات الرئيسية، مع خبرة خاصة في الرعاية الصحية والمصارف والمالية والمؤسسات الحكومية والضيافة والتعليم. فريق التصميم لدينا لديه معرفة متخصصة بمتطلبات ولوائح هذه القطاعات في المنطقة الوسطى.'
    }
  ],

  relatedIndustries: ['healthcare', 'corporate', 'education', 'hospitality'] as const,

  // Local clients in Riyadh
  localClients: [
    {
      name: 'مدينة الملك سعود الطبية',
      sector: 'القطاع الطبي',
      employees: '3,000+',
      service: 'أزياء طبية كاملة'
    },
    {
      name: 'بنك الرياض',
      sector: 'القطاع المصرفي',
      employees: '2,500+',
      service: 'هوية مؤسسية موحدة'
    },
    {
      name: 'جامعة الملك سعود',
      sector: 'التعليم العالي',
      employees: '8,000+',
      service: 'أزياء أكاديمية وإدارية'
    },
    {
      name: 'مجموعة بن لادن',
      sector: 'الإنشاءات',
      employees: '1,200+',
      service: 'أزياء صناعية وإدارية'
    }
  ]
};

// metadata moved to ./metadata.ts to allow this page as a Client Component

export default function RiyadhLocationPage() {
  // Industry mappings with Arabic
  type IndustryKey = typeof locationData.relatedIndustries[number];
  const industryMapping: Record<IndustryKey, { name: string, image: string }> = {
    healthcare: {
      name: 'الرعاية الصحية | Healthcare',
      image: '/images/industries/healthcare/healthcare-professional.jpg'
    },
    corporate: {
      name: 'مؤسسي | Corporate',
      image: '/images/industries/corporate/corporate-team.jpg'
    },
    education: {
      name: 'التعليم | Education',
      image: '/images/industries/education/education-uniforms.jpg'
    },
    hospitality: {
      name: 'الضيافة | Hospitality',
      image: '/images/industries/hospitality/hospitality-staff.jpg'
    }
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title="يونيوم الرياض | صناعة وتوريد الأزياء المهنية في العاصمة | UNEOM Riyadh"
        description="قم بزيارة مقر يونيوم الرئيسي في الرياض لخدمات التصنيع والتصميم المتميزة للأزياء المهنية. نقدم أزياء مؤسسية وطبية وضيافة وتعليمية مخصصة مع توصيل سريع في الرياض."
        keywords={[
          'أزياء الرياض',
          'مورد أزياء الرياض',
          'أزياء مؤسسية الرياض',
          'أزياء طبية الرياض',
          'أزياء ضيافة الرياض',
          'أزياء تعليمية الرياض',
          'ملابس عمل مهنية الرياض',
          'تصنيع أزياء الرياض',
          'أزياء مخصصة المملكة العربية السعودية',
          'مقر يونيوم الرياض',
          'أزياء المنطقة الوسطى',
          'معرض أزياء الرياض'
        ]}
        author="فريق يونيوم الرياض | UNEOM Riyadh Team"
        expertise="تصنيع وتصميم الأزياء في الرياض | Uniform Manufacturing & Design in Riyadh"
        contentType="location"
        trustSignals={[
          'المقر الرئيسي في الرياض',
          'نخدم أكثر من 500 شركة في المنطقة الوسطى',
          'خدمات قياس في الموقع',
          'إنتاج سريع متاح',
          'استشاريو تصميم متخصصون'
        ]}
        canonicalUrl="https://uneom.com/locations/riyadh/"
        locale="ar"
      />
      
      {/* Enhanced Hero Section */}
      <section className="riyadh-hero bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'المواقع | Locations', href: '/locations' },
              { label: 'الرياض | Riyadh', href: '/locations/riyadh' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                يونيوم الرياض | UNEOM Riyadh
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                مقرنا الرئيسي لحلول الأزياء المتميزة في العاصمة
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                {locationData.description}
              </p>
              
              {/* Riyadh Stats */}
              <div className="riyadh-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">15</span>
                  <span className="text-sm md:text-base text-blue-200">سنة خبرة</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">500+</span>
                  <span className="text-sm md:text-base text-blue-200">عميل في الرياض</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">24h</span>
                  <span className="text-sm md:text-base text-blue-200">توصيل سريع</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="#contact-info"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  زيارة المعرض | Visit Showroom
                </Button>
                <Button 
                  href="/quote?location=riyadh"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900"
                >
                  طلب عرض سعر | Get Quote
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={locationData.heroImage}
                  alt="مقر يونيوم الرئيسي في الرياض"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for Riyadh location */}
      <section className="riyadh-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول خدمات يونيوم في الرياض
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-primary-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                أين يقع مقر يونيوم الرئيسي في الرياض؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>مقر يونيوم الرئيسي</strong> يقع في قلب العاصمة:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>📍 العنوان: طريق الملك فهد، حي العليا، الرياض 12214</li>
                    <li>⏰ ساعات العمل: الأحد-الخميس 8:30 ص - 5:30 م</li>
                    <li>📞 الهاتف: +966 11 234 5678</li>
                    <li>📱 واتساب: +966 50 123 4567</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-emerald-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                هل توفرون خدمة التوصيل السريع في الرياض؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>نعم</strong>، نوفر خدمة توصيل سريعة ومتميزة في الرياض:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🚚 توصيل مجاني خلال 24 ساعة داخل الرياض</li>
                    <li>⚡ خدمة توصيل عاجلة خلال 6 ساعات (رسوم إضافية)</li>
                    <li>🏢 توصيل مباشر للمكاتب والمؤسسات</li>
                    <li>📦 تغليف مؤسسي احترافي</li>
                    <li>📋 تتبع الطلب عبر الواتساب</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Introduction & Contact */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Introduction */}
            <div className="lg:col-span-2">
              <SectionHeading subtitle="معلومات عن موقعنا | About Our Location">
                مقرنا الرئيسي في الرياض
                <span className="block text-lg mt-2 text-gray-600">Our Headquarters in Riyadh</span>
              </SectionHeading>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {locationData.introduction}
              </p>
              
              {/* Local Clients Showcase */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">عملاؤنا المتميزون في الرياض</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locationData.localClients.map((client, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg">
                      <h4 className="font-semibold text-primary-600">{client.name}</h4>
                      <p className="text-sm text-gray-600">{client.sector}</p>
                      <p className="text-sm text-gray-500">{client.employees} موظف - {client.service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-8 shadow-md" id="contact-info">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                زيارتنا | Visit Us
              </h2>
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  معلومات الاتصال | Contact Information
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-700 flex items-center">
                    <span className="w-4 h-4 mr-2">📍</span>
                    {locationData.address}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="w-4 h-4 mr-2">📞</span>
                    {locationData.phone}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="w-4 h-4 mr-2">📱</span>
                    {locationData.whatsapp}
                  </p>
                  <p className="text-gray-700 flex items-center">
                    <span className="w-4 h-4 mr-2">✉️</span>
                    {locationData.email}
                  </p>
                </div>
                
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                  ساعات العمل | Working Hours
                </h3>
                <p className="text-gray-700 mb-4">{locationData.workingHours}</p>
                
                <div className="flex flex-col gap-2">
                  <a 
                    href={locationData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    الاتجاهات | Get Directions
                  </a>
                  <a 
                    href={`https://wa.me/${locationData.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    واتساب | WhatsApp
                  </a>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image 
                  src={locationData.mapImage}
                  alt="خريطة موقع يونيوم في الرياض"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="تعرف على فريقنا المتخصص | Meet Our Specialized Team" centered>
            فريق يونيوم في الرياض
            <span className="block text-lg mt-2 text-gray-600">UNEOM Riyadh Team</span>
          </SectionHeading>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            خبراء متخصصون مستعدون لمساعدتك في تحقيق رؤية الأزياء الخاصة بك. 
            تعرف على فريقنا المتفانى في الرياض.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {locationData.team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 mb-4 font-medium">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced Specialized Services */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading subtitle="خدمات متخصصة في الرياض | Specialized Services in Riyadh" centered>
            خدماتنا المتخصصة
            <span className="block text-lg mt-2 text-gray-600">Our Specialized Services</span>
          </SectionHeading>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            نقدم مجموعة من الخدمات المصممة لتلبية الاحتياجات الفريدة للشركات والمؤسسات في الرياض والمنطقة الوسطى.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locationData.specializedServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 flex items-start hover:bg-gray-100 transition-colors">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {index === 0 ? '🏢' : index === 1 ? '🏥' : index === 2 ? '🎓' : '⚡'}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced Case Studies */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="قصص نجاح محلية | Local Success Stories" centered>
            نجاحاتنا في الرياض
            <span className="block text-lg mt-2 text-gray-600">Our Success in Riyadh</span>
          </SectionHeading>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            اكتشف كيف ساعدنا عملاءنا في الرياض على تعزيز هويتهم المؤسسية وتحسين تجربة الموظفين من خلال حلول الأزياء المبتكرة.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locationData.caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image 
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {study.description}
                  </p>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-primary-800 uppercase mb-2">
                      النتائج | Results
                    </h4>
                    <p className="text-gray-700 text-sm">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading subtitle="أسئلة شائعة | Common Questions" centered>
            الأسئلة الشائعة
            <span className="block text-lg mt-2 text-gray-600">Frequently Asked Questions</span>
          </SectionHeading>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            إجابات على الاستفسارات الشائعة من عملائنا في الرياض حول خدماتنا ومنتجاتنا.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {locationData.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related Industries */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="حلول الصناعات في الرياض | Industry Solutions in Riyadh" centered>
            استكشف حلول الصناعات
            <span className="block text-lg mt-2 text-gray-600">Explore Industry Solutions</span>
          </SectionHeading>
          
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
            نقدم حلول أزياء متخصصة مصممة للتحديات والمتطلبات الفريدة لكل صناعة في المنطقة الوسطى.
          </p>
          
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
                    href={`/industries/${industry}`}
                    className="inline-block bg-white/90 hover:bg-white text-primary-700 text-sm font-semibold py-2 px-4 rounded transition-colors duration-200"
                  >
                    عرض الحلول | View Solutions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مستعد لتطوير تجربة الأزياء في الرياض؟
              <span className="block text-xl md:text-2xl mt-4 text-blue-100">
                Ready to Elevate Your Uniform Experience in Riyadh?
              </span>
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              تواصل مع فريق الرياض اليوم لمناقشة متطلبات الأزياء الخاصة بك والحصول على حلول مخصصة لمؤسستك.
              استشارة مجانية وخدمة قياس في الموقع متاحة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/quote?location=riyadh"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                طلب عرض سعر | Request Quote
              </Link>
              <Link 
                href="tel:+966112345678"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold rounded-lg transition-all duration-300"
              >
                اتصل الآن | Call Now
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-2xl mx-auto">
              <div className="feature">
                <span className="block text-2xl mb-2">🏢</span>
                <span className="text-sm">استشارة مجانية</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">📏</span>
                <span className="text-sm">قياس في الموقع</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">⚡</span>
                <span className="text-sm">إنتاج سريع</span>
              </div>
              <div className="feature">
                <span className="block text-2xl mb-2">🚚</span>
                <span className="text-sm">توصيل خلال 24h</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 