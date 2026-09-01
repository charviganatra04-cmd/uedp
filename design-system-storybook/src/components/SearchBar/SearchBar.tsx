import React, { useState } from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  shortcutHint?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search components, tokens, or variables...',
  onSearch,
  shortcutHint = '⌘K',
}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onSearch?.(val);
  };

  return (
    <div className="uedp-search-bar" data-layer-name="SearchBar">
      <span className="uedp-search-bar__icon">🔍</span>
      <input
        type="text"
        className="uedp-search-bar__input"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
      />
      {shortcutHint && <span className="uedp-search-bar__shortcut">{shortcutHint}</span>}
    </div>
  );
};
