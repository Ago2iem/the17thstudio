import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Transaction, SortConfig } from '../../lib/types';

interface TransactionTableProps {
  transactions: Transaction[];
  sortConfig: SortConfig;
  onSort: (key: keyof Transaction) => void;
  className?: string;
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
  sortConfig,
  onSort,
  className = ''
}) => {
  const getSortIcon = (key: keyof Transaction) => {
    if (sortConfig.key !== key) {
      return <ChevronUp size={14} className="text-gray-300" />;
    }
    return sortConfig.direction === 'asc' ?
      <ChevronUp size={14} className="text-gray-600" /> :
      <ChevronDown size={14} className="text-gray-600" />;
  };

  const formatAmount = (amount: number) => {
    const absAmount = Math.abs(amount);
    return amount < 0 ? `-$${absAmount.toLocaleString()}` : `$${absAmount.toLocaleString()}`;
  };

  const columns = [
    { key: 'date' as keyof Transaction, label: 'Date' },
    { key: 'remark' as keyof Transaction, label: 'Remark' },
    { key: 'amount' as keyof Transaction, label: 'Amount' },
    { key: 'currency' as keyof Transaction, label: 'Currency' },
    { key: 'type' as keyof Transaction, label: 'Type' }
  ];

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(({ key, label }) => (
                <th
                  key={key}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
                  onClick={() => onSort(key)}
                >
                  <div className="flex items-center gap-1">
                    {label}
                    {getSortIcon(key)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.remark}
                </td>
                <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                  {formatAmount(transaction.amount)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.currency}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${transaction.type === 'Credit' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                    <span className="text-sm text-gray-900">{transaction.type}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};