import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: 'يونيفورم موظفي المولات التجارية | زي مهني عالي الجودة في السعودية | يونيوم',
  description: 'يونيفورم عالي الجودة قابل للتخصيص لموظفي المولات، وخدمة العملاء، وموظفي مكاتب المعلومات في المملكة العربية السعودية. عزز هوية علامتك التجارية من خلال الزي المهني.',
  keywords: 'يونيفورم موظفي المولات السعودية، يونيفورم مراكز التسوق الرياض، يونيفورم التجزئة الفاخرة، يونيفورم خدمة العملاء، يونيفورم مكتب المعلومات، يونيفورم موظفي الاستقبال، هوية العلامة التجارية للمولات، مظهر احترافي للبيع بالتجزئة',
  openGraph: {
    title: 'يونيفورم موظفي المولات التجارية | زي مهني عالي الجودة في السعودية | يونيوم',
    description: 'عزز الصورة المهنية لمركز التسوق الخاص بك من خلال يونيفورم مخصص عالي الجودة لجميع موظفي الواجهة.',
    images: ['/images/industries/retail-shops/retail-shops-uniform.jpg'],
    type: 'website',
    locale: 'ar'}
};

export default function MallStaffUniform() {
  const locale = 'ar';

  const product = {
    id: "mall-staff-uniforms",
    name: "مجموعة يونيفورم موظفي المولات الفاخرة",
    tagline: "ارتقِ بالصورة المهنية لمركز التسوق الخاص بك",
    description: "مجموعة يونيفورم مصممة احترافياً خصيصاً لمراكز التسوق وبيئات البيع بالتجزئة. تجمع مجموعة يونيفورم موظفي المولات الفاخرة بين الأناقة المتطورة والوظائف العملية، مما يساعد موظفيك على تقديم تجارب استثنائية للعملاء مع تعزيز علامتك التجارية في مجال البيع بالتجزئة.",
    detailedDescription: `
      <p>في المشهد التنافسي للبيع بالتجزئة في المملكة العربية السعودية، يؤثر مظهر موظفي المول بشكل مباشر على تصور العملاء وسمعة العلامة التجارية. توفر مجموعة يونيفورم موظفي المولات الفاخرة من يونيوم التوازن المثالي بين الصورة المهنية، والاتساق مع العلامة التجارية، والراحة طوال اليوم للموظفين المتعاملين مع العملاء.</p>
      
      <p>كل زي موحد في هذه المجموعة الشاملة مصمم بدقة لتعزيز الهوية البصرية للمول مع ضمان قدرة موظفيك على الأداء بأفضل مستوى خلال نوبات العمل الطويلة في قطاع التجزئة. من مناطق الاستقبال ومكاتب المعلومات إلى مراكز خدمة العملاء والمناطق المشتركة، توفر الأزياء الموحدة لدينا تمييزاً فورياً وترسخ السلطة.</p>
      
      <p>تتميز مجموعة موظفي المولات الفاخرة بقطع متعددة منسقة يمكن مزجها ومطابقتها لإنشاء إطلالات مميزة لمختلف الأقسام والمناصب مع الحفاظ على علامة تجارية متسقة في جميع أنحاء المنشأة. تتضمن تصميماتنا المدروسة:</p>
      
      <ul>
        <li><strong>تكامل مثالي مع العلامة التجارية</strong> مع مطابقة دقيقة لألوان بانتون ووضع استراتيجي للشعار</li>
        <li><strong>تكنولوجيا راحة فائقة</strong> مع أقمشة تنفس وتمتص الرطوبة مثالية للارتداء لفترات طويلة</li>
        <li><strong>عناصر تصميم عملية</strong> بما في ذلك جيوب يسهل الوصول إليها للأدوات والأجهزة الأساسية</li>
        <li><strong>تصميم متميز</strong> يساعد العملاء على التعرف الفوري على أعضاء فريق العمل</li>
        <li><strong>ميزات المتانة</strong> التي تضمن مظهراً احترافياً طوال نوبات العمل الشاقة</li>
      </ul>
      
      <p>تم تصميم أزياء المولات لدينا بناءً على أبحاث مكثفة في بيئات البيع بالتجزئة في جميع أنحاء المملكة العربية السعودية، مما يلبي الاحتياجات المحددة لموظفي المولات مع إظهار الاحترافية وسهولة التواصل.</p>
    `,
    price: "من 350 إلى 750 ريال سعودي",
    minOrder: "20 قطعة",
    productCode: "RTL-MSU-2024",
    images: [
      {
        src: "/images/industries/retail-shops/retail-shops-uniform.jpg",
        alt: "منظر أمامي ليونيفورم موظفي المولات الفاخر"
      },
      {
        src: "/images/industries/retail-shops/retail-shops-uniform-2.jpg",
        alt: "موظفو المول يرتدون يونيفورم فاخر"
      },
      {
        src: "/images/industries/retail-shops/retail-shops-uniform-shop.jpg",
        alt: "مجموعة كاملة من يونيفورم موظفي المولات"
      }
    ],
    colors: [
      { name: "أزرق داكن مؤسسي", hex: "#1C3B6E" },
      { name: "أسود احترافي", hex: "#171717" },
      { name: "خمري تنفيذي", hex: "#6E1C3B" },
      { name: "فحمي راقي", hex: "#3C3C3C" },
      { name: "أزرق ملكي مميز", hex: "#2D365C" },
      { name: "ألوان العلامة التجارية المخصصة", hex: "#FFFFFF" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "مقاسات مخصصة"],
    
    features: [
      {
        title: "تصميم يبرز العلامة التجارية",
        description: "يونيفورم مصمم احترافياً يعرض بشكل بارز علامة المول أو مركز التسوق التجارية من خلال وضع استراتيجي للشعار، ومطابقة الألوان المخصصة، وتصميم متناسق."
      },
      {
        title: "تمييز الأدوار",
        description: "اختلافات تصميم دقيقة تميز مختلف أدوار الموظفين والأقسام مع الحفاظ على هوية بصرية متسقة في جميع أنحاء المنشأة."
      },
      {
        title: "ميزات راحة فاخرة",
        description: "تقنية نسيج متقدمة توفر الراحة طوال اليوم خلال المناوبات الممتدة، مع إدارة الرطوبة، وتنظيم درجة الحرارة، ومناطق مرونة استراتيجية."
      },
      {
        title: "تصميم احترافي",
        description: "خطوط عصرية وتفاصيل راقية تعكس مظهراً متميزاً وذو سلطة مناسب لبيئات البيع بالتجزئة الفاخرة."
      },
      {
        title: "وظائف عملية",
        description: "جيوب وميزات مصممة بعناية تستوعب أجهزة الاتصال وشارات الأسماء والأدوات الأساسية للبيع بالتجزئة."
      }
    ],
    
    specifications: [
      {
        category: "تكوين القماش",
        details: "خليط بوليستر-قطن فاخر (65% بوليستر، 35% قطن) أو خيارات بوليستر أداء 100%"
      },
      {
        category: "الوزن",
        details: "وزن متوسط (5.5-6.5 أونصة) للراحة المثلى في البيئات ذات درجات الحرارة المتحكم بها"
      },
      {
        category: "تعليمات العناية",
        details: "قابل للغسيل في الغسالة، ثبات اللون، يتطلب كي بسيط"
      },
      {
        category: "تصنيف المتانة",
        details: "بناء معزز للارتداء الممتد، مصنف لأكثر من 50 دورة غسيل"
      },
      {
        category: "وقت الإنتاج",
        details: "4-6 أسابيع قياسي، خيارات مستعجلة متاحة"
      }
    ],
    
    customizationOptions: [
      {
        name: "شعارات مطرزة",
        description: "تطبيق شعار عالي الدقة مع مطابقة مثالية للألوان"
      },
      {
        name: "تخصيص الأسماء",
        description: "أسماء الموظفين الفردية مطرزة أو مطبوعة على الملابس"
      },
      {
        name: "تحديد القسم",
        description: "ترميز الألوان أو الشارات أو النص الذي يشير إلى الأقسام أو التخصصات المختلفة"
      },
      {
        name: "ترقيات الأقمشة",
        description: "خيارات أقمشة فاخرة بما في ذلك مزيج الأداء والمنسوجات الفاخرة"
      },
      {
        name: "تفصيل المقاسات",
        description: "مقاسات مخصصة وتعديلات للملاءمة لتحقيق الراحة المثلى للموظفين"
      }
    ],
    
    certifications: [
      {
        name: "معيار OEKO-TEX® 100",
        description: "معتمد خالٍ من المواد الضارة وصديق للبشرة"
      },
      {
        name: "ISO 9001:2015",
        description: "شهادة نظام إدارة الجودة لضمان جودة متسقة"
      },
      {
        name: "معايير العمل العادلة",
        description: "مصنعة في ظل ظروف عمل أخلاقية"
      }
    ],
    
    relatedProducts: [
      {
        name: "مجموعة متاجر التجزئة الفاخرة",
        description: "يونيفورم راقي للعلامات التجارية الفاخرة ومتاجر البوتيك",
        image: "/images/industries/retail-shops/retail-shops-uniform-identity-3.jpg",
        link: "/ar/shop/retail-uniforms/customer-service"
      }
    ],
    
    industries: [
      "مراكز التسوق",
      "مولات التجزئة",
      "المتاجر الكبرى",
      "مراكز المعارض",
      "مجمعات الترفيه"
    ]
  };

  return (
    <div className="container mx-auto py-10 rtl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-wrap">
          {/* Product Images */}
          <div className="w-full md:w-1/2 p-6">
            <div className="relative h-96 rounded-lg overflow-hidden mb-4">
              <Image 
                src={product.images[0].src} 
                alt={product.images[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
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
          
          {/* Product Information */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-lg text-primary-600 mb-4">{product.tagline}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <p className="text-xl font-semibold mb-1">نطاق السعر</p>
              <p className="text-2xl text-primary-600">{product.price}</p>
              <p className="text-sm text-gray-500">الحد الأدنى للطلب: {product.minOrder}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">الألوان المتاحة</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition" 
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-lg font-semibold mb-2">المقاسات المتاحة</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-100">
                    {size}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              <Link 
                href={`/ar/contact?product=${product.id}`} 
                className="px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition"
              >
                طلب عرض سعر
              </Link>
              <Link 
                href="/ar/contact" 
                className="px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition"
              >
                طلب معلومات
              </Link>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">وصف المنتج</h2>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.detailedDescription }} />
        </div>
        
        {/* Product Features */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">الميزات الرئيسية</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Specifications */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">المواصفات</h2>
          <div className="overflow-hidden rounded-lg border border-gray-200">
            {product.specifications.map((spec, index) => (
              <div key={index} className={`flex border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="w-1/3 p-3 font-semibold">{spec.category}</div>
                <div className="w-2/3 p-3">{spec.details}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Customization Options */}
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">خيارات التخصيص</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {product.customizationOptions.map((option, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-primary-600 mb-2">{option.name}</h3>
                <p className="text-sm text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6">منتجات ذات صلة</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relatedProduct, index) => (
              <Link key={index} href={relatedProduct.link} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="relative h-48">
                    <Image 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{relatedProduct.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="p-8 bg-primary-600 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">هل أنت جاهز لتعزيز الصورة المهنية لموظفي المول لديك؟</h2>
          <p className="max-w-2xl mx-auto mb-6">تواصل مع متخصصي الزي الموحد لدينا للحصول على توصيات مخصصة وعروض أسعار مخصصة.</p>
          <Link 
            href={`/ar/contact?product=${product.id}`} 
            className="inline-block px-6 py-3 bg-white text-primary-600 rounded-md hover:bg-gray-100 transition"
          >
            طلب استشارة
          </Link>
        </div>
      </div>
    </div>
  );
} 