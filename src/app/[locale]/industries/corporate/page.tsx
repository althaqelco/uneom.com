'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/sections/corporate/ImageGallery';

// Definir locales para la generación estática
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ar' }
  ];
}

export default function CorporatePage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
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
          "تشمل مجموعاتنا للشركات البدلات المُفصلة، وقمصان العمل، والبلوزات، والفساتين الرسمية، وإكسسوارات مكان العمل المصممة لإظهار الاحترافية مع ضمان الراحة طوال يوم العمل. كل قطعة مصنوعة من أقمشة عالية الجودة تم اختيارها خصيصًا لمناخ المملكة العربية السعودية وبيئات الشركات."
        ]
      : [
          "In Saudi Arabia's rapidly evolving business landscape, corporate attire plays a crucial role in establishing professional credibility and reinforcing brand identity. UNEOM delivers premium corporate uniform solutions that help organizations maintain a polished and consistent image while respecting Saudi cultural values.",
          "Our corporate collections include tailored suits, business shirts, blouses, formal dresses, and workplace accessories designed to project professionalism while ensuring comfort throughout the workday. Each piece is crafted from high-quality fabrics selected specifically for Saudi Arabia's climate and corporate environments."
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
              className="bg-white text-primary-600 hover:bg-neutral-100 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              {content.cta.text}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}