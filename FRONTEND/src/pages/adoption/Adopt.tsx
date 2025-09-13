import React, { useState, useEffect } from "react";
import AnimalCard from "../adoption/AnimalCard";
import Pagination from "../adoption/Pagination";
import { Animal } from "../adoption/type";

const Adopt: React.FC = () => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/adoptionlistings");
        if (!res.ok) throw new Error("Failed to fetch animals");
        const data = await res.json();
        // Map backend fields -> Animal type
        const mapped = data.map((item: any) => ({
          id: String(item.id),
          name: item.pet_name,
          species: item.species,
          age: item.age,
          gender: item.gender,
          breed: item.breed,
          image: item.img_url || "",
        }));
        setAnimals(mapped);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  const totalPages = Math.ceil(animals.length / itemsPerPage);

  const paginatedAnimals = animals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Adoptable Animals</h1>
      {paginatedAnimals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      ) : (
        <p>No animals available for adoption right now.</p>
      )}
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
