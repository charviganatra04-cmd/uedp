import React from 'react';
import './Component315.css';

export interface Component315Props {
  /** User name display */
  name?: string;
  /** Role label */
  role?: string;
  /** Avatar initials or URL */
  avatarUrl?: string;
  /** Online availability status */
  status?: 'online' | 'busy' | 'offline';
  /** Action button text */
  actionLabel?: string;
  /** Click event handler */
  onAction?: () => void;
}

/**
 * Component 315 - Preserved Layer Component Node
 * Exact Layer Name: "Component 315"
 */
export const Component315: React.FC<Component315Props> = ({
  name = 'Alex Morgan',
  role = 'Lead System Architect',
  avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
  status = 'online',
  actionLabel = 'Manage Access',
  onAction,
}) => {
  return (
    <div className="uedp-component-315" data-layer-name="Component 315">
      <div className="uedp-component-315__avatar-wrap">
        <img src={avatarUrl} alt={name} className="uedp-component-315__avatar" />
        <span className={`uedp-component-315__status uedp-component-315__status--${status}`} />
      </div>
      <div className="uedp-component-315__info">
        <div className="uedp-component-315__name">{name}</div>
        <div className="uedp-component-315__role">{role}</div>
      </div>
      <button
        type="button"
        className="uedp-component-315__btn"
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </div>
  );
};
