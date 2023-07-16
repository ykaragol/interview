import React, { useState } from "react";

interface SearchPanelParams {
  onSearch: (query: string) => void;
  searching: boolean;
}

const SearchPanel = ({ onSearch, searching }: SearchPanelParams) => {
  const [query, setQuery] = useState("");

  const handleClick = () => {
    if (query) {
      onSearch(query);
    }
    // handle else as validation
  };

  return (
    <div>
      <h3>Type a query for the element</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="facebook"
        disabled={searching}
      />
      <button onClick={handleClick} disabled={searching}>
        Search
      </button>
    </div>
  );
};

export default SearchPanel;
