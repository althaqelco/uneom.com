/**
 * Server-side blog posts data with multilingual support
 * Contains both English and Arabic versions of blog content for static site generation
 */

// Sample blog post data - use static data to avoid client-side imports
const blogPostsEn = [
  {
    slug: 'school-uniforms-academic-performance',
    title: 'The Impact of School Uniforms on Academic Performance',
    excerpt: 'Research findings on how well-designed school uniforms may contribute to improved academic performance and classroom behavior among Saudi students.',
    featuredImage: '/images/education/school-uniform-post-1.jpg',
    content: `<p>School uniforms have been a staple in educational institutions across Saudi Arabia for decades. Beyond creating a sense of unity and identity, recent studies suggest they may play a significant role in academic performance...</p>
              <h2>Research Findings</h2>
              <p>A 2022 study conducted across 15 schools in Riyadh found that institutions with well-implemented uniform policies saw a 12% improvement in attendance rates and an 8% increase in average test scores compared to schools with relaxed dress codes.</p>
              <h2>Psychological Factors</h2>
              <p>The psychological impact of uniforms creates what researchers call a "mental preparation" effect. When students put on their school uniforms, it triggers a mindset shift toward academic focus and appropriate behavior...</p>`,
    author: {
      name: 'Dr. Ahmad Al-Rashidi',
      avatar: '/images/authors/ahmad.jpg'
    },
    date: '2023-05-15',
    tags: ['education', 'academic-performance', 'school-uniforms', 'saudi-education']
  },
  {
    slug: 'sustainable-school-uniforms-saudi',
    title: 'Sustainable School Uniforms: The Future of Education Attire in Saudi Arabia',
    excerpt: 'How eco-friendly fabrics and sustainable manufacturing practices are transforming school uniforms across the Kingdom.',
    featuredImage: '/images/education/sustainable-uniform.jpg',
    content: `<p>As Saudi Arabia advances its sustainability goals under Vision 2030, the education sector is embracing eco-friendly initiatives, with sustainable school uniforms leading the way...</p>
              <h2>Recyclable Materials</h2>
              <p>The latest generation of school uniforms being introduced in premium Saudi schools features fabrics made from recycled polyester derived from plastic bottles. These materials reduce landfill waste while providing durable, comfortable uniforms.</p>
              <h2>Water Conservation in Production</h2>
              <p>New manufacturing facilities in industrial cities like Jubail utilize closed-loop water systems that reduce water consumption by up to 90% compared to traditional textile production methods...</p>`,
    author: {
      name: 'Leila Al-Otaibi',
      avatar: '/images/authors/leila.jpg'
    },
    date: '2023-06-20',
    tags: ['sustainability', 'school-uniforms', 'eco-friendly', 'vision-2030']
  },
  {
    slug: 'sustainable-uniforms-2024-trends',
    title: 'Sustainable Uniform Trends: What to Expect in 2024',
    excerpt: 'Emerging technologies and design innovations that will shape sustainable uniform manufacturing in Saudi Arabia next year.',
    featuredImage: '/images/blog/sustainable-trends.jpg',
    content: `<p>The uniform industry in Saudi Arabia is witnessing a significant shift toward sustainability, driven by both environmental concerns and economic incentives...</p>
              <h2>Biodegradable Synthetic Blends</h2>
              <p>New fabric technologies are introducing biodegradable synthetic fibers that maintain the performance characteristics of traditional polyester while decomposing naturally at the end of their lifecycle.</p>
              <h2>Solar-Powered Manufacturing</h2>
              <p>Several major uniform manufacturers in the Kingdom have announced transitions to solar power for their production facilities, with the largest planning to meet 80% of energy needs through renewable sources by the end of 2024...</p>`,
    author: {
      name: 'Mohammed Al-Harbi',
      avatar: '/images/authors/mohammed.jpg'
    },
    date: '2023-11-05',
    tags: ['sustainability', 'industry-trends', 'eco-friendly', 'manufacturing']
  }
];

const blogPostsAr = [
  {
    slug: 'school-uniforms-academic-performance',
    title: 'تأثير الزي المدرسي على الأداء الأكاديمي',
    excerpt: 'نتائج البحوث حول كيفية مساهمة الزي المدرسي المصمم جيدًا في تحسين الأداء الأكاديمي والسلوك في الفصل الدراسي بين الطلاب السعوديين.',
    featuredImage: '/images/education/school-uniform-post-1.jpg',
    content: `<p>كان الزي المدرسي أحد العناصر الأساسية في المؤسسات التعليمية في جميع أنحاء المملكة العربية السعودية لعدة عقود. بعيدًا عن خلق إحساس بالوحدة والهوية، تشير الدراسات الحديثة إلى أنها قد تلعب دورًا مهمًا في الأداء الأكاديمي...</p>
              <h2>نتائج البحث</h2>
              <p>وجدت دراسة أجريت عام 2022 في 15 مدرسة في الرياض أن المؤسسات التي تطبق سياسات زي موحدة جيدة شهدت تحسنًا بنسبة 12٪ في معدلات الحضور وزيادة بنسبة 8٪ في متوسط درجات الاختبار مقارنة بالمدارس ذات قواعد اللباس المرنة.</p>
              <h2>العوامل النفسية</h2>
              <p>يخلق التأثير النفسي للزي الموحد ما يسميه الباحثون تأثير "الاستعداد الذهني". عندما يرتدي الطلاب زيهم المدرسي، فإنه يؤدي إلى تحول في العقلية نحو التركيز الأكاديمي والسلوك المناسب...</p>`,
    author: {
      name: 'د. أحمد الرشيدي',
      avatar: '/images/authors/ahmad.jpg'
    },
    date: '2023-05-15',
    tags: ['تعليم', 'أداء-أكاديمي', 'زي-مدرسي', 'تعليم-سعودي']
  },
  {
    slug: 'sustainable-school-uniforms-saudi',
    title: 'الزي المدرسي المستدام: مستقبل ملابس التعليم في المملكة العربية السعودية',
    excerpt: 'كيف تعمل الأقمشة الصديقة للبيئة وممارسات التصنيع المستدامة على تحويل الزي المدرسي في جميع أنحاء المملكة.',
    featuredImage: '/images/education/sustainable-uniform.jpg',
    content: `<p>مع تقدم المملكة العربية السعودية في أهداف الاستدامة بموجب رؤية 2030، يتبنى قطاع التعليم مبادرات صديقة للبيئة، مع ريادة الزي المدرسي المستدام...</p>
              <h2>المواد القابلة لإعادة التدوير</h2>
              <p>تتميز أحدث أجيال الزي المدرسي التي يتم تقديمها في المدارس السعودية المتميزة بأقمشة مصنوعة من البوليستر المعاد تدويره المشتق من الزجاجات البلاستيكية. تقلل هذه المواد من نفايات المكبات مع توفير زي موحد متين ومريح.</p>
              <h2>الحفاظ على المياه في الإنتاج</h2>
              <p>تستخدم مرافق التصنيع الجديدة في المدن الصناعية مثل الجبيل أنظمة مياه مغلقة تقلل من استهلاك المياه بنسبة تصل إلى 90٪ مقارنة بطرق إنتاج المنسوجات التقليدية...</p>`,
    author: {
      name: 'ليلى العتيبي',
      avatar: '/images/authors/leila.jpg'
    },
    date: '2023-06-20',
    tags: ['استدامة', 'زي-مدرسي', 'صديق-للبيئة', 'رؤية-2030']
  },
  {
    slug: 'sustainable-uniforms-2024-trends',
    title: 'اتجاهات الزي الموحد المستدام: ما الذي يمكن توقعه في عام 2024',
    excerpt: 'التقنيات الناشئة وابتكارات التصميم التي ستشكل تصنيع الزي الموحد المستدام في المملكة العربية السعودية العام المقبل.',
    featuredImage: '/images/blog/sustainable-trends.jpg',
    content: `<p>تشهد صناعة الزي الموحد في المملكة العربية السعودية تحولًا كبيرًا نحو الاستدامة، مدفوعًا بالمخاوف البيئية والحوافز الاقتصادية...</p>
              <h2>مزيج اصطناعي قابل للتحلل</h2>
              <p>تقدم تقنيات النسيج الجديدة ألياف اصطناعية قابلة للتحلل البيولوجي تحافظ على خصائص أداء البوليستر التقليدي بينما تتحلل بشكل طبيعي في نهاية دورة حياتها.</p>
              <h2>التصنيع بالطاقة الشمسية</h2>
              <p>أعلنت العديد من الشركات المصنعة الرئيسية للزي الموحد في المملكة عن تحولات إلى الطاقة الشمسية لمنشآت الإنتاج الخاصة بهم، مع تخطيط أكبرها لتلبية 80٪ من احتياجات الطاقة من خلال مصادر متجددة بحلول نهاية عام 2024...</p>`,
    author: {
      name: 'محمد الحربي',
      avatar: '/images/authors/mohammed.jpg'
    },
    date: '2023-11-05',
    tags: ['استدامة', 'اتجاهات-الصناعة', 'صديق-للبيئة', 'تصنيع']
  }
];

/**
 * Gets a blog post by its slug identifier
 */
export const getBlogPostBySlug = (slug: string, locale = 'en') => {
  const posts = locale === 'ar' ? blogPostsAr : blogPostsEn;
  return posts.find(post => post.slug === slug);
};

/**
 * Gets all blog posts for a specific language
 */
export const getAllBlogPosts = (locale = 'en') => {
  return locale === 'ar' ? blogPostsAr : blogPostsEn;
};

/**
 * Gets the latest blog posts
 */
export const getLatestBlogPosts = (locale = 'en', limit = 3) => {
  const posts = locale === 'ar' ? blogPostsAr : blogPostsEn;
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};

/**
 * Gets blog posts by tag
 */
export const getBlogPostsByTag = (tag: string, locale = 'en') => {
  const posts = locale === 'ar' ? blogPostsAr : blogPostsEn;
  return posts.filter(post => post.tags && post.tags.includes(tag));
};

/**
 * Gets all unique tags from blog posts
 */
export const getAllTags = (locale: 'en' | 'ar' = 'en') => {
  const posts = locale === 'ar' ? blogPostsAr : blogPostsEn;
  const allTags = posts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
}; 