"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SearchBar from '@/components/shop/SearchBar';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function ShopPage() {
  const locale = 'en';
  
  // Enhanced Product Categories with bilingual names and updated images
  const categories = [
    {
      id: 'medical-scrubs',
      name: 'أزياء طبية | Healthcare Apparel',
      description: 'سكرابز طبية احترافية ومعاطف مختبر وأزياء رعاية صحية مصممة للراحة والوظائف - Professional medical scrubs, lab coats, and healthcare uniforms.',
      image: '/images/products/scrubs-set.jpg',
      href: '/shop/medical-scrubs',
      price: 'من 169 ريال | From SAR 169',
      popular: true,
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'aviation-uniforms',
      name: 'أزياء طيران | Aviation Uniforms',
      description: 'أزياء احترافية للطيارين ومضيفي الطيران وطاقم الأرض بتصاميم أنيقة - Professional uniforms for pilots, flight attendants, and ground staff.',
      image: '/images/airline-1.jpg',
      href: '/shop/aviation-uniforms',
      price: 'من 899 ريال | From SAR 899',
      popular: false,
      gradient: 'from-blue-600 to-sky-600'
    },
    {
      id: 'hospitality-attire',
      name: 'أزياء ضيافة | Hospitality Attire',
      description: 'أزياء للفنادق والمنتجعات وموظفي الضيافة مصممة للراحة والأناقة - Uniforms for hotels, resorts, and hospitality staff.',
      image: '/images/hospitality_uniform_concierge.jpg',
      href: '/shop/hospitality-attire',
      price: 'من 329 ريال | From SAR 329',
      popular: true,
      gradient: 'from-orange-600 to-amber-600'
    },
    {
      id: 'corporate-workwear',
      name: 'أزياء مؤسسية | Corporate Workwear',
      description: 'ملابس عمل مهنية وأزياء شركات لمظهر مصقول في مكان العمل - Professional business attire and corporate uniforms.',
      image: '/images/products/corporate-suit-executive.jpg',
      href: '/shop/corporate-workwear',
      price: 'من 799 ريال | From SAR 799',
      popular: false,
      gradient: 'from-gray-700 to-blue-800'
    },
    {
      id: 'culinary-uniforms',
      name: 'أزياء طبخ | Culinary Uniforms',
      description: 'معاطف الشيف وأزياء المطبخ وملابس الطهي للمطاعم وخدمات الطعام - Chef coats, kitchen uniforms, and culinary apparel.',
      image: '/images/cook-flavoring-his-best-meal-2024-11-29-22-42-39-utc.jpg',
      href: '/shop/culinary-uniforms',
      price: 'من 199 ريال | From SAR 199',
      popular: false,
      gradient: 'from-red-600 to-orange-600'
    },
    {
      id: 'industrial-uniforms',
      name: 'أزياء صناعية | Industrial Uniforms',
      description: 'ملابس عمل متينة للبيئات الصناعية مع التركيز على السلامة والوظائف - Durable workwear for industrial environments.',
      image: '/images/products/industrial-coverall.jpg',
      href: '/shop/industrial-uniforms',
      price: 'من 129 ريال | From SAR 129',
      popular: false,
      gradient: 'from-yellow-600 to-orange-600'
    }
  ];
  
  // Enhanced Featured Products with bilingual content
  const featuredProducts = [
    {
      id: 'premium-medical-scrubs',
      name: 'سكرابز طبية فاخرة | Premium Medical Scrubs',
      price: 'من 189 ريال | From SAR 189',
      originalPrice: '249 ريال | SAR 249',
      rating: 4.9,
      reviews: 234,
      image: '/images/products/scrubs-set.jpg',
      href: '/shop/medical-scrubs/premium-scrubs-set',
      badge: 'الأكثر مبيعاً | Best Seller',
      features: ['مقاوم للبكتيريا', 'راحة عالية', 'سهل العناية']
    },
    {
      id: 'aviation-captain-uniform',
      name: 'زي كابتن طيار | Captain Pilot Uniform',
      price: 'من 1,299 ريال | From SAR 1,299',
      originalPrice: '1,599 ريال | SAR 1,599',
      rating: 4.8,
      reviews: 89,
      image: '/images/airline-1.jpg',
      href: '/shop/aviation-uniforms/captain-pilot-uniform',
      badge: 'حصري | Exclusive',
      features: ['أقمشة فاخرة', 'تصميم احترافي', 'مقاوم للتجعد']
    },
    {
      id: 'luxury-concierge-uniform',
      name: 'زي استقبال فاخر | Luxury Concierge Uniform',
      price: 'من 449 ريال | From SAR 449',
      originalPrice: '599 ريال | SAR 599',
      rating: 4.7,
      reviews: 156,
      image: '/images/hospitality_uniform_concierge.jpg',
      href: '/shop/hospitality-attire/luxury-concierge-uniform',
      badge: 'جديد | New',
      features: ['تصميم أنيق', 'راحة طوال اليوم', 'مقاوم للبقع']
    },
    {
      id: 'executive-business-suit',
      name: 'بدلة تنفيذية | Executive Business Suit',
      price: 'من 799 ريال | From SAR 799',
      originalPrice: '999 ريال | SAR 999',
      rating: 4.6,
      reviews: 122,
      image: '/images/products/corporate-suit-executive.jpg',
      href: '/shop/corporate-workwear/executive-business-suit',
      badge: 'عرض خاص | Special Offer',
      features: ['صوف فاخر', 'تفصيل دقيق', 'مظهر مهني']
    }
  ];

  // Shopping benefits
  const shoppingBenefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'جودة مضمونة | Quality Guaranteed',
      description: 'ضمان 12 شهر على جميع المنتجات مع إمكانية الاستبدال المجاني - 12-month warranty with free replacement guarantee.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: 'توصيل سريع | Fast Delivery',
      description: 'توصيل مجاني خلال 48 ساعة لجميع أنحاء المملكة - Free delivery within 48 hours across Saudi Arabia.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2v-6a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V4a2 2 0 012-2z" />
        </svg>
      ),
      title: 'دعم متخصص | Expert Support',
      description: 'فريق استشاري متخصص لمساعدتك في اختيار الأزياء المناسبة - Specialized consulting team for perfect uniform selection.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: 'خصومات الكمية | Bulk Discounts',
      description: 'خصومات تصل إلى 30% على الطلبات الكبيرة والمؤسسية - Up to 30% discount on bulk and institutional orders.'
    }
  ];
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedSorting, setSelectedSorting] = React.useState('popularity');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('all');
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025
        title="متجر الأزياء المهنية | Professional Uniforms Shop Saudi Arabia | يونيوم"
        description="تسوق أزياء مهنية عالية الجودة وملابس عمل للرعاية الصحية والطيران والضيافة والقطاعات الصناعية. تصاميم مخصصة وطلبات بالجملة متاحة في جميع أنحاء السعودية."
        keywords={[
          'متجر أزياء مهنية السعودية',
          'تسوق يونيفورم اون لاين',
          'أزياء طبية سكرابز',
          'يونيفورم طيران',
          'أزياء ضيافة',
          'ملابس عمل صناعية',
          'أزياء مخصصة',
          'طلبات بالجملة أزياء',
          'uniform shop Saudi Arabia',
          'professional workwear online'
        ]}
        author="فريق مبيعات يونيوم | UNEOM Sales Team"
        expertise="تجارة التجزئة للأزياء المهنية والتصنيع | Professional Uniform Retail & Manufacturing"
        contentType="product"
        trustSignals={[
          'مواد عالية الجودة',
          'مقاسات مخصصة متاحة',
          'خصومات على الطلبات بالجملة',
          'توصيل سريع في جميع أنحاء المملكة'
        ]}
        canonicalUrl="https://uneom.com/shop/"
        locale="ar"
      />
      
      {/* UPDATED Hero Section according to 2025 plan */}
      <section className="shop-hero bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية | Home', href: '/' },
              { label: 'المتجر | Shop', href: '/shop' }
            ]}
            className="text-white/80 mb-6 relative z-10 pt-8"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-content">
              {/* UPDATED H1 according to the plan */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                متجر الأزياء المهنية | Professional Uniforms Shop
              </h1>
              
              <h2 className="text-2xl md:text-3xl mb-6 text-blue-200">
                تسوق أفضل الأزياء المهنية عالية الجودة في المملكة
              </h2>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                اكتشف مجموعتنا الواسعة من الأزياء المهنية عالية الجودة وملابس العمل 
                لمختلف الصناعات. تصاميم مخصصة وطلبات بالجملة متاحة.
              </p>
              
              {/* Shop Stats */}
              <div className="shop-stats grid grid-cols-3 gap-6 mb-10">
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">1000+</span>
                  <span className="text-sm md:text-base text-blue-200">منتج متوفر</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm md:text-base text-blue-200">تقييم العملاء</span>
                </div>
                <div className="stat text-center">
                  <span className="block text-3xl md:text-4xl font-bold text-yellow-400">48h</span>
                  <span className="text-sm md:text-base text-blue-200">توصيل سريع</span>
                </div>
              </div>
              
              {/* Enhanced Search Bar */}
              <div className="search-container mb-8">
                <SearchBar 
                  placeholder="ابحث عن الأزياء، سكرابز، ملابس عمل... | Search uniforms, scrubs, workwear..." 
                  className="w-full"
                  locale={locale}
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="#categories"
                  variant="secondary" 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold"
                >
                  تصفح الفئات | Browse Categories
                </Button>
                <Button 
                  href="/quote"
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900"
                >
                  طلب عرض سعر | Get Quote
                </Button>
              </div>
            </div>
            
            <div className="image-content relative">
              <div className="relative h-96 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-shop-uniforms.jpg"
                  alt="مجموعة متنوعة من الأزياء المهنية عالية الجودة من يونيوم"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* AI-Optimized Q&A Section for online shopping */}
      <section className="shop-qa py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            أسئلة شائعة حول التسوق للأزياء المهنية
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="qa-item border-l-4 border-primary-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                أين يمكنني شراء أزياء مهنية عالية الجودة في السعودية؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>متجر يونيوم الإلكتروني</strong> هو وجهتك الأولى لشراء الأزياء المهنية في السعودية:
                  </p>
                  <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>أكثر من 1000 منتج متاح للشراء الفوري</li>
                    <li>توصيل مجاني خلال 48 ساعة لجميع أنحاء المملكة</li>
                    <li>ضمان 12 شهر على جميع المنتجات</li>
                    <li>خدمة عملاء متخصصة باللغتين العربية والإنجليزية</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="qa-item border-l-4 border-emerald-500 pl-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className="text-xl font-bold mb-3 text-gray-800" itemProp="name">
                كيف يمكنني الحصول على خصومات على الطلبات بالجملة؟
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text" className="text-gray-700">
                  <p className="mb-3">
                    <strong>يونيوم</strong> تقدم خصومات تدريجية على الطلبات بالجملة:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>🛒 10+ قطع: خصم 10%</li>
                    <li>🏢 50+ قطعة: خصم 20%</li>
                    <li>🏭 100+ قطعة: خصم 30%</li>
                    <li>📞 اتصل بـ +966-11-234-5678 للطلبات الكبيرة</li>
                    <li>💼 عروض خاصة للمؤسسات والشركات</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <main className="py-16">
        <Container>
          {/* Enhanced Categories Section */}
          <section id="categories" className="mb-16">
            <SectionHeading subtitle="تصفح حسب الفئة | Browse by Category" centered>
              فئات الأزياء المهنية
              <span className="block text-lg mt-2 text-gray-600">Professional Uniform Categories</span>
            </SectionHeading>
            
            <div className="categories-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {categories.map((category) => (
                <Link 
                  key={category.id} 
                  href={category.href}
                  className="category-card group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {category.popular && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        الأكثر مبيعاً
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary-600">{category.price}</span>
                      <span className="text-sm text-primary-600 font-medium group-hover:underline">
                        تسوق الآن →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Enhanced Shopping Benefits */}
          <section className="shopping-benefits mb-16">
            <SectionHeading subtitle="مميزات التسوق معنا | Shopping Benefits" centered>
              لماذا تختار متجر يونيوم؟
              <span className="block text-lg mt-2 text-gray-600">Why Choose UNEOM Shop?</span>
            </SectionHeading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {shoppingBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Enhanced Featured Products */}
          <section className="featured-products mb-16">
            <SectionHeading subtitle="المنتجات المميزة | Featured Products" centered>
              أفضل المنتجات مبيعاً
              <span className="block text-lg mt-2 text-gray-600">Best Selling Products</span>
            </SectionHeading>
            
            <div className="products-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {featuredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  href={product.href}
                  className="product-card group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.badge}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {Array(5).fill(0).map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-2">({product.reviews} تقييم)</span>
                    </div>
                    
                    {/* Features */}
                    <div className="features-list mb-4">
                      <ul className="space-y-1 text-xs text-gray-600">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Price */}
                    <div className="price-section">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-primary-600 text-lg">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                          )}
                        </div>
                        <span className="text-sm text-primary-600 font-medium group-hover:underline">
                          عرض التفاصيل
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button href="/shop/all-products" variant="primary" size="lg">
                عرض جميع المنتجات | View All Products
              </Button>
            </div>
          </section>

          {/* Enhanced Bulk Order CTA */}
          <section className="bulk-order-cta mb-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                تحتاج طلب بالجملة؟ | Need a Bulk Order?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                احصل على عرض سعر مخصص للطلبات بالجملة أو متطلبات الأزياء المخصصة لمؤسستك.
                خصومات تصل إلى 30% على الطلبات الكبيرة.
              </p>
              
              <div className="bulk-features grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="feature text-center">
                  <span className="block text-3xl mb-2">💰</span>
                  <span className="text-sm">خصومات حتى 30%</span>
                </div>
                <div className="feature text-center">
                  <span className="block text-3xl mb-2">🎨</span>
                  <span className="text-sm">تصاميم مخصصة</span>
                </div>
                <div className="feature text-center">
                  <span className="block text-3xl mb-2">📦</span>
                  <span className="text-sm">تغليف مؤسسي</span>
                </div>
                <div className="feature text-center">
                  <span className="block text-3xl mb-2">🚚</span>
                  <span className="text-sm">توصيل مجاني</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/quote" 
                  className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  طلب عرض سعر | Request Quote
                </Link>
                <Link 
                  href="tel:+966112345678" 
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-700 font-bold rounded-lg transition-all duration-300"
                >
                  اتصل الآن | Call Now
                </Link>
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="customer-reviews mb-16">
            <SectionHeading subtitle="آراء العملاء | Customer Reviews" centered>
              ماذا يقول عملاؤنا؟
              <span className="block text-lg mt-2 text-gray-600">What Our Customers Say</span>
            </SectionHeading>
            
            <div className="reviews-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <blockquote className="review bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-600 font-semibold">د.أ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">د. أحمد المالكي</h4>
                    <p className="text-sm text-gray-500">مدير مستشفى</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "جودة السكرابز الطبية ممتازة والتوصيل كان سريع جداً. 
                  أنصح بشدة بالتسوق من متجر يونيوم."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </blockquote>
              
              <blockquote className="review bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">س.ع</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">سارة العتيبي</h4>
                    <p className="text-sm text-gray-500">مديرة فندق</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "أزياء الضيافة أنيقة جداً وتعكس مستوى الفندق. 
                  الموظفون راضون عن الجودة والراحة."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </blockquote>
              
              <blockquote className="review bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">م.ر</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">محمد الراشد</h4>
                    <p className="text-sm text-gray-500">مدير شركة</p>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "الأزياء المؤسسية بجودة عالية والخدمة ممتازة. 
                  حصلنا على خصم رائع للطلب بالجملة."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </blockquote>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
} 