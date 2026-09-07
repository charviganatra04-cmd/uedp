import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskCard, defaultJohnMitchellAvatar } from './TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Components/TaskCard',
  component: TaskCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# TaskCard (Figma Node: \`node-id=94-938\` / \`Frame 94\`)

A task follow-up and assignment card component displaying assignee identity, status badge, task description, due date, and time-left indicator.

### Figma Canvas Layer Specification:
- **Node ID**: \`94-938\` (Canvas ID \`94:938\`)
- **Figma Layer Name**: \`Frame 94\`
- **Assignee**: \`"John Mitchell"\` (\`#1E293B\`, 700 bold), \`"Sales Executive"\` (\`#708090\`, 500 semibold)
- **Status**: \`"On Hold"\` (Slate gray pill \`#8F9BA8\`)
- **Task Description**: \`"Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule."\`
- **Metadata**: Calendar \`"Due: Dec 5"\`, Clock \`"2 days left"\`
- **Container**: Off-white (\`#E9ECEF\`), Prominent Rounded-3xl (\`32px\`), Subtle Hover Lift
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    assigneeName: {
      control: 'text',
      description: 'Assignee full name',
      defaultValue: 'John Mitchell',
    },
    assigneeRole: {
      control: 'text',
      description: 'Assignee job title / role',
      defaultValue: 'Sales Executive',
    },
    status: {
      control: 'text',
      description: 'Status badge label',
      defaultValue: 'On Hold',
    },
    statusVariant: {
      control: 'select',
      options: ['on-hold', 'active', 'pending', 'deactive'],
      description: 'Color theme of the status badge',
      defaultValue: 'on-hold',
    },
    description: {
      control: 'text',
      description: 'Detailed task description body',
      defaultValue:
        'Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule.',
    },
    dueDate: {
      control: 'text',
      description: 'Due date string',
      defaultValue: 'Due: Dec 5',
    },
    timeLeft: {
      control: 'text',
      description: 'Time remaining or urgency label',
      defaultValue: '2 days left',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Card color theme',
      defaultValue: 'light',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

/**
 * Default story reproducing Figma node-id=94-938 (Frame 94) exactly
 */
export const Default: Story = {
  args: {
    assigneeName: 'John Mitchell',
    assigneeRole: 'Sales Executive',
    assigneeAvatar: defaultJohnMitchellAvatar,
    status: 'On Hold',
    statusVariant: 'on-hold',
    description:
      'Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule.',
    dueDate: 'Due: Dec 5',
    timeLeft: '2 days left',
    theme: 'light',
  },
};

/**
 * Exact visual reproduction of Figma Node 94-938 on dark canvas
 */
export const FigmaNode94938Canvas: Story = {
  name: 'Figma Node 94-938 (Frame 94)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 40px',
        borderRadius: '24px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ color: '#A1A1AA', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Frame 94 (Node: 94-938)
      </div>
      <TaskCard
        assigneeName="John Mitchell"
        assigneeRole="Sales Executive"
        assigneeAvatar={defaultJohnMitchellAvatar}
        status="On Hold"
        statusVariant="on-hold"
        description="Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule."
        dueDate="Due: Dec 5"
        timeLeft="2 days left"
      />
    </div>
  ),
};

/**
 * Active / In Progress task state
 */
export const InProgress: Story = {
  args: {
    assigneeName: 'Sarah Jenkins',
    assigneeRole: 'Senior Account Lead',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
    status: 'In Progress',
    statusVariant: 'active',
    description:
      'Prepare Q4 corporate distribution review and dispatch updated contract terms to regional partners.',
    dueDate: 'Due: Dec 12',
    timeLeft: '5 days left',
  },
};

/**
 * Urgent / Pending task state
 */
export const UrgentPending: Story = {
  args: {
    assigneeName: 'David Chen',
    assigneeRole: 'Operations Analyst',
    assigneeAvatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80',
    status: 'Urgent',
    statusVariant: 'deactive',
    description:
      'Resolve logistics delivery delay for North Region distributors before fiscal cutoff.',
    dueDate: 'Due: Today, 5:00 PM',
    timeLeft: '3 hours left',
  },
};

/**
 * Initials fallback when avatar image is omitted
 */
export const InitialsFallback: Story = {
  args: {
    assigneeName: 'John Mitchell',
    assigneeRole: 'Sales Executive',
    assigneeAvatar: '',
    status: 'On Hold',
    statusVariant: 'on-hold',
  },
};

/**
 * Dark theme mode for dark dashboard applications
 */
export const DarkTheme: Story = {
  args: {
    assigneeName: 'John Mitchell',
    assigneeRole: 'Sales Executive',
    assigneeAvatar: defaultJohnMitchellAvatar,
    status: 'On Hold',
    statusVariant: 'on-hold',
    theme: 'dark',
  },
};

/**
 * Multiple TaskCards in a task feed / board layout
 */
export const TaskBoardFeed: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '520px' }}>
      <TaskCard
        assigneeName="John Mitchell"
        assigneeRole="Sales Executive"
        status="On Hold"
        statusVariant="on-hold"
        description="Follow up with Green Valley Supplies regarding pending order confirmation and delivery schedule."
        dueDate="Due: Dec 5"
        timeLeft="2 days left"
      />
      <TaskCard
        assigneeName="Sarah Jenkins"
        assigneeRole="Senior Account Lead"
        assigneeAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80"
        status="In Progress"
        statusVariant="active"
        description="Review inventory reconciliation for warehouse terminal B and confirm distributor counts."
        dueDate="Due: Dec 8"
        timeLeft="4 days left"
      />
    </div>
  ),
};
