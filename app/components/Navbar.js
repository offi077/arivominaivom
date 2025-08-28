"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#bfa14a] via-[#d8b75d] to-[#bfa14a] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-xl md:text-2xl font-extrabold tracking-wide py-4">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            அறிவோம் இணைவோம்
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium py-4">
          <li>
            <Link href="/leaderboard" className="hover:text-yellow-200 transition">
              கட்டுரை
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-200 transition">
              பற்றி
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-200 transition">
              தொடர்புக்கு
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-[#d8b75d] text-white font-medium text-center">
          <li>
            <Link href="/leaderboard" className="block py-3 hover:bg-[#bfa14a]">கட்டுரை</Link>
          </li>
          <li>
            <Link href="/about" className="block py-3 hover:bg-[#bfa14a]">பற்றி</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-3 hover:bg-[#bfa14a]">தொடர்புக்கு</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
