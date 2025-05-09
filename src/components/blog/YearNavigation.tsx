// Placeholder component to fix build errors
// This component is needed by the disabled archive files

import React from 'react';

interface YearNavigationProps {
  years?: number[];
  currentYear?: number;
}

const YearNavigation: React.FC<YearNavigationProps> = ({ years = [], currentYear }) => {
  return (
    <div className="year-navigation">
      {/* Placeholder for year navigation */}
    </div>
  );
};

export default YearNavigation; 