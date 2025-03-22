
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const MinimalistPagination = ({
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
    <div className={cn('flex items-center space-x-4', className)}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-400 disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="text-sm font-light">
        {currentPage} <span className="text-gray-400">/ {totalPages}</span>
      </div>
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-400 disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
