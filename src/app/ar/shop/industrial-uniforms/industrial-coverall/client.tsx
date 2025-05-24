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

export default function IndustrialCoverallClientPage() {
  // Create product data for the Arabic industrial coverall
  const coverallProduct: ProductData = {
    id: 'industrial-coverall',
    name: 'بدلة العمل الصناعية المقاومة للهب من يونيوم',
    description: 'بدلة عمل صناعية مقاومة للهب ومصممة خصيصاً للبيئات الصناعية في المملكة العربية السعودية، متوافقة مع معايير NFPA 2112 مع حماية فائقة لقطاعات النفط والغاز والتصنيع والبتروكيماويات.',
    features: [
      'قماش مكون من 88% قطن و12% نايلون مقاوم للهب',
      'وزن مثالي 9 أونصات مع تصنيف مقاومة للهب ATPV 12.4 كال/سم²',
      'تقنية امتصاص الرطوبة للحفاظ على برودة الجسم',
      'درزات مقواة في نقاط الضغط للمتانة الاستثنائية',
      'تصميم ظهر متحرك وأكمام مرنة للحركة السهلة',
      'حلقات للراديو ونقاط تثبيت لشاشات مراقبة الغاز',
      'متوافقة مع معايير السلامة السعودية والدولية'
    ],
    price: 349,
    images: [
      'https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_1.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_2.webp',
      'https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_3.webp'
    ],
    colors: ['أزرق داكن', 'رمادي', 'كاكي', 'أزرق ملكي', 'برتقالي عالي الوضوح'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL'],
    category: 'industrial-uniforms',
    tags: ['ملابس واقية من الحريق', 'بدلات عمل صناعية', 'معدات السلامة للنفط والغاز', 'ملابس واقية للصناعات البتروكيماوية'],
    rating: 4.8,
    reviews: 92
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
            "name": "بدلة العمل الصناعية المقاومة للهب من يونيوم",
            "image": [
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_1.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_2.webp",
              "https://uneom.com/images/industries/Factory_Industrial/Industrial_Coverall_3.webp"
            ],
            "description": "بدلة عمل صناعية مقاومة للهب ومصممة خصيصاً للبيئات الصناعية في المملكة العربية السعودية، متوافقة مع معايير NFPA 2112 مع حماية فائقة لقطاعات النفط والغاز والتصنيع والبتروكيماويات.",
            "sku": "UNEOM-IC-100-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/industrial-coverall",
              "priceCurrency": "SAR",
              "price": "349",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "92"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage product={coverallProduct} relatedProducts={relatedProducts} locale="ar" />
      
      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading centered={false}>
            <h2 className="text-3xl font-bold text-right">بدلات العمل الصناعية المقاومة للهب من يونيوم</h2>
            <p className="text-xl text-gray-600 mt-2 text-right">حماية رائدة في الصناعة للقوى العاملة الصناعية في المملكة العربية السعودية</p>
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10 text-right">
            <div className="prose prose-lg mx-auto rtl">
              <h2>حماية متفوقة للبيئات الصناعية الشاقة</h2>
              <p>
                تم تصميم بدلات العمل الصناعية المقاومة للهب من يونيوم خصيصاً للظروف الشاقة التي يواجهها العاملون في القطاعات الصناعية السعودية. توفر بدلاتنا المقاومة للهب الحماية الأساسية للمحترفين في قطاعات النفط والغاز والمصانع البتروكيماوية ومنشآت التصنيع وعمليات المرافق في جميع أنحاء الرياض وجدة والدمام والمدن الصناعية في المملكة.
              </p>
              
              <h3>تقنية متقدمة مقاومة للهب</h3>
              <p>
                تتميز كل بدلة عمل صناعية من يونيوم بقماشنا المتخصص المكون من 88% قطن و12% نايلون مقاوم للهب بوزن مثالي 9 أونصات، مما يوفر تصنيفاً مثيراً للإعجاب لمقاومة اللهب يبلغ ATPV 12.4 كال/سم². يحافظ هذا القماش المتخصص على خصائصه المقاومة للهب طوال عمر الملابس، حتى بعد دورات الغسيل الصناعي المتكررة. بدلاتنا لا تلبي معيار NFPA 2112 فحسب - بل تتجاوزه، مما يوفر حماية موثوقة ضد الحرائق الوميضية ومخاطر الومضات القوسية الشائعة في البيئات الصناعية السعودية.
              </p>
              <p>
                تساعد تقنية امتصاص الرطوبة المبتكرة على الحفاظ على تنظيم درجة حرارة الجسم في ظروف المناخ القاسية في المملكة العربية السعودية، بينما يسمح تصميم القماش القابل للتنفس بدوران الهواء لمنع الإجهاد الحراري أثناء المناوبات الطويلة. جميع الدرزات مقواة بخيط مقاوم للهب ومعززة استراتيجياً في نقاط الضغط العالي للمتانة الاستثنائية.
              </p>
              
              <h3>مصممة خصيصاً للظروف الصناعية في المملكة العربية السعودية</h3>
              <p>
                تم تصميم بدلات العمل الصناعية لدينا خصيصاً لمعالجة التحديات التي يواجهها العمال الصناعيون في المملكة العربية السعودية:
              </p>
              <ul>
                <li>حماية معززة من الأشعة فوق البنفسجية للعمل في الهواء الطلق تحت أشعة الشمس القوية في المملكة العربية السعودية</li>
                <li>تصميم لتبديد الحرارة لخفض درجة حرارة الجسم في البيئات الصحراوية الساخنة</li>
                <li>تغطية موسعة مع إغلاق قابل للتعديل للمعصم والكاحل لمنع تسرب الرمل</li>
                <li>تصميم ظهر متحرك وأكمام مرنة للحركة دون قيود أثناء المهام الصناعية</li>
                <li>وضع استراتيجي للأشرطة العاكسة عالية الوضوح لظروف الإضاءة المنخفضة</li>
                <li>جيوب متخصصة متعددة مصممة للأنظمة الصناعية السعودية والمعدات</li>
                <li>حلقات للراديو ونقاط تثبيت لشاشات مراقبة الغاز وفقاً لمعايير السلامة في أرامكو السعودية</li>
              </ul>
              
              <h3>متوافقة مع المعايير المحلية والدولية</h3>
              <p>
                تلبي بدلات العمل المقاومة للهب لدينا أو تتجاوز جميع معايير السلامة ذات الصلة، بما في ذلك:
              </p>
              <ul>
                <li>معيار NFPA 2112 للملابس المقاومة للهب للأفراد الصناعيين</li>
                <li>معيار ASTM F1506 للحماية من الومضات القوسية</li>
                <li>المعايير الهندسية لشركة أرامكو السعودية (SAES) للملابس الواقية</li>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                <li>معيار EN ISO 11612:2015 للحماية من الحرارة واللهب</li>
                <li>متطلبات السلامة SABIC لمعدات الوقاية الشخصية للمقاولين</li>
              </ul>
              
              <h3>خيارات التخصيص للشركات السعودية</h3>
              <p>
                تقدم يونيوم خيارات تخصيص واسعة لبدلات العمل الصناعية لدينا، بما في ذلك:
              </p>
              <ul>
                <li>تطريز شعار الشركة أو رقع مقاومة للحرارة</li>
                <li>ترميز الألوان حسب القسم (أحمر للمشغلين، أزرق للصيانة، إلخ)</li>
                <li>تطريز الاسم والمنصب باللغتين العربية والإنجليزية</li>
                <li>تكوينات جيوب مخصصة بناءً على متطلبات الأدوات</li>
                <li>خيارات رؤية عالية معززة لبيئات عمل محددة</li>
                <li>التكامل مع أنظمة معدات الوقاية الشخصية الأخرى للحماية الشاملة</li>
              </ul>
              
              <h3>طلبات الجملة للعمليات الصناعية</h3>
              <p>
                تتخصص يونيوم في توفير حلول بدلات العمل المقاومة للهب للعمليات واسعة النطاق في جميع أنحاء المملكة العربية السعودية. يعمل مستشارو السلامة الصناعية لدينا مباشرة مع مديري السلامة وفرق المشتريات ومسؤولي الامتثال لتطوير برامج شاملة للملابس الواقية تعالج مخاطر مكان العمل المحددة مع تحسين كفاءة التكلفة.
              </p>
              <p>
                مع وجود مرافق تصنيع محلية في المملكة العربية السعودية، نقدم أوقات تسليم أسرع وخدمة استجابة لكل من الطلبات الأولية والبدائل، مما يضمن بقاء قوتك العاملة محمية في جميع الأوقات مع الحد الأدنى من توقف العمل.
              </p>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">اطلب استشارة لمتطلبات بدلة العمل الصناعية الخاصة بك</h3>
                <p className="mb-6">
                  متخصصو السلامة الصناعية لدينا متاحون لإجراء تقييمات في الموقع في منشأتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية. سنساعدك في تحديد مواصفات بدلة العمل المقاومة للهب المثلى لمخاطر مكان العمل المحددة ومتطلبات الامتثال.
                </p>
                <div className="flex justify-center">
                  <Link href="/ar/contact">
                    <Button variant="primary" size="lg">
                      تواصل مع فريق السلامة الصناعية لدينا
                    </Button>
                  </Link>
                </div>
              </div>
              
              <h3>تعليمات الصيانة والعناية</h3>
              <p>
                العناية المناسبة ببدلات العمل المقاومة للهب ضرورية للحفاظ على خصائصها الواقية. توفر يونيوم إرشادات شاملة للعناية ويمكنها التوصية بخدمات الغسيل الصناعي في المملكة العربية السعودية التي تتخصص في معالجة الملابس المقاومة للهب. بالنسبة للعمليات ذات القوى العاملة الكبيرة، نقدم برامج خدمة مدارة تشمل الفحص المنتظم وإصلاح واستبدال البدلات التالفة لضمان الحماية المستمرة.
              </p>
              
              <h3>التزامنا البيئي</h3>
              <p>
                تلتزم يونيوم بالاستدامة في ملابس العمل الصناعية. يتم تصنيع بدلاتنا باستخدام عمليات تقلل من استهلاك المياه وتخفض استخدام المواد الكيميائية، وهي اعتبارات مهمة في بيئة المملكة العربية السعودية الواعية بالمياه. كما نقدم برامج إعادة تدوير للبدلات المستهلكة، مما يدعم أهداف الاستدامة المؤسسية ومبادرات البيئة في رؤية السعودية 2030.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 