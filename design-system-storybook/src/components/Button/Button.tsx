import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button visual style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  /** Button sizing scale */
  size?: 'sm' | 'md' | 'lg';
  /** Loading state indicator */
  isLoading?: boolean;
  /** Button content */
  children?: React.ReactNode;
}

/**
 * Button Primitive Component - Preserved Layer Name: "Button"
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children = 'Execute Action',
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`uedp-button uedp-button--${variant} uedp-button--${size} ${className}`}
      disabled={disabled || isLoading}
      data-layer-name="Button"
      {...props}
    >
      {isLoading && <span className="uedp-button__spinner" />}
      <span className="uedp-button__text">{children}</span>
    </button>
  );
};
