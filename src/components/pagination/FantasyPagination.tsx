
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const FantasyPagination = ({
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
      <div className="relative w-64 h-16 bg-[#FEF7CD] rounded-lg overflow-hidden border-4 border-[#1A1F2C] shadow-lg">
        {/* Parchment texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"100\" height=\"100\" fill=\"none\" stroke=\"%23D4A76A\" stroke-width=\"0.5\"/></svg>')]"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            {/* Previous button styled as a wax seal */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1A1F2C] text-[#FDE1D3] disabled:opacity-50"
            >
              ‹
            </button>
            
            {/* Page number as roman numerals on parchment */}
            <div className="px-4 py-2 font-serif text-[#1A1F2C] text-xl">
              {/* Simple conversion to mock Roman numerals */}
              Page {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][currentPage - 1]} of {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][totalPages - 1]}
            </div>
            
            {/* Next button styled as a wax seal */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-[#1A1F2C] text-[#FDE1D3] disabled:opacity-50"
            >
              ›
            </button>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 border-r border-b border-[#1A1F2C]/30 w-4 h-4"></div>
        <div className="absolute top-0 right-0 border-l border-b border-[#1A1F2C]/30 w-4 h-4"></div>
        <div className="absolute bottom-0 left-0 border-r border-t border-[#1A1F2C]/30 w-4 h-4"></div>
        <div className="absolute bottom-0 right-0 border-l border-t border-[#1A1F2C]/30 w-4 h-4"></div>
      </div>
    </div>
  );
};
