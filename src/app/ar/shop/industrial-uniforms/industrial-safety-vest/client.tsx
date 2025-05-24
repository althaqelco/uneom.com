'use client';

import React from 'react';
import Script from 'next/script';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define the ProductData interface to match what ClientPage expects
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

export default function IndustrialSafetyVestClientPage() {
  // Create product data for the Arabic safety vest
  const safetyVestProduct: ProductData = {
    id: 'industrial-safety-vest',
    name: 'سترة السلامة عالية الوضوح من يونيوم',
    description: 'سترة سلامة عالية الوضوح معتمدة وفقاً لمعايير ANSI/ISEA 107 الفئة 2، مصممة لتوفير الرؤية المعززة والسلامة في بيئات العمل منخفضة الإضاءة.',
    features: [
      'قماش خفيف الوزن ومقاوم للماء',
      'شرائط عاكسة بعرض 2 بوصة',
      'جيوب متعددة للأدوات ومعدات السلامة',
      'سحاب أمامي للإغلاق السريع',
      'معتمدة وفقاً لمعايير ANSI/ISEA 107 الفئة 2',
      'متوافقة مع معايير السلامة السعودية'
    ],
    price: 189,
    images: [
      'https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_1.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_2.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_3.webp'
    ],
    colors: ['أصفر عالي الوضوح', 'برتقالي عالي الوضوح'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    category: 'industrial-uniforms',
    tags: ['ملابس واقية', 'معدات السلامة', 'عالي الوضوح', 'معتمد من ANSI'],
    rating: 4.8,
    reviews: 126
  };
  
  // Mock related products - empty array but with the correct type
  const relatedProducts: ProductData[] = [];
  
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

      {/* Schema.org structured data for enhanced SEO */}
      <Script
        id="product-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "سترة السلامة عالية الوضوح من يونيوم",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Safety_Vest_3.webp"
            ],
            "description": "سترة سلامة عالية الوضوح معتمدة وفقاً لمعايير ANSI/ISEA 107 الفئة 2، مصممة لتوفير الرؤية المعززة والسلامة في بيئات العمل منخفضة الإضاءة في المملكة العربية السعودية.",
            "sku": "UNEOM-SV-200-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/industrial-safety-vest",
              "priceCurrency": "SAR",
              "price": "189",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "126"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={safetyVestProduct} relatedProducts={relatedProducts} locale="ar" />
      
      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered={false}>
            <h1 className="text-3xl font-bold text-right rtl:font-arabic tracking-tight text-gray-900 sm:text-4xl">سترات السلامة الصناعية المتينة للبيئات الصناعية السعودية</h1>
            <p className="text-xl text-gray-600 mt-2 text-right">حماية وامتثال للمعايير مضمونان للقوى العاملة الصناعية السعودية</p>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10 text-right">
            <div className="prose prose-lg mx-auto rtl">
              <h2>معدات سلامة متميزة للبيئات الصناعية السعودية</h2>
              <p>
                تم تصميم سترات السلامة عالية الوضوح من يونيوم خصيصاً لتلبية احتياجات العاملين في القطاعات الصناعية في المملكة العربية السعودية. تُستخدم هذه الستر في مواقع البناء الإنشائي، ومرافق التصنيع، ومنشآت النفط والغاز، وعمليات الشحن والتخزين في جميع أنحاء الرياض وجدة والدمام والمدن الصناعية الأخرى.
              </p>
              
              <h3>معتمدة وفقاً لمعايير ANSI/ISEA 107 الفئة 2 ومعايير السلامة السعودية</h3>
              <p>
                تفي سترات السلامة عالية الوضوح لدينا بمعايير ANSI/ISEA 107 الفئة 2، وهي مصممة خصيصاً لبيئات العمل المنخفضة الإضاءة حيث يجب أن يكون العمال مرئيين بوضوح للمركبات والمعدات المتحركة. يتم إنتاج كل سترة من قماش خفيف الوزن ومقاوم للماء مع شرائط عاكسة بعرض 2 بوصة للحصول على أقصى قدر من الرؤية.
              </p>
              <p>
                بالإضافة إلى ذلك، تتوافق سترات السلامة لدينا مع معايير السلامة المنصوص عليها من قبل الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) ومتطلبات شركة أرامكو السعودية للسلامة. هذه المطابقة ضرورية للمقاولين والموظفين الذين يعملون في منشآت النفط والغاز وغيرها من المواقع الصناعية عالية المخاطر في المملكة.
              </p>
              
              <h3>مصممة للظروف الصناعية في المملكة العربية السعودية</h3>
              <p>
                تتميز ستراتنا بميزات خاصة تلبي المتطلبات المحددة لبيئات العمل السعودية:
              </p>
              <ul>
                <li>أقمشة خفيفة الوزن ومقاومة للحرارة تحافظ على راحة العمال في المناخ الحار</li>
                <li>معالجة مضادة للميكروبات تمنع نمو البكتيريا المرتبطة بالتعرق المفرط خلال نوبات العمل الطويلة</li>
                <li>مقاومة للأشعة فوق البنفسجية تحمي من أشعة الشمس المكثفة المعتادة في المناطق الخارجية</li>
                <li>جيوب متعددة للأدوات ومعدات السلامة وأجهزة الاتصالات</li>
                <li>سحابات أمامية للإغلاق السريع تسمح بارتداء وخلع سهل مع معدات أخرى</li>
                <li>تصميم شبكي في الظهر يوفر التهوية الضرورية في درجات الحرارة المرتفعة</li>
              </ul>
              
              <h3>متوافقة مع المعايير الصناعية المحلية والدولية</h3>
              <p>
                تلبي سترات السلامة عالية الوضوح من يونيوم أو تتجاوز المعايير التالية:
              </p>
              <ul>
                <li>معيار ANSI/ISEA 107 الفئة 2 للملابس عالية الوضوح</li>
                <li>متطلبات EN ISO 20471:2013 للملابس التحذيرية عالية الوضوح</li>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) لمعدات الحماية الشخصية</li>
                <li>المعايير الهندسية لشركة أرامكو السعودية (SAES) لسترات السلامة</li>
                <li>متطلبات السلامة SABIC للمقاولين</li>
                <li>متطلبات الأنظمة العامة للسلامة والصحة المهنية في المملكة العربية السعودية</li>
              </ul>
              
              <h3>خيارات التخصيص للشركات السعودية</h3>
              <p>
                توفر يونيوم مجموعة من خيارات التخصيص لسترات السلامة عالية الوضوح:
              </p>
              <ul>
                <li>طباعة شعار الشركة أو تطريزه بألوان مقاومة للتلاشي</li>
                <li>تعيين لون محدد للإدارات المختلفة (برتقالي للعمليات، أصفر للصيانة، وما إلى ذلك)</li>
                <li>إضافة جيوب مخصصة للمعدات الخاصة بالصناعة</li>
                <li>تكوينات متنوعة للشرائط العاكسة حسب احتياجات مكان العمل المحددة</li>
                <li>تضمين حاملات بطاقات الهوية أو شارات الوصول المدمجة</li>
                <li>تعديلات في التصميم لتتناسب مع الملابس الإسلامية التقليدية</li>
              </ul>
              
              <h3>طلبات الجملة للمؤسسات الصناعية السعودية</h3>
              <p>
                تتخصص يونيوم في توفير سترات السلامة عالية الوضوح بكميات كبيرة للشركات الصناعية في جميع أنحاء المملكة العربية السعودية. يتعاون فريق السلامة الصناعية لدينا مع مديري السلامة والمشتريات لتطوير حلول مخصصة تتوافق مع متطلبات السلامة الخاصة بك مع تحسين كفاءة التكلفة.
              </p>
              <p>
                مع الإنتاج المحلي ومراكز التوزيع في المملكة العربية السعودية، نضمن أوقات تسليم سريعة واستجابة سريعة للطلبات بأي حجم. سواء كنت بحاجة إلى 50 أو 5000 سترة سلامة، يمكننا تلبية متطلباتك مع الحفاظ على جودة وامتثال متسقين.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">أطلب استشارة بشأن احتياجات سترات السلامة عالية الوضوح</h3>
                <p className="mb-6">
                  يمكن لفريق السلامة الصناعية لدينا إجراء تقييم في موقع منشأتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية. سنساعدك في تحديد أفضل الحلول التي تتوافق مع متطلبات السلامة الخاصة بك والميزانية.
                </p>
                <div className="flex justify-center">
                  <Link href="/ar/contact">
                    <Button variant="primary" size="lg">
                      تواصل مع فريق السلامة الصناعية لدينا
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 