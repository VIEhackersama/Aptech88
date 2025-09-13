import React from "react";

function FilterBar({ speciesList, selectedSpecies, onSpeciesChange, sortOption, onSortChange }) {
  return (
    <div className="flex space-x-4 mb-4">
      <select
        value={selectedSpecies}
        onChange={(e) => onSpeciesChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="">All Species</option>
        {speciesList.map(sp => (
          <option key={sp} value={sp}>{sp}</option>
        ))}
      </select>
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="name">By Name</option>
        <option value="age">By Age</option>
        <option value="size">By Size</option>
      </select>
    </div>
  );
}

export default FilterBar;
