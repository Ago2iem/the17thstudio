// src/app/lib/sidebar-data.ts

import { 
  LayoutDashboard, 
  CreditCard, 
  FileText, 
  Settings,
  PieChart,
  TrendingUp,
  Users,
  Bell,
  HelpCircle
} from 'lucide-react';
import { NavigationSection } from './sidebar-types';

export const navigationData: NavigationSection[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        isActive: true
      },
      {
        id: 'transactions',
        label: 'Transactions',
        icon: CreditCard,
        href: '/transactions'
      },
      {
        id: 'reports',
        label: 'Reports',
        icon: FileText,
        href: '/reports'
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: PieChart,
        href: '/analytics'
      }
    ]
  },
];