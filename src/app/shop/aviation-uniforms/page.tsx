'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  href: string;
  features?: string[];
  colors?: string[];
  isNew?: boolean;
  isBestseller?: boolean;
  rating?: number;
  reviews?: number;
}

export default function AviationUniformsPage() {
  const locale = 'en';
  
  // Enhanced Aviation uniforms products with bilingual content
  const products: Product[] = [
    {
      id: 'captain-pilot-uniform',
      name: 'زي كابتن طيار | Captain Pilot Uniform',
      description: 'زي طيار فاخر بتصميم احترافي يعكس الهوية السعودية مع المعايير الدولية للطيران - Sophisticated pilot uniform blending Saudi heritage with international aviation standards.',
      price: 'من 1,299 ريال | From SAR 1,299',
      originalPrice: '1,599 ريال | SAR 1,599',
      image: '/images/airline-1.jpg',
      href: '/shop/aviation-uniforms/captain-pilot-uniform',
      features: ['أقمشة فاخرة', 'مقاوم للتجعد', 'تصميم احترافي', 'معايير GACA'],
      colors: ['أزرق ملكي', 'أسود', 'رمادي', 'أبيض'],
      isBestseller: true,
      rating: 4.8,
      reviews: 89
    },
    {
      id: 'flight-attendant-uniform',
      name: 'زي مضيفات طيران | Flight Attendant Uniform',
      description: 'أزياء مضيفات أنيقة مع خيارات محتشمة للطاقم النسائي تجمع بين الراحة والأناقة - Elegant flight attendant uniforms with modest options for female crew members.',
      price: 'من 899 ريال | From SAR 899',
      originalPrice: '1,199 ريال | SAR 1,199',
      image: '/images/airline-2.jpg',
      href: '/shop/aviation-uniforms/flight-attendant-uniform',
      features: ['تصميم محتشم', 'راحة عالية', 'أقمشة متنفسة', 'سهولة العناية'],
      colors: ['أزرق سماوي', 'بيج', 'رمادي فاتح', 'أحمر كلاسيكي'],
      isNew: false,
      rating: 4.7,
      reviews: 156
    },
    {
      id: 'ground-crew-uniform',
      name: 'زي طاقم الأرض | Ground Crew Uniform',
      description: 'أزياء طاقم الأرض عالية الوضوح مع جيوب متعددة ومقاومة للطقس للعمل في بيئة المطار - High-visibility ground crew uniforms with multiple pockets and weather resistance.',
      price: 'من 599 ريال | From SAR 599',
      originalPrice: '749 ريال | SAR 749',
      image: '/images/airline-3.jpg',
      href: '/shop/aviation-uniforms/ground-crew-uniform',
      features: ['عالي الوضوح', 'جيوب متعددة', 'مقاوم للطقس', 'راحة في الحركة'],
      colors: ['برتقالي عالي الوضوح', 'أصفر أمان', 'أخضر سلامة'],
      rating: 4.6,
      reviews: 134
    },
    {
      id: 'aviation-blazer-premium',
      name: 'بليزر طيران فاخر | Premium Aviation Blazer',
      description: 'بليزر طيران فاخر للقيادات والطيارين كبار السن مع تفاصيل دقيقة وخامات عالية الجودة - Premium aviation blazer for senior pilots and aviation executives.',
      price: 'من 899 ريال | From SAR 899',
      originalPrice: '1,199 ريال | SAR 1,199',
      image: '/images/products/aviation-blazer.jpg',
      href: '/shop/aviation-uniforms/aviation-blazer-premium',
      features: ['خامات فاخرة', 'تفصيل دقيق', 'شعارات مطرزة', 'مقاوم للتجعد'],
      colors: ['أزرق ملكي', 'أسود كلاسيكي'],
      isNew: true,
      rating: 4.9,
      reviews: 67
    }
  ];
  
  // Enhanced Department filters with bilingual
  const departments = [
    { id: 'all', name: 'جميع الأقسام | All Departments' },
    { id: 'cabin-crew', name: 'طاقم الضيافة | Cabin Crew' },
    { id: 'pilot', name: 'الطيارون | Pilots' },
    { id: 'ground-crew', name: 'طاقم الأرض | Ground Crew' },
    { id: 'customer-service', name: 'خدمة العملاء | Customer Service' }
  ];
  
  // Enhanced Features filters with bilingual
  const featureFilters = [
    { id: 'wrinkle-resistant', name: 'مقاوم للتجعد | Wrinkle Resistant' },
    { id: 'moisture-wicking', name: 'طارد للرطوبة | Moisture Wicking' },
    { id: 'stain-resistant', name: 'مقاوم للبقع | Stain Resistant' },
    { id: 'comfort-stretch', name: 'مرونة مريحة | Comfort Stretch' },
    { id: 'premium-fabric', name: 'أقمشة فاخرة | Premium Fabric' }
  ];

  // Aviation benefits
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
    }
  ];
  
  return (
    <div className="bg-white">
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title="أزياء طيران احترافية | Aviation Uniforms Saudi Arabia | يونيوم"
        description="تسوق أفضل أزياء الطيران في السعودية. يونيفورم طيارين ومضيفات وطاقم أرض عالي الجودة يعكس الهوية السعودية ويلبي المعايير الدولية."
        keywords={[
          'أزياء طيران السعودية',
          'يونيفورم طيارين الرياض',
          'زي مضيفات طيران',
          'أزياء طاقم طيران',
          'aviation uniforms Saudi',
          'pilot uniforms KSA',
          'flight attendant uniforms'
        ]}
        author="فريق خبراء يونيوم للطيران | UNEOM Aviation Team"
        expertise="أزياء الطيران والطاقم الجوي | Aviation Uniforms & Aircrew Attire"
        contentType="product"
        trustSignals={[
          'معتمدون من الهيئة العامة للطيران المدني',
          'أكثر من 25 شركة طيران تثق بنا',
          'تصاميم تعكس الهوية السعودية',
          'جودة عالمية ومعايير دولية'
        ]}
        canonicalUrl="https://uneom.com/shop/aviation-uniforms/"
        locale="ar"
      />
    
      {/* Enhanced Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'المتجر | Shop', href: '/shop' },
              { label: 'أزياء الطيران | Aviation Uniforms', href: '/shop/aviation-uniforms' }
            ]}
            className="text-gray-700"
          />
        </Container>
      </div>
      
      {/* UPDATED Category Hero according to 2025 plan */}
      <section className="aviation-uniforms-hero bg-gradient-to-br from-blue-900 via-blue-700 to-sky-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أزياء طيران احترافية | Aviation Uniforms
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                أزياء طيران تليق بسمعة الطيران السعودي العالمية
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                أزياء عالية الجودة مصممة للراحة والأناقة والاحترافية في صناعة الطيران. 
                يونيوم تقدم أزياء للطيارين وطاقم الضيافة وطاقم الأرض وجميع موظفي الطيران.
              </p>
              
              {/* Aviation Stats */}
              <div className="aviation-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">25+</span>
                  <span className="text-sm md:text-base text-blue-200">شركة طيران</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">GACA</span>
                  <span className="text-sm md:text-base text-blue-200">معايير معتمدة</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">48h</span>
                  <span className="text-sm md:text-base text-blue-200">توصيل للمطارات</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="#products"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  تصفح المجموعة | View Collection
                </Button>
                <Button 
                  href="/contact?subject=Aviation%20Uniforms"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  طلب تصميم مخصص | Custom Design
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/airline-1.jpg"
                  alt="طاقم طيران سعودي يرتدي أزياء احترافية أنيقة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
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
            
            <div className="qa-item border-l-4 border-sky-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
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
      
      {/* Shop Section with enhanced filters and products */}
      <section className="py-16" id="products">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Enhanced Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border rounded-lg p-6 sticky top-24">
                <h2 className="text-lg font-bold mb-4">فلاتر | Filters</h2>
                
                {/* Department Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">القسم | Department</h3>
                  <div className="space-y-2">
                    {departments.map((department) => (
                      <div key={department.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`department-${department.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`department-${department.id}`} className="ml-2 text-sm text-gray-700">
                          {department.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Features Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">المميزات | Features</h3>
                  <div className="space-y-2">
                    {featureFilters.map((feature) => (
                      <div key={feature.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`feature-${feature.id}`}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <label htmlFor={`feature-${feature.id}`} className="ml-2 text-sm text-gray-700">
                          {feature.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">السعر | Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor="min-price" className="sr-only">أقل سعر</label>
                      <input
                        type="number"
                        id="min-price"
                        placeholder="أقل سعر"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="sr-only">أعلى سعر</label>
                      <input
                        type="number"
                        id="max-price"
                        placeholder="أعلى سعر"
                        className="w-full border border-gray-300 rounded py-1.5 px-3 text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white rounded py-2 text-sm font-medium hover:bg-blue-700 transition">
                  تطبيق الفلاتر | Apply Filters
                </button>
              </div>
            </div>
            
            {/* Enhanced Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-bold">أزياء الطيران | Aviation Uniforms ({products.length})</h2>
                
                <div className="flex items-center space-x-4">
                  <label htmlFor="sort" className="text-sm text-gray-700">ترتيب حسب:</label>
                  <select
                    id="sort"
                    className="border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>الأكثر شعبية | Most Popular</option>
                    <option>السعر: من الأقل للأعلى | Price: Low to High</option>
                    <option>السعر: من الأعلى للأقل | Price: High to Low</option>
                    <option>الأحدث | Newest</option>
                  </select>
                </div>
              </div>
              
              {/* Enhanced Products */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link key={product.id} href={product.href} className="group">
                    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="relative h-64 overflow-hidden bg-gray-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                            جديد | NEW
                          </div>
                        )}
                        {product.isBestseller && (
                          <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                            الأكثر مبيعاً | BESTSELLER
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        
                        {/* Rating */}
                        {product.rating && (
                          <div className="flex items-center mb-2">
                            <div className="flex">
                              {Array(5).fill(0).map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-4 h-4 ${i < Math.floor(product.rating!) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-2">({product.reviews} تقييم)</span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between mt-2 mb-3">
                          <div>
                            <span className="font-bold text-blue-600 text-lg">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                            )}
                          </div>
                          <span className="text-blue-600 text-sm font-medium group-hover:underline">عرض التفاصيل</span>
                        </div>
                        
                        {product.features && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                {feature}
                              </span>
                            ))}
                            {product.features.length > 2 && (
                              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                +{product.features.length - 2} المزيد
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Enhanced Aviation Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="لماذا تختار أزياء يونيوم للطيران | Why Choose UNEOM Aviation Uniforms" centered>
            التميز في أزياء الطيران
            <span className="block text-lg mt-2 text-gray-600">Excellence in Aviation Uniforms</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {aviationBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                تحتاج أزياء طيران مخصصة؟ | Need Custom Aviation Uniforms?
              </h2>
              <p className="text-lg mb-6">
                يونيوم تقدم خدمات التصميم والتصنيع المخصص لشركات الطيران. 
                فريقنا سيعمل معك لإنشاء أزياء تتماشى مع هوية علامتك التجارية وتلبي متطلبات الصناعة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  href="/contact?subject=Custom%20Aviation%20Uniforms"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  طلب استشارة | Request Consultation
                </Button>
                <Button
                  variant="outline"
                  href="tel:+966112345678"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  اتصل الآن | Call Now
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/airline-2.jpg"
                  alt="خدمة تصميم أزياء الطيران المخصصة"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 