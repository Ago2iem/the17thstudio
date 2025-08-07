// src/app/lib/sidebar-types.ts

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href: string;
  isActive?: boolean;
  badge?: number | string;
}

export interface NavigationSection {
  id: string;
  title?: string;
  items: NavigationItem[];
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeItem: string;
  onNavigate: (itemId: string) => void;
  className?: string;
}