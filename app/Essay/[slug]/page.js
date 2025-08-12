// app/Essay/[slug]/page.js
"use client";

import { useState } from "react";
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
    imageCount: 20,
  },
];

export default function EssayReader() {
  const { slug } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Find the essay by slug
  const essay = essays.find((e) => e.id === slug);
  const totalPages = essay ? essay.imageCount : 20; // Fallback to 20 if essay not found
  const essayTitle = essay ? essay.title : "Essay";

  // Generate image path based on slug and current page
  const imagePath = `/essays/${slug}/essay_${slug}_page${currentPage}.jpg`;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-gray-600 mb-4">
        {essayTitle} - Page {currentPage}
      </h2>
      <div className="relative bg-white shadow-lg rounded-xl p-4">
        {/* Essay Image */}
        <div className="flex justify-center">
          <Image
            src={imagePath}
            alt={`Page ${currentPage}`}
            width={600}
            height={800}
            className="object-contain"
            priority={currentPage === 1} // Optimize loading for first page
            onError={() => alert("Image not found!")}
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${
              currentPage === 1 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"
            } text-white disabled:cursor-not-allowed`}
          >
            <FaArrowLeft size={24} />
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-300"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white disabled:cursor-not-allowed`}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}