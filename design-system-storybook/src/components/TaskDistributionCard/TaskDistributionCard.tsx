import React, { forwardRef, useState } from 'react';
import './TaskDistributionCard.css';

export interface TaskDistributionSlice {
  /** Unique identifier for the slice */
  id?: string;
  /** Label displayed in the legend and accessibility tooltips */
  label: string;
  /** Numerical value or count represented by the slice */
  value: number;
  /** Primary color used for the SVG pie chart slice */
  color?: string;
  /**
   * Color used for the legend marker square.
   * If omitted, falls back to `color`.
   * In Figma node 92-590, legend markers for items 2, 3, 4 are orange while pie slices differ.
   */
  legendColor?: string;
  /** Optional custom start angle in degrees (0 = 3 o'clock, 90 = 6 o'clock, 270 = 12 o'clock) */
  startAngleDeg?: number;
  /** Optional custom end angle in degrees */
  endAngleDeg?: number;
}

export interface TaskDistributionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Header title of the card.
   * @default "Task Distribution"
   */
  title?: string;
  /**
   * Slices data for the pie chart and legend.
   * Defaults to the exact 4 slices and legend items from Figma node 92-590:
   * - Total Calls: 46% (Green #16A34A)
   * - Productive Calls: 34% (Orange #F97316)
   * - Productive Calls (Escalated/Dark Red): 10% (Burgundy #8B1D24, Orange legend marker)
   * - Productive Calls (Pending/Red): 10% (Coral Red #EF4444, Orange legend marker)
   */
  data?: TaskDistributionSlice[];
  /**
   * Visual theme of the card container: 'light' (white card matching Figma) or 'dark'.
   * @default "light"
   */
  theme?: 'light' | 'dark';
  /**
   * Whether to display numerical values and percentages in the legend list.
   * @default false
   */
  showValues?: boolean;
  /**
   * If true, forces legend markers to strictly use the slice's chart color instead of `legendColor`.
   * @default false
   */
  useSliceColorForLegend?: boolean;
  /**
   * Callback fired when a slice is clicked.
   */
  onSliceClick?: (slice: TaskDistributionSlice, index: number) => void;
}

/**
 * Default dataset faithfully reproducing Figma canvas node: `node-id=92-590` ("Task Distribution")
 */
export const defaultTaskDistributionData: TaskDistributionSlice[] = [
  {
    id: 'total-calls',
    label: 'Total Calls',
    value: 46,
    color: '#16A34A', // Vibrant Green
    legendColor: '#16A34A',
    startAngleDeg: 115, // 7:40 o'clock
    endAngleDeg: 270,   // 12:00 o'clock (vertical straight up)
  },
  {
    id: 'productive-calls-main',
    label: 'Productive Calls',
    value: 34,
    color: '#F97316', // Vibrant Orange
    legendColor: '#F97316',
    startAngleDeg: 346, // ~3:45 o'clock
    endAngleDeg: 475,   // 115° (~7:40 o'clock)
  },
  {
    id: 'productive-calls-dark',
    label: 'Productive Calls',
    value: 10,
    color: '#8B1D24', // Deep Burgundy / Maroon
    legendColor: '#F97316', // Orange legend square matching Figma node 92-590
    startAngleDeg: 308, // ~2:00 o'clock
    endAngleDeg: 346,   // ~3:45 o'clock
  },
  {
    id: 'productive-calls-light',
    label: 'Productive Calls',
    value: 10,
    color: '#EF4444', // Coral Red
    legendColor: '#F97316', // Orange legend square matching Figma node 92-590
    startAngleDeg: 270, // 12:00 o'clock
    endAngleDeg: 308,   // ~2:00 o'clock
  },
];

/**
 * TaskDistributionCard Component ("Task Distribution")
 *
 * Synchronized from Figma canvas node: `node-id=92-590`
 * High-fidelity KPI task breakdown card featuring a smooth vector pie chart and color-coded legend.
 */
export const TaskDistributionCard = forwardRef<HTMLDivElement, TaskDistributionCardProps>(
  (
    {
      title = 'Task Distribution',
      data = defaultTaskDistributionData,
      theme = 'light',
      showValues = false,
      useSliceColorForLegend = false,
      onSliceClick,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const total = data.reduce((acc, curr) => acc + curr.value, 0) || 1;

    // SVG geometry configuration
    const size = 220;
    const center = size / 2;
    const radius = 98;

    // Check whether all items provide explicit angles or use automatic accumulation
    const hasExplicitAngles = data.every(
      (d) => typeof d.startAngleDeg === 'number' && typeof d.endAngleDeg === 'number'
    );

    let cumulativeAngle = -Math.PI / 2; // Default start at 12 o'clock

    const slices = data.map((item, index) => {
      let startAngle: number;
      let endAngle: number;
      let sliceAngle: number;

      if (hasExplicitAngles && item.startAngleDeg !== undefined && item.endAngleDeg !== undefined) {
        startAngle = (item.startAngleDeg * Math.PI) / 180;
        endAngle = (item.endAngleDeg * Math.PI) / 180;
        sliceAngle = endAngle - startAngle;
      } else {
        sliceAngle = (item.value / total) * 2 * Math.PI;
        startAngle = cumulativeAngle;
        endAngle = cumulativeAngle + sliceAngle;
        cumulativeAngle += sliceAngle;
      }

      const x1 = center + radius * Math.cos(startAngle);
      const y1 = center + radius * Math.sin(startAngle);
      const x2 = center + radius * Math.cos(endAngle);
      const y2 = center + radius * Math.sin(endAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;
      const pathData = `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

      const percentage = Math.round((item.value / total) * 100);
      const markerColor = useSliceColorForLegend
        ? item.color || '#16A34A'
        : item.legendColor || item.color || '#16A34A';

      return {
        ...item,
        pathData,
        percentage,
        markerColor,
        isHovered: hoveredIndex === index,
      };
    });

    return (
      <div
        ref={ref}
        className={`uedp-task-distribution-card uedp-task-distribution-card--${theme} ${className}`.trim()}
        data-figma-node="92-590"
        data-figma-layer="Task Distribution"
        {...rest}
      >
        {/* Card Header */}
        <div className="uedp-task-distribution-card__header">
          <h3 className="uedp-task-distribution-card__title">{title}</h3>
        </div>

        {/* Card Body (Pie Chart + Legend) */}
        <div className="uedp-task-distribution-card__body">
          {/* Vector Pie Chart */}
          <div className="uedp-task-distribution-card__chart-wrapper">
            <svg
              viewBox={`0 0 ${size} ${size}`}
              className="uedp-task-distribution-card__svg"
              aria-label={`${title} pie chart`}
            >
              {slices.map((slice, i) => (
                <path
                  key={slice.id || i}
                  d={slice.pathData}
                  fill={slice.color}
                  className={`uedp-task-distribution-card__slice ${
                    slice.isHovered ? 'uedp-task-distribution-card__slice--hovered' : ''
                  }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSliceClick?.(slice, i)}
                >
                  <title>{`${slice.label}: ${slice.value} (${slice.percentage}%)`}</title>
                </path>
              ))}
            </svg>
          </div>

          {/* Color-Coded Legend */}
          <div className="uedp-task-distribution-card__legend">
            {slices.map((item, i) => (
              <div
                key={item.id || i}
                className={`uedp-task-distribution-card__legend-item ${
                  item.isHovered ? 'uedp-task-distribution-card__legend-item--hovered' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onSliceClick?.(item, i)}
              >
                <span
                  className="uedp-task-distribution-card__legend-marker"
                  style={{ backgroundColor: item.markerColor }}
                  aria-hidden="true"
                />
                <span className="uedp-task-distribution-card__legend-label">{item.label}</span>
                {showValues && (
                  <span className="uedp-task-distribution-card__legend-value">
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

TaskDistributionCard.displayName = 'TaskDistributionCard';

// Ergonomic and Figma aliases
export const TaskDistribution = TaskDistributionCard;
export const TaskDistributionChart = TaskDistributionCard;
