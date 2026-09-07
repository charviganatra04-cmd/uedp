import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNav, defaultSidebarNavItems, NavItem } from './SidebarNav';

const meta: Meta<typeof SidebarNav> = {
  title: 'Components/SidebarNav',
  component: SidebarNav,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# SidebarNav (Figma Node: \`node-id=90-433\`)

A vertical sidebar navigation menu featuring outline icons, active route highlight, hover transitions, and keyboard navigation.

### Figma Canvas Layer Specification:
- **Node ID**: \`90-433\` (Canvas ID \`90:433\`)
- **Navigation Items**:
  1. \`Dashboard\` (Active state: bold \`#0F172A\`, 4-square grid icon)
  2. \`Check In / Out\` (Card / ID icon)
  3. \`Orders\` (Compass needle icon)
  4. \`Pending Tasks\` (Document check icon)
  5. \`Weekly Approval\` (User badge icon)
  6. \`Monthly\` (Bar chart icon)
  7. \`Distributor\` (Delivery truck icon)
  8. \`Approvals\` (Approval stamp icon)
  9. \`Reports\` (Trending up chart icon)
  10. \`Disbursement\` (Dollar currency icon)
- **Typography**: Inter / Sans-serif \`15px\`, \`600\` semibold (\`700\` bold when active)
- **Color Palette**: Inactive text & icons \`#5A6A85\`, Active text & icons \`#0F172A\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Container color theme',
      defaultValue: 'light',
    },
    collapsed: {
      control: 'boolean',
      description: 'Collapsed icon-only navigation mode',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarNav>;

/**
 * Default story reproducing Figma node-id=90-433 exactly
 */
export const Default: Story = {
  args: {
    theme: 'light',
    collapsed: false,
    defaultActiveId: 'dashboard',
  },
};

/**
 * Exact visual reproduction of Figma Node 90-433 on dark canvas
 */
export const FigmaNode90433Canvas: Story = {
  name: 'Figma Node 90-433 (Sidebar Navigation)',
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
        Sidebar Navigation (Node: 90-433)
      </div>
      <SidebarNav theme="light" defaultActiveId="dashboard" />
    </div>
  ),
};

/**
 * Interactive story with click handler demonstrating active state switching
 */
export const Interactive: Story = {
  render: () => {
    const [activeId, setActiveId] = useState('dashboard');
    const activeItem = defaultSidebarNavItems.find((item) => item.id === activeId);

    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
        <SidebarNav
          activeId={activeId}
          onSelect={(item) => setActiveId(item.id)}
          theme="light"
        />
        <div
          style={{
            padding: '24px',
            borderRadius: '16px',
            backgroundColor: '#F8FAFC',
            border: '1px solid #E2E8F0',
            minWidth: '240px',
          }}
        >
          <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>CURRENT PAGE</div>
          <h2 style={{ margin: '8px 0 0 0', fontSize: '20px', color: '#0F172A' }}>
            {activeItem?.label}
          </h2>
          <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#64748B' }}>
            Route: <code>/{activeId}</code>
          </p>
        </div>
      </div>
    );
  },
};

/**
 * With numerical notification badges on specific items
 */
export const WithBadges: Story = {
  args: {
    theme: 'light',
    collapsed: false,
    defaultActiveId: 'orders',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: 'LayoutGrid' },
      { id: 'check-in-out', label: 'Check In / Out', icon: 'IdCard' },
      { id: 'orders', label: 'Orders', icon: 'Compass', badge: 8 },
      { id: 'pending-tasks', label: 'Pending Tasks', icon: 'FileCheck', badge: 14 },
      { id: 'weekly-approval', label: 'Weekly Approval', icon: 'UserCheck', badge: 3 },
      { id: 'monthly', label: 'Monthly', icon: 'BarChart3' },
      { id: 'distributor', label: 'Distributor', icon: 'Truck' },
      { id: 'approvals', label: 'Approvals', icon: 'BadgeCheck' },
      { id: 'reports', label: 'Reports', icon: 'TrendingUp' },
      { id: 'disbursement', label: 'Disbursement', icon: 'CircleDollarSign' },
    ],
  },
};

/**
 * Collapsed icon-rail navigation mode
 */
export const CollapsedRail: Story = {
  args: {
    theme: 'light',
    collapsed: true,
    defaultActiveId: 'dashboard',
  },
};

/**
 * Dark theme mode for dark navigation sidebars
 */
export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    collapsed: false,
    defaultActiveId: 'dashboard',
  },
};
