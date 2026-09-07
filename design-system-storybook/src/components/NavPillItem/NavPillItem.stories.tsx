import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LayoutGrid, Compass, FileCheck, TrendingUp, CircleDollarSign } from 'lucide-react';
import { NavPillItem } from './NavPillItem';

const meta: Meta<typeof NavPillItem> = {
  title: 'Components/NavPillItem',
  component: NavPillItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# NavPillItem (Figma Node: \`node-id=87-408\`)

A 3-state navigation pill component set synchronized directly from Figma:
1. **Selected State** (Top): Capsule pill with soft blue-slate background (\`#C9D8E6\`), dark navy bold typography (\`#0F172A\`), flat.
2. **Hover State** (Middle): Floating elevated pill with deep soft shadow and smooth micro-lift animation (\`translateY(-2px) scale(1.02)\`).
3. **Relaxed State** (Bottom): Transparent idle state with muted slate typography (\`#64748B\`).
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Navigation label text',
      defaultValue: 'Dashboard',
    },
    state: {
      control: 'select',
      options: [undefined, 'selected', 'hover', 'relaxed'],
      description: 'Explicit Figma variant state',
    },
    theme: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color theme mode',
      defaultValue: 'dark',
    },
    selected: {
      control: 'boolean',
      description: 'Whether item is selected in interactive mode',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavPillItem>;

/**
 * Exact visual reproduction of Figma Node 87-408 Component Set
 * Shows all 3 states stacked inside the purple dashed component set container.
 */
export const FigmaNode87408ComponentSet: Story = {
  name: 'Figma Node 87-408 (Selected / Hover / Relaxed)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 40px',
        borderRadius: '20px',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Component Set Frame with Purple Dashed Border matching Figma */}
      <div
        style={{
          border: '2px dashed #A855F7',
          borderRadius: '16px',
          padding: '28px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          minWidth: '220px',
        }}
      >
        {/* 1. Selected State */}
        <NavPillItem state="selected" label="Dashboard" theme="dark" />

        {/* 2. Hover State with floating drop shadow & animation */}
        <NavPillItem state="hover" label="Dashboard" theme="dark" />

        {/* 3. Relaxed State */}
        <NavPillItem state="relaxed" label="Dashboard" theme="dark" />
      </div>

      <div
        style={{
          marginTop: '16px',
          color: '#A1A1AA',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.04em',
        }}
      >
        ❖ Nav Item Component Set (Node: 87-408)
      </div>
    </div>
  ),
};

/**
 * Interactive playground demonstrating smooth transition:
 * Relaxed (rest) -> Hover (lift & shadow) -> Selected (click)
 */
export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);

    return (
      <div
        style={{
          backgroundColor: '#1E1E1E',
          padding: '40px 60px',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <NavPillItem
          label="Dashboard"
          selected={selected}
          onClick={() => setSelected(!selected)}
          theme="dark"
        />
        <div style={{ color: '#71717A', fontSize: '13px' }}>
          Hover to test lift animation • Click to toggle selected state ({selected ? 'Selected' : 'Relaxed'})
        </div>
      </div>
    );
  },
};

/**
 * State 1: Selected
 */
export const StateSelected: Story = {
  args: {
    label: 'Dashboard',
    state: 'selected',
    theme: 'dark',
  },
};

/**
 * State 2: Hover (with floating elevation and micro-lift animation)
 */
export const StateHover: Story = {
  args: {
    label: 'Dashboard',
    state: 'hover',
    theme: 'dark',
  },
};

/**
 * State 3: Relaxed
 */
export const StateRelaxed: Story = {
  args: {
    label: 'Dashboard',
    state: 'relaxed',
    theme: 'dark',
  },
};

/**
 * Navigation Bar Example with active item switching
 */
export const FullPillNavbar: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');

    const navItems = [
      { id: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={20} /> },
      { id: 'orders', label: 'Orders', icon: <Compass size={20} /> },
      { id: 'tasks', label: 'Pending Tasks', icon: <FileCheck size={20} /> },
      { id: 'reports', label: 'Reports', icon: <TrendingUp size={20} /> },
      { id: 'disbursement', label: 'Disbursement', icon: <CircleDollarSign size={20} /> },
    ];

    return (
      <div
        style={{
          backgroundColor: '#18181B',
          padding: '24px 32px',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          minWidth: '260px',
          boxShadow: '0 16px 36px rgba(0, 0, 0, 0.4)',
        }}
      >
        <div style={{ color: '#A1A1AA', fontSize: '12px', fontWeight: 700, paddingLeft: '8px', marginBottom: '4px' }}>
          NAVIGATION
        </div>
        {navItems.map((item) => (
          <NavPillItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={active === item.id}
            onClick={() => setActive(item.id)}
            theme="dark"
          />
        ))}
      </div>
    );
  },
};

/**
 * Light theme variation
 */
export const LightTheme: Story = {
  args: {
    label: 'Dashboard',
    theme: 'light',
    selected: false,
  },
};
