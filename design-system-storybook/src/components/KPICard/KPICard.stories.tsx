import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { KPICard, KPICardGrid } from './KPICard';

const meta: Meta<typeof KPICard> = {
  title: 'Components/KPICard',
  component: KPICard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# KPICard (Figma Node: \`node-id=66-179\`)

An individual KPI metric statistics card composing an IconBadge, TrendBadge, metric label, and large numeric display.

### Figma Canvas Layer Specification:
- **Node ID**: \`66-179\` (Canvas ID \`66:179\`)
- **4 Individual Card Variants**:
  1. \`Active Order\` (Package icon, \`+5 %\`, \`843\`)
  2. \`Pending Task\` (Document icon, \`-2 %\`, \`58\`)
  3. \`Check In / Check Out\` (Clock icon, \`Today\` tag, \`102 / 100\`)
  4. \`Total Employee\` (Users icon, \`+12 %\`, \`248\`)
- **Container**: White (\`#FFFFFF\`), Rounded-2xl (\`18px\`), Soft Drop Shadow
- **Interaction**: Subtle hover elevation (\`translateY(-4px)\`) with expanding shadow
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    preset: {
      control: 'select',
      options: ['active-order', 'pending-task', 'check-in-out', 'total-employee'],
      description: 'Pre-configured card from Figma node 66-179',
      defaultValue: 'active-order',
    },
    title: {
      control: 'text',
      description: 'Metric title / label',
    },
    value: {
      control: 'text',
      description: 'Metric value or count',
    },
    trend: {
      control: 'text',
      description: 'Trend percentage delta (e.g. "+5 %", "-2 %")',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Card color theme',
      defaultValue: 'light',
    },
    clickable: {
      control: 'boolean',
      description: 'Enable hover lift animation',
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof KPICard>;

/**
 * Individual Card 1: Active Order (Figma Node 66-179 Card 1)
 */
export const Card1ActiveOrder: Story = {
  name: '1. Active Order (843, +5%)',
  args: {
    preset: 'active-order',
    theme: 'light',
  },
};

/**
 * Individual Card 2: Pending Task (Figma Node 66-179 Card 2)
 */
export const Card2PendingTask: Story = {
  name: '2. Pending Task (58, -2%)',
  args: {
    preset: 'pending-task',
    theme: 'light',
  },
};

/**
 * Individual Card 3: Check In / Check Out (Figma Node 66-179 Card 3)
 */
export const Card3CheckInOut: Story = {
  name: '3. Check In / Check Out (102 / 100, Today)',
  args: {
    preset: 'check-in-out',
    theme: 'light',
  },
};

/**
 * Individual Card 4: Total Employee (Figma Node 66-179 Card 4)
 */
export const Card4TotalEmployee: Story = {
  name: '4. Total Employee (248, +12%)',
  args: {
    preset: 'total-employee',
    theme: 'light',
  },
};

/**
 * Exact reproduction of Figma Node 66-179 canvas showing all 4 individual cards stacked
 */
export const FigmaNode66179AllCards: Story = {
  name: 'Figma Node 66-179 (All 4 Cards Stacked)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 40px',
        borderRadius: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ color: '#71717A', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        KPI Metric Cards (Node: 66-179)
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '260px' }}>
        <KPICard preset="active-order" />
        <KPICard preset="pending-task" />
        <KPICard preset="check-in-out" />
        <KPICard preset="total-employee" />
      </div>
    </div>
  ),
};

/**
 * Modern 4-column responsive dashboard metric row
 */
export const ResponsiveDashboardRow: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '1100px', padding: '16px' }}>
      <KPICardGrid columns={4}>
        <KPICard preset="active-order" />
        <KPICard preset="pending-task" />
        <KPICard preset="check-in-out" />
        <KPICard preset="total-employee" />
      </KPICardGrid>
    </div>
  ),
};

/**
 * Dark theme mode for dark operational dashboards
 */
export const DarkThemeGrid: Story = {
  render: () => (
    <div style={{ backgroundColor: '#09090B', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '1100px' }}>
      <KPICardGrid columns={4}>
        <KPICard preset="active-order" theme="dark" />
        <KPICard preset="pending-task" theme="dark" />
        <KPICard preset="check-in-out" theme="dark" />
        <KPICard preset="total-employee" theme="dark" />
      </KPICardGrid>
    </div>
  ),
};

/**
 * Custom data configuration
 */
export const CustomData: Story = {
  args: {
    title: 'Monthly Revenue',
    value: '$148,650',
    trend: '+18.4 %',
    icon: 'package',
    iconVariant: 'blue',
    theme: 'light',
  },
};
