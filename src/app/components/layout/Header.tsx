// src/components/layout/Header.tsx

import React from 'react';
import { Menu } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { Avatar } from '../ui/Avatar';
import Boxes from '../../../../public/assets/Boxes';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuClick?: () => void;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onMenuClick,
  className = ''
}) => {
  return (
    <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end gap-3 items-center h-16">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 transition-colors"
              onClick={onMenuClick}
            >
              <Menu size={20} />
            </button>

            <div />
          </div>

          {/* Center section - Search */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search transactions..."
            />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
              <Boxes />
            </button>
            <Avatar name="user" />
          </div>
        </div>
      </div>
    </header>
  );
};