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

export default function MedicalScrubsPage() {
  const locale = 'en';
  
  // Enhanced Medical scrubs products with bilingual content
  const products: Product[] = [
    {
      id: 'premium-medical-scrubs',
      name: 'سكرابز طبية فاخرة | Premium Medical Scrubs',
      description: 'سكرابز طبية عالية الأداء مصممة للمهنيين الطبيين الذين يتطلبون الراحة والمتانة والمظهر المهني - High-performance medical scrubs for healthcare professionals.',
      price: 'من 189 ريال | From SAR 189',
      originalPrice: '249 ريال | SAR 249',
      image: '/images/products/scrubs-set.jpg',
      href: '/shop/medical-scrubs/premium-medical-scrubs',
      features: ['مضاد للبكتيريا', 'قماش فاخر', 'مقاوم للبقع', 'سهل العناية'],
      colors: ['أزرق', 'أخضر', 'أبيض', 'رمادي'],
      isBestseller: true,
      rating: 4.9,
      reviews: 234
    },
    {
      id: 'nursing-uniform-set',
      name: 'زي تمريض احترافي | Professional Nursing Uniform',
      description: 'أزياء تمريض مريحة وأنيقة مصممة خصيصاً للممرضات والممرضين في البيئات الطبية - Comfortable nursing uniforms designed for medical environments.',
      price: 'من 169 ريال | From SAR 169',
      originalPrice: '219 ريال | SAR 219',
      image: '/images/products/nursing-uniform.jpg',
      href: '/shop/medical-scrubs/nursing-uniform-set',
      features: ['راحة عالية', 'تصميم عملي', 'جيوب متعددة', 'قماش قابل للتنفس'],
      colors: ['أبيض', 'وردي', 'أزرق فاتح', 'أخضر نعناعي'],
      isNew: false,
      rating: 4.7,
      reviews: 189
    },
    {
      id: 'lab-coat-premium',
      name: 'معطف مختبر فاخر | Premium Lab Coat',
      description: 'معطف مختبر احترافي مع تفاصيل دقيقة وحماية متقدمة للأطباء والمختصين - Professional lab coat with advanced protection features.',
      price: 'من 249 ريال | From SAR 249',
      originalPrice: '329 ريال | SAR 329',
      image: '/images/products/lab-coat.jpg',
      href: '/shop/medical-scrubs/premium-lab-coat',
      features: ['حماية متقدمة', 'قماش فاخر', 'تصميم احترافي', 'مقاوم للكيماويات'],
      colors: ['أبيض', 'أزرق فاتح'],
      isNew: true,
      rating: 4.8,
      reviews: 156
    },
    {
      id: 'surgical-scrubs',
      name: 'سكرابز جراحية | Surgical Scrubs',
      description: 'سكرابز مخصصة للعمليات الجراحية مع معايير النظافة والسلامة العالية - Specialized surgical scrubs with high hygiene standards.',
      price: 'من 219 ريال | From SAR 219',
      originalPrice: '279 ريال | SAR 279',
      image: '/images/products/surgical-scrubs.jpg',
      href: '/shop/medical-scrubs/surgical-scrubs',
      features: ['معقم', 'مقاوم للسوائل', 'راحة فائقة', 'تصميم جراحي متخصص'],
      colors: ['أخضر جراحي', 'أزرق جراحي'],
      rating: 4.6,
      reviews: 98
    }
  ];
  
  // Enhanced Department filters with bilingual
  const departments = [
    { id: 'all', name: 'جميع الأقسام | All Departments' },
    { id: 'nurses', name: 'التمريض | Nursing' },
    { id: 'doctors', name: 'الأطباء | Physicians' },
    { id: 'surgeons', name: 'الجراحة | Surgical' },
    { id: 'lab', name: 'المختبر | Laboratory' }
  ];
  
  // Enhanced Features filters with bilingual
  const featureFilters = [
    { id: 'antimicrobial', name: 'مضاد للبكتيريا | Antimicrobial' },
    { id: 'moisture-wicking', name: 'طارد للرطوبة | Moisture Wicking' },
    { id: 'wrinkle-resistant', name: 'مقاوم للتجعد | Wrinkle Resistant' },
    { id: 'stretch-fabric', name: 'قماش مرن | Stretch Fabric' },
    { id: 'stain-resistant', name: 'مقاوم للبقع | Stain Resistant' }
  ];

  // Medical benefits
  const medicalBenefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'حماية مضادة للبكتيريا | Antimicrobial Protection',
      description: 'أزياؤنا الطبية تتميز بمعالجات متقدمة مضادة للبكتيريا تساعد في تقليل نمو البكتيريا والحفاظ على النظافة في البيئات الطبية - Advanced antimicrobial treatments for healthcare environments.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'مصممة للراحة | Designed for Comfort',
      description: 'المهنيون الطبيون يعملون نوبات طويلة، لذا أزياؤنا مهندسة بأقمشة طاردة للرطوبة وتصاميم مريحة - Engineered with moisture-wicking fabrics and ergonomic designs for long shifts.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'خيارات التخصيص | Customization Options',
      description: 'نقدم تخصيصاً واسعاً للمرافق الطبية، بما في ذلك تطريز الشعار، الترميز اللوني حسب القسم، وتطريز الأسماء - Extensive customization for healthcare facilities.'
    }
  ];
  
  return (
    <div className="bg-white">
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title="سكرابز طبية عالية الجودة | Premium Medical Scrubs Saudi Arabia | يونيوم"
        description="تسوق أفضل السكرابز الطبية والأزياء الطبية في السعودية. سكرابز مضادة للبكتيريا ومعاطف مختبر وأزياء تمريض عالية الجودة مع توصيل سريع."
        keywords={[
          'سكرابز طبية السعودية',
          'أزياء طبية الرياض',
          'يونيفورم تمريض',
          'معطف مختبر',
          'أزياء جراحية',
          'سكرابز مضادة للبكتيريا',
          'medical scrubs Saudi',
          'nursing uniforms KSA',
          'lab coats Riyadh'
        ]}
        author="فريق خبراء يونيوم الطبي | UNEOM Medical Team"
        expertise="الأزياء الطبية والسكرابز الطبية | Medical Uniforms & Healthcare Scrubs"
        contentType="product"
        trustSignals={[
          'مضاد للبكتيريا معتمد',
          'أقمشة طبية عالية الجودة',
          'توصيل سريع للمستشفيات',
          'ضمان 12 شهر على الجودة'
        ]}
        canonicalUrl="https://uneom.com/shop/medical-scrubs/"
        locale="ar"
      />
    
      {/* Enhanced Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'المتجر | Shop', href: '/shop' },
              { label: 'السكرابز الطبية | Medical Scrubs', href: '/shop/medical-scrubs' }
            ]}
            className="text-gray-700"
          />
        </Container>
      </div>
      
      {/* UPDATED Category Hero according to 2025 plan */}
      <section className="medical-scrubs-hero bg-gradient-to-br from-emerald-800 via-teal-700 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
            <div className="text-content">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                سكرابز طبية عالية الجودة | Premium Medical Scrubs
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-emerald-200">
                الأزياء الطبية الأكثر ثقة في المملكة العربية السعودية
              </h2>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
                سكرابز طبية عالية الأداء مصممة للراحة والوظائف العملية. 
                يونيوم توفر أزياء طبية عالية الجودة للمهنيين الطبيين في جميع أنحاء السعودية.
              </p>
              
              {/* Medical Stats */}
              <div className="medical-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">500+</span>
                  <span className="text-sm md:text-base text-emerald-200">مستشفى ومركز طبي</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">ISO</span>
                  <span className="text-sm md:text-base text-emerald-200">معايير طبية معتمدة</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">24h</span>
                  <span className="text-sm md:text-base text-emerald-200">توصيل طوارئ</span>
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
                  href="/contact?subject=Medical%20Scrubs"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-emerald-900"
                >
                  طلب تصميم مخصص | Custom Design
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/healthcare/healthcare_medical_uniform.jpg"
                  alt="طاقم طبي يرتدي سكرابز طبية عالية الجودة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for medical scrubs */}
      <section className="medical-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول السكرابز الطبية في السعودية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-emerald-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                ما هي أفضل أنواع الأقمشة للأزياء الطبية في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تستخدم أفضل الأقمشة الطبية المتاحة:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>أقمشة مضادة للبكتيريا والفطريات</li>
                    <li>خلطات قطن-بوليستر عالية الجودة (65/35)</li>
                    <li>تقنية امتصاص الرطوبة للراحة طوال اليوم</li>
                    <li>مقاومة للبقع والكيماويات الطبية</li>
                    <li>سهولة الغسيل والتعقيم</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-teal-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                أين يمكن شراء سكرابز طبية عالية الجودة في الرياض؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>متجر يونيوم</strong> هو المصدر الأول للسكرابز الطبية في الرياض:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🏥 توصيل مجاني للمستشفيات خلال 24 ساعة</li>
                    <li>🛍️ متجر إلكتروني شامل مع تشكيلة واسعة</li>
                    <li>📱 طلب سريع عبر الواتساب: +966-50-123-4567</li>
                    <li>🎯 خدمة عملاء متخصصة للقطاع الطبي</li>
                    <li>💳 إمكانية الشراء بالتقسيط للمؤسسات الطبية</li>
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
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                          className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
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
                
                <button className="w-full bg-emerald-600 text-white rounded py-2 text-sm font-medium hover:bg-emerald-700 transition">
                  تطبيق الفلاتر | Apply Filters
                </button>
              </div>
            </div>
            
            {/* Enhanced Products Grid */}
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center justify-between mb-6">
                <h2 className="text-xl font-bold">السكرابز الطبية | Medical Scrubs ({products.length})</h2>
                
                <div className="flex items-center space-x-4">
                  <label htmlFor="sort" className="text-sm text-gray-700">ترتيب حسب:</label>
                  <select
                    id="sort"
                    className="border-gray-300 rounded-md text-sm focus:ring-emerald-500 focus:border-emerald-500"
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
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-200 mb-2">
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
                            <span className="font-bold text-emerald-600 text-lg">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                            )}
                          </div>
                          <span className="text-emerald-600 text-sm font-medium group-hover:underline">عرض التفاصيل</span>
                        </div>
                        
                        {product.features && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {product.features.slice(0, 2).map((feature, index) => (
                              <span key={index} className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">
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
      
      {/* Enhanced Medical Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading subtitle="لماذا تختار أزياء يونيوم الطبية | Why Choose UNEOM Medical Uniforms" centered>
            التميز في الأزياء الطبية
            <span className="block text-lg mt-2 text-gray-600">Excellence in Medical Uniforms</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {medicalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-600">
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
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                تحتاج أزياء طبية مخصصة؟ | Need Custom Medical Uniforms?
              </h2>
              <p className="text-lg mb-6">
                يونيوم متخصصة في تجهيز المرافق الطبية ببرامج أزياء مخصصة. 
                من الترميز اللوني للأقسام إلى التطريز المخصص، يمكننا إنشاء حل أزياء مصمم خصيصاً لاحتياجات مرفقك الطبي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  href="/contact?subject=Custom%20Medical%20Uniforms"
                  className="bg-white text-emerald-600 hover:bg-gray-100"
                >
                  طلب استشارة | Request Consultation
                </Button>
                <Button
                  variant="outline"
                  href="tel:+966112345678"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                >
                  اتصل الآن | Call Now
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/healthcare/healthcare_medical_doctor_uniform.jpg"
                  alt="خدمة تصميم الأزياء الطبية المخصصة"
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