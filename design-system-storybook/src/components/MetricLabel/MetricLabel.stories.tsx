import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MetricLabel } from './MetricLabel';
import { IconBadge } from '../IconBadge/IconBadge';
import { TrendBadge } from '../TrendBadge/TrendBadge';

const meta: Meta<typeof MetricLabel> = {
  title: 'Components/MetricLabel',
  component: MetricLabel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# MetricLabel (Figma Node: \`node-id=103-506\`)

A typography component specifically crafted for dashboard KPI cards, metric headlines, and category headers.

### Figma Canvas Node Specification:
- **Node ID**: \`103-506\` (Canvas ID \`103:506\`)
- **Default Text**: \`"Sales"\`
- **Color Token Bindings**:
  - State 1 (Muted): \`var(--uedp-slate-400)\` (#94A3B8)
  - State 2 (Secondary): \`var(--uedp-slate-500)\` (#64748B)
  - State 3 (Dark / Charcoal): \`var(--uedp-slate-900)\` (#0F172A)
  - State 4 (White / Focus): \`var(--uedp-base-white)\` (#FFFFFF)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'The label text',
      defaultValue: 'Sales',
    },
    variant: {
      control: 'select',
      options: ['muted', 'secondary', 'dark', 'white', 'primary'],
      description: 'Color theme variant matching the Figma 4-state stack',
      defaultValue: 'muted',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Font size scale',
      defaultValue: 'lg',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight scale',
      defaultValue: 'medium',
    },
    uppercase: {
      control: 'boolean',
      description: 'Uppercase tracking toggle',
    },
    as: {
      control: 'select',
      options: ['span', 'p', 'label', 'h2', 'h3', 'h4'],
      description: 'HTML rendered element',
      defaultValue: 'span',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricLabel>;

/**
 * State 1 from Figma node-id=103-506 (Muted Slate: #94A3B8)
 */
export const Muted: Story = {
  args: {
    text: 'Sales',
    variant: 'muted',
    size: 'lg',
  },
};

/**
 * State 2 from Figma node-id=103-506 (Secondary Slate: #64748B)
 */
export const Secondary: Story = {
  args: {
    text: 'Sales',
    variant: 'secondary',
    size: 'lg',
  },
};

/**
 * State 3 from Figma node-id=103-506 (Dark Charcoal: #0F172A)
 */
export const Dark: Story = {
  args: {
    text: 'Sales',
    variant: 'dark',
    size: 'lg',
  },
};

/**
 * State 4 from Figma node-id=103-506 (White / High Contrast: #FFFFFF)
 */
export const White: Story = {
  args: {
    text: 'Sales',
    variant: 'white',
    size: 'lg',
  },
};

/**
 * Exact visual reproduction of Figma Node 103-506 vertical stack on dark canvas
 */
export const FigmaNode103506Canvas: Story = {
  name: 'Figma Node 103-506 (Dark Canvas)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '48px 64px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        minWidth: '200px',
      }}
    >
      <div style={{ color: '#71717A', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Figma Node: 103-506
      </div>
      <MetricLabel text="Sales" variant="muted" size="lg" />
      <MetricLabel text="Sales" variant="secondary" size="lg" />
      <MetricLabel text="Sales" variant="dark" size="lg" />
      <MetricLabel text="Sales" variant="white" size="lg" />
    </div>
  ),
};

/**
 * Font size progression (sm, md, lg, xl)
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <MetricLabel text="Small (12px) — Sales" size="sm" variant="muted" />
      <MetricLabel text="Medium (14px) — Sales" size="md" variant="muted" />
      <MetricLabel text="Large (18px) — Sales" size="lg" variant="muted" />
      <MetricLabel text="Extra Large (20px) — Sales" size="xl" variant="muted" />
    </div>
  ),
};

/**
 * Complete Analytics KPI Card incorporating:
 * - IconBadge (Node 70-21)
 * - MetricLabel (Node 103-506)
 * - TrendBadge (Node 66-149)
 */
export const DashboardKPICard: Story = {
  name: 'Complete Dashboard KPI Card',
  render: () => (
    <div
      style={{
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: '20px',
        padding: '24px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconBadge preset="package" size="md" />
        <TrendBadge value="+5 %" variant="positive" size="md" />
      </div>

      <div>
        <MetricLabel text="Sales" variant="muted" size="lg" weight="normal" />
        <div style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: 700, marginTop: '4px', letterSpacing: '-0.02em' }}>
          $124,850
        </div>
      </div>
    </div>
  ),
};
