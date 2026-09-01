import React from 'react';
import './Card.css';

export interface CardProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered';
}

export const Card: React.FC<CardProps> = ({
  title = 'System Telemetry Container',
  subtitle = 'Real-time resource allocation and process streams',
  badge = 'ACTIVE',
  children,
  footer,
  variant = 'default',
}) => {
  return (
    <div className={`uedp-card uedp-card--${variant}`} data-layer-name="Card">
      {(title || badge) && (
        <div className="uedp-card__header">
          <div>
            {title && <h3 className="uedp-card__title">{title}</h3>}
            {subtitle && <p className="uedp-card__subtitle">{subtitle}</p>}
          </div>
          {badge && <span className="uedp-card__badge">{badge}</span>}
        </div>
      )}
      <div className="uedp-card__body">
        {children || <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>Card container content node area.</p>}
      </div>
      {footer && <div className="uedp-card__footer">{footer}</div>}
    </div>
  );
};
