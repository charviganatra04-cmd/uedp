import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Card\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Card\` | Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Card\` | Border Radius | \`var(--uedp-border-radius-rounded-2xl)\` | \`16px\` |
| \`Card\` | Padding | \`var(--uedp-padding-p-6)\` | \`24px\` |
| \`Card\` | Gap | \`var(--uedp-gap-gap-4)\` | \`16px\` |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    badge: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'bordered'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'System Telemetry Container',
    subtitle: 'Real-time resource allocation and process streams',
    badge: 'ACTIVE',
    variant: 'default',
  },
};

export const BorderedVariant: Story = {
  args: {
    title: 'High Priority Alert',
    subtitle: 'Automated failover policy triggered',
    badge: 'WARNING',
    variant: 'bordered',
  },
};
