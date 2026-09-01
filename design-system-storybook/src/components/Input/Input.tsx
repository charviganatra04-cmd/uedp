import React from 'react';
import './Input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label = 'Cluster Endpoint URL',
  helperText,
  error,
  fullWidth = true,
  className = '',
  ...props
}) => {
  return (
    <div className={`uedp-input-wrap ${fullWidth ? 'uedp-input-wrap--full' : ''}`} data-layer-name="Input">
      {label && <label className="uedp-input__label">{label}</label>}
      <input
        className={`uedp-input ${error ? 'uedp-input--error' : ''} ${className}`}
        {...props}
      />
      {error ? (
        <span className="uedp-input__error-text">{error}</span>
      ) : helperText ? (
        <span className="uedp-input__helper-text">{helperText}</span>
      ) : null}
    </div>
  );
};
