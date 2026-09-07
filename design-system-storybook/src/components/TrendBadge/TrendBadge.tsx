import React, { forwardRef } from 'react';
import './TrendBadge.css';

export type TrendBadgeVariant = 'positive' | 'negative' | 'neutral';
export type TrendBadgeSize = 'sm' | 'md' | 'lg';
export type TrendBadgeRounded = 'lg' | 'xl' | '2xl' | 'full';

export interface TrendBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Value to display (e.g. "+5 %", "-5 %", "+12.4%", 5, -3.2).
   */
  value?: string | number;
  /**
   * Color theme variant: 'positive' (green), 'negative' (red), or 'neutral' (gray).
   * If omitted, will automatically infer from value prefix ('+' -> positive, '-' -> negative).
   */
  variant?: TrendBadgeVariant;
  /**
   * Size scale: 'sm' (compact), 'md' (default, matches Figma node 66-149), 'lg' (prominent).
   * @default 'md'
   */
  size?: TrendBadgeSize;
  /**
   * Corner radius token scale.
   * @default 'xl' (12px)
   */
  rounded?: TrendBadgeRounded;
  /**
   * Optional prefix prepended to numeric values.
   */
  prefix?: string;
  /**
   * Optional suffix appended to numeric values (e.g. '%').
   */
  suffix?: string;
  /**
   * Optional custom icon rendered before text.
   */
  icon?: React.ReactNode;
  /**
   * Whether to display an automatic trend indicator arrow.
   */
  showTrendIcon?: boolean;
}

/**
 * TrendBadge Component
 * 
 * Synchronized from Figma canvas node: `node-id=66-149`
 * High-fidelity pill badge representing percentage deltas and metric trend indicators.
 */
export const TrendBadge = forwardRef<HTMLSpanElement, TrendBadgeProps>(
  (
    {
      value = '+5 %',
      variant,
      size = 'md',
      rounded = 'xl',
      prefix = '',
      suffix = '',
      icon,
      showTrendIcon = false,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Resolve variant automatically if not explicitly provided
    const resolvedVariant: TrendBadgeVariant = (() => {
      if (variant) return variant;
      if (typeof value === 'number') {
        if (value > 0) return 'positive';
        if (value < 0) return 'negative';
        return 'neutral';
      }
      if (typeof value === 'string') {
        const trimmed = value.trim();
        if (trimmed.startsWith('+')) return 'positive';
        if (trimmed.startsWith('-')) return 'negative';
      }
      return 'positive';
    })();

    // Format display string if children not passed
    const displayContent = (() => {
      if (children !== undefined) return children;
      if (value === undefined || value === null) return null;
      if (typeof value === 'number') {
        const sign = value > 0 && !prefix ? '+' : '';
        const pct = suffix || (value !== 0 ? ' %' : '');
        return `${sign}${prefix}${value}${pct}`;
      }
      return `${prefix}${value}${suffix}`;
    })();

    const classNames = [
      'uedp-trend-badge',
      `uedp-trend-badge--${resolvedVariant}`,
      `uedp-trend-badge--${size}`,
      `uedp-trend-badge--rounded-${rounded}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <span
        ref={ref}
        className={classNames}
        data-figma-node="66-149"
        role="status"
        {...rest}
      >
        {icon && <span className="uedp-trend-badge__icon">{icon}</span>}
        {!icon && showTrendIcon && resolvedVariant !== 'neutral' && (
          <span className="uedp-trend-badge__icon" aria-hidden="true">
            {resolvedVariant === 'positive' ? '▲' : '▼'}
          </span>
        )}
        <span className="uedp-trend-badge__text">{displayContent}</span>
      </span>
    );
  }
);

TrendBadge.displayName = 'TrendBadge';

// Aliases for design system flexibility
export const DeltaBadge = TrendBadge;
export const StatBadge = TrendBadge;
