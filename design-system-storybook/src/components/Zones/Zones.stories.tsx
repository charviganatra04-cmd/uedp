import type { Meta, StoryObj } from '@storybook/react';
import { Zones } from './Zones';

const meta: Meta<typeof Zones> = {
  title: 'Components/Zones',
  component: Zones,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Zones\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Zones\` | Card Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Zones\` | Border Radius | \`var(--uedp-border-radius-rounded-xl)\` | \`12px\` |
| \`Zones\` | Optimal Tag | \`var(--uedp-emerald-500)\` | \`#10B981\` |
| \`Zones\` | Degraded Tag | \`#F59E0B\` (Amber) | Amber Tint |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Header title' },
  },
};

export default meta;
type Story = StoryObj<typeof Zones>;

export const Default: Story = {
  args: {
    title: 'Infrastructure Zones',
  },
};
