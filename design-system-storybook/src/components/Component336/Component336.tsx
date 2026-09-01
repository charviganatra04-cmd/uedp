import React from 'react';
import './Component336.css';

export interface Component336Props {
  /** Title metric header matching Figma layer "Component 336" */
  title?: string;
  /** Primary metric value display */
  value?: string;
  /** Percentage change indicator */
  change?: string;
  /** Variant style state */
  variant?: 'default' | 'highlight' | 'compact';
  /** Trend direction */
  trend?: 'up' | 'down' | 'neutral';
  /** Optional click event handler */
  onClick?: () => void;
}

/**
 * Component 336 - High-Fidelity Figma Preserved Component Node
 * Exact Layer Name: "Component 336"
 */
export const Component336: React.FC<Component336Props> = ({
  title = 'Total Active Deployments',
  value = '1,428',
  change = '+12.4%',
  variant = 'default',
  trend = 'up',
  onClick,
}) => {
  return (
    <div
      className={`uedp-component-336 uedp-component-336--${variant}`}
      onClick={onClick}
      data-layer-name="Component 336"
    >
      <div className="uedp-component-336__header">
        <span className="uedp-component-336__title">{title}</span>
        <span className={`uedp-component-336__badge uedp-component-336__badge--${trend}`}>
          {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '●'} {change}
        </span>
      </div>
      <div className="uedp-component-336__body">
        <div className="uedp-component-336__value">{value}</div>
        <div className="uedp-component-336__sparkline">
          <div className="uedp-component-336__bar" style={{ height: '40%' }} />
          <div className="uedp-component-336__bar" style={{ height: '65%' }} />
          <div className="uedp-component-336__bar" style={{ height: '50%' }} />
          <div className="uedp-component-336__bar" style={{ height: '85%' }} />
          <div className="uedp-component-336__bar" style={{ height: '100%' }} />
        </div>
      </div>
    </div>
  );
};
