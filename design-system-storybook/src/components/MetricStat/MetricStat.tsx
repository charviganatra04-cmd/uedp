import React, { forwardRef } from 'react';
import './MetricStat.css';

export type MetricStatColor =
  | 'cyan'
  | 'white'
  | 'blue'
  | 'green'
  | 'red'
  | 'amber'
  | 'purple';

export type MetricStatSize = 'sm' | 'md' | 'lg';
export type MetricStatOrientation = 'vertical' | 'horizontal';

export interface MetricStatProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /**
   * Label / Title of the statistic (e.g. "Active Order", "Total Revenue").
   * @default "Active Order"
   */
  label?: React.ReactNode;
  /**
   * Main statistic value or number (e.g. 843, "$124,850", "99.2%").
   * @default "843"
   */
  value?: React.ReactNode;
  /**
   * Color variant of the large numeric value.
   * Defaults to 'cyan', exactly matching Figma node 66-100 ("843").
   * @default 'cyan'
   */
  valueColor?: MetricStatColor;
  /**
   * Size scale: 'sm' (24px value), 'md' (36px value, Figma default), 'lg' (48px value).
   * @default 'md'
   */
  size?: MetricStatSize;
  /**
   * Layout direction: 'vertical' (stacked, default) or 'horizontal'.
   * @default 'vertical'
   */
  orientation?: MetricStatOrientation;
  /**
   * Optional prefix for the value (e.g. "$", "#").
   */
  prefix?: React.ReactNode;
  /**
   * Optional suffix for the value (e.g. "%", "orders", "k").
   */
  suffix?: React.ReactNode;
  /**
   * Optional element displayed alongside the label (e.g. a TrendBadge or Info icon).
   */
  extra?: React.ReactNode;
}

/**
 * MetricStat Component ("Frame 18/Frame 13")
 *
 * Synchronized from Figma canvas node: `node-id=66-100` (Layer: `Frame 18/Frame 13`)
 * A prominent metric pair combining a stat label ("Active Order") with a high-impact numerical value ("843").
 */
export const MetricStat = forwardRef<HTMLDivElement, MetricStatProps>(
  (
    {
      label = 'Active Order',
      value = '843',
      valueColor = 'cyan',
      size = 'md',
      orientation = 'vertical',
      prefix,
      suffix,
      extra,
      className = '',
      ...rest
    },
    ref
  ) => {
    const classNames = [
      'uedp-metric-stat',
      `uedp-metric-stat--${orientation}`,
      `uedp-metric-stat--${size}`,
      `uedp-metric-stat--${valueColor}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div
        ref={ref}
        className={classNames}
        data-figma-node="66-100"
        data-figma-layer="Frame 18/Frame 13"
        {...rest}
      >
        <div className="uedp-metric-stat__header">
          {label && <h4 className="uedp-metric-stat__label">{label}</h4>}
          {extra && <div className="uedp-metric-stat__extra">{extra}</div>}
        </div>

        <div className="uedp-metric-stat__value-wrapper">
          {prefix && <span className="uedp-metric-stat__prefix">{prefix}</span>}
          <div className="uedp-metric-stat__value">{value}</div>
          {suffix && <span className="uedp-metric-stat__suffix">{suffix}</span>}
        </div>
      </div>
    );
  }
);

MetricStat.displayName = 'MetricStat';

// Ergonomic and Figma layer aliases
export const StatBlock = MetricStat;
export const Statistic = MetricStat;
export const Frame18 = MetricStat;
export const Frame13 = MetricStat;
