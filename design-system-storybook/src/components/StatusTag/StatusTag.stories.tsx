import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusTag } from './StatusTag';

const meta: Meta<typeof StatusTag> = {
  title: 'Components/StatusTag',
  component: StatusTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# StatusTag (Figma Node: \`node-id=78-276\` / \`Background\`)

A 3-state operational status component representing entity lifecycle states: **Active**, **Deactive**, and **On Hold**.

### Figma Canvas Layer Specification:
- **Node ID**: \`78-276\` (Canvas ID \`78:276\`)
- **Figma Layer Name**: \`Background\` (*3 Variants*)
- **Variant Tokens**:
  - \`active\`: Light Green (\`var(--uedp-green-100)\` / \`var(--uedp-green-800)\`)
  - \`deactive\`: Coral Red (\`var(--uedp-red-400)\` / \`var(--uedp-red-950)\`)
  - \`on-hold\`: Cool Slate (\`var(--uedp-slate-400)\` / \`var(--uedp-slate-900)\`)
- **Border Radius**: \`var(--uedp-rounded-xl, 12px)\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['active', 'deactive', 'on-hold'],
      description: 'Lifecycle state variant',
      defaultValue: 'active',
    },
    label: {
      control: 'text',
      description: 'Custom text override',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size scaling of the tag',
      defaultValue: 'md',
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusTag>;

/**
 * Active variant from Figma node-id=78-276
 */
export const Active: Story = {
  args: {
    state: 'active',
    size: 'md',
  },
};

/**
 * Deactive variant from Figma node-id=78-276
 */
export const Deactive: Story = {
  args: {
    state: 'deactive',
    size: 'md',
  },
};

/**
 * On Hold variant from Figma node-id=78-276
 */
export const OnHold: Story = {
  args: {
    state: 'on-hold',
    size: 'md',
  },
};

/**
 * Exact visual reproduction of Figma Node 78-276 ("Background / 3 Variants")
 */
export const FigmaNode78276Canvas: Story = {
  name: 'Figma Node 78-276 ("Background")',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 48px',
        borderRadius: '16px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Background (Node: 78-276)
      </div>

      <div
        style={{
          border: '1.5px dashed #A855F7',
          borderRadius: '16px',
          padding: '28px 36px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          alignItems: 'center',
          minWidth: '200px',
        }}
      >
        <StatusTag state="active" size="md" />
        <StatusTag state="deactive" size="md" />
        <StatusTag state="on-hold" size="md" />
      </div>

      <div
        style={{
          backgroundColor: '#A855F7',
          color: '#FFFFFF',
          fontSize: '11px',
          fontWeight: 600,
          padding: '2px 8px',
          borderRadius: '4px',
        }}
      >
        3 Variants
      </div>
    </div>
  ),
};

/**
 * Sizes across small, medium, and large
 */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <StatusTag state="active" size="sm" />
      <StatusTag state="active" size="md" />
      <StatusTag state="active" size="lg" />
    </div>
  ),
};

/**
 * Real-world accounts lifecycle status list
 */
export const AccountLifecycleList: Story = {
  name: 'Account Lifecycle Status List',
  render: () => (
    <div
      style={{
        backgroundColor: '#121316',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '380px',
      }}
    >
      <div style={{ color: '#FAFAFA', fontWeight: 600, fontSize: '15px' }}>Partner Store Accounts</div>
      {[
        { name: 'Apex Retailers Inc.', state: 'active' as const },
        { name: 'Nordic Agro Hub', state: 'deactive' as const },
        { name: 'Verdant Supplies Co.', state: 'on-hold' as const },
        { name: 'Prime Harvest Ltd.', state: 'active' as const },
      ].map((acc, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '12px',
            borderBottom: i < 3 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
          }}
        >
          <span style={{ color: '#E2E8F0', fontSize: '14px', fontWeight: 500 }}>{acc.name}</span>
          <StatusTag state={acc.state} size="sm" />
        </div>
      ))}
    </div>
  ),
};
