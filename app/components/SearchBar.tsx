"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) onSearch(query);
  };

  return (
    <div className="flex justify-center mt-6 w-full">
      <input
        type="text"
        placeholder="Search for any product..."
        className="p-3 w-1/2 rounded-l-lg border border-gray-300 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-purple-600 text-white px-6 rounded-r-lg hover:bg-purple-700"
      >
        Search
      </button>
    </div>
  );
}
