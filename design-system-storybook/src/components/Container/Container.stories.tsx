import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Container\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Container\` | Max Width 7XL | \`var(--uedp-max-w-max-w-7xl)\` | \`80rem\` |
| \`Container\` | Padding | \`var(--uedp-padding-p-6)\` | \`24px\` |
        `,
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '7xl', 'full'],
    },
    centered: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    maxWidth: '7xl',
    centered: true,
  },
};
