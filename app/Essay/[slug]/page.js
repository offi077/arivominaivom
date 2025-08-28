"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Essay metadata
const essays = [
  {
    id: "the-key-of-evils",
    title: "தீமைகளின் திறவுகோல்",
    imageCount: 20,
  },
  {
    id: "wahhn",
    title: "வஹ்ன் எனும் கொடிய நோய்",
    imageCount: 27,
  },
];

export default function EssayReader() {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const essay = essays.find((e) => e.id === slug);
  const totalPages = essay ? essay.imageCount : 20;
  const essayTitle = essay ? essay.title : "Essay";

  const imagePath = `/essays/${slug}/essay_${slug}_page${currentPage}.jpg`;

  // Navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setIsLoading(true);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Swipe
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNextPage(); // left swipe
    if (distance < -50) handlePrevPage(); // right swipe
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "ArrowRight") handleNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Floating Title Bar */}
      <div className="sticky top-0 w-full backdrop-blur-md bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] shadow-md py-3 px-4 z-20">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800">
          {essayTitle}
        </h2>
      </div>

      {/* Image Container */}
      <div
        className="w-full flex justify-center py-2 px-2"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full max-w-4xl aspect-[210/297] bg-gray-100 rounded-xl shadow-lg overflow-hidden">
          {/* Skeleton Loader */}
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-10" />
          )}

          <Image
            src={imagePath}
            alt={`Page ${currentPage}`}
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className={`object-contain transition-opacity duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            priority={currentPage === 1}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              alert("Image not found!");
            }}
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 flex items-center space-x-4 z-30">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-3 md:p-4 rounded-full shadow-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed`}
          aria-label="Previous Page"
        >
          <FaArrowLeft size={22} />
        </button>

        <span className="text-sm md:text-lg font-semibold bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
          {currentPage}/{totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-3 md:p-4 rounded-full shadow-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition disabled:opacity-40 disabled:cursor-not-allowed`}
          aria-label="Next Page"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
    </div>
  );
}
