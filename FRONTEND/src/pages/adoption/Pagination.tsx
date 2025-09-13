import React from 'react';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-6 space-x-2">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition 
                        ${page === currentPage
                            ? "bg-gradient-to-r from-green-700 to-emerald-500 text-white shadow"
                            : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-green-700 hover:to-emerald-500 hover:text-white"
                        }`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}
