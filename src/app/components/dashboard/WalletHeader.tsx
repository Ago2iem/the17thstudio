import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { StatusIndicator } from '../common/StatusIndicator';
import { TabNavigation } from '../common/TabNavigation';
import { UserAvatars } from './UserAvatar';
import { User } from '../../lib/types';

interface WalletHeaderProps {
  title: string;
  status: string;
  users: User[];
  activeTab: string;
  tabs: string[];
  onTabChange: (tab: string) => void;
  onShare?: () => void;
  className?: string;
}

export const WalletHeader: React.FC<WalletHeaderProps> = ({
  title,
  status,
  users,
  activeTab,
  tabs,
  onTabChange,
  onShare,
  className = ''
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      {/* Header section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <h1 className="text-[34px] leading-[40px] tracking-[-2%] font-bold text-[#1B2528] ">{title}</h1>
          <StatusIndicator status={status} type="active" />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onShare}
            className="px-4 py-2 bg-[#4B8B9F] text-[#020303] rounded-[16px] hover:bg-[#4B8B9F] transition-colors w-[78px] h-[36px] font-normal text-[15px]"
          >
            Share
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors border border-[2px] rounded-[16px] border-[#49656E]">
            <MoreHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* User avatars */}
      <UserAvatars users={users} className="mb-6" />

      {/* Tab navigation */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    </div>
  );
};