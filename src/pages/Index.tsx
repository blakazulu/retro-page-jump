
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
    <div className="min-h-screen bg-[#121212] text-[#e0e0e0] flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-4xl mb-10 mt-8">
        <h1 className="font-mono text-xl md:text-3xl text-[#8B5CF6] text-center tracking-wider uppercase">
          Cyberpunk Pagination
        </h1>
        <div className="w-full h-[2px] bg-gradient-to-r from-[#D946EF] via-[#8B5CF6] to-[#0EA5E9] mt-4 relative">
          <div className="absolute -top-2 left-0 w-full flex justify-between px-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-[#F97316]"></div>
            ))}
          </div>
        </div>
      </header>
      
      <main className="w-full max-w-4xl flex-1 flex flex-col">
        <div className="border border-[#403E43] p-6 mb-8 bg-[#1A1F2C] backdrop-blur-sm">
          <h2 className="font-mono text-lg text-[#D946EF] mb-6 uppercase tracking-wider">Database Records</h2>
          
          {loading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-20 bg-[#222222]/50 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-[#403E43] p-4 hover:border-[#8B5CF6] hover:shadow-[0_0_8px_rgba(139,92,246,0.3)] transition-all duration-200 bg-black/30"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-mono text-sm text-[#0EA5E9]">{item.title}</h3>
                    <span className="font-mono text-xs text-[#F97316]">ID: {item.id}</span>
                  </div>
                  <p className="mt-3 text-sm text-[#8E9196]">{item.description}</p>
                  <div className="mt-3 flex justify-end">
                    <RetroButton
                      size="sm"
                      variant="cyberpunk"
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
      
      <footer className="w-full max-w-4xl mt-auto border-t border-[#403E43] pt-6 pb-4">
        <p className="font-mono text-xs text-center text-[#8B5CF6]">
          CYBERPUNK PAGINATION SYSTEM v1.0
        </p>
      </footer>
    </div>
  );
};

export default Index;
