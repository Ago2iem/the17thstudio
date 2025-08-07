// src/components/dashboard/SummaryCard.tsx

import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string;
  change: number;
  icon?: React.ReactNode;
  className?: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  change,
  icon,
  className = ''
}) => {
  const getChangeColor = (change: number) => {
    if (change > 0) return 'text-green-600';
    if (change < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className={`bg-white rounded-lg p-6 shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 flex items-center gap-2">
          {icon}
          {title}
        </h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className={`flex items-center gap-1 text-sm font-medium ${getChangeColor(change)}`}>
          {change > 0 ? '+' : ''}{change}%
        </div>
      </div>
    </div>
  );
};