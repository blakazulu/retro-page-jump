
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
            'w-8 h-8 flex items-center justify-center retro-text text-xs cursor-pointer transition-all duration-150',
            i === currentPage
              ? 'bg-retro-primary text-retro-background animate-pixel-pulse'
              : 'bg-retro-muted text-retro-text hover:bg-retro-muted/70'
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
      <div className="retro-text text-retro-primary text-xs mb-2">
        PAGE {currentPage} OF {totalPages}
      </div>
      
      <div className="flex items-center space-x-2">
        <RetroButton
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          title="First Page"
          size="sm"
          className="flex items-center justify-center"
        >
          <ChevronFirst size={16} />
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          title="Previous Page"
          size="sm"
          className="flex items-center justify-center"
        >
          <ChevronLeft size={16} />
        </RetroButton>
        
        <div className="flex items-center">
          {renderPageNumbers()}
        </div>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          title="Next Page"
          size="sm"
          className="flex items-center justify-center"
        >
          <ChevronRight size={16} />
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          title="Last Page"
          size="sm"
          className="flex items-center justify-center"
        >
          <ChevronLast size={16} />
        </RetroButton>
      </div>
    </div>
  );
};

export default Pagination;
