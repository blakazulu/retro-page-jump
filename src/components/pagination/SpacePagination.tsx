
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
  }, [initialPage, currentPage]);

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
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22200%22%20height%3D%22200%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22black%22%2F%3E%3Cg%20fill%3D%22white%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2230%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2280%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2260%22%20cy%3D%2210%22%20r%3D%220.7%22%2F%3E%3Ccircle%20cx%3D%2280%22%20cy%3D%2290%22%20r%3D%220.8%22%2F%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%2250%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%22120%22%20cy%3D%2220%22%20r%3D%220.6%22%2F%3E%3Ccircle%20cx%3D%22140%22%20cy%3D%2270%22%20r%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%22160%22%20cy%3D%2240%22%20r%3D%220.9%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%2260%22%20r%3D%220.7%22%2F%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%22100%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%22150%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%22180%22%20r%3D%220.8%22%2F%3E%3Ccircle%20cx%3D%2270%22%20cy%3D%22130%22%20r%3D%220.6%22%2F%3E%3Ccircle%20cx%3D%2290%22%20cy%3D%22170%22%20r%3D%220.7%22%2F%3E%3Ccircle%20cx%3D%22110%22%20cy%3D%22120%22%20r%3D%220.4%22%2F%3E%3Ccircle%20cx%3D%22130%22%20cy%3D%22160%22%20r%3D%221%22%2F%3E%3Ccircle%20cx%3D%22150%22%20cy%3D%22110%22%20r%3D%220.5%22%2F%3E%3Ccircle%20cx%3D%22170%22%20cy%3D%22140%22%20r%3D%220.9%22%2F%3E%3Ccircle%20cx%3D%22190%22%20cy%3D%22190%22%20r%3D%220.8%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      
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
