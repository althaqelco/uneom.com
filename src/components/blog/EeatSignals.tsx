import React from 'react';
import { FaGraduationCap, FaAward, FaBriefcase, FaShieldAlt } from 'react-icons/fa';
import { useSafeLocale } from '@/lib/hooks/useSafeRouter';
import { getEeatSignalsForPost } from '@/lib/api/blog';

interface EeatSignalsProps {
  postSlug: string;
  minimal?: boolean;
}

const EeatSignals: React.FC<EeatSignalsProps> = ({ postSlug, minimal = false }) => {
  const { locale, isArabic } = useSafeLocale();
  
  // Get E-E-A-T signals for this post
  const signals = getEeatSignalsForPost(postSlug);
  
  // Count active signals
  const activeSignalsCount = Object.values(signals).filter(Boolean).length;
  
  // If no active signals, don't render component
  if (activeSignalsCount === 0) {
    return null;
  }
  
  // Define signals data
  const signalsData = [
    {
      name: isArabic ? 'خبرة متخصصة' : 'Expertise',
      icon: <FaGraduationCap className="h-4 w-4" />,
      active: signals.expertise,
      description: isArabic
        ? 'محتوى من خبير متخصص في المجال'
        : 'Content from a domain expert'},
    {
      name: isArabic ? 'خبرة عملية' : 'Experience',
      icon: <FaBriefcase className="h-4 w-4" />,
      active: signals.experience,
      description: isArabic
        ? 'مؤلف ذو خبرة عملية واسعة'
        : 'Author with substantial practical experience'},
    {
      name: isArabic ? 'موثوقية' : 'Authoritativeness',
      icon: <FaAward className="h-4 w-4" />,
      active: signals.authoritativeness,
      description: isArabic
        ? 'محتوى مدعوم بمصادر موثوقة'
        : 'Content backed by authoritative sources'},
    {
      name: isArabic ? 'مصداقية' : 'Trustworthiness',
      icon: <FaShieldAlt className="h-4 w-4" />,
      active: signals.trustworthiness,
      description: isArabic
        ? 'معلومات دقيقة وموثوقة'
        : 'Accurate and reliable information'},
  ];

  // Minimal view for mobile or compact displays
  if (minimal) {
    return (
      <div className={`${isArabic ? 'rtl text-right' : 'ltr'} inline-flex items-center gap-2 bg-neutral-50 px-3 py-2 rounded-md`}>
        <span className="text-xs font-medium text-neutral-600">
          {isArabic ? 'مؤشرات الجودة:' : 'Quality Indicators:'}
        </span>
        <div className="flex gap-2">
          {signalsData
            .filter(signal => signal.active)
            .map((signal, index) => (
              <span 
                key={index}
                className="bg-primary-100 text-primary-700 p-1 rounded-full" 
                title={signal.description}
              >
                {signal.icon}
              </span>
            ))}
        </div>
      </div>
    );
  }

  // Full view
  return (
    <div className={`${isArabic ? 'rtl text-right' : 'ltr'} rounded-lg border border-neutral-200 overflow-hidden`}>
      <div className="bg-neutral-50 p-3 border-b border-neutral-200">
        <h3 className="font-medium text-neutral-800">
          {isArabic ? 'مؤشرات جودة المحتوى' : 'Content Quality Indicators'}
        </h3>
      </div>
      
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {signalsData.map((signal, index) => (
            <div 
              key={index}
              className={`flex items-center p-2 rounded ${
                signal.active
                  ? 'bg-primary-50 text-primary-700'
                  : 'bg-neutral-100 text-neutral-400'
              }`}
            >
              <div className={`p-1.5 rounded-full mr-2 ${
                signal.active
                  ? 'bg-primary-100'
                  : 'bg-neutral-200'
              }`}>
                {signal.icon}
              </div>
              <div>
                <p className={`text-sm font-medium ${
                  signal.active ? '' : 'opacity-60'
                }`}>
                  {signal.name}
                </p>
                {signal.active && (
                  <p className="text-xs mt-0.5">{signal.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-3 text-xs text-neutral-500">
          <p>
            {isArabic
              ? 'نحن نسعى جاهدين لتقديم محتوى عالي الجودة من خبراء موثوقين في المجال.'
              : 'We strive to provide high-quality content from trusted experts in the field.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EeatSignals; 