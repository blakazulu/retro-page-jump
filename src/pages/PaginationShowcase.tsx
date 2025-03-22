import React, { useState } from 'react';
import Pagination from '@/components/Pagination';
import RetroButton from '@/components/RetroButton';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layout } from 'lucide-react';
import { ClassicPagination } from '@/components/pagination/ClassicPagination';
import { MinimalistPagination } from '@/components/pagination/MinimalistPagination';
import { FuturisticPagination } from '@/components/pagination/FuturisticPagination';
import { HolographicPagination } from '@/components/pagination/HolographicPagination';
import { FantasyPagination } from '@/components/pagination/FantasyPagination';
import { SpacePagination } from '@/components/pagination/SpacePagination';
import { OceanicPagination } from '@/components/pagination/OceanicPagination';
import { SteampunkPagination } from '@/components/pagination/SteampunkPagination';
import { SketchedPagination } from '@/components/pagination/SketchedPagination';
import { GeometricPagination } from '@/components/pagination/GeometricPagination';
import { NaturePagination } from '@/components/pagination/NaturePagination';

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

export default PaginationShowcase;
