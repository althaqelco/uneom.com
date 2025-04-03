import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa';

// Local data for the Arabic blog post
const post = {
  title: 'دليل الامتثال للسلامة الصناعية',
  slug: 'industrial-safety-compliance-guide',
  date: '15 مايو 2023',
  author: {
    name: 'أحمد سالم',
    title: 'مدير السلامة والامتثال',
    avatar: '/images/team/ahmed-salem.jpg'
  },
  excerpt: 'إرشادات شاملة للامتثال لمعايير السلامة الصناعية مع فهم للمتطلبات التنظيمية وأفضل الممارسات.',
  featuredImage: '/images/blog/industrial-safety-compliance-guide.jpg',
  tags: ['السلامة الصناعية', 'الامتثال', 'معدات الحماية الشخصية', 'ملابس السلامة'],
  content: `
    <h2>مقدمة في السلامة الصناعية</h2>
    <p>
      في ظل التحديات المتزايدة في البيئات الصناعية، أصبح الامتثال لمعايير السلامة أمرًا حيويًا لضمان سلامة العاملين وكفاءة العمليات التشغيلية. يهدف هذا الدليل إلى تقديم نظرة شاملة عن متطلبات الامتثال للسلامة الصناعية، مع التركيز على الممارسات الفضلى في قطاع الصناعة.
    </p>

    <h2>أهمية ملابس السلامة المناسبة</h2>
    <p>
      تعتبر ملابس السلامة المناسبة خط الدفاع الأول ضد المخاطر الصناعية. توفر يونيوم مجموعة متكاملة من الملابس المصممة خصيصًا للبيئات الصناعية، والتي تلبي جميع معايير السلامة الدولية والمحلية. تشمل هذه الملابس:
    </p>
    
    <ul>
      <li>بدلات مقاومة للحريق للعاملين في بيئات عالية الخطورة</li>
      <li>ملابس عاكسة للضوء للعمل في ظروف الرؤية المنخفضة</li>
      <li>قفازات وأحذية السلامة المقاومة للانزلاق والثقب</li>
      <li>خوذات ونظارات واقية مصممة وفق أحدث التقنيات</li>
    </ul>
    
    <h2>المعايير التنظيمية للسلامة الصناعية</h2>
    <p>
      يجب على المؤسسات الصناعية الالتزام بمجموعة من المعايير التنظيمية لضمان بيئة عمل آمنة. تختلف هذه المعايير حسب القطاع والمنطقة الجغرافية، لكنها تشترك في الهدف الأساسي وهو حماية العاملين. من أهم هذه المعايير:
    </p>
    
    <ul>
      <li>معايير الهيئة السعودية للمواصفات والمقاييس والجودة</li>
      <li>معايير إدارة السلامة والصحة المهنية (OSHA)</li>
      <li>المعايير الأوروبية للسلامة الصناعية (EN Standards)</li>
      <li>معايير الجمعية الأمريكية للاختبار والمواد (ASTM)</li>
    </ul>
    
    <h2>خطوات تطبيق برنامج امتثال فعال</h2>
    <p>
      لتطبيق برنامج امتثال فعال للسلامة الصناعية، يجب اتباع الخطوات التالية:
    </p>
    
    <ol>
      <li>
        <strong>إجراء تقييم شامل للمخاطر:</strong> تحديد جميع المخاطر المحتملة في بيئة العمل وتصنيفها حسب درجة الخطورة.
      </li>
      <li>
        <strong>وضع سياسات وإجراءات واضحة:</strong> تطوير سياسات تفصيلية للسلامة تغطي جميع جوانب العمليات الصناعية.
      </li>
      <li>
        <strong>توفير التدريب المناسب:</strong> تدريب جميع العاملين على إجراءات السلامة واستخدام معدات الوقاية الشخصية.
      </li>
      <li>
        <strong>المراقبة المستمرة والتحسين:</strong> إجراء عمليات تفتيش دورية وتحليل البيانات لتحديد مجالات التحسين.
      </li>
      <li>
        <strong>توثيق جميع الإجراءات:</strong> الاحتفاظ بسجلات دقيقة لجميع أنشطة السلامة والحوادث والإجراءات التصحيحية.
      </li>
    </ol>
    
    <h2>دور يونيوم في تعزيز السلامة الصناعية</h2>
    <p>
      تلتزم يونيوم بتوفير حلول متكاملة للملابس الصناعية التي تلبي أعلى معايير السلامة. من خلال فريق من الخبراء المتخصصين، نقدم:
    </p>
    
    <ul>
      <li>استشارات متخصصة في اختيار ملابس السلامة المناسبة لكل بيئة عمل</li>
      <li>تصميم وتصنيع ملابس مخصصة تلبي المتطلبات الخاصة لكل قطاع</li>
      <li>برامج تدريبية للعاملين حول الاستخدام الصحيح لمعدات السلامة الشخصية</li>
      <li>خدمات فحص واختبار دورية لضمان فعالية ملابس السلامة</li>
    </ul>
    
    <h2>خاتمة</h2>
    <p>
      يعتبر الامتثال لمعايير السلامة الصناعية استثمارًا استراتيجيًا يحمي أهم أصول المؤسسة - موظفيها. من خلال اتباع الإرشادات الواردة في هذا الدليل واختيار شركاء موثوقين مثل يونيوم، يمكن للمؤسسات الصناعية تحقيق أعلى مستويات السلامة والامتثال.
    </p>
    
    <p>
      لمزيد من المعلومات حول حلول ملابس السلامة الصناعية من يونيوم، يرجى التواصل مع فريق خبرائنا على <a href="mailto:safety@uneom.com">safety@uneom.com</a> أو زيارة صفحة <a href="/ar/industries/manufacturing">حلول القطاع الصناعي</a>.
    </p>
  `
};

// Force this to be a static page
export const dynamic = 'force-static';

export default function BlogPostPage() {
  return (
    <div dir="rtl" lang="ar">
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="mb-8 text-right">
            <nav className="flex justify-end text-sm mb-6">
              <ol className="flex items-center space-x-2 space-x-reverse">
                <li>
                  <Link href="/ar" className="hover:text-primary-600 transition-colors">الرئيسية</Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <Link href="/ar/blog" className="hover:text-primary-600 transition-colors">المدونة</Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-2 text-neutral-400">/</span>
                  <span className="text-primary-600">{post.title}</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap justify-end gap-6 text-neutral-600 mb-6">
              <div className="flex items-center gap-2">
                <span>{post.date}</span>
                <FaCalendar />
              </div>
              <div className="flex items-center gap-2">
                <span>{typeof post.author === 'object' ? post.author.name : post.author}</span>
                <FaUser />
              </div>
            </div>
            
            <div className="relative rounded-xl overflow-hidden h-72 md:h-96 w-full shadow-lg">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 order-2 md:order-1">
              <div className="bg-white rounded-lg shadow-sm p-6 md:p-10 border border-neutral-100">
                <article className="prose prose-lg max-w-none text-right rtl prose-headings:text-right prose-p:text-right prose-ul:text-right prose-ol:text-right">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
                
                {/* Tags Bottom */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-6 border-t border-neutral-200">
                    <div className="flex flex-wrap gap-2 justify-end items-center">
                      <span className="font-bold ml-2">الوسوم:</span>
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:col-span-1 order-1 md:order-2">
              <div className="space-y-6 sticky top-8">
                {/* Author Box */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">كاتب المقال</h3>
                  <div className="flex items-center justify-end">
                    {typeof post.author === 'object' && post.author.avatar && (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary-100">
                        <Image
                          src={post.author.avatar}
                          alt={typeof post.author === 'object' ? post.author.name : 'المؤلف'}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="ml-4">
                      <h4 className="font-bold text-lg">
                        {typeof post.author === 'object' ? post.author.name : post.author}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {typeof post.author === 'object' && post.author.title ? post.author.title : 'كاتب متخصص في يونيوم'}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Categories */}
                {post.tags && post.tags.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                    <h3 className="font-bold text-lg mb-4 border-r-4 border-primary-600 pr-3">التصنيفات</h3>
                    <div className="flex flex-wrap gap-2 justify-end">
                      {post.tags.map((tag: string) => (
                        <Link
                          key={tag}
                          href={`/ar/blog/tag/${encodeURIComponent(tag)}`}
                          className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Call to Action */}
                <div className="bg-primary-50 rounded-lg shadow-sm p-6 border border-primary-100">
                  <h3 className="font-bold text-lg mb-4 text-primary-700 border-r-4 border-primary-600 pr-3">استشارة مجانية</h3>
                  <p className="mb-4 text-right">هل تحتاج إلى مساعدة في اختيار ملابس السلامة المناسبة لفريقك؟</p>
                  <Link 
                    href="/ar/quote" 
                    className="block text-center bg-primary-600 hover:bg-primary-700 text-white rounded py-3 px-4 w-full transition duration-300"
                  >
                    احصل على استشارة مجانية
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 