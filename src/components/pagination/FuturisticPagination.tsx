
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const FuturisticPagination = ({
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
    <div className={cn('flex flex-col items-center space-y-2', className)}>
      <div className="flex items-center space-x-4 bg-black p-2 border border-blue-500 rounded-lg relative overflow-hidden">
        {/* Glowy effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-10 blur-md"></div>
        
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center text-blue-400 hover:text-blue-300 disabled:opacity-30 z-10"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-1 z-10">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-8 h-8 flex items-center justify-center rounded-sm ${
                index + 1 === currentPage
                  ? 'bg-blue-500 text-black font-bold'
                  : 'border border-blue-700 text-blue-400 hover:border-blue-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center text-blue-400 hover:text-blue-300 disabled:opacity-30 z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full max-w-xs h-1 bg-blue-900 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        />
      </div>
    </div>
  );
};
