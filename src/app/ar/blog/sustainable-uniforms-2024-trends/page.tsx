'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Updated article data with new image paths and alt texts
const article = {
  title: "أزياء العمل المستدامة: أبرز اتجاهات 2024 في المملكة",
  author: "فريق UNEOM",
  date: "15 يوليو 2024",
  image: "/images/sustainability/modern-sustainable-workwear-ksa.webp",
  altText: "عمال يرتدون زي عمل حديث ومستدام في منشأة صناعية سعودية",
  introduction: "في عالم يتزايد وعيه بأهمية الاستدامة، تشهد صناعة أزياء العمل تحولًا كبيرًا. لم يعد المتانة والراحة هما المعيارين الوحيدين؛ فالأثر البيئي والاجتماعي أصبح جزءًا لا يتجزأ من عملية الاختيار. تستكشف هذه المقالة أبرز اتجاهات أزياء العمل المستدامة لعام 2024 وتأثيرها في السوق السعودي.",
  sections: [
    {
      heading: "1. الأقمشة المعاد تدويرها والمبتكرة",
      content: `
        <p>تتصدر الأقمشة المصنوعة من مواد معاد تدويرها، مثل البوليستر المعاد تدويره من الزجاجات البلاستيكية (rPET) والنايلون المعاد تدويره من شباك الصيد، قائمة الاتجاهات. بالإضافة إلى ذلك، نشهد زيادة في استخدام الألياف المبتكرة المستخرجة من مصادر غير تقليدية مثل قشور البرتقال أو فطر الميسيليوم، والتي توفر خصائص أداء ممتازة مع بصمة بيئية أقل.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <figure>
            <img src="/images/blog/recycled-textiles-closeup.webp" alt="لقطة مقربة لأقمشة معاد تدويرها تعرض نسيجها وملمسها" class="rounded-lg shadow-md mx-auto">
            <figcaption class="text-center text-sm text-neutral-600 mt-2">التركيز يتزايد على الأقمشة المعاد تدويرها مثل rPET.</figcaption>
          </figure>
          <figure>
             <img src="/images/sustainability/plastic-bottles-to-fabric.webp" alt="رسم توضيحي لعملية تحويل الزجاجات البلاستيكية إلى ألياف نسيجية" class="rounded-lg shadow-md mx-auto">
             <figcaption class="text-center text-sm text-neutral-600 mt-2">تحويل النفايات البلاستيكية إلى أقمشة متينة.</figcaption>
           </figure>
        </div>
      `,
    },
    {
      heading: "2. الإنتاج الأخلاقي والشفافية",
      content: `
        <p>لم يعد المستهلكون والشركات يركزون فقط على المنتج النهائي، بل يهتمون بكيفية ومكان صنعه. يتزايد الطلب على الشفافية في سلاسل التوريد وضمان ظروف عمل عادلة وأجور لائقة للعاملين في مصانع الملابس. شهادات مثل Fair Trade و SA8000 أصبحت مؤشرات هامة للممارسات الأخلاقية.</p>
        <figure class="my-6">
          <img src="/images/sustainability/ethical-garment-production.webp" alt="عمال في مصنع ملابس حديث ونظيف يعملون في ظروف آمنة وأخلاقية" class="rounded-lg shadow-md mx-auto">
          <figcaption class="text-center text-sm text-neutral-600 mt-2">ضمان ظروف عمل عادلة وشفافية في سلسلة التوريد.</figcaption>
        </figure>
      `,
    },
    {
        heading: "3. الاقتصاد الدائري في الأزياء",
        content: `
          <p>ينتقل التركيز من نموذج "خذ - اصنع - تخلص" إلى نهج الاقتصاد الدائري. يشمل ذلك تصميم ملابس عمل متينة وقابلة للإصلاح، وتطوير برامج لإعادة الملابس القديمة وتجديدها أو إعادة تدويرها بالكامل. تبدأ الشركات في تقديم خدمات تأجير الزي الموحد كبديل مستدام للشراء.</p>
          <figure class="my-6">
            <img src="/images/sustainability/uniform-recycling-process.webp" alt="عامل يقوم بفرز الزي الموحد القديم في منشأة إعادة تدوير" class="rounded-lg shadow-md mx-auto">
            <figcaption class="text-center text-sm text-neutral-600 mt-2">برامج إعادة التدوير والتجديد تمنح الزي الموحد حياة جديدة.</figcaption>
          </figure>
        `,
      },
    {
      heading: "4. تقنيات الصباغة وتوفير المياه",
      content: `
        <p>تعتبر عمليات الصباغة التقليدية من أكبر مسببات تلوث المياه في صناعة النسيج. تكتسب التقنيات المبتكرة مثل الصباغة الجافة (باستخدام ثاني أكسيد الكربون المضغوط) والصباغة الرقمية زخمًا كبيرًا لقدرتها على تقليل استهلاك المياه والمواد الكيميائية بشكل كبير، مما يقلل من الأثر البيئي للزي الموحد الملون.</p>
        <figure class="my-6">
           <img src="/images/sustainability/water-saving-dyeing-tech.webp" alt="مقارنة بين استهلاك المياه في الصباغة التقليدية والتقنيات الحديثة الموفرة للمياه" class="rounded-lg shadow-md mx-auto">
           <figcaption class="text-center text-sm text-neutral-600 mt-2">تقنيات الصباغة المبتكرة تقلل بشكل كبير من استهلاك المياه.</figcaption>
         </figure>
      `,
    },
    {
        heading: "5. التكنولوجيا والملابس الذكية",
        content: `
          <p>تتداخل الاستدامة مع التكنولوجيا في أزياء العمل. نرى تطوير أقمشة ذاتية التنظيف أو مقاومة للبقع تقلل الحاجة للغسيل المتكرر، وبالتالي توفر المياه والطاقة. كما أن دمج أجهزة استشعار لمراقبة صحة العامل أو بيئة العمل يمكن أن يطيل عمر الملابس بتقليل التلف غير الضروري.</p>
           <figure class="my-6">
             <img src="/images/sustainability/smart-fabric-sensor-uniform.webp" alt="لقطة مقربة لزي موحد ذكي مع جهاز استشعار مدمج" class="rounded-lg shadow-md mx-auto">
             <figcaption class="text-center text-sm text-neutral-600 mt-2">الملابس الذكية تساهم في الاستدامة عبر تقليل الحاجة للغسيل وإطالة عمر المنتج.</figcaption>
           </figure>
        `,
      },
  ],
  conclusion: "تمثل اتجاهات 2024 في أزياء العمل المستدامة خطوة هامة نحو مستقبل أكثر مسؤولية في الصناعة. في UNEOM، نحن ملتزمون بتبني هذه الممارسات وتقديم حلول مبتكرة وصديقة للبيئة تلبي احتياجات عملائنا في المملكة العربية السعودية وتتوافق مع رؤية 2030 للتنمية المستدامة.",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function SustainableUniformsBlogPageArabic() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={article.image}
          alt={article.altText}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <Container className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-16 text-right">
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {article.title}
          </motion.h1>
          <motion.p 
            className="text-neutral-200 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            نشر بواسطة {article.author} في {article.date}
          </motion.p>
        </Container>
      </div>
      
      <Container className="py-12">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المدونة', href: '/ar/blog' },
              { label: article.title, href: '#' },
            ]}
            locale="ar"
          />
        </div>
        
        <motion.article 
          className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-4xl mx-auto rtl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="prose max-w-none prose-lg prose-headings:font-semibold prose-headings:text-primary-700 prose-a:text-primary-600 hover:prose-a:text-primary-800">
            <p className="lead text-xl text-neutral-700 mb-8">{article.introduction}</p>
            
            {article.sections.map((section, index) => (
              <motion.section key={index} variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </motion.section>
            ))}

            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4">الخلاصة</h2>
              <p>{article.conclusion}</p>
            </motion.section>
          </motion.div>

           {/* Back to Blog Button */}
           <motion.div variants={itemVariants} className="mt-12 text-center">
             <Link href="/ar/blog" className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors group">
                <ArrowLeftIcon className="h-5 w-5 ml-2 transform group-hover:-translate-x-1 transition-transform" />
                العودة إلى المدونة
             </Link>
           </motion.div>
        </motion.article>
      </Container>
    </div>
  );
} 