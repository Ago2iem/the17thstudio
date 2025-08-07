// src/hooks/useFiltering.ts

import { useState, useMemo } from 'react';
import { Transaction } from '../lib/types';

export const useFiltering = (data: Transaction[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;

    return data.filter(transaction =>
      transaction.remark.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.currency.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Math.abs(transaction.amount).toString().includes(searchQuery)
    );
  }, [data, searchQuery]);

  return {
    filteredData,
    searchQuery,
    setSearchQuery
  };
};