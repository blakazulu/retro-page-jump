
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export const OceanicPagination = ({
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
    <div className={cn('flex flex-col items-center space-y-4', className)}>
      <div className="w-full max-w-md bg-gradient-to-r from-[#0c1f30] to-[#163a5f] p-4 rounded-lg relative overflow-hidden shadow-lg">
        {/* Bubble effects */}
        <div className="absolute w-4 h-4 rounded-full bg-[#D3E4FD]/20 top-2 right-4 animate-[ping_3s_ease-in-out_infinite]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-[#D3E4FD]/20 top-5 right-10 animate-[ping_5s_ease-in-out_infinite_1s]"></div>
        <div className="absolute w-3 h-3 rounded-full bg-[#D3E4FD]/20 bottom-3 left-6 animate-[ping_4s_ease-in-out_infinite_0.5s]"></div>
        
        {/* Wave effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#0EA5E9]/10"></div>
        <div 
          className="absolute bottom-0 left-0 right-0 h-8"
          style={{
            background: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 120\" preserveAspectRatio=\"none\"><path d=\"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\" opacity=\".25\" fill=\"%230EA5E9\"/><path d=\"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\" opacity=\".5\" fill=\"%230EA5E9\"/><path d=\"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\" fill=\"%230EA5E9\"/></svg>')",
            backgroundSize: "cover",
            height: "8px",
            opacity: 0.2
          }}
        ></div>
        
        <div className="flex items-center justify-between relative z-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="text-white bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/40 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors"
          >
            ‹
          </button>
          
          <div className="flex-1 flex justify-center">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative mx-1 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  index + 1 === currentPage
                    ? 'bg-[#0EA5E9] text-white shadow-[0_0_10px_#0EA5E9]'
                    : 'text-white bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/40'
                }`}
              >
                {index + 1 === currentPage && (
                  <div className="absolute inset-0 bg-[#0EA5E9] rounded-full animate-pulse opacity-50"></div>
                )}
                <span className="relative z-10">{index + 1}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="text-white bg-[#0EA5E9]/20 hover:bg-[#0EA5E9]/40 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
