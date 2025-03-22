
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const HolographicPagination = ({
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
    <div className={cn('flex items-center space-x-4 relative', className)}>
      {/* Holographic overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1EAEDB]/10 to-[#33C3F0]/10 blur-md pointer-events-none"></div>
      
      <button
        className="w-10 h-10 border border-[#1EAEDB] rounded-full flex items-center justify-center text-white relative overflow-hidden disabled:opacity-50"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <div className="absolute inset-0 bg-[#1EAEDB]/20 rounded-full"></div>
        <span className="relative z-10">‹</span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1EAEDB]/30 to-transparent animate-pulse"></div>
      </button>
      
      <div className="flex items-center space-x-2 py-2 px-4 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-sm rounded-lg border border-[#33C3F0]/30 relative">
        {/* Scan line effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_49%,#33C3F0_50%,transparent_51%)] opacity-5 bg-[length:100%_4px] pointer-events-none"></div>
        
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`relative w-8 h-8 flex items-center justify-center rounded-md transition-all duration-300 ${
              index + 1 === currentPage 
                ? 'text-white scale-110 font-bold' 
                : 'text-[#C8C8C9]/70 hover:text-white'
            }`}
          >
            {/* Holographic background for current page */}
            {index + 1 === currentPage && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#1EAEDB]/30 to-[#33C3F0]/30 rounded-md animate-pulse"></div>
            )}
            <span className="relative z-10">{index + 1}</span>
          </button>
        ))}
      </div>
      
      <button
        className="w-10 h-10 border border-[#1EAEDB] rounded-full flex items-center justify-center text-white relative overflow-hidden disabled:opacity-50"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <div className="absolute inset-0 bg-[#1EAEDB]/20 rounded-full"></div>
        <span className="relative z-10">›</span>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1EAEDB]/30 to-transparent animate-pulse"></div>
      </button>
    </div>
  );
};
