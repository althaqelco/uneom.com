'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUneom from '@/components/sections/WhyChooseUneom';
import IndustryGrid from '@/components/sections/IndustryGrid';
import BlogPreview from '@/components/sections/BlogPreview';
import Button from '@/components/ui/Button';
import { Amiri, Cairo, Tajawal } from 'next/font/google';
import { useQuote } from '@/contexts/QuoteContext';
import { useRouter } from 'next/navigation';

// تعريف الخطوط العربية
const cairoFont = Cairo({ 
  subsets: ['arabic'],
  weight: ['700', '800'],
  variable: '--font-cairo',
});

const tajawalFont = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

// متغير للخط العربي Amiri - إذا كان مستخدماً في مكان آخر
const amiriFont = Amiri({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri',
});

// Import data for the page
import { industries } from '@/lib/data/industries';
import { products } from '@/lib/data/products';

// بيانات العملاء
const clients = [];

// بيانات الخدمات
const services = [
  {
    title: 'تصميم الزي الموحد',
    description: 'تصميمات مبتكرة تعكس هوية علامتك التجارية وتلبي المتطلبات العملية لموظفيك.',
    icon: 'design',
    iconColor: 'from-purple-500 to-indigo-600',
    link: '/ar/services/custom-design',
    image: '/images/default-placeholder.jpg',
    stats: [
      { value: '1500+', label: 'تصميم فريد' },
      { value: '98%', label: 'رضا العملاء' }
    ]
  },
  {
    title: 'إنتاج وتوريد الزي الموحد',
    description: 'خدمات إنتاج عالية الجودة بأسعار تنافسية، مع مراعاة الاستدامة والراحة.',
    icon: 'production',
    iconColor: 'from-blue-500 to-cyan-600',
    link: '/ar/services/bulk-ordering',
    image: '/images/default-placeholder.jpg',
    stats: [
      { value: '50,000+', label: 'قطعة شهرياً' },
      { value: '99.7%', label: 'دقة التسليم' }
    ]
  },
  {
    title: 'إدارة برامج الزي الموحد',
    description: 'حلول متكاملة لإدارة برنامج الزي الموحد الخاص بمؤسستك من البداية إلى النهاية.',
    icon: 'management',
    iconColor: 'from-amber-500 to-orange-600',
    link: '/ar/services/program-management',
    image: '/images/default-placeholder.jpg',
    stats: [
      { value: '200+', label: 'برنامج نشط' },
      { value: '35%', label: 'توفير التكاليف' }
    ]
  },
  {
    title: 'خدمات القياس',
    description: 'خدمات قياس احترافية تضمن ملاءمة مثالية لجميع موظفيك مهما اختلفت أحجامهم.',
    icon: 'measuring',
    iconColor: 'from-green-500 to-emerald-600',
    link: '/ar/services/measurement-services',
    image: '/images/default-placeholder.jpg',
    stats: [
      { value: '99.8%', label: 'دقة المقاسات' },
      { value: '25,000+', label: 'قياس سنوياً' }
    ]
  },
];

// بيانات المميزات
const features = [
  {
    title: 'تصميم مخصص',
    description: 'نصمم الزي الموحد خصيصًا ليعكس هوية علامتك التجارية ويلبي احتياجات موظفيك.',
    icon: '/images/default-placeholder.jpg',
  },
  {
    title: 'مواد عالية الجودة',
    description: 'نستخدم فقط أفضل الأقمشة والمواد لضمان الراحة والمتانة والمظهر المهني.',
    icon: '/images/default-placeholder.jpg',
  },
  {
    title: 'توافق مع المعايير السعودية',
    description: 'جميع منتجاتنا متوافقة مع المعايير السعودية ومناسبة للبيئة المحلية.',
    icon: '/images/default-placeholder.jpg',
  },
  {
    title: 'التسليم السريع',
    description: 'نلتزم بجداول التسليم المحددة لنضمن وصول طلبك في الوقت المناسب.',
    icon: '/images/default-placeholder.jpg',
  },
  {
    title: 'دعم مستمر',
    description: 'فريق دعم متخصص جاهز لمساعدتك في أي استفسارات أو متطلبات إضافية.',
    icon: '/images/default-placeholder.jpg',
  },
  {
    title: 'أسعار تنافسية',
    description: 'نقدم أسعارًا تنافسية مع الحفاظ على أعلى معايير الجودة لجميع منتجاتنا.',
    icon: '/images/default-placeholder.jpg',
  },
];

// تصنيفات المنتجات المميزة
const featuredCategories = [
  {
    id: 'healthcare',
    title: 'الرعاية الصحية',
    image: '/images/products/scrubs-set.jpg',
    items: ['ملابس طبية متطورة', 'أردية معامل', 'بدلات جراحية'],
    link: '/ar/shop/medical-scrubs'
  },
  {
    id: 'aviation',
    title: 'الطيران',
    image: '/images/products/airline-uniform.jpg',
    items: ['أزياء طاقم الضيافة', 'بدلات الطيارين', 'أزياء موظفي الأرض'],
    link: '/ar/shop/aviation-uniforms'
  },
  {
    id: 'hospitality',
    title: 'الضيافة والفنادق',
    image: '/images/products/hotel-uniform.jpg',
    items: ['أزياء الاستقبال', 'زي طاقم الخدمة', 'بدلات الشيف'],
    link: '/ar/shop/hospitality-attire'
  },
  {
    id: 'corporate-wear',
    title: 'الصناعة والمؤسسات',
    image: '/images/products/industrial-coverall.jpg',
    items: ['بدلات عمل صناعية', 'ملابس الأمن والسلامة', 'بدلات رسمية للشركات'],
    link: '/ar/shop/workplace-uniforms',
    backgroundImage: '/images/grid-pattern.svg'
  }
];

// التكنولوجيات المميزة
const technologies = [
  {
    name: 'أقمشة كومفورت-تيك',
    description: 'أقمشة متطورة تمتاز بمقاومة الماء والحرارة مع الحفاظ على التهوية المثالية',
    icon: 'sparkles',
    iconColor: 'text-blue-500'
  },
  {
    name: 'حماية بيو-شيلد',
    description: 'تقنية مضادة للميكروبات توفر حماية طويلة الأمد في بيئات العمل المختلفة',
    icon: 'shield-check',
    iconColor: 'text-green-500'
  },
  {
    name: 'دوراتكس الفائق',
    description: 'تقنية نسيج متينة تحافظ على المظهر الاحترافي رغم الاستخدام المتكرر والغسيل',
    icon: 'refresh',
    iconColor: 'text-purple-500'
  },
  {
    name: 'ايكو-بليند المستدام',
    description: 'مزيج من الأقمشة المستدامة والصديقة للبيئة دون المساس بالجودة أو المتانة',
    icon: 'leaf',
    iconColor: 'text-green-600'
  },
];

// تصنيفات المنتجات المميزة
const featuredProducts = [
  {
    id: 'premium-medical-scrubs',
    title: 'ملابس طبية متميزة',
    description: 'مصممة خصيصاً للكوادر الطبية في المملكة',
    image: '/images/default-placeholder.jpg',
    category: 'الرعاية الصحية',
    price: 450,
    salePrice: 399,
    discount: 11,
    rating: 4.9,
    reviews: 124,
    colors: [
      { name: 'أزرق فاتح', code: '#3b82f6' },
      { name: 'أخضر', code: '#10b981' },
      { name: 'أبيض', code: '#f9fafb' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'الأكثر مبيعاً',
    badgeColor: 'from-amber-400 to-amber-600',
    link: '/ar/shop/medical-scrubs/premium-medical-scrubs'
  },
  {
    id: 'airline-crew-uniform',
    title: 'زي طاقم الطيران',
    description: 'أناقة وراحة لطواقم الطيران السعودية',
    image: '/images/product-placeholder.jpg',
    category: 'الطيران',
    price: 1200,
    salePrice: 950,
    discount: 21,
    rating: 4.8,
    reviews: 86,
    colors: [
      { name: 'كحلي', code: '#1e3a8a' },
      { name: 'أسود', code: '#111827' },
      { name: 'رمادي', code: '#4b5563' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'خصم خاص',
    badgeColor: 'from-red-400 to-red-600',
    link: '/ar/shop/aviation-uniforms/airline-crew-uniform'
  },
  {
    id: 'luxury-hotel-uniform',
    title: 'زي فندقي فاخر',
    description: 'تصميم عصري لطاقم الضيافة الفندقية',
    image: '/images/default-placeholder.jpg Staff_Uniform.png',
    category: 'الضيافة',
    price: 850,
    salePrice: 765,
    discount: 10,
    rating: 4.7,
    reviews: 92,
    colors: [
      { name: 'أسود', code: '#111827' },
      { name: 'بني', code: '#92400e' },
      { name: 'نبيتي', code: '#7f1d1d' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'جديد',
    badgeColor: 'from-green-400 to-green-600',
    link: '/ar/shop/hospitality-attire/luxury-hotel-uniform'
  },
  {
    id: 'industrial-coverall',
    title: 'بدلة عمل صناعية',
    description: 'حماية وراحة في بيئات العمل الصناعية',
    image: '/images/banner-placeholder.jpg',
    category: 'الصناعة',
    price: 550,
    salePrice: 499,
    discount: 9,
    rating: 4.9,
    reviews: 156,
    colors: [
      { name: 'أزرق داكن', code: '#1e40af' },
      { name: 'رمادي', code: '#4b5563' },
      { name: 'أخضر زيتي', code: '#365314' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    badge: 'متين',
    badgeColor: 'from-blue-400 to-blue-600',
    link: '/ar/shop/workplace-uniforms/industrial-coverall'
  }
];

export default function HomePage() {
  const { addItem } = useQuote();
  const router = useRouter();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<string>('');

  const locale = 'ar';
  
  // الصناعات المميزة (استخدام أول 4 من ملف البيانات)
  const featuredIndustries = industries.slice(0, 4).map(industry => ({
    id: industry.id,
    title: industry.nameAr || industry.name,
    description: industry.descriptionAr ? (industry.descriptionAr.split('.')[0] + '.') : (industry.description.split('.')[0] + '.'),
    image: industry.image,
    link: `/ar/industries/${industry.id}`
  }));
  
  // Shop Categories (for the shop section)
  const shopCategories = [
    {
      id: 'medical-scrubs',
      title: 'ملابس الرعاية الصحية',
      description: 'ملابس طبية وزي موحد عالي الجودة مصمم للراحة أثناء المناوبات الطويلة.',
      image: '/images/products/scrubs-set.jpg',
      link: '/ar/shop/medical-scrubs'
    },
    {
      id: 'aviation-uniforms',
      title: 'ملابس الطيران',
      description: 'أزياء مهنية لطاقم الطائرة وطاقم الأرض وموظفي الطيران.',
      image: '/images/products/airline-uniform.jpg',
      link: '/ar/shop/aviation-uniforms'
    },
    {
      id: 'hospitality-attire',
      title: 'ملابس الضيافة',
      description: 'أزياء موحدة عالية الجودة للفنادق والمنتجعات وفرق الضيافة تجمع بين الأناقة والوظائف العملية.',
      image: '/images/products/hotel-uniform.jpg',
      link: '/ar/shop/hospitality-attire'
    },
    {
      id: 'corporate-wear',
      title: 'ملابس الشركات',
      description: 'ملابس مكتبية أنيقة ومهنية تعزز صورة الشركة والانتماء المؤسسي.',
      image: '/images/products/industrial-coverall.jpg',
      link: '/ar/shop/workplace-uniforms',
      backgroundImage: '/images/grid-pattern.svg'
    },
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: 'كيف يمكنني طلب عينات من منتجاتكم؟',
      answer: 'يمكنك طلب عينات من خلال ملء نموذج الاتصال الخاص بنا أو الاتصال بفريق خدمة العملاء لدينا مباشرة. سيقوم ممثل المبيعات بالتواصل معك لمناقشة متطلباتك وترتيب إرسال العينات.'
    },
    {
      question: 'هل توفرون خدمات التطريز والشعارات المخصصة؟',
      answer: 'نعم، نقدم خدمات شاملة للتطريز وإضافة الشعارات المخصصة على جميع منتجاتنا. يمكننا تطبيق شعار شركتك بمختلف التقنيات بما في ذلك التطريز والطباعة الحرارية والطباعة الرقمية.'
    },
    {
      question: 'ما هي الحد الأدنى للطلب؟',
      answer: 'يختلف الحد الأدنى للطلب حسب نوع المنتج. للطلبات القياسية، عادة ما يكون الحد الأدنى 50 قطعة. للمنتجات المخصصة بالكامل، قد يكون الحد الأدنى أعلى. يرجى التواصل معنا للحصول على تفاصيل محددة لمنتجات معينة.'
    },
    {
      question: 'ما هي مدة التسليم المتوقعة؟',
      answer: 'تتراوح أوقات التسليم عادة من 2-4 أسابيع للمنتجات القياسية، و 4-8 أسابيع للمنتجات المخصصة بالكامل. قد تختلف المواعيد حسب حجم الطلب ومتطلبات التخصيص.'
    },
  ];

  // وظيفة إضافة المنتج إلى طلب عرض السعر
  const handleAddToQuote = (product: any) => {
    // إنشاء كائن المنتج للاقتباس
    const quoteItem = {
      id: product.id,
      name: product.title,
      price: `${product.salePrice} ر.س`,
      quantity: 1,
      image: product.image,
      category: product.category,
    };

    // إضافة المنتج إلى طلب عرض السعر
    addItem(quoteItem);

    // عرض رسالة نجاح
    setCurrentProduct(product.title);
    setShowSuccessAlert(true);
    
    // إخفاء الرسالة بعد 3 ثوان
    setTimeout(() => {
      setShowSuccessAlert(false);
      // توجيه المستخدم إلى صفحة طلب عرض السعر
      router.push('/ar/quote');
    }, 1500);
  };

  return (
    <>
      {/* رسالة نجاح إضافة المنتج */}
      {showSuccessAlert && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-green-100 border border-green-400 text-green-700 px-6 py-3 rounded-md shadow-lg flex items-center">
          <svg className="w-5 h-5 ml-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>تمت إضافة "{currentProduct}" إلى طلب عرض السعر</span>
        </div>
      )}
      
      {/* استخدام مكون HeroSection المطور */}
      <div className={`${cairoFont.variable} ${tajawalFont.variable} ${amiriFont.variable} font-cairo`}>
        <HeroSection locale={locale} />
      </div>

      {/* قسم لماذا تختار يونيوم - Why Choose UNEOM Section */}
      <WhyChooseUneom locale={locale} />
      
      {/* قسم الصناعات */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* زخارف خلفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-50 text-primary-700 py-1 px-4 rounded-full text-sm font-bold">
                قطاعات متخصصة
              </span>
            </div>
            <SectionHeading centered>
              <span className={`${cairoFont.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500`}>
                نحن نخدم مجموعة متنوعة من الصناعات
              </span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto`}>
              نقدم حلولاً متخصصة للزي الموحد تلبي الاحتياجات الفريدة لكل قطاع، مصممة خصيصًا لتناسب بيئة العمل في المملكة العربية السعودية
            </p>
          </div>
          
          {/* عرض الصناعات بتصميم جديد */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/ar/industries/${industry.id}`}
                  className="group block h-full"
                >
                  <div className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col ${industry.id === 'corporate' ? 'ring-2 ring-primary-200' : ''}`}>
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.nameAr || industry.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      {industry.id === 'corporate' && (
                        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.05] mix-blend-overlay"></div>
                      )}
                      {industry.id === 'corporate' && (
                        <div className="absolute top-0 right-0 w-16 h-16 m-4 bg-primary-100/80 rounded-full shadow-lg flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute bottom-0 right-0 left-0 p-6 text-right">
                        <h3 className={`${cairoFont.className} text-xl font-bold text-white mb-1`}>
                          {industry.nameAr || industry.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <p className={`${tajawalFont.className} text-gray-700 mb-4 text-right`}>
                        {industry.descriptionAr ? (industry.descriptionAr.split('.')[0] + '.') : (industry.description.split('.')[0] + '.')}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                        <div className="flex flex-col items-end">
                          <span className={`${cairoFont.className} text-sm font-bold text-primary-700`}>استكشف الحلول</span>
                          <span className="text-xs text-gray-500">حلول مخصصة للقطاع</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* زر استكشاف جميع الصناعات */}
          <div className="text-center mt-16">
            <Link 
              href="/ar/industries"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              استكشف جميع الصناعات
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم خدماتنا المميزة */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* زخارف خلفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.02] mix-blend-overlay"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-50 text-primary-700 py-1.5 px-5 rounded-full text-sm font-bold">
                خدمات متميزة
              </span>
            </div>
            <SectionHeading centered>
              <span className={`${cairoFont.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500`}>
                خدماتنا المميزة
              </span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto`}>
              نقدم مجموعة متكاملة من الخدمات الاحترافية لتلبية احتياجات عملائنا بأفضل جودة وأعلى كفاءة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* أيقونة الخدمة */}
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-lg">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.iconColor} flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110`}>
                        {service.icon === 'design' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        )}
                        {service.icon === 'production' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        )}
                        {service.icon === 'management' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        )}
                        {service.icon === 'measuring' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* عنوان الخدمة */}
                    <div className="absolute bottom-0 right-0 left-0 p-6 text-right">
                      <h3 className={`${cairoFont.className} text-2xl font-bold text-white mb-2`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <p className={`${tajawalFont.className} text-gray-700 mb-6 text-right leading-relaxed`}>
                      {service.description}
                    </p>
                    
                    {/* إحصائيات الخدمة */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {service.stats.map((stat, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-auto flex justify-end">
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        اكتشف المزيد
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* إحصائيات عامة */}
          <div className="mt-20 relative">
            {/* خلفية متدرجة مع تأثيرات */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* تأثيرات زخرفية */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-blue-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-primary-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-[30%] right-[30%] w-64 h-64 bg-indigo-600/20 rounded-full mix-blend-overlay filter blur-2xl"></div>
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.07] mix-blend-overlay"></div>
              </div>
              
              {/* تأثير الضوء العلوي */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></div>
              
              {/* تأثير الضوء الجانبي */}
              <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary-300/50 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-12 md:p-16">
              {/* العنوان مع تأثيرات */}
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="bg-white/10 text-white py-1.5 px-5 rounded-full text-sm font-bold backdrop-blur-md border border-white/10">
                    إحصائيات وأرقام
                  </span>
                </div>
                <h3 className={`${cairoFont.className} text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight`}>
                  <span className="relative">
                    نتائج ملموسة لعملائنا
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-blue-400 rounded-full transform scale-x-0 animate-expandWidth"></span>
                  </span>
                </h3>
                <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
                  نفخر بتقديم خدمات عالية الجودة تحقق نتائج استثنائية لعملائنا في جميع أنحاء المملكة العربية السعودية
                </p>
              </div>
              
              {/* الإحصائيات بتصميم متقدم */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                {[
                  { 
                    value: '15+', 
                    label: 'سنوات خبرة', 
                    icon: 'calendar',
                    gradient: 'from-amber-400 to-amber-600',
                    shadowColor: 'amber-500/20',
                    delay: 0
                  },
                  { 
                    value: '500+', 
                    label: 'عميل', 
                    icon: 'users',
                    gradient: 'from-blue-400 to-blue-600',
                    shadowColor: 'blue-500/20',
                    delay: 0.1
                  },
                  { 
                    value: '250,000+', 
                    label: 'زي موحد سنوياً', 
                    icon: 'shirt',
                    gradient: 'from-emerald-400 to-emerald-600',
                    shadowColor: 'emerald-500/20',
                    delay: 0.2
                  },
                  { 
                    value: '98%', 
                    label: 'معدل رضا العملاء', 
                    icon: 'star',
                    gradient: 'from-purple-400 to-purple-600',
                    shadowColor: 'purple-500/20',
                    delay: 0.3
                  }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.5 + stat.delay,
                      type: "spring",
                      stiffness: 100,
                      damping: 15
                    }}
                    className="relative group"
                  >
                    {/* بطاقة الإحصائية */}
                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 overflow-hidden border border-white/10 h-full">
                      {/* تأثير الضوء عند التحويم */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* أيقونة الإحصائية */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg shadow-${stat.shadowColor} transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {stat.icon === 'calendar' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {stat.icon === 'users' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                        {stat.icon === 'shirt' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2L2 8l4 2m12-8l4 6-4 2M6 12v8a2 2 0 002 2h8a2 2 0 002-2v-8" />
                          </svg>
                        )}
                        {stat.icon === 'star' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        )}
                      </div>
                      
                      {/* قيمة الإحصائية */}
                      <div className="relative">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.7, 
                            delay: 0.7 + stat.delay,
                            type: "spring"
                          }}
                          className="text-4xl md:text-5xl font-bold text-center mb-2"
                        >
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                            {stat.value}
                          </span>
                        </motion.div>
                        <div className="text-white/80 text-center text-lg font-medium">{stat.label}</div>
                      </div>
                      
                      {/* زخرفة خلفية */}
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-30 blur-xl"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* زر الدعوة للعمل */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mt-16 text-center"
              >
                <Link
                  href="/ar/about"
                  className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium rounded-full text-white group"
                >
                  <span className="absolute w-full h-full bg-gradient-to-br from-primary-600 to-blue-600 group-hover:from-primary-500 group-hover:to-blue-500 transition-all duration-500"></span>
                  <span className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/50 to-blue-500/50 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></span>
                  <span className="absolute inset-0 w-full h-full backdrop-blur-xl border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center">
                    تعرف على قصة نجاحنا
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم التكنولوجيا المتطورة */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">تقنيات متطورة للأزياء المهنية</h2>
              <p className="text-lg text-gray-600 mb-8">
                نستخدم أحدث التقنيات والابتكارات في صناعة الأزياء المهنية لضمان الراحة والمتانة والأداء الأمثل في بيئات العمل المختلفة
              </p>
              
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${tech.iconColor} bg-gray-100`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {tech.icon === 'sparkles' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        )}
                        {tech.icon === 'shield-check' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        )}
                        {tech.icon === 'refresh' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        )}
                        {tech.icon === 'leaf' && (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        )}
                      </svg>
                    </div>
                    <div className="mr-5">
                      <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link
                  href="/ar/resources/fabric-guide"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition duration-300"
                >
                  اكتشف دليل الأقمشة
                </Link>
              </div>
            </div>
            
            <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/80 to-primary-600/50 mix-blend-multiply z-10"></div>
              <Image
                src="/images/default-placeholder.jpg"
                alt="تقنيات الأقمشة المتطورة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-block rounded-full bg-white/20 p-4 mb-6 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">جودة استثنائية</h3>
                  <p className="text-white/90 text-lg mb-6">نستخدم أفضل الأقمشة والمواد لضمان أداء فائق في جميع بيئات العمل</p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">مقاومة للماء</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">مضادة للبكتيريا</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">متينة</span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">سهلة العناية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* قسم فئات المتجر المحسن */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* زخارف خلفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.02] mix-blend-overlay"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="bg-primary-50 text-primary-700 py-1.5 px-5 rounded-full text-sm font-bold">
                منتجات حصرية
              </span>
            </div>
            <SectionHeading centered>
              <span className={`${cairoFont.className} text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500`}>
                اكتشف مجموعاتنا المميزة
              </span>
            </SectionHeading>
            <p className={`${tajawalFont.className} text-lg md:text-xl text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto`}>
              تصفح تشكيلتنا الواسعة من الأزياء المهنية عالية الجودة المصممة خصيصًا لمختلف القطاعات
            </p>
          </div>
          
          {/* عرض المنتجات المميزة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="group"
              >
                {/* بطاقة المنتج */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* صورة المنتج مع شارة */}
                  <div className="relative">
                    {/* شارة المنتج */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className={`py-1.5 px-3 rounded-full text-xs font-bold text-white bg-gradient-to-r ${product.badgeColor} shadow-md`}>
                          {product.badge}
                        </div>
                      </div>
                    )}
                    
                    {/* شارة الخصم */}
                    {product.discount > 0 && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="py-1.5 px-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-red-500 to-pink-500 shadow-md">
                          خصم {product.discount}%
                        </div>
                      </div>
                    )}
                    
                    {/* صورة المنتج */}
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* زر إضافة للسلة */}
                    <div className="absolute -bottom-10 right-0 left-0 mx-auto w-4/5 group-hover:bottom-4 transition-all duration-500 flex justify-center">
                      <button 
                        onClick={() => handleAddToQuote(product)}
                        className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-full shadow-lg flex items-center justify-center w-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        طلب عرض سعر
                      </button>
                    </div>
                  </div>
                  
                  {/* معلومات المنتج */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* فئة المنتج */}
                    <div className="text-xs text-primary-600 font-medium mb-2">{product.category}</div>
                    
                    {/* عنوان المنتج */}
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{product.title}</h3>
                    
                    {/* وصف المنتج */}
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    {/* التقييم */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center ml-2">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews} تقييم)</span>
                    </div>
                    
                    {/* الألوان المتاحة */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">الألوان المتاحة</div>
                      <div className="flex space-x-2 space-x-reverse">
                        {product.colors.map((color, idx) => (
                          <div key={idx} className="relative group/color">
                            <div 
                              className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer"
                              style={{ backgroundColor: color.code }}
                            ></div>
                            <div className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 w-auto px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/color:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                              {color.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* المقاسات المتاحة */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2">المقاسات المتاحة</div>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, idx) => (
                          <div key={idx} className="w-8 h-8 flex items-center justify-center text-xs border border-gray-300 rounded-md hover:border-primary-500 hover:bg-primary-50 cursor-pointer transition-colors duration-300">
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* السعر */}
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-end">
                        <span className="text-2xl font-bold text-gray-900">{product.salePrice} ر.س</span>
                        {product.discount > 0 && (
                          <span className="text-sm text-gray-500 line-through mr-2">{product.price} ر.س</span>
                        )}
                      </div>
                      <Link href={product.link} className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                        عرض التفاصيل
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* قسم الفئات */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className={`${cairoFont.className} text-2xl font-bold text-gray-900 mb-4`}>تصفح حسب الفئة</h3>
              <p className="text-gray-600">اكتشف مجموعاتنا المتنوعة حسب القطاع المهني</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="group relative overflow-hidden rounded-xl shadow-md"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                  {category.id === 'corporate-wear' && (
                    <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.05] mix-blend-overlay"></div>
                  )}
                  <div className="relative aspect-[1/1] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 z-20 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.items.map((item, i) => (
                          <span key={i} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={category.link}
                        className="inline-flex items-center text-white font-medium transition-all group-hover:text-primary-200"
                      >
                        تصفح المجموعة
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* زر زيارة المتجر */}
          <div className="text-center mt-16">
            <Link
              href="/ar/shop"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden text-lg font-medium rounded-full text-white group"
            >
              <span className="absolute w-full h-full bg-gradient-to-br from-primary-600 to-blue-600 group-hover:from-primary-500 group-hover:to-blue-500 transition-all duration-500"></span>
              <span className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-primary-500/50 to-blue-500/50 blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></span>
              <span className="absolute inset-0 w-full h-full backdrop-blur-xl border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center">
                زيارة المتجر
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم شهادات العملاء المحسّن */}
      <section className="py-24 relative overflow-hidden">
        {/* قسم آراء العملاء (TestimonialCarousel) */}
        <TestimonialCarousel locale={locale} />
      </section>

      {/* قسم الأسئلة الشائعة المحسن */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-bl from-primary-100/30 to-transparent"></div>
          <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-100/40 to-transparent"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-tl from-amber-100/30 to-transparent"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-100/30 to-transparent"></div>
          
          {/* Lines */}
          <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
        
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
            <div className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4 shadow-sm border border-primary-100">
              الدعم والمساعدة
            </div>
            <SectionHeading centered>
              <span className="relative">
                الأسئلة الشائعة
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-primary-300 via-primary-500 to-primary-300 rounded"></div>
              </span>
            </SectionHeading>
            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              إجابات على الأسئلة الأكثر شيوعًا حول منتجاتنا وخدماتنا
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* Glow effect behind accordion */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-white to-blue-50/50 rounded-2xl blur-3xl -z-10 transform scale-105"></div>
            
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white border border-gray-100 rounded-xl p-1 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 rounded-lg bg-gradient-to-r from-white to-gray-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 me-5">
                        <div className="relative">
                          <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white font-bold text-xl shadow-lg shadow-primary-200 group-hover:shadow-primary-300 transition-all duration-300 group-hover:scale-110">
                            {index + 1}
                          </div>
                          <div className="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-700 transition-colors duration-300">
                          {item.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-primary-50 rounded-full blur-3xl -z-10"></div>
            
            <p className="text-lg text-gray-700 mb-6 font-medium">
              هل لديك سؤال آخر؟ نحن هنا للمساعدة
            </p>
            <Link
              href="/ar/contact"
              className="relative inline-flex items-center justify-center group"
            >
              <span className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"></span>
              <span className="absolute inset-0.5 rounded-[7px] bg-white/90 group-hover:bg-white transition-colors duration-300"></span>
              <span className="relative px-8 py-4 text-base font-semibold text-primary-700 flex items-center">
                تواصل معنا
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* قسم المدونة المحسن */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <SectionHeading centered={false}>آخر المقالات من المدونة</SectionHeading>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl">
                استكشف أحدث المقالات حول اتجاهات الزي الموحد وأفضل الممارسات في مجال الأزياء المهنية
              </p>
            </div>
            <div>
              <Link
                href="/ar/blog"
                className="mt-6 md:mt-0 inline-flex items-center font-medium text-primary-700 hover:text-primary-600"
              >
                جميع المقالات
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "اتجاهات الزي الموحد في المملكة العربية السعودية لعام 2023",
                excerpt: "استكشف أحدث اتجاهات الزي الموحد في المملكة وكيف تؤثر الرؤية السعودية 2030 على قطاع الملابس المهنية.",
                slug: "uniform-trends-2023",
                date: "23 مايو 2023",
                image: "/images/banner-placeholder.jpg",
                author: "محمد العلي",
                category: "اتجاهات"
              },
              {
                title: "الاستدامة في صناعة الزي الموحد: توجه جديد في المملكة",
                excerpt: "كيف تتبنى الشركات السعودية ممارسات الاستدامة في الزي الموحد وتأثير ذلك على البيئة والاقتصاد.",
                slug: "sustainable-uniforms",
                date: "14 يونيو 2023",
                image: "/images/default-placeholder.jpg",
                author: "سارة الأحمد",
                category: "الاستدامة"
              },
              {
                title: "كيفية اختيار الزي الموحد المناسب لفريق الرعاية الصحية",
                excerpt: "دليل شامل لاختيار الزي الطبي المناسب الذي يلبي متطلبات الراحة والأداء والامتثال للمعايير.",
                slug: "choosing-healthcare-uniforms",
                date: "02 يوليو 2023",
                image: "/images/avatar-placeholder.jpg",
                author: "د. فهد العنزي",
                category: "دليل"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
              >
                <Link href={`/ar/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    <Link href={`/ar/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/ar/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700"
                  >
                    اقرأ المزيد
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* قسم طلب عرض سعر المحسن */}
      <section className="relative py-24 overflow-hidden">
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>
        
        {/* عناصر زخرفية */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-72 h-72 bg-primary-600/30 rounded-full mix-blend-overlay filter blur-2xl"></div>
          <div className="absolute bottom-[10%] left-[5%] w-80 h-80 bg-primary-500/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-[30%] right-[30%] w-64 h-64 bg-secondary-600/10 rounded-full mix-blend-overlay filter blur-2xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6 leading-tight">جاهز لتطوير برنامج الزي الموحد لمؤسستك؟</h2>
                <p className="text-xl text-white/90 mb-6 leading-relaxed">
                  دعنا نساعدك في تصميم وتنفيذ برنامج زي موحد يعزز هوية علامتك التجارية ويحسن تجربة موظفيك
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "تصميم مخصص يعكس هويتك",
                    "أعلى معايير الجودة والمتانة",
                    "خدمة شاملة من الفكرة إلى التسليم",
                    "دعم متواصل ما بعد البيع"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="flex items-center text-white"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-400 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link 
                    href="/ar/quote"
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-900 bg-white hover:bg-gray-100 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    طلب عرض سعر مجاني
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative border border-white/20 p-8 rounded-lg bg-white/5 backdrop-blur">
              <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال السريعة</h3>
              <ul className="space-y-6">
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">اتصل بنا</span>
                    <span className="text-lg font-semibold">+971558164922</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">البريد الإلكتروني</span>
                    <span className="text-lg font-semibold">info@uneom.com</span>
                  </div>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center text-white"
                >
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center ml-4 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-white/70 text-sm">الموقع</span>
                    <span className="text-lg font-semibold">طريق الملك فهد، الرياض، المملكة العربية السعودية</span>
                  </div>
                </motion.li>
              </ul>
              <div className="mt-8 flex items-center justify-between">
                <div className="text-white/70 text-sm">تابعنا على</div>
                <div className="flex gap-4">
                  {['twitter', 'linkedin', 'instagram', 'facebook'].map((social, index) => (
                    <Link 
                      key={social} 
                      href={`https://${social}.com/uneom`}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      {social === 'twitter' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      )}
                      {social === 'linkedin' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      )}
                      {social === 'instagram' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      )}
                      {social === 'facebook' && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 
