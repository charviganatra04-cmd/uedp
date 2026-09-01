import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Header\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Header\` | Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Header\` | Logo Gradient | \`var(--uedp-cyan-500)\` to Blue | Cyan Gradient |
| \`Header\` | Status Indicator | \`var(--uedp-emerald-500)\` | \`#10B981\` |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    userNav: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    title: 'UEDP Control Plane',
    subtitle: 'Figma Design System & Storybook Showcase',
    userNav: true,
  },
};
