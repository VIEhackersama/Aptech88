
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface AdoptionListing {
  id: number;
  pet_name: string;
  species: string;
  breed?: string;
  age: number;
  gender: string;
  img_url?: string;
  shelter_id: number;
}

const AdoptDetail: React.FC = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState<AdoptionListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await axios.get<AdoptionListing>(
          `http://localhost:8000/api/adoptionlistings/${id}`
        );
        setAnimal(res.data);
      } catch (error: any) {
        setErr("Animal not found or error fetching data");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchAnimal();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (err) return <div className="p-6 text-red-600">{err}</div>;
  if (!animal) return <div className="p-6">Animal not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={animal.img_url || "/placeholder.jpg"}
        alt={animal.pet_name}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{animal.pet_name}</h1>
      <p className="text-gray-600 mb-2">
        {animal.species} • {animal.age} yrs • {animal.gender}
      </p>
      <p className="text-gray-700 mb-6">{animal.breed || "Unknown breed"}</p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Adopt {animal.pet_name}
      </button>
    </div>
  );
};

export default AdoptDetail;
