import React from 'react';
import { useParams } from 'react-router-dom';
import { Animal } from '../adoption/type';


// Mock data; in real app, fetch from API
const animals: Animal[] = [
    { id: '1', name: 'Bella', species: 'Dog', age: 2, gender: 'Female', breed: 'Samoyed', image: '' },
    { id: '2', name: 'Max', species: 'Cat', age: 3, gender: 'Male', breed: 'Persian', image: '' },
];


const AdoptDetail: React.FC = () => {
    const { id } = useParams();
    const animal = animals.find((a) => a.id === id);


    if (!animal) return <div className="p-6">Animal not found</div>;


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
};


export default AdoptDetail;