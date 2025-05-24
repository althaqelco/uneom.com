"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { products, getProductById, getProductsByCategory } from '@/lib/data/products';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Fetch product data based on category and product slug
const getProductData = (category: string, productSlug: string, locale?: string) => {
  // From our products data, find the product that matches
  const product = products.find(p => p.category === category && p.id === productSlug);
  
  if (!product) {
    return null;
  }
  
  // Get related products
  const relatedProducts = products
    .filter(p => p.category === category && p.id !== productSlug)
    .slice(0, 3)
    .map(p => ({
      id: p.id,
      name: locale === 'ar' && p.ar ? p.ar.name : p.name,
      image: p.images[0].src,
      price: p.price,
      href: locale === 'ar' ? `/ar/shop/${p.category}/${p.id}` : `/shop/${p.category}/${p.id}`
    }));

  // If locale is Arabic and we have Arabic data, use it for name, description and features
  if (locale === 'ar' && product.ar) {
    return {
      ...product,
      name: product.ar.name,
      description: product.ar.description,
      features: product.ar.features,
      relatedProducts
    };
  }

  return {
    ...product,
    relatedProducts
  };
};

interface ClientPageProps {
  params: {
    category: string;
    product: string;
  };
}

export default function ClientPage({ params }: ClientPageProps) {
  const { category, product: productSlug } = params;
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(5);
  const [showSizeChart, setShowSizeChart] = useState(false);
  
  // Check if we're on an Arabic page
  const pathname = usePathname();
  const isArabic = pathname?.startsWith('/ar');
  
  // Get product data
  const product = getProductData(category, productSlug, isArabic ? 'ar' : 'en');
  
  // If product not found
  if (!product) {
    return notFound();
  }
  
  // Size chart data
  const sizeChart = {
    unisex: [
      { size: 'XS', chest: '34"', waist: '28"', hip: '36"', inseam: '30"' },
      { size: 'S', chest: '36"', waist: '30"', hip: '38"', inseam: '30"' },
      { size: 'M', chest: '38"', waist: '32"', hip: '40"', inseam: '31"' },
      { size: 'L', chest: '40"', waist: '34"', hip: '42"', inseam: '31"' },
      { size: 'XL', chest: '42"', waist: '36"', hip: '44"', inseam: '32"' },
      { size: '2XL', chest: '44"', waist: '38"', hip: '46"', inseam: '32"' },
      { size: '3XL', chest: '46"', waist: '40"', hip: '48"', inseam: '32"' },
      { size: '4XL', chest: '48"', waist: '42"', hip: '50"', inseam: '33"' },
    ]
  };
  
  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  
  // Handle add to quote
  const handleAddToQuote = () => {
    // In a real application, this would add the product to a quote cart
    console.log('Added to quote:', {
      product: product.id,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
    
    // Could dispatch to a global state manager or send to an API
    alert(isArabic ? 'تمت إضافة المنتج إلى طلب الاقتباس الخاص بك.' : 'Product added to your quote request.');
  };
  
  // Generate pricing display based on quantity
  const getPriceDisplay = () => {
    // This is simplified. In a real application, this would calculate based on quantity breaks
    if (quantity >= 500) {
      return 'SAR ' + ((parseFloat(product.price.replace('SAR ', '')) * 0.75) * quantity).toLocaleString();
    } else if (quantity >= 100) {
      return 'SAR ' + ((parseFloat(product.price.replace('SAR ', '')) * 0.85) * quantity).toLocaleString();
    } else if (quantity >= 25) {
      return 'SAR ' + ((parseFloat(product.price.replace('SAR ', '')) * 0.92) * quantity).toLocaleString();
    } else {
      return 'SAR ' + ((parseFloat(product.price.replace('SAR ', ''))) * quantity).toLocaleString();
    }
  };

  // Text content based on locale
  const labels = {
    home: isArabic ? 'الرئيسية' : 'Home',
    shop: isArabic ? 'متجر' : 'Shop',
    color: isArabic ? 'اللون' : 'Color',
    size: isArabic ? 'المقاس' : 'Size',
    sizeChart: isArabic ? 'جدول المقاسات' : 'Size chart',
    quantity: isArabic ? 'الكمية' : 'Quantity',
    requestQuote: isArabic ? 'طلب عرض سعر' : 'Request Quote',
    features: isArabic ? 'المميزات' : 'Features',
    relatedProducts: isArabic ? 'منتجات ذات صلة' : 'Related Products',
    viewProduct: isArabic ? 'عرض المنتج' : 'View Product'
  };
  
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform shop","buy uniforms","professional workwear","uniform store"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="product"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className={`inline-flex items-center space-x-1 md:space-x-3 ${isArabic ? 'rtl:space-x-reverse flex-row-reverse' : ''}`}>
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
                  <Link href={isArabic ? `/ar/shop/${category}` : `/shop/${category}`} className="text-sm text-gray-700 hover:text-primary-600 ml-1 md:ml-2">
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
            <div className={isArabic ? 'rtl text-right' : ''}>
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
                  
                  {/* Size Chart Modal */}
                  {showSizeChart && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-bold">{labels.sizeChart}</h2>
                          <button 
                            onClick={() => setShowSizeChart(false)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3">Size</th>
                                <th scope="col" className="px-6 py-3">Chest</th>
                                <th scope="col" className="px-6 py-3">Waist</th>
                                <th scope="col" className="px-6 py-3">Hip</th>
                                <th scope="col" className="px-6 py-3">Inseam</th>
                              </tr>
                            </thead>
                            <tbody>
                              {sizeChart.unisex.map((size, index) => (
                                <tr key={index} className="bg-white border-b">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {size.size}
                                  </th>
                                  <td className="px-6 py-4">{size.chest}</td>
                                  <td className="px-6 py-4">{size.waist}</td>
                                  <td className="px-6 py-4">{size.hip}</td>
                                  <td className="px-6 py-4">{size.inseam}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              {/* Quantity Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">{labels.quantity}</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="block w-20 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                </div>
              </div>
              
              {/* Total Price */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Total Price (estimated):</span>
                  <span className="text-xl font-bold text-primary-700">{getPriceDisplay()}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Final price will be confirmed in quote</p>
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
                <Link href="/contact" className="flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Request Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Custom Options */}
              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Customization Options</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {product.customizationOptions.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-sm text-gray-500">Contact us for pricing on customization options.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <div className="px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="prose max-w-none">
                <h3>Description</h3>
                <p>{product.description}</p>
                
                {product.features && product.features.length > 0 && (
                  <>
                    <h3>Key Features</h3>
                    <ul>
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </>
                )}
                
                {product.fabricDetails && (
                  <>
                    <h3>Fabric Details</h3>
                    <p><strong>Composition:</strong> {product.fabricDetails.composition}</p>
                    <p><strong>Weight:</strong> {product.fabricDetails.gsm} GSM</p>
                    <p><strong>Features:</strong> {product.fabricDetails.features.join(', ')}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Bulk Pricing */}
      <section className="py-12">
        <Container>
          <SectionHeading centered>Volume Pricing</SectionHeading>
          <p className="text-center text-gray-700 mb-8">Benefit from significant savings with our volume pricing structure.</p>
          
          <div className="max-w-2xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-700">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 border text-left">Quantity</th>
                    <th className="px-6 py-3 border text-right">Price Per Unit</th>
                    <th className="px-6 py-3 border text-right">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border">5-24 units</td>
                    <td className="px-6 py-3 border text-right">{product.price}</td>
                    <td className="px-6 py-3 border text-right">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border">25-99 units</td>
                    <td className="px-6 py-3 border text-right">SAR {(parseFloat(product.price.replace('SAR ', '')) * 0.92).toFixed(0)}</td>
                    <td className="px-6 py-3 border text-right text-green-600">8%</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-6 py-3 border">100-499 units</td>
                    <td className="px-6 py-3 border text-right">SAR {(parseFloat(product.price.replace('SAR ', '')) * 0.85).toFixed(0)}</td>
                    <td className="px-6 py-3 border text-right text-green-600">15%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 border">500+ units</td>
                    <td className="px-6 py-3 border text-right">SAR {(parseFloat(product.price.replace('SAR ', '')) * 0.75).toFixed(0)}</td>
                    <td className="px-6 py-3 border text-right text-green-600">25%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">All prices are in Saudi Riyal (SAR). Contact us for custom quotes on orders exceeding 1,000 units.</p>
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
                        {labels.viewProduct}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      
      {/* Quick Quote Form */}
      <section className="py-12">
        <Container>
          <div className="bg-primary-50 rounded-lg p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Quote?</h2>
              <p className="text-gray-700 mb-6">Get a personalized quote for your bulk order, including custom branding options and delivery schedule.</p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 