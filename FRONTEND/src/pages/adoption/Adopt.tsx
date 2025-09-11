import React, { useState } from 'react';
import AnimalCard from '../adoption/AnimalCard';
import Pagination from '../adoption/Pagination';
import { Animal } from '../adoption/type';


const mockAnimals: Animal[] = [
    { id: '1', name: 'Bella', species: 'Dog', age: 2, gender: 'Female', breed: 'Husky', image: '' },
    { id: '2', name: 'Max', species: 'Cat', age: 3, gender: 'Male', breed: 'Ragdoll', image: '' },
    { id: '3', name: 'Luna', species: 'Rabbit', age: 1, gender: 'Female', breed: 'Pomerian', image: '' },
];


const Adopt: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(mockAnimals.length / itemsPerPage);


    const paginatedAnimals = mockAnimals.slice(
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
};


export default Adopt;