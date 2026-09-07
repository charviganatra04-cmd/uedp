import React, { forwardRef } from 'react';
import './MetricLabel.css';

export type MetricLabelVariant = 'muted' | 'secondary' | 'dark' | 'white' | 'primary';
export type MetricLabelSize = 'sm' | 'md' | 'lg' | 'xl';
export type MetricLabelWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type MetricLabelElement = 'span' | 'p' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface MetricLabelProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * The text label to display (e.g. "Sales", "Total Revenue", "Orders").
   * Overridden by children if provided.
   * @default "Sales"
   */
  text?: string;
  /**
   * Color tone variant matching the 4 visual states in Figma node 103-506:
   * - 'muted': Slate-400 (#94A3B8) — default dashboard metric title
   * - 'secondary': Slate-500 (#64748B) — subtle secondary text
   * - 'dark': Slate-900 (#0F172A) — high contrast on light backgrounds
   * - 'white': White (#FFFFFF) — high contrast on dark backgrounds
   * - 'primary': Slate-200 (#E2E8F0) — default active text
   * @default 'muted'
   */
  variant?: MetricLabelVariant;
  /**
   * Font size scale: 'sm' (12px), 'md' (14px), 'lg' (18px, matches Figma node 103-506), 'xl' (20px).
   * @default 'lg'
   */
  size?: MetricLabelSize;
  /**
   * Font weight scale: 'normal' (400), 'medium' (500), 'semibold' (600), 'bold' (700).
   * @default 'medium'
   */
  weight?: MetricLabelWeight;
  /**
   * Whether to transform text to uppercase with tracking.
   * @default false
   */
  uppercase?: boolean;
  /**
   * HTML element to render as.
   * @default 'span'
   */
  as?: MetricLabelElement;
}

/**
 * MetricLabel Component
 *
 * Synchronized from Figma canvas node: `node-id=103-506`
 * Title / caption typography component designed for analytics KPI cards, summary widgets, and metric headers.
 */
export const MetricLabel = forwardRef<HTMLElement, MetricLabelProps>(
  (
    {
      text = 'Sales',
      variant = 'muted',
      size = 'lg',
      weight = 'medium',
      uppercase = false,
      as = 'span',
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    const Component = as as any;

    const classNames = [
      'uedp-metric-label',
      `uedp-metric-label--${variant}`,
      `uedp-metric-label--${size}`,
      `uedp-metric-label--weight-${weight}`,
      uppercase ? 'uedp-metric-label--uppercase' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <Component
        ref={ref}
        className={classNames}
        data-figma-node="103-506"
        {...rest}
      >
        {children ?? text}
      </Component>
    );
  }
);

MetricLabel.displayName = 'MetricLabel';

// Ergonomic aliases for design system flexibility
export const StatLabel = MetricLabel;
export const CardLabel = MetricLabel;
