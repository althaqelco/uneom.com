'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { Cairo, Tajawal } from 'next/font/google';

// Arabic fonts
const cairo = Cairo({ subsets: ['arabic'] });
const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700'] });

interface ProductData {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
}

interface ClientPageProps {
  product: ProductData;
  relatedProducts: ProductData[];
  locale: string;
}

export default function ClientPage({ product, relatedProducts, locale }: ClientPageProps) {
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Return a loading or error state if product is undefined
  if (!product) {
    return (
      
        <Container>
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold mb-4">المنتج غير متوفر</h2>
            <p className="mb-6">عذراً، لا يمكن العثور على هذا المنتج.</p>
            <Link href="/ar/shop" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700">
              العودة إلى المتجر
            </Link>
          </div>
        </Container>
      
    );
  }

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    
      {/* Breadcrumb */}
      <div className="bg-neutral-100 py-4">
        <Container>
          <div className="flex items-center justify-end text-sm">
            <Link href="/ar" className="text-neutral-600 hover:text-primary-600">
              الرئيسية
            </Link>
            <span className="mx-2">/</span>
            <Link href="/ar/shop" className="text-neutral-600 hover:text-primary-600">
              المتجر
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/ar/shop/${product.category}`} className="text-neutral-600 hover:text-primary-600">
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-600">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-20 rounded-md overflow-hidden cursor-pointer border-2 ${
                      activeImage === index ? 'border-primary-600' : 'border-transparent'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - صورة ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2 text-right">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center justify-end mb-4">
                <div className="flex items-center ml-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? 'text-yellow-400' : 'text-neutral-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-neutral-600">
                  {product.reviews} تقييمات
                </span>
              </div>
              
              <div className="text-2xl font-bold text-primary-600 mb-6">
                {product.price.toLocaleString('ar-SA')} ريال سعودي
              </div>
              
              <div className="mb-6">
                <p className="text-neutral-600">{product.description}</p>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">اللون</h3>
                <div className="flex flex-wrap justify-end gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? 'border-primary-600'
                          : 'border-neutral-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`اللون ${color}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-bold mb-2">المقاس</h3>
                <div className="flex flex-wrap justify-end gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-10 h-10 flex items-center justify-center rounded-md border ${
                        selectedSize === size
                          ? 'bg-primary-600 text-white border-primary-600'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-primary-600'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="font-bold mb-2">الكمية</h3>
                <div className="flex items-center justify-end">
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-l-md bg-neutral-100 hover:bg-neutral-200"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 h-10 text-center border-y border-neutral-300"
                  />
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-r-md bg-neutral-100 hover:bg-neutral-200"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg" className="flex-1 justify-center">
                  أضف إلى السلة
                </Button>
                <Button variant="outline" size="lg" className="flex-1 justify-center">
                  اطلب عينة
                </Button>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold mb-4">المميزات</h3>
                <ul className="space-y-2 text-right">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-end">
                      <span>{feature}</span>
                      <svg
                        className="w-5 h-5 text-primary-600 ml-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div>
                <h3 className="font-bold mb-2">الوسوم</h3>
                <div className="flex flex-wrap justify-end gap-2">
                  {product.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/ar/shop/tag/${tag}`}
                      className="px-3 py-1 bg-neutral-100 hover:bg-neutral-200 rounded-full text-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <SectionHeading centered={true} subtitle="منتجات تناسب احتياجاتك">
            منتجات مشابهة
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <Link href={`/ar/shop/${relatedProduct.category}/${relatedProduct.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="font-bold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-primary-600 font-bold">
                      {relatedProduct.price.toLocaleString('ar-SA')} ريال سعودي
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى حلول مخصصة للأزياء الموحدة؟</h2>
            <p className="text-lg text-neutral-600 mb-8">
              نحن نقدم خدمات تصميم وتصنيع مخصصة للأزياء الموحدة لتلبية احتياجات مؤسستك بالضبط.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ar/contact" 
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200"
              >
                تواصل معنا
              </Link>
              <Link 
                href="/ar/services/custom-uniforms" 
                className="inline-block bg-white text-primary-600 border border-primary-600 px-8 py-3 rounded-md hover:bg-neutral-50 transition-colors duration-200"
              >
                اكتشف خدماتنا المخصصة
              </Link>
            </div>
          </div>
        </Container>
      </section>
    
  );
} 