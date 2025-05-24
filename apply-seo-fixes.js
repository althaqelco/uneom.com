const fs = require('fs');
const path = require('path');

class SEOAutoFixer {
  constructor() {
    this.appDir = path.join(process.cwd(), 'src', 'app');
    this.fixesApplied = 0;
    this.errorLog = [];
  }

  async run() {
    console.log('🚀 Starting Automated SEO Fixes...\n');
    
    try {
      // Fix critical Arabic industry pages missing H1 and content
      await this.fixArabicIndustryPages();
      
      // Fix Arabic location pages that still need fixes
      await this.fixRemainingArabicLocationPages();
      
      // Fix Arabic service subpages
      await this.fixArabicServicePages();
      
      // Fix locale-based pages
      await this.fixLocalePages();
      
      // Generate summary report
      await this.generateSummaryReport();
      
    } catch (error) {
      console.error('❌ Error during SEO fixes:', error);
      this.errorLog.push(error.message);
    }
    
    console.log(`\n✅ Applied ${this.fixesApplied} SEO fixes`);
    if (this.errorLog.length > 0) {
      console.log(`⚠️  ${this.errorLog.length} errors encountered`);
    }
  }

  async fixArabicIndustryPages() {
    console.log('🔧 Fixing Arabic Industry Pages...');
    
    const industryPages = [
      {
        path: 'ar/industries/corporate/page.tsx',
        title: 'الزي الموحد للشركات - حلول احترافية للهوية المؤسسية',
        content: this.generateCorporateContent()
      },
      {
        path: 'ar/industries/education/page.tsx',
        title: 'الزي المدرسي والتعليمي - حلول شاملة للمؤسسات التعليمية',
        content: this.generateEducationContent()
      },
      {
        path: 'ar/industries/manufacturing/page.tsx',
        title: 'الزي الصناعي والتصنيعي - ملابس عمل آمنة ومتينة',
        content: this.generateManufacturingContent()
      },
      {
        path: 'ar/industries/hospitality/page.tsx',
        title: 'زي الضيافة والفندقة - أناقة مهنية لقطاع الضيافة',
        content: this.generateHospitalityContent()
      },
      {
        path: 'ar/industries/aviation/page.tsx',
        title: 'زي الطيران - تصاميم متطورة لشركات الطيران السعودية',
        content: this.generateAviationContent()
      }
    ];

    for (const page of industryPages) {
      await this.createOrUpdatePage(page.path, page.content);
    }
  }

  async fixRemainingArabicLocationPages() {
    console.log('🔧 Fixing Remaining Arabic Location Pages...');
    
    const locationPages = [
      {
        path: 'ar/locations/jeddah/page.tsx',
        title: 'يونيوم جدة | خدمات الزي الموحد في المنطقة الغربية',
        content: this.generateJeddahLocationContent()
      },
      {
        path: 'ar/locations/dammam/page.tsx', 
        title: 'يونيوم الدمام | حلول الزي الصناعي في المنطقة الشرقية',
        content: this.generateDammamLocationContent()
      },
      {
        path: 'ar/locations/mecca/page.tsx',
        title: 'يونيوم مكة المكرمة | خدمات الزي للمشاعر المقدسة',
        content: this.generateMeccaLocationContent()
      },
      {
        path: 'ar/locations/medina/page.tsx',
        title: 'يونيوم المدينة المنورة | خدمات الزي للحرم النبوي',
        content: this.generateMedinaLocationContent()
      }
    ];

    for (const page of locationPages) {
      await this.createOrUpdatePage(page.path, page.content);
    }
  }

  async fixArabicServicePages() {
    console.log('🔧 Fixing Arabic Service Pages...');
    
    const servicePages = [
      {
        path: 'ar/services/custom-design/page.tsx',
        title: 'خدمات التصميم المخصص | يونيوم',
        content: this.generateCustomDesignContent()
      },
      {
        path: 'ar/services/bulk-ordering/page.tsx',
        title: 'طلبات الشراء بالجملة | يونيوم',
        content: this.generateBulkOrderingContent()
      },
      {
        path: 'ar/services/program-management/page.tsx',
        title: 'إدارة برامج الزي الموحد | يونيوم',
        content: this.generateProgramManagementContent()
      },
      {
        path: 'ar/services/uniform-policies/page.tsx',
        title: 'سياسات الزي الموحد | يونيوم',
        content: this.generateUniformPoliciesContent()
      }
    ];

    for (const page of servicePages) {
      await this.createOrUpdatePage(page.path, page.content);
    }
  }

  async fixLocalePages() {
    console.log('🔧 Fixing Locale-based Pages...');
    
    // Fix the corporate industry page in locale directory
    const corporatePage = {
      path: '[locale]/industries/corporate/page.tsx',
      content: this.generateLocaleCorporatePage()
    };
    
    await this.createOrUpdatePage(corporatePage.path, corporatePage.content);
  }

  async createOrUpdatePage(relativePath, content) {
    try {
      const fullPath = path.join(this.appDir, relativePath);
      const dir = path.dirname(fullPath);
      
      // Ensure directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Fixed: ${relativePath}`);
      this.fixesApplied++;
      
    } catch (error) {
      console.error(`❌ Failed to fix ${relativePath}:`, error.message);
      this.errorLog.push(`${relativePath}: ${error.message}`);
    }
  }

  generateCorporateContent() {
    return `import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'الزي الموحد للشركات - حلول احترافية للهوية المؤسسية | يونيوم',
  description: 'نقدم حلول الزي الموحد للشركات في المملكة العربية السعودية. تصاميم احترافية تعكس هوية مؤسستك وتعزز الصورة المهنية للموظفين.',
  keywords: ['زي الشركات', 'الزي المؤسسي', 'ملابس العمل', 'الهوية المؤسسية', 'زي موحد احترافي', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/industries/corporate/',
    languages: {
      'en': 'https://uneom.com/industries/corporate/',
      'ar': 'https://uneom.com/ar/industries/corporate/'
    }
  },
  openGraph: {
    title: 'الزي الموحد للشركات - حلول احترافية للهوية المؤسسية | يونيوم',
    description: 'نقدم حلول الزي الموحد للشركات في المملكة العربية السعودية. تصاميم احترافية تعكس هوية مؤسستك وتعزز الصورة المهنية للموظفين.',
    url: 'https://uneom.com/ar/industries/corporate/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/industries/corporate/corporate-uniforms.jpg',
        width: 1200,
        height: 630,
        alt: 'الزي الموحد للشركات من يونيوم'
      }
    ],
    locale: 'ar'
  }
};

export default function CorporateIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/images/industries/corporate/corporate-hero.jpg"
            alt="الزي الموحد للشركات"
            fill
            className="object-cover"
            priority
          />
        </div>
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الزي الموحد للشركات - حلول احترافية للهوية المؤسسية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نصمم وننتج زي موحد عالي الجودة للشركات في المملكة العربية السعودية، يعكس هويتك المؤسسية ويعزز الصورة المهنية لفريق العمل
          </p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">لماذا الزي الموحد مهم للشركات؟</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                في عالم الأعمال الحديث، يلعب الزي الموحد دوراً محورياً في تعزيز الهوية المؤسسية وبناء الثقة مع العملاء. يونيوم تفهم أهمية هذا الدور وتقدم حلول زي موحد مبتكرة ومخصصة للشركات السعودية.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                زينا الموحد للشركات لا يقتصر على المظهر الجميل فحسب، بل يساهم في تحسين الإنتاجية، وتعزيز روح الفريق، وترسيخ قيم المؤسسة في أذهان الموظفين والعملاء على حد سواء.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                نعمل مع مختلف أنواع الشركات - من البنوك والمؤسسات المالية إلى شركات التقنية والخدمات، ومن الشركات الصغيرة والمتوسطة إلى الشركات الكبرى والمتعددة الجنسيات.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">مزايا الزي الموحد للشركات</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تعزيز الهوية المؤسسية</h3>
              <p className="text-gray-600">يساعد الزي الموحد في ترسيخ هوية الشركة وقيمها، ويجعل الموظفين سفراء للعلامة التجارية.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">المساواة والانتماء</h3>
              <p className="text-gray-600">يخلق شعوراً بالمساواة بين الموظفين ويعزز روح الانتماء والعمل الجماعي.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">ثقة العملاء</h3>
              <p className="text-gray-600">المظهر المهني الموحد يعزز ثقة العملاء في الشركة ويحسن من تجربتهم.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">توفير التكاليف</h3>
              <p className="text-gray-600">يوفر على الموظفين تكلفة شراء ملابس العمل ويضمن مظهراً مناسباً للعمل.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">سهولة التعرف</h3>
              <p className="text-gray-600">يسهل على العملاء التعرف على موظفي الشركة والحصول على المساعدة.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-indigo-600 rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الراحة والعملية</h3>
              <p className="text-gray-600">تصاميم عملية ومريحة تناسب طبيعة العمل وتساعد على زيادة الإنتاجية.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <Container>
          <SectionHeading className="text-center mb-12">خدماتنا للشركات</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">تصميم مخصص</h3>
              <p className="text-gray-600 mb-6">نصمم زي موحد يعكس هوية شركتك ويتناسب مع طبيعة عملها، مع مراعاة الألوان المؤسسية والمتطلبات الوظيفية.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• استشارة تصميم شخصية</li>
                <li>• تطوير تصاميم متعددة</li>
                <li>• اختبار العينات</li>
                <li>• التعديل حسب الملاحظات</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">إنتاج وتصنيع</h3>
              <p className="text-gray-600 mb-6">نستخدم أحدث التقنيات وأجود الخامات لضمان جودة المنتج النهائي ومتانته لفترات طويلة.</p>
              <ul className="text-gray-600 space-y-2">
                <li>• أقمشة عالية الجودة</li>
                <li>• تقنيات تصنيع متطورة</li>
                <li>• مراقبة الجودة الصارمة</li>
                <li>• اختبار المتانة والراحة</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك نحو هوية مؤسسية متميزة
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وتصميم زي موحد يعكس تميز شركتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/ar/quote" size="lg" variant="secondary">
              طلب عرض سعر
            </Button>
            <Button href="/ar/contact" size="lg" variant="outline">
              تواصل معنا
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}`;
  }

  generateEducationContent() {
    return `import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'الزي المدرسي والتعليمي - حلول شاملة للمؤسسات التعليمية | يونيوم',
  description: 'تصميم وإنتاج الزي المدرسي والجامعي في المملكة العربية السعودية. حلول شاملة للمدارس والجامعات مع مراعاة الراحة والجودة.',
  keywords: ['الزي المدرسي', 'زي الجامعة', 'ملابس التعليم', 'زي الطلاب', 'المؤسسات التعليمية', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/industries/education/',
    languages: {
      'en': 'https://uneom.com/industries/education/',
      'ar': 'https://uneom.com/ar/industries/education/'
    }
  }
};

export default function EducationIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الزي المدرسي والتعليمي - حلول شاملة للمؤسسات التعليمية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نوفر أزياء تعليمية عالية الجودة للمدارس والجامعات في المملكة، مع التركيز على الراحة والمتانة والمظهر اللائق
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">أهمية الزي الموحد في التعليم</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                الزي المدرسي يلعب دوراً مهماً في تهيئة البيئة التعليمية المناسبة. يساعد على تقليل الفوارق الاجتماعية بين الطلاب، ويعزز الانضباط والتركيز على التعلم.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نحن في يونيوم نتفهم احتياجات المؤسسات التعليمية المختلفة - من رياض الأطفال إلى الجامعات - ونقدم حلول مخصصة تراعي الفئة العمرية وطبيعة الأنشطة التعليمية.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                تصاميمنا تجمع بين الأناقة والعملية، مع استخدام أقمشة مريحة وآمنة تتحمل الاستخدام اليومي المكثف والغسيل المتكرر.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">خدماتنا للمؤسسات التعليمية</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">رياض الأطفال</h3>
              <p className="text-gray-600 mb-4">أزياء مريحة وآمنة للأطفال مع تصاميم جذابة وألوان زاهية تناسب هذه المرحلة العمرية.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• أقمشة ناعمة وآمنة</li>
                <li>• تصاميم سهلة الارتداء</li>
                <li>• ألوان مناسبة للأطفال</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المدارس الابتدائية والمتوسطة</h3>
              <p className="text-gray-600 mb-4">زي مدرسي عملي يتحمل الأنشطة اليومية المختلفة مع الحفاظ على المظهر الأنيق.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• مقاومة للتمزق والبقع</li>
                <li>• سهولة العناية والغسيل</li>
                <li>• تصاميم عملية ومريحة</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المدارس الثانوية والجامعات</h3>
              <p className="text-gray-600 mb-4">تصاميم أكثر نضجاً تناسب هذه المرحلة العمرية مع التركيز على الأناقة والراحة.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• تصاميم عصرية وأنيقة</li>
                <li>• خيارات متنوعة للفصول</li>
                <li>• جودة عالية ومتانة</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            شراكة تعليمية متميزة
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى مئات المؤسسات التعليمية التي تثق في يونيوم لتوفير أفضل حلول الزي المدرسي
          </p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            احصل على عرض خاص للمؤسسات التعليمية
          </Button>
        </Container>
      </section>
    </main>
  );
}`;
  }

  generateManufacturingContent() {
    return `import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'الزي الصناعي والتصنيعي - ملابس عمل آمنة ومتينة | يونيوم',
  description: 'ملابس عمل صناعية عالية الجودة للمصانع والمنشآت الصناعية في السعودية. تصاميم تركز على السلامة والحماية والراحة.',
  keywords: ['ملابس العمل الصناعية', 'الزي الصناعي', 'ملابس المصانع', 'معدات السلامة', 'ملابس الحماية', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/industries/manufacturing/',
    languages: {
      'en': 'https://uneom.com/industries/manufacturing/',
      'ar': 'https://uneom.com/ar/industries/manufacturing/'
    }
  }
};

export default function ManufacturingIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الزي الصناعي والتصنيعي - ملابس عمل آمنة ومتينة
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نوفر ملابس عمل صناعية متخصصة تضمن السلامة والحماية للعاملين في المصانع والمنشآت الصناعية
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">السلامة المهنية في المقدمة</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>