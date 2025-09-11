import React from 'react';


interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}


const Pagination: React.FC<Props> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);


    return (
        <div className="flex justify-center mt-6 gap-2">
            {pages.map((p) => (
                <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`px-3 py-1 rounded ${p === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                >
                    {p}
                </button>
            ))}
        </div>
    );
};


export default Pagination;