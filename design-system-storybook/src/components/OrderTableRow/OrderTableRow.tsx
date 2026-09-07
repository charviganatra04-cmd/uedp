import React, { forwardRef } from 'react';
import { Store, Eye, Pencil, Trash2 } from 'lucide-react';
import './OrderTableRow.css';

export interface OrderTableRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique order identifier.
   * @default "#ORD-2849"
   */
  orderId?: string;
  /**
   * Customer name.
   * @default "David Ross"
   */
  customer?: string;
  /**
   * Retailer or vendor name.
   * @default "Apex Retailers"
   */
  retailer?: string;
  /**
   * Custom retailer icon or logo element.
   */
  retailerIcon?: React.ReactNode;
  /**
   * Product name or headline.
   * @default "Bio-Feed X200"
   */
  productTitle?: string;
  /**
   * Product batch code or secondary information.
   * @default "Batch: B-992"
   */
  productSubtitle?: string;
  /**
   * Ordered quantity with units.
   * @default "500 KG"
   */
  quantity?: string;
  /**
   * Promotional or order discount badge text.
   * @default "Bulk Discount"
   */
  tag?: string;
  /**
   * Custom action buttons element. Overrides default view/edit/delete buttons.
   */
  actions?: React.ReactNode;
  /**
   * Callback invoked when View button is clicked.
   */
  onView?: (orderId: string) => void;
  /**
   * Callback invoked when Edit button is clicked.
   */
  onEdit?: (orderId: string) => void;
  /**
   * Callback invoked when Delete button is clicked.
   */
  onDelete?: (orderId: string) => void;
}

/**
 * OrderTableRow Component
 *
 * Synchronized from Figma canvas node: `node-id=103-502`
 * Full-width data table row for order management, logistics dashboards, and inventory ledgers.
 */
export const OrderTableRow = forwardRef<HTMLDivElement, OrderTableRowProps>(
  (
    {
      orderId = '#ORD-2849',
      customer = 'David Ross',
      retailer = 'Apex Retailers',
      retailerIcon,
      productTitle = 'Bio-Feed X200',
      productSubtitle = 'Batch: B-992',
      quantity = '500 KG',
      tag = 'Bulk Discount',
      actions,
      onView,
      onEdit,
      onDelete,
      className = '',
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        role="row"
        className={`uedp-order-row ${className}`.trim()}
        data-figma-node="103-502"
        {...rest}
      >
        {/* Column 1: Order ID */}
        <div className="uedp-order-row__id" role="cell">
          {orderId}
        </div>

        {/* Column 2: Customer */}
        <div className="uedp-order-row__customer" role="cell" title={customer}>
          {customer}
        </div>

        {/* Column 3: Retailer */}
        <div className="uedp-order-row__retailer" role="cell" title={retailer}>
          <span className="uedp-order-row__retailer-badge" aria-hidden="true">
            {retailerIcon ?? <Store size={14} />}
          </span>
          <span className="uedp-order-row__retailer-name">{retailer}</span>
        </div>

        {/* Column 4: Product */}
        <div className="uedp-order-row__product" role="cell">
          <span className="uedp-order-row__product-title" title={productTitle}>
            {productTitle}
          </span>
          {productSubtitle && (
            <span className="uedp-order-row__product-subtitle">{productSubtitle}</span>
          )}
        </div>

        {/* Column 5: Quantity */}
        <div className="uedp-order-row__quantity" role="cell">
          {quantity}
        </div>

        {/* Column 6: Tag */}
        <div role="cell">
          {tag && <span className="uedp-order-row__tag">{tag}</span>}
        </div>

        {/* Column 7: Actions */}
        <div className="uedp-order-row__actions" role="cell">
          {actions ?? (
            <>
              <button
                type="button"
                className="uedp-order-row__action-btn"
                aria-label="View order details"
                title="View order details"
                onClick={() => onView?.(orderId)}
              >
                <Eye size={17} />
              </button>
              <button
                type="button"
                className="uedp-order-row__action-btn"
                aria-label="Edit order"
                title="Edit order"
                onClick={() => onEdit?.(orderId)}
              >
                <Pencil size={17} />
              </button>
              <button
                type="button"
                className="uedp-order-row__action-btn uedp-order-row__action-btn--delete"
                aria-label="Delete order"
                title="Delete order"
                onClick={() => onDelete?.(orderId)}
              >
                <Trash2 size={17} />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
);

OrderTableRow.displayName = 'OrderTableRow';

// Ergonomic aliases
export const OrderRow = OrderTableRow;
export const DataTableRow = OrderTableRow;
export const OrderListItem = OrderTableRow;
