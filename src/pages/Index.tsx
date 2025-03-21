
import React, { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import RetroButton from '@/components/RetroButton';
import { toast } from 'sonner';

// Sample data to paginate
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Retro Item ${i + 1}`,
    description: `This is a retro-styled item #${i + 1}. Perfect for showcasing our pagination!`
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
    <div className="min-h-screen bg-retro-background text-retro-text flex flex-col items-center p-4 md:p-8 scanline">
      <header className="w-full max-w-4xl mb-10 mt-8">
        <h1 className="retro-text text-xl md:text-3xl text-retro-primary text-center">RETRO PAGINATION</h1>
        <div className="w-full h-1 bg-retro-primary mt-4 relative">
          <div className="absolute -top-2 left-0 w-full flex justify-between px-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-retro-primary"></div>
            ))}
          </div>
        </div>
      </header>
      
      <main className="w-full max-w-4xl flex-1 flex flex-col">
        <div className="border-2 border-retro-primary p-6 mb-8 bg-retro-muted/20 backdrop-blur-sm">
          <h2 className="retro-text text-lg text-retro-accent mb-6">DATABASE RECORDS</h2>
          
          {loading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-20 bg-retro-muted/30 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-retro-primary p-4 hover:bg-retro-muted/30 transition-all duration-200"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="retro-text text-sm text-retro-secondary">{item.title}</h3>
                    <span className="retro-text text-xs text-retro-accent">ID: {item.id}</span>
                  </div>
                  <p className="mt-3 text-sm">{item.description}</p>
                  <div className="mt-3 flex justify-end">
                    <RetroButton
                      size="sm"
                      variant="accent"
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
      
      <footer className="w-full max-w-4xl mt-auto border-t-2 border-retro-primary pt-6 pb-4">
        <p className="retro-text text-xs text-center text-retro-primary">
          RETRO PAGINATION SYSTEM v1.0
        </p>
      </footer>
    </div>
  );
};

export default Index;
