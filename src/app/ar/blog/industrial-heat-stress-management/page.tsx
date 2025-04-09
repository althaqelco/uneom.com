import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaTemperatureHigh, FaTshirt, FaIndustry, FaUser, FaChartLine } from 'react-icons/fa';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SectionHeading from '@/components/ui/SectionHeading';
import BlogAuthor from '@/components/blog/BlogAuthor';
import TableOfContents from '@/components/blog/TableOfContents';

export const metadata: Metadata = {
  title: 'إدارة الإجهاد الحراري من خلال تصميم ملابس العمل المتطورة | يونيوم',
  description: 'منهجيات مبتكرة لإدارة الإجهاد الحراري في بيئات العمل الصناعية السعودية من خلال ملابس العمل المكيفة مناخياً لتحسين السلامة والإنتاجية في البيئات ذات درجات الحرارة المرتفعة.',
  keywords: 'إدارة الإجهاد الحراري، ملابس العمل الصناعية السعودية، تقنية التبريد للزي الموحد، ملابس العمل المكيفة مناخياً، سلامة الحرارة في القطاع الصناعي، إنتاجية البيئات عالية الحرارة',
  metadataBase: new URL('https://uneom.com'),
  openGraph: {
    title: 'إدارة الإجهاد الحراري من خلال تصميم ملابس العمل المتطورة | يونيوم',
    description: 'منهجيات مبتكرة لإدارة الإجهاد الحراري في بيئات العمل الصناعية السعودية من خلال ملابس مصممة لتحسين السلامة والإنتاجية.',
    images: [
      {
        url: 'https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Heat_Management.webp',
        width: 1200,
        height: 630,
        alt: 'إدارة الإجهاد الحراري في البيئات الصناعية',
      }
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'إدارة الإجهاد الحراري من خلال تصميم ملابس العمل المتطورة',
    description: 'منهجيات مبتكرة لإدارة الإجهاد الحراري في بيئات العمل الصناعية السعودية من خلال ملابس مصممة لتحسين السلامة والإنتاجية.',
    images: ['https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Heat_Management.webp'],
  },
  alternates: {
    canonical: 'https://uneom.com/ar/blog/industrial-heat-stress-management',
    languages: {
      'en': 'https://uneom.com/blog/industrial-heat-stress-management',
      'ar': 'https://uneom.com/ar/blog/industrial-heat-stress-management',
    }
  }
};

export default function HeatStressManagementPage() {
  // بيانات المقالة
  const post = {
    slug: 'industrial-heat-stress-management',
    title: 'إدارة الإجهاد الحراري من خلال تصميم ملابس العمل المتطورة',
    excerpt: 'كيف تساعد تقنيات ملابس العمل المبتكرة المنشآت الصناعية السعودية في مكافحة الإجهاد الحراري والحفاظ على الإنتاجية في بيئات درجات الحرارة القصوى.',
    coverImage: '/images/industries/Factory_Industrial/Factory_Industrial_Heat_Management.webp',
    date: '8 يونيو 2024',
    readTime: 'قراءة 10 دقائق',
    author: {
      name: 'د. سارة العتيبي',
      avatar: '/images/blog/author-sara.jpg',
      title: 'متخصصة في الصحة المهنية'
    },
    categories: ['السلامة الصناعية', 'ابتكار ملابس العمل', 'الصحة المهنية']
  };

  // بيانات جدول المحتويات
  const tableOfContents = [
    {
      id: 'introduction',
      title: 'المقدمة',
    },
    {
      id: 'impact',
      title: 'تأثير الإجهاد الحراري في الصناعة السعودية',
    },
    {
      id: 'innovations',
      title: 'تقنيات تبريد ملابس العمل',
      subItems: [
        { id: 'passive-cooling', title: 'أنظمة التبريد السلبي' },
        { id: 'active-cooling', title: 'تقنيات التبريد النشط' },
      ]
    },
    {
      id: 'case-studies',
      title: 'دراسات حالة تطبيقية',
    },
    {
      id: 'best-practices',
      title: 'أفضل ممارسات التطبيق',
    },
    {
      id: 'conclusion',
      title: 'الخلاصة',
    }
  ];

  // البيانات المنظمة لتحسين محركات البحث
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "إدارة الإجهاد الحراري من خلال تصميم ملابس العمل المتطورة",
    "image": "https://uneom.com/images/industries/Factory_Industrial/Factory_Industrial_Heat_Management.webp",
    "datePublished": "2024-06-08T08:00:00+03:00",
    "dateModified": "2024-06-15T10:30:00+03:00",
    "author": {
      "@type": "Person",
      "name": "د. سارة العتيبي",
      "url": "https://www.uneom.com/ar/authors/sara-al-otaibi"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UNEOM",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.uneom.com/images/logo.png"
      }
    },
    "description": "منهجيات مبتكرة لإدارة الإجهاد الحراري في بيئات العمل الصناعية السعودية من خلال ملابس العمل المكيفة مناخياً لتحسين السلامة والإنتاجية.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.uneom.com/ar/blog/industrial-heat-stress-management"
    }
  };

  return (
    <div className="bg-white pt-6 pb-12 rtl">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Breadcrumbs */}
      <Container>
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'المدونة', href: '/ar/blog' },
            { label: post.title, href: `/ar/blog/${post.slug}` }
          ]}
        />
      </Container>
      
      {/* Blog Post Header */}
      <Container className="mt-8">
        <div className="mx-auto max-w-4xl">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category, index) => (
              <span 
                key={index}
                className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-sm text-neutral-700"
              >
                {category}
              </span>
            ))}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          
          {/* Author and Date Info */}
          <BlogAuthor
            name={post.author.name}
            title={post.author.title}
            image={post.author.avatar}
            date={post.date}
            readTime={post.readTime}
          />
          
          {/* Cover Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-10 mt-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
      
      {/* Blog Post Content */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with TOC on desktop */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
                
                <div className="mt-8 bg-red-50 p-4 rounded-lg border border-red-100">
                  <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center">
                    <FaTemperatureHigh className="ml-2" /> إحصائيات رئيسية
                  </h3>
                  <ul className="text-sm text-red-800 space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold ml-2">48°م+:</span> درجات الحرارة القصوى في بعض البيئات الصناعية السعودية
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold ml-2">28%:</span> خسارة في الإنتاجية بسبب الإجهاد الحراري عند استخدام ملابس العمل التقليدية
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold ml-2">67%:</span> انخفاض في الحوادث المرتبطة بالحرارة مع استخدام ملابس التبريد
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="prose prose-lg max-w-none">
                <h2 id="introduction">المقدمة</h2>
                <p>
                  في القطاع الصناعي السعودي، حيث تتجاوز درجات الحرارة المحيطة بانتظام 45 درجة مئوية خلال أشهر الصيف، 
                  يمثل الإجهاد الحراري أحد أكبر التحديات الصحية المهنية التي تواجه العمال وأصحاب العمل. ملابس العمل 
                  الصناعية التقليدية، المصممة غالبًا للمناخات الأكثر برودة والتي تركز بشكل أساسي على الحماية من المخاطر 
                  الميكانيكية أو الكيميائية، يمكن أن تفاقم الإجهاد الحراري من خلال خلق مناخات صغيرة تتجاوز قدرة الجسم 
                  على تنظيم درجة الحرارة بشكل فعال.
                </p>
                
                <p>
                  يفحص هذا الدليل الشامل كيف يحول تصميم ملابس العمل المتطورة إدارة الإجهاد الحراري في المنشآت الصناعية 
                  في المملكة العربية السعودية، مستكشفًا تقنيات التبريد المبتكرة، واستراتيجيات التنفيذ، والتأثير القابل 
                  للقياس على سلامة العمال والإنتاجية التشغيلية.
                </p>
                
                <h2 id="impact">تأثير الإجهاد الحراري في الصناعة السعودية</h2>
                
                <p>
                  يحمل الإجهاد الحراري في البيئات الصناعية السعودية عواقب كبيرة:
                </p>
                
                <ul>
                  <li><strong>مخاطر السلامة:</strong> ضعف الوظائف الإدراكية، تأخر أوقات رد الفعل، انخفاض الوعي بالموقف</li>
                  <li><strong>تأثيرات صحية:</strong> الإرهاق الحراري، ضربة الشمس، تلف الكلى المزمن من الجفاف المتكرر</li>
                  <li><strong>خسائر الإنتاجية:</strong> انخفاض موثق بنسبة 28-42% في إنتاجية العمل خلال فترات درجات الحرارة القصوى</li>
                  <li><strong>قضايا مراقبة الجودة:</strong> زيادة معدلات الخطأ في المهام الدقيقة وإجراءات الفحص</li>
                  <li><strong>تحديات الامتثال:</strong> تلبية متطلبات السلامة مع إدارة التعرض للحرارة</li>
                </ul>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                  <Image
                    src="/images/industries/Factory_Industrial/heat-stress-impact-chart.jpg"
                    alt="تأثير الإجهاد الحراري على الإنتاجية الصناعية"
                    fill
                    className="object-contain"
                  />
                </div>
                
                <h2 id="innovations">تقنيات تبريد ملابس العمل</h2>
                
                <h3 id="passive-cooling">أنظمة التبريد السلبي</h3>
                
                <p>
                  تعمل تقنيات التبريد السلبي بدون مصادر طاقة، مستفيدة من خصائص المواد وميزات التصميم:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                    <h4 className="font-bold text-blue-800 mb-3">إدارة الرطوبة المتقدمة</h4>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li><strong>نظام الفتيل متعدد المناطق:</strong> نقل موجه للرطوبة بعيدًا عن مناطق التعرق العالي</li>
                      <li><strong>هياكل النسيج المهندسة:</strong> شبكات شعرية تنقل الرطوبة إلى مناطق التبخر</li>
                      <li><strong>أنظمة التدرج المائي/غير المائي:</strong> نقل الرطوبة في اتجاه واحد</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-800 mb-3">هندسة التهوية</h4>
                    <ul className="space-y-2 text-green-800 text-sm">
                      <li><strong>تصميم الشبكة الاستراتيجي:</strong> وضع لوحات قابلة للتنفس بناءً على دراسات التصوير الحراري</li>
                      <li><strong>قنوات تدفق الهواء الحمل الحراري:</strong> مسارات مصممة تشجع على حركة الهواء</li>
                      <li><strong>تهوية نشطة بالحركة:</strong> هياكل تتمدد مع الحركة لزيادة تدفق الهواء</li>
                    </ul>
                  </div>
                </div>
                
                <h3 id="active-cooling">تقنيات التبريد النشط</h3>
                
                <p>
                  تستخدم أنظمة التبريد النشط مصادر طاقة أو آليات مشغلة لتوفير تأثيرات تبريد معززة:
                </p>
                
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 border-b border-r border-gray-200 text-right">التقنية</th>
                        <th className="px-4 py-2 border-b border-r border-gray-200 text-right">آلية العمل</th>
                        <th className="px-4 py-2 border-b border-gray-200 text-right">التطبيقات الصناعية</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">مواد تغيير الطور (PCM)</td>
                        <td className="px-4 py-2 border-b border-r border-gray-200">
                          مواد مغلفة دقيقة تمتص الحرارة أثناء عملية الانصهار
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                          عمليات البتروكيماويات، مراقبة عمليات التصنيع
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">ملحقات التبريد التبخيري</td>
                        <td className="px-4 py-2 border-b border-r border-gray-200">
                          هياكل بوليمر مشبعة مسبقًا تطلق الرطوبة على مدار 6-8 ساعات
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                          البناء، عمليات الصيانة الخارجية
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-b border-r border-gray-200 font-medium">أنظمة تبريد المناخ المصغر</td>
                        <td className="px-4 py-2 border-b border-r border-gray-200">
                          تدوير الهواء بالطاقة البطارية مع عناصر تبريد اختيارية
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                          عمليات الأماكن المغلقة، التعامل مع المواد الخطرة
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border-r border-gray-200 font-medium">شبكات البوليمر المستجيبة</td>
                        <td className="px-4 py-2 border-r border-gray-200">
                          مواد حساسة للحرارة توسع هيكل المسامات عند تسخينها
                        </td>
                        <td className="px-4 py-2 border-gray-200">
                          مراقبة العمليات، عمليات الصيانة في البيئات المتغيرة
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h2 id="case-studies">دراسات حالة تطبيقية</h2>
                
                <h3>دراسة حالة: منشأة معالجة البتروكيماويات في الجبيل</h3>
                
                <p>
                  نفذت شركة بتروكيماويات رائدة برنامجًا شاملاً لإدارة الإجهاد الحراري يتمحور حول ملابس عمل متطورة للتبريد:
                </p>
                
                <ul>
                  <li><strong>التحدي:</strong> الحفاظ على عمليات آمنة خلال أشهر الصيف عندما تصل درجات الحرارة المحيطة إلى 48 درجة مئوية</li>
                  <li><strong>الحل:</strong> نهج متعدد التقنيات يشمل أفرولات مدمجة بتقنية PCM للمناطق عالية الحرارة وملابس موحدة ذات تصميم تهوية متقدم للمناطق الأخرى</li>
                  <li><strong>التنفيذ:</strong> طرح تدريجي مع تدريب العمال على الاستخدام والعناية المناسبة</li>
                  <li><strong>النتائج:</strong> انخفاض بنسبة 67% في الحوادث المتعلقة بالحرارة، تحسن الإنتاجية بنسبة 22% خلال أشهر الصيف، ونسبة رضا العمال 93%</li>
                </ul>
                
                <div className="relative aspect-video w-full overflow-hidden rounded-lg my-6">
                  <Image
                    src="/images/industries/Factory_Industrial/cooling-coveralls-implementation.jpg"
                    alt="عمال يرتدون أفرولات تبريد في منشأة بتروكيماوية"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <h3>دراسة حالة: منشأة تصنيع في مدينة الرياض الصناعية</h3>
                
                <p>
                  واجهت عملية تصنيع دقيقة ذات معدات حساسة تحديات تبريد لم تستطع أنظمة تكييف الهواء التقليدية حلها:
                </p>
                
                <ul>
                  <li><strong>التحدي:</strong> توليد حرارة المعدات التي تخلق نقاط ساخنة موضعية رغم تبريد المنشأة</li>
                  <li><strong>الحل:</strong> صدريات تبريد مناخية مصغرة مع تدفق هواء موجه للعمال في المناطق عالية الحرارة</li>
                  <li><strong>التنفيذ:</strong> بنية تحتية لمحطة الشحن ونظام تناوب للتشغيل المستمر</li>
                  <li><strong>النتائج:</strong> الحفاظ على مستويات الإنتاجية طوال أشهر الصيف، القضاء على توقفات العمل المتعلقة بالحرارة، تقليل معدلات الخطأ بنسبة 34%</li>
                </ul>
                
                <h2 id="best-practices">أفضل ممارسات التطبيق</h2>
                
                <p>
                  تتطلب الإدارة الناجحة للإجهاد الحراري من خلال ملابس العمل المتطورة نهجًا منهجيًا:
                </p>
                
                <ol>
                  <li>
                    <strong>تقييم الخريطة الحرارية:</strong> إجراء تحليل حراري شامل للمنشأة لتحديد النقاط الساخنة والمناطق التي تتطلب حلولًا متخصصة
                  </li>
                  <li>
                    <strong>مطابقة التكنولوجيا:</strong> اختيار تقنيات التبريد المناسبة بناءً على:
                    <ul>
                      <li>كثافة نشاط العمل وتوليد الحرارة الأيضي</li>
                      <li>الظروف البيئية (داخلية/خارجية، درجة الحرارة المحيطة)</li>
                      <li>مدة التعرض وأنماط المناوبة</li>
                      <li>التوافق مع متطلبات السلامة (حماية مقاومة للحريق، الرؤية، إلخ)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>التكامل مع الأنظمة الحالية:</strong> ضمان تكميل ملابس التبريد لاستراتيجيات تخفيف الحرارة الموجودة
                  </li>
                  <li>
                    <strong>استراتيجية قبول المستخدم:</strong> إشراك العمال في عملية الاختيار وتوفير تدريب شامل
                  </li>
                  <li>
                    <strong>القياس والتحسين:</strong> تنفيذ مقاييس الأداء لتتبع الفعالية والاستفادة منها في التحسينات
                  </li>
                </ol>
                
                <div className="bg-amber-50 p-6 rounded-lg my-8 border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-3 flex items-center">
                    <FaUser className="ml-2" /> قائمة التحقق من التنفيذ
                  </h4>
                  <ul className="space-y-2 text-amber-800">
                    <li><strong>✓ التحقق من التوافق:</strong> ضمان عدم المساس بالحماية المطلوبة بسبب ميزات التبريد</li>
                    <li><strong>✓ تخطيط الخدمات اللوجستية:</strong> معالجة دورات الصيانة والتنظيف والاستبدال</li>
                    <li><strong>✓ تدريب المستخدم:</strong> إجراءات الاستخدام والتخزين والتنشيط المناسبة</li>
                    <li><strong>✓ البنية التحتية الداعمة:</strong> محطات الشحن أو منشطات التبريد أو بروتوكولات الاستبدال</li>
                    <li><strong>✓ نظام المراقبة:</strong> تتبع الأداء وتحديد فرص التحسين</li>
                  </ul>
                </div>
                
                <h2 id="conclusion">الخلاصة</h2>
                
                <p>
                  تمثل ملابس العمل المتطورة للتبريد تدخلاً حاسمًا في القطاع الصناعي السعودي، حيث غالبًا ما تكون النهج التقليدية لإدارة الإجهاد الحراري غير كافية لمواجهة تحديات المناخ القاسية في المنطقة. من خلال تنفيذ حلول ملابس مصممة استراتيجيًا تتضمن تقنيات التبريد السلبية والنشطة، يمكن للمؤسسات:
                </p>
                
                <ul>
                  <li>تقليل حوادث السلامة المتعلقة بالحرارة ومشاكل الصحة المهنية بشكل كبير</li>
                  <li>الحفاظ على مستويات الإنتاجية طوال فترات درجات الحرارة القصوى</li>
                  <li>تحسين راحة العمال ورضاهم والاحتفاظ بهم</li>
                  <li>تعزيز الامتثال لمتطلبات السلامة وإرشادات التعرض للحرارة</li>
                </ul>
                
                <p>
                  مع استمرار تكثيف أنماط المناخ، تدرك العمليات الصناعية السعودية ذات النظرة المستقبلية أن ملابس التبريد المتطورة ليست مجرد اعتبار للراحة ولكنها استثمار استراتيجي في المرونة التشغيلية، ورفاهية العمال، والإنتاجية المستدامة.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-12">
            <SectionHeading>حلول ملابس العمل المبردة</SectionHeading>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/industrial-coverall-pro.webp"
                    alt="أفرول صناعي احترافي مع تقنية التبريد"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    تقنية التبريد
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">أفرول صناعي احترافي مع تقنية التبريد</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    أفرول من الجيل القادم مع مناطق تبريد متكاملة وتقنية تبريد تعمل بالرطوبة.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">549 ريال سعودي</span>
                    <Link href="/ar/shop/industrial-uniforms/industrial-coverall-pro">
                      <Button>عرض التفاصيل</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/cooling-vest-system.webp"
                    alt="نظام سترة التبريد الصناعية"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    نظام المناخ المصغر
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">نظام سترة التبريد الصناعية</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    نظام تبريد يعمل بالبطارية مع تحكم في درجة الحرارة قابل للتعديل وقدرة تشغيل لمدة 8 ساعات.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">795 ريال سعودي</span>
                    <Link href="/ar/shop/industrial-uniforms/industrial-cooling-vest">
                      <Button>عرض التفاصيل</Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/industries/Factory_Industrial/phase-change-insert-kit.webp"
                    alt="مجموعة حشوات التبريد بتقنية تغيير الطور"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    تقنية PCM
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">مجموعة حشوات التبريد بتقنية تغيير الطور</h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    حشوات PCM قابلة لإعادة الشحن متوافقة مع جيوب الزي الموحد القياسية للتبريد المخصص.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">299 ريال سعودي</span>
                    <Link href="/ar/shop/industrial-uniforms/phase-change-cooling-kit">
                      <Button>عرض التفاصيل</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">هل أنت مستعد لتطبيق حلول الإجهاد الحراري؟</h3>
              <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
                يمكن لمتخصصي الصحة المهنية في يونيوم تطوير استراتيجية شاملة لإدارة الحرارة مصممة خصيصًا لمتطلبات منشأتك المحددة وظروفها البيئية.
              </p>
              <Link href="/ar/quote?product=cooling-workwear">
                <Button size="lg" className="px-8 bg-blue-600 hover:bg-blue-700">
                  طلب استشارة إدارة الحرارة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
} 