import { Transaction, DashboardSummary, User } from './types';

export const mockTransactions: Transaction[] = [
  { id: '1', date: '2023-10-01', remark: 'Salary', amount: 3000, currency: 'USD', type: 'Credit' },
  { id: '2', date: '2023-10-02', remark: 'Groceries', amount: -150, currency: 'USD', type: 'Debit' },
  { id: '3', date: '2023-10-03', remark: 'Gym Membership', amount: -50, currency: 'USD', type: 'Debit' },
  { id: '4', date: '2023-10-04', remark: 'Dinner', amount: -40, currency: 'USD', type: 'Debit' },
  { id: '5', date: '2023-10-05', remark: 'Movie Tickets', amount: -30, currency: 'USD', type: 'Debit' },
  { id: '6', date: '2023-10-06', remark: 'Rent', amount: -1200, currency: 'USD', type: 'Debit' },
  { id: '7', date: '2023-10-07', remark: 'Utilities', amount: -100, currency: 'USD', type: 'Debit' },
  { id: '8', date: '2023-10-08', remark: 'Car Payment', amount: -400, currency: 'USD', type: 'Debit' },
  { id: '9', date: '2023-10-09', remark: 'Insurance', amount: -200, currency: 'USD', type: 'Debit' }
];

export const mockSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10
};

export const mockUsers: User[] = [
  { id: '1', name: 'Ava', image: 'ava' },
  { id: '2', name: 'Liam', image: 'liam' },
  { id: '3', name: 'Noah', image: 'noah' },
  { id: '4', name: 'Emma', image: 'emma' },
  { id: '5', name: 'Oliver', image: 'oliver' },
  { id: '6', name: 'Sophia', image: 'sophia' },
  { id: '7', name: 'William', image: 'william' },
  { id: '8', name: 'Isabella', image: 'isabella' },
  { id: '9', name: 'James', image: 'james' },
  { id: '10', name: 'Charlotte', image: 'charlotte' },
  { id: '11', name: 'Benjamin', image: 'benjamin' },
  { id: '12', name: 'Amelia', image: 'amelia' },
  { id: '13', name: 'Lucas', image: 'lucas' },
  { id: '14', name: 'Mia', image: 'mia' },
  { id: '15', name: 'Mason', image: 'mason' }
];