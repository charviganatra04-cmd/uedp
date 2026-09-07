import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDown, MoreVertical, LogOut } from 'lucide-react';
import { UserProfileCard, defaultAlexMorganAvatar } from './UserProfileCard';
import { SidebarNav } from '../SidebarNav/SidebarNav';

const meta: Meta<typeof UserProfileCard> = {
  title: 'Components/UserProfileCard',
  component: UserProfileCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# UserProfileCard (Figma Node: \`node-id=90-435\`)

A compact user profile identity widget featuring a circular avatar, full name, role title, status indicators, and action triggers.

### Figma Canvas Layer Specification:
- **Node ID**: \`90-435\` (Canvas ID \`90:435\`)
- **User Name**: \`"Alex Morgan"\` (\`#0F172A\`, 700 bold, \`15px\`)
- **Role / Subtitle**: \`"Regional Manager"\` (\`#708090\`, 500 semibold, \`13px\`)
- **Avatar**: Circular portrait (\`40px\`) with subtle boundary shadow
- **Container**: White (\`#FFFFFF\`), Rounded-xl (\`12px\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'User display name',
      defaultValue: 'Alex Morgan',
    },
    role: {
      control: 'text',
      description: 'Role / Designation',
      defaultValue: 'Regional Manager',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Avatar and typography scale',
      defaultValue: 'md',
    },
    status: {
      control: 'select',
      options: ['none', 'online', 'busy', 'away', 'offline'],
      description: 'Online presence status indicator',
      defaultValue: 'none',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Card color theme',
      defaultValue: 'light',
    },
    clickable: {
      control: 'boolean',
      description: 'Enable interactive hover and focus styles',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserProfileCard>;

/**
 * Default story reproducing Figma node-id=90-435 exactly
 */
export const Default: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Regional Manager',
    avatarUrl: defaultAlexMorganAvatar,
    size: 'md',
    status: 'none',
    theme: 'light',
    clickable: false,
  },
};

/**
 * Exact visual reproduction of Figma Node 90-435 on dark canvas
 */
export const FigmaNode90435Canvas: Story = {
  name: 'Figma Node 90-435 (Alex Morgan - Regional Manager)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 40px',
        borderRadius: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#71717A', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        UserProfileCard (Node: 90-435)
      </div>
      <UserProfileCard name="Alex Morgan" role="Regional Manager" theme="light" />
    </div>
  ),
};

/**
 * Interactive with online presence status dot
 */
export const OnlinePresence: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Regional Manager',
    avatarUrl: defaultAlexMorganAvatar,
    status: 'online',
    clickable: true,
  },
};

/**
 * With dropdown action button
 */
export const WithDropdownAction: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Regional Manager',
    avatarUrl: defaultAlexMorganAvatar,
    status: 'online',
    clickable: true,
    action: (
      <button
        style={{
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          padding: '4px',
          color: '#64748B',
          display: 'flex',
          alignItems: 'center',
        }}
        title="Account Options"
      >
        <ChevronDown size={16} />
      </button>
    ),
  },
};

/**
 * Graceful initials fallback when avatar image is absent
 */
export const InitialsFallback: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Regional Manager',
    avatarUrl: '',
    status: 'away',
  },
};

/**
 * Size variants comparison (sm, md, lg)
 */
export const SizeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '280px' }}>
      <UserProfileCard size="sm" name="Alex Morgan" role="Regional Manager" status="online" />
      <UserProfileCard size="md" name="Alex Morgan" role="Regional Manager" status="online" />
      <UserProfileCard size="lg" name="Alex Morgan" role="Regional Manager" status="online" />
    </div>
  ),
};

/**
 * Dark theme mode for dark sidebars
 */
export const DarkTheme: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Regional Manager',
    avatarUrl: defaultAlexMorganAvatar,
    theme: 'dark',
    status: 'online',
    clickable: true,
    action: <MoreVertical size={16} />,
  },
};

/**
 * Complete Sidebar integration showing SidebarNav + UserProfileCard
 */
export const SidebarIntegration: Story = {
  name: 'Complete Sidebar Frame (Nav + User Profile)',
  render: () => (
    <div
      style={{
        width: '260px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #F1F5F9',
        overflow: 'hidden',
      }}
    >
      <SidebarNav defaultActiveId="dashboard" />
      <div
        style={{
          borderTop: '1px solid #F1F5F9',
          padding: '12px 14px',
          backgroundColor: '#FAFAFA',
        }}
      >
        <UserProfileCard
          name="Alex Morgan"
          role="Regional Manager"
          status="online"
          clickable={true}
          action={<LogOut size={16} style={{ cursor: 'pointer', color: '#94A3B8' }} />}
        />
      </div>
    </div>
  ),
};
