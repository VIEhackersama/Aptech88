import React from "react";
import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img
        src={animal.image || "/placeholder.jpg"}
        alt={animal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
        <p className="text-gray-600 mb-1">{animal.species} • {animal.age} • {animal.gender}</p>
        <p className="text-gray-500 mb-4">{animal.breed}</p>
        <Link to={`/adopt/${animal.id}`} className="mt-auto">
          <button className="w-full bg-gradient-to-r from-green-700 to-emerald-500 text-white py-2 rounded-lg hover:opacity-90">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;
