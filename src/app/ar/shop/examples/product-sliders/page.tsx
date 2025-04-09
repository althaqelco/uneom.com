'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WeightRangeSelector from '@/components/shop/WeightRangeSelector';
import SizeRangeSelector from '@/components/shop/SizeRangeSelector';
import PriceRangeSelector from '@/components/shop/PriceRangeSelector';
import RangeSlider from '@/components/ui/RangeSlider';
import Image from 'next/image';
import Link from 'next/link';
import { FaWeightHanging, FaRuler, FaMoneyBillWave, FaSlidersH } from 'react-icons/fa';
import { MdOutlineSpeed, MdDevices, MdAccessibility, MdLanguage } from 'react-icons/md';
import { Metadata } from 'next';

// في البيئة الحقيقية سنضع هذا في ملف منفصل للبيانات
const useCases = [
  {
    id: 'product-filters',
    title: 'تصفية المنتجات',
    icon: <FaSlidersH className="text-amber-500" size={24} />,
    description: 'تمكين العملاء من تخصيص عمليات البحث عن المنتجات بسهولة عبر مرشحات متعددة مثل السعر، المقاس، أو الوزن.',
    image: '/images/default-placeholder.jpg',
  },
  {
    id: 'size-selection',
    title: 'اختيار المقاسات',
    icon: <FaRuler className="text-blue-500" size={24} />,
    description: 'تحسين تجربة اختيار المقاسات للملابس المهنية والزي الموحد بطريقة بصرية واضحة.',
    image: '/images/default-placeholder.jpg',
  },
  {
    id: 'quantity-selection',
    title: 'تحديد الكميات',
    icon: <FaWeightHanging className="text-emerald-500" size={24} />,
    description: 'تسهيل اختيار الكميات في طلبات الجملة والمؤسسات بشكل مرئي سلس ودقيق.',
    image: '/images/default-placeholder.jpg',
  },
  {
    id: 'customization',
    title: 'تخصيص المنتجات',
    icon: <FaMoneyBillWave className="text-violet-500" size={24} />,
    description: 'السماح للعملاء بتخصيص خيارات المنتجات المتقدمة مثل نسبة المواد أو درجات الألوان.',
    image: '/images/default-placeholder.jpg',
  },
];

const benefits = [
  {
    title: 'تجربة مستخدم مميزة',
    description: 'واجهة مستخدم بديهية وسلسة تعزز رضا العملاء وتقلل من معدلات المغادرة.',
    icon: <MdOutlineSpeed size={28} className="text-primary-600" />,
  },
  {
    title: 'توافق كامل مع RTL',
    description: 'دعم متميز للغة العربية واتجاه RTL يضمن تجربة مثالية للمستخدمين العرب.',
    icon: <MdLanguage size={28} className="text-primary-600" />,
  },
  {
    title: 'متوافق مع جميع الأجهزة',
    description: 'تصميم متجاوب يعمل بسلاسة على الهواتف المحمولة والأجهزة اللوحية وأجهزة سطح المكتب.',
    icon: <MdDevices size={28} className="text-primary-600" />,
  },
  {
    title: 'سهولة الوصول',
    description: 'تلتزم المكونات بمعايير WCAG للوصول، مما يضمن تجربة شاملة لجميع المستخدمين.',
    icon: <MdAccessibility size={28} className="text-primary-600" />,
  },
];

// تأثيرات الحركة للعناصر
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export default function ProductSlidersExamplePage() {
  // حالة قيم شريط التمرير
  const [weight, setWeight] = useState<number>(75);
  const [size, setSize] = useState<number>(42);
  const [price, setPrice] = useState<number>(1500);
  const [customValue, setCustomValue] = useState<number>(50);

  // أسماء المقاسات للملابس
  const sizeLabels = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

  // تتبع التمرير لتفعيل الحركة
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      {/* قسم الهيرو */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/pattern-bg.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              مكونات شريط التمرير <span className="text-amber-400">المتوافقة مع RTL</span>
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              تجربة مستخدم سلسة واحترافية لتحديد الأوزان، المقاسات، والأسعار في متجر يونيوم
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a href="#examples" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-block">
                استعراض الأمثلة
              </a>
              <a href="#code" className="bg-white text-primary-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-block">
                كيفية الاستخدام
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قسم المميزات */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">لماذا مكونات شريط التمرير من يونيوم؟</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مكونات متكاملة ومتوافقة تمامًا مع متطلبات السوق السعودي، مما يوفر تجربة استخدام سلسة ومهنية على جميع الأجهزة
            </p>
          </div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={isScrolled ? "visible" : "hidden"}
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* قسم الأمثلة */}
      <section id="examples" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-3">
              أمثلة تفاعلية
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">شاهد المكونات قيد التشغيل</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              مكونات شريط التمرير المتوافقة مع RTL تعمل بسلاسة في جميع صفحات المنتجات والفلاتر
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <FaWeightHanging className="text-amber-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">شريط تمرير الوزن</h2>
              </div>
              
              <WeightRangeSelector
                minWeight={40}
                maxWeight={120}
                step={1}
                value={weight}
                onChange={setWeight}
                unit="كجم"
                isRTL={true}
                className="mb-6"
              />
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-sm text-gray-600">القيمة الحالية: <span className="font-semibold">{weight} كجم</span></p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <FaRuler className="text-blue-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">شريط تمرير المقاس</h2>
              </div>
              
              <SizeRangeSelector
                minSize={36}
                maxSize={48}
                step={2}
                value={size}
                onChange={setSize}
                sizeLabels={sizeLabels}
                isRTL={true}
                className="mb-6"
              />
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-sm text-gray-600">المقاس الحالي: <span className="font-semibold">{size} ({sizeLabels[Math.floor((size - 36) / 2)]})</span></p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FaMoneyBillWave className="text-green-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">شريط تمرير السعر</h2>
              </div>
              
              <PriceRangeSelector
                minPrice={500}
                maxPrice={5000}
                step={100}
                value={price}
                onChange={setPrice}
                currency="ريال"
                isRTL={true}
                className="mb-6"
              />
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-sm text-gray-600">السعر الحالي: <span className="font-semibold">{price} ريال</span></p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-4">
                  <FaSlidersH className="text-violet-600" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">شريط تمرير عام</h2>
              </div>
              
              <RangeSlider
                min={0}
                max={100}
                step={5}
                value={customValue}
                onChange={setCustomValue}
                label="نسبة مئوية"
                valueSuffix="%"
                isRTL={true}
                className="mb-6"
              />
              
              <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100">
                <p className="text-sm text-gray-600">القيمة الحالية: <span className="font-semibold">{customValue}%</span></p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قسم سيناريوهات الاستخدام */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-3">
              سيناريوهات الاستخدام
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">تطبيقات عملية في متجرك</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              تعرف على كيفية استخدام هذه المكونات لتحسين تجربة المستخدم في متجرك وتعزيز المبيعات
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={useCase.id}
                className="flex flex-col md:flex-row gap-6 items-start bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-white shadow flex items-center justify-center">
                    {useCase.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم كيفية الاستخدام */}
      <section id="code" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-3">
              دليل المطورين
            </span>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">كيفية استخدام المكونات</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              أمثلة كود سهلة التنفيذ لدمج مكونات شريط التمرير في مشروعك
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md order-2 lg:order-1">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">تنفيذ سريع</h3>
              <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto text-sm font-mono shadow-sm" dir="ltr">
{`// استيراد المكون
import WeightRangeSelector from '@/components/shop/WeightRangeSelector';

// في مكونك الرئيسي
export default function ProductPage() {
  // حالة الوزن
  const [weight, setWeight] = useState(75);

  // معالج تغيير القيمة
  const handleWeightChange = (newWeight) => {
    setWeight(newWeight);
    // منطق التطبيق الخاص بك هنا
  };

  return (
    <div dir="rtl">
      <WeightRangeSelector
        minWeight={40}
        maxWeight={120}
        step={1}
        value={weight}
        onChange={handleWeightChange}
        unit="كجم"
        isRTL={true}
      />
    </div>
  );
}`}
              </pre>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2 text-gray-800">خيارات إضافية:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pr-3">
                  <li><span className="font-mono text-primary-700">step</span>: تحديد حجم الخطوة (الافتراضية: 1)</li>
                  <li><span className="font-mono text-primary-700">isRTL</span>: تفعيل دعم RTL (الافتراضية: false)</li>
                  <li><span className="font-mono text-primary-700">unit</span>: وحدة القياس المعروضة</li>
                  <li><span className="font-mono text-primary-700">className</span>: فئات CSS الإضافية</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md order-1 lg:order-2">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">المكونات المتاحة</h3>
              <ul className="space-y-4">
                <li className="border-b border-gray-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center ml-3">
                      <FaWeightHanging className="text-amber-600" size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-800">WeightRangeSelector</h4>
                  </div>
                  <p className="text-gray-600 text-sm">مثالي لتحديد الوزن في المواصفات أو المنتجات ذات الصلة بالوزن.</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center ml-3">
                      <FaRuler className="text-blue-600" size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-800">SizeRangeSelector</h4>
                  </div>
                  <p className="text-gray-600 text-sm">يدعم تحديد المقاسات مع إمكانية استخدام تسميات المقاسات (S، M، L).</p>
                </li>
                <li className="border-b border-gray-100 pb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center ml-3">
                      <FaMoneyBillWave className="text-green-600" size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-800">PriceRangeSelector</h4>
                  </div>
                  <p className="text-gray-600 text-sm">مصمم خصيصًا لنطاقات الأسعار مع دعم للعملات المختلفة.</p>
                </li>
                <li>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center ml-3">
                      <FaSlidersH className="text-violet-600" size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-800">RangeSlider</h4>
                  </div>
                  <p className="text-gray-600 text-sm">المكون الأساسي القابل للتخصيص بالكامل لأي استخدام.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* قسم نصائح التنفيذ */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">أفضل ممارسات التنفيذ</h2>
            <p className="text-lg opacity-90 mb-8">
               لتحقيق أقصى استفادة من مكونات شريط التمرير، اتبع هذه النصائح الاحترافية
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-right">
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">التخصيص البصري</h3>
                <p className="text-white/80">
                  قم بتخصيص ألوان الشريط لتتناسب مع هوية علامتك التجارية عبر فئات Tailwind CSS.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">اختبار الوصول</h3>
                <p className="text-white/80">
                  تأكد من اختبار المكونات للتوافق مع قارئات الشاشة وإمكانية الوصول للوحة المفاتيح.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">الأمثل للجوال</h3>
                <p className="text-white/80">
                  استخدم وحدات CSS النسبية وزِد من حجم نطاق التمرير على الأجهزة المحمولة.
                </p>
              </div>
              <div className="bg-white/10 p-5 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-2">تفاعل المستخدم</h3>
                <p className="text-white/80">
                  قم بتحديث العناصر المرتبطة (مثل الصور أو الوصف) فوريًا عند تغيير قيمة الشريط.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* قسم CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              جاهز لتطبيق هذه المكونات في مشروعك؟
            </motion.h2>
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              احصل على الدعم الكامل من فريق يونيوم لتنفيذ هذه المكونات في متجرك الإلكتروني
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/ar/contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg shadow-md hover:shadow-lg transition duration-300 inline-block"
              >
                تواصل مع فريق الدعم الفني
              </a>
              <div className="mt-4 text-sm">
                أو <Link href="/shop/examples/product-sliders" className="underline font-medium">عرض النسخة الإنجليزية</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 