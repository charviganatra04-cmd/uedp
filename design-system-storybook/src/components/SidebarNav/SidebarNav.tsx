import React, { forwardRef, useState } from 'react';
import {
  LayoutGrid,
  IdCard,
  Compass,
  FileCheck,
  UserCheck,
  BarChart3,
  Truck,
  BadgeCheck,
  TrendingUp,
  CircleDollarSign,
  LucideIcon,
} from 'lucide-react';
import './SidebarNav.css';

export interface NavItem {
  /** Unique key identifying the navigation item */
  id: string;
  /** Visible label text */
  label: string;
  /**
   * Icon representation: either a key matching built-in icons or custom ReactNode
   */
  icon?:
    | 'LayoutGrid'
    | 'IdCard'
    | 'Compass'
    | 'FileCheck'
    | 'UserCheck'
    | 'BarChart3'
    | 'Truck'
    | 'BadgeCheck'
    | 'TrendingUp'
    | 'CircleDollarSign'
    | React.ReactNode;
  /** Optional numerical badge count or status string */
  badge?: string | number;
  /** Optional link destination */
  href?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
}

export interface SidebarNavProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onSelect'> {
  /**
   * Navigation items list. Defaults to the 10 items from Figma node 90-433:
   * Dashboard, Check In / Out, Orders, Pending Tasks, Weekly Approval,
   * Monthly, Distributor, Approvals, Reports, Disbursement.
   */
  items?: NavItem[];
  /**
   * Currently active item ID (controlled mode).
   */
  activeId?: string;
  /**
   * Initially active item ID (uncontrolled mode).
   * @default "dashboard"
   */
  defaultActiveId?: string;
  /**
   * Selection callback fired when a navigation item is clicked.
   */
  onSelect?: (item: NavItem) => void;
  /**
   * Collapsed mode showing icons only with accessible tooltips.
   * @default false
   */
  collapsed?: boolean;
  /**
   * Container theme mode: 'light' (white background matching Figma) or 'dark'.
   * @default "light"
   */
  theme?: 'light' | 'dark';
}

const iconRegistry: Record<string, LucideIcon> = {
  LayoutGrid,
  IdCard,
  Compass,
  FileCheck,
  UserCheck,
  BarChart3,
  Truck,
  BadgeCheck,
  TrendingUp,
  CircleDollarSign,
};

/**
 * Default items reproducing Figma canvas node: `node-id=90-433`
 */
export const defaultSidebarNavItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
  { id: 'check-in-out', label: 'Check In / Out', icon: 'IdCard' },
  { id: 'orders', label: 'Orders', icon: 'Compass' },
  { id: 'pending-tasks', label: 'Pending Tasks', icon: 'FileCheck' },
  { id: 'weekly-approval', label: 'Weekly Approval', icon: 'UserCheck' },
  { id: 'monthly', label: 'Monthly', icon: 'BarChart3' },
  { id: 'distributor', label: 'Distributor', icon: 'Truck' },
  { id: 'approvals', label: 'Approvals', icon: 'BadgeCheck' },
  { id: 'reports', label: 'Reports', icon: 'TrendingUp' },
  { id: 'disbursement', label: 'Disbursement', icon: 'CircleDollarSign' },
];

/**
 * SidebarNav Component
 *
 * Synchronized from Figma canvas node: `node-id=90-433`
 * Vertical navigation list featuring icon markers, active highlight, hover feedback,
 * keyboard accessibility, and collapsed icon-only mode.
 */
export const SidebarNav = forwardRef<HTMLElement, SidebarNavProps>(
  (
    {
      items = defaultSidebarNavItems,
      activeId: controlledActiveId,
      defaultActiveId = 'dashboard',
      onSelect,
      collapsed = false,
      theme = 'light',
      className = '',
      ...rest
    },
    ref
  ) => {
    const [internalActiveId, setInternalActiveId] = useState<string>(defaultActiveId);

    const activeId = controlledActiveId !== undefined ? controlledActiveId : internalActiveId;

    const handleItemClick = (item: NavItem, e: React.MouseEvent) => {
      if (item.disabled) {
        e.preventDefault();
        return;
      }
      if (controlledActiveId === undefined) {
        setInternalActiveId(item.id);
      }
      onSelect?.(item);
    };

    const renderIcon = (icon: NavItem['icon']) => {
      if (!icon) return null;
      if (typeof icon === 'string' && iconRegistry[icon]) {
        const IconComponent = iconRegistry[icon];
        return <IconComponent className="uedp-sidebar-nav__icon" size={20} strokeWidth={2} />;
      }
      if (React.isValidElement(icon)) {
        return icon;
      }
      return null;
    };

    return (
      <nav
        ref={ref}
        className={`uedp-sidebar-nav uedp-sidebar-nav--${theme} ${
          collapsed ? 'uedp-sidebar-nav--collapsed' : ''
        } ${className}`.trim()}
        data-figma-node="90-433"
        aria-label="Main Navigation"
        {...rest}
      >
        <ul className="uedp-sidebar-nav__list" role="menu">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <li key={item.id} className="uedp-sidebar-nav__item" role="none">
                <button
                  type="button"
                  role="menuitem"
                  aria-current={isActive ? 'page' : undefined}
                  disabled={item.disabled}
                  className={`uedp-sidebar-nav__link ${
                    isActive ? 'uedp-sidebar-nav__link--active' : ''
                  } ${item.disabled ? 'uedp-sidebar-nav__link--disabled' : ''}`}
                  onClick={(e) => handleItemClick(item, e)}
                  title={collapsed ? item.label : undefined}
                >
                  <span className="uedp-sidebar-nav__icon-box" aria-hidden="true">
                    {renderIcon(item.icon)}
                  </span>
                  {!collapsed && (
                    <span className="uedp-sidebar-nav__label">{item.label}</span>
                  )}
                  {item.badge !== undefined && !collapsed && (
                    <span className="uedp-sidebar-nav__badge">{item.badge}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

SidebarNav.displayName = 'SidebarNav';

// Ergonomic and Figma layer aliases
export const SidebarNavigation = SidebarNav;
export const NavMenu = SidebarNav;
export const SideNav = SidebarNav;
