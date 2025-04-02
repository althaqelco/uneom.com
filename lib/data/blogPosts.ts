// Define BlogPost type directly if import fails
interface Author {
  name: string;
  avatar?: string; // Avatar URL
}

interface BlogPost {
  slug: string;
  language: 'en' | 'ar';
  title: string;
  date: string; // Format: YYYY-MM-DD
  author: string | Author; // Can be simple string or Author object
  tags?: string[];
  featuredImage: string; // Path to image, e.g., /images/blog/my-image.webp
  excerpt: string; // Short summary
  content: string; // HTML content for the blog post
}

// Combine English and Arabic blog posts into one structure
const blogPosts: BlogPost[] = [
  // Existing English Posts...
  {
    slug: 'industrial-safety-compliance-guide',
    language: 'en',
    title: 'Industrial Safety Compliance Guide for Uniforms in KSA',
    date: '2024-06-20',
    author: { name: 'UNEOM Safety Team', avatar: '/images/authors/safety-team.webp' },
    tags: ['Industrial Safety', 'Compliance', 'Workwear Standards', 'Saudi Arabia', 'SASO', 'PPE'],
    featuredImage: '/images/blog/industrial-safety-hero.webp',
    excerpt: 'Navigate the complex landscape of industrial safety standards for workwear in Saudi Arabia. Understand SASO requirements, PPE selection, and how compliant uniforms protect your workforce.',
    content: `
      <p>Ensuring the safety of your workforce in industrial settings is paramount. A crucial aspect of this is providing appropriate Personal Protective Equipment (PPE), including safety-compliant uniforms. Navigating the specific standards and regulations in Saudi Arabia can be challenging. This guide provides an overview of key considerations for industrial safety compliance in workwear.</p>

      <h2>Understanding Saudi Safety Standards (SASO)</h2>
      <p>The Saudi Standards, Metrology and Quality Organization (SASO) sets the benchmark for many product safety standards in the Kingdom. For industrial workwear, relevant SASO standards often align with international norms like ISO and EN, but may have specific national deviations. Key areas include:</p>
      <ul>
        <li><strong>Flame Resistance (FR):</strong> Standards like SASO ISO 11612 specify performance requirements for clothing protecting against heat and flame.</li>
        <li><strong>High-Visibility:</strong> SASO EN 20471 outlines requirements for high-visibility clothing, crucial for construction, roadwork, and logistics.</li>
        <li><strong>Chemical Protection:</strong> SASO EN 13034 covers limited performance chemical protective clothing.</li>
        <li><strong>Antistatic Properties:</strong> SASO EN 1149 addresses electrostatic properties to prevent sparks in potentially explosive atmospheres.</li>
      </ul>
      <figure class="my-6">
        <img src="/images/compliance/saso-logo-standards.webp" alt="SASO Logo alongside icons representing various safety standards like FR, Hi-Vis, Chemical Protection" class="rounded-lg shadow-md mx-auto max-w-md">
        <figcaption class="text-center text-sm text-neutral-600 mt-2">Compliance with relevant SASO standards is crucial for industrial workwear in KSA.</figcaption>
      </figure>

      <h2>Selecting the Right PPE Uniforms</h2>
      <p>Choosing the right uniform involves a thorough risk assessment of the specific work environment. Consider:</p>
      <ul>
        <li><strong>Hazard Identification:</strong> What are the primary risks? Heat, flame, chemicals, low visibility, static discharge, mechanical hazards?</li>
        <li><strong>Level of Protection:</strong> Determine the required performance level based on the identified hazards.</li>
        <li><strong>Fabric Choice:</strong> Select fabrics that meet the necessary standards (e.g., inherent FR fabrics, treated FR fabrics, specific chemical-resistant materials).</li>
        <li><strong>Design & Fit:</strong> Ensure the uniform design doesn't impede movement and fits correctly. Poor fit can compromise protection.</li>
        <li><strong>Comfort & Climate:</strong> Especially important in Saudi Arabia's climate, choose breathable fabrics that manage heat stress while maintaining protection.</li>
      </ul>

      <h2>UNEOM's Commitment to Compliance</h2>
      <p>At UNEOM, we prioritize safety and compliance. Our industrial workwear range is designed and manufactured to meet or exceed relevant SASO and international standards. We offer:</p>
      <ul>
        <li>Certified FR workwear</li>
        <li>High-visibility garments meeting Class 2 and Class 3 requirements</li>
        <li>Chemical-resistant options</li>
        <li>Expert consultation to help you select the most appropriate and compliant uniforms for your specific industry and risks.</li>
      </ul>
      <figure class="my-6">
        <img src="/images/products/ppe-uniform-selection.webp" alt="Selection of various compliant industrial uniforms including FR coveralls, hi-vis vests, and chemical resistant aprons" class="rounded-lg shadow-md mx-auto">
        <figcaption class="text-center text-sm text-neutral-600 mt-2">UNEOM offers a wide range of certified and compliant industrial PPE uniforms.</figcaption>
      </figure>

      <h2>Maintaining Compliance Through Proper Care</h2>
      <p>The protective properties of safety workwear can be compromised by improper care. Follow manufacturer instructions for washing and maintenance. Regular inspection for wear and tear is essential to ensure continued protection.</p>

      <p>Investing in compliant, high-quality industrial uniforms is not just a regulatory requirement; it's a fundamental investment in the health and safety of your employees. Contact UNEOM today for expert advice on your industrial workwear needs.</p>
    `,
  },
  // ... other English posts

  // Start Arabic Posts...
  {
    slug: 'industrial-safety-compliance-guide',
    language: 'ar',
    title: 'دليل الامتثال لمعايير السلامة الصناعية في الزي الموحد بالمملكة',
    date: '2024-06-20',
    author: { name: 'فريق السلامة في UNEOM', avatar: '/images/authors/safety-team.webp' },
    tags: ['السلامة الصناعية', 'الامتثال للمعايير', 'معايير ملابس العمل', 'المملكة العربية السعودية', 'مواصفات ساسو', 'معدات الوقاية الشخصية'],
    featuredImage: '/images/blog/industrial-safety-hero-ar.webp', // Use Arabic specific or neutral hero
    excerpt: 'تعرف على معايير السلامة الصناعية المعقدة للزي الموحد في المملكة العربية السعودية. افهم متطلبات مواصفات ساسو، اختيار معدات الوقاية الشخصية، وكيف يحمي الزي الموحد المطابق للمواصفات قوتك العاملة.',
    content: `
      <p>يُعد ضمان سلامة القوى العاملة في البيئات الصناعية أمرًا بالغ الأهمية. ويتمثل أحد الجوانب الحاسمة في ذلك توفير معدات الوقاية الشخصية (PPE) المناسبة، بما في ذلك الزي الموحد المطابق لمعايير السلامة. قد يكون التنقل بين المعايير واللوائح المحددة في المملكة العربية السعودية أمرًا صعبًا. يقدم هذا الدليل لمحة عامة عن الاعتبارات الرئيسية للامتثال لمعايير السلامة الصناعية في ملابس العمل.</p>

      <h2 class="text-right">فهم معايير السلامة السعودية (مواصفات ساسو)</h2>
      <p class="text-right">تضع الهيئة السعودية للمواصفات والمقاييس والجودة (SASO) المعايير القياسية للعديد من معايير سلامة المنتجات في المملكة. بالنسبة لملابس العمل الصناعية، غالبًا ما تتوافق معايير ساسو ذات الصلة مع المعايير الدولية مثل ISO و EN، ولكن قد يكون لها انحرافات وطنية محددة. تشمل المجالات الرئيسية ما يلي:</p>
      <ul class="list-disc list-inside mr-4 text-right">
        <li><strong>مقاومة اللهب (FR):</strong> تحدد معايير مثل SASO ISO 11612 متطلبات الأداء للملابس الواقية من الحرارة واللهب.</li>
        <li><strong>الرؤية العالية:</strong> تحدد SASO EN 20471 متطلبات الملابس عالية الوضوح، وهي ضرورية للبناء وأعمال الطرق والخدمات اللوجستية.</li>
        <li><strong>الحماية الكيميائية:</strong> تغطي SASO EN 13034 الملابس الواقية من المواد الكيميائية ذات الأداء المحدود.</li>
        <li><strong>خصائص مقاومة الكهرباء الساكنة:</strong> تعالج SASO EN 1149 الخصائص الكهروستاتيكية لمنع الشرر في الأجواء التي يحتمل أن تكون قابلة للانفجار.</li>
      </ul>
      <figure class="my-6">
        <img src="/images/compliance/saso-logo-standards.webp" alt="شعار ساسو بجانب أيقونات تمثل معايير السلامة المختلفة مثل مقاومة اللهب، الرؤية العالية، الحماية الكيميائية" class="rounded-lg shadow-md mx-auto max-w-md">
        <figcaption class="text-center text-sm text-neutral-600 mt-2">الامتثال لمعايير ساسو ذات الصلة أمر بالغ الأهمية لملابس العمل الصناعية في المملكة.</figcaption>
      </figure>

      <h2 class="text-right">اختيار الزي الموحد المناسب لمعدات الوقاية الشخصية</h2>
      <p class="text-right">يتضمن اختيار الزي الموحد المناسب تقييمًا شاملاً للمخاطر في بيئة العمل المحددة. ضع في اعتبارك:</p>
      <ul class="list-disc list-inside mr-4 text-right">
        <li><strong>تحديد المخاطر:</strong> ما هي المخاطر الأساسية؟ الحرارة، اللهب، المواد الكيميائية، ضعف الرؤية، التفريغ الكهروستاتيكي، المخاطر الميكانيكية؟</li>
        <li><strong>مستوى الحماية:</strong> تحديد مستوى الأداء المطلوب بناءً على المخاطر المحددة.</li>
        <li><strong>اختيار القماش:</strong> اختر الأقمشة التي تلبي المعايير اللازمة (مثل أقمشة FR الملازمة، وأقمشة FR المعالجة، والمواد المحددة المقاومة للمواد الكيميائية).</li>
        <li><strong>التصميم والمقاس:</strong> تأكد من أن تصميم الزي الموحد لا يعيق الحركة ويتناسب بشكل صحيح. يمكن أن يؤدي المقاس غير المناسب إلى تعريض الحماية للخطر.</li>
        <li><strong>الراحة والمناخ:</strong> اختر أقمشة تسمح بمرور الهواء وتدير الإجهاد الحراري مع الحفاظ على الحماية، وهو أمر مهم بشكل خاص في مناخ المملكة العربية السعودية.</li>
      </ul>

      <h2 class="text-right">التزام يونيوم بالامتثال للمعايير</h2>
      <p class="text-right">في يونيوم، نعطي الأولوية للسلامة والامتثال للمعايير. تم تصميم وتصنيع مجموعتنا من ملابس العمل الصناعية لتلبية أو تجاوز معايير ساسو والمعايير الدولية ذات الصلة. نحن نقدم:</p>
      <ul class="list-disc list-inside mr-4 text-right">
        <li>ملابس عمل FR معتمدة</li>
        <li>ملابس عالية الوضوح تلبي متطلبات الفئة 2 والفئة 3</li>
        <li>خيارات مقاومة للمواد الكيميائية</li>
        <li>استشارات الخبراء لمساعدتك في اختيار الزي الموحد الأكثر ملاءمة وتوافقًا مع معايير صناعتك ومخاطرك المحددة.</li>
      </ul>
      <figure class="my-6">
        <img src="/images/products/ppe-uniform-selection-ar.webp" alt="مجموعة مختارة من الزي الصناعي المتوافق مع معايير السلامة بما في ذلك الأفرولات المقاومة للهب والسترات عالية الوضوح والمآزر المقاومة للمواد الكيميائية" class="rounded-lg shadow-md mx-auto">
        <figcaption class="text-center text-sm text-neutral-600 mt-2">تقدم يونيوم مجموعة واسعة من الزي الصناعي المعتمد والمتوافق مع معايير معدات الوقاية الشخصية.</figcaption>
      </figure>

      <h2 class="text-right">الحفاظ على الامتثال من خلال العناية المناسبة</h2>
      <p class="text-right">يمكن أن تتعرض الخصائص الواقية لملابس العمل الآمنة للخطر بسبب العناية غير الصحيحة. اتبع تعليمات الشركة المصنعة للغسيل والصيانة. يعد الفحص المنتظم للتآكل والتلف أمرًا ضروريًا لضمان الحماية المستمرة.</p>

      <p class="text-right">إن الاستثمار في زي صناعي متوافق وعالي الجودة ليس مجرد مطلب تنظيمي؛ إنه استثمار أساسي في صحة وسلامة موظفيك. اتصل بـ يونيوم اليوم للحصول على مشورة الخبراء بشأن احتياجات ملابس العمل الصناعية الخاصة بك.</p>
    `,
  },
  // ... other Arabic posts
];

/**
 * Get blog posts filtered by language
 * @param language The language to filter by ('en' or 'ar')
 * @returns Array of blog posts in the specified language
 */
export function getBlogPosts(language: string = 'en'): BlogPost[] {
  console.log('getBlogPosts called with language:', language);
  const posts = blogPosts.filter(post => post.language === language);
  console.log('Posts found:', posts.length);
  return posts;
}

/**
 * Get a specific blog post by its slug and language
 * @param slug The slug of the blog post
 * @param language The language of the blog post ('en' or 'ar')
 * @returns The blog post or undefined if not found
 */
export function getBlogPostBySlug(slug: string, language: string = 'en'): BlogPost | undefined {
  console.log('getBlogPostBySlug called with slug:', slug, 'language:', language);
  
  // Normalize language parameter
  const normalizedLanguage = language === 'ar' ? 'ar' : 'en';
  
  // Find post with exact match on slug and language
  const post = blogPosts.find(post => 
    post.slug === slug && 
    post.language === normalizedLanguage
  );
  
  console.log('Post found?', post ? 'YES' : 'NO');
  
  if (!post && slug === 'industrial-safety-compliance-guide' && normalizedLanguage === 'ar') {
    console.log('Special case: industrial-safety-compliance-guide in Arabic');
    // Hardcoded return for the specific case
    return blogPosts.find(p => 
      p.slug === 'industrial-safety-compliance-guide' && 
      p.language === 'ar'
    );
  }
  
  return post;
}

/**
 * Get related blog posts for a given post
 * @param currentSlug The slug of the current blog post
 * @param language The language to filter by ('en' or 'ar')
 * @param count Number of related posts to return
 * @returns Array of related blog posts
 */
export function getRelatedPosts(currentSlug: string, language: string = 'en', count: number = 3): BlogPost[] {
  const posts = getBlogPosts(language);
  const currentIndex = posts.findIndex(post => post.slug === currentSlug);
  
  if (currentIndex === -1) {
    return posts.slice(0, count); // Return first few if current not found
  }
  
  // Simple related logic: return posts around the current one, excluding itself
  const related = [
    ...posts.slice(Math.max(0, currentIndex - count), currentIndex),
    ...posts.slice(currentIndex + 1, currentIndex + 1 + count)
  ];
  
  return related.slice(0, count);
}

/**
 * Get all blog post slugs for a given language
 * @param language The language to filter by ('en' or 'ar')
 * @returns Array of blog post slugs
 */
export function getAllSlugs(language: string = 'en'): string[] {
  return getBlogPosts(language).map(post => post.slug);
} 