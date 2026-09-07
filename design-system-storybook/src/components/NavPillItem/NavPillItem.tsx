import React, { forwardRef, useState } from 'react';
import { LayoutGrid } from 'lucide-react';
import './NavPillItem.css';

export type NavPillState = 'selected' | 'hover' | 'relaxed';

export interface NavPillItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Text label for the item.
   * @default "Dashboard"
   */
  label?: string;
  /**
   * Leading icon element or React node.
   * Defaults to LayoutGrid (matching Figma node 87-408).
   */
  icon?: React.ReactNode;
  /**
   * Explicit visual state variant matching Figma node 87-408:
   * - 'selected': First variant in Figma (soft blue-slate pill, dark bold text, no shadow)
   * - 'hover': Second variant in Figma (elevated pill with floating shadow and smooth lift animation)
   * - 'relaxed': Third variant in Figma (transparent idle state with muted slate text)
   *
   * If omitted, the component operates interactively (relaxed -> hover on mouseover -> selected when active).
   */
  state?: NavPillState;
  /**
   * Whether the item is currently selected in interactive mode.
   * @default false
   */
  selected?: boolean;
  /**
   * Container theme mode: 'dark' (matching the dark Figma canvas in node 87-408) or 'light'.
   * @default 'dark'
   */
  theme?: 'dark' | 'light';
  /**
   * Optional badge count or text indicator.
   */
  badge?: string | number;
}

/**
 * NavPillItem Component
 *
 * Synchronized from Figma canvas component set: `node-id=87-408`
 * A capsule pill navigation item with 3 explicit states:
 * 1. Selected State (Active blue-slate pill)
 * 2. Hover State (Elevated pill with floating shadow and lift animation)
 * 3. Relaxed State (Idle transparent state with muted typography)
 */
export const NavPillItem = forwardRef<HTMLButtonElement, NavPillItemProps>(
  (
    {
      label = 'Dashboard',
      icon = <LayoutGrid size={20} strokeWidth={2} />,
      state: explicitState,
      selected = false,
      theme = 'dark',
      badge,
      className = '',
      onClick,
      ...rest
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    // Resolve active state
    let effectiveState: NavPillState;
    if (explicitState) {
      effectiveState = explicitState;
    } else if (selected) {
      effectiveState = 'selected';
    } else if (isHovered) {
      effectiveState = 'hover';
    } else {
      effectiveState = 'relaxed';
    }

    return (
      <button
        ref={ref}
        type="button"
        role="menuitem"
        aria-current={effectiveState === 'selected' ? 'page' : undefined}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`uedp-nav-pill-item uedp-nav-pill-item--${effectiveState} uedp-nav-pill-item--${theme} ${className}`.trim()}
        data-figma-node="87-408"
        data-nav-state={effectiveState}
        {...rest}
      >
        {icon && <span className="uedp-nav-pill-item__icon">{icon}</span>}
        <span className="uedp-nav-pill-item__label">{label}</span>
        {badge !== undefined && (
          <span className="uedp-nav-pill-item__badge">{badge}</span>
        )}
      </button>
    );
  }
);

NavPillItem.displayName = 'NavPillItem';

// Ergonomic and Figma aliases
export const SidebarNavItem = NavPillItem;
export const NavPill = NavPillItem;
export const NavItemButton = NavPillItem;
