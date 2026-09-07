import React, { forwardRef, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import './TaskCard.css';

export type TaskCardStatusVariant = 'on-hold' | 'active' | 'pending' | 'deactive';

export interface TaskCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Assignee full name.
   * @default "John Mitchell"
   */
  assigneeName?: string;
  /**
   * Assignee job role or title.
   * @default "Sales Executive"
   */
  assigneeRole?: string;
  /**
   * Assignee avatar image URL.
   */
  assigneeAvatar?: string;
  /**
   * Fallback initials if avatar image fails to load.
   * @default "JM"
   */
  assigneeInitials?: string;
  /**
   * Status label displayed in the top-right badge.
   * @default "On Hold"
   */
  status?: string;
  /**
   * Status badge theme variant:
   * - 'on-hold': Slate gray badge matching Figma node 94-938 ("On Hold")
   * - 'active': Emerald green badge
   * - 'pending': Amber warning badge
   * - 'deactive': Coral red badge
   * @default "on-hold"
   */
  statusVariant?: TaskCardStatusVariant;
  /**
   * Detailed task assignment description body.
   * @default "Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule."
   */
  description?: string;
  /**
   * Due date string (e.g. "Due: Dec 5").
   * @default "Due: Dec 5"
   */
  dueDate?: string;
  /**
   * Relative time remaining string (e.g. "2 days left").
   * @default "2 days left"
   */
  timeLeft?: string;
  /**
   * Card color theme: 'light' (off-white card matching Figma node 94-938) or 'dark'.
   * @default "light"
   */
  theme?: 'light' | 'dark';
  /**
   * Whether the card is interactive with hover lift animation.
   * @default true
   */
  clickable?: boolean;
  /**
   * Optional custom Figma Node ID (defaults to 94-910 for Active / 94-938 for On Hold).
   */
  figmaNode?: string;
  /**
   * Optional custom Figma Layer name (defaults to Frame 93 for Active / Frame 94 for On Hold).
   */
  figmaLayer?: string;
}

export const defaultJohnMitchellAvatar =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80';

/**
 * TaskCard Component ("Frame 93" & "Frame 94")
 *
 * Synchronized from Figma canvas nodes:
 * - `node-id=94-910` (Layer: `Frame 93`, "Active" status)
 * - `node-id=94-938` (Layer: `Frame 94`, "On Hold" status)
 * High-fidelity task assignment and follow-up card displaying assignee identity,
 * status badge ("Active" / "On Hold"), task description, due date, and time-left indicator.
 */
export const TaskCard = forwardRef<HTMLDivElement, TaskCardProps>(
  (
    {
      assigneeName = 'John Mitchell',
      assigneeRole = 'Sales Executive',
      assigneeAvatar = defaultJohnMitchellAvatar,
      assigneeInitials,
      status = 'On Hold',
      statusVariant = 'on-hold',
      description = 'Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule.',
      dueDate = 'Due: Dec 5',
      timeLeft = '2 days left',
      theme = 'light',
      clickable = true,
      figmaNode,
      figmaLayer,
      className = '',
      ...rest
    },
    ref
  ) => {
    const [imageError, setImageError] = useState(false);

    const initials =
      assigneeInitials ||
      assigneeName
        .split(' ')
        .map((n) => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase() ||
      'JM';

    const resolvedFigmaNode = figmaNode || (statusVariant === 'active' || status === 'Active' ? '94-910' : '94-938');
    const resolvedFigmaLayer = figmaLayer || (statusVariant === 'active' || status === 'Active' ? 'Frame 93' : 'Frame 94');

    return (
      <div
        ref={ref}
        className={`uedp-task-card uedp-task-card--${theme} ${
          clickable ? 'uedp-task-card--clickable' : ''
        } ${className}`.trim()}
        data-figma-node={resolvedFigmaNode}
        data-figma-layer={resolvedFigmaLayer}
        {...rest}
      >
        {/* Top Header: Assignee Identity & Status Badge */}
        <div className="uedp-task-card__header">
          <div className="uedp-task-card__assignee">
            <div className="uedp-task-card__avatar-wrap">
              {!imageError && assigneeAvatar ? (
                <img
                  src={assigneeAvatar}
                  alt={assigneeName}
                  className="uedp-task-card__avatar-img"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="uedp-task-card__avatar-fallback">{initials}</div>
              )}
            </div>
            <div className="uedp-task-card__assignee-info">
              <h4 className="uedp-task-card__assignee-name">{assigneeName}</h4>
              {assigneeRole && (
                <span className="uedp-task-card__assignee-role">{assigneeRole}</span>
              )}
            </div>
          </div>

          {/* Status Badge */}
          {status && (
            <div
              className={`uedp-task-card__status-badge uedp-task-card__status-badge--${statusVariant}`}
            >
              {status}
            </div>
          )}
        </div>

        {/* Middle Body: Task Description */}
        <div className="uedp-task-card__body">
          <p className="uedp-task-card__description">{description}</p>
        </div>

        {/* Footer: Due Date & Time Remaining */}
        <div className="uedp-task-card__footer">
          {dueDate && (
            <div className="uedp-task-card__meta-item">
              <Calendar size={16} className="uedp-task-card__meta-icon" />
              <span>{dueDate}</span>
            </div>
          )}
          {timeLeft && (
            <div className="uedp-task-card__meta-item">
              <Clock size={16} className="uedp-task-card__meta-icon" />
              <span>{timeLeft}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
);

TaskCard.displayName = 'TaskCard';

// Ergonomic and Figma aliases
export const AssignmentCard = TaskCard;
export const FollowUpCard = TaskCard;
export const TaskDetailCard = TaskCard;
export const Frame94 = TaskCard;
export const Frame93 = TaskCard;
export const TaskCardActive = TaskCard;
