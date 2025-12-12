import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'سكراب طبي السعودية | شراء أزياء الرعاية الصحية أونلاين | يونيوم',
  titleAr: 'سكراب طبي السعودية | شراء أزياء الرعاية الصحية أونلاين | يونيوم',
  description: 'Buy premium medical scrubs in Saudi Arabia.',
  descriptionAr: 'شراء سكراب طبي فاخر في السعودية. أزياء رعاية صحية مضادة للميكروبات، مريحة، متينة للأطباء والممرضين والجراحين. من 169 ريال. توصيل سريع للرياض وجدة والدمام، خصومات بالجملة للمستشفيات!',
  keywords: ['سكراب طبي السعودية', 'شراء سكراب الرياض'],
  keywordsAr: ['سكراب طبي السعودية', 'شراء سكراب الرياض', 'أزياء رعاية صحية', 'زي تمريض السعودية', 'سكراب مستشفى', 'سكراب جراحي', 'معاطف مختبر', 'زي طبيب', 'سكراب مضاد للميكروبات'],
  locale: 'ar',
  pageType: 'category',
  path: '/ar/shop/medical-scrubs',
  image: '/images/healthcare/scrubs-collections.jpg',
  imageAlt: 'سكراب طبي وأزياء رعاية صحية السعودية',
  aiSummary: 'UNEOM medical scrubs collection in Saudi Arabia.',
  aiSummaryAr: 'مجموعة السكراب الطبي من يونيوم في السعودية. المنتجات تشمل: سكراب طبي فاخر (من 169 ريال) - مضاد للميكروبات، مقاوم للبقع. زي تمريض (من 149 ريال) - مريح للمناوبات الطويلة. سكراب جراحي (من 199 ريال) - جاهز للتعقيم. معاطف مختبر (من 129 ريال) - مظهر احترافي. جميع المنتجات تتميز بقماش مضاد للميكروبات، ماص للرطوبة، ومتوفرة بألوان متعددة. متاحة للمستشفيات والعيادات والمراكز الطبية في جميع أنحاء السعودية.'
});

export const dynamic = 'force-static';

const medicalFAQsAr = [
  { question: 'ما المقاسات المتوفرة للسكراب الطبي؟', questionAr: 'ما المقاسات المتوفرة للسكراب الطبي؟', answer: 'XS to 5XL.', answerAr: 'نقدم سكراب طبي بمقاسات من XS إلى 5XL للرجال والنساء. المقاسات المخصصة متاحة للطلبات بالجملة من 50+ قطعة.' },
  { question: 'هل السكراب مضاد للميكروبات؟', questionAr: 'هل السكراب مضاد للميكروبات؟', answer: 'Yes, antimicrobial treatment.', answerAr: 'نعم، سكرابنا الفاخر والجراحي يتميز بمعالجة قماش مضادة للميكروبات تمنع نمو البكتيريا وتقلل الروائح، تدوم حتى 50 غسلة.' },
  { question: 'هل يمكنني إضافة شعار مستشفاي على السكراب؟', questionAr: 'هل يمكنني إضافة شعار مستشفاي على السكراب؟', answer: 'Yes, embroidery available.', answerAr: 'نعم، نقدم خدمات تطريز وطباعة احترافية لشعارات المستشفيات. الحد الأدنى للطلب 12 قطعة للتخصيص بالشعار. الأسعار تبدأ من 15 ريال للقطعة.' },
  { question: 'كم سرعة التوصيل للرياض؟', questionAr: 'كم سرعة التوصيل للرياض؟', answer: '2-3 business days.', answerAr: 'المنتجات المتوفرة تُوصل خلال 2-3 أيام عمل في الرياض. التوصيل في نفس اليوم متاح للطلبات العاجلة قبل 12 ظهراً.' },
  { question: 'هل تقدمون خصومات بالجملة للمستشفيات؟', questionAr: 'هل تقدمون خصومات بالجملة للمستشفيات؟', answer: 'Yes, up to 25% off.', answerAr: 'نعم! طلبات المستشفيات بالجملة تحصل على: 50-99 قطعة: خصم 10%، 100-249 قطعة: خصم 15%، 250+ قطعة: خصم 20-25%. الحسابات المؤسسية تحصل على مزايا إضافية.' },
];

const products = [
  { id: 'premium-medical-scrubs', name: 'سكراب طبي فاخر', nameAr: 'سكراب طبي فاخر', description: 'سكراب مضاد للميكروبات عالي الأداء', price: 'من ١٦٩ ريال', originalPrice: '٢٤٩ ريال', image: '/images/healthcare/scrubs-collections.jpg', href: '/ar/shop/medical-scrubs/premium-medical-scrubs', features: ['مضاد للميكروبات', 'مقاوم للبقع', 'ماص للرطوبة'], isBestseller: true, rating: 4.9 },
  { id: 'nursing-uniform-set', name: 'طقم زي التمريض', nameAr: 'طقم زي تمريض', description: 'زي تمريض مريح للمناوبات الطويلة', price: 'من ١٤٩ ريال', image: '/images/healthcare/nurse-uniform.jpg', href: '/ar/shop/medical-scrubs/nursing-uniform-set', features: ['قابل للتنفس', 'قماش مرن', 'جيوب متعددة'], rating: 4.8 },
  { id: 'surgical-scrubs', name: 'سكراب الجراحة', nameAr: 'سكراب جراحي', description: 'سكراب جراحي جاهز للتعقيم', price: 'من ١٩٩ ريال', image: '/images/healthcare/dept-surgeons.jpg', href: '/ar/shop/medical-scrubs/surgical-scrubs', features: ['جاهز للتعقيم', 'مقاوم للسوائل', 'مضاد للميكروبات'], isNew: true, rating: 4.9 },
  { id: 'lab-coats', name: 'معاطف المختبر الطبية', nameAr: 'معاطف مختبر طبية', description: 'معاطف مختبر احترافية للأطباء', price: 'من ١٢٩ ريال', image: '/images/products/lab-coat.jpg', href: '/ar/shop/medical-scrubs/lab-coats', features: ['مظهر احترافي', 'مقاوم للبقع', 'أطوال متعددة'], rating: 4.7 },
  { id: 'doctor-coat', name: 'معطف الطبيب الأبيض', nameAr: 'معطف طبيب أبيض', description: 'معاطف بيضاء كلاسيكية للأطباء', price: 'من ١٧٩ ريال', image: '/images/healthcare/healthcare_medical_doctor.jpg', href: '/ar/shop/medical-scrubs/doctor-coat', features: ['قماش فاخر', 'مقاوم للتجاعيد', 'جاهز للتطريز'], rating: 4.8 },
  { id: 'maternity-scrubs', name: 'سكراب حوامل', description: 'سكراب مريح للأمهات الحوامل', price: 'من 189 ريال', image: '/images/products/maternity-scrubs.jpg', href: '/ar/shop/medical-scrubs/maternity-scrubs', features: ['قابل للتوسع', 'لوحة دعم', 'مريح'] },
];

export default function MedicalScrubsPageAr() {
  return (
    <div dir="rtl">
      <SEO2026 title="سكراب طبي السعودية | يونيوم" titleAr="سكراب طبي السعودية | يونيوم" description="Buy medical scrubs." descriptionAr="شراء سكراب طبي فاخر في السعودية." locale="ar" pageType="category" mainEntity="Medical Scrubs" mainEntityAr="السكراب الطبي وأزياء الرعاية الصحية" primaryImage="/images/healthcare/scrubs-collections.jpg" primaryImageAlt="سكراب طبي" faqs={medicalFAQsAr} breadcrumbs={[{ name: 'Shop', nameAr: 'المتجر', url: '/ar/shop' }, { name: 'Medical Scrubs', nameAr: 'السكراب الطبي', url: '/ar/shop/medical-scrubs' }]} industry="الرعاية الصحية" serviceArea={['الرياض', 'جدة', 'الدمام', 'جميع السعودية']} />

      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'الرئيسية', href: '/ar' }, { label: 'المتجر', href: '/ar/shop' }, { label: 'السكراب الطبي', href: '/ar/shop/medical-scrubs' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"><span className="text-emerald-400">🏥</span><span className="text-sm font-medium">أزياء الرعاية الصحية</span></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">السكراب <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 text-transparent bg-clip-text">الطبي</span></h1>
            <p className="text-xl mb-8 text-emerald-100 leading-relaxed">أزياء رعاية صحية فاخرة للمحترفين الطبيين في جميع أنحاء السعودية. مضادة للميكروبات، مريحة، واحترافية.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">+6</div><div className="text-sm text-emerald-200">منتجات</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">169</div><div className="text-sm text-emerald-200">ريال البداية</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">XS-5XL</div><div className="text-sm text-emerald-200">المقاسات</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">25%</div><div className="text-sm text-emerald-200">خصم الجملة</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="تسوق أزياء الرعاية الصحية" centered>مجموعة السكراب الطبي</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {product.isBestseller && <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">الأكثر مبيعاً</span>}
                    {product.isNew && <span className="absolute top-4 left-4 z-10 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">جديد</span>}
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">{product.features?.slice(0, 3).map((f, i) => (<span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center">
                      <div><span className="text-lg font-bold text-emerald-600">{product.price}</span>{product.originalPrice && <span className="text-sm text-gray-400 line-through mr-2">{product.originalPrice}</span>}</div>
                      <span className="text-gray-400 group-hover:text-emerald-600 transition-colors">←</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="أسئلة شائعة" centered>الأسئلة الشائعة عن السكراب الطبي</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {medicalFAQsAr.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.questionAr}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answerAr}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">تحتاج سكراب طبي بالجملة؟</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">احصل على أسعار خاصة للمستشفيات والمرافق الصحية. تطريز الشعار متاح.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ar/quote?category=medical-scrubs" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">احصل على عرض سعر للمستشفيات ←</Link>
              <Link href="/ar/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-bold rounded-xl transition-all">تواصل مع المبيعات</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/shop/medical-scrubs" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇬🇧 English</Link></div></section>
    </div>
  );
}
