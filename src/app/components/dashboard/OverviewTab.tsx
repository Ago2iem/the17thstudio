// src/app/components/dashboard/OverviewTab.tsx

import React from 'react';
import { DashboardSummary } from './DashboardSummary';
import { TransactionTable } from './TransactionTable';
import { Transaction, SortConfig, DashboardSummary as DashboardSummaryType } from '../../lib/types';

interface OverviewTabProps {
  summary: DashboardSummaryType;
  transactions: Transaction[];
  sortConfig: SortConfig;
  onSort: (key: keyof Transaction) => void;
  className?: string;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  summary,
  transactions,
  sortConfig,
  onSort,
  className = ''
}) => {
  return (
    <div className={className}>
      {/* Summary section */}
      <DashboardSummary summary={summary} className="mb-8" />

      {/* Transactions table */}
      <TransactionTable
        transactions={transactions}
        sortConfig={sortConfig}
        onSort={onSort}
      />
    </div>
  );
};