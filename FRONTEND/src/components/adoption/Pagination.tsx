import React from 'react';


interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  function Pagination({ currentPage, totalPages, onPageChange }: Props) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="flex gap-2 mt-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
};


export default Pagination;