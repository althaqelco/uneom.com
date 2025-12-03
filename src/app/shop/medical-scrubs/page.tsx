import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateMetadata2026 } from '@/lib/seo-2026';
import SEO2026 from '@/components/seo/SEO2026';

export const metadata: Metadata = generateMetadata2026({
  title: 'Medical Scrubs Saudi Arabia | Buy Healthcare Uniforms Online | UNEOM',
  titleAr: 'سكراب طبي السعودية | شراء أزياء الرعاية الصحية أونلاين | يونيوم',
  description: 'Buy premium medical scrubs in Saudi Arabia. Antimicrobial, comfortable, durable healthcare uniforms for doctors, nurses, surgeons. From SAR 169. Fast delivery, bulk discounts!',
  descriptionAr: 'شراء سكراب طبي فاخر في السعودية. أزياء رعاية صحية مضادة للميكروبات، مريحة، متينة للأطباء والممرضين والجراحين. من 169 ريال. توصيل سريع، خصومات بالجملة!',
  keywords: ['medical scrubs saudi arabia', 'buy scrubs riyadh', 'healthcare uniforms ksa', 'nursing uniforms saudi', 'hospital scrubs', 'surgical scrubs', 'lab coats saudi', 'doctor uniforms', 'antimicrobial scrubs'],
  keywordsAr: ['سكراب طبي السعودية', 'شراء سكراب الرياض', 'أزياء رعاية صحية', 'زي تمريض السعودية', 'سكراب مستشفى', 'سكراب جراحي', 'معاطف مختبر'],
  locale: 'en',
  pageType: 'category',
  path: '/shop/medical-scrubs',
  image: '/images/products/scrubs-set.jpg',
  imageAlt: 'Medical Scrubs and Healthcare Uniforms Saudi Arabia',
  aiSummary: 'UNEOM medical scrubs collection in Saudi Arabia. Products include: Premium Medical Scrubs (from SAR 169) - antimicrobial, stain-resistant. Nursing Uniforms (from SAR 149) - comfortable for long shifts. Surgical Scrubs (from SAR 199) - sterile-ready. Lab Coats (from SAR 129) - professional appearance. All products feature antimicrobial fabric, moisture-wicking, and come in multiple colors. Available for hospitals, clinics, and medical centers across Saudi Arabia.',
  aiSummaryAr: 'مجموعة السكراب الطبي من يونيوم في السعودية. المنتجات تشمل: سكراب طبي فاخر (من 169 ريال) - مضاد للميكروبات، مقاوم للبقع. زي تمريض (من 149 ريال) - مريح للمناوبات الطويلة. سكراب جراحي (من 199 ريال). معاطف مختبر (من 129 ريال).'
});

export const dynamic = 'force-static';

const medicalFAQs = [
  { question: 'What sizes are available for medical scrubs?', questionAr: 'ما المقاسات المتوفرة للسكراب الطبي؟', answer: 'We offer medical scrubs in sizes XS to 5XL for both men and women. Custom sizing is available for bulk orders of 50+ pieces.', answerAr: 'نقدم سكراب طبي بمقاسات من XS إلى 5XL للرجال والنساء. المقاسات المخصصة متاحة للطلبات بالجملة من 50+ قطعة.' },
  { question: 'Are the scrubs antimicrobial?', questionAr: 'هل السكراب مضاد للميكروبات؟', answer: 'Yes, our premium and surgical scrubs feature antimicrobial fabric treatment that inhibits bacteria growth and reduces odors, lasting up to 50 washes.', answerAr: 'نعم، سكرابنا الفاخر والجراحي يتميز بمعالجة قماش مضادة للميكروبات تمنع نمو البكتيريا وتقلل الروائح، تدوم حتى 50 غسلة.' },
  { question: 'Can I add my hospital logo to scrubs?', questionAr: 'هل يمكنني إضافة شعار مستشفاي على السكراب؟', answer: 'Yes, we offer professional embroidery and printing services for hospital logos. Minimum order is 12 pieces for logo customization. Prices start from SAR 15 per piece.', answerAr: 'نعم، نقدم خدمات تطريز وطباعة احترافية لشعارات المستشفيات. الحد الأدنى للطلب 12 قطعة للتخصيص بالشعار. الأسعار تبدأ من 15 ريال للقطعة.' },
  { question: 'How fast is delivery to Riyadh?', questionAr: 'كم سرعة التوصيل للرياض؟', answer: 'Stock items are delivered within 2-3 business days in Riyadh. Same-day delivery available for urgent orders placed before 12 PM.', answerAr: 'المنتجات المتوفرة تُوصل خلال 2-3 أيام عمل في الرياض. التوصيل في نفس اليوم متاح للطلبات العاجلة قبل 12 ظهراً.' },
  { question: 'Do you offer bulk discounts for hospitals?', questionAr: 'هل تقدمون خصومات بالجملة للمستشفيات؟', answer: 'Yes! Hospital bulk orders receive: 50-99 pieces: 10% off, 100-249 pieces: 15% off, 250+ pieces: 20-25% off. Corporate accounts get additional benefits.', answerAr: 'نعم! طلبات المستشفيات بالجملة تحصل على: 50-99 قطعة: خصم 10%، 100-249 قطعة: خصم 15%، 250+ قطعة: خصم 20-25%. الحسابات المؤسسية تحصل على مزايا إضافية.' },
];

const products = [
  { id: 'premium-medical-scrubs', name: 'Premium Medical Scrubs', nameAr: 'سكراب طبي فاخر', description: 'High-performance antimicrobial scrubs', price: 'From SAR 169', originalPrice: 'SAR 249', image: '/images/products/scrubs-set.jpg', href: '/shop/medical-scrubs/premium-medical-scrubs', features: ['Antimicrobial', 'Stain-resistant', 'Moisture-wicking'], isBestseller: true, rating: 4.9 },
  { id: 'nursing-uniform-set', name: 'Nursing Uniform Set', nameAr: 'طقم زي تمريض', description: 'Comfortable nursing uniforms for long shifts', price: 'From SAR 149', image: '/images/products/nursing-scrubs.jpg', href: '/shop/medical-scrubs/nursing-uniform-set', features: ['Breathable', 'Stretch fabric', 'Multiple pockets'], rating: 4.8 },
  { id: 'surgical-scrubs', name: 'Surgical Scrubs', nameAr: 'سكراب جراحي', description: 'Sterile-ready surgical scrubs', price: 'From SAR 199', image: '/images/products/surgical-scrubs.jpg', href: '/shop/medical-scrubs/surgical-scrubs', features: ['Sterile-ready', 'Fluid-resistant', 'Antimicrobial'], isNew: true, rating: 4.9 },
  { id: 'lab-coats', name: 'Medical Lab Coats', nameAr: 'معاطف مختبر طبية', description: 'Professional lab coats for doctors', price: 'From SAR 129', image: '/images/products/lab-coat.jpg', href: '/shop/medical-scrubs/lab-coats', features: ['Professional look', 'Stain-resistant', 'Multiple lengths'], rating: 4.7 },
  { id: 'doctor-coat', name: 'Doctor White Coat', nameAr: 'معطف طبيب أبيض', description: 'Classic white coats for physicians', price: 'From SAR 179', image: '/images/products/doctor-coat.jpg', href: '/shop/medical-scrubs/doctor-coat', features: ['Premium fabric', 'Wrinkle-free', 'Embroidery-ready'], rating: 4.8 },
  { id: 'maternity-scrubs', name: 'Maternity Scrubs', nameAr: 'سكراب حوامل', description: 'Comfortable scrubs for expecting mothers', price: 'From SAR 189', image: '/images/products/maternity-scrubs.jpg', href: '/shop/medical-scrubs/maternity-scrubs', features: ['Expandable', 'Support panel', 'Comfortable'], rating: 4.9 },
];

export default function MedicalScrubsPage() {
  return (
    <>
      <SEO2026
        title="Medical Scrubs Saudi Arabia | UNEOM"
        titleAr="سكراب طبي السعودية | يونيوم"
        description="Buy premium medical scrubs in Saudi Arabia."
        descriptionAr="شراء سكراب طبي فاخر في السعودية."
        locale="en"
        pageType="category"
        mainEntity="Medical Scrubs and Healthcare Uniforms"
        mainEntityAr="السكراب الطبي وأزياء الرعاية الصحية"
        primaryImage="/images/products/scrubs-set.jpg"
        primaryImageAlt="Medical Scrubs"
        faqs={medicalFAQs}
        breadcrumbs={[
          { name: 'Shop', nameAr: 'المتجر', url: '/shop' },
          { name: 'Medical Scrubs', nameAr: 'السكراب الطبي', url: '/shop/medical-scrubs' },
        ]}
        industry="Healthcare"
        serviceArea={['Riyadh', 'Jeddah', 'Dammam', 'All Saudi Arabia']}
      />

      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-800 text-white relative overflow-hidden py-16">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Shop', href: '/shop' }, { label: 'Medical Scrubs', href: '/shop/medical-scrubs' }]} className="text-white/80 mb-6 relative z-10" />
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="text-emerald-400">🏥</span>
              <span className="text-sm font-medium">Healthcare Uniforms</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Medical <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 text-transparent bg-clip-text">Scrubs</span></h1>
            <p className="text-xl mb-8 text-emerald-100 leading-relaxed">Premium healthcare uniforms for medical professionals across Saudi Arabia. Antimicrobial, comfortable, and professional.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">6+</div><div className="text-sm text-emerald-200">Products</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">169</div><div className="text-sm text-emerald-200">SAR Starting</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">XS-5XL</div><div className="text-sm text-emerald-200">Sizes</div></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"><div className="text-2xl font-bold text-emerald-300">25%</div><div className="text-sm text-emerald-200">Bulk Discount</div></div>
            </div>
          </div>
        </Container>
      </section>

      <main className="py-16">
        <Container>
          <section className="mb-16">
            <SectionHeading subtitle="Shop Healthcare Uniforms" centered>Medical Scrubs Collection</SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {products.map((product) => (
                <Link key={product.id} href={product.href} className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {product.isBestseller && <span className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">Bestseller</span>}
                    {product.isNew && <span className="absolute top-4 right-4 z-10 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">New</span>}
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2 mb-3">{product.features?.slice(0, 3).map((f, i) => (<span key={i} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">{f}</span>))}</div>
                    <div className="flex justify-between items-center">
                      <div><span className="text-lg font-bold text-emerald-600">{product.price}</span>{product.originalPrice && <span className="text-sm text-gray-400 line-through mr-2">{product.originalPrice}</span>}</div>
                      <span className="text-gray-400 group-hover:text-emerald-600 transition-colors">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-16" itemScope itemType="https://schema.org/FAQPage">
            <SectionHeading subtitle="Common Questions" centered>Medical Scrubs FAQ</SectionHeading>
            <div className="max-w-4xl mx-auto mt-12 space-y-4">
              {medicalFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="text-lg font-bold text-gray-900 mb-3" itemProp="name">{faq.question}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-gray-600 leading-relaxed" itemProp="text">{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Bulk Medical Scrubs?</h2>
            <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto">Get special pricing for hospitals and healthcare facilities. Custom logo embroidery available.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote?category=medical-scrubs" className="inline-flex items-center px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold rounded-xl transition-all shadow-lg">Get Hospital Quote →</Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-emerald-900 font-bold rounded-xl transition-all">Contact Sales</Link>
            </div>
          </section>
        </Container>
      </main>

      <section className="py-6 bg-gray-100 border-t"><div className="container mx-auto px-4 text-center"><Link href="/ar/shop/medical-scrubs" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">🇸🇦 العربية</Link></div></section>
    </>
  );
}
