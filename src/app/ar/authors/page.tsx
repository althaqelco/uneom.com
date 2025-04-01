import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { metadata } from './metadata';

// Sample authors data - in production would be fetched from an API or CMS
const authors = [
  {
    id: 'fahad-al-shamri',
    name: 'م. فهد الشمري',
    image: '/images/avatar-placeholder.jpg',
    title: 'مستشار استراتيجي - صناعة المنسوجات',
    bio: 'مهندس نسيج وخبير في تطوير صناعة المنسوجات والأزياء في المملكة، عمل سابقًا في برنامج تطوير الصناعة الوطنية والخدمات اللوجستية.',
    expertise: ['رؤية السعودية 2030', 'صناعة المنسوجات', 'توطين الصناعة']
  },
  {
    id: 'nora-al-otaibi',
    name: 'د. نورة العتيبي',
    image: '/images/blog/author-khalid.jpg',
    title: 'مستشارة الأزياء الطبية',
    bio: 'خبيرة في الأزياء الطبية مع أكثر من 12 عامًا من الخبرة في تطوير الزي الموحد للعاملين في مجال الرعاية الصحية.',
    expertise: ['القطاع الصحي', 'الأقمشة الذكية', 'سلامة العاملين']
  },
  {
    id: 'sara-al-harbi',
    name: 'سارة الحربي',
    image: '/images/team/sara.jpg',
    title: 'مديرة التصميم',
    bio: 'تمتلك سارة خبرة تزيد عن 15 عامًا في تصميم الأزياء، مع تدريب متخصص في تصميم الزي الموحد. تجلب نهجًا مبتكرًا للتوازن بين الوظائف والراحة والأناقة.',
    expertise: ['التصميم المستدام', 'الزي الموحد للشركات', 'الأقمشة الصديقة للبيئة']
  },
  {
    id: 'amina-al-zahrani',
    name: 'أمينة الزهراني',
    image: '/images/default-placeholder.jpg',
    title: 'مديرة قسم الاستدامة',
    bio: 'خبيرة في مجال التصميم المستدام والأزياء الصديقة للبيئة، مع تركيز خاص على تقنيات إعادة التدوير وتقليل النفايات في صناعة المنسوجات والأزياء الموحدة.',
    expertise: ['الاستدامة', 'المواد المعاد تدويرها', 'الأزياء الخضراء']
  },
  {
    id: 'dr-khalid-bakr',
    name: 'د. خالد بكر',
    image: '/images/default-placeholder.jpg',
    title: 'متخصص الزي الطبي',
    bio: 'د. خالد متخصص في الزي الطبي مع التركيز على معايير السلامة ومكافحة العدوى. قدم استشارات للمستشفيات الكبرى في جميع أنحاء المملكة.',
    expertise: ['الرعاية الصحية', 'معايير السلامة', 'المنسوجات الطبية']
  },
  {
    id: 'abdullah-al-qahtani',
    name: 'عبد الله القحطاني',
    image: '/images/team/abdullah.jpg',
    title: 'مصمم زي الطيران',
    bio: 'يقود عبد الله قسم الطيران في يونيوم، حيث يصمم أزياء تجمع بين العناصر السعودية التقليدية والوظائف الحديثة لشركات الطيران.',
    expertise: ['الطيران', 'التصميم الثقافي', 'هوية الشركات']
  },
  {
    id: 'sultan-al-ghamdi',
    name: 'سلطان الغامدي',
    image: '/images/default-placeholder.jpg',
    title: 'خبير التراث والأزياء التقليدية',
    bio: 'مستشار في مجال دمج العناصر التراثية في الأزياء الموحدة العصرية، مع خبرة أكثر من 15 عاماً في الحفاظ على الهوية الثقافية السعودية في التصاميم المعاصرة.',
    expertise: ['التراث السعودي', 'الأزياء التقليدية', 'الهوية الثقافية']
  },
  {
    id: 'layla-mohammed',
    name: 'ليلى محمد',
    image: '/images/default-placeholder.jpg',
    title: 'باحثة في الزي الصناعي',
    bio: 'متخصصة في الأقمشة الواقية المتقدمة والتصميم المريح للبيئات الصناعية، تجمع ليلى بين خلفيتها في علوم المواد والخبرة العملية الميدانية.',
    expertise: ['السلامة الصناعية', 'الأقمشة الواقية', 'الحماية من المخاطر']
  },
  {
    id: 'omar-al-saeed',
    name: 'عمر السعيد',
    image: '/images/default-placeholder.jpg',
    title: 'خبير سلاسل التوريد والإمداد',
    bio: 'متخصص في إدارة سلاسل التوريد واللوجستيات لصناعة الأزياء الموحدة، مع خبرة تمتد لأكثر من 10 سنوات في تحسين كفاءة العمليات وتقليل التكاليف وتحقيق الاستدامة.',
    expertise: ['سلاسل التوريد', 'اللوجستيات', 'التصنيع الرشيق']
  },
  {
    id: 'tariq-al-mahmoud',
    name: 'طارق المحمود',
    image: '/images/default-placeholder.jpg',
    title: 'رئيس قسم الابتكار الرقمي',
    bio: 'يقود فريق الابتكار الرقمي في تطوير تقنيات التصنيع المتقدمة وأنظمة إدارة الزي الموحد الذكية، مع خبرة في دمج إنترنت الأشياء والذكاء الاصطناعي في صناعة الأزياء.',
    expertise: ['التصنيع الرقمي', 'إنترنت الأشياء', 'الأقمشة الذكية']
  }
];

export default function AuthorsPage() {
  const locale = 'ar';

  return (
    
      {/* Hero Section */}
      <section dir="rtl" className="py-20 bg-primary-700 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              تعرف على فريق الخبراء
            </h1>
            <p className="text-xl opacity-90 mb-8">
              قادة الصناعة والمتخصصون الملتزمون بتقديم حلول الزي الموحد الاستثنائية في جميع أنحاء المملكة العربية السعودية وخارجها
            </p>
          </div>
        </Container>
      </section>

      {/* Team Description */}
      <section dir="rtl" className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">خبرتنا في الصناعة</h2>
            <p className="text-xl text-neutral-600 mb-6">يجمع فريقنا بين المعرفة التقنية والتميز في التصميم ورؤية الصناعة</p>
            <p className="mt-6 text-neutral-600">
              في يونيوم، تكمن قوتنا في فريقنا المتنوع من الخبراء. من المتخصصين في الأقمشة التقنية وباحثي المنسوجات المستدامة إلى المستشارين المتخصصين في الصناعات المختلفة، يجمع فريقنا عقودًا من الخبرة في صناعة الزي الموحد. يساهم كل عضو في الفريق برؤى فريدة للمساعدة في إنشاء حلول زي موحد تتوافق تمامًا مع احتياجات عملائنا ومتطلبات الصناعة والسياق المناخي والثقافي الفريد للمملكة العربية السعودية.
            </p>
          </div>

          {/* Authors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <Link
                key={author.id}
                href={`/ar/authors/${author.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 bg-neutral-100">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                      {author.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">{author.title}</p>
                    <p className="text-neutral-600 mb-4 line-clamp-2">{author.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-3 justify-end">
                      {author.expertise.slice(0, 2).map((skill, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                      {author.expertise.length > 2 && (
                        <span className="bg-neutral-100 text-neutral-700 text-xs px-2 py-1 rounded-full">
                          +{author.expertise.length - 2} المزيد
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section dir="rtl" className="py-16 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-3">تعاون مع خبرائنا</h2>
            <p className="text-xl text-neutral-600 mb-6">تواصل معنا لمناقشة متطلبات الزي الموحد الخاص بك</p>
            <p className="mt-6 text-neutral-600 mb-8">
              فريقنا جاهز لمساعدتك في إنشاء حل الزي الموحد المثالي لمؤسستك. سواء كنت تبحث عن تصاميم مخصصة، أو خبرة تقنية، أو برامج شاملة للزي الموحد، فإن متخصصينا هنا لدعمك في كل خطوة على الطريق.
            </p>
            <Link
              href="/ar/contact"
              className="inline-block bg-primary-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors"
            >
              تواصل مع فريقنا
            </Link>
          </div>
        </Container>
      </section>
    
  );
} 