'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateGeneralWhatsAppUrl } from '@/utils/whatsapp';

export default function SustainableSchoolUniformsSaudiPageArabic() {
  const locale = 'ar';
  
  // Blog post data
  const post = {
    title: 'الاستدامة في الزي المدرسي: خطوات نحو مستقبل أكثر اخضرارًا للتعليم في السعودية',
    excerpt: 'كيف يمكن للمؤسسات التعليمية في المملكة العربية السعودية تبني ممارسات أكثر استدامة في إنتاج واستهلاك الزي المدرسي وما تأثير ذلك على البيئة والمجتمع.',
    author: 'م. سارة القحطاني',
    date: '١٥ أبريل ٢٠٢٣',
    readTime: '٩ دقائق للقراءة',
    featuredImage: '/images/blog/sustainable-uniforms.webp',
    categories: ['الزي المدرسي', 'الاستدامة', 'التعليم الأخضر']
  };

  // Breadcrumbs for navigation
  const breadcrumbs = [
    { label: 'الرئيسية', href: '/ar' },
    { label: 'المدونة', href: '/ar/blog' },
    { label: 'الاستدامة في الزي المدرسي', href: '#' },
  ];

  // JSON-LD Product Schema for SEO
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
    const whatsappUrl = generateGeneralWhatsAppUrl('استفسار حول الزي المدرسي المستدام');
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
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
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <span>{post.date}</span>
              </div>
              <div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          {/* Inject JSON-LD script in a client-safe way */}
          <div dangerouslySetInnerHTML={{
            __html: `
              <script type="application/ld+json">
                ${JSON.stringify(postSchema)}
              </script>
            `
          }} />

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
            <h2>نحو مستقبل أكثر استدامة في التعليم</h2>
            <p>
              لطالما كان الزي المدرسي جزءًا أساسيًا من النظام التعليمي في المملكة العربية السعودية. 
              مع التركيز المتزايد على الاستدامة في جميع جوانب الحياة، يصبح تبني ممارسات أكثر استدامة 
              في إنتاج واستهلاك الزي المدرسي أمرًا ضروريًا. يمكن أن يكون للزي المدرسي المستدام 
              تأثير إيجابي كبير على البيئة والمجتمع والاقتصاد المحلي، مع الحفاظ على جميع الفوائد التقليدية 
              للزي المدرسي الموحد.
            </p>
            
            <h2>التحديات البيئية للزي المدرسي التقليدي</h2>
            <p>
              تواجه صناعة الزي المدرسي التقليدي عدة تحديات بيئية:
            </p>
            <ul>
              <li>استهلاك كميات كبيرة من المياه في زراعة وإنتاج الألياف الطبيعية مثل القطن</li>
              <li>استخدام المواد الكيميائية الضارة في عمليات الصباغة والتجهيز</li>
              <li>انبعاثات كربونية عالية مرتبطة بالإنتاج والنقل</li>
              <li>نفايات نسيجية كبيرة عندما يتم التخلص من الزي المدرسي القديم في مكبات النفايات</li>
              <li>استخدام الألياف الصناعية المشتقة من البترول والتي لا تتحلل بسهولة في البيئة</li>
            </ul>
            
            <div className="bg-neutral-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-3">إحصائية بارزة</h3>
              <p className="text-neutral-700">
                تشير التقديرات إلى أن صناعة الأزياء والمنسوجات العالمية، بما فيها الزي المدرسي، 
                مسؤولة عن 10% من انبعاثات غازات الاحتباس الحراري العالمية و20% من تلوث المياه 
                الصناعية على مستوى العالم.
              </p>
            </div>
            
            <h2>مبادرات الزي المدرسي المستدام في المملكة</h2>
            <p>
              بدأت بعض المدارس والمؤسسات التعليمية في المملكة العربية السعودية باتخاذ خطوات نحو 
              تبني ممارسات أكثر استدامة في ما يتعلق بالزي المدرسي. تشمل هذه المبادرات:
            </p>
            <ol>
              <li>
                <strong>استخدام المواد المستدامة:</strong> التحول نحو استخدام القطن العضوي، 
                والألياف المعاد تدويرها، والمواد المستدامة الأخرى في تصنيع الزي المدرسي.
              </li>
              <li>
                <strong>برامج إعادة التدوير:</strong> إنشاء برامج لإعادة تدوير الزي المدرسي القديم 
                وتحويله إلى منتجات جديدة أو استخدامه في أغراض أخرى.
              </li>
              <li>
                <strong>برامج تبادل الزي المدرسي:</strong> تشجيع الطلاب وأولياء الأمور على تبادل 
                الزي المدرسي المستعمل بدلاً من شراء ملابس جديدة كل عام.
              </li>
              <li>
                <strong>التصميم للاستدامة:</strong> تصميم زي مدرسي أكثر متانة وقابلية للتكيف مع 
                مختلف الفصول والأنشطة، مما يقلل من الحاجة إلى قطع متعددة.
              </li>
              <li>
                <strong>سلاسل التوريد المحلية:</strong> دعم المصنعين المحليين وتقليل البصمة 
                الكربونية المرتبطة بنقل المنتجات من مصادر بعيدة.
              </li>
            </ol>
            
            <h2>فوائد تبني الزي المدرسي المستدام</h2>
            <p>
              يمكن أن يعود تبني الزي المدرسي المستدام بالعديد من الفوائد على المجتمع والبيئة والاقتصاد:
            </p>
            
            <h3>الفوائد البيئية</h3>
            <ul>
              <li>تقليل البصمة الكربونية للمؤسسات التعليمية</li>
              <li>الحد من النفايات النسيجية التي تنتهي في مكبات النفايات</li>
              <li>تقليل استهلاك المياه والموارد الطبيعية</li>
              <li>الحد من التلوث الناتج عن عمليات الصباغة والتجهيز التقليدية</li>
            </ul>
            
            <h3>الفوائد التعليمية</h3>
            <ul>
              <li>تعزيز وعي الطلاب بقضايا الاستدامة والمسؤولية البيئية</li>
              <li>دمج مفاهيم الاستدامة في المناهج الدراسية بطريقة عملية</li>
              <li>تطوير مهارات المواطنة البيئية لدى الطلاب</li>
              <li>إعداد الطلاب للمشاركة في الاقتصاد الأخضر المستقبلي</li>
            </ul>
            
            <h3>الفوائد الاقتصادية</h3>
            <ul>
              <li>توفير تكاليف طويلة الأمد للأسر من خلال منتجات أكثر متانة</li>
              <li>دعم الصناعات المحلية المستدامة وخلق فرص عمل خضراء</li>
              <li>تقليل الاعتماد على الواردات وتعزيز الإنتاج المحلي</li>
              <li>تعزيز الابتكار في قطاع المنسوجات المستدامة</li>
            </ul>
            
            <div className="my-8 bg-primary-50 p-6 rounded-lg border-r-4 border-primary-500">
              <h3 className="text-xl font-semibold text-primary-800 mb-3">تجربة ناجحة</h3>
              <p className="text-neutral-700">
                قامت إحدى المدارس الرائدة في المنطقة الشرقية من المملكة بتبني برنامج شامل للزي المدرسي 
                المستدام، حيث أصبحت تستخدم قطنًا عضويًا مزروعًا محليًا وأنشأت نظامًا لإعادة تدوير الزي 
                القديم. أدى ذلك إلى انخفاض بنسبة 30% في النفايات النسيجية وتوفير 25% في تكاليف الزي 
                للأسر على المدى الطويل.
              </p>
            </div>
            
            <h2>استراتيجيات لتبني الزي المدرسي المستدام</h2>
            <p>
              بالنسبة للمؤسسات التعليمية الراغبة في التحول نحو زي مدرسي أكثر استدامة، نقدم الاستراتيجيات التالية:
            </p>
            
            <h3>تقييم الوضع الحالي</h3>
            <p>
              البدء بتقييم شامل للممارسات الحالية والتأثير البيئي للزي المدرسي، بما في ذلك:
            </p>
            <ul>
              <li>مصادر المواد الخام المستخدمة حاليًا</li>
              <li>كمية الزي المدرسي المستهلك سنويًا</li>
              <li>طرق التخلص من الزي المدرسي القديم</li>
              <li>تكاليف الزي المدرسي على الأسر وعلى المؤسسة</li>
            </ul>
            
            <h3>تحديد أهداف الاستدامة</h3>
            <p>
              وضع أهداف واضحة وقابلة للقياس للتحول نحو الزي المدرسي المستدام، مثل:
            </p>
            <ul>
              <li>زيادة نسبة المواد المستدامة في الزي المدرسي بنسبة معينة خلال فترة زمنية محددة</li>
              <li>تقليل النفايات النسيجية بنسبة معينة</li>
              <li>تقليل البصمة الكربونية المرتبطة بإنتاج ونقل الزي المدرسي</li>
            </ul>
            
            <h3>التعاون مع الشركاء المناسبين</h3>
            <p>
              البحث عن موردين ومصنعين ملتزمين بممارسات الاستدامة، مع التركيز على:
            </p>
            <ul>
              <li>شهادات الاستدامة المعترف بها (مثل GOTS للقطن العضوي)</li>
              <li>شفافية سلسلة التوريد</li>
              <li>الالتزام بالمسؤولية الاجتماعية</li>
              <li>القدرة على تقديم منتجات عالية الجودة وطويلة الأمد</li>
            </ul>
            
            <h3>إشراك المجتمع المدرسي</h3>
            <p>
              ضمان مشاركة جميع أصحاب المصلحة في عملية التحول، بما في ذلك:
            </p>
            <ul>
              <li>توعية الطلاب وأولياء الأمور والمعلمين بأهمية الاستدامة</li>
              <li>جمع ردود الفعل حول تصميم وجودة الزي المدرسي المستدام</li>
              <li>تشجيع المشاركة في برامج إعادة التدوير والتبادل</li>
            </ul>
            
            <h2>خاتمة: مستقبل الزي المدرسي المستدام في المملكة</h2>
            <p>
              يتماشى التحول نحو الزي المدرسي المستدام مع رؤية المملكة العربية السعودية 2030 والتزامها 
              بتحقيق أهداف التنمية المستدامة. من خلال تبني ممارسات أكثر استدامة في مجال الزي المدرسي، 
              يمكن للمؤسسات التعليمية في المملكة أن تلعب دورًا مهمًا في بناء مستقبل أكثر اخضرارًا وتعليم 
              الجيل القادم أهمية العيش المستدام.
            </p>
            <p>
              في شركة يونيوم، نحن ملتزمون بدعم المؤسسات التعليمية في رحلتها نحو الاستدامة. نقدم 
              مجموعة متنوعة من حلول الزي المدرسي المستدام المصممة خصيصًا لتلبية احتياجات المدارس 
              والطلاب في المملكة العربية السعودية، مع الحفاظ على الجودة والأناقة والراحة التي يتوقعها عملاؤنا.
            </p>

            {/* Call to action */}
            <div className="mt-12 bg-primary-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-neutral-900 mb-3">هل أنت مهتم بتبني حلول الزي المدرسي المستدام لمؤسستك التعليمية؟</h3>
              <p className="mb-4">
                تواصل مع فريق يونيوم اليوم لمعرفة المزيد عن خياراتنا المستدامة وكيف يمكننا مساعدتك في تحقيق أهداف الاستدامة الخاصة بك.
              </p>
              <Button 
                variant="primary" 
                onClick={handleContactClick}
                className="flex items-center justify-center"
              >
                <FaWhatsapp className="ml-2" />
                تواصل معنا عبر واتساب
              </Button>
            </div>

            {/* Author bio */}
            <div className="mt-12 bg-neutral-50 p-6 rounded-lg flex items-start">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ml-4">
                <Image
                  src="/images/authors/sara-alqahtani.jpg"
                  alt={post.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{post.author}</h3>
                <p className="text-sm text-neutral-600 mb-2">مهندسة نسيج متخصصة في الاستدامة</p>
                <p className="text-sm text-neutral-700">
                  تعمل م. سارة القحطاني في مجال المنسوجات المستدامة منذ أكثر من 8 سنوات. تركز أبحاثها على تطوير حلول صديقة للبيئة للأزياء المدرسية والمهنية في المملكة العربية السعودية.
                </p>
              </div>
            </div>
            
            {/* Related articles */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-neutral-900 mb-6">مقالات ذات صلة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/blog/school-uniform-academic-performance.webp"
                    alt="تأثير الزي المدرسي على الأداء الأكاديمي"
                    width={500}
                    height={300}
                    className="object-cover w-full h-40"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-neutral-900 mb-2">أثر الزي المدرسي على الأداء الأكاديمي</h4>
                    <p className="text-sm text-neutral-600 mb-3">دراسة العلاقة بين الزي المدرسي والإنجازات الأكاديمية في المدارس السعودية.</p>
                    <a href="/ar/blog/school-uniforms-academic-performance" className="text-primary-600 text-sm font-medium hover:text-primary-700">قراءة المزيد</a>
                  </div>
                </div>
                <div className="border border-neutral-200 rounded-lg overflow-hidden">
                  <Image
                    src="/images/blog/uniform-policies.webp"
                    alt="سياسات الزي المدرسي الفعالة"
                    width={500}
                    height={300}
                    className="object-cover w-full h-40"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-neutral-900 mb-2">سياسات الزي المدرسي الفعالة للمدارس السعودية</h4>
                    <p className="text-sm text-neutral-600 mb-3">دليل شامل لتطوير وتنفيذ سياسات زي مدرسي فعالة تتوافق مع القيم والأهداف التعليمية.</p>
                    <a href="/ar/blog/uniform-policies" className="text-primary-600 text-sm font-medium hover:text-primary-700">قراءة المزيد</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
} 