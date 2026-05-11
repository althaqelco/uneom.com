import Image from 'next/image';
import { Eyebrow } from './Eyebrow';
import type { Lang } from '@/lib/i18n/ui';

interface Testimonial {
  nameEn: string;
  nameAr: string;
  titleEn: string;
  titleAr: string;
  companyEn: string;
  companyAr: string;
  quoteEn: string;
  quoteAr: string;
  image: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    nameEn: 'Dr. Abdullah Al-Otaibi',
    nameAr: 'د. عبدالله العتيبي',
    titleEn: 'Director of Operations',
    titleAr: 'مدير العمليات',
    companyEn: 'King Faisal Specialist Hospital',
    companyAr: 'مستشفى الملك فيصل التخصصي',
    quoteEn: 'UNEOM delivered 3,200 scrub sets across four departments in 18 days — each unit tracked, fitted, and replaced on-cycle. Their programme management is what separates them from every catalogue supplier we\'ve tried.',
    quoteAr: 'سلّم فريق UNEOM 3,200 طقم سكراب عبر أربعة أقسام خلال 18 يوماً — كل قطعة مُتتبّعة ومُقاسة ومُستبدلة في موعدها. إدارتهم للبرنامج هي ما يميّزهم عن كل مورّد كتالوج جرّبناه.',
    image: '/images/testimonials/abdullah.png',
    rating: 5
  },
  {
    nameEn: 'Aisha Al-Qahtani',
    nameAr: 'عائشة القحطاني',
    titleEn: 'VP of Human Capital',
    titleAr: 'نائب رئيس الموارد البشرية',
    companyEn: 'Hilton Riyadh Hotels & Resorts',
    companyAr: 'فنادق ومنتجعات هيلتون الرياض',
    quoteEn: 'We switched from an international supplier to UNEOM for our 1,400-room property. The fabric endurance in Riyadh\'s climate and the on-site fitting programme saved us 34% on annual replacement costs.',
    quoteAr: 'انتقلنا من مورّد دولي إلى UNEOM لعقارنا المكوّن من 1,400 غرفة. متانة الأقمشة في مناخ الرياض وبرنامج القياس الميداني وفّرا لنا 34% من تكاليف الاستبدال السنوية.',
    image: '/images/testimonials/aisha.png',
    rating: 5
  },
  {
    nameEn: 'Eng. Fahad Al-Shamrani',
    nameAr: 'م. فهد الشمراني',
    titleEn: 'HSE Manager',
    titleAr: 'مدير الصحة والسلامة والبيئة',
    companyEn: 'SABIC Manufacturing',
    companyAr: 'سابك للتصنيع',
    quoteEn: 'The FR-rated coveralls UNEOM developed for our petrochemical facilities exceeded NFPA 70E requirements. 14-month warranty, on-site replacement within 48 hours. That\'s the standard we needed.',
    quoteAr: 'بدلات الحماية من الحريق التي طوّرها UNEOM لمنشآتنا البتروكيماوية تجاوزت متطلبات NFPA 70E. ضمان 14 شهراً واستبدال ميداني خلال 48 ساعة. هذا هو المعيار الذي كنّا نحتاجه.',
    image: '/images/testimonials/fahad.jpg',
    rating: 5
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? 'text-amber-400' : 'text-ink-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface Props {
  lang?: Lang;
}

export function TestimonialSection({ lang = 'en' }: Props) {
  const isAr = lang === 'ar';

  return (
    <section className="section bg-ink-50">
      <div className="container-page">
        <div className="flex flex-col items-center text-center mb-14">
          <Eyebrow>{isAr ? 'ماذا يقول عملاؤنا' : 'Client testimonials'}</Eyebrow>
          <h2 className="mt-5 text-display-lg text-navy-900 balance max-w-3xl">
            {isAr ? (
              <>برامج يثق بها <span className="text-accent-700">صنّاع القرار</span> في المملكة.</>
            ) : (
              <>Programmes trusted by Saudi <span className="text-accent-700">decision-makers</span>.</>
            )}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 pretty">
            {isAr
              ? 'هذه ليست مراجعات مجهولة. هؤلاء قادة عمليات يديرون برامج زي موحّد تخدم آلاف الموظفين.'
              : 'These aren\'t anonymous reviews. These are operations leaders running uniform programmes for thousands of employees.'}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => {
            const name = isAr ? t.nameAr : t.nameEn;
            const title = isAr ? t.titleAr : t.titleEn;
            const company = isAr ? t.companyAr : t.companyEn;
            const quote = isAr ? t.quoteAr : t.quoteEn;

            return (
              <article
                key={t.nameEn}
                className="testimonial-card group relative flex flex-col rounded-3xl bg-white p-8 shadow-elevation-sm ring-1 ring-ink-100 transition-all duration-500 hover:shadow-elevation-lg hover:-translate-y-1"
              >
                {/* Accent top border */}
                <div className="absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r from-accent-500 to-accent-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />

                {/* Quote icon */}
                <svg
                  className="mb-4 h-8 w-8 text-accent-200 transition-colors duration-500 group-hover:text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <StarRating count={t.rating} />

                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600 pretty">
                  &ldquo;{quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-6">
                  <Image
                    src={t.image}
                    alt={name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-ink-100"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-navy-900">{name}</div>
                    <div className="text-xs text-ink-500">{title}</div>
                    <div className="text-xs font-semibold text-accent-700">{company}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
