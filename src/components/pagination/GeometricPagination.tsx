
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const GeometricPagination = ({
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
    <div className={cn('flex flex-col items-center', className)}>
      <div className="flex items-center space-x-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-1 bg-[#aaadb0] disabled:opacity-30 transition-colors"
          aria-label="Previous page"
        ></button>
        
        <div className="flex items-center">
          {Array.from({ length: totalPages }).map((_, index) => {
            // Generate different geometric shapes
            const shapes = [
              // Circle
              <div key={index} className={`w-6 h-6 rounded-full border transition-all ${
                index + 1 === currentPage
                  ? 'border-2 border-[#aaadb0] bg-[#aaadb0]'
                  : 'border border-[#ccc] hover:border-[#aaadb0]'
              }`}></div>,
              
              // Square
              <div key={index} className={`w-5 h-5 transition-all ${
                index + 1 === currentPage
                  ? 'border-2 border-[#aaadb0] bg-[#aaadb0]'
                  : 'border border-[#ccc] hover:border-[#aaadb0]'
              }`}></div>,
              
              // Triangle (using SVG)
              <svg key={index} width="24" height="24" viewBox="0 0 24 24" className="transition-colors">
                <polygon 
                  points="12,4 20,20 4,20" 
                  fill={index + 1 === currentPage ? '#aaadb0' : 'none'} 
                  stroke={index + 1 === currentPage ? '#aaadb0' : '#ccc'} 
                  strokeWidth={index + 1 === currentPage ? '2' : '1'} 
                  className="hover:stroke-[#aaadb0]"
                />
              </svg>
            ];
            
            // Pick a shape based on index
            const shape = shapes[index % shapes.length];
            
            return (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className="mx-1 p-1 flex items-center justify-center"
                aria-label={`Page ${index + 1}`}
              >
                {shape}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-1 bg-[#aaadb0] disabled:opacity-30 transition-colors"
          aria-label="Next page"
        ></button>
      </div>
      
      <div className="mt-4 text-[#aaadb0] text-xs">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
};
