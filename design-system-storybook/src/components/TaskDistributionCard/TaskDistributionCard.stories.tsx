import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  TaskDistributionCard,
  defaultTaskDistributionData,
  TaskDistributionSlice,
} from './TaskDistributionCard';

const meta: Meta<typeof TaskDistributionCard> = {
  title: 'Components/TaskDistributionCard',
  component: TaskDistributionCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# TaskDistributionCard (Figma Node: \`node-id=92-590\` / \`Task Distribution\`)

A 4-segment KPI task analytics card component featuring an SVG vector pie chart and a color-coded legend.

### Figma Canvas Layer Specification:
- **Node ID**: \`92-590\` (Canvas ID \`92:590\`)
- **Figma Layer Name**: \`Task Distribution\`
- **Visual Spec**:
  - Title: \`"Task Distribution"\` (\`#1E293B\`, 700 bold)
  - Green Slice: \`Total Calls\` (\`#16A34A\`, ~46%, 115° to 270°)
  - Orange Slice: \`Productive Calls\` (\`#F97316\`, ~34%, 346° to 115°)
  - Burgundy Slice: \`Productive Calls\` (\`#8B1D24\`, ~10%, 308° to 346°)
  - Red Slice: \`Productive Calls\` (\`#EF4444\`, ~10%, 270° to 308°)
  - Legend: Matches Figma canvas with 4 items (Green + 3 Orange badges)
  - Container: White (\`#FFFFFF\`), Rounded-3xl (\`24px\`), Soft Drop Shadow
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card headline title',
      defaultValue: 'Task Distribution',
    },
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: 'Container theme',
      defaultValue: 'light',
    },
    showValues: {
      control: 'boolean',
      description: 'Display percentage and metric values in the legend',
      defaultValue: false,
    },
    useSliceColorForLegend: {
      control: 'boolean',
      description: 'Match legend marker colors strictly to their respective pie slice',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof TaskDistributionCard>;

/**
 * Default story matching Figma node-id=92-590 exactly
 */
export const Default: Story = {
  args: {
    title: 'Task Distribution',
    theme: 'light',
    showValues: false,
    useSliceColorForLegend: false,
  },
};

/**
 * Exact visual reproduction of Figma Node 92-590 on dark canvas
 */
export const FigmaNode92590Canvas: Story = {
  name: 'Figma Node 92-590 ("Task Distribution")',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 40px',
        borderRadius: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div style={{ color: '#71717A', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        Task Distribution (Node: 92-590)
      </div>
      <TaskDistributionCard title="Task Distribution" theme="light" />
    </div>
  ),
};

/**
 * Categorized breakdown with distinct labels and slice-matched legend colors
 */
export const CategorizedDistribution: Story = {
  args: {
    title: 'Task Distribution',
    theme: 'light',
    showValues: true,
    useSliceColorForLegend: true,
    data: [
      {
        id: 'total-calls',
        label: 'Total Calls',
        value: 1250,
        color: '#16A34A',
        startAngleDeg: 115,
        endAngleDeg: 270,
      },
      {
        id: 'productive-calls',
        label: 'Productive Calls',
        value: 920,
        color: '#F97316',
        startAngleDeg: 346,
        endAngleDeg: 475,
      },
      {
        id: 'escalated-calls',
        label: 'Escalated Inquiries',
        value: 270,
        color: '#8B1D24',
        startAngleDeg: 308,
        endAngleDeg: 346,
      },
      {
        id: 'pending-followups',
        label: 'Pending Follow-ups',
        value: 270,
        color: '#EF4444',
        startAngleDeg: 270,
        endAngleDeg: 308,
      },
    ],
  },
};

/**
 * With metric counts and percentage calculations visible in the legend
 */
export const WithValues: Story = {
  args: {
    title: 'Task Distribution',
    theme: 'light',
    showValues: true,
    useSliceColorForLegend: false,
  },
};

/**
 * Dark theme variation for modern dark mode operational dashboards
 */
export const DarkTheme: Story = {
  args: {
    title: 'Task Distribution',
    theme: 'dark',
    showValues: false,
    useSliceColorForLegend: false,
  },
};

/**
 * Interactive story with click handler demonstration
 */
export const InteractiveSelection: Story = {
  render: () => {
    const [selected, setSelected] = useState<TaskDistributionSlice | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <TaskDistributionCard
          title="Task Distribution"
          showValues={true}
          onSliceClick={(slice) => setSelected(slice)}
        />
        {selected && (
          <div
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: '#F1F5F9',
              color: '#0F172A',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            Selected: <span style={{ color: selected.color }}>{selected.label}</span> ({selected.value} calls)
          </div>
        )}
      </div>
    );
  },
};
