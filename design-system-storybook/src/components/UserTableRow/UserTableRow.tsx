import React, { forwardRef, useState } from 'react';
import { Store, Eye, Trash2, Pencil } from 'lucide-react';
import { StatusBadge, StatusBadgeVariant } from '../StatusBadge/StatusBadge';
import './UserTableRow.css';

export interface UserTableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * User full name.
   * @default "Charvi Ganatra"
   */
  name?: string;
  /**
   * Avatar image URL.
   */
  avatarUrl?: string;
  /**
   * Fallback initials if avatar URL is missing or fails to load.
   */
  avatarFallback?: string;
  /**
   * Retailer or partner company name.
   * @default "Apex Retailers"
   */
  retailer?: string;
  /**
   * Custom retailer icon or logo element.
   */
  retailerIcon?: React.ReactNode;
  /**
   * User or account status label (e.g. "Active", "Deactive", "Pending").
   * @default "Active"
   */
  status?: string;
  /**
   * StatusBadge color theme variant. Defaults to auto-resolved based on status string.
   */
  statusVariant?: StatusBadgeVariant;
  /**
   * Callback invoked when View button is clicked.
   */
  onView?: (name: string) => void;
  /**
   * Callback invoked when Delete button is clicked.
   */
  onDelete?: (name: string) => void;
  /**
   * Callback invoked when Edit button is clicked.
   */
  onEdit?: (name: string) => void;
  /**
   * Custom actions element. Overrides default Eye/Trash/Pencil action buttons.
   */
  actions?: React.ReactNode;
}

/**
 * UserTableRow Component ("Frame 57")
 *
 * Synchronized from Figma canvas node: `node-id=0-1` (Layer: `Frame 57`)
 * User and customer data table row displaying avatar identity, affiliated retailer, status, and action buttons.
 */
export const UserTableRow = forwardRef<HTMLDivElement, UserTableRowProps>(
  (
    {
      name = 'Charvi Ganatra',
      avatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
      avatarFallback,
      retailer = 'Apex Retailers',
      retailerIcon,
      status = 'Active',
      statusVariant,
      onView,
      onDelete,
      onEdit,
      actions,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [imgError, setImgError] = useState(false);

    // Compute initials fallback
    const initials =
      avatarFallback ||
      name
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    return (
      <div
        ref={ref}
        role="row"
        className={`uedp-user-row ${className}`.trim()}
        data-figma-node="0-1"
        data-figma-layer="Frame 57"
        {...rest}
      >
        {/* Cell 1: Avatar + Name */}
        <div className="uedp-user-row__user-cell" role="cell">
          <div className="uedp-user-row__avatar">
            {avatarUrl && !imgError ? (
              <img
                src={avatarUrl}
                alt={name}
                onError={() => setImgError(true)}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <span className="uedp-user-row__name" title={name}>
            {name}
          </span>
        </div>

        {/* Cell 2: Retailer */}
        <div className="uedp-user-row__retailer-cell" role="cell" title={retailer}>
          <span className="uedp-user-row__retailer-badge" aria-hidden="true">
            {retailerIcon ?? <Store size={15} />}
          </span>
          <span className="uedp-user-row__retailer-name">{retailer}</span>
        </div>

        {/* Cell 3: Status */}
        <div className="uedp-user-row__status-cell" role="cell">
          <StatusBadge
            label={status}
            variant={statusVariant ?? (status.toLowerCase().includes('active') ? 'active' : 'deactive')}
            size="sm"
          />
        </div>

        {/* Cell 4: Actions (View, Delete, Edit - matching Figma node 0-1) */}
        <div className="uedp-user-row__actions-cell" role="cell">
          {actions ?? (
            <>
              <button
                type="button"
                className="uedp-user-row__action-btn"
                aria-label={`View ${name}`}
                title="View user details"
                onClick={() => onView?.(name)}
              >
                <Eye size={18} />
              </button>
              <button
                type="button"
                className="uedp-user-row__action-btn uedp-user-row__action-btn--delete"
                aria-label={`Delete ${name}`}
                title="Delete user"
                onClick={() => onDelete?.(name)}
              >
                <Trash2 size={18} />
              </button>
              <button
                type="button"
                className="uedp-user-row__action-btn"
                aria-label={`Edit ${name}`}
                title="Edit user"
                onClick={() => onEdit?.(name)}
              >
                <Pencil size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
);

UserTableRow.displayName = 'UserTableRow';

// Ergonomic and Figma layer aliases
export const UserRow = UserTableRow;
export const CustomerRow = UserTableRow;
export const Frame57 = UserTableRow;
export const MemberRow = UserTableRow;
