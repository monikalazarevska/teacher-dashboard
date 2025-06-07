import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    placeholder={placeholder}
    className="w-full p-2 border rounded"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchBar;
