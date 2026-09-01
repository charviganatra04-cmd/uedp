import React from 'react';
import './Container.css';

export interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '7xl' | 'full';
  children?: React.ReactNode;
  centered?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  maxWidth = '7xl',
  children,
  centered = true,
}) => {
  return (
    <div
      className={`uedp-container uedp-container--max-${maxWidth} ${centered ? 'uedp-container--centered' : ''}`}
      data-layer-name="Container"
    >
      {children || <p style={{ color: '#94A3B8' }}>Container layout boundary node.</p>}
    </div>
  );
};
