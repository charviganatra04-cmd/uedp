import type { Meta, StoryObj } from '@storybook/react';
import { Component315 } from './Component315';

const meta: Meta<typeof Component315> = {
  title: 'Components/Component 315',
  component: Component315,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Component 315\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Component 315\` | Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Component 315\` | Border Radius | \`var(--uedp-border-radius-rounded-xl)\` | \`12px\` |
| \`Component 315\` | Button Border | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Component 315\` | Status Dot | \`var(--uedp-emerald-500)\` | \`#10B981\` |
        `,
      },
    },
  },
  argTypes: {
    name: { control: 'text', description: 'User display name' },
    role: { control: 'text', description: 'Job role title' },
    status: {
      control: 'select',
      options: ['online', 'busy', 'offline'],
      description: 'Presence status indicator',
    },
    actionLabel: { control: 'text', description: 'CTA button label' },
  },
};

export default meta;
type Story = StoryObj<typeof Component315>;

export const Default: Story = {
  args: {
    name: 'Alex Morgan',
    role: 'Lead System Architect',
    status: 'online',
    actionLabel: 'Manage Access',
  },
};

export const BusyState: Story = {
  args: {
    name: 'Dr. Evelyn Reed',
    role: 'Head of Data Operations',
    status: 'busy',
    actionLabel: 'Send Direct Message',
  },
};
