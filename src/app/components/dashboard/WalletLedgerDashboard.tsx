'use client';

import React, { useState } from 'react';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';
import { WalletHeader } from './WalletHeader';
import { OverviewTab } from './OverviewTab';
import { TransactionsTab } from './TransactionsTab';
import { useSorting } from '../../hooks/useSorting';
import { useFiltering } from '../../hooks/useFiltering';
import { useSidebar } from '../../hooks/useSidebar';
import { mockTransactions, mockSummary, mockUsers } from '../../lib/data';

export const WalletLedgerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Use custom hooks for filtering, sorting, and sidebar
  const { filteredData, searchQuery, setSearchQuery } = useFiltering(mockTransactions);
  const { sortedData, sortConfig, handleSort } = useSorting(filteredData);
  const { isOpen: sidebarOpen, activeItem, toggleSidebar, handleNavigate } = useSidebar();

  const tabs = ['Overview', 'Transactions'];

  const handleShare = () => {
    console.log('Share functionality triggered');
    // Implement share logic here
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    console.log(`Switched to ${tab} tab`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <OverviewTab
            summary={mockSummary}
            transactions={sortedData}
            sortConfig={sortConfig}
            onSort={handleSort}
          />
        );
      case 'Transactions':
        return <TransactionsTab />;
      default:
        return (
          <OverviewTab
            summary={mockSummary}
            transactions={sortedData}
            sortConfig={sortConfig}
            onSort={handleSort}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        activeItem={activeItem}
        onNavigate={handleNavigate}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onMenuClick={toggleSidebar}
        />

        {/* Main content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Wallet header with tabs */}
            <WalletHeader
              title="Wallet Ledger"
              status="Active"
              users={mockUsers}
              activeTab={activeTab}
              tabs={tabs}
              onTabChange={handleTabChange}
              onShare={handleShare}
            />

            {/* Tab content */}
            {renderTabContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WalletLedgerDashboard;