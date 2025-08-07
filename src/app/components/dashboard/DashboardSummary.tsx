import React from 'react';
import { SummaryCard } from './SummaryCard';
import { DashboardSummary as DashboardSummaryType } from '../../lib/types';

interface DashboardSummaryProps {
  summary: DashboardSummaryType;
  className?: string;
}

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({
  summary,
  className = ''
}) => {
  const summaryItems = [
    {
      title: 'Total Balance',
      value: `$${summary.totalBalance.toLocaleString()}`,
      change: summary.balanceChange
    },
    {
      title: 'Total Credits',
      value: `$${summary.totalCredits.toLocaleString()}`,
      change: summary.creditsChange
    },
    {
      title: 'Total Debits',
      value: `$${summary.totalDebits.toLocaleString()}`,
      change: summary.debitsChange
    },
    {
      title: 'Transactions',
      value: summary.transactionCount.toString(),
      change: summary.transactionChange
    }
  ];

  return (
    <div className={className}>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryItems.map((item) => (
          <SummaryCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
    </div>
  );
};