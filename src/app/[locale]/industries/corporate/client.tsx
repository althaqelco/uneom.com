'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/sections/corporate/ImageGallery';
import { usePathname } from 'next/navigation';

export function ClientPage() {
  // Get the current pathname to determine locale
  const pathname = usePathname();
  const locale = pathname?.startsWith('/ar') ? 'ar' : 'en';
  const isRtl = locale === 'ar';

  // Define content based on locale
  const content = {
    title: locale === 'ar' 
      ? "الزي الموحد الاحترافي وملابس العمل للشركات في المملكة العربية السعودية" 
      : "Professional Corporate Uniforms & Business Attire in Saudi Arabia",
    subtitle: locale === 'ar'
      ? "ملابس عمل مُصممة خصيصًا للبيئات المؤسسية التي توازن بين الاحترافية وثقافة مكان العمل السعودي"
      : "Tailored business attire for corporate environments that balance professionalism with Saudi workplace culture",
    intro: locale === 'ar'
      ? [
          "في المشهد التجاري المتطور بسرعة في المملكة العربية السعودية، تلعب ملابس الشركات دورًا حاسمًا في تأسيس المصداقية المهنية وتعزيز هوية العلامة التجارية. تقدم يونيوم حلول الزي الموحد المتميزة للشركات التي تساعد المؤسسات على الحفاظ على صورة أنيقة ومتناسقة مع احترام القيم الثقافية السعودية.",
          "تشمل مجموعاتنا للشركات البدلات المُفصلة، وقمصان العمل، والبلوزات، والفساتين الرسمية، وإكسسوارات مكان العمل المصممة لإظهار الاحترافية مع ضمان الراحة طوال يوم العمل. كل قطعة مصنوعة من أقمشة عالية الجودة تم اختيارها خصيصًا لمناخ المملكة العربية السعودية وبيئات الشركات.",
          "نحن نقدم خدمات التصميم المخصص والاستشارات المهنية لضمان أن الزي الموحد يعكس هوية الشركة وقيمها. من البنوك الكبيرة إلى الشركات الناشئة، نعمل مع مختلف أنواع المؤسسات لتوفير حلول مخصصة تلبي احتياجاتها الفريدة.",
          "خبرتنا في السوق السعودي تمكننا من فهم التحديات الخاصة بكل قطاع وتقديم حلول عملية ومبتكرة. نحن نضمن أن كل قطعة تلبي أعلى معايير الجودة والراحة والمظهر المهني."
        ]
      : [
          "In Saudi Arabia's rapidly evolving business landscape, corporate attire plays a crucial role in establishing professional credibility and reinforcing brand identity. UNEOM delivers premium corporate uniform solutions that help organizations maintain a polished and consistent image while respecting Saudi cultural values.",
          "Our corporate collections include tailored suits, business shirts, blouses, formal dresses, and workplace accessories designed to project professionalism while ensuring comfort throughout the workday. Each piece is crafted from high-quality fabrics selected specifically for Saudi Arabia's climate and corporate environments.",
          "We provide custom design services and professional consultations to ensure that uniforms reflect the company's identity and values. From major banks to emerging startups, we work with various types of organizations to provide customized solutions that meet their unique needs.",
          "Our expertise in the Saudi market enables us to understand the specific challenges of each sector and provide practical and innovative solutions. We guarantee that every piece meets the highest standards of quality, comfort, and professional appearance."
        ],
    corporateCategories: locale === 'ar'
      ? [
          {
            title: "الزي الرسمي التنفيذي",
            description: "ملابس راقية للمديرين والمسؤولين التنفيذيين، تشمل البدلات الفاخرة والقمصان الرسمية والإكسسوارات التي تعكس المكانة القيادية وتتناسب مع بيئة الأعمال السعودية المتطورة.",
            image: "/images/corporate/executive-suits.jpg"
          },
          {
            title: "أزياء موظفي المكاتب",
            description: "ملابس مهنية أنيقة ومريحة لموظفي المكاتب، تجمع بين المظهر الرسمي والراحة العملية للاستخدام اليومي، مع مراعاة الذوق السعودي والاحتياجات المناخية.",
            image: "/images/corporate/office-wear.jpg"
          },
          {
            title: "زي فريق خدمة العملاء",
            description: "أزياء موحدة مميزة لفرق خدمة العملاء والاستقبال، تعكس هوية العلامة التجارية وتساعد العملاء على التعرف بسهولة على موظفي الخدمة مع الحفاظ على مظهر احترافي.",
            image: "/images/corporate/customer-service.jpg"
          },
          {
            title: "ملابس الفعاليات المؤسسية",
            description: "تصاميم خاصة للفعاليات والمؤتمرات والمناسبات الرسمية، توفر مظهراً موحداً وأنيقاً يعزز الصورة المهنية للمؤسسة خلال الأحداث العامة.",
            image: "/images/corporate/corporate-events.jpg"
          }
        ]
      : [
          {
            title: "Executive Formal Attire",
            description: "Premium clothing for directors and executives, including luxury suits, formal shirts, and accessories that reflect leadership status and align with Saudi Arabia's sophisticated business environment.",
            image: "/images/corporate/executive-suits.jpg"
          },
          {
            title: "Office Staff Uniforms",
            description: "Elegant and comfortable professional clothing for office staff, combining formal appearance with practical comfort for daily use, considering Saudi taste and climate requirements.",
            image: "/images/corporate/office-wear.jpg"
          },
          {
            title: "Customer Service Team Uniforms",
            description: "Distinctive uniforms for customer service and reception teams that reflect brand identity and help customers easily identify service staff while maintaining a professional appearance.",
            image: "/images/corporate/customer-service.jpg"
          },
          {
            title: "Corporate Event Attire",
            description: "Special designs for events, conferences, and formal occasions that provide a unified and elegant appearance that enhances the organization's professional image during public events.",
            image: "/images/corporate/corporate-events.jpg"
          }
        ],
    standards: locale === 'ar'
      ? [
          {
            title: "الالتزام بالمعايير السعودية",
            description: "نلتزم بأحدث توجيهات وزارة الموارد البشرية والتنمية الاجتماعية بشأن الزي المهني في المملكة، ونضمن أن جميع تصاميمنا تتوافق مع القيم الثقافية المحلية."
          },
          {
            title: "توافق مع اللوائح التنظيمية للقطاعات",
            description: "نطبق معايير متخصصة لكل قطاع، مع مراعاة متطلبات الهيئات التنظيمية للقطاع المصرفي والمالي والقانوني وغيرها من القطاعات الخاضعة للوائح محددة."
          },
          {
            title: "استدامة المنتجات وأخلاقيات التصنيع",
            description: "نستخدم مواد مستدامة ونتبع ممارسات تصنيع أخلاقية تتوافق مع رؤية المملكة 2030 للاستدامة البيئية والمسؤولية الاجتماعية للشركات."
          }
        ]
      : [
          {
            title: "Adherence to Saudi Standards",
            description: "We adhere to the latest Ministry of Human Resources and Social Development guidelines on professional attire in the Kingdom, ensuring all our designs align with local cultural values."
          },
          {
            title: "Sector-Specific Regulatory Compliance",
            description: "We implement specialized standards for each sector, considering the requirements of regulatory bodies for banking, financial, legal, and other regulated sectors."
          },
          {
            title: "Product Sustainability and Ethical Manufacturing",
            description: "We use sustainable materials and follow ethical manufacturing practices that align with Saudi Vision 2030 for environmental sustainability and corporate social responsibility."
          }
        ],
    benefits: locale === 'ar'
      ? [
          {
            title: "تمثيل احترافي للعلامة التجارية",
            description: "زي موحد متناسق للشركات يعزز الهوية البصرية لمؤسستك ويعكس صورة مهنية موحدة للعملاء والشركاء."
          },
          {
            title: "خبرة في ثقافة الأعمال السعودية",
            description: "تصاميم تحترم معايير مكان العمل السعودي والقيم الثقافية مع الحفاظ على معايير الأعمال الدولية."
          },
          {
            title: "أقمشة مناسبة للمناخ",
            description: "مواد متميزة تم اختيارها للراحة في مناخ المملكة العربية السعودية وبيئات المكاتب المكيفة."
          }
        ]
      : [
          {
            title: "Professional Brand Representation",
            description: "Cohesive corporate attire that reinforces your organization's visual identity and projects a unified professional image to clients and partners."
          },
          {
            title: "Saudi Business Culture Expertise",
            description: "Designs that respect Saudi workplace norms and cultural values while maintaining international business standards."
          },
          {
            title: "Climate-Appropriate Fabrics",
            description: "Premium materials selected for comfort in Saudi Arabia's climate and air-conditioned office environments."
          }
        ],
    cta: {
      text: locale === 'ar' ? "اطلب عرض سعر" : "Request a Quote",
      url: locale === 'ar' ? "/ar/quote" : "/quote"
    },
    gallery: {
      title: locale === 'ar' ? "معرض صور الأزياء المؤسسية" : "Corporate Uniforms Gallery"
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <Image
            src="/images/corporate/corporate_uniform_formal.jpg"
            alt={content.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-xl opacity-90 mb-8">{content.subtitle}</p>
            <Link 
              href={content.cta.url}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div>
                {content.intro.map((paragraph, index) => (
                  <p key={index} className={`mb-4 text-lg ${isRtl ? 'text-right' : 'text-left'}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative h-96 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/corporate/corporate_business_uniform.jpg"
                alt={locale === 'ar' ? "الزي الموحد المؤسسي" : "Corporate Uniform"}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Categories Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? "فئات الزي المؤسسي المتخصصة" : "Specialized Corporate Uniform Categories"}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {locale === 'ar' 
                ? "مجموعة شاملة من الحلول المصممة خصيصًا لمختلف الأدوار والوظائف في بيئة الشركات"
                : "A comprehensive range of solutions tailored for different roles and functions in the corporate environment"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.corporateCategories.map((category, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.2, duration: 0.5 } 
                  }
                }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row gap-6"
              >
                <div className="relative h-48 w-full md:w-1/3 rounded-lg overflow-hidden">
                  <Image
                    src={category.image || "/images/corporate/placeholder.jpg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`flex-1 ${isRtl ? 'text-right' : ''}`}>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-neutral-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? "المعايير والامتثال" : "Standards & Compliance"}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {locale === 'ar' 
                ? "نلتزم بأعلى معايير الجودة والامتثال للمتطلبات التنظيمية والثقافية في المملكة العربية السعودية" 
                : "We adhere to the highest standards of quality and compliance with regulatory and cultural requirements in Saudi Arabia"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.standards.map((standard, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.2, duration: 0.5 } 
                  }
                }}
                className="bg-neutral-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
                <p className="text-neutral-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' ? "مزايا الزي الموحد للشركات من يونيوم" : "UNEOM Corporate Uniform Benefits"}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {locale === 'ar' 
                ? "نقدم حلول ملابس مؤسسية تجمع بين الأناقة والراحة والمتانة" 
                : "We provide corporate attire solutions that combine elegance, comfort, and durability"}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: index * 0.2, duration: 0.5 } 
                  }
                }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery locale={locale} />

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'ar' 
                ? "ارتقِ بصورة شركتك مع حلول الزي الموحد المهنية" 
                : "Elevate Your Corporate Image with Professional Uniform Solutions"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {locale === 'ar'
                ? "اتصل بمتخصصي الزي الموحد للشركات لدينا لمناقشة متطلبات مؤسستك الخاصة"
                : "Contact our corporate uniform specialists to discuss your organization's specific requirements"}
            </p>
            <Link 
              href={content.cta.url}
              className="bg-white text-primary-600 hover:bg-neutral-100 px-8 py-4 rounded-md font-medium transition-colors duration-300 inline-block"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}