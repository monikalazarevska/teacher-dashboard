import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search classes by name or subject..."
    className="w-full p-2 border rounded"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
