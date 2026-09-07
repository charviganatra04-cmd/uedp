import React, { forwardRef } from 'react';
import './MetricAvatar.css';

export type MetricAvatarVariant = 'blue' | 'red' | 'green' | 'amber' | 'purple' | 'neutral';
export type MetricAvatarSize = 'sm' | 'md' | 'lg' | 'xl';
export type MetricAvatarPreset = 'box' | 'clipboard' | 'clock';

export interface MetricAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Preset icon matching Figma node 66-120 ("Component 2"):
   * - 'box': Open delivery box with flaps (defaults to 'blue')
   * - 'clipboard': Checklist clipboard (defaults to 'red')
   * - 'clock': Clock / time indicator (defaults to 'green')
   */
  preset?: MetricAvatarPreset;
  /**
   * Custom icon element or React node. Overrides preset.
   */
  icon?: React.ReactNode;
  /**
   * Color theme variant. Defaults to match the preset:
   * 'box' -> 'blue'
   * 'clipboard' -> 'red'
   * 'clock' -> 'green'
   */
  variant?: MetricAvatarVariant;
  /**
   * Size scale: 'sm' (36px), 'md' (48px, default in Figma node 66-120), 'lg' (56px), 'xl' (64px).
   * @default 'md'
   */
  size?: MetricAvatarSize;
  /**
   * Whether to display a subtle border around the avatar.
   * @default false
   */
  bordered?: boolean;
}

// Pixel-faithful SVG icons matching Figma node 66-120 ("Component 2")
const PresetIcons: Record<MetricAvatarPreset, React.ReactNode> = {
  box: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <path d="M4 8l2-5h12l2 5" />
      <rect x="4" y="8" width="16" height="13" rx="0.5" />
      <path d="M10 12h4" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <circle cx="12" cy="3" r="1" />
      <line x1="8" y1="8" x2="8.01" y2="8" />
      <line x1="11" y1="8" x2="16" y2="8" />
      <line x1="8" y1="11" x2="8.01" y2="11" />
      <line x1="11" y1="11" x2="16" y2="11" />
      <line x1="8" y1="14" x2="8.01" y2="14" />
      <line x1="11" y1="14" x2="16" y2="14" />
      <line x1="8" y1="17" x2="8.01" y2="17" />
      <line x1="11" y1="17" x2="16" y2="17" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" width="24" height="24" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 14" />
    </svg>
  ),
};

const DefaultPresetVariants: Record<MetricAvatarPreset, MetricAvatarVariant> = {
  box: 'blue',
  clipboard: 'red',
  clock: 'green',
};

/**
 * MetricAvatar Component ("Component 2")
 *
 * Synchronized from Figma canvas node: `node-id=66-120` (Layer Name: `Component 2`)
 * Circular graphic avatar designed for activity timelines, stat cards, and order progress.
 */
export const MetricAvatar = forwardRef<HTMLDivElement, MetricAvatarProps>(
  (
    {
      preset = 'box',
      icon,
      variant,
      size = 'md',
      bordered = false,
      children,
      className = '',
      ...rest
    },
    ref
  ) => {
    const resolvedVariant: MetricAvatarVariant =
      variant || (preset ? DefaultPresetVariants[preset] : 'blue');

    const renderedIcon =
      children ?? icon ?? (preset ? PresetIcons[preset] : null);

    const classNames = [
      'uedp-metric-avatar',
      `uedp-metric-avatar--${resolvedVariant}`,
      `uedp-metric-avatar--${size}`,
      bordered ? 'uedp-metric-avatar--bordered' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        data-figma-node="66-120"
        data-figma-layer="Component 2"
        aria-hidden={!rest['aria-label'] && !rest['aria-labelledby']}
        {...rest}
      >
        <span className="uedp-metric-avatar__icon">{renderedIcon}</span>
      </div>
    );
  }
);

MetricAvatar.displayName = 'MetricAvatar';

// Figma layer name alias for exact canvas layer matching
export const Component2 = MetricAvatar;
