
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
            'w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 relative',
            i === currentPage
              ? 'text-white font-bold scale-110 z-10'
              : 'text-[#8E9196] hover:text-white'
          )}
          onClick={() => handlePageChange(i)}
        >
          {/* Hexagonal shape for page numbers */}
          <svg 
            className={cn(
              "absolute w-full h-full top-0 left-0 -z-10 transition-all duration-300",
              i === currentPage 
                ? 'text-[#c22a30] drop-shadow-[0_0_8px_#c22a30]' 
                : 'text-[#232830] hover:text-[#661519]'
            )}
            viewBox="0 0 24 24"
          >
            <path 
              d="M12,0 L22,6 L22,18 L12,24 L2,18 L2,6 Z" 
              fill="currentColor"
              stroke={i === currentPage ? "#ff3c44" : "#661519"}
              strokeWidth="1"
            />
          </svg>
          <span className="z-10 font-mono text-sm">{i}</span>
        </div>
      );
    }
    return pages;
  };

  return (
    <div className={cn('flex flex-col items-center gap-6', className)}>
      {/* Health bar style indicator */}
      <div className="w-full max-w-sm bg-black border-2 border-[#661519] h-5 relative">
        <div 
          className="h-full bg-[#c22a30] transition-all duration-300"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono text-white tracking-wider">
            LEVEL {currentPage}/{totalPages}
          </span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 sm:space-x-4">
        <RetroButton
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          title="First Page"
          size="sm"
          variant="neon-red"
          className="flex items-center justify-center w-10 h-10 relative overflow-hidden"
        >
          <ChevronFirst size={16} />
          {/* Controller button effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#c22a30]/0 via-[#c22a30]/10 to-[#c22a30]/0 animate-[scanline_4s_linear_infinite] opacity-50"></span>
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          title="Previous Page"
          size="sm"
          variant="neon-red"
          className="flex items-center justify-center w-10 h-10 relative overflow-hidden"
        >
          <ChevronLeft size={16} />
          <span className="absolute inset-0 bg-gradient-to-r from-[#c22a30]/0 via-[#c22a30]/10 to-[#c22a30]/0 animate-[scanline_4s_linear_infinite] opacity-50"></span>
        </RetroButton>
        
        <div className="flex items-center space-x-1 sm:space-x-2 bg-[#12080a]/70 px-3 py-2 border-2 border-[#661519] relative">
          {/* Game console display effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(194,42,48,0.05)_51%)] bg-[length:100%_4px]"></div>
          {renderPageNumbers()}
        </div>
        
        <RetroButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          title="Next Page"
          size="sm"
          variant="neon-red"
          className="flex items-center justify-center w-10 h-10 relative overflow-hidden"
        >
          <ChevronRight size={16} />
          <span className="absolute inset-0 bg-gradient-to-r from-[#c22a30]/0 via-[#c22a30]/10 to-[#c22a30]/0 animate-[scanline_4s_linear_infinite] opacity-50"></span>
        </RetroButton>
        
        <RetroButton
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          title="Last Page"
          size="sm"
          variant="neon-red"
          className="flex items-center justify-center w-10 h-10 relative overflow-hidden"
        >
          <ChevronLast size={16} />
          <span className="absolute inset-0 bg-gradient-to-r from-[#c22a30]/0 via-[#c22a30]/10 to-[#c22a30]/0 animate-[scanline_4s_linear_infinite] opacity-50"></span>
        </RetroButton>
      </div>
    </div>
  );
};

export default Pagination;
