import React, { forwardRef } from 'react';
import './IconBadge.css';

export type IconBadgeVariant =
  | 'cyan'
  | 'red'
  | 'green'
  | 'blue'
  | 'amber'
  | 'purple'
  | 'neutral';

export type IconBadgeSize = 'sm' | 'md' | 'lg' | 'xl';
export type IconBadgeShape = 'circle' | 'rounded' | 'square';
export type IconBadgePreset = 'package' | 'document' | 'clock' | 'users';

export interface IconBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Built-in preset icon matching Figma node 70-21:
   * - 'package': Open box (cyan)
   * - 'document': Checklist / report (red)
   * - 'clock': Clock / history (green)
   * - 'users': User group / team (blue)
   */
  preset?: IconBadgePreset;
  /**
   * Custom icon element or React node. Overrides preset.
   */
  icon?: React.ReactNode;
  /**
   * Color theme variant. Defaults to the matching color if a preset is used:
   * 'package' -> 'cyan'
   * 'document' -> 'red'
   * 'clock' -> 'green'
   * 'users' -> 'blue'
   */
  variant?: IconBadgeVariant;
  /**
   * Size scale: 'sm' (36px), 'md' (48px, Figma default), 'lg' (56px), 'xl' (64px).
   * @default 'md'
   */
  size?: IconBadgeSize;
  /**
   * Shape of the badge container: 'circle' (default in Figma node 70-21), 'rounded', or 'square'.
   * @default 'circle'
   */
  shape?: IconBadgeShape;
}

// Pixel-faithful SVG icons for Figma node 70-21
const PresetIcons: Record<IconBadgePreset, React.ReactNode> = {
  package: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <path d="M4 8l2-5h12l2 5" />
      <rect x="4" y="8" width="16" height="13" rx="0.5" />
      <path d="M10 12h4" />
    </svg>
  ),
  document: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <line x1="8" y1="7" x2="8.01" y2="7" />
      <line x1="11" y1="7" x2="16" y2="7" />
      <line x1="8" y1="10" x2="8.01" y2="10" />
      <line x1="11" y1="10" x2="16" y2="10" />
      <line x1="8" y1="13" x2="8.01" y2="13" />
      <line x1="11" y1="13" x2="16" y2="13" />
      <line x1="8" y1="16" x2="8.01" y2="16" />
      <line x1="11" y1="16" x2="16" y2="16" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M6 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1" />
      <circle cx="5" cy="8" r="2.5" />
      <path d="M1 18.5a3.5 3.5 0 0 1 3.5-3.5" />
      <circle cx="19" cy="8" r="2.5" />
      <path d="M23 18.5a3.5 3.5 0 0 0-3.5-3.5" />
    </svg>
  ),
};

const DefaultPresetVariants: Record<IconBadgePreset, IconBadgeVariant> = {
  package: 'cyan',
  document: 'red',
  clock: 'green',
  users: 'blue',
};

/**
 * IconBadge Component
 *
 * Synchronized from Figma canvas node: `node-id=70-21`
 * Circular indicator container for metric KPIs, feature callouts, and category avatars.
 */
export const IconBadge = forwardRef<HTMLDivElement, IconBadgeProps>(
  (
    {
      preset,
      icon,
      variant,
      size = 'md',
      shape = 'circle',
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Resolve variant: explicit variant > preset default > 'cyan'
    const resolvedVariant: IconBadgeVariant =
      variant || (preset ? DefaultPresetVariants[preset] : 'cyan');

    // Resolve icon content: children > icon prop > preset SVG > null
    const renderedIcon =
      children ?? icon ?? (preset ? PresetIcons[preset] : null);

    const classNames = [
      'uedp-icon-badge',
      `uedp-icon-badge--${resolvedVariant}`,
      `uedp-icon-badge--${size}`,
      `uedp-icon-badge--${shape}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        data-figma-node="70-21"
        aria-hidden={!rest['aria-label'] && !rest['aria-labelledby']}
        {...rest}
      >
        <span className="uedp-icon-badge__icon">{renderedIcon}</span>
      </div>
    );
  }
);

IconBadge.displayName = 'IconBadge';

// Aliases for design system ergonomics
export const CircleIcon = IconBadge;
export const MetricIcon = IconBadge;
export const StatIcon = IconBadge;
