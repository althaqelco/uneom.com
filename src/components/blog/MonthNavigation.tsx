// Placeholder component to fix build errors
// This component is needed by the disabled archive files

import React from 'react';

interface MonthNavigationProps {
  months?: number[];
  currentMonth?: number;
  year?: number;
}

const MonthNavigation: React.FC<MonthNavigationProps> = ({ months = [], currentMonth, year }) => {
  return (
    <div className="month-navigation">
      {/* Placeholder for month navigation */}
    </div>
  );
};

export default MonthNavigation; 