import React from "react";
import { useParams, Link } from "react-router-dom";
import { animals } from "../adoption/animal";

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find(a => a.id === id);

  if (!animal) {
    return <div className="bg-white min-h-screen p-8">Animal not found.</div>;
  }

  return (
    <div className="bg-white min-h-screen p-8 max-w-4xl mx-auto">
      <img
        src={animal.image || "/placeholder.jpg"}
        alt={animal.name}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-2">{animal.name}</h2>
      <p className="text-gray-700 mb-1">{animal.species} • {animal.age} • {animal.gender}</p>
      <p className="text-gray-600 mb-4">{animal.breed}</p>
      <p className="text-gray-800">{animal.description}</p>
      <div className="mt-6">
        <Link to="/adopt">
          <button className="bg-gradient-to-r from-green-700 to-emerald-500 text-white px-6 py-2 rounded-lg hover:opacity-90">
            ← Back to Adopt
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AnimalDetail;
