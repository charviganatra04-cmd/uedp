import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TrendBadge } from './TrendBadge';

const meta: Meta<typeof TrendBadge> = {
  title: 'Components/TrendBadge',
  component: TrendBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# TrendBadge (Figma Node: \`node-id=66-149\`)

A compact status and metric delta pill component designed for analytics, stat counters, financial charts, and dashboard KPI cards.

### Figma Canvas Node Specification:
- **Node ID**: \`66-149\` (Canvas ID \`66:149\`)
- **Layer Archetype**: Metric Delta Pill
- **Token Bindings**:
  - Positive Background: \`var(--uedp-green-100)\` (#DCFCE7)
  - Positive Text: \`var(--uedp-green-800)\` (#166534)
  - Negative Background: \`var(--uedp-red-100)\` (#FEE2E2)
  - Negative Text: \`var(--uedp-red-950)\` (#450A0A)
  - Corner Radius: \`var(--uedp-rounded-xl)\` (12px)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The metric or percentage value to display',
      defaultValue: '+5 %',
    },
    variant: {
      control: 'radio',
      options: ['positive', 'negative', 'neutral'],
      description: 'Visual status theme variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size scaling for badge',
    },
    rounded: {
      control: 'select',
      options: ['lg', 'xl', '2xl', 'full'],
      description: 'Border radius token',
    },
    showTrendIcon: {
      control: 'boolean',
      description: 'Whether to show upward/downward arrow indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrendBadge>;

/**
 * Top pill from Figma node-id=66-149 (Positive trend: +5 %)
 */
export const Positive: Story = {
  args: {
    value: '+5 %',
    variant: 'positive',
    size: 'md',
  },
};

/**
 * Bottom pill from Figma node-id=66-149 (Negative / Alert trend)
 */
export const Negative: Story = {
  args: {
    value: '+5 %',
    variant: 'negative',
    size: 'md',
  },
};

/**
 * Exact visual recreation of Figma Node 66-149 on dark background
 */
export const FigmaNode66149Canvas: Story = {
  name: 'Figma Node 66-149 (Dark Canvas)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 48px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#A1A1AA', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Figma Node: 66-149
      </div>
      <TrendBadge value="+5 %" variant="positive" size="md" />
      <TrendBadge value="+5 %" variant="negative" size="md" />
    </div>
  ),
};

/**
 * Sizes comparison across small, medium, and large scales
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <TrendBadge value="+5 %" size="sm" variant="positive" />
      <TrendBadge value="+5 %" size="md" variant="positive" />
      <TrendBadge value="+5 %" size="lg" variant="positive" />
    </div>
  ),
};

/**
 * With optional trend arrow indicators
 */
export const WithTrendIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TrendBadge value="+12.4 %" variant="positive" showTrendIcon />
      <TrendBadge value="-3.8 %" variant="negative" showTrendIcon />
      <TrendBadge value="0.0 %" variant="neutral" />
    </div>
  ),
};
