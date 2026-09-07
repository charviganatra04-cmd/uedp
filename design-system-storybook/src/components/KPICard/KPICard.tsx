import React, { forwardRef } from 'react';
import { IconBadge, IconBadgePreset, IconBadgeVariant } from '../IconBadge/IconBadge';
import { TrendBadge, TrendBadgeVariant } from '../TrendBadge/TrendBadge';
import './KPICard.css';

export type KPICardPreset =
  | 'active-order'
  | 'pending-task'
  | 'check-in-out'
  | 'total-employee';

export interface KPICardPresetData {
  title: string;
  value: string;
  icon: IconBadgePreset;
  iconVariant: IconBadgeVariant;
  trend?: string;
  tag?: string;
}

export const kpiCardPresets: Record<KPICardPreset, KPICardPresetData> = {
  'active-order': {
    title: 'Active Order',
    value: '843',
    icon: 'package',
    iconVariant: 'cyan',
    trend: '+5 %',
  },
  'pending-task': {
    title: 'Pending Task',
    value: '58',
    icon: 'document',
    iconVariant: 'red',
    trend: '-2 %',
  },
  'check-in-out': {
    title: 'Check In  /  Check Out',
    value: '102  /  100',
    icon: 'clock',
    iconVariant: 'green',
    tag: 'Today',
  },
  'total-employee': {
    title: 'Total Employee',
    value: '248',
    icon: 'users',
    iconVariant: 'cyan',
    trend: '+12 %',
  },
};

export interface KPICardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Pre-configured preset matching one of the 4 cards in Figma node 66-179:
   * - 'active-order': Package icon, "+5 %", "Active Order", "843"
   * - 'pending-task': Document icon, "-2 %", "Pending Task", "58"
   * - 'check-in-out': Clock icon, "Today", "Check In / Check Out", "102 / 100"
   * - 'total-employee': Users icon, "+12 %", "Total Employee", "248"
   */
  preset?: KPICardPreset;
  /**
   * Metric label / title (e.g. "Active Order", "Total Revenue").
   */
  title?: React.ReactNode;
  /**
   * Metric value (e.g. "843", "102 / 100", "$120,400").
   */
  value?: React.ReactNode;
  /**
   * Icon representation: either a preset name ('package' | 'document' | 'clock' | 'users')
   * or a custom ReactNode.
   */
  icon?: IconBadgePreset | React.ReactNode;
  /**
   * Icon badge color theme variant.
   */
  iconVariant?: IconBadgeVariant;
  /**
   * Trend percentage delta string (e.g. "+5 %", "-2 %", "+12 %").
   */
  trend?: string;
  /**
   * Trend badge color variant. Auto-resolved from +/- sign if omitted.
   */
  trendVariant?: TrendBadgeVariant;
  /**
   * Alternative right badge/tag text (e.g. "Today", "Monthly").
   * Displayed when trend is not set.
   */
  tag?: React.ReactNode;
  /**
   * Container theme: 'light' (white background matching Figma) or 'dark'.
   * @default 'light'
   */
  theme?: 'light' | 'dark';
  /**
   * Whether the card is interactive with hover lift animation.
   * @default true
   */
  clickable?: boolean;
}

/**
 * KPICard Component
 *
 * Synchronized from Figma canvas node: `node-id=66-179`
 * Individual KPI metric statistic card composing IconBadge, TrendBadge,
 * metric label, and large numeric display.
 */
export const KPICard = forwardRef<HTMLDivElement, KPICardProps>(
  (
    {
      preset,
      title: customTitle,
      value: customValue,
      icon: customIcon,
      iconVariant: customIconVariant,
      trend: customTrend,
      trendVariant,
      tag: customTag,
      theme = 'light',
      clickable = true,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Resolve preset defaults if provided
    const presetConfig = preset ? kpiCardPresets[preset] : undefined;

    const title = customTitle ?? presetConfig?.title ?? 'Active Order';
    const value = customValue ?? presetConfig?.value ?? '843';
    const icon = customIcon ?? presetConfig?.icon ?? 'package';
    const iconVariant = customIconVariant ?? presetConfig?.iconVariant ?? 'cyan';
    const trend = customTrend ?? presetConfig?.trend;
    const tag = customTag ?? presetConfig?.tag;

    // Render leading icon badge
    const renderIconBadge = () => {
      if (typeof icon === 'string' && ['package', 'document', 'clock', 'users'].includes(icon)) {
        return <IconBadge preset={icon as IconBadgePreset} variant={iconVariant} size="sm" />;
      }
      if (React.isValidElement(icon)) {
        return icon;
      }
      return <IconBadge preset="package" variant={iconVariant} size="sm" />;
    };

    // Render value with styled dual-stat slash if applicable
    const renderValue = () => {
      if (typeof value === 'string' && value.includes(' / ')) {
        const parts = value.split(' / ');
        return (
          <div className="uedp-kpi-card__value uedp-kpi-card__value--dual">
            <span>{parts[0]}</span>
            <span className="uedp-kpi-card__value-separator"> / </span>
            <span>{parts[1]}</span>
          </div>
        );
      }
      return <div className="uedp-kpi-card__value">{value}</div>;
    };

    return (
      <div
        ref={ref}
        className={`uedp-kpi-card uedp-kpi-card--${theme} ${
          clickable ? 'uedp-kpi-card--clickable' : ''
        } ${className}`.trim()}
        data-figma-node="66-179"
        data-preset={preset}
        {...rest}
      >
        {/* Top Row: Icon Badge & Trend / Tag */}
        <div className="uedp-kpi-card__header">
          <div className="uedp-kpi-card__icon-wrap">{renderIconBadge()}</div>
          {trend ? (
            <TrendBadge value={trend} variant={trendVariant} size="sm" />
          ) : tag ? (
            <span className="uedp-kpi-card__tag">{tag}</span>
          ) : null}
        </div>

        {/* Bottom Section: Label & Stat Value */}
        <div className="uedp-kpi-card__body">
          <div className="uedp-kpi-card__title">{title}</div>
          {renderValue()}
        </div>
      </div>
    );
  }
);

KPICard.displayName = 'KPICard';

// Ergonomic and Figma aliases
export const MetricCard = KPICard;
export const StatCard = KPICard;
export const AnalyticsCard = KPICard;

/**
 * Helper Grid container for laying out KPI Cards
 */
export interface KPICardGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4;
}

export const KPICardGrid: React.FC<KPICardGridProps> = ({
  columns = 4,
  className = '',
  children,
  ...rest
}) => {
  return (
    <div
      className={`uedp-kpi-card-grid uedp-kpi-card-grid--cols-${columns} ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  );
};
