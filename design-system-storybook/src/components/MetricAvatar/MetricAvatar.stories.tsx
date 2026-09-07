import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MetricAvatar } from './MetricAvatar';

const meta: Meta<typeof MetricAvatar> = {
  title: 'Components/MetricAvatar',
  component: MetricAvatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# MetricAvatar (Figma Node: \`node-id=66-120\` / \`Component 2\`)

A graphic avatar component representing active orders, task checklists, and time tracking.

### Figma Canvas Layer Specification:
- **Node ID**: \`66-120\` (Canvas ID \`66:120\`)
- **Figma Layer Name**: \`Component 2\`
- **Preset Variants**:
  - \`box\`: Soft Blue Background (\`var(--uedp-blue-100)\`) with Royal Blue Icon (\`var(--uedp-blue-600)\`)
  - \`clipboard\`: Soft Red Background (\`var(--uedp-red-100)\`) with Dark Burgundy Icon (\`var(--uedp-red-900)\`)
  - \`clock\`: Soft Green Background (\`var(--uedp-green-100)\`) with Forest Green Icon (\`var(--uedp-green-700)\`)
- **Shape**: \`var(--uedp-rounded-full)\` (9999px)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    preset: {
      control: 'select',
      options: ['box', 'clipboard', 'clock'],
      description: 'Preset icon matching Figma Component 2',
      defaultValue: 'box',
    },
    variant: {
      control: 'select',
      options: ['blue', 'red', 'green', 'amber', 'purple', 'neutral'],
      description: 'Color theme variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size scaling of the avatar',
      defaultValue: 'md',
    },
    bordered: {
      control: 'boolean',
      description: 'Whether to show subtle border',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MetricAvatar>;

/**
 * Circle 1 from Figma node-id=66-120 (Open Delivery Box in Blue)
 */
export const Box: Story = {
  args: {
    preset: 'box',
    size: 'md',
  },
};

/**
 * Circle 2 from Figma node-id=66-120 (Checklist Clipboard in Red)
 */
export const Clipboard: Story = {
  args: {
    preset: 'clipboard',
    size: 'md',
  },
};

/**
 * Circle 3 from Figma node-id=66-120 (Clock in Green)
 */
export const Clock: Story = {
  args: {
    preset: 'clock',
    size: 'md',
  },
};

/**
 * Exact visual reproduction of Figma Node 66-120 ("Component 2") on dark canvas
 */
export const FigmaNode66120Canvas: Story = {
  name: 'Figma Node 66-120 ("Component 2")',
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
      <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Component 2 (Node: 66-120)
      </div>
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
        <MetricAvatar preset="box" size="lg" />
        <MetricAvatar preset="clipboard" size="lg" />
        <MetricAvatar preset="clock" size="lg" />
      </div>
    </div>
  ),
};

/**
 * Sizes across small, medium, large, and extra-large
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <MetricAvatar preset="box" size="sm" />
      <MetricAvatar preset="box" size="md" />
      <MetricAvatar preset="box" size="lg" />
      <MetricAvatar preset="box" size="xl" />
    </div>
  ),
};

/**
 * Order Fulfillment Activity Timeline Example
 */
export const OrderTimelineExample: Story = {
  name: 'Order Fulfillment Flow',
  render: () => (
    <div
      style={{
        backgroundColor: '#18181B',
        border: '1px solid #27272A',
        borderRadius: '20px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '320px',
      }}
    >
      <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '16px' }}>Order Progression</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[
          { preset: 'box' as const, title: 'Item Packaged', time: '10:45 AM', status: 'Completed' },
          { preset: 'clipboard' as const, title: 'Manifest Verified', time: '11:15 AM', status: 'Inspected' },
          { preset: 'clock' as const, title: 'Dispatched to Transit', time: '11:50 AM', status: 'In Transit' },
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <MetricAvatar preset={item.preset} size="md" />
            <div>
              <div style={{ color: '#F4F4F5', fontWeight: 600, fontSize: '14px' }}>{item.title}</div>
              <div style={{ color: '#A1A1AA', fontSize: '12px', marginTop: '2px' }}>{item.time} • {item.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
