'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SEO from '@/components/SEO';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Featured aviation products with updated images
const featuredProducts = [
  {
    id: '1',
    name: 'يونيفورم كابتن طيار | Captain Pilot Uniform',
    image: '/images/airline-1.jpg',
    price: 'من 1,299 ريال | From SAR 1,299',
    href: '/shop/aviation-uniforms/captain-pilot-uniform/',
    category: 'أزياء الطيارين | Pilot Uniforms'
  },
  {
    id: '2',
    name: 'زي مضيفات طيران | Flight Attendant Uniform',
    image: '/images/airline-2.jpg',
    price: 'من 899 ريال | From SAR 899',
    href: '/shop/aviation-uniforms/flight-attendant-uniform/',
    category: 'أزياء المضيفين | Cabin Crew Uniforms'
  },
  {
    id: '3',
    name: 'طقم طاقم طيران كامل | Complete Aviation Crew Set',
    image: '/images/airline-3.jpg',
    price: 'من 1,599 ريال | From SAR 1,599',
    href: '/shop/aviation-uniforms/aviation-crew-set/',
    category: 'أطقم كاملة | Complete Sets'
  }
];

// Aviation benefits - bilingual
const aviationBenefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'معايير الطيران الدولية | International Aviation Standards',
    description: 'تصاميم تلبي معايير الطيران المدني الدولية ولوائح الهيئة العامة للطيران المدني السعودي - Compliant with GACA and international aviation standards.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'أقمشة فاخرة مقاومة للتجعد | Premium Wrinkle-Resistant Fabrics',
    description: 'أقمشة عالية الجودة مقاومة للتجعد ومناسبة للرحلات الطويلة والمناخ المتغير - High-quality fabrics perfect for long flights.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'تصميم يعكس الهوية السعودية | Saudi Identity Design',
    description: 'تصاميم تجمع بين الأناقة العالمية والطابع السعودي المتميز لتعزيز صورة الطيران السعودي - Designs reflecting Saudi heritage and elegance.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'تخصيص حسب الشركة | Airline Customization',
    description: 'تخصيص كامل للألوان والشعارات والتفاصيل حسب هوية شركة الطيران - Full customization for airline branding and identity.'
  }
];

// Premium fabrics for aviation
const aviationFabrics = [
  {
    name: 'أقمشة الطيران الفاخرة | Premium Aviation Fabrics',
    description: 'خلطات صوف وبوليستر فاخرة مقاومة للتجعد والبقع مع لمعة طبيعية أنيقة - Premium wool-polyester blends with elegant natural sheen',
    image: '/images/fabric-cotton-blends.webp'
  },
  {
    name: 'تقنية مقاومة التجعد | Anti-Wrinkle Technology',
    description: 'تقنيات متقدمة تحافظ على المظهر الأنيق طوال الرحلات الطويلة - Advanced technology maintaining elegant appearance during long flights',
    image: '/images/uneom_moisture_wicking.webp'
  },
  {
    name: 'حماية من البقع | Stain Protection',
    description: 'طلاء واقي خاص يحمي من البقع ويسهل التنظيف للحفاظ على المظهر المهني - Special protective coating for professional appearance',
    image: '/images/uneom_antimicrobial_treatment.webp'
  }
];

export default function AviationIndustryPage() {
  const locale = 'en';
  
  const content = {
    meta: {
      title: "Aviation Uniforms & Airline Attire in Saudi Arabia | UNEOM",
      description: "Discover UNEOM's premium aviation uniforms for cabin crew, pilots, and ground staff. Tailored for Saudi airlines, ensuring comfort, GACA compliance, and brand identity."},
    hero: {
      headline: "Aviation Uniforms & Airline Attire in Saudi Arabia",
      subheadline: "Premium cabin crew, ground staff, and aviation personnel uniforms tailored for Saudi airlines and private operators, combining style, functionality, and GACA compliance.",
      cta: "Request Aviation Uniform Consultation",
      ctaLink: '/quote?industry=aviation',
      image: "/images/aviation/aviation_uniform_airline_main_image.jpg"},
    intro: {
      title: "Soaring Standards: UNEOM Aviation Uniforms",
      paragraphs: [
      "In Saudi Arabia's rapidly expanding aviation sector, professional uniforms play a crucial role in establishing airline identity, ensuring operational efficiency, and projecting the Kingdom's commitment to excellence in global air travel. UNEOM's comprehensive aviation uniform solutions are specifically designed to meet the unique requirements of Saudi airlines and aviation businesses.",
      "From cabin crew and flight deck personnel to ground operations and technical staff, we provide premium-quality uniforms that combine sophisticated style, practical functionality, and cultural sensitivity. Our aviation collections incorporate advanced fabric technologies that withstand the rigorous demands of air travel while offering options that respect Islamic dress codes and reflect Saudi heritage elements.",
      "As Saudi aviation continues its remarkable global expansion, we partner with airlines to develop uniform programs that enhance brand recognition, boost employee pride, and create memorable passenger experiences that showcase the best of Saudi hospitality and professionalism."
    ]},
    keyBenefits: {
      title: "The UNEOM Advantage in Aviation Attire",
    benefits: [
      {
          name: "GACA Compliance & Safety",
          description: "All our designs meet Saudi General Authority of Civil Aviation (GACA) requirements while maintaining the highest standards of comfort, safety, and elegance.",
          icon: "/images/compliance-shield.svg"
        },
        {
          name: "Enhanced Brand Identity",
        description: "We integrate your airline brand identity into every uniform detail, enhancing brand recognition and creating a distinctive passenger experience.",
          icon: "/images/brand-identity-aviation.svg"
      },
      {
          name: "Modest & Culturally Aware Designs",
        description: "Special designs that respect modest dress requirements for female staff while maintaining an elegant appearance aligned with international aviation standards.",
          icon: "/images/saudi-expertise.svg"
      },
      {
          name: "High-Performance Fabrics",
        description: "Aviation-specific textiles that offer comfort during long flights, resist wrinkles, and maintain a professional appearance throughout demanding shifts.",
          icon: "/images/fabric-cotton-blends.svg"
        },
      ]},
    featuredOfferings: {
      title: "Comprehensive Aviation Uniform Collections",
      offerings: [
        {
        name: "Airline Crew Uniforms",
        description: "Premium quality flight attendant uniforms with modest Islamic-compliant options for Saudi airlines and GCC carriers.",
      image: "/images/aviation/flightـattendantsـuniforms.jpg", // Main image
      link: "/shop/aviation-uniforms", // Main navigation link
      imageGallery: [
        "/images/aviation/aviation_captin_uniform.jpg",
        "/images/aviation/aviation_uniform_airline.jpg",
        "/images/aviation/aviation_uniform_main.jpg"
      ]
    } // Closes the "Airline Crew Uniforms" object
  ] // Closes the "offerings" array
}, // Closes the "featuredOfferings" object
    testimonials: {
      title: "Trusted by Leading Aviation Partners",
      items: [
        {
          quote: "UNEOM's aviation uniforms have significantly enhanced our airline's brand perception. Their attention to detail and understanding of both international aviation standards and Saudi cultural requirements is impeccable.",
          author: "Abdullah Al-Qahtani",
          position: "Brand Director, Saudi Regional Airlines"},
        {
          quote: "Our cabin crew appreciate the comfort and practicality of UNEOM's uniforms. The modest design options for our female staff have received excellent feedback, striking the perfect balance.",
          author: "Noura Al-Sharif",
          position: "Cabin Services Manager, Gulf International Airways"}
      ]},
    customizationOptions: {
      title: "Tailored Aviation Uniform Solutions",
      description: "UNEOM offers extensive customization options for aviation uniforms, including logo embroidery, choice of colors, and specific design modifications to meet your airline's unique branding and operational needs. We ensure every uniform reflects your identity while adhering to safety and comfort standards.",
      image: "/images/industries/aviation/customization-aviation-uniforms.jpg", // Placeholder image
      cta: "Explore Customizations",
      ctaLink: "/services/custom-design"
    },
    relatedBlogs: {
      title: "Aviation Uniform Insights",
      posts: [
        {
          title: "The Future of Aviation Uniforms in the GCC",
          link: "/blog/future-aviation-uniforms-gcc",
          image: "/images/blog/placeholder-aviation1.jpg"},
        {
          title: "Material Innovations for Pilot and Cabin Crew Attire",
          link: "/blog/material-innovations-aviation-attire",
          image: "/images/blog/placeholder-aviation2.jpg"}
      ]},
    finalCta: {
      title: "Elevate Your Airline's Image with UNEOM",
      description: "Partner with UNEOM to design and deliver aviation uniforms that embody excellence and Saudi hospitality. Contact our specialists today.",
      cta: "Get an Aviation Uniform Quote",
      ctaLink: '/quote?industry=aviation&focused=true'}};

  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="أزياء طيران احترافية | يونيفورم طيران السعودية | يونيوم"
        description="أزياء طيران راقية وعالمية للطيران السعودي. يونيفورم طاقم طيران احترافي يعكس الهوية السعودية ويلبي المعايير الدولية."
        keywords={[
          'أزياء طيران السعودية',
          'يونيفورم طيارين الرياض',
          'زي مضيفات طيران',
          'أزياء طاقم طيران',
          'aviation uniforms Saudi',
          'pilot uniforms Riyadh',
          'flight attendant uniforms KSA'
        ]}
        author="فريق خبراء يونيوم للطيران | UNEOM Aviation Team"
        expertise="أزياء الطيران والطاقم الجوي | Aviation Uniforms & Aircrew Attire"
        contentType="service"
        canonicalUrl="https://uneom.com/industries/aviation/"
        locale="ar"
        trustSignals={[
          'معتمدون من الهيئة العامة للطيران المدني',
          'أكثر من 25 شركة طيران تثق بنا',
          'تصاميم تعكس الهوية السعودية',
          'جودة عالمية ومعايير دولية'
        ]}
      />

      <SEO
        title={content.meta.title}
        description={content.meta.description}
        canonicalUrl="https://uneom.com/industries/aviation/"
      />

      {/* Hero Section */}
      <section className="aviation-hero bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'الصناعات | Industries', href: '/industries' },
              { label: 'الطيران | Aviation', href: '/industries/aviation' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              {/* UPDATED H1 according to the plan */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء طيران احترافية | يونيفورم طيران السعودية
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                أزياء طيران تليق بسمعة الطيران السعودي العالمية
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                نصمم أزياء طيران راقية تعكس الهوية السعودية وتلبي المعايير الدولية 
                للطيران المدني. نخدم شركات الطيران الكبرى والخاصة في المملكة 
                مع ضمان الأناقة والراحة والمهنية.
              </p>
              
              {/* Aviation Stats */}
              <div className="aviation-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">25+</span>
                  <span className="text-sm md:text-base text-blue-200">شركة طيران</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">10,000+</span>
                  <span className="text-sm md:text-base text-blue-200">زي طيران سنوياً</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">GACA</span>
                  <span className="text-sm md:text-base text-blue-200">معايير معتمدة</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="/quote?industry=aviation"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  احصل على عرض سعر طيران مجاني
                </Button>
                <Button 
                  href="#featured-products"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  تصفح أزياء الطيران
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/industries/aviation.jpg"
                  alt="طاقم طيران سعودي يرتدي أزياء احترافية أنيقة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Image gallery thumbnails */}
              <div className="image-gallery grid grid-cols-3 gap-4 mt-6">
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/airline-1.jpg"
                    alt="كابتن طيار في زي رسمي أنيق"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/airline-2.jpg"
                    alt="مضيفة طيران في زي أنيق يعكس الطابع السعودي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src="/images/airline-3.jpg"
                    alt="طاقم طيران كامل بأزياء متناسقة"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for aviation uniforms */}
      <section className="aviation-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول أزياء الطيران في السعودية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-blue-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي أفضل شركة أزياء طيران في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> هي الرائدة في تصميم وتصنيع أزياء الطيران في السعودية:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>تصاميم تعكس الهوية السعودية والمعايير الدولية</li>
                    <li>أقمشة فاخرة مقاومة للتجعد ومناسبة للرحلات الطويلة</li>
                    <li>خدمة أكثر من 25 شركة طيران في المملكة</li>
                    <li>معتمدة من الهيئة العامة للطيران المدني</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-green-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                كيف يمكن تخصيص أزياء الطيران حسب هوية الشركة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم خدمات تخصيص شاملة لأزياء الطيران:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>✈️ تطريز الشعارات والرموز بدقة عالية</li>
                    <li>🎨 ألوان مخصصة حسب هوية شركة الطيران</li>
                    <li>👔 تصميم إكسسوارات متناسقة (ربطات عنق، أوشحة)</li>
                    <li>🏷️ تطريز الأسماء والرتب والأقسام</li>
                    <li>📏 قصات مخصصة للطيارين والمضيفين</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          {/* Updated Introduction with Arabic focus */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading subtitle="أزياء طيران احترافية | Professional Aviation Attire">
                  التميز في أزياء الطيران السعودي
                  <span className="block text-lg mt-2 text-gray-600">Excellence in Saudi Aviation Uniforms</span>
                </SectionHeading>
                <p className="text-lg text-gray-600 mb-6">
                  في يونيوم، نتفهم أن أزياء الطيران تعكس صورة الشركة وتساهم في تجربة المسافر. 
                  نصمم أزياء طيران راقية تجمع بين الأناقة العالمية والطابع السعودي المتميز، 
                  مع ضمان الامتثال لمعايير الطيران المدني والراحة أثناء الرحلات الطويلة.
                </p>
                <p className="text-gray-600 mb-8">
                  من الأقمشة الفاخرة المقاومة للتجعد إلى التفاصيل الدقيقة في التطريز والتصميم، 
                  كل عنصر مصمم ليعكس مستوى الخدمة الراقية والضيافة السعودية المتميزة.
                </p>
                <Button href="/contact" variant="primary" size="lg">
                  ناقش مشروع الطيران | Discuss Aviation Project
                </Button>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/airline-1.jpg"
                  alt="كابتن طيار يرتدي زي طيران أنيق من يونيوم"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Updated Key Benefits with bilingual content */}
          <section className="mb-16">
            <SectionHeading subtitle="لماذا تختار أزياء يونيوم للطيران | Why Choose Uneom Aviation Uniforms" centered>
              مميزات متقدمة لقطاع الطيران
              <span className="block text-lg mt-2 text-gray-600">Advanced Features for Aviation Industry</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {aviationBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Aviation Products Section */}
          <section id="featured-products" className="mb-16">
            <SectionHeading subtitle="مجموعة أزياء الطيران | Our Aviation Collection" centered>
              أزياء طيران مميزة
              <span className="block text-lg mt-2 text-gray-600">Featured Aviation Uniforms</span>
            </SectionHeading>
            
            <div className="aviation-products">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {featuredProducts.map((product) => (
                  <div key={product.id} className="product-category bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.category === 'أزياء الطيارين | Pilot Uniforms' ? 
                          'تصاميم فاخرة للطيارين مع تفاصيل كلاسيكية أنيقة' :
                          product.category === 'أزياء المضيفين | Cabin Crew Uniforms' ?
                          'أزياء مضيفات أنيقة تجمع بين الراحة والأناقة' :
                          'أطقم كاملة متناسقة لجميع أفراد طاقم الطيران'
                        }
                      </p>
                      <div className="features-list mb-4">
                        <ul className="space-y-1 text-sm text-gray-600">
                          <li>✈️ أقمشة فاخرة مقاومة للتجعد</li>
                          <li>🇸🇦 تصميم يعكس الهوية السعودية</li>
                          <li>🎖️ تطريز الشعارات بدقة عالية</li>
                          <li>👔 إكسسوارات متناسقة ومكملة</li>
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-blue-600">{product.price}</span>
                        <Link href={product.href} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          اطلب الآن
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/aviation-uniforms/" variant="primary" size="lg">
                عرض جميع أزياء الطيران | View All Aviation Uniforms
              </Button>
            </div>
          </section>

          {/* Updated Fabric Technologies */}
          <section className="mb-16">
            <SectionHeading subtitle="تقنيات الأقمشة المتخصصة | Specialized Fabric Technologies" centered>
              الابتكار في أقمشة الطيران
              <span className="block text-lg mt-2 text-gray-600">Innovation in Aviation Textiles</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {aviationFabrics.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Aviation Testimonials - Arabic Focus */}
          <section className="aviation-testimonials mb-16">
            <SectionHeading subtitle="شهادات شركات الطيران | Aviation Partners Testimonials" centered>
              موثوق من شركات الطيران الرائدة
              <span className="block text-lg mt-2 text-gray-600">Trusted by Leading Airlines</span>
            </SectionHeading>
            
            <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">ك.ح</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">الكابتن حسان المطيري</h4>
                    <p className="text-sm text-gray-500">مدير العمليات - الخطوط السعودية</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "أزياء يونيوم ترقى لمستوى التميز الذي نسعى إليه. جودة الأقمشة والتفصيل الدقيق 
                  يعكس احترافية شركتنا ويساهم في تعزيز صورة الطيران السعودي عالمياً."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">س.ع</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">سارة العتيبي</h4>
                    <p className="text-sm text-gray-500">مديرة خدمات الضيافة - طيران أديل</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "التصاميم المخصصة لطاقم الضيافة تجمع بين الأناقة والراحة بشكل مثالي. 
                  الطاقم يشعر بالثقة والراحة، والمسافرون يلاحظون الفرق في المظهر المهني."
                </p>
              </blockquote>
              
              <blockquote className="testimonial bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-purple-600 font-semibold">م.ص</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">محمد الصقري</h4>
                    <p className="text-sm text-gray-500">المدير التنفيذي - طيران ناس</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "شراكتنا مع يونيوم ساعدت في تطوير هوية بصرية متميزة لشركتنا. 
                  جودة التنفيذ والالتزام بالمواعيد يجعلهم الخيار الأمثل لقطاع الطيران."
                </p>
              </blockquote>
            </div>
          </section>

          {/* Enhanced Client Showcase */}
          <section className="aviation-clients mb-16">
            <SectionHeading subtitle="شركاء النجاح في قطاع الطيران السعودي | Aviation Success Partners" centered>
              نخدم رائدي الطيران في المملكة
              <span className="block text-lg mt-2 text-gray-600">Serving Aviation Leaders in the Kingdom</span>
            </SectionHeading>
            
            <div className="clients-showcase mt-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-blue-800">✈️ الناقلات الوطنية</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">الخطوط الجوية السعودية</h4>
                      <p className="text-blue-700">الناقل الوطني - أزياء طاقم الطيران الرسمية</p>
                    </div>
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">طيران ناس</h4>
                      <p className="text-blue-700">أزياء طاقم الضيافة والطيارين</p>
                    </div>
                    <div className="client-item p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">طيران أديل</h4>
                      <p className="text-blue-700">تصاميم مخصصة لجميع أقسام الطيران</p>
                    </div>
                  </div>
                </div>
                
                <div className="client-sector">
                  <h3 className="text-2xl font-bold mb-6 text-green-800">🛩️ الطيران الخاص والشركات</h3>
                  <div className="space-y-4">
                    <div className="client-item p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">طيران الأمير</h4>
                      <p className="text-green-700">أزياء الطيران الخاص الفاخرة</p>
                    </div>
                    <div className="client-item p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">شركات الطيران الحكومية</h4>
                      <p className="text-green-700">أزياء رسمية للرحلات الحكومية</p>
                    </div>
                    <div className="client-item p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">أكاديميات الطيران</h4>
                      <p className="text-green-700">أزياء التدريب والطلاب</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Enhanced CTA */}
          <section className="aviation-cta text-center bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-12">
            <div className="cta-content max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                هل تحتاج أزياء طيران لشركة أو أكاديمية طيران؟
                <span className="block text-xl md:text-2xl mt-4 text-blue-100">
                  Ready to Elevate Your Aviation Brand?
                </span>
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                احصل على استشارة مجانية وعرض سعر مخصص لمشروع الطيران الخاص بك.
                انضم إلى أكثر من 25 شركة طيران تثق بيونيوم في المملكة.
              </p>
              
              <div className="cta-actions flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/quote?industry=aviation" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احصل على عرض سعر طيران مجاني
                </Link>
                <Link 
                  href="tel:+966112345678" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-lg transition-all duration-300"
                >
                  اتصل بخبراء الطيران
                </Link>
              </div>
              
              <div className="cta-features grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="feature">
                  <span className="block text-2xl mb-2">✈️</span>
                  <span className="text-sm">معايير طيران دولية</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🇸🇦</span>
                  <span className="text-sm">تصميم يعكس الهوية السعودية</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🎖️</span>
                  <span className="text-sm">جودة عالمية فاخرة</span>
                </div>
                <div className="feature">
                  <span className="block text-2xl mb-2">🚚</span>
                  <span className="text-sm">تسليم سريع للمطارات</span>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
} 