import React, { useState } from "react";
import { Link } from "react-router-dom";
import FilterBar from "../adoption/FilterBar";
import AnimalCard from "../adoption/AnimalCard";
import Pagination from "../adoption/Pagination";
import { animals } from "../adoption/animal";

function Adopt() {
  const speciesList = [...new Set(animals.map(a => a.species))];
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filtered = animals.filter(a => selectedSpecies === "" || a.species === selectedSpecies);

  const sorted = filtered.sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortOption === "age") {
      // giả sử tuổi dạng "2 yrs" lấy số
      const na = parseInt(a.age);
      const nb = parseInt(b.age);
      return na - nb;
    }
    if (sortOption === "size") {
      return a.size.localeCompare(b.size);
    }
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);
  const paginated = sorted.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Available Animals</h1>
      <FilterBar
        speciesList={speciesList}
        selectedSpecies={selectedSpecies}
        onSpeciesChange={setSelectedSpecies}
        sortOption={sortOption}
        onSortChange={setSortOption}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginated.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {/* Cách thêm link đến các trang phụ */}
      <div className="mt-10 grid grid-cols-3 gap-4 text-center">
        <Link to="/how-to-adopt" className="text-blue-600 hover:underline">How To Adopt</Link>
        <Link to="/what-included" className="text-blue-600 hover:underline">What’s Included</Link>
        <Link to="/fees" className="text-blue-600 hover:underline">Adoption Fees</Link>
      </div>

      <div className="mt-10 text-center">
        <Link to="/wants-list" className="bg-gradient-to-r from-green-700 to-emerald-500 text-white px-6 py-2 rounded-lg">
          Join Wants-List
        </Link>
      </div>
    </div>
  );
}

export default Adopt;
