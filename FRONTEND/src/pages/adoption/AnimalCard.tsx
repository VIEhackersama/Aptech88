import React from "react";
import { Link } from "react-router-dom";

interface Animal {
  id: number;
  name: string;
  species: string;
  age: string;
  gender: string;
  breed?: string;
  image?: string;
}

interface Props {
  animal: Animal;
}

export default function AnimalCard({ animal }: Props) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col">
      <img
        src={animal.image || "/placeholder.jpg"}
        alt={animal.name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold">{animal.name}</h3>
        <p className="text-sm text-gray-600">
          {animal.species} • {animal.age} • {animal.gender}
        </p>
        {animal.breed && (
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">
            {animal.breed}
          </p>
        )}
        <Link
          to={`/animalshelter/adopt/${animal.id}`}
          className="mt-auto inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-sm text-center hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
