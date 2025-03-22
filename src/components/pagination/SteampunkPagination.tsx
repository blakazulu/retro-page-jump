
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const SteampunkPagination = ({
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
    <div className={cn('bg-[#221F26] p-5 rounded-md border-2 border-[#888] shadow-lg relative', className)}>
      {/* Mechanical texture overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='%23888' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      {/* Rivets on corners */}
      <div className="absolute top-1 left-1 w-3 h-3 rounded-full bg-[#888] border border-[#555]"></div>
      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#888] border border-[#555]"></div>
      <div className="absolute bottom-1 left-1 w-3 h-3 rounded-full bg-[#888] border border-[#555]"></div>
      <div className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-[#888] border border-[#555]"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="w-8 h-8 bg-[#555] hover:bg-[#777] border border-[#888] rounded text-[#ccc] disabled:opacity-50 transition-colors flex items-center justify-center"
        >
          «
        </button>
        
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 bg-[#555] hover:bg-[#777] border border-[#888] rounded text-[#ccc] disabled:opacity-50 transition-colors flex items-center justify-center"
        >
          ‹
        </button>
        
        <div className="mx-2 px-3 py-1 bg-[#332F36] border border-[#888] rounded relative">
          {/* Gauge-like display */}
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-6 h-6 flex items-center justify-center rounded-sm transition-all ${
                  index + 1 === currentPage
                    ? 'bg-[#888] text-[#221F26] font-bold border border-[#aaa]'
                    : 'text-[#aaa] hover:bg-[#555] border border-[#555]'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 bg-[#555] hover:bg-[#777] border border-[#888] rounded text-[#ccc] disabled:opacity-50 transition-colors flex items-center justify-center"
        >
          ›
        </button>
        
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 bg-[#555] hover:bg-[#777] border border-[#888] rounded text-[#ccc] disabled:opacity-50 transition-colors flex items-center justify-center"
        >
          »
        </button>
      </div>
      
      {/* Mechanical counter display */}
      <div className="mt-3 flex justify-center">
        <div className="bg-[#332F36] border border-[#888] px-4 py-1 rounded font-mono text-[#ccc]">
          {currentPage.toString().padStart(2, '0')} / {totalPages.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
