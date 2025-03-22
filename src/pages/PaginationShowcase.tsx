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
        <div className="grid gap-8">
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

          {/* Holographic Interface */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Holographic Interface
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <HolographicPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Medieval/Fantasy Scroll */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Medieval/Fantasy Scroll
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <FantasyPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Space Exploration */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Space Exploration
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <SpacePagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Underwater/Oceanic */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Underwater/Oceanic
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <OceanicPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Steampunk Mechanical */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Steampunk Mechanical
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <SteampunkPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Hand-drawn/Sketched */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Hand-drawn/Sketched
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <SketchedPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Geometric Minimalist */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Geometric Minimalist
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <GeometricPagination
                totalPages={totalPages}
                initialPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          {/* Nature/Organic */}
          <section className="border-2 border-[#661519] p-8 bg-black/80 backdrop-blur-sm">
            <h2 className="font-mono text-lg text-[#c22a30] mb-6 flex items-center">
              <Layout className="mr-2 h-5 w-5" /> 
              Nature/Organic
            </h2>
            <div className="flex justify-center p-4 bg-[#0a0404]">
              <NaturePagination
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
          PAGINATION VARIATIONS v2.0
        </p>
      </footer>
    </div>
  );
};

// Keep the existing ClassicPagination, MinimalistPagination, and FuturisticPagination components

// Classical & Existing Pagination Components
// ... keep existing code (ClassicPagination, MinimalistPagination, and FuturisticPagination components)

// Holographic Interface Style Component
const HolographicPagination = ({
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
    <div className="flex items-center space-x-4 relative">
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

// Medieval/Fantasy Scroll System
const FantasyPagination = ({
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
    <div className="flex flex-col items-center">
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

// Space Exploration Theme
const SpacePagination = ({
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
    <div className="rounded-2xl bg-[#222639] p-4 border border-[#403E43] shadow-[0_0_15px_rgba(0,0,0,0.3)] relative overflow-hidden">
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

// Underwater/Oceanic Design
const OceanicPagination = ({
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

// Steampunk Mechanical System
const SteampunkPagination = ({
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
    <div className="bg-[#221F26] p-5 rounded-md border-2 border-[#888] shadow-lg relative">
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

// Hand-drawn/Sketched Style
const SketchedPagination = ({
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

  // Function to create "sketchy" path for SVG
  const getSketchyPath = (x: number, y: number, width: number, height: number): string => {
    // Slight randomization to create hand-drawn effect
    const jitter = () => (Math.random() * 2 - 1) * 0.5;
    
    // Create slightly wobbly rectangle path
    return `
      M${x + jitter()},${y + jitter()} 
      L${x + width + jitter()},${y + jitter()} 
      L${x + width + jitter()},${y + height + jitter()} 
      L${x + jitter()},${y + height + jitter()} 
      Z
    `;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#f3f3f3] p-5 border-2 border-[#333] shadow-md relative">
        {/* Paper texture effect */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L100 0 L100 100 L0 100 Z' fill='none' stroke='%23000' stroke-width='0.5' stroke-dasharray='2,2'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        ></div>
        
        <div className="flex items-center space-x-2 relative z-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 border-2 border-[#333] flex items-center justify-center bg-white disabled:opacity-50 transition-all group"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <span className="font-serif text-lg">←</span>
            {/* Hand-drawn hover effect */}
            <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 32 32">
              <path d={getSketchyPath(2, 2, 28, 28)} fill="none" stroke="#333" strokeWidth="0.5" />
            </svg>
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`relative w-8 h-8 flex items-center justify-center border-2 transition-all ${
                  index + 1 === currentPage
                    ? 'bg-[#333] text-white border-[#333] font-bold'
                    : 'bg-white text-[#333] border-[#333] hover:bg-[#eee]'
                }`}
                style={{ transform: `rotate(${(Math.random() * 2 - 1) * 2}deg)` }}
              >
                <span className="font-serif">{index + 1}</span>
              </button>
            ))}
          </div>
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 border-2 border-[#333] flex items-center justify-center bg-white disabled:opacity-50 transition-all group"
            style={{ transform: 'rotate(1deg)' }}
          >
            <span className="font-serif text-lg">→</span>
            {/* Hand-drawn hover effect */}
            <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 32 32">
              <path d={getSketchyPath(2, 2, 28, 28)} fill="none" stroke="#333" strokeWidth="0.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Geometric Minimalist Style
const GeometricPagination = ({
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
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-1 bg-[#aaadb0] disabled:opacity-30 transition-colors"
          aria-label="Previous page"
        ></button>
        
        <div className="flex items-center">
          {Array.from({ length: totalPages }).map((_, index) => {
            // Generate different geometric shapes
            const shapes = [
              // Circle
              <div key={index} className={`w-6 h-6 rounded-full border transition-all ${
                index + 1 === currentPage
                  ? 'border-2 border-[#aaadb0] bg-[#aaadb0]'
                  : 'border border-[#ccc] hover:border-[#aaadb0]'
              }`}></div>,
              
              // Square
              <div key={index} className={`w-5 h-5 transition-all ${
                index + 1 === currentPage
                  ? 'border-2 border-[#aaadb0] bg-[#aaadb0]'
                  : 'border border-[#ccc] hover:border-[#aaadb0]'
              }`}></div>,
              
              // Triangle (using SVG)
              <svg key={index} width="24" height="24" viewBox="0 0 24 24" className="transition-colors">
                <polygon 
                  points="12,4 20,20 4,20" 
                  fill={index + 1 === currentPage ? '#aaadb0' : 'none'} 
                  stroke={index + 1 === currentPage ? '#aaadb0' : '#ccc'} 
                  strokeWidth={index + 1 === currentPage ? '2' : '1'} 
                  className="hover:stroke-[#aaadb0]"
                />
              </svg>
            ];
            
            // Pick a shape based on index
            const shape = shapes[index % shapes.length];
            
            return (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className="mx-1 p-1 flex items-center justify-center"
                aria-label={`Page ${index + 1}`}
              >
                {shape}
              </button>
            );
          })}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-1 bg-[#aaadb0] disabled:opacity-30 transition-colors"
          aria-label="Next page"
        ></button>
      </div>
      
      <div className="mt-4 text-[#aaadb0] text-xs">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
};

// Nature/Organic Style
const NaturePagination = ({
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

  // Leaf shape SVG path generator
  const getLeafPath = (index: number): string => {
    // Different leaf shapes
    const leafShapes = [
      "M2,10 C2,5 5,2 10,2 C15,2 18,5 18,10 C18,15 15,18 10,18 C5,18 2,15 2,10 Z", // Round leaf
      "M2,10 C2,5 7,2 10,2 C13,2 18,5 18,10 C18,15 13,18 10,18 C7,18 2,15 2,10 Z", // Oval leaf
      "M2,10 Q2,2 10,2 Q18,2 18,10 Q18,18 10,18 Q2,18 2,10 Z", // Square-ish leaf
    ];
    
    return leafShapes[index % leafShapes.length];
  };

  return (
    <div className="bg-[#F2FCE2] rounded-lg p-4 border border-[#4A6741]/50 shadow-md">
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors text-[#4A6741] disabled:text-[#4A6741]/30"
        >
          ‹
        </button>
        
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className="relative w-10 h-10 flex items-center justify-center"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" className={`transition-all ${
                index + 1 === currentPage
                  ? 'text-[#4A6741] scale-125'
                  : 'text-[#4A6741]/40 hover:text-[#4A6741]/60'
              }`}>
                <path 
                  d={getLeafPath(index)}
                  fill="currentColor"
                  transform={`rotate(${index * 45}, 10, 10)`}
                />
              </svg>
            </button>
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50 transition-colors text-[#4A6741] disabled:text-[#4A6741]/30"
        >
          ›
        </button>
      </div>
      
      {/* Vine progress indicator */}
      <div className="mt-4 w-full bg-[#E9F5D8] h-2 rounded-full overflow-hidden relative">
        <div 
          className="h-full bg-[#4A6741]/30 transition-all"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        ></div>
        {/* Vine decoration */}
        <div 
          className="absolute top-0 h-full"
          style={{ 
            width: `${(currentPage / totalPages) * 100}%`, 
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"8\" viewBox=\"0 0 100 8\"><path d=\"M0,4 C20,0 30,8 50,4 C70,0 80,8 100,4\" fill=\"none\" stroke=\"%234A6741\" stroke-width=\"1\" stroke-opacity=\"0.3\"/></svg>')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "100px 8px"
          }}
        ></div>
      </div>
    </div>
  );
};

export default PaginationShowcase;
