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
    {
      id: "essay-3",
      title: "மூன்றாவது கட்டுரை",
      description: "மிகுந்த பயனுள்ள அறிவாற்றல் கட்டுரை.",
      coverImage: "/essays/essay-3/cover.jpg",
      imageCount: 15,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        if (!isPaused) {
          setCurrentSlide((prev) => (prev + 1) % Math.ceil(essays.length / 2));
        }
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(autoScrollRef.current);
  }, [isPaused, essays.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(essays.length / 2)) % Math.ceil(essays.length / 2));
    setIsPaused(true);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(essays.length / 2));
    setIsPaused(true);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsPaused(true);
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
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-${currentSlide * 100}%);
        }
        .carousel-slide {
          flex: 0 0 50%; /* 👈 Two cards per view */
          display: flex;
          justify-content: center;
          padding: 10px;
        }
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }
        .nav-button:hover {
          background: linear-gradient(135deg, #d8b75d, #bfa14a);
          transform: translateY(-50%) scale(1.1);
        }
        .dots-container {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .dot.active {
          width: 20px;
          background: #bfa14a;
        }
      `}</style>

      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-tight">
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
            <div key={essay.id} className="carousel-slide">
              <div className="flex flex-col items-center bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md p-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                {/* Image */}
                <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
                  <Image
                    src={essay.coverImage}
                    alt={`${essay.title} cover image`}
                    className="rounded-lg shadow-md object-cover hover:scale-[1.05] transition-transform duration-500"
                    width={250}   // 👈 Reduced size
                    height={320}  // 👈 Reduced size
                    priority={index === 0}
                  />
                </Link>

                {/* Text */}
                <div className="mt-4 text-center">
                  <Link href={`/Essay/${essay.id}`} aria-label={`Read ${essay.title}`}>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-yellow-600 transition-colors duration-300">
                      {essay.title}
                    </h3>
                  </Link>
                  <p className="text-gray-700 text-sm leading-relaxed italic">
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
          className="nav-button left-3"
          aria-label="Previous Slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={handleNextSlide}
          className="nav-button right-3"
          aria-label="Next Slide"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Navigation Dots */}
        <div className="dots-container">
          {Array.from({ length: Math.ceil(essays.length / 2) }).map((_, index) => (
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
