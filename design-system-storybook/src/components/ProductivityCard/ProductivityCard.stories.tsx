import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProductivityCard } from './ProductivityCard';

const meta: Meta<typeof ProductivityCard> = {
  title: 'Components/ProductivityCard',
  component: ProductivityCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# ProductivityCard (Figma Node: \`node-id=76-34\` / \`Background+Border+Shadow\`)

A KPI analytics card component featuring an SVG vector pie chart and a color-coded legend.

### Figma Canvas Layer Specification:
- **Node ID**: \`76-34\` (Canvas ID \`76:34\`)
- **Figma Layer Name**: \`Background+Border+Shadow\`
- **Visual Spec**:
  - Title: \`"Productivity"\` (\`#1E293B\`)
  - Green Slice: \`Total calls\` (\`#16A34A\`, ~75%)
  - Orange Slice: \`Productive Calls\` (\`#F97316\`, ~25%)
  - Container: White (\`#FFFFFF\`), Rounded-3xl (\`24px\`), Elevation Shadow
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card headline title',
      defaultValue: 'Productivity',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Container theme',
      defaultValue: 'light',
    },
    showValues: {
      control: 'boolean',
      description: 'Display percentage and metric values in the legend',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductivityCard>;

/**
 * Default story matching Figma node-id=76-34
 */
export const Default: Story = {
  args: {
    title: 'Productivity',
    theme: 'light',
    showValues: false,
  },
};

/**
 * Exact visual reproduction of Figma Node 76-34 on dark canvas
 */
export const FigmaNode7634Canvas: Story = {
  name: 'Figma Node 76-34 ("Background+Border+Shadow")',
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
        Background+Border+Shadow (Node: 76-34)
      </div>
      <ProductivityCard title="Productivity" theme="light" />
    </div>
  ),
};

/**
 * Dark theme variation for dark mode dashboards
 */
export const DarkTheme: Story = {
  args: {
    title: 'Productivity',
    theme: 'dark',
    showValues: false,
  },
};

/**
 * With metric values and percentages shown in the legend
 */
export const WithValues: Story = {
  args: {
    title: 'Productivity',
    theme: 'light',
    showValues: true,
  },
};

/**
 * Multi-category chart breakdown
 */
export const MultiCategory: Story = {
  args: {
    title: 'Call Outcomes',
    theme: 'light',
    showValues: true,
    data: [
      { label: 'Completed Deals', value: 45, color: '#16A34A' },
      { label: 'Follow-ups Required', value: 30, color: '#F97316' },
      { label: 'Unreachable / Voicemail', value: 15, color: '#3B82F6' },
      { label: 'Lost Inquiries', value: 10, color: '#EF4444' },
    ],
  },
};
