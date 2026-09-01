import type { Meta, StoryObj } from '@storybook/react';
import { Component336 } from './Component336';

const meta: Meta<typeof Component336> = {
  title: 'Components/Component 336',
  component: Component336,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Component 336\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Component 336\` | Background | \`var(--uedp-slate-900)\` (\`#0F172A\`) | Dark Slate |
| \`Component 336\` | Border Radius | \`var(--uedp-border-radius-rounded-2xl)\` | \`16px\` |
| \`Component 336\` | Padding | \`var(--uedp-padding-p-6)\` | \`24px\` |
| \`Component 336\` | Gap | \`var(--uedp-gap-gap-4)\` | \`16px\` |
| \`Badge\` | Background | \`rgba(16, 185, 129, 0.15)\` | Green Tint |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Metric card label' },
    value: { control: 'text', description: 'Primary value text' },
    change: { control: 'text', description: 'Percentage indicator' },
    variant: {
      control: 'select',
      options: ['default', 'highlight', 'compact'],
      description: 'Visual layout variant',
    },
    trend: {
      control: 'radio',
      options: ['up', 'down', 'neutral'],
      description: 'Metric trend direction',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Component336>;

export const Default: Story = {
  args: {
    title: 'Total Active Deployments',
    value: '1,428',
    change: '+12.4%',
    variant: 'default',
    trend: 'up',
  },
};

export const HighlightVariant: Story = {
  args: {
    title: 'System Throughput',
    value: '99.98%',
    change: '+0.04%',
    variant: 'highlight',
    trend: 'up',
  },
};

export const CompactNegativeTrend: Story = {
  args: {
    title: 'Latency Spikes',
    value: '42ms',
    change: '-8.1%',
    variant: 'compact',
    trend: 'down',
  },
};
