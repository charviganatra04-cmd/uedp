import type { Meta, StoryObj } from '@storybook/react';
import { DateFilters } from './DateFilters';

const meta: Meta<typeof DateFilters> = {
  title: 'Components/Date Filters',
  component: DateFilters,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Date filters\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Date filters\` | Container Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Date filters\` | Preserves Layer Name | \`"Date filters"\` | Preserved |
| \`Date filters\` | Active Button | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Date filters\` | Input Border | \`var(--uedp-slate-700)\` | \`#334155\` |
        `,
      },
    },
  },
  argTypes: {
    preset: {
      control: 'select',
      options: ['7d', '30d', '90d', 'custom'],
      description: 'Selected range preset',
    },
    startDate: { control: 'text', description: 'Start date YYYY-MM-DD' },
    endDate: { control: 'text', description: 'End date YYYY-MM-DD' },
  },
};

export default meta;
type Story = StoryObj<typeof DateFilters>;

export const Default: Story = {
  args: {
    preset: '30d',
    startDate: '2026-07-28',
    endDate: '2026-08-27',
  },
};
