
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const ClassicPagination = ({
  totalPages,
  initialPage = 1,
  onPageChange,
  className,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  useEffect(() => {
    if (initialPage !== currentPage) {
      setCurrentPage(initialPage);
    }
  }, [initialPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className={cn('flex items-center space-x-1', className)}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 bg-white text-black border border-gray-300 rounded disabled:opacity-50"
      >
        <ChevronLeft size={16} />
      </button>
      
      <div className="flex">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-10 h-10 flex items-center justify-center border ${
              index + 1 === currentPage
                ? 'bg-black text-white font-bold'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-white text-black border border-gray-300 rounded disabled:opacity-50"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
