import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MetricStat } from './MetricStat';
import { TrendBadge } from '../TrendBadge/TrendBadge';
import { MetricAvatar } from '../MetricAvatar/MetricAvatar';

const meta: Meta<typeof MetricStat> = {
  title: 'Components/MetricStat',
  component: MetricStat,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# MetricStat (Figma Node: \`node-id=66-100\` / \`Frame 18/Frame 13\`)

A headline metric pair combining a stat label ("Active Order") with a bold, high-contrast numerical value ("843").

### Figma Canvas Layer Specification:
- **Node ID**: \`66-100\` (Canvas ID \`66:100\`)
- **Figma Layer Name**: \`Frame 18/Frame 13\`
- **Default Content**:
  - Label: \`"Active Order"\` (\`var(--uedp-slate-300)\`)
  - Value: \`"843"\` (\`var(--uedp-cyan-700)\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The stat title / label',
      defaultValue: 'Active Order',
    },
    value: {
      control: 'text',
      description: 'The statistic value / number',
      defaultValue: '843',
    },
    valueColor: {
      control: 'select',
      options: ['cyan', 'white', 'blue', 'green', 'red', 'amber', 'purple'],
      description: 'Color of the large value text',
      defaultValue: 'cyan',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Scale size',
      defaultValue: 'md',
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'Stacking direction',
      defaultValue: 'vertical',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricStat>;

/**
 * Default story matching Figma node-id=66-100 ("Active Order" - 843)
 */
export const Default: Story = {
  args: {
    label: 'Active Order',
    value: '843',
    valueColor: 'cyan',
    size: 'md',
  },
};

/**
 * Exact visual reproduction of Figma Node 66-100 ("Frame 18/Frame 13") on dark canvas
 */
export const FigmaNode66100Canvas: Story = {
  name: 'Figma Node 66-100 ("Frame 18/Frame 13")',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 48px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        minWidth: '240px',
      }}
    >
      <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Frame 18/Frame 13 (Node: 66-100)
      </div>
      <MetricStat label="Active Order" value="843" valueColor="cyan" size="md" />
    </div>
  ),
};

/**
 * Value color variants
 */
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
      <MetricStat label="Active Order" value="843" valueColor="cyan" />
      <MetricStat label="Total Revenue" value="$94,200" valueColor="white" />
      <MetricStat label="Fulfilled Orders" value="1,248" valueColor="green" />
      <MetricStat label="Dispatched Items" value="482" valueColor="blue" />
      <MetricStat label="Returned Items" value="19" valueColor="red" />
      <MetricStat label="Pending Reviews" value="64" valueColor="amber" />
    </div>
  ),
};

/**
 * Sizes scale (sm, md, lg)
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <MetricStat label="Small Size" value="843" size="sm" valueColor="cyan" />
      <MetricStat label="Medium Size (Default)" value="843" size="md" valueColor="cyan" />
      <MetricStat label="Large Size" value="843" size="lg" valueColor="cyan" />
    </div>
  ),
};

/**
 * Combined with TrendBadge in the stat header
 */
export const WithTrendBadge: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px' }}>
      <MetricStat
        label="Active Order"
        value="843"
        valueColor="cyan"
        extra={<TrendBadge value="+5 %" variant="positive" size="sm" />}
      />
      <MetricStat
        label="Delayed Shipments"
        value="28"
        valueColor="red"
        extra={<TrendBadge value="+5 %" variant="negative" size="sm" />}
      />
    </div>
  ),
};

/**
 * Complete Figma Active Order Card Composition:
 * Combines MetricAvatar (node 66-120), MetricStat (node 66-100), and TrendBadge (node 66-149)
 */
export const CompleteActiveOrderCard: Story = {
  name: 'Complete Active Order Card',
  render: () => (
    <div
      style={{
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: '20px',
        padding: '24px',
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <MetricAvatar preset="box" size="lg" />
        <TrendBadge value="+5 %" variant="positive" size="md" />
      </div>

      <MetricStat label="Active Order" value="843" valueColor="cyan" size="md" />
    </div>
  ),
};
