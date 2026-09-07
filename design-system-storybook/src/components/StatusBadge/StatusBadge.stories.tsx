import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# StatusBadge (Figma Node: \`node-id=104-1069\` / \`Frame 102\`)

A rounded status badge and discount tag component designed for data tables, order manifests, and product tags.

### Figma Canvas Layer Specification:
- **Node ID**: \`104-1069\` (Canvas ID \`104:1069\`)
- **Figma Layer Name**: \`Frame 102\`
- **Preset Variants**:
  - \`purple\` (*"Bulk Discount"*): Soft purple background (\`var(--uedp-violet-200)\`) with dark purple text (\`var(--uedp-violet-900)\`)
  - \`deactive\` (*"Deactive"*): Soft slate background (\`var(--uedp-slate-200)\`) with dark slate text (\`var(--uedp-slate-600)\`)
- **Border Radius**: \`var(--uedp-rounded-xl, 12px)\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Tag text',
      defaultValue: 'Bulk Discount',
    },
    variant: {
      control: 'select',
      options: ['purple', 'deactive', 'active', 'blue', 'amber', 'red', 'neutral'],
      description: 'Color theme variant',
      defaultValue: 'purple',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size scale',
      defaultValue: 'md',
    },
    dot: {
      control: 'boolean',
      description: 'Show status dot',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

/**
 * Bulk Discount variant from Figma node-id=104-1069
 */
export const BulkDiscount: Story = {
  args: {
    label: 'Bulk Discount',
    variant: 'purple',
    size: 'md',
  },
};

/**
 * Deactive variant from Figma node-id=104-1069
 */
export const Deactive: Story = {
  args: {
    label: 'Deactive',
    variant: 'deactive',
    size: 'md',
  },
};

/**
 * Exact visual reproduction of Figma Node 104-1069 ("Frame 102") with component variant frame
 */
export const FigmaNode1041069Canvas: Story = {
  name: 'Figma Node 104-1069 ("Frame 102")',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 48px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Frame 102 (Node: 104-1069)
      </div>
      <div
        style={{
          border: '1.5px dashed #A855F7',
          borderRadius: '16px',
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'flex-start',
        }}
      >
        <StatusBadge label="Bulk Discount" variant="purple" size="md" />
        <StatusBadge label="Bulk Discount" variant="purple" size="md" />
        <StatusBadge label="Deactive" variant="deactive" size="md" />
      </div>
    </div>
  ),
};

/**
 * Design system status colors
 */
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
      <StatusBadge label="Bulk Discount" variant="purple" />
      <StatusBadge label="Deactive" variant="deactive" />
      <StatusBadge label="Active" variant="active" />
      <StatusBadge label="In Transit" variant="blue" />
      <StatusBadge label="Pending Review" variant="amber" />
      <StatusBadge label="Canceled" variant="red" />
      <StatusBadge label="Archived" variant="neutral" />
    </div>
  ),
};

/**
 * Sizes across small, medium, and large
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <StatusBadge label="Bulk Discount" size="sm" />
      <StatusBadge label="Bulk Discount" size="md" />
      <StatusBadge label="Bulk Discount" size="lg" />
    </div>
  ),
};

/**
 * With optional colored status indicator dot
 */
export const WithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <StatusBadge label="Live Order" variant="active" dot />
      <StatusBadge label="Pending" variant="amber" dot />
      <StatusBadge label="Deactive" variant="deactive" dot />
    </div>
  ),
};
