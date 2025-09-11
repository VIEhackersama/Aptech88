import React from 'react';
import { Link } from 'react-router-dom';
import { Animal } from '../adoption/type';


interface Props {
    animal: Animal;
}


function AnimalCard({ animal }: Props) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col">
            <img
                src={animal.image || '/placeholder.jpg'}
                alt={animal.name}
                className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{animal.name}</h3>
                <p className="text-sm text-gray-600">{animal.species} • {animal.age} yrs • {animal.gender}</p>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{animal.breed}</p>
                <Link
                    to={`/adopt/${animal.id}`}
                    className="mt-auto inline-block bg-blue-600 text-white px-3 py-1 rounded-lg text-sm text-center hover:bg-blue-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};


export default AnimalCard;