"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function FilterBar({ onSort }: { onSort: (sortBy: string) => void }) {
  const [sort, setSort] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    onSort(value);
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex items-center gap-2">
        <SlidersHorizontal className="text-gray-600" />
        <span className="font-medium">Sort by:</span>
      </div>
      <select
        value={sort}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Default</option>
        <option value="price-asc">Price (Low → High)</option>
        <option value="price-desc">Price (High → Low)</option>
        <option value="rating-desc">Rating (High → Low)</option>
      </select>
    </div>
  );
}
