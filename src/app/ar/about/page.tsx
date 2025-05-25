'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getTranslation } from '@/lib/i18n';
import { getLocalizedImagePath } from '@/lib/utils/imageLoader';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function AboutPageArabic() {
  // Get Arabic translations
  const t = getTranslation('ar');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Team members data
  const teamMembers = [
    {
      name: 'عبدالله القحطاني',
      role: 'الرئيس التنفيذي والمؤسس',
      image: '/images/about/Team/Abdullah_Al-Qahtani-2.png',
      bio: 'مع أكثر من 20 عاماً في صناعة المنسوجات، قام عبدالله بتأسيس يونيوم برؤية لإحداث ثورة في الأزياء المهنية في المملكة العربية السعودية. خبرته في احتياجات السوق المحلية والمعايير الدولية جعلت من يونيوم رائدة في هذا المجال.'
    },
    {
      name: 'سارة الحربي',
      role: 'مديرة التصميم',
      image: '/images/about/Team/Sara_Al-Harbi.png',
      bio: 'تتمتع سارة بخبرة تزيد عن 15 عاماً في تصميم الأزياء، مع تدريب متخصص في تصميم الأزياء الموحدة. نهجها المبتكر يجمع بين الوظائفية والراحة والأناقة، مما يخلق أزياء موحدة تلبي المتطلبات الفريدة لمناخ المملكة العربية السعودية واحتياجاتها الثقافية.'
    },
    {
      name: 'محمد العتيبي',
      role: 'مدير العمليات',
      image: '/images/about/Team/Mohammed_Al-Otaibi.png',
      bio: 'يشرف محمد على مرافق الإنتاج وسلسلة التوريد في يونيوم. تضمن خلفيته في تصنيع المنسوجات إنتاج الأزياء الموحدة بأعلى معايير الجودة مع تلبية مواعيد التسليم الصارمة.'
    },
    {
      name: 'لينا الرشيد',
      role: 'مديرة علاقات العملاء',
      image: '/images/about/Team/Lina_Al-Rashid.png',
      bio: 'تقود لينا فريق علاقات العملاء لدينا، مما يضمن حصول كل عميل على اهتمام شخصي. مع خبرتها في قطاعي الضيافة والرعاية الصحية، فهي تفهم متطلبات الزي الموحد الفريدة لمختلف الصناعات.'
    }
  ];
  
  // Industry partnerships
  const partners = [
    {
      name: 'جمعية المستشفيات السعودية',
      logo: '/images/about/Saudi_Hospitals_Association.png',
      description: 'مزود الزي الرسمي للمستشفيات الأعضاء'
    },
    {
      name: 'أكاديمية الطيران السعودية',
      logo: '/images/about/Saudi_Aviation_Academy.png',
      description: 'المورد الحصري لزي طلاب الطيران'
    },
    {
      name: 'غرفة تجارة الرياض',
      logo: '/images/about/riyadh_chamber_of_commerce.png',
      description: 'رائد معترف به في حلول الأزياء الموحدة للشركات'
    },
    {
      name: 'جمعية الفنادق السعودية',
      logo: '/images/about/Saudi_Hotel_Association.png',
      description: 'شريك الزي المفضل للفنادق الفاخرة'
    }
  ];
  
  // Quality standards and certifications - Update with new paths
  const certifications = [
    {
      name: 'آيزو 9001:2015',
      description: 'أنظمة إدارة الجودة',
      logo: '/images/certificate/ISO_90012015.png'
    },
    {
      name: 'معيار أويكو-تكس® 100',
      description: 'مختبر للمواد الضارة',
      logo: '/images/certificate/OEKO-TEX.png'
    },
    {
      name: 'علامة الجودة السعودية',
      description: 'تلبي المعايير السعودية لمنتجات النسيج',
      logo: '/images/certificate/Saudi_Quality_Mark.png'
    },
    {
      name: 'معتمد من GOTS',
      description: 'المعيار العالمي للمنسوجات العضوية',
      logo: '/images/certificate/GOTS_Certified.png'
    }
  ];
  
  // Company values
  const values = [
    {
      id: 'quality',
      title: "UNEOM - Professional Uniforms",
      description: 'نستخدم فقط أفضل المواد والحرفية في صناعة الزي الموحد لضمان المتانة والراحة والمظهر المهني.',
      icon: '/images/icons/premium-quality.svg',
    },
    {
      id: 'innovation',
      title: 'الابتكار',
      description: 'نسعى باستمرار لتحسين منتجاتنا من خلال دمج تقنيات الأقمشة الجديدة والتصميمات العصرية والحلول المبتكرة.',
      icon: '/images/icons/customization-icon.svg',
    },
    {
      id: 'integrity',
      title: 'النزاهة',
      description: 'نتعامل مع عملائنا وموظفينا وشركائنا بأعلى مستويات الصدق والأخلاق والاحترام.',
      icon: '/images/icons/compliance-shield.svg',
    },
    {
      id: 'culture',
      title: 'الاحترام الثقافي',
      description: 'نصمم منتجاتنا مع مراعاة خصوصيات المجتمع السعودي والثقافة الإسلامية، ونحترم العادات والتقاليد المحلية.',
      icon: '/images/icons/culturally-appropriate.svg',
    },
  ];
  
  // Milestones
  const milestones = [
    {
      year: '2005',
      title: 'تأسيس يونيوم',
      description: 'تأسست يونيوم في الرياض كشركة متخصصة في توريد الزي الموحد للمستشفيات.',
    },
    {
      year: '2010',
      title: 'التوسع في قطاع الطيران',
      description: 'بدأنا في توريد أزياء موحدة لشركات الطيران المحلية والإقليمية.',
    },
    {
      year: '2015',
      title: 'افتتاح منشأة الإنتاج في جدة',
      description: 'افتتحنا منشأة إنتاج جديدة في جدة لتلبية الطلب المتزايد.',
    },
    {
      year: '2018',
      title: 'شهادة ISO 9001',
      description: 'حصلنا على شهادة ISO 9001 لنظام إدارة الجودة.',
    },
    {
      year: '2020',
      title: 'توسيع خدمات التصميم المخصصة',
      description: 'أطلقنا قسم تصميم متخصص للزي الموحد المخصص للشركات السعودية.',
    },
    {
      year: '2022',
      title: 'الحصول على جائزة التميز في التوريد',
      description: 'فزنا بجائزة التميز في توريد الزي الموحد في المملكة العربية السعودية.',
    },
    {
      year: '2023',
      title: 'إطلاق خط إنتاج مستدام',
      description: 'أطلقنا خط إنتاج جديد للأزياء المستدامة باستخدام مواد صديقة للبيئة وتقنيات إنتاج مبتكرة.',
    },
    {
      year: '2024',
      title: 'توسع إقليمي',
      description: 'افتتحنا مكاتب تمثيلية في دولة الإمارات العربية المتحدة وقطر لخدمة العملاء في جميع أنحاء الخليج العربي.',
    },
    {
      year: '2025',
      title: 'الابتكار في تقنيات الأقمشة الذكية',
      description: 'أطلقنا سلسلة جديدة من الأزياء الموحدة المزودة بتقنيات ذكية متطورة تناسب المناخ المحلي وتلبي احتياجات القطاعات المختلفة.',
    },
  ];
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src={getLocalizedImagePath('/images/banner-placeholder.jpg', 'ar')}
            alt="عن يونيوم - المورد الرائد للزي الموحد في المملكة العربية السعودية"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container>
          <motion.div 
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              المورد الرائد للزي الموحد في المملكة العربية السعودية
            </h1>
            <p className="text-xl opacity-90 mb-8">
              نحن نقدم حلول الزي الموحد الاحترافية للشركات السعودية منذ أكثر من 15 عامًا
            </p>
          </motion.div>
        </Container>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading>قصتنا</SectionHeading>
              <div className="space-y-4 text-lg">
                <p>
                  تأسست يونيوم في عام 2005 في الرياض، المملكة العربية السعودية، بهدف واضح: توفير زي موحد عالي الجودة ومناسب ثقافيًا للمؤسسات السعودية والخليجية.
                </p>
                <p>
                  بدأنا رحلتنا بخدمة قطاع الرعاية الصحية، حيث قدمنا ملابس طبية وسكرابات تجمع بين الراحة والمتانة والمظهر المهني. ومع نمو سمعتنا في تقديم منتجات ممتازة وخدمة استثنائية، توسعنا تدريجيًا إلى قطاعات أخرى بما في ذلك الطيران والضيافة والشركات والتعليم.
                </p>
                <p>
                  اليوم، أصبحت يونيوم المورد المفضل للزي الموحد للعديد من المؤسسات الرائدة في المملكة العربية السعودية ودول الخليج. تضم منشآتنا الإنتاجية في الرياض وجدة أكثر من 200 موظف متخصص، ونفخر بأن 70% من فريقنا هم من المواطنين السعوديين.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={getLocalizedImagePath('/images/about/company-headquarters.jpg', 'ar')}
                    alt="المقر الرئيسي ليونيوم في الرياض"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={getLocalizedImagePath('/images/about/production-facility.jpg', 'ar')}
                    alt="منشأة إنتاج يونيوم"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={getLocalizedImagePath('/images/about/design-team.jpg', 'ar')}
                    alt="فريق التصميم في يونيوم"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={getLocalizedImagePath('/images/about/uniform-showcase.jpg', 'ar')}
                    alt="عرض تشكيلة يونيوم للزي الموحد"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Saudi Market Expertise Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <SectionHeading as="h2">خبرتنا في السوق السعودي</SectionHeading>
              <div className="space-y-4 text-lg text-neutral-700">
                <p>
                  تتميز يونيوم بفهمها العميق للسوق السعودي، مما يميزنا في صناعة الزي الموحد. نحن ندرك أن بيئات العمل السعودية لها متطلبات فريدة تختلف عن المعايير الدولية.
                </p>
                <p>
                  تأخذ تصاميمنا في الاعتبار مناخ المملكة، حيث نستخدم أقمشة تتنفس وتحافظ على المظهر المهني حتى في درجات الحرارة القصوى. كما نوفر خيارات تحترم قواعد اللباس الإسلامي، بما في ذلك تصاميم محتشمة وأزياء موحدة مناسبة للحجاب في جميع القطاعات.
                </p>
                <p>
                  تماشياً مع رؤية المملكة 2030، نحن ملتزمون بالتوطين، حيث يشكل المواطنون السعوديون أكثر من 70% من القوى العاملة لدينا. تضمن منشآتنا التصنيعية في المملكة سرعة التسليم والاستجابة لاحتياجات العملاء المحليين.
                </p>
                <p>
                  لقد جعلنا التزامنا بفهم المتطلبات الخاصة بكل قطاع في المملكة العربية السعودية الشريك الموثوق للزي الموحد للمؤسسات الصحية وشركات الطيران ومجموعات الضيافة والشركات في جميع أنحاء المملكة.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 relative h-96 rounded-lg overflow-hidden shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Image
                src={getLocalizedImagePath('/images/about/Saudi_Market_Expertise.jpg', 'ar')}
                alt="خبرة يونيوم في السوق السعودي"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Industry Partnerships Section */}
      <section className="py-16">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>شراكات صناعية</SectionHeading>
            <p className="text-lg text-neutral-700">
              تتعاون يونيوم مع منظمات رائدة لوضع معايير جديدة في الأزياء المهنية في جميع أنحاء المملكة العربية السعودية.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl"
                variants={fadeIn}
              >
                <div className="h-24 flex items-center justify-center mb-6">
                  <Image
                    src={getLocalizedImagePath(partner.logo, 'ar')}
                    alt={partner.name}
                    width={180}
                    height={90}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-3 text-primary-700">{partner.name}</h3>
                <p className="text-neutral-600">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Mission & Values Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مهمتنا وقيمنا</SectionHeading>
            <p className="text-lg text-neutral-700">
              في يونيوم، مهمتنا هي رفع الصورة المهنية للشركات السعودية من خلال أزياء موحدة عالية الجودة ومناسبة ثقافيًا تعزز هوية العلامة التجارية وتجربة الموظفين.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value) => (
              <motion.div
                key={value.id}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image 
                    src={value.icon} 
                    alt={value.title} 
                    width={32} 
                    height={32}
                    className="text-primary-600"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Our Leadership Team Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>فريق القيادة لدينا</SectionHeading>
            <p className="text-lg text-neutral-700">
              تعرف على المحترفين ذوي الخبرة الذين يقودون التزام يونيوم بالتميز في تصميم وتصنيع وخدمة الزي الموحد.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={fadeIn}
              >
                <div className="relative h-80 w-full md:w-2/5">
                  <Image
                    src={getLocalizedImagePath(member.image, 'ar')}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center md:w-3/5">
                  <h3 className="text-2xl font-bold mb-1 text-primary-700">{member.name}</h3>
                  <p className="text-primary-600 font-medium text-lg mb-4">{member.role}</p>
                  <div className="w-16 h-1 bg-primary-500 mb-4 rounded-full"></div>
                  <p className="text-neutral-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
      
      {/* Milestones Section */}
      <section className="py-16">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>مراحل تطورنا</SectionHeading>
            <p className="text-lg text-neutral-700">
              استعرض رحلة يونيوم والإنجازات الرئيسية التي حققناها على مر السنين.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex md:flex-row flex-col md:items-center"
                  variants={fadeIn}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-left' : 'md:order-3 md:text-right'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-primary-600 mb-2">{milestone.title}</h3>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-24 flex justify-center items-center py-4 md:py-0">
                    <div className="rounded-full bg-primary-600 text-white w-12 h-12 flex items-center justify-center font-bold z-10">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : ''}`}></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>
      
      {/* Quality Standards Section */}
      <section className="py-16 bg-primary-50">
        <Container>
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <SectionHeading centered>معايير الجودة والامتثال</SectionHeading>
            <p className="text-lg text-neutral-700">
              يتم تصنيع كل زي موحد من يونيوم ليلبي أعلى معايير الجودة الدولية والسعودية.
            </p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.name}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                variants={fadeIn}
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={80}
                    height={80}
                    className="max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-neutral-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="mt-12 bg-white p-6 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-xl font-bold mb-4">التزامنا بالجودة</h3>
            <div className="space-y-4 text-neutral-700">
              <p>
                في يونيوم، الجودة ليست مجرد خاصية لمنتجاتنا - إنها أساس عملنا. كل زي موحد يخضع لاختبارات صارمة في مراحل متعددة:
              </p>
              <ul className="list-disc pr-5 space-y-2 text-right">
                <li>اختبار الأقمشة للمتانة وثبات اللون والراحة</li>
                <li>فحص التصنيع لقوة الخياطة والتشطيب</li>
                <li>اختبار المقاس على أنواع مختلفة من الأجسام</li>
                <li>اختبار الغسيل لضمان المتانة أثناء الغسيل الصناعي</li>
                <li>التحقق من الامتثال لمعايير السلامة الخاصة بكل صناعة</li>
              </ul>
              <p>
                يضمن نظام إدارة الجودة لدينا الاتساق في جميع عمليات الإنتاج، سواء لعيادة صغيرة أو لسلسلة فنادق على مستوى البلاد. نحن نقف وراء منتجاتنا بضمانات شاملة ودعم عملاء متجاوب.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">هل تبحث عن حلول زي موحد لمؤسستك؟</h2>
            <p className="text-xl mb-8 opacity-90">
              اتصل بنا اليوم لمناقشة احتياجاتك والحصول على عرض سعر مخصص.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/ar/contact"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                تواصل معنا
              </a>
              <a
                href="/ar/shop"
                className="inline-block bg-primary-700 text-white hover:bg-primary-800 px-8 py-3 rounded-md font-medium text-lg shadow-md transition-colors duration-200"
              >
                استعرض منتجاتنا
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 
