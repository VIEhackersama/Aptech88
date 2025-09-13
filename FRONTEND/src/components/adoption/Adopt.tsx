import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard';
import Pagination from './Pagination';
import { Animal } from './type';

function Adopt() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/adoptable-animals")
      .then(res => res.json())
      .then(data => setAnimals(data))
      .catch(err => console.error(err));
  }, []);

  const totalPages = Math.ceil(animals.length / itemsPerPage);

  const paginatedAnimals = animals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Adoptable Animals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paginatedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Adopt;
