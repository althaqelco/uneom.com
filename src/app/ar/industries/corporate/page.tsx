'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageGallery from '@/components/sections/corporate/ImageGallery';

export default function CorporatePage() {
  const locale = 'ar';
  const isRtl = true;
  
  // Content for the Arabic version
  const content = {
    title: "الزي الموحد الاحترافي وملابس العمل للشركات في المملكة العربية السعودية",
    subtitle: "ملابس عمل مُصممة خصيصًا للبيئات المؤسسية التي توازن بين الاحترافية وثقافة مكان العمل السعودي",
    intro: [
      "في المشهد التجاري المتطور بسرعة في المملكة العربية السعودية، تلعب ملابس الشركات دورًا حاسمًا في تأسيس المصداقية المهنية وتعزيز هوية العلامة التجارية. تقدم يونيوم حلول الزي الموحد المتميزة للشركات التي تساعد المؤسسات على الحفاظ على صورة أنيقة ومتناسقة مع احترام القيم الثقافية السعودية.",
      "تشمل مجموعاتنا للشركات البدلات المُفصلة، وقمصان العمل، والبلوزات، والفساتين الرسمية، وإكسسوارات مكان العمل المصممة لإظهار الاحترافية مع ضمان الراحة طوال يوم العمل. كل قطعة مصنوعة من أقمشة عالية الجودة تم اختيارها خصيصًا لمناخ المملكة العربية السعودية وبيئات الشركات."
    ],
    benefits: [
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
    ],
    cta: {
      text: "اطلب عرض سعر",
      url: "/ar/quote"
    },
    gallery: {
      title: "معرض صور الأزياء المؤسسية"
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <div dir="rtl" className="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-neutral-800 to-neutral-900 text-white py-24">
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
            className="max-w-3xl mr-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-right">{content.title}</h1>
            <p className="text-xl opacity-90 mb-8 text-right">{content.subtitle}</p>
            <div className="text-right">
              <Link 
                href={content.cta.url}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                {content.cta.text}
              </Link>
            </div>
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
              className="order-2 md:order-1"
            >
              <div>
                {content.intro.map((paragraph, index) => (
                  <p key={index} className="mb-4 text-lg text-right">
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
              className="relative h-96 rounded-lg overflow-hidden shadow-xl order-1 md:order-2"
            >
              <Image
                src="/images/corporate/corporate_business_uniform.jpg"
                alt="الزي الموحد المؤسسي"
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
              مزايا الزي الموحد للشركات من يونيوم
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              نقدم حلول ملابس مؤسسية تجمع بين الأناقة والراحة والمتانة
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
                <h3 className="text-xl font-bold mb-3 text-right">{benefit.title}</h3>
                <p className="text-neutral-600 text-right">{benefit.description}</p>
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
              ارتقِ بصورة شركتك مع حلول الزي الموحد المهنية
            </h2>
            <p className="text-lg mb-8 opacity-90">
              اتصل بمتخصصي الزي الموحد للشركات لدينا لمناقشة متطلبات مؤسستك الخاصة
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
