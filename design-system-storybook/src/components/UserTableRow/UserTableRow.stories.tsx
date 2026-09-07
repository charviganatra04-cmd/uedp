import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UserTableRow } from './UserTableRow';

const meta: Meta<typeof UserTableRow> = {
  title: 'Components/UserTableRow',
  component: UserTableRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# UserTableRow (Figma Node: \`node-id=0-1\` / \`Frame 57\`)

A data row component representing user accounts, customer profiles, and retailer representatives.

### Figma Canvas Layer Specification:
- **Node ID**: \`0-1\` (Canvas ID \`0:1\`)
- **Figma Layer Name**: \`Frame 57\`
- **Default Content**:
  - User: \`Charvi Ganatra\` (with circular portrait avatar)
  - Retailer: \`Apex Retailers\` (with store badge)
  - Status: \`Active\` (light green \`StatusBadge\`)
  - Actions: View (\`Eye\`), Delete (\`Trash2\`), Edit (\`Pencil\`)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'User full name',
      defaultValue: 'Charvi Ganatra',
    },
    retailer: {
      control: 'text',
      description: 'Associated retailer or company',
      defaultValue: 'Apex Retailers',
    },
    status: {
      control: 'text',
      description: 'Account status text',
      defaultValue: 'Active',
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserTableRow>;

/**
 * Default story matching Figma node-id=0-1 ("Frame 57")
 */
export const Default: Story = {
  args: {
    name: 'Charvi Ganatra',
    retailer: 'Apex Retailers',
    status: 'Active',
  },
};

/**
 * Exact visual reproduction of Figma Node 0-1 ("Frame 57") on dark canvas with auto-layout frame guides
 */
export const FigmaNode01Canvas: Story = {
  name: 'Figma Node 0-1 ("Frame 57")',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '36px 32px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        maxWidth: '850px',
        width: '100%',
      }}
    >
      <div style={{ color: '#A855F7', fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}>
        ❖ Frame 57 (Node: 0-1)
      </div>

      <div
        style={{
          border: '1.5px solid #A855F7',
          borderRadius: '4px',
          overflow: 'hidden',
        }}
      >
        <UserTableRow
          name="Charvi Ganatra"
          retailer="Apex Retailers"
          status="Active"
        />
      </div>
    </div>
  ),
};

/**
 * Full User / Retailer Directory Table
 */
export const UserDirectoryTable: Story = {
  name: 'Retailer User Directory Table',
  render: () => (
    <div
      style={{
        backgroundColor: '#121316',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        maxWidth: '850px',
        width: '100%',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Table Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1.4fr 120px 120px',
          gap: '20px',
          padding: '14px 24px',
          backgroundColor: '#181A1F',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '12px',
          fontWeight: 600,
          color: '#94A3B8',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}
      >
        <div>Account Representative</div>
        <div>Retailer Organization</div>
        <div>Status</div>
        <div style={{ textAlign: 'right' }}>Actions</div>
      </div>

      <UserTableRow
        name="Charvi Ganatra"
        avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
        retailer="Apex Retailers"
        status="Active"
      />
      <UserTableRow
        name="Marcus Vance"
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
        retailer="Nordic Agro Hub"
        status="Active"
      />
      <UserTableRow
        name="Elena Rostova"
        avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
        retailer="Verdant Supplies"
        status="Deactive"
      />
      <UserTableRow
        name="Julian Thorne"
        avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
        retailer="Prime Harvest Co."
        status="Active"
      />
    </div>
  ),
};
