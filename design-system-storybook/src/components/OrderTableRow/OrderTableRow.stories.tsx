import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OrderTableRow } from './OrderTableRow';

const meta: Meta<typeof OrderTableRow> = {
  title: 'Components/OrderTableRow',
  component: OrderTableRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# OrderTableRow (Figma Node: \`node-id=103-502\`)

A structured, responsive data row component for order management tables, ERP portals, and logistics dashboards.

### Figma Canvas Layer Specification:
- **Node ID**: \`103-502\` (Canvas ID \`103:502\`)
- **Default Data**:
  - Order ID: \`#ORD-2849\`
  - Customer: \`David Ross\`
  - Retailer: \`Apex Retailers\` (with store badge)
  - Product: \`Bio-Feed X200\` (\`Batch: B-992\`)
  - Quantity: \`500 KG\`
  - Badge Tag: \`Bulk Discount\`
  - Action Controls: View, Edit, Delete
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orderId: {
      control: 'text',
      description: 'Order reference number',
      defaultValue: '#ORD-2849',
    },
    customer: {
      control: 'text',
      description: 'Customer or buyer name',
      defaultValue: 'David Ross',
    },
    retailer: {
      control: 'text',
      description: 'Store or vendor name',
      defaultValue: 'Apex Retailers',
    },
    productTitle: {
      control: 'text',
      description: 'Product item name',
      defaultValue: 'Bio-Feed X200',
    },
    productSubtitle: {
      control: 'text',
      description: 'Batch or serial reference',
      defaultValue: 'Batch: B-992',
    },
    quantity: {
      control: 'text',
      description: 'Quantity and units',
      defaultValue: '500 KG',
    },
    tag: {
      control: 'text',
      description: 'Badge tag text',
      defaultValue: 'Bulk Discount',
    },
  },
};

export default meta;
type Story = StoryObj<typeof OrderTableRow>;

/**
 * Default story matching Figma node-id=103-502
 */
export const Default: Story = {
  args: {
    orderId: '#ORD-2849',
    customer: 'David Ross',
    retailer: 'Apex Retailers',
    productTitle: 'Bio-Feed X200',
    productSubtitle: 'Batch: B-992',
    quantity: '500 KG',
    tag: 'Bulk Discount',
  },
};

/**
 * Exact visual reproduction of Figma Node 103-502 on dark canvas
 */
export const FigmaNode103502Canvas: Story = {
  name: 'Figma Node 103-502 (Dark Canvas)',
  render: () => (
    <div
      style={{
        backgroundColor: '#1E1E1E',
        padding: '32px 24px',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
        maxWidth: '1100px',
        width: '100%',
      }}
    >
      <div style={{ color: '#A1A1AA', fontSize: '11px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
        Figma Node: 103-502
      </div>
      <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <OrderTableRow />
      </div>
    </div>
  ),
};

/**
 * Full Interactive Orders Table Example
 */
export const OrdersTableExample: Story = {
  name: 'Complete Order Management Table',
  render: () => (
    <div
      style={{
        backgroundColor: '#121316',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        maxWidth: '1100px',
        width: '100%',
        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Table Header */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '120px 150px 180px 1.2fr 100px 140px 110px',
          gap: '16px',
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
        <div>Order ID</div>
        <div>Customer</div>
        <div>Retailer</div>
        <div>Product Details</div>
        <div>Quantity</div>
        <div>Discount</div>
        <div style={{ textAlign: 'right' }}>Actions</div>
      </div>

      {/* Rows */}
      <OrderTableRow
        orderId="#ORD-2849"
        customer="David Ross"
        retailer="Apex Retailers"
        productTitle="Bio-Feed X200"
        productSubtitle="Batch: B-992"
        quantity="500 KG"
        tag="Bulk Discount"
      />
      <OrderTableRow
        orderId="#ORD-2850"
        customer="Sarah Jenkins"
        retailer="Nordic Agro"
        productTitle="Nitro-Grow Organic"
        productSubtitle="Batch: N-104"
        quantity="1,200 KG"
        tag="Pre-Order 10%"
      />
      <OrderTableRow
        orderId="#ORD-2851"
        customer="Michael Chen"
        retailer="Prime Harvest Co."
        productTitle="Phos-Boost Ultra"
        productSubtitle="Batch: P-551"
        quantity="350 KG"
        tag="Wholesale"
      />
      <OrderTableRow
        orderId="#ORD-2852"
        customer="Emma Watson"
        retailer="Verdant Supplies"
        productTitle="Aqua-Flora Nutrient"
        productSubtitle="Batch: A-802"
        quantity="800 L"
        tag="VIP Member"
      />
    </div>
  ),
};
