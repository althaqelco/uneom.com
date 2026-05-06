"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { getProductById, getProductsByCategory } from '@/lib/data/products';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Fetch product data based on slug array
const getProductData = (slug: string[], locale: string = 'en') => {
  const productId = slug[slug.length - 1];
  const product = getProductById(productId, locale);
  
  if (!product) {
    return null;
  }
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.category, locale)
    .filter(p => p.id !== productId)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      name: p.name,
      image: p.images[0].src,
      price: p.price,
      href: p.href
    }));

  return {
    ...product,
    relatedProducts
  };
};

interface ClientPageProps {
  params: {
    slug: string[];
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const { slug } = params;
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  const locale = isArabic ? 'ar' : 'en';
  
  const product = getProductData(slug, locale);
  
  if (!product) {
    return notFound();
  }
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToQuote = () => {
    alert(isArabic ? 'تمت إضافة المنتج إلى طلب الاقتباس الخاص بك.' : 'Product added to your quote request.');
  };
  
  const getPriceDisplay = () => {
    const basePrice = parseFloat(product.price.replace(/[^\d.]/g, '')) || 0;
    const currency = isArabic ? 'ريال ' : 'SAR ';
    
    let multiplier = 1;
    if (quantity >= 500) multiplier = 0.75;
    else if (quantity >= 100) multiplier = 0.85;
    else if (quantity >= 25) multiplier = 0.92;
    
    return currency + (basePrice * multiplier * quantity).toLocaleString();
  };

  const labels = {
    home: isArabic ? 'الرئيسية' : 'Home',
    shop: isArabic ? 'المتجر' : 'Shop',
    color: isArabic ? 'اللون' : 'Color',
    size: isArabic ? 'المقاس' : 'Size',
    sizeChart: isArabic ? 'جدول المقاسات' : 'Size chart',
    quantity: isArabic ? 'الكمية' : 'Quantity',
    minOrder: isArabic ? 'الحد الأدنى للطلب' : 'Minimum order',
    requestQuote: isArabic ? 'طلب عرض سعر' : 'Add to Quote',
    requestConsultation: isArabic ? 'طلب استشارة' : 'Request Consultation',
    features: isArabic ? 'المميزات' : 'Features',
    relatedProducts: isArabic ? 'منتجات ذات صلة' : 'Related Products',
    viewDetails: isArabic ? 'عرض التفاصيل' : 'View Details',
    totalPrice: isArabic ? 'السعر الإجمالي (تقديري):' : 'Total Price (estimated):',
    finalPriceNote: isArabic ? 'سيتم تأكيد السعر النهائي في عرض السعر' : 'Final price will be confirmed in quote',
    customizationOptions: isArabic ? 'خيارات التخصيص' : 'Customization Options',
    productDetails: isArabic ? 'تفاصيل المنتج' : 'Product Details',
    description: isArabic ? 'الوصف' : 'Description',
    keyFeatures: isArabic ? 'الميزات الرئيسية' : 'Key Features',
    fabricDetails: isArabic ? 'تفاصيل القماش' : 'Fabric Details',
    composition: isArabic ? 'التركيبة:' : 'Composition:',
    weight: isArabic ? 'الوزن:' : 'Weight:',
    volumePricing: isArabic ? 'أسعار الكميات الكبيرة' : 'Volume Pricing',
    volumePricingNote: isArabic ? 'استفد من وفورات كبيرة مع هيكل أسعارنا للطلبات الكبيرة.' : 'Benefit from significant savings with our volume pricing structure.',
    pricePerUnit: isArabic ? 'السعر لكل وحدة' : 'Price Per Unit',
    savings: isArabic ? 'التوفير' : 'Savings',
    needCustomQuote: isArabic ? 'هل تحتاج إلى عرض سعر مخصص؟' : 'Need a Custom Quote?',
    quoteDescription: isArabic ? 'احصل على عرض سعر مخصص لطلبك بالجملة، بما في ذلك خيارات العلامة التجارية المخصصة وجدول التسليم.' : 'Get a personalized quote for your bulk order, including custom branding options and delivery schedule.'
  };
  
  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'text-right' : 'text-left'}>
      <EnhancedSEO2025 
        title={`${product.name} | UNEOM Saudi Arabia`}
        description={product.description}
        keywords={[product.name, product.category, 'uniforms', 'Saudi Arabia']}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Saudi Arabia market leader'
        ]}
        locale={locale}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href={isArabic ? "/ar" : "/"} className="text-sm text-gray-700 hover:text-primary-600">{labels.home}</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className={`w-3 h-3 text-gray-400 mx-1 ${isArabic ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href={isArabic ? "/ar/shop" : "/shop"} className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">{labels.shop}</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className={`w-3 h-3 text-gray-400 mx-1 ${isArabic ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href={isArabic ? `/ar/shop/${product.category}` : `/shop/${product.category}`} className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
                    {product.categoryName}
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className={`w-3 h-3 text-gray-400 mx-1 ${isArabic ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 ml-1 md:ml-2">{product.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      
      {/* Product Details Section */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={product.images[activeImage].src}
                  alt={product.images[activeImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative h-24 rounded-md overflow-hidden cursor-pointer border-2 transition-colors
                      ${activeImage === index ? 'border-primary-600' : 'border-transparent hover:border-primary-400'}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className={isArabic ? 'rtl' : ''}>
              <span className="text-sm text-primary-600 font-medium">{product.categoryName}</span>
              <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
              
              <p className="text-2xl font-bold text-gray-900 mb-4">{product.price}</p>
              
              <div className="prose prose-sm mb-8">
                <p>{product.description}</p>
              </div>
              
              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">{labels.color}</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-10 h-10 rounded-full border-2 focus:outline-none
                          ${selectedColor === color.name ? 'border-primary-600' : 'border-gray-300'}`}
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium text-gray-900">{labels.size}</h3>
                    <button 
                      onClick={() => setShowSizeChart(!showSizeChart)}
                      className="text-sm text-primary-600 hover:text-primary-700"
                    >
                      {labels.sizeChart}
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border focus:outline-none
                          ${selectedSize === size 
                            ? 'border-primary-600 bg-primary-50 text-primary-700' 
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">{labels.quantity}</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="block w-20 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <span className="text-sm text-gray-500">{labels.minOrder}: {product.minOrder}</span>
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">{labels.totalPrice}</span>
                  <span className="text-xl font-bold text-primary-700">{getPriceDisplay()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{labels.finalPriceNote}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToQuote}
                  variant="primary"
                  size="lg"
                  className="flex-1"
                >
                  {labels.requestQuote}
                </Button>
                <Link href={isArabic ? "/ar/contact" : "/contact"} className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    {labels.requestConsultation}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-xl font-bold text-gray-900">{labels.productDetails}</h2>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <h3>{labels.description}</h3>
                <p>{product.description}</p>
                {product.longDescription && <p>{product.longDescription}</p>}
                
                {product.features && product.features.length > 0 && (
                  <>
                    <h3>{labels.keyFeatures}</h3>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {product.fabricDetails && (
                  <>
                    <h3>{labels.fabricDetails}</h3>
                    <p><strong>{labels.composition}</strong> {product.fabricDetails.composition}</p>
                    <p><strong>{labels.weight}</strong> {product.fabricDetails.gsm} GSM</p>
                    <p><strong>{labels.features}</strong> {product.fabricDetails.features.join(', ')}</p>
                  </>
                )}

                <h3>{labels.customizationOptions}</h3>
                <ul>
                  {product.customizationOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Bulk Pricing */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>{labels.volumePricing}</SectionHeading>
          <p className="text-center text-gray-700 mb-8">{labels.volumePricingNote}</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 border text-right">{labels.quantity}</th>
                    <th className="px-6 py-3 border text-right">{labels.pricePerUnit}</th>
                    <th className="px-6 py-3 border text-right">{labels.savings}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border">5-24 {isArabic ? 'وحدة' : 'units'}</td>
                    <td className="px-6 py-3 border text-right">{product.price}</td>
                    <td className="px-6 py-3 border text-right">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border">25-99 {isArabic ? 'وحدة' : 'units'}</td>
                    <td className="px-6 py-3 border text-right">{(parseFloat(product.price.replace(/[^\d.]/g, '')) * 0.92).toFixed(0)} {isArabic ? 'ريال' : 'SAR'}</td>
                    <td className="px-6 py-3 border text-right text-green-600">8%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border">100-499 {isArabic ? 'وحدة' : 'units'}</td>
                    <td className="px-6 py-3 border text-right">{(parseFloat(product.price.replace(/[^\d.]/g, '')) * 0.85).toFixed(0)} {isArabic ? 'ريال' : 'SAR'}</td>
                    <td className="px-6 py-3 border text-right text-green-600">15%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border">500+ {isArabic ? 'وحدة' : 'units'}</td>
                    <td className="px-6 py-3 border text-right">{(parseFloat(product.price.replace(/[^\d.]/g, '')) * 0.75).toFixed(0)} {isArabic ? 'ريال' : 'SAR'}</td>
                    <td className="px-6 py-3 border text-right text-green-600">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <Container>
            <SectionHeading centered>{labels.relatedProducts}</SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {product.relatedProducts.map((relatedProduct, index) => (
                <Link href={relatedProduct.href} key={index} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mt-1 group-hover:text-primary-600 transition-colors duration-200">{relatedProduct.name}</h3>
                      <p className="text-primary-600 font-medium mt-2">{relatedProduct.price}</p>
                      <span className="text-sm text-primary-600 group-hover:text-primary-500 transition-colors duration-200 flex items-center mt-3">
                        {labels.viewDetails}
                        <svg className={`w-4 h-4 ml-1 ${isArabic ? 'rotate-180 mr-1 ml-0' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}