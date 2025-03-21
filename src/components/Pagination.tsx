
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import RetroButton from './RetroButton';
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

const Pagination = ({
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

  const renderPageNumbers = () => {
    let pages = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);
    
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <div
          key={i}
          className={cn(
            'w-8 h-8 flex items-center justify-center text-xs cursor-pointer transition-all duration-150 border',
            i === currentPage
              ? 'bg-black border-[#8B5CF6] text-[#8B5CF6] shadow-[0_0_8px_#8B5CF6] font-bold'
              : 'bg-[#1A1F2C] border-[#403E43] text-[#8E9196] hover:text-[#D6BCFA] hover:border-[#D6BCFA] hover:shadow-[0_0_5px_#D6BCFA]'
          )}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </div>
      );
    }
    return pages;
  };

  return (
    <div className={cn('flex flex-col items-center gap-4', className)}>
      <div className="text-xs mb-2 font-mono tracking-wide text-[#8B5CF6] bg-black/50 px-3 py-1 border border-[#403E43]">
        <span className="text-[#F97316]">[</span> PAGE {currentPage} <span className="text-[#0EA5E9]">/</span> {totalPages} <span className="text-[#F97316]">]</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <RetroButton
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          title="First Page"
          size="sm"
          variant="cyberpunk"
          className="flex items-center justify-center"
        >
          <ChevronFirst size={16} />
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          title="Previous Page"
          size="sm"
          variant="cyberpunk"
          className="flex items-center justify-center"
        >
          <ChevronLeft size={16} />
        </RetroButton>
        
        <div className="flex items-center space-x-1">
          {renderPageNumbers()}
        </div>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          title="Next Page"
          size="sm"
          variant="cyberpunk"
          className="flex items-center justify-center"
        >
          <ChevronRight size={16} />
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          title="Last Page"
          size="sm"
          variant="cyberpunk"
          className="flex items-center justify-center"
        >
          <ChevronLast size={16} />
        </RetroButton>
      </div>
    </div>
  );
};

export default Pagination;
