import React, { forwardRef } from 'react';
import './ProductivityCard.css';

export interface ChartSliceItem {
  label: string;
  value: number;
  color?: string;
}

export interface ProductivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header title of the card.
   * @default "Productivity"
   */
  title?: string;
  /**
   * Data items for the pie chart slices and legend.
   * Defaults to the exact 2 categories from Figma node 76-34:
   * - 'Total calls': 75% (Green)
   * - 'Productive Calls': 25% (Orange)
   */
  data?: ChartSliceItem[];
  /**
   * Color theme of the card container: 'light' (white background matching Figma screenshot) or 'dark'.
   * @default "light"
   */
  theme?: 'light' | 'dark';
  /**
   * Whether to display slice values / percentages in the legend.
   * @default false
   */
  showValues?: boolean;
}

const defaultSlices: ChartSliceItem[] = [
  {
    label: 'Total calls',
    value: 75,
    color: '#16A34A', // Vibrant Green matching Figma node 76-34
  },
  {
    label: 'Productive Calls',
    value: 25,
    color: '#F97316', // Orange matching Figma node 76-34
  },
];

/**
 * ProductivityCard Component ("Background+Border+Shadow")
 *
 * Synchronized from Figma canvas node: `node-id=76-34` (Layer: `Background+Border+Shadow`)
 * High-fidelity KPI productivity card featuring a smooth vector pie chart and color-coded legend.
 */
export const ProductivityCard = forwardRef<HTMLDivElement, ProductivityCardProps>(
  (
    {
      title = 'Productivity',
      data = defaultSlices,
      theme = 'light',
      showValues = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    // Compute SVG pie chart slices
    const size = 200;
    const center = size / 2;
    const radius = 95;

    // In Figma node 76-34, the divider starts around -20 degrees from standard baseline
    let cumulativeAngle = -0.35; // offset to match Figma orientation precisely

    const slices = data.map((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI;
      const startAngle = cumulativeAngle;
      const endAngle = cumulativeAngle + sliceAngle;
      cumulativeAngle += sliceAngle;

      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;
      const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      return {
        ...item,
        pathData,
        percentage: Math.round((item.value / total) * 100),
      };
    });

    return (
      <div
        ref={ref}
        className={`uedp-productivity-card uedp-productivity-card--${theme} ${className}`.trim()}
        data-figma-node="76-34"
        data-figma-layer="Background+Border+Shadow"
        {...rest}
      >
        {/* Header */}
        <div className="uedp-productivity-card__header">
          <h3 className="uedp-productivity-card__title">{title}</h3>
        </div>

        {/* Content Body */}
        <div className="uedp-productivity-card__body">
          {/* Vector Pie Chart */}
          <div className="uedp-productivity-card__chart-wrapper">
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="uedp-productivity-card__svg"
              aria-label={`${title} chart`}
            >
              {slices.map((slice, i) => (
                <path
                  key={i}
                  d={slice.pathData}
                  fill={slice.color}
                  className="uedp-productivity-card__slice"
                >
                  <title>{`${slice.label}: ${slice.value} (${slice.percentage}%)`}</title>
                </path>
              ))}
            </svg>
          </div>

          {/* Legend */}
          <div className="uedp-productivity-card__legend">
            {slices.map((item, i) => (
              <div key={i} className="uedp-productivity-card__legend-item">
                <span
                  className="uedp-productivity-card__legend-marker"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <span className="uedp-productivity-card__legend-label">{item.label}</span>
                {showValues && (
                  <span className="uedp-productivity-card__legend-value">
                    {item.value} ({item.percentage}%)
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ProductivityCard.displayName = 'ProductivityCard';

// Ergonomic and Figma layer aliases
export const PieChartCard = ProductivityCard;
export const ChartCard = ProductivityCard;
export const BackgroundBorderShadow = ProductivityCard;
