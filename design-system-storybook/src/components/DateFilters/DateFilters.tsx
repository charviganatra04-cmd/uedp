import React, { useState } from 'react';
import './DateFilters.css';

export interface DateFiltersProps {
  /** Range preset label */
  preset?: '7d' | '30d' | '90d' | 'custom';
  /** Start date string (YYYY-MM-DD) */
  startDate?: string;
  /** End date string (YYYY-MM-DD) */
  endDate?: string;
  /** Range selection callback */
  onRangeChange?: (preset: string, start?: string, end?: string) => void;
}

/**
 * DateFilters Component - Preserved Layer Name: "Date filters"
 */
export const DateFilters: React.FC<DateFiltersProps> = ({
  preset: initialPreset = '30d',
  startDate: initialStart = '2026-07-28',
  endDate: initialEnd = '2026-08-27',
  onRangeChange,
}) => {
  const [preset, setPreset] = useState(initialPreset);
  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);

  const handlePresetSelect = (p: '7d' | '30d' | '90d' | 'custom') => {
    setPreset(p);
    onRangeChange?.(p, start, end);
  };

  return (
    <div className="uedp-date-filters" data-layer-name="Date filters">
      <div className="uedp-date-filters__presets">
        <button
          type="button"
          className={`uedp-date-filters__preset-btn ${preset === '7d' ? 'uedp-date-filters__preset-btn--active' : ''}`}
          onClick={() => handlePresetSelect('7d')}
        >
          Last 7 Days
        </button>
        <button
          type="button"
          className={`uedp-date-filters__preset-btn ${preset === '30d' ? 'uedp-date-filters__preset-btn--active' : ''}`}
          onClick={() => handlePresetSelect('30d')}
        >
          Last 30 Days
        </button>
        <button
          type="button"
          className={`uedp-date-filters__preset-btn ${preset === '90d' ? 'uedp-date-filters__preset-btn--active' : ''}`}
          onClick={() => handlePresetSelect('90d')}
        >
          Last 90 Days
        </button>
        <button
          type="button"
          className={`uedp-date-filters__preset-btn ${preset === 'custom' ? 'uedp-date-filters__preset-btn--active' : ''}`}
          onClick={() => handlePresetSelect('custom')}
        >
          Custom
        </button>
      </div>

      <div className="uedp-date-filters__range">
        <input
          type="date"
          className="uedp-date-filters__input"
          value={start}
          onChange={(e) => {
            setStart(e.target.value);
            onRangeChange?.('custom', e.target.value, end);
          }}
        />
        <span className="uedp-date-filters__sep">to</span>
        <input
          type="date"
          className="uedp-date-filters__input"
          value={end}
          onChange={(e) => {
            setEnd(e.target.value);
            onRangeChange?.('custom', start, e.target.value);
          }}
        />
      </div>
    </div>
  );
};
