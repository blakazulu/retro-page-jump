
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const SketchedPagination = ({
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

  // Function to create "sketchy" path for SVG
  const getSketchyPath = (x: number, y: number, width: number, height: number): string => {
    // Slight randomization to create hand-drawn effect
    const jitter = () => (Math.random() * 2 - 1) * 0.5;
    
    // Create slightly wobbly rectangle path
    return `
      M${x + jitter()},${y + jitter()} 
      L${x + width + jitter()},${y + jitter()} 
      L${x + width + jitter()},${y + height + jitter()} 
      L${x + jitter()},${y + height + jitter()} 
      Z
    `;
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="bg-[#f3f3f3] p-5 border-2 border-[#333] shadow-md relative">
        {/* Paper texture effect */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 0 L100 100 L0 100 Z' fill='none' stroke='%23000' stroke-width='0.5' stroke-dasharray='2,2'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="flex items-center space-x-2 relative z-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 border-2 border-[#333] flex items-center justify-center bg-white disabled:opacity-50 transition-all group"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <span className="font-serif text-lg">←</span>
            {/* Hand-drawn hover effect */}
            <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 32 32">
              <path d={getSketchyPath(2, 2, 28, 28)} fill="none" stroke="#333" strokeWidth="0.5" />
            </svg>
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative w-8 h-8 flex items-center justify-center border-2 transition-all ${
                  index + 1 === currentPage
                    ? 'bg-[#333] text-white border-[#333] font-bold'
                    : 'bg-white text-[#333] border-[#333] hover:bg-[#eee]'
                }`}
                style={{ transform: `rotate(${(Math.random() * 2 - 1) * 2}deg)` }}
              >
                <span className="font-serif">{index + 1}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 border-2 border-[#333] flex items-center justify-center bg-white disabled:opacity-50 transition-all group"
            style={{ transform: 'rotate(1deg)' }}
          >
            <span className="font-serif text-lg">→</span>
            {/* Hand-drawn hover effect */}
            <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 32 32">
              <path d={getSketchyPath(2, 2, 28, 28)} fill="none" stroke="#333" strokeWidth="0.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
