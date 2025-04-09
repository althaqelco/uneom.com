import React from 'react';
import { FaBook, FaLink, FaGraduationCap, FaIndustry, FaGlobe, FaNewspaper } from 'react-icons/fa';
import { Reference } from '@/lib/api/blog';
import { useRouter } from 'next/router';

interface ReferencesListProps {
  references: Reference[];
  compact?: boolean;
}

const ReferencesList: React.FC<ReferencesListProps> = ({ references, compact = false }) => {
  const { locale } = useRouter();
  const isArabic = locale === 'ar';

  if (!references || references.length === 0) {
    return null;
  }

  // Get the appropriate icon for reference type
  const getTypeIcon = (type: Reference['type']) => {
    switch (type) {
      case 'academic':
        return <FaGraduationCap className="text-primary-600" />;
      case 'industry':
        return <FaIndustry className="text-primary-600" />;
      case 'government':
        return <FaGlobe className="text-primary-600" />;
      case 'news':
        return <FaNewspaper className="text-primary-600" />;
      default:
        return <FaBook className="text-primary-600" />;
    }
  };

  // Get type label based on language
  const getTypeLabel = (type: Reference['type']) => {
    if (isArabic) {
      switch (type) {
        case 'academic':
          return 'دراسة أكاديمية';
        case 'industry':
          return 'مصدر صناعي';
        case 'government':
          return 'مصدر حكومي';
        case 'news':
          return 'مصدر إخباري';
        default:
          return 'مصدر آخر';
      }
    } else {
      switch (type) {
        case 'academic':
          return 'Academic Source';
        case 'industry':
          return 'Industry Source';
        case 'government':
          return 'Government Source';
        case 'news':
          return 'News Source';
        default:
          return 'Other Source';
      }
    }
  };

  // Sort references by type (academic and government first)
  const sortedReferences = [...references].sort((a, b) => {
    const typeOrder = { academic: 1, government: 2, industry: 3, news: 4, other: 5 };
    return (
      typeOrder[a.type as keyof typeof typeOrder] - typeOrder[b.type as keyof typeof typeOrder]
    );
  });

  return (
    <div className={`${isArabic ? 'rtl text-right' : 'ltr'}`}>
      <h3 className={`font-bold text-lg mb-4 ${compact ? 'text-sm' : ''}`}>
        {isArabic ? 'المصادر والمراجع' : 'Sources & References'}
      </h3>
      
      <div className="space-y-4">
        {sortedReferences.map((reference, index) => (
          <div 
            key={index} 
            className={`${
              compact 
                ? 'text-sm border-b border-neutral-100 pb-2' 
                : 'bg-neutral-50 rounded-lg p-4 border border-neutral-100'
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {getTypeIcon(reference.type)}
              </div>
              
              <div className="flex-grow">
                <h4 className={`font-medium ${compact ? 'text-sm' : ''}`}>
                  {reference.title}
                </h4>
                
                {reference.publisher && (
                  <p className={`text-neutral-600 ${compact ? 'text-xs' : 'text-sm'} mt-1`}>
                    {reference.publisher}
                    {reference.date && ` (${reference.date})`}
                  </p>
                )}
                
                <div className={`flex items-center mt-2 ${compact ? 'text-xs' : 'text-sm'}`}>
                  <span className="inline-block px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs mr-2">
                    {getTypeLabel(reference.type)}
                  </span>
                  
                  <a 
                    href={reference.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
                    aria-label={`Visit ${reference.title}`}
                  >
                    <FaLink className="mr-1" size={12} />
                    <span>{isArabic ? 'زيارة المصدر' : 'View Source'}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {!compact && (
        <div className="text-sm text-neutral-500 mt-6">
          <p>
            {isArabic
              ? 'نحن نعتمد على مصادر موثوقة وأبحاث أكاديمية حديثة لتقديم معلومات دقيقة.'
              : 'We rely on trusted sources and recent academic research to provide accurate information.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ReferencesList; 