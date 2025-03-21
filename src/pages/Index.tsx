
import React, { useState, useEffect } from 'react';
import Pagination from '@/components/Pagination';
import RetroButton from '@/components/RetroButton';
import { toast } from 'sonner';
import { Gamepad2, Trophy, Target, Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample data to paginate
const generateItems = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Game Item ${i + 1}`,
    description: `This is a high-tech gaming item #${i + 1}. Perfect for your next digital adventure!`,
    score: Math.floor(Math.random() * 1000)
  }));
};

const ITEMS_PER_PAGE = 5;
const TOTAL_ITEMS = 25;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState<Array<{ id: number; title: string; description: string; score: number }>>([]);
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
    
    toast.success(`Loaded Level ${page}`);
  };
  
  return (
    <div className="min-h-screen bg-[#0a0404] text-[#e0e0e0] flex flex-col items-center p-4 md:p-8 relative overflow-hidden">
      {/* Background hexagon grid pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z' fill='none' stroke='%23c22a30' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(194,42,48,0.02)_51%)] bg-[length:100%_4px] z-50"></div>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0404_90%)] z-10"></div>
      
      <header className="w-full max-w-4xl mb-10 mt-8 relative z-20">
        <div className="flex items-center justify-center space-x-4 mb-3">
          <Gamepad2 className="text-[#c22a30] h-8 w-8" />
          <h1 className="font-mono text-xl md:text-3xl text-[#c22a30] text-center tracking-widest uppercase font-bold">
            Gameverse Archives
          </h1>
          <Gamepad2 className="text-[#c22a30] h-8 w-8" />
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#c22a30] to-transparent mt-4 relative">
          <div className="absolute -top-2 left-0 w-full flex justify-between px-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-1 h-4 bg-[#ff3c44]"></div>
            ))}
          </div>
        </div>
        
        {/* Add showcase link */}
        <div className="flex justify-end mt-4">
          <Link 
            to="/pagination-showcase" 
            className="flex items-center text-[#c22a30] hover:text-[#ff3c44] transition-colors font-mono text-sm"
          >
            View All Pagination Styles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </header>
      
      <main className="w-full max-w-4xl flex-1 flex flex-col relative z-20">
        <div className="border-2 border-[#661519] p-6 mb-8 bg-black/80 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-mono text-lg text-[#c22a30] uppercase tracking-wider flex items-center">
              <Target className="mr-2 h-5 w-5" /> Game Inventory
            </h2>
            <div className="font-mono text-xs text-[#8E9196]">
              Displaying {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, TOTAL_ITEMS)} of {TOTAL_ITEMS}
            </div>
          </div>
          
          {loading ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-24 bg-[#12080a] animate-pulse relative">
                  {/* Loading pulse glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c22a30]/0 via-[#c22a30]/5 to-[#c22a30]/0 animate-[pulse_2s_infinite]"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {currentItems.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-[#661519] hover:border-[#c22a30] transition-all duration-300 bg-[#12080a] group relative overflow-hidden"
                >
                  {/* Diagonal stripes in corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-[#c22a30] text-white font-mono text-xs flex items-center justify-center w-[120%] h-6 top-3 right-[-20px]">
                      <Trophy className="w-3 h-3 mr-1" /> {item.score}
                    </div>
                  </div>
                  
                  <div className="p-4 flex flex-col md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="flex items-start">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-[#661519] group-hover:border-[#c22a30] text-[#c22a30] font-mono mr-3">
                          {item.id}
                        </div>
                        <h3 className="font-mono text-sm text-[#c22a30] group-hover:text-[#ff3c44] transition-colors flex-1">{item.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-[#8E9196] ml-11">{item.description}</p>
                    </div>
                    <div className="mt-3 md:mt-0 md:ml-4 flex justify-end">
                      <RetroButton
                        size="sm"
                        variant="neon-red"
                        onClick={() => toast.info(`Selected game item ${item.id}`)}
                        className="min-w-24"
                      >
                        SELECT
                      </RetroButton>
                    </div>
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
          GAMEVERSE ARCHIVES OS v3.7.2
        </p>
      </footer>
    </div>
  );
};

export default Index;
