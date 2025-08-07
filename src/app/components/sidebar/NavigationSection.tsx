// src/app/components/sidebar/NavigationSection.tsx

import React from 'react';
import { NavigationSection as NavigationSectionType } from '../../lib/sidebar-types';
import { NavigationItem } from './NavigationItem';

interface NavigationSectionProps {
  section: NavigationSectionType;
  activeItem: string;
  onNavigate: (itemId: string) => void;
  isCollapsed?: boolean;
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({
  section,
  activeItem,
  onNavigate,
  isCollapsed = false
}) => {
  return (
    <div className="space-y-1">
      {section.title && !isCollapsed && (
        <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {section.title}
        </h3>
      )}

      <div className="space-y-1">
        {section.items.map((item) => (
          <NavigationItem
            key={item.id}
            item={item}
            isActive={activeItem === item.id}
            onClick={onNavigate}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
    </div>
  );
};