import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Animal } from './type';

function AdoptDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState<Animal | null>(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/adoptable-animals/${id}`)
      .then(res => res.json())
      .then(data => setAnimal(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!animal) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={animal.image || '/placeholder.jpg'} alt={animal.name} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
      <p className="text-gray-600 mb-2">{animal.species} • {animal.age} yrs • {animal.gender}</p>
      <p className="text-gray-700 mb-6">{animal.breed}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Adopt {animal.name}
      </button>
    </div>
  );
}

export default AdoptDetail;
