"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Essaymain() {
  const essays = [
    {
      id: "the-key-of-evils",
      title: "தீமைகளின் திறவுகோல்",
      description:
        "சமூகத்தில் அன்றாடம் குற்றங்களின், பிரச்சனைகளின் எண்ணிக்கை அதிகரிப்பதும், குடும்பங்கள் விவாகரத்துகளால் சீரழிவதும், வேலையிழப்புகள், இறப்புகள் பெருகிவருவதற்கும் முதற்காரணமாக மது மற்றும் போதை மருந்து உபயோகம்தான் காரணம் என ஆய்வறிக்கைகள் கூறுகின்றன.",
      coverImage: "/essays/the-key-of-evils/cover.jpg",
      imageCount: 20,
    },
    {
      id: "wahhn",
      title: "வஹ்ன் எனும் கொடிய நோய்",
      description:
        "சமூகத்தில் அன்றாடம் குற்றங்களின், பிரச்சனைகளின் எண்ணிக்கை அதிகரிப்பதும், குடும்பங்கள் விவாகரத்துகளால் சீரழிவதும், வேலையிழப்புகள், இறப்புகள் பெருகிவருவதற்கும் முதற்காரணமாக மது மற்றும் போதை மருந்து உபயோகம்தான் காரணம் என ஆயவறிக்கைகள் கூறுகின்றன.",
      coverImage: "/essays/wahhn/cover.jpg",
      imageCount: 27,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide((prev) => (prev + 1) % essays.length);
        }
      }, 4000); // 4 seconds per slide
    };

    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [isPaused, essays.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + essays.length) % essays.length);
    setIsPaused(true); // Pause auto-scroll on manual interaction
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % essays.length);
    setIsPaused(true); // Pause auto-scroll on manual interaction
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true); // Pause auto-scroll on manual interaction
  };

  return (
    <section
      className="relative max-w-7xl mx-auto py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
          transform: translateX(-${currentSlide * 100}%);
        }
        .carousel-slide {
          flex: 0 0 100%;
          min-width: 100%;
          display: flex;
          justify-content: center;
        }
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .nav-button:hover {
          background: #B76E79;
        }
        .nav-button:disabled {
          background: #6b7280;
          cursor: not-allowed;
        }
        .dots-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }
        .dot {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.2s;
        }
        .dot.active {
          background: #2563eb;
        }
        .dot:hover {
          background: #1e40af;
        }
      `}</style>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 tracking-tight">
        📚 ஆய்வு கட்டுரைகள்
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        உண்மையான அறிவையும், ஆழ்ந்த புரிதலையும் நாடுபவர்களுக்கு பயனளிக்கும் வகையில்
        பல்வேறு இஸ்லாமிய தலைப்புகளை ஆழமாக ஆய்வு செய்து எழுதப்பட்ட கட்டுரைகளின்
        தொகுப்பு.
      </p>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {essays.map((essay, index) => (
            <div
              key={essay.id}
              className="carousel-slide"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
                {/* Image */}
                <div className="flex justify-center">
                  <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
                    <Image
                      src={essay.coverImage}
                      alt={`${essay.title} cover image`}
                      className="rounded-xl shadow-lg object-cover hover:scale-[1.03] transition-transform duration-300"
                      width={350}
                      height={450}
                      priority={index === 0}
                    />
                  </Link>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center text-center md:text-left">
                  <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-yellow-600 transition-colors duration-200">
                      {essay.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-base leading-relaxed italic">
                    {essay.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className="nav-button left-1"
          aria-label="Previous Slide"
        >
          
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNextSlide}
          disabled={currentSlide === essays.length - 1}
          className="nav-button right-1"
          aria-label="Next Slide"
        >
          
          <FaChevronRight size={20} />
        </button>

        {/* Navigation Dots */}
        <div className="dots-container">
          {essays.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}