import React from 'react';
import Link from 'next/link';
import { FaListUl } from 'react-icons/fa';

interface TOCItem {
  id: string;
  title: string;
  subItems?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className = '' }) => {
  return (
    <div className={`bg-gray-50 rounded-lg p-5 border border-gray-200 ${className}`}>
      <h3 className="font-bold text-gray-800 mb-4 flex items-center">
        <FaListUl className="mr-2 text-primary-600" /> 
        Table of Contents
      </h3>
      
      <nav>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="text-gray-700">
              <Link 
                href={`#${item.id}`}
                className="hover:text-primary-600 transition-colors block py-1 font-medium"
              >
                {item.title}
              </Link>
              
              {item.subItems && item.subItems.length > 0 && (
                <ul className="pl-4 mt-1 space-y-1 border-l border-gray-200">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.id} className="text-gray-600 text-sm">
                      <Link 
                        href={`#${subItem.id}`}
                        className="hover:text-primary-600 transition-colors block py-1"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents; 