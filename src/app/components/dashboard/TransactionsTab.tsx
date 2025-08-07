import React from 'react';
import { FileText } from 'lucide-react';
import { EmptyState } from '../ui/EmptyState';

interface TransactionsTabProps {
  className?: string;
}

export const TransactionsTab: React.FC<TransactionsTabProps> = ({
  className = ''
}) => {
  const handleAddTransaction = () => {
    console.log('Add transaction clicked');
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      <div className="min-h-[500px]">
        <EmptyState
          icon={FileText}
          title="No Transactions Yet"
          description="Start by adding your first transaction to see your financial activity here."
          action={{
            label: "Add Transaction",
            onClick: handleAddTransaction
          }}
        />
      </div>
    </div>
  );
};