import React from 'react';
import './Header.css';

export interface HeaderProps {
  title?: string;
  subtitle?: string;
  userNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'UEDP Control Plane',
  subtitle = 'Figma Design System & Storybook Showcase',
  userNav = true,
}) => {
  return (
    <header className="uedp-header" data-layer-name="Header">
      <div className="uedp-header__brand">
        <div className="uedp-header__logo">UEDP</div>
        <div>
          <h1 className="uedp-header__title">{title}</h1>
          {subtitle && <span className="uedp-header__subtitle">{subtitle}</span>}
        </div>
      </div>
      {userNav && (
        <div className="uedp-header__actions">
          <span className="uedp-header__status-indicator" />
          <span className="uedp-header__version">v2.4.0</span>
        </div>
      )}
    </header>
  );
};
