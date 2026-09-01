import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Input\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Input\` | Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Input\` | Border Radius | \`var(--uedp-border-radius-rounded-lg)\` | \`8px\` |
| \`Input\` | Focus Border | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Input\` | Label Color | \`var(--uedp-slate-300)\` | \`#CBD5E1\` |
        `,
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Cluster Endpoint URL',
    placeholder: 'https://k8s-cluster.uedp.internal',
    helperText: 'Must be an internal HTTPS address.',
  },
};

export const WithError: Story = {
  args: {
    label: 'API Access Token',
    placeholder: 'figd_...',
    error: 'Token validation failed. Please check permissions.',
  },
};
