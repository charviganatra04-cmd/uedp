import React, { forwardRef, useState } from 'react';
import './UserProfileCard.css';

export interface UserProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Full name of the user.
   * @default "Alex Morgan"
   */
  name?: string;
  /**
   * Title, role, or designation.
   * @default "Regional Manager"
   */
  role?: string;
  /**
   * URL for the circular avatar picture.
   */
  avatarUrl?: string;
  /**
   * Fallback initials if image fails or is omitted.
   * Defaults to the initials of `name` (e.g., "AM").
   */
  avatarFallback?: string;
  /**
   * Size scale:
   * - 'sm': 32px avatar, 13px text
   * - 'md': 40px avatar, 15px text (default matching Figma node 90-435)
   * - 'lg': 48px avatar, 16px text
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Real-time online presence status dot:
   * - 'online' (green)
   * - 'busy' (red)
   * - 'away' (amber)
   * - 'offline' (gray)
   * - 'none' (no indicator)
   * @default "none"
   */
  status?: 'online' | 'busy' | 'away' | 'offline' | 'none';
  /**
   * Optional trailing action, badge, or icon button (e.g. ChevronDown, MoreHorizontal, LogOut).
   */
  action?: React.ReactNode;
  /**
   * Container theme mode: 'light' (white background matching Figma) or 'dark'.
   * @default "light"
   */
  theme?: 'light' | 'dark';
  /**
   * Whether the card acts as an interactive button with hover and focus states.
   * @default false
   */
  clickable?: boolean;
}

// High-fidelity fallback portrait matching Alex Morgan in Figma node 90-435
export const defaultAlexMorganAvatar =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80';

/**
 * UserProfileCard Component
 *
 * Synchronized from Figma canvas node: `node-id=90-435`
 * Compact user profile identity widget displaying avatar, full name, role title,
 * presence status indicator, and optional actions.
 */
export const UserProfileCard = forwardRef<HTMLDivElement, UserProfileCardProps>(
  (
    {
      name = 'Alex Morgan',
      role = 'Regional Manager',
      avatarUrl = defaultAlexMorganAvatar,
      avatarFallback,
      size = 'md',
      status = 'none',
      action,
      theme = 'light',
      clickable = false,
      className = '',
      onClick,
      ...rest
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    // Compute initials fallback
    const initials =
      avatarFallback ||
      name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase() ||
      'U';

    return (
      <div
        ref={ref}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable ? 0 : undefined}
        onClick={onClick}
        className={`uedp-user-profile-card uedp-user-profile-card--${size} uedp-user-profile-card--${theme} ${
          clickable ? 'uedp-user-profile-card--clickable' : ''
        } ${className}`.trim()}
        data-figma-node="90-435"
        {...rest}
      >
        {/* Circular Avatar */}
        <div className="uedp-user-profile-card__avatar-wrap">
          {!imageError && avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="uedp-user-profile-card__avatar-img"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="uedp-user-profile-card__avatar-fallback" aria-label={name}>
              {initials}
            </div>
          )}

          {/* Online Presence Status Dot */}
          {status !== 'none' && (
            <span
              className={`uedp-user-profile-card__status-dot uedp-user-profile-card__status-dot--${status}`}
              aria-label={`Status: ${status}`}
            />
          )}
        </div>

        {/* User Identity Details */}
        <div className="uedp-user-profile-card__content">
          <div className="uedp-user-profile-card__name">{name}</div>
          {role && <div className="uedp-user-profile-card__role">{role}</div>}
        </div>

        {/* Trailing Action */}
        {action && <div className="uedp-user-profile-card__action">{action}</div>}
      </div>
    );
  }
);

UserProfileCard.displayName = 'UserProfileCard';

// Ergonomic and Figma aliases
export const UserProfile = UserProfileCard;
export const UserCard = UserProfileCard;
export const SidebarUserProfile = UserProfileCard;
