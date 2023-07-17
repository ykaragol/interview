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
    <div className="border p-4 max-w-md">
      <div className="grid gap-4 grid-cols-1">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Type a user name or organization name
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="facebook"
            disabled={searching}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />
        </label>

        <button
          onClick={handleClick}
          disabled={searching}
          className="px-4 py-1 text-sm text-slate-50 rounded-full border bg-blue-600 hover:bg-blue-800 disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
