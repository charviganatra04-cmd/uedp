import React, { forwardRef } from 'react';
import './StatusBadge.css';

export type StatusBadgeVariant =
  | 'purple'
  | 'deactive'
  | 'active'
  | 'blue'
  | 'amber'
  | 'red'
  | 'neutral';

export type StatusBadgeSize = 'sm' | 'md' | 'lg';

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Status label text (e.g. "Bulk Discount", "Deactive", "Active").
   * @default "Bulk Discount"
   */
  label?: string;
  /**
   * Color theme variant:
   * - 'purple': Bulk Discount / Promotion (matches Figma node 104-1069)
   * - 'deactive': Muted / Deactivated status (matches Figma node 104-1069)
   * - 'active': Green / Successful
   * - 'blue': Info / Processing
   * - 'amber': Warning / Pending
   * - 'red': Error / Canceled
   * - 'neutral': Gray
   */
  variant?: StatusBadgeVariant;
  /**
   * Size scale: 'sm' (12px), 'md' (16px, Figma default), 'lg' (18px).
   * @default 'md'
   */
  size?: StatusBadgeSize;
  /**
   * Whether to display an inline colored status indicator dot.
   * @default false
   */
  dot?: boolean;
  /**
   * Optional custom icon rendered before the label.
   */
  icon?: React.ReactNode;
}

/**
 * StatusBadge Component ("Frame 102")
 *
 * Synchronized from Figma canvas node: `node-id=104-1069` (Layer: `Frame 102`)
 * Rounded pill badge for order discounts, activation states, and category tags.
 */
export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  (
    {
      label = 'Bulk Discount',
      variant,
      size = 'md',
      dot = false,
      icon,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Auto-infer variant if not explicitly given
    const resolvedVariant: StatusBadgeVariant = (() => {
      if (variant) return variant;
      const text = (typeof children === 'string' ? children : label).toLowerCase();
      if (text.includes('discount') || text.includes('bulk')) return 'purple';
      if (text.includes('deactive') || text.includes('inactive') || text.includes('disabled')) return 'deactive';
      if (text.includes('active') || text.includes('success')) return 'active';
      return 'purple';
    })();

    const classNames = [
      'uedp-status-badge',
      `uedp-status-badge--${resolvedVariant}`,
      `uedp-status-badge--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        role="status"
        className={classNames}
        data-figma-node="104-1069"
        data-figma-layer="Frame 102"
        {...rest}
      >
        {dot && <span className="uedp-status-badge__dot" aria-hidden="true" />}
        {icon && <span className="uedp-status-badge__icon">{icon}</span>}
        <span className="uedp-status-badge__label">{children ?? label}</span>
      </span>
    );
  }
);

StatusBadge.displayName = 'StatusBadge';

// Ergonomic and Figma layer aliases
export const Tag = StatusBadge;
export const DiscountBadge = StatusBadge;
export const Frame102 = StatusBadge;
