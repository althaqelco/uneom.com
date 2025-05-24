'use client';

import React from 'react';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
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

export default function IndustrialJacketClientPage() {
  // Create product data for the Arabic industrial jacket
  const jacketProduct: ProductData = {
    id: 'industrial-jacket',
    name: 'جاكيت السلامة الصناعية المقاوم للهب من يونيوم',
    description: 'جاكيت سلامة صناعي عالي الأداء مع خصائص مقاومة للهب وعناصر عاكسة وتصميم متين للسلامة في بيئات العمل الصناعية في المملكة العربية السعودية.',
    features: [
      'قماش مقاوم للهب يتوافق مع معايير NFPA 2112 وISO 11612',
      'أشرطة عاكسة عالية الوضوح متوافقة مع معايير ANSI/ISEA 107',
      'تكنولوجيا طرد الرطوبة للراحة في المناخ الحار',
      'تهوية استراتيجية للتبريد دون المساس بالسلامة',
      'درزات مقواة في نقاط الضغط للمتانة الاستثنائية',
      'جيوب متعددة مصممة للأدوات والمعدات الصناعية',
      'متوافق مع متطلبات السلامة السعودية والدولية'
    ],
    price: 499,
    images: [
      'https://uneom.com/images/products/industrial-safety-jacket-main.jpg',
      'https://uneom.com/images/products/industrial-safety-jacket-alt1.jpg',
      'https://uneom.com/images/products/industrial-safety-jacket-alt2.jpg'
    ],
    colors: ['أزرق داكن', 'رمادي', 'أسود', 'برتقالي عالي الوضوح'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    category: 'industrial-uniforms',
    tags: ['جاكيت سلامة صناعي', 'ملابس مقاومة للهب', 'زي عمال النفط والغاز', 'ملابس واقية للبتروكيماويات'],
    rating: 4.8,
    reviews: 42
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
            "name": "جاكيت السلامة الصناعية المقاوم للهب من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial-safety-jacket-main.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt1.jpg",
              "https://uneom.com/images/products/industrial-safety-jacket-alt2.jpg"
            ],
            "description": "جاكيت سلامة صناعي عالي الأداء مع خصائص مقاومة للهب وعناصر عاكسة وتصميم متين للسلامة في بيئات العمل الصناعية في المملكة العربية السعودية.",
            "sku": "IND-SAF-JKT-001-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/industrial-jacket",
              "priceCurrency": "SAR",
              "price": "499",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "42"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={jacketProduct} relatedProducts={relatedProducts} locale="ar" />
      
      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered={false}>
            <h2 className="text-3xl font-bold text-right">جاكيت السلامة الصناعية المقاوم للهب من يونيوم</h2>
            <p className="text-xl text-gray-600 mt-2 text-right">ملابس صناعية فائقة الجودة لبيئات العمل الشاقة في المملكة العربية السعودية</p>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10 text-right">
            <div className="prose prose-lg mx-auto rtl">
              <h2>ملابس عمل صناعية مقاومة للهب من الدرجة الأولى للصناعات السعودية</h2>
              <p>
                تم تصميم جاكيت السلامة الصناعية من يونيوم خصيصاً للبيئات الشاقة في القطاع الصناعي السعودي. مصمم لتلبية أعلى معايير السلامة مع توفير راحة استثنائية ومتانة، تعتمد جاكيتات يونيوم الصناعية من قبل الشركات الرائدة في قطاعات النفط والغاز والتصنيع والإنشاءات والبتروكيماويات في جميع أنحاء الرياض وجدة والدمام والمدن الصناعية في المملكة.
              </p>
              
              <h3>ميزات سلامة متقدمة للبيئات الصناعية عالية المخاطر</h3>
              <p>
                يتضمن كل جاكيت سلامة صناعي من يونيوم طبقات متعددة من الحماية لضمان سلامة العمال في الظروف الخطرة. تتميز الطبقة الخارجية بقماش مقاوم للهب يلبي معايير السلامة الدولية بما في ذلك NFPA 2112 وISO 11612، مما يوفر حماية حاسمة ضد الحرائق الوميضية والتعرض للحرارة. تعزز الأشرطة العاكسة عالية الوضوح المتوافقة مع معايير ANSI/ISEA 107 من رؤية العامل في ظروف الإضاءة المنخفضة، بينما تضمن الخياطة المقواة عند نقاط الضغط الحفاظ على سلامة الجاكيت أثناء الاستخدام المكثف.
              </p>
              
              <h3>مصمم خصيصاً للظروف الصناعية في المملكة العربية السعودية</h3>
              <p>
                تم تصميم جاكيتاتنا الصناعية خصيصاً لمعالجة التحديات الفريدة للبيئات الصناعية في المملكة العربية السعودية. توازن تكنولوجيا القماش بين مقاومة الحريق وقابلية التنفس، مما يساعد العمال على البقاء مرتاحين خلال المناوبات الطويلة في الظروف الحارة. تعمل البطانة الداخلية الماصة للرطوبة على سحب العرق بعيداً عن الجسم، بينما تعمل مناطق التهوية الاستراتيجية على تحسين تدفق الهواء دون المساس بالسلامة. تجعل هذه الميزات جاكيتات يونيوم الصناعية مناسبة بشكل خاص لمناخ المملكة العربية السعودية مع الحفاظ على الامتثال الكامل لمتطلبات السلامة في الهيئة الملكية للجبيل وينبع.
              </p>
              
              <h3>خيارات التخصيص للشركات السعودية</h3>
              <p>
                تقدم يونيوم خيارات تخصيص واسعة لجاكيتات السلامة الصناعية، مما يتيح للشركات دمج هويتها المؤسسية مع الحفاظ على الامتثال لمعايير السلامة. تشمل الخيارات:
              </p>
              <ul>
                <li>تطريز شعار الشركة أو تطبيق النقل الحراري</li>
                <li>ترميز الألوان حسب القسم لسهولة التعرف</li>
                <li>وضع اسم ومنصب العامل</li>
                <li>تكوينات جيوب مخصصة بناءً على متطلبات الوظيفة</li>
                <li>تعديلات خاصة بالصناعة للأدوات والمعدات المتخصصة</li>
              </ul>
              
              <h3>الامتثال لمعايير السلامة السعودية والدولية</h3>
              <p>
                يتم تصنيع جميع جاكيتات السلامة الصناعية من يونيوم لتلبية أو تجاوز معايير السلامة السعودية والدولية، بما في ذلك:
              </p>
              <ul>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                <li>معيار NFPA 2112 (معيار الملابس المقاومة للهب)</li>
                <li>معيار ISO 11612 (الملابس الواقية من الحرارة واللهب)</li>
                <li>معيار ANSI/ISEA 107 (ملابس السلامة عالية الوضوح)</li>
                <li>متطلبات السلامة للمقاولين في أرامكو</li>
                <li>معايير السلامة في سابك</li>
              </ul>
              
              <h3>طلبات الجملة للشركات الصناعية</h3>
              <p>
                تتخصص يونيوم في توفير حلول الزي الموحد الصناعي للعمليات واسعة النطاق في جميع أنحاء المملكة العربية السعودية. يعمل مستشارو الزي الموحد الصناعي المتخصصون لدينا مباشرة مع مديري السلامة وفرق المشتريات وأقسام الموارد البشرية لتطوير برامج شاملة للزي الموحد تلبي متطلبات السلامة الخاصة بك مع تحسين كفاءة التكلفة. مع وجود مرافق إنتاج في المملكة العربية السعودية، نقدم أوقات تسليم أسرع وخدمة استجابة لكل من الطلبات الأولية والبدائل.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">تواصل مع متخصصي الزي الموحد الصناعي لدينا اليوم</h3>
                <p className="mb-6">
                  لمناقشة متطلبات شركتك أو لطلب عينات من جاكيتات السلامة الصناعية لدينا. فريقنا متاح لإجراء استشارات في موقع منشأتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية.
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