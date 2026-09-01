import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`SearchBar\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`SearchBar\` | Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`SearchBar\` | Border Radius | \`var(--uedp-border-radius-rounded-full)\` | \`9999px\` |
| \`SearchBar\` | Focus Border | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
        `,
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    shortcutHint: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search components, tokens, or variables...',
    shortcutHint: '⌘K',
  },
};
