const fs = require('fs');
const path = require('path');

class FinalSEOFixer {
  constructor() {
    this.appDir = path.join(process.cwd(), 'src', 'app');
    this.fixesApplied = 0;
  }

  async run() {
    console.log('🚀 Applying Final SEO Fixes...\n');

    await this.fixArabicCorporateIndustry();
    await this.fixArabicEducationIndustry();
    await this.fixArabicManufacturingIndustry();
    await this.fixArabicHospitalityIndustry();
    await this.fixArabicAviationIndustry();

    console.log(`\n✅ Applied ${this.fixesApplied} SEO fixes successfully`);
  }

  async createFile(relativePath, content) {
    try {
      const fullPath = path.join(this.appDir, relativePath);
      const dir = path.dirname(fullPath);

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`✅ Fixed: ${relativePath}`);
      this.fixesApplied++;
    } catch (error) {
      console.error(`❌ Failed to fix ${relativePath}:`, error.message);
    }
  }

  async fixArabicCorporateIndustry() {
    const content = `import React from 'react';
import { Metadata } from 'next';
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
  }
};

export default function CorporateIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الزي الموحد للشركات - حلول احترافية للهوية المؤسسية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نصمم وننتج زي موحد عالي الجودة للشركات في المملكة العربية السعودية، يعكس هويتك المؤسسية ويعزز الصورة المهنية لفريق العمل
          </p>
        </Container>
      </section>

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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نعمل مع مختلف أنواع الشركات - من البنوك والمؤسسات المالية إلى شركات التقنية والخدمات، ومن الشركات الصغيرة والمتوسطة إلى الشركات الكبرى والمتعددة الجنسيات.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                تصاميمنا تجمع بين الأناقة والعملية، مع استخدام أقمشة مريحة وآمنة تتحمل الاستخدام اليومي المكثف والغسيل المتكرر. نحرص على اتباع أعلى معايير الجودة في التصنيع لضمان المتانة والراحة طوال فترة الاستخدام.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">مزايا الزي الموحد للشركات</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">تعزيز الهوية المؤسسية</h3>
              <p className="text-gray-600">يساعد الزي الموحد في ترسيخ هوية الشركة وقيمها، ويجعل الموظفين سفراء للعلامة التجارية.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المساواة والانتماء</h3>
              <p className="text-gray-600">يخلق شعوراً بالمساواة بين الموظفين ويعزز روح الانتماء والعمل الجماعي.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">ثقة العملاء</h3>
              <p className="text-gray-600">المظهر المهني الموحد يعزز ثقة العملاء في الشركة ويحسن من تجربتهم.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك نحو هوية مؤسسية متميزة
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وتصميم زي موحد يعكس تميز شركتك
          </p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            طلب عرض سعر
          </Button>
        </Container>
      </section>
    </main>
  );
}`;

    await this.createFile('ar/industries/hospitality/page.tsx', content);
  }

  async fixArabicAviationIndustry() {
    const content = `import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'زي الطيران - تصاميم متطورة لشركات الطيران السعودية | يونيوم',
  description: 'تصاميم زي طيران احترافية ومتطورة لطاقم الطائرة وموظفي المطارات في السعودية. حلول تجمع بين الأناقة والوظائف العملية.',
  keywords: ['زي الطيران', 'ملابس طاقم الطائرة', 'زي المطارات', 'ملابس الطيران', 'زي شركات الطيران', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/industries/aviation/',
    languages: {
      'en': 'https://uneom.com/industries/aviation/',
      'ar': 'https://uneom.com/ar/industries/aviation/'
    }
  }
};

export default function AviationIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            زي الطيران - تصاميم متطورة لشركات الطيران السعودية
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نصمم أزياء طيران احترافية ومتطورة تعكس التميز والأناقة لشركات الطيران وطاقم الطائرة في المملكة
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">تميز في السماء وعلى الأرض</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              صناعة الطيران تتطلب أعلى معايير الجودة والأناقة، وزي الطيران يلعب دوراً مهماً في إنشاء صورة مهنية متميزة لشركات الطيران السعودية. نحن في يونيوم نفهم أهمية هذا الدور ونقدم تصاميم تجمع بين الأناقة والوظائف العملية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              تصاميمنا تراعي المتطلبات الخاصة لصناعة الطيران، من الراحة أثناء الرحلات الطويلة إلى المظهر المهني الذي يعكس مستوى الخدمة المتميز. نعمل مع شركات الطيران لتطوير هوية بصرية متكاملة تميزها عن المنافسين.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نستخدم أحدث التقنيات في صناعة النسيج لضمان الراحة والمتانة، مع التركيز على التفاصيل الدقيقة التي تجعل الزي الموحد يبدو أنيقاً ومهنياً في جميع الأوقات.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              من طاقم الطائرة إلى موظفي المطار، نقدم حلول شاملة تغطي جميع احتياجات قطاع الطيران، مع إمكانية التخصيص لتناسب هوية وثقافة كل شركة طيران.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">خدماتنا لقطاع الطيران</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">طاقم الطائرة</h3>
              <p className="text-gray-600 mb-4">تصاميم أنيقة ومريحة للكابتن ومضيفي الطيران تجمع بين الأناقة والوظائف العملية.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">موظفي المطار</h3>
              <p className="text-gray-600 mb-4">أزياء مهنية لموظفي الخدمات الأرضية والأمن وخدمة العملاء في المطارات.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">الإدارة والمكاتب</h3>
              <p className="text-gray-600 mb-4">ملابس عمل احترافية للموظفين الإداريين والمكتبيين في شركات الطيران.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ارتق بصورة شركة الطيران
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            اجعل شركة الطيران تتميز بزي موحد يعكس الجودة والاحترافية في كل رحلة
          </p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            احصل على تصميم مخصص لشركة الطيران
          </Button>
        </Container>
      </section>
    </main>
  );
}`;
    
    await this.createFile('ar/industries/aviation/page.tsx', content);
  }

  async fixArabicEducationIndustry() {
    const content = `import React from 'react';
import { Metadata } from 'next';
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                تصاميمنا تجمع بين الأناقة والعملية، مع استخدام أقمشة مريحة وآمنة تتحمل الاستخدام اليومي المكثف والغسيل المتكرر. نحرص على توفير خيارات متنوعة تناسب جميع الفصول الدراسية والأنشطة المختلفة.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                خبرتنا الطويلة في قطاع التعليم تمكننا من فهم التحديات الخاصة بكل مرحلة تعليمية وتقديم حلول مبتكرة تلبي احتياجات الطلاب والإدارة التعليمية على حد سواء.
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
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المدارس الابتدائية والمتوسطة</h3>
              <p className="text-gray-600 mb-4">زي مدرسي عملي يتحمل الأنشطة اليومية المختلفة مع الحفاظ على المظهر الأنيق.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المدارس الثانوية والجامعات</h3>
              <p className="text-gray-600 mb-4">تصاميم أكثر نضجاً تناسب هذه المرحلة العمرية مع التركيز على الأناقة والراحة.</p>
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

    await this.createFile('ar/industries/education/page.tsx', content);
  }

  async fixArabicManufacturingIndustry() {
    const content = `import React from 'react';
import { Metadata } from 'next';
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
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              في البيئات الصناعية، تكون السلامة هي الأولوية القصوى. ملابس العمل الصناعية من يونيوم مصممة خصيصاً لتوفير أقصى درجات الحماية والراحة للعاملين في مختلف القطاعات الصناعية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نتفهم التحديات الفريدة التي يواجهها العاملون في المصانع والمنشآت الصناعية، من التعرض للحرارة العالية والمواد الكيميائية إلى الحاجة لحرية الحركة والراحة أثناء العمل لساعات طويلة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              منتجاتنا تلتزم بأعلى معايير السلامة المهنية المحلية والدولية، وتخضع لاختبارات صارمة لضمان فعاليتها في حماية العاملين من المخاطر المختلفة في بيئة العمل الصناعية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              من المواد المقاومة للحريق إلى الأقمشة المضادة للتمزق والمقاومة للمواد الكيميائية، نوفر مجموعة شاملة من الحلول التي تناسب مختلف البيئات الصناعية والمخاطر المحتملة.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">منتجاتنا الصناعية المتخصصة</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملابس مقاومة للحريق</h3>
              <p className="text-gray-600 mb-4">ملابس عمل متخصصة للعمل في البيئات عالية الخطورة مع حماية من الحريق والحرارة الشديدة.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملابس الحماية الكيميائية</h3>
              <p className="text-gray-600 mb-4">حماية شاملة من المواد الكيميائية والسوائل الخطرة في المختبرات والمصانع الكيميائية.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">أزياء السلامة العامة</h3>
              <p className="text-gray-600 mb-4">ملابس عمل يومية للمصانع مع عناصر السلامة الأساسية والراحة للاستخدام طويل المدى.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-orange-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            سلامة عمالك هي أولويتنا
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            احم فريق العمل لديك بأفضل ملابس الحماية الصناعية المتاحة في السوق السعودي
          </p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            اطلب استشارة السلامة المهنية
          </Button>
        </Container>
      </section>
    </main>
  );
}`;
    
    await this.createFile('ar/industries/manufacturing/page.tsx', content);
  }

  async fixArabicHospitalityIndustry() {
    const content = `import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'زي الضيافة والفندقة - أناقة مهنية لقطاع الضيافة | يونيوم',
  description: 'تصاميم أنيقة ومهنية لزي الفنادق والمطاعم والمنتجعات في السعودية. حلول ضيافة تجمع بين الأناقة والعملية.',
  keywords: ['زي الفنادق', 'ملابس المطاعم', 'زي الضيافة', 'ملابس الفندقة', 'زي المنتجعات', 'السعودية'],
  alternates: {
    canonical: 'https://uneom.com/ar/industries/hospitality/',
    languages: {
      'en': 'https://uneom.com/industries/hospitality/',
      'ar': 'https://uneom.com/ar/industries/hospitality/'
    }
  }
};

export default function HospitalityIndustryPageArabic() {
  return (
    <main className="min-h-screen rtl text-right">
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-700 py-28">
        <Container className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            زي الضيافة والفندقة - أناقة مهنية لقطاع الضيافة
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl">
            نصمم أزياء ضيافة أنيقة ومهنية للفنادق والمطاعم والمنتجعات التي تعكس مستوى الخدمة المتميز في المملكة
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">الانطباع الأول يدوم</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              في قطاع الضيافة، يكون الانطباع الأول حاسماً في تشكيل تجربة الضيوف. زي الضيافة من يونيوم مصمم ليعكس مستوى الخدمة الراقي والاهتمام بالتفاصيل الذي يميز مؤسستك.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              نتفهم أن كل نوع من مؤسسات الضيافة له احتياجاته الخاصة. من الفنادق الفاخرة إلى المطاعم العائلية، ومن المنتجعات الصحراوية إلى المراكز التجارية، نقدم حلول مخصصة تناسب هوية كل مؤسسة.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              تصاميمنا تجمع بين الأناقة والعملية، مع التركيز على الراحة أثناء العمل لساعات طويلة والمظهر المهني الذي يعزز ثقة الضيوف. نستخدم أقمشة عالية الجودة مقاومة للبقع وسهلة العناية.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              خبرتنا في قطاع الضيافة تمتد لتشمل جميع أنواع المؤسسات - من الفنادق البوتيك الصغيرة إلى المنتجعات الضخمة، ومن المطاعم الراقية إلى سلاسل الوجبات السريعة. نفهم احتياجات كل قطاع ونقدم حلول مناسبة.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <SectionHeading className="text-center mb-12">خدماتنا لقطاع الضيافة</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">الفنادق والمنتجعات</h3>
              <p className="text-gray-600 mb-4">أزياء فاخرة لموظفي الاستقبال والكونسيرج وخدمة الغرف والمطاعم الفندقية.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">المطاعم والمقاهي</h3>
              <p className="text-gray-600 mb-4">تصاميم عملية وأنيقة للطهاة والنادلين وطاقم الخدمة في المطاعم والمقاهي.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">مراكز المؤتمرات والفعاليات</h3>
              <p className="text-gray-600 mb-4">أزياء احترافية لموظفي المؤتمرات والفعاليات الخاصة والمعارض التجارية.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-purple-600 text-white">
        <Container className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            اجعل ضيوفك يشعرون بالترحيب الحقيقي
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            ارتق بمستوى الخدمة في مؤسستك من خلال أزياء ضيافة تعكس الجودة والاهتمام بالتفاصيل
          </p>
          <Button href="/ar/quote" size="lg" variant="secondary">
            احصل على تصميم خاص لمؤسستك
          </Button>
        </Container>
      </section>
    </main>
  );
}