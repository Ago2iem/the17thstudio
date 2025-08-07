// src/hooks/useSorting.ts

import { useState, useMemo } from 'react';
import { Transaction, SortConfig } from '../lib/types';

export const useSorting = (data: Transaction[]) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ 
    key: null, 
    direction: 'asc' 
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key!];
      const bValue = b[sortConfig.key!];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        const comparison = aValue - bValue;
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }
      
      return 0;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof Transaction) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  return {
    sortedData,
    sortConfig,
    handleSort
  };
};