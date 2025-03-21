
import React, { useState } from 'react';
import Pagination from '@/components/Pagination';
import RetroButton from '@/components/RetroButton';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layout } from 'lucide-react';

const PaginationShowcase = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0404] to-[#120809] text-white">
      <header className="container mx-auto py-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center text-[#c22a30] hover:text-[#ff3c44] transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          <span className="font-mono text-sm">Back to Main</span>
        </Link>
        <h1 className="font-mono text-xl text-center text-[#c22a30]">PAGINATION SHOWCASE</h1>
        <div className="w-24"></div> {/* Spacer for balance */}
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-16">
          {/* Current Retrowave Style */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Current Retrowave Style
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <Pagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Classic Style */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Classic Style
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <ClassicPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Minimalist Style */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Minimalist Style
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <MinimalistPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Futuristic Style */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Futuristic Style
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <FuturisticPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>
        </div>
      </main>

      <footer className="container mx-auto mt-auto border-t-2 border-[#661519] py-6">
        <p className="font-mono text-xs text-center text-[#c22a30]">
          PAGINATION VARIATIONS v1.0
        </p>
      </footer>
    </div>
  );
};

// Classic Style Component
const ClassicPagination = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}: {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
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
        <button
          key={i}
          className={`w-10 h-10 flex items-center justify-center transition-colors ${
            i === currentPage 
              ? 'bg-[#c22a30] text-white' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } rounded-md mx-1`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="bg-gray-800 text-gray-300 hover:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md disabled:opacity-50 disabled:hover:bg-gray-800"
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
      >
        ⟪
      </button>
      <button
        className="bg-gray-800 text-gray-300 hover:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md disabled:opacity-50 disabled:hover:bg-gray-800"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ⟨
      </button>
      
      <div className="flex">{renderPageNumbers()}</div>
      
      <button
        className="bg-gray-800 text-gray-300 hover:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md disabled:opacity-50 disabled:hover:bg-gray-800"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        ⟩
      </button>
      <button
        className="bg-gray-800 text-gray-300 hover:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-md disabled:opacity-50 disabled:hover:bg-gray-800"
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        ⟫
      </button>
    </div>
  );
};

// Minimalist Style Component
const MinimalistPagination = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}: {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-1">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index + 1 === currentPage 
                ? 'bg-[#c22a30]' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            onClick={() => handlePageChange(index + 1)}
            aria-label={`Page ${index + 1}`}
          />
        ))}
      </div>
      <div className="text-sm text-gray-400">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
};

// Futuristic Style Component
const FuturisticPagination = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}: {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    setCurrentPage(newPage);
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <div
          key={i}
          className={`relative cursor-pointer ${i === currentPage ? 'scale-110' : 'opacity-70 hover:opacity-100'} transition-all duration-300`}
          onClick={() => handlePageChange(i)}
        >
          <svg height="30" width="30" viewBox="0 0 30 30">
            <polygon 
              points="15,2 28,15 15,28 2,15" 
              fill={i === currentPage ? '#c22a30' : 'transparent'} 
              stroke={i === currentPage ? '#ff3c44' : '#661519'} 
              strokeWidth="1"
              className={i === currentPage ? 'animate-pulse' : ''}
            />
            <text 
              x="15" 
              y="19" 
              textAnchor="middle" 
              fill={i === currentPage ? 'white' : '#8E9196'} 
              fontSize="10"
              fontFamily="monospace"
            >
              {i}
            </text>
          </svg>
        </div>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-full max-w-md h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#661519] to-[#c22a30] transition-all duration-300"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          className="bg-transparent border border-[#661519] text-[#c22a30] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#12080a] transition-colors"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀
        </button>
        
        <div className="flex space-x-1">
          {renderPageNumbers()}
        </div>
        
        <button
          className="bg-transparent border border-[#661519] text-[#c22a30] w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#12080a] transition-colors"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default PaginationShowcase;
