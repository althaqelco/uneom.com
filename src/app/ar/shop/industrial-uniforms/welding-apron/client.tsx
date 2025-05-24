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

export default function WeldingApronClientPage() {
  // Create product data for the Arabic welding apron
  const weldingApronProduct: ProductData = {
    id: 'welding-apron',
    name: 'مريلة اللحام الجلدية الفاخرة من يونيوم',
    description: 'مريلة لحام من الجلد المتين مع خصائص مقاومة للهب، مصممة لتوفير أقصى درجات الحماية في البيئات الصناعية عالية الحرارة.',
    features: [
      'جلد بقر مشقوق فاخر بسمك 1.2-1.4 ملم',
      'مقاومة للشرر والحرارة حتى 200 درجة مئوية',
      'خياطة مقواة بخيط الكيفلار',
      'أحزمة خلفية متقاطعة قابلة للتعديل',
      'جيوب متعددة للأدوات',
      'خصائص مقاومة للزيوت'
    ],
    price: 249,
    images: [
      'https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_1.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_2.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_3.webp'
    ],
    colors: ['بني غامق', 'أسود'],
    sizes: ['موحد', 'كبير'],
    category: 'industrial-uniforms',
    tags: ['معدات اللحام', 'حماية من الحرارة', 'ملابس واقية صناعية'],
    rating: 4.9,
    reviews: 78
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
            "name": "مريلة اللحام الجلدية الفاخرة من يونيوم",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Welding_Apron_3.webp"
            ],
            "description": "مريلة لحام من الجلد المتين مع خصائص مقاومة للهب، مصممة لتوفير أقصى درجات الحماية في البيئات الصناعية عالية الحرارة. تتميز بخياطة مقواة، وأحزمة قابلة للتعديل للرقبة والخصر، وجيوب متعددة للأدوات لمحترفي اللحام في المملكة العربية السعودية.",
            "sku": "UNEOM-WA-300-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/welding-apron",
              "priceCurrency": "SAR",
              "price": "249",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "78"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={weldingApronProduct} relatedProducts={relatedProducts} locale="ar" />
      
      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered={false}>
            <h2 className="text-3xl font-bold text-right">مرايل اللحام الجلدية الفاخرة من يونيوم</h2>
            <p className="text-xl text-gray-600 mt-2 text-right">حماية احترافية للحام في بيئات العمل الصناعية السعودية</p>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10 text-right">
            <div className="prose prose-lg mx-auto rtl">
              <h2>حماية لحام بمستوى احترافي للصناعات السعودية</h2>
              <p>
                تم تصميم مرايل اللحام الجلدية الفاخرة من يونيوم خصيصاً لبيئات اللحام الشاقة الموجودة في جميع القطاعات الصناعية السعودية. يعتمد محترفو اللحام في قطاعات النفط والغاز والتصنيع والبناء وورش التصنيع في الرياض وجدة والدمام والمدن الصناعية في جميع أنحاء المملكة على منتجات الحماية عالية الجودة التي نقدمها.
              </p>
              
              <h3>حماية فائقة من الحرارة والشرر</h3>
              <p>
                يتم تصنيع كل مريلة لحام من يونيوم من جلد البقر المشقوق الفاخر بسمك 1.2-1.4 ملم، مما يوفر مقاومة استثنائية للشرر والتناثر والحرارة حتى 200 درجة مئوية. تضمن خصائص مقاومة اللهب الحماية أثناء عمليات اللحام المكثفة، بينما تعزز الخياطة المقواة بخيط الكيفلار المتانة في المناطق عالية الإجهاد.
              </p>
              <p>
                تتميز مرايلنا بمعالجة متخصصة تحافظ على المرونة حتى بعد التعرض المطول للحرارة، مما يمنع التشقق والتصلب الشائع في معدات اللحام ذات الجودة المنخفضة. يضمن ذلك الراحة أثناء المناوبات الطويلة مع الحفاظ على الحماية الأساسية من رذاذ المعادن المنصهرة والأشعة فوق البنفسجية من أقواس اللحام.
              </p>
              
              <h3>مصممة خصيصاً لبيئات اللحام في المملكة العربية السعودية</h3>
              <p>
                تم تصميم مرايل اللحام من يونيوم خصيصاً لمعالجة التحديات التي يواجهها عمال اللحام في المملكة العربية السعودية:
              </p>
              <ul>
                <li>تغطية موسعة (36" × 24") لحماية شاملة في البيئات الصناعية عالية الحرارة</li>
                <li>تصميم لتبديد الحرارة لخفض درجة حرارة الجسم في مناخ المملكة العربية السعودية الحار</li>
                <li>حماية معززة للصدر لتطبيقات اللحام العمودية الشائعة في مشاريع البنية التحتية</li>
                <li>أحزمة خلفية متقاطعة قابلة للتعديل توزع الوزن بالتساوي لتقليل إجهاد الرقبة أثناء المناوبات الطويلة</li>
                <li>جيوب أدوات استراتيجية موضوعة لسهولة الوصول مع الحفاظ على بروتوكولات السلامة</li>
                <li>خصائص مقاومة للزيوت للحام في بيئات البتروكيماويات</li>
              </ul>
              
              <h3>متوافقة مع المعايير المحلية والدولية</h3>
              <p>
                تلبي مرايل اللحام الفاخرة لدينا أو تتجاوز جميع معايير السلامة ذات الصلة، بما في ذلك:
              </p>
              <ul>
                <li>معيار ISO 11611:2015 للملابس الواقية لعمليات اللحام والعمليات المماثلة</li>
                <li>معيار EN ISO 11611:2015 الفئة 2 للحماية من الحرارة واللهب</li>
                <li>معيار ASTM F2302 لحماية اللحام المقاومة للهب</li>
                <li>المعايير الهندسية لشركة أرامكو السعودية (SAES) لمعدات الحماية الشخصية للحام</li>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                <li>متطلبات السلامة SABIC لمقاولي اللحام</li>
              </ul>
              
              <h3>خيارات التخصيص للشركات السعودية</h3>
              <p>
                تقدم يونيوم خيارات تخصيص واسعة لمرايل اللحام لدينا، بما في ذلك:
              </p>
              <ul>
                <li>نقش شعار الشركة أو التطريز المقاوم للحرارة</li>
                <li>ألوان مميزة للحواف لتحديد الإدارات المختلفة</li>
                <li>تكوينات جيوب مخصصة بناءً على متطلبات أدوات محددة</li>
                <li>خيارات مقاسات موسعة لجميع أنواع الجسم</li>
                <li>ميزات حماية إضافية مثل أكمام جلدية أو واقيات صدر</li>
                <li>التكامل مع أنظمة معدات الحماية الشخصية الأخرى للحماية الشاملة</li>
              </ul>
              
              <h3>طلبات الجملة للعمليات الصناعية</h3>
              <p>
                تتخصص يونيوم في توفير حلول معدات الحماية الشخصية للحام للعمليات واسعة النطاق في جميع أنحاء المملكة العربية السعودية. يعمل مستشارو السلامة الصناعية لدينا مباشرة مع مشرفي اللحام ومديري السلامة وفرق المشتريات لتطوير برامج شاملة لحماية اللحام تعالج مخاطر مكان العمل المحددة مع تحسين كفاءة التكلفة.
              </p>
              <p>
                مع قدرات الإنتاج المحلية في المملكة العربية السعودية، نقدم أوقات تسليم أسرع وخدمة استجابة لكل من الطلبات الأولية والبدائل، مما يضمن بقاء فرق اللحام لديك محمية مع الحد الأدنى من التوقف عن العمل.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">اطلب استشارة لمتطلبات معدات الحماية الشخصية للحام</h3>
                <p className="mb-6">
                  يمكن لمتخصصي حماية اللحام لدينا إجراء تقييمات في موقع منشأتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية. سنساعدك في تحديد حلول حماية اللحام المثلى لعملياتك المحددة ومتطلبات الامتثال.
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