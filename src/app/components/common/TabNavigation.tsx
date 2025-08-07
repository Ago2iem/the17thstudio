// src/components/common/TabNavigation.tsx

import React from 'react';

interface TabNavigationProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  className?: string;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = ''
}) => {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === tab
                ? 'border-[#3A6C7B] text-[#3A6C7B]'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};