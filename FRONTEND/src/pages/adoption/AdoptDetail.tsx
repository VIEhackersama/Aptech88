import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface Animal {
  id: number;
  name: string;
  species: string;
  age: string;
  gender: string;
  breed?: string;
  image?: string;
  size?: string;
  description?: string;
}

export default function AdoptDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/animals/${id}`)
      .then((res) => setAnimal(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!animal) return <p className="p-6">Animal not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={animal.image || "/placeholder.jpg"}
        alt={animal.name}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
      <p className="text-gray-600 mb-2">
        {animal.species} • {animal.age} • {animal.gender}
      </p>
      <p className="text-gray-700 mb-6">{animal.breed}</p>
      <p className="text-gray-700 mb-6">{animal.description}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Adopt {animal.name}
      </button>
    </div>
  );
}