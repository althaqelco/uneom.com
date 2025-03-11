import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeaturesGridProps {
  features: Feature[];
  columns?: number;
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ features, columns = 3 }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-8`}>
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
            {/* Using a placeholder icon - in a real implementation, you'd use a proper icon system */}
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
          <p className="text-neutral-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid; 