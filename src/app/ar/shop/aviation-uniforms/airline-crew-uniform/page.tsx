'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { getProductById } from '@/lib/data/products';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Get product data from the English version and adapt it for Arabic
const englishProduct = getProductById('airline-crew-uniform');

// Product data - using the data from products.ts but translated to Arabic
const productData = {
  id: 'airline-crew-uniform',
  name: 'زي طاقم الطيران',
  price: 'ريال سعودي 599',
  rating: 4.8,
  reviews: 105,
  description: 'زي طاقم الطيران المصمم خصيصًا يمزج بين عناصر التصميم السعودي التقليدي والأسلوب المعاصر، مما يخلق مظهرًا مميزًا يمثل هوية شركة الطيران الخاصة بك والهوية الثقافية السعودية.',
  longDescription: 'تم تصميم أزياء طاقم الطيران لدينا لتمثل أفضل ما في الضيافة السعودية مع الالتزام بمعايير الطيران الدولية. تمزج هذه الأزياء بين عناصر التصميم السعودي التقليدي والأسلوب المعاصر، مما يخلق مظهرًا مميزًا يمثل علامة شركة الطيران التجارية والهوية الثقافية السعودية.',
  features: [
    'قماش مقاوم للتجاعيد للرحلات الطويلة',
    'مواد منظمة للحرارة',
    'تصاميم ملائمة ثقافيًا لشركات الطيران السعودية',
    'خيارات محتشمة لأفراد الطاقم من النساء',
    'إكسسوارات متناسقة متوفرة',
    'قابل للتخصيص مع علامة شركة الطيران التجارية'
  ],
  specifications: [
    { name: 'التركيبة', value: '80% بوليستر، 18% صوف، 2% إيلاستين' },
    { name: 'وزن القماش', value: '220 غرام/متر مربع' },
    { name: 'الميزات', value: 'مقاوم للتجاعيد، راحة مع التمدد، تشطيب احترافي' },
    { name: 'خيارات التخصيص', value: 'تطريز شعار شركة الطيران، أزرار مخصصة، تصاميم غطاء الرأس للطاقم النسائي' },
    { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' }
  ],
  images: englishProduct ? englishProduct.images : [
    { src: '/images/aviation/aviation_uniform_airline_main_image.jpg', alt: 'زي طاقم الطيران للنساء والرجال' },
    { src: '/images/aviation/aviation_uniform_airline.jpg', alt: 'زي الطاقم النسائي بعناصر تصميم سعودية' },
    { src: '/images/aviation/aviation_uniform_flightـattendants.jpg', alt: 'تفاصيل زي الطاقم الرجالي' }
  ],
  colors: [
    { name: 'أزرق ملكي', value: '#1e3799', image: '/images/products/aviation/airline-blue.jpg' },
    { name: 'لون رملي صحراوي', value: '#c4a077', image: '/images/products/aviation/airline-sand.jpg' },
    { name: 'كحلي مؤسسي', value: '#0c2461', image: '/images/products/aviation/airline-navy.jpg' }
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  category: 'أزياء الطيران',
  categorySlug: 'aviation-uniforms',
  inStock: true,
  minOrderQuantity: 15,
  bulkPricing: [
    { quantity: '15-24', price: 'ريال سعودي 599' },
    { quantity: '25-49', price: 'ريال سعودي 569' },
    { quantity: '50-99', price: 'ريال سعودي 539' },
    { quantity: '100+', price: 'ريال سعودي 509' }
  ],
  customizationOptions: [
    'تطريز شعار شركة الطيران',
    'أزرار مخصصة بعلامة الشركة',
    'علامات الرتب',
    'إكسسوارات مستوحاة من التراث السعودي (اختياري)',
    'تصاميم غطاء الرأس للطاقم النسائي'
  ],
  relatedProducts: [
    {
      id: 'pilot-uniform-set',
      name: 'طقم زي الطيار المحترف',
      price: 'ريال سعودي 1,799',
      images: [{ src: '/images/aviation/aviation_captin_uniform.jpg', alt: 'زي طيار محترف للخطوط الجوية السعودية' }],
      category: 'أزياء الطيران',
      categorySlug: 'aviation-uniforms'
    },
    {
      id: 'ground-crew-uniform',
      name: 'زي طاقم الأرض',
      price: 'ريال سعودي 299',
      images: [{ src: '/images/aviation/aviation_uniform_airline.jpg', alt: 'زي طاقم الأرض للمطارات السعودية' }],
      category: 'أزياء الطيران',
      categorySlug: 'aviation-uniforms'
    }
  ],
  tags: ['زي طيران', 'طاقم مضيفين', 'يونيفورم طيران', 'زي مضيفات']
};

export default function AirlineCrewUniformPageAr() {
  const [selectedColor, setSelectedColor] = React.useState(productData.colors[0].value);
  const [selectedSize, setSelectedSize] = React.useState(productData.sizes[0]);
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedQuantity, setSelectedQuantity] = React.useState(productData.minOrderQuantity || 1);

  return (
    <div dir="rtl" className="bg-neutral-50">
      <Container>
        {/* Product Display */}
        <div className="py-12">
          <h1 className="sr-only">زي طاقم الطائرة المتميز - أزياء طيران احترافية للخطوط السعودية | يونيوم</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative border border-neutral-200 rounded-lg overflow-hidden bg-white">
                <Image
                  src={productData.images[selectedImage].src}
                  alt={productData.images[selectedImage].alt}
                  className="object-contain"
                  fill
                  priority
                />
              </div>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 border rounded-md overflow-hidden ${selectedImage === index ? 'border-primary-500 ring-2 ring-primary-200' : 'border-neutral-200'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover"
                        fill
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <div className="mb-6">
                <Link href={`/ar/shop/${productData.categorySlug}`} className="text-sm text-primary-600 hover:underline">
                  {productData.category}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                      className={`w-5 h-5 ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
                    >
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-neutral-600 mr-2 rtl:mr-0 rtl:ml-2">{productData.rating} ({productData.reviews} تقييم)</span>
              </div>
              
              <p className="text-2xl font-semibold text-neutral-900 mb-6">{productData.price}</p>
              
              <div className="mb-8">
                <p className="text-neutral-700">{productData.description}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label className="block text-neutral-800 mb-2">
                  الكمية (الحد الأدنى: {productData.minOrderQuantity})
                </label>
                <div className="flex">
                  <button 
                    className="bg-neutral-100 border border-neutral-300 px-3 py-2 rounded-r-md"
                    onClick={() => setSelectedQuantity(Math.max(productData.minOrderQuantity, selectedQuantity - 1))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                  </button>
                  <input 
                    type="number" 
                    min={productData.minOrderQuantity}
                    value={selectedQuantity} 
                    onChange={(e) => setSelectedQuantity(Math.max(productData.minOrderQuantity, parseInt(e.target.value) || productData.minOrderQuantity))}
                    className="border-y border-neutral-300 w-16 py-2 text-center"
                  />
                  <button 
                    className="bg-neutral-100 border border-neutral-300 px-3 py-2 rounded-l-md"
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Color Selection */}
              <div className="mb-6">
                <label className="block text-neutral-800 mb-2">اللون</label>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {productData.colors.map((color) => (
                    <button
                      key={color.value}
                      className={`w-10 h-10 rounded-full ${selectedColor === color.value ? 'ring-2 ring-primary-400 ring-offset-2' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.value)}
                      aria-label={`اختر اللون ${color.name}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-8">
                <label className="block text-neutral-800 mb-2">المقاس</label>
                <div className="flex flex-wrap gap-2">
                  {productData.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border ${selectedSize === size ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-neutral-300 bg-white text-neutral-800'} rounded-md`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md"
                >
                  أضف إلى طلب العرض
                </Button>
                <Button
                  className="border border-primary-600 bg-white text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-md"
                >
                  اتصل بنا للاستفسار
                </Button>
              </div>
              
              {/* Key Features Preview */}
              <div className="mt-8 p-4 bg-white rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-lg mb-4">المميزات الرئيسية</h3>
                <ul className="space-y-2">
                  {productData.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="mt-1 ml-2 w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bulk Pricing Preview */}
              <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-lg mb-4">خصومات الكميات</h3>
                <ul className="space-y-2">
                  {productData.bulkPricing.slice(0, 2).map((pricing, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="mt-1 ml-2 w-4 h-4 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span>{pricing.quantity} قطعة: {pricing.price}</span>
                    </li>
                  ))}
                  <li className="text-sm text-primary-600 hover:underline cursor-pointer mt-2">عرض جميع خيارات الأسعار</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Product Details Tab Section */}
          <div className="mt-16">
            <div className="border-b border-neutral-200">
              <nav className="flex space-x-8 rtl:space-x-reverse">
                <button className="border-b-2 border-primary-500 py-4 px-1 text-primary-600 font-medium">
                  تفاصيل المنتج
                </button>
                <button className="py-4 px-1 text-neutral-500 font-medium">
                  المواصفات
                </button>
                <button className="py-4 px-1 text-neutral-500 font-medium">
                  خيارات التخصيص
                </button>
                <button className="py-4 px-1 text-neutral-500 font-medium">
                  الأسعار والخصومات
                </button>
              </nav>
            </div>
            
            {/* Product Details Content */}
            <div className="py-8">
              <p className="text-lg mb-6">{productData.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">الميزات</h3>
              <ul className="space-y-3 mb-8">
                {productData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="mt-1 ml-3 w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Specifications */}
              <h3 className="text-xl font-semibold mb-4">المواصفات</h3>
              <div className="bg-white rounded-lg border border-neutral-200 mb-8">
                <table className="min-w-full divide-y divide-neutral-200">
                  <tbody className="divide-y divide-neutral-200">
                    {productData.specifications.map((spec, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800 bg-neutral-50 w-1/3">{spec.name}</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-neutral-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 