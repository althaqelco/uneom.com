import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaQuoteLeft, FaQuoteRight, FaLightbulb } from 'react-icons/fa';
import { ExpertTip } from '@/lib/api/blog';
import { authors, Author } from '@/lib/data/authors';
import { useRouter } from 'next/router';

interface ExpertTipsProps {
  tips: ExpertTip[];
  showImage?: boolean;
}

const ExpertTips: React.FC<ExpertTipsProps> = ({ tips, showImage = true }) => {
  const { locale } = useRouter();
  const isArabic = locale === 'ar';

  if (!tips || tips.length === 0) {
    return null;
  }

  // Get author data for each tip
  const tipsWithAuthors = tips.map((tip) => {
    const author = authors.find((a) => a.id === tip.authorId);
    return { ...tip, author };
  });

  return (
    <div className={`${isArabic ? 'rtl text-right' : 'ltr'} bg-primary-50 rounded-xl border border-primary-100 overflow-hidden`}>
      <div className="bg-primary-700 px-4 py-3 flex items-center">
        <FaLightbulb className="text-primary-200 mr-2" />
        <h3 className="text-white font-bold">
          {isArabic ? 'نصائح من الخبراء' : 'Expert Tips'}
        </h3>
      </div>

      <div className="p-4 md:p-6">
        <div className="space-y-6">
          {tipsWithAuthors.map((tip, index) => (
            <div key={index} className="relative">
              {tip.author && (
                <div className="flex items-start">
                  {showImage && (
                    <div className="flex-shrink-0 mr-4">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary-100">
                        <Image
                          src={tip.author.avatar}
                          alt={isArabic && tip.author.nameAr ? tip.author.nameAr : tip.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex-grow">
                    <div className="bg-white rounded-lg p-4 shadow-sm relative">
                      <FaQuoteLeft className="text-primary-200 absolute top-3 left-3 opacity-20 text-xl" />
                      
                      <div className="relative z-10">
                        <p className="text-neutral-700">
                          {tip.content}
                        </p>
                      </div>
                      
                      <FaQuoteRight className="text-primary-200 absolute bottom-3 right-3 opacity-20 text-xl" />
                    </div>

                    <div className="mt-3 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-neutral-800">
                          {isArabic && tip.author.nameAr
                            ? tip.author.nameAr
                            : tip.author.name}
                        </p>
                        <p className="text-neutral-600 text-sm">
                          {isArabic && tip.author.titleAr
                            ? tip.author.titleAr
                            : tip.author.title}
                        </p>
                      </div>

                      <Link
                        href={`/${isArabic ? 'ar/' : ''}authors/${tip.author.id}`}
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                      >
                        {isArabic ? 'عرض الملف' : 'View Profile'}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-primary-100">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-600">
              {isArabic
                ? 'نصائح من خبراء صناعة الأزياء الموحدة ذوي الخبرة والتخصص'
                : 'Tips from experienced uniform industry experts with domain expertise'}
            </p>
            <Link
              href={`/${isArabic ? 'ar/' : ''}authors`}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors"
            >
              {isArabic ? 'جميع الخبراء' : 'All Experts'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertTips; 