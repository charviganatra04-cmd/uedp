import type { Meta, StoryObj } from '@storybook/react';
import { Filters } from './Filters';

const meta: Meta<typeof Filters> = {
  title: 'Components/Filters',
  component: Filters,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Filters\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Filters\` | Background (Chip) | \`var(--uedp-slate-800)\` | \`#1E293B\` |
| \`Filters\` | Active Background | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Filters\` | Border Radius | \`var(--uedp-border-radius-rounded-full)\` | \`9999px\` |
| \`Filters\` | Gap | \`var(--uedp-gap-gap-2)\` | \`8px\` |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Filter section title' },
    multiSelect: { control: 'boolean', description: 'Allow multi-chip selection' },
  },
};

export default meta;
type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {
    title: 'Filter Status',
    selectedIds: ['active'],
    multiSelect: false,
  },
};

export const MultiSelectMode: Story = {
  args: {
    title: 'Category Filter',
    options: [
      { id: 'env', label: 'Environment', count: 42 },
      { id: 'sec', label: 'Security', count: 18 },
      { id: 'perf', label: 'Performance', count: 27 },
      { id: 'net', label: 'Network', count: 11 },
    ],
    selectedIds: ['env', 'perf'],
    multiSelect: true,
  },
};
