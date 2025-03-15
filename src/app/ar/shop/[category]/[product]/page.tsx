'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

// This would normally come from a database or API
const getProductData = (category: string, productSlug: string) => {
  // This is mock data for demonstration
  const products = {
    'medical-scrubs': {
      'premium-scrubs-set': {
        id: 'premium-scrubs-set',
        name: 'طقم سكرابات فاخر',
        price: '٢٤٩ ريال',
        rating: 4.8,
        reviews: 124,
        description: 'سكرابات طبية عالية الأداء مصممة لمتخصصي الرعاية الصحية الذين يتطلبون الراحة والمتانة والمظهر المهني. تتميز هذه المجموعة الفاخرة بتقنية أقمشة مضادة للميكروبات، وجيوب وظيفية متعددة، وتصميم مريح لسهولة الحركة خلال المناوبات الطويلة.',
        longDescription: 'صُممت مجموعة طقم السكرابات الفاخرة خصيصًا لبيئة الرعاية الصحية السعودية، حيث تجمع بين تقنية الأقمشة المتقدمة وميزات التصميم المدروسة التي يقدرها متخصصو الرعاية الصحية. القماش خفيف الوزن ومتين، مع خصائص تمتص الرطوبة للحفاظ على راحتك طوال المناوبات الطويلة في المرافق المكيفة. يساعد العلاج المضاد للميكروبات على تقليل الرائحة وتعزيز النظافة في البيئات السريرية.',
        features: [
          'معالجة الأقمشة المضادة للميكروبات لتعزيز النظافة',
          'مادة تمتص الرطوبة تبقيك باردًا وجافًا',
          'خياطة معززة في نقاط الضغط لمتانة طويلة الأمد',
          'تصميم مريح يسمح بنطاق كامل من الحركة',
          'جيوب وظيفية متعددة للأدوات والملحقات الطبية',
          'متوفر بمجموعة من الألوان لتتناسب مع متطلبات المنشأة',
          'قماش سهل العناية يحافظ على المظهر بعد الغسيل الصناعي'
        ],
        specifications: [
          { name: 'المواد', value: '65% بوليستر، 35% قطن' },
          { name: 'الوزن', value: 'وزن متوسط (170 جم/م²)' },
          { name: 'تعليمات العناية', value: 'قابل للغسل في الغسالة، آمن للغسيل الصناعي' },
          { name: 'المقاسات المتوفرة', value: 'XS - 4XL' },
          { name: 'الألوان', value: '12 خيارًا تشمل الأبيض، الكحلي، الأزرق السماوي، التركواز' },
          { name: 'بلد التصنيع', value: 'المملكة العربية السعودية' },
          { name: 'خيارات التخصيص', value: 'تطريز، مقاسات مخصصة، مطابقة الألوان' }
        ],
        images: [
          { src: '/images/products/scrubs-set.jpg', alt: 'واجهة طقم سكرابات فاخر' },
          { src: '/images/product-placeholder.jpg', alt: 'تفاصيل جيب طقم سكرابات فاخر' },
          { src: '/images/product-placeholder.jpg', alt: 'منظر جانبي لطقم سكرابات فاخر' },
          { src: '/images/product-placeholder.jpg', alt: 'لقطة مقربة لمادة طقم سكرابات فاخر' }
        ],
        category: 'أزياء الرعاية الصحية',
        categorySlug: 'medical-scrubs',
        inStock: true,
        minOrderQuantity: 5,
        bulkPricing: [
          { quantity: '5-24', price: '٢٤٩ ريال' },
          { quantity: '25-99', price: '٢٢٩ ريال' },
          { quantity: '100-499', price: '١٩٩ ريال' },
          { quantity: '500+', price: '١٧٩ ريال' }
        ],
        customizationOptions: [
          'تطريز شعار المستشفى/العيادة',
          'تطريز الاسم',
          'ترميز الألوان حسب القسم',
          'تعديلات المقاس المخصصة',
          'تكوينات جيب خاصة'
        ],
        relatedProducts: [
          { id: 'antimicrobial-scrubs', name: 'سكرابات مضادة للميكروبات', image: '/images/product-placeholder.jpg', price: '٢٩٩ ريال', link: '/ar/shop/medical-scrubs/antimicrobial-scrubs' },
          { id: 'premium-lab-coat', name: 'معطف مختبر فاخر', image: '/images/product-placeholder.jpg', price: '٣٤٩ ريال', link: '/ar/shop/medical-scrubs/premium-lab-coat' },
          { id: 'surgical-scrub-cap', name: 'قبعة جراحية', image: '/images/product-placeholder.jpg', price: '٧٩ ريال', link: '/ar/shop/medical-scrubs/surgical-scrub-cap' }
        ]
      }
    },
    'aviation-uniforms': {
      'airline-crew-uniform': {
        id: 'airline-crew-uniform',
        name: 'زي طاقم الطائرة',
        price: '١٢٩٩ ريال',
        rating: 4.9,
        reviews: 87,
        description: 'زي احترافي لطاقم الطائرة مصمم خصيصًا لشركات الطيران السعودية، ويتميز بتصميم أنيق، والراحة للرحلات الطويلة، والامتثال لمعايير الطيران الدولية.',
        longDescription: 'يجمع زي طاقم الطائرة الخاص بنا بين الأناقة والوظائف العملية، وهو مصمم خصيصًا لاحتياجات أفراد طاقم الطائرة العاملين في شركات الطيران السعودية والدولية. تم اختيار الأقمشة للحفاظ على مظهر أنيق واحترافي طوال الرحلات الطويلة مع توفير الراحة وسهولة الحركة. يعكس التصميم القيم السعودية التقليدية مع تلبية معايير صناعة الطيران الدولية.',
        features: [
          'تصميم أنيق يعكس الثقافة السعودية مع جاذبية دولية',
          'قماش فاخر يحافظ على المظهر خلال الرحلات الطويلة',
          'خصائص مقاومة للبقع ومقاومة للتجعد',
          'مواد متكيفة مع المناخ مناسبة لوجهات مختلفة',
          'مقاوم للحريق وفقًا لمعايير سلامة الطيران',
          'جيوب موضوعة بعناية للعناصر الضرورية للرحلة',
          'اختلافات في التصميم لمواقع وظيفية ورتب مختلفة للطاقم'
        ],
        specifications: [
          { name: 'المواد', value: '80% صوف، 20% بوليستر لمكونات البدلة' },
          { name: 'المواد الثانوية', value: '100% قطن للقمصان الفاخرة' },
          { name: 'الوزن', value: 'خفيف الوزن (120-150 جم/م² للقمصان، 250 جم/م² للسترات)' },
          { name: 'تعليمات العناية', value: 'التنظيف الجاف موصى به للبدلات، القمصان قابلة للغسل في الغسالة' },
          { name: 'المقاسات المتوفرة', value: 'النساء: 0-22، الرجال: 34-54' },
          { name: 'الألوان', value: 'وفقًا لمواصفات شركة الطيران' },
          { name: 'السلامة', value: 'يلبي معايير قابلية الاشتعال من IATA' }
        ],
        images: [
          { src: '/images/products/airline-uniform.jpg', alt: 'مجموعة كاملة من زي طاقم الطائرة' },
          { src: '/images/product-placeholder.jpg', alt: 'تفاصيل سترة طاقم الطائرة' },
          { src: '/images/product-placeholder.jpg', alt: 'ملحقات طاقم الطائرة' },
          { src: '/images/product-placeholder.jpg', alt: 'لقطة مقربة لقماش زي طاقم الطائرة' }
        ],
        category: 'أزياء الطيران',
        categorySlug: 'aviation-uniforms',
        inStock: true,
        minOrderQuantity: 10,
        bulkPricing: [
          { quantity: '10-49', price: '١٢٩٩ ريال' },
          { quantity: '50-99', price: '١١٩٩ ريال' },
          { quantity: '100-249', price: '١٠٩٩ ريال' },
          { quantity: '250+', price: '٩٩٩ ريال' }
        ],
        customizationOptions: [
          'تطريز شعار شركة الطيران',
          'مخططات ألوان مخصصة',
          'مؤشرات الرتبة',
          'شارات الاسم',
          'تكييفات ثقافية'
        ],
        relatedProducts: [
          { id: 'pilot-uniform', name: 'زي طيار فاخر', image: '/images/product-placeholder.jpg', price: '١٥٩٩ ريال', link: '/ar/shop/aviation-uniforms/pilot-uniform' },
          { id: 'ground-staff-uniform', name: 'زي طاقم الأرض', image: '/images/product-placeholder.jpg', price: '٨٩٩ ريال', link: '/ar/shop/aviation-uniforms/ground-staff-uniform' },
          { id: 'aviation-accessories', name: 'مجموعة ملحقات الطيران', image: '/images/product-placeholder.jpg', price: '٣٤٩ ريال', link: '/ar/shop/aviation-uniforms/aviation-accessories' }
        ]
      }
    }
  };

  // Type assertion for the entire products object
  const categoryProducts = products[category as keyof typeof products];
  if (!categoryProducts) {
    return null;
  }

  // Type assertion for accessing the product
  const productData = (categoryProducts as any)[productSlug];
  if (!productData) {
    return null;
  }

  return productData;
};

export default function ProductDetailPageArabic({ params }: { params: { category: string; product: string } }) {
  const locale = 'ar';
  const { category, product } = params;
  
  // Fetch product data
  const productData = getProductData(category, product);
  
  // If product not found, return 404
  if (!productData) {
    notFound();
  }
  
  const [selectedImage, setSelectedImage] = React.useState(0);
  const [selectedQuantity, setSelectedQuantity] = React.useState(productData.minOrderQuantity || 1);
  const [activeTab, setActiveTab] = React.useState('description');
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  
  const handleOptionChange = (index: number, value: string) => {
    setSelectedOptions({ ...selectedOptions, [index]: value });
  };
  
  return (
    <>
      {/* Product Detail Hero */}
      <section className="py-8 md:py-12 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={productData.images[selectedImage].src}
                  alt={productData.images[selectedImage].alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {productData.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded overflow-hidden ${selectedImage === index ? 'border-primary' : 'border-gray-200'}`}
                  >
                    <Image 
                      src={image} 
                      alt={`${productData.name} - صورة ${index + 1}`} 
                      width={100} 
                      height={100} 
                      className="w-full h-auto object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 text-right">
              <div className="mb-2">
                <Link href={`/ar/shop/${productData.categorySlug}`} className="text-sm text-primary-600 hover:underline">
                  {productData.category}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{productData.name}</h1>
              
              <div className="flex items-center mb-4 justify-end">
                <span className="text-sm text-neutral-600 ml-2">{productData.rating} ({productData.reviews} تقييم)</span>
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
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-r-md"
                    aria-label="زيادة الكمية"
                  >
                    +
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
                    onClick={() => setSelectedQuantity(Math.max(productData.minOrderQuantity, selectedQuantity - 1))}
                    className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 px-3 py-2 rounded-l-md"
                    aria-label="تقليل الكمية"
                  >
                    -
                  </button>
                </div>
              </div>
              
              {/* Bulk Pricing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">أسعار الجملة</h3>
                <div className="grid grid-cols-2 gap-2">
                  {productData.bulkPricing.map((tier: { quantity: string; price: string }, index: number) => (
                    <div key={index} className="flex justify-between items-center p-2 border rounded">
                      <span className="font-medium">{tier.price}</span>
                      <span>{tier.quantity} وحدة</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 mb-8">
                <button className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-md font-semibold">
                  طلب عرض سعر
                </button>
                <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 py-3 px-6 rounded-md font-semibold">
                  تحميل ورقة المواصفات
                </button>
              </div>
              
              {/* Customization Options */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-right">خيارات المنتج</h3>
                <div className="grid grid-cols-2 gap-4">
                  {productData.customizationOptions.map((option: string, index: number) => (
                    <div key={index} className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2 text-right">{option}</label>
                      <select 
                        className="block w-full border border-gray-300 rounded-md py-2 px-3 text-right"
                        value={selectedOptions[index] || ''}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                      >
                        {/* Add options based on the option */}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-neutral-50">
        <Container>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="border-b">
              <div className="flex flex-wrap">
                <button
                  className={`px-6 py-4 font-medium text-center ${activeTab === 'description' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
                  onClick={() => setActiveTab('description')}
                >
                  الوصف
                </button>
                <button
                  className={`px-6 py-4 font-medium text-center ${activeTab === 'features' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
                  onClick={() => setActiveTab('features')}
                >
                  المميزات
                </button>
                <button
                  className={`px-6 py-4 font-medium text-center ${activeTab === 'specifications' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-neutral-600 hover:text-primary-600'}`}
                  onClick={() => setActiveTab('specifications')}
                >
                  المواصفات
                </button>
              </div>
            </div>
            
            <div className="p-6 text-right">
              {activeTab === 'description' && (
                <div>
                  <p className="text-neutral-700 leading-relaxed">{productData.longDescription}</p>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-right">المميزات</h2>
                  <ul className="space-y-4">
                    {productData.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start rtl">
                        <span className="text-primary font-bold ml-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <div>
                  <table className="w-full border-collapse">
                    <tbody>
                      {productData.specifications.map((spec: { name: string; value: string }, index: number) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}>
                          <td className="py-3 px-4 text-neutral-700">{spec.value}</td>
                          <td className="py-3 px-4 font-medium">{spec.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
      
      {/* Related Products */}
      <section className="py-12 bg-white">
        <Container>
          <SectionHeading as="h2" className="mb-8 text-right">
            منتجات ذات صلة
          </SectionHeading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productData.relatedProducts.map((product: { id: string; name: string; image: string; price: string; link: string }, index: number) => (
              <Link key={product.id} href={product.link} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-right">
                    <h3 className="text-lg font-bold mt-1 group-hover:text-primary-600 transition-colors duration-200">{product.name}</h3>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-primary-600 inline-flex items-center font-medium text-sm">
                        عرض التفاصيل
                        <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                      <span className="font-semibold">{product.price}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-primary-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading centered className="mb-6">
              هل تحتاج إلى هذا المنتج بكميات أو تصميم مخصص؟
            </SectionHeading>
            <p className="text-lg text-neutral-700 mb-8">
              يمكن لفريقنا تخصيص هذا المنتج حسب مواصفاتك واحتياجاتك من الكميات بالضبط.
              اتصل بنا للحصول على خدمة شخصية وخصومات على أساس الحجم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ar/contact?type=custom-order"
                className="inline-block bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-md font-medium shadow-md transition-colors duration-200"
              >
                طلب عرض سعر مخصص
              </Link>
              <Link
                href="/ar/services/custom-design"
                className="inline-block bg-white text-primary-600 hover:bg-neutral-100 border border-primary-600 px-8 py-3 rounded-md font-medium shadow-md transition-colors duration-200"
              >
                تعرف على التصميم المخصص
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 