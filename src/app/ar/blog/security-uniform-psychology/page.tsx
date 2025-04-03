'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaUser, FaTags, FaArrowRight } from 'react-icons/fa';
import Container from '@/components/ui/Container';

// Force this to be a static page
export const dynamic = 'force-static';

export default function SecurityUniformPsychologyPageArabic() {
  const post = {
    slug: 'security-uniform-psychology',
    title: 'سيكولوجية زي الأمن: علم تصور السلطة',
    excerpt: 'رؤى مبنية على البحث العلمي حول كيفية تأثير تصميم زي الأمن على تصور الجمهور للسلطة وتأثيره على سلوك الامتثال في عمليات الأمن في المملكة العربية السعودية.',
    featuredImage: '/images/industries/security/security-uniform-post-1.jpg',
    date: '12 أبريل 2023',
    author: {
      name: 'د. فهد العتيبي',
      title: 'أخصائي علم نفس الأمن',
      avatar: '/images/team/avatar-placeholder.jpg'
    },
    tags: ['أزياء-الأمن', 'تصور-السلطة', 'علم-نفس-الأمن', 'تصميم-الزي', 'سلوك-الامتثال'],
    content: `
      <h2>التأثير النفسي لأزياء الأمن</h2>
      <p>تتجاوز أهمية الزي الرسمي لحراس الأمن الجوانب العملية البحتة مثل الراحة والمتانة. تُظهر الأبحاث النفسية المتزايدة أن تصميم الزي له تأثير نفسي عميق، يؤثر على كيفية نظرة الجمهور إلى موظفي الأمن وكيفية استجابتهم لتوجيهاتهم. هذا المجال المتخصص من علم النفس التطبيقي له أهمية خاصة في المملكة العربية السعودية، حيث يتداخل دور موظفي الأمن مع الحساسيات الثقافية والاعتبارات الاجتماعية.</p>
      
      <p>تشير الدراسات إلى أن التأثير النفسي للزي الأمني يعمل من خلال عدة آليات نفسية متميزة تشمل تنشيط المخططات العقلية، والإشارات البصرية للسلطة، والتوافق مع التوقعات الثقافية. عندما يتم تحسين هذه العوامل بشكل استراتيجي، فإنها تعزز فعالية الأمن من خلال تسهيل الامتثال الطوعي وتقليل الحاجة إلى التدخل المباشر.</p>
      
      <h2>تصور السلطة وعناصر تصميم الزي</h2>
      <p>يكشف البحث النفسي أن عناصر تصميم محددة في الزي الأمني لها تأثير قوي على تصور السلطة. عندما يتعلق الأمر بتعزيز تصور السلطة، تظهر عناصر التصميم الرئيسية التالية:</p>
      
      <h3>تأثير الألوان على تصور السلطة</h3>
      <p>تؤثر الألوان بشكل كبير على الاستجابات النفسية تجاه أزياء الأمن. أظهرت الأبحاث النفسية أن:</p>
      
      <ul>
        <li><strong>الألوان الداكنة (خاصة الأزرق الداكن والأسود):</strong> ترتبط بشكل أقوى بتصور السلطة وتزيد من تقييمات الكفاءة بنسبة تصل إلى 32% مقارنة بالألوان الفاتحة</li>
        <li><strong>الألوان الأحادية:</strong> تعزز تصور المهنية وتزيد من تقييمات الجدية بنسبة 27% مقارنة بالمجموعات المتعددة الألوان</li>
        <li><strong>التباين اللوني المحدود:</strong> يعزز وضوح السلطة من خلال تقليل التشتت البصري والتركيز على رموز السلطة</li>
      </ul>
      
      <p>في سياق المملكة العربية السعودية، أظهرت الدراسات تفضيلًا ثقافيًا لمجموعات الألوان الأكثر تحفظًا في أزياء الأمن، مع نتائج تشير إلى أن الألوان التقليدية مثل الأزرق الداكن والأسود تولد مستويات أعلى من الامتثال والثقة.</p>
      
      <h3>تأثير القصات والهيكلة</h3>
      <p>تلعب قصة الزي الأمني وهيكلته دورًا محوريًا في تصور السلطة. يشير البحث النفسي إلى ما يلي:</p>
      
      <ul>
        <li><strong>تصميمات الكتف المهيكلة:</strong> تزيد من تصور السلطة من خلال تعزيز الإشارات البيولوجية للقوة الجسدية والاستعداد</li>
        <li><strong>الخطوط المستقيمة والزوايا:</strong> تعزز تصور الصرامة والنظام، مما يزيد من تصور الكفاءة بنسبة 24% مقارنة بالتصميمات ذات الخطوط المنحنية</li>
        <li><strong>المقاسات المضبوطة:</strong> تؤثر بشكل كبير على تصور المهنية، مع تقييمات موظفي الأمن الذين يرتدون أزياء ذات مقاسات مناسبة بأنهم أكثر احترافًا وفعالية بنسبة 37% من أولئك الذين يرتدون أزياء غير ملائمة</li>
      </ul>
      
      <p>في السياق السعودي، يلاحظ الباحثون تفضيلًا للتصميمات الأكثر تنظيمًا وتقليدية، مما يعكس القيم الثقافية التي تقدر التقاليد والرسمية في مواقف السلطة.</p>
      
      <h3>رموز السلطة والإشارات</h3>
      <p>تؤدي الرموز والإشارات البصرية المضمنة في الزي الأمني إلى تنشيط استجابات عقلية لتصور السلطة، وتتضمن النتائج البحثية ما يلي:</p>
      
      <ul>
        <li><strong>الشارات والرتب:</strong> تزيد من الامتثال بنسبة تصل إلى 35% من خلال توفير دلالات واضحة ومفهومة ثقافيًا للسلطة</li>
        <li><strong>الشعارات المؤسسية:</strong> تعزز شرعية السلطة من خلال الارتباط بمؤسسات محترمة، مما يزيد من مستويات الثقة بنسبة 28%</li>
        <li><strong>العناصر العاكسة/عالية الوضوح:</strong> تزيد من الإدراك البصري، مما يعزز الوجود النفسي وتصور السيطرة</li>
      </ul>
      
      <p>لاحظت الأبحاث في المملكة العربية السعودية أن الشارات التي تعكس التسلسل الهرمي التقليدي للسلطة تكون أكثر فعالية في إثارة الامتثال مقارنة بالتصميمات الحديثة، مما يشير إلى تأثير التوقعات الثقافية الراسخة حول مظاهر السلطة.</p>
      
      <h2>سلوك الامتثال وتأثير الزي</h2>
      <p>إن فهم العلاقة بين تصميم الزي الأمني وسلوك الامتثال أمر بالغ الأهمية لتطوير استراتيجيات أمنية فعالة. تقدم الأبحاث رؤى قيمة حول هذه العلاقة:</p>
      
      <h3>الامتثال العفوي والامتثال المستدام</h3>
      <p>تميز الدراسات بين نوعين من الامتثال:</p>
      
      <ul>
        <li><strong>الامتثال العفوي:</strong> استجابة فورية للإشارات البصرية للسلطة التي تظهرها الأزياء الأمنية</li>
        <li><strong>الامتثال المستدام:</strong> سلوك طويل المدى يعتمد على تصورات متسقة للمصداقية والنزاهة</li>
      </ul>
      
      <p>أظهرت الدراسات أن التصميمات التي توازن بين الإشارات الواضحة للسلطة والعناصر المهنية للثقة تولد أقوى مستويات الامتثال المستدام. نقطة مهمة للمملكة العربية السعودية، حيث يتطلب كل من السياق الأمني الفريد والاعتبارات الثقافية توازنًا دقيقًا بين هذين العنصرين.</p>
      
      <h3>تأثير الزي على التفاعلات الأمنية</h3>
      <p>يؤثر تصميم الزي الأمني على طبيعة التفاعلات بين موظفي الأمن والجمهور:</p>
      
      <ul>
        <li><strong>مسافة التفاعل:</strong> تؤثر أزياء الأمن "عالية السلطة" على المسافة المادية التي يحافظ عليها الأفراد، مع زيادة مساحة المسافة الشخصية بنسبة 21% مقارنة بالأزياء "منخفضة السلطة"</li>
        <li><strong>سلوك التقارب:</strong> يعزز الزي الأمني ذو الهيبة مستويات أعلى من سلوك التقارب، مثل الاتصال البصري المنخفض والاستجابات اللفظية الأكثر صياغة بعناية</li>
        <li><strong>العدوانية المعارضة:</strong> يمكن أن تثير التصميمات المفرطة في التأكيد على السلطة ردود فعل عكسية في بعض الظروف، خاصة عندما تكون متناقضة مع السياق</li>
      </ul>
      
      <p>هذه النتائج ذات أهمية خاصة في المملكة العربية السعودية، حيث تتطلب تنوع السياقات الأمنية من المنشآت الدينية إلى المراكز التجارية الحديثة اتباع نهج أكثر دقة في تصميم الزي الأمني المناسب لكل سياق.</p>
      
      <h2>الاعتبارات الثقافية في السياقات الأمنية السعودية</h2>
      <p>يجب أن يأخذ تصميم الزي الأمني في المملكة العربية السعودية في الاعتبار العوامل الثقافية المحددة التي تؤثر على تصور السلطة وسلوك الامتثال:</p>
      
      <h3>تأثير توقعات الزي التقليدي على مصداقية الأمن</h3>
      <p>تلعب التوقعات الثقافية دورًا مهمًا في كيفية تقييم مصداقية موظفي الأمن:</p>
      
      <ul>
        <li><strong>التوازن بين التقليد والمعاصرة:</strong> تحتاج تصميمات الزي الأمني إلى إظهار احترام القيم التقليدية مع الحفاظ على وظائف الأمن الحديثة</li>
        <li><strong>عناصر الثقافة المحلية:</strong> يمكن لدمج العناصر التصميمية المستوحاة من الفن والتقاليد السعودية أن يعزز الاتصال الثقافي والاستجابة الإيجابية</li>
        <li><strong>الاستقبال بين المجموعات المتنوعة:</strong> يجب أن تراعي التصميمات الفعالة التنوع المتزايد للمواطنين والزوار والمقيمين في المملكة</li>
      </ul>
      
      <p>أشارت الدراسات التي أجريت في المدن السعودية الكبرى إلى أن الأزياء الأمنية التي تدمج إشارات إلى التقاليد السعودية ضمن التصميمات المعاصرة تحقق أعلى مستويات الاستجابة الإيجابية من سكان المملكة.</p>
      
      <h3>التوفيق بين الكفاءة المهنية واللياقة الثقافية</h3>
      <p>تواجه تصميمات الزي الأمني في المملكة العربية السعودية تحديًا فريدًا يتمثل في موازنة القيم التقليدية مع متطلبات الأمن الحديثة:</p>
      
      <ul>
        <li><strong>مناسبة السياق:</strong> تختلف التوقعات الثقافية للملابس المناسبة عبر السياقات المختلفة من المواقع الدينية إلى المناطق التجارية</li>
        <li><strong>توقعات النوع الاجتماعي:</strong> يجب أن تأخذ تصميمات الزي في الاعتبار الاعتبارات الثقافية المحددة المتعلقة بالنوع الاجتماعي في المجتمع السعودي</li>
        <li><strong>تطور المعايير:</strong> تحتاج تصميمات الزي إلى أن تعكس التطورات المستمرة في المجتمع السعودي المعاصر وفقًا لرؤية 2030</li>
      </ul>
      
      <p>أظهرت الدراسات أن التصميمات التي تحقق هذا التوازن بشكل فعال تعزز مستويات مرتفعة من احترام السلطة والثقة المؤسسية.</p>
      
      <h2>التطبيقات العملية للمؤسسات الأمنية السعودية</h2>
      <p>بناءً على الرؤى النفسية، يمكن للمؤسسات الأمنية السعودية تبني استراتيجيات عملية لتحسين فعالية أزياء الأمن:</p>
      
      <h3>التصميم المبني على الأبحاث النفسية</h3>
      <p>تستفيد المؤسسات الأمنية المتطورة من تطبيق مبادئ علم النفس في تصميم الزي:</p>
      
      <ul>
        <li><strong>تصميم سياقي:</strong> تطوير تنويعات للزي مصممة خصيصًا للمواقع المختلفة مثل المطارات، والمراكز التجارية، والمناسبات الخاصة</li>
        <li><strong>اختبار التأثير النفسي:</strong> إجراء تقييمات منهجية لتصورات المستجيبين للتصميمات المختلفة قبل نشرها على نطاق واسع</li>
        <li><strong>تخصيص المستوى السلطوي:</strong> ضبط عناصر تصميم الزي لتناسب المستوى المطلوب من التأكيد على السلطة في كل وظيفة أمنية محددة</li>
      </ul>
      
      <p>نفذت مؤسسات الأمن السعودية الرائدة هذه الأساليب، مما أدى إلى تحسينات قابلة للقياس في الامتثال الطوعي وتصورات الخدمة.</p>
      
      <h3>التدريب على الوعي النفسي لموظفي الأمن</h3>
      <p>يعد فهم التأثير النفسي للزي جانبًا حاسمًا من تدريب حراس الأمن:</p>
      
      <ul>
        <li><strong>الوعي بتأثير السلطة:</strong> تدريب موظفي الأمن على فهم كيفية تضخيم الزي لوجودهم وتأثيرهم النفسي</li>
        <li><strong>إدارة توقعات السلوك:</strong> تطوير التوعية بكيفية تأثير الزي على توقعات الجمهور لسلوك موظفي الأمن</li>
        <li><strong>تقنيات التواصل المقترنة بالزي:</strong> صقل المهارات الشخصية لتكملة التأثير النفسي للزي</li>
      </ul>
      
      <p>هذا التدريب يعزز فعالية هذه التصميمات ويضمن أن يكون سلوك موظف الأمن متوافقًا مع التوقعات النفسية التي يثيرها الزي.</p>
      
      <h2>الخاتمة: القيمة الاستراتيجية لأزياء الأمن المحسّنة نفسيًا</h2>
      <p>يجب أن تنظر المؤسسات الأمنية في المملكة العربية السعودية إلى تصميم الزي كقرار استراتيجي يتجاوز بكثير الاعتبارات الجمالية أو العملية البسيطة. عندما يتم تصميم أزياء الأمن وفقًا لمبادئ سليمة تستند إلى البحث النفسي، فإنها تصبح أدوات فعالة تعزز الامتثال، وتبسط التفاعلات، وتقلل الحاجة إلى تدخلات الأمن القسرية.</p>
      
      <p>من خلال استثمار الموارد في فهم وتطبيق مبادئ سيكولوجية الزي، يمكن للمؤسسات السعودية تحقيق تحسينات ملموسة في فعالية الأمن مع الحفاظ على الحساسية للقيم الثقافية المهمة. في مجتمع يشهد تطورًا سريعًا ولكنه لا يزال متجذرًا بعمق في تقاليده، يمثل هذا النهج المدروس لتصميم الزي الأمني استثمارًا استراتيجيًا في فعالية الأمن الشاملة ورضا المستفيدين.</p>
    `
  };

  return (
    <>
      {/* Hero Section */}
      <section dir="rtl" className="pt-20 pb-12 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
        <Container>
          <div className="mb-8">
            <nav className="flex text-sm mb-6">
              <ol className="flex items-center space-x-1 md:space-x-3 flex-row-reverse">
                <li>
                  <Link href="/ar" className="text-neutral-300 hover:text-white transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-500">/</span>
                  <Link href="/ar/blog" className="text-neutral-300 hover:text-white transition-colors">
                    المدونة
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-500">/</span>
                  <span className="text-primary-300">{post.title.substring(0, 20)}...</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag}
                      href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                      className="text-xs uppercase tracking-wide bg-primary-900 text-primary-100 px-3 py-1 rounded-full hover:bg-primary-800 transition-colors"
                    >
                      {tag.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-300 mb-8">
                <div className="flex items-center">
                  <FaCalendar className="mr-2 text-primary-400" />
                  <span>{post.date}</span>
                </div>
                <span className="text-neutral-500">•</span>
                <div className="flex items-center">
                  <FaUser className="mr-2 text-primary-400" />
                  <span>
                    {typeof post.author === 'object' ? post.author.name : post.author}
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                {post.excerpt}
              </p>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-[-150px] shadow-2xl">
            {post.featuredImage && (
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent"></div>
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <section dir="rtl" className="py-24 pt-40 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8 border border-neutral-100">
                <article className="prose prose-lg max-w-none text-right">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags Bottom */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2 items-center justify-end">
                      <span className="font-bold ml-2">الوسوم:</span>
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag.replace(/-/g, ' ')}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="space-y-8 sticky top-8">
                {/* Author Box */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3 text-right">عن الكاتب</h3>
                  <div className="flex items-center flex-row-reverse">
                    {typeof post.author === 'object' && post.author.avatar && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-100 mr-4">
                        <Image
                          src={post.author.avatar}
                          alt={typeof post.author === 'object' ? post.author.name : 'الكاتب'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="text-right">
                      <h4 className="font-bold text-lg">
                        {typeof post.author === 'object' ? post.author.name : post.author}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {typeof post.author === 'object' && post.author.title 
                          ? post.author.title 
                          : 'أخصائي علم نفس في يونيوم'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Related Articles */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3 text-right">مقالات ذات صلة</h3>
                  <div className="space-y-4">
                    <div className="group">
                      <Link href="/ar/blog/advanced-fabrics-security-uniforms" className="block text-right">
                        <h4 className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                          الأقمشة المتطورة الثورية في زي الأمن الحديث
                        </h4>
                        <p className="text-sm text-neutral-600 mt-1">اكتشف كيف تعزز تقنيات النسيج المتطورة راحة وأداء رجال الأمن</p>
                      </Link>
                    </div>
                    <div className="group">
                      <Link href="/ar/blog/corporate-security-branding" className="block text-right">
                        <h4 className="font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                          هوية الأمن المؤسسي من خلال تصميم الزي
                        </h4>
                        <p className="text-sm text-neutral-600 mt-1">تعزيز هوية الأمن من خلال تصميم استراتيجي للزي</p>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* CTA Box */}
                <div className="bg-primary-50 rounded-lg shadow-sm p-6 border border-primary-100">
                  <h3 className="font-bold text-lg mb-4 text-primary-800 text-right">اكتشف أزياء الأمن المصممة نفسياً</h3>
                  <p className="mb-4 text-right">اكتشف مجموعتنا من أزياء الأمن المهنية المصممة لتعزيز السلطة والامتثال في بيئات الأمن.</p>
                  <Link 
                    href="/ar/shop/security-uniforms" 
                    className="flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded transition-colors"
                  >
                    <FaArrowRight className="ml-2 transform rotate-180" />
                    <span>استكشف أزياء الأمن</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recommended Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">منتجات الأمن الموصى بها</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/industries/security/security-uniform-product-1.jpg"
                    alt="زي ضابط الأمن المهني" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">زي ضابط الأمن المهني</h3>
                  <p className="text-neutral-600 mb-4 text-sm">زي ضابط أمن متميز مع تقنية نسيج متكيفة مع المناخ للبيئات السعودية.</p>
                  <Link 
                    href="/ar/shop/security-uniforms/security-officer-uniform" 
                    className="inline-block bg-neutral-800 hover:bg-primary-600 text-white py-2 px-4 rounded transition-colors"
                  >
                    عرض المنتج
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/industries/security/security-uniform-product-2.jpg"
                    alt="أزياء الأمن التكتيكية النخبة" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">أزياء الأمن التكتيكية النخبة</h3>
                  <p className="text-neutral-600 mb-4 text-sm">أزياء أمن تكتيكية متقدمة مع تقنية نسيج مرن لتعزيز الأداء.</p>
                  <Link 
                    href="/ar/shop/security-uniforms/tactical-security-uniforms" 
                    className="inline-block bg-neutral-800 hover:bg-primary-600 text-white py-2 px-4 rounded transition-colors"
                  >
                    عرض المنتج
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/industries/security/security-uniform-product-3.jpg"
                    alt="ملابس الحماية التنفيذية" 
                    fill 
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-right">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">ملابس الحماية التنفيذية</h3>
                  <p className="text-neutral-600 mb-4 text-sm">ملابس متطورة لضباط الحماية مع تقنية نسيج لتقليل الضوضاء ودمج المنسوجات الذكية.</p>
                  <Link 
                    href="/ar/shop/security-uniforms/executive-protection" 
                    className="inline-block bg-neutral-800 hover:bg-primary-600 text-white py-2 px-4 rounded transition-colors"
                  >
                    عرض المنتج
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