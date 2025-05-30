import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import EnhancedSEO2025 from '@/components/seo/EnhancedSEO2025';

export const metadata: Metadata = {
  title: 'Ar | Privacy Policy | يونيوم المملكة العربية السعودية',
  description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
  keywords: ['زي موحد', 'ملابس مهنية', 'يونيوم', 'المملكة العربية السعودية', 'ar | privacy policy'],
  openGraph: {
    title: 'Ar | Privacy Policy | يونيوم المملكة العربية السعودية',
    description: 'توفر يونيوم حلول الزي الموحد والملابس المهنية عالية الجودة المصممة خصيصًا للشركات والمؤسسات السعودية.',
    url: 'https://uneom.com/ar/privacy-policy/',
    siteName: 'UNEOM',
    images: [
      {
        url: 'https://uneom.com/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ar | Privacy Policy - يونيوم المملكة العربية السعودية'
      }
    ],
    locale: 'ar'
  }
};


export default function PrivacyPolicyPageArabic() {
  return (
    <>
      {/* Enhanced SEO for Google May 2025 Standards */}
      <EnhancedSEO2025 
        title="UNEOM - Professional Uniforms Saudi Arabia"
        description="Premium quality professional uniforms and workwear solutions in Saudi Arabia."
        keywords={["uniform Saudi Arabia","professional uniforms","custom uniforms"]}
        author="UNEOM Expert Team"
        expertise="Uniform Manufacturing & Design"
        contentType="service"
        trustSignals={[
          'ISO certified manufacturing',
          'Premium quality materials',
          'Custom design solutions',
          'Saudi Arabia market leader'
        ]}
        locale="en"
      />

      <section className="bg-gradient-to-b from-neutral-100 to-white py-16 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
            <p className="text-xl text-neutral-700 mb-8">
              كيف تقوم يونيوم بجمع واستخدام وحماية معلوماتك
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="prose prose-lg max-w-4xl mx-auto" dir="rtl">
            <p className="lead">
              في يونيوم، نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند زيارة موقعنا الإلكتروني أو استخدام خدماتنا أو إجراء الأعمال التجارية معنا.
            </p>
            
            <h2>المعلومات التي نجمعها</h2>
            <p>قد نقوم بجمع الأنواع التالية من المعلومات:</p>
            <ul>
              <li><strong>معلومات العمل:</strong> اسم الشركة والصناعة والحجم وتفاصيل الاتصال.</li>
              <li><strong>المعلومات الشخصية:</strong> أسماء والمناصب الوظيفية وعناوين البريد الإلكتروني للعمل وأرقام هواتف ممثلي الشركات.</li>
              <li><strong>معلومات الحساب:</strong> بيانات تسجيل الدخول والتفضيلات للمستخدمين المسجلين.</li>
              <li><strong>معلومات الطلب:</strong> المنتجات المطلوبة والكميات والأسعار ومتطلبات التسليم وتفاصيل الدفع.</li>
              <li><strong>بيانات الاتصال:</strong> المراسلات عبر البريد الإلكتروني أو الهاتف أو من خلال موقعنا الإلكتروني.</li>
              <li><strong>البيانات التقنية:</strong> عنوان IP ونوع المتصفح ومعلومات الجهاز وملفات تعريف الارتباط عند زيارة موقعنا الإلكتروني.</li>
            </ul>
            
            <h2>كيف نستخدم معلوماتك</h2>
            <p>نستخدم المعلومات التي تم جمعها للأغراض التالية:</p>
            <ul>
              <li>معالجة وتنفيذ الطلبات</li>
              <li>إدارة حسابك وتقديم دعم العملاء</li>
              <li>التواصل بشأن المنتجات والخدمات والعروض الترويجية</li>
              <li>تحسين موقعنا الإلكتروني ومنتجاتنا وخدماتنا</li>
              <li>إجراء أبحاث وتحليلات السوق</li>
              <li>الامتثال للالتزامات القانونية</li>
              <li>منع الاحتيال وحماية حقوقنا</li>
            </ul>
            
            <h2>حماية البيانات</h2>
            <p>
              نقوم بتنفيذ تدابير أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف. تشمل هذه التدابير:
            </p>
            <ul>
              <li>خوادم آمنة وتشفير للبيانات الحساسة</li>
              <li>تقييمات وتحديثات أمنية منتظمة</li>
              <li>تدريب الموظفين على حماية البيانات</li>
              <li>ضوابط الوصول ومتطلبات المصادقة</li>
            </ul>
            
            <h2>مشاركة البيانات</h2>
            <p>
              قد نشارك معلوماتك مع الأطراف الثالثة التالية:
            </p>
            <ul>
              <li><strong>مزودو الخدمة:</strong> معالجات الدفع وشركات الشحن ومزودي خدمات تكنولوجيا المعلومات الذين يساعدوننا في تقديم خدماتنا.</li>
              <li><strong>شركاء العمل:</strong> المصنعين والموردين وغيرهم من الشركاء المشاركين في تنفيذ طلباتك.</li>
              <li><strong>السلطات القانونية:</strong> عندما يقتضي القانون ذلك أو لحماية حقوقنا وسلامتنا.</li>
            </ul>
            <p>
              نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية.
            </p>
            
            <h2>ملفات تعريف الارتباط والتقنيات المماثلة</h2>
            <p>
              يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط والتقنيات المماثلة لتعزيز تجربة المستخدم وجمع معلومات حول كيفية استخدام الموقع. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات المتصفح الخاص بك.
            </p>
            
            <h2>حقوقك</h2>
            <p>
              اعتمادًا على موقعك، قد تتمتع بالحقوق التالية فيما يتعلق ببياناتك:
            </p>
            <ul>
              <li>الوصول إلى معلوماتك الشخصية</li>
              <li>تصحيح المعلومات غير الدقيقة</li>
              <li>حذف معلوماتك</li>
              <li>تقييد المعالجة</li>
              <li>قابلية نقل البيانات</li>
              <li>الاعتراض على المعالجة</li>
            </ul>
            <p>
              لممارسة هذه الحقوق، يرجى الاتصال بنا باستخدام المعلومات المقدمة أدناه.
            </p>
            
            <h2>فترة الاحتفاظ</h2>
            <p>
              نحتفظ بمعلوماتك طالما كان ذلك ضروريًا لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، ما لم تكن هناك فترة احتفاظ أطول يتطلبها القانون.
            </p>
            
            <h2>التغييرات في هذه السياسة</h2>
            <p>
              قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية أو تنظيمية أخرى. سنخطرك بأي تغييرات جوهرية من خلال موقعنا الإلكتروني أو عبر البريد الإلكتروني.
            </p>
            
            <h2>القانون الحاكم</h2>
            <p>
              تخضع سياسة الخصوصية هذه لقوانين المملكة العربية السعودية.
            </p>
            
            <h2>اتصل بنا</h2>
            <p>
              إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات البيانات لدينا، يرجى الاتصال بنا على:
            </p>
            <p>
              البريد الإلكتروني: privacy@uneom.com<br />
              الهاتف: 5678 234 11 966+<br />
              العنوان: يونيوم السعودية، صندوق بريد 12345، الرياض، المملكة العربية السعودية
            </p>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/ar/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
              تواصل مع فريقنا
            </Link>
            <Link href="/ar/terms-of-service" className="inline-block mr-4 text-primary underline hover:text-primary-dark transition-colors">
              عرض شروط الخدمة
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
} 