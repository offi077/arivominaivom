"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BookReader() {
  const { bookId } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20; // Assuming each book has 20 images

  // Generate image path based on bookId and current page
  const imagePath = `/books/${bookId}/book${bookId}_page${currentPage}.jpg`;

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
      <h2 className="text-2xl font-bold text-center mb-4">
        Book {bookId} - Page {currentPage}
      </h2>
      <div className="relative bg-white shadow-lg rounded-xl p-4">
        {/* Book Image */}
        <div className="flex justify-center">
          <Image
            src={imagePath}
            alt={`Page ${currentPage}`}
            width={1500}
            height={850}
            className="object-contain"
            priority={currentPage === 1} // Optimize loading for first page
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