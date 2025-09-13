import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimalCard from "./AnimalCard";
import Pagination from "./Pagination";

interface Animal {
  id: number;
  name: string;
  species: string;
  age: string;
  gender: string;
  breed?: string;
  image?: string;
}

export default function Adopt() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages = Math.ceil(animals.length / itemsPerPage);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/animals")
      .then((res) => setAnimals(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading animals...</p>;

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
}


