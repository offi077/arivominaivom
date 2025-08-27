"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Sample essay data (replace with your actual data source)
const essays = [
  { id: 1, title: 'The Future of AI', slug: 'future-of-ai', excerpt: 'Exploring the advancements in artificial intelligence...' },
  { id: 2, title: 'Climate Change Solutions', slug: 'climate-change-solutions', excerpt: 'Innovative approaches to tackle global warming...' },
  { id: 3, title: 'வஹ்ன் எனும் கொடிய நோய்', slug: 'ethics-of-technology', excerpt: 'சமூகத்தில் அன்றாடம் குற்றங்களின், பிரச்சனைகளின் எண்ணிக்கை அதிகரிப்பதும், குடும்பங்கள் விவாகரத்துகளால் சீரழிவதும், வேலையிழப்புகள், இறப்புகள் பெருகிவருவதற்கும் முதற்காரணமாக மது மற்றும் போதை மருந்து உபயோகம்தான் காரணம் என ஆயவறிக்கைகள் கூறுகின்றன.' },
  { id: 4, title: 'Space Exploration', slug: 'space-exploration', excerpt: 'The next frontier for humanity...' },
];

const EssayCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return; // Skip if paused

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % essays.length);
    }, 5000); // Slide every 5 seconds

    // Cleanup interval on component unmount or when paused
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % essays.length);
    setIsPaused(true); // Pause auto-slide on manual interaction
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + essays.length) % essays.length);
    setIsPaused(true); // Pause auto-slide on manual interaction
    setTimeout(() => setIsPaused(false), 10000); // Resume after 10 seconds
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Featured Essays</h2>
        <div className="space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {essays.map((essay) => (
          <Link
            key={essay.id}
            href={`/essays/${essay.slug}`}
            className="min-w-full p-6 bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex-shrink-0">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{essay.title}</h3>
              <p className="text-gray-600 line-clamp-3">{essay.excerpt}</p>
              <span className="mt-4 inline-block text-blue-600 hover:underline">Read More</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EssayCarousel;