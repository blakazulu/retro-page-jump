
import React, { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import RetroButton from '@/components/RetroButton';
import { toast } from 'sonner';

// Sample data to paginate
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Cyber Item ${i + 1}`,
    description: `This is a cyberpunk-styled item #${i + 1}. Perfect for showcasing our pagination system!`
  }));
};

const ITEMS_PER_PAGE = 5;
const TOTAL_ITEMS = 25;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Array<{ id: number; title: string; description: string }>>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    setLoading(true);
    const timer = setTimeout(() => {
      setItems(generateItems(TOTAL_ITEMS));
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    toast.success(`Navigated to page ${page}`);
  };
  
  return (
    <div className="min-h-screen bg-[#0a0404] text-[#e0e0e0] flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3MTExMyIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDQwIE0gMCAwIEwgNDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzQ3MTExMyIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(194,42,48,0.02)_51%)] bg-[length:100%_4px] z-50"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0404_90%)] z-10"></div>
      
      <header className="w-full max-w-4xl mb-10 mt-8 relative z-20">
        <h1 className="font-mono text-xl md:text-3xl text-[#c22a30] text-center tracking-widest uppercase font-bold">
          Neo Tokyo Pagination
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#c22a30] via-[#ff3c44] to-[#c22a30] mt-4 relative">
          <div className="absolute -top-2 left-0 w-full flex justify-between px-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-[#ff3c44]"></div>
            ))}
          </div>
        </div>
      </header>
      
      <main className="w-full max-w-4xl flex-1 flex flex-col relative z-20">
        <div className="border-2 border-[#661519] p-6 mb-8 bg-black/80 backdrop-blur-sm">
          <h2 className="font-mono text-lg text-[#c22a30] mb-6 uppercase tracking-wider">Database Records</h2>
          
          {loading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-20 bg-[#12080a] animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-[#661519] p-4 hover:border-[#c22a30] hover:shadow-[0_0_12px_rgba(194,42,48,0.3)] transition-all duration-300 bg-[#12080a] group"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-mono text-sm text-[#c22a30] group-hover:text-[#ff3c44] transition-colors">{item.title}</h3>
                    <span className="font-mono text-xs text-[#ff3c44]">ID: {item.id}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#8E9196]">{item.description}</p>
                  <div className="mt-3 flex justify-end">
                    <RetroButton
                      size="sm"
                      variant="neon-red"
                      onClick={() => toast.info(`Selected item ${item.id}`)}
                    >
                      SELECT
                    </RetroButton>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex justify-center mb-10">
          <Pagination
            totalPages={totalPages}
            initialPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>
      
      <footer className="w-full max-w-4xl mt-auto border-t-2 border-[#661519] pt-6 pb-4 relative z-20">
        <p className="font-mono text-xs text-center text-[#c22a30]">
          NEO TOKYO PAGINATION SYSTEM v2.0
        </p>
      </footer>
    </div>
  );
};

export default Index;
