import React, { forwardRef } from 'react';
import './StatusTag.css';

export type StatusTagState = 'active' | 'deactive' | 'on-hold';
export type StatusTagSize = 'sm' | 'md' | 'lg';

export interface StatusTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Operational status state matching the 3 variants in Figma node 78-276:
   * - 'active': Green tag ("Active")
   * - 'deactive': Coral red tag ("Deactive")
   * - 'on-hold': Slate gray tag ("On Hold")
   * @default 'active'
   */
  state?: StatusTagState;
  /**
   * Custom label text. If omitted, automatically defaults based on the `state`:
   * 'active' -> "Active"
   * 'deactive' -> "Deactive"
   * 'on-hold' -> "On Hold"
   */
  label?: string;
  /**
   * Size scale: 'sm' (14px), 'md' (18px, Figma default), 'lg' (20px).
   * @default 'md'
   */
  size?: StatusTagSize;
}

const DefaultLabels: Record<StatusTagState, string> = {
  active: 'Active',
  deactive: 'Deactive',
  'on-hold': 'On Hold',
};

/**
 * StatusTag Component ("Background / 3 Variants")
 *
 * Synchronized from Figma canvas node: `node-id=78-276` (Layer: `Background`)
 * High-fidelity status tag indicating operational entity state: Active, Deactive, or On Hold.
 */
export const StatusTag = forwardRef<HTMLSpanElement, StatusTagProps>(
  (
    {
      state,
      label,
      size = 'md',
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Auto-resolve state from label or children if not explicitly provided
    const resolvedState: StatusTagState = (() => {
      if (state) return state;
      const text = (typeof children === 'string' ? children : label || '').toLowerCase();
      if (text.includes('deactive') || text.includes('inactive') || text.includes('disabled')) return 'deactive';
      if (text.includes('hold') || text.includes('pause') || text.includes('pending')) return 'on-hold';
      if (text.includes('active') || text.includes('live')) return 'active';
      return 'active';
    })();

    const displayLabel = children ?? label ?? DefaultLabels[resolvedState];

    const classNames = [
      'uedp-status-tag',
      `uedp-status-tag--${resolvedState}`,
      `uedp-status-tag--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        role="status"
        className={classNames}
        data-figma-node="78-276"
        data-figma-layer="Background"
        {...rest}
      >
        {displayLabel}
      </span>
    );
  }
);

StatusTag.displayName = 'StatusTag';

// Ergonomic and Figma layer aliases
export const StateBadge = StatusTag;
export const StatusPill = StatusTag;
export const BackgroundTag = StatusTag;
