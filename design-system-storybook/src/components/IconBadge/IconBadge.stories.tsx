import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconBadge } from './IconBadge';
import { TrendBadge } from '../TrendBadge/TrendBadge';

const meta: Meta<typeof IconBadge> = {
  title: 'Components/IconBadge',
  component: IconBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# IconBadge (Figma Node: \`node-id=70-21\`)

A circular icon container designed for dashboard KPI stats, analytics summaries, activity logs, and feature showcases.

### Figma Canvas Node Specification:
- **Node ID**: \`70-21\` (Canvas ID \`70:21\`)
- **Layer Archetype**: Metric Circle Icon Badge
- **Token Bindings**:
  - Cyan (Package): \`var(--uedp-cyan-100)\` / \`var(--uedp-cyan-900)\`
  - Red (Document): \`var(--uedp-red-100)\` / \`var(--uedp-red-900)\`
  - Green (Clock): \`var(--uedp-green-100)\` / \`var(--uedp-green-800)\`
  - Blue (Users): \`var(--uedp-sky-100)\` / \`var(--uedp-blue-900)\`
  - Shape: \`var(--uedp-rounded-full)\` (9999px)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    preset: {
      control: 'select',
      options: ['package', 'document', 'clock', 'users'],
      description: 'Preset icon from Figma node 70-21',
      defaultValue: 'package',
    },
    variant: {
      control: 'select',
      options: ['cyan', 'red', 'green', 'blue', 'amber', 'purple', 'neutral'],
      description: 'Color theme variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size scaling of the badge',
      defaultValue: 'md',
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
      description: 'Container shape',
      defaultValue: 'circle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconBadge>;

/**
 * Circle 1 from Figma node-id=70-21 (Package / Delivery)
 */
export const PackageIcon: Story = {
  args: {
    preset: 'package',
    size: 'md',
  },
};

/**
 * Circle 2 from Figma node-id=70-21 (Document / Checklist)
 */
export const DocumentIcon: Story = {
  args: {
    preset: 'document',
    size: 'md',
  },
};

/**
 * Circle 3 from Figma node-id=70-21 (Clock / Time)
 */
export const ClockIcon: Story = {
  args: {
    preset: 'clock',
    size: 'md',
  },
};

/**
 * Circle 4 from Figma node-id=70-21 (Users / Community)
 */
export const UsersIcon: Story = {
  args: {
    preset: 'users',
    size: 'md',
  },
};

/**
 * Exact visual reproduction of Figma Node 70-21 vertical stack on dark canvas
 */
export const FigmaNode7021Canvas: Story = {
  name: 'Figma Node 70-21 (Dark Canvas)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '40px 32px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#A1A1AA', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Figma Node: 70-21
      </div>
      <IconBadge preset="package" size="md" />
      <IconBadge preset="document" size="md" />
      <IconBadge preset="clock" size="md" />
      <IconBadge preset="users" size="md" />
    </div>
  ),
};

/**
 * Sizes across small, medium, large, and extra-large
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <IconBadge preset="package" size="sm" />
      <IconBadge preset="package" size="md" />
      <IconBadge preset="package" size="lg" />
      <IconBadge preset="package" size="xl" />
    </div>
  ),
};

/**
 * Shape variants (Circle, Rounded-xl, Square)
 */
export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <IconBadge preset="clock" shape="circle" />
      <IconBadge preset="clock" shape="rounded" />
      <IconBadge preset="clock" shape="square" />
    </div>
  ),
};

/**
 * Real-world KPI card composition combining IconBadge (70-21) and TrendBadge (66-149)
 */
export const DashboardKPIExample: Story = {
  name: 'Combined KPI Card Composition',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      {[
        { preset: 'package' as const, label: 'Total Orders', value: '1,429', delta: '+5 %', variant: 'positive' as const },
        { preset: 'document' as const, label: 'Pending Invoices', value: '84', delta: '+5 %', variant: 'negative' as const },
        { preset: 'clock' as const, label: 'Avg Fulfillment', value: '2.4 hrs', delta: '-12 %', variant: 'positive' as const },
        { preset: 'users' as const, label: 'Active Customers', value: '12,850', delta: '+18.2 %', variant: 'positive' as const },
      ].map((card, i) => (
        <div
          key={i}
          style={{
            backgroundColor: '#18181B',
            border: '1px solid #27272A',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '220px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconBadge preset={card.preset} size="md" />
            <TrendBadge value={card.delta} variant={card.variant} size="sm" />
          </div>
          <div>
            <div style={{ color: '#A1A1AA', fontSize: '13px', fontWeight: 500 }}>{card.label}</div>
            <div style={{ color: '#FAFAFA', fontSize: '24px', fontWeight: 700, marginTop: '4px' }}>{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
