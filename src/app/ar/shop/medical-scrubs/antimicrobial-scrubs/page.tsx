'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

// Product data - normally would come from a database or API
const productData = {
  id: 'antimicrobial-scrubs',
  name: 'ملابس طبية مضادة للميكروبات',
  price: 'ريال سعودي 279',
  rating: 4.7,
  reviews: 98,
  description: 'ملابس طبية متقدمة مضادة للميكروبات مصممة خصيصًا للبيئات الصحية حيث تكون مكافحة العدوى أمرًا بالغ الأهمية. تتميز بتقنية أيونات الفضة للحماية طويلة الأمد.',
  longDescription: 'تم تصميم ملابسنا الطبية المضادة للميكروبات للمتخصصين في الرعاية الصحية الذين يعملون في بيئات تكون فيها مكافحة العدوى أمرًا حيويًا. تمت معالجة القماش بتقنية أيونات الفضة التي توفر حماية مستمرة من الميكروبات حتى بعد الغسيل الصناعي المتكرر. هذه الملابس مثالية لأقسام الجراحة ووحدات العناية المركزة ووحدات العزل وغيرها من المناطق عالية الخطورة في المرافق الصحية السعودية.',
  features: [
    'تقنية أيونات الفضة المضادة للميكروبات التي تدوم طوال عمر الملابس',
    'نسيج مقاوم للسوائل يوفر حماية إضافية',
    'مادة قابلة للتنفس لراحة أكبر خلال المناوبات الطويلة',
    'درزات معززة في مناطق الضغط العالي لمتانة إضافية',
    'جيوب متعددة مصممة لسهولة الوصول إلى المعدات الطبية',
    'متوفرة بألوان متعددة لتلبية متطلبات ترميز الأقسام',
    'تتحمل عمليات الغسيل الصناعي والتعقيم'
  ],
  specifications: [
    { name: 'المادة', value: '60% قطن، 35% بوليستر، 5% إيلاستين' },
    { name: 'الوزن', value: 'وزن متوسط (180 غرام/متر مربع)' },
    { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، آمن للغسيل الصناعي حتى 75 درجة مئوية' },
    { name: 'المقاسات المتوفرة', value: 'XS - 4XL' },
    { name: 'الألوان', value: '8 خيارات بما في ذلك الأخضر الجراحي والأزرق والأبيض' },
    { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
    { name: 'الشهادات', value: 'ISO 20743 (فعالية مضادات الميكروبات)' }
  ],
  images: [
    { src: '/images/products/scrubs-set.jpg', alt: 'منظر أمامي للملابس الطبية المضادة للميكروبات' },
    { src: '/images/portrait-of-diverse-female-and-male-surgeons-wearing-face-masks-and-scrubs-in-hospital-SBI-351294776.jpg', alt: 'متخصصون طبيون يرتدون ملابس مضادة للميكروبات' },
    { src: '/images/fabric-material-2024-12-06-03-35-02-utc.jpg', alt: 'صورة مقربة للنسيج المضاد للميكروبات' },
    { src: '/images/large-water-drop-on-red-waterproof-fabric-2024-12-02-06-46-07-utc.jpg', alt: 'عرض توضيحي لمقاومة النسيج للسوائل' }
  ],
  category: 'الملابس الطبية',
  categorySlug: 'medical-scrubs',
  inStock: true,
  minOrderQuantity: 5,
  bulkPricing: [
    { quantity: '5-24', price: 'ريال سعودي 279' },
    { quantity: '25-99', price: 'ريال سعودي 259' },
    { quantity: '100-499', price: 'ريال سعودي 239' },
    { quantity: '500+', price: 'ريال سعودي 219' }
  ],
  customizationOptions: [
    'تطريز شعار المستشفى/العيادة',
    'تطريز الاسم والمؤهلات',
    'ترميز الألوان حسب القسم',
    'تكوينات مخصصة للجيوب',
    'دمج تقنية RFID لإدارة المخزون'
  ],
  relatedProducts: [
    { id: 'premium-scrubs-set', name: 'طقم ملابس طبية فاخرة', image: '/images/products/scrubs-set.jpg', price: 'ريال سعودي 249', link: '/ar/shop/medical-scrubs/premium-scrubs-set' },
    { id: 'surgical-scrubs', name: 'ملابس جراحية', image: '/images/products/scrubs-set.jpg', price: 'ريال سعودي 269', link: '/ar/shop/medical-scrubs/surgical-scrubs' },
    { id: 'professional-lab-coat', name: 'معطف مختبر احترافي', image: '/images/products/scrubs-set.jpg', price: 'ريال سعودي 199', link: '/ar/shop/medical-scrubs/professional-lab-coat' }
  ]
};

export default function AntimicrobialScrubsPageAr() {
  const locale = 'ar';
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedQuantity, setSelectedQuantity] = React.useState(productData.minOrderQuantity || 1);
  const [activeTab, setActiveTab] = React.useState('description');
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <Container>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:md:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/ar" className="text-sm text-gray-700 hover:text-primary-600">
                  الرئيسية
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2 rtl:mr-0 rtl:ml-1 rtl:md:ml-2">
                    المتجر
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/ar/shop/medical-scrubs" className="text-sm text-gray-700 hover:text-primary-600 mr-1 md:mr-2 rtl:mr-0 rtl:ml-1 rtl:md:ml-2">
                    الملابس الطبية
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-sm text-gray-500 mr-1 md:mr-2 rtl:mr-0 rtl:ml-1 rtl:md:ml-2">
                    ملابس طبية مضادة للميكروبات
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Product Detail Section */}
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 rtl:lg:order-2">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={productData.images[selectedImage].src}
                  alt={productData.images[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {productData.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-24 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-primary-600' : 'border-transparent'}`}
                    aria-label={`عرض ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 rtl:lg:order-1">
              <div className="mb-2">
                <Link href={`/ar/shop/${productData.categorySlug}`} className="text-sm text-primary-600 hover:underline">
                  {productData.category}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {Array(5).fill(0).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(productData.rating) ? 'text-yellow-400' : 'text-neutral-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-neutral-600 mr-2 rtl:mr-0 rtl:ml-2">{productData.rating} ({productData.reviews} تقييم)</span>
              </div>
              
              <p className="text-2xl font-semibold text-neutral-900 mb-6">{productData.price}</p>
              
              <div className="mb-6">
                <p className="text-neutral-700">{productData.description}</p>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                  الكمية (الحد الأدنى: {productData.minOrderQuantity})
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setSelectedQuantity(Math.max(productData.minOrderQuantity, selectedQuantity - 1))}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-r-md rtl:rounded-r-none rtl:rounded-l-md"
                    aria-label="تقليل الكمية"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min={productData.minOrderQuantity}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(Math.max(productData.minOrderQuantity, parseInt(e.target.value) || productData.minOrderQuantity))}
                    className="w-16 text-center py-2 border-t border-b border-neutral-300 focus:outline-none"
                  />
                  <button
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-l-md rtl:rounded-l-none rtl:rounded-r-md"
                    aria-label="زيادة الكمية"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col space-y-4 mb-8">
                <Button href="/ar/quote" className="w-full justify-center">
                  إضافة إلى طلب عرض السعر
                </Button>
                <Button href="/ar/contact" variant="outline" className="w-full justify-center">
                  طلب خيارات مخصصة
                </Button>
              </div>
              
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">الميزات الرئيسية</h3>
                <ul className="space-y-2">
                  {productData.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 ml-2 rtl:ml-0 rtl:mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Bulk Pricing Preview */}
              <div>
                <h3 className="text-lg font-semibold mb-4">أسعار الجملة المتاحة</h3>
                <div className="grid grid-cols-2 gap-4">
                  {productData.bulkPricing.slice(0, 2).map((pricing, index) => (
                    <div key={index} className="bg-neutral-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-neutral-800">{pricing.quantity} وحدة</p>
                      <p className="text-lg font-semibold text-primary-600">{pricing.price}/وحدة</p>
                    </div>
                  ))}
                </div>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium mt-3">
                  عرض جميع خيارات أسعار الجملة
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <div className="border-b border-neutral-200 mb-8">
            <div className="flex space-x-8 rtl:space-x-reverse">
              <button
                onClick={() => setActiveTab('description')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'description' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                الوصف
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'specifications' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                المواصفات
              </button>
              <button
                onClick={() => setActiveTab('customization')}
                className={`pb-4 text-lg font-medium transition-colors duration-200 ${activeTab === 'customization' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
              >
                التخصيص
              </button>
            </div>
          </div>
          
          <div>
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-lg mb-6">{productData.longDescription}</p>
                <h3 className="text-xl font-semibold mb-4">الميزات والفوائد</h3>
                <ul className="space-y-3">
                  {productData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 ml-3 rtl:ml-0 rtl:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div>
                <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                  <table className="min-w-full divide-y divide-neutral-200">
                    <tbody className="divide-y divide-neutral-200">
                      {productData.specifications.map((spec, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                          <td className="px-6 py-4 text-sm font-medium text-neutral-900 whitespace-nowrap">
                            {spec.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-neutral-700 whitespace-normal">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Bulk Pricing Table */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">أسعار الجملة</h3>
                  <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead className="bg-neutral-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-right rtl:text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            نطاق الكمية
                          </th>
                          <th scope="col" className="px-6 py-3 text-right rtl:text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            السعر لكل وحدة
                          </th>
                          <th scope="col" className="px-6 py-3 text-right rtl:text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            التوفير
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        {productData.bulkPricing.map((pricing, index) => {
                          // Calculate savings percentage compared to base price
                          const basePrice = parseInt(productData.bulkPricing[0].price.replace(/\D/g, ''));
                          const currentPrice = parseInt(pricing.price.replace(/\D/g, ''));
                          const savings = index === 0 ? 0 : Math.round(((basePrice - currentPrice) / basePrice) * 100);
                          
                          return (
                            <tr key={index}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                                {pricing.quantity} وحدة
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                {pricing.price}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                                {index === 0 ? 'السعر الأساسي' : `وفر ${savings}%`}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'customization' && (
              <div>
                <p className="text-lg mb-8">نقدم مجموعة من خيارات التخصيص لتكييف زيك الرسمي وفقًا لمتطلباتك المحددة.</p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">خيارات التخصيص</h3>
                    <ul className="space-y-3">
                      {productData.customizationOptions.map((option, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-primary-600 ml-3 rtl:ml-0 rtl:mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span>{option}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold mb-4">عملية الطلب المخصص</h3>
                    <ol className="space-y-3">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold ml-3 rtl:ml-0 rtl:mr-3">
                          ١
                        </div>
                        <span>استشارة أولية لمناقشة متطلباتك</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold ml-3 rtl:ml-0 rtl:mr-3">
                          ٢
                        </div>
                        <span>اقتراح التصميم وعينات المواد</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold ml-3 rtl:ml-0 rtl:mr-3">
                          ٣
                        </div>
                        <span>تطوير النموذج الأولي والموافقة عليه</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold ml-3 rtl:ml-0 rtl:mr-3">
                          ٤
                        </div>
                        <span>الإنتاج بكميات كبيرة وضمان الجودة</span>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 font-semibold ml-3 rtl:ml-0 rtl:mr-3">
                          ٥
                        </div>
                        <span>التسليم ودعم ما بعد البيع</span>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">طلب خيارات مخصصة</h3>
                  <p className="mb-6">اتصل بفريقنا لمناقشة المتطلبات المخصصة لمؤسستك.</p>
                  <Button href="/ar/contact?product=antimicrobial-scrubs" className="w-auto">
                    الاتصال بفريق المبيعات
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-white">
        <Container>
          <SectionHeading>منتجات ذات صلة</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {productData.relatedProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-shadow hover:shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={product.link} className="text-neutral-900 hover:text-primary-600 transition-colors">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">{product.price}</p>
                  <Link href={product.link} className="text-primary-600 hover:text-primary-700 font-medium flex items-center">
                    عرض التفاصيل
                    <svg className="w-4 h-4 mr-1 rtl:mr-0 rtl:ml-1 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
} 