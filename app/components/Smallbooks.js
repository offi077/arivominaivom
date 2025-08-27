"use client";

import Link from "next/link";
import {
  FaBookOpen,
  FaFeatherAlt,
  FaHistory,
  FaBalanceScale,
  FaCrown,
  FaLightbulb,
} from "react-icons/fa";

export default function Smallbooks() {
  const books = [
    {
      id: "1",
      title: "நபி (ஸல்) அவர்களின் இறுதி ஹஜ் பேருரைகளும் படிப்பினைகளும்",
      icon: <FaFeatherAlt />,
      imageCount: 2,
    },
    {
      id: "2",
      title: "முன்மாதிரி வணிகர் அப்துர் ரஹ்மான் இப்னு அவ்ஃப் (ரலி)",
      icon: <FaBookOpen />,
      imageCount: 20,
    },
    {
      id: "3",
      title: "நபித்தோழர்கள் வரலாறு – பாகம் 1",
      icon: <FaHistory />,
      imageCount: 20,
    },
    {
      id: "4",
      title: "மனித நேய நோக்கில் வட்டி",
      icon: <FaBalanceScale />,
      imageCount: 20,
    },
    {
      id: "5",
      title: "இறைத்தூதரின் தலைமைத்துவ முன்மாதிரி",
      icon: <FaCrown />,
      imageCount: 20,
    },
    {
      id: "6",
      title: "அந்த ஒளி! அந்த வழி!",
      icon: <FaLightbulb />,
      imageCount: 20,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-600">
        📚 சிறு புத்தகங்கள்
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/reader/${book.id}`}
            className="flex items-center gap-4 p-4 sm:p-6 bg-gradient-to-r from-[#fdf8f3] via-[#f8e9c6] to-[#fdf8f3] border border-[#e5d3a5] rounded-xl shadow-md min-h-[120px] text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-yellow-500"
            aria-label={`Read ${book.title}`}
          >
            <div className="text-yellow-500 text-3xl sm:text-4xl shrink-0">
              {book.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Click to read more
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}