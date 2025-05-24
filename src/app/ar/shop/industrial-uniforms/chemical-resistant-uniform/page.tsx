import { Metadata } from 'next';
import ClientPage from '@/app/ar/shop/[category]/[product]/ClientPage';
import Script from 'next/script';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

// Define metadata for SEO optimization in Arabic
export const metadata: Metadata = {
  title: 'زي صناعي مقاوم للمواد الكيميائية | ملابس سلامة كيميائية للسعودية | يونيوم',
  description: 'أزياء يونيوم الصناعية المقاومة للمواد الكيميائية، مصممة خصيصًا لقطاعات البتروكيماويات، الأدوية، والصناعات التحويلية في المملكة العربية السعودية. معتمدة وفق معيار EN 13034 النوع 6 مع تقنية حاجز متقدمة وحماية فائقة من الرذاذ وتصميم مريح لسلامة أماكن العمل الخطرة.',
  keywords: 'زي مقاوم للمواد الكيميائية السعودية, ملابس واقية من رذاذ المواد الكيميائية, معدات حماية شخصية لصناعة البتروكيماويات, زي معتمد EN 13034, ملابس سلامة للمواد الخطرة, زي صناعي مقاوم للأحماض, معدات حماية لصناعة الأدوية, ملابس مختبرات كيميائية الرياض',
  openGraph: {
    title: 'زي صناعي مقاوم للمواد الكيميائية | حماية متقدمة لصناعة البتروكيماويات السعودية',
    description: 'ملابس عمل حديثة مقاومة للمواد الكيميائية، مصممة خصيصًا لبيئات البتروكيماويات والصناعات التحويلية المتطلبة في المملكة العربية السعودية. تتميز بتقنية حاجز متقدمة، مقاومة للاختراق، وتصميم مريح لتوفير الحماية والراحة المثلى في ظروف العمل الخطرة.',
    images: [
      {
        url: 'https://uneom.com/images/products/industrial/chemical-resistant-uniform-1.jpg',
        width: 1200,
        height: 630,
        alt: 'زي صناعي مقاوم للمواد الكيميائية من يونيوم'
      }
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://uneom.com/ar/shop/industrial-uniforms/chemical-resistant-uniform',
    languages: {
      'en': 'https://uneom.com/shop/industrial-uniforms/chemical-resistant-uniform',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ChemicalResistantUniformArabicPage() {
  // Create product data for the Arabic version
  const product = {
    id: 'chemical-resistant-uniform',
    name: 'زي صناعي فاخر مقاوم للمواد الكيميائية',
    description: 'زي صناعي متقدم مقاوم للمواد الكيميائية مصمم خصيصًا لقطاعات البتروكيماويات والأدوية والصناعات التحويلية في المملكة العربية السعودية، يتميز بتقنية حاجز متعدد الطبقات وحماية من الرذاذ من النوع 6. معتمد EN 13034 و SASO لسلامة المواد الكيميائية في مكان العمل.',
    features: [
      'تقنية حاجز متعدد الطبقات للحماية من مجموعة واسعة من المواد الكيميائية',
      'معتمد EN 13034 النوع 6 للحماية من رذاذ السوائل الكيميائية',
      'تصميم مريح يوفر الراحة وحرية الحركة في البيئات الصناعية',
      'أقمشة متينة مقاومة للتآكل والتمزق للاستخدام طويل الأمد',
      'خصائص تبديد الشحنات الكهروستاتيكية لمزيد من الأمان',
      'متوفر بخيارات تخصيص لتلبية احتياجات الشركات المحددة'
    ],
    price: 595,
    images: [
      '/images/products/industrial/chemical-resistant-uniform-1.jpg',
      '/images/products/industrial/chemical-resistant-uniform-2.jpg',
      '/images/products/industrial/chemical-resistant-uniform-3.jpg'
    ],
    colors: ['#00447c', '#354e57', '#cccccc'],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'industrial-uniforms',
    tags: ['مقاوم للمواد الكيميائية', 'حماية كيميائية', 'زي صناعي', 'بتروكيماويات', 'أدوية', 'سلامة صناعية'],
    rating: 4.8,
    reviews: 64
  };

  // Create related products for Arabic version
  const relatedProducts = [
    {
      id: 'anti-static-industrial-uniform',
      name: 'زي صناعي مضاد للكهرباء الساكنة',
      description: 'زي صناعي متقدم مضاد للكهرباء الساكنة لبيئات النفط والغاز وتصنيع الإلكترونيات',
      features: ['مضاد للكهرباء الساكنة', 'تبديد الشحنات'],
      price: 480,
      images: ['/images/products/industrial/antistatic-uniform-1.jpg'],
      colors: ['#192a56', '#273c75', '#353b48'],
      sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
      category: 'industrial-uniforms',
      tags: ['مضاد للكهرباء الساكنة', 'حماية ESD', 'زي صناعي'],
      rating: 4.8,
      reviews: 73
    },
    {
      id: 'flame-resistant-workwear',
      name: 'زي مقاوم للهب',
      description: 'زي صناعي مقاوم للهب والحرارة للبيئات الصناعية عالية المخاطر',
      features: ['مقاوم للحريق', 'حماية حرارية'],
      price: 549,
      images: ['/images/products/industrial/flame-resistant-1.jpg'],
      colors: ['#192a56', '#273c75', '#353b48'],
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      category: 'industrial-uniforms',
      tags: ['مقاوم للهب', 'حماية من الحريق', 'زي صناعي'],
      rating: 4.9,
      reviews: 82
    },
    {
      id: 'industrial-safety-vest',
      name: 'سترة سلامة صناعية',
      description: 'سترة سلامة صناعية عالية الوضوح معتمدة من ANSI/ISEA 107 الفئة 2 للعمال في البيئات الخطرة',
      features: ['رؤية عالية', 'شرائط عاكسة', 'ANSI/ISEA معتمد'],
      price: 120,
      images: ['/images/products/industrial/safety-vest-1.jpg'],
      colors: ['#ffa500', '#ffff00', '#ff0000'],
      sizes: ['M', 'L', 'XL', 'XXL'],
      category: 'industrial-uniforms',
      tags: ['سترة سلامة', 'رؤية عالية', 'ملابس واقية'],
      rating: 4.7,
      reviews: 115
    },
  ];

  const locale = 'ar';

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
            "name": "زي صناعي فاخر مقاوم للمواد الكيميائية من يونيوم",
            "image": [
              "https://uneom.com/images/products/industrial/chemical-resistant-uniform-1.jpg",
              "https://uneom.com/images/products/industrial/chemical-resistant-uniform-2.jpg",
              "https://uneom.com/images/products/industrial/chemical-resistant-uniform-3.jpg"
            ],
            "description": "زي صناعي متقدم مقاوم للمواد الكيميائية مصمم خصيصًا لقطاعات البتروكيماويات والأدوية والصناعات التحويلية في المملكة العربية السعودية، يتميز بتقنية حاجز متعدد الطبقات وحماية من الرذاذ من النوع 6. معتمد EN 13034 و SASO لسلامة المواد الكيميائية في مكان العمل.",
            "sku": "UNEOM-CR-PRO-01-AR",
            "brand": {
              "@type": "Brand",
              "name": "يونيوم"
            },
            "manufacturer": "يونيوم للملابس المهنية",
            "offers": {
              "@type": "Offer",
              "url": "https://uneom.com/ar/shop/industrial-uniforms/chemical-resistant-uniform",
              "priceCurrency": "SAR",
              "price": "595",
              "priceValidUntil": "2024-12-31",
              "availability": "https://schema.org/InStock",
              "itemCondition": "https://schema.org/NewCondition"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "64"
            }
          })
        }}
      />

      {/* Main product page component */}
      <ClientPage product={product} relatedProducts={relatedProducts} locale={locale} />

      {/* Enhanced Product Description Section in Arabic */}
      <section className="py-16 bg-neutral-50">
      <h1 className="sr-only">زي صناعي مقاوم للمواد الكيميائية | ملابس سلامة كيميائية للسعودية | يونيوم</h1>
      
        <Container>
          <SectionHeading centered={false} subtitle="حماية متطورة ضد المواد الكيميائية للبيئات الصناعية في المملكة العربية السعودية">
            زي صناعي مقاوم للمواد الكيميائية
          </SectionHeading>

          <div className="max-w-4xl mx-auto mt-10">
            <div className="prose prose-lg mx-auto text-right">
              <h2>حماية كيميائية فائقة مصممة خصيصًا للقطاعات الصناعية في المملكة العربية السعودية</h2>
              <p>
                تمثل أزياء يونيوم الصناعية الفاخرة المقاومة للمواد الكيميائية قمة تكنولوجيا ملابس العمل الواقية، وهي مصممة خصيصًا لقطاعات البتروكيماويات، الأدوية، والصناعات التحويلية المتنامية في المملكة العربية السعودية. تم تطوير هذه الملابس المتخصصة من خلال أبحاث مكثفة في الظروف الصناعية الفعلية بالمملكة، وهي توفر حماية موثوقة ضد رذاذ وبخاخات وضباب المواد الكيميائية الخطرة، مع ضمان راحة استثنائية في مناخ المملكة المتطلب.
              </p>

              <h3>تقنية حماية متقدمة متعددة الطبقات</h3>
              <p>
                تتضمن أزياؤنا الصناعية الفاخرة المقاومة للمواد الكيميائية تقنيات حاجز متطورة متعددة الطبقات تعمل بتناغم لتوفير حماية شاملة:
              </p>
              <ul>
                <li><strong>تقنية الحاجز الكيميائي:</strong> نسيج خاص معزز بالفلوربوليمر يطرد مجموعة واسعة من العوامل الكيميائية بما في ذلك الأحماض والقواعد والمذيبات والمشتقات البترولية.</li>
                <li><strong>مصفوفة الحاجز الجزيئي:</strong> معالجة نسيج متقدمة تنشئ درعًا جزيئيًا ضد تغلغل المواد الكيميائية على المستوى المجهري.</li>
                <li><strong>معالجة سطحية طاردة:</strong> طبقة نهائية متخصصة طاردة للماء والزيت تجعل المواد الكيميائية السائلة تتكور وتتدحرج عن سطح الزي.</li>
                <li><strong>تقنية الدرزات محكمة الإغلاق:</strong> خياطة معززة بخيوط مقاومة للمواد الكيميائية ودرزات ملحومة بالموجات فوق الصوتية اختيارية للبيئات الحرجة.</li>
                <li><strong>مقاومة الاختراق:</strong> مصممة لتأخير اختراق المواد الكيميائية، مما يوفر للعاملين وقتًا حاسمًا لتنفيذ إجراءات إزالة التلوث.</li>
                <li><strong>خصائص تبديد الشحنات الكهروستاتيكية:</strong> تقنية مدمجة مضادة للكهرباء الساكنة لمنع مخاطر الشرر في البيئات التي تحتوي على مواد كيميائية قابلة للاشتعال.</li>
                <li><strong>التوافق مع المخاطر المتعددة:</strong> متوفرة بمعالجة اختيارية مقاومة للهب للبيئات التي تنطوي على مخاطر كيميائية وحرائق متزامنة.</li>
                <li><strong>تعزيز استراتيجي:</strong> طبقات واقية إضافية في المناطق عالية التعرض مثل الساعدين والصدر والفخذين.</li>
              </ul>

              <div className="my-8 bg-primary-50 p-8 rounded-lg border border-primary-100">
                <h3 className="text-xl font-bold text-primary-800 mb-4">الشهادات والامتثال للمعايير الدولية</h3>
                <p className="mb-4">
                  تلبي أزياؤنا الصناعية الفاخرة المقاومة للمواد الكيميائية أو تتجاوز جميع المعايير الدولية والسعودية ذات الصلة بالحماية الكيميائية:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">EN 13034 النوع 6</h4>
                    <p className="text-sm text-neutral-700">
                      الحماية من الرذاذ المحدود وبخاخات السوائل الكيميائية.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">EN 14605</h4>
                    <p className="text-sm text-neutral-700">
                      الحماية من السوائل الكيميائية (موديلات مختارة).
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">ISO 16602</h4>
                    <p className="text-sm text-neutral-700">
                      متطلبات أداء الملابس الواقية من المواد الكيميائية.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">SASO 1563</h4>
                    <p className="text-sm text-neutral-700">
                      المواصفة القياسية السعودية للملابس الواقية من المواد الكيميائية.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">ASTM F1186-03</h4>
                    <p className="text-sm text-neutral-700">
                      المعيار الخاص بالملابس المقاومة للمواد الكيميائية ذات الاستخدام المحدود.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h4 className="font-medium text-primary-700 mb-2">NFPA 2112 (اختياري)</h4>
                    <p className="text-sm text-neutral-700">
                      للموديلات المقاومة للهب مع حماية مزدوجة من المواد الكيميائية واللهب.
                    </p>
                  </div>
                </div>
              </div>

              <h3>تطبيقات خاصة بالصناعات في المملكة العربية السعودية</h3>
              <p>
                صُممت أزياؤنا الصناعية المقاومة للمواد الكيميائية لمواجهة التحديات المحددة التي يواجهها العاملون في القطاعات الصناعية الرئيسية بالمملكة العربية السعودية:
              </p>

              <h4>صناعة البتروكيماويات</h4>
              <p>
                مصممة للعاملين في منشآت البتروكيماويات الواسعة في المملكة العربية السعودية في الجبيل وينبع والمدن الصناعية الأخرى. توفر هذه الأزياء الحماية من الهيدروكربونات العطرية، والمحفزات، وعوامل المعالجة، والمواد الكيميائية الخطرة الأخرى التي يتم مواجهتها في عمليات التكرير، وإنتاج البوليمرات، وتصنيع المواد الكيميائية المتخصصة. تتوفر إصدارات معززة بمقاومة متزامنة للهب للمناطق التي بها مخاطر حرائق ومواد كيميائية.
              </p>

              <h4>إنتاج الأدوية</h4>
              <p>
                مُحسَّنة لقطاع تصنيع الأدوية المتنامي في المملكة العربية السعودية حيث يتعرض العاملون للمذيبات العضوية والأحماض والقواعد والمكونات الصيدلانية الفعالة. تجمع هذه الأزياء المتخصصة بين مقاومة المواد الكيميائية والتوافق مع الغرف النظيفة لبيئات التصنيع المعقمة، مما يحمي كلاً من العاملين والمنتجات في المرافق المنتشرة في مراكز الأدوية بالمملكة.
              </p>

              <h4>المختبرات الكيميائية</h4>
              <p>
                مُصممة خصيصًا لفنيي المختبرات والباحثين في مرافق البحث والتطوير المتوسعة والمؤسسات التعليمية ومختبرات مراقبة الجودة في المملكة العربية السعودية. توفر هذه الأزياء الحماية من مجموعة واسعة من الكواشف المخبرية والمذيبات والمواد المسببة للتآكل مع توفير الراحة وسهولة الحركة اللازمتين للعمل المخبري الدقيق.
              </p>

              <h4>عمليات معالجة المياه</h4>
              <p>
                صُممت للعاملين في منشآت معالجة وتحلية المياه الحيوية في المملكة العربية السعودية، تحمي هذه الأزياء من مركبات الكلور ومواد المعالجة الكيميائية والأحماض والقواعد المستخدمة في عمليات تنقية المياه. مع إيلاء اهتمام خاص للمتانة في البيئات الرطبة النموذجية لعمليات معالجة المياه في جميع أنحاء المملكة.
              </p>

              <h4>التعدين ومعالجة المعادن</h4>
              <p>
                طُوِّرت للحماية في صناعة التعدين السعودية حيث يتعرض العمال للأحماض وعوامل الترشيح والمواد الكيميائية المستخدمة في المعالجة. تجمع هذه الأزياء بين مقاومة المواد الكيميائية ومقاومة التآكل المعززة والمتانة المطلوبة في الظروف الصعبة لعمليات التعدين والمعالجة في المملكة.
              </p>

              <h3>مصممة للظروف الصناعية الفريدة في المملكة العربية السعودية</h3>
              <p>
                تم تحسين كل جانب من جوانب أزيائنا الصناعية المقاومة للمواد الكيميائية لتناسب ظروف العمل الفريدة في المملكة العربية السعودية:
              </p>
              <ul>
                <li><strong>تخفيف الإجهاد الحراري:</strong> تقنية حاجز مبتكرة قابلة للتنفس تحافظ على الحماية الكيميائية مع السماح بتبديد حرارة الجسم في بيئات العمل الصناعية عالية الحرارة في المملكة العربية السعودية.</li>
                <li><strong>حماية قابلة للتنفس:</strong> تصميم تهوية استراتيجي يعزز دوران الهواء مع الحفاظ على الحواجز الواقية الحيوية ضد التعرض للمواد الكيميائية.</li>
                <li><strong>إدارة متقدمة للرطوبة:</strong> طبقة نسيج داخلية تمتص العرق بعيدًا عن الجلد لتعزيز الراحة خلال نوبات العمل الطويلة في الظروف الحارة.</li>
                <li><strong>مقاومة الأشعة فوق البنفسجية:</strong> نسيج معالج لمقاومة التدهور الناتج عن أشعة الشمس الشديدة في المملكة العربية السعودية، مما يضمن الحفاظ على خصائص مقاومة المواد الكيميائية طوال عمر الثوب.</li>
                <li><strong>متانة معززة:</strong> هيكل مقوى في نقاط الضغط العالي لتحمل المتطلبات الصارمة للعمليات الصناعية السعودية مع الحفاظ على خصائص الحاجز الكيميائي المتسقة.</li>
                <li><strong>تصميم مريح:</strong> نمط مفصلي عند المرفقين والركبتين والظهر للسماح بالحركة الطبيعية وتقليل التعب في ظروف العمل السعودية المتطلبة.</li>
                <li><strong>مقاسات خاصة بالسعودية:</strong> تصميم ومجموعة مقاسات مطورة خصيصًا للخصائص البشرية للقوى العاملة الصناعية المتنوعة في المملكة العربية السعودية.</li>
                <li><strong>مقاومة الغبار والرمال:</strong> طبقة نهائية متخصصة للنسيج تقاوم الآثار الكاشطة لجزيئات الغبار والرمال في المملكة العربية السعودية مع الحفاظ على مقاومة المواد الكيميائية.</li>
              </ul>

              <h3>مواصفات مقاومة المواد الكيميائية</h3>
              <p>
                توفر أزياؤنا الصناعية الفاخرة المقاومة للمواد الكيميائية حماية ضد مجموعة واسعة من المخاطر الكيميائية الشائعة في البيئات الصناعية السعودية:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200 text-right">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">فئة المادة الكيميائية</th>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">مستوى الحماية</th>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">أمثلة على العوامل</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">الأحماض غير العضوية</td>
                      <td className="px-4 py-3 text-sm">ممتاز</td>
                      <td className="px-4 py-3 text-sm">حمض الكبريتيك، حمض الهيدروكلوريك، حمض الفوسفوريك</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">الأحماض العضوية</td>
                      <td className="px-4 py-3 text-sm">جيد جداً</td>
                      <td className="px-4 py-3 text-sm">حمض الخليك، حمض الفورميك، حمض اللاكتيك</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">القواعد</td>
                      <td className="px-4 py-3 text-sm">ممتاز</td>
                      <td className="px-4 py-3 text-sm">هيدروكسيد الصوديوم، هيدروكسيد البوتاسيوم، الأمونيا</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">الهيدروكربونات الأليفاتية</td>
                      <td className="px-4 py-3 text-sm">جيد جداً</td>
                      <td className="px-4 py-3 text-sm">الهكسان، الأوكتان، الديزل، الزيوت البترولية</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">الهيدروكربونات العطرية</td>
                      <td className="px-4 py-3 text-sm">جيد</td>
                      <td className="px-4 py-3 text-sm">البنزين، التولوين، الزيلين</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">الكحوليات</td>
                      <td className="px-4 py-3 text-sm">ممتاز</td>
                      <td className="px-4 py-3 text-sm">الميثانول، الإيثانول، الأيزوبروبانول</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">الكيتونات</td>
                      <td className="px-4 py-3 text-sm">جيد</td>
                      <td className="px-4 py-3 text-sm">الأسيتون، ميثيل إيثيل كيتون، سيكلوهكسانون</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">العوامل المؤكسدة</td>
                      <td className="px-4 py-3 text-sm">جيد جداً</td>
                      <td className="px-4 py-3 text-sm">بيروكسيد الهيدروجين، هيبوكلوريت الصوديوم</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm mt-2 text-neutral-500">
                ملاحظة: تعتمد مستويات الحماية على طرق اختبار EN 13034 النوع 6. تختلف أوقات اختراق المواد الكيميائية الفعلية بناءً على التركيز ودرجة الحرارة وظروف التعرض. يرجى الرجوع إلى ورقة البيانات الفنية للحصول على بيانات اختراق محددة للمواد الكيميائية.
              </p>

              <h3>المواصفات الفنية الرئيسية</h3>
              <p>
                تُصنع أزياؤنا الصناعية المقاومة للمواد الكيميائية وفقًا لمواصفات فنية دقيقة:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200 text-right">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">الخاصية</th>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">طريقة الاختبار</th>
                      <th className="px-4 py-3 bg-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider">الأداء</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm">طرد السوائل</td>
                      <td className="px-4 py-3 text-sm">EN ISO 6530</td>
                      <td className="px-4 py-3 text-sm">الفئة 3 (طرد &gt;95%)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">مقاومة الاختراق</td>
                      <td className="px-4 py-3 text-sm">EN ISO 6530</td>
                      <td className="px-4 py-3 text-sm">الفئة 3 (اختراق &lt;1%)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">مقاومة التآكل</td>
                      <td className="px-4 py-3 text-sm">EN 530</td>
                      <td className="px-4 py-3 text-sm">الفئة 4 (&gt;1000 دورة)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">مقاومة التمزق شبه المنحرف</td>
                      <td className="px-4 py-3 text-sm">ISO 9073-4</td>
                      <td className="px-4 py-3 text-sm">الفئة 3 (&gt;40 نيوتن)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">قوة الشد</td>
                      <td className="px-4 py-3 text-sm">EN ISO 13934-1</td>
                      <td className="px-4 py-3 text-sm">الفئة 4 (&gt;250 نيوتن)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">مقاومة الثقب</td>
                      <td className="px-4 py-3 text-sm">EN 863</td>
                      <td className="px-4 py-3 text-sm">الفئة 2 (&gt;10 نيوتن)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">قوة الدرزة</td>
                      <td className="px-4 py-3 text-sm">EN ISO 13935-2</td>
                      <td className="px-4 py-3 text-sm">الفئة 4 (&gt;125 نيوتن)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm">مقاومة النفاذية</td>
                      <td className="px-4 py-3 text-sm">EN ISO 6529</td>
                      <td className="px-4 py-3 text-sm">تختلف حسب المادة الكيميائية (انظر البيانات الفنية)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>خيارات التخصيص للمؤسسات السعودية</h3>
              <p>
                تقدم يونيوم خيارات تخصيص واسعة لأزيائنا الصناعية المقاومة للمواد الكيميائية لتلبية المتطلبات المحددة للعمليات الصناعية السعودية:
              </p>
              <ul>
                <li><strong>العلامة التجارية للشركة:</strong> طرق تطبيق شعار مقاومة للمواد الكيميائية تحافظ على سلامة الحاجز الواقي مع تعزيز هوية الشركة.</li>
                <li><strong>الترميز اللوني للأقسام:</strong> اختلافات لونية استراتيجية ولمسات لتسهيل التعرف البصري السريع على الفرق والوظائف المختلفة.</li>
                <li><strong>موديلات خاصة بمخاطر محددة:</strong> إصدارات متخصصة مُحسَّنة لعائلات كيميائية معينة منتشرة في عمليات صناعية سعودية معينة.</li>
                <li><strong>خيارات حماية متعددة:</strong> موديلات مدمجة مقاومة للمواد الكيميائية/اللهب للبيئات ذات المخاطر المزدوجة، وهي مهمة بشكل خاص في منشآت البتروكيماويات السعودية.</li>
                <li><strong>تكوينات جيوب متخصصة:</strong> تصميمات ومواضع جيوب مخصصة لاستيعاب أدوات وشاشات ومعدات محددة مستخدمة في عمليات المعالجة الكيميائية السعودية.</li>
                <li><strong>ميزات رؤية معززة:</strong> دمج عناصر عالية الوضوح تحافظ على مقاومة المواد الكيميائية لتحسين سلامة العمال في ظروف الإضاءة المنخفضة.</li>
                <li><strong>التوافق مع الغرف النظيفة:</strong> إصدارات متخصصة تلبي تصنيفات محددة للغرف النظيفة لتطبيقات الصناعات الدوائية والحساسة.</li>
                <li><strong>دمج المراقبة الشخصية:</strong> ميزات خاصة لربط أو دمج شارات الكشف عن المواد الكيميائية، ومقاييس الجرعات، وأجهزة المراقبة الشخصية.</li>
              </ul>

              <div className="my-8 flex justify-center">
                <Link href="/ar/contact">
                  <Button variant="primary" size="lg">
                    طلب استشارة خاصة بالمخاطر
                  </Button>
                </Link>
              </div>

              <h3>برامج حماية كيميائية شاملة</h3>
              <p>
                للعمليات واسعة النطاق في جميع أنحاء المملكة العربية السعودية، تقدم يونيوم برامج شاملة للملابس الواقية من المواد الكيميائية تمتد إلى ما هو أبعد من مجرد توريد الملابس:
              </p>
              <ul>
                <li><strong>تقييم مخاطر المواد الكيميائية:</strong> تقييم ميداني لمخاطر التعرض للمواد الكيميائية في المنشآت السعودية لتحديد مستويات الحماية المناسبة ومتطلبات الملابس المحددة.</li>
                <li><strong>تنفيذ مخصص:</strong> تطوير حلول ملابس واقية من المواد الكيميائية مصممة خصيصًا لمناطق العمل والوظائف المختلفة داخل العمليات الصناعية السعودية.</li>
                <li><strong>تدريب العاملين:</strong> مواد تدريبية شاملة باللغتين الإنجليزية والعربية حول الارتداء والخلع والفحص والإجراءات الطارئة الصحيحة للملابس الواقية من المواد الكيميائية.</li>
                <li><strong>مشتريات موحدة:</strong> عمليات طلب مبسطة مع إدارة حسابات مخصصة لفرق المشتريات في الشركات السعودية.</li>
                <li><strong>إدارة المخزون:</strong> الحفاظ على مخزون محلي في المملكة العربية السعودية مع إمكانيات تجديد سريعة لضمان التوفر المستمر.</li>
                <li><strong>بروتوكولات إزالة التلوث:</strong> تطوير إجراءات غسيل وإزالة تلوث مناسبة للملابس المقاومة للمواد الكيميائية القابلة لإعادة الاستخدام.</li>
                <li><strong>وثائق الامتثال:</strong> وثائق شهادات واختبارات شاملة لتلبية المتطلبات التنظيمية السعودية وعمليات تدقيق السلامة الداخلية.</li>
                <li><strong>مراجعة دورية للبرنامج:</strong> إعادة تقييم مجدولة لأداء الملابس الواقية من المواد الكيميائية في ظروف العمل السعودية الفعلية لضمان التحسين المستمر.</li>
              </ul>

              <h3>ضمان الجودة والموثوقية</h3>
              <p>
                تخضع كل دفعة من أزيائنا الصناعية المقاومة للمواد الكيميائية لاختبارات صارمة لمراقبة الجودة:
              </p>
              <ul>
                <li><strong>اختبار طرد المواد الكيميائية:</strong> التحقق من أداء الطرد ضد عوامل كيميائية تمثيلية.</li>
                <li><strong>مقاومة الاختراق:</strong> اختبار للتأكد من الحد الأدنى من اختراق السوائل عبر بنية النسيج.</li>
                <li><strong>سلامة الدرزات:</strong> اختبارات متخصصة لضمان أن الدرزات محكمة الإغلاق تحافظ على خصائص الحاجز الكيميائي للنسيج الأساسي.</li>
                <li><strong>فحص بصري:</strong> فحص 100% للتأكد من البناء السليم، وإحكام الدرزات، والتصنيع الخالي من العيوب.</li>
                <li><strong>التحقق من الأبعاد:</strong> التأكد من مواصفات المقاسات والملاءمة الصحيحة.</li>
                <li><strong>التوثيق:</strong> إمكانية تتبع شاملة للدفعات، وتقارير الاختبار، ووثائق الشهادات.</li>
              </ul>

              <h3>العناية والصيانة الصحيحة</h3>
              <p>
                لضمان استمرار أداء الحماية الكيميائية، توفر يونيوم إرشادات رعاية مفصلة مع كل ثوب:
              </p>
              <ul>
                <li><strong>إجراءات إزالة التلوث:</strong> بروتوكولات محددة لإزالة الملوثات الكيميائية بأمان قبل الغسيل.</li>
                <li><strong>إرشادات الغسيل:</strong> تعليمات غسيل مفصلة تشمل أنواع المنظفات الموصى بها، ودرجات حرارة الماء، وطرق التجفيف للحفاظ على خصائص مقاومة المواد الكيميائية.</li>
                <li><strong>بروتوكولات الفحص:</strong> إجراءات فحص بصرية وجسدية شاملة لتحديد أي مساس بالقدرات الواقية.</li>
                <li><strong>توصيات التخزين:</strong> ممارسات تخزين مناسبة لمنع تدهور خصائص مقاومة المواد الكيميائية.</li>
                <li><strong>معايير الاستبعاد من الخدمة:</strong> إرشادات واضحة حول متى يجب إخراج الملابس من الخدمة بسبب البلى أو التلف أو التعرض المفرط.</li>
                <li><strong>التوثيق:</strong> توصيات حفظ السجلات للامتثال للوائح سلامة مكان العمل السعودية.</li>
              </ul>

              <h3>الالتزام البيئي والاستدامة</h3>
              <p>
                تلتزم يونيوم بتقليل التأثير البيئي لملابس العمل المقاومة للمواد الكيميائية لدينا:
              </p>
              <ul>
                <li><strong>تقليل استخدام المواد الكيميائية:</strong> عمليات تصنيع مُحسَّنة لتقليل استهلاك المواد الكيميائية مع الحفاظ على معايير الحماية.</li>
                <li><strong>التركيز على المتانة:</strong> دورة حياة أطول للملابس تقلل من تكرار الاستبدال واستهلاك الموارد المرتبط به.</li>
                <li><strong>التخلص المسؤول:</strong> إرشادات للتعامل السليم مع الملابس الواقية من المواد الكيميائية في نهاية عمرها الافتراضي.</li>
                <li><strong>التصنيع الإقليمي:</strong> مواقع إنتاج استراتيجية لتقليل انبعاثات النقل لعملاء المملكة العربية السعودية.</li>
                <li><strong>التحسين المستمر:</strong> بحث مستمر في تقنيات مقاومة كيميائية أكثر استدامة.</li>
              </ul>

              <p className="text-lg font-medium mt-8">
                مع أزياء يونيوم الصناعية الفاخرة المقاومة للمواد الكيميائية، يمكن للمؤسسات الصناعية السعودية تزويد قواها العاملة بحماية فائقة ضد مخاطر المواد الكيميائية مع ضمان الامتثال للمعايير الدولية واللوائح المحلية. إن التزامنا بتقنية الحماية المتقدمة والراحة والتصميم الخاص بالمملكة العربية السعودية يجعل يونيوم الخيار الموثوق به لملابس العمل المقاومة للمواد الكيميائية في جميع أنحاء المملكة.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
} 