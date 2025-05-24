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

export default function FlameResistantWorkwearClientPage() {
  // Create product data for the Arabic flame resistant workwear
  const workwearProduct: ProductData = {
    id: 'flame-resistant-workwear',
    name: 'طقم ملابس مقاومة للحريق من يونيوم',
    description: 'طقم ملابس عالي الجودة مقاوم للهب والحرارة، مصمم خصيصاً للعاملين في الصناعات البترولية والكهربائية والبتروكيماوية في المملكة العربية السعودية، يوفر حماية قصوى مع الحفاظ على الراحة.',
    features: [
      'قماش متطور مقاوم للهب ذاتياً متوافق مع معايير NFPA 2112',
      'تصنيف مقاومة للحرارة يصل إلى 12 كال/سم²',
      'تقنية امتصاص الرطوبة للراحة في المناخ الحار',
      'أشرطة عاكسة متوافقة مع معايير ANSI/ISEA 107',
      'درزات مقواة في نقاط الضغط للمتانة الاستثنائية',
      'تصميم يسمح بحرية الحركة مع الحفاظ على الحماية',
      'متوافق مع متطلبات السلامة السعودية والدولية'
    ],
    price: 549,
    images: [
      'https://uneom.com/images/products/flame-resistant-workwear.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Flame_Resistant_1.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Flame_Resistant_2.webp'
    ],
    colors: [
      'أزرق داكن',
      'رمادي غامق',
      'أحمر طوبي',
      'أخضر زيتي'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    category: 'industrial-uniforms',
    tags: ['ملابس مقاومة للحريق', 'زي مقاوم للهب', 'ملابس السلامة للنفط والغاز', 'معدات الوقاية الشخصية', 'ملابس NFPA 2112'],
    rating: 4.9,
    reviews: 86
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
            "name": "طقم ملابس مقاومة للحريق من يونيوم",
            "image": [
              "https://uneom.com/images/products/flame-resistant-workwear.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Flame_Resistant_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Flame_Resistant_2.webp"
            ],
            "description": "طقم ملابس عالي الجودة مقاوم للهب والحرارة، مصمم خصيصاً للعاملين في الصناعات البترولية والكهربائية في المملكة العربية السعودية.",
            "sku": "UNEOM-FRW-101-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/flame-resistant-workwear/",
              "priceCurrency": "SAR",
              "price": "549",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "86"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={workwearProduct} relatedProducts={relatedProducts} locale="ar" />
      
      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="mb-8 text-right">
            <h2 className="text-3xl font-bold">طقم ملابس مقاومة للحريق من يونيوم</h2>
            <p className="text-lg text-gray-600 mt-2">حماية متطورة للعاملين في البيئات الخطرة في المملكة العربية السعودية</p>
          </div>
          
          <div className="max-w-4xl mx-auto mt-10 text-right">
            <div className="prose prose-lg mx-auto rtl">
              <h2>حماية متطورة للبيئات الصناعية عالية المخاطر</h2>
              <p>
                طقم الملابس المقاومة للحريق هو الحل الأمثل للعاملين في البيئات الصناعية التي تتعرض لمخاطر اللهب والحرارة العالية. مصمم خصيصاً وفقاً لأعلى معايير السلامة العالمية لضمان حماية العاملين في قطاعات النفط والغاز والبتروكيماويات والصناعات الكهربائية في المملكة العربية السعودية.
              </p>
              
              <h3>تقنية متطورة مقاومة للحريق</h3>
              <p>
                تم تصنيع هذا الطقم من مواد متطورة مقاومة للهب بشكل ذاتي، حيث تتوقف عن الاحتراق فور إزالة مصدر اللهب. يوفر الطقم حماية فائقة ضد مخاطر الوميض الحراري والحرارة الإشعاعية، مع الحفاظ على خصائص مقاومة اللهب حتى بعد الغسيل المتكرر.
              </p>
              <p>
                تبقى خصائص المقاومة للهب طوال عمر الملابس، مما يوفر حماية موثوقة ومستمرة. مع تصنيف مقاومة للحرارة يصل إلى 12 كال/سم²، يلبي طقمنا أو يتجاوز معايير NFPA 2112 وISO 11612 للملابس المقاومة للهب في البيئات الصناعية.
              </p>
              
              <h3>مصمم خصيصاً للظروف الصناعية في المملكة العربية السعودية</h3>
              <p>
                تعالج ملابسنا المقاومة للحريق التحديات الفريدة للبيئات الصناعية في المملكة العربية السعودية:
              </p>
              <ul>
                <li>تقنية تنظيم الحرارة للعمل في درجات الحرارة المرتفعة في المناخ الصحراوي</li>
                <li>قماش قابل للتنفس يمتص الرطوبة للراحة أثناء المناوبات الطويلة</li>
                <li>مقاومة للأشعة فوق البنفسجية للعمل في المواقع الخارجية</li>
                <li>تصميم مريح يسمح بحرية الحركة مع الحفاظ على التغطية الكاملة</li>
                <li>جيوب استراتيجية لحمل أدوات السلامة ومعدات الاتصالات</li>
                <li>أشرطة عاكسة عالية الوضوح متوافقة مع معايير ANSI/ISEA 107</li>
              </ul>
              
              <h3>متوافق مع المعايير المحلية والدولية</h3>
              <p>
                تلبي ملابسنا المقاومة للحريق أو تتجاوز المعايير التالية:
              </p>
              <ul>
                <li>معيار NFPA 2112 للملابس المقاومة للهب للأفراد الصناعيين</li>
                <li>معيار ISO 11612 للملابس الواقية من الحرارة واللهب</li>
                <li>معيار ASTM F1506 للحماية من الومضات القوسية</li>
                <li>المعايير الهندسية لشركة أرامكو السعودية (SAES) للملابس الواقية</li>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                <li>معيار EN ISO 11611 للملابس الواقية للعمليات المتعلقة باللحام</li>
              </ul>
              
              <h3>خيارات التخصيص للشركات السعودية</h3>
              <p>
                نقدم مجموعة واسعة من خيارات التخصيص لتلبية احتياجات شركتك:
              </p>
              <ul>
                <li>تطريز شعار الشركة على الصدر أو الأكمام</li>
                <li>ترميز الألوان حسب القسم أو المستوى الوظيفي</li>
                <li>تطريز اسم الموظف ومنصبه</li>
                <li>تكوينات جيوب مخصصة بناءً على متطلبات العمل</li>
                <li>تعديلات في التصميم للأحجام غير القياسية</li>
                <li>شرائط عاكسة إضافية لمزيد من الرؤية في ظروف الإضاءة المنخفضة</li>
              </ul>
              
              <h3>طلبات الجملة للمؤسسات الصناعية</h3>
              <p>
                نتخصص في توفير ملابس مقاومة للحريق بكميات كبيرة للشركات الصناعية في المملكة العربية السعودية. يعمل فريق السلامة المهنية لدينا مع مديري السلامة والمشتريات لتطوير برامج شاملة للملابس الواقية تلبي متطلبات السلامة الخاصة بك مع تحسين كفاءة التكلفة.
              </p>
              <p>
                مع مرافق الإنتاج المحلية، نضمن أوقات تسليم سريعة وخدمة استجابة لكل من الطلبات الأولية والتبديل الدوري للملابس البالية. يمكننا أيضاً إدارة برنامج كامل للملابس المقاومة للحريق، بما في ذلك الفحص الدوري والصيانة والاستبدال.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">تواصل مع خبراء السلامة الصناعية لدينا</h3>
                <p className="mb-6">
                  هل تبحث عن أفضل حلول الحماية من الحريق لفريقك؟ نحن هنا للمساعدة! فريقنا المتخصص متاح لإجراء تقييمات في موقع منشأتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية.
                </p>
                <div className="flex justify-center">
                  <Link href="/ar/contact">
                    <Button variant="primary" size="lg">
                      تواصل مع فريق السلامة الصناعية
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