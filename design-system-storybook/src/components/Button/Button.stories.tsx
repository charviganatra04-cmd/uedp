import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Button\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Button\` | Primary Background | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Button\` | Secondary Background | \`var(--uedp-slate-800)\` | \`#1E293B\` |
| \`Button\` | Border Radius | \`var(--uedp-border-radius-rounded-lg)\` | \`8px\` |
| \`Button\` | Padding (MD) | \`10px 18px\` | Standard MD |
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    isLoading: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Deploy Application',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'View Documentation',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Configure Webhooks',
  },
};

export const LoadingState: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Processing...',
  },
};
