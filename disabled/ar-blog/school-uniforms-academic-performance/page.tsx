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

export default function SchoolUniformsAcademicPerformancePageArabic() {
  const locale = 'ar';
  const post = {
    title: 'أثر الزي المدرسي على الأداء الأكاديمي: رؤى من المملكة العربية السعودية',
    excerpt: 'دراسة أثر الزي المدرسي على الأداء الأكاديمي والانضباط في المؤسسات التعليمية بالمملكة العربية السعودية',
    author: 'د. نورة الشمري',
    date: '٣ مارس ٢٠٢٣',
    readTime: '٧ دقائق',
    featuredImage: '/images/blog/school-uniform-academic-performance.webp',
    content: `
      لطالما كان موضوع الزي المدرسي محل نقاش مستمر في الأوساط التربوية حول العالم. في المملكة العربية السعودية، تولي المؤسسات التعليمية اهتماماً كبيراً بالزي المدرسي، ليس فقط كعنصر من عناصر الهوية المؤسسية، بل أيضاً كعامل مؤثر في الأداء الأكاديمي والسلوكي للطلاب.
      
      تشير الدراسات الحديثة التي أجريت في عدد من المدارس السعودية إلى وجود علاقة إيجابية بين الالتزام بالزي المدرسي الموحد والتحصيل الدراسي. هذه النتائج تعزز الاتجاه المتزايد نحو الاهتمام بجودة وتصميم الزي المدرسي كجزء من استراتيجية تحسين البيئة التعليمية.
    `
  };

  // Function to handle contact button click
  const handleContactClick = () => {
    const message = `مرحباً، أرغب في معرفة المزيد عن تأثير الزي المدرسي على الأداء الأكاديمي والخيارات المتاحة لمؤسستنا التعليمية.`;
    const whatsappUrl = generateGeneralWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  // Schema data for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': post.title,
    'image': `https://uneom.com${post.featuredImage}`,
    'datePublished': '2023-03-03T08:00:00+03:00',
    'dateModified': '2023-03-03T08:00:00+03:00',
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'يونيوم',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://uneom.com/logo.png'
      }
    },
    'description': post.excerpt
  };

  return (
    <>
      {/* Add schema markup for SEO */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <script type="application/ld+json">
            ${JSON.stringify(schemaData)}
          </script>
        `
      }} />

      {/* Breadcrumbs and navigation */}
      <div className="bg-neutral-50 py-8">
        <Container>
          <Breadcrumbs
            items={[
              { label: 'الرئيسية', href: '/ar' },
              { label: 'المدونة', href: '/ar/blog' },
              { label: post.title, href: '#' },
            ]}
            className="mb-6"
          />
        </Container>
      </div>

      <article className="py-12">
        <Container>
          {/* Article Header */}
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-neutral-600 mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>وقت القراءة: {post.readTime}</span>
            </div>
            <div className="relative aspect-[21/9] max-w-4xl mx-auto rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg rtl:prose-headings:text-right rtl:prose-p:text-right">
            <p className="lead">
              {post.excerpt}
            </p>
            
            <h2>الزي المدرسي والانضباط</h2>
            <p>
              يمثل الزي المدرسي أحد أهم عناصر الانضباط داخل البيئة التعليمية. في دراسة أجريت على 15 مدرسة في مختلف مناطق المملكة العربية السعودية، وجد أن المدارس التي تطبق سياسات صارمة بشأن الزي المدرسي تشهد معدلات أقل من المشكلات السلوكية مقارنة بالمدارس التي تتساهل في هذا الجانب.
            </p>
            <p>
              يساهم الالتزام بالزي المدرسي في خلق بيئة منظمة تقلل من التشتت وتعزز التركيز على العملية التعليمية. كما أنه يحد من المقارنات الاجتماعية المرتبطة بالملابس، مما يقلل من الضغوط النفسية على الطلاب ويتيح لهم التركيز على التحصيل الدراسي.
            </p>
            
            <h2>تعزيز الهوية والانتماء</h2>
            <p>
              يلعب الزي المدرسي دوراً محورياً في تعزيز الشعور بالانتماء للمؤسسة التعليمية. أظهرت استطلاعات الرأي التي أجريت على طلاب المرحلة الثانوية في المملكة أن 78% منهم يشعرون بفخر عند ارتداء زي مدرستهم، خاصة عندما يكون مصمماً بشكل أنيق ومريح.
            </p>
            <p>
              هذا الشعور بالانتماء ينعكس إيجاباً على الأداء الأكاديمي، حيث يزيد من دافعية الطلاب للتفوق وتمثيل مدارسهم بأفضل صورة ممكنة. كما يعزز الزي المدرسي الموحد روح الفريق والتعاون بين الطلاب، مما يحسن من جودة البيئة التعليمية.
            </p>
            
            <h2>جودة الزي المدرسي وتأثيرها</h2>
            <p>
              لا يقتصر تأثير الزي المدرسي على مجرد وجوده، بل تلعب جودته وتصميمه دوراً بالغ الأهمية. أظهرت الدراسات أن الطلاب الذين يرتدون أزياء مدرسية مصنوعة من خامات عالية الجودة ومريحة يظهرون مستويات أعلى من الرضا والتركيز مقارنة بأولئك الذين يرتدون أزياء ذات جودة منخفضة.
            </p>
            <p>
              تستثمر العديد من المدارس الرائدة في المملكة في تصميم أزياء مدرسية تجمع بين الأناقة والراحة، مع مراعاة خصوصية المناخ المحلي. هذا الاستثمار يعود بنتائج إيجابية على الطلاب من حيث زيادة الثقة بالنفس والشعور بالراحة أثناء اليوم الدراسي، مما ينعكس على أدائهم الأكاديمي.
            </p>
            
            <h2>توصيات للمؤسسات التعليمية</h2>
            <p>
              بناءً على النتائج المستخلصة من الدراسات المحلية والعالمية، نقدم التوصيات التالية للمؤسسات التعليمية في المملكة العربية السعودية:
            </p>
            <ol>
              <li>الاستثمار في تصميم أزياء مدرسية عالية الجودة تناسب البيئة المدرسية والمناخ المحلي.</li>
              <li>إشراك الطلاب في عملية اختيار تصميم الزي المدرسي لتعزيز شعورهم بالانتماء.</li>
              <li>تطبيق سياسات واضحة ومتسقة بشأن الالتزام بالزي المدرسي.</li>
              <li>تجديد تصميم الزي المدرسي بشكل دوري مع الحفاظ على هوية المؤسسة التعليمية.</li>
              <li>توفير خيارات متعددة من الزي المدرسي تتناسب مع مختلف الأنشطة والفصول الدراسية.</li>
            </ol>
            
            <h2>الخلاصة</h2>
            <p>
              يمثل الزي المدرسي أكثر من مجرد ملابس موحدة في المؤسسات التعليمية السعودية. إنه عنصر محوري في بناء بيئة تعليمية منضبطة ومحفزة تساهم في تحسين الأداء الأكاديمي للطلاب. الاستثمار في تصميم وجودة الزي المدرسي هو استثمار في مستقبل العملية التعليمية ككل.
            </p>
            <p>
              مع تطور قطاع التعليم في المملكة ضمن رؤية 2030، تبرز أهمية إعادة تقييم دور الزي المدرسي كأحد عناصر تطوير البيئة التعليمية. المؤسسات التعليمية التي تدرك هذه الأهمية وتعمل على تحسين جودة الزي المدرسي ستحصد ثمار ذلك في شكل أداء أكاديمي متميز وبيئة تعليمية أكثر إيجابية.
            </p>
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto mt-16 p-8 bg-primary-50 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">هل تبحث عن حلول أزياء مدرسية عالية الجودة لمؤسستك التعليمية؟</h3>
            <p className="text-primary-700 mb-6">
              نحن في يونيوم نقدم مجموعة متكاملة من الأزياء المدرسية المصممة وفق أعلى معايير الجودة لتعزيز الأداء الأكاديمي والانتماء المؤسسي.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              className="flex items-center justify-center gap-2 mx-auto"
              onClick={handleContactClick}
            >
              <FaWhatsapp /> تواصل معنا عبر الواتساب
            </Button>
          </div>

          {/* Related Posts Section would go here */}
        </Container>
      </article>
    </>
  );
} 