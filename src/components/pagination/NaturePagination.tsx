
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const NaturePagination = ({
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

  // Leaf shape SVG path generator
  const getLeafPath = (index: number): string => {
    // Different leaf shapes
    const leafShapes = [
      "M2,10 C2,5 5,2 10,2 C15,2 18,5 18,10 C18,15 15,18 10,18 C5,18 2,15 2,10 Z", // Round leaf
      "M2,10 C2,5 7,2 10,2 C13,2 18,5 18,10 C18,15 13,18 10,18 C7,18 2,15 2,10 Z", // Oval leaf
      "M2,10 Q2,2 10,2 Q18,2 18,10 Q18,18 10,18 Q2,18 2,10 Z", // Square-ish leaf
    ];
    
    return leafShapes[index % leafShapes.length];
  };

  return (
    <div className={cn('bg-[#F2FCE2] rounded-lg p-4 border border-[#4A6741]/50 shadow-md', className)}>
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors text-[#4A6741] disabled:text-[#4A6741]/30"
        >
          ‹
        </button>
        
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className={`transition-all ${
                index + 1 === currentPage
                  ? 'text-[#4A6741] scale-125'
                  : 'text-[#4A6741]/40 hover:text-[#4A6741]/60'
              }`}>
                <path 
                  d={getLeafPath(index)}
                  fill="currentColor"
                  transform={`rotate(${index * 45}, 10, 10)`}
                />
              </svg>
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors text-[#4A6741] disabled:text-[#4A6741]/30"
        >
          ›
        </button>
      </div>
      
      {/* Vine progress indicator */}
      <div className="mt-4 w-full bg-[#E9F5D8] h-2 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-[#4A6741]/30 transition-all"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        ></div>
        {/* Vine decoration */}
        <div 
          className="absolute top-0 h-full"
          style={{ 
            width: `${(currentPage / totalPages) * 100}%`, 
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"8\" viewBox=\"0 0 100 8\"><path d=\"M0,4 C20,0 30,8 50,4 C70,0 80,8 100,4\" fill=\"none\" stroke=\"%234A6741\" stroke-width=\"1\" stroke-opacity=\"0.3\"/></svg>')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "100px 8px"
          }}
        ></div>
      </div>
    </div>
  );
};
