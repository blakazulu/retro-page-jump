
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const SpacePagination = ({
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

  // Create array of visible page numbers
  const getVisiblePages = () => {
    let pages = [];
    const totalVisiblePages = Math.min(5, totalPages);
    let startPage = Math.max(1, currentPage - Math.floor(totalVisiblePages / 2));
    const endPage = Math.min(startPage + totalVisiblePages - 1, totalPages);
    
    if (endPage - startPage + 1 < totalVisiblePages) {
      startPage = Math.max(1, endPage - totalVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return pages;
  };

  return (
    <div className={cn('rounded-2xl bg-[#222639] p-4 border border-[#403E43] shadow-[0_0_15px_rgba(0,0,0,0.3)] relative overflow-hidden', className)}>
      {/* Star field background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><rect width=\"200\" height=\"200\" fill=\"black\"/><g fill=\"white\"><circle cx=\"20\" cy=\"30\" r=\"1\"/><circle cx=\"40\" cy=\"80\" r=\"0.5\"/><circle cx=\"60\" cy=\"10\" r=\"0.7\"/><circle cx=\"80\" cy=\"90\" r=\"0.8\"/><circle cx=\"100\" cy=\"50\" r=\"1\"/><circle cx=\"120\" cy=\"20\" r=\"0.6\"/><circle cx=\"140\" cy=\"70\" r=\"0.4\"/><circle cx=\"160\" cy=\"40\" r=\"0.9\"/><circle cx=\"180\" cy=\"60\" r=\"0.7\"/><circle cx=\"10\" cy=\"100\" r=\"0.5\"/><circle cx=\"30\" cy=\"150\" r=\"1\"/><circle cx=\"50\" cy=\"180\" r=\"0.8\"/><circle cx=\"70\" cy=\"130\" r=\"0.6\"/><circle cx=\"90\" cy=\"170\" r=\"0.7\"/><circle cx=\"110\" cy=\"120\" r=\"0.4\"/><circle cx=\"130\" cy=\"160\" r=\"1\"/><circle cx=\"150\" cy=\"110\" r=\"0.5\"/><circle cx=\"170\" cy=\"140\" r=\"0.9\"/><circle cx=\"190\" cy=\"190\" r=\"0.8\"/></g></svg>')]"></div>
      
      <div className="flex items-center justify-between space-x-3">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="bg-[#403E43] hover:bg-[#5A5960] text-white w-8 h-8 rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center"
          title="First"
        >
          «
        </button>
        
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-[#403E43] hover:bg-[#5A5960] text-white w-8 h-8 rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center"
          title="Previous"
        >
          ‹
        </button>
        
        <div className="flex-1 flex items-center justify-center space-x-1">
          {getVisiblePages().map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                page === currentPage
                  ? 'bg-gradient-to-b from-[#8A898C] to-[#403E43] text-white font-bold shadow-[0_0_10px_#0EA5E9]'
                  : 'bg-[#403E43]/50 text-[#9F9EA1] hover:bg-[#403E43] hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-[#403E43] hover:bg-[#5A5960] text-white w-8 h-8 rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center"
          title="Next"
        >
          ›
        </button>
        
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="bg-[#403E43] hover:bg-[#5A5960] text-white w-8 h-8 rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center"
          title="Last"
        >
          »
        </button>
      </div>
      
      <div className="mt-3 flex items-center justify-center text-[#9F9EA1] text-xs">
        <div className="w-full bg-[#403E43] h-1 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-[#403E43] to-[#9F9EA1] h-full transition-all"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
