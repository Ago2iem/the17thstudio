import React from 'react';

interface StatusIndicatorProps {
  status: string;
  type?: 'active' | 'inactive' | 'pending';
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  status,
  type = 'active',
  className = ''
}) => {
  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-500',
    pending: 'bg-yellow-500'
  };

  return (
    <div className={`flex items-center gap-2 ${className}  rounded-[16px] bg-gray-300 px-1.5`}>
      <span className="text-sm text-[#1B2528]">{status}</span>
      <div className={`w-[6px] h-[6px] ${statusColors[type]} rounded-full`}></div>
    </div>
  );
};