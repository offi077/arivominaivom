"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Essay metadata (ideally, this should be fetched from a shared source or API)
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

  // Find the essay by slug
  const essay = essays.find((e) => e.id === slug);
  const totalPages = essay ? essay.imageCount : 20;
  const essayTitle = essay ? essay.title : "Essay";

  // Generate image path
  const imagePath = `/essays/${slug}/essay_${slug}_page${currentPage}.jpg`;

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setIsLoading(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setIsLoading(true);
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNextPage();
    if (isRightSwipe) handlePrevPage();

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrevPage();
      if (e.key === "ArrowRight") handleNextPage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage]);

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Title Bar */}
      <div className="w-full shadow-md py-4 px-6 top-13 z-10">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          {essayTitle} - Page {currentPage}/{totalPages}
        </h2>
      </div>

      {/* Image Carousel */}
      <div
        className="w-full max-w-[210mm] h-[297mm] relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Image */}
        <div
          className={`w-full h-full transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={imagePath}
            alt={`Page ${currentPage}`}
            layout="fill"
            objectFit="contain"
            priority={currentPage === 1}
            onLoadingComplete={handleImageLoad}
            onError={() => {
              setIsLoading(false);
              alert("Image not found!");
            }}
          />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-4 flex items-center space-x-4 z-10">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`p-3 rounded-full bg-blue-600 text-white transition-all ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          aria-label="Previous Page"
        >
          <FaArrowLeft size={24} />
        </button>
        <span className="text-lg font-semibold bg-white px-4 py-2 rounded shadow">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`p-3 rounded-full bg-blue-600 text-white transition-all ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
          aria-label="Next Page"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}