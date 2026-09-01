import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';

const meta: Meta<typeof Map> = {
  title: 'Components/Map',
  component: Map,
  parameters: {
    docs: {
      description: {
        component: `
### Figma Component Spec Table: \`Map\`

| Figma Layer Name | Property Binding | Token ID / Value | Default |
| :--- | :--- | :--- | :--- |
| \`Map\` | Container Background | \`var(--uedp-slate-900)\` | \`#0F172A\` |
| \`Map\` | Border Radius | \`var(--uedp-border-radius-rounded-2xl)\` | \`16px\` |
| \`Map\` | Active Marker | \`var(--uedp-cyan-500)\` | \`#06B6D4\` |
| \`Map\` | Offline Marker | \`var(--uedp-red-500)\` | \`#EF4444\` |
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text', description: 'Map title label' },
    zoom: { control: { type: 'range', min: 1, max: 4, step: 0.5 }, description: 'Map zoom level' },
  },
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    title: 'Global Network Distribution Map',
    zoom: 1,
  },
};
