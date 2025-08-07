// src/app/components/sidebar/NavigationItem.tsx

import React from 'react';
import { NavigationItem as NavigationItemType } from '../../lib/sidebar-types';

interface NavigationItemProps {
  item: NavigationItemType;
  isActive: boolean;
  onClick: (itemId: string) => void;
  isCollapsed?: boolean;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onClick,
  isCollapsed = false
}) => {
  const { id, label, icon: Icon, badge } = item;

  return (
    <button
      onClick={() => onClick(id)}
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
        ${isActive
          ? 'bg-blue-100 text-[#3A6C7B] shadow-sm'
          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }
        ${isCollapsed ? 'justify-center px-2' : 'justify-start'}
      `}
      title={isCollapsed ? label : undefined}
    >
      <Icon
        size={20}
        className={`flex-shrink-0 ${isActive ? 'text-[#3A6C7B]' : 'text-gray-500'}`}
      />

      {!isCollapsed && (
        <>
          <span className="truncate flex-1 text-left">{label}</span>
          {badge && (
            <span className={`
              px-2 py-0.5 text-xs rounded-full font-medium flex-shrink-0
              ${isActive
                ? 'bg-blue-200 text-blue-800'
                : 'bg-gray-200 text-gray-700'
              }
            `}>
              {badge}
            </span>
          )}
        </>
      )}
    </button>
  );
};