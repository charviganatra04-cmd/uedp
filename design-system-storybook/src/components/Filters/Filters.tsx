import React, { useState } from 'react';
import './Filters.css';

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

export interface FiltersProps {
  /** Filter section title */
  title?: string;
  /** Options list */
  options?: FilterOption[];
  /** Selected option IDs */
  selectedIds?: string[];
  /** Allows multiple selections */
  multiSelect?: boolean;
  /** Callback when selected filter changes */
  onChange?: (selectedIds: string[]) => void;
}

/**
 * Filters Component - Preserved Figma Layer Name: "Filters"
 */
export const Filters: React.FC<FiltersProps> = ({
  title = 'Filter Status',
  options = [
    { id: 'all', label: 'All Items', count: 142 },
    { id: 'active', label: 'Active', count: 98 },
    { id: 'pending', label: 'Pending', count: 32 },
    { id: 'archived', label: 'Archived', count: 12 },
  ],
  selectedIds: initialSelected = ['active'],
  multiSelect = false,
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>(initialSelected);

  const handleToggle = (id: string) => {
    let next: string[];
    if (multiSelect) {
      next = selected.includes(id)
        ? selected.filter((item) => item !== id)
        : [...selected, id];
    } else {
      next = [id];
    }
    setSelected(next);
    onChange?.(next);
  };

  return (
    <div className="uedp-filters" data-layer-name="Filters">
      {title && <div className="uedp-filters__header">{title}</div>}
      <div className="uedp-filters__list">
        {options.map((opt) => {
          const isActive = selected.includes(opt.id);
          return (
            <button
              key={opt.id}
              type="button"
              className={`uedp-filters__chip ${isActive ? 'uedp-filters__chip--active' : ''}`}
              onClick={() => handleToggle(opt.id)}
            >
              <span>{opt.label}</span>
              {opt.count !== undefined && (
                <span className="uedp-filters__count">{opt.count}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
