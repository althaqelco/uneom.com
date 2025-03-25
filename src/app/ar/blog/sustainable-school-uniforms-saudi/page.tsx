'use client';

import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaWhatsapp, FaRecycle, FaLeaf } from 'react-icons/fa';
import Head from 'next/head';

import MainLayout from '@/components/layout/MainLayout';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function SustainableSchoolUniformsSaudiPageArabic() {
  const locale = 'ar';
  
  // Blog post metadata
  const post = {
    title: 'الأزياء المدرسية المستدامة: مستقبل أخضر للمدارس السعودية',
    excerpt: 'كيف تساهم الأزياء المدرسية المستدامة في تحقيق رؤية 2030 وتعزيز الوعي البيئي في المملكة العربية السعودية.',
    author: 'م. سارة القحطاني',
    date: '١٥ أبريل ٢٠٢٣',
    readTime: '١٠ دقائق للقراءة',
    featuredImage: '/images/blog/sustainable-school-uniforms.webp',
    categories: ['الزي المدرسي', 'الاستدامة', 'رؤية 2030']
  };
  
  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المدونة', href: '/ar/blog' },
    { label: 'الأزياء المدرسية المستدامة في السعودية', href: '#' },
  ];

  // Schema data for SEO
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `https://uneom.com${post.featuredImage}`,
    datePublished: '2023-04-15T10:00:00+03:00',
    dateModified: '2023-04-15T10:00:00+03:00',
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'يونيوم',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uneom.com/images/logo.png'
      }
    },
    description: post.excerpt,
  };

  // Function to handle contact button clicks
  const handleContactClick = () => {
    const whatsappUrl = generateGeneralWhatsAppUrl('استفسار حول الأزياء المدرسية المستدامة');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <MainLayout locale={locale}>
      <Head>
        <title>{post.title} | يونيوم</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href="https://uneom.com/ar/blog/sustainable-school-uniforms-saudi" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content="https://uneom.com/ar/blog/sustainable-school-uniforms-saudi" />
        <meta property="og:image" content={`https://uneom.com${post.featuredImage}`} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://uneom.com${post.featuredImage}`} />
        
        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
        />
        
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en" href="https://uneom.com/blog/sustainable-school-uniforms-saudi" />
        <link rel="alternate" hrefLang="ar" href="https://uneom.com/ar/blog/sustainable-school-uniforms-saudi" />
      </Head>
      
      <div className="pt-8 pb-16">
        <Container>
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          
          {/* Blog post header */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{post.title}</h1>
            <p className="text-lg text-neutral-600 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-center text-sm text-neutral-500 space-x-4 space-x-reverse">
              <div className="flex items-center">
                <FaUser className="ml-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="ml-2" />
                <span>{post.date}</span>
              </div>
              <div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="relative aspect-video max-w-4xl mx-auto mb-10 rounded-lg overflow-hidden shadow-md">
            <Image 
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Blog post content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2>مقدمة</h2>
            <p>
              مع تزايد الوعي العالمي بأهمية الاستدامة البيئية، أصبح من الضروري إعادة النظر في جميع جوانب 
              حياتنا اليومية، بما في ذلك الأزياء المدرسية. في المملكة العربية السعودية، تتماشى هذه المبادرات 
              مع رؤية 2030 التي تركز بشكل كبير على الاستدامة والمسؤولية البيئية. تستكشف هذه المقالة 
              كيف يمكن للأزياء المدرسية المستدامة أن تساهم في تحقيق هذه الرؤية، وتعزز الوعي البيئي 
              بين الطلاب السعوديين.
            </p>
            
            <h2>الاستدامة في سياق رؤية السعودية 2030</h2>
            <p>
              تضع رؤية السعودية 2030 الاستدامة في صميم خطة التحول الوطني. من خلال مبادرات مثل "السعودية 
              الخضراء" و"الشرق الأوسط الأخضر"، تسعى المملكة إلى:
            </p>
            <ul>
              <li>تقليل انبعاثات الكربون بشكل كبير</li>
              <li>زيادة استخدام الطاقة المتجددة</li>
              <li>تشجيع ممارسات الاقتصاد الدائري</li>
              <li>زرع 10 مليارات شجرة في العقود القادمة</li>
            </ul>
            <p>
              في هذا السياق، تمثل الأزياء المدرسية المستدامة فرصة مهمة للمساهمة في هذه الأهداف. من خلال 
              تبني ممارسات الإنتاج المستدام وتعليم الجيل القادم أهمية الخيارات البيئية المسؤولة، يمكن للمدارس 
              أن تلعب دورًا حيويًا في دعم مبادرات الاستدامة الوطنية.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg my-8 border-r-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-800 mb-3">حقيقة مهمة</h3>
              <p className="text-neutral-700">
                تستهلك صناعة الملابس العالمية حوالي 93 مليار متر مكعب من المياه سنويًا، وهو ما يكفي لتلبية 
                احتياجات 5 ملايين شخص. في المملكة العربية السعودية، حيث تعد ندرة المياه تحديًا كبيرًا، يمكن أن 
                يكون التحول نحو الأزياء المستدامة خطوة مهمة في الحفاظ على الموارد المائية.
              </p>
            </div>
            
            <h2>ما هي الأزياء المدرسية المستدامة؟</h2>
            <p>
              الأزياء المدرسية المستدامة هي تلك المصممة والمصنعة والموزعة بطرق تراعي البيئة والمجتمع. 
              تشمل الخصائص الرئيسية للأزياء المدرسية المستدامة:
            </p>
            
            <h3>١. المواد المستدامة</h3>
            <p>
              تستخدم الأزياء المدرسية المستدامة مواد صديقة للبيئة مثل:
            </p>
            <ul>
              <li>القطن العضوي: مزروع بدون مبيدات حشرية أو أسمدة اصطناعية</li>
              <li>البوليستر المعاد تدويره: مصنوع من زجاجات البلاستيك المعاد تدويرها</li>
              <li>الألياف الطبيعية المستدامة: مثل الكتان والتنسل (المستخلص من لب الخشب)</li>
              <li>الأقمشة المختلطة التي تدمج بين المتانة والاستدامة</li>
            </ul>
            
            <h3>٢. عمليات التصنيع المسؤولة</h3>
            <p>
              لا تقتصر الاستدامة على المواد فقط، بل تشمل أيضًا كيفية تصنيع الملابس:
            </p>
            <ul>
              <li>استخدام الصباغة الطبيعية أو تقنيات الصباغة منخفضة التأثير</li>
              <li>تقليل استهلاك المياه والطاقة في عمليات الإنتاج</li>
              <li>الحد من النفايات من خلال تصميم وقص أكثر كفاءة</li>
              <li>الإنتاج المحلي لتقليل بصمة الكربون المرتبطة بالنقل</li>
            </ul>
            
            <h3>٣. التصميم طويل الأمد</h3>
            <p>
              الأزياء المستدامة مصممة لتدوم:
            </p>
            <ul>
              <li>جودة عالية لضمان متانة طويلة الأمد</li>
              <li>تصاميم كلاسيكية لا تخضع لتقلبات الموضة السريعة</li>
              <li>قابلية التعديل للسماح بالنمو (مثل بنطلونات بأطوال قابلة للتعديل)</li>
              <li>سهولة الإصلاح لإطالة عمر الملابس</li>
            </ul>
            
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 p-5 rounded-lg">
                <div className="flex items-start">
                  <FaRecycle className="text-green-600 text-2xl mt-1 ml-3" />
                  <div>
                    <h4 className="font-semibold mb-2">قابلية إعادة التدوير</h4>
                    <p className="text-sm text-neutral-700">
                      الأزياء المدرسية المستدامة مصممة بحيث يمكن إعادة تدويرها في نهاية دورة حياتها، مما 
                      يقلل من النفايات ويدعم الاقتصاد الدائري.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-50 p-5 rounded-lg">
                <div className="flex items-start">
                  <FaLeaf className="text-green-600 text-2xl mt-1 ml-3" />
                  <div>
                    <h4 className="font-semibold mb-2">تأثير بيئي منخفض</h4>
                    <p className="text-sm text-neutral-700">
                      تعتمد الأزياء المستدامة على ممارسات تقلل استهلاك الموارد وتحد من التلوث الناتج عن 
                      صناعة الملابس التقليدية.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2>فوائد الأزياء المدرسية المستدامة في السياق السعودي</h2>
            
            <h3>الفوائد البيئية</h3>
            <p>
              في المملكة العربية السعودية، حيث تمثل ندرة المياه والظروف المناخية القاسية تحديات خاصة، يمكن 
              للأزياء المدرسية المستدامة أن تقدم فوائد بيئية هامة:
            </p>
            <ul>
              <li>تقليل استهلاك المياه في صناعة النسيج، وهو أمر بالغ الأهمية في منطقة تعاني من ندرة المياه</li>
              <li>تخفيض انبعاثات الكربون من خلال سلاسل التوريد المحلية والإقليمية</li>
              <li>الحد من النفايات النسيجية التي تنتهي في مدافن النفايات</li>
              <li>تقليل استخدام المواد الكيميائية الضارة في عمليات الإنتاج</li>
            </ul>
            
            <h3>الفوائد التعليمية</h3>
            <p>
              تقدم الأزياء المدرسية المستدامة فرصًا تعليمية قيمة للطلاب:
            </p>
            <ul>
              <li>تعزيز الوعي البيئي من خلال التعلم العملي حول الاستدامة</li>
              <li>غرس قيم المسؤولية البيئية في سن مبكرة</li>
              <li>ربط المفاهيم النظرية في المناهج الدراسية بتطبيقات عملية</li>
              <li>تشجيع التفكير النقدي حول استهلاك الموارد وتأثيرها</li>
            </ul>
            
            <h3>الفوائد الاقتصادية</h3>
            <p>
              بالإضافة إلى الفوائد البيئية والتعليمية، تقدم الأزياء المدرسية المستدامة مزايا اقتصادية:
            </p>
            <ul>
              <li>توفير التكاليف على المدى الطويل بفضل المتانة العالية</li>
              <li>خلق فرص عمل في قطاع النسيج المستدام المحلي</li>
              <li>دعم الشركات السعودية الناشئة في مجال الأزياء المستدامة</li>
              <li>تعزيز الابتكار في تقنيات وتصاميم النسيج الصديقة للبيئة</li>
            </ul>
            
            <div className="bg-neutral-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-3">دراسة حالة: مدرسة الرواد في الرياض</h3>
              <p className="text-neutral-700 mb-4">
                بدأت مدرسة الرواد في الرياض مبادرة رائدة في عام 2022 للتحول نحو الأزياء المدرسية المستدامة. 
                تتضمن المبادرة استخدام زي مصنوع من خليط من القطن العضوي والبوليستر المعاد تدويره. 
                بعد عام من التنفيذ، لاحظت المدرسة:
              </p>
              <ul className="text-neutral-700">
                <li>تحسن في متانة الزي المدرسي بنسبة 40%، مما قلل الحاجة للاستبدال المتكرر</li>
                <li>توفير 30% في تكاليف الزي المدرسي للأسر على مدى عامين دراسيين</li>
                <li>زيادة ملحوظة في وعي الطلاب بالقضايا البيئية، كما تظهر في المشاريع المدرسية</li>
                <li>تحسن في صورة المدرسة كمؤسسة مسؤولة بيئيًا، مما أدى إلى زيادة الإقبال على التسجيل</li>
              </ul>
            </div>
            
            <h2>التحديات والحلول</h2>
            <p>
              بينما تقدم الأزياء المدرسية المستدامة فوائد عديدة، هناك تحديات تواجه تنفيذها في المملكة العربية السعودية. 
              فيما يلي بعض التحديات الرئيسية والحلول المقترحة:
            </p>
            
            <h3>التحدي: التكلفة الأولية المرتفعة</h3>
            <p>
              غالبًا ما تكون الأزياء المستدامة أكثر تكلفة عند نقطة الشراء، مما قد يشكل عائقًا للمدارس والأسر.
            </p>
            <p><strong>الحلول:</strong></p>
            <ul>
              <li>التركيز على التكلفة الإجمالية على مدى حياة المنتج (وليس فقط سعر الشراء الأولي)</li>
              <li>برامج الدعم من القطاعين العام والخاص للمدارس التي تتبنى الأزياء المستدامة</li>
              <li>إنشاء برامج تبادل وإعادة استخدام لتقليل التكاليف على الأسر</li>
              <li>زيادة الإنتاج المحلي لخفض تكاليف النقل والاستيراد</li>
            </ul>
            
            <h3>التحدي: توافر المواد والموردين</h3>
            <p>
              قد تكون المواد المستدامة والموردين المتخصصين محدودين في السوق السعودي.
            </p>
            <p><strong>الحلول:</strong></p>
            <ul>
              <li>دعم تطوير سلاسل التوريد المحلية للمواد المستدامة</li>
              <li>الشراكات مع الجامعات ومراكز البحوث لتطوير مواد مستدامة مناسبة للمناخ المحلي</li>
              <li>تشجيع الاستثمار في قطاع النسيج المستدام في المملكة</li>
              <li>إنشاء منصات تجمع بين المدارس والموردين المستدامين لتسهيل التعاون</li>
            </ul>
            
            <h3>التحدي: الوعي والقبول</h3>
            <p>
              قد يكون هناك نقص في الوعي بفوائد الأزياء المستدامة أو مقاومة للتغيير.
            </p>
            <p><strong>الحلول:</strong></p>
            <ul>
              <li>حملات توعية تستهدف المدارس وأولياء الأمور والطلاب</li>
              <li>دمج مفاهيم الاستدامة في المناهج الدراسية</li>
              <li>عرض قصص نجاح المدارس التي تبنت الأزياء المستدامة</li>
              <li>التركيز على القيم الثقافية والدينية التي تتوافق مع الاستدامة، مثل الاعتدال وعدم الإسراف</li>
            </ul>
            
            <h2>مبادرات وتوصيات للمستقبل</h2>
            <p>
              لتسريع اعتماد الأزياء المدرسية المستدامة في المملكة العربية السعودية، نقترح المبادرات التالية:
            </p>
            
            <h3>إطار وطني للأزياء المدرسية المستدامة</h3>
            <p>
              يمكن لوزارة التعليم بالتعاون مع وزارة البيئة والمياه والزراعة وضع إطار وطني يحدد معايير 
              ومبادئ توجيهية للأزياء المدرسية المستدامة. يمكن أن يشمل هذا الإطار:
            </p>
            <ul>
              <li>معايير واضحة لتصنيف وتقييم استدامة الأزياء المدرسية</li>
              <li>حوافز للمدارس التي تتبنى الأزياء المستدامة</li>
              <li>توجيهات للمناقصات والمشتريات المدرسية لتشجيع الخيارات المستدامة</li>
              <li>أهداف مرحلية للتحول التدريجي نحو الأزياء المستدامة بحلول 2030</li>
            </ul>
            
            <h3>برامج تجريبية وتعاونية</h3>
            <p>
              يمكن إطلاق برامج تجريبية تجمع بين المدارس والشركات المصنعة والجامعات:
            </p>
            <ul>
              <li>مشاريع بحثية لتطوير أقمشة مستدامة مناسبة للبيئة السعودية</li>
              <li>برامج تجريبية في مدارس مختارة لقياس التأثير والفعالية</li>
              <li>مسابقات للطلاب لتصميم أزياء مدرسية مستدامة</li>
              <li>منصات لتبادل أفضل الممارسات بين المدارس</li>
            </ul>
            
            <h3>التعليم والتوعية</h3>
            <p>
              لضمان نجاح المبادرات المستدامة، من الضروري تعزيز الوعي والتعليم:
            </p>
            <ul>
              <li>إدماج موضوعات الاستدامة في المناهج الدراسية</li>
              <li>تدريب المعلمين على كيفية تعليم مفاهيم الاستدامة بشكل فعال</li>
              <li>تنظيم فعاليات وورش عمل لأولياء الأمور حول فوائد الأزياء المستدامة</li>
              <li>حملات إعلامية وطنية تربط بين الاستدامة ورؤية 2030</li>
            </ul>
            
            <div className="my-8 bg-primary-50 p-6 rounded-lg border-r-4 border-primary-500">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">رؤية الخبراء</h3>
              <p className="italic text-neutral-700">
                "يمثل التحول نحو الأزياء المدرسية المستدامة فرصة مهمة للمملكة العربية السعودية لتحقيق أهدافها 
                البيئية وتعليم الجيل القادم مبادئ المسؤولية البيئية. من خلال الجمع بين الابتكار التكنولوجي والتعليم 
                والسياسات الداعمة، يمكن للمملكة أن تصبح نموذجًا للأزياء المدرسية المستدامة في المنطقة."
              </p>
              <p className="font-semibold mt-2 text-neutral-800">- د. عبدالله العمري، خبير الاستدامة في المركز السعودي لكفاءة الطاقة</p>
            </div>
            
            <h2>الخلاصة</h2>
            <p>
              تمثل الأزياء المدرسية المستدامة فرصة مهمة للمملكة العربية السعودية لتحقيق أهداف الاستدامة 
              ضمن رؤية 2030، وتعزيز الوعي البيئي بين الأجيال القادمة. من خلال تبني المواد والأساليب المستدامة، 
              يمكن للمدارس أن تقلل من بصمتها البيئية وتعلم الطلاب قيم المسؤولية تجاه كوكبنا.
            </p>
            <p>
              بينما توجد تحديات مثل التكلفة الأولية وتوافر المواد، إلا أن الحلول المبتكرة والتعاون بين 
              مختلف أصحاب المصلحة يمكن أن يساعد في التغلب على هذه التحديات. من خلال الإطار التنظيمي المناسب، 
              والبرامج التجريبية، ومبادرات التوعية، يمكن تسريع اعتماد الأزياء المدرسية المستدامة في جميع 
              أنحاء المملكة.
            </p>
            <p>
              في شركة يونيوم، نؤمن بأن الأزياء المدرسية المستدامة ليست مجرد اتجاه عابر، بل هي استثمار في 
              مستقبل أكثر استدامة للمملكة العربية السعودية. نحن ملتزمون بتوفير خيارات مستدامة عالية الجودة 
              للمدارس السعودية، والمساهمة في تحقيق رؤية المملكة 2030 نحو مستقبل أكثر خضرة.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 bg-neutral-50 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">هل تبحث عن حلول أزياء مدرسية مستدامة؟</h3>
              <p className="text-lg text-neutral-700 mb-6">
                نقدم في يونيوم مجموعة متنوعة من الأزياء المدرسية المستدامة التي تجمع بين الجودة العالية 
                والمسؤولية البيئية. تواصل معنا اليوم لمعرفة كيف يمكننا مساعدة مدرستك في التحول نحو مستقبل أكثر استدامة.
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="flex items-center justify-center gap-2 mx-auto"
                onClick={handleContactClick}
              >
                <FaWhatsapp className="text-xl" /> تواصل معنا عبر واتساب
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap gap-2 justify-center">
              {post.categories.map((category, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-neutral-100 text-neutral-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share buttons */}
          <div className="mt-12 text-center">
            <p className="font-medium mb-4">شارك هذه المقالة</p>
            <div className="flex justify-center space-x-4 space-x-reverse">
              {/* Share buttons would go here */}
            </div>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
} 