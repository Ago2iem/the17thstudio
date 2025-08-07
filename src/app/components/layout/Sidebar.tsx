// src/app/components/layout/Sidebar.tsx

import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SidebarProps } from '../../lib/sidebar-types';
import { NavigationSection } from '../sidebar/NavigationSection';
import { navigationData } from '../../lib/sidebar-data';
import Logo from '../../../../public/assets/Logo'
import Menu from '../../../../public/assets/Menu';

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  activeItem,
  onNavigate,
  className = ''
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-200 shadow-sm transition-all duration-300 lg:relative lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isCollapsed ? 'w-20' : 'w-64'}
        ${className}
      `}>
        {/* Header */}
        <div className={`
          flex items-center justify-between p-4 border-b border-gray-200
          ${isCollapsed ? 'px-3' : 'px-4'}
        `}>
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <Logo />
            </div>
          )}

          <div className="flex items-center gap-1">
            {/* Collapse button - Desktop only */}
            <button
              onClick={handleCollapse}
              className="hidden lg:flex p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? <Menu /> : <ChevronLeft size={18} />}
            </button>

            {/* Close button - Mobile only */}
            <button
              onClick={onToggle}
              className="lg:hidden p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-8 overflow-y-auto">
          {navigationData.map((section) => (
            <NavigationSection
              key={section.id}
              section={section}
              activeItem={activeItem}
              onNavigate={onNavigate}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>
    </>
  );
};