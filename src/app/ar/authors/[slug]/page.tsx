import { notFound } from 'next/navigation';
import ClientPage from './ClientPage';

interface PageProps {
  params: {
    slug: string;
  };
}

// This generates all possible static paths during build time for author pages
export async function generateStaticParams() {
  // Define all possible author slugs
  return [
    { slug: 'john-doe' },
    { slug: 'jane-smith' },
    { slug: 'ahmed-abdullah' },
    { slug: 'sarah-johnson' },
    { slug: 'mohammed-al-farsi' },
    { slug: 'fatima-khan' },
    { slug: 'david-wilson' },
    { slug: 'layla-hassan' },
    { slug: 'omar-ibrahim' },
    { slug: 'nora-ahmed' },
  ];
}

// Mock data for authors - with Arabic information
const getAuthorData = (slug: string) => {
  // This would normally come from a database or API
  const authors = {
    'john-doe': {
      id: 'john-doe',
      name: 'جون دو',
      image: '/images/team/john-doe.jpg',
      title: 'رئيس قسم التصميم',
      bio: 'جون مصمم أزياء موحدة ذو خبرة تزيد عن 15 عامًا في هذا المجال. يتخصص في الأزياء الموحدة للشركات والضيافة.',
      fullBio: 'جون دو مصمم أزياء موحدة ذو خبرة تزيد عن 15 عامًا في هذا المجال. يتخصص في الأزياء الموحدة للشركات والضيافة، مع التركيز على تصميمات تجمع بين الجماليات والوظائف والراحة. خلال مسيرته المهنية، عمل جون مع العديد من العملاء البارزين في المملكة العربية السعودية ومنطقة الخليج، مساعدًا إياهم في تطوير برامج الزي الموحد التي تعزز هوية علاماتهم التجارية وتلبي الاحتياجات العملية لموظفيهم. ينهجه يجمع بين الحرفية التقليدية والمواد والتقنيات المبتكرة، مما يؤدي إلى أزياء موحدة تصمد أمام اختبار الزمن من حيث المتانة والأسلوب.',
      education: [
        'ماجستير في تصميم الأزياء، الكلية الملكية للفنون، لندن',
        'بكالوريوس الفنون الجميلة، مدرسة بارسونز للتصميم، نيويورك',
        'شهادة في هندسة النسيج، المعهد السعودي للنسيج'
      ],
      experience: [
        {
          position: 'رئيس قسم التصميم',
          company: 'يونيوم',
          period: '2018 - الحاضر',
          description: 'يقود فريق التصميم في إنشاء حلول مبتكرة للزي الموحد للعملاء عبر مختلف الصناعات.'
        },
        {
          position: 'مصمم أول',
          company: 'جلوبال يونيفورمز إنك',
          period: '2012 - 2018',
          description: 'طور برامج الزي الموحد لعملاء الضيافة والشركات في جميع أنحاء الشرق الأوسط.'
        },
        {
          position: 'مستشار تصميم',
          company: 'مجموعة فنادق الفخامة',
          period: '2008 - 2012',
          description: 'أنشأ مجموعات زي موحد مخصصة للفنادق والمنتجعات الفاخرة.'
        }
      ],
      expertise: [
        'تصميم الزي الموحد للشركات',
        'برامج الزي الموحد للضيافة',
        'اختيار النسيج المستدام',
        'ملابس العمل المتكيفة مع المناخ',
        'دمج هوية العلامة التجارية',
        'العناصر السعودية التقليدية في التصميم الحديث'
      ],
      socialMedia: {
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
        instagram: 'https://instagram.com/johndoe'
      }
    },
    'jane-smith': {
      id: 'jane-smith',
      name: 'جين سميث',
      image: '/images/team/jane-smith.jpg',
      title: 'رئيسة التطوير التقني',
      bio: 'تتخصص جين في الأقمشة التقنية وملابس العمل عالية الأداء، مع خبرة خاصة في الأزياء الموحدة للبيئات القاسية.',
      expertise: [
        'تطوير الأقمشة التقنية',
        'ملابس العمل عالية الأداء',
        'الأزياء الموحدة المقاومة للحرارة',
        'معايير السلامة الصناعية',
        'المعالجات المضادة للميكروبات',
        'تقنيات امتصاص الرطوبة'
      ],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/janesmith'
      }
    }
  };

  return authors[slug as keyof typeof authors] || null;
};

// Mock data for author posts
const getAuthorPosts = (authorId: string) => {
  // This would normally come from a database or API
  return [
    {
      id: 'uniform-trends-2023',
      title: 'اتجاهات الزي الموحد للمراقبة في 2023',
      excerpt: 'استكشف أحدث الابتكارات واتجاهات التصميم التي تشكل صناعة الزي الموحد هذا العام.',
      date: '15 يونيو، 2023',
      category: 'اتجاهات الصناعة',
      coverImage: '/images/blog/uniform-trends.jpg',
      readTime: 5
    },
    {
      id: 'sustainable-uniforms',
      title: 'الاستدامة في الأزياء الموحدة للشركات',
      excerpt: 'كيف تتبنى الشركات المواد الصديقة للبيئة والتصنيع الأخلاقي في برامج الزي الموحد الخاصة بها.',
      date: '22 مايو، 2023',
      category: 'الاستدامة',
      coverImage: '/images/blog/sustainable-uniforms.jpg',
      readTime: 7
    },
    {
      id: 'healthcare-uniform-innovation',
      title: 'الابتكارات في الأزياء الموحدة للرعاية الصحية',
      excerpt: 'تقنيات وتصميمات جديدة تعمل على تحسين الراحة والوظائف للمتخصصين في الرعاية الصحية.',
      date: '10 أبريل، 2023',
      category: 'الرعاية الصحية',
      coverImage: '/images/blog/healthcare-uniforms.jpg',
      readTime: 6
    }
  ];
};

export default function AuthorPage({ params }: PageProps) {
  const { slug } = params;
  
  // Get author data
  const author = getAuthorData(slug);
  
  // If author not found, return 404
  if (!author) {
    return notFound();
  }
  
  // Get author posts
  const authorPosts = getAuthorPosts(author.id);
  
  return <ClientPage author={author} authorPosts={authorPosts} />;
} 