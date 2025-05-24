'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Script from 'next/script';
import ClientPage from '@/app/shop/[category]/[product]/ClientPage';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export default function IndustrialSafetyVestClientPage() {
  // These parameters are used to fetch the product data
  const params = {
    category: 'high-visibility-clothing',
    product: 'industrial-safety-vest'
  };
  
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
            "name": "سترة السلامة الصناعية عالية الجودة من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial-safety-vest.webp",
              "https://uneom.com/images/products/industrial-safety-vest-alt1.webp",
              "https://uneom.com/images/products/industrial-safety-vest-alt2.webp"
            ],
            "description": "سترة سلامة صناعية احترافية مصممة لبيئات العمل السعودية. تتميز بالتوافق مع ANSI/ISEA 107 فئة 2، وشريط عاكس مقاوم للحرارة، ومواد متينة مناسبة لظروف الصحراء القاسية.",
            "sku": "UNEOM-ISV-2023",
            "brand": {
              "@type": "Brand",
              "name": "UNEOM"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "AggregateOffer",
              "url": "https://uneom.com/ar/shop/high-visibility-clothing/industrial-safety-vest",
              "priceCurrency": "SAR",
              "lowPrice": "89",
              "highPrice": "149",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "76"
            }
          })
        }}
      />
      
      {/* Main product page component */}
      <ClientPage params={params} />
      
      {/* Enhanced Product Description Section */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <SectionHeading subtitle="حماية مصممة خصيصًا لبيئات العمل الصناعية السعودية">
            سترات السلامة الصناعية فائقة الجودة
          </SectionHeading>
          
          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto" dir="rtl">
              <h2>حلول سلامة متقدمة لأماكن العمل الصعبة في المملكة العربية السعودية</h2>
              <p>
                تمثل سترات السلامة الصناعية من يونيوم قمة الحماية عالية الرؤية للعاملين في أصعب البيئات في المملكة العربية السعودية. مصممة خصيصًا للمتطلبات الفريدة لمواقع البناء ومنشآت النفط والغاز والمصانع ومشاريع البنية التحتية في جميع أنحاء المملكة، تجمع سترات السلامة لدينا بين الرؤية الممتازة والمتانة الاستثنائية والتصميم المريح لضمان بقاء العمال آمنين ومنتجين في أي ظروف.
              </p>
              
              <h3>حماية متوافقة مع معيار ANSI/ISEA 107</h3>
              <p>
                تلبي سترات السلامة الصناعية لدينا أو تتجاوز جميع متطلبات معايير ANSI/ISEA 107-2020 للملابس الواقية عالية الرؤية من الفئة 2، مما يضمن الامتثال لبروتوكولات السلامة الدولية ولوائح مكان العمل السعودية. هذا الامتثال ضروري للشركات العاملة في المملكة التي يجب أن تلتزم بمتطلبات السلامة المحلية والمعايير الدولية، خاصة تلك التي تعمل مع الشركات متعددة الجنسيات أو في المشاريع الحكومية.
              </p>
              <p>
                تحتوي كل سترة على ما لا يقل عن 755 سم² من المادة الخلفية و 201 سم² من المواد العاكسة، موضوعة استراتيجيًا للحفاظ على رؤية 360 درجة في جميع ظروف العمل. تحافظ المادة العاكسة على فعاليتها حتى بعد الغسل المتكرر أو التعرض للمناخ السعودي القاسي، مع أداء ضوئي يتجاوز 330 cd/lx/m² لتحقيق أقصى رؤية ليلية.
              </p>
              
              <h3>مصممة خصيصًا للظروف السعودية</h3>
              <p>
                على عكس سترات السلامة القياسية المصممة للمناخات المعتدلة، تم تصميم سترات السلامة الصناعية من يونيوم خصيصًا للأداء في البيئة السعودية القاسية:
              </p>
              <ul>
                <li>بناء مقاوم للحرارة يحافظ على السلامة الهيكلية في درجات حرارة تتجاوز 50 درجة مئوية، وهي شائعة خلال أشهر الصيف في المناطق الصناعية في الجبيل وينبع ورأس الخير</li>
                <li>أقمشة مستقرة للأشعة فوق البنفسجية بتصنيف UPF 50+ تقاوم التدهور من أشعة الشمس الصحراوية المكثفة، مما يضمن أن الألوان الفلورية تحافظ على خصائص الرؤية طوال عمر الخدمة للسترة</li>
                <li>تقنيات امتصاص الرطوبة التي تساعد على إدارة راحة العامل خلال ظروف الرطوبة العالية في المناطق الصناعية الساحلية مثل جدة والدمام</li>
                <li>معالجات مقاومة للرمال تمنع تراكم الغبار على الأسطح العاكسة، وهو اعتبار حاسم للحفاظ على الرؤية خلال العواصف الرملية المتكررة في المملكة العربية السعودية</li>
                <li>خيارات متخصصة مقاومة للهب للبيئات البتروكيماوية التي تتوافق مع كل من معايير رؤية ANSI 107 ومتطلبات مقاومة اللهب</li>
                <li>ميزات تهوية محسنة بما في ذلك ألواح شبكية موضوعة استراتيجيًا لزيادة تدفق الهواء مع الحفاظ على التغطية المطلوبة</li>
                <li>خيارات فك سريع مصممة خصيصًا لبيئات النفط والغاز حيث توجد مخاطر التشابك</li>
              </ul>
              
              <h3>تخصيصات خاصة بالصناعات المختلفة</h3>
              <p>
                تتوفر سترات السلامة الصناعية لدينا بميزات متخصصة مصممة لصناعات محددة تعمل في المملكة العربية السعودية:
              </p>
              <h4>قطاع النفط والغاز</h4>
              <ul>
                <li>نماذج مقاومة للهب متوافقة مع معايير NFPA 2112 للحماية من الحريق الوميضي</li>
                <li>خصائص مضادة للكهرباء الساكنة تلبي متطلبات ATEX للأجواء المتفجرة</li>
                <li>خيارات مقاومة للمواد الكيميائية لبيئات المصافي ومصانع المعالجة</li>
                <li>التكامل مع أحزمة الحماية من السقوط لمنصات العمل المرتفعة</li>
                <li>جيوب متخصصة لأجهزة مراقبة الغاز ومعدات الاستجابة للطوارئ</li>
              </ul>
              
              <h4>البناء والبنية التحتية</h4>
              <ul>
                <li>نقاط تعزيز مقاومة للتآكل لمتانة ممتدة في البيئات الكاشطة</li>
                <li>جيوب متعددة للأدوات ونقاط تثبيت المعدات</li>
                <li>حاملات بطاقات الهوية ونوافذ الاعتماد</li>
                <li>متوافقة مع أنظمة الترطيب للعمل في الهواء الطلق في الحرارة الشديدة</li>
                <li>خيارات مقاسات موسعة للملاءمة المناسبة فوق ملابس الشتاء خلال الأشهر الباردة</li>
              </ul>
              
              <h4>التصنيع والخدمات اللوجستية</h4>
              <ul>
                <li>خيارات مزودة بتقنية RFID لتتبع الموظفين الآلي والأمان</li>
                <li>تصميمات تهوية محسنة للبيئات الداخلية ذات درجات الحرارة العالية</li>
                <li>بناء قابل للغسل في الغسالة للتوافق مع الغسيل الصناعي</li>
                <li>خيارات رمز الاستجابة السريعة للوصول السريع إلى معلومات السلامة أو اعتماد العامل</li>
                <li>خيارات ترميز الألوان للأقسام للإدارة المرئية في المنشآت الكبيرة</li>
              </ul>
              
              <h3>خيارات العلامات التجارية المهنية والامتثال</h3>
              <p>
                تقدم يونيوم خيارات تخصيص واسعة لتلبية متطلبات الهوية المؤسسية مع الحفاظ على الامتثال لمعايير السلامة:
              </p>
              <ul>
                <li>تطبيق شعار الشركة باستخدام تقنيات النقل الحراري أو التطريز المتوافقة مع ANSI التي لا تضر بالخصائص العاكسة</li>
                <li>تطبيق النص باللغتين العربية والإنجليزية لتحديد هوية العامل والمنصب ومعلومات الطوارئ</li>
                <li>مطابقة ألوان الشركة ضمن معايير السلامة</li>
                <li>ترقيم متسلسل لإدارة المخزون وتتبع الامتثال</li>
                <li>ترميز أو علامات ألوان خاصة بالقسم للإدارة المرئية</li>
              </ul>
              
              <h3>الامتثال للمعايير السعودية</h3>
              <p>
                تتوافق سترات السلامة الصناعية لدينا مع جميع لوائح السلامة في مكان العمل السعودي ذات الصلة، بما في ذلك:
              </p>
              <ul>
                <li>المعايير الهندسية لأرامكو السعودية (SAES) للملابس عالية الرؤية</li>
                <li>متطلبات الهيئة السعودية للمواصفات والمقاييس والجودة (SASO)</li>
                <li>إرشادات السلامة في مكان العمل للمؤسسة العامة للتأمينات الاجتماعية (GOSI)</li>
                <li>متطلبات السلامة المهنية لوزارة العمل</li>
                <li>معايير رؤية الاستجابة للطوارئ للدفاع المدني</li>
                <li>متطلبات سلامة المقاول لسابك</li>
              </ul>
              
              <div className="my-8 bg-primary-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-4">اطلب استشارة لمتطلبات سترة السلامة الخاصة بك</h3>
                <p className="mb-6">
                  يمكن لمتخصصي السلامة الصناعية لدينا تقييم مخاطر مكان العمل المحددة والتوصية بمواصفات سترة السلامة المناسبة لعملياتك في الرياض أو جدة أو الدمام أو أي مدينة صناعية في المملكة العربية السعودية.
                </p>
                <div className="flex justify-center">
                  <Link href="/ar/contact">
                    <Button variant="primary" size="lg">
                      اتصل بفريق السلامة المهنية لدينا
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